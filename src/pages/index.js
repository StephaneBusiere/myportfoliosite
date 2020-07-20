import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Link } from "gatsby"
import Slide from 'react-reveal/Slide'; 
import StarfieldAnimation from 'react-starfield-animation'
import styles from "./home.module.css"
import sprite from '../images/sprite.svg'
import stef from '../images/stefPicture.png'
import hacker from '../images/hacker.jpg'
import work from '../images/eye.jpg'
import kayak from '../images/kayakStef.jpg'
import pisteur from '../images/pisteur.jpg'
import guatemala from '../images/guatemala.jpg'
import stefVideo from '../images/matrixStefvideo.mp4'
import code from '../images/code.jpg'
import oclock from '../images/oclock2.png'
import studies from '../images/studies.jpg'
import question from '../images/question.svg'
import clock from '../images/clock.jpg'
import html from '../images/html.jpg'
import css from '../images/css.png'
import php from '../images/php.svg'
import js from '../images/es6.png'
import react from '../images/react.png'
import laravel from '../images/laravel.png'
import bootstrap from '../images/bootstrap.png'
import wordpress from '../images/icon-wordpress.png'
import sql from '../images/sql.jpg'
import git from '../images/git.jpg'
import redux from '../images/redux.png'
import captureBoris from '../images/captureBorisDoye.png'





import Skipatrol from '../SkiPatrolInfo'
import Kayaker from '../KayakerInfo'
import Traveler from '../TravelerInfo'
import BorisNodal from '../BorisNodal'
import cockpit from '../images/cockpit.png'
import logoOclock from '../images/logo-oclock.jpg'
import languages from '../images/languages.png'
import Draggable from 'react-draggable';
import  VizSensor from 'react-visibility-sensor';
import $ from "jquery";

class Example extends Component {
 
 
 
  constructor(props) {
  super(props)
	this.state = {
    hover: false,
    hoverStudies: false,
    hoverSkills: false,
    hoverWork: false,
    imgViz: false,
    imgViz2: false,
    imgViz3: false,
    when: false,
    skiPatrolClick: false,
    kayakerClick: false,
    travelerClick: false,
    borisNodalClick: false,

  }
  
  this.toggleHover = this.toggleHover.bind(this);
  this.toggleHoverStudies = this.toggleHoverStudies.bind(this);
  this.toggleHoverSkills = this.toggleHoverSkills.bind(this);
  this.toggleHoverWork = this.toggleHoverWork.bind(this);
  this.skiPatrolClick=this.skiPatrolClick.bind(this); 
  this.crossClick=this.crossClick.bind(this);
  this.kayakerClick=this.kayakerClick.bind(this);
  this.travelerClick=this.travelerClick.bind(this);
  this.borisNodalClick=this.borisNodalClick.bind(this);
}


