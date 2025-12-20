document.getElementById("loadBtn").addEventListener("click", async () => {
  const outputBox = document.getElementById("outputBox");
  outputBox.textContent = "Loading posts...";
  outputBox.className = "inner-box loading";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const posts = await response.json();

    outputBox.innerHTML = "<h3>Latest Posts:</h3>";
    posts.forEach(post => {
      const p = document.createElement("p");
      p.textContent = `• ${post.title}`;
      outputBox.appendChild(p);
    });

    outputBox.className = "inner-box success";
  } catch (error) {
    outputBox.textContent = "❌ Error loading posts!";
    outputBox.className = "inner-box error";
  }
});