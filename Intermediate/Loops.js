const states = [
    "AndhraPradesh", 
    "Telangana",
    "Karnataka",
    "Kerala"
];

// forEach loop
// states.forEach((s) => (console.log(s)));

// states.forEach(
//     function(e){
//         console.log(e);
//     }
// );

    
// forOf loop

const names = ["FcaeBook", "Instagram", "YouTube", "Amazon", "NetFlix"]; 

// for(const n of names){
//     console.log(n);
// }

//for in loop

const symbols = {
    Yt : "youtibe",
    Ig : "Instagram",
    Nt : "Netflix",
    Tw : "Twitter"
}


for(const n in symbols){
    console.log(`Key is : ${n} and value is ${symbols[n]}`);
}