// Get the table element from the HTML
const table = document.querySelector('#table table');

// Create the table header row
const headerRow = document.createElement('tr');
const headers = ['Âge', 'Semaines écoulées', 'Semaines restantes', '% de temps total passé avec les parents'];
headers.forEach(headerText => {
  const header = document.createElement('th');
  header.textContent = headerText;
  headerRow.appendChild(header);
});
table.appendChild(headerRow);

// Create the table body rows
lifeWeeks.forEach((lifeWeek, index) => {
  const row = document.createElement('tr');
  const ageCell = document.createElement('td');
  ageCell.textContent = index;
  row.appendChild(ageCell);
  const weeksElapsedCell = document.createElement('td');
  weeksElapsedCell.textContent = lifeWeek.weeksElapsed;
  row.appendChild(weeksElapsedCell);
  const weeksRemainingCell = document.createElement('td');
  weeksRemainingCell.textContent = lifeWeek.weeksRemaining;
  row.appendChild(weeksRemainingCell);
  const percentWithParentsCell = document.createElement('td');
  percentWithParentsCell.textContent = lifeWeek.percentWithParents;
  row.appendChild(percentWithParentsCell);
  table.appendChild(row);
});

// Add event listener to the form
const lifeForm = document.querySelector('#life-form');
lifeForm.addEventListener('submit', event => {
  event.preventDefault();
  const age = parseInt(document.querySelector('#age').value);
  const gender = document.querySelector('#gender').value;
  const lifeWeek = lifeWeeks[age];
  const percentWithParents = gender === 'male' ? lifeWeek.percentWithParentsMale : lifeWeek.percentWithParentsFemale;
  const weeksElapsedCell = document.querySelector('#table tr:nth-child(2) td:nth-child(2)');
  weeksElapsedCell.textContent = lifeWeek.weeksElapsed;
  const weeksRemainingCell = document.querySelector('#table tr:nth-child(2) td:nth-child(3)');
  weeksRemainingCell.textContent = lifeWeek.weeksRemaining;
  const percentWithParentsCell = document.querySelector('#table tr:nth-child(2) td:nth-child(4)');
  percentWithParentsCell.textContent = percentWithParents;
});
