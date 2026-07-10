// ===== i18n dictionary (UI labels only — not CV content) =====
const I18N = {
  ar: {
    tagline:"سيرتك الذاتية… بمعايير عالمية", download:"تحميل PDF",
    tplClassic:"كلاسيكي", tplModern:"عصري", tplMinimal:"بسيط",
    tplExecutive:"تنفيذي", tplElegant:"أنيق", tplBold:"جريء", tplProfessional:"احترافي", tplCompact:"مدمج",
    atsTitle:"تحليل توافق ATS", personalInfo:"المعلومات الشخصية",
    fullName:"الاسم الكامل", jobTitle:"المسمى الوظيفي", email:"البريد الإلكتروني",
    phone:"رقم الهاتف", location:"المدينة / الدولة", link:"رابط (LinkedIn / موقع)",
    summary:"نبذة مختصرة (الملخص المهني)", experience:"الخبرات العملية", education:"التعليم",
    projects:"المشاريع", volunteer:"العمل التطوعي", skills:"المهارات", languages:"اللغات", certs:"الشهادات",
    skillsHint:"افصل بين المهارات بفاصلة", langHint:"افصل بين اللغات بفاصلة", certsHint:"شهادة في كل سطر",
    add:"+ إضافة", remove:"حذف ✕", previewNote:"معاينة حيّة — هذا ما سيظهر في ملف PDF",
    secSummary:"الملخص المهني", secExp:"الخبرات العملية", secEdu:"التعليم", secProj:"المشاريع",
    secVol:"العمل التطوعي", secSkills:"المهارات", secLang:"اللغات", secCerts:"الشهادات",
    customSections:"أقسام إضافية",
    matchTitle:"مطابقة مع وظيفة معيّنة",
    matchHint:"الصق نص إعلان الوظيفة، وشوف نسبة تطابق سيرتك معها وأهم الكلمات الناقصة",
    matchPlaceholder:"الصق هنا وصف الوظيفة...",
    matchBtn:"تحليل التطابق",
    matchScoreLabel:"نسبة التطابق",
    matchMissingLabel:"كلمات موجودة في الوظيفة وغير موجودة في سيرتك — أضفها لو تنطبق عليك فعلاً:",
    matchNoText:"الصق نص الوظيفة أولاً",
    matchNoKeywords:"لم أستطع استخراج كلمات كافية من النص، حاول تلصق نصًا أطول",
    matchAllGood:"✓ ما شاء الله — كل الكلمات المهمة موجودة في سيرتك",
    enhance:"✨ حسّن الصياغة",
    enhancing:"…جارٍ التحسين",
    enhanceEmpty:"اكتب شيئًا أولاً لكي أحسّن صياغته",
    enhanceFallback:"(صياغة محلية — خدمة الذكاء الاصطناعي غير متاحة الآن)",
    mic:"🎤 تحدّث",
    micListening:"⏺ يسمع… تحدّث الآن",
    micDenied:"لم يُسمح بالوصول للميكروفون. فعّله من إعدادات المتصفح.",
    micError:"تعذّر التعرف على الصوت، حاول مرة أخرى",
    pwTitle:"انتهت محاولاتك المجانية", pwSub:"اشترك للتحميل بلا حدود وبدون علامة مائية",
    pwBest:"الأفضل", pwPro:"بريميوم", pwMonth:"ر.س/شهر", pwProFeat:"كل القوالب • بدون علامة مائية • تحليل ATS متقدم",
    pwLife:"مدى الحياة", pwOnce:"ر.س مرة واحدة", pwLifeFeat:"كل المزايا للأبد — دفعة واحدة",
    pwUpgrade:"ترقية الآن (تجريبي)", pwClose:"ربما لاحقاً",
    freeLeft:(n)=>`محاولات مجانية متبقية: ${n}`, proActive:"✓ حساب بريميوم مُفعّل",
    // auth
    account:"حسابي", signIn:"تسجيل الدخول", signUp:"إنشاء حساب", signOut:"تسجيل الخروج",
    authTitle:"الدخول إلى سيرتي", authSub:"سجّل الدخول لحفظ سيرتك على كل أجهزتك",
    pwPlaceholder:"كلمة المرور", emailPlaceholder:"البريد الإلكتروني",
    haveAccount:"عندك حساب؟ سجّل الدخول", noAccount:"ما عندك حساب؟ أنشئ واحد",
    authClose:"إغلاق", savedCloud:"✓ محفوظ في حسابك", savingCloud:"…جارٍ الحفظ",
    guestNote:"تعمل كزائر — سجّل الدخول لحفظ بياناتك",
    checkEmail:"تم الإرسال — راجع بريدك لتأكيد الحساب ثم سجّل الدخول",
    authFillBoth:"يرجى كتابة البريد الإلكتروني وكلمة المرور (٦ أحرف على الأقل)",
    fields:{
      experience:{role:"المسمى الوظيفي",org:"الجهة / الشركة",date:"المدة",desc:"الوصف (سطر لكل إنجاز)"},
      education:{degree:"الدرجة / التخصص",org:"المؤسسة التعليمية",date:"المدة",desc:"تفاصيل (اختياري)"},
      projects:{name:"اسم المشروع",link:"رابط (اختياري)",desc:"الوصف"},
      volunteer:{role:"الدور",org:"الجهة",date:"المدة",desc:"الوصف"},
      custom:{title:"العنوان",details:"التفاصيل (اختياري)"}
    }
  },
  en: {
    tagline:"Your resume, to global standards", download:"Download PDF",
    tplClassic:"Classic", tplModern:"Modern", tplMinimal:"Minimal",
    tplExecutive:"Executive", tplElegant:"Elegant", tplBold:"Bold", tplProfessional:"Professional", tplCompact:"Compact",
    atsTitle:"ATS Compatibility", personalInfo:"Personal Information",
    fullName:"Full Name", jobTitle:"Job Title", email:"Email",
    phone:"Phone", location:"City / Country", link:"Link (LinkedIn / website)",
    summary:"Professional Summary", experience:"Work Experience", education:"Education",
    projects:"Projects", volunteer:"Volunteering", skills:"Skills", languages:"Languages", certs:"Certifications",
    skillsHint:"Separate skills with commas", langHint:"Separate languages with commas", certsHint:"One certificate per line",
    add:"+ Add", remove:"Remove ✕", previewNote:"Live preview — this is your PDF",
    secSummary:"Professional Summary", secExp:"Work Experience", secEdu:"Education", secProj:"Projects",
    secVol:"Volunteering", secSkills:"Skills", secLang:"Languages", secCerts:"Certifications",
    customSections:"Additional Sections",
    matchTitle:"Match a Job Posting",
    matchHint:"Paste the job ad text to see your match score and the most important missing keywords",
    matchPlaceholder:"Paste the job description here...",
    matchBtn:"Analyze Match",
    matchScoreLabel:"Match Score",
    matchMissingLabel:"Words in the job ad missing from your resume — add them if they genuinely apply to you:",
    matchNoText:"Paste the job text first",
    matchNoKeywords:"Couldn't extract enough keywords — try pasting more text",
    matchAllGood:"✓ Great — all important keywords are already in your resume",
    enhance:"✨ Improve wording",
    enhancing:"…Improving",
    enhanceEmpty:"Write something first so I can improve it",
    enhanceFallback:"(local phrasing — AI service unavailable right now)",
    mic:"🎤 Speak",
    micListening:"⏺ Listening… speak now",
    micDenied:"Microphone access denied. Enable it in your browser settings.",
    micError:"Couldn't recognize speech, please try again",
    pwTitle:"Free downloads used up", pwSub:"Subscribe for unlimited, watermark-free downloads",
    pwBest:"Best", pwPro:"Premium", pwMonth:"/mo", pwProFeat:"All templates • No watermark • Advanced ATS",
    pwLife:"Lifetime", pwOnce:"one-time", pwLifeFeat:"All features forever — one payment",
    pwUpgrade:"Upgrade now (demo)", pwClose:"Maybe later",
    freeLeft:(n)=>`Free downloads left: ${n}`, proActive:"✓ Premium account active",
    // auth
    account:"Account", signIn:"Sign in", signUp:"Sign up", signOut:"Sign out",
    authTitle:"Sign in to Seerati", authSub:"Sign in to save your resume across all devices",
    pwPlaceholder:"Password", emailPlaceholder:"Email",
    haveAccount:"Have an account? Sign in", noAccount:"No account? Create one",
    authClose:"Close", savedCloud:"✓ Saved to your account", savingCloud:"…Saving",
    guestNote:"Working as guest — sign in to save your data",
    checkEmail:"Sent — check your email to confirm, then sign in",
    authFillBoth:"Please enter your email and password (6+ characters)",
    fields:{
      experience:{role:"Job Title",org:"Company",date:"Duration",desc:"Description (one line per achievement)"},
      education:{degree:"Degree / Major",org:"Institution",date:"Duration",desc:"Details (optional)"},
      projects:{name:"Project Name",link:"Link (optional)",desc:"Description"},
      volunteer:{role:"Role",org:"Organization",date:"Duration",desc:"Description"},
      custom:{title:"Title",details:"Details (optional)"}
    }
  }
};
let LANG = "ar";
const t = (k) => I18N[LANG][k];

