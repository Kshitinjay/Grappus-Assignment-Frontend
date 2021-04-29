import React from "react";
import "./contact.css";
const Contact = ({ userName, userContact, handleDelete, id, handleEdit }) => {
  return (
    <>
      <div id="contact" className="animate__animated animate__fadeInUp">
        <img src="https://img.icons8.com/fluent/96/000000/change-user-male.png" />
        <p>
          <strong>Name:</strong> {userName}
        </p>
        <p>
          <strong>Contact:</strong> {userContact}
        </p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            src="https://img.icons8.com/flat-round/30/000000/delete-sign.png"
            className="me-3"
            onClick={() => handleDelete(id)}
          />
          <img src="https://img.icons8.com/material/30/fa314a/ball-point-pen.png" />
        </div>
      </div>
    </>
  );
};

export default Contact;
