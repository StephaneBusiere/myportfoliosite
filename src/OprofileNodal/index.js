import React from 'react';
import ReactDOM from 'react-dom';
import cross from '../images/cross.svg';
import captureOprofile from '../images/CaptureOprofile.png'
import github from '../images/github.jpg'
import styles from "./oprofileNodal.module.css"
import Zoom from 'react-reveal/Zoom';

export default class OprofileNodal extends React.Component{
    render() {
   
        return(
            <Zoom>
            <div className={styles.oprofileNodalWrapper}>
             <img className={styles.cross} src={cross} onClick={this.props.crossClick}></img>
             <div className={styles.oprofileNodalTextWrapper}>
             <p className={styles.oprofileNodalTitle}>Intégration d'un blog pendant mes études chez O'clock".</p>
             <p className={styles.oprofileNodalText}>Design crée par mes soins en rapport avec le cahier des charges, thème wordpress 100% custom.</p>
             <p className={styles.oprofileNodalText}>Technos: Wordpress/SASS/création d'un plugin custom de gestion d'évènement/customisation du back-office.</p>
             <p className={styles.oprofileNodalText}>Site en cours de finalisation: livraison Aout 2020.</p>
             <div className={styles.oprofileNodalText}>Code : </div>
             <a href="https://github.com/StephaneBusiere/agence-dlhl-doye " target="_blank">
             <img className={styles.github} src={github} ></img></a>
             
             </div>
            <img className={styles.captureOprofile} src={captureOprofile} />
      
            </div>
            </Zoom>
          

            )
        }
    }