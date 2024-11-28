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
////cập nhật video
let currentIndex = 0;
const videos = [
  "video-1.mp4",
  "video-2.mp4",
  "video-3.mp4"
];

const videoContainer = document.querySelector('.video-container');
const currentVideoElement = document.querySelector('.current-video video');
const previousVideoElement = document.querySelector('.previous-video video');
const nextVideoElement = document.querySelector('.next-video video');

function changeVideo() {
  // Cập nhật video hiện tại
  currentVideoElement.src = videos[currentIndex];
  
  // Cập nhật video tiếp theo và video trước
  previousVideoElement.src = videos[(currentIndex - 1 + videos.length) % videos.length];
  nextVideoElement.src = videos[(currentIndex + 1) % videos.length];
}

// Previous Button Logic
document.getElementById('prevBtn').addEventListener('click', function() {
  currentIndex = (currentIndex - 1 + videos.length) % videos.length;
  changeVideo();
});

// Next Button Logic
document.getElementById('nextBtn').addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % videos.length;
  changeVideo();
});

// Đầu tiên gọi changeVideo để hiển thị video đầu tiên
changeVideo();
