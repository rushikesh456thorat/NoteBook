import {toggleStyles} from "../../../../../lib/formattingcontext"

const UndoRedo = () => {
  return (
    <>
      <div className="join">
        <button className="btn join-item btn-sm btn-square btn-ghost p-0" onClick={() => toggleStyles("undo")}>
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
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
        </button>
        <div className="dropdown ">
          <button
            tabIndex={0}
            role="button"
            className="btn join-item btn-sm min-w-fit w-fit btn-square btn-ghost p-1"
            
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="mt-3 dropdown-content   z-[1] menu p-2 shadow bg-base-100 rounded-box w-36"
          >
            <li onClick={() => toggleStyles("undo")}>
              <div>
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
                    d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                  />
                </svg>

                <span>Undo</span>
              </div>
            </li>
            <li onClick={() => toggleStyles("redo")}>
              <div>
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
                    d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
                  />
                </svg>

                <span>Redo</span>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default UndoRedo;
