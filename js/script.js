// =====================
// 共通スクロールアニメーション
// =====================
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      fadeObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0,
  rootMargin: "0px 0px -20% 0px"
});

document.querySelectorAll('.fadeUp').forEach(el => fadeObserver.observe(el));
document.querySelectorAll('.js-fade-section').forEach(el => fadeObserver.observe(el));
document.querySelectorAll('.pic_area_text').forEach(el => fadeObserver.observe(el));
document.querySelectorAll('.story-header-inner').forEach(el => fadeObserver.observe(el));
document.querySelectorAll('.favorite-title').forEach(el => fadeObserver.observe(el));
document.querySelectorAll('.eye_catch').forEach(el => fadeObserver.observe(el));


// =====================
// Swiper
// =====================
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.6,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  speed: 1200,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});


// =====================
// ストーリー線（ページスクロール連動）※修正版
// =====================
const section = document.querySelector('.our_story');
const timeline = document.querySelector('.timeline');

if (section && timeline) {
  window.addEventListener('scroll', () => {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const start = windowHeight;
    const end = -section.offsetHeight;

    let progress = (start - rect.top) / (start - end);
    progress = Math.min(Math.max(progress, 0), 1);

    timeline.style.setProperty('--line-height', (progress * 100) + '%');
  });
}


// =====================
// Q&A
// =====================
document.querySelectorAll('.qa_title').forEach(el => {
  fadeObserver.observe(el);
});

document.querySelectorAll('.qa-text, .qa-image').forEach(el => {
  fadeObserver.observe(el);
});

document.querySelectorAll('.qa-block').forEach(block => {
  const items = block.querySelectorAll('.qa-item');

  items.forEach((el, i) => {
    el.style.transitionDelay = (0.2 + i * 0.15) + 's';
    fadeObserver.observe(el);
  });
});


// =====================
// お気に入り
// =====================
const favos = document.querySelectorAll(".favorite");

const favObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;

      el.classList.add("show");
      el.querySelector(".favo-grid")?.classList.add("show");
      el.querySelector(".favo-list")?.classList.add("show");

      favObserver.unobserve(el);
    }
  });
}, {
  threshold: 0.2
});

favos.forEach(el => favObserver.observe(el));


// =====================
// ハンバーガー
// =====================
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('show');
  });

  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      nav.classList.remove('show');
    });
  });
}