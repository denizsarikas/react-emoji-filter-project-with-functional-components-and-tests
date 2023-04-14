import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header", () => {
  it("renders the header with the expected content", () => {
    render(<Header />);
    const emojiImages = screen.getAllByRole("img");
    expect(emojiImages).toHaveLength(2);
    expect(emojiImages[0]).toHaveAttribute("src", "//cdn.jsdelivr.net/emojione/assets/png/1f638.png");
    expect(emojiImages[1]).toHaveAttribute("src", "//cdn.jsdelivr.net/emojione/assets/png/1f63a.png");
    expect(screen.getByText("Emoji Search")).toBeInTheDocument();
  });
});
