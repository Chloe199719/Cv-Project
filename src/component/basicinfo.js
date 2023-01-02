import React, { useRef } from "react";

const basicinfo = (props) => {
  const { name, change } = props;
  return (
    <section>
      <h2>Personal Information</h2>
      <input
        id="firstName"
        onChange={change}
        type="text"
        value={name.firstName}
        placeholder="First name"
      ></input>
      <input
        id="lastName"
        onChange={change}
        value={name.lastName}
        type="text"
        placeholder="Last name"
      ></input>
      <input
        id="title"
        value={name.title}
        onChange={change}
        type="text"
        placeholder="Title"
      ></input>
      <input type="text" placeholder="Adress"></input>
      <input type="text" placeholder="Phone Number"></input>
      <input type="text" placeholder="Email"></input>
      <input type="text" placeholder="Description"></input>
      <p>
        {name.firstName} {name.lastName} {name.title}
      </p>
    </section>
  );
};

export default basicinfo;
