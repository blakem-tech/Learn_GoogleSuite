/* Google Docs Essentials: content + tiny hash router. Edit the LESSONS array to change content. */
const LESSONS = [
{id:'l1',t:'Getting started',goal:`Create, name, save and find a document.`,
steps:[
`Go to <b>docs.google.com</b> and click <b>Blank document</b>.`,
`Click <b>Untitled document</b> at the top left and type a clear name, such as <i>Lastname_Lesson1</i>.`,
`Meet the screen: menu bar (File, Edit, View, Insert, Format, Tools), toolbar, ruler, page, and the <b>Share</b> button at the top right.`,
`There is no Save button. Look for “Saved to Drive” near the title; Docs saves as you type.`,
`Find files again at <b>drive.google.com</b>. You can rename, move, copy (<b>File &gt; Make a copy</b>) or delete. Trash keeps files for 30 days.`],
try:`Create <i>Lastname_Lesson1</i>, type three sentences about yourself, close the tab, reopen the file from the Docs home page, and make a copy.`,
check:[[`Where is your document stored?`,`Google Drive.`],[`Do you need to press Save?`,`No. Docs autosaves.`]]},
{id:'l2',t:'Formatting text',goal:`Select and format text quickly and consistently.`,
steps:[
`Select text: drag, double-click a word, triple-click a paragraph, or <kbd>Ctrl</kbd>+<kbd>A</kbd> (Cmd+A on Mac) for everything.`,
`Choose one readable font at 11–12 pt for body text. Use <kbd>Ctrl</kbd>+<kbd>B</kbd>, <kbd>I</kbd>, <kbd>U</kbd> for bold, italic and underline, for emphasis only.`,
`Set alignment with <b>Format &gt; Align &amp; indent</b> and spacing with <b>Format &gt; Line &amp; paragraph spacing</b> (1.5 or 2.0 is common for school papers).`,
`Make lists with <b>Format &gt; Bullets &amp; numbering</b>. Press <kbd>Tab</kbd> to indent an item.`,
`Undo with <kbd>Ctrl</kbd>+<kbd>Z</kbd>, redo with <kbd>Ctrl</kbd>+<kbd>Y</kbd>.`,
`Copy formatting with the <b>Paint format</b> roller: select formatted text, click the roller, then click or drag over the target.`,
`Paste without old formatting using <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd>. Remove formatting with <b>Format &gt; Clear formatting</b>.`],
try:`Type: “Healthy Study Habits. Plan your time. Pick a quiet place. Put your phone away. Take short breaks. Review notes the same day.” Make the first line bold, centered and 16 pt. Turn the rest into a bulleted list with 1.5 spacing. Use Paint format to copy the title style onto a new line.`,
check:[[`Which shortcut pastes without formatting?`,`Ctrl+Shift+V (Cmd+Shift+V on Mac).`],[`How do you copy formatting from one text to another?`,`Paint format.`]]},
{id:'l3',t:'Styles & structure',goal:`Use heading styles to organise a document and build a table of contents.`,
steps:[
`Headings made with the <b>Styles</b> box (it says “Normal text”) give Docs an outline, a table of contents, and better screen reader support. Big bold text does not.`,
`Click a line, open the Styles box, and choose Title, Heading 1, Heading 2 or Heading 3. Shortcut: <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>1</kbd>, <kbd>2</kbd>, <kbd>3</kbd> (Cmd+Option on Mac).`,
`Use Title for the document name, Heading 1 for main sections, Heading 2 for subsections.`,
`Change a style everywhere at once: format one heading, keep it selected, open Styles, hover the style name and choose <b>Update ‘Heading 1’ to match</b>.`,
`Open the left sidebar to see the outline. Click a heading to jump to it.`,
`Insert a table of contents with <b>Insert &gt; Table of contents</b>. After you edit headings, click it and press the refresh button.`],
try:`Create <i>Study Skills Guide</i> with a title and four Heading 1 sections: Planning, Focus, Note-taking, Review. Add two Heading 2 subsections under each, then a table of contents at the top. Change the Heading 1 colour and update the style to match.`,
check:[[`Why use a Heading style instead of big bold text?`,`Docs reads it as structure: outline, table of contents, accessibility, one-step changes.`],[`How does a table of contents update?`,`Click it and press refresh.`]]},
{id:'l4',t:'Page layout',goal:`Set up pages so a document looks finished and prints well.`,
steps:[
`Open <b>File &gt; Page setup</b> for orientation, paper size and margins. One inch (2.54 cm) is standard.`,
`Add page numbers with <b>Insert &gt; Page numbers</b>.`,
`Use <b>Insert &gt; Headers &amp; footers</b> for a repeating title, name or date.`,
`Start a new page with <b>Insert &gt; Break &gt; Page break</b> (<kbd>Ctrl</kbd>+<kbd>Enter</kbd>). Never press Enter repeatedly.`,
`Use <b>Format &gt; Columns</b> for newsletter layouts.`,
`<b>Pageless</b> mode (in Page setup) suits reading on screen. Switch back to Pages to print or submit.`],
try:`Open <i>Study Skills Guide</i>. Set 1-inch margins, add bottom page numbers, put your name and the title in the header, and insert a page break before the last section.`,
check:[[`Where do you change margins?`,`File > Page setup.`],[`Why use a page break instead of Enter?`,`It stays correct when the text above changes.`]]},
{id:'l5',t:'Images, tables & links',goal:`Add visuals and references, then arrange them neatly.`,
steps:[
`Add a picture with <b>Insert &gt; Image</b>. Only use images you have permission to use.`,
`Click the image to choose <b>In line</b>, <b>Wrap text</b> or <b>Break text</b>. Drag the corners to resize.`,
`Right-click the image &gt; <b>Alt text</b> and describe it in a sentence for screen reader users.`,
`Insert a grid with <b>Insert &gt; Table</b>. Right-click a cell to add rows or columns. Shade and bold the header row.`,
`Open <b>Table properties</b> (right-click) to set borders and padding.`,
`Select text and press <kbd>Ctrl</kbd>+<kbd>K</kbd> to add a link. Use descriptive link text, not “click here”.`,
`Add a footnote with <b>Insert &gt; Footnote</b> (<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>F</kbd>) and a bookmark with <b>Insert &gt; Bookmark</b>.`],
try:`In <i>Study Skills Guide</i> add a weekly planner table (Day, Task, Done; 6 rows) with a styled header, one image with wrapped text and alt text, one link, and one footnote.`,
check:[[`Name the three image text-wrap options.`,`In line, Wrap text, Break text.`],[`What is alt text for?`,`It describes an image for people who can’t see it.`]]},
{id:'l6',t:'Collaboration',goal:`Share a document safely and work with others without losing anything.`,
steps:[
`Click <b>Share</b>. Add people by email or change General access to “Anyone with the link”. Roles: <b>Viewer</b> reads, <b>Commenter</b> comments and suggests, <b>Editor</b> changes anything.`,
`Give the lowest role that lets the person do their job, and check the link setting before you send.`,
`Switch between <b>Editing</b>, <b>Suggesting</b> and <b>Viewing</b> with the pencil button at the top right. Suggestions can be accepted or rejected.`,
`Select text and press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>M</kbd> to comment. Reply, then <b>Resolve</b> when done.`,
`Type <b>@</b> and a name in a comment to notify someone. Tick <b>Assign to</b> to make it a task.`,
`Open <b>File &gt; Version history &gt; See version history</b> to browse and restore older versions. Use <b>Name current version</b> for milestones.`],
try:`In pairs: share your document with a partner as Commenter. They leave two comments and make one change in Suggesting mode. Accept one suggestion, reject one, reply to a comment and resolve it. Name the current version “After feedback”.`,
check:[[`Which role can comment but not edit directly?`,`Commenter.`],[`How do you recover last week’s version?`,`Version history, then restore.`]]},
{id:'l7',t:'Productivity tools',goal:`Work faster and finish documents with confidence.`,
steps:[
`<b>Edit &gt; Find and replace</b> (<kbd>Ctrl</kbd>+<kbd>H</kbd>). Check matches before using Replace all.`,
`<b>Tools &gt; Spelling and grammar</b> checks your writing. Read each suggestion before accepting it.`,
`<b>Tools &gt; Word count</b> (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>C</kbd>). <b>Tools &gt; Voice typing</b> (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>S</kbd>) works in Chrome; say “period” or “new line” for punctuation.`,
`Type <b>@</b> to insert smart chips such as people, dates and files. <b>Insert &gt; Dropdown</b> makes clickable status lists.`,
`<b>Insert &gt; Building blocks</b> and <b>File &gt; New &gt; From template gallery</b> (if available) give ready-made layouts.`,
`<b>File &gt; Download</b> exports to Word (.docx), PDF and more. Use PDF for a final copy nobody should edit.`],
try:`Use Find and replace to change a repeated word, add two sentences with voice typing, insert a dropdown with three statuses, and download the guide as a PDF.`,
check:[[`Shortcut for Find and replace?`,`Ctrl+H.`],[`Best file type for a final, uneditable copy?`,`PDF.`]]}
];
const CAP=[`Title (Title style) and your name`,`3+ Heading 1 sections and 2+ Heading 2 subsections`,`Table of contents at the top`,`Consistent body font and spacing`,`A bulleted or numbered list`,`A table with a styled header row`,`An image with alt text`,`One link and one footnote`,`Page numbers and a header`,`One page break, placed on purpose`,`Shared with your teacher as Commenter, with a resolved comment`,`A version named “Final”`];
const QUIZ=[
[`How is a Google Doc saved?`,[`Automatically to Drive`,`You must click Save`,`Only when you close it`,`Only when downloaded`],0],
[`Which shortcut pastes without formatting?`,[`Ctrl+V`,`Ctrl+Shift+V`,`Ctrl+Alt+V`,`Ctrl+P`],1],
[`Which tool copies formatting?`,[`Highlighter`,`Clear formatting`,`Paint format`,`Find and replace`],2],
[`What makes text appear in the table of contents?`,[`Bold`,`Larger font`,`A Heading style`,`A bookmark`],2],
[`Where do you change margins and orientation?`,[`Format > Text`,`Insert > Break`,`File > Page setup`,`Tools > Preferences`],2],
[`Best way to start a new page?`,[`Press Enter many times`,`Insert a page break`,`Add spaces`,`Change the font`],1],
[`Which image option lets text flow around it?`,[`In line`,`Wrap text`,`Crop`,`Replace image`],1],
[`Why add alt text?`,[`Make the image larger`,`Load faster`,`Describe it for screen reader users`,`Add a border`],2],
[`Which role can comment but not edit directly?`,[`Viewer`,`Commenter`,`Editor`,`Owner`],1],
[`Where can you restore an earlier version?`,[`Edit > Undo only`,`File > Version history`,`Tools > Word count`,`Insert > Bookmark`],1]
];
const PASS=8; /* correct answers needed (out of QUIZ.length) to earn the certificate */
const SHORT=[[`Bold / Italic / Underline`,`Ctrl+B / I / U`,`Cmd+B / I / U`],[`Undo / Redo`,`Ctrl+Z / Ctrl+Y`,`Cmd+Z / Cmd+Shift+Z`],[`Paste without formatting`,`Ctrl+Shift+V`,`Cmd+Shift+V`],[`Find / Find and replace`,`Ctrl+F / Ctrl+H`,`Cmd+F / Cmd+Shift+H`],[`Insert link`,`Ctrl+K`,`Cmd+K`],[`Heading 1 / 2 / 3`,`Ctrl+Alt+1 / 2 / 3`,`Cmd+Option+1 / 2 / 3`],[`Page break`,`Ctrl+Enter`,`Cmd+Enter`],[`Insert comment`,`Ctrl+Alt+M`,`Cmd+Option+M`],[`Word count`,`Ctrl+Shift+C`,`Cmd+Shift+C`],[`Show all shortcuts`,`Ctrl+/`,`Cmd+/`]];

