import { Link, useParams } from "react-router-dom";
import useGetFileInfo  from "../../../hooks/useGetFileInfo.js";
import { useState,useEffect } from "react";
import ProfileButton from "../../lib/profilebutton";
import {toast} from "react-hot-toast"
import ToolMenu from "./toolmenu";
import Page from "./page";
import useFiles from "../../../zustand/userFiles.js";


const NoteBook = () => {
  const { id } = useParams();


  const [fileName, setFileName] = useState("");
  const { getFileInfo } = useGetFileInfo();

  useEffect(() => {
    const fetchFileName = async () => {
      try {
        if (!sessionStorage.getItem(`fileInfo${id}`)) {
          const fileInfo = await getFileInfo(id);
          await sessionStorage.setItem(
            `fileInfo${id}`,
            JSON.stringify(fileInfo)
          );
          setFileName(fileInfo.fileName);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchFileName();
  }, [id, getFileInfo]);

  return (
    <>
      <div id="focusButton" className="h-full w-full">
        <div className="pl-5 pt-0">
          <div className="navbar items-center">
            <div className="navbar-start">
              <div className="logo">
                <Link to="/" className="font-semibold text-xl">
                  Note<span className="text-blue-500">Book</span>
                </Link>
              </div>
            </div>
            <div className="navbar-center">
              <div className="label font-semibold hover text-neutral-content">
                {fileName}
              </div>
            </div>
            <div className="navbar-end">
              <ProfileButton />
            </div>
          </div>
          <div className="-mt-1 w-full">
            <div>
              <ToolMenu />
            </div>
          </div>
        </div>
        <div className="flex  h-[90%] justify-center">
          <div className="p-5 h-[calc(100vh-21.95vh)] overflow-y-auto max-sm:h-[calc(100vh-18.95vh)]  min-w-72 max-w-[90%] w-[90%] ">
            {/* Pass id and fileName to Page component */}
            <Page id={id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteBook;
