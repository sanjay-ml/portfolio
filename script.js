// Project placeholders
const projects = [
  {
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
    text: "Future Project"
  },
  {
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60",
    text: "Future Project"
  },
  {
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60",
    text: "Future Project"
  },
  {
    image: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=60",
    text: "Future Project"
  }
];

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  projects.forEach(p => {
    const card = document.createElement("article");
    card.className = "card reveal";
    card.innerHTML = `
      <img class="card-img" src="${p.image}" alt="Project preview" loading="lazy">
      <p class="caption">${p.text}</p>
    `;
    grid.appendChild(card);
  });
}

// Scroll reveal animation
function setupReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupReveal();
  document.getElementById("year").textContent = new Date().getFullYear();
});
