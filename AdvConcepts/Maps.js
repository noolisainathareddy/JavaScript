var myMap = new Map(); 

myMap.set(0, "zero");
myMap.set(1, "one");
myMap.set(2, "two");
myMap.set(3, "three");
myMap.set(4, "four");
myMap.set(5, "five");
myMap.set(6, "six");
myMap.set(7, "seven");

// console.log(myMap);

// for(let keys of myMap.keys()){
//     console.log(`Key is ${keys} and value is ${myMap.get(keys)}`); 
// }

// for(let values of myMap.values()){
//     console.log(`value is ${values}`);
// }

for(let [key, value] of myMap){
    console.log(` key is ${key} and value is ${value}`)
}

myMap.forEach((v,k) => console.log(`vlaue is ${v} and key is ${k}`));
