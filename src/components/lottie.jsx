import React from 'react'
import "@lottiefiles/lottie-player";

const Lottie = ({ width, height, src ,className }) => {
  return (
    <div className={className}>
        <lottie-player 
        autoplay 
        loop 
        mode="normal" 
        src={src} 
        style={{width: `${width}px`, height: `${height}px`}}
         />
    </div>
  )
}

export default Lottie;


