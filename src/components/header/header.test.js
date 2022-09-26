// React
import React from "react";
import { screen, render } from "@testing-library/react";
// Components
import Header from "./Header";
// img
import logo from "../../assets/star_wars_logo.png";
// shallow
import { shallow } from "enzyme";

describe("Header", () => {
  it("renders an image", () => {
    const img = shallow(<Header />);
    expect(img.find("img").prop("src").toEqual(logo));
  });
});
