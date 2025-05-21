
const display = document.getElementById("display");

function appendTODisplay(input)
{
    display.value += input;
}

function clearDisplay()
{
 display.value="";
}

function calculate()
{
    try{
    display.value= eval(display.value);
    }

    catch(error){
    display.value="Error"; 
    }
}


/*const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        const result = math.evaluate(display.value);

        if (result === Infinity || isNaN(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }

    } catch (error) {
        display.value = "Error";
    }
}*/
