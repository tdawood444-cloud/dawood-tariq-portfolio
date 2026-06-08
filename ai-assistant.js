<div class="cato-widget">
  <div class="cato-welcome" id="catoWelcome">
    <button class="cato-welcome-close" onclick="closeCatoWelcome()">×</button>
    <div class="cato-heart">💜</div>
    <h3>Hi, I’m CATO</h3>
    <p>I can help you choose the right website, WordPress, Excel, trading tool or chatbot package.</p>
    <button onclick="openCatoFromWelcome()">Yes, guide me ✨</button>
  </div>

  <button class="cato-launcher" onclick="toggleCato()" aria-label="Open CATO Chatbot">
    <span class="cato-launch-avatar">💜</span>
    <span>
      <b>CATO</b>
      <small>Smart Digital Companion</small>
    </span>
  </button>

  <div class="cato-panel" id="catoPanel">
    <div class="cato-header">
      <div class="cato-profile">
        <div class="cato-avatar">💜</div>
        <div>
          <strong>CATO</strong>
          <small id="catoStatus">Your cute smart assistant ✨</small>
        </div>
      </div>

      <div class="cato-actions">
        <button onclick="clearCato()">🧹</button>
        <button onclick="toggleCato()">×</button>
      </div>
    </div>

    <div class="cato-quick">
      <button onclick="quickCato('website')">🌐 Website</button>
      <button onclick="quickCato('cato')">💜 CATO</button>
      <button onclick="quickCato('wordpress')">🧩 WordPress</button>
      <button onclick="quickCato('pricing')">💰 Pricing</button>
      <button onclick="quickCato('excel')">📊 Excel</button>
      <button onclick="quickCato('trading')">📈 Trading</button>
      <button onclick="quickCato('payment')">💳 Payment</button>
      <button onclick="quickCato('quote')">⚡ Quote</button>
    </div>

    <div class="cato-chat" id="catoChat"></div>

    <div class="cato-input">
      <input id="catoInput" type="text" placeholder="Ask CATO anything..." onkeypress="catoEnter(event)">
      <button onclick="sendCato()">➤</button>
    </div>
  </div>
</div>

<style>
.site-footer{
  padding:28px 14px;
  text-align:center;
  color:var(--muted);
  border-top:1px solid rgba(255,255,255,.1);
}

.cato-widget{
  position:fixed;
  right:18px;
  bottom:18px;
  z-index:999999;
  font-family:Inter,Arial,sans-serif;
}

