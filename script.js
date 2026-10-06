/* =========================================================
   LỊCH SỬ 9 — BÀI 5 PHẦN 4
   VERSION 2.0
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ====================================================== */

    const slides = Array.from(
        document.querySelectorAll(".slide")
    );

    const totalSlides = slides.length;

    const currentSlideElement =
        document.getElementById("currentSlide");

    const totalSlidesElement =
        document.getElementById("totalSlides");

    const progressBar =
        document.getElementById("progressBar");

    const prevBtn =
        document.getElementById("prevBtn");

    const nextBtn =
        document.getElementById("nextBtn");

    const navDots =
        document.getElementById("navDots");

    const particles =
        document.getElementById("particles");


    /* =====================================================
       STATE
    ====================================================== */

    let currentSlide = 0;

    let isAnimating = false;


    /* =====================================================
       TOTAL SLIDES
    ====================================================== */

    totalSlidesElement.textContent =
        String(totalSlides).padStart(2, "0");


    /* =====================================================
       REVEAL INDEX
    ====================================================== */

    slides.forEach(slide => {

        const revealElements =
            slide.querySelectorAll(".reveal");

        revealElements.forEach((element, index) => {

            element.style.setProperty(
                "--i",
                index
            );

        });

    });


    /* =====================================================
       NAVIGATION DOTS
    ====================================================== */

    slides.forEach((slide, index) => {

        const dot =
            document.createElement("button");

        dot.className = "nav-dot";

        dot.setAttribute(
            "aria-label",
            `Đi tới slide ${index + 1}`
        );

        dot.title =
            `${String(index + 1).padStart(2, "0")} — ${
                slide.dataset.label || "Slide"
            }`;

        dot.addEventListener("click", () => {

            goToSlide(index);

        });

        navDots.appendChild(dot);

    });


    const dots =
        Array.from(
            navDots.querySelectorAll(".nav-dot")
        );


    /* =====================================================
       UPDATE SLIDE
    ====================================================== */

    function updateSlideView(
        newIndex,
        direction = 1
    ) {

        if (
            newIndex < 0 ||
            newIndex >= totalSlides ||
            isAnimating
        ) {
            return;
        }

        isAnimating = true;

        slides.forEach((slide, index) => {

            slide.classList.remove("active");

            if (index === newIndex) {

                slide.style.transform =
                    direction > 0
                        ? "translate3d(35px, 0, 0) scale(0.985)"
                        : "translate3d(-35px, 0, 0) scale(0.985)";

                requestAnimationFrame(() => {

                    slide.classList.add("active");

                    slide.style.transform =
                        "translate3d(0, 0, 0) scale(1)";

                });

            } else {

                slide.style.transform =
                    "translate3d(0, 0, 0) scale(1)";

            }

        });


        currentSlide = newIndex;


        /* Counter */

        currentSlideElement.textContent =
            String(currentSlide + 1).padStart(2, "0");


        /* Progress */

        const progress =
            ((currentSlide + 1) / totalSlides) * 100;

        progressBar.style.width =
            `${progress}%`;


        /* Dots */

        dots.forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentSlide
            );

        });


        /* Buttons */

        prevBtn.disabled =
            currentSlide === 0;

        nextBtn.disabled =
            currentSlide === totalSlides - 1;


        /* Scroll */

        const activeSlide =
            slides[currentSlide];

        if (activeSlide) {

            activeSlide.scrollTop = 0;

        }


        setTimeout(() => {

            isAnimating = false;

        }, 550);

    }


    /* =====================================================
       GO TO SLIDE
    ====================================================== */

    function goToSlide(index) {

        if (index === currentSlide) {
            return;
        }

        const direction =
            index > currentSlide
                ? 1
                : -1;

        updateSlideView(
            index,
            direction
        );

    }


    /* =====================================================
       NEXT
    ====================================================== */

    function nextSlide() {

        if (
            currentSlide <
            totalSlides - 1
        ) {

            goToSlide(
                currentSlide + 1
            );

        }

    }


    /* =====================================================
       PREVIOUS
    ====================================================== */

    function prevSlide() {

        if (currentSlide > 0) {

            goToSlide(
                currentSlide - 1
            );

        }

    }


    /* =====================================================
       BUTTONS
    ====================================================== */

    nextBtn.addEventListener(
        "click",
        nextSlide
    );

    prevBtn.addEventListener(
        "click",
        prevSlide
    );


    /* =====================================================
       KEYBOARD
    ====================================================== */

    document.addEventListener(
        "keydown",
        event => {

            const key =
                event.key.toLowerCase();


            if (
                key === "arrowright" ||
                key === " " ||
                key === "pagedown"
            ) {

                event.preventDefault();

                nextSlide();

            }


            else if (
                key === "arrowleft" ||
                key === "pageup"
            ) {

                event.preventDefault();

                prevSlide();

            }


            else if (key === "home") {

                event.preventDefault();

                goToSlide(0);

            }


            else if (key === "end") {

                event.preventDefault();

                goToSlide(
                    totalSlides - 1
                );

            }

        }
    );


    /* =====================================================
       QUIZ
    ====================================================== */

    const correctAnswers = [
        2,
        1,
        0
    ];


    const quizSlides =
        Array.from(
            document.querySelectorAll(".quiz-slide")
        );


    quizSlides.forEach(
        (quizSlide, quizIndex) => {

            const options =
                Array.from(
                    quizSlide.querySelectorAll(
                        ".quiz-option"
                    )
                );

            const feedback =
                quizSlide.querySelector(
                    ".quiz-feedback"
                );

            options.forEach(option => {

                option.addEventListener(
                    "click",
                    () => {

                        const selected =
                            Number(
                                option.dataset.answer
                            );

                        const correct =
                            correctAnswers[
                                quizIndex
                            ];


                        /* Không cho chọn lại */

                        options.forEach(
                            button => {

                                button.disabled =
                                    true;

                            }
                        );


                        /* Đúng */

                        if (
                            selected === correct
                        ) {

                            option.classList.add(
                                "correct"
                            );

                            feedback.textContent =
                                "✓ Chính xác!";

                            feedback.className =
                                "quiz-feedback success";

                        }


                        /* Sai */

                        else {

                            option.classList.add(
                                "wrong"
                            );

                            options[correct]
                                .classList.add(
                                    "correct-answer"
                                );

                            const answerLetter =
                                options[
                                    correct
                                ]
                                .querySelector("span")
                                .textContent;

                            feedback.textContent =
                                `Chưa đúng — đáp án đúng là ${answerLetter}.`;

                            feedback.className =
                                "quiz-feedback fail";

                        }

                    }
                );

            });

        }
    );


    /* =====================================================
       PARTICLES
    ====================================================== */

    function createParticles() {

        if (!particles) {
            return;
        }

        const count =
            window.innerWidth < 700
                ? 15
                : 30;

        for (
            let i = 0;
            i < count;
            i++
        ) {

            const particle =
                document.createElement("span");

            particle.className =
                "particle";

            particle.style.left =
                `${Math.random() * 100}%`;

            particle.style.top =
                `${Math.random() * 100}%`;

            particle.style.opacity =
                `${0.08 + Math.random() * 0.18}`;

            particle.style.animationDuration =
                `${8 + Math.random() * 15}s`;

            particle.style.animationDelay =
                `${Math.random() * -15}s`;

            particles.appendChild(
                particle
            );

        }

    }

    createParticles();


    /* =====================================================
       TOUCH / SWIPE
    ====================================================== */

    let touchStartX = 0;
    let touchEndX = 0;


    document.addEventListener(
        "touchstart",
        event => {

            touchStartX =
                event.changedTouches[0].screenX;

        },
        {
            passive: true
        }
    );


    document.addEventListener(
        "touchend",
        event => {

            touchEndX =
                event.changedTouches[0].screenX;

            handleSwipe();

        },
        {
            passive: true
        }
    );


    function handleSwipe() {

        const distance =
            touchEndX - touchStartX;

        const threshold = 60;

        if (
            Math.abs(distance) <
            threshold
        ) {
            return;
        }

        if (distance < 0) {

            nextSlide();

        } else {

            prevSlide();

        }

    }


    /* =====================================================
       INITIAL STATE
    ====================================================== */

    slides.forEach(
        (slide, index) => {

            slide.classList.toggle(
                "active",
                index === 0
            );

        }
    );


    dots.forEach(
        (dot, index) => {

            dot.classList.toggle(
                "active",
                index === 0
            );

        }
    );


    progressBar.style.width =
        `${(1 / totalSlides) * 100}%`;


    prevBtn.disabled = true;


    /* =====================================================
       CONSOLE
    ====================================================== */

    console.log(
        `%cLỊCH SỬ 9 — BÀI 5 PHẦN 4`,
        "font-weight:700;color:#d7b45c;"
    );

    console.log(
        `Version 2.0 • ${totalSlides} slides`
    );

});
