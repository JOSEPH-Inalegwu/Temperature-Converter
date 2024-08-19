const degree = document.getElementById('degree');
const convert = document.getElementById('convert');
const displayEl = document.getElementById('display');
const selectEl = document.getElementById('select');

let inputValue;
degree.addEventListener('input', () => {
  inputValue = degree.value;
})

let selectedValue;
selectEl.addEventListener('change', function() {
  selectedValue = selectEl.value;
});

let result;

function calculateTemperature(inputValue, selectedValue) {
  if (selectedValue === '2') {
    result = `${((inputValue * 9 / 5) + 32).toFixed(2)}°F`
  } else {
    result = `${((inputValue - 32) * 5 / 9).toFixed(2)}°C`
  }
}

convert.addEventListener('click', function() {
  calculateTemperature(inputValue, selectedValue)
  
  displayEl.textContent = result
})


