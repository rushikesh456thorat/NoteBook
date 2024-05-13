import { useState } from "react";
import useFileCreate from "../../../hooks/useFileCreate";


const CreateBox = () => {

  const [title, setTitle] = useState('')
  const {loading, fileCreate} = useFileCreate()

  const handleSubmit = async(e) => {
    e.preventDefault()
    const id = await fileCreate(title)
    window.location.href = `/notebook/${id}`

  }

  return (
    <>
      <div
        className="  text-neutral-content"
      >
        <form onSubmit={handleSubmit}>
        <h1 className=" text-sm font-semibold ">
          Create New Note<span className="text-blue-600">Book</span>
        </h1>
        <div className="label mt-5 text-sm  text-gray-300">Name</div>
        <input
          type="text"
          name=""
          placeholder=""
          className="input input-bordered w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}

        />
        <button className="btn btn-primary w-full btn-sm mt-6" disabled={loading} >
          {loading ? <span className="loading loading-spinner"></span> : "Create"}
        </button></form>
      </div>
    </>
  );
};

export default CreateBox;
