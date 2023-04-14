import React, { useEffect } from "react";
import Clipboard from "clipboard";

import EmojiResultRow from "./EmojiResultRow";
import "./EmojiResults.css";

const EmojiResults = ({ emojiData }) => {
  useEffect(() => {
    const clipboard = new Clipboard(".copy-to-clipboard");
    return () => {
      clipboard.destroy();
    };
  }, []);

  return (
    <div className="component-emoji-results">
      {emojiData.map((emojiData) => (
        <EmojiResultRow
          key={emojiData.title}
          symbol={emojiData.symbol}
          title={emojiData.title}
        />
      ))}
    </div>
  );
};


export default EmojiResults;
