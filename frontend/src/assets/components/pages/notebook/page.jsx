import { useState, useEffect, useRef } from "react";
import useFiles from "../../../zustand/userFiles";
import useFileRetrive from "../../../hooks/useFileRetrive.js";
import useGetFileInfo from "../../../hooks/useGetFileInfo.js";
import toast from "react-hot-toast";
import useFileSave from "../../../hooks/useFileSave";

const Page = ({ id }) => {
  const [fileInfo, setFileInfo] = useState({});
  const [content, setContent] = useState("");
  const [currentContent, setCurrentContent] = useState("");
  const contentRef = useRef(null);
  const { getFileInfo } = useGetFileInfo();
  const { fileRetrive } = useFileRetrive();
  const { fileSave } = useFileSave();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fileInfo = await getFileInfo(id);
        setFileInfo(fileInfo);
      } catch (error) {
        toast.error(error.message);
      }
      try {
        const fileContent = await fileRetrive(id);
        setCurrentContent(fileContent);
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchData();
    
  }, [id]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerHTML = currentContent;
      const range = document.createRange();
      range.selectNodeContents(contentRef.current);
      range.collapse(false);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }, [currentContent]);

  useEffect(() => {
    const timer = setTimeout(() => {
      saveContent();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentContent]);

  const saveContent = async () => {
    try {
      await fileSave(id, currentContent);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleHtmlChange = (event) => {
    setCurrentContent(event.target.innerHTML);
  };

  return (
    <>
      <div
        id="notebook_Page"
        style={{ zoom: 1 }}
        className="flex-col max-sm:min-h-[calc(100vh-17.95vh)] min-h-[calc(100vh-22.95vh)] px-11 py-9 bottom-0 w-full bg-[#fbfbfb] rounded-md"
      >
        <div className=" min-w-56 flex flex-col">
          <div className="flex flex-col w-fit min-w-56 max-w-full text-lg font-normal pb-5">
            <div className="text-base-100 outline-none border-0">
              {fileInfo.fileName}
            </div>
            <hr className="border-b w-full border-gray-300" />
          </div>
          <div className="flex w-fit min-w-56 max-w-full -mt-5 justify-between">
            <label className="label text-xs font-normal">
              {extractDate(fileInfo.createdDate)}
            </label>
            <label className="label text-xs font-normal">
              {extractTime(fileInfo.createdDate)}
            </label>
          </div>
        </div>
        <div
          contentEditable="true"
          id="textEditor"
          suppressContentEditableWarning
          className="textArea border-0 outline-none bg-transparent text-black text-[14px] mt-5 min-h-[30vh] w-full"
          onInput={handleHtmlChange}
          ref={contentRef}
        ></div>
      </div>
    </>
  );
};

function extractDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function extractTime(dateString) {
  const date = new Date(dateString);
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${hour}:${minutes}:${seconds}`;
}

export default Page;