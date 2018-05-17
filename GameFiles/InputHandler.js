function GetCommandList()
{
  window.alert("CommandList");
  return "Do I really Care?";
}

function HandleValidInput(playerInputText)
{
  var responseText = "The game looks at you puzzled, not sure how to respond to this mysterious command.";

  var commandWordLength = playerInputText.indexOf(' ');
  var commandAction = "";
  var commandContent = "";
  if(commandWordLength > 0)
  {
    playerInputText.slice(0,commandWordLength);
    commandContent = playerInputText.slice(commandWordLength, playerInputText.length);
  }
  else {
    commandAction = playerInputText
  }

  switch(commandAction)
  {
    case "move":
    {
      responseText = PlayerMoved(commandContent);
      break;
    }
    case "look":
    {
      responseText = PlayerLooked(commandContent);
      break;
    }
    case "take":
    case "grab":
    {
      responseText = ObjectTaken(commandContent);
      break;
    }
    case "destroy":
    {
      responseText = ObjectDestroyed(commandContent);
      break;
    }
  }

  return(responseText);
}
