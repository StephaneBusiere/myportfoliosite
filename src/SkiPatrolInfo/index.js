import React from 'react';
import ReactDOM from 'react-dom';
import cross from '../images/cross.svg'
import Zoom from 'react-reveal/Zoom'; 
import styles from "./skiPatrolInfo.module.css"


export default class Skipatrol extends React.Component{
    render() {
   
        return(
            <Zoom>
            <div className={styles.SkiPatrolInfoWrapper}>
          
            <div className={styles.IframeSkiContainer}>
            <ul >
            <li className={styles.skiMenuItem}>13 winter seasons</li>
            <li className={styles.skiMenuItem}>6 differents resorts</li>
            <li className={styles.skiMenuItem}>Avalanche prevention spécialist</li>
            <li className={styles.skiMenuItem}>Snow and weather specialist</li>
            <li className={styles.skiMenuItem}>Rescue specialist</li>
            </ul>
            <iframe className={styles.IframeSki}width="200" height="120" src="https://www.youtube.com/embed/K8qycEEG45U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <img className={styles.cross} src={cross} onClick={this.props.crossClick}></img>
            </div>
            </div>
            </Zoom>
         )
        }
    }