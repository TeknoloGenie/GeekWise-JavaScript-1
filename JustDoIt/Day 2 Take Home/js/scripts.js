function isMultipleThree(num){
    return num % 3 === 0;
}

function isMultipleFive(num){
    if(isNaN(num) == false && num % 5 == 0){
        return true;
    }else{
        return false;
    }
}

for(var i=0;i<101;i++){
    if ( isMultipleThree(i) && isMultipleFive(i) ){
        console.log('FIZZBUZZ');
    } else if(isMultipleThree(i)){
        console.log('Fizz');
    } else if(isMultipleFive(i)){
        console.log('Buzz');
    } else{
        console.log(i);
    }
}

var obj = {
    name: "Joe",
    age: 35,
    phone: ''
};