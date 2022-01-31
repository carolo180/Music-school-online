const playingClass = 'playing';  /*Clase active de los elementos*/
crashRide = document.getElementById('crash-ride');/*Platos derecha*/
hitHatTop = document.getElementById('hihat-top');/*Platos izquierda*/

/*Funciones de animacion de los platos*/
const animateCrashOrRide = () => {
    crashRide.style.transform = 'rotate(20deg) scale(1.5)';
};

const animateHitHatClosed = () => {
    hitHatTop.style.top = '200px';
};

/*Funciones de remover la animacion de los platos*/
const removeCrashRideTransition = e => {
        e.target.style.transform = 'rotate(-7.3deg) scale(1.5)';
        /*e.target es una referencia al objeto en el cual se lanzo el evento. */
}

const removeHitHatTopTransition = e => {
       e.target.style.top = '165px';
        /*e.target es una referencia al objeto en el cual se lanzo el evento. */
}

const removeKeyTransition = e => {
      e.target.classList.remove(playingClass);
       /*me trae todas las clases y remueve la clase playing*/
}

/*Funciones de reproduccion del audio con teclado*/

const playSound = e => {
    const keyCode = e.keyCode;/* devuelve el valor de la tecla que se presiona y lo deposita en una variable*/
    keyElement = document.querySelector(`div[data-note="${keyCode}"]`);/*Trae los parametros de referencia del html*/
  
    const audioElement = document.querySelector(`audio[data-note="${keyCode}"]`); /*Trae los audios*/
    audioElement.currentTime = 0; /*cuando iniciara el audio */
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
window.addEventListener('keydown', playSound);




/*Evento de cortar animacion con teclado de los elementos*/ 

const drumKeys = Array.from(document.querySelectorAll('.square'));

drumKeys.forEach(key => {
  /*El evento transitionend es lanzado cuando una transición CSS se ha completado. */
    key.addEventListener('transitionend', removeKeyTransition);
})

/*Eventos de remover la animacion de los platos*/
crashRide.addEventListener('transitionend', removeCrashRideTransition);
hitHatTop.addEventListener('transitionend', removeHitHatTopTransition);

  



/*Evento con click*/

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





