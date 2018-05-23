chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "courseCounts") {
        var lists  = $('.courses-list__item');
        console.log(lists.length);
        alert(lists.length);
    }

})
chrome.runtime.sendMessage({ action: "show" })