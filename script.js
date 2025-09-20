const display = document.querySelector('.js-input');

function appendToDisplay(input) {
  display.value += input;
};

function clearDisplay() {
  display.value = null;
};

function procentage() {
  display.value = eval(display.value / 100);
} 

function plusMinus() {
  if (display.value.startsWith('-')) {
    display.value = display.value.substring(1);
  } else {
    display.value = '-' + display.value;
  }
}
function calculate() {
  display.value = eval(display.value);
}