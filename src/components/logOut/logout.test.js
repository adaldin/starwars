import LogOut from "./LogOut";
import { screen, render } from "@testing-library/react";

describe("<LogOut />", () => {
  it("render", () => {
    render(<LogOut />);
    expect(screen.getByText(/logout/i)).toBeInTheDocument();
  });
});
