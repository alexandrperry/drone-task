import React from "react";
import { shallow, mount } from "enzyme";
import GridItem from "../components/GridItem";

describe("GridItem component", () => {
  it("renders correctly", () => {
    const component = shallow(<GridItem />);
    expect(component).toMatchSnapshot();
  });
  it("renders gridItem without drone", () => {
    const component = mount(<GridItem />);
    expect(component.find(".gridItem").hasClass("drone")).toBeFalsy();
  });
  it("accepts drone props", () => {
    const component = mount(<GridItem drone />);
    expect(component.props().drone).toEqual(true);
  });
  it("renders drone", () => {
    const component = mount(<GridItem drone />);
    expect(component.find(".gridItem").hasClass("drone")).toBeTruthy();
  });
  it("renders drone icon", () => {
    const component = mount(<GridItem drone />);
    expect(component.find("svg").hasClass("droneIcon")).toBeTruthy();
  });
});
