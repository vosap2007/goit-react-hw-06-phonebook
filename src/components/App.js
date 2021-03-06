import React, { Component } from 'react';
import Filter from './Filter';
import Input from './Input';
import Contacts from "./Contacts";
import Alert from './Alert';
import { connect } from 'react-redux';
import contactsOperations from "../redux/contacts/contacts-operations";
import styles from '../css/PhoneBook.module.css';
import '../css/animation.css';
import { CSSTransition } from 'react-transition-group';
import axios from 'axios';


class App extends Component {

  state = {
    showTitle: false,
    error: false,
  }

  updateData = (value) => {
    this.setState({ error: value })

    setTimeout(() => {
      this.setState(() => {
        return {
          error: false
        };
      });
    }, 3000);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/contacts')
      .then(resp => console.log(resp.data))

      this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <div className={styles.box}>

          <CSSTransition
            in={this.state.error}
            appear={true}
            classNames='error'
            timeout={250}
            unmountOnExit>
            <Alert />
          </CSSTransition>

          <CSSTransition
            in={true}
            appear={true}
            classNames='fade'
            timeout={500}
            unmountOnExit>
            <h1 className={styles.phonebook}>Phonebook</h1>
          </CSSTransition>

          <Input updateData={this.updateData} />
          <h2 className={styles.title}>Contacts</h2>

          <CSSTransition
            in={true}
            timeout={250}
            classNames='fade'
            unmountOnExit>
            <Filter />
          </CSSTransition>

          <CSSTransition
            in={true}
            timeout={250}
            classNames='fade'
            unmountOnExit>
            <Contacts />
          </CSSTransition>

        </div>
      </>
    );
  }
};

const mapDispatchToProps = dispatcs => ({
  fetchContacts: () => dispatcs(contactsOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(App);