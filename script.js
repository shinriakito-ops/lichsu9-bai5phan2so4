// =========================================
// BIẾN CHÍNH
// =========================================

const khungSlide = document.getElementById("khungSlide");

const soHienTai = document.getElementById("soHienTai");
const tongSo = document.getElementById("tongSo");

const tienTrinh = document.getElementById("tienTrinh");

const nutTruoc = document.getElementById("nutTruoc");
const nutSau = document.getElementById("nutSau");
const nutNhac = document.getElementById("nutNhac");

const nhacNen = document.getElementById("nhacNen");

let slideHienTai = 0;

let dangPhatNhac = false;


// =========================================
// TẠO SLIDE
// =========================================

function taoSlide(slide, so) {

    const khung = document.createElement("section");

    khung.className = "slide";

    khung.dataset.so = so;


    // -------------------------
    // Trang bìa
    // -------------------------

    if (slide.loai === "trang-bia") {

        khung.classList.add("trang-bia");

        khung.innerHTML = `
            <div class="nhan-slide">
                ${slide.nhan}
            </div>

            <h1 class="tieu-de">
                ${slide.tieuDe}
            </h1>

            <div class="phu-de">
                ${slide.phuDe}
            </div>

            <div class="thong-tin-nhom">
                ${slide.thongTin}
            </div>

            <div class="loi-mo-dau">
                ${slide.loiMoDau}
            </div>
        `;

        return khung;
    }


    // -------------------------
    // Nội dung có card
    // -------------------------

    if (slide.loai === "noi-dung") {

        khung.innerHTML = `
            <div class="nhan-slide">
                ${slide.nhan}
            </div>

            <h2 class="tieu-de">
                ${slide.tieuDe}
            </h2>

            ${
                slide.moDau
                    ? `<p class="mo-dau">${slide.moDau}</p>`
                    : ""
            }

            <div class="danh-sach-the">

                ${slide.the.map(the => `

                    <article class="the">

                        <div class="so-the">
                            ${the.so}
                        </div>

                        <h3>
                            ${the.tieuDe}
                        </h3>

                        <p>
                            ${the.noiDung}
                        </p>

                    </article>

                `).join("")}

            </div>

            ${
                slide.ket
                    ? `<div class="ket">${slide.ket}</div>`
                    : ""
            }
        `;

        return khung;
    }


    // -------------------------
    // Mốc thời gian
    // -------------------------

    if (slide.loai === "moc-thoi-gian") {

        khung.innerHTML = `
            <div class="nhan-slide">
                ${slide.nhan}
            </div>

            <h2 class="tieu-de">
                ${slide.tieuDe}
            </h2>

            <div class="danh-sach-the">

                ${slide.moc.map((moc, index) => `

                    <article class="the">

                        <div class="so-the">
                            ${moc[0]}
                        </div>

                        <h3>
                            ${moc[1]}
                        </h3>

                        <p>
                            Mốc thời gian quan trọng trong quá trình
                            hình thành và phát triển phong trào.
                        </p>

                    </article>

                `).join("")}

            </div>
        `;

        return khung;
    }


    // -------------------------
    // Điểm nhấn
    // -------------------------

    if (
        slide.loai === "diem-nhan" ||
        slide.loai === "su-kien-lon"
    ) {

        khung.classList.add(
            slide.loai === "su-kien-lon"
                ? "su-kien-lon"
                : "diem-nhan"
        );

        khung.innerHTML = `
            <div class="nhan-slide">
                ${slide.nhan}
            </div>

            <div class="nam-lon">
                ${slide.nam}
            </div>

            <h2 class="tieu-de">
                ${slide.tieuDe}
            </h2>

            <p class="noi-dung-lon">
                ${slide.noiDung}
            </p>

            <p class="diem-ket">
                ${slide.ket}
            </p>
        `;

        return khung;
    }


    // -------------------------
    // Chuyển biến Tân Việt
    // -------------------------

    if (slide.loai === "chuyen-bien") {

        khung.innerHTML = `
            <div class="nhan-slide">
                ${slide.nhan}
            </div>

            <h2 class="tieu-de">
                ${slide.tieuDe}
            </h2>

            <div class="chuyen-bien-box">

                <div class="huong">
                    <span>Ban đầu</span>
                    <strong>${slide.truoc}</strong>
                </div>

                <div class="mui-ten">
                    →
                </div>

                <div class="huong sau">
                    <span>Về sau</span>
                    <strong>${slide.sau}</strong>
                </div>

            </div>

            <p class="chuyen-bien-text">
                ${slide.noiDung}
            </p>

            <div class="ket">
                ${slide.them}
            </div>
        `;

        return khung;
    }


    // -------------------------
    // Cảnh báo
    // -------------------------

    if (slide.loai === "canh-bao") {

        khung.classList.add("canh-bao");

        khung.innerHTML = `
            <div class="nhan-slide">
                ${slide.nhan}
            </div>

            <div class="nam-lon">
                2/1929
            </div>

            <h2 class="tieu-de">
                ${slide.tieuDe}
            </h2>

            <p class="noi-dung-lon">
                ${slide.noiDung}
            </p>

            <div class="ket">
                ${slide.ket}
            </div>
        `;

        return khung;
    }


    // -------------------------
    // So sánh
    // -------------------------

    if (slide.loai === "so-sanh") {

        khung.innerHTML = `
            <div class="nhan-slide">
                ${slide.nhan}
            </div>

            <h2 class="tieu-de">
                ${slide.tieuDe}
            </h2>

            <div class="bang-so-sanh">

                ${slide.cot.map(cot => `

                    <article class="cot-so-sanh ${cot.mau}">

                        <h3>
                            ${cot.ten}
                        </h3>

                        <div class="nhan-cot">
                            Khuynh hướng
                        </div>

                        <p>
                            ${cot.khuynhHuong}
                        </p>

                        <div class="nhan-cot">
                            Hoạt động
                        </div>

                        <p>
                            ${cot.hoatDong}
                        </p>

                        <div class="nhan-cot">
                            Kết quả
                        </div>

                        <p>
                            ${cot.ketQua}
                        </p>

                    </article>

                `).join("")}

            </div>
        `;

        return khung;
    }


    // -------------------------
    // Kết luận
    // -------------------------

    if (slide.loai === "ket-luan") {

        khung.classList.add("ket-luan");

        khung.innerHTML = `
            <div class="nhan-slide">
                ${slide.nhan}
            </div>

            <h2 class="tieu-de">
                ${slide.tieuDe}
            </h2>

            <div class="ket-luan-box">
                ${slide.noiDung}
                <br><br>
                <strong>
                    ${slide.ket}
                </strong>
            </div>
        `;

        return khung;
    }


    // -------------------------
    // Câu hỏi
    // -------------------------

    if (slide.loai === "cau-hoi") {

        khung.classList.add("cau-hoi");

        khung.innerHTML = `
            <div class="nhan-slide">
                ${slide.nhan}
            </div>

            <div class="cau-hoi-noi-dung">
                ${slide.cauHoi}
            </div>

            <div class="danh-sach-dap-an">

                ${slide.luaChon.map((dapAn, index) => {

                    const chu = ["A", "B", "C", "D"][index];

                    return `
                        <button
                            class="dap-an"
                            data-dap-an="${index}"
                        >

                            <span class="ky-hieu-dap-an">
                                ${chu}
                            </span>

                            <span>
                                ${dapAn.substring(3)}
                            </span>

                        </button>
                    `;

                }).join("")}

            </div>

            <div class="phan-hoi"></div>
        `;

        return khung;
    }


    // -------------------------
    // Slide 19
    // -------------------------

    if (slide.loai === "ket-thuc-noi-dung") {

        khung.classList.add("ket-thuc-noi-dung");

        khung.innerHTML = `
            <div class="nhan-slide">
                ${slide.nhan}
            </div>

            <h2 class="tieu-de">
                ${slide.tieuDe}
            </h2>

            <div class="danh-sach-nho">

                ${slide.noiDung.map(noiDung => `
                    <div class="dong-noi-dung">
                        <span class="dau-dong">✓</span>
                        <span>${noiDung}</span>
                    </div>
                `).join("")}

            </div>
        `;

        return khung;
    }


    // -------------------------
    // Cảm ơn
    // -------------------------

    if (slide.loai === "cam-on") {

        khung.classList.add("cam-on");

        khung.innerHTML = `
            <div class="nhan-slide">
                PHẦN THUYẾT TRÌNH KẾT THÚC
            </div>

            <h2 class="tieu-de">
                ${slide.tieuDe}
            </h2>

            <p class="cam-on-thong-tin">
                ${slide.thongTin}
            </p>

            <div class="cam-on-lop">
                ${slide.lop}
            </div>
        `;

        return khung;
    }


    return khung;
}


