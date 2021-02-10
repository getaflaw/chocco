const compositionBtn = document.querySelectorAll(".bar-descriptions__composition ");
const compositionList = document.querySelectorAll(".composition-list");


compositionBtn.forEach(function(item){
    item.addEventListener('mousemove', function(){
        compositionList.forEach(function(itemList){
            itemList.style.display="flex";
        })
    });
    item.addEventListener('mouseout', function(){
        compositionList.forEach(function(itemList){
            itemList.style.display="none";
        })
    });
});

/*compositionBtn.addEventListener('mousemove', function(){
    compositionList.style.display="flex";
});
compositionBtn.addEventListener('mouseout', function(){
    compositionList.style.display="none";
});
*/