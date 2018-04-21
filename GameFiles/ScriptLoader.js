jQuery.loadScript = function(url,callback) {
  jQuery.loadScript = function (url, callback) {
  jQuery.ajax({
      url: url,
      dataType: 'script',
      success: callback,
      async: true
  });
}

function loadScriptArray(urlNumber)
{
  window.alert("LoadGameScripts");
  var scriptUrlArray = ["./GameFiles/InputHandler.js"];
  if(urlNumber <= scriptUrlArray.length)
  {
    if (typeof someObject == 'undefined') $.loadScript('url_to_someScript.js', function(){
      loadGameScripts(urlNumber + 1);
    });
  }
  return;
}

window.onload = function loadGameScripts(urlNumber)
{
  window.alert("scripts");
  loadScriptArray(0);
}
