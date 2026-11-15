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
const tabs=[...document.querySelectorAll('.tabs [role=tab]')],slugs=tabs.map(t=>t.dataset.slug);
const pv=document.getElementById('prevc'),nx=document.getElementById('nextc');let cur=0;
function show(i,scroll){if(i<0||i>=tabs.length)return;cur=i;
 tabs.forEach((t,k)=>{const on=k===i;t.setAttribute('aria-selected',on);t.tabIndex=on?0:-1;document.getElementById('p-'+t.dataset.slug).hidden=!on});
 const p=document.getElementById('p-'+slugs[i]);
 p.querySelectorAll('.anim,.fn,.key').forEach(el=>{el.classList.remove('in');void el.getBoundingClientRect();requestAnimationFrame(()=>requestAnimationFrame(()=>el.classList.add('in')))});
 tabs[i].scrollIntoView({block:'nearest',inline:'center'});
 function lab(btn,k){btn.hidden=k<0||k>=tabs.length;if(!btn.hidden)btn.querySelector('b').innerHTML=tabs[k].querySelector('span').innerHTML}
 lab(pv,i-1);lab(nx,i+1);
 if(scroll){const y=document.getElementById('cases').getBoundingClientRect().top+scrollY-70;scrollTo({top:y,behavior:rm?'auto':'smooth'})}}
function go(i,scroll){show(i,scroll);try{history.replaceState(null,'','#'+slugs[i])}catch(e){}}
tabs.forEach((t,i)=>{t.addEventListener('click',()=>go(i,false));
 t.addEventListener('keydown',ev=>{const d=ev.key==='ArrowRight'?1:ev.key==='ArrowLeft'?-1:0;if(!d)return;ev.preventDefault();const k=(i+d+tabs.length)%tabs.length;go(k,false);tabs[k].focus()})});
if(pv){pv.addEventListener('click',()=>go(cur-1,true));nx.addEventListener('click',()=>go(cur+1,true))}
function fromHash(scroll){const k=slugs.indexOf(location.hash.slice(1));if(k>=0)show(k,scroll);return k>=0}
addEventListener('hashchange',()=>fromHash(true));
if(tabs.length){show(Math.max(0,slugs.indexOf(document.querySelector('.tabs').dataset.def)),false);if(fromHash(false))setTimeout(()=>fromHash(true),60)}
const els=[...document.querySelectorAll('[data-en]')];els.forEach(el=>el.dataset.ko=el.innerHTML);
const btn=document.getElementById('lang');
function set(l){document.documentElement.lang=l;els.forEach(el=>el.innerHTML=l==='en'?el.dataset.en:el.dataset.ko);if(tabs.length)show(cur,false);btn.textContent=l==='en'?'한국어':'EN';try{localStorage.setItem('data-lang',l)}catch(e){}}
btn.addEventListener('click',()=>set(document.documentElement.lang==='en'?'ko':'en'));
let s='ko';try{s=localStorage.getItem('data-lang')||'ko'}catch(e){}if(s==='en')set('en');
})();
