import React from "react";
import { shallow, configure } from "enzyme";
import Home from "./Home";
import SomeList from "./SomeList";
import Adapter from "enzyme-adapter-react-16";

configure({
  adapter: new Adapter()
});

describe("<Home/>", () => {
  it("render withouth crashing", () => {
    const home = shallow(<Home />);
    expect(home.find(SomeList).length).toBe(1);
  });

 
});
