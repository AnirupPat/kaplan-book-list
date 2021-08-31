import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/context";

describe("Async component", () => {
  test("renders learn react link", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByText("learn react");
    expect(linkElement).toBeInTheDocument();
  });

  test("renders books", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "first post" }],
    });

    const { getByTestId, asFragment } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const listNode = await waitForElement(() => getByTestId("list"));
    console.log(listNode);
    expect(listNode.children).toHaveLength(1);
    expect(asFragment()).toMatchSnapshot();

    // const bookElement = await screen.findAllByRole("listitem");
    // expect(bookElement).not.toHaveLength(0);
  });
});
