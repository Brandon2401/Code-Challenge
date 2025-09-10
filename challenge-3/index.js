function calculateNetSalary(grossSalary, taxRate) {
    const taxAmount = grossSalary * (taxRate / 100);
    const netSalary = grossSalary - taxAmount;
    return netSalary;
}
// Example usage:
const grossSalary = 5000; // Example gross salary
const taxRate = 20; // Example tax rate in percentage
const netSalary = calculateNetSalary(grossSalary, taxRate);
console.log(`Net Salary: $${netSalary.toFixed(2)}`);    
document.getElementById('calculateBtn').addEventListener('click', function() {
    const grossSalaryInput = parseFloat(document.getElementById('grossSalary').value);
    const taxRateInput = parseFloat(document.getElementById('taxRate').value); 
    if (isNaN(grossSalaryInput) || isNaN(taxRateInput)) {
        alert('Please enter valid numbers for gross salary and tax rate.');
        return;
    }   
    const netSalaryResult = calculateNetSalary(grossSalaryInput, taxRateInput);
    document.getElementById('result').innerText = `Net Salary: $${netSalaryResult.toFixed(2)}`;
});



