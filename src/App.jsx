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
  let playbackRateCloud = 1;
  let playbackrateRQ = 1;
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
      const cloudPlaybackAdjust=()=>{
        if(playbackrateRQ<.8){
          playbackRateCloud= (playbackrateRQ/2) * -1
        }
        else if (playbackrateRQ>1.2){
          playbackRateCloud = playbackrateRQ/2
        }
        else{
          playbackRateCloud= 1;
        }
        cloudAnim1.getAnimation().playbackRate=playbackRateCloud;
        cloudAnim2.getAnimation().playbackRate=playbackRateCloud;
        cloudAnim3.getAnimation().playbackRate=playbackRateCloud;
        cloudAnim4.getAnimation().playbackRate=playbackRateCloud;
        pawnAnim.getAnimation().playbackRate=playbackRateCloud/2;
        palmAnim.getAnimation().playbackRate=playbackRateCloud/2;
      }
      
      //  The useEffect
    useEffect(()=>{
      const cloudAnim1x = cloudAnim1.getAnimation();
      const cloudAnim2x = cloudAnim2.getAnimation();
      const cloudAnim3x = cloudAnim3.getAnimation();
      const cloudAnim4x = cloudAnim4.getAnimation();
      cloudAnim1x.currentTime = cloudAnim1x.effect.getTiming().duration/2;
      cloudAnim2x.currentTime = cloudAnim2x.effect.getTiming().duration/2;
      cloudAnim3x.currentTime = cloudAnim3x.effect.getTiming().duration/2;
      cloudAnim4x.currentTime = cloudAnim4x.effect.getTiming().duration/2;
      setInterval(()=>{
        if(playbackrateRQ>.4){
          playbackrateRQ*=.9;
          palmAnim.getAnimation().playbackRate = playbackrateRQ;
        }
        cloudPlaybackAdjust()
        console.log(playbackRateCloud, playbackrateRQ)
      },3000)
      // redQueenAlice
      document.addEventListener('click', ()=>{
        playbackrateRQ*=1.1;
        redQueenAlice.getAnimation().playbackRate=playbackrateRQ;
        cloudPlaybackAdjust();
      })
    },[]) 
    console.log(playbackRateCloud)
    //cat animation
    const catAnim = useWebAnimations({
      keyframes:keyf,
      timing:{duration:50000,
          iterations: Infinity,  
        }
      })
// Alice Sprite
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
