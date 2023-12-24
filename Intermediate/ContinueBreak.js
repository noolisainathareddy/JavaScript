const nums = [100,30,60,70,30,40]; 

// for(var i = 0; i < nums.length;i++){
//     if(nums[i] < 60) continue;
//     console.log(nums[i]);
// }


for(var i = 0; i < nums.length;i++){
    if(nums[i] < 60) break;
    console.log(nums[i]);
}

