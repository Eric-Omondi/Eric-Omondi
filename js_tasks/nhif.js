let salary = parseInt(prompt("What's the basic salary?"));
let benefits = parseInt(prompt("What's the total benefits"));
let gross_salary = salary + benefits;

if (gross_salary == 5999) {
  nhif = 150;
} else if (gross_salary >= 6000 && gross_salary <= 7999) {
  nhif = 300;
} else if (gross_salary >= 8000 && gross_salary <= 11999) {
  nhif = 400;
} else if (gross_salary >= 12000 && gross_salary <= 14999) {
  nhif = 500;
} else if (gross_salary >= 15000 && gross_salary <= 19999) {
  nhif = 600;
} else if (gross_salary >= 20000 && gross_salary <= 24999) {
  nhif = 750;
} else if (gross_salary >= 25000 && gross_salary <= 29999) {
  nhif = 850;
} else if (gross_salary >= 30000 && gross_salary <= 34999) {
  nhif = 900;
} else if (gross_salary >= 35000 && gross_salary <= 39999) {
  nhif = 950;
} else if (gross_salary >= 40000 && gross_salary <= 44999) {
  nhif = 1000;
} else if (gross_salary >= 50000 && gross_salary <= 59999) {
  nhif = 1200;
} else if (gross_salary >= 60000 && gross_salary <= 69999) {
  nhif = 1300;
} else if (gross_salary >= 70000 && gross_salary <= 79999) {
  nhif = 1400;
} else if (gross_salary >= 80000 && gross_salary <= 89999) {
  nhif = 1500;
} else if (gross_salary >= 90000 && gross_salary <= 99999) {
  nhif = 1600;
} else {
  nhif = 1700;
}
let net_salary = gross_salary - nhif;


// task16
// Continue with the program in task15.html,
// then use  the gross salary to find the NSSF.
// To find the Kenya NSSF Rate using. Compute NSSF using 6% of the Gross Salary.
//  BUT ONLY A MAXIMUM OF 18,000 CAN BE USED IN NSSF.

nssf_pay = gross_salary * 0.06;
if (nssf_pay > 0 && nssf_pay <= 18000) {
  nssf_pay = gross_salary * 0.06;
} else {
  nssf_pay = 18000;
}

//   Continue with the same program
//   and calculate an individual’s NHDF using:
//   i.e NHDF = gross_salary * 0.015

let nhdf;
//   we set the rate of the National Housing Development fund
let nhdf_rate = 0.015;
nhdf = gross_salary * nhdf_rate;


// Calculate the taxable income.
// i.e taxable_income = gross salary - (NSSF + NHDF)
taxableIncome = gross_salary - (nssf_pay + nhdf);
