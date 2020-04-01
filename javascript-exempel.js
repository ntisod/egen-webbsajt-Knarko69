function authorDialog() {
    alert("Knarko har gjort sidan år 2020");
}
function edit() {
    document.getElementById("rubrik").innerHTML = "Zarko";
    document.getElementById("stycketext").style.backgroundColor = "#aaf";
}
var pic = "Ocaenman.png";
function change() {
  if (pic == "Ocaenman.png") {
    pic = "ForzaHorizon3.jpg";
  } else {
    pic = "Ocaenman.png";
  }

document.getElementById("myimage").src= pic;
}
function display(){
    var x, text ;
    
x = document.getElementById("fname").value;

text = "Hey"+ x +"!";
alert(text);

}