import React, { useEffect, useState } from "react";
import useGetFiles from "../../../hooks/useGetFiles";
import MenuItems from "./menuitems";
import useFiles from "../../../zustand/userFiles";

const FileMenu = () => {
  const { loading, files } = useGetFiles();
  const {selectedFile, setSelectedFile} = useFiles();

  useEffect(() => {
    
  }, [selectedFile])

  const handleCheckboxChange = (fileId) => {
    if (selectedFile.includes(fileId)) {
      setSelectedFile(selectedFile.filter((id) => id !== fileId));
    } else {
      setSelectedFile([...selectedFile, fileId]);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs checkbox-info"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedFile(files.map((file) => file.fileId));
                    } else {
                      setSelectedFile([]);
                    }
                  }}
                  checked={selectedFile.length === files.length && files.length > 0}
                />
              </label>
            </th>
            <th></th>
            <th>Name</th>
            <th>Modified</th>
            <th>File Size</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan="5" className="text-center">
                <span className="loading loading-spinner text-info mx-auto"></span>
              </td>
            </tr>
          )}
          {files.map((file, index) => (
            <MenuItems
              key={file.fileId}
              index={index}
              file={file}
              isChecked={selectedFile.includes(file.fileId)}
              onCheckboxChange={handleCheckboxChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileMenu;
