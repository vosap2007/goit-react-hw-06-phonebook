import React from "react";
//import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from '../css/PhoneBook.module.css'; 

const Alert = () => (
   <div className={styles.boxAlert}>
       <h2 className={styles.alert}>This contact already exists!</h2>
   </div>
);

export default Alert;