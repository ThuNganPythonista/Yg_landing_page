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

container.addEventListener('scroll', () => {
  const scrollTop = container.scrollTop;

  // Ẩn/hiện thanh điều hướng
  navigation.classList.toggle('hidden', scrollTop <= window.innerHeight / 2);

  // Kiểm tra nếu màn hình rộng >= 1025px
  if (window.innerWidth >= 1025) {
    navImg.classList.toggle('hidden', scrollTop <= window.innerHeight / 2);
  } else {
    // Luôn hiển thị navImg dưới 1025px
    navImg.classList.remove('hidden');
  }
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
