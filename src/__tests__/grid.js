import React from "react";
import { shallow, mount } from "enzyme";
import Grid from "../components/Grid";

describe("Grid component", () => {
  it("renders correctly", () => {
    const component = shallow(<Grid />);
    expect(component).toMatchSnapshot();
  });
  it("renders gridRow", () => {
    const component = mount(<Grid />);
    expect(component.find(".gridRow")).toBeTruthy();
  });
});
