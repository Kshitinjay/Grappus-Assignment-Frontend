import React, { useState, useEffect } from "react";
import "./contact.css";
const Contact = ({ userName, userContact, handleDelete, handleUpdate, id }) => {
  const [flag, setFlag] = useState(true);
  const [detailsUpdate, setDetailsUpdate] = useState({
    userName: "",
    userContact: "",
  });

  const handleNewChange = (event) => {
    const { name, value } = event.target;
    setDetailsUpdate((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <>
      {flag ? (
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
            <img
              src="https://img.icons8.com/material/30/fa314a/ball-point-pen.png"
              onClick={() => setFlag(!flag)}
            />
          </div>
        </div>
      ) : (
        <>
          <div id="contact" className="animate__animated animate__fadeInUp">
            <img src="https://img.icons8.com/fluent/96/000000/change-user-male.png" />
            <p>
              <strong>Name:</strong>
            </p>
            <input
              id="name"
              type="text"
              name="userName"
              className="form-control"
              placeholder="Name"
              onChange={handleNewChange}
            />
            <p>
              <strong>Contact:</strong>
            </p>
            <input
              id="num"
              type="text"
              name="userContact"
              className="form-control"
              placeholder="Contact No"
              minLength="10"
              maxLength="10"
              onChange={handleNewChange}
            />
            <button
              className="btn btn-warning"
              onClick={() => {
                handleUpdate(id, detailsUpdate);
                setFlag(!flag);
              }}
            >
              Save
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Contact;
