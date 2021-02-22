const sliderMenu = document.querySelectorAll('.menu-items__inner');
const hiddenSlide = document.querySelectorAll('.menu-items__content');
const listSlider = document.querySelectorAll('.menu-items');
const menuCloseBtn = document.querySelectorAll('.menu-items__btn');
sliderMenu.forEach(function(item){
    item.addEventListener('click',function(){
        listSlider.forEach((element)=> {
            element.classList.remove('is-active');
        });
        let liSlide = item.parentElement;
        hiddenSlide.forEach(function(slide){
            slide.classList.remove("menu-items__content_active");
        });
        let currentSlide = item.nextElementSibling;
        if (currentSlide.clientWidth > 0) {
            currentSlide.classList.remove("menu-items__content_active");
            
        }
        else {
        liSlide.classList.add('is-active');
        
        currentSlide.classList.add("menu-items__content_active");
        
        menuCloseBtn.forEach((itemBtn)=> {
            itemBtn.addEventListener('click', function(){
                currentSlide.classList.remove("menu-items__content_active");
                listSlider.forEach((element)=> {
                    element.classList.remove('is-active');
                });
        })
        
        });
    }
    });
});