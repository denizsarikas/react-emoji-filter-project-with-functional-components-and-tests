import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmojiResultsRow from "../components/EmojiResultRow";

describe("EmojiResultsRow", () => {
  const mockTitle = "smiling face with heart-eyes";
  const mockSymbol = "😍";
  const mockCodePointHex = mockSymbol.codePointAt(0).toString(16);
  const mockSrc = `//cdn.jsdelivr.net/emojione/assets/png/${mockCodePointHex}.png`;

  beforeEach(() => {
    render(<EmojiResultsRow title={mockTitle} symbol={mockSymbol} />);
  });

  it("should render the emoji image", () => {
    const emojiImg = screen.getByAltText(mockTitle);
    expect(emojiImg).toBeInTheDocument();
    expect(emojiImg.src).toContain(mockSrc);
  });

  it("should render the title", () => {
    const titleElement = screen.getByText(mockTitle);
    expect(titleElement).toBeInTheDocument();
  });

  it("should render the copy info", () => {
    const copyInfo = screen.getByText("Click to copy emoji");
    expect(copyInfo).toBeInTheDocument();
  });

  it("should copy the emoji when clicked", () => {
    // mock the document.execCommand function
    const originalExecCommand = document.execCommand;
    document.execCommand = jest.fn();

    const copyButton = screen.getByText("Click to copy emoji");
    userEvent.click(copyButton);

    setTimeout(() => {
      expect(document.execCommand).toHaveBeenCalledWith("copy");

      // restore the original document.execCommand function
      document.execCommand = originalExecCommand;
    });
  });
});
