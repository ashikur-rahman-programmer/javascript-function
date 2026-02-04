/**
 *Task -5: (Hard)


 const employees = [
            { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
            { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
            { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
            { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
        ];
        
        
  For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

 */
// extra
/**
 * Task: "Employees" array theke shudhu tader total salary-r sum ber korun jader experience 5 bochorer beshi.
 */

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function perMonthSalary(totalSalary) {
  let totalProvidedSalary = 0;
  for (let salary of totalSalary) {
    let starting = salary.starting;
    let experience = salary.experience;
    let increment = salary.increment;
    let result = starting + experience * increment;

    totalProvidedSalary += result;
  }
  return `Total salary has to be provided by the company in a month : ${totalProvidedSalary}`;
}

console.log(perMonthSalary(employees));
