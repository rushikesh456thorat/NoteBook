import Help from "./modal/help";
import Divider from "../../../../lib/divider";
import FeedBack from "./modal/feedback";

const HelpItems = () => {
  return (
    <>
      <ul className=" flex max-h-10  w-full  max-sm:min-w-80 overflow-x-auto overflow-y-hidden max-sm:max-w-full max-sm:w-80   gap-3">
        <li className="tooltip tooltip-bottom" data-tip="Help">
          <Help></Help>
        </li>
        <li>
          <Divider></Divider>
        </li>
        <li className="tooltip tooltip-bottom" data-tip="Help">
          <FeedBack/>
        </li>
      </ul>
    </>
  );
};

export default HelpItems;
