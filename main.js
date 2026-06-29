const themeButton = document.querySelector("[data-theme-toggle]");
const menuButton = document.querySelector("[data-menu-toggle]");
const navPanel = document.querySelector("[data-nav-panel]");
const pageName = document.body.dataset.page;

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  if (themeButton) {
    themeButton.textContent = theme === "light" ? "Dark" : "Light";
  }
}

try {
  const savedTheme = localStorage.getItem("arta-theme");
  if (savedTheme) setTheme(savedTheme);
} catch (error) {
  // The site still works if localStorage is unavailable.
}

if (themeButton) {
  themeButton.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    try {
      localStorage.setItem("arta-theme", nextTheme);
    } catch (error) {
      // Ignore localStorage errors.
    }
  });
}

if (menuButton && navPanel) {
  menuButton.addEventListener("click", () => {
    const isOpen = navPanel.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
}

document.querySelectorAll("[data-nav]").forEach((link) => {
  if (link.dataset.nav === pageName) {
    link.setAttribute("aria-current", "page");
  }
});

document.querySelectorAll("[data-year]").forEach((year) => {
  year.textContent = new Date().getFullYear();
});

const revealItems = document.querySelectorAll(".reveal");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reducedMotion && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const printButton = document.querySelector("[data-print-button]");
if (printButton) {
  printButton.addEventListener("click", () => window.print());
}

// Live Rome time.
const romeTime = document.querySelector("[data-rome-time]");
const romeTz = document.querySelector("[data-rome-tz]");
const romeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Europe/Rome",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZoneName: "short"
});

function updateRomeTime() {
  if (!romeTime || !romeTz) return;

  const parts = romeFormatter.formatToParts(new Date());
  romeTime.textContent = parts
    .filter((part) => part.type !== "timeZoneName")
    .map((part) => part.value)
    .join("");

  const tzPart = parts.find((part) => part.type === "timeZoneName");
  romeTz.textContent = tzPart ? tzPart.value : "Rome";
}

updateRomeTime();
setInterval(updateRomeTime, 1000);
