const button=document.querySelector('.menu-button');
const nav=document.querySelector('#site-nav');
if(button&&nav){
  const closeMenu=()=>{nav.classList.remove('open');button.setAttribute('aria-expanded','false');};
  button.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open));});
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeMenu();button.focus();}});
  document.addEventListener('click',event=>{if(!nav.contains(event.target)&&!button.contains(event.target))closeMenu();});
}
