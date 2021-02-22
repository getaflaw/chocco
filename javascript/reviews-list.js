const userBtn = document.querySelectorAll('.reviews-list__users');
const currentUser = document.querySelectorAll('.reviews-content');
let tabName;
userBtn.forEach(function(item){
    item.addEventListener('click',selectTab);
});

function selectTab() {
    userBtn.forEach(item=> {
        item.classList.remove('is-active');
    });
    this.classList.add('is-active');
    tabName=this.getAttribute('data-tab-name');
    selectTabContent(tabName);
}

function selectTabContent(index) {
    currentUser.forEach(item=> {
        item.classList.contains(index)? item.classList.add('is-active') : item.classList.remove('is-active');
    })
}