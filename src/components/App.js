import React, { Component } from 'react';
import Filter from './Filter';
import Input from './Input';
import Contacts from "./Contacts";
import Alert from './Alert';
import { v4 as uuidv4 } from 'uuid';
import styles from '../css/PhoneBook.module.css';
import  '../css/animation.css';
import { CSSTransition } from 'react-transition-group';


export default class App extends Component {

  state = {
    contacts: [],
    showTitle: false,
    error: false,
    filter: ''
  }

  changeFilter = filter => {
    this.setState({ filter });
  };

  addContacts = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      completed: false,
      number,
    };

    if (this.state.contacts.some((e) => e.name === name))
       { this.setState( () => {
        return {
          error: true
        };
        }); 
      
        setTimeout(() => {
          this.setState( () => {
            return {
              error: false
            };
            }); 
        }, 3000);
        

      }
       
    else {
      this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact]
      };
      });
    }
  };

  removeContacts = contactsId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter (contact =>contact.id !== contactsId),
      };
    });
  }

  getVisibleContacts = () => { 
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  componentDidUpdate (prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    if (contacts !== null) {
      const contactParst = JSON.parse(contacts);
      this.setState({ contacts: contactParst });
    }
  }

  render() {

    const visibleContacts = this.getVisibleContacts();

  return (
    <>

       <CSSTransition 
        in={this.state.error}
        appear={true}
        classNames='error'
        timeout={250}
        unmountOnExit>
          <Alert/>
         </CSSTransition>

      <div className={styles.box}>
        <CSSTransition 
        in={true}
        appear={true}
        classNames='fade'
        timeout={500}
        unmountOnExit>
          <h1 className={styles.phonebook}>Phonebook</h1>
         </CSSTransition>
        
          <Input onAddContact={this.addContacts} />
        <h2 className={styles.title}>Contacts</h2>
        
        <CSSTransition
        in={visibleContacts.length > 1} 
        timeout={250}
        classNames='fade'
        unmountOnExit>
        <Filter value={this.state.filter} onChange={this.changeFilter }/></CSSTransition>

        <CSSTransition 
        in={visibleContacts.length > 0} 
        timeout={250}
        classNames='fade'
        unmountOnExit>
          <Contacts
          contacts={visibleContacts}
        onRemoveContacts={this.removeContacts }/></CSSTransition>

      </div>
    </>
    );
  }
}

/* <CSSTransition 
        in={true}
        appear={true}
        classNames='error'
        timeout={250}
        unmountOnExit>
          <Alert/>
         </CSSTransition> */ 