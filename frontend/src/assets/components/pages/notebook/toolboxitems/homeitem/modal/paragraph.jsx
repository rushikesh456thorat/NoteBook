import { toggleStyles } from "../../../../../lib/formattingcontext";

const Paragraph = () => {
  return (
    <>
      <div className="join">
        <button className="btn join-item btn-sm btn-square btn-ghost p-0" onClick={() => toggleStyles("justifyLeft")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth={3}
            stroke="currentColor"
            className="w-4 h-4"
            viewBox="0 0 64 64"
            id="paragraph"
          >
            <path d="M0 6h64v2H0zM0 16h46v2H0zM0 26h64v2H0zM0 36h50v2H0zM0 46h64v2H0zM0 56h54v2H0z"></path>
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
            <li onClick={() => toggleStyles("justifyLeft")}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-4 h-4"
                  viewBox="0 0 64 64"
                  id="paragraph"
                >
                  <path d="M0 6h64v2H0zM0 16h46v2H0zM0 26h64v2H0zM0 36h50v2H0zM0 46h64v2H0zM0 56h54v2H0z"></path>
                </svg>

                <span>Align Left</span>
              </div>
            </li>
            <li onClick={() => toggleStyles("justifyCenter")}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-4 h-4"
                  viewBox="0 0 64 64"
                  id="paragraph"
                >
                  <path d="M0 6h64v2H0zM18 16h46v2H18zM0 26h64v2H0zM14 36h50v2H14zM0 46h64v2H0zM10 56h54v2H10z"></path>
                </svg>

                <span>Align Center</span>
              </div>
            </li>
            <li onClick={() => toggleStyles("justifyRight")}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-4 h-4"
                  viewBox="0 0 64 64"
                  id="paragraph"
                >
                  <path d="M0 6h64v2H0zM9 16h46v2H9zM0 26h64v2H0zM7 36h50v2H7zM0 46h64v2H0zM5 56h54v2H5z"></path>
                </svg>

                <span>Align Right</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Paragraph;