// =========================================
// HIỂN THỊ TOÀN BỘ SLIDE
// =========================================

function taoTatCaSlide() {

    duLieuSlide.forEach((slide, index) => {

        const khung = taoSlide(slide, index);

        khung.addEventListener(
            "click",
            xuLyClickQuiz
        );

        khungSlide.appendChild(khung);
    });

    tongSo.textContent =
        String(duLieuSlide.length);
}


// =========================================
// CHUYỂN SLIDE
// =========================================

function hienThiSlide(viTri) {

    if (
        viTri < 0 ||
        viTri >= duLieuSlide.length
    ) {
        return;
    }

    const cacSlide =
        document.querySelectorAll(".slide");

    cacSlide.forEach(slide => {
        slide.classList.remove("active");
    });

    cacSlide[viTri].classList.add("active");

    slideHienTai = viTri;

    capNhatGiaoDien();
}


// =========================================
// CẬP NHẬT GIAO DIỆN
// =========================================

function capNhatGiaoDien() {

    const so =
        String(slideHienTai + 1)
            .padStart(2, "0");

    soHienTai.textContent = so;

    const phanTram =
        ((slideHienTai + 1) /
            duLieuSlide.length) * 100;

    tienTrinh.style.width =
        `${phanTram}%`;

    nutTruoc.disabled =
        slideHienTai === 0;

    nutSau.disabled =
        slideHienTai === duLieuSlide.length - 1;
}


