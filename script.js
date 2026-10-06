/* =========================================
   TRẠNG THÁI TRÌNH CHIẾU
========================================= */

let currentSlide = 0;

const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

const currentSlideNum =
  document.getElementById("currentSlideNum");

const progressBar =
  document.getElementById("progressBar");


/* =========================================
   CẬP NHẬT SLIDE
========================================= */

function updateSlideView() {

  slides.forEach((slide, index) => {

    slide.classList.toggle(
      "active",
      index === currentSlide
    );

  });


  /* Cập nhật số slide */

  currentSlideNum.textContent =
    String(currentSlide + 1).padStart(2, "0");


  /* Cập nhật thanh tiến trình */

  const progress =
    ((currentSlide + 1) / totalSlides) * 100;

  progressBar.style.width =
    `${progress}%`;

}


/* =========================================
   SLIDE TIẾP THEO
========================================= */

function nextSlide() {

  if (currentSlide < totalSlides - 1) {

    currentSlide++;

    updateSlideView();

  }

}


/* =========================================
   SLIDE TRƯỚC
========================================= */

function prevSlide() {

  if (currentSlide > 0) {

    currentSlide--;

    updateSlideView();

  }

}


/* =========================================
   ĐẾN SLIDE BẤT KỲ
========================================= */

function goToSlide(index) {

  if (
    index >= 0 &&
    index < totalSlides
  ) {

    currentSlide = index;

    updateSlideView();

  }

}


/* =========================================
   PHÍM BÀN PHÍM
========================================= */

window.addEventListener(
  "keydown",
  (event) => {

    /*
      Mũi tên phải:
      Slide tiếp
    */

    if (
      event.key === "ArrowRight" ||
      event.key === "ArrowDown" ||
      event.key === " "
    ) {

      event.preventDefault();

      nextSlide();

    }


    /*
      Mũi tên trái:
      Slide trước
    */

    if (
      event.key === "ArrowLeft" ||
      event.key === "ArrowUp"
    ) {

      event.preventDefault();

      prevSlide();

    }


    /*
      Home:
      Về slide đầu
    */

    if (event.key === "Home") {

      goToSlide(0);

    }


    /*
      End:
      Đến slide cuối
    */

    if (event.key === "End") {

      goToSlide(totalSlides - 1);

    }

  }
);


/* =========================================
   TRẮC NGHIỆM
========================================= */

const correctAnswers = [

  2, // Câu 1 → C
  2, // Câu 2 → C
  1  // Câu 3 → B

];


function checkAnswer(
  button,
  quizIndex,
  selectedOption
) {

  const container =
    button.parentElement;

  const buttons =
    container.querySelectorAll(".opt-btn");

  const message =
    container.parentElement.querySelector(
      ".answer-message"
    );


  /*
    Nếu đã trả lời rồi
    thì không cho chọn lại.
  */

  if (
    container.dataset.answered === "true"
  ) {

    return;

  }


  container.dataset.answered = "true";


  /*
    Khóa tất cả đáp án
  */

  buttons.forEach((btn) => {

    btn.disabled = true;

  });


  /*
    Trả lời đúng
  */

  if (
    selectedOption ===
    correctAnswers[quizIndex]
  ) {

    button.classList.add("correct");

    if (message) {

      message.textContent =
        "✓ Chính xác!";

      message.style.color =
        "#82b58c";

    }

    return;

  }


  /*
    Trả lời sai
  */

  button.classList.add("wrong");


  /*
    Tìm đáp án đúng
  */

  const correctButton =
    buttons[
      correctAnswers[quizIndex]
    ];


  if (correctButton) {

    correctButton.classList.add(
      "correct"
    );

  }


  if (message) {

    message.textContent =
      "Chưa đúng. Đáp án đúng được đánh dấu màu xanh.";

    message.style.color =
      "#d88982";

  }

}


/* =========================================
   TOUCH / SWIPE
========================================= */

let touchStartX = 0;
let touchEndX = 0;


document.addEventListener(
  "touchstart",
  (event) => {

    touchStartX =
      event.changedTouches[0].screenX;

  },
  { passive: true }
);


document.addEventListener(
  "touchend",
  (event) => {

    touchEndX =
      event.changedTouches[0].screenX;

    handleSwipe();

  },
  { passive: true }
);


function handleSwipe() {

  const distance =
    touchEndX - touchStartX;


  /*
    Vuốt sang trái
    → slide tiếp
  */

  if (distance < -60) {

    nextSlide();

  }


  /*
    Vuốt sang phải
    → slide trước
  */

  if (distance > 60) {

    prevSlide();

  }

}


/* =========================================
   KHỞI TẠO
========================================= */

updateSlideView();
