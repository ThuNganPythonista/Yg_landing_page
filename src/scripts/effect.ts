// Disable scroll by setting overflow to 'hidden'
function disableScroll(): void {
  document.body.style.overflow = 'hidden';
}

// Enable scroll by restoring overflow to 'auto'
function enableScroll(): void {
  document.body.style.overflow = 'auto';
}

// Main function to control scroll behavior
function waitForPageLoad(): void {
  // Disable scroll initially
  disableScroll();

  // Wait until all resources are fully loaded
  window.addEventListener('load', () => {
    console.log('All resources have been loaded!');

    // Enable scroll once loading is complete
    enableScroll();
  });
}

// Call the main function
waitForPageLoad();

const navigation = document.getElementById('navigation') as HTMLElement;
const container = document.querySelector('.container') as HTMLElement;
const navImg = document.querySelector('.imgNav') as HTMLElement;
const nav_mobile = document.querySelector('.navigation-mobile') as HTMLElement;
container.addEventListener('scroll', () => {
  const scrollTop = container.scrollTop;

  // Ẩn/hiện thanh điều hướng
  navigation.classList.toggle('hidden', scrollTop <= window.innerHeight / 2);
  nav_mobile.classList.toggle('hidden', scrollTop <= window.innerHeight / 2);
  navImg.classList.toggle('hidden', scrollTop <= window.innerHeight / 2);

});

document.addEventListener('DOMContentLoaded', () => {
  const fadeInSections = document.querySelectorAll(
    '.fade-in-section'
  ) as NodeListOf<HTMLElement>;

  const observerOptions: IntersectionObserverInit = {
    root: null,
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeInSections.forEach((section) => observer.observe(section));
});

// toggle the 'hidden' class
function handleResponsiveImage(): void {
  const imageElement = document.querySelector<HTMLImageElement>('.mobile-image');

  if (imageElement) {
    if (window.innerWidth <= 1199) {
      imageElement.classList.remove('hidden');
    } else {
      imageElement.classList.add('hidden');
    }
  }
}

window.addEventListener('resize', handleResponsiveImage);

handleResponsiveImage();


const sections = document.querySelectorAll('.fade-in-section');

const handleScroll = () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      section.classList.add('visible'); // Gắn lớp để kích hoạt hiệu ứng
    }
  });
};

window.addEventListener('scroll', handleScroll);
