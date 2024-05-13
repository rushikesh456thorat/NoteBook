import { toggleContentEditableProperty } from "../../../../../lib/formattingcontext";

const ReadEdit = () => {


  const handleReadEditMode = (value) =>{

       if(value == "1"){
        toggleContentEditableProperty(false)
       }else{
        toggleContentEditableProperty(true)
       }

  }

  return (
    <>
      <div>
        <select className="select  select-bordered min-w-11 w-36 h-8 min-h-8"  onChange={(e) => handleReadEditMode(e.target.value)}>
        <option value={"2"}>
            <span> Edit Mode </span>
          </option>
          <option value={"1"}>
            <span> Read Mode </span>
          </option>
          
        </select>
      </div>
    </>
  );
};

export default ReadEdit;
