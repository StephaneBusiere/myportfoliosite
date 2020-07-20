import React from 'react';
import ReactDOM from 'react-dom';
import cross from '../images/cross.svg';
import captureBoris from '../images/captureBorisDoye.png'
import github from '../images/github.jpg'
import styles from "./borisNodal.module.css"
import Zoom from 'react-reveal/Zoom';

export default class BorisNodal extends React.Component{
    render() {
   
        return(
            <Zoom>
            <div className={styles.borisNodalWrapper}>
             <img className={styles.cross} src={cross} onClick={this.props.crossClick}></img>
             <div className={styles.borisNodalTextWrapper}>
             <p className={styles.borisNodalTitle}>Projet réalisé from scratch pour l'agence de production audio-visuelle Boris Doye.</p>
             <p className={styles.borisNodalText}>Design crée par mes soins en rapport avec le cahier des charges</p>
             <p className={styles.borisNodalText}>Technos: React/Redux/SASS</p>
             <p className={styles.borisNodalText}>Site en cours de finalisation: livraison Aout 2020.</p>
             <div className={styles.borisNodalText}>Code : </div>
             <a href="https://github.com/StephaneBusiere/agence-Boris-doye " target="_blank">
             <img className={styles.github} src={github} ></img></a>
             <a href="http://zen-boyd-577a1f.netlify.com" target="_blank">
             <div className={styles.borisNodalLink}>voir le site</div></a>
             </div>
            <img className={styles.captureBoris} src={captureBoris} />
      
            </div>
            </Zoom>
          

            )
        }
    }
