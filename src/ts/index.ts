// hero
document.addEventListener('DOMContentLoaded', function () {
  const hero = document.querySelector('.main-visual');
  const heroLead = document.querySelector('.main-visual_title');

  hero.classList.add('show');
  setTimeout(function () {
    heroLead.classList.add('show');
  }, 700);
});

// header
document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    if (scrollY > 0) {
      header.classList.add('show');
    } else {
      header.classList.remove('show');
    }
  });
});

// target observer
document.addEventListener('DOMContentLoaded', function () {
  const target = document.querySelectorAll('.js-target');

  const options = {
    root: null,
    rootMargin: '-50% 0px',
    threshold: 0,
  };

  const observer = new IntersectionObserver(isIntersect, options);

  target.forEach(function (target) {
    observer.observe(target);
  });

  function isIntersect(entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        activateItem(entry.target);
      }
    });
  }

  function activateItem(element) {
    element.classList.add('show');
  }
});

// sp menu
document.addEventListener('DOMContentLoaded', function () {
  const navTrg = document.querySelector('.menu-btn_trigger');
  const nav = document.querySelector('.sp-nav');
  const spAnkerLists = document.querySelectorAll('.sp-nav a[href^="#"]');

  navTrg.addEventListener('click', function () {
    if (!this.classList.contains('active')) {
      this.classList.add('active');
      nav.classList.add('active');
    } else {
      this.classList.remove('active');
      nav.classList.remove('active');
    }
  });

  spAnkerLists.forEach(function (link) {
    link.addEventListener('click', function () {
      navTrg.classList.remove('active');
      nav.classList.remove('active');
    });
  });
});

// anchor scroll
window.addEventListener('DOMContentLoaded', function () {
  const pcAnchorLinks = document.querySelectorAll('.navbar a[href^="#"]');

  pcAnchorLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
      window.scrollTo({
        top: targetOffsetTop,
        behavior: 'smooth',
      });
    });
  });
});
