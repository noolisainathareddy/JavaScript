const one = () => {
    console.log("I am one"); 
}


const two = () => {
    setTimeout(() => {
        console.log("woooohooo");
    }, 3000)
    console.log("I am two"); 
}

const three = () => {
    console.log("I am three"); 
}

one();
two();
three();