import React from "react";

function formatedCV(props) {
  const { name } = props;
  return (
    <section>
      <div className="headerCV">
        <h2>
          {name.firstName} {name.lastName}
        </h2>
        <h3>{name.title}</h3>
      </div>
      <div className="mainCV">
        <h2>Description</h2>
        <hr></hr>
        <p>{name.desc}</p>
        <h2>Experience</h2>
        <hr></hr>
        {name.exp.map((obj) => {
          return (
            <div key={obj.id}>
              <p>
                {obj.from} - {obj.to}
              </p>
              <div>
                <p>{obj.position}</p>
                <p>
                  {obj.company} - {obj.city}
                </p>
              </div>
            </div>
          );
        })}
        <h2>Education</h2>
        <hr></hr>
        {name.edu.map((obj) => {
          return (
            <div key={obj.id}>
              {" "}
              <p>
                {obj.from} - {obj.to}
              </p>
              <div>
                <p>
                  {obj.uniname}, {obj.city}
                </p>
                <p>Degree: {obj.degree}</p>
                <p>Subject: {obj.subject}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="sideBarCV">
        <img src={name.foto} alt="Owner of the CV" width="100px" />
        <h2>Personal Details</h2>
        <hr></hr>
        <div>
          <p>Address</p> <p>{name.address}</p>
        </div>
        <div>
          <p>Phone Number</p> <p>{name.number}</p>
        </div>
        <div>
          <p>Email</p> <p>{name.email}</p>
        </div>
      </div>
    </section>
  );
}

export default formatedCV;
