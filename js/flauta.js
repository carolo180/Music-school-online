const FLAUTA_KEYS = ['s','d','f','g','h','j','k','l']

const keys = document.querySelectorAll('.hole')
const flautakeys = document.querySelectorAll('.hole')

keys.forEach(hole => { 
    hole.addEventListener('click', () => playNote(hole))
})

document.addEventListener('keydown', e =>{ 
  if(e.repeat) return
  const key = e.key /*evento que presiono */
  const flautakeyIndex = FLAUTA_KEYS.indexOf(key)
  if(flautakeyIndex > -1) playNote(flautakeys[flautakeyIndex])

})

function playNote(hole){
    const noteAudio= document.getElementById(hole.dataset.note)/*selecciona a traves del id de las notas y audio */
    noteAudio.currentTime = 0
    noteAudio.play()
    hole.classList.add('active')/*Activo muestra de un color */
    noteAudio.addEventListener('ended', () => {
   hole.classList.remove('active')
  })
}
/* Evento que reproduce tutorial-youtube */
const videos = document.getElementById("video")
const video = document.getElementById("you_tube")
const flute = document.getElementById("flute") 

videos.addEventListener('click', e =>{
  e.preventDefault()
  
 flute.style.display="none" /*ESconde el instrumento*/
  video.style.display="flex"
  video.style.visibility="visible"/*se cargue con mas claridad */
  }) 
