import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from 'react-redux';
import contactsActions from "../redux/contacts/contacts-actions";
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

const getVisibleContacts = (allContacts, filter) => { 
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter(({text}) =>
    text.toLowerCase().includes(normalizedFilter,
    ));
  };

const mapStateToProps = state => ({
    contacts: getVisibleContacts(state.contacts.filter, state.contacts.items)
})

  const mapDispatchToProps = dispatcs => ({
    onRemoveContacts: (id) => dispatcs(contactsActions.deleteContacts(id)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);