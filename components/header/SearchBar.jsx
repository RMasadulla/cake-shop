"use client";

import { useState } from "react";
import SearchIcon from "../Icons";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search operation here, e.g., redirect to search page or filter results
    console.log("Searching for:", query);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="w-full flex items-center">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border  border-gray-300 rounded-l-md outline-none focus:border-black transition-colors"
        />
        <button
          type="submit"
          className="px-2 py-[.5rem] bg-black text-white rounded-r-md hover:bg-black"
        >
          <SearchIcon />
        </button>
      </form>
      {/* <form onSubmit={handleSearch} className="w-full flex items-center">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border  border-gray-300 rounded-l-md outline-none focus:border-black transition-colors"
      />
      <button
        type="submit"
        className="px-2 py-[.5rem] bg-black text-white rounded-r-md hover:bg-black"
      >
        <SearchIcon />
      </button>
    </form> */}
    </div>
  );
};

export default SearchBar;
