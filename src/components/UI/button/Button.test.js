import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { Provider } from "react-redux";
import store from "../../../store/context";

describe("Button component", () => {
  test("Button element for Button component", () => {
    render(<Button />);
    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
  });
  test("props for Button component", () => {
    const onClick = () => {
      console.log("Button clicked");
    };
    render(<Button onClick={onClick} disabled={false} />);
    const element = screen.getByRole("button");
    expect(element.disabled).toBe(false);
  });
});
