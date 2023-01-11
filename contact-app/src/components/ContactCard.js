import React from "react";


const CardContact = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item d-flex justify-content-between align-items-center border-bottom border-dark mt-1">
            <div className="content d-flex justify-content-between py-3" style={{ gap: "20px" }}>
                <i class="bi bi-person-circle" style={{ fontSize: "2rem" }}></i>
                <div>
                    <h4 className="header">{name}</h4>
                    <h6>{email}</h6>
                </div>
            </div>
            <i className="bi bi-trash" style={{ color: "red", fontSize: "1.5rem" }}></i>
        </div >
    );
}

export default CardContact;