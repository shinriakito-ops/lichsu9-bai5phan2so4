// Data danh sách câu hỏi trắc nghiệm
const quizQuestions = [
  {
    question: 'Ba tổ chức yêu nước cách mạng ra đời trong giai đoạn 1925 – 1928 là:',
    options: [
      'Hội Việt Nam Cách mạng Thanh niên, Tâm tâm xã, Nam Đồng thư xã',
      'Hội Phục Việt, Tâm tâm xã, Việt Nam Quốc dân đảng',
      'Hội Việt Nam Cách mạng Thanh niên, Tân Việt Cách mạng đảng, Việt Nam Quốc dân đảng',
      'Tân Việt Cách mạng đảng, Nam Đồng thư xã, Hội Phục Việt'
    ],
    answer: 2,
    explain: 'Đó là Hội Việt Nam Cách mạng Thanh niên (6/1925), Việt Nam Quốc dân đảng (12/1927) và Tân Việt Cách mạng đảng (7/1928).'
  },
  {
    question: 'Nhận định nào đúng về khuynh hướng và phương pháp hoạt động của các tổ chức?',
    options: [
      'Hội VNCMTN theo dân chủ tư sản; Quốc dân đảng theo vô sản, “vô sản hoá”',
      'Hội VNCMTN theo vô sản, huấn luyện cán bộ, “vô sản hoá”; Quốc dân đảng theo dân chủ tư sản, bạo động, ám sát',
      'Cả ba tổ chức đều theo khuynh hướng dân chủ tư sản, chủ trương bạo động',
      'Tân Việt theo vô sản ngay từ đầu; Quốc dân đảng theo dân chủ tư sản, ám sát'
    ],
    answer: 1,
    explain: 'Hội Việt Nam Cách mạng Thanh niên theo khuynh hướng vô sản. Việt Nam Quốc dân đảng theo khuynh hướng dân chủ tư sản, chủ trương bạo động, ám sát cá nhân.'
  },
  {
    question: 'Vì sao nói khuynh hướng vô sản ngày càng thắng thế trong phong trào dân tộc dân chủ ở Việt Nam?',
    options: [
      'Vì thực dân Pháp ngừng đàn áp nên các tổ chức hoạt động tự do, phát triển mạnh',
      'Vì khởi nghĩa Yên Bái thành công, Việt Nam Quốc dân đảng ngày càng lớn mạnh',
      'Vì Hội VNCMTN bị giải tán sau vụ ám sát Bazin, Tân Việt lên thay vai trò lãnh đạo',
      'Vì Yên Bái thất bại, Quốc dân đảng tan rã; Hội VNCMTN phát triển, Tân Việt chuyển theo vô sản'
    ],
    answer: 3,
    explain: 'Khởi nghĩa Yên Bái thất bại cho thấy khuynh hướng dân chủ tư sản bất lực. Hội VNCMTN phát triển và Tân Việt chuyển biến chứng tỏ khuynh hướng vô sản ngày càng thắng thế.'
  }
];

