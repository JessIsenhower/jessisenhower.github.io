const button=document.querySelector('.menu-button');
const nav=document.querySelector('#site-nav');

const mobilePolish=document.createElement('style');
mobilePolish.textContent='@media(max-width:1024px){.menu-button{min-width:52px;min-height:44px;padding:10px 14px;font-size:14px;font-weight:700;line-height:1}.artifact-list{grid-template-columns:1fr!important}.artifact-list article,.artifact-list article:nth-child(odd),.artifact-list article:nth-child(even){padding:22px 0!important;border-right:0!important}}';
document.head.appendChild(mobilePolish);

if(button&&nav){
  const closeMenu=()=>{nav.classList.remove('open');button.setAttribute('aria-expanded','false');};
  button.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open));});
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeMenu();button.focus();}});
  document.addEventListener('click',event=>{if(!nav.contains(event.target)&&!button.contains(event.target))closeMenu();});
}
