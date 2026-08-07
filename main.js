// theme
const root = document.documentElement;
if (localStorage.getItem("rcca-theme") === "light") root.classList.remove("dark");
function syncIcons(){
  const i = root.classList.contains("dark") ? "☀" : "☾";
  ["theme","theme-m"].forEach(id => { const b=document.getElementById(id); if(b) b.textContent=i; });
}
function toggleTheme(){
  root.classList.toggle("dark");
  localStorage.setItem("rcca-theme", root.classList.contains("dark") ? "dark" : "light");
  syncIcons();
}
["theme","theme-m"].forEach(id => document.getElementById(id).addEventListener("click", toggleTheme));
syncIcons();

// header scroll + mobile nav
const header = document.getElementById("header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 24);
onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
const mnav = document.getElementById("mobile-nav");
document.getElementById("burger").addEventListener("click", () => { mnav.hidden = !mnav.hidden; });
mnav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => (mnav.hidden = true)));

// content
const IMAGES = ["assets/work-1.jpg","assets/work-2.jpg","assets/work-3.jpg","assets/work-4.jpg"];
document.getElementById("marquee").innerHTML =
  [...SITE.services, ...SITE.services].map(s => `<span>${s.title}<i>/</i></span>`).join("");

document.getElementById("stats").innerHTML = SITE.stats
  .map(s => `<div class="reveal"><strong>${s.value}</strong><small>${s.label}</small></div>`).join("");

document.getElementById("services-grid").innerHTML = SITE.services.map(s => `
  <article class="card reveal">
    <span class="num">${s.number}</span>
    <h3>${s.title}</h3>
    <p class="tag">${s.tagline}</p>
    <p>${s.body}</p>
    <ul>${s.points.map(p => `<li>${p}</li>`).join("")}</ul>
  </article>`).join("");

document.getElementById("work-list").innerHTML = SITE.projects.map((p, i) => `
  <article class="work-item reveal ${i % 2 ? "alt" : ""}">
    <div class="work-img"><img src="${IMAGES[i % IMAGES.length]}" alt="${p.title} project visual" loading="lazy" /></div>
    <div class="work-body">
      <p class="meta">${p.category} &mdash; ${p.year}</p>
      <h3>${p.title}</h3>
      <p>${p.summary}</p>
      <div class="metrics">${p.metrics.map(m => `<div><strong>${m.value}</strong><small>${m.label}</small></div>`).join("")}</div>
    </div>
  </article>`).join("");

document.getElementById("process-grid").innerHTML = SITE.process.map(s => `
  <article class="card reveal"><span class="num">${s.step}</span><h3>${s.title}</h3><p>${s.body}</p></article>`).join("");

document.getElementById("t-grid").innerHTML = SITE.testimonials.map(t => `
  <article class="t-card reveal">
    <p class="q">&ldquo;${t.quote}&rdquo;</p>
    <div class="who"><div><b>${t.name}</b><span>${t.role}</span></div><span class="res">${t.result}</span></div>
  </article>`).join("");

document.getElementById("year").textContent = new Date().getFullYear();

// contact form -> mailto
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\nService: ${f.get("service")}\n\n${f.get("message")}`;
  window.location.href = `mailto:${SITE.CONTACT_EMAIL}?subject=${encodeURIComponent("New project enquiry - " + f.get("service"))}&body=${encodeURIComponent(body)}`;
});

// reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
}, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
document.querySelectorAll(".reveal").forEach((el, i) => { el.style.transitionDelay = (i % 4) * 70 + "ms"; io.observe(el); });