// Data cấu trúc các slide bài học
const slideList = [
  { type: 'cover' },
  {
    type: 'cards', year: 1925, title: '1. Bối cảnh lịch sử',
    subtitle: 'Giai đoạn 1925 – 1930: các tổ chức yêu nước cách mạng lần lượt ra đời.',
    cards: [
      { icon: '🔥', title: 'Phong trào phát triển', desc: 'Phong trào dân tộc dân chủ phát triển mạnh.' },
      { icon: '⛓️', title: 'Pháp tăng cường đàn áp', desc: 'Thực dân Pháp tăng cường đàn áp phong trào.' },
      { icon: '🤝', title: 'Tổ chức ra đời', desc: 'Người yêu nước đoàn kết, lập các tổ chức yêu nước cách mạng, thúc đẩy phong trào đấu tranh mạnh mẽ hơn.' }
    ]
  },
  {
    type: 'cards', year: 1925, title: '2. Hội Việt Nam Cách mạng Thanh niên',
    subtitle: 'Tổ chức đầu tiên ra đời năm 1925.',
    cards: [
      { icon: '🚩', title: 'Thành lập', desc: 'Tháng 6/1925, tại Quảng Châu (Trung Quốc), do <b>Nguyễn Ái Quốc</b> thành lập.' },
      { icon: '🎯', title: 'Mục đích', desc: 'Làm cách mạng dân tộc giành độc lập, sau đó làm cách mạng thế giới để đi đến xã hội cộng sản.' },
      { icon: '🎓', title: 'Hoạt động', desc: 'Công bố Chương trình, Điều lệ; mở nhiều lớp huấn luyện cán bộ.' }
    ]
  },
  {
    type: 'big', year: 1927, title: '3. Tác phẩm Đường Kách mệnh (1927)',
    subtitle: 'Hội chuẩn bị lí luận cho cán bộ.',
    head: 'Đường Kách mệnh (1927)',
    p: 'Bài giảng của Nguyễn Ái Quốc tại các lớp huấn luyện cán bộ được tập hợp thành sách <i>Đường Kách mệnh</i> và bí mật đưa về nước.'
  },
  {
    type: 'cards', year: 1928, title: '4. Phong trào “vô sản hoá” (1928)',
    subtitle: 'Tiếp đó, Hội đưa cán bộ vào thực tiễn.',
    cards: [
      { icon: '🏭', title: 'Phát động', desc: 'Năm 1928, đưa cán bộ vào các đồn điền, hầm mỏ,... ở trong nước.' },
      { icon: '🔥', title: 'Mục đích', desc: 'Rèn luyện, tuyên truyền cách mạng, nâng cao ý thức chính trị cho công nhân.' },
      { icon: '🗺️️', title: 'Kết quả', desc: 'Trước 5/1929, có cơ sở ở cả ba kỳ. Góp phần truyền bá chủ nghĩa Mác – Lê-nin vào Việt Nam.' }
    ]
  },
  {
    type: 'cards', year: 1928, title: '5. Tân Việt Cách mạng đảng (7/1928)',
    subtitle: 'Cùng thời gian đó, Tân Việt hoạt động ở Trung Kỳ.',
    cards: [
      { icon: '🌱', title: 'Thành lập', desc: 'Tiền thân là <b>Hội Phục Việt</b>; tháng 7/1928 đổi tên thành Tân Việt Cách mạng đảng.' },
      { icon: '👥', title: 'Lực lượng', desc: 'Trí thức trẻ, thanh niên, tư sản yêu nước.' },
      { icon: '📚', title: 'Hoạt động', desc: 'Giới thiệu sách báo yêu nước tiến bộ, truyền bá chủ nghĩa Mác – Lê-nin.' }
    ]
  },
  {
    type: 'big', year: 1929, title: '6. Sự chuyển biến của Tân Việt',
    subtitle: 'Dưới ảnh hưởng của Hội, Tân Việt thay đổi lập trường.',
    head: 'Dân chủ tư sản ➔ Vô sản',
    p: 'Ban đầu theo khuynh hướng dân chủ tư sản; về sau chuyển dần sang khuynh hướng vô sản.'
  },
  {
    type: 'cards', year: 1927, title: '7. Việt Nam Quốc dân đảng (12/1927)',
    subtitle: 'Bên cạnh đó, một tổ chức theo khuynh hướng khác ra đời.',
    cards: [
      { icon: '🏛️', title: 'Thành lập & lực lượng', desc: 'Tháng 12/1927 (<b>Nguyễn Thái Học, Phó Đức Chính</b>,...).' },
      { icon: '⚔️', title: 'Khuynh hướng & mục tiêu', desc: 'Khuynh hướng <b>dân chủ tư sản</b>; mục tiêu đánh đuổi giặc Pháp bằng <b>bạo động, ám sát cá nhân</b>.' }
    ]
  },
  {
    type: 'big', year: 1929, isWarning: true, title: '8. Vụ ám sát Bazin (2/1929)',
    subtitle: 'Đầu năm 1929, Quốc dân đảng chịu tổn thất lớn.',
    head: 'Đầu tháng 2/1929',
    p: 'Việt Nam Quốc dân đảng ám sát tên trùm mộ phu Bazin; thực dân Pháp vây ráp lớn, nhiều cơ sở bị tan vỡ.'
  },
  {
    type: 'big', year: 1930, isWarning: true, title: '9. Khởi nghĩa Yên Bái (9/2/1930)',
    subtitle: 'Quốc dân đảng tiến hành khởi nghĩa.',
    head: 'Đêm 9/2/1930',
    p: 'Khởi nghĩa nổ ra ở thị xã Yên Bái nhưng nhanh chóng bị thực dân Pháp đàn áp dã man.'
  },
  {
    type: 'compare3', year: 1930, title: '10. Bảng so sánh ba tổ chức',
    subtitle: 'Nhìn lại ba tổ chức.',
    cols: [
      { name: 'Hội VN Cách mạng Thanh niên', color: '#d4af37', items: ['Vô sản', 'Huấn luyện cán bộ, “vô sản hoá”', 'Truyền bá chủ nghĩa Mác – Lê-nin'] },
      { name: 'Tân Việt Cách mạng đảng', color: '#34c759', items: ['Chuyển dần sang vô sản', 'Sách báo tiến bộ, đấu tranh', 'Chuyển biến lập trường chính trị'] },
      { name: 'Việt Nam Quốc dân đảng', color: '#ff3b30', items: ['Dân chủ tư sản', 'Bạo động, ám sát cá nhân', 'Yên Bái thất bại, tan rã'] }
    ]
  },
  {
    type: 'compare2', year: 1930, title: '11. Khuynh hướng vô sản ngày càng thắng thế',
    subtitle: 'Từ đó rút ra kết luận.',
    cols: [
      { name: 'Dân chủ tư sản', color: '#ff3b30', p: 'Khởi nghĩa Yên Bái thất bại cho thấy khuynh hướng này đã hoàn toàn bất lực.' },
      { name: 'Vô sản', color: '#34c759', p: 'Sự phát triển của Hội Thanh niên chứng tỏ khuynh hướng vô sản ngày càng thắng thế.' }
    ]
  },
  { type: 'question', qIndex: 0 }, { type: 'answer', qIndex: 0 },
  { type: 'question', qIndex: 1 }, { type: 'answer', qIndex: 1 },
  { type: 'question', qIndex: 2 }, { type: 'answer', qIndex: 2 },
  {
    type: 'summary', title: 'Tóm tắt bài học',
    rows: [
      ['<b>Hội Việt Nam Cách mạng Thanh niên</b><br>6/1925 • Nguyễn Ái Quốc', 'Vô sản', 'Lớp huấn luyện, <i>Đường Kách mệnh</i>, “vô sản hoá”', 'Cơ sở rộng khắp 3 kỳ'],
      ['<b>Tân Việt Cách mạng đảng</b><br>7/1928 • Trung Kỳ', 'Chuyển dần sang vô sản', 'Sách báo tiến bộ, vận động đấu tranh', 'Chuyển biến lập trường theo Hội'],
      ['<b>Việt Nam Quốc dân đảng</b><br>12/1927 • Nguyễn Thái Học', 'Dân chủ tư sản', 'Ám sát Bazin, khởi nghĩa Yên Bái', 'Thất bại, tan rã nhanh chóng']
    ]
  },
  { type: 'end' }
];

