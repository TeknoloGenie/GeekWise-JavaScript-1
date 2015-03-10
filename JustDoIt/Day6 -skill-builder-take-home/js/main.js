var myUser;

function User(username, password){
    this.username = username;
    this.password = password;
}

function create(){
    var username = document.getElementById("newName").value;
    var password = document.getElementById("newPword").value;
    myUser = new User(username, password);
}

function login(){
    var uName = document.getElementById("uName").value;
    var pWord = document.getElementById("pWord").value;
    if(myUser.username === uName && myUser.password === pWord){
        alert('good job');
    }else{
        alert('looks like something\'s wrong');
    }
}

