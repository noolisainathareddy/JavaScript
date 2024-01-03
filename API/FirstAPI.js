var obj;
fetch("https://api.chucknorris.io/jokes/random")
.then((response) => {
    console.log("Respose" , response.json());
   return response.json();
})
.then((data) => {
    console.log(data.value);
    return data;
})
.then((data) => {
    console.log(data.id);
})
.catch();

