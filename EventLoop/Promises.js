const one = () => {
    return "I am one";
};

// const two = async () => {
//     setTimeout(() => {
//         return "I am two";
//     },3000);
// };

const two = () =>{
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve("I am two");
        },3000)
    });
};

const three = () => {
    return "I am three";
};


const callMe = async () => {
    
    var valOne = one(); 
    console.log(valOne);

    var valTwo = await two(); 
    console.log(valTwo);

    var valThree = three(); 
    console.log(valThree);
}
