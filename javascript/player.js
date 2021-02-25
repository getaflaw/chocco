const splash = document.querySelector('.player__splash');
const playBtn = document.querySelector('.control__play');
const videoEl = document.getElementById('video');


splash.addEventListener('click', ()=> {
    splash.classList.add('hidden');
    videoEl.play();
});

playBtn.addEventListener('click', ()=> {
    
    if (playBtn.classList.contains('pause')) {
        videoEl.play();
        playBtn.classList.remove('pause');
    }
    else { 
        videoEl.pause();
        playBtn.classList.add('pause');
    }
});