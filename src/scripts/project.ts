import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const leftArrow = document.querySelector(".fa-chevron-left");
const rightArrow = document.querySelector(".fa-chevron-right");
const slideShow = document.querySelector(".mySwiper");

const slideHtml = `
    <div class="swiper-slide">
      <video loop>
        <source src= "/media/logo-fix-5.mp4"type="video/mp4" />
      </video>
    </div>
  `;
  const slideHtmlSmaller = `
    <div class="swiper-slide">
      <video loop>
        <source src= "/media/logo-fix-sqr.mp4"type="video/mp4" />
      </video>
    </div>
  `;
const swiper = new Swiper(".mySwiper", {
  allowTouchMove: false,
  initialSlide: 4,
  slidesPerView: "auto",
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: -400,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 400,
    modifier: 1,
    slideShadows: true,
  },
  breakpoints: {
    1800: {
      allowTouchMove: false,
      initialSlide: 4,
      slidesPerView: "auto",
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      spaceBetween: -400,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 400,
        modifier: 1,
        slideShadows: true,
      },
    },
    1390: {
      allowTouchMove: false,
      initialSlide: 2,
      slidesPerView: "auto",
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      spaceBetween: -550,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 400,
        modifier: 1,
        slideShadows: true,
      },
    },
    1000: {
      allowTouchMove: false,
      initialSlide: 2,
      slidesPerView: "auto",
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      spaceBetween: -600,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 400,
        modifier: 1,
        slideShadows: true,
      },
    },
  },
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document
        .querySelector<HTMLVideoElement>(".swiper-slide-active video")
        ?.play();
    } else {
      document
        .querySelector<HTMLVideoElement>(".swiper-slide-active video")
        ?.pause();
    }
  });
});

observer.observe(slideShow!);


swiper.on("slideChangeTransitionEnd", () => {
  const allVideos = [
    ...document.querySelectorAll<HTMLVideoElement>(".swiper-slide video"),
  ];
  allVideos.forEach((video) => {
    video.currentTime = 0;
    video.pause();
  });

  const currentVideo = document.querySelector<HTMLVideoElement>(
    ".swiper-slide-active video"
  );
  currentVideo?.play();
});

swiper.on("slidePrevTransitionEnd", () => {
  swiper.removeSlide(swiper.slides.length - 1);
});

swiper.on("slideNextTransitionEnd", () => {
  swiper.removeSlide(0);
});


const mediaQuery = window.matchMedia("(min-width: 1390px)");
leftArrow?.addEventListener("click", async () => {
  if (mediaQuery.matches) {
    // Khi màn hình lớn hơn 1390px, thêm slideHtml
    swiper.prependSlide(slideHtml);
  } else {
    // Khi màn hình nhỏ hơn hoặc bằng 1390px, thêm slideHtmlSmaller
    swiper.prependSlide(slideHtmlSmaller);
  }
  await new Promise((resolve) => setTimeout(resolve, 10));
  swiper.slidePrev();
});

rightArrow?.addEventListener("click", async () => {
  if (mediaQuery.matches) {
    // Khi màn hình lớn hơn 1390px, thêm slideHtml
    swiper.appendSlide(slideHtml);
  } else {
    // Khi màn hình nhỏ hơn hoặc bằng 1390px, thêm slideHtmlSmaller
    swiper.appendSlide(slideHtmlSmaller);
  }
  await new Promise((resolve) => setTimeout(resolve, 10));
  swiper.slideNext();
});

let lastScrollY = 0; // Vị trí scroll trước đó
const scrollThreshold = 100; // Mỗi 100px scroll sẽ kích hoạt sự kiện

window.addEventListener("scroll", async () => {
  const currentScrollY = window.scrollY; // Vị trí scroll hiện tại

  if (currentScrollY - lastScrollY >= scrollThreshold) {
    lastScrollY = currentScrollY; // Cập nhật lại vị trí scroll trước đó

    // Thực hiện logic như khi bấm vào nút slideNext
    if (mediaQuery.matches) {
      // Khi màn hình lớn hơn 1390px, thêm slideHtml
      swiper.appendSlide(slideHtml);
    } else {
      // Khi màn hình nhỏ hơn hoặc bằng 1390px, thêm slideHtmlSmaller
      swiper.appendSlide(slideHtmlSmaller);
    }

    await new Promise((resolve) => setTimeout(resolve, 10));
    swiper.slideNext();
  }
});


// Đảm bảo Swiper được cập nhật đúng sau khi thêm hoặc xoá slide
swiper.on("slideNextTransitionEnd", () => {
  swiper.update(); // Cập nhật Swiper để đảm bảo nó nhận diện các slide mới
});

swiper.on("slidePrevTransitionEnd", () => {
  swiper.update(); // Cập nhật tương tự cho prev
});







