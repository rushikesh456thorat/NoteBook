


export const execCommand = (command, arg) => {
  
  document.getElementById("textEditor").focus();

  console.log("execCommand", command, arg);
  
  
  document.execCommand(command, false, arg);

  
  
};
export const toggleStyles = (command) => {

  console.log("toggleStyles", command);
  
  document.getElementById("textEditor").focus();
  document.execCommand(command, false, null);
  
};
export const Zoomfunc = (value) => {

  
  
  document.getElementById("notebook_Page").style.zoom = value/100
  
};
export const toggleContentEditableProperty = (bool) =>{

  document.getElementById("textEditor").contentEditable = bool

}
export const FullScreenFunc = () => {
  var elem = document.getElementById("notebook_Page")

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
export const pasteContent = async () => {
  try {
    const clipboardData = await navigator.clipboard.readText();
    const textField = document.getElementById("textEditor");
    textField.focus();
    document.execCommand("insertText", false, clipboardData);
  } catch (error) {
    console.error("Failed to paste content:", error);
  }
};







