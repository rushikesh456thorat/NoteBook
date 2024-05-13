/* eslint-disable react/prop-types */
import {createContext, useContext, useState } from "react";

export const FileContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useFileContext = () =>{
    return useContext(FileContext);
}

export const FileContextProvider = ({ children }) => {
    const [fileInfo , setFileInfo] = useState(JSON.parse(localStorage.getItem("NoteBook-FileInfo"))|| null);

    return <FileContext.Provider value={{fileInfo,setFileInfo}}>{children}</FileContext.Provider>;
}