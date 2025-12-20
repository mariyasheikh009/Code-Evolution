document.getElementById("fetchBtn").addEventListener("click", () => {
  const outputBox = document.getElementById("outputBox");
  outputBox.textContent = "Fetching data...";
  outputBox.className = "inner-box loading";

  const simulateFetch = new Promise((resolve, reject) => {
    let isOnline = Math.random() > 0.5; // random success/failure
    setTimeout(() => {
      if (isOnline) resolve("✅ Data fetched successfully!");
      else reject("❌ Network error!");
    }, 1500);
  });

  simulateFetch
    .then(msg => {
      outputBox.textContent = msg;
      outputBox.className = "inner-box success";
    })
    .catch(err => {
      outputBox.textContent = err;
      outputBox.className = "inner-box error";
    });
});