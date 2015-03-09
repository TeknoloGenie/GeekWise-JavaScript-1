var users = [];
var isLoggedIn = false;

function User(id, username, password){
    this.id = id;
    this.username = username;
    this.password = password;
}

function create(){
    var newName = document.getElementById("newName").value;
    var newPWord = document.getElementById("newPword").value;
    var id = users.length;
    var myUser = new User(id, newName, newPWord);
    users.push(myUser);
    alert('user created');
}

function login(){
    var uName = document.getElementById("uName").value;
    var pWord = document.getElementById("pWord").value;
    if(!isLoggedIn) {

    }else{
        alert('log out first');
    }
}