const categoryLabels = ['Khuynh hướng', 'Phương pháp', 'Kết quả'];

function generateTitleHTML(titleText) {
  const words = titleText.split(' ');
  return `<h2 class="slide-title">${words.map((w, idx) => `<span class="word-span" style="--word-index:${idx}">${w}</span>`).join(' ')}</h2>`;
}

function generateWatermarkHTML(year) {
  return year ? `<div class="watermark-year counter-val" data-count="${year}">${year}</div>` : '';
}

function renderOptionsHTML(qData, isRevealed) {
  return qData.options.map((optText, idx) => {
    const isOkClass = isRevealed && idx === qData.answer ? ' ok' : '';
    const disAttr = isRevealed ? ' disabled' : '';
    return `<button class="option-btn${isOkClass}" data-opt-index="${idx}"${disAttr}><span class="letter-badge">${'ABCD'[idx]}</span>${optText}</button>`;
  }).join('');
}

const slideRenderers = {
  cover: () => `
    <div class="cover-view">
      <p class="cover-sub anim-target">Chương 2 • Việt Nam từ năm 1918 đến năm 1945</p>
      <p class="cover-sub2 anim-target">Bài 5 • Phong trào dân tộc dân chủ trong những năm 1918 – 1930</p>
      ${generateTitleHTML('Phần 4: Sự ra đời của các tổ chức yêu nước cách mạng')}
      <div class="year-hero anim-target"><b class="counter-val" data-count="1925">1925</b><i>➔</i><b class="counter-val" data-count="1930">1930</b></div>
    </div>`,
  cards: s => generateWatermarkHTML(s.year) + generateTitleHTML(s.title) + `
    <div class="grid-layout grid-${s.cards.length}">${s.cards.map(c => `
      <div class="info-card anim-target">
        <div class="card-icon">${c.icon}</div>
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
      </div>`).join('')}
    </div>`,
  big: s => generateWatermarkHTML(s.year) + generateTitleHTML(s.title) + `
    <div class="info-card big-banner anim-target${s.isWarning ? ' red' : ''}">
      <div class="banner-head">${s.head}</div>
      <p>${s.p}</p>
    </div>`,
  compare3: s => generateWatermarkHTML(s.year) + generateTitleHTML(s.title) + `
    <div class="grid-layout grid-3">${s.cols.map(col => `
      <div class="info-card anim-target" style="border-top:4px solid ${col.color}">
        <h3 style="color:${col.color}">${col.name}</h3>${col.items.map((item, i) => `<small>${categoryLabels[i]}</small><p>${item}</p>`).join('')}
      </div>`).join('')}
    </div>`,
  compare2: s => generateWatermarkHTML(s.year) + generateTitleHTML(s.title) + `
    <div class="grid-layout grid-2">${s.cols.map((col, idx) => `
      <div class="info-card anim-target" style="border-top:4px solid ${col.color}">
        <h3 style="color:${col.color}; font-size:22px;">${col.name}</h3>
        <p>${col.p}</p>
      </div>`).join('')}
    </div>`,
  question: s => {
    const q = quizQuestions[s.qIndex];
    return generateTitleHTML('Câu hỏi củng cố #' + (s.qIndex + 1)) + `
      <p class="question-text anim-target">${q.question}</p>
      <div class="options-grid anim-target" data-q-index="${s.qIndex}">${renderOptionsHTML(q, false)}</div>
      <div class="timer-bar"><i></i></div>`;
  },
  answer: s => {
    const q = quizQuestions[s.qIndex];
    return generateTitleHTML('Đáp án & giải thích #' + (s.qIndex + 1)) + `
      <p class="question-text anim-target">${q.question}</p>
      <div class="options-grid revealed anim-target">${renderOptionsHTML(q, true)}</div>
      <p class="pick-result anim-target"></p>
      <div class="info-card anim-target" style="border-left:5px solid var(--color-success)">
        <p><b>Đáp án đúng: ${'ABCD'[q.answer]}.</b> ${q.explain}</p>
      </div>`;
  },
  summary: s => generateTitleHTML(s.title) + `
    <div class="table-wrapper anim-target">
      <table>
        <tr><th>Tổ chức</th><th>Khuynh hướng</th><th>Hoạt động chính</th><th>Kết cục</th></tr>
        ${s.rows.map(r => `<tr>${r.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}
      </table>
    </div>
    <div class="summary-tip anim-target">✅ <b>Kết luận:</b> Yên Bái thất bại ➔ khuynh hướng dân chủ tư sản hoàn toàn bất lực; Hội phát triển ➔ khuynh hướng vô sản ngày càng thắng thế.</div>`,
  end: () => generateTitleHTML('Cảm ơn thầy cô và các bạn đã lắng nghe!') + `
    <p class="score-display anim-target" style="text-align:center; font-size:20px; color:var(--gold-light);"></p>
    <p class="anim-target" style="text-align:center; color:var(--text-muted); margin-top:15px;">♪ Bật phím M để tắt/bật âm thanh background</p>`
};

const slideContainer = document.getElementById('slideContainer');
slideList.forEach((s) => {
  const section = document.createElement('section');
  section.className = 'slide' + (s.isWarning ? ' warning-theme' : '');
  let html = slideRenderers[s.type](s);
  if (s.subtitle) {
    html = html.replace('</h2>', `</h2><p class="lead-text anim-target">${s.subtitle}</p>`);
  }
  section.innerHTML = html;
  slideContainer.appendChild(section);
});

const slideElements = [...slideContainer.children];
const userPicks = [];
let currentSlideIndex = 0;

slideElements.forEach(el => {
  el.querySelectorAll('.anim-target').forEach((item, index) => {
    item.style.setProperty('--item-index', index);
  });
});

const transitionPresets = {
  dolly: { fromTransform: 'scale(2.6)', outTransform: 'scale(0.55)' },
  slit: { fromTransform: 'scale(1.06)', clipStart: 'inset(50% 0 round 20px)', outTransform: 'scale(0.9)' },
  door: { fromTransform: 'rotateY(-95deg)', transformOrigin: '0% 50%', outTransform: 'translateX(8%) scale(0.92)' },
  page: { fromTransform: 'rotateY(80deg)', transformOrigin: '100% 50%', outTransform: 'rotateY(-35deg) translateX(-10%)' },
  rise: { fromTransform: 'translateY(110%)', outTransform: 'translateY(-35%) scale(0.92)' },
  ripple: { fromTransform: 'scale(0.9)', clipStart: 'circle(0% at 50% 50%)', clipEnd: 'circle(150% at 50% 50%)', outTransform: 'scale(1.18)' },
  diag: { fromTransform: 'translateX(-6%)', clipStart: 'polygon(-20% -20%,-20% -20%,-40% 120%,-40% 120%)', clipEnd: 'polygon(-20% -20%,140% -20%,120% 120%,-40% 120%)', outTransform: 'translateX(6%) scale(0.96)' },
  tumble: { fromTransform: 'rotateX(-85deg) translateY(-20%)', transformOrigin: '50% 0%', outTransform: 'rotateX(55deg) translateY(30%)' },
  drop: { fromTransform: 'translateY(-115%) rotate(-5deg)', outTransform: 'translateY(45%) scale(0.9)' },
  scroll: { fromTransform: 'scale(0.96)', clipStart: 'inset(0 50% round 20px)', outTransform: 'scale(1.05)' },
  flip: { fromTransform: 'rotateY(95deg)', transformOrigin: '100% 50%', outTransform: 'rotateY(-60deg) scale(0.9)' }
};

const transitionMap = 'dolly slit door page rise ripple diag tumble drop dolly scroll flip ripple slit diag page tumble dolly scroll dolly'.split(' ');

function updateViewportScale() {
  const scale = Math.max(0.3, Math.min((window.innerWidth - 40) / 1100, (window.innerHeight - 190) / 640, 1.8));
  slideContainer.style.setProperty('--scale-ratio', scale);
}
updateViewportScale();
window.addEventListener('resize', updateViewportScale);

function applyTransition(el, preset) {
  const defaultClip = 'inset(-80px round 20px)';
  const defaultEase = 'cubic-bezier(0.16, 1, 0.3, 1)';
  el.style.setProperty('--from-transform', preset.fromTransform);
  el.style.setProperty('--clip-start', preset.clipStart || defaultClip);
  el.style.setProperty('--clip-end', preset.clipEnd || defaultClip);
  el.style.setProperty('--ease-timing', defaultEase);
  el.style.transformOrigin = preset.transformOrigin || '50% 50%';
}

function handleSlideChange(nextIdx) {
  if (nextIdx === currentSlideIndex || nextIdx < 0 || nextIdx >= slideElements.length) return;
  const currentEl = slideElements[currentSlideIndex];
  const nextEl = slideElements[nextIdx];

  applyTransition(nextEl, transitionPresets[transitionMap[nextIdx]]);
  currentEl.style.setProperty('--out-transform', transitionPresets[transitionMap[currentSlideIndex]].outTransform);

  currentEl.classList.remove('active');
  currentEl.classList.add('leave');
  setTimeout(() => currentEl.classList.remove('leave'), 620);

  nextEl.classList.remove('leave');
  nextEl.classList.add('active');
  currentSlideIndex = nextIdx;
  updateUI();
  playSfx([0, 9, 19].includes(nextIdx) ? 'big' : 'go');
}

function runNumberCounter(el) {
  const target = +el.dataset.count;
  const start = target - 14;
  const startTime = performance.now();
  function animate(now) {
    const progress = Math.min(1, (now - startTime) / 1400);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(start + (target - start) * ease);
    if (progress < 1) requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

function updateUI() {
  const el = slideElements[currentSlideIndex];
  const data = slideList[currentSlideIndex];

  document.getElementById('progressBar').style.width = ((currentSlideIndex + 1) / slideElements.length * 100) + '%';
  document.getElementById('currentSlideNum').textContent = String(currentSlideIndex + 1).padStart(2, '0');
  
  updateTimelineUI(timelineDates[currentSlideIndex]);
  el.querySelectorAll('.counter-val').forEach(runNumberCounter);

  const scoreEl = el.querySelector('.score-display');
  if (scoreEl) {
    const correctCount = quizQuestions.filter((q, i) => userPicks[i] === q.answer).length;
    scoreEl.textContent = `Bạn đã trả lời đúng ${correctCount}/${quizQuestions.length} câu hỏi củng cố 🎉`;
  }

  const resultEl = el.querySelector('.pick-result');
  if (resultEl) {
    const q = quizQuestions[data.qIndex];
    const picked = userPicks[data.qIndex];
    if (picked == null) resultEl.textContent = 'Bạn chưa chọn đáp án ở câu này.';
    else if (picked === q.answer) resultEl.textContent = '✔ Bạn đã chọn đúng!';
    else resultEl.textContent = `✘ Bạn đã chọn ${'ABCD'[picked]} — chưa chính xác.`;
  }
}

const timelineEvents = [
  [1925.45, '6/1925', 'Hội VNCMTN'],
  [1927.95, '12/1927', 'VN Quốc dân đảng'],
  [1928.55, '7/1928', 'Tân Việt'],
  [1929.1, '2/1929', 'Ám sát Bazin'],
  [1930.1, '9/2/1930', 'Khởi nghĩa Yên Bái']
];

const timelineDates = [
  1925, 1925.2, 1925.45, 1927.3, 1928.2, 1928.55, 1929, 1927.95, 1929.1,
  1930.1, 1930.1, 1930.1, 1930.1, 1930.1, 1930.1, 1930.1, 1930.1, 1930.1, 1930.1, 1930.1
];

function calcPercent(d) { return (d - 1924.8) / 5.6 * 100; }

const timelineBar = document.getElementById('timelineBar');
timelineBar.innerHTML = `
  <div class="timeline-fill" id="timelineFill"></div>
  ${timelineEvents.map(([d, dateText, labelText], idx) => `
    <div class="timeline-node ${idx % 2 ? 'down' : 'up'}" data-date="${d}" style="left:${calcPercent(d)}%">
      <i><b>${dateText}</b>${labelText}</i>
    </div>`).join('')}
  <div class="star-marker" id="timelineMarker">★</div>`;

function updateTimelineUI(d) {
  document.getElementById('timelineFill').style.width = calcPercent(d) + '%';
  document.getElementById('timelineMarker').style.left = calcPercent(d) + '%';
  document.querySelectorAll('.timeline-node').forEach(node => {
    node.classList.toggle('active-node', +node.dataset.date <= d + 0.01);
  });
}

applyTransition(slideElements[0], transitionPresets.dolly);
slideElements[0].classList.add('active');
updateUI();

function finishQuestion(container, pickIndex, btnEl) {
  const qIndex = +container.dataset.qIndex;
  const q = quizQuestions[qIndex];
  container.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
  container.nextElementSibling.classList.add('done');

  if (pickIndex === null) {
    container.children[q.answer].classList.add('ok');
    playSfx('tick');
    return;
  }

  userPicks[qIndex] = pickIndex;
  if (pickIndex === q.answer) {
    btnEl.classList.add('ok');
    playSfx('ok');
    triggerFlash('ok');
    launchConfetti();
  } else {
    btnEl.classList.add('no', 'shake');
    playSfx('no');
    triggerFlash('no');
  }
}

document.getElementById('stage').addEventListener('click', e => {
  const btn = e.target.closest('.option-btn');
  if (btn && !btn.disabled) {
    finishQuestion(btn.parentElement, +btn.dataset.optIndex, btn);
  }
});

document.getElementById('stage').addEventListener('animationend', e => {
  if (!e.target.matches('.timer-bar i')) return;
  const opts = e.target.parentElement.previousElementSibling;
  if (!opts.querySelector('.option-btn:disabled')) finishQuestion(opts, null);
});

document.getElementById('stage').addEventListener('pointermove', e => {
  const card = e.target.closest('.info-card');
  if (!card) return;
  const rect = card.getBoundingClientRect();
  card.style.setProperty('--rot-y', ((e.clientX - rect.left) / rect.width - 0.5) * 10 + 'deg');
  card.style.setProperty('--rot-x', -((e.clientY - rect.top) / rect.height - 0.5) * 10 + 'deg');
});

document.getElementById('stage').addEventListener('pointerout', e => {
  const card = e.target.closest('.info-card');
  if (card) {
    card.style.setProperty('--rot-x', '0deg');
    card.style.setProperty('--rot-y', '0deg');
  }
});

window.addEventListener('keydown', e => {
  const key = e.key;
  if ([' ', 'ArrowRight', 'PageDown'].includes(key)) { e.preventDefault(); handleSlideChange(currentSlideIndex + 1); }
  else if (['ArrowLeft', 'PageUp'].includes(key)) { e.preventDefault(); handleSlideChange(currentSlideIndex - 1); }
  else if (key === 'Home') handleSlideChange(0);
  else if (key === 'End') handleSlideChange(slideElements.length - 1);
  else if (key === 'm' || key === 'M') toggleMute();
  else if (key === 'f' || key === 'F') {
    document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
  }
});

function displayToast(msg) {
  const toast = document.getElementById('toastBox');
  toast.textContent = msg;
  toast.classList.add('active');
  clearTimeout(displayToast.timer);
  displayToast.timer = setTimeout(() => toast.classList.remove('active'), 1300);
}

let touchStartX = 0;
window.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
window.addEventListener('touchend', e => {
  const diff = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(diff) > 60) handleSlideChange(currentSlideIndex + (diff < 0 ? 1 : -1));
});

// Audio Web Audio API
let audioCtx, noiseBuffer, masterGain, isMuted = false;

function toggleMute() {
  isMuted = !isMuted;
  displayToast(isMuted ? '🔇 Đã tắt âm thanh' : '🔊 Đã bật âm thanh');
}

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    noiseBuffer = audioCtx.createBuffer(1, audioCtx.sampleRate, audioCtx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;

    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0.8;
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 5500;
    
    masterGain.connect(filter);
    filter.connect(audioCtx.destination);
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function playTone(freq, time, dur, vol, endFreq) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, time);
  if (endFreq) osc.frequency.exponentialRampToValueAtTime(endFreq, time + dur);
  
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.linearRampToValueAtTime(vol, time + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, time + dur);
  
  osc.connect(gain);
  gain.connect(masterGain);
  osc.start(time);
  osc.stop(time + dur + 0.05);
}

function playSfx(type) {
  if (isMuted) return;
  try {
    initAudio();
    const t = audioCtx.currentTime;
    if (type === 'go') {
      playTone(440, t, 0.3, 0.05, 880);
    } else if (type === 'big') {
      playTone(110, t, 0.8, 0.2, 440);
    } else if (type === 'ok') {
      [523, 659, 784].forEach((f, i) => playTone(f, t + i * 0.08, 0.4, 0.1));
    } else if (type === 'no') {
      playTone(220, t, 0.3, 0.2, 110);
    } else if (type === 'tick') {
      playTone(150, t, 0.1, 0.1);
    }
  } catch (e) {}
}

function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles = Array.from({ length: 90 }, () => ({
    x: canvas.width / 2,
    y: canvas.height * 0.6,
    vx: (Math.random() - 0.5) * 18,
    vy: Math.random() * -16 - 2,
    size: Math.random() * 8 + 4,
    life: 100,
    color: ['#f4c430', '#34c759', '#ff3b30', '#ffffff'][Math.floor(Math.random() * 4)]
  }));

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;
    particles.forEach(p => {
      if (p.life > 0) {
        active = true;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.4;
        p.life -= 1.2;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size * 0.6);
      }
    });
    if (active) requestAnimationFrame(render);
  }
  render();
}

/* Đồ họa Trống Đồng & Nền Bụi Vàng Canvas 2D */
let drumSVG = '';
for (let i = 0; i < 16; i++) drumSVG += `<line y1="-24" y2="-46" transform="rotate(${i * 22.5})"/>`;
document.getElementById('drumSvg').innerHTML = drumSVG + '<circle r="94" stroke-dasharray="2 5"/><circle r="84"/><circle r="72" stroke-dasharray="9 4"/><circle r="56"/><circle r="22"/><circle r="12" stroke-width="3"/>';

const bgCanvas = document.getElementById('bgCanvas');
const bgCtx = bgCanvas.getContext('2d');
function resizeCanvas() {
  bgCanvas.width = window.innerWidth;
  bgCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function triggerFlash(type) {
  const flash = document.getElementById('flashScreen');
  flash.className = type;
  setTimeout(() => flash.className = '', 700);
}

const goldParticles = Array.from({ length: 50 }, () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  r: Math.random() * 2 + 0.5,
  vx: (Math.random() - 0.5) * 0.3,
  vy: -Math.random() * 0.5 - 0.1,
  alpha: Math.random() * 6
}));

function drawBackground() {
  bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
  goldParticles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.alpha += 0.03;
    if (p.y < 0) {
      p.y = bgCanvas.height;
      p.x = Math.random() * bgCanvas.width;
    }
    bgCtx.fillStyle = `rgba(244, 196, 48, ${0.15 + 0.35 * Math.abs(Math.sin(p.alpha))})`;
    bgCtx.beginPath();
    bgCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    bgCtx.fill();
  });
  requestAnimationFrame(drawBackground);
}
drawBackground();
