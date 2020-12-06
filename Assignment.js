//1
function feetToMile(feet){
    var mile;
    mile = feet * 0.00018939393;
    return mile; 
}

var feet = feetToMile(250);
console.log(feet); 
//2
function woodCalculator(chair, table , bed){
    var totalWood;
    totalWood = chair * 1 + table * 3 + bed * 5;
    return totalWood;
}

var result = woodCalculator(3,5,8);
console.log(result);
//3
function brickCalculator(tala){
    if(tala <= 10){
        return 15*1000 * tala;
    }
    if(tala >= 11 && tala <=20){
        return 12*1000 * tala;
    }
    else{
        return 10*1000*tala;
    }
}

var totalBrick = brickCalculator(28);
console.log(totalBrick);
//4
function tinyFriend(friends){
    var min = Math.min.apply(Math, friends.map(function(str) { return str.length; }));
    return min;
}

var friends = ['arefin' , 'rahat' ,'Muraad','Sultaanul','ahm'];
var result = tinyFriend(friends);
console.log(result);


