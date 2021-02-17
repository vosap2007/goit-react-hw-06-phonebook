import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from '../css/PhoneBook.module.css'; 

const Contacts = ({contacts, onRemoveContacts}) => (

    <TransitionGroup component='ul'>
        {contacts.map(contact =>
        <CSSTransition 
        key={contact.id}
        classNames='fade'
        timeout={250}>
            <li className={styles.contact} >
            <p className={styles.text}>{contact.name}: {contact.number}</p>
            <section className={styles.gid}>
                    <button type="button" className={styles.button}
                        onClick={() => onRemoveContacts(contact.id)}>
                        Delete</button>
            </section>
        </li>
        </CSSTransition>
        )}
        </TransitionGroup>
);

export default Contacts;