// Get the form element
const lifeForm = document.querySelector('#life-form');

// Get the input elements
const ageInput = document.querySelector('#age');
const genderInput = document.querySelector('#gender');

// Add event listener to the form
lifeForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Get the user's age and gender
  const age = parseInt(ageInput.value);
  const gender = genderInput.value;

  // Calculate the user's life expectancy based on their gender
  let lifeExpectancy;
  if (gender === 'male') {
    lifeExpectancy = 76;
  } else if (gender === 'female') {
    lifeExpectancy = 81;
  } else {
    lifeExpectancy = 78;
  }

  // Calculate the user's remaining life expectancy
  const remainingYears = lifeExpectancy - age;

  // Calculate the user's remaining weeks, days, and hours
  const remainingWeeks = remainingYears * 52;
  const remainingDays = remainingYears * 365;
  const remainingHours = remainingDays * 24;

  // Update the table with the user's information
  updateTable(age, remainingYears, remainingWeeks, remainingDays, remainingHours);
});

// Function to update the table with the user's information
function updateTable(age, remainingYears, remainingWeeks, remainingDays, remainingHours) {
  const ageCell = document.querySelector('#age-cell');
  const yearsCell = document.querySelector('#years-cell');
  const weeksCell = document.querySelector('#weeks-cell');
  const daysCell = document.querySelector('#days-cell');
  const hoursCell = document.querySelector('#hours-cell');

  ageCell.textContent = age;
  yearsCell.textContent = remainingYears;
  weeksCell.textContent = remainingWeeks;
  daysCell.textContent = remainingDays;
  hoursCell.textContent = remainingHours;
}
