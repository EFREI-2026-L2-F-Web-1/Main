import { getLifeData } from "./life.js";

// Get the current year
const currentYear = new Date().getFullYear();

// Update the footer with the current year
const footer = document.querySelector("footer");
footer.innerHTML = `&copy; ${currentYear} LifeRedPill`;

// Get the life form and add an event listener to it
const lifeForm = document.querySelector("#life-form");
lifeForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const age = parseInt(document.querySelector("#age").value);
	const gender = document.querySelector("#gender").value;
	const lifeData = getLifeData(age, gender);
	updateTable(lifeData);
});

// Function to update the table with life data
function updateTable(lifeData) {
	const table = document.querySelector("#life-table");
	table.innerHTML = `
    <tr>
      <td>Semaines vécues:</td>
      <td>${lifeData.weeksLived}</td>
      <td>${lifeData.percentageLived}%</td>
    </tr>
    <tr>
      <td>Semaines restantes:</td>
      <td>${lifeData.weeksRemaining}</td>
      <td>${lifeData.percentageRemaining}%</td>
    </tr>
    <tr>
      <td>Semaines totales:</td>
      <td>${lifeData.weeksTotal}</td>
      <td>100%</td>
    </tr>
  `;
}
