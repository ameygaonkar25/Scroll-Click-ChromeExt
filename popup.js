document.addEventListener("DOMContentLoaded", function () {
    var scrollButton = document.getElementById("scrollButton");
    scrollButton.addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "scrollAndClick" });
      });
    });
  });
