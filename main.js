function add() {
   var v1 = getValue("1") + 0;    
   var v2 = getValue("2") + 0;    
   setAnswer(v1 + v2);
}

function multiply() {
    var v1 = getValue("1");    
    var v2 = getValue("2");    
    setAnswer(v1 * v2);
 }

function divide() {
    var v1 = getValue("1");    
    var v2 = getValue("2");    
    setAnswer(v1 / v2);
 }

function subtract() {
    var v1 = getValue("1");    
    var v2 = getValue("2");    
    setAnswer(v1 - v2);
 }

function getValue(number) {
  return Number(document.getElementById("value"+number).value);
}

function setAnswer(answer) {
    document.getElementById("answer").textContent = answer;

}