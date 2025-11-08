document.addEventListener("DOMContentLoaded", () => {
  // Dynamic footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-action='toggle-nav']");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
    });
  }

  // Optional: load cards from local JSON
  const container = document.querySelector("[data-cards-container]");
  if (container) {
    fetch("data/cards.json")
      .then(r => (r.ok ? r.json() : []))
      .then(items => {
        const frag = document.createDocumentFragment();
        (items || []).forEach(item => {
          const div = document.createElement("div");
          div.className = "card";
          div.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.body}</p>
            <button class="btn-primary" data-action="read-more" data-id="${item.id}">Read More</button>
          `;
          frag.appendChild(div);
        });
        container.appendChild(frag);
      })
      .catch(() => {
        // Fallback static content
        container.innerHTML = `
          <div class="card"><h3>Fast Load</h3><p>No framework overhead.</p><button class="btn-primary" data-action="read-more" data-id="1">Read More</button></div>
          <div class="card"><h3>Lean Assets</h3><p>Only essential CSS/JS.</p><button class="btn-primary" data-action="read-more" data-id="2">Read More</button></div>
          <div class="card"><h3>SEO Friendly</h3><p>Multiple real HTML pages.</p><button class="btn-primary" data-action="read-more" data-id="3">Read More</button></div>
        `;
      });
  }

  // Delegated click handler for card buttons
  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action='read-more']");
    if (btn) {
      const id = btn.getAttribute("data-id");
      alert("Feature #" + id);
    }
  });
});