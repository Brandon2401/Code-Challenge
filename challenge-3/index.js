document.getElementById('calculateBtn').addEventListener('click', function() {
    const basicSalary = parseFloat(document.getElementById('basicSalary').value);
    const benefits = parseFloat(document.getElementById('benefits').value);
    if (isNaN(basicSalary) || isNaN(benefits)) {
        alert('Please enter valid numbers for basic salary and benefits.');
        return;
    }
    const grossSalary = basicSalary + benefits;
    let payee = 0;
    if (grossSalary <= 24000) {
        payee = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        payee = grossSalary * 0.25;
    } else {
        payee = grossSalary * 0.30;
    }   
    let nhif = 0;
    if (grossSalary <= 5999)nhif = 150;
    else if (grossSalary <= 7999) nhif = 300;
    else if (grossSalary <= 11999) nhif = 400;
    else if (grossSalary <= 14999) nhif = 500; 
    else if (grossSalary <= 19999) nhif = 600;
    else if (grossSalary <= 24999) nhif = 750;
    else if (grossSalary <= 29999) nhif = 850;
    else if (grossSalary <= 34999) nhif = 900;
    else if (grossSalary <= 39999) nhif = 950;
    else if (grossSalary <= 44999) nhif = 1000;
    else if (grossSalary <= 49999) nhif = 1100;
    else if (grossSalary <= 59999) nhif = 1200;
    else if (grossSalary <= 69999) nhif = 1300;
    else if (grossSalary <= 79999) nhif = 1400;
    else if (grossSalary <= 89999) nhif = 1500;
    else if (grossSalary <= 99999) nhif = 1600;
        nhif = 1500;
    let nssf = grossSalary * 0.06;
    const netSalary = grossSalary - (payee + nhif + nssf);
    document.getElementById('result').innerHTML = `
        <strong>Net Salary: Ksh ${netSalary.toFixed(2)}</strong><br>
        PAYE (tax): Ksh ${payee.toFixed(2)}<br>
        NHIF: Ksh ${nhif.toFixed(2)}<br>
        NSSF: Ksh ${nssf.toFixed(2)}
    `;
} );




