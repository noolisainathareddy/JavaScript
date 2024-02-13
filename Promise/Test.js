function step1(value, error){
    return new Promise((resolve, reject) => {
        if(!error){
            resolve(value + 10)
        }
        else{
            reject("Something went wrong in Step 1");
        }
    });
}

function step2(value, error){
    return new Promise((resolve, reject) => {
        if(!error){
            resolve(value + 10);
        }
        else{
            reject("Something went wrong in Step 2");
        }
    });
}

function step3(value, error){
    return new Promise((resolve, reject) => {
        if(!error){
            resolve(value + 10);
        }
        else{
            reject("Something went wrong in Step 2");
        }
    });
}

step1(10, false)
    .then((result) => step2(result, false))
    .then((result) => step3(result, false))
    .then((result) => console.log(result)); 