// =====================================================================
//  auth.js — Accounts + cloud saving for Seerati, powered by Supabase
// ---------------------------------------------------------------------
//  HOW TO CONFIGURE (do this once after creating your Supabase project):
//  1. Go to your Supabase project → Settings → API.
//  2. Copy the "Project URL" and the "anon public" key.
//  3. Paste them into SUPABASE_URL and SUPABASE_ANON_KEY below.
//
//  The anon key is SAFE to put in this frontend file — it is designed to
//  be public. Security is enforced by Row Level Security in the database
//  (see the SQL in the setup guide). NEVER put the "service_role" key here.
// =====================================================================
const SUPABASE_URL = "PUT_YOUR_SUPABASE_URL_HERE";
const SUPABASE_ANON_KEY = "PUT_YOUR_SUPABASE_ANON_KEY_HERE";

const CONFIGURED =
  SUPABASE_URL.startsWith("http") && SUPABASE_ANON_KEY.length > 20;

let sb = null;            // Supabase client
let currentUser = null;   // signed-in user (or null = guest)
let authMode = "signin";  // "signin" | "signup"

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
function openAuthModal(){
  A("#authModal").classList.remove("hidden");
  A("#authModal").classList.add("flex");
  renderAuthMode();
}
function closeAuthModal(){
  A("#authModal").classList.add("hidden");
  A("#authModal").classList.remove("flex");
  setStatus("");
}
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
// Table "resumes": one row per user → { user_id (uuid, PK), data (jsonb), updated_at }
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

// Exposed to app.js — called by saveState(). Debounced so typing doesn't spam
// the database; we only write ~1.2s after the user stops editing.
window.seeratiCloudSave = function(payload){
  if(!sb || !currentUser) return;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(()=> cloudWrite(payload), 1200);
};

// ---- session lifecycle ----
async function onSignedIn(user){
  currentUser = user;
  refreshAccountUI();
  // First login on this device: if the cloud already has a resume, load it.
  // Otherwise push whatever is currently on screen up to the cloud so the
  // user keeps the work they did as a guest.
  const cloud = await cloudLoad();
  if(cloud){
    window.seeratiApplyData(cloud);
  } else {
    await cloudWrite(window.seeratiCurrentData());
  }
}
function onSignedOut(){
  currentUser = null;
  refreshAccountUI();
}

async function handleSubmit(){
  const email = A("#authEmail").value.trim();
  const pass  = A("#authPass").value;
  const dict = I18N[(typeof LANG!=="undefined")?LANG:"ar"];
  if(!email || !pass){ setStatus("✱", "#dc2626"); return; }
  setStatus("…", "#6b7280");
  try{
    if(authMode === "signup"){
      const { data, error } = await sb.auth.signUp({ email, password: pass });
      if(error){ setStatus(error.message, "#dc2626"); return; }
      // If email confirmation is ON, there is no session yet.
      if(!data.session){ setStatus(dict.checkEmail, "#059669"); return; }
      await onSignedIn(data.user);
      closeAuthModal();
    } else {
      const { data, error } = await sb.auth.signInWithPassword({ email, password: pass });
      if(error){ setStatus(error.message, "#dc2626"); return; }
      await onSignedIn(data.user);
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
      // signed in → this button signs out
      if(sb) await sb.auth.signOut();
      onSignedOut();
    } else {
      if(!CONFIGURED){
        alert("⚠️ لم يتم إعداد الحسابات بعد. ضع مفاتيح Supabase في ملف auth.js.\n\nAccounts not configured yet — add your Supabase keys in auth.js.");
        return;
      }
      openAuthModal();
    }
  });
  A("#authSubmit").addEventListener("click", handleSubmit);
  A("#authSwitch").addEventListener("click", ()=>{
    authMode = authMode === "signin" ? "signup" : "signin";
    renderAuthMode(); setStatus("");
  });
  A("#authClose").addEventListener("click", closeAuthModal);
  // Pressing Enter inside the password field submits
  A("#authPass").addEventListener("keydown", (e)=>{ if(e.key==="Enter") handleSubmit(); });
}

// ---- init ----
(async function initAuth(){
  wireAuthUI();
  if(!CONFIGURED){
    refreshAccountUI(); // app still works as a local-only guest tool
    return;
  }
  sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  // Restore an existing session (so the user stays logged in across refreshes)
  const { data } = await sb.auth.getSession();
  if(data && data.session){
    await onSignedIn(data.session.user);
  } else {
    refreshAccountUI();
  }

  // React to future sign-in / sign-out events
  sb.auth.onAuthStateChange((event, session)=>{
    if(event === "SIGNED_OUT") onSignedOut();
  });
})();
