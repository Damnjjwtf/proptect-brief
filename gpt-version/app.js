const archiveURL='https://drive.google.com/file/d/1z4SRSSgL0Bqo1ZQqRbr-9BkvnyUZN0Jz/view';
const items=[
  {
    "id": "ploti-nov5",
    "section": "agents",
    "status": "verified",
    "badge": "Vendor claim · source checked",
    "title": "Can we spend less time chasing property records?",
    "category": "Public data · Ploti",
    "signal": "Ploti says it connects parcel, zoning and permit records to AI, with links back to official sources.",
    "evidence": "Its product page describes the workflow. We have not checked SF coverage, pricing or accuracy.",
    "opportunity": "Build a property research sheet together. JJ makes a simple page that collects source-linked permit and zoning notes; Jess chooses the questions buyers actually ask and reviews the answers.",
    "action": "Start with one SF property and three questions from Jess. JJ builds the page using official records first. Time the research and have Jess flag every missing or misleading detail.",
    "url": "https://www.ploti.ai/",
    "source": "Ploti · Product page",
    "date": "Checked Nov 5",
    "dateDetail": "Checked November 5, 2026 · Product page undated",
    "short": [
      "Less digging for records",
      "Ploti promises source-linked property research. Let’s check one SF example."
    ]
  },
  {
    "id": "recursive-nov5",
    "section": "agents",
    "status": "verified",
    "badge": "Vendor claim · source checked",
    "title": "AI search still depends on MLS access.",
    "category": "MLS tools · Recursive AI",
    "signal": "Solid Earth describes an AI assistant that turns plain-language questions into MLS searches.",
    "evidence": "Its October 28 walkthrough says results depend on the member’s permissions. It does not establish access for Jess.",
    "opportunity": "Build a search-request translator: Jess writes a real buyer request; JJ turns it into a checklist of listing filters and unanswered questions. Jess runs the search in her approved MLS.",
    "action": "Try five fictional buyer requests. Compare JJ’s generated filters with Jess’s own. Only explore an MLS connection after her provider confirms access.",
    "url": "https://solidearth.com/solid-earth-blog/recursive-ai-mls-workflow",
    "source": "Solid Earth · October 28 walkthrough",
    "date": "Oct 28 · checked Nov 5",
    "dateDetail": "Published October 28, 2026 · Checked November 5, 2026",
    "short": [
      "AI needs the right access",
      "A new MLS workflow is worth watching. Jess’s access comes first."
    ]
  },
  {
    "id": "calls-nov5",
    "section": "agents",
    "status": "verified",
    "badge": "Vendor claim · source checked",
    "title": "The handoff matters as much as the call.",
    "category": "Voice AI · CINC + Flair",
    "signal": "CINC says Call AI can qualify an inquiry, transfer the caller and save a transcript and summary.",
    "evidence": "We rechecked its September 15 post. These are vendor claims; we have not tested call quality or results.",
    "opportunity": "Prototype an inquiry-to-follow-up tool. JJ builds a form that turns inquiry notes into a short summary and draft reply; Jess defines the must-have details and edits the tone.",
    "action": "Use ten fictional inquiries. Jess scores the summaries for missing details and whether the reply is usable. Start with pasted notes before adding voice calls.",
    "url": "https://www.cincpro.com/blog/ai-phone-calls-in-real-estate",
    "source": "CINC · September 15 product post",
    "date": "Sep 15 · rechecked Nov 5",
    "dateDetail": "Published September 15, 2026 · Rechecked November 5, 2026",
    "short": [
      "Make the handoff useful",
      "Revisiting voice AI: does the summary help Jess follow up?"
    ]
  },
  {
    "id": "test-nov5",
    "section": "lab",
    "status": "illustrative",
    "title": "One property. One page. Is it useful?",
    "category": "Our next experiment · Public data",
    "signal": "Our idea: turn a few public records into a clear property research sheet.",
    "evidence": "This is a proposed experiment. We have not tested the format or a data tool.",
    "opportunity": "Make a reusable “Before we tour” sheet. JJ builds the template; Jess supplies the three questions she wants a buyer to consider. Together, turn checked property records into prompts for the conversation.",
    "action": "Give one completed sheet to Jess. Ask her to use it in a mock buyer conversation, then mark what to keep, cut or verify. Build a second sheet only if the first helps.",
    "url": "https://www.ploti.ai/",
    "source": "Inspiration · Ploti’s product approach",
    "date": "Proposed Nov 5",
    "dateDetail": "Proposed November 5, 2026 · Not yet tested",
    "tasks": [
      "Choose one property and client question",
      "Check three facts against official records",
      "Ask Jess what helped and what is missing"
    ],
    "short": [
      "Try one property sheet",
      "Three facts, linked sources, and Jess’s feedback."
    ]
  },
  {
    "id": "jessica",
    "section": "competitive",
    "status": "verified",
    "name": "Jessica Branson",
    "title": "Make Jess’s local knowledge easy to use.",
    "category": "Jessica Branson · Compass",
    "signal": "Jess’s Compass profile highlights her experience owning property and working in San Francisco.",
    "evidence": "The profile supports that description of her background. It does not independently verify her sales results.",
    "opportunity": "We could turn that experience into short answers to the questions buyers and sellers keep asking.",
    "action": "Pick one neighborhood question. Write a one-page answer and link the sources behind the facts.",
    "url": "https://www.compass.com/agents/jessica-branson/",
    "source": "Compass · Jessica Branson",
    "featured": true
  },
  {
    "id": "voice",
    "section": "agents",
    "status": "archive",
    "title": "Can AI take the first call?",
    "category": "Agent technology · Voice AI",
    "signal": "The October brief describes AI tools that ask buyers and sellers a few questions, then pass the conversation to an agent.",
    "evidence": "The review cites promotional claims from Flair Labs and CINC. We have not confirmed how well the calls or transfers work, or whether they bring in more business.",
    "opportunity": "A useful first test: does the agent get a clear summary of what the person needs?",
    "action": "Try ten made-up inquiries. Check what the summary misses and whether Jess would know what to ask next.",
    "url": "https://drive.google.com/file/d/1z4SRSSgL0Bqo1ZQqRbr-9BkvnyUZN0Jz/view",
    "source": "Recovered October intake review"
  },
  {
    "id": "housing",
    "section": "market",
    "status": "verified",
    "title": "What’s planned—and what’s actually built?",
    "category": "SF Market Signals · Housing",
    "signal": "SF Planning tracks completed homes and projects still in development. Those are two different measures of supply.",
    "evidence": "The city dashboard covers completed homes since 2005 and active projects. It does not tell us how many homes are currently for sale.",
    "opportunity": "We could help clients understand what a nearby project might mean, without treating every proposal as a finished building.",
    "action": "Pick one neighborhood. Check each project’s stage and the date of the data before writing a short update.",
    "url": "https://sfplanning.org/san-francisco-housing-dashboard",
    "source": "SF Planning · Housing Dashboard"
  },
  {
    "id": "danielle",
    "section": "competitive",
    "status": "verified",
    "name": "Danielle Lazier",
    "title": "Show clients what working together looks like.",
    "category": "Danielle Lazier · Vivre Real Estate",
    "signal": "Danielle Lazier’s site describes a small team serving SF buyers and sellers.",
    "evidence": "Her About page explains the team and its off-market and coming-soon marketing. This is how the team describes its service; we have not measured the results.",
    "opportunity": "We could make Jess’s process easier to understand, from the first conversation to the sale.",
    "action": "Outline the main steps for a seller. Say what happens, who handles it, and when the client needs to decide.",
    "url": "https://daniellelazier.com/about/",
    "source": "Danielle Lazier · About"
  },
  {
    "id": "ruth",
    "section": "competitive",
    "status": "verified",
    "name": "Ruth Krishnan",
    "title": "Make it clear who handles what.",
    "category": "Ruth Krishnan · The Krishnan Team",
    "signal": "The Krishnan Team describes dedicated support for listings, transactions and day-to-day operations.",
    "evidence": "Those roles appear on the team’s About page. We have not checked its ranking claims.",
    "opportunity": "We could look for places where a clearer handoff would save Jess time or keep a client better informed.",
    "action": "Walk through a sample transaction. Find one task where the owner or deadline is unclear.",
    "url": "https://ruthkrishnan.com/about/",
    "source": "The Krishnan Team · About"
  },
  {
    "id": "nina",
    "section": "competitive",
    "status": "verified",
    "name": "Nina Hatvany",
    "title": "How easy is it to get started?",
    "category": "Nina Hatvany · Team Hatvany Kitchen",
    "signal": "Team Hatvany Kitchen offers residential real estate services in San Francisco.",
    "evidence": "Its website describes the practice and Compass affiliation. It is a useful local comparison, not a basis for ranking the teams.",
    "opportunity": "We could compare how each site helps a buyer or seller take the first step.",
    "action": "Follow the team’s contact process, then review Jess’s. Note where a visitor might not know what to do next.",
    "url": "https://teamhatvany.com/",
    "source": "Team Hatvany Kitchen · Official website"
  },
  {
    "id": "erin",
    "section": "competitive",
    "status": "verified",
    "name": "Erin Thompson",
    "title": "Give readers something useful each month.",
    "category": "Erin Thompson · Compass",
    "signal": "Erin Thompson & Team promotes CityTalk, a monthly newsletter about real estate and life in San Francisco.",
    "evidence": "The newsletter is described on the team’s About page. We do not know how many people read it or become clients.",
    "opportunity": "A short local brief could give Jess a reason to stay in touch, with something readers can use.",
    "action": "Draft one edition: a neighborhood question, a reliable source and a short checklist.",
    "url": "https://erinthompson.com/about-us",
    "source": "Erin Thompson & Team · About"
  },
  {
    "id": "kevin",
    "section": "competitive",
    "status": "verified",
    "name": "Kevin Ho",
    "title": "Explain the details buyers might miss.",
    "category": "Kevin Ho · Vanguard Properties",
    "signal": "Kevin Ho’s brokerage profile connects his legal and design background with home walkthroughs and real estate commentary.",
    "evidence": "Vanguard describes his videos and writing. We have not independently checked audience sizes or sales results.",
    "opportunity": "We could try a short format where Jess explains one detail that changes how someone looks at a property.",
    "action": "Outline a walkthrough about one visible design tradeoff. Check any property-specific facts before including them.",
    "url": "https://vanguardproperties.com/agents/kevin-ho",
    "source": "Vanguard Properties · Kevin Ho"
  },
  {
    "id": "connectors",
    "section": "agents",
    "status": "archive",
    "title": "Can the AI use the data we need?",
    "category": "Agent technology · CRM + MLS",
    "signal": "The October brief covered ways to connect AI assistants to customer records and MLS listing data.",
    "evidence": "The review cites reporting about eXp and SourceRE. It does not confirm what Jess can access, what it costs, or how the data may be used.",
    "opportunity": "Start with one task Jess wants help with, then find out whether the needed data is available.",
    "action": "List the information that task needs, who provides it, and what access is allowed. Mark anything we still need to check.",
    "url": "https://drive.google.com/file/d/1z4SRSSgL0Bqo1ZQqRbr-9BkvnyUZN0Jz/view",
    "source": "Recovered October intake review"
  },
  {
    "id": "visibility",
    "section": "agents",
    "status": "archive",
    "title": "Does AI recommend Jess?",
    "category": "Agent technology · Search visibility",
    "signal": "The October brief found companies selling services meant to get agents mentioned in AI answers.",
    "evidence": "The evidence was promotional. We have not seen proof that these services lead to more recommendations or clients.",
    "opportunity": "We could first check how Jess appears today and what sources the answers use.",
    "action": "Try ten local real estate questions. Save the answers, sources and dates. Repeat the same questions before drawing conclusions.",
    "url": "https://drive.google.com/file/d/1z4SRSSgL0Bqo1ZQqRbr-9BkvnyUZN0Jz/view",
    "source": "Recovered October intake review"
  },
  {
    "id": "inventory",
    "section": "market",
    "status": "verified",
    "title": "Check what a housing number actually measures.",
    "category": "SF Market Signals · Source discipline",
    "signal": "SF Planning’s annual Housing Inventory records homes added, removed or changed.",
    "evidence": "The city says older figures can be revised as records improve. This report tracks housing stock, not homes listed for sale.",
    "opportunity": "A brief note explaining the measure and date would make our market updates more useful.",
    "action": "Use the city report for housing production. Use a separate, dated market report for sale prices and listings.",
    "url": "https://sfplanning.org/es/node/1645",
    "source": "SF Planning · Housing Inventory"
  },
  {
    "id": "lab-guide",
    "section": "lab",
    "status": "illustrative",
    "title": "Try a one-page neighborhood guide.",
    "category": "Opportunity Lab · Editorial",
    "signal": "Our idea: a short guide could help clients come to their first conversation with better questions.",
    "evidence": "This is a proposed test, inspired by how agents present their local knowledge. We have not tested it with clients.",
    "opportunity": "Find out whether one page helps before making a whole library.",
    "action": "Write the guide. Ask three willing readers to find an answer in it, and note what confuses them.",
    "url": "https://daniellelazier.com/about/",
    "source": "Inspiration · Danielle Lazier’s positioning",
    "tasks": [
      "Choose one neighborhood and question",
      "Attach three relevant sources",
      "Review with three people and record confusion"
    ]
  },
  {
    "id": "lab-handoff",
    "section": "lab",
    "status": "illustrative",
    "title": "Would better notes help Jess follow up?",
    "category": "Opportunity Lab · Operations",
    "signal": "Our idea: a simple summary format could keep important details from getting lost after an inquiry.",
    "evidence": "This is a proposed test. The October voice-AI research does not prove that better summaries improve results.",
    "opportunity": "We can try the format with made-up examples before using any customer information.",
    "action": "Compare ordinary notes with a structured summary for ten fictional inquiries. Count the details each version misses.",
    "url": "https://drive.google.com/file/d/1z4SRSSgL0Bqo1ZQqRbr-9BkvnyUZN0Jz/view",
    "source": "Inspiration · Recovered October research",
    "tasks": [
      "Write ten fictional inquiries",
      "Compare two summary formats",
      "Count omissions and document the result"
    ]
  },
  {
    "id": "lab-supply",
    "section": "lab",
    "status": "illustrative",
    "title": "Explain three stages of a housing project.",
    "category": "Opportunity Lab · Market education",
    "signal": "Our idea: showing three local projects could help readers understand the difference between planned and completed homes.",
    "evidence": "SF Planning separates completed homes from projects in development. We have not tested this explainer with readers.",
    "opportunity": "Make a confusing housing story easier to follow.",
    "action": "Choose three projects at different stages. Check the dates, write a short explanation, and ask a reader to describe the difference.",
    "url": "https://sfplanning.org/san-francisco-housing-dashboard",
    "source": "Inspiration · SF Planning dashboard",
    "tasks": [
      "Choose three projects and verify stages",
      "Record source dates",
      "Test the explainer with a reader"
    ]
  }
];
const labels={"verified":"Verified source","archive":"Needs verification","illustrative":"Illustrative experiment"};
const sections={"brief":["The Brief",""],"agents":["Agent Intelligence","Tools worth a closer look. Source checks are not product tests."],"market":["SF Market Signals","Housing data from SF Planning."],"competitive":["Competitive Intelligence","Jess and five other SF agents: what we can learn from their public sites."],"lab":["Opportunity Lab","Small ideas we could test together. None has been tested yet."],"saved":["Saved","Stored in this browser."]};
const concise={"jessica":["Jessica Branson","Turn local knowledge into answers clients can use."],"voice":["AI on the first call","Would Jess get the details she needs to follow up?"],"housing":["Planned or built?","A proposed home is not a completed home."],"danielle":["Danielle Lazier","A small team with a clear seller process."],"ruth":["Ruth Krishnan","Clear roles behind each transaction."],"nina":["Nina Hatvany","A family team serving San Francisco."],"erin":["Erin Thompson","Local coverage through CityTalk."],"kevin":["Kevin Ho","Property details explained through videos and writing."],"connectors":["Connecting the data","What can Jess’s AI tools actually access?"],"visibility":["Jess in AI search","Check what AI says today before paying to change it."],"lab-guide":["A neighborhood guide","Try one page with three readers."],"lab-handoff":["Better handoff notes","See what gets missed in ten made-up inquiries."],"lab-supply":["Explain housing plans","Help readers tell planned homes from finished ones."],"inventory":["Reading housing numbers","Check what the number measures—and when."]};
Object.assign(concise, {"ploti-nov5": ["Less digging for records", "Ploti promises source-linked property research. Let’s check one SF example."], "recursive-nov5": ["AI needs the right access", "A new MLS workflow is worth watching. Jess’s access comes first."], "calls-nov5": ["Make the handoff useful", "Revisiting voice AI: does the summary help Jess follow up?"], "test-nov5": ["Try one property sheet", "Three facts, linked sources, and Jess’s feedback."]});
let saved=new Set(),checks={};try{saved=new Set(JSON.parse(localStorage.getItem('jj-saved')||'[]'));checks=JSON.parse(localStorage.getItem('jj-checks')||'{}')}catch{}let filter='all',query='',section='brief';
const $=s=>document.querySelector(s);const cards=$('#cards');function persist(){try{localStorage.setItem('jj-saved',JSON.stringify([...saved]));localStorage.setItem('jj-checks',JSON.stringify(checks))}catch{toast('Browser storage unavailable; changes last for this session.')}}
function toast(s){$('#toast').textContent=s;$('#toast').classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),2200)}
function render(){section=location.hash.slice(1);if(!sections[section])section='brief';document.querySelectorAll('nav a').forEach(a=>{const active=a.hash==='#'+section;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});document.body.classList.toggle('brief-mode',section==='brief');$('#section-title').textContent=sections[section][0];$('#section-description').textContent=sections[section][1];$('#saved-count').textContent=saved.size;let visible=items.filter(i=>(section==='brief'?["ploti-nov5", "recursive-nov5", "calls-nov5", "test-nov5"].includes(i.id):section==='saved'?saved.has(i.id):i.section===section)&&(filter==='all'||i.status===filter)&&JSON.stringify(i).toLowerCase().includes(query));$('#result-count').textContent=visible.length+' '+(visible.length===1?'signal':'signals');$('#empty').hidden=!!visible.length;cards.innerHTML=visible.map((i,n)=>section==='brief'?`<article class="brief-entry"><p class="entry-meta">${String(n+1).padStart(2,'0')} / ${i.category}</p><h2>${concise[i.id][0]}</h2><p>${i.signal}</p><p class="evidence-line"><strong>Evidence.</strong> ${i.evidence} <a href="${i.url}" target="_blank" rel="noopener noreferrer">Source ↗</a></p><p class="opportunity-line"><strong>Opportunity.</strong> ${i.opportunity}</p><p><strong>Next step.</strong> ${i.action}</p>${askBox(i.id)}<p class="entry-date">${i.badge||labels[i.status]} · ${i.dateDetail||i.date}</p></article>`:`<article class="card ${i.featured?'featured':''}"><div class="card-top"><span class="badge ${i.status}">${i.badge||labels[i.status]}</span><button class="save" data-save="${i.id}" aria-label="${saved.has(i.id)?'Unsave':'Save'} ${i.name||i.title}" aria-pressed="${saved.has(i.id)}">${saved.has(i.id)?'◆':'◇'}</button></div><div class="category">${i.category}</div><h3>${concise[i.id][0]}</h3><p>${concise[i.id][1]}</p><div class="card-bottom"><span>${i.date||(i.status==='archive'?'October archive':'Checked Nov 4')}</span><button class="read" data-read="${i.id}">View →</button></div></article>`).join('')}
function openDetail(id){let i=items.find(x=>x.id===id);$('#detail-content').innerHTML=`<span class="badge ${i.status}">${i.badge||labels[i.status]}</span><p class="category" style="margin-top:20px">${i.category}</p><h2 class="detail-title">${i.title}</h2><p class="small">${i.dateDetail||('Research snapshot · November 4, 2026'+(i.status==='archive'?' · Archive dated October 17–18, 2026':''))}</p><div class="step"><h3>01 / Signal · What’s happening</h3><p>${i.signal}</p></div><div class="step"><h3>02 / Evidence · What we know</h3><p>${i.evidence}</p><a class="source" href="${i.url}" target="_blank" rel="noopener noreferrer">${i.source} ↗</a>${i.url===archiveURL?'<p class="small">You’ll need access to the original Google Drive file to read this.</p>':''}</div><div class="step"><h3>03 / Opportunity · Our take</h3><p>${i.opportunity}</p></div><div class="step"><h3>04 / Action · What we could try</h3><p>${i.action}</p></div>${i.tasks?`<div class="step checklist"><h3>Steps to try · saved on this device</h3>${i.tasks.map((t,n)=>`<label><input type="checkbox" data-check="${i.id}-${n}" ${checks[i.id+'-'+n]?'checked':''}>${t}</label>`).join('')}</div>`:''}<button class="primary" data-save="${i.id}">${saved.has(i.id)?'Remove from saved':'Save for later'}</button>`;$('#detail').showModal()}
document.addEventListener('click',e=>{const save=e.target.closest('[data-save]');if(save){let id=save.dataset.save;saved.has(id)?saved.delete(id):saved.add(id);persist();render();if($('#detail').open)$('#detail-content [data-save]').textContent=saved.has(id)?'Remove from saved':'Save for later';toast(saved.has(id)?'Saved for later':'Removed from saved')}const read=e.target.closest('[data-read]');if(read)openDetail(read.dataset.read);const f=e.target.closest('[data-filter]');if(f){filter=f.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('selected',b===f);b.setAttribute('aria-pressed',b===f)});render()}});
$('#detail').addEventListener('change',e=>{if(e.target.dataset.check){checks[e.target.dataset.check]=e.target.checked;persist()}});$('.close').onclick=()=>$('#detail').close();$('#detail').addEventListener('click',e=>{if(e.target===$('#detail')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close()}});$('#search').oninput=e=>{query=e.target.value.toLowerCase();render()};$('#saved').onclick=()=>{location.hash='saved'};window.addEventListener('hashchange',()=>{if(sections[location.hash.slice(1)]){filter='all';query='';$('#search').value='';document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('selected',b.dataset.filter==='all');b.setAttribute('aria-pressed',b.dataset.filter==='all')});render();if(section!=='brief')$('#signals').scrollIntoView({behavior:'smooth'})}});render();

