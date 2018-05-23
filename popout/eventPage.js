
/**
 * Menu Item
 */
var menuItem = {
    "id": "addGhoul",
    "title": "addGhoul",
    "contexts": ['selection']
}


chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function (clickDaa) {
    if (clickDaa.menuItemId == "addGhoul" && clickDaa.selectionText) {
        var intRegex = /^\d+$/;
        if (intRegex.test(clickDaa.selectionText)) {
            chrome.storage.sync.get('total', function (items) {
                var newTotal = 0;
                if (items.total) {
                    newTotal += parseInt(items.total)
                }
                newTotal += parseInt(clickDaa.selectionText);
                chrome.storage.sync.set({ 'total': newTotal })
            })
        }
    }
})

/**
 * Storage
 */
chrome.storage.onChanged.addListener(function (changes) {
    chrome.browserAction.setBadgeText({ 'text': changes.total.newValue.toString() })
})


/**
 * Page Action
 */



chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "show") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.pageAction.show(tabs[0].id)
        })
    }
})