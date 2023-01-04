import React from "react";

const basicinfo = (props) => {
  const { name, change, imgchange } = props;
  return (
    <section className="binfo">
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
      {/* not working */}
      <input type="file" onChange={imgchange} placeholder="Foto"></input>
      <input
        id="address"
        value={name.address}
        onChange={change}
        type="text"
        placeholder="Address"
      ></input>
      <input
        id="number"
        value={name.number}
        onChange={change}
        type="text"
        placeholder="Phone Number"
      ></input>
      <input
        id="email"
        value={name.email}
        onChange={change}
        type="text"
        placeholder="Email"
      ></input>
      <textarea
        id="desc"
        value={name.desc}
        onChange={change}
        type="text"
        placeholder="Description"
      ></textarea>
      {/* <p>
        {name.title} {name.firstName} {name.lastName} {name.address}{" "}
        {name.number} {name.email} {name.desc}{" "}
        <img src={name.foto} alt="textimg" width="200px" />
      </p> */}
    </section>
  );
};

export default basicinfo;
