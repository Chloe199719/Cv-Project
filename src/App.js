import "./App.css";
import React, { Component } from "react";
import Basicinfo from "./component/basicinfo";
import Experience from "./component/experience";
import Education from "./component/education";
import uniqid from "uniqid";
import img1 from "./component/img1.jpg";
import FormatedCV from "./component/formated";
import ReactToPrint from "react-to-print";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: `Chloe`,
      lastName: `Pratas`,
      title: ``,
      foto: img1,
      address: ``,
      number: ``,
      email: ``,
      desc: ``,
      exp: [
        {
          id: uniqid(),
          company: ``,
          city: ``,
          from: ``,
          to: ``,
          position: ``,
        },
      ],
      edu: [
        {
          id: uniqid(),
          uniname: ``,
          city: ``,
          degree: ``,
          subject: ``,
          from: ``,
          to: ``,
        },
      ],
    };
  }
  onchange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  imgchange = (e) => {
    if (e.target.files && e.target.files[0]) {
      this.setState({
        foto: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  removeExp = (e) => {
    const shalowcopy = [...this.state.exp];
    shalowcopy.splice(this.state.exp.indexOf(e), 1);
    this.setState({
      exp: shalowcopy,
    });
  };
  addExp = () => {
    const shalowcopy = [...this.state.exp];
    shalowcopy.push({
      id: uniqid(),
      company: ``,
      city: ``,
      from: ``,
      to: ``,
    });
    this.setState({
      exp: shalowcopy,
    });
  };
  onchangeExp = (e, index) => {
    const shalowcopy = [...this.state.exp];
    const newarr = shalowcopy.map((item, i) => {
      if (index === i) {
        return { ...item, [e.target.title]: e.target.value };
      } else {
        return item;
      }
    });

    this.setState({
      exp: newarr,
    });
  };
  addEdu = () => {
    const shalowcopy = [...this.state.edu];
    shalowcopy.push({
      id: uniqid(),
      uniname: ``,
      city: ``,
      degree: ``,
      subject: ``,
      from: ``,
      to: ``,
    });
    this.setState({
      edu: shalowcopy,
    });
  };
  removeEdu = (e) => {
    const shalowcopy = [...this.state.edu];
    shalowcopy.splice(this.state.edu.indexOf(e), 1);
    this.setState({
      edu: shalowcopy,
    });
  };
  onchangeEdu = (e, index) => {
    const newarr = this.state.edu.map((item, i) => {
      if (index === i) {
        return { ...item, [e.target.title]: e.target.value };
      } else {
        return item;
      }
    });

    this.setState({
      edu: newarr,
    });
  };
  render() {
    return (
      <>
        <header>
          <h1>Cv Maker</h1>
        </header>
        <main>
          <Basicinfo
            name={this.state}
            change={this.onchange}
            imgchange={this.imgchange}
          />
          <Experience
            name={this.state}
            change={this.onchangeExp}
            remove={this.removeExp}
            add={this.addExp}
          />
          <Education
            name={this.state}
            add={this.addEdu}
            remove={this.removeEdu}
            change={this.onchangeEdu}
          />
          <ReactToPrint
            trigger={() => {
              return <button>Print </button>;
            }}
            content={() => this.componentRef}
          />
          <FormatedCV
            name={this.state}
            ref={(el) => (this.componentRef = el)}
          />
        </main>
      </>
    );
  }
}

export default App;
