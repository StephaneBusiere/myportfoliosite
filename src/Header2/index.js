import React from 'react';
import ReactDOM from 'react-dom';



export default class Header2 extends React.Component{
  
    
    state = {
    color: 'pink'
  }

  

  componentDidMount() {
    let container=ReactDOM.findDOMNode(this.headerElement);
    this.headerElement.scrollTop=this.headerElement.scrollHeight;
    console.log(container.scrollTop);
    console.log(container.scrollHeight);
    let scroll=(container.scrollHeight);
    if (scroll > 90) {
      this.setState({color: 'black'})
    } else {
      this.setState({color: 'red'})
    
    }
    
  }
  
  render() {
   
    return(
        <div className={styles.headerWrapper}>
      
        <header   ref={(header) =>this.headerElement=header} style={{backgroundColor:this.state.color}}>
        <ul >
        <li className={styles.headerMenuitem}>About</li>
        <li className={styles.headerMenuitem}>Work</li>
        <li className={styles.headerMenuitem}>Study</li>
        <li className={styles.headerMenuitem}>Contact</li>
        <li className={styles.headerMenuItemTitle}>Busiere Stéphane</li>
        </ul>
        </header>
        </div>
     )
   }
}