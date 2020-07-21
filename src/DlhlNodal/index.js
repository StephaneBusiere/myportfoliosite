import React from 'react';
import ReactDOM from 'react-dom';
import cross from '../images/cross.svg';
import captureDLHL from '../images/CaptureDLHL.png'
import github from '../images/github.jpg'
import styles from "./dlhlNodal.module.css"
import Zoom from 'react-reveal/Zoom';

export default class DlhlNodal extends React.Component{
    render() {
   
        return(
            <Zoom>
            <div className={styles.dlhlNodalWrapper}>
             <img className={styles.cross} src={cross} onClick={this.props.crossClick}></img>
             <div className={styles.dlhlNodalTextWrapper}>
             <p className={styles.dlhlNodalTitle}>Projet réalisé pour le domaine viticole "Les hauts lieux".</p>
             <p className={styles.dlhlNodalText}>Design crée par mes soins en rapport avec le cahier des charges, thème wordpress 100% custom.</p>
             <p className={styles.dlhlNodalText}>Technos: Wordpress/SASS/création d'un plugin custom de gestion d'évènement/customisation du back-office.</p>
             <p className={styles.dlhlNodalText}>Site en cours de finalisation: livraison Aout 2020.</p>
             <div className={styles.dlhlNodalText}>Code : </div>
             <a href="https://github.com/StephaneBusiere/agence-dlhl-doye " target="_blank">
             <img className={styles.github} src={github} ></img></a>
             
             </div>
            <img className={styles.capturedlhl} src={captureDLHL} />
      
            </div>
            </Zoom>
          

            )
        }
    }
