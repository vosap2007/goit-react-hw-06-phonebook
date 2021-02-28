import React from "react";
import contactsActions from "../redux/contacts/contacts-actions";
import { connect } from 'react-redux';
import styles from '../css/PhoneBook.module.css';

const Filter = ({value, onChange}) => (
        <div>
            <p className={styles.textFilter}>Find contacts by name</p>
            <input
                type="text"
                value={value}
                onChange={onChange}
            />
        </div>
);

const mapStateToProps = state => ({
    value: state.contacts.filter,
  });

  const mapDispatchToProps = dispatcs => ({
    onChange: (e) => dispatcs(contactsActions.changeFilter(e.target.value)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Filter);