/* Primera manera dejando el html limpio y creando objetos */

/*
const c3 = new Audio("sounds/c3.mp3");
const Db3 = new Audio("sounds/Db3.mp3");
const d3 = new Audio("sounds/d3.mp3");
const Eb3 = new Audio("sounds/Eb3.mp3");
const e3 = new Audio("sounds/e3.mp3");
const f3 = new Audio("sounds/f3.mp3");
const Gb3 = new Audio("sounds/Gb3.mp3");
const g3 = new Audio("sounds/g3.mp3");
const Ab3 = new Audio("sounds/Ab3.mp3");
const a3 = new Audio("sounds/a3.mp3");
const Bb3 = new Audio("sounds/Bb3.mp3");
const b3 = new Audio("sounds/b3.mp3");
const c4 = new Audio("sounds/c4.mp3");
const REb4 = new Audio("sounds/REb4.mp3");
const D4 = new Audio("sounds/D4.mp3");
const MIb4 = new Audio("sounds/MIb4.mp3");
const E4 = new Audio("sounds/E4.mp3");
const F4 = new Audio("sounds/F4.mp3");
const SOLb4 = new Audio("sounds/SOLb4.mp3");
const G4 = new Audio("sounds/G4.mp3");
const LAb4 = new Audio("sounds/LAb4.mp3");
const A4 = new Audio("sounds/A4.mp3");
const SIb4 = new Audio("sounds/SIb4.mp3");
const B4 = new Audio("sounds/B4.mp3");


const teclas2 = document.querySelectorAll('.tecla')


const teclas=[

  { id: ".DO4",
     nota: c3,
     tecla:"q",
     },

  { id: ".REb4",
     nota: Db3,
     },

  { id: ".RE4",
     nota: d3, 
      },

  { id: ".MIb4", 
    nota: Eb3, 
    },

  { id: ".MI4",
     nota: e3,
    },
  
  { id: ".FA4",
     nota: f3,
    },

  { id: ".SOLb4",
     nota: Gb3,
     },

  { id: ".SOL4",
     nota: g3, 
    },

  { id: ".LAb4", 
    nota: Ab3, 
    },

  { id: ".LA4",
     nota: a3,
    },

  { id: ".SIb4",
     nota: Bb3,
    },

  { id: ".SI4",
     nota: b3,
    },

  { id: ".DO5",
     nota: c4, 
   },

  { id: ".REb5", 
    nota: REb4, 
   },

  { id: ".RE5",
     nota: D4,
   },
  
  { id: ".MIb5",
     nota: MIb4,
   },

  { id: ".MI5",
     nota: E4,
   },

  { id: ".FA5",
     nota: F4, 
   },

  { id: ".SOLb5", 
    nota: SOLb4, 
   },

  { id: ".SOL5",
     nota: G4,
    },

  { id: ".LAb5",
     nota: LAb4,
      key: 81 },

  { id: ".LA5",
     nota: A4,
     },

  { id: ".SIb5",
     nota: SIb4, 
    },

  { id: ".SI5", 
    nota: B4, 
     },

   ];
  
  teclas.forEach(({ id, nota }) => {
   const tecla = document.querySelector(id);
     tecla.addEventListener("click", () => playNote(id, nota));
  });
 
  function playNote(id, nota) {
   nota.currentTime = 0
   nota.play()
  }


  teclas.forEach(({ id, nota, tecla }) => {
   const tecla2 = document.querySelector(id);
   document.addEventListener('keydown', e => {
      if (e.repeat) return
      const key = e.key
      const whiteKeyIndex = tecla.indexOf(key)
     
    
      if (whiteKeyIndex > -1) playNote(tecla[whiteKeyIndex])
    
    })
  });
  */

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

/*Evento que reproduce el tutorial de youtube*/
 const videos = document.getElementById("video")
 const video = document.getElementById("you_tube")
 const piano = document.getElementById("teclas")

 videos.addEventListener('click', e =>{
  e.preventDefault()
  
 piano.style.display="none"
 video.style.display="flex"
 video.style.visibility="visible"
})
 
 

  

  

    
                 
                     
    
              
    
    
    