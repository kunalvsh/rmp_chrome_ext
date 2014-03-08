// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function() {
  var context = "selection";
  var title = "Search RMP for Selected Text";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                         "id": "context" + context});  
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
  var sText = info.selectionText;
  var rateMyProf1Url = "http://www.ratemyprofessors.com/SelectTeacher.jsp?searchName=";
  var rateMyProf2Url = "&search_submit1=Search&sid=1381";
  var url = rateMyProf1Url + encodeURIComponent(sText) + rateMyProf2Url;  
  window.open(url, '_blank');
};