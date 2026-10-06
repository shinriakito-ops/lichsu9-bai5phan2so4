// Quản lý trạng thái Slide
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Cập nhật giao diện khi đổi Slide
function updateSlideView() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });
  
  // Cập nhật thanh tiến trình & số slide
  const progressPercent = ((currentSlide + 1) / totalSlides) * 100;
  document.getElementById('progressBar').style.width = progressPercent + '%';
  document.getElementById('currentSlideNum').innerText = String(currentSlide + 1).padStart(2, '0');
}

function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateSlideView();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlideView();
  }
}

function goToSlide(index) {
  currentSlide = index;
  updateSlideView();
}

// Bắt sự kiện phím mũi tên
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
});

// Xử lý chọn trắc nghiệm
const correctAnswers = [2, 2, 1]; // Chỉ số đáp án đúng (0=A, 1=B, 2=C, 3=D)

function checkAnswer(btn, quizIndex, selectedOption) {
  const parent = btn.parentElement;
  const buttons = parent.querySelectorAll('.opt-btn');
  
  // Khóa không cho bấm lại
  buttons.forEach(b => b.disabled = true);
  
  if (selectedOption === correctAnswers[quizIndex]) {
    btn.classList.add('correct');
  } else {
    btn.classList.add('wrong');
  }
}

// Canvas Bụi Vàng Đơn Giản (Animation nền)
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

for (let i = 0; i < 40; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 0.5,
    speedY: -Math.random() * 0.4 - 0.1
  });
}

function animateBackground() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(212, 175, 55, 0.3)';
  
  particles.forEach(p => {
    p.y += p.speedY;
    if (p.y < 0) p.y = canvas.height;
    
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  
  requestAnimationFrame(animateBackground);
}
animateBackground();