import Info from "./modal/info";
import Save from "./modal/save";
import Divider from "../../../../lib/divider"
import Print from "./modal/print";
import Exit from "./modal/exit";

const FileItems = () => {
  return (
    <>
      <ul className=" flex max-h-10  w-full  max-sm:min-w-80 overflow-x-auto overflow-y-hidden max-sm:max-w-full max-sm:w-80   gap-3">
      <li className="tooltip tooltip-bottom" data-tip="Save">
            <Exit></Exit>
        </li>
        <li><Divider></Divider></li>
        <li className="tooltip tooltip-bottom" data-tip="Information">
            <Save></Save>
        </li>
        <li><Divider></Divider></li>
        <li className="tooltip tooltip-bottom" data-tip="Save">
            <Info></Info>
        </li>
        <li><Divider></Divider></li>
        <li className="tooltip tooltip-bottom" data-tip="Print">
            <Print></Print>
        </li>
        
      </ul>
    </>
  );
};

export default FileItems;
