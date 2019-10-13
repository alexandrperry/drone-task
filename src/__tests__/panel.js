import React from "react";
import { shallow, mount } from "enzyme";
import Panel from "../components/Panel";
import { FuelProvider } from "../context/fuel";
import { dronePosition } from "../context/dronePosition";

describe("Panel component", () => {
  it("renders correctly", () => {
    const component = shallow(<Panel />);
    expect(component).toMatchSnapshot();
  });
  it("fuel must be 100% ", () => {
    const component = mount(
      <FuelProvider>
        <Panel />
      </FuelProvider>
    );
    expect(
      component
        .find("span")
        .first()
        .text()
    ).toEqual("100%");
  });
  it("height and widht renders correctly ", () => {
    const mockDimensions = {
      height: 500,
      width: 500
    };
    const component = mount(
      <dronePosition.Provider
        value={{
          dimensions: mockDimensions
        }}
      >
        <Panel />
      </dronePosition.Provider>
    );
    expect(
      component
        .find("span")
        .at(1)
        .text()
    ).toEqual("H: 500");
    expect(
      component
        .find("span")
        .at(2)
        .text()
    ).toEqual("W: 500");
  });
});
