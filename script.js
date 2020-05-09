let greetings = [
    'Lại đây nào',
    'Kể cho ba mẹ nghe xem có chuyện gì'
];

let acceptantMessages = ['Ừ mẹ hiểu rồi',
    'Con có lý do chính đáng để cảm thấy như vậy',
    'Mọi cảm xúc đều đáng trân trọng',
    'Rồi nó sẽ qua thôi',
    'Mẹ luôn ở đây với con',
    'Mẹ yêu con',
];


function disappear() {
    $('#block').animate({
        opacity: '0'
    }, 5000);
    // $('.insideMessage').fadeOut(1000);
}

function displayMessages(messages) {
    let i = 0;

    messageInterval = setInterval(function () {
        const newText = messages[i];
        i++;
        if (i <= messages.length) {
            $('.insideMessage').fadeOut(500, function () {
                $('.insideMessage').text(newText).fadeIn(500);
            });
        } else {
            clearTimeout(messageInterval);
        }
    }, 4700);
}

$(window).on("load", function () {
    displayMessages(greetings);

})

$('#start').on("click", function () {
    displayMessages(acceptantMessages);
    disappear();
})