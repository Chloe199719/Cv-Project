import React, { forwardRef } from "react";
const FormatedCV = forwardRef((props, ref) => {
  const { name } = props;

  return (
    <section ref={ref} className="formCV">
      <div className="headerCV">
        <h2>
          {name.firstName} {name.lastName}
        </h2>
        <h3>{name.title}</h3>
      </div>
      <div className="mainCV">
        <h2>Description</h2>
        <hr></hr>
        <p className="desc">{name.desc}</p>
        <h2 className="h2s">Experience</h2>
        <hr></hr>
        {name.exp.map((obj) => {
          return (
            <div key={obj.id} className="expbar">
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
        <h2 className="h2s">Education</h2>
        <hr></hr>
        {name.edu.map((obj) => {
          return (
            <div key={obj.id} className="expbar">
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
        <div className="cvphoto">
          <img src={name.foto} alt="Owner of the CV" width="100%" />
        </div>
        <h2>Personal Details</h2>
        <hr></hr>
        <div className="boldp">
          <p>Address</p> <p>{name.address}</p>
        </div>
        <div className="boldp">
          <p>Phone Number</p> <p>{name.number}</p>
        </div>
        <div className="boldp">
          <p>Email</p> <p>{name.email}</p>
        </div>
      </div>
    </section>
  );
});

export default FormatedCV;
