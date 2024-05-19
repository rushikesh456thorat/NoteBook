/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import useFiles from "../../../zustand/userFiles";

const MenuItems = ({ index, file ,isChecked, onCheckboxChange }) => {
  const formatedSize = formatBytes(file.size);
  const formattedDate = extractTime(file.modifiedDate);
 



  const handleClick = () => {
    try {
       // Wait for setOpenFile to complete
      window.location.href = `/notebook/${file.fileId}`; // Redirect after setOpenFile
    } catch (error) {
      console.error("Error setting file:", error);
      // Handle error, possibly show a message to the user
    }
  };

  

  return (
    <>
      <tr className="hover cursor-pointer">
        <th>
          <label>
            <input
              type="checkbox"
              className="checkbox checkbox-xs checkbox-info"
              checked={isChecked}
              onChange={() => onCheckboxChange(file.fileId)}
            />
          </label>
        </th>
        <th>{index + 1}</th>
        <td >
          <Link
            className="link link-primary"
            to={`notebook/${file.fileId}`}
          >
            {file.fileName}
          </Link>
        </td>
        <td>{formattedDate}</td>
        <td>{formatedSize}</td>
      </tr>
    </>
  );
};

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

function extractTime(dateString) {
  
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export default MenuItems;