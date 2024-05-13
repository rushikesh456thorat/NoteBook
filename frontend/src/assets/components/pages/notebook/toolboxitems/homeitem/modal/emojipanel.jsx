import { execCommand } from "../../../../../lib/formattingcontext";
import { Emojis } from "../../../../../utils/emojicollection";

const EmojiPanel = () => {
  return (
    <>
      <div className="dropdown dropdown-end dropdown-bottom">
        <button
          tabIndex={0}
          role="button"
          className="btn btn-sm min-w-fit w-fit btn-square btn-ghost p-1"
        >
          <div className=" flex justify-center items-center">
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
                d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
              />
            </svg>
            <span className=" ml-1 mr-1">Emoji</span>
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
          </div>
        </button>
        <div
          tabIndex={0}
          className="dropdown-content gap-3 flex flex-row z-[1] menu p-2 overflow-auto  shadow bg-base-100 rounded-xl h-40 w-80"
        >
          {Emojis.map((emoji) => (
            <>
              <button className="btn btn-sm min-w-fit w-fit btn-square btn-ghost p-1" onClick={() => execCommand("insertText", emoji)}>
                <a>{emoji}</a>
              </button>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default EmojiPanel;
