const videoContainer = document.querySelector(".videoContainer")
const mainVideo = document.querySelector(".mainVideo");

const play = document.createElement('img');
play.src = './src/assets/playBtn.svg'
play.classList.add('playBtn')

window.addEventListener('load', () => {
    videoContainer.appendChild(play)
})

play.addEventListener('click', () => {
    mainVideo.paused ? mainVideo.play() : null
    play.remove()
})

mainVideo.addEventListener('click', () => {
    mainVideo.paused ? null : mainVideo.pause();
    videoContainer.appendChild(play)
})



