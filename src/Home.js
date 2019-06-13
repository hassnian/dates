import React from "react";
import logo from "./react.svg";
import "./Home.css";
import SomeList from "./SomeList";
class Home extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       lista:[{name:"Rye",surname:"Lovisa",date:Date.now()},{name:"Lyan",surname:"Maxima",date:Date.now()},{name:"Michelle",surname:"Jowis",date:Date.now()}]
    }
  }
  
  render() {
    const {lista}=this.state
    return (
      <div className="Home">
        <div className="Home-header">
          <h2>Birthday Kata Thoughtworks</h2>
        </div>
        <SomeList lista={lista} />
      </div>
    );
  }
}

export default Home;
