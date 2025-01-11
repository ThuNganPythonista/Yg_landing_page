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


// document.addEventListener("DOMContentLoaded", () => {
//   // Lấy tất cả các thẻ <a> trong danh sách
//   const anchorLinks = document.querySelectorAll(".list-item a");

//   // Thêm sự kiện hover cho từng thẻ <a>
//   anchorLinks.forEach((link) => {
//     link.addEventListener("mouseenter", () => {
//       // Khi hover, thêm padding 20px
//       (link as HTMLAnchorElement).style.padding = "20px";
//       (link as HTMLAnchorElement).style.transition = "all 0.3s ease";
//     });

//     link.addEventListener("mouseleave", () => {
//       // Khi không hover nữa, reset padding về giá trị mặc định
//       (link as HTMLAnchorElement).style.padding = "0";
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   // Lấy danh sách ul và các list-item
//   const list = document.querySelector(".list") as HTMLUListElement;
//   const listItems = document.querySelectorAll(".list-item");

//   // Thêm sự kiện hover cho từng list-item
//   listItems.forEach((item) => {
//     item.addEventListener("mouseenter", () => {
//       // Khi hover vào list-item, thay đổi gap của list
//       list.style.gap = "60px";
//     });

//     item.addEventListener("mouseleave", () => {
//       // Khi không hover nữa, khôi phục gap ban đầu
//       list.style.gap = "10px";
//     });
//   });
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const anchorLinks = document.querySelectorAll(".list-item");

//   anchorLinks.forEach((link) => {
//     const listItem = link.closest(".list-item") as HTMLElement; 

//     link.addEventListener("mouseenter", () => {
//       if (listItem) {
//         listItem.style.padding = "20px 10px";
//         listItem.style.transition = "all 0.3s ease"; 
//       }
//     });

//     link.addEventListener("mouseleave", () => {
//       if (listItem) {
//         listItem.style.padding = "initial";

//       }
//     });
//   });
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const links = document.querySelectorAll<HTMLAnchorElement>(".list-item a");
//   const icons = document.querySelectorAll<HTMLElement>(".list-item i"); 
//   icons.forEach((icon) => {
//     icon.addEventListener("mouseenter", () => {
//       icons.forEach((otherIcon) => {
//         if (otherIcon !== icon) {
//           otherIcon.style.fontSize = "15px"; 
//         }
//       });
//     });

//     icon.addEventListener("mouseleave", () => {
//       icons.forEach((otherIcon) => {
//         otherIcon.style.fontSize = "24px"; 
//       });
//     });
//   });

//   links.forEach((link) => {
//     link.addEventListener("mouseenter", () => {
//       links.forEach((otherLink) => {
//         if (otherLink !== link) {
//           otherLink.style.fontSize = "small"; 
//           otherLink.style.height = "1.7em";
//         }
//       });

//       link.style.height = "2.5em";
//     });

//     link.addEventListener("mouseleave", () => {
//       links.forEach((otherLink) => {
//         otherLink.style.fontSize = "1.2rem"; 
//         otherLink.style.height = "initial"; 
//       });
//     });
//   });
// });

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
