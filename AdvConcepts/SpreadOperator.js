function add(a,b){
    return a+b;
}

var myVal = [5,4];
console.log(add(myVal)); 
console.log(add(...myVal)); // spread operator


function sum(...args){ //Rest operator
    var sum = 0 ; 
    for(const arg of args){
        sum +=arg;
    }
    return sum;
}

console.log(sum(2,4,5)); 
console.log(sum(9,5,3,4,2,6,8,7,7,9)); 