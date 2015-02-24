var username = prompt('What would you like your username to be?'),
    password = prompt('Please input a password');

if (username && password){
    alert('Welcome ' + username + '!');
}

var verifyPassword = prompt('Welcome back ' + username + '. Please input your password');

if (verifyPassword === password) {
    alert('Authentication passed! You may proceed!');
} else {
    alert('Authentication failed, try again.');
}