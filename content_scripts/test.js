function getLinks() {
     	//   var links = document.querySelectorAll("a");
     	//   var results = [];
     	//   var seenLinks = {};
     	//   for (var i  = 0; i < links.length; ++i) {
     	//     var text = links[i].textContent;
     	//     if (text.length > 100)
     	//       text = text.substring(0, 100) + "...";
     	//     var link = links[i].href.replace(/(.*)#?/, "$1");
     	//     if (seenLinks[link])
     	//       continue;
     	//     seenLinks[link] = 1;
     	//     results.push({ href: link, text: text });
        //    }
           console.log("result")
     	//   return results;
     	};
     	
     	chrome.browserAction.onClicked.addListener(function(request, sender, sendResponse) {
     	  sendResponse(getLinks());
     	});