// ===== State =====
const DEFAULT_STATE = {
  fullName:"خالد إدريس", title:"مهندس برمجيات", email:"khaled@email.com",
  phone:"+971 50 000 0000", location:"دبي، الإمارات", link:"linkedin.com/in/khaled",
  summary:"مهندس برمجيات بخبرة 5 سنوات في تطوير تطبيقات الويب وقيادة الفرق التقنية. شغوف بكتابة كود نظيف وحل المشكلات المعقّدة.",
  skills:"JavaScript، Python، React، Node.js، إدارة المشاريع، تحليل البيانات",
  languages:"العربية (لغة أم)، الإنجليزية (متقدم)",
  certs:"AWS Certified Developer - أمازون - 2023",
  experience:[{role:"مهندس برمجيات أول",org:"شركة التقنية",date:"2021 - الآن",desc:"قيادة فريق من 4 مطورين.\nتحسين أداء النظام بنسبة 40%.\nتطوير واجهات برمجية (APIs) جديدة."}],
  education:[{degree:"بكالوريوس علوم الحاسب",org:"جامعة الإمارات",date:"2015 - 2019",desc:""}],
  projects:[], volunteer:[], custom:[]
};
const appData = {
  ar: JSON.parse(JSON.stringify(DEFAULT_STATE)),
  en: null
};
let enDirty = true;
let state = appData.ar;

