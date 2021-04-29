import React from "react";
import "./searching.css";
const Searching = ({ handleChange, handleSubmit,handleSort}) => {
  return (
    <div className="form-Container">
      <input
      id="name"
        type="text"
        name="userName"
        className="form-control"
        placeholder="Name"
        onChange={handleChange}
      />
      <input
      id="num"
        type="text"
        name="userContact"
        className="form-control"
        placeholder="Contact No"
        minLength="10"
        maxLength="10"
        onChange={handleChange}
      />
      <button type="button" className="btn btn-danger  ms-2" onClick={handleSubmit}>
        Add Contact
      </button>
      {/* <button  type="button" className="btn btn-danger ms-2" onClick={handleSort}>
        Sort
      </button> */}
    </div>
  );
};

export default Searching;
