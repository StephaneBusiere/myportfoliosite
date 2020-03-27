import React, { Component } from 'react'

import StarfieldAnimation from 'react-starfield-animation'
import styles from "./home.module.css"
import logoSB from '../images/logoStef.svg'
class Example extends Component {
  render () {
    return (
      <div> 
      <div className={styles.banner}>
      <div className={styles.title} >FRONT END DEVELOPPER</div>
      <object className={styles.logoSB}  data={logoSB}>svg-animation</object>
        <StarfieldAnimation
      
        style={{
          position: 'absolute',
          width: '100%',
          height: '700px',
          zIndex: '1',
        }}
        numParticles={1000} 
      />
      </div>
      </div>
    )
  }
}
export default Example