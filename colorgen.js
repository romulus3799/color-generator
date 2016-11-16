//constants
var brightLimit = 200;
var bright = 120;

var remainders = "";
var quotient = 1;
var remainder = 0;

var rDec = 0;
var gDec = 0;
var bDec = 0;

var redValue = "255";
var greenValue = "255";
var blueValue = "255";

function randomColorz(){
    try{
        document.getElementById("rInput").value = ""+Math.floor(Math.random() * 226);
        document.getElementById("gInput").value = ""+Math.floor(Math.random() * 226);
        document.getElementById("bInput").value = ""+Math.floor(Math.random() * 226);
    }catch(err){
        document.getElementById("outputMessage").innerHTML = err.message;
    }
    convertInputs();
}

function convertInputs(){
    try{
        rDec = parseInt(document.getElementById("rInput").value);
        gDec = parseInt(document.getElementById("gInput").value);
        bDec = parseInt(document.getElementById("bInput").value);

        redValue = ""+decToHex(rDec);
        greenValue = ""+decToHex(gDec);
        blueValue = ""+decToHex(bDec);

        document.getElementById("rToHex").innerHTML = redValue;
        document.getElementById("gToHex").innerHTML = greenValue;
        document.getElementById("bToHex").innerHTML = blueValue;

        var newColor = "#"+redValue+greenValue+blueValue;

        document.getElementById("outputMessage").innerHTML = newColor;
        document.body.style.backgroundColor = newColor;

        var newColor2 = "#";
        if(rDec < brightLimit && gDec < brightLimit && bDec < brightLimit){
            newColor2 = "#"+decToHex(brighten(rDec))+decToHex(brighten(gDec))+decToHex(brighten(bDec));
        }
        else{
            newColor2 = "#"+decToHex(darken(rDec))+decToHex(darken(gDec))+decToHex(darken(bDec));
        }

        document.getElementById("divText").style.color = newColor2;

        document.getElementById("rInput").style.color = newColor2;
        document.getElementById("gInput").style.color = newColor2;
        document.getElementById("bInput").style.color = newColor2;

        document.getElementById("rInput").style.backgroundColor = newColor;
        document.getElementById("gInput").style.backgroundColor = newColor;
        document.getElementById("bInput").style.backgroundColor = newColor;
        document.getElementById("randomColor").style.color = newColor;

        document.getElementById("rInput").style.borderColor = newColor2;
        document.getElementById("gInput").style.borderColor = newColor2;
        document.getElementById("bInput").style.borderColor = newColor2;
        document.getElementById("randomColor").style.backgroundColor = newColor2;
        document.getElementById("randomColor").style.borderColor = newColor2;


    } catch (err) {
        document.getElementById("outputMessage").innerHTML = err.message;
    }
    setTimeout(convertInputs,100);
}
function brighten(a){
    if(a+bright > 255){
        return 255;
    }
    return a+bright;
}
function darken(a){
    return a-bright;
}
/*function decToHex(decNum){
    return decNum.toString(16);
}*/
function decToHex(decNum){
    var remainders = "";
    while(parseInt(decNum) > 0){
        remainders = "" + (decNum%16).toString(16) + remainders;
        decNum = parseInt(decNum/16);
    }
    while(remainders.length < 2){
        remainders = "0"+remainders;
    }
    while(remainders.length > 2){
        remainders = remainders.substring(1);
    }

    return remainders.toUpperCase();
}
convertInputs();