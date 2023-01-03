import React from "react";

function experience(props) {
  const { name, change, remove, add } = props;

  return (
    <section className="exp">
      <h2>Experience</h2>
      {name.exp.map((obj, i) => {
        return (
          <article key={obj.id}>
            <input
              value={obj.company}
              title="company"
              onChange={(e) => change(e, i)}
              placeholder="Company"
            ></input>{" "}
            <input
              value={obj.position}
              title="position"
              onChange={(e) => change(e, i)}
              placeholder="Position"
            ></input>
            <input
              value={obj.city}
              title="city"
              onChange={(e) => change(e, i)}
              placeholder="City"
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

export default experience;
