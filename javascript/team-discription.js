const coWorker = document.querySelector('.team-list');

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
    var cloneImg = imgCoworker.cloneNode(true);
    var elementImgclone = element.parentElement.nextElementSibling;
    
    if (bodyWidth < '768'){
        if (elementImgclone.style.display=="block"){
            elementImgclone.remove();
        }
        else{
        cloneImg.style.display="block";
        cloneImg.style.opacity="1";
        element.parentElement.after(cloneImg);
        }
        
        

    }
    
})








