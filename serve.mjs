import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('dist');
http.createServer((req,res)=>{let p;try{p=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));}catch{res.writeHead(400);res.end();return}if(!p.startsWith(root+path.sep)&&p!==root){res.writeHead(403);res.end();return}if(p===root||p.endsWith(path.sep))p=path.join(p,'index.html');const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml'};fs.readFile(p,(e,b)=>{if(e){res.writeHead(404);res.end('Not found');return}res.setHeader('Content-Type',types[path.extname(p)]||'application/octet-stream');res.end(b)})}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
