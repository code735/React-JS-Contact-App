import React from "react";
import CardContact from "./ContactCard";

const ContactList = (props) => {
    console.log(props);

    const renderContactList = props.contacts.map((contact) => {
        return <CardContact contact={contact}></CardContact>
    })

    return (
        <div>
            {renderContactList}
        </div>
    );
}

export default ContactList;