import filterEmoji from "../components/filterEmoji";
import emojiList from "../data/emojiList.json";

describe("filterEmoji", () => {
  it("should return all emojis if no search text is provided", () => {
    const result = filterEmoji("", emojiList.length);
    expect(result).toEqual(emojiList);
  });

  it("should return a subset of emojis if search text is provided", () => {
    const result = filterEmoji("smile", 2);
    expect(result.length).toBe(2);
    expect(result[0].title.toLowerCase()).toContain("smile");
    expect(result[1].title.toLowerCase()).toContain("smile");
  });

  it("should return an empty array if search text does not match any emojis", () => {
    const result = filterEmoji("zzzz");
    expect(result).toEqual([]);
  });

  it("should return up to maxResults number of emojis", () => {
    const result = filterEmoji("heart", 3);
    expect(result.length).toBe(3);
  });


});
