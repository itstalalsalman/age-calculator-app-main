const ddInput = document.getElementById('dd');
const mmInput = document.getElementById('mm');
const yyyyInput = document.getElementById('yyyy');
const calculateBtn = document.getElementById('calculate__age');
const yearsSpan = document.querySelector('.years');
const monthsSpan = document.querySelector('.months');
const daysSpan = document.querySelector('.days');

calculateBtn.addEventListener('click', () => {
  const day = parseInt(ddInput.value);
  const month = parseInt(mmInput.value) - 1; // Months are 0-indexed
  const year = parseInt(yyyyInput.value);

  if (isValidDate(day, month, year)) {
    const birthDate = new Date(year, month, day);
    const age = calculateAge(birthDate);

    yearsSpan.textContent = age.years;
    monthsSpan.textContent = age.months;
    daysSpan.textContent = age.days;

    document.querySelector('.calculated-res-area').classList.add('result-active'); 
  } else {
    
  }

});

function isValidDate(day, month, year) {
  const date = new Date(year, month, day);
  return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
}

function calculateAge(birthDate) {
  const today = new Date();
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); 
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}