// Billing state
let downloads = 0, isPro = false;
const FREE_LIMIT = 3;

// ===== Helpers =====
const $ = (s, r=document) => r.querySelector(s);
const esc = (s) => (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
const splitList = (s) => (s||"").split(/[،,\n]+/).map(x=>x.trim()).filter(Boolean);

// ===== Auto-translation (Arabic → English) =====
async function translateText(text){
  const clean = (text||"").trim();
  if(!clean) return "";
  if(/^https?:\/\//i.test(clean) || /@/.test(clean) || /^[+0-9 ()-]+$/.test(clean)) return clean;
  try{
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(clean)}&langpair=ar|en`);
    const data = await res.json();
    const out = data && data.responseData && data.responseData.translatedText;
    return out ? out : clean;
  }catch(err){
    return clean;
  }
}
async function translateLines(text){
  const lines = (text||"").split(/\n+/).map(l=>l.trim()).filter(Boolean);
  if(!lines.length) return "";
  const out = await Promise.all(lines.map(translateText));
  return out.join("\n");
}
async function translateListText(text){
  const items = splitList(text);
  if(!items.length) return "";
  const out = await Promise.all(items.map(translateText));
  return out.join(", ");
}
async function buildTranslatedState(ar){
  const en = {
    fullName: await translateText(ar.fullName),
    title:    await translateText(ar.title),
    email:    ar.email,
    phone:    ar.phone,
    location: await translateText(ar.location),
    link:     ar.link,
    summary:  await translateLines(ar.summary),
    skills:   await translateListText(ar.skills),
    languages:await translateListText(ar.languages),
    certs:    await translateLines(ar.certs),
  };
  en.experience = await Promise.all(ar.experience.map(async item => ({
    role: await translateText(item.role), org: await translateText(item.org),
    date: await translateText(item.date), desc: await translateLines(item.desc)
  })));
  en.education = await Promise.all(ar.education.map(async item => ({
    degree: await translateText(item.degree), org: await translateText(item.org),
    date: await translateText(item.date), desc: await translateLines(item.desc)
  })));
  en.projects = await Promise.all(ar.projects.map(async item => ({
    name: await translateText(item.name), link: item.link,
    desc: await translateLines(item.desc)
  })));
  en.volunteer = await Promise.all(ar.volunteer.map(async item => ({
    role: await translateText(item.role), org: await translateText(item.org),
    date: await translateText(item.date), desc: await translateLines(item.desc)
  })));
  en.custom = await Promise.all(ar.custom.map(async item => ({
    title: await translateText(item.title), details: await translateLines(item.details)
  })));
  return en;
}
function showTranslateOverlay(show){
  const el = $("#translateOverlay");
  if(el) el.classList.toggle("hidden", !show);
}
async function regenerateEnglish(){
  showTranslateOverlay(true);
  try{
    appData.en = await buildTranslatedState(appData.ar);
    enDirty = false;
  }catch(err){
    console.error("Translation failed:", err);
    if(!appData.en) appData.en = JSON.parse(JSON.stringify(appData.ar));
  }
  showTranslateOverlay(false);
}

// ===== Job Match (free, keyword-based — no API cost) =====
const STOPWORDS_AR = new Set(["في","من","على","إلى","الى","عن","مع","أن","ان","إن","هذا","هذه","ذلك","التي","الذي","كل","أو","او","ثم","قد","لا","نعم","ما","لم","لن","كان","يكون","هو","هي","نحن","أنت","انت","أنتم","انتم","هم","لها","له","به","بها","كما","حتى","عند","بين","تحت","فوق","أيضا","أيضاً","ايضا","ضمن","نحو","لدى","غير","بعض","جميع","كافة","سوف","الذين","التى"]);
const STOPWORDS_EN = new Set(["the","a","an","and","or","of","to","in","on","for","with","is","are","be","this","that","you","we","will","our","your","as","at","by","from","it","its","they","their","have","has","had","not","but","if","into","about","than","then","so","such","can","may","also","etc","using","use","per","all","any","we're","you'll"]);
function normalizeArabicWord(w){
  return w
    .replace(/[\u064B-\u0652\u0640]/g,"")
    .replace(/[إأآ]/g,"ا")
    .replace(/ى/g,"ي")
    .replace(/ة$/,"ه");
}
function extractKeywords(text){
  const counts = new Map();
  (text||"")
    .toLowerCase()
    .replace(/[^\u0600-\u06FFa-z0-9+#.\s]/g," ")
    .split(/\s+/)
    .map(w=>w.trim())
    .filter(Boolean)
    .forEach(raw=>{
      let word = /[\u0600-\u06FF]/.test(raw) ? normalizeArabicWord(raw) : raw;
      if(word.length < 2) return;
      if(STOPWORDS_AR.has(word) || STOPWORDS_EN.has(word)) return;
      if(/^\d+$/.test(word)) return;
      counts.set(word,(counts.get(word)||0)+1);
    });
  return counts;
}
function getCvFullText(){
  const parts = [state.title, state.summary, state.skills, state.languages, state.certs];
  state.experience.forEach(e=>parts.push(e.role,e.org,e.desc));
  state.education.forEach(e=>parts.push(e.degree,e.org,e.desc));
  state.projects.forEach(e=>parts.push(e.name,e.desc));
  state.volunteer.forEach(e=>parts.push(e.role,e.org,e.desc));
  state.custom.forEach(e=>parts.push(e.title,e.details));
  return parts.filter(Boolean).join("\n");
}
function runJobMatch(){
  const dict = I18N[LANG];
  const jobText = $("#jobText").value.trim();
  if(!jobText){ alert(dict.matchNoText); return; }
  const jobKeywords = extractKeywords(jobText);
  if(jobKeywords.size === 0){ alert(dict.matchNoKeywords); return; }
  const cvKeywords = extractKeywords(getCvFullText());

  let matchedCount = 0;
  const missing = [];
  [...jobKeywords.entries()].sort((a,b)=>b[1]-a[1]).forEach(([word])=>{
    if(cvKeywords.has(word)) matchedCount++;
    else missing.push(word);
  });
  const score = Math.round((matchedCount / jobKeywords.size) * 100);

  $("#matchResult").classList.remove("hidden");
  $("#matchScore").textContent = score+"%";
  const color = score>=70?"#059669":score>=40?"#d97706":"#dc2626";
  $("#matchScore").style.color = color;
  $("#matchBar").style.width = score+"%";
  $("#matchBar").style.background = color;
  $("#matchMissing").innerHTML = missing.length
    ? missing.slice(0,18).map(w=>`<span class="text-xs bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-2 py-1 rounded-md">${esc(w)}</span>`).join("")
    : `<span class="text-xs text-emerald-600 font-semibold">${dict.matchAllGood}</span>`;
}


// ===== Smart wording enhancement (Gemini via Supabase, with local fallback) =====
const ENHANCE_ENDPOINT = "https://jdxvyayrwxldfvifmhbo.supabase.co/functions/v1/enhance-cv";

const ACTION_VERBS_AR = ["قُدت","طوّرت","أنجزت","حسّنت","نفّذت","أدرت","بنيت","صمّمت","أطلقت","ساهمت في"];
const ACTION_VERBS_EN = ["Led","Developed","Delivered","Improved","Implemented","Managed","Built","Designed","Launched","Contributed to"];
function localEnhance(text, lang){
  const verbs = lang === "ar" ? ACTION_VERBS_AR : ACTION_VERBS_EN;
  const startsWithVerb = (line) => verbs.some(v => line.trim().startsWith(v));
  return (text||"").split(/\n+/).map(l=>l.trim()).filter(Boolean).map((line,i)=>{
    if(startsWithVerb(line)) return line;
    const verb = verbs[i % verbs.length];
    return lang === "ar" ? `${verb} ${line}` : `${verb} ${line.charAt(0).toLowerCase()}${line.slice(1)}`;
  }).join("\n");
}

async function enhanceText(text, kind){
  const clean = (text||"").trim();
  if(!clean) return null;
  try{
    const res = await fetch(ENHANCE_ENDPOINT, {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ text: clean, lang: LANG, kind })
    });
    if(res.ok){
      const data = await res.json();
      if(data.result) return { text: data.result, ai: true };
    }
  }catch(err){ /* network / not deployed → fall through to local */ }
  return { text: localEnhance(clean, LANG), ai: false };
}

// ===== Speech-to-text dictation (browser Web Speech API) =====
const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
const MIC_SUPPORTED = !!SpeechRec;
let activeMic = null;

function startDictation(btn, targetTextarea, onDone){
  const dict = I18N[LANG];
  if(activeMic){ try{ activeMic.stop(); }catch(e){} activeMic = null; return; }

  const rec = new SpeechRec();
  rec.lang = LANG === "ar" ? "ar-SA" : "en-US";
  rec.interimResults = true;
  rec.continuous = true;

  const baseText = targetTextarea.value ? targetTextarea.value.trim() + " " : "";
  let finalChunk = "";
  const label = btn.textContent;

  rec.onstart = () => { btn.textContent = dict.micListening; btn.classList.add("mic-on"); };
  rec.onerror = (e) => {
    if(e.error === "not-allowed" || e.error === "service-not-allowed") alert(dict.micDenied);
    else if(e.error !== "aborted" && e.error !== "no-speech") alert(dict.micError);
  };
  rec.onend = () => {
    btn.textContent = label; btn.classList.remove("mic-on"); activeMic = null;
  };
  rec.onresult = (event) => {
    let interim = "";
    for(let i = event.resultIndex; i < event.results.length; i++){
      const tr = event.results[i][0].transcript;
      if(event.results[i].isFinal) finalChunk += tr + " ";
      else interim += tr;
    }
    targetTextarea.value = baseText + finalChunk + interim;
    if(onDone) onDone(targetTextarea.value);
  };

  activeMic = rec;
  try{ rec.start(); }catch(e){ activeMic = null; }
}

async function handleEnhanceClick(btn, targetTextarea, kind, onDone){
  const dict = I18N[LANG];
  const original = targetTextarea.value;
  if(!original.trim()){ alert(dict.enhanceEmpty); return; }
  btn.disabled = true;
  const label = btn.textContent;
  btn.textContent = dict.enhancing;
  const out = await enhanceText(original, kind);
  btn.disabled = false;
  btn.textContent = label;
  if(out && out.text){
    targetTextarea.value = out.text;
    if(onDone) onDone(out.text);
    if(!out.ai) btn.title = dict.enhanceFallback;
  }
}


const repeatOrder = ["experience","education","projects","volunteer","custom"];
const repeatSchema = {
  experience:[{k:"role"},{k:"org"},{k:"date"},{k:"desc",area:true}],
  education:[{k:"degree"},{k:"org"},{k:"date"},{k:"desc",area:true}],
  projects:[{k:"name"},{k:"link"},{k:"desc",area:true}],
  volunteer:[{k:"role"},{k:"org"},{k:"date"},{k:"desc",area:true}],
  custom:[{k:"title"},{k:"details",area:true}]
};

function renderRepeat(section){
  const list = $("#"+section+"List");
  list.innerHTML = "";
  const labels = I18N[LANG].fields[section];
  state[section].forEach((item, i) => {
    const card = document.createElement("div");
    card.className = "repeat-item space-y-2";
    const fieldsHtml = repeatSchema[section].map(f => {
      const val = esc(item[f.k]||"");
      const lbl = labels[f.k];
      if(f.area){
        const micBtn = MIC_SUPPORTED
          ? `<button type="button" class="add-btn mt-1 mic-btn" data-mic="${section}" data-idx="${i}" data-key="${f.k}">${t("mic")}</button>`
          : "";
        return `<label class="block"><span class="text-xs text-gray-500">${lbl}</span>`
          + `<textarea rows="3" data-rep="${section}" data-idx="${i}" data-key="${f.k}" class="field">${val}</textarea>`
          + `<div class="flex gap-2 flex-wrap">`
          + `<button type="button" class="add-btn mt-1" data-enhance="${section}" data-idx="${i}" data-key="${f.k}">${t("enhance")}</button>`
          + micBtn
          + `</div></label>`;
      }
      return `<label class="block"><span class="text-xs text-gray-500">${lbl}</span>`
        + `<input data-rep="${section}" data-idx="${i}" data-key="${f.k}" class="field" value="${val}"></label>`;
    }).join("");
    card.innerHTML = `<div class="flex justify-between items-center">
        <span class="text-xs font-semibold text-gray-400">#${i+1}</span>
        <button class="remove-btn" data-remove="${section}" data-idx="${i}">${t("remove")}</button>
      </div>${fieldsHtml}`;
    list.appendChild(card);
  });
}
function renderAllRepeats(){ repeatOrder.forEach(renderRepeat); }

// ===== CV Render =====
function entryBlock(rows){ return rows.map(e=>`
    <div class="cv-entry">
      <div class="row1"><span>${esc(e.t1)}</span>${e.date?`<span class="date">${esc(e.date)}</span>`:""}</div>
      ${e.sub?`<div class="sub">${esc(e.sub)}</div>`:""}
      ${e.desc?`<div class="desc">${esc(e.desc)}</div>`:""}
    </div>`).join(""); }

function renderCV(){
  const cv = $("#cv");
  const skills = splitList(state.skills);
  const langs = splitList(state.languages);
  const certs = (state.certs||"").split(/\n+/).map(x=>x.trim()).filter(Boolean);
  const contact = [state.email, state.phone, state.location, state.link].filter(Boolean).map(esc).join(" • ");

  const exp = state.experience.filter(e=>e.role||e.org).map(e=>({t1:e.role,date:e.date,sub:e.org,desc:e.desc}));
  const edu = state.education.filter(e=>e.degree||e.org).map(e=>({t1:e.degree,date:e.date,sub:e.org,desc:e.desc}));
  const proj= state.projects.filter(e=>e.name).map(e=>({t1:e.name,date:"",sub:e.link,desc:e.desc}));
  const vol = state.volunteer.filter(e=>e.role||e.org).map(e=>({t1:e.role,date:e.date,sub:e.org,desc:e.desc}));

  const customs = state.custom.filter(c=>c.title||c.details);

  const wm = (!isPro && downloads >= FREE_LIMIT)
    ? `<div class="watermark">سيرتي | SEERATI</div>` : "";

  cv.innerHTML = `
    ${wm}
    <div class="cv-header">
      <h1>${esc(state.fullName)||t("fullName")}</h1>
      ${state.title?`<div class="cv-title">${esc(state.title)}</div>`:""}
      <div class="cv-contact">${contact||'<span class="muted">'+t("email")+'</span>'}</div>
    </div>
    ${state.summary?`<div class="cv-section"><h2>${t("secSummary")}</h2><div class="desc">${esc(state.summary)}</div></div>`:""}
    ${exp.length?`<div class="cv-section"><h2>${t("secExp")}</h2>${entryBlock(exp)}</div>`:""}
    ${edu.length?`<div class="cv-section"><h2>${t("secEdu")}</h2>${entryBlock(edu)}</div>`:""}
    ${proj.length?`<div class="cv-section"><h2>${t("secProj")}</h2>${entryBlock(proj)}</div>`:""}
    ${vol.length?`<div class="cv-section"><h2>${t("secVol")}</h2>${entryBlock(vol)}</div>`:""}
    ${skills.length?`<div class="cv-section"><h2>${t("secSkills")}</h2><div class="cv-tags">${skills.map(s=>`<span>• ${esc(s)}</span>`).join("")}</div></div>`:""}
    ${langs.length?`<div class="cv-section"><h2>${t("secLang")}</h2><div class="cv-tags">${langs.map(s=>`<span>• ${esc(s)}</span>`).join("")}</div></div>`:""}
    ${certs.length?`<div class="cv-section"><h2>${t("secCerts")}</h2><ul class="cv-list">${certs.map(c=>`<li>${esc(c)}</li>`).join("")}</ul></div>`:""}
    ${customs.map(c=>`<div class="cv-section"><h2>${esc(c.title)}</h2>${c.details?`<div class="desc">${esc(c.details)}</div>`:""}</div>`).join("")}
  `;
  analyzeATS();
  saveState();
}

// ===== ATS Analyzer =====
function analyzeATS(){
  const has = (v) => v && v.toString().trim().length;
  const checks = [
    {ok:has(state.fullName)&&has(state.title), w:10, ar:["الاسم والمسمى موجودان","أضف الاسم والمسمى الوظيفي"], en:["Name & title present","Add your name and job title"]},
    {ok:has(state.email)&&has(state.phone), w:15, ar:["معلومات التواصل مكتملة","أضف البريد والهاتف"], en:["Contact info complete","Add email and phone"]},
    {ok:has(state.summary)&&state.summary.length>=60, w:15, ar:["يوجد ملخص مهني واضح","اكتب ملخصاً مهنياً (60 حرفاً+)"], en:["Clear summary present","Write a summary (60+ chars)"]},
    {ok:state.experience.some(e=>has(e.role)&&has(e.desc)), w:25, ar:["الخبرات موصوفة بإنجازات","أضف خبرة مع وصف للإنجازات"], en:["Experience well described","Add experience with achievements"]},
    {ok:state.education.some(e=>has(e.degree)), w:15, ar:["قسم التعليم مكتمل","أضف مؤهلك التعليمي"], en:["Education complete","Add your education"]},
    {ok:splitList(state.skills).length>=5, w:15, ar:["عدد كافٍ من المهارات (٥+)","أضف ٥ مهارات على الأقل"], en:["Enough skills (5+)","Add at least 5 skills"]},
    {ok:has(state.languages), w:5, ar:["اللغات مذكورة","أضف اللغات"], en:["Languages listed","Add languages"]}
  ];
  const total = checks.reduce((a,c)=>a+c.w,0);
  const score = Math.round(checks.reduce((a,c)=>a+(c.ok?c.w:0),0)/total*100);
  $("#atsScore").textContent = score+"%";
  $("#atsScore").style.color = score>=80?"#059669":score>=50?"#d97706":"#dc2626";
  const bar = $("#atsBar");
  bar.style.width = score+"%";
  bar.style.background = score>=80?"#059669":score>=50?"#d97706":"#dc2626";
  $("#atsTips").innerHTML = checks.map(c=>{
    const msg = c[LANG][c.ok?0:1];
    return `<li class="${c.ok?'text-emerald-600':'text-gray-500 dark:text-gray-400'}">${c.ok?'✓':'○'} ${msg}</li>`;
  }).join("");
}

// ===== Billing UI =====
function updateBillingUI(){
  const el = $("#freeCounter");
  if(isPro){ el.textContent = t("proActive"); el.className="mt-3 text-xs font-semibold text-emerald-600"; }
  else {
    const left = Math.max(0, FREE_LIMIT - downloads);
    el.textContent = I18N[LANG].freeLeft(left);
    el.className = left>0 ? "mt-3 text-xs font-semibold text-emerald-600" : "mt-3 text-xs font-semibold text-red-600";
  }
}

// ===== Persistence (local + cloud) =====
const KEY = "seerati_state";
function snapshot(){ return {ar: appData.ar, en: appData.en, enDirty, downloads, isPro, LANG}; }
function saveState(){
  try{ localStorage.setItem(KEY, JSON.stringify(snapshot())); }catch(e){}
  // Push to the cloud too, if the auth layer is loaded and a user is signed in.
  // window.seeratiCloudSave is defined in auth.js and is debounced there.
  if(window.seeratiCloudSave) window.seeratiCloudSave(snapshot());
}
function loadState(){
  try{
    const raw = localStorage.getItem(KEY);
    if(raw){
      const d = JSON.parse(raw);
      if(d.ar || d.en){
        if(d.ar) appData.ar = d.ar;
        if(d.en) appData.en = d.en;
        enDirty = d.enDirty !== undefined ? d.enDirty : true;
      } else if(d.state){
        appData.ar = d.state; enDirty = true;
      }
      downloads = d.downloads||0; isPro = !!d.isPro; LANG = d.LANG||"ar";
    }
  }catch(e){}
  if(!appData.ar.custom) appData.ar.custom = [];
  if(appData.en && !appData.en.custom) appData.en.custom = [];
  state = (LANG === "en" && appData.en) ? appData.en : (LANG = "ar", appData.ar);
}

// ===== Hooks for the auth/cloud layer (auth.js) =====
// auth.js calls these to load a signed-in user's saved resume into the app,
// or to read the current data so it can upload it.
window.seeratiApplyData = function(d){
  if(!d) return;
  if(d.ar) appData.ar = d.ar;
  appData.en = d.en || null;
  if(!appData.ar.custom) appData.ar.custom = [];
  if(appData.en && !appData.en.custom) appData.en.custom = [];
  enDirty = d.enDirty !== undefined ? d.enDirty : true;
  downloads = d.downloads || 0;
  isPro = !!d.isPro;
  LANG = (d.LANG === "en" && appData.en) ? "en" : "ar";
  state = (LANG === "en" && appData.en) ? appData.en : appData.ar;
  applyLang(); syncSimpleInputs(); renderAllRepeats(); renderCV(); updateBillingUI();
};
window.seeratiCurrentData = function(){ return snapshot(); };
window.seeratiSetPro = function(v){ isPro = !!v; saveState(); updateBillingUI(); renderCV(); };

// ===== Language =====
function applyLang(){
  document.documentElement.lang = LANG;
  document.documentElement.dir = LANG==="ar" ? "rtl" : "ltr";
  $("#cv").dir = LANG==="ar" ? "rtl" : "ltr";
  $("#cv").classList.toggle("ltr", LANG!=="ar");
  $("#langToggle").textContent = LANG==="ar" ? "EN" : "ع";
  $("#retranslateBtn").classList.toggle("hidden", LANG!=="en");
  document.body.style.fontFamily = LANG==="ar"
    ? "'Tajawal','Cairo',sans-serif" : "'Inter',sans-serif";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k = el.dataset.i18n;
    const v = I18N[LANG][k];
    if(typeof v === "string") el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    const k = el.dataset.i18nPh;
    const v = I18N[LANG][k];
    if(typeof v === "string") el.placeholder = v;
  });
}

// ===== Events =====
document.addEventListener("input",(e)=>{
  const tgt=e.target;
  if(tgt.dataset.bind){ state[tgt.dataset.bind]=tgt.value; if(LANG==="ar") enDirty = true; renderCV(); }
  if(tgt.dataset.rep){ state[tgt.dataset.rep][+tgt.dataset.idx][tgt.dataset.key]=tgt.value; if(LANG==="ar") enDirty = true; renderCV(); }
});
document.addEventListener("click",(e)=>{
  const tgt=e.target;
  if(tgt.dataset.add){
    const s=tgt.dataset.add;
    const blank = Object.fromEntries(repeatSchema[s].map(f=>[f.k,""]));
    appData.ar[s].push({...blank});
    if(appData.en) appData.en[s].push({...blank});
    renderRepeat(s); renderCV();
  }
  if(tgt.dataset.remove){
    const s=tgt.dataset.remove; const idx=+tgt.dataset.idx;
    appData.ar[s].splice(idx,1);
    if(appData.en) appData.en[s].splice(idx,1);
    renderRepeat(s); renderCV();
  }
  if(tgt.dataset.enhance){
    const s=tgt.dataset.enhance; const idx=+tgt.dataset.idx; const key=tgt.dataset.key;
    const ta = tgt.closest("label").querySelector("textarea");
    handleEnhanceClick(tgt, ta, s, (newText)=>{
      state[s][idx][key] = newText;
      if(LANG==="ar") enDirty = true;
      renderCV();
    });
  }
  if(tgt.dataset.mic){
    const s=tgt.dataset.mic; const idx=+tgt.dataset.idx; const key=tgt.dataset.key;
    const ta = tgt.closest("label").querySelector("textarea");
    startDictation(tgt, ta, (newText)=>{
      state[s][idx][key] = newText;
      if(LANG==="ar") enDirty = true;
      renderCV();
    });
  }
});
$("#templateSelect").addEventListener("change",(e)=>{ $("#cv").dataset.template=e.target.value; });
$("#matchBtn").addEventListener("click", runJobMatch);
$("#enhanceSummary").addEventListener("click", (e)=>{
  const ta = document.querySelector('[data-bind="summary"]');
  handleEnhanceClick(e.target, ta, "summary", (newText)=>{
    state.summary = newText;
    if(LANG==="ar") enDirty = true;
    renderCV();
  });
});
if(MIC_SUPPORTED){
  $("#micSummary").addEventListener("click", (e)=>{
    const ta = document.querySelector('[data-bind="summary"]');
    startDictation(e.target, ta, (newText)=>{
      state.summary = newText;
      if(LANG==="ar") enDirty = true;
      renderCV();
    });
  });
} else {
  $("#micSummary").classList.add("hidden");
}

$("#langToggle").addEventListener("click", async ()=>{
  if(LANG === "ar"){
    LANG = "en";
    applyLang();
    if(!appData.en || enDirty){ await regenerateEnglish(); }
    state = appData.en;
  } else {
    LANG = "ar";
    state = appData.ar;
  }
  applyLang(); syncSimpleInputs(); renderAllRepeats(); renderCV(); updateBillingUI();
});

$("#retranslateBtn").addEventListener("click", async ()=>{
  if(LANG !== "en") return;
  await regenerateEnglish();
  state = appData.en;
  syncSimpleInputs(); renderAllRepeats(); renderCV(); updateBillingUI();
});

// Download with free-attempt gating
$("#downloadBtn").addEventListener("click",()=>{
  if(!isPro && downloads >= FREE_LIMIT){
    $("#paywall").classList.remove("hidden");
    $("#paywall").classList.add("flex");
    return;
  }
  if(!isPro) downloads++;
  saveState(); updateBillingUI(); renderCV();
  setTimeout(()=>window.print(), 100);
});
$("#upgradeBtn").addEventListener("click",()=>{
  isPro = true; saveState(); updateBillingUI(); renderCV();
  $("#paywall").classList.add("hidden"); $("#paywall").classList.remove("flex");
  setTimeout(()=>window.print(), 150);
});
$("#closePaywall").addEventListener("click",()=>{
  $("#paywall").classList.add("hidden"); $("#paywall").classList.remove("flex");
});

// ===== Bind helpers =====
function syncSimpleInputs(){
  document.querySelectorAll("[data-bind]").forEach(el=>{
    const k=el.dataset.bind; if(state[k]!==undefined) el.value=state[k];
  });
}

// ===== Init =====
loadState();
applyLang();
syncSimpleInputs();
renderAllRepeats();
renderCV();
updateBillingUI();
