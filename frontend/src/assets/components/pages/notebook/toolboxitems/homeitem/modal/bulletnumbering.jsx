import { toggleStyles } from "../../../../../lib/formattingcontext";

const BulletNumbering = () => {
  return (
    <>
      <div className="join">
        <button className="btn join-item btn-sm btn-square btn-ghost p-0" onClick={() => toggleStyles("insertUnorderedList")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5  h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
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
            <li onClick={() => toggleStyles("insertUnorderedList")}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5  h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>

                <span>Bullets</span>
              </div>
            </li>
            <li onClick={() => toggleStyles("insertOrderedList")}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  id="list-numbers"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M10.25,5A.75.75,0,0,1,11,4.25H21a.75.75,0,0,1,0,1.5H11A.75.75,0,0,1,10.25,5ZM11,12.75H21a.75.75,0,0,0,0-1.5H11a.75.75,0,0,0,0,1.5Zm0,7H21a.75.75,0,0,0,0-1.5H11a.75.75,0,0,0,0,1.5ZM3.5,8.25a.75.75,0,0,0,0,1.5h3a.75.75,0,0,0,0-1.5H5.75V3A.75.75,0,0,0,5,2.25H3.5a.75.75,0,0,0,0,1.5h.75v4.5ZM5.75,18l-3.2,2.4A.75.75,0,0,0,3,21.75H7a.75.75,0,0,0,0-1.5H5.25l1.4-1.05A2.75,2.75,0,1,0,2.25,17a.75.75,0,0,0,1.5,0,1.25,1.25,0,1,1,2,1Z"></path>
                </svg>

                <span>Numbering</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BulletNumbering;
