// Ask user for name when page loads
let userName = prompt("Enter your name:");

// If user enters nothing, give fallback
if (!userName) {
    userName = "Guest";
}

// Show name dynamically on webpage
document.getElementById("welcomeText").innerText = `Welcome, ${userName}! 👋`;
