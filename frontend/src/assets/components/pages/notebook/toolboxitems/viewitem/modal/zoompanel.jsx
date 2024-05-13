import { useState } from "react"
import { Zoomfunc } from "../../../../../lib/formattingcontext"

const ZoomPanel = () => {

  const [zoomValue , setZoomValue] = useState(100)
  


    const handleZoomIn = () => {

      if(zoomValue == 300){
        return
      }
      setZoomValue( zoomValue + 50)
      Zoomfunc(zoomValue + 50)

    }
    const handleZoomOut = () => {

      if(zoomValue == 100){
        return
      }
      setZoomValue(zoomValue - 50)
      Zoomfunc(zoomValue - 50)

    }
      
  return (
    <>
      <button className="btn btn-sm min-w-max rounded-md btn-ghost font-semibold mr-3" onClick={() => handleZoomIn()}>
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
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
          />
        </svg>

        <span> Zoom In </span>
      </button>
      <div className="label font-thin border w-14 text-center inline-block p-0  h-6 border-neutral border-y-0">{zoomValue}%</div>
      <button className="btn btn-sm min-w-max rounded-md btn-ghost font-semibold ml-3" onClick={()=>handleZoomOut()}>
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
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM13.5 10.5h-6"
          />
        </svg>

        <span> Zoom Out </span>
      </button>
    </>
  );
};

export default ZoomPanel;
