  const navigation = document.getElementById('navigation');
  const container = document.querySelector('.container');

  container.addEventListener('scroll', () => {
    const scrollTop = container.scrollTop;

    // Show navigation on scroll beyond Slide 1
    if (scrollTop > window.innerHeight / 2) {
      navigation.classList.remove('hidden');
    } else {
      navigation.classList.add('hidden');
    }
  });
