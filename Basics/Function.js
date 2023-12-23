function sayHello() {
    return "Hello Wold!";
}

var greetings = sayHello();

console.log(greetings);
console.log(sayHello());


function userRole(name, role){

    switch(role){
        case "Admin" : 
            return `${name} is having admin access`;
            break; 
        case "guest" : 
            return `${name} is having guest role`;
            break;
        default:
            return `${name} is on trail version`;
            break; 
    }
}

console.log(userRole("sai", "guest"));