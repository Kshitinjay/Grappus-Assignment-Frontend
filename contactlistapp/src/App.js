import React, { useState, useEffect } from "react";
import "./App.css";
import Contact from "./components/Contact";
import Searching from "./components/Searching";

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({
    userName: "",
    userContact: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    let flag = true;
    let regexName = /^([a-zA-z])*$/;
    if (!regexName.test(user.userName)) {
      alert("Check Contact Name");
      flag = false;
    }
    let regexNumber = /^([0-9]){10}$/;
    if (!regexNumber.test(user.userContact)) {
      alert("Check Contact number");
      flag = false;
    }
    if (flag) {
      setData([...data, user]);
    }
  };

  const handleDelete = (id) => {
    console.log(id);
    const newData = data.filter((item, index) => {
      return id != index;
    });
    setData(newData);
  };

  const handleSort = () => {
    console.log("Sorted");
    const appStateCopy = [...data];
    appStateCopy.sort((a, b) =>
      a.userName.toLowerCase() < b.userName.toLowerCase() ? -1 : 1
    );
    setData(appStateCopy);
  };

  return (
    <div className="App">
      <h1>Contact List App</h1>
      <Searching
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleSort={handleSort}
      />
      <div id="contactContainer">
        {data.map((item, id) => {
          return (
            <Contact
              key={id}
              userName={item.userName}
              userContact={item.userContact}
              handleDelete={handleDelete}
              id={id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
