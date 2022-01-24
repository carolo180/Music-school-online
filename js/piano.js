const teclas = document.querySelectorAll('.tecla')


teclas.forEach(tecla => {
  tecla.addEventListener('click', () => playNote(tecla))
})


function playNote(tecla) {
   
  const noteAudio = document.getElementById(tecla.dataset.note) 
  noteAudio.currentTime = 0
  noteAudio.play()
  tecla.classList.add('active')
  noteAudio.addEventListener('ended', () => {
  tecla.classList.remove('active')
  })
}


const WHITE_KEYS = ['q', 'w', 'e', 'r', 't', 'y', 'u','i', 'o', 'p', 'a', 's', 'd', 'f', ]
const BLACK_KEYS = ['g', 'h', 'j', 'k', 'l', 'ñ', 'z', 'x', 'c', 'v']

const whiteKeys = document.querySelectorAll('.tecla.white')
const blackKeys = document.querySelectorAll('.tecla.black')


document.addEventListener('keydown', e => {
   if (e.repeat) return
   const key = e.key
   const whiteKeyIndex = WHITE_KEYS.indexOf(key)
   const blackKeyIndex = BLACK_KEYS.indexOf(key)
 
   if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
   if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
 })


 const videos = document.getElementById("video")
 const video = document.getElementById("you_tube")
 const piano = document.getElementById("teclas")

 videos.addEventListener('click', e =>{
  e.preventDefault()
  
 piano.style.display="none"
 video.style.display="flex"
 video.style.visibility="visible"
})