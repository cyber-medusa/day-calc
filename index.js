const args = process.argv;

const daysAgo = args[2];
const weekNum = 7;
const dayDiffMod = daysAgo % weekNum;
const todayNum = 1;
const result = (weekNum - dayDiffMod) + todayNum;

const weeks = ['mon','tue','wen','thu','fri','sat','sun'];

console.log(weeks[result - 1]);

