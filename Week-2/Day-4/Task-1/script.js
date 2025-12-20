const btn = document.getElementById("btn");
const imageArea = document.getElementById("imageArea");
const infoArea = document.getElementById("infoArea");

btn.addEventListener("click", async () => {
    try {
        const res = await fetch("https://randomuser.me/api/");
        const data = await res.json();
        const user = data.results[0];

        imageArea.innerHTML = `<img src="${user.picture.large}">`;

        infoArea.innerHTML = `
            <h2>${user.name.first} ${user.name.last}</h2>
            <p>${user.email}</p>
            <button id="btn">Discover Another</button>
        `;

        document.getElementById("btn").onclick = () => location.reload();
    } catch {
        infoArea.innerHTML = "<p>Error loading user</p>";
    }
});
