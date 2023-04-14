import React from "react";
import { render } from "@testing-library/react";
import EmojiResults from "../components/EmojiResults";
import EmojiResultRow from "../components/EmojiResultRow";

jest.mock("../components/EmojiResultRow", () => jest.fn(() => null));

describe("EmojiResults", () => {
  const emojiData = [
    {
      title: "smiling face with heart-eyes",
      symbol: "😍",
    },
    {
      title: "face with tears of joy",
      symbol: "😂",
    },
    {
      title: "red heart",
      symbol: "❤️",
    },
  ];

  it("should render the correct number of EmojiResultRow components", () => {
    render(<EmojiResults emojiData={emojiData} />);
    expect(EmojiResultRow).toHaveBeenCalledTimes(emojiData.length);
  });

  it("should pass the correct props to each EmojiResultRow component", () => {
    render(<EmojiResults emojiData={emojiData} />);
    emojiData.forEach((emoji, index) => {
      expect(EmojiResultRow.mock.calls[index][0]).toEqual({
        title: emoji.title,
        symbol: emoji.symbol,
      });
    });
  });
});
