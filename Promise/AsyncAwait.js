async function test(){
    let result1 = await getNum(20,false); 
    return result1; 
}


function getNum(value, error){
    return new Promise((resolve, reject) => {
        if(!error){
              resolve(value + 10);
        }
        else{
            reject("Something went wrong"); 
        }
    })
}


test().then((result) => {console.log(result)}); 