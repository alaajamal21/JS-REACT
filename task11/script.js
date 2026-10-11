
function calculateProfit(hours, pricePerHour) {
  let daysPerWeek = 6;
  let daysPerMonth = 26;

  let costRate = pricePerHour >= 50 ? 0.2 : 0.4;

  let dailyRevenue = hours * pricePerHour;
  let dailyCost = dailyRevenue * costRate;
  let dailyProfit = dailyRevenue - dailyCost;

  let weeklyProfit = dailyProfit * daysPerWeek;
  let monthlyProfit = dailyProfit * daysPerMonth;

  console.log(`Cost rate: ${costRate * 100}%`);
  console.log(`Daily revenue: ${dailyRevenue.toFixed(2)}`);
  console.log(`Daily net profit: ${dailyProfit.toFixed(2)}`);
  console.log(`Weekly net profit: ${weeklyProfit.toFixed(2)}`);
  console.log(`Monthly net profit: ${monthlyProfit.toFixed(2)}`);
}

let hours = Number(prompt("How many hours is the hall booked per day?"));
let pricePerHour = Number(prompt("Price per hour:"));

if (isNaN(hours) || isNaN(pricePerHour) || hours <= 0 || pricePerHour <= 0) {
  console.log("Invalid input: please enter positive numbers");
} else {
  calculateProfit(hours, pricePerHour);
}