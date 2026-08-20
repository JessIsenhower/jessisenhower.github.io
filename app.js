const button=document.querySelector('.menu-button');
const nav=document.querySelector('#site-nav');
if(button&&nav){
  const closeMenu=()=>{nav.classList.remove('open');button.setAttribute('aria-expanded','false');};
  button.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open));});
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeMenu();button.focus();}});
  document.addEventListener('click',event=>{if(!nav.contains(event.target)&&!button.contains(event.target))closeMenu();});
}

const championHeading=[...document.querySelectorAll('.coherence-page .section-intro h2')]
  .find(heading=>heading.textContent.trim()==='A champion is demonstrated through behavior.');
if(championHeading){
  const section=championHeading.closest('.preview-section');
  section.innerHTML=`<div class="shell"><div class="section-intro"><span class="coherence-label">Evidence over optimism</span><h2>Product champions create interest. Commercial champions create movement.</h2><p>MEDDPICC already expects a Champion to have influence, sell internally, and take the seller toward power. Coherence names the distinction because teams too often promote the person who likes the product into a role they have not earned.</p></div><div class="evidence"><article><h3 style="color:var(--orange)">Product champion</h3><ul><li>Believes in the solution and understands the use case</li><li>Provides product, process, and user insight</li><li>May advocate with peers or help shape requirements</li><li>Can be an important ally without organizational influence</li><li>Does not satisfy MEDDPICC Champion through enthusiasm alone</li></ul></article><article><h3 class="strong">Commercial champion</h3><ul><li>Has organizational influence and credibility</li><li>Sells the initiative internally when the seller is absent</li><li>Understands the business, funding, and decision path</li><li>Creates access to power and the economic buyer</li><li>Takes customer-owned action that moves the decision forward</li></ul></article></div><div class="sample" style="margin-top:18px"><span class="coherence-label">Deal inspection</span><h3>Do we have a commercial champion, or someone who really likes the product?</h3><p>A credible commercial champion requires observed evidence of <strong>influence, access, and internal action</strong>. A high engagement score cannot compensate for missing power or behavior. Product champion → commercial champion → power is a progression to test, not an assumption.</p></div></div>`;
}

const salesSystemCard=document.querySelector('a[href="coherence/sales-operating-system/"] p');
if(salesSystemCard){
  salesSystemCard.textContent='A designed enterprise selling system connecting executive priorities, compelling events, multi-threading, product-vs-commercial champion qualification, economic-buyer access, stage governance, delivery, and value realization.';
}
