const coWorker = document.querySelector('.team-list');
var cloneImg;
var elementImgclone;
coWorker.addEventListener('click',function(event){
    if (!event.target.matches('button')) return
    var element = event.target;
    var elementPerents = element.parentElement.parentElement.lastElementChild;
    var currentHeight = elementPerents.clientHeight;
    var imgCoworker = element.parentElement.previousElementSibling;
    var bodyWidth = document.body.clientWidth;
    if (currentHeight >= "80"){
        event.target.style.transform="none";
        elementPerents.style.height="0";
    }
    else {
        elementPerents.style.height="80px";
        
        event.target.style.transform="rotate(180deg)";
        console.log(currentHeight);
    }
    cloneImg = imgCoworker.cloneNode(true);
    elementImgclone = element.parentElement.nextElementSibling;
    if (bodyWidth < '768'){
        if (elementImgclone.style.height=='288px'){
            elementImgclone.style.height='0';
            setTimeout(function(){elementImgclone.remove();},500)
        }
        else{
        element.parentElement.after(cloneImg);
        setTimeout(function(){cloneImg.style.height='288px';},10)
        
        }
        
        

    }
    
})








