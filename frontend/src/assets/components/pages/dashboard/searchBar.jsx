import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import useGetFiles from '../../../hooks/useGetFiles';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const {files} = useGetFiles()

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    // Here you can implement search suggestions logic or fetch suggestions from an API
    if (value.trim() !== '') {
      // For demonstration, let's assume suggestions are fetched from a static array
      const suggestions = files.map((file)=>
        {return  file.fileName }
      )

      
      const filteredSuggestions = suggestions.filter(suggestion =>
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
    
    files.map((file)=>{
      if(file.fileName.toLowerCase() == suggestion){
        navigate(`/notebook/${file.fileId}`);
      }
    })
    
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
                className="px-4 py-2 cursor-pointer hover:bg-neutral-800"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