// =========================================
// NÚT ĐIỀU HƯỚNG
// =========================================

nutTruoc.addEventListener(
    "click",
    () => {

        hienThiSlide(
            slideHienTai - 1
        );
    }
);


nutSau.addEventListener(
    "click",
    () => {

        hienThiSlide(
            slideHienTai + 1
        );
    }
);


// =========================================
// QUIZ
// =========================================

function xuLyClickQuiz(event) {

    const nut =
        event.target.closest(".dap-an");

    if (!nut) {
        return;
    }

    const slide =
        nut.closest(".slide");

    const viTriSlide =
        Number(slide.dataset.so);

    const duLieu =
        duLieuSlide[viTriSlide];

    const luaChon =
        Number(nut.dataset.dapAn);

    const cacNut =
        slide.querySelectorAll(".dap-an");

    const phanHoi =
        slide.querySelector(".phan-hoi");


    cacNut.forEach(nutDapAn => {
        nutDapAn.disabled = true;
    });


    if (luaChon === duLieu.dapAn) {

        nut.classList.add("dung");

        phanHoi.className =
            "phan-hoi dung";

        phanHoi.textContent =
            "✓ Chính xác! Em đã chọn đúng đáp án.";
    }

    else {

        nut.classList.add("sai");

        cacNut[
            duLieu.dapAn
        ].classList.add("dung");

        phanHoi.className =
            "phan-hoi sai";

        phanHoi.textContent =
            `✗ Chưa đúng. Đáp án đúng là ${
                ["A", "B", "C", "D"][duLieu.dapAn]
            }.`;
    }
}


// =========================================
// ÂM NHẠC
// =========================================

function capNhatNutNhac() {

    if (dangPhatNhac) {

        nutNhac.textContent =
            "🔊 Đang phát";

    } else {

        nutNhac.textContent =
            "🔇 Nhạc nền";
    }
}


async function batNhac() {

    try {

        await nhacNen.play();

        dangPhatNhac = true;

        capNhatNutNhac();

    } catch (loi) {

        console.log(
            "Chưa thể phát nhạc:",
            loi
        );

        nutNhac.textContent =
            "⚠️ Kiểm tra MP3";
    }
}


function dungNhac() {

    nhacNen.pause();

    dangPhatNhac = false;

    capNhatNutNhac();
}


nutNhac.addEventListener(
    "click",
    async () => {

        if (dangPhatNhac) {

            dungNhac();

        } else {

            await batNhac();
        }
    }
);


nhacNen.addEventListener(
    "error",
    () => {

        nutNhac.textContent =
            "⚠️ Chưa có MP3";
    }
);


// =========================================
// PHÍM TẮT
// =========================================

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "ArrowRight" ||
            event.key === " " ||
            event.key === "PageDown"
        ) {

            event.preventDefault();

            hienThiSlide(
                slideHienTai + 1
            );
        }


        if (
            event.key === "ArrowLeft" ||
            event.key === "PageUp"
        ) {

            event.preventDefault();

            hienThiSlide(
                slideHienTai - 1
            );
        }


        if (
            event.key === "Home"
        ) {

            hienThiSlide(0);
        }


        if (
            event.key === "End"
        ) {

            hienThiSlide(
                duLieuSlide.length - 1
            );
        }


        if (
            event.key === "m" ||
            event.key === "M"
        ) {

            nutNhac.click();
        }
    }
);


// =========================================
// KHỞI ĐỘNG
// =========================================

taoTatCaSlide();

hienThiSlide(0);
