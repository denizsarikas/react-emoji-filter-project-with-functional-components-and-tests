import React from "react";
import "./SearchInput.css";

const SearchInput = ({ textChange }) => {

  

  return (
    <div className="component-search-input">
      <div>
        <input onChange={textChange} />
      </div>
    </div>
  );
};
export default SearchInput;
