// Servizi demo
const services = [
  {
    icon: "📐",
    name: "Pratiche Catastali",
    category: "catastali",
    desc: "Volture, visure, planimetrie, accatastamenti e variazioni."
  },
  {
    icon: "🏗️",
    name: "Pratiche Edilizie",
    category: "edilizi",
    desc: "CILA, SCIA, permessi di costruire, sanatorie e condoni."
  },
  {
    icon: "🗺️",
    name: "Rilievi Topografici",
    category: "topografici",
    desc: "Rilievi GPS, laser scanner, tracciamenti e frazionamenti."
  },
  {
    icon: "📊",
    name: "Consulenza Tecnica",
    category: "consulenza",
    desc: "Assistenza per successioni, divisioni, perizie e stime."
  },
  {
    icon: "🏠",
    name: "Successioni",
    category: "consulenza",
    desc: "Gestione completa delle pratiche di successione."
  },
  {
    icon: "📝",
    name: "Visure e Planimetrie",
    category: "catastali",
    desc: "Recupero documenti catastali e planimetrie aggiornate."
  }
];

// Popola servizi
function renderServices(category = "all") {
  const list = document.getElementById("serviceList");
  list.innerHTML = "";
  const filtered = category === "all" ? services : services.filter(s => s.category === category);
  filtered.forEach(s => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `
      <div class="icon">${s.icon}</div>
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
    `;
    list.appendChild(card);
  });
}

// Filtri servizi
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    this.classList.add("active");
    renderServices(this.dataset.category);
  });
});

// Menu mobile
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      navLinks.classList.remove("open");
    }
  });
});

// Form validation
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  formMessage.textContent = "";
  let valid = true;
  ["name", "email", "subject", "message"].forEach(id => {
    const field = form[id];
    if (!field.value.trim()) {
      field.style.borderColor = "#b85c38";
      valid = false;
    } else {
      field.style.borderColor = "#ddd";
    }
  });
  if (!valid) {
    formMessage.textContent = "Compila tutti i campi obbligatori.";
    formMessage.style.color = "#b85c38";
    return;
  }
  formMessage.textContent = "Messaggio inviato! Ti ricontatterò al più presto.";
  formMessage.style.color = "#2e7d32";
  form.reset();
});

// Animazioni fade-in
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("fade-in");
  });
}, { threshold: 0.1 });

document.querySelectorAll("section").forEach(sec => observer.observe(sec));

// Inizializza
renderServices();
