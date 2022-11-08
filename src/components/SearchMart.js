import React, { useState } from "react";
import MapContainer from "./MapContainer";
import "../css/SearchMart.css";

const SearchPlace = () => {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  return (
    <div idName="myMap">
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          className="inputtext"
          placeholder="Search Place..."
          onChange={onChange}
          value={inputText}
        />
        <button className="button1" type="submit">
          검색
        </button>
      </form>
      <MapContainer searchPlace={place} />
    </div>
  );
};

export default SearchPlace;
