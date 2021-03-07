import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from 'react-redux';
import contactsOperations from "../redux/contacts/contacts-operations";
import styles from '../css/PhoneBook.module.css'; 
import contactsSelectors from "../redux/contacts/contacts-selectors";

const Contacts = ({contacts, deleteContacts}) => (

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
                        onClick={() => deleteContacts(contact.id)}>
                        Delete</button>
            </section>
        </li>
        </CSSTransition>
        )}
        </TransitionGroup>
);

const mapStateToProps = state => ({
    contacts: contactsSelectors.getVisibleContacts(state),
})

  const mapDispatchToProps = dispatcs => ({
    deleteContacts: (id) => dispatcs(contactsOperations.deleteContacts(id)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);