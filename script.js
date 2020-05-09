let greetings = [
    'Lại đây, kể cho ba mẹ nghe xem có chuyện gì'
];

let acceptantMessages = ['Mẹ hiểu',
    'Con có lý do chính đáng để cảm thấy như vậy',
    'Mẹ thương',
    'Mẹ luôn ở đây với con',
    'Giờ thì hãy để những cảm xúc này đi nhé',
    'Mẹ yêu con',
];

let learn = [
    'Con rút ra được gì từ trải nghiệm này?'
];

let goodbye = [
    'Con làm tốt lắm',
    'Ba mẹ rất tự hào về con',
    'Hãy vững tin bước tiếp trên hành trình của mình con nhé',
    'Nếu mệt thì về đây nghỉ với ba mẹ',
    'Ba mẹ luôn ở trong trái tim con, hỗ trợ khi con cần',
    'Ba mẹ yêu con'
];


function disappear() {
    $('.thoughts').animate({
        opacity: '0'
    }, 20000);
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
    }, 3000);
}

function nextStep() {
    $('.insideMessage').text(learn[0]);
    $('textarea').val('');
    $('.thoughts').animate({
        opacity: '100'
    }, 1000);
    let remove = setTimeout(function () {
        $('#next').remove();
    }, 1000)
    let newButton = "<button class='button' id='done' onclick='finalStep();'>Done</button>";
    let nextStep = setTimeout(function () {
        $('.page-main').append(newButton);
    }, 15000)
}

function finalStep() {
    displayMessages(goodbye);
}

$(window).on("load", function () {
    displayMessages(greetings);
    $('.thoughts').animate({
        opacity: '100'
    }, 150000);
})

$('textarea').on("change", function () {
    document.querySelector('.audio').play();
})

$('#letgo').on("click", function () {
    displayMessages(acceptantMessages);
    disappear();
    let remove = setTimeout(function () {
        $('#letgo').remove();
    }, 1000)
    let newButton = "<button class='button' id='next' onclick='nextStep();'>Next</button>";
    let nextStep = setTimeout(function () {
        $('.page-main').append(newButton);
    }, 25000)
})