  skiPatrolClick () {
    this.setState({skiPatrolClick: !this.state.skiPatrolClick})
  }
  kayakerClick() {
    this.setState({kayakerClick:!this.state.kayakerClick})
  }
  travelerClick() {
    this.setState({travelerClick:!this.state.travelerClick})
  }
  crossClick () {
    this.setState ({skiPatrolClick:false, kayakerClick:false,borisNodalClick:false} )
    
  }
  borisNodalClick () {
    this.setState ({borisNodalClick:!this.state.borisNodalClick})
  }
  toggleHover() {
    this.setState({hover: !this.state.hover})
  }
  toggleHoverStudies() {
    this.setState({hoverStudies: !this.state.hoverStudies})
  }
  toggleHoverSkills() {
    this.setState({hoverSkills: !this.state.hoverSkills})
  }
  toggleHoverWork() {
    this.setState({hoverWork: !this.state.hoverWork})
  }
  render () {
    let linkStyle;
    let linkStyleStudies;
    let linkStyleSkills;
    let linkStyleWork;
    let linkStyleExperience;
    const isPatrolTrue=this.state.skiPatrolClick
    let SkipatrolShow
    let KayakerShow
    const isKayakerTrue=this.state.kayakerClick
    let TravelerShow
    const isTravelerTrue=this.state.travelerClick
    let BorisNodalShow
    const isBorisNodalTrue=this.state.borisNodalClick
if (isPatrolTrue ) {
  SkipatrolShow=<Skipatrol
  crossClick={this.crossClick}
  />
} else {SkipatrolShow=''}

if  (isKayakerTrue) {
  KayakerShow=<Kayaker
  crossClick={this.crossClick}
  />
} else {KayakerShow=''}
if  (isTravelerTrue) {
  TravelerShow=<Traveler
  crossClick={this.crossClick}
  />
} else {TravelerShow=''}

if  (isBorisNodalTrue) {
  BorisNodalShow=<BorisNodal
  crossClick={this.crossClick}
  />
} else {BorisNodalShow=''}




if (this.state.hover) {
      linkStyle = {backgroundImage: `url(${guatemala}`, objectFit: 'cover'};
      
      linkStyleStudies={opacity: 0};
      linkStyleSkills={opacity: 0};
      linkStyleWork={opacity: 0};
    } else if (this.state.hoverStudies) {
  linkStyle = {backgroundImage: `url(${studies}`,
  
  objectFit: 'cover', };
  linkStyleExperience={opacity:0};
  linkStyleSkills={opacity: 0};
  linkStyleWork={opacity: 0};
} 
else if (this.state.hoverSkills) {
  linkStyle = {backgroundImage: `url(${oclock}`,
  
  objectFit: 'cover',
  }
  linkStyleExperience={opacity:0};
  linkStyleStudies={opacity: 0};
  linkStyleWork={opacity: 0};
            }
else if (this.state.hoverWork) {
              linkStyle = {backgroundImage: `url(${code}`,
             
              objectFit: 'cover',
              }
  linkStyleExperience={opacity:0};
  linkStyleSkills={opacity: 0};
  linkStyleStudies={opacity: 0};                
            }           
else {
  linkStyle = {}
}
    return (
<div>
      <div className={styles.headerWrapperSticky} style={{ opacity: this.state.imgViz3 ? 1 : 0.25,display :this.state.imgViz3 ?  'block' : 'none' }} >
      
        <header   >
        <ul className={styles.headerMenuSticky}>
        <li className={styles.headerMenuitemSticky}>A propos</li>
        <li className={styles.headerMenuitemSticky}>Réalisations</li>
        <li className={styles.headerMenuitemSticky}>Etudes</li>
        <li className={styles.headerMenuitemSticky}>Contact</li>
        <li className={styles.headerMenuItemTitleSticky}>Busiere Stéphane</li>
        </ul>
        </header>
        </div>
      <div  id="outerwrapper" className={styles.outerwrapper} ref={(container) =>this.containerElement=container} >
     <div id='container' className={styles.container} >
      <div className={styles.slide1}>
      
      <img className={styles.hacker} src={hacker} />
    
     <Link to="#aboutme" state={{scrolled:true}} className={styles.knowmore}>QUI SUIS JE ?</Link>      
      <div className={styles.headerWrapper}  >
      
        <header   >
        <ul className={styles.headerMenu}>
        <li className={styles.headerMenuitem}>A propos</li>
        <li className={styles.headerMenuitem}>Réalisations</li>
        <li className={styles.headerMenuitem}>Etudes</li>
        <li className={styles.headerMenuitem}>Contact</li>
        <li className={styles.headerMenuItemTitle}>Busiere Stéphane</li>
        </ul>
        </header>
        </div>
      <div id="intro" className={styles.intro}>
      <p className={styles.introText}>
      As a junior front-end developer, i want to get hire by a entreprise where i can grow my skills and be confortable in a long term adventure.
      I know that for a recruter it's not easy to hire a junior developer, you don't know what i am capable of and who i really am.
      it's ...
  </p>
  <div  className={styles.introLinesContainer1}>
  <div className={styles.introLines}>
  <span>Une</span>
  
  </div>
  </div>
  <div className={styles.introLinesContainer2}>
  <div className={styles.introLines}>
  <span>QUESTION</span>
  
  </div>
  </div>
  <div className={styles.introLinesContainer3}>
  <div className={styles.introLines}>
  <span>de</span>
  
  </div>
  </div>
  <div className={styles.introLinesContainer4}>
  <div className={styles.introLines}>
  <span>confiance</span>
  
  </div>
  </div>
      </div>
      
      </div>
      
      <div  className={styles.slide2} >
      <div className={styles.stefPhotosContainer}>
     
    <img className={styles.stefPhoto2} src={stef} 
    style={{
      opacity: this.state.imgViz ? 1 : 0.25,
      width: 1000,
      height: 928,
      transition: 'opacity 500ms linear', 
      

    }}
    />
    
    
    <VizSensor
    partialVisibility 
   
    onChange={(isVisible) => {
      this.setState({imgViz3: isVisible})
    }}
  >
    <div className={styles.transparentDiv}></div>
    </VizSensor>
      <Slide bottom>
      <Draggable>
      
      <img  draggable={false} className={styles.hidePhoto} src={work} />
      
      </Draggable>
      </Slide>
      </div>
      
      </div>
      <div className={styles.slide3}>
      <object className={styles.sprite}  data={sprite}>svg-animation</object>
      <p className={styles.why}>POURQUOI ME FAIRE CONFIANCE ?</p>
      <p className={styles.about}>About </p>
      <div className={styles.aboutLine}></div>
      </div>
      
      <div className={styles.slide4}>
      <div className={styles.railwrapper1}>
      <span className={styles.railtext}>QUI SUIS JE</span>
      </div>
      
      </div>
      <div  className={styles.slide5}>
      <h2 className={styles.thingsTitle}>Je suis multiple</h2>
      <div className={styles.line}></div>
      <div id="aboutme" className={styles.experienceText}>
      I had a life before becoming a junior developper.
      A life where my passion was also my work, where nature was my office and danger was my every day. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatibus vitae fugiat, earum minima magnam ex consectetur id reprehenderit iusto perspiciatis labore est quia nihil ipsa? Est tempora enim asperiores?
      </div>
      <div  className={styles.presentationContainer}>
      <p>Age:42</p>
      <p>Nationalité: Français</p>
      <p>Lieux: Alpes du sud</p>
      <p></p>
      </div>
      <div className={styles.pisteurContainer}>
      <VizSensor
      
      
      onChange={(isVisible) => {
        this.setState({imgViz: isVisible})
      }}
    >
      <img className={styles.pisteur} 
      src={pisteur}
      style={{
       
        
        transform:  this.state.imgViz ? 'scale (1)' : 'scale(0.8)',
       
        transition: 'opacity 500ms linear',
        transition: 'transform 5000ms linear'
      }}>
      
      </img>
      </VizSensor>
      </div>
      
      <img className={styles.kayak} src={kayak} 
      style={{
        opacity: this.state.imgViz ? 1 : 0.25,
        transform:  this.state.imgViz ? 'scale(1)' : 'scale(0.8)',
        height: 'auto',
        transition: 'opacity 500ms linear',
        transition: 'transform 5000ms linear'
      }}
      />
      </div>
      
      <VizSensor
      
      partialVisibility
      onChange={(isVisible) => {
        this.setState({imgViz2: isVisible})
      }}
    >
      <div style={linkStyle} className={styles.slide6}
      
      >
      
    
    
      <Slide  right spy={this.state.imgViz2}  >
      
      
      
      <Link to="#experience" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} style={ linkStyleExperience} className={styles.experienceTitle} >Experiences</Link>
      
      </Slide>
     

    
      <Slide  right spy={this.state.imgViz2} delay={500} >
     
      <Link to="#studies" onMouseEnter={this.toggleHoverStudies} onMouseLeave={this.toggleHoverStudies} style={ linkStyleStudies} className={styles.studiesTitle}>Etudes</Link>
      </Slide>
      


    
      <Slide  right spy={this.state.imgViz2} delay={700} >
      <Link onMouseEnter={this.toggleHoverSkills} onMouseLeave={this.toggleHoverSkills} style={linkStyleSkills} className={styles.skillsTitle}>Compétences</Link>
      </Slide>
      
      
      
      <Slide  right spy={this.state.imgViz2} delay={900} >
      <Link onMouseEnter={this.toggleHoverWork} onMouseLeave={this.toggleHoverWork} style={linkStyleWork} className={styles.workTitle}>Réalisations</Link>
      </Slide>
      
      </div>
      </VizSensor>
      <div id='experience' className={styles.slide7}>
      <div className={styles.experienceTitleContainer}></div>
      <h3 className={styles.pastexperiences}>EXPERIENCES</h3>
      <h3 className={styles.experiences}>PASSEES</h3>
      
      <div  className={styles.experiencesTextContainer}>
      <div className={styles.skiPatrolWrapper}>
      <div className={styles.skipatrol} >Pisteur</div>
      <svg className={styles.question} onClick={this.skiPatrolClick} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      width="33px" height="33px" viewBox="0 0 33 33" >
   <g>
     <path d="M21.57,8.668c0.851,0.75,1.275,2.143,1.275,4.178c0,1.605-0.209,2.73-0.628,3.373c-0.419,0.641-1.346,1.266-2.78,1.875
       c-1.396,0.588-2.098,1.383-2.098,2.381v0.457h-3.308c0-1.617,0.157-2.684,0.47-3.201c0.314-0.52,1.137-1.055,2.468-1.604
       l1.27-0.541c1.056-0.438,1.582-1.321,1.582-2.651c0-1.104-0.196-1.814-0.592-2.134c-0.395-0.317-1.275-0.479-2.646-0.479
       c-1.284,0-2.14,0.171-2.567,0.509c-0.428,0.336-0.642,1.01-0.642,2.019l0.015,0.739h-3.237l0.014-0.711
       c0-2.104,0.452-3.517,1.355-4.244c0.903-0.728,2.667-1.09,5.29-1.09C19.134,7.541,20.719,7.916,21.57,8.668z M14.033,27.176h3.265
       v-3.508h-3.265V27.176z M33,16.5C33,25.598,25.598,33,16.5,33C7.402,33,0,25.598,0,16.5C0,7.402,7.402,0,16.5,0
       C25.598,0,33,7.402,33,16.5z M29,16.5C29,9.607,23.393,4,16.5,4C9.607,4,4,9.607,4,16.5C4,23.393,9.607,29,16.5,29
       C23.393,29,29,23.393,29,16.5z"/>
   </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
     
      {SkipatrolShow}
      </div>
      
      <div  className={styles.kayakerWrapper}>
      <div className={styles.kayaker}  >Guide</div>
      <svg className={styles.question} onClick={this.kayakerClick} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      width="33px" height="33px" viewBox="0 0 33 33" >
   <g>
     <path d="M21.57,8.668c0.851,0.75,1.275,2.143,1.275,4.178c0,1.605-0.209,2.73-0.628,3.373c-0.419,0.641-1.346,1.266-2.78,1.875
       c-1.396,0.588-2.098,1.383-2.098,2.381v0.457h-3.308c0-1.617,0.157-2.684,0.47-3.201c0.314-0.52,1.137-1.055,2.468-1.604
       l1.27-0.541c1.056-0.438,1.582-1.321,1.582-2.651c0-1.104-0.196-1.814-0.592-2.134c-0.395-0.317-1.275-0.479-2.646-0.479
       c-1.284,0-2.14,0.171-2.567,0.509c-0.428,0.336-0.642,1.01-0.642,2.019l0.015,0.739h-3.237l0.014-0.711
       c0-2.104,0.452-3.517,1.355-4.244c0.903-0.728,2.667-1.09,5.29-1.09C19.134,7.541,20.719,7.916,21.57,8.668z M14.033,27.176h3.265
       v-3.508h-3.265V27.176z M33,16.5C33,25.598,25.598,33,16.5,33C7.402,33,0,25.598,0,16.5C0,7.402,7.402,0,16.5,0
       C25.598,0,33,7.402,33,16.5z M29,16.5C29,9.607,23.393,4,16.5,4C9.607,4,4,9.607,4,16.5C4,23.393,9.607,29,16.5,29
       C23.393,29,29,23.393,29,16.5z"/>
   </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
      {KayakerShow}
      </div>
      <div className={styles.travelerWrapper}>
      <div className={styles.traveler}>Voyageur</div>
      <svg className={styles.question} onClick={this.travelerClick} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      width="33px" height="33px" viewBox="0 0 33 33" >
   <g>
     <path d="M21.57,8.668c0.851,0.75,1.275,2.143,1.275,4.178c0,1.605-0.209,2.73-0.628,3.373c-0.419,0.641-1.346,1.266-2.78,1.875
       c-1.396,0.588-2.098,1.383-2.098,2.381v0.457h-3.308c0-1.617,0.157-2.684,0.47-3.201c0.314-0.52,1.137-1.055,2.468-1.604
       l1.27-0.541c1.056-0.438,1.582-1.321,1.582-2.651c0-1.104-0.196-1.814-0.592-2.134c-0.395-0.317-1.275-0.479-2.646-0.479
       c-1.284,0-2.14,0.171-2.567,0.509c-0.428,0.336-0.642,1.01-0.642,2.019l0.015,0.739h-3.237l0.014-0.711
       c0-2.104,0.452-3.517,1.355-4.244c0.903-0.728,2.667-1.09,5.29-1.09C19.134,7.541,20.719,7.916,21.57,8.668z M14.033,27.176h3.265
       v-3.508h-3.265V27.176z M33,16.5C33,25.598,25.598,33,16.5,33C7.402,33,0,25.598,0,16.5C0,7.402,7.402,0,16.5,0
       C25.598,0,33,7.402,33,16.5z M29,16.5C29,9.607,23.393,4,16.5,4C9.607,4,4,9.607,4,16.5C4,23.393,9.607,29,16.5,29
       C23.393,29,29,23.393,29,16.5z"/>
   </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
   
   {TravelerShow}
   
   </div>
      </div>
      <div className={styles.clock} > </div>
      </div>
      <div id='experience' className={styles.slide8}>
      <div className={styles.studiesTitleContainer}></div>
      
      <h3 className={styles.studies}>Etudes</h3>
      <img className={styles.cockpit} src={cockpit} />
      <img className={styles.logoOclock} src={logoOclock} />
      <img className={styles.languages} src={languages} />
      <div className={styles.studiesContainer}> 
      <p>Aprés 6 mois de formation en autodidacte, j'ai choisi l'école O'clock et son format en téléprésentiel addapté à mon envie de travailler en full remote.
      La formation de 7 mois 1000h, aussi labellisée « Grande École du Numérique », se décompose de la sorte : </p>
      <p>Le « Socle » de 3 mois apportant les bases du développement avec les technologies HTML5, CSS3, JavaScript, PHP et MySQL suivi d'une spécialisation au choix.</p>
      <p>J'ai eu la chance de faire deux spécialisations de 2 mois: </p>
      <p>Spécialisation ReactJS :</p>
      <p>Création d'un modèle d’installation / mise à niveau en JS ES6/ React router / Axios / Redux / webpack / les hooks / consomation d'une REST API  </p>
      <p>Spécialisation Wordpress :</p>
      <p>découverte de WordPress, gestion du workflow en milieu professionnel avec Webpack, Composer et NPM) / configuration de WordPress pour une installation personnalisée custom / mise en place de Webpack pour compiler les fichiers afin de les regrouper en un seul / notions avancées autour des thèmes et plugins /création de plugins simples / principes avancés autour de WordPress et mise en production (REST API, déploiement etc).  </p>
      <p>Deux projets d'apothéose de 1 mois par équipe en méthode agile: cahier des charges, modélisation de la BDD, wireframes.</p>
    
    
      </div>

