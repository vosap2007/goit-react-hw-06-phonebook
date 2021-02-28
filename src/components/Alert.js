import React from "react";
import styles from '../css/PhoneBook.module.css'; 

const Alert = () => (
   <div className={styles.boxAlert}>
       <h2 className={styles.alert}>Please enter the correct request!</h2>
   </div>
);

export default Alert;