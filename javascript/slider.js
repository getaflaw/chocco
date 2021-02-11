const sliderBtnRight = document.querySelectorAll(".bar-arrowright");
const sliderBtnLeft = document.querySelectorAll(".bar-arrowleft");
const slider = document.querySelectorAll('.slider__main');
const sliderFade = document.querySelectorAll('.slider__main_fade');
var sliderIndex = 0;


sliderBtnRight.forEach(function(event){
    event.addEventListener('click', function(){
        
        slider[sliderIndex].classList.add('slider__main_fade');
        slider[sliderIndex].classList.add('slider__main_Rtoright');
        let sliderNext = sliderIndex+1;
        
        if (sliderNext >= 2) {
            sliderNext = 0;
        }   
        console.log(sliderNext);
        slider[sliderNext].classList.add('slider__main_Rtoleft');
        let sliderPrev = sliderIndex-1;
        sliderIndex += 1;
        
        if (sliderIndex>=slider.length){
            sliderIndex = 0 ;
        }
        
        slider[sliderIndex].classList.remove('slider__main_fade');
       
        
        
        if (sliderPrev<0){
            sliderPrev=1;
        }
        
        setTimeout(function(){
            slider.forEach(function(item){
                
                item.classList.remove('slider__main_Rtoright');
            })
        },1000);
        setTimeout(function(){
            slider.forEach(function(item){
                item.classList.remove('slider__main_Rtoleft');
                
            })
        },500);
        
        sliderPrev=sliderIndex;
        
    })
})
sliderBtnLeft.forEach(function(event){
    event.addEventListener('click', function(){
        
        slider[sliderIndex].classList.add('slider__main_fade');
        slider[sliderIndex].classList.add('slider__main_Ltoright');
        let sliderNext = sliderIndex+1;
        
        if (sliderNext >= slider.length) {
            sliderNext = 0;
        }   
        let sliderPrev = sliderIndex-1;
        if (sliderPrev<0){
            sliderPrev=1;
        }
        console.log(sliderNext);
        slider[sliderPrev].classList.add('slider__main_Ltoleft');
        
        sliderIndex += 1;
        
        if (sliderIndex>=slider.length){
            sliderIndex = 0 ;
        }
        
        slider[sliderIndex].classList.remove('slider__main_fade');
       
        
        
        
        
        setTimeout(function(){
            slider.forEach(function(item){
                
                item.classList.remove('slider__main_Ltoright');
            })
        },1000);
        setTimeout(function(){
            slider.forEach(function(item){
               item.classList.remove('slider__main_Ltoleft');
                
            })
        },500);
        
        sliderPrev=sliderIndex;
        
    })
})







// const sliderR = document.querySelector('.slider__right');
// const sliderL = document.querySelector('.slider__left');

// sliderBtnRight.forEach(function(event){
//     event.addEventListener('click', function(e){
//         e.preventDefault();
//         sliderL.classList.toggle('slider__right');
//         sliderL.classList.toggle('slider__left');
//         sliderR.classList.toggle('slider__right');
//         sliderR.classList.toggle('slider__left');
//     });
// });
// sliderBtnLeft.forEach(function(event){
//     event.addEventListener('click', function(e){
//         e.preventDefault();
//         sliderL.classList.toggle('slider__right');
//         sliderL.classList.toggle('slider__left');
//         sliderR.classList.toggle('slider__right');
//         sliderR.classList.toggle('slider__left');
//     });
// });
