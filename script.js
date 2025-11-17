let display = document.getElementById("display");

// button function
function press(value) {
    display.value += value;
}

// calculate button function
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
function remove() {
    display.value = "";
}
