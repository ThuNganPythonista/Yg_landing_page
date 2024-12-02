const navigation = document.getElementById('navigation') as HTMLElement;
const container = document.querySelector('.container') as HTMLElement;

container.addEventListener('scroll', () => {
  const scrollTop = container.scrollTop;

  if (scrollTop > window.innerHeight / 2) {
    navigation.classList.remove('hidden');
  } else {
    navigation.classList.add('hidden');
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const fadeInSections = document.querySelectorAll('.fade-in-section') as NodeListOf<HTMLElement>;

  const observerOptions: IntersectionObserverInit = {
    root: null, 
    threshold: 0.2, 
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  fadeInSections.forEach(section => observer.observe(section));
});