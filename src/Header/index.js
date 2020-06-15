import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import styles from "./header.module.css";


const Header=() =>{
  const [scrolled, setScrolled] = useState(false);
  const headerRef=useRef();
  let container=document.getElementById('outerwrapper');
  
 
  
  // change state on scroll
  useEffect(() => {
    const handleScroll = () => {
 
     let refContainer=headerRef.scrollHeight;
     
    
     
     
    };
    
    document.addEventListener('scroll', handleScroll, { passive: true });
   console.log(window.scrollTo)
   
   console.log(handleScroll);
    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener('scroll', handleScroll);
      
      
    };
    

  }, [scrolled]);
  return (
    
      <div className={styles.headerWrapper}>
      
      <header   ref={headerRef} data-active={scrolled}>
      <ul className={styles.headerMenu}>
      <li className={styles.headerMenuitem}>About</li>
      <li className={styles.headerMenuitem}>Work</li>
      <li className={styles.headerMenuitem}>Study</li>
      <li className={styles.headerMenuitem}>Contact</li>
      <li className={styles.headerMenuItemTitle}>Busiere Stéphane</li>
      </ul>
      </header>
      </div>
    );
  };

  export default Header


