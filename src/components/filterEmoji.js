import emojiList from "../data/emojiList.json"

export default function filterEmoji(searchText, maxResults) {
  return emojiList.filter(({ title }) =>
    title.toLowerCase().includes(searchText.toLowerCase())
  ).slice(0, maxResults);
}
