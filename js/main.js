(() => {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Jahr ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- Menü rendern ---------- */
  const tabsEl = document.getElementById("menu-tabs");
  const gridEl = document.getElementById("menu-grid");
  const cats = (window.MENU && window.MENU.categories) || [];

  const itemHTML = (it) => {
    const tags =
      (it.hot ? '<span class="tag tag--hot">scharf</span>' : "") +
      (it.neu ? '<span class="tag tag--neu">neu</span>' : "");
    return `<div class="m-item">
      <span class="m-item__n">${it.n || ""}</span>
      <span class="m-item__body">
        <span class="m-item__name">${it.name}${tags}</span>
        ${it.desc ? `<span class="m-item__desc">${it.desc}</span>` : ""}
      </span>
      <span class="m-item__price">${it.price} €</span>
    </div>`;
  };

  const renderCat = (cat) => {
    gridEl.innerHTML =
      (cat.note ? `<p class="menu__cat-note" style="grid-column:1/-1">${cat.note}</p>` : "") +
      cat.items.map(itemHTML).join("");
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  };

  const selectTab = (id) => {
    const cat = cats.find((c) => c.id === id) || cats[0];
    [...tabsEl.children].forEach((b) =>
      b.setAttribute("aria-selected", String(b.dataset.id === cat.id))
    );
    renderCat(cat);
  };

  cats.forEach((cat, i) => {
    const b = document.createElement("button");
    b.className = "menu__tab";
    b.textContent = cat.name;
    b.dataset.id = cat.id;
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", String(i === 0));
    b.addEventListener("click", () => selectTab(cat.id));
    tabsEl.appendChild(b);
  });
  if (cats.length) renderCat(cats[0]);

  /* ---------- Mobile-Menü ---------- */
  const burger = document.getElementById("burger");
  const mobile = document.getElementById("mobile-menu");
  const toggleMobile = (open) => {
    mobile.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  };
  burger.addEventListener("click", () =>
    toggleMobile(burger.getAttribute("aria-expanded") !== "true")
  );
  mobile.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => toggleMobile(false))
  );

  /* ---------- Nav-Hintergrund beim Scrollen ---------- */
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Lenis Smooth-Scroll ---------- */
  let lenis;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    window.__lenis = lenis;
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);

    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const t = document.querySelector(a.getAttribute("href"));
        if (t) { e.preventDefault(); lenis.scrollTo(t, { offset: -70 }); }
      });
    });
  }

  /* ---------- GSAP: Reveals + Parallax ---------- */
  if (!reduce && window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    if (lenis) lenis.on("scroll", ScrollTrigger.update);

    gsap.utils.toArray(".reveal").forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: () => el.classList.add("is-in"),
      });
    });

    // Hero-Parallax
    gsap.to(".hero__img", {
      yPercent: 14, ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
    });
    // Band-Parallax
    gsap.fromTo(".band__img", { yPercent: -12 }, {
      yPercent: 12, ease: "none",
      scrollTrigger: { trigger: ".band", start: "top bottom", end: "bottom top", scrub: true },
    });
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
  }
})();
