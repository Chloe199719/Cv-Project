import "./App.css";
import React, { Component } from "react";
import Basicinfo from "./component/basicinfo";
import Experience from "./component/experience";
import Education from "./component/education";
import uniqid from "uniqid";
import img1 from "./component/img1.jpg";
import FormatedCV from "./component/formated";
import ReactToPrint from "react-to-print";
import Buttons from "./component/buttons";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: `Chloe`,
      lastName: `Pratas`,
      title: `Senior Web Developer`,
      foto: img1,
      address: `Example Street 10`,
      number: `123456789`,
      email: `john.doe@gmail.com`,
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus imperdiet nisl sed vestibulum. Donec gravida, nulla eget blandit fermentum, mauris nisi rutrum libero, ac pharetra erat est sit amet tellus. Quisque fermentum dolor a interdum fermentum. Maecenas vehicula ac ipsum nec gravida. Integer quis porta turpis. Aenean et metus.`,
      exp: [
        {
          id: uniqid(),
          company: `Facebook Inc.`,
          city: `Menlo Park`,
          from: `2015`,
          to: `Present`,
          position: `Senior Web Developer`,
        },
      ],
      edu: [
        {
          id: uniqid(),
          uniname: `University of Technology`,
          city: `Oklahoma`,
          degree: `Master`,
          subject: `Science`,
          from: `2008`,
          to: `2010`,
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
          <h1>CV MAKER</h1>
        </header>
        <main>
          <div className="content">
            {" "}
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
            <div className="buttons">
              {" "}
              <ReactToPrint
                trigger={() => {
                  return <button>Print </button>;
                }}
                content={() => this.componentRef}
                documentTitle="newCV document"
              />
              <Buttons />
            </div>
          </div>

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
