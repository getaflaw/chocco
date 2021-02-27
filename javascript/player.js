const splash = document.querySelector('.player__splash');
const playBtn = document.querySelector('.control__play');
const videoEl = document.getElementById('video');
const durationCurrent = document.querySelector('.control__duration-current');
const durationFull = document.querySelector('.control__duration-full');
const progressBtn = document.querySelector('.control__progress-btn');
const progress = document.querySelector('.control__progress');
const volumeBar = document.querySelector('.control__volume');
const volumeBarCurrent = document.querySelector('.control__volume-current');
const muteBtn = document.querySelector('.control__speaker');

splash.addEventListener('click', ()=> {
    splash.classList.add('hidden');
    videoEl.play();
    playBtn.classList.add('pause');
});

playBtn.addEventListener('click', ()=> {
    
    if (playBtn.classList.contains('pause')) {
        videoEl.pause();
        playBtn.classList.remove('pause');
    }
    else { 
        videoEl.play();
        playBtn.classList.add('pause');
        if (!splash.classList.contains('hidden')) {
            splash.classList.add('hidden');
        };

    }
});

videoEl.addEventListener('canplaythrough', function() {
    let interval;
    const durationSec = videoEl.duration;
    videoEl.volume = 0.8;

    durationFull.textContent = formatTime(durationSec);
    if (!typeof interval=="undefined") {
        clearInterval(interval);
    }
    
    progress.addEventListener('click', e => {
        let barPosition = progress.getBoundingClientRect().left;
        let barWidth = progress.getBoundingClientRect().width;
        let barNewPosition = (e.pageX - barPosition) / barWidth * 100;
        console.log(barNewPosition + "%");
        let newTime = Math.floor(barNewPosition * durationSec / 100);
        videoEl.currentTime = newTime;
        progressBtn.style.left = barNewPosition + "%";
        if (!splash.classList.contains('hidden')) {
            splash.classList.add('hidden');
        };
    });

    muteBtn.addEventListener('click', e => {
        if (muteBtn.classList.contains('mute')) {
            muteBtn.classList.remove('mute');
            videoEl.muted = false;
        }
        else {
            muteBtn.classList.add('mute');
            videoEl.muted = true;
        }
    })

    volumeBar.addEventListener('click', e => {
        let volumeBarPos = volumeBar.getBoundingClientRect().left;
        let volumeBarWdth = volumeBar.getBoundingClientRect().width;
        let volumeBarNewPos = (e.pageX - volumeBarPos)/ volumeBarWdth *100;

        volumeBarCurrent.style.width = volumeBarNewPos + "%";
        videoEl.volume = volumeBarNewPos / 100;
        console.log(volumeBarNewPos);
    })

    interval = setInterval(() => {
        let currentSec = videoEl.currentTime;
        let currentPrescent = (currentSec / durationSec) * 100 + "%";
        durationCurrent.textContent = formatTime(currentSec);
        progressBtn.style.left = currentPrescent;
    }, 1000);
});

videoEl.addEventListener('ended', function() {
    videoEl.currentTime=0;
    splash.classList.remove('hidden');
})

const formatTime = timeSec => {
    const roundTime = Math.round(timeSec);
    const formatMin = Math.floor(roundTime / 60); 
    const formatSec = roundTime - formatMin * 60;
    const formattedSec = formatSec < 10 ? "0"+formatSec : formatSec;
    return formatMin + ":" + formattedSec;
}