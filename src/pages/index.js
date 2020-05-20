import React, { Component } from 'react'
import { Link } from "gatsby"
import Slide from 'react-reveal/Slide'; 

import StarfieldAnimation from 'react-starfield-animation'
import styles from "./home.module.css"
import logoSB from '../images/logoStef.svg'
import stef from '../images/stefmatrixphoto.jpg'
import stefVideo from '../images/matrixStefvideo.mp4'


class Example extends Component {
  render () {
    return (
      <div className={styles.outerwrapper}>
     <div className={styles.container}>
      <div className={styles.slide1}>
      <img className={styles.stefPhoto} src={stef} />
      <div className={styles.title} >FRONT END DEVELOPPER</div>
      <object className={styles.logoSB}  data={logoSB}>svg-animation</object>
      <Link to="#aboutmesection"  className={styles.knowmore}>know more about me</Link>
        
      </div>
      <div id="aboutmesection" className={styles.slide2}>
      <div>
    <Slide bottom>
      <div className={styles.videoContainer}>
      
      <video  className={styles.stefVideo} src={stefVideo} autoPlay muted loop/>
      </div>
      </Slide>
      </div>
      <Slide right>
      <div className={styles.textPresentation}></div>
      </Slide>
      </div>
      </div>
    
      
      </div>
    )
  }
}
export default Example
{
/*<StarfieldAnimation
      
        style={{
          position: 'absolute',
          width: '100%',
          height: '800px',
          zIndex: '1',
        }}
        numParticles={1000} 
      />*/}