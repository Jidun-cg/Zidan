document.addEventListener('DOMContentLoaded', () => {
    const sapaContainer = document.getElementById('sapa-container');
    if (sapaContainer) {
  const tip = document.createElement('div');
  tip.style.marginRight = '8px';
  sapaContainer.appendChild(tip);

const msgs = ["Selamat datang, Bung!", "Silahkan kunjungi sosial mediaku!"];
let i = 0,
  j = 0,
  del = false;
const typeTick = () => {
  const text = msgs[i];
  const next = del ? text.slice(0, j--) : text.slice(0, j++);
  tip.textContent = next + "\u200B";
  if (!del && j > text.length + 2) del = true;
  if (del && j <= 0) {
    del = false;
    i = (i + 1) % msgs.length;
    j = 0;
  }
  setTimeout(typeTick, del ? 50 : 60);
};
typeTick();

  const btn = document.createElement('button');
  btn.textContent = 'Sapa Saya!';
  btn.className = 'pixel-button';
  btn.style.marginTop = '20px';
  btn.addEventListener('click', () => alert('Halo, ayo kita gas mabar'));
  sapaContainer.appendChild(btn);
    } else {
    console.warn('Elemen #sapa-container tidak ditemukan.');
    }

  //navbar untuk mobile
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if (toggle && links) {
        toggle.addEventListener('click', () => links.classList.toggle('open'));
  } else {
        console.warn('Elemen .nav-toggle atau .nav-links tidak ditemukan.');
  }

  
    const target = document.getElementById('brand-typing');
    if (target) {
        const fullText = 'Zidan Ruriano | Ilmu Komputer';
        const speed = 350;
        let index = 0;

    function typeNext() {
      if (index <= fullText.length) {
        target.textContent = fullText.substring(0, index);
        index++;
        setTimeout(typeNext, speed);
      }
    }
    typeNext();
  } else {
    console.warn('Elemen #brand-typing tidak ditemukan.');
  }
  // suara tit tit tit
  try{
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    let ctx;
    function ensureCtx(){
      if (!ctx && AudioCtx) ctx = new AudioCtx();
      if (ctx && ctx.state === 'suspended') ctx.resume();
    }
    function beep(freq=880, dur=0.05, type='square', vol=0.06){
      ensureCtx();
      if (!ctx) return;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = type;
      o.frequency.value = freq;
      g.gain.value = vol;
      o.connect(g).connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + dur);
    }
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => beep(920, 0.04));
      el.addEventListener('click', () => beep(640, 0.07));
    });
  }catch(e){
    console.warn('Audio init failed', e);
  }
});

window.addEventListener("DOMContentLoaded", function () {
  if (window.location.hash) {
    window.scrollTo(0, 0);
    history.replaceState(null, null, window.location.pathname);
  }
});

