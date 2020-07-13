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
import Skipatrol from '../SkiPatrolInfo'
import Kayaker from '../KayakerInfo'
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
    when: false,
    skiPatrolClick: false,
    kayakerClick: false,

  }
  
  this.toggleHover = this.toggleHover.bind(this);
  this.toggleHoverStudies = this.toggleHoverStudies.bind(this);
  this.toggleHoverSkills = this.toggleHoverSkills.bind(this);
  this.toggleHoverWork = this.toggleHoverWork.bind(this);
  this.skiPatrolClick=this.skiPatrolClick.bind(this); 
  this.crossClick=this.crossClick.bind(this);
  this.kayakerClick=this.kayakerClick.bind(this);
}


  skiPatrolClick () {
    this.setState({skiPatrolClick: !this.state.skiPatrolClick})
  }
  kayakerClick() {
    this.setState({kayakerClick:!this.state.kayakerClick})
  }
  crossClick () {
    this.setState ({skiPatrolClick:false, kayakerClick:false})
    
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
      <div className={styles.headerWrapperSticky} style={{ opacity: this.state.imgViz ? 1 : 0.25,display :this.state.imgViz ?  'block' : 'none' }} >
      
        <header   >
        <ul className={styles.headerMenuSticky}>
        <li className={styles.headerMenuitemSticky}>About</li>
        <li className={styles.headerMenuitemSticky}>Work</li>
        <li className={styles.headerMenuitemSticky}>Study</li>
        <li className={styles.headerMenuitemSticky}>Contact</li>
        <li className={styles.headerMenuItemTitleSticky}>Busiere Stéphane</li>
        </ul>
        </header>
        </div>
      <div  id="outerwrapper" className={styles.outerwrapper} ref={(container) =>this.containerElement=container} >
     <div id='container' className={styles.container} >
      <div className={styles.slide1}>
      
      <img className={styles.hacker} src={hacker} />
    
     <Link to="#aboutme" state={{scrolled:true}} className={styles.knowmore}>WHO I AM ?</Link>      
      <div className={styles.headerWrapper}  >
      
        <header   >
        <ul className={styles.headerMenu}>
        <li className={styles.headerMenuitem}>About</li>
        <li className={styles.headerMenuitem}>Work</li>
        <li className={styles.headerMenuitem}>Study</li>
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
  <span>A</span>
  
  </div>
  </div>
  <div className={styles.introLinesContainer2}>
  <div className={styles.introLines}>
  <span>QUESTION</span>
  
  </div>
  </div>
  <div className={styles.introLinesContainer3}>
  <div className={styles.introLines}>
  <span>OF</span>
  
  </div>
  </div>
  <div className={styles.introLinesContainer4}>
  <div className={styles.introLines}>
  <span>TRUST</span>
  
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
      this.setState({imgViz: isVisible})
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
      <p className={styles.why}>WHY YOU CAN TRUST ME ?</p>
      <p className={styles.about}>About </p>
      <div className={styles.aboutLine}></div>
      </div>
      
      <div className={styles.slide4}>
      <div className={styles.railwrapper1}>
      <span className={styles.railtext}>WHO I AM</span>
      </div>
      
      </div>
      <div  className={styles.slide5}>
      <h2 className={styles.thingsTitle}>I am many things</h2>
      <div className={styles.line}></div>
      <div id="aboutme" className={styles.experienceText}>
      I had a life before becoming a junior developper.
      A life where my passion was also my work, where nature was my office and danger was my every day. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatibus vitae fugiat, earum minima magnam ex consectetur id reprehenderit iusto perspiciatis labore est quia nihil ipsa? Est tempora enim asperiores?
      </div>
      <div className={styles.pisteurContainer}>
      <VizSensor
      
      
      onChange={(isVisible) => {
        this.setState({imgViz: isVisible})
      }}
    >
      <div className={styles.pisteur} 
      style={{
       
        
        transform:  this.state.imgViz ? 'scale (1)' : 'scale(0.8)',
       
        transition: 'opacity 500ms linear',
        transition: 'transform 5000ms linear'
      }}>
      
      </div>
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
     
      <Link to="#studies" onMouseEnter={this.toggleHoverStudies} onMouseLeave={this.toggleHoverStudies} style={ linkStyleStudies} className={styles.studiesTitle}>Studies</Link>
      </Slide>
      


    
      <Slide  right spy={this.state.imgViz2} delay={700} >
      <Link onMouseEnter={this.toggleHoverSkills} onMouseLeave={this.toggleHoverSkills} style={linkStyleSkills} className={styles.skillsTitle}>Skills</Link>
      </Slide>
      
      
      
      <Slide  right spy={this.state.imgViz2} delay={900} >
      <Link onMouseEnter={this.toggleHoverWork} onMouseLeave={this.toggleHoverWork} style={linkStyleWork} className={styles.workTitle}>Work</Link>
      </Slide>
      
      </div>
      </VizSensor>
      <div  className={styles.slide7}>
      <div className={styles.experienceTitleContainer}></div>
      <h3 className={styles.pastexperiences}>PAST</h3>
      <h3 className={styles.experiences}>EXPERIENCES</h3>
      
      <div className={styles.experiencesTextContainer}>
      <div className={styles.skiPatrolWrapper}>
      <div className={styles.skipatrol} onClick={this.skiPatrolClick}>Ski patrol</div>
      <div>{SkipatrolShow}</div>
      </div>
      <div className={styles.kayakerWrapper}>
      <div className={styles.kayaker} onClick={this.kayakerClick}>River Guide </div>
      <div>{KayakerShow}</div>
      </div>
      <div className={styles.guide}>Turism product designer</div>
      <div className={styles.traveler}>Traveler</div>
      </div>
      </div>
      </div>
     
      
      </div>
      </div>
    )
  }
}
export default Example
{
/*<StarfieldAnimation
      
        style={{
          position: 'absolute',
          width: '100%',
          height: '800px',
          zIndex: '1',
        }}
        numParticles={1000} 
      />*/}