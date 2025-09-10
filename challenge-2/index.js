documentget.ELementById("CheckBtn").addEventListener("click", checkSpeed);
function checkSpeed() {
    const speedInput = document.getElementById('speedInput').value;
    const speed = parseInt(speedInput);
    if (isNaN(speed)) {
        document.getElementById("result").innerText = "Please enter a valid number";
        return;
    }
    const speedLimit = 70;
    if (speedInput <= speedLimit) {
        document.getElementById("result").innerText = "Ok";
    } else {
        const points = Math.floor((speedInput - speedLimit) / 5);  
        if (points >= 12) {
            document.getElementById("result").innerText = "License suspended";
        } else {
            document.getElementById("result").innerText = `Points: ${points}`;
        }
    }
}