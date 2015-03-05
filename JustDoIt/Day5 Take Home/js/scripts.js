//Create an object that has some default data, a few properties called 'name' and 'isFriend'. The isFriend key should
//default to false.
//Create a function called addFriend that will ask for your friends name, just a simple full name, or single first
//name is fine. Set the name on the 'friend' object then pushed that object up to the array. However, after setting
//the new name, add another property to the friend object called 'id' that is incremented every time a new friend is
//pushed into the JSON array.
var friendList = [];
var friendCount = friendList.length;

function addFriend(){
    var friend ={
        name : prompt('what is your friends name?'),
        isFriend : 'false',
        id: friendCount
    };

    //push this to an array?
    friendList.push(friend);
    friendCount = friendList.length;
}
