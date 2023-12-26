const red = document.querySelector(".color-red");
const cyan = document.querySelector(".color-cyan");
const violet = document.querySelector(".color-violet");
const orange = document.querySelector(".color-orange");
const pink = document.querySelector(".color-pink");
const subdiv = document.querySelector(".subdiv");

var getBGcolor = (elementName) => {
    return window.getComputedStyle(elementName).backgroundColor;
}
var getPinkColor = getBGcolor(pink);
var getCyanColor = getBGcolor(cyan);
var getVioletColor = getBGcolor(violet);
var getOrangeColor = getBGcolor(orange);
var getRedColor = getBGcolor(red);
var count = 1;
var colorPointer = (pickColor , selectColor) => {
    pickColor.addEventListener('mouseenter', () => {
        subdiv.getElementsByTagName('h1')[0].innerText = count;
        count++;
        subdiv.style.backgroundColor = selectColor;
        console.log("Enter into event listner");
    })
}


colorPointer(pink,getPinkColor);
colorPointer(cyan,getCyanColor);
colorPointer(orange,getCyanColor);
colorPointer(red,getRedColor);
colorPointer(violet,getVioletColor); 

