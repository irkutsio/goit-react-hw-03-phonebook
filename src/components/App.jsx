import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { FilterInput } from './FilterInput/FilterInput';


const CONTACT_LS_KEY = 'contacts'

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem(CONTACT_LS_KEY));

    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(CONTACT_LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  getUserContact = contact => {
    const existingContact = this.state.contacts.find(
      user => user.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (existingContact) {
      alert('Contact with the same name already exists!');
      return;
    }

    contact.id = nanoid();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div style={{ padding: '36px' }}>
        <h1>Phonebook</h1>
        <ContactForm getUserContact={this.getUserContact} />
        <h2>Contacts</h2>
        <FilterInput value={filter} onChange={this.handleFilterChange} />
        <ContactList
          userContact={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
