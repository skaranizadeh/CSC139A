// show alert and change the font size in the text area to 24. 
function makeTextBigger() {
  alert('Text is bigger!')
  let text = document.getElementById("textArea");
  text.style.fontSize = "4em";
  text.style.backgroundColor ="lightblue"
}

//style the text FancyShmancy
function styleText() {
  alert("Text is FacnyShmancy now");
  var textArea = document.getElementById("textArea");
  textArea.style.fontWeight =  "bold";
  textArea.style.color = "blue";
  textArea.style.textDecoration = "underline";
}

//change the style to normal
function resetStyleText(){
  alert("Back to BoringBetty");
  var textArea = document.getElementById("textArea");
  textArea.style.fontWeight = "normal";
  textArea.style.color = "black";
  textArea.style.textDecoration = "none";

}

// captlaize and add -Moo to the end of each sentence.
function mooText() {
  var textArea = document.getElementById("textArea");
  var str = textArea.value;
  str = str.toUpperCase();

  var sentences = str.split(".");
  textArea.value = sentences.join(" -Moo.");
}

