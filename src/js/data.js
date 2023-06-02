// Life expectancy data
const MALE_LIFE_EXPECTANCY = 76;
const FEMALE_LIFE_EXPECTANCY = 81;

// Weeks in a year
const WEEKS_IN_YEAR = 52;

// Function to generate life data for all ages
function generateLifeData() {
	const lifeData = [];
	for (let age = 0; age <= 90; age++) {
		const maleData = getLifeData(age, "male");
		const femaleData = getLifeData(age, "female");
		lifeData.push({
			age,
			male: maleData,
			female: femaleData,
		});
	}
	return lifeData;
}

// Function to get life data based on age and gender
function getLifeData(age, gender) {
	const lifeExpectancy = gender === "male" ? MALE_LIFE_EXPECTANCY : FEMALE_LIFE_EXPECTANCY;
	const weeksLived = age * WEEKS_IN_YEAR;
	const weeksRemaining = (lifeExpectancy - age) * WEEKS_IN_YEAR;
	const weeksTotal = lifeExpectancy * WEEKS_IN_YEAR;
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

// Export the functions
export { generateLifeData, getLifeData };
