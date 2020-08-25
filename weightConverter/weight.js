//at first hide the result section:
document.getElementById("result").style.visibility="hidden";

//when you type (input event e) execute function(e):
document.getElementById("pounds").addEventListener("input",function(e){
    document.getElementById("result").style.visibility="visible";
    //target event property gets the element that triggered a specific event.
    //get the input event value:
    let poundinput=e.target.value;

    //convert to kilograms:
    document.getElementById("kg").innerHTML=poundinput*0.45359237;
    //convert to grams:
    document.getElementById("g").innerHTML=poundinput*453.59237;


})