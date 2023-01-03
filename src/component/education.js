import React from "react";

function education(props) {
  const { name, change, remove, add } = props;

  return (
    <section className="edu">
      <h2>Education</h2>
      {name.edu.map((obj, i) => {
        return (
          <article key={obj.id}>
            <input
              value={obj.uniname}
              title="uniname"
              onChange={(e) => change(e, i)}
              placeholder="University Name"
            ></input>
            <input
              value={obj.city}
              title="city"
              onChange={(e) => change(e, i)}
              placeholder="City"
            ></input>
            <input
              value={obj.degree}
              title="degree"
              onChange={(e) => change(e, i)}
              placeholder="Degree"
            ></input>
            <input
              value={obj.subject}
              title="subject"
              onChange={(e) => change(e, i)}
              placeholder="Subject"
            ></input>
            <input
              value={obj.from}
              title="from"
              onChange={(e) => change(e, i)}
              placeholder="From"
            ></input>
            <input
              value={obj.to}
              title="to"
              onChange={(e) => change(e, i)}
              placeholder="To"
            ></input>
            <button onClick={() => remove(obj)}>Remove</button>
          </article>
        );
      })}
      <button onClick={add}>Add</button>
    </section>
  );
}

export default education;
