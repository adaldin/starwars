// React
import React from "react";
import { screen, render } from "@testing-library/react";
// Components
import LogOn from "./LogOn.js";
import errorImg from "../assets/starwars-hd-png-star-wars-darth-vader-render-png-by-jonathanrey-946.png";
// other
import { shallow } from "enzyme";

describe("Home", () => {
  it("must display a tittle", () => {
    render(<LogOn />);
    const title = screen.getByText(/Please log in to see the starships/i);
    expect(title).toBeInTheDocument();
  });
  it("renders an image", () => {
    const img = shallow(<LogOn />);
    expect(img.find("img").prop("src").toEqual(errorImg));
  });
});
