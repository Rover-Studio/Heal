// 负责移动导航、画廊灯箱、键盘交互与平滑滚动
(function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if(toggle && nav){
    toggle.addEventListener('click',()=> nav.classList.toggle('show'))
  }

  // 画廊灯箱
  const thumbs = document.querySelectorAll('.thumb');
  const lb = document.getElementById('lightbox');
  const lbContent = lb && lb.querySelector('.lb-content');
  const lbCaption = lb && lb.querySelector('.lb-caption');
  const lbClose = lb && lb.querySelector('.lb-close');

  thumbs && thumbs.forEach(t=>{
    t.addEventListener('click',()=>{
      const caption = t.textContent.trim();
      const bg = t.getAttribute('style') || '';
      if(lb){
        lbContent.style.background = bg.replace('background:','');
        lbCaption.textContent = caption;
        lb.setAttribute('aria-hidden','false');
      }
    })
  })
  lbClose && lbClose.addEventListener('click',()=> lb.setAttribute('aria-hidden','true'))
  window.addEventListener('keydown',e=>{ if(e.key==='Escape' && lb) lb.setAttribute('aria-hidden','true') })

  // 平滑滚动（锚点）
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth'});
      }
    })
  })
})();
