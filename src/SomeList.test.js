import React from "react";
import { shallow, configure } from "enzyme";

import SomeList from "./SomeList";
import Adapter from "enzyme-adapter-react-16";

configure({
  adapter: new Adapter()
});

describe("<SomeList/>", () => {
 

  it("renders li when props are passed", () => {
    const lista=[{name:"Rye",surname:"Lovisa",date:Date.now()},{name:"Lyan",surname:"Maxima",date:Date.now()},{name:"Michelle",surname:"Jowis",date:Date.now()}]      
    const someList = shallow(<SomeList  lista={lista} />);
    expect(someList.find('li').length).toBe(lista.length);
  });

  it("renders the content of the li properly when props are passed", () => {
    const lista=[{name:"Rye",surname:"Lovisa",date:Date.now()},{name:"Lyan",surname:"Maxima",date:Date.now()},{name:"Michelle",surname:"Jowis",date:Date.now()}]      
    const someList = shallow(<SomeList  lista={lista} />);
    someList.find('.name').forEach((node,index) => {
      expect(node.text()).toBe(lista[index].name);
    });
  });
  

  it("renders  check if date is a date format  li properly when props are passed", () => {
    const lista=[{name:"Rye",surname:"Lovisa",date:Date.now()},{name:"Lyan",surname:"Maxima",date:Date.now()},{name:"Michelle",surname:"Jowis",date:Date.now()}]      
    const someList = shallow(<SomeList  lista={lista} />);
    someList.find('.date').forEach((node) => {
      expect(new Date(node.text()) instanceof Date).toBe(true);
    });
  });
  
  
});
