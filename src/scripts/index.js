document.querySelectorAll('.navigation a').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});
document.querySelectorAll('.list-item a, .title').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});
document
  .getElementById('language-toggle')
  .addEventListener('click', function () {
    const currentLanguage = this.getAttribute('data-language') || 'vi';
    const newLanguage = currentLanguage === 'vi' ? 'en' : 'vi';

    this.setAttribute('data-language', newLanguage);

    const translationMap = {
      vi: {
        '#slide2': 'Trang chủ',
        '#slide3': 'Về chúng tôi',
        '#slide4': 'Dịch vụ',
        '#slide5': 'Dự án',
        '#slide6': 'Khách hàng',
        '#slide7': 'Liên hệ',
        '.about-section .title': 'Về <span class="highlight">chúng tôi</span>',
        '.service-link': 'Dịch vụ',
        '.project-link': 'Dự án',
        '.customer-link': 'Khách hàng',
        '.contact-link': 'Liên hệ',
        '.container-slide3 .yg-team h1': 'ĐỘI NGŨ',
        '.container-slide3 .yg-team h2': 'YG',
        '.container-slide3 .yg-team p':
          "It's not just participation to customer<br />It needs to be an emotional experience",
        '.description-team .title-text': 'YG – YOUNG GENERATION AGENCY',
        '.description-team p:nth-of-type(1)':
          'Là đơn vị chuyên cung cấp các dịch vụ tổ chức sự kiện, activation cho thương hiệu, decoration… Với đội ngũ nhân sự trẻ trung, nhiệt huyết, đầy sáng tạo, cùng những người dẫn dắt nhiều kinh nghiệm trong lĩnh vực này. Bên cạnh đó, YG không ngừng khẳng định bản sắc riêng, phát huy tư duy đổi mới đầy nhiệt huyết của sức trẻ nhằm mang đến những giá trị thật trong từng công việc mà chúng tôi thực hiện cho khách hàng.',
        '.description-team p:nth-of-type(2)':
          'Hãy để YG được đồng hành và cùng tạo ra những giá trị khác biệt thông qua việc xây dựng hành trình trải nghiệm đầy cảm hứng sáng tạo từ cảm xúc.',
        '.slide4-container .slide4-description p':
          'YG cung cấp dịch vụ và tối ưu những yêu cầu của khách hàng dựa trên mô hình 4C trong marketing:<br /><strong style="color : #fa8500">CUSTOMER SOLUTION - CUSTOMER COST - CONVENIENCE - COMMUNICATION</strong><br />Giải pháp cho khách hàng - Chi phí khách hàng bỏ ra - Sự tiện lợi - Truyền thông',
        '.slide4-container .box-container .box:nth-of-type(1) .box-description':
          'Thi công trang trí',
        '.slide4-container .box-container .box:nth-of-type(2) .box-description':
          'Tổ chức sự kiện',
        '.slide4-container .box-container .box:nth-of-type(3) .box-description':
          'Hoạt động kích hoạt<br />thương mại',
        '.slide4-container .box-container .box:nth-of-type(4) .box-description':
          'Tư vấn thiết kế',
        '.slide4-container .commitment p':
          'Chúng tôi cam kết mang đến những giải pháp hiệu quả,<br />sáng tạo khác biệt dựa trên tinh thần hợp tác, trách nhiệm và giá trị cảm xúc.',
        '.slide6-title': 'Khách hàng',
        '.slide6-description':
          'Chúng tôi tự hào đồng hành cùng các đối tác hàng đầu trong nhiều lĩnh vực::<br /><strong>FMCG, Food & Beverages, Giáo dục, Dược & Mỹ Phẩm, Bất Động Sản, Điện Tử, Tiêu Dùng, Ô tô, Tài Chính...</strong>',
        '.inf h1': 'Liên hệ',
        '.item-contact:nth-of-type(5) span':
          'Địa chỉ<br /><strong>288/10 Nguyễn Văn Đậu, Bình Thạnh, TP. Hồ Chí Minh</strong>',
        '.social-icons strong': 'Theo dõi chúng tôi',
        '.contact-form h2': 'Thông tin liên hệ',
        '.contain-input label[for="name"]': 'Tên',
        '.contain-input input#name': 'Nhập tên của bạn',
        '.contain-input label[for="phone"]': 'Điện thoại',
        '.contain-input input#phone': 'Nhập số điện thoại',
        '.contain-input label[for="email"]': 'Email',
        '.contain-input input#email': 'Nhập địa chỉ email',
        '.contain-input label[for="message"]': 'Lời nhắn',
        '.contain-input textarea#message': 'Nhập lời nhắn của bạn',
        '.form-button': 'Gửi',
        '.slide-project': 'Dự án',
      },
      en: {
        '#slide2': 'Home',
        '#slide3': 'About Us',
        '#slide4': 'Services',
        '#slide5': 'Projects',
        '#slide6': 'Clients',
        '#slide7': 'Contact',
        '.about-section .title': 'About <span class="highlight">Us</span>',
        '.service-link': 'Services',
        '.project-link': 'Projects',
        '.customer-link': 'Clients',
        '.contact-link': 'Contact',
        '.container-slide3 .yg-team h1': 'TEAM',
        '.container-slide3 .yg-team h2': 'YG',
        '.container-slide3 .yg-team p':
          "It's not just participation to customer<br />It needs to be an emotional experience",
        '.description-team .title-text': 'YG – YOUNG GENERATION AGENCY',
        '.description-team p:nth-of-type(1)':
          'We are a unit specializing in event organization, brand activation, decoration... With a young, enthusiastic, and creative team, alongside experienced leaders in this field. Furthermore, YG continuously asserts its unique identity, fostering innovative thinking and youthful energy to bring real value in every project we carry out for our clients.',
        '.description-team p:nth-of-type(2)':
          'Let YG accompany you and create unique values through the construction of an inspiring and creative experience journey driven by emotions.',
        '.slide4-container .slide4-description p':
          'YG provides services and optimizes customer requirements based on the 4C marketing model:<br /><strong style="color : #fa8500">CUSTOMER SOLUTION - CUSTOMER COST - CONVENIENCE - COMMUNICATION</strong><br />Customer solutions - Customer costs - Convenience - Communication',
        '.slide4-container .box-container .box:nth-of-type(1) .box-description':
          'Decoration construction',
        '.slide4-container .box-container .box:nth-of-type(2) .box-description':
          'Event organization',
        '.slide4-container .box-container .box:nth-of-type(3) .box-description':
          'Commercial activation activities',
        '.slide4-container .box-container .box:nth-of-type(4) .box-description':
          'Design consultancy',
        '.slide4-container .commitment p':
          'We are committed to providing effective, creative, and unique solutions based on cooperation, responsibility, and emotional value.',
        '.slide6-title': 'Clients',
        '.slide6-description':
          'We are proud to collaborate with top partners in various fields:<br /><strong>FMCG, Food & Beverages, Education, Pharmaceuticals & Cosmetics, Real Estate, Consumer Electronics, Automotive, Finance...</strong>',
        '.inf h1': 'Contact',
        '.item-contact:nth-of-type(5) span':
          'Address<br /><strong>288/10 Nguyen Van Đau, Binh Thanh, TP. Ho Chi Minh</strong>',
        '.social-icons strong': 'Follow us',
        '.contact-form h2': 'Contact Information',
        '.contain-input label[for="name"]': 'Name',
        '.contain-input input#name': 'Enter your name',
        '.contain-input label[for="phone"]': 'Phone',
        '.contain-input input#phone': 'Enter your phone number',
        '.contain-input label[for="email"]': 'Email',
        '.contain-input input#email': 'Enter your email address',
        '.contain-input label[for="message"]': 'Message',
        '.contain-input textarea#message': 'Enter your message',
        '.form-button': 'Submit',
        '.slide-project': 'Projects',
      },
    };

    document.querySelectorAll('.slide-project').forEach((element) => {
      element.textContent = translationMap[newLanguage]['.slide-project'];
    });

    const updateTextContent = (selector, translationKey) => {
      document.querySelectorAll(selector).forEach((element) => {
        if (translationMap[newLanguage][translationKey]) {
          element.textContent = translationMap[newLanguage][translationKey];
        }
      });
    };

    const updateInnerHTML = (selector, translationKey) => {
      document.querySelectorAll(selector).forEach((element) => {
        if (translationMap[newLanguage][translationKey]) {
          element.innerHTML = translationMap[newLanguage][translationKey];
        }
      });
    };

    const updatePlaceholder = (selector, translationKey) => {
      document.querySelectorAll(selector).forEach((element) => {
        if (translationMap[newLanguage][translationKey]) {
          element.setAttribute(
            'placeholder',
            translationMap[newLanguage][translationKey]
          );
        }
      });
    };

    document.querySelectorAll('.form-button').forEach((element) => {
      element.textContent = translationMap[newLanguage]['.form-button'];
    });

    // Cập nhật văn bản của các liên kết trong điều hướng
    document.querySelectorAll('nav a').forEach((anchor) => {
      const href = anchor.getAttribute('href');
      anchor.textContent =
        translationMap[newLanguage][href] || anchor.textContent;
    });

    // Áp dụng các thay đổi cụ thể
    updateInnerHTML('.about-section .title', '.about-section .title');
    updateTextContent('.service-link', '.service-link');
    updateTextContent('.project-link', '.project-link');
    updateTextContent('.customer-link', '.customer-link');
    updateTextContent('.contact-link', '.contact-link');
    updateTextContent(
      '.container-slide3 .yg-team h1',
      '.container-slide3 .yg-team h1'
    );
    updateTextContent(
      '.container-slide3 .yg-team h2',
      '.container-slide3 .yg-team h2'
    );
    updateInnerHTML(
      '.container-slide3 .yg-team p',
      '.container-slide3 .yg-team p'
    );
    updateTextContent(
      '.description-team .title-text',
      '.description-team .title-text'
    );

    // Cập nhật các phần có danh sách hoặc nội dung phức tạp
    document
      .querySelectorAll('.description-team p')
      .forEach((element, index) => {
        const key = `.description-team p:nth-of-type(${index + 1})`;
        element.textContent =
          translationMap[newLanguage][key] || element.textContent;
      });

    updateInnerHTML(
      '.slide4-container .slide4-description p',
      '.slide4-container .slide4-description p'
    );
    updateInnerHTML(
      '.slide4-container .commitment p',
      '.slide4-container .commitment p'
    );

    document
      .querySelectorAll('.slide4-container .box')
      .forEach((box, index) => {
        const description = box.querySelector('.box-description');
        const key = `.slide4-container .box-container .box:nth-of-type(${index + 1}) .box-description`;
        if (translationMap[newLanguage][key]) {
          description.innerHTML = translationMap[newLanguage][key];
        }
      });

    updateTextContent('.slide6-title', '.slide6-title');
    updateInnerHTML('.slide6-description', '.slide6-description');
    updateTextContent('.inf h1', '.inf h1');
    updateInnerHTML(
      '.item-contact:nth-of-type(5) span',
      '.item-contact:nth-of-type(5) span'
    );
    updateTextContent('.social-icons strong', '.social-icons strong');

    // Cập nhật placeholders cho form liên hệ
    updateTextContent('.contact-form h2', '.contact-form h2');
    updateTextContent(
      '.contain-input label[for="name"]',
      '.contain-input label[for="name"]'
    );
    updatePlaceholder('.contain-input input#name', '.contain-input input#name');
    updateTextContent(
      '.contain-input label[for="phone"]',
      '.contain-input label[for="phone"]'
    );
    updatePlaceholder(
      '.contain-input input#phone',
      '.contain-input input#phone'
    );
    updateTextContent(
      '.contain-input label[for="email"]',
      '.contain-input label[for="email"]'
    );
    updatePlaceholder(
      '.contain-input input#email',
      '.contain-input input#email'
    );
    updateTextContent(
      '.contain-input label[for="message"]',
      '.contain-input label[for="message"]'
    );
    updatePlaceholder(
      '.contain-input textarea#message',
      '.contain-input textarea#message'
    );
  });

