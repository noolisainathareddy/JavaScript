var index=0; 
var count =0;

function changeColors(){
    var colors = ["red", "blue","orange","green", "purple"];
    var textColor = ["blue","red","black"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];
    document.getElementsByTagName("h2")[0].style.color = textColor[count++];

    if(index > colors.length -1){
        index=0;
    }

    if(count > textColor.length -1){
        count =0;
    }

}