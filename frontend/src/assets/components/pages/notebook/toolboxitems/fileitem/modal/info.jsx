import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetFileInfo from "../../../../../../hooks/useGetFileInfo";
import toast from "react-hot-toast";

const Info = () => {
  const { id } = useParams();
  const [fileInfo, setFileInfo] = useState("");
  const { getFileInfo } = useGetFileInfo();


  useEffect(() => {
    const fetchFileName = async () => {
      try {
        const fileInfo = await getFileInfo(id);
        setFileInfo(fileInfo);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchFileName();
  },[]);
  return (
    <>
      <button
        htmlFor="my_modal_7"
        className="btn btn-sm min-w-max rounded-md btn-ghost font-semibold"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>

        <span> Info </span>
      </button>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box  ">
          <h3 className="font-bold text-lg">{fileInfo.fileName}</h3>
          <p className="py-1">Size: {formatBytes(fileInfo.size)}</p>
          <p className="py-1">Created At: {extractTime(fileInfo.createdDate)}</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
function extractTime(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export default Info;
