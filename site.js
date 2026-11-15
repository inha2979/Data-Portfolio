(function(){
const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
function count(el){const end=parseInt(el.dataset.count.replace(/,/g,''),10);if(rm||!end)return;const t0=performance.now(),d=900;
 (function f(t){const k=Math.min((t-t0)/d,1),v=Math.round(end*(1-Math.pow(1-k,3)));el.textContent=v.toLocaleString('en-US');if(k<1)requestAnimationFrame(f)})(t0)}
const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);
 en.target.querySelectorAll('[data-count]').forEach(count)}}),{threshold:.2});
document.querySelectorAll('.anim,.stats,.fn,.key,.steps,.prins,.cards').forEach(el=>io.observe(el));
const tip=document.getElementById('tip');
document.addEventListener('pointermove',ev=>{const t=ev.target.closest&&ev.target.closest('[data-tip]');if(!t){tip.hidden=true;return}
 tip.textContent=t.dataset.tip;tip.hidden=false;const w=tip.offsetWidth;tip.style.left=Math.max(8,Math.min(ev.clientX-w/2,innerWidth-w-8))+'px';tip.style.top=(ev.clientY-38)+'px'});
const lb=document.getElementById('lb');
document.querySelectorAll('.zoom').forEach(b=>b.addEventListener('click',()=>{const im=lb.querySelector('img');im.src=b.dataset.full;im.alt=b.querySelector('img').alt;lb.showModal()}));
if(lb)lb.addEventListener('click',ev=>{if(ev.target===lb||ev.target.tagName==='BUTTON')lb.close()});
const fb=[...document.querySelectorAll('.filters button')],cards=[...document.querySelectorAll('.card')];
fb.forEach(b=>b.addEventListener('click',()=>{fb.forEach(o=>{o.classList.toggle('on',o===b);o.setAttribute('aria-pressed',o===b)});
 cards.forEach(c=>c.hidden=!(b.dataset.f==='all'||c.dataset.group===b.dataset.f))}));
const els=[...document.querySelectorAll('[data-en]')];els.forEach(el=>el.dataset.ko=el.innerHTML);
const btn=document.getElementById('lang');
function set(l){document.documentElement.lang=l;els.forEach(el=>el.innerHTML=l==='en'?el.dataset.en:el.dataset.ko);btn.textContent=l==='en'?'한국어':'EN';try{localStorage.setItem('data-lang',l)}catch(e){}}
btn.addEventListener('click',()=>set(document.documentElement.lang==='en'?'ko':'en'));
let s='ko';try{s=localStorage.getItem('data-lang')||'ko'}catch(e){}if(s==='en')set('en');
})();
