import fs from 'node:fs';
let p='dist/index.html',s=fs.readFileSync(p,'utf8').replaceAll('—',':').replaceAll('<svg viewBox="0 0 24 24">','<svg aria-hidden="true" viewBox="0 0 24 24">');fs.writeFileSync(p,s);
p='dist/style.css';s=fs.readFileSync(p,'utf8').replace('#66725f','#596652').replace(/((?:padding|margin|gap|column-gap|row-gap)(?:-top|-bottom|-left|-right)?\s*:\s*)([^;}]+)/g,(_,a,b)=>a+b.replace(/(\d+)px/g,(_,v)=>Math.round(Number(v)/4)*4+'px')).replace('transform:translateY(-4px) rotate(-2deg)','transform:none');
s+='\n.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}\n';fs.writeFileSync(p,s);
