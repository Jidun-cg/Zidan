document.addEventListener('DOMContentLoaded', () => {
    const sapaContainer = document.getElementById('sapa-container');
    if (sapaContainer) {
    const btn = document.createElement('button');
    btn.textContent = 'Sapa Saya!';
    Object.assign(btn.style, {
        marginLeft: '8px',
        padding: '8px 12px',
        borderRadius: '8px',
        background: '#286ebf',
        color: '#fff',
        border: 'none',
        fontFamily: 'inherit',
        fontSize: '1em',
        cursor: 'pointer',
        transition: 'transform .25s, background .25s'
    });
    btn.addEventListener('mouseenter', () => btn.style.transform = 'scale(1.12)');
    btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1)');
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

  //efek ngetik
    const target = document.getElementById('brand-typing');
    if (target) {
        const fullText = 'Zidan Ruriano | Ilmu Komputer';
        const speed = 180; // kecepatan muncul
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
});

window.addEventListener("DOMContentLoaded", function () {
  if (window.location.hash) {
    window.scrollTo(0, 0);
    history.replaceState(null, null, window.location.pathname);
  }
});

