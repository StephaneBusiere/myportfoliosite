import React from 'react';
import ReactDOM from 'react-dom';
import cross from '../images/cross.svg'
import Zoom from 'react-reveal/Zoom'; 
import styles from "./kayakerInfo.module.css"


export default class Kayaker extends React.Component{
    render() {
   
        return(
            <Zoom>
            <div className={styles.SkiPatrolInfoWrapper}>
          
            <div className={styles.IframeSkiContainer}>
            <ul >
            <li className={styles.skiMenuItem}>20 summer seasons</li>
            <li className={styles.skiMenuItem}>10 countries</li>
            <li className={styles.skiMenuItem}>rescue spécialist</li>
            <li className={styles.skiMenuItem}>Kayak instructor</li>
            <li className={styles.skiMenuItem}>Rafting instructor</li>
            </ul>
            <iframe className={styles.IframeSki} width="200" height="120" src="https://www.youtube.com/embed/Il0WMxOUP1g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <img className={styles.cross} src={cross} onClick={this.props.crossClick}></img>
            </div>
            </div>
            </Zoom>
         )
        }
    }