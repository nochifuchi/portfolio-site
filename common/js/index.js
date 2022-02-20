// hero
document.addEventListener('DOMContentLoaded', function() {
  const hero = document.querySelector('#main-visual');
  const heroLead = document.querySelector('#main-visual h2');

  hero.classList.add('show');
  setTimeout(function() {
    heroLead.classList.add('show');
  }, 700);
});

// navbar
document.addEventListener('DOMContentLoaded', function() {
  const navBar = document.querySelector('.navbar');

  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    if (scrollY > 0) {
      navBar.classList.add('show');
    } else {
      navBar.classList.remove('show');
    }
  })
});

// fade contents
document.addEventListener('DOMContentLoaded', function() {
  const fadeTarget = document.querySelectorAll(".js-fade");

  const options = {
    root: null,
    rootMargin: "-50% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver(isIntersect, options);

  fadeTarget.forEach(function(target) {
    observer.observe(target);
  });

  function isIntersect(entries) {
    entries.forEach(function(entry) {
      if(entry.isIntersecting) {
        activateItem(entry.target);
      }
    })
  }

  function activateItem(element) {
    element.classList.add('show');
  }
});

// sp menu
document.addEventListener('DOMContentLoaded', function() {
  const navTrg = document.querySelector('.nav-trigger');
  const nav = document.querySelector('.sp-g-nav nav');
  const spAnkerLists = document.querySelectorAll('.sp-g-nav a[href^="#"]');

  navTrg.addEventListener('click', function() {
    if(!this.classList.contains('active')) {
      this.classList.add('active');
      nav.classList.add('active');
    } else {
      this.classList.remove('active');
      nav.classList.remove('active');
    }
  });

  spAnkerLists.forEach(function(link) {
    link.addEventListener('click', function() {
      navTrg.classList.remove('active');
      nav.classList.remove('active');
    })
  });
});

// anchor scroll
window.addEventListener('DOMContentLoaded', function() {
  const pcAnchorLinks = document.querySelectorAll('.navbar a[href^="#"]');

  pcAnchorLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth"
      });
    });
  });
});