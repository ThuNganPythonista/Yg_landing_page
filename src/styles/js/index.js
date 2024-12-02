  const navigation = document.getElementById('navigation');
  const container = document.querySelector('.container');

  container.addEventListener('scroll', () => {
    const scrollTop = container.scrollTop;

    if (scrollTop > window.innerHeight / 2) {
      navigation.classList.remove('hidden');
    } else {
      navigation.classList.add('hidden');
    }
  });
// tạo sự kiện khi click vào các liên kết điều hướng
document.querySelectorAll('.navigation a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Ngừng hành động mặc định của thẻ a

        // Cuộn mượt mà đến phần tử mục tiêu
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
document.querySelectorAll('.list-item a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Ngừng hành động mặc định của thẻ a

      // Cuộn mượt mà đến phần tử mục tiêu
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  });
});
document.getElementById('language-toggle').addEventListener('click', function () {
  const currentLanguage = this.getAttribute('data-language') || 'vi';
  const newLanguage = currentLanguage === 'vi' ? 'en' : 'vi';

  // Cập nhật thuộc tính để lưu trạng thái
  this.setAttribute('data-language', newLanguage);

  // Định nghĩa các bản dịch
  const translationMap = {
    vi: {
      "#slide2": "Trang chủ",
      "#slide3": "Về chúng tôi",
      "#slide4": "Dịch vụ",
      "#slide5": "Dự án",
      "#slide6": "Khách hàng",
      "#slide7": "Liên hệ",
    },
    en: {
      "#slide2": "Home",
      "#slide3": "About Us",
      "#slide4": "Services",
      "#slide5": "Projects",
      "#slide6": "Clients",
      "#slide7": "Contact",
    }
  };

  // Thay đổi nội dung của các liên kết
  document.querySelectorAll('nav a').forEach(anchor => {
    const href = anchor.getAttribute('href');
    anchor.textContent = translationMap[newLanguage][href];
  });
});
