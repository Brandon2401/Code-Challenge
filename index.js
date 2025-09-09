function generateGrade() {
    let marks = 
    Number(document.getElementById("marks").value);
   let result = "";
    if (isNaN(marks)) {
        result = "Please enter a valid number.";
    } else if (marks < 0 || marks > 100) {
        result = "Invalid Score.Marks must be between 0-100 .";
    } else if (marks > 79) {
        result = "Grade A";
    } else if (marks >= 60) {
        result = "Grade B";
    } else if (marks >= 50) {
        result = "Grade C";
    } else if (marks >= 40) {
        result = "Grade D";
    } else {
        result = "Grade E";
    return result;
} 
document.getElementById("result").innerText 
= result;
}