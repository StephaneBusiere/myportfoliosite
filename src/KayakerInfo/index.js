import React from 'react';
import ReactDOM from 'react-dom';
import cross from '../images/cross.svg'
import rescue from '../images/rescue.png'
import summer from '../images/summer.png'
import earth from '../images/earth.png'
import kayak from '../images/kayak.png'
import rafting from '../images/rafting.png'
import Zoom from 'react-reveal/Zoom'; 
import styles from "./kayakerInfo.module.css"


export default class Kayaker extends React.Component{
    render() {
   
        return(
            <Zoom>
            <div className={styles.guideInfoWrapper}>
          
            <div className={styles.IframeSkiContainer}>
            <ul >
            <li className={styles.skiMenuItem}>20 summer seasons<img className={styles.summerIcon} src={summer} ></img></li>
            <li className={styles.skiMenuItem}>10 countries<img className={styles.earthIcon} src={earth} ></img></li>
            <li className={styles.skiMenuItem}>Kayak instructor<img className={styles.kayakIcon} src={kayak} ></img></li>
            <li className={styles.skiMenuItem}>Rafting instructor<img className={styles.raftingIcon} src={rafting} ></img></li>
            <li className={styles.skiMenuItem}>Rescue specialist<img className={styles.rescueIcon} src={rescue} ></img></li>
            </ul>
            <iframe className={styles.IframeSki} width="270" height="170" src="https://www.youtube.com/embed/Il0WMxOUP1g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <img className={styles.cross} src={cross} onClick={this.props.crossClick}></img>
            </div>
            </div>
            </Zoom>
         )
        }
    }