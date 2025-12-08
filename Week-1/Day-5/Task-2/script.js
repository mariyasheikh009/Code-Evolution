document.addEventListener("DOMContentLoaded", () => {

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const nameErr = document.getElementById("nameError");
    const emailErr = document.getElementById("emailError");
    const passErr = document.getElementById("passError");

    const pwBar = document.getElementById("pwBar");
    const toast = document.getElementById("toast");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    /* Name */
    name.addEventListener("input", () => {
        nameErr.textContent =
            name.value.trim().length < 2 ? "Enter a valid name" : "";
    });

    /* Email */
    email.addEventListener("input", () => {
        emailErr.textContent =
            !emailRegex.test(email.value.trim()) ? "Invalid email" : "";
    });

    /* Password Strength */
    password.addEventListener("input", () => {
        const pw = password.value;
        let score = 0;

        if (pw.length >= 8) score++;
        if (/[A-Z]/.test(pw)) score++;
        if (/[0-9]/.test(pw)) score++;
        if (/[^A-Za-z0-9]/.test(pw)) score++;

        const percent = (score / 4) * 100;
        pwBar.style.width = percent + "%";

        passErr.textContent = score <= 1 ? "Weak password" : "";
    });

    /* Submit */
    document.getElementById("myForm").addEventListener("submit", (e) => {
        e.preventDefault();

        if (
            nameErr.textContent ||
            emailErr.textContent ||
            passErr.textContent ||
            !name.value.trim() ||
            !email.value.trim() ||
            !password.value.trim()
        ) {
            showToast("Fix errors first ❌");
            return;
        }

        showToast("Submitted Successfully ✔");
        e.target.reset();
        pwBar.style.width = "0%";
    });

    function showToast(msg) {
        toast.textContent = msg;
        toast.classList.add("show");
        setTimeout(() => toast.classList.remove("show"), 2500);
    }
});
