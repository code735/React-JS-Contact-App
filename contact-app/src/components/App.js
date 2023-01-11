import React, { useState } from 'react';
import './App.css';
import Header from "./Header.js";
import AddContact from "./AddContact.js";
import ContactList from "./ContactList.js";
function App() {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
  };
  return (
    <div>
      <Header />
      <div className='container pt-5'>
        <AddContact addContactHandler={addContactHandler} />
        <div className='py-5'>
          <ContactList contacts={contacts} />
        </div>
      </div>
    </div>
  );
}

export default App;
