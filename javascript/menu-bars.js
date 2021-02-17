const sliderMenu = document.querySelectorAll('.menu-items__inner');
const hiddenSlide = document.querySelectorAll('.menu-items__content');


sliderMenu.forEach(function(item){
    item.addEventListener('click',function(){
        
        hiddenSlide.forEach(function(slide){
            slide.classList.remove("menu-items__content_active");
        });
        let currentSlide = item.nextElementSibling;
        if (currentSlide.clientWidth > 0) {
            currentSlide.classList.remove("menu-items__content_active");
            
        }
        else {
        currentSlide.classList.add("menu-items__content_active");
        closeBtn.classList.add('menu__close');
        currentSlide.appendChild(closeBtn);
        closeBtn.addEventListener('click', function(){
        closeBtn.remove();
        currentSlide.classList.remove("menu-items__content_active");
        
        });
    }
    });
});