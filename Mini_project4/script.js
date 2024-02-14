function getMessage(){
    var message = document.getElementById("message-input");

    console.log(message.value);

    document.getElementById("messageOutput").innerHTML = message.value;
}