import React from 'react';
import ReactDOM from 'react-dom';
import cross from '../images/cross.svg';
import winter from '../images/winter.jpg';
import mountain from '../images/mountain.png';
import avalanche from '../images/avalanche.svg';
import weather from '../images/weather.png';
import rescue from '../images/rescue.png';
import Zoom from 'react-reveal/Zoom'; 
import styles from "./skiPatrolInfo.module.css"


export default class Skipatrol extends React.Component{
    render() {
   
        return(
            <Zoom>
            <div className={styles.SkiPatrolInfoWrapper}>
          
            <div className={styles.IframeSkiContainer}>
            <ul >
            <li className={styles.skiMenuItem}>13 saisons d'hiver<img className={styles.winterIcon} src={winter} ></img></li>  
            <li className={styles.skiMenuItem}>6 stations<img className={styles.mountainIcon} src={mountain} ></img></li>
            <li className={styles.skiMenuItem}>Artificier avalanches<img className={styles.avalancheIcon} src={avalanche} ></img></li>
            <li className={styles.skiMenuItem}>Observateur météo<img className={styles.weatherIcon} src={weather} ></img></li>
            <li className={styles.skiMenuItem}>Secouriste<img className={styles.rescueIcon} src={rescue} ></img></li>
            </ul>
            <iframe className={styles.IframeSki} width="270" height="170" src="https://www.youtube.com/embed/K8qycEEG45U?&modestbranding=1" frameborder="0"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <img className={styles.cross} src={cross} onClick={this.props.crossClick}></img>

            </div>
            </div>
            </Zoom>
         )
        }
    }