document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.getElementById('nav');
  window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>60));
  const burger=document.getElementById('navBurger'),mm=document.getElementById('mobileMenu');
  burger.addEventListener('click',()=>{burger.classList.toggle('open');mm.classList.toggle('open')});
  document.querySelectorAll('.mm-link').forEach(l=>l.addEventListener('click',()=>{burger.classList.remove('open');mm.classList.remove('open')}));
  const form=document.getElementById('contactForm');
  if(form)form.addEventListener('submit',e=>{e.preventDefault();const b=form.querySelector('.ctf-submit');b.textContent='Enquiry Sent ✓';b.style.background='#4a7c59';setTimeout(()=>{b.textContent='Send Enquiry';b.style.background='';form.reset()},3000)});
  const els=document.querySelectorAll('.proj-item,.sv-item,.sts-item,.sta-list span');
  els.forEach(el=>el.classList.add('reveal'));
  const obs=new IntersectionObserver(entries=>{entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*60);obs.unobserve(e.target)}})},{threshold:.08});
  els.forEach(el=>obs.observe(el));
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}}));
});
