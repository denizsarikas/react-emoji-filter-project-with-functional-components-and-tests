import React, { useState } from "react";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import EmojiResults from "./components/EmojiResults";
import filterEmoji from "./components/filterEmoji";

export default function App() {
  const [filteredEmoji, setFilteredEmoji] = useState(filterEmoji("", 20));

  const handleSearchChange = event => {
    setFilteredEmoji(filterEmoji(event.target.value, 20));
  };

  return (
    <div>
      <Header />
      <SearchInput textChange={handleSearchChange} />
      <EmojiResults emojiData={filteredEmoji} />
    </div>
  );
}
