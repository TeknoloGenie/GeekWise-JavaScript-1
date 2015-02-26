//Create an empty array called family
var family = [];

//Create a for loop that will ask (prompt) the user to enter a family members name 5 times.

for(i=0; i<5; i++){
    var name = prompt('Please enter a family members name:')
    family.push(name);
    console.log(family);
}

// In the end you will have prompted yourself 5 times for a friends name.
// Each time a friends name is entered you should push that value into the empty friends array you created.
// Thus creating an array of 5 friends.
// Prompt for your families last name

var lastName = prompt('Please enter your family\'s Last Name:');

//After you have created the family array you will loop over each one of your family members and alert their full name.

for(i=0; i<family.length; i++){
    alert(family[i] + ' ' + lastName);
    console.log(family[i] + ' ' + lastName);
}