function askBox(id){return `<section class="ask-box" data-ask-box="${id}" aria-label="Ask about this entry"><form data-ask="${id}"><label for="ask-${id}">Ask the brief</label><div class="ask-line"><input id="ask-${id}" name="question" required maxlength="2000" placeholder="What could we build first?" autocomplete="off"><button type="submit">Ask ↗</button></div></form><div class="ask-thread" aria-live="polite"></div><p class="ask-note">AI answers use this entry and the brief’s research. Replies saved privately. <button type="button" data-history="${id}">Earlier replies</button> · <button type="button" data-clear-chat="${id}">Clear</button></p></section>`}
function showExchange(box,role,content){const line=document.createElement('p');line.className='chat-'+role;const label=document.createElement('strong');label.textContent=role==='user'?'You: ':'Brief: ';line.append(label,document.createTextNode(content));box.querySelector('.ask-thread').append(line)}
document.addEventListener('submit',async e=>{const form=e.target.closest('[data-ask]');if(!form)return;e.preventDefault();const box=form.closest('.ask-box'),input=form.elements.question,button=form.querySelector('button'),question=input.value.trim();if(!question)return;button.disabled=true;button.textContent='Thinking…';showExchange(box,'user',question);try{const response=await fetch('/api/ask',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({entry_id:form.dataset.ask,question})});if(!response.headers.get('content-type')?.includes('application/json'))throw Error('The connection is unavailable. Reload the brief and try again.');const data=await response.json();if(!response.ok)throw Error(data.error||'Could not answer. Try again.');showExchange(box,'assistant',data.answer);input.value=''}catch(err){showExchange(box,'assistant',err.message)}finally{button.disabled=false;button.textContent='Ask ↗'}});
document.addEventListener('click',async e=>{const history=e.target.closest('[data-history]'),clear=e.target.closest('[data-clear-chat]');if(!history&&!clear)return;const button=history||clear,id=button.dataset.history||button.dataset.clearChat,box=button.closest('.ask-box');button.disabled=true;try{const response=await fetch('/api/history?entry_id='+encodeURIComponent(id),clear?{method:'DELETE'}:{});const data=await response.json();if(!response.ok)throw Error(data.error);box.querySelector('.ask-thread').replaceChildren();if(history){data.messages.forEach(m=>showExchange(box,m.role,m.content));if(!data.messages.length)showExchange(box,'assistant','No earlier replies for this entry yet.')}}catch(err){showExchange(box,'assistant',err.message||'Could not load replies.')}finally{button.disabled=false}});
