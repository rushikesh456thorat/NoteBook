import CreateBox from "./createbox";
import { useEffect, useState } from "react";
import useFiles from "../../../zustand/userFiles.js";
import useFileRemove from "../../../hooks/useFileRemove.js";
import toast from "react-hot-toast";

const ToolBar = () => {
  const { reloadTrigger, setReloadTrigger,sortBy, setSortBy,sortDirection, setSortDirection, selectedFile, setSelectedFile } = useFiles();
  const [isSelected, setIsSelected] = useState(false);
  const { loading, fileRemove } = useFileRemove();
  
  const [dir, setDir] = useState();


  const [isOpen, setIsOpen] = useState();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleSort = (field) => {
    if (field === sortBy) {
      setDir((prevSortDirection) =>
        prevSortDirection === "asc" ? "desc" : "asc"
      );
      setSortDirection(dir);
      setReloadTrigger(-1*reloadTrigger)
    } else {
      setSortDirection("asc");
      setSortBy(field);
      setReloadTrigger(-1*reloadTrigger)

    }
  };

  useEffect(() => {
    if (selectedFile?.length ?? 0 == 0) {
      setIsSelected(false); // If no file selected, set isSelected to false
    } else {
      setIsSelected(true);
    }
  }, [selectedFile]);

  const handleClick = async () => {
    if (selectedFile.length == 1 && isSelected == false) {
      await fileRemove(selectedFile[0]);
      setSelectedFile([]);
      setReloadTrigger(-1 * reloadTrigger);
    } else {
      await Promise.all(
        selectedFile.map(async (fileId) => {
          try {
            await fileRemove(fileId);
          } catch (error) {
            toast.error(error.message);
          }
        })
      );
      setSelectedFile([]);
    }
    setReloadTrigger(-1 * reloadTrigger);
  };

  return (
    <>
      <div className="navbar mt-5">
        <div className="navbar-start">
          {/* The button to open modal */}
          <label
            htmlFor="my_modal_7"
            className="btn btn-sm rounded-full btn-primary font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span> New Book </span>
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box">
              <CreateBox></CreateBox>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">
              Close
            </label>
          </div>
        </div>
        <div className="navbar-end">
          <div className="dropdown">
            <div
              className={`dropdown dropdown-bottom dropdown-end   ${
                isOpen ? "open" : ""
              }`}
            >
              <button
                onClick={toggleDropdown}
                className="btn btn-sm m-1 min-w-28"
                aria-haspopup="true"
                aria-expanded={isOpen}
              >
                Sort By
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <div
                className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 ${
                  isOpen ? "" : "hidden"
                }`}
                role="menu"
              >
                <button
                  className={`btn btn-sm btn-ghost ${
                    sortBy === "name" ? "text-primary" : "text-neutral-400"
                  }`}
                  onClick={() => handleSort("name")}
                >
                  Name
                </button>
                <button
                  className={`btn btn-sm btn-ghost ${
                    sortBy === "date" ? "text-primary" : "text-neutral-400"
                  }`}
                  onClick={() => handleSort("date")}
                >
                  Date
                </button>
                <hr className=" mt-1 mb-1 border-neutral-400 w-full"/>
                <button
                  className="btn btn-sm btn-ghost text-neutral-400 justify-end"
                  onClick={() => handleSort(sortBy, "asc")}
                >
                  {sortDirection === "asc" && sortBy === "name" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  )}
                  {sortDirection === "asc" && sortBy === "date" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  )}
                  <span className=" mr-5">Ascending Order</span>
                </button>
                <button
                  className="btn btn-ghost btn-sm text-neutral-400  justify-end"
                  onClick={() => handleSort(sortBy, "desc")}
                >
                  {sortDirection === "desc" && sortBy === "name" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  )}
                  {sortDirection === "desc" && sortBy === "date" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  )}
                  <span  className=" mr-4">Descending Order</span>
                </button>
              </div>
            </div>
          </div>

          <button
            className={`btn btn-sm ${isSelected ? " btn-disabled" : ""}
          
          font-semibold`}
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default ToolBar;
