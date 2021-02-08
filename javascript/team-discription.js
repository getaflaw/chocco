const coWorker = document.querySelector('.team-list');

coWorker.addEventListener('click',function(event){
    if (!event.target.matches('button')) return
    var element = event.target;
    var elementPerents = element.parentElement.nextElementSibling;
    var currentHeight = elementPerents.clientHeight;
    console.log(currentHeight);
    if (currentHeight=="80"){
        event.target.style.transform="none";
        elementPerents.style.height="0";
    }
    else {
        elementPerents.style.height="80px";
        event.target.style.transform="rotate(180deg)";
    }
})








