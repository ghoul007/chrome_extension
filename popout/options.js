

// let btn = document.querySelector('.ghoul');
// btn.addEventListener('click', function () {
//     console.log('ahmed');
//     console.log("test log entry");
// });

$(function () {
    chrome.storage.sync.get('goal', function (items) {
        $('#goal').text(items.total);
    })


    $('#saveBTN').click(function () {
        var goal = $('#goal').val();
        if (goal) {
            chrome.storage.sync.set({ 'goal': goal }, function () {
                close();
            })
        }
    })


    $('#resetBTN').click(function () {

        chrome.storage.sync.set({ 'total': 0 }, function () {

            var opt = {
                    type: 'basic',
                    iconUrl: 'notif.png',
                    title: 'Don\'t forget!',
                    message: 'Test Notification for ghoul developer'
            }
        
            chrome.notifications.create('reset', opt, function (){})

        })
    })
})