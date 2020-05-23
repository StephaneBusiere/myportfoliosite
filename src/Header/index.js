import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import styles from "./header.module.css";


const Header=() =>{
  const [scrolled, setScrolled] = useState(false);

  // change state on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY>10;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      
      }
     
    };
    
    document.addEventListener('scroll', handleScroll, { passive: true });
   console.log(window.scrollTo)
    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener('scroll', handleScroll);
      console.log(window.innerHeight)
      
    };
    

  }, [scrolled]);
  return (
    
      <div className={styles.headerWrapper}>
      
      <header   data-active={scrolled}>
      <ul className={styles.headerMenu}>
      <li className={styles.headerMenuitem}>About</li>
      <li className={styles.headerMenuitem}>Work</li>
      <li className={styles.headerMenuitem}>Study</li>
      <li className={styles.headerMenuitem}>Contact</li>
      
      </ul>
      </header>
      </div>
    );
  };

  export default Header


