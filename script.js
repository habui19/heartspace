let greetings = [
    'Lại đây, kể cho ba mẹ nghe xem có chuyện gì'
];

let acceptantMessages = [
    'Con có lý do chính đáng để cảm thấy như vậy',
    'Mẹ thương',
    'Mẹ luôn ở đây với con, cùng con vượt qua tất cả',
    'Giờ thì con hãy để những cảm xúc này đi nhé',
    'Mẹ yêu con',
];

let learn = [
    'Con rút ra được gì từ trải nghiệm này?'
];

let goodbye = [
    'Ba mẹ rất tự hào về con',
    'Hãy vững tin bước tiếp trên hành trình của mình con nhé',
    'Khi nào mệt mỏi quá thì về nhà với ba mẹ',
    'Ba mẹ luôn ở trong trái tim con, hỗ trợ khi con cần',
    'Ba mẹ yêu con'
];

const text = document.querySelector(".heartspace");
const splitText = $('.heartspace').text().split("");

$('.heartspace').text("");
for (let i = 0; i < splitText.length; i++) {
    document.querySelector('.heartspace').innerHTML += `<span>${splitText[i]}</span>`;
}

let char = 0;
let timer = setInterval(onTick, 100);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === splitText.length) {
        clearInterval(timer);
        $('.description').fadeOut(500, function () {
            $('.description').text("Về nhà với trái tim").fadeIn(1000);
        });
        return;
    }
}


function disappear() {
    $('.firstStep > .thoughts').animate({
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
                console.log('working')
            });
        } else {
            clearTimeout(messageInterval);
        }
    }, 3000);
}


function enableButton(buttonId) {
    $('button').prop('disabled', true);
    $('button').removeClass('button');
    $(buttonId).prop('disabled', false);
    $(buttonId).attr('class', 'button');
}

function startFunc() {
    $('.hidethoughts').attr('class', 'thoughts');
    $('.welcome').addClass('hide');
    $('.firstStep').removeClass('hide');
    displayMessages(greetings);
    $('.thoughts').animate({
        opacity: '100'
    }, 1000);
    let nextButton = setTimeout(function () {
        enableButton('#letgo');
    }, 5000);
    document.querySelector('.audio').play();
}

function letGo() {
    $('.insideMessage').text("Mẹ hiểu").fadeIn(600);
    let display = setTimeout(function () {
        displayMessages(acceptantMessages);
    }, 100);
    disappear();
    $('#letgo').addClass('hide');
    let nextButton = setTimeout(function () {
        enableButton('#next');
    }, 17000);

}

function nextStep() {
    $('.firstStep').addClass('hide');
    $('.nextStep').removeClass('hide');
    $('.insideMessage').text(learn[0]);
    enableButton('#done1');
}

function finalStep() {
    $('.insideMessage').text("Con làm tốt lắm").fadeIn(600);
    $('button').prop('disabled', true);
    let display = setTimeout(function () {
        displayMessages(goodbye);
    }, 100);
    $('#done1').addClass('hide');

    let nextButton = setTimeout(function () {
        enableButton('#done2');
    }, 20000);

}

function restart() {
    $('.nextStep').addClass('hide');
    $('.restart').removeClass('hide');
    $('.insideMessage').text("Thank you for using HeartSpace. Do you want you to start again?").fadeIn(1000);
    enableButton('#restart');
}