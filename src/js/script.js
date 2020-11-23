window.addEventListener('DOMContentLoaded', function() {

    'use strict';


    function slider(sliderItem, prevArr, nextArr, sliderDots, dot, dotActive) {
        let slideIndex = 1,
        // slides = document.querySelectorAll('.slider-item'),
        // prev = document.querySelector('.prev'),
        // next = document.querySelector('.next'),
        // dotsWrap = document.querySelector('.slider-dots'),
        // dots = document.querySelectorAll('.dot');

        slides = document.querySelectorAll(sliderItem),
        prev = document.querySelector(prevArr),
        next = document.querySelector(nextArr),
        dotsWrap = document.querySelector(sliderDots),
        dots = document.querySelectorAll(dot);

        showSlides(slideIndex);

        function showSlides(n) {

            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }

            slides.forEach((item) => item.style.display = 'none');
            // for (let i = 0; i < slides.length; i++) {
            //     slides[i].style.display = 'none';
            // }
            dots.forEach((item) => item.classList.remove(dotActive));

            slides[slideIndex - 1].style.display = 'block';
            dots[slideIndex - 1].classList.add(dotActive);
        }

        function plusSlides(n) {
            showSlides(slideIndex += n); 
        }
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        prev.addEventListener('click', function() {
            plusSlides(-1);
        });

        next.addEventListener('click', function() {
            plusSlides(1);
        });

        dotsWrap.addEventListener('click', function(event) {
            for (let i = 0; i < dots.length + 1; i++) {
                if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                    currentSlide(i);
                }
            }
        });
    }


    slider('.slider-item', '.prev', '.next', '.slider-dots', '.dot', 'dot-active');
    // слайдер айтем должен включать классы и dot и дополнительный dot1
    slider('.slider-item_solutions', '.prev_solutions', '.next_solutions', '.slider-dots_solutions', '.dot1', 'dot-active_solutions');
    

});