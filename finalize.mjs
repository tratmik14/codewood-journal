import fs from 'node:fs';
let p='dist/app.js',s=fs.readFileSync(p,'utf8');
const arrow='<svg class="arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg>';
s=s.replaceAll('↗',arrow);
s=s.replace("comments.map(c=>`<div class=\"comment-item\">","comments.map((c,i)=>`<div class=\"comment-item\">");
s=s.replace('${esc(c.text)}</p></div>', '${esc(c.text)}</p><button class="delete-comment chip" data-index="${i}">Удалить мой комментарий</button></div>');
s=s.replace("Начните разговор первым.</p>'}","Начните разговор первым.</p>';app.querySelectorAll('.delete-comment').forEach(b=>b.onclick=()=>{const data=read('comments',{});data[id].splice(Number(b.dataset.index),1);if(write('comments',data)){renderComments(id);toast('Комментарий удалён из этого браузера')}})}");
fs.writeFileSync(p,s);
fs.appendFileSync('dist/style.css','\n.arrow{width:14px;height:14px;fill:none;stroke:currentColor;stroke-width:1.6;flex-shrink:0;vertical-align:middle}.article .mini-book{width:170px;object-fit:contain}\n');
