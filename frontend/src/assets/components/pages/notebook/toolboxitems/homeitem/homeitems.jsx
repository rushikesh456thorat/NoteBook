import AddPage from "./modal/addpage";
import ClipBoard from "./modal/clipboard";
import FontAndFontSize from "./modal/fontandfontsize";
import UndoRedo from "./modal/undoredo";
import Divider from "../../../../lib/divider";
import FontColor from "./modal/fontcolor";
import BulletNumbering from "./modal/bulletnumbering";
import Paragraph from "./modal/paragraph";
import EmojiPanel from "./modal/emojipanel";
// eslint-disable-next-line no-unused-vars
import {execCommand, toggleStyles} from "../../../../lib/formattingcontext"


const HomeItems = () => {
  
  return (
    <>
      <ul className=" w-full  max-sm:min-w-80  max-sm:max-w-full max-sm:w-80   gap-3">
        <li className="tooltip tooltip-bottom" data-tip="Add Page">
          <AddPage></AddPage>
        </li>
        <li className="tooltip tooltip-bottom" data-tip="Undo">
          <UndoRedo></UndoRedo>
        </li>
        <li className="tooltip tooltip-bottom" data-tip="Clipboard">
          <ClipBoard></ClipBoard>
        </li>

        <li>
          <Divider></Divider>
        </li>
        <li>
          <FontAndFontSize></FontAndFontSize>
        </li>
        <li className="tooltip tooltip-bottom" data-tip="Bold">
          <button className="btn btn-sm btn-square text- font-bold btn-ghost p-0" onClick={() => toggleStyles("bold")} >
            B
          </button>
        </li>
        <li className="tooltip tooltip-bottom" data-tip="Italic">
          <button className="btn btn-sm btn-square text-lg font-thin  italic font-serif btn-ghost p-0" onClick={() => toggleStyles("italic")}>
            I
          </button>
        </li>
        <li className="tooltip tooltip-bottom" data-tip="Underline">
          <button className="btn btn-sm underline font-thin underline-offset-4 btn-square text-lg btn-ghost p-0" onClick={() => toggleStyles("underline")}>
            U
          </button>
        </li>
        <li className="tooltip tooltip-bottom" data-tip="Font Color">
          <FontColor></FontColor>
        </li>
        <li>
          <Divider></Divider>
        </li>
        <li className="tooltip tooltip-bottom" data-tip="Subscript">
          <button className="btn font-normal btn-sm btn-square text-lg btn-ghost p-0" onClick={() => toggleStyles("subscript")}>
            X<sub className=" -ml-1">2</sub>
          </button>
        </li>
        <li className="tooltip tooltip-bottom" data-tip="Superscript">
          <button className="btn font-normal btn-sm btn-square text-lg btn-ghost p-0" onClick={() => toggleStyles("superscript")}>
            X<sup className=" -ml-1">2</sup>
          </button>
        </li>
        <li className="tooltip tooltip-bottom" data-tip="Strikethough">
          <button className="btn font-thin  btn-sm btn-square text-lg btn-ghost p-0" onClick={() => toggleStyles("strikeThrough")}>
            <strike>abc</strike>
          </button>
        </li>
        <li>
          <Divider></Divider>
        </li>
        <li className="tooltip tooltip-bottom" data-tip="Bullets & Numbering">
          <BulletNumbering></BulletNumbering>
        </li>
        <li className="tooltip tooltip-bottom" data-tip="Paragraph">
          <Paragraph></Paragraph>
        </li>
        <li>
          <Divider></Divider>
        </li>
        <li className="tooltip tooltip-bottom" data-tip="Add Emojis">
          <EmojiPanel></EmojiPanel>
        </li>
      </ul>
    </>
  );
};

export default HomeItems;
