chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "scrollAndClick") {
        console.log("Received scrollAndClick action");
      window.scrollTo(0, document.body.scrollHeight);
  
      var seeMoreLinks = document.querySelectorAll("a.see-more-link");
    //   var seeMoreLinks = document.querySelectorAll("span:contains('see more')");
      for (var i = 0; i < seeMoreLinks.length; i++) {
        seeMoreLinks[i].click();
      }
    }
  });
