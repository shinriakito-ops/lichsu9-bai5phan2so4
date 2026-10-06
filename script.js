/* =====================================================
   ĐIỀU KHIỂN TRANG TRÌNH CHIẾU
===================================================== */

const danhSachSlide =
    Array.from(document.querySelectorAll(".slide"));

const tongSoSlide =
    danhSachSlide.length;

let slideDangXem = 0;
let dangChuyenSlide = false;


/* =====================================================
   LẤY PHẦN TỬ
===================================================== */

const slideHienTai =
    document.getElementById("slideHienTai");

const tongSoSlideHienThi =
    document.getElementById("tongSoSlide");

const thanhTienTrinh =
    document.getElementById("thanhTienTrinh");

const nutTruoc =
    document.getElementById("nutTruoc");

const nutSau =
    document.getElementById("nutSau");

const cacCham =
    document.getElementById("cacCham");

const nhacNen =
    document.getElementById("nhacNen");


/* =====================================================
   HIỂN THỊ TỔNG SỐ SLIDE
===================================================== */

tongSoSlideHienThi.textContent =
    String(tongSoSlide).padStart(2, "0");


/* =====================================================
   TẠO CÁC CHẤM ĐIỀU HƯỚNG
===================================================== */

danhSachSlide.forEach((slide, viTri) => {

    const cham =
        document.createElement("button");

    cham.className = "cham-slide";

    cham.title =
        `${viTri + 1}. ${slide.dataset.ten || "Slide"}`;

    cham.addEventListener("click", () => {

        diToiSlide(viTri);

    });

    cacCham.appendChild(cham);

});


const cacChamSlide =
    Array.from(
        document.querySelectorAll(".cham-slide")
    );


/* =====================================================
   HIỆN SLIDE
===================================================== */

function hienThiSlide(viTri, huong = 1) {

    if (
        viTri < 0 ||
        viTri >= tongSoSlide ||
        dangChuyenSlide
    ) {
        return;
    }

    dangChuyenSlide = true;


    danhSachSlide.forEach((slide, i) => {

        slide.classList.remove("dang-hien");

        if (i === viTri) {

            slide.style.transform =
                huong > 0
                    ? "translateX(35px)"
                    : "translateX(-35px)";

            requestAnimationFrame(() => {

                slide.classList.add("dang-hien");

                slide.style.transform =
                    "translateX(0)";

            });

        }

    });


    slideDangXem = viTri;


    /* Số slide */

    slideHienTai.textContent =
        String(viTri + 1).padStart(2, "0");


    /* Thanh tiến trình */

    const phanTram =
        ((viTri + 1) / tongSoSlide) * 100;

    thanhTienTrinh.style.width =
        `${phanTram}%`;


    /* Chấm */

    cacChamSlide.forEach((cham, i) => {

        cham.classList.toggle(
            "dang-chon",
            i === viTri
        );

    });


    /* Nút */

    nutTruoc.disabled =
        viTri === 0;

    nutSau.disabled =
        viTri === tongSoSlide - 1;


    /* Đưa slide về đầu */

    danhSachSlide[viTri].scrollTop = 0;


    setTimeout(() => {

        dangChuyenSlide = false;

    }, 550);

}


/* =====================================================
   ĐI TỚI SLIDE
===================================================== */

function diToiSlide(viTri) {

    if (viTri === slideDangXem) {
        return;
    }

    const huong =
        viTri > slideDangXem
            ? 1
            : -1;

    hienThiSlide(
        viTri,
        huong
    );

}


/* =====================================================
   SLIDE SAU
===================================================== */

function slideSau() {

    if (
        slideDangXem <
        tongSoSlide - 1
    ) {

        diToiSlide(
            slideDangXem + 1
        );

    }

}


/* =====================================================
   SLIDE TRƯỚC
===================================================== */

function slideTruoc() {

    if (slideDangXem > 0) {

        diToiSlide(
            slideDangXem - 1
        );

    }

}


/* =====================================================
   NÚT ĐIỀU KHIỂN
===================================================== */

nutSau.addEventListener(
    "click",
    slideSau
);

nutTruoc.addEventListener(
    "click",
    slideTruoc
);


/* =====================================================
   PHÍM BÀN PHÍM
===================================================== */

document.addEventListener(
    "keydown",
    (event) => {

        const phim =
            event.key.toLowerCase();


        if (
            phim === "arrowright" ||
            phim === " " ||
            phim === "pagedown"
        ) {

            event.preventDefault();

            slideSau();

        }


        else if (
            phim === "arrowleft" ||
            phim === "pageup"
        ) {

            event.preventDefault();

            slideTruoc();

        }


        else if (phim === "home") {

            event.preventDefault();

            diToiSlide(0);

        }


        else if (phim === "end") {

            event.preventDefault();

            diToiSlide(
                tongSoSlide - 1
            );

        }

    }
);


