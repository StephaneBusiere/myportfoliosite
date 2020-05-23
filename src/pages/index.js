import React, { Component } from 'react'
import { Link } from "gatsby"
import Slide from 'react-reveal/Slide'; 
import StarfieldAnimation from 'react-starfield-animation'
import styles from "./home.module.css"
import sprite from '../images/sprite.svg'
import stef from '../images/stefPicture.png'
import hacker from '../images/hacker.jpg'
import work from '../images/eye.jpg'
import stefVideo from '../images/matrixStefvideo.mp4'
import Draggable from 'react-draggable';
import Header from '../Header'



class Example extends Component {
 
 
 
 
  render () {
    return (
      <div className={styles.outerwrapper}>
     <div className={styles.container}>
      <div className={styles.slide1}>
      
      <img className={styles.hacker} src={hacker} />
      <Link to="#intro" state={{scrolled:true}} className={styles.knowmore}>WHO I AM ?</Link>
     <Header/>
      <div id="intro" className={styles.intro}>
      <p className={styles.introText}>
      As a junior front-end developer, i want to get hire by a entreprise where i can grow my skills and be confortable in a long term adventure.
      I know that for a recruter it's not easy to hire a junior developer, you don't know what i am capable of and who i really am.
      it's ...
  </p>
  <div  className={styles.introLinesContainer1}>
  <div className={styles.introLines}>
  <span>A</span>
  
  </div>
  </div>
  <div className={styles.introLinesContainer2}>
  <div className={styles.introLines}>
  <span>QUESTION</span>
  
  </div>
  </div>
  <div className={styles.introLinesContainer3}>
  <div className={styles.introLines}>
  <span>OF</span>
  
  </div>
  </div>
  <div className={styles.introLinesContainer4}>
  <div className={styles.introLines}>
  <span>TRUST</span>
  
  </div>
  </div>
      </div>
      
      </div>
      
      <div id="aboutmesection" className={styles.slide2}>
      <div className={styles.stefPhotosContainer}>
   
    <img className={styles.stefPhoto2} src={stef} />
   
    
      
      <Slide right>
      <Draggable>
      
      <img  draggable={false} className={styles.hidePhoto} src={work} />
      
      </Draggable>
      </Slide>
      </div>
      
      </div>
      <div className={styles.slide3}>
      <object className={styles.sprite}  data={sprite}>svg-animation</object>
      <p className={styles.why}>WHY YOU CAN TRUST ME ?</p>
      </div>
      <div className={styles.slide4}>
      <div className={styles.railwrapper1}>
      <span className={styles.railtext}>HONESTY-HONESTY-HONESTY-HONESTY</span>
      </div>
      
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