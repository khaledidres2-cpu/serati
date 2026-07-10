// =====================================================================
//  auth.js — Accounts + cloud saving for Seerati, powered by Supabase
// =====================================================================
const SUPABASE_URL = "https://jdxvyayrwxldfvifmhbo.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkeHZ5YXlyd3hsZGZ2aWZtaGJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxMjI1ODcsImV4cCI6MjA5NzY5ODU4N30.g6DnvRAtb7dpmozYqjVIiKOorhTmAyrUaDu5oPqNNlM";

const CONFIGURED =
  SUPABASE_URL.startsWith("http") && SUPABASE_ANON_KEY.length > 20;

let sb = null;
let currentUser = null;
let authMode = "signin";

// ---- small UI helpers ----
const A = (s) => document.querySelector(s);
function setStatus(msg, color){
  const el = A("#authStatus");
  if(!el) return;
  el.textContent = msg || "";
  el.style.color = color || "";
}
function setCloudBadge(text, color){
  const el = A("#cloudBadge");
  if(!el) return;
  el.textContent = text || "";
  el.style.color = color || "";
}
function openAuthModal(reasonKey){
  const reasonEl = A("#authReason");
  if(reasonEl){
    const lang = (typeof LANG !== "undefined") ? LANG : "ar";
    if(reasonKey && I18N[lang][reasonKey]){
      reasonEl.textContent = I18N[lang][reasonKey];
      reasonEl.classList.remove("hidden");
    } else {
      reasonEl.classList.add("hidden");
    }
  }
  A("#authModal").classList.remove("hidden");
  A("#authModal").classList.add("flex");
  renderAuthMode();
}
function closeAuthModal(){
  A("#authModal").classList.add("hidden");
  A("#authModal").classList.remove("flex");
  setStatus("");
}
// Exposed so app.js (download gate) can open the login with a reason line.
window.seeratiOpenAuth = openAuthModal;
window.seeratiIsSignedIn = () => !!currentUser;
function renderAuthMode(){
  const lang = (typeof LANG !== "undefined") ? LANG : "ar";
  const dict = I18N[lang];
  A("#authSubmit").textContent = authMode === "signin" ? dict.signIn : dict.signUp;
  A("#authSwitch").textContent = authMode === "signin" ? dict.noAccount : dict.haveAccount;
}

// ---- reflect signed-in / guest state in the header ----
function refreshAccountUI(){
  const lang = (typeof LANG !== "undefined") ? LANG : "ar";
  const dict = I18N[lang];
  const btn = A("#accountBtn");
  if(currentUser){
    btn.textContent = "👤 " + (currentUser.email || dict.account);
    btn.title = dict.signOut;
    setCloudBadge(dict.savedCloud, "#059669");
  } else {
    btn.textContent = "👤 " + dict.signIn;
    btn.title = dict.signIn;
    setCloudBadge(CONFIGURED ? dict.guestNote : "", "#6b7280");
  }
}

// ---- cloud read / write ----
async function cloudLoad(){
  if(!sb || !currentUser) return null;
  const { data, error } = await sb
    .from("resumes")
    .select("data")
    .eq("user_id", currentUser.id)
    .maybeSingle();
  if(error){ console.error("cloudLoad:", error); return null; }
  return data ? data.data : null;
}

let saveTimer = null;
async function cloudWrite(payload){
  if(!sb || !currentUser) return;
  setCloudBadge(I18N[(typeof LANG!=="undefined")?LANG:"ar"].savingCloud, "#d97706");
  const { error } = await sb
    .from("resumes")
    .upsert({ user_id: currentUser.id, data: payload, updated_at: new Date().toISOString() },
            { onConflict: "user_id" });
  const dict = I18N[(typeof LANG!=="undefined")?LANG:"ar"];
  if(error){ console.error("cloudWrite:", error); setCloudBadge("⚠︎", "#dc2626"); }
  else setCloudBadge(dict.savedCloud, "#059669");
}

window.seeratiCloudSave = function(payload){
  if(!sb || !currentUser) return;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(()=> cloudWrite(payload), 1200);
};

// ---- session lifecycle ----
function showWelcomeBack(isNew){
  const dict = I18N[(typeof LANG!=="undefined")?LANG:"ar"];
  const name = currentUser && currentUser.email ? currentUser.email.split("@")[0] : "";
  const titleEl = A("#welcomeBackTitle");
  const subEl = A("#welcomeBack") && A("#welcomeBack").querySelector("[data-i18n='wbSub']");
  if(titleEl) titleEl.textContent = isNew ? dict.wbNew : dict.wbTitle(name);
  if(subEl) subEl.textContent = isNew ? dict.wbNewSub : dict.wbSub;
  const m = A("#welcomeBack");
  if(m){ m.classList.remove("hidden"); m.classList.add("flex"); }
}
async function onSignedIn(user, opts){
  currentUser = user;
  refreshAccountUI();
  const cloud = await cloudLoad();
  if(cloud){
    window.seeratiApplyData(cloud);
  } else {
    await cloudWrite(window.seeratiCurrentData());
  }
  if(opts && opts.interactive) showWelcomeBack(!!opts.isNew);
}
function onSignedOut(){
  currentUser = null;
  refreshAccountUI();
}

async function handleSubmit(){
  const email = A("#authEmail").value.trim();
  const pass  = A("#authPass").value;
  const dict = I18N[(typeof LANG!=="undefined")?LANG:"ar"];
  if(!email || !pass){ setStatus(dict.authFillBoth, "#dc2626"); return; }
  setStatus("…", "#6b7280");
  try{
    if(authMode === "signup"){
      const { data, error } = await sb.auth.signUp({ email, password: pass });
      if(error){ setStatus(error.message, "#dc2626"); return; }
      if(!data.session){ setStatus(dict.checkEmail, "#059669"); return; }
      await onSignedIn(data.user, { interactive:true, isNew:true });
      closeAuthModal();
    } else {
      const { data, error } = await sb.auth.signInWithPassword({ email, password: pass });
      if(error){ setStatus(error.message, "#dc2626"); return; }
      await onSignedIn(data.user, { interactive:true, isNew:false });
      closeAuthModal();
    }
  }catch(err){
    setStatus(String(err), "#dc2626");
  }
}

// ---- wire up the buttons ----
function wireAuthUI(){
  A("#accountBtn").addEventListener("click", async ()=>{
    if(currentUser){
      if(sb) await sb.auth.signOut();
      onSignedOut();
    } else {
      openAuthModal();
    }
  });
  A("#authSubmit").addEventListener("click", handleSubmit);
  A("#authSwitch").addEventListener("click", ()=>{
    authMode = authMode === "signin" ? "signup" : "signin";
    renderAuthMode(); setStatus("");
  });
  A("#authClose").addEventListener("click", closeAuthModal);
  A("#authPass").addEventListener("keydown", (e)=>{ if(e.key==="Enter") handleSubmit(); });
  const wbBtn = A("#welcomeBackBtn");
  if(wbBtn) wbBtn.addEventListener("click", ()=>{
    const m = A("#welcomeBack");
    if(m){ m.classList.add("hidden"); m.classList.remove("flex"); }
  });
}

// ---- init ----
(async function initAuth(){
  wireAuthUI();
  if(!CONFIGURED){
    refreshAccountUI();
    return;
  }
  sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const { data } = await sb.auth.getSession();
  if(data && data.session){
    await onSignedIn(data.session.user);
  } else {
    refreshAccountUI();
  }

  sb.auth.onAuthStateChange((event, session)=>{
    if(event === "SIGNED_OUT") onSignedOut();
  });
})();
