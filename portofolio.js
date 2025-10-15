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

  // Navbar untk mobile= toggle + aksesibilitas
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    // Set ARIA attributes
    toggle.setAttribute('aria-controls', 'primary-navigation');
    toggle.setAttribute('aria-expanded', 'false');

    function closeMenu(){
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
    function openMenu(){
      links.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
    }
    function toggleMenu(){
      const isOpen = links.classList.contains('open');
      isOpen ? closeMenu() : openMenu();
    }
    toggle.addEventListener('click', toggleMenu);

    // Tutup setelah klik link (mobile)
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        // Hanya tutup kalau ukuran layar kecil
        if (window.matchMedia('(max-width:720px)').matches) closeMenu();
      });
    });
    // ESC untuk tutup
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
    // Klik luar untuk tutup
    document.addEventListener('click', (e) => {
      if (!links.contains(e.target) && !toggle.contains(e.target)) {
        if (links.classList.contains('open')) closeMenu();
      }
    });
    // Pastikan di desktop menu selalu terlihat
    const mq = window.matchMedia('(min-width:721px)');
    function handleDesk(){
      if (mq.matches) {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    }
    mq.addEventListener('change', handleDesk);
    handleDesk();
  } else {
    console.warn('Elemen .nav-toggle atau .nav-links tidak ditemukan.');
  }

  
    const target = document.getElementById('brand-typing');
    if (target) {
        const fullText =
          "Zidan Ruriano | Ilmu Komputer | Infokan Pemabaran";
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

  // Scroll reveal observe .reveal dan .reveal-pop
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal, .reveal-pop').forEach(el => io.observe(el));

  // Scroll ke atas button 
  const topBtn = document.querySelector('.scroll-top');
  if (topBtn){
    const onScroll = () => {
      if (window.scrollY > 300) topBtn.classList.add('show'); else topBtn.classList.remove('show');
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
});

window.addEventListener("DOMContentLoaded", function () {
  if (window.location.hash) {
    window.scrollTo(0, 0);
    history.replaceState(null, null, window.location.pathname);
  }
});