// Thêm lệnh chặn cuộn
let allowScroll = false;

// Ngăn cuộn
const preventScroll = (e) => {
  if (!allowScroll) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
};

// Chỉ áp dụng nếu kích thước màn hình từ 1025px trở lên
if (window.innerWidth >= 1025) {
  // Bật sự kiện ngăn cuộn
  window.addEventListener('wheel', preventScroll, { passive: false });
  window.addEventListener('touchmove', preventScroll, { passive: false });

  // Sau 5 giây, cho phép cuộn
  setTimeout(() => {
    allowScroll = true;
    window.removeEventListener('wheel', preventScroll);
    window.removeEventListener('touchmove', preventScroll);
  }, 5000);
}
//chỗ này
const mediaQuery = window.matchMedia('(max-width: 1390px)');

function handleScreenSizeChange(e) {
  const videoElements = document.querySelectorAll('.slideshow-vid source');

  if (e.matches) {
    // Khi màn hình nhỏ hơn 1390px, đổi video
    videoElements.forEach((video) => {
      video.src = '/media/logo-fix-sqr.mp4';
      video.parentElement.load();
    });
  } else {
    // Khi màn hình lớn hơn 1390px, đổi lại video gốc
    videoElements.forEach((video) => {
      video.src = '/media/logo-fix-5.mp4';
      video.parentElement.load();
    });
  }
}

// Xử lý ngay khi tải trang
handleScreenSizeChange(mediaQuery);

// Lắng nghe sự kiện thay đổi kích thước màn hình
mediaQuery.addEventListener('change', handleScreenSizeChange);

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

function myFunction() {
  var x = document.getElementById('mynavigation-mobile');
  if (x.className === 'navigation-mobile') {
    x.className += ' responsive';
  } else {
    x.className = 'navigation-mobile';
  }
}
