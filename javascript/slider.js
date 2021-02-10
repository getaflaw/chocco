const sliderBtnRight = document.querySelectorAll(".bar-arrowright");
const sliderBtnLeft = document.querySelectorAll(".bar-arrowleft");
const sliderR = document.querySelector('.slider__right');
const sliderL = document.querySelector('.slider__left');

sliderBtnRight.forEach(function(event){
    event.addEventListener('click', function(e){
        e.preventDefault();
        sliderL.classList.toggle('slider__right');
        sliderL.classList.toggle('slider__left');
        sliderR.classList.toggle('slider__right');
        sliderR.classList.toggle('slider__left');
    });
});
sliderBtnLeft.forEach(function(event){
    event.addEventListener('click', function(e){
        e.preventDefault();
        sliderL.classList.toggle('slider__right');
        sliderL.classList.toggle('slider__left');
        sliderR.classList.toggle('slider__right');
        sliderR.classList.toggle('slider__left');
    });
});
