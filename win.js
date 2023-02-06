// Plug this into dev console

const click1 = () => {document.getElementsByClassName("key-n")[0].click()}
const click2 = () => {document.getElementsByClassName("key-n")[1].click()}
const click3 = () => {document.getElementsByClassName("key-n")[2].click()}
const click4 = () => {document.getElementsByClassName("key-n")[3].click()}
const click5 = () => {document.getElementsByClassName("key-n")[4].click()}
const click6 = () => {document.getElementsByClassName("key-n")[5].click()}
const click7 = () => {document.getElementsByClassName("key-n")[6].click()}
const click8 = () => {document.getElementsByClassName("key-n")[7].click()}
const click9 = () => {document.getElementsByClassName("key-n")[8].click()}
const click0 = () => {document.getElementsByClassName("key-n")[9].click()}
const clickEnt = () => {document.getElementsByClassName("key-ent")[0].click()}



const win = () => {
    if (document.getElementsByClassName("mat-button-wrapper")[1].outerText == " PLAY AGAIN" && document.getElementsByClassName("mat-button-wrapper")[0].outerText == "GAME HOME") {
        document.getElementsByClassName("mat-button-wrapper")[1].click()
    }
// Some loop must go here, while loop freezes site
var num1 = document.getElementsByClassName("notranslate height-100 noselect current")[0].outerText.split(' ')[0]
var num2 = document.getElementsByClassName("notranslate height-100 noselect current")[0].outerText.split(' ')[2]
if(document.getElementsByClassName("notranslate height-100 noselect current")[0].outerText.split(' ')[1] == '×'){
  var total = parseInt(num1) * parseInt(num2);
} else{
  var total = parseInt(num1) / parseInt(num2);
}


var digits = total.toString().split('');
for (var i = 0; i < digits.length; i++) {
  var n = digits[i];
  if(n == '1'){click1()}
  else if(n == '2'){click2()}
  else if(n == '3'){click3()}
  else if(n == '4'){click4()}
  else if(n == '5'){click5()}
  else if(n == '6'){click6()}
  else if(n == '7'){click7()}
  else if(n == '8'){click8()}
  else if(n == '9'){click9()}
  else if(n == '0'){click0()}
}
clickEnt();
}  

setInterval(win, 225);
