// Rectangle Area Function
function rectangleArea(w, h) {
    return w * h;
}

// Voter Eligibility (Arrow Function)
const checkVote = (age) => {
    return age >= 18 ? "You are Eligible ✔️" : "You are NOT Eligible ❌";
};

function calculateAll() {
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    let age = document.getElementById("age").value;

    // Calculate area
    let area = rectangleArea(width, height);
    document.getElementById("areaResult").innerText = "Area of Rectangle: " + area;

    // Check vote
    let voteMsg = checkVote(age);
    document.getElementById("voteResult").innerText = "Voter Status: " + voteMsg;
}
