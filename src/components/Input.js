import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsActions from "../redux/contacts/contacts-actions";
import styles from '../css/PhoneBook.module.css';

class Input extends Component {
  state = {
    name: '',
    number: ''
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value,
     });
  };

  handleSubmit = e => {
    e.preventDefault();

   // this.props.onAddContact(this.state);

    this.setState({name: '',
    number: ''});
   };

   render() { 
     return (
      <div className={styles.border}>
         <form onSubmit={this.handleSubmit}>
           <label className={styles.text}>Name<br/>
         <input
           tape="text"
           value={this.state.name}
           onChange={this.handleInputChange}
               name="name" />
           </label>
         </form>
         
         <form onSubmit={this.handleSubmit}>
           <label className={styles.text}>Number<br/>
         <input
           tape="number"
           value={this.state.number}
           onChange={this.handleInputChange}
               name="number" />
           </label><br/>
           <button className={styles.button} type="submit">Add contact</button>
         </form>
      </div>
    ); 
  }
}

const mapDispatchToProps = dispatcs => ({
  onAddContact: ({ name, number }) => dispatcs(contactsActions.addContacts({ name, number })),
});

export default connect(null, mapDispatchToProps)(Input);