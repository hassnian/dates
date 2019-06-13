import React from "react";
import { shallow, configure } from "enzyme";

import SomeList from "./SomeList";
import Adapter from "enzyme-adapter-react-16";

configure({
  adapter: new Adapter()
});

describe("<SomeList/>", () => {
 

  it("renders li when props are passed", () => {
      const lista=[{name:"ad"},{name:"asd"},{name:"asd"}]
    const someList = shallow(<SomeList  lista={lista} />);
    expect(someList.find('li').length).toBe(lista.length);
    

 
  });
});
