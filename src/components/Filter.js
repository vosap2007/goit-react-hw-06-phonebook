import React from "react";
import * as contactsActions from "../redux/contacts/contacts-actions";
import { connect } from 'react-redux';
import styles from '../css/PhoneBook.module.css';
import contactsSelectors from "../redux/contacts/contacts-selectors";

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
    value: contactsSelectors.getFilter(state),
  });

  const mapDispatchToProps = dispatcs => ({
    onChange: (e) => dispatcs(contactsActions.changeFilter(e.target.value)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Filter);