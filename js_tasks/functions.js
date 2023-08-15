// Function to find the gross salary

function findgrossSalary(basic_salary, benefits) {
  gross_salary = basic_salary + benefits;
  return gross_salary;
}
// A variable that stores the valae of the findgrossSalary()
// function which is the gross salary calculated by
//  finding the sum of basic salary and benefits

let calcGross = findgrossSalary(
  Number(prompt("Enter the basic salary")),
  Number(prompt("Enter benefits"))
);

// function to calculate the nhif according to the gross salary

function findnhif(basic_salary, benefits) {
  let gross_salary = basic_salary + benefits;

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

  return nhif;
}

// A variable that stores the return value of  findnhif() function

let calcNhif = findnhif(basic_salary, benefits);

// Function to find the NSSF according to
// the rate and also taking a maximu of 18000 on NSSF

function findnssf(gross_salary, nssf_rate = 0.06) {
  nssf_pay = gross_salary * nssf_rate;
  if (nssf_pay > 0 && nssf_pay <= 18000) {
    nssf_pay = gross_salary * 0.06;
  } else {
    nssf_pay = 18000;
  }
  return nssf_pay;
}

// A variable that stores the return value of  findnssf() function

let calcNssf = findnssf(gross_salary, (nssf_rate = 0.06));

// function to find the national housing development fund according to the ratea

function findnhdf(gross_salary, nhdfRate = 0.015) {
  let nhdf = gross_salary * nhdfRate;
  return nhdf;
}

// A variable that stores the return value of  findnhdf() function

let calcNhdf = findnhdf(gross_salary, (nhdfRate = 0.015));

//  function to calculate the taxable income

// i.e taxable_income = gross salary - (NSSF + NHDF)
function findTaxableIncome(gross_salary, nssf_pay, nhdf) {
  let taxableIncome = gross_salary - (nssf_pay + nhdf);
  return taxableIncome;
}

// A variable that stores the return value of  findTaxableIncome() function
taxableIncome = findTaxableIncome(
  calcGross,
  findnssf(calcGross),
  findnhdf(calcGross)
);

// A function to calculate the payee

function findPayee(taxableIncome, personalRelief = 2400) {
  if (taxableIncome === 24001) {
    grossPayee = 0.1 * taxableIncome;
    netPayee = grossPayee - personalRelief;
  } else if (taxableIncome > 24001 && taxableIncome <= 32333) {
    grossPayee = 0.25 * taxableIncome;
    netPayee = grossPayee - personalRelief;
  } else if (taxableIncome > 32333 && taxableIncome <= 500000) {
    grossPayee = 0.3 * taxableIncome;
    netPayee = grossPayee - personalRelief;
  } else if (taxableIncome > 500000 && taxableIncome <= 800000) {
    grossPayee = 0.325 * taxableIncome;
    netPayee = grossPayee - personalRelief;
  } else if (taxableIncome > 800000) {
    grossPayee = 0.35 * taxableIncome;
    netPayee = grossPayee - personalRelief;
  } else {
    netPayee = 0;
  }
  return netPayee;
}
// A variable that stores the return value of  findPayee() function

let calcPayee = findPayee(taxableIncome, personalRelief = 2400);

//  A function to calculate the net_salary
//  net_salary = gross_salary - (nhif + nhdf +  nssf + payee)

function findNetSalary(calcGross, calcNhif, CalcNhdf, calcNssf, calcPayee) {
  netSalary = gross_salary - (nhif + nhdf + nssf + payee);

  return netSalary;
}
