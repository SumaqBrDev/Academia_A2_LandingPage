document.addEventListener('DOMContentLoaded', () => {
  // 1. NAVBAR SCROLL BEHAVIOR
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. INTERSECTION OBSERVER — Reveal on scroll
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach((el, index) => {
    // Add staggered delay for grid items
    if (el.classList.contains('service-card') || el.classList.contains('amenity-card')) {
      el.style.transitionDelay = `${(index % 4) * 100}ms`;
    }
    revealObserver.observe(el);
  });

  // 3. COUNTER ANIMATION — Stats section
  const animateCounter = (element) => {
    const target = parseFloat(element.getAttribute('data-target'));
    const duration = 1800; // 1800ms
    const startTime = performance.now();
    const isFloat = target % 1 !== 0;

    const updateCounter = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // easeOutCubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      const currentVal = target * easeProgress;
      element.innerText = isFloat ? currentVal.toFixed(2) : Math.floor(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.innerText = target;
      }
    };

    requestAnimationFrame(updateCounter);
  };

  const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        animateCounter(counter);
        observer.unobserve(counter);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.stat__value').forEach(stat => {
    statsObserver.observe(stat);
  });

  // 4. HIGHLIGHT TODAY — Horários
  const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
  const scheduleItems = document.querySelectorAll('.schedule__item');
  
  if (scheduleItems.length >= 3) {
    if (today >= 1 && today <= 5) {
      // Monday to Friday
      scheduleItems[0].classList.add('today');
    } else if (today === 6) {
      // Saturday
      scheduleItems[1].classList.add('today');
    } else if (today === 0) {
      // Sunday
      scheduleItems[2].classList.add('today');
    }
  }

  // 5. HERO PARALLAX (desktop only)
  const heroBg = document.querySelector('.hero__bg');
  if (window.innerWidth > 768 && heroBg) {
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY;
      if (scrollPos < window.innerHeight) {
        heroBg.style.transform = `translateY(${scrollPos * 0.3}px)`;
      }
    });
  }

  // 6. MOBILE MENU
  const menuToggle = document.querySelector('.navbar__toggle');
  const navLinks = document.querySelector('.navbar__links');
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isExpanded = navLinks.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 7. SMOOTH SCROLL
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Calculate offset for fixed navbar
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
