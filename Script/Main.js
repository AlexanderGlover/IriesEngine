//Imports
import {testExport} from "../GameFiles/ScriptLoader.js";

//Globals
var input = document.getElementById("playerInput");

//Listeners
input.addEventListener("keyup",
  function(event)
  {
    event.preventDefault();
    if(event.keyCode === 13) {
      HandleInput();
    }
  }
);


//Functions
function CheckPlayerCommand(playerInputText) {
  var responseText = "The game looks at you puzzled, not sure how to respond to this mysterious command.";
  switch(playerInputText)
  {
    case "Secret Command That Does Nothing":
    {
      responseText = "testing complete";
      break;
    }
    case "!help":
    {
      responseText = GetCommandList();
    }
  }
  return responseText;
}

function HandleInput()
{
  //Components
  var consoleObj = document.getElementById("console");
  var consoleTextObj = document.getElementById("consoleText");
  var inputObj = document.getElementById("playerInput");

  var currentConsoleText = consoleTextObj.innerHTML;
  var playerInputText = inputObj.value;

  //Reset Input Field
  inputObj.value = "";

  //Dont execute if no player input
  if(playerInputText == "")
  {
    return;
  }
  else if(playerInputText == "clear")
  {
    consoleTextObj.innerHTML = "";

    return;
  }

  //Check if valid command
  var responseText = CheckPlayerCommand(playerInputText);
  consoleTextObj.innerHTML = currentConsoleText + "</br><p1>" + playerInputText + "</p1></br>" + responseText;
  consoleObj.scrollTop = consoleObj.scrollHeight;
}
