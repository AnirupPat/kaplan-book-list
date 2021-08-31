import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/context";
import useHttp from "./hooks/use-http";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

describe("Async component", () => {
  test("Successfully render the JSX elements", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByText("Books");
    expect(linkElement).toBeInTheDocument();
  });
});