      </div>
      <div className={styles.slide9}>
      <div className={styles.experienceTitleContainer}></div>
      <h3 className={styles.experiences}>compétences</h3>
      <div className={styles.competencesContainer}>
      
      <div className={styles.languagesContainer} >
      <p className={styles.competencesText}>Languages</p>
      <img className={styles.html} src={html} />
      <img className={styles.css} src={css} />
      <img className={styles.php} src={php} />
      <img className={styles.sql} src={sql} />
      <img className={styles.js} src={js} />
      </div>
      <div className={styles.frameworkContainer}>
      <p className={styles.competencesText}>Framework</p>
      <img className={styles.react} src={react} />
      <img className={styles.laravel} src={laravel} />
      <img className={styles.bootstrap} src={bootstrap} />
      
      </div>
      <div className={styles.technoContainer}>
      <p className={styles.competencesText2}>Autres technos</p>
      <img className={styles.wordpress} src={wordpress} />
      <img className={styles.redux} src={redux} />
      <img className={styles.git} src={git} />
      
      </div>
      </div>
      
      </div>
      <div className={styles.slide10}>
      <div className={styles.workTitleContainer}></div>
      <h3 className={styles.work}>Réalisations</h3>
      <h4 className={styles.inlineWorktitle}>Projets en ligne</h4>
      <div className={styles.inlineWorkContainer} onClick={this.borisNodalClick}>
      <img className={styles.captureBoris} src={captureBoris} onClick={this.borisNodalClick}/>
      
      </div>
      {BorisNodalShow}
      </div>
      </div>
     
      
      </div>
      </div>
    
    )
  }
  }
export default Example

