import { render, screen } from "@testing-library/react";
import Book from "./Book";

describe("Book component", () => {
  test("Attribute test for Book component", async () => {
    const bookObj = {
      id: Date.now(),
      volumeInfo: {
        title: "Test Book title",
        authors: ["Author1"],
        publisher: "Test Publisher",
        publishedDate: "2021",
      },
    };
    render(<Book info={bookObj} />);

    expect(screen.getByText("Test Book title")).toBeInTheDocument();
    expect(screen.getByText("Authors: Author1")).toBeInTheDocument();
    expect(screen.getByText("publisher: Test Publisher")).toBeInTheDocument();
    expect(screen.getByText("Published Date: 2021")).toBeInTheDocument();
  });
});
