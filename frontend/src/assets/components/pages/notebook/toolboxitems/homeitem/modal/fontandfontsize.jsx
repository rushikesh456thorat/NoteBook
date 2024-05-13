import { execCommand } from "../../../../../lib/formattingcontext";

const FontAndFontSize = () => {
  return (
    <>
      <div className="join">
        <div className="tooltip tooltip-bottom " data-tip="Font">
          <select
            className="select select-bordered join-item min-w-11 w-36 h-8 min-h-8"
            onChange={(e) => execCommand("fontName", e.target.value)}
          >
            <optgroup label="Fonts">
              <option selected value="Arial">
                Arial
              </option>
              <option value="Helvetica">Helvetica</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Courier New">Courier New</option>
              <option value="Verdana">Verdana</option>
              <option value="Georgia">Georgia</option>
              <option value="Comic Sans MS">Comic Sans MS</option>
            </optgroup>
          </select>
        </div>
        <div className="tooltip tooltip-bottom" data-tip="Font Size">
          <select
            className="select select-bordered outline-none outline-0   join-item min-w-11 w-15 h-8 min-h-8"
            onChange={(e) => execCommand("fontSize", e.target.value)}
          >
            <optgroup label="Font Size">
              <option value="1">10</option>
              <option selected value="2">
                14
              </option>
              <option value="3">16</option>
              <option value="4">18</option>
              <option value="5">24</option>
              <option value="6">32</option>
              <option value="7">48</option>
            </optgroup>
          </select>
        </div>
      </div>
    </>
  );
};

export default FontAndFontSize;
