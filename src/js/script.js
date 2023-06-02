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

// Function to get life data based on age and gender
function getLifeData(age, gender) {
	const lifeExpectancy = gender === "male" ? MALE_LIFE_EXPECTANCY : FEMALE_LIFE_EXPECTANCY;
	const weeksLived = age * 52;
	const weeksRemaining = (lifeExpectancy - age) * 52;
	const weeksTotal = lifeExpectancy * 52;
	const percentageLived = Math.round((weeksLived / weeksTotal) * 100);
	const percentageRemaining = Math.round((weeksRemaining / weeksTotal) * 100);
	return {
		weeksLived,
		weeksRemaining,
		weeksTotal,
		percentageLived,
		percentageRemaining,
	};
}

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
