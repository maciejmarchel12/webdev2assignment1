//length
var txt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit."
var sln = txt.length
document.getElementById("length").innerHTML = sln

//posistion
var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit."
var pos = str.indexOf("amet")
document.getElementById("pos").innerHTML = pos

//Slicing
var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit."
var res = str.slice(7,13,22)
document.getElementById("Slice").innerHTML = res

//Replace
function Rep() {
    var str = document.getElementById("strReplace").innerHTML
    let txt = prompt("Enter a new String","")
    document.getElementById("strReplace").innerHTML = txt
  }

//To Uppercase 
function uppCase() {
    var text = document.getElementById("upperCase").innerHTML
    document.getElementById("upperCase").innerHTML = text.toUpperCase()
  }

//To Lowercase
function lowCase() {
    var text = document.getElementById("lowerCase").innerHTML
    document.getElementById("lowerCase").innerHTML = text.toLowerCase()
}

//Array Split
function arraySplit() {
    var str = "Red,Blue,Green,Black,White";
    var arr = str.split(",");
    var text = "";
    var i;
    for (i = 0; i < arr.length; i++) {
    text += arr[i] + "<br>"
    }
    document.getElementById("ArraySplit").innerHTML = text;
  }



    /*
    var str = "Red,Blue,Green,Black,White";
    var arr = str.split(",");
    document.getElementById("ArraySplit").innerHTML = arr[0];
    */