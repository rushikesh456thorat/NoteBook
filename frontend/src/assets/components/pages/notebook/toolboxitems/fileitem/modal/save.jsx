import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import useFileSave from "../../../../../../hooks/useFileSave";

const Save = () => {

  const { fileSave } = useFileSave();
  const { id } = useParams();


  const handleClick = async() =>{
    await saveContent()
  }
  const saveContent = async () => {
    try {
      const currentContent = document.getElementById('textEditor').innerHTML;
      await fileSave(id, currentContent);
      toast.success("File Saved!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <button
        className="btn btn-sm min-w-max rounded-md btn-ghost font-semibold"
        onClick={handleClick}
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
            d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
          />
        </svg>

        <span> Save </span>
      </button>

    </>
  );
};


export default Save