.cato-launcher{
  display:flex;
  align-items:center;
  gap:10px;
  border:none;
  cursor:pointer;
  padding:10px 16px 10px 10px;
  border-radius:999px;
  color:#fff;
  background:
    radial-gradient(circle at top left,rgba(255,107,181,.35),transparent 36%),
    linear-gradient(135deg,#17091f,#35105d,#061628);
  border:1px solid rgba(255,255,255,.16);
  box-shadow:0 18px 55px rgba(192,132,252,.25);
}

.cato-launch-avatar{
  width:42px;
  height:42px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background:linear-gradient(135deg,#ff6bb5,#b46cff,#00e5ff);
  box-shadow:0 0 24px rgba(255,107,181,.45);
}

.cato-launcher b{
  display:block;
  font-size:14px;
}

.cato-launcher small{
  display:block;
  font-size:11px;
  color:#f5d0fe;
  margin-top:2px;
}

.cato-welcome{
  position:fixed;
  right:18px;
  bottom:88px;
  width:310px;
  padding:20px;
  border-radius:26px;
  color:#fff;
  background:
    radial-gradient(circle at top right,rgba(255,107,181,.28),transparent 35%),
    linear-gradient(145deg,rgba(20,8,34,.96),rgba(4,12,24,.96));
  border:1px solid rgba(255,255,255,.16);
  box-shadow:0 25px 80px rgba(0,0,0,.45);
  display:none;
}

.cato-welcome-close{
  position:absolute;
  right:12px;
  top:10px;
  border:none;
  background:rgba(255,255,255,.12);
  color:#fff;
  width:26px;
  height:26px;
  border-radius:50%;
  cursor:pointer;
}

.cato-heart{
  width:52px;
  height:52px;
  display:grid;
  place-items:center;
  border-radius:18px;
  background:linear-gradient(135deg,#ff6bb5,#b46cff,#00e5ff);
  box-shadow:0 0 24px rgba(255,107,181,.42);
  margin-bottom:12px;
  font-size:24px;
}

.cato-welcome h3{
  font-family:'Space Grotesk',sans-serif;
  font-size:22px;
}

.cato-welcome p{
  color:#e9d5ff;
  line-height:1.55;
  font-size:13px;
  margin:9px 0 14px;
}

.cato-welcome button:last-child{
  width:100%;
  border:none;
  color:#fff;
  padding:12px;
  border-radius:14px;
  font-weight:900;
  cursor:pointer;
  background:linear-gradient(135deg,#ff6bb5,#b46cff,#00e5ff);
}

.cato-panel{
  position:fixed;
  top:90px;
  bottom:auto;
  right:18px;
  bottom:82px;
  width:420px;
  height:min(660px,calc(100vh - 110px));
  max-width:calc(100vw - 36px);
  display:none;
  flex-direction:column;
  overflow:hidden;
  border-radius:28px;
  background:#fff;
  border:1px solid rgba(192,132,252,.45);
  box-shadow:0 30px 100px rgba(0,0,0,.55);
}

.cato-header{
  padding:14px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  background:
    radial-gradient(circle at top left,rgba(255,107,181,.28),transparent 30%),
    linear-gradient(135deg,#17091f,#35105d,#061628);
  color:#fff;
}

.cato-profile{
  display:flex;
  align-items:center;
  gap:10px;
}

.cato-avatar{
  width:48px;
  height:48px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background:linear-gradient(135deg,#ff6bb5,#b46cff,#00e5ff);
  box-shadow:0 0 26px rgba(255,107,181,.42);
}

.cato-header strong{
  display:block;
  font-size:17px;
}

.cato-header small{
  display:block;
  color:#f5d0fe;
  margin-top:3px;
  font-size:12px;
}

.cato-actions{
  display:flex;
  gap:6px;
}

.cato-actions button{
  border:none;
  width:32px;
  height:32px;
  border-radius:50%;
  color:#fff;
  background:rgba(255,255,255,.13);
  cursor:pointer;
  font-size:15px;
}

.cato-quick{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:7px;
  padding:10px;
  background:#fbf7ff;
  border-bottom:1px solid #eadcff;
}

.cato-quick button{
  border:1px solid #eadcff;
  background:#fff;
  color:#28123b;
  border-radius:13px;
  padding:9px 4px;
  font-size:11px;
  font-weight:900;
  cursor:pointer;
}

.cato-chat{
  flex:1;
  overflow-y:auto;
  min-height:0;
  padding:15px;
  background:
    radial-gradient(circle at top right,rgba(180,108,255,.08),transparent 32%),
    linear-gradient(180deg,#fff,#fbf7ff);
}

.cato-msg{
  max-width:88%;
  padding:11px 13px;
  margin-bottom:11px;
  border-radius:17px;
  font-size:14px;
  line-height:1.5;
  word-wrap:break-word;
}

.cato-msg.bot{
  background:#f3e8ff;
  color:#1f1230;
  border:1px solid #eadcff;
  border-top-left-radius:5px;
}

.cato-msg.user{
  margin-left:auto;
  color:#fff;
  background:linear-gradient(135deg,#b46cff,#00e5ff);
  border-top-right-radius:5px;
}

.cato-typing{
  width:max-content;
  color:#7e22ce;
  background:#f3e8ff;
  border:1px solid #eadcff;
  padding:10px 13px;
  border-radius:16px;
  margin-bottom:11px;
  font-size:13px;
  font-weight:800;
}

.cato-followups{
  display:flex;
  flex-wrap:wrap;
  gap:6px;
  margin-top:9px;
}

.cato-followups button{
  border:none;
  padding:7px 10px;
  border-radius:999px;
  color:#fff;
  background:linear-gradient(135deg,#35105d,#b46cff);
  font-size:12px;
  font-weight:900;
  cursor:pointer;
}

.cato-wa{
  display:inline-block;
  color:#fff !important;
  text-decoration:none;
  padding:10px 12px;
  border-radius:12px;
  margin-top:8px;
  font-weight:900;
  background:linear-gradient(135deg,#ff6bb5,#b46cff,#00e5ff);
}

.cato-input{
  display:flex;
  border-top:1px solid #eadcff;
  background:#fff;
}

.cato-input input{
  flex:1;
  border:none;
  outline:none;
  padding:16px;
  font-size:14px;
}

.cato-input button{
  width:58px;
  border:none;
  color:#fff;
  cursor:pointer;
  font-size:20px;
  background:linear-gradient(135deg,#b46cff,#00e5ff);
}

/* TABLET / IPAD */
@media(min-width:601px) and (max-width:1024px){
  .cato-panel{
    left:50%;
    right:auto;
    bottom:28px;
    transform:translateX(-50%);
    width:min(720px,calc(100vw - 40px));
    height:min(720px,calc(100vh - 70px));
    border-radius:30px;
  }
}

/* MOBILE FULL SCREEN */
@media(max-width:600px){
  .cato-widget{
    right:0;
    bottom:0;
  }

  .cato-launcher{
    position:fixed;
    right:12px;
    bottom:12px;
  }

  .cato-welcome{
    left:12px;
    right:12px;
    bottom:82px;
    width:auto;
  }

  .cato-panel{
    inset:0;
    width:100vw;
    height:100vh;
    max-width:100vw;
    max-height:100vh;
    border-radius:0;
    border:none;
  }

  .cato-header{
    padding:15px 14px;
  }

  .cato-quick{
    grid-template-columns:repeat(4,1fr);
    gap:6px;
    padding:8px;
  }

  .cato-quick button{
    font-size:10.5px;
    padding:8px 3px;
  }

  .cato-msg{
    max-width:92%;
    font-size:13.5px;
  }

  .cato-input input{
    padding:17px 14px;
  }
}
</style>

<script>
function toggleMenu(){
  document.getElementById("navMenu").classList.toggle("active");
}

document.addEventListener("mousemove", function(e){
  document.body.style.setProperty("--mx", e.clientX + "px");
  document.body.style.setProperty("--my", e.clientY + "px");
});

document.addEventListener("DOMContentLoaded", function(){
  setupReveal();
  greetCato();

  const seen = localStorage.getItem("cato_seen");
  if(!seen){
    setTimeout(function(){
      const welcome = document.getElementById("catoWelcome");
      const panel = document.getElementById("catoPanel");
      if(welcome && panel.style.display !== "flex"){
        welcome.style.display = "block";
        localStorage.setItem("cato_seen","yes");
      }
    },2200);
  }
});

function setupReveal(){
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add("active");
      }
    });
  },{threshold:.12});

  reveals.forEach(function(el){
    observer.observe(el);
  });
}

function closeCatoWelcome(){
  document.getElementById("catoWelcome").style.display = "none";
}

function openCatoFromWelcome(){
  closeCatoWelcome();
  openCato();
}

function toggleCato(){
  const panel = document.getElementById("catoPanel");
  panel.style.display = panel.style.display === "flex" ? "none" : "flex";
  closeCatoWelcome();
}

function openCato(){
  document.getElementById("catoPanel").style.display = "flex";
  closeCatoWelcome();
}

function openCatoDemo(){
  openCato();
  addCatoBot("You opened my live demo 💜 I’m CATO, your smart digital companion. I can guide visitors about websites, WordPress, pricing, Excel tools, trading journals and project quotes ✨",["pricing","website","quote"]);
}

const catoChat = document.getElementById("catoChat");

function catoFollowups(buttons){
  if(!buttons || !buttons.length) return "";
  const labels = {
    website:"🌐 Website",
    cato:"💜 CATO",
    wordpress:"🧩 WordPress",
    pricing:"💰 Pricing",
    excel:"📊 Excel",
    trading:"📈 Trading",
    quote:"⚡ Quote",
    payment:"💳 Payment",
    contact:"📲 WhatsApp",
    mobile:"📱 Mobile",
    seo:"🔎 SEO",
    logo:"🎨 Logo",
    portfolio:"🏆 Portfolio"
  };
  let html = "<div class='cato-followups'>";
  buttons.forEach(function(btn){
    html += "<button onclick=\"quickCato('" + btn + "')\">" + (labels[btn] || btn) + "</button>";
  });
  html += "</div>";
  return html;
}

function addCatoUser(text){
  const d = document.createElement("div");
  d.className = "cato-msg user";
  d.textContent = text;
  catoChat.appendChild(d);
  catoChat.scrollTop = catoChat.scrollHeight;
}

function addCatoBot(html, buttons){
  const d = document.createElement("div");
  d.className = "cato-msg bot";
  d.innerHTML = html + catoFollowups(buttons);
  catoChat.appendChild(d);
  catoChat.scrollTop = catoChat.scrollHeight;
}

function showCatoTyping(callback){
  const typing = document.createElement("div");
  typing.className = "cato-typing";
  typing.innerHTML = "CATO is typing 💜...";
  catoChat.appendChild(typing);
  catoChat.scrollTop = catoChat.scrollHeight;

  setTimeout(function(){
    typing.remove();
    callback();
  },520);
}

function clearCato(){
  catoChat.innerHTML = "";
  greetCato();
}

function greetCato(){
  const h = new Date().getHours();
  let greeting = "Hi";
  if(h < 12) greeting = "Good morning";
  else if(h < 18) greeting = "Good afternoon";
  else greeting = "Good evening";

  const status = document.getElementById("catoStatus");
  if(status) status.innerText = greeting + " 💜";

  if(catoChat && catoChat.innerHTML.trim() === ""){
    addCatoBot(greeting + ", I’m CATO 💜<br>I’m your smart digital companion. I can help you with 3D websites, WordPress, pricing, AI chatbot, Excel automation, trading tools and quotes ✨",["website","pricing","quote","cato"]);
  }
}

function quickCato(type){
  const labels = {
    website:"Website",
    cato:"CATO",
    wordpress:"WordPress",
    pricing:"Pricing",
    excel:"Excel",
    trading:"Trading",
    quote:"Quote",
    payment:"Payment",
    contact:"WhatsApp",
    mobile:"Mobile layout",
    seo:"SEO",
    logo:"Logo",
    portfolio:"Portfolio"
  };

  addCatoUser(labels[type] || type);
  showCatoTyping(function(){
    const ans = catoAnswers[type] || catoAnswers.default;
    addCatoBot(ans.text, ans.buttons);
  });
}

function sendCato(){
  const input = document.getElementById("catoInput");
  const text = input.value.trim();
  if(!text) return;

  addCatoUser(text);
  input.value = "";

  showCatoTyping(function(){
    const type = detectCato(text);
    const ans = catoAnswers[type] || catoAnswers.default;
    addCatoBot(ans.text, ans.buttons);
  });
}

function catoEnter(e){
  if(e.key === "Enter") sendCato();
}

const catoAnswers = {
  website:{
    text:"Of course 💜 Dawood can build a premium 3D website with floating sections, modern animations, strong hero area, service cards, WhatsApp CTA and perfect layout for mobile, tablet and laptop.",
    buttons:["pricing","mobile","quote"]
  },
  cato:{
    text:"I’m CATO 💜 your cute smart website chatbot. I guide visitors, explain services, answer common questions, collect quote details and send serious clients to WhatsApp ✨",
    buttons:["quote","pricing","contact"]
  },
  wordpress:{
    text:"Yes 💜 Dawood can create WordPress websites too, including service pages, inquiry forms, booking forms, contact forms and email notification setup.",
    buttons:["pricing","quote","website"]
  },
  pricing:{
    text:"Pricing depends on project size ✨ Landing pages start from $80+, premium 3D websites from $250+, and WordPress websites from $300+. Final price depends on pages, animations, chatbot and features.",
    buttons:["quote","payment","website"]
  },
  excel:{
    text:"Yes 💜 Dawood can create Excel dashboards, trackers, reports, calculators, business sheets, trading journals and risk tools.",
    buttons:["quote","contact","trading"]
  },
  trading:{
    text:"Trading tools include XAUUSD journals, risk calculators, trade review sheets, strategy documents and discipline systems for better performance tracking.",
    buttons:["excel","quote","contact"]
  },
  payment:{
    text:"Payment options include Bank Transfer, USDT and Upwork contract depending on the project. For local clients, bank transfer is simple. For international clients, USDT or Upwork can work.",
    buttons:["quote","contact","pricing"]
  },
  quote:{
    text:"I’d love to help 💜 Send your project details on WhatsApp: website type, pages needed, design style, deadline and budget.<br><a class='cato-wa' href='https://wa.me/923428305707?text=Hi%20Dawood%2C%20I%20want%20a%20quote%20for%20my%20project.' target='_blank'>📲 Get Quote on WhatsApp</a>",
    buttons:["website","pricing","payment"]
  },
  contact:{
    text:"You can contact Dawood directly on WhatsApp or email 💜<br><a class='cato-wa' href='https://wa.me/923428305707' target='_blank'>📲 WhatsApp Dawood</a>",
    buttons:["quote","pricing"]
  },
  mobile:{
    text:"Yes 💜 This website is planned mobile-first. On phones, CATO opens as a full-screen chat page. On tablets, she opens in a larger centered panel. On laptops, she opens as a premium side chat box.",
    buttons:["cato","website","quote"]
  },
  seo:{
    text:"Dawood can add SEO-friendly titles, descriptions, keywords, service wording, fast navigation and clean content structure so your website is easier for Google and visitors to understand.",
    buttons:["website","quote"]
  },
  logo:{
    text:"First website clients can get a free premium logo concept 💜 The logo should match the website style and look clean on mobile, laptop and social profiles.",
    buttons:["website","quote"]
  },
  portfolio:{
    text:"Portfolio can include your certificate, demo landing page, CATO chatbot demo, Excel dashboard samples and future client website previews.",
    buttons:["website","cato","quote"]
  },
  default:{
    text:"I’m here with you 💜 You can ask me about 3D websites, WordPress, CATO chatbot, pricing, Excel automation, trading tools, payment, delivery time, SEO, mobile layout or quotes.",
    buttons:["website","pricing","quote","cato"]
  }
};

function detectCato(text){
  const t = text.toLowerCase();

  const groups = [
    {type:"wordpress", words:["wordpress","word press","wp","booking form","inquiry form","plugin","elementor"]},
    {type:"pricing", words:["price","pricing","cost","charges","package","packages","rate","rates","how much","budget"]},
    {type:"excel", words:["excel","sheet","dashboard","tracker","report","calculator","automation","data entry"]},
    {type:"trading", words:["trading","xauusd","gold","journal","risk","forex","strategy","trade"]},
    {type:"payment", words:["payment","pay","bank","usdt","upwork","transfer","advance"]},
    {type:"quote", words:["quote","proposal","hire","start project","order","deal","client"]},
    {type:"contact", words:["contact","whatsapp","number","email","telegram","call","message"]},
    {type:"mobile", words:["mobile","phone","iphone","android","responsive","tablet","ipad","laptop","desktop"]},
    {type:"seo", words:["seo","google","rank","search","meta","keyword","sitemap"]},
    {type:"logo", words:["logo","brand","branding","icon"]},
    {type:"portfolio", words:["portfolio","work","certificate","demo","sample","preview"]},
    {type:"cato", words:["cato","chatbot","bot","ai","assistant","girl","heart","cute"]},
    {type:"website", words:["website","web","site","landing","page","3d","design","developer","business website"]}
  ];

  for(let i=0;i<groups.length;i++){
    for(let j=0;j<groups[i].words.length;j++){
      if(t.includes(groups[i].words[j])) return groups[i].type;
    }
  }

  return "default";
}
</script>
