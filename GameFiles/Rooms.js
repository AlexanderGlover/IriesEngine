var introRoom =  {
  number : 1,
  north : "", south : "", east : "", west : "",
  look : "What appears to be that main room of an inn lies before you. In the far wall lies a hearth, surrounded by patreons huddling close to absorb any warmth that may waft their way. To the north lies a starecase, appearing old and creaky, presumably leading up to the rooms the innkeeper mentioned. To the south the bar, which is suprisingly empty with only one or two men sitting upon makeshift stools."
};

function RoomLook(roomName)
{
  window.alert("Test");
  return(roomName.look);
}
