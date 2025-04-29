import React from 'react';
/**
 * Provides a search bar for searching conversation content.
 */
const SearchBar = () => {
  return (
    <input
      type="text"
      className="border rounded px-3 py-2 w-64 focus:outline-none focus:ring focus:border-blue-300"
      placeholder="Search conversations..."
      aria-label="Search conversations"
    />
  );
};

export default SearchBar;
