const playingClass = 'playing';
crashRide = document.getElementById('crash-ride');
hitHatTop = document.getElementById('hihat-top');

const animateCrashOrRide = () => {
    crashRide.style.transform = 'rotate(20deg) scale(1.5)';
};

const animateHitHatClosed = () => {
    hitHatTop.style.top = '200px';
};

const playSound = e => {
    const keyCode = e.keyCode;
    keyElement = document.querySelector(`div[data-note="${keyCode}"]`);/*Trae las squares*/
    if(!keyElement) return;

    const audioElement = document.querySelector(`audio[data-note="${keyCode}"]`); /*Trae los audios*/
    audioElement.currentTime = 0;
    audioElement.play();

   /*Animacion de los platos*/
    switch(keyCode){
        case 69:
        case 82:
            animateCrashOrRide();
            break;
        case 75:
        case 73:
            animateHitHatClosed();
            break;
    }

    keyElement.classList.add(playingClass);
}

const removeCrashRideTransition = e => {
    if(e.propertyName !== 'transform')  return;

    e.target.style.transform = 'rotate(-7.3deg) scale(1.5)';
}

const removeHitHatTopTransition = e => {
    if(e.propertyName !== 'top')  return;

    e.target.style.top = '165px';
}

const removeKeyTransition = e => {
    if(e.propertyName !== 'transform')  return;

    e.target.classList.remove(playingClass);
}

const drumKeys = Array.from(document.querySelectorAll('.square'));

drumKeys.forEach(key => {
    key.addEventListener('transitionend', removeKeyTransition);
})

crashRide.addEventListener('transitionend', removeCrashRideTransition);
hitHatTop.addEventListener('transitionend', removeHitHatTopTransition);

window.addEventListener('keydown', playSound);  





drumKeys.forEach(square => {
  square.addEventListener('click', () => playNote(square))
})


function playNote(square) {
   
  const noteAudio = document.getElementById(square.dataset.note) 
  noteAudio.currentTime = 0
  noteAudio.play()
 }

 
  const crash = document.getElementById("crash")
  crash.addEventListener('click', e =>{
    e.preventDefault()
    animateCrashOrRide();
  })

  const crash2 = document.getElementById("crash2")
  crash2.addEventListener('click', e =>{
    e.preventDefault()
    animateCrashOrRide();
  })

  const square2 = document.getElementById("square2")
  square2.addEventListener('click', e =>{
    e.preventDefault()
    animateHitHatClosed();
  })

  const square3 = document.getElementById("square3")
  square3.addEventListener('click', e =>{
    e.preventDefault()
    animateHitHatClosed();
  })


/*Evento que reproduce el tutorial de youtube*/
 const videos = document.getElementById("video")
 const video = document.getElementById("you_tube")
 const drums = document.getElementById("drums")

 videos.addEventListener('click', e =>{
  e.preventDefault()
  
 drums.style.display="none"
 video.style.display="flex"
 video.style.visibility="visible"
})





