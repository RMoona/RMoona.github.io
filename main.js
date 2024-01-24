// index.html page
$('.carousel').carousel({
    interval: 2000,
    wrap: true
})


// chat.html

$('#send-message').click(function () {
    var el = $('#new-message');
    var newMessage = el.val();
    if (newMessage.trim() == '') {
        alert('The message is empty');
        return;
    }
    var newChatMessage = $('<li>');
    newChatMessage.html(newMessage);
    var listEl = $('#chat-text');
    var chatUser = $('#username');
    var user = chatUser.val();
    // listEl.append(user + " " + new Date($.now()));
    listEl.append("<b>" + user + "</b>" + " " + new Date($.now()));
    listEl.append(newChatMessage);
    el.val('');
});

// register.html page

$('#loginForm').submit(function () {
    var inputPass = $('#password').val();
    var confirmPass = $('#confpass').val();
    var requiredPass = "/^([a-zA-Z0-9]{8,})$/";
    if (inputPass != confirmPass) {
        $('#error').text('Passwords do not match!');
        return false;
    }
    else {
        $('#error').text('');
        return true;
    }
})