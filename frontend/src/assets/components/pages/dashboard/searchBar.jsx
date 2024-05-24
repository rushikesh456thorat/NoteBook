import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import useGetFiles from "../../../hooks/useGetFiles";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const { files } = useGetFiles();

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    // Here you can implement search suggestions logic or fetch suggestions from an API
    if (value.trim() !== "") {
      // For demonstration, let's assume suggestions are fetched from a static array
      const suggestions = files.map((file) => {
        return file.fileName;
      });

      const filteredSuggestions = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);

    files.map((file) => {
      if (file.fileName.toLowerCase() == suggestion) {
        navigate(`/notebook/${file.fileId}`);
      }
    });
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative flex items-center">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          className="py-2 pl-10 pr-4 w-full bg-neutral rounded-full focus:outline-none"
          placeholder="Search File on NoteBook"
        />
      </div>
      {suggestions.length > 0 && (
        <div className="absolute z-50 left-0 right-0 bg-neutral shadow-lg mt-2 rounded-md overflow-hidden">
          <ul>
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 flex cursor-pointer hover:bg-neutral-800"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 p-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  />
                </svg>

                <div className=" text-center pl-4 items-center font-semibold"> {suggestion}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
