//Create two static strings, password and username assign them to whatever you want
var password = 'secret';
var username = 'user';
var location;

//Create a function called authenticate that will accept two parameters, these parameters will be the users username and
//password that you will prompt them to enter.

function authenticate(password1 , username1){
        if(username1 === username && password1 === password){
            alert('thank you');
            location = 'dashboard.html'
        }else if(username1 === username && password1 !== password){
            alert('Incorrect password');
        }else if(username1 !== username && password1 === password){
            alert('incorrect username');
        }else{
            alert('Incorrect username and password')
        }
}

//Create a function called login that will prompt the user for both username and password and once the user has entered in
//both username and password invoke your authenticate function don't forget to pass in the required parameters

function login(){
    var user = prompt('What is your username?');
    var pWord = prompt('What is your password?');

    authenticate(pWord , user);
}


//ow lets go back to your authenticate function and create the logic inside of it. The logic should do the following:
//Check that the user entered in the correct credentials that you assigned to those static variables.
//If the user enters them incorrectly alert them that it failed. If they entered in the proper credentials then take
//them to your dashboard page.

function init(){
    document.getElementById('login').onclick=function(){login()};
}
window.onload=init;