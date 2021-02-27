const sliderScroll = document.querySelector('.slider-scroll');


window.addEventListener('wheel', (eventScroll)=>{
    let sliderTop= parseInt(sliderScroll.style.top);
    
    if (eventScroll.deltaY > 0 && sliderTop > -800) {
        sliderScroll.style.top = sliderTop -100 + '%';
    }
    if (eventScroll.deltaY < 0 && sliderTop < 0) {
        sliderScroll.style.top = sliderTop +100 + '%';
    }
    
});