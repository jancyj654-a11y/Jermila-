// Toggle Dark Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    // Change button text dynamically

    if (document.body.classList.contains("dark-mode")) {

        themeBtn.textContent = "☀️ Light Mode";

    } else {

        themeBtn.textContent = "🌙 Dark Mode";

    }

});