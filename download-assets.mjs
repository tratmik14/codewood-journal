import fs from 'node:fs/promises';
const dir=new URL('./dist/assets/',import.meta.url);
const data=await fetch('https://store.steampowered.com/api/appdetails?appids=2060160').then(r=>r.json());
for (const [i,s] of data['2060160'].data.screenshots.slice(0,3).entries()) {
 const r=await fetch(s.path_full);if(!r.ok)throw Error('Steam image failed');await fs.writeFile(new URL(`farmer-${i}.jpg`,dir),Buffer.from(await r.arrayBuffer()));
}
const books=[['algorithms','https://images.manning.com/360/480/resize/book/9/8a82fa7-21a9-4399-9e6b-571b04439bda/Bhargava-2ed-HI.png'],['deep','https://images.manning.com/360/480/resize/book/2/ead1417-2a34-44a5-b09a-e17fe5e0b1b8/trask.png'],['python','https://nostarch.com/sites/default/files/styles/uc_product_full/public/pcc3e_front.png']];
for(const [name,url] of books){try{const r=await fetch(url);if(!r.ok)throw Error(String(r.status));await fs.writeFile(new URL(`${name}.png`,dir),Buffer.from(await r.arrayBuffer()));console.log(name,'downloaded')}catch(e){console.log(name,'unavailable:',e.message)}}
