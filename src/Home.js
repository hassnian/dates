import React from "react";
import logo from "./react.svg";
import "./Home.css";
import SomeList from "./SomeList";
class Home extends React.Component {
  render() {
    const  lista=[{ name: "ad" }, { name: "asd" }, { name: "asd" }]
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Birthday Kata Thoughtworks</h2>
        </div>
        <SomeList lista={lista} />
      </div>
    );
  }
}

export default Home;