const PAGES=[{id:'home',t:'Start here'},...LESSONS.map((l,i)=>({id:l.id,t:`${i+1}. ${l.t}`,lesson:true})),{id:'capstone',t:'Capstone project',sep:true},{id:'quiz',t:'Quiz'},{id:'resources',t:'Resources'}];
let done=[];try{done=JSON.parse(localStorage.getItem('done')||'[]')}catch(e){}
const save=()=>{try{localStorage.setItem('done',JSON.stringify(done))}catch(e){}};
const $=s=>document.querySelector(s);

function nav(cur){
  $('#nav').innerHTML=PAGES.map(p=>`${p.sep?'<hr>':''}<a href="#${p.id}" class="${done.includes(p.id)?'done':''}" ${p.id===cur?'aria-current="page"':''}>${p.lesson?'<span class="tick" aria-hidden="true"></span>':''}${p.t}${done.includes(p.id)?'<span class="sr" hidden> (completed)</span>':''}</a>`).join('');
  const n=LESSONS.filter(l=>done.includes(l.id)).length;
  $('#prog').textContent=`${n} of ${LESSONS.length} lessons complete`;
}
function pager(id){
  const i=PAGES.findIndex(p=>p.id===id),a=PAGES[i-1],b=PAGES[i+1];
  return `<div class="pager">${a?`<a class="btn alt" href="#${a.id}">Back: ${a.t}</a>`:'<span></span>'}${b?`<a class="btn" href="#${b.id}">Next: ${b.t}</a>`:''}</div>`;
}
function view(id){
  const l=LESSONS.find(x=>x.id===id);
  if(l){return `<h1>${l.t}</h1><p><span class="goal">${l.goal}</span></p>
  <h2>Learn</h2><ol>${l.steps.map(s=>`<li>${s}</li>`).join('')}</ol>
  <section class="try"><h2>Try it</h2><p>${l.try}</p></section>
  <h2>Check yourself</h2>${l.check.map(c=>`<details><summary>${c[0]}</summary><p>${c[1]}</p></details>`).join('')}
  <p><button class="alt" id="mark" aria-pressed="${done.includes(id)}">${done.includes(id)?'Completed':'Mark lesson complete'}</button></p>${pager(id)}`}
  if(id==='capstone')return `<h1>Capstone project</h1><p><span class="goal">Build a 2–3 page handbook for a real or imaginary club, team or class.</span></p>
  <p>Name your file <i>Lastname_Capstone</i>. Tick each item as you finish it.</p>
  <ul class="check">${CAP.map((c,i)=>`<li><label><input type="checkbox" id="c${i}"> ${c}</label></li>`).join('')}</ul>
  <h2>How it is scored (20 points)</h2><table><tr><th>Area</th><th>Points</th></tr><tr><td>Styles and table of contents</td><td>4</td></tr><tr><td>Formatting consistency</td><td>4</td></tr><tr><td>Page layout</td><td>3</td></tr><tr><td>Table, image, link, footnote, alt text</td><td>4</td></tr><tr><td>Sharing and collaboration</td><td>3</td></tr><tr><td>Neatness and readability</td><td>2</td></tr></table>${pager(id)}`;
  if(id==='quiz')return `<h1>Quiz</h1><p>This is the final assessment: ten questions. Score ${PASS} or more to earn your certificate. You can retake it as often as you like.</p><form id="qz">${QUIZ.map((q,i)=>`<fieldset><legend>${i+1}. ${q[0]}</legend>${q[1].map((o,j)=>`<label><input type="radio" name="q${i}" value="${j}"> ${o}</label>`).join('')}<p id="r${i}" aria-live="polite"></p></fieldset>`).join('')}<button type="submit">Check my answers</button></form><p id="score" role="status"></p><div id="cert"></div>${pager(id)}`;
  if(id==='resources')return `<h1>Resources</h1><h2>Keyboard shortcuts</h2><table><tr><th>Action</th><th>Windows / ChromeOS</th><th>Mac</th></tr>${SHORT.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</table>
  <h2>Help</h2><ul><li><a href="https://support.google.com/docs" target="_blank" rel="noopener">Google Docs Help Center</a></li><li><a href="https://docs.google.com" target="_blank" rel="noopener">Open Google Docs</a></li></ul>${pager(id)}`;
  return `<h1>Google Docs Essentials</h1><p><span class="goal">Go from first-time user to confident Docs author.</span></p>
  <p>Docs is a free word processor in your browser. Your work saves automatically, opens on any device, and lets you write with other people at the same time.</p>
  <h2>You will learn to</h2><ul><li>Create, name and find documents</li><li>Format text quickly and consistently</li><li>Use headings and build a table of contents</li><li>Set up pages with margins, numbers, headers and footers</li><li>Add images, tables, links and footnotes</li><li>Share and collaborate with comments and suggestions</li><li>Use time-saving tools and shortcuts</li></ul>
  <p>Work through the lessons in order. Finish the capstone and quiz to complete the course. It takes about five hours.</p><p><a class="btn" href="#l1">Start lesson 1</a></p>`;
}
function render(){
  let id=location.hash.slice(1);if(!PAGES.some(p=>p.id===id))id='home';
  nav(id);const m=$('#main');m.innerHTML=view(id);
  const p=PAGES.find(p=>p.id===id);document.title=(id==='home'?'':p.t+' – ')+'Google Docs Essentials';
  window.scrollTo(0,0);m.focus({preventScroll:true});
  const mk=$('#mark');if(mk)mk.onclick=()=>{done=done.includes(id)?done.filter(x=>x!==id):[...done,id];save();render()};
  const qz=$('#qz');if(qz)qz.onsubmit=e=>{e.preventDefault();let s=0;
    QUIZ.forEach((q,i)=>{const v=qz.elements['q'+i].value,r=$('#r'+i);
      if(v===String(q[2])){s++;r.innerHTML='<span class="good">Correct.</span>'}
      else r.innerHTML=`<span class="bad">${v===''?'Not answered.':'Not quite.'}</span> Answer: ${q[1][q[2]]}`});
    $('#score').innerHTML=`<b>Score: ${s} / ${QUIZ.length}</b>`;$('#cert').innerHTML='';
    if(s>=PASS)certUI(s);else $('#score').innerHTML+=` You need ${PASS} to earn the certificate. Review the lessons and try again.`;
    $('#score').scrollIntoView({block:'center'})};
}
/* Certificate: drawn on a canvas in the browser and saved as a PNG. Nothing is uploaded. */
function certUI(s){
  $('#cert').innerHTML=`<section class="try"><h2>You passed</h2><p>Enter your name as you want it to appear on your certificate.</p><p><label for="nm">Your name</label><input id="nm" maxlength="60" autocomplete="name"> <button type="button" id="mk">Create certificate</button></p><div id="out"></div></section>`;
  $('#mk').onclick=()=>{const n=$('#nm').value.trim();if(!n){$('#nm').focus();return}drawCert(n,s)};
  $('#nm').onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();$('#mk').click()}};
}
async function drawCert(name,s){
  try{await document.fonts.load('700 40px "Atkinson Hyperlegible"')}catch(e){}
  const W=1600,H=1130,c=document.createElement('canvas');c.width=W;c.height=H;
  const x=c.getContext('2d'),F='"Atkinson Hyperlegible",system-ui,Arial,sans-serif';
  x.fillStyle='#fff';x.fillRect(0,0,W,H);
  x.strokeStyle='#1a56c4';x.lineWidth=14;x.strokeRect(50,50,W-100,H-100);x.lineWidth=3;x.strokeRect(80,80,W-160,H-160);
  x.textAlign='center';x.fillStyle='#18222f';
  x.font=`700 80px ${F}`;x.fillText('Certificate of Completion',W/2,290);
  x.font=`400 38px ${F}`;x.fillText('This certifies that',W/2,410);
  let fs=130;do{x.font=`700 ${fs}px ${F}`;fs-=4}while(x.measureText(name).width>W-320&&fs>36);
  const w=x.measureText(name).width;x.fillStyle='#ffe066';x.fillRect(W/2-w/2-24,548,w+48,28);
  x.fillStyle='#18222f';x.fillText(name,W/2,570);
  x.font=`400 38px ${F}`;x.fillText('has successfully completed',W/2,690);
  x.font=`700 70px ${F}`;x.fillText('Google Docs Essentials',W/2,790);
  x.font=`400 34px ${F}`;x.fillText(`Final assessment score: ${s} / ${QUIZ.length}`,W/2,880);
  x.fillText(new Date().toLocaleDateString(undefined,{year:'numeric',month:'long',day:'numeric'}),W/2,950);
  c.toBlob(b=>{
    const url=URL.createObjectURL(b),fn=`Certificate_${name.replace(/[\\/:*?"<>|\s]+/g,'_')}.png`,file=new File([b],fn,{type:'image/png'});
    $('#out').innerHTML=`<img id="ci" style="max-width:100%;border:1px solid var(--line);margin:1rem 0"><p><a class="btn" id="dl">Download PNG</a> ${navigator.canShare&&navigator.canShare({files:[file]})?'<button type="button" class="alt" id="sh">Share image</button>':''}</p>`;
    $('#ci').src=url;$('#ci').alt=`Certificate of completion for ${name}`;$('#dl').href=url;$('#dl').download=fn;
    const sh=$('#sh');if(sh)sh.onclick=()=>navigator.share({files:[file],title:'Google Docs Essentials certificate'}).catch(()=>{});
  },'image/png');
}
addEventListener('hashchange',render);render();
