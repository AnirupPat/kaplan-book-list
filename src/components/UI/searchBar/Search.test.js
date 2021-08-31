import { render, screen } from "@testing-library/react";
import Search from "./Search";
import { Provider } from "react-redux";
import store from "../../../store/context";

describe("Search component", () => {
  test("Input element for Search component", () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const element = screen.getByRole("textbox");
    expect(element.placeholder).toBe("Search");
    expect(screen.getByTestId("your-id")).toBeInTheDocument();
  });
});
