var user = {
    username: '',
    password: ''
}

function create(){
    user.username = prompt('Please enter a username');
    user.password = prompt('please enter a password');
    alert('thank you');
}

function login(){
    var username = prompt('please enter your username');
    var password = prompt('please enter your password');
    if(username === user.username && password == user.password){
        alert('Thank you for logging in');
    }else{
        alert ('incorrect username or password');
    }
}

function something() {
    debugger
}
