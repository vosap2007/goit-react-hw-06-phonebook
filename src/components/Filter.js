import React from "react";
import contactsActions from "../redux/contacts/contacts-actions";
import styles from '../css/PhoneBook.module.css';

function Filter({value, onChange}) {
    return (
        <div>
            <p className={styles.textFilter}>Find contacts by name</p>
            <input
                type="text"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

const mapStateToProps = state => ({
    value: state.contacts.filter,
  });

  const mapDispatchToProps = dispatcs => ({
    onChange: (e) => dispatcs(contactsActions.changeFilter(e.target.value)),
  });

export default (mapStateToProps, mapDispatchToProps)(Filter);