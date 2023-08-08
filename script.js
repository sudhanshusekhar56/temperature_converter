const celsiusInput = document.getElementById('celsiusInput');
const fahrenheitInput = document.getElementById('fahrenheitInput');
const convertBtn = document.getElementById('convertBtn');

convertBtn.addEventListener('click', () => {
  if (celsiusInput.value !== '') {
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    fahrenheitInput.value = fahrenheitValue.toFixed(2);
  } else if (fahrenheitInput.value !== '') {
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const celsiusValue = (fahrenheitValue - 32) * 5/9;
    celsiusInput.value = celsiusValue.toFixed(2);
  }
});
