
const XILOFONO_KEYS = ['d','r','m','f','s','l','z','d']

const keys = document.querySelectorAll('.key')
const xilofonokeys = document.querySelectorAll('.key')

keys.forEach(Key => { 
  Key.addEventListener('mousemove', () => playNote(Key))
})

keys.forEach(Key => { 
    Key.addEventListener('click', () => playNote(Key))
})

document.addEventListener('keydown', e =>{ 
  if(e.repeat) return
  const key = e.key /*evento que presiono */
  const xilofokeyIndex = XILOFONO_KEYS.indexOf(key)
  if(xilofokeyIndex > -1) playNote(xilofonokeys[xilofokeyIndex])

})

function playNote(key){

    const noteAudio= document.getElementById(key.dataset.note)/*selecciona a traves del id de las notas y audio */
    noteAudio.currentTime = 0
    noteAudio.play()


    key.classList.add('active')/*Activo muestra de un color */
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}

/* Evento que reproduce tutorial-youtube */
const videos = document.getElementById("video")
const video = document.getElementById("you_tube")
const xilofono = document.getElementById("xilofono") 

videos.addEventListener('click', e =>{
  e.preventDefault()
  
 xilofono.style.display="none" /*ESconde el instrumento*/
  video.style.display="flex"
  video.style.visibility="visible"/*se cargue con mas claridad */
  }) 



