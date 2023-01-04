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
import Footer from "./component/footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: ``,
      lastName: ``,
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

  //  Takes updates from Basinf Info
  onchange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  // Makes the Img avaiable
  imgchange = (e) => {
    if (e.target.files && e.target.files[0]) {
      this.setState({
        foto: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  //  Remove Button Exp
  removeExp = (e) => {
    const shalowcopy = [...this.state.exp];
    shalowcopy.splice(this.state.exp.indexOf(e), 1);
    this.setState({
      exp: shalowcopy,
    });
  };

  // Add Exp
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

  // Adds to Object everytime there a Change in EXperience

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

  // Adds One more Object to Education Array

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

  // Removes Selected Object from Education Array
  removeEdu = (e) => {
    const shalowcopy = [...this.state.edu];
    shalowcopy.splice(this.state.edu.indexOf(e), 1);
    this.setState({
      edu: shalowcopy,
    });
  };

  // Updates Everytime there a change
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
  // Resets Form to a clean State
  onReset = () => {
    this.setState({
      firstName: ``,
      lastName: ``,
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
    });
  };

  // Fills the From with Details from my creator (not all details are accurate)
  onExemple = () => {
    this.setState({
      firstName: `Chloe`,
      lastName: `Pratas`,
      title: `Free Lancer Software Engineer `,
      foto: img1,
      address: `Exemple Adress`,
      number: `+49 123456789`,
      email: `chloe@chloevision.com`,
      desc: `Im a self taught software  developer i have skills on Html, Css, Javascript, ReactJS , Git , FireBase, NodeJS, NPM some of my work can be found in my website https://www.chloevision.com/ and ,  https://github.com/Chloe199719 Im Very Motivated to learn any other technology's `,
      exp: [
        {
          id: uniqid(),
          company: `Amazon`,
          city: `Seatle`,
          from: `2018`,
          to: `2022`,
          position: `Junior Software`,
        },
      ],
      edu: [
        {
          id: uniqid(),
          uniname: `Havard`,
          city: `Cambridge`,
          degree: `Master`,
          subject: `Computer Science`,
          from: `2018`,
          to: `2022`,
        },
      ],
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
              <Buttons reset={this.onReset} example={this.onExemple} />
            </div>
          </div>

          <FormatedCV
            name={this.state}
            ref={(el) => (this.componentRef = el)}
          />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
