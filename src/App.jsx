import React, {useEffect} from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';
import cloud1 from './images/animated-cloud-image-0016.gif';
import cloud2 from './images/cloud-small.gif';
import cat from './images/cat.gif'
import grass from './images/grass.gif'
import pawn from './images/pawn.png'
import palm from './images/palm.png'
import './App.css';

function App() {
  let playbackRateCloud = 2;
const keyf = [
  // {transform: "translateX(100%)"},
  {transform: "translateX(-800%)"}
]
const cloudTiming1 = {
  duration: 8000,
  iterations: Infinity,
  playbackRate: playbackRateCloud,
}
const cloudAnim1= useWebAnimations({
  keyframes: keyf,
  timing: cloudTiming1,
})
const cloudAnim2 = useWebAnimations({
  keyframes:keyf,
  timing:{duration:8000,
  iterations: Infinity,
  delay: 2000,
  playbackRate: playbackRateCloud,
}
  })
  const cloudAnim3 = useWebAnimations({
    keyframes:keyf,
    timing:{duration:8000,
    iterations: Infinity,
    delay: 4000,
    playbackRate: playbackRateCloud,

  }
    })
    const cloudAnim4 = useWebAnimations({
      keyframes:keyf,
      timing:{duration:8000,
      iterations: Infinity,
      delay: 6000,
      playbackRate: playbackRateCloud,
    }
      })
      //foreground animation;
      const palmAnim = useWebAnimations({
        keyframes:keyf,
        timing:{duration:6000,
        iterations: Infinity,
        delay: 3000,
      }
        })
        const pawnAnim = useWebAnimations({
          keyframes:keyf,
          timing:{duration:6000,
          iterations: Infinity,  
        }
      })
      function goFasterCloud(){
        playbackRateCloud*=1.1;
        cloudAnim1.getAnimation().playbackRate=playbackRateCloud;
        cloudAnim2.getAnimation().playbackRate=playbackRateCloud;
        cloudAnim3.getAnimation().playbackRate=playbackRateCloud;
        cloudAnim4.getAnimation().playbackRate=playbackRateCloud;
        console.log(playbackRateCloud)
      }
      //  The useEffect
    useEffect(()=>{
      let x = playbackRateCloud;
      let y = playbackrateRQ;
      // Adjusting Playback rate
      setInterval(()=>{
        document.addEventListener('click', goFasterCloud)
        if(x >=.8){
          x*=.9;
          y*=.9;
          redQueenAlice.getAnimation().playbackRate= playbackrateRQ;
          cloudAnim1.getAnimation().playbackRate =x;
          cloudAnim2.getAnimation().playbackRate =x;
          cloudAnim3.getAnimation().playbackRate =x;
          cloudAnim4.getAnimation().playbackRate =x;
          palmAnim.getAnimation().playbackRate = playbackrateRQ;
          pawnAnim.getAnimation().playbackRate = playbackrateRQ;
          console.log(x)
        }
        else {
          cloudAnim1.getAnimation().playbackRate =-1;
          cloudAnim2.getAnimation().playbackRate =-1;
          cloudAnim3.getAnimation().playbackRate =-1;
          cloudAnim4.getAnimation().playbackRate =-1;
          catAnim.getAnimation().playbackRate =-1;
        }
      
      },3800)
      // redQueenAlice
      document.addEventListener('click', ()=>{
        y*=1.1;
        redQueenAlice.getAnimation().playbackRate=y;
        palmAnim.getAnimation().playbackRate = y/2;
        pawnAnim.getAnimation().playbackRate = y/2;

      })
    }) 
    console.log(playbackRateCloud)
    //cat animation
    const catAnim = useWebAnimations({
      keyframes:keyf,
      timing:{duration:50000,
          iterations: Infinity,  
        }
      })
// Alice Sprite
let playbackrateRQ = 1;
const spriteFrames = [
  { transform: "translateY(0)" },
  { transform: "translateY(-100%)" },
];
const spirteTiming = {
  easing: "steps(7, end)",
  direction: "reverse",
  duration: 600,
  playbackRate: playbackrateRQ,
  iterations: Infinity,
};
const redQueenAlice = useWebAnimations({
  keyframes: spriteFrames,
  timing: spirteTiming,  
})
console.log(cloudAnim1.ref.current)
  return (
    <>
      <div className="main">
          <img src={cloud2} ref={cloudAnim1.ref} className="cloud2" alt="" />
          <img src={cloud1} ref={cloudAnim2.ref} className="cloud1" alt="" />
          <img src={cloud2} ref={cloudAnim3.ref} className="cloud3" alt="" />
          <img src={cloud1} ref={cloudAnim4.ref} className="cloud1" alt="" />
      </div>
      <div className="foreground">
          <img src={palm} ref={palmAnim.ref} className="palm" alt=""/>
          <img src={pawn} ref={pawnAnim.ref} className="pawn" alt=""/>
      </div>
      <div className="bottom">
      <div id="red-queen_and_alice">
            <img
							id="red-queen_and_alice_sprite"
							src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
							srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
							alt="Alice and the Red Queen running to stay in place."
							ref={redQueenAlice.ref} 
              />
      </div>
      <img src={cat}  ref={catAnim.ref} className="cat" alt="" />
      <img src={grass}  className="grass" alt="" />
      </div>
    </>
  );
}
 
export default App;
