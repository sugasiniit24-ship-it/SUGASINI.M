// 🌙 Dark Mode Toggle

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark");

  toggleBtn.textContent = document.body.classList.contains("dark") 

    ? "☀️ Toggle Light Mode" 

    : "🌙 Toggle Dark Mode";

});

// 🎨 Dynamic Section Colors

const colors = ["#ffe0f7", "#e0f7fa", "#f1f8e9", "#fff9c4", "#f3e5f5"];

const sections = document.querySelectorAll("section");

sections.forEach((sec, index) => {

  sec.style.backgroundColor = colors[index % colors.length];

});

// 🔥 Active Navigation Highlight on Scroll

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 100) {

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach((a) => {

    a.classList.remove("active");

    if (a.getAttribute("href") === "#" + current) {

      a.classList.add("active");

    }

  });

});