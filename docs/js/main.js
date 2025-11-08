document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-action='toggle-nav']");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
    });
  }
  const path = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-links a").forEach(a => {
    const href = (a.getAttribute("href") || "").toLowerCase();
    if (href === path) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
  });
  hydrateCards();
  document.body.addEventListener("click", handleFeatureClick);
});
async function hydrateCards() {
  const container = document.querySelector("[data-cards-container]");
  if (!container) return;
  try {
    const res = await fetch("data/cards.json", { cache: "no-store" });
    if (!res.ok) throw new Error("cards.json not found");
    const items = await res.json();
    const frag = document.createDocumentFragment();
    items.forEach(item => frag.appendChild(makeCard(item)));
    container.appendChild(frag);
    container.classList.add("fade-in");
  } catch (err) {
    container.innerHTML = `
      <div class="card"><h3>Cinematic Quality</h3><p>Pristine composition and polished motion.</p><button class="btn btn-primary" data-action="read-more" data-id="1">Learn More</button></div>
      <div class="card"><h3>Art Direction</h3><p>Refined styling and narrative cohesion.</p><button class="btn btn-primary" data-action="read-more" data-id="2">Learn More</button></div>
      <div class="card"><h3>Premium Delivery</h3><p>High‑resolution masters and curated cuts.</p><button class="btn btn-primary" data-action="read-more" data-id="3">Learn More</button></div>
    `;
    console.warn("Fallback cards used:", err.message);
  }
}
function makeCard(item) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.body}</p>
    <button class="btn btn-primary" data-action="read-more" data-id="${item.id}">Learn More</button>
  `;
  return div;
}
function handleFeatureClick(e) {
  const btn = e.target.closest("[data-action='read-more']");
  if (!btn) return;
  const id = btn.getAttribute("data-id");
  alert("Feature #" + id + " — placeholder interaction.");
}