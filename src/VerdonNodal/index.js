import React from 'react';
import ReactDOM from 'react-dom';
import cross from '../images/cross.svg';
import captureVerdon from '../images/captureecoleVerdon.png'
import github from '../images/github.jpg'
import styles from "./verdonNodal.module.css"
import Zoom from 'react-reveal/Zoom';

export default class VerdonNodal extends React.Component{
    render() {
   
        return(
            <Zoom>
            <div className={styles.verdonNodalWrapper}>
             <img className={styles.cross} src={cross} onClick={this.props.crossClick}></img>
             <div className={styles.verdonNodalTextWrapper}>
             <p className={styles.verdonNodalTitle}>Projet réalisé avec un délai court et un budget sèrré</p>
             <p className={styles.verdonNodalText}>Design crée par mes soins grâce au builder Elementor</p>
             <p className={styles.verdonNodalText}>Technos: Wordpress</p>
             
             
             <a href="https://ecole-kayak-verdon.fr" target="_blank">
             <div className={styles.verdonNodalLink}>voir le site</div></a>
             </div>
            <img className={styles.captureVerdon} src={captureVerdon} />
      
            </div>
            </Zoom>
          

            )
        }
    }