/* =====================================================
   QUIZ
===================================================== */

const cacSlideCauHoi =
    Array.from(
        document.querySelectorAll(".slide-cau-hoi")
    );


cacSlideCauHoi.forEach(
    (slide, soCau) => {

        const cacDapAn =
            Array.from(
                slide.querySelectorAll(".dap-an")
            );

        const phanHoi =
            slide.querySelector(".phan-hoi");

        const tenCau =
            `cau${soCau + 1}`;

        cacDapAn.forEach((nut) => {

            nut.addEventListener(
                "click",
                () => {

                    /* Không cho bấm lại */

                    cacDapAn.forEach(
                        (item) => {

                            item.disabled = true;

                        }
                    );


                    const dapAnChon =
                        nut.dataset.dapAn;

                    const dapAnDung =
                        window.dapAnDung
                            ? window.dapAnDung[tenCau]
                            : null;


                    /*
                       data.js khai báo const.
                       Ở đây dùng dữ liệu tương ứng
                       theo số câu.
                    */

                    const dapAnChinhXac =
                        soCau === 0
                            ? "C"
                            : soCau === 1
                                ? "C"
                                : "B";


                    if (
                        dapAnChon ===
                        dapAnChinhXac
                    ) {

                        nut.classList.add(
                            "chon-dung"
                        );

                        phanHoi.textContent =
                            "✓ Chính xác!";

                        phanHoi.className =
                            "phan-hoi dung";

                    } else {

                        nut.classList.add(
                            "chon-sai"
                        );


                        cacDapAn.forEach(
                            (item) => {

                                if (
                                    item.dataset.dapAn ===
                                    dapAnChinhXac
                                ) {

                                    item.classList.add(
                                        "dap-an-dung"
                                    );

                                }

                            }
                        );


                        phanHoi.textContent =
                            `Chưa đúng — đáp án đúng là ${dapAnChinhXac}.`;

                        phanHoi.className =
                            "phan-hoi sai";

                    }

                }
            );

        });

    }
);


/* =====================================================
   NHẠC NỀN
===================================================== */

let daBatNhac = false;


function batNhacNen() {

    if (
        daBatNhac ||
        !nhacNen
    ) {
        return;
    }

    nhacNen.volume = 0.16;

    nhacNen.play()
        .then(() => {

            daBatNhac = true;

        })
        .catch(() => {

            /*
                Trình duyệt có thể chặn autoplay.
                Khi người dùng bấm vào trang,
                ta sẽ thử phát lại.
            */

        });

}


document.addEventListener(
    "click",
    batNhacNen,
    {
        once: true
    }
);


/* =====================================================
   HIỆU ỨNG NỀN NHẸ
===================================================== */

const hatSang =
    document.getElementById("hat-sang");


function taoHatSang() {

    if (!hatSang) {
        return;
    }

    const soLuong =
        window.innerWidth < 700
            ? 12
            : 24;

    for (
        let i = 0;
        i < soLuong;
        i++
    ) {

        const hat =
            document.createElement("span");

        hat.className =
            "hat";

        hat.style.left =
            `${Math.random() * 100}%`;

        hat.style.top =
            `${Math.random() * 100}%`;

        hat.style.animationDuration =
            `${9 + Math.random() * 12}s`;

        hat.style.animationDelay =
            `${Math.random() * -12}s`;

        hatSang.appendChild(hat);

    }

}


taoHatSang();


/* =====================================================
   SWIPE
===================================================== */

let viTriBatDau = 0;
let viTriKetThuc = 0;


document.addEventListener(
    "touchstart",
    (event) => {

        viTriBatDau =
            event.changedTouches[0].screenX;

    },
    {
        passive: true
    }
);


document.addEventListener(
    "touchend",
    (event) => {

        viTriKetThuc =
            event.changedTouches[0].screenX;

        const khoangCach =
            viTriKetThuc -
            viTriBatDau;

        if (
            Math.abs(khoangCach) < 60
        ) {
            return;
        }

        if (khoangCach < 0) {

            slideSau();

        } else {

            slideTruoc();

        }

    },
    {
        passive: true
    }
);


/* =====================================================
   KHỞI ĐỘNG
===================================================== */

hienThiSlide(
    0,
    1
);


console.log(
    "Lịch sử 9 - Bài 5 - Phần 4 | Nhóm 4 - 9A.6"
);
