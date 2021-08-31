import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import { Provider } from "react-redux";
import store from "../../store/context";

describe("NavBar component", () => {
  test("Heading test for NavBar component", () => {
    render(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );
    const element = screen.getByRole("heading", { name: /Books/ });
    expect(element).toBeInTheDocument();
  });
  test("Button text test for NavBar component", () => {
    render(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );
    const element = screen.getByText("Create New Book");
    expect(element).toBeInTheDocument();
  });
});
