import React from 'react';
import ReactDOM from 'react-dom';
import cross from '../images/cross.svg';
import captureOshop from '../images/Oshop.png'
import github from '../images/github.jpg'
import styles from "./oshopNodal.module.css"
import Zoom from 'react-reveal/Zoom';

export default class OshopNodal extends React.Component{
    render() {
   
        return(
            <Zoom>
            <div className={styles.oshopNodalWrapper}>
             <img className={styles.cross} src={cross} onClick={this.props.crossClick}></img>
             <div className={styles.oshopNodalTextWrapper}>
             <p className={styles.oshopNodalTitle}>Intégration d'un site e-commerce pendant mes études chez O'clock".</p>
             <p className={styles.oshopNodalText}>Design crée par mes soins en rapport avec le cahier des charges, thème wordpress 100% custom.</p>
             <p className={styles.oshopNodalText}>Technos: Wordpress/SASS/création d'un plugin custom de gestion d'évènement/customisation du back-office.</p>
             <p className={styles.oshopNodalText}>Site en cours de finalisation: livraison Aout 2020.</p>
             <div className={styles.oshopNodalText}>Code : </div>
             <a href="https://github.com/StephaneBusiere/agence-dlhl-doye " target="_blank">
             <img className={styles.github} src={github} ></img></a>
             
             </div>
            <img className={styles.captureOshop} src={captureOshop} />
      
            </div>
            </Zoom>
          

            )
        }
    }
