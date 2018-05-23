

// let btn = document.querySelector('.ghoul');
// btn.addEventListener('click', function () {
//     console.log('ahmed');
//     console.log("test log entry");
// });
chrome.storage.sync.get(['total', 'goal'], function (items) {
    $('#total').text(items.total);
    $('#goal').text(items.goal);
})

$(function () {




    $('#count').click(function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "courseCounts" })
        })


    })

    $('#btnSubmit').click(function () {
        chrome.storage.sync.get(['total', 'goal'], function (items) {
            var newTotal = 0;
            if (items.total) {
                newTotal += parseInt(items.total)
            }
            var amount = $('#title').val();
            if (amount) {
                newTotal += parseInt(amount)
            }
            chrome.storage.sync.set({ 'total': newTotal })
            $('#total').text(newTotal);
            $('#title').val('');

            if (newTotal >= items.goal) {
                var opt = {
                    type: 'basic',
                    iconUrl: 'notif.png',
                    title: 'Don\'t forget!',
                    message: 'You reached your goal'
                }
                chrome.notifications.create('goalReached', opt, function () { })
            }
        })
    })
})