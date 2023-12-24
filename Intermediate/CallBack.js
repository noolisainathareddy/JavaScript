var isEven =  (e) => {
    return  e % 2 ===0;
}

console.log(isEven(4));


var result = [2,3,6,8].every(isEven);

console.log(result); 


const  nums = [10,20,50,60,90,100]; 

const iterate = nums.filter((e) => {return e > 40});

console.log(iterate);

