const compositionBtn = document.querySelector(".bar-descriptions__composition ");
const compositionList = document.querySelector(".composition-list");
const container = document.querySelector(".container-bar");

compositionBtn.addEventListener('mousemove', function(){
    compositionList.style.display="flex";
});
compositionBtn.addEventListener('mouseout', function(){
    compositionList.style.display="none";
});
