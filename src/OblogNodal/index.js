import React from 'react';
import ReactDOM from 'react-dom';
import cross from '../images/cross.svg';
import captureOblog from '../images/oblog.png'
import github from '../images/github.jpg'
import styles from "./oblogNodal.module.css"
import Zoom from 'react-reveal/Zoom';

export default class OblogNodal extends React.Component{
    render() {
   
        return(
            <Zoom>
            <div className={styles.oblogNodalWrapper}>
             <img className={styles.cross} src={cross} onClick={this.props.crossClick}></img>
             <div className={styles.oblogNodalTextWrapper}>
             <p className={styles.oblogNodalTitle}>Intégration d'un blog pendant mes études chez O'clock".</p>
             <p className={styles.oblogNodalText}>Design crée par mes soins en rapport avec le cahier des charges, thème wordpress 100% custom.</p>
             <p className={styles.oblogNodalText}>Technos: Wordpress/SASS/création d'un plugin custom de gestion d'évènement/customisation du back-office.</p>
             <p className={styles.oblogNodalText}>Site en cours de finalisation: livraison Aout 2020.</p>
             <div className={styles.oblogNodalText}>Code : </div>
             <a href="https://github.com/StephaneBusiere/agence-dlhl-doye " target="_blank">
             <img className={styles.github} src={github} ></img></a>
             
             </div>
            <img className={styles.captureOblog} src={captureOblog} />
      
            </div>
            </Zoom>
          

            )
        }
    }