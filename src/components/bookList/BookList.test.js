import { render, screen } from "@testing-library/react";
import BookList from "./BookList";

describe("Booklist component", () => {
  test("Test Loader for Booklist component", async () => {
    const items = [];
    const loading = true;
    render(<BookList items={items} loading={loading} />);

    const linkElement = screen.getByText("Loading tasks...");
    expect(linkElement).toBeInTheDocument();
  });

  test("Test content for Booklist component", async () => {
    const items = [
      {
        id: Date.now(),
        volumeInfo: {
          title: "Test Book title",
          authors: [""],
          publisher: "",
          publishedDate: "",
        },
      },
    ];
    const loading = false;
    const { getByTestId, asFragment } = render(
      <BookList items={items} loading={loading} />
    );

    const linkElement = screen.getByText("Published Date:");
    expect(linkElement).toBeInTheDocument();
  });
});
