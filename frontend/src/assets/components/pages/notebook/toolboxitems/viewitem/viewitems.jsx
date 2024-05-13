import ZoomPanel from "./modal/zoompanel"
import FullScreen from "./modal/fullscreen"
import ReadEdit from "./modal/readedit"
import Divider from "../../../../lib/divider"





const ViewItems = () =>
{

    

    return(
        <>
      <ul className=" flex max-h-10  w-full  max-sm:min-w-80 overflow-x-auto overflow-y-hidden max-sm:max-w-full max-sm:w-80   gap-3">
        <li className="tooltip tooltip-bottom" data-tip="Zoom In & Zoom Out">
            <ZoomPanel></ZoomPanel>
        </li>
        <li>
          <Divider></Divider>
        </li>
        <li className="tooltip tooltip-bottom" data-tip="Zoom Out">
            <FullScreen></FullScreen>
        </li>
        <li>
          <Divider></Divider>
        </li>
        <li className="tooltip tooltip-bottom" data-tip="Switch Mode">
            <ReadEdit></ReadEdit>
        </li>
        
      </ul>
    </>
    )
}

export default ViewItems