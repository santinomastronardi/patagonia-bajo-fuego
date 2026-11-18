(() => {
  const C = window.CONTENT, N = C.nota, S = C.sitio;
  const $ = (s, el = document) => el.querySelector(s), $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s = "") => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const md = t => esc(t).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const IMG = "assets/img/", VID = "assets/video/";
  const pic = (name, alt = "", sizes = "100vw", lazy = true) => name ? `<picture>
    <source type="image/webp" srcset="${IMG}${name}-800.webp 800w, ${IMG}${name}-1600.webp 1600w" sizes="${sizes}">
    <img src="${IMG}${name}-1600.jpg" alt="${esc(alt)}" ${lazy ? 'loading="lazy"' : 'fetchpriority="high"'} decoding="async"></picture>` : "";

  // Trazos a mano (SVG). pathLength=1 permite animarlos con stroke-dashoffset 1 → 0.
  const svg = (d, vb, cls = "") => `<svg class="scribble ${cls}" viewBox="${vb}" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="${d}"/></svg>`;
  const CIRCLE = svg("M30,70 C20,25 90,8 150,14 C195,20 198,62 176,88 C145,116 60,116 28,92 C12,78 20,50 50,36", "0 0 200 120");
  const UNDER = svg("M2,12 C40,4 80,16 120,9 S180,5 198,11", "0 0 200 20");
  const ARROW = svg("M4,4 C8,30 22,46 52,50 M40,40 L52,50 L40,58", "0 0 60 60");

  const once = (els, cls, margin = "0px 0px -12% 0px") => {
    if (reduced) return els.forEach(e => e.classList.add(cls));
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add(cls); io.unobserve(en.target); } }), { rootMargin: margin });
    els.forEach(e => io.observe(e));
  };

  /* ---------- Logo PDI: la "I" es un fósforo con la llama encendida ---------- */
  const LOGO = `<span class="logo" aria-hidden="true"><span class="logo__mark"><span class="l">P</span><span class="l">D</span><span class="l logo__i">I<svg class="logo__flame" viewBox="0 0 24 32"><path class="o" d="M12 0C14 6 22 10 22 19 22 26 17 31 12 31S2 26 2 19C2 14 6 11 7 6 9 10 10 12 12 13 12 8 11 4 12 0Z"/><path class="i" d="M12 14C14 18 17 20 17 24 17 28 15 30 12 30S7 28 7 25C7 22 9 21 10 18 11 20 12 21 12 14Z"/></svg></span></span><span class="logo__sub">Periodismo de<br>investigación</span></span>`;
  $$(".js-logo").forEach(el => el.innerHTML = LOGO);

  /* ---------- Loader ---------- */
  const loader = $("#loader");
  const endIntro = () => { loader.classList.add("done"); try { sessionStorage.setItem("pdi-intro-v2", "1"); } catch (e) {} document.removeEventListener("keydown", key); };
  const key = e => { if (["Escape", "Enter", " "].includes(e.key)) { e.preventDefault(); endIntro(); } };
  if (document.documentElement.classList.contains("no-intro")) loader.remove();
  else { document.addEventListener("keydown", key); $(".loader__skip").onclick = endIntro; setTimeout(endIntro, 2900); }

  /* ---------- Nav ---------- */
  const toggle = $(".pill__toggle"), nav = $("#nav"), links = $$("a", nav);
  toggle.onclick = () => { const o = toggle.getAttribute("aria-expanded") !== "true"; toggle.setAttribute("aria-expanded", o); nav.classList.toggle("open", o); };
  nav.addEventListener("click", e => { if (e.target.tagName === "A") { toggle.setAttribute("aria-expanded", "false"); nav.classList.remove("open"); } });
  const so = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) links.forEach(a => a.classList.toggle("active", a.hash === "#" + en.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
  ["nota", "shorts", "entrevistas", "material", "equipo"].forEach(id => so.observe(document.getElementById(id)));

  /* ---------- Hero ---------- */
  const [t1, ...rest] = N.titulo.split(":");
  const words = t1.trim().split(" "), last = words.pop();
  $("#hero").innerHTML = `
    <p class="label rv">${esc(N.volanta)} · ${esc(S.materia)} · ${esc(S.universidad)} ${S.anio}</p>
    <h1 class="rv">${esc(words.join(" "))} <span class="word">${esc(last)}${CIRCLE}</span>.</h1>
    ${rest.length ? `<p class="hero__sub rv">${esc(rest.join(":").trim())}.</p>` : ""}
    <div class="hero__row rv">
      <p class="hero__meta">Una investigación de ${N.autores.map(a => `<b>${esc(a)}</b>`).join(" y ")} sobre ${esc(S.tema.charAt(0).toLowerCase() + S.tema.slice(1))}.</p>
      <p class="hero__note mano">temporada 2025-2026${ARROW}</p>
    </div>`;
  $("#hero").insertAdjacentHTML("afterend", `<div class="hero__media rv"><div class="hero__img">${pic(N.portada.img, N.portada.alt, "(max-width:1180px) 100vw, 1180px", false)}</div><p class="credit">${esc(N.portada.credito)}</p></div>`);
  setTimeout(() => $("#hero").classList.add("draw"), document.documentElement.classList.contains("no-intro") ? 300 : 3100);

  /* ---------- Statement (palabras que se encienden) ---------- */
  const frase = (N.cuerpo.find(b => b.t === "destacado") || {}).texto || "";
  const HOT = /^(prevención|recuperación|fuego)/i;
  $("#statement-text").innerHTML = frase.split(" ").map(w => `<span${HOT.test(w) ? ' class="hot"' : ""}>${esc(w)}</span>`).join(" ");
  const stWords = $$("#statement-text span"), st = $("#statement");

  /* ---------- Nota ---------- */
  $("#nota-head").innerHTML = `<p class="label"><span class="num">01</span> Nota principal</p><p class="bajada">${esc(N.bajada)}</p>
    <div class="byline"><span>Por <b>${N.autores.map(esc).join(" y ")}</b></span>${N.fecha ? `<span>${esc(N.fecha)}</span>` : ""}<span>Lectura: ${Math.round(N.cuerpo.reduce((n, b) => n + (b.texto || "").split(" ").length, 0) / 200)} min</span><span>${esc(S.serie)}</span></div>`;
  const POS = ["center", "30% 25%", "75% 60%", "50% 15%", "20% 80%", "85% 30%"];
  const block = b => {
    if (b.t === "h2") return `<h3>${esc(b.texto)}${UNDER}</h3>`;
    if (b.t === "destacado") return `<p class="destacado">${md(b.texto)}</p>`;
    if (b.t === "img") return `<figure>${pic(b.img, b.alt, "(max-width:1120px) 100vw, 1120px")}<figcaption>${esc(b.pie || "")}<small>${esc(b.credito || "")}</small></figcaption></figure>`;
    if (b.t === "mosaico") return `<figure class="mosaico" role="img" aria-label="${esc(b.alt)}" data-fotos="${b.fotos.join(",")}"><div class="mosaico__grid">${Array.from({ length: 15 }, (_, i) => `<div class="mz"><img src="${IMG}${b.fotos[i % b.fotos.length]}-800.webp" alt="" style="object-position:${POS[i % POS.length]}"><img alt="" class="next"></div>`).join("")}</div><figcaption>${esc(b.pie || "")}<small>${esc(b.credito || "")}</small></figcaption></figure>`;
    if (b.t === "tira") return `<figure class="tira"><div class="tira__track">${b.fotos.map((f, i) => `<figure class="tira__item">${pic(f.img, f.alt, "(max-width:560px) 80vw, 500px")}<figcaption><span>${String(i + 1).padStart(2, "0")}</span>${esc(f.pie)}</figcaption></figure>`).join("")}</div><div class="tira__foot"><figcaption class="tira__credito">${esc(b.credito || "")}</figcaption><div class="tira__nav"><button type="button" class="round" data-d="-1" aria-label="Fotos anteriores">←</button><button type="button" class="round" data-d="1" aria-label="Fotos siguientes">→</button></div></div></figure>`;
    return `<p>${b.nota ? `<span class="margin-note mano" aria-hidden="true">${esc(b.nota)}${ARROW}</span>` : ""}${md(b.texto)}</p>`;
  };
  $("#nota-body").innerHTML = `<div class="lectura">${N.cuerpo.map(block).join("")}</div>`;
  once($$(".lectura strong"), "on", "0px 0px -25% 0px");
  once($$(".lectura p").filter(p => $(".margin-note", p)), "on-note");
  once($$(".lectura h3"), "draw");

  // Mosaico: una celda cambia cada 1,6 s
  $$(".mosaico").forEach(fig => {
    const fotos = fig.dataset.fotos.split(","), cells = $$(".mz", fig);
    let vis = false;
    new IntersectionObserver(([en]) => { vis = en.isIntersecting; }).observe(fig);
    if (!reduced) setInterval(() => {
      if (!vis || document.hidden) return;
      const c = cells[Math.random() * cells.length | 0], [cur, nxt] = $$("img", c);
      const shown = cells.map(x => $("img", x).src), pool = fotos.filter(f => !shown.some(s => s.includes("/" + f + "-800")));
      const pick = (pool.length ? pool : fotos)[Math.random() * (pool.length || fotos.length) | 0];
      nxt.onload = () => { c.classList.add("swap"); setTimeout(() => { cur.src = nxt.src; cur.style.objectPosition = nxt.style.objectPosition; c.classList.remove("swap"); }, 700); };
      nxt.style.objectPosition = POS[Math.random() * POS.length | 0];
      nxt.src = `${IMG}${pick}-800.webp`;
    }, 1600);
  });

  /* ---------- Scroll: progreso, hero, statement, tira ---------- */
  const bar = $("#progress"), nota = $("#nota"), heroImg = $(".hero__img"), tiras = $$(".tira");
  const clamp = v => Math.min(1, Math.max(0, v));
  const onScroll = () => {
    const r = nota.getBoundingClientRect();
    bar.style.transform = `scaleX(${clamp(-r.top / (r.height - innerHeight))})`;
    if (reduced) return;
    const h = heroImg.getBoundingClientRect();
    heroImg.style.setProperty("--s", (0.92 + 0.08 * clamp(1 - (h.top - 80) / innerHeight)).toFixed(3));
    const s = st.getBoundingClientRect(), p = clamp(-s.top / (s.height - innerHeight) * 1.15);
    const n = Math.round(p * stWords.length);
    stWords.forEach((w, i) => w.classList.toggle("on", i < n));
    tiras.forEach(t => {
      const tr = t.getBoundingClientRect();
      if (tr.bottom < 0 || tr.top > innerHeight) return;
      const track = $(".tira__track", t), q = clamp((innerHeight - tr.top) / (innerHeight + tr.height)), max = track.scrollWidth - t.clientWidth;
      t.base = q * max; t.off = Math.min(max - t.base, Math.max(-t.base, t.off || 0));
      track.style.transform = `translateX(${-(t.base + t.off)}px)`;
      $$(".tira__item", track).forEach(it => { const b = it.getBoundingClientRect(); it.style.setProperty("--g", Math.min(1, Math.abs(b.left + b.width / 2 - innerWidth / 2) / (innerWidth / 2) * 1.6).toFixed(2)); });
    });
  };
  // flechas de la tira: corren las fotos de a una, sumadas al desplazamiento por scroll
  tiras.forEach(t => $(".tira__nav", t).addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    const step = $(".tira__item", t).offsetWidth + 20;
    if (reduced) return t.scrollBy({ left: b.dataset.d * step, behavior: "smooth" });
    t.off = (t.off || 0) + b.dataset.d * step;
    t.classList.add("jump"); clearTimeout(t.tm); t.tm = setTimeout(() => t.classList.remove("jump"), 700);
    onScroll();
  }));
  let raf = 0;
  addEventListener("scroll", () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(onScroll); }, { passive: true });
  addEventListener("resize", onScroll);

  /* ---------- Shorts: coverflow 3D ---------- */
  const shorts = C.shorts, stage = $("#stage"), cf = $("#coverflow");
  $("#shorts-serie").textContent = S.serie;
  let idx = 0, muted = true, inView = false;
  stage.innerHTML = shorts.map((s, i) => `<div class="cf" data-i="${i}" style="background-image:url(${IMG}poster-${s.id}.jpg)" role="group" aria-roledescription="short" aria-label="${i + 1} de ${shorts.length}: ${esc(s.titulo)}">
    <div class="cf__bar"></div><div class="cf__ui"><button type="button" class="play" aria-label="Pausar">❚❚</button><button type="button" class="mute" aria-label="Activar sonido">🔇</button></div></div>`).join("");
  const slides = $$(".cf", stage);
  const vidOf = el => $("video", el);
  const ensure = (el, s) => {
    let v = vidOf(el);
    if (v) return v;
    v = document.createElement("video");
    Object.assign(v, { muted: true, playsInline: true, preload: "metadata", poster: `${IMG}poster-${s.id}.jpg`, src: `${VID}${s.id}.mp4` });
    v.setAttribute("playsinline", "");
    v.addEventListener("timeupdate", () => { $(".cf__bar", el).style.width = (v.currentTime / v.duration * 100 || 0) + "%"; });
    v.addEventListener("ended", () => idx < shorts.length - 1 && go(idx + 1));
    v.addEventListener("play", () => { const b = $(".play", el); b.textContent = "❚❚"; b.setAttribute("aria-label", "Pausar"); });
    v.addEventListener("pause", () => { const b = $(".play", el); b.textContent = "▶"; b.setAttribute("aria-label", "Reproducir"); });
    el.prepend(v);
    return v;
  };
  const syncMute = () => slides.forEach(el => { const b = $(".mute", el); b.textContent = muted ? "🔇" : "🔊"; b.setAttribute("aria-label", muted ? "Activar sonido" : "Silenciar"); const v = vidOf(el); if (v) v.muted = muted; });
  const playActive = () => { const v = vidOf(slides[idx]); if (!v) return; (inView && !reduced && !document.querySelector("dialog[open]")) ? v.play().catch(() => {}) : v.pause(); };
  function go(n) {
    idx = Math.max(0, Math.min(shorts.length - 1, n));
    slides.forEach((el, i) => {
      const d = i - idx, ad = Math.abs(d);
      el.style.transform = `translateX(calc(var(--w) * ${d * 0.78})) translateZ(${-ad * 140}px) rotateY(${-Math.sign(d) * Math.min(ad, 2) * 24}deg)`;
      el.style.opacity = ad > 3 ? 0 : 1 - ad * 0.18;
      el.style.zIndex = 10 - ad;
      el.style.pointerEvents = ad > 3 ? "none" : "";
      el.classList.toggle("is-active", !d);
      el.setAttribute("aria-hidden", d ? "true" : "false");
      $$("button", el).forEach(b => b.tabIndex = d ? -1 : 0);
      if (ad <= 1) { const v = ensure(el, shorts[i]); v.muted = muted; if (d) v.pause(); }
      else { const v = vidOf(el); if (v) { v.pause(); v.removeAttribute("src"); v.load(); v.remove(); } }
    });
    const s = shorts[idx];
    $("#short-info").innerHTML = `<span class="mono">${esc(s.cap)} · ${esc(s.dur)}</span><b>${esc(s.titulo)}</b> ${esc(s.desc)}`;
    $$(".shorts__nav .round").forEach(b => b.disabled = (b.dataset.dir < 0 && idx === 0) || (b.dataset.dir > 0 && idx === shorts.length - 1));
    playActive();
  }
  $$(".shorts__nav .round").forEach(b => b.onclick = () => go(idx + +b.dataset.dir));
  let x0 = null, swiped = false;
  cf.addEventListener("pointerdown", e => { x0 = e.clientX; swiped = false; });
  cf.addEventListener("pointerup", e => { if (x0 === null) return; const dx = e.clientX - x0; x0 = null; if (Math.abs(dx) > 40) { swiped = true; go(idx + (dx < 0 ? 1 : -1)); } });
  stage.addEventListener("click", e => {
    const el = e.target.closest(".cf"); if (!el || swiped) return (swiped = false);
    const i = +el.dataset.i; if (i !== idx) return go(i);
    const v = vidOf(el);
    if (e.target.closest(".mute")) { muted = !muted; syncMute(); if (!muted) v.play().catch(() => {}); return; }
    if (v) v.paused ? v.play().catch(() => {}) : v.pause();
  });
  cf.addEventListener("keydown", e => { if (e.key === "ArrowLeft") { e.preventDefault(); go(idx - 1); } if (e.key === "ArrowRight") { e.preventDefault(); go(idx + 1); } });
  document.addEventListener("keydown", e => {
    if (!inView || document.querySelector("dialog[open]") || cf.contains(document.activeElement) || /INPUT|TEXTAREA|VIDEO/.test(document.activeElement.tagName)) return;
    if (e.key === "ArrowLeft") go(idx - 1); if (e.key === "ArrowRight") go(idx + 1);
  });
  new IntersectionObserver(([en]) => { inView = en.isIntersecting; playActive(); }, { threshold: 0.5 }).observe(cf);
  go(0); syncMute();

  const P = C.podcast;
  $("#podcast").innerHTML = `<video controls preload="none" playsinline poster="${IMG}${P.poster}-1600.jpg" src="${VID}${P.video}.mp4" aria-label="Podcast ${esc(P.titulo)}"></video>
    <div><p class="label">${esc(P.kicker)} · ${esc(P.dur)}</p><h3>${esc(P.titulo)}</h3><p>${esc(P.desc)}</p></div>`;
  $("#podcast video").addEventListener("play", () => { const v = vidOf(slides[idx]); if (v) v.pause(); });

  /* ---------- Entrevistas: bento + hoja ---------- */
  const E = C.entrevistas, sheet = $("#sheet"), sc = $("#sheet-content");
  $("#bento").innerHTML = E.map((e, i) => `<button type="button" class="card rv" data-i="${i}" aria-label="${e.tipo === "video" ? "Ver" : "Leer"} entrevista a ${esc(e.nombre)}" style="transition-delay:${i * 70}ms">
    <div class="card__img" style="--pos:${e.fotoPos || "center"}">${pic(e.foto, e.fotoAlt, "(max-width:860px) 100vw, 640px")}<span class="card__tag">${e.tipo === "video" ? "▶ Video · " + e.dur : "Entrevista escrita"}</span></div>
    <div class="card__body"><p><b>${esc(e.nombre)}.</b> ${esc(e.cargo)}, ${esc(e.institucion)}.</p>
    <p class="card__by"><span>Por ${esc(e.entrevistador)}</span><span>${e.tipo === "video" ? "Ver video →" : "Leer entrevista →"}</span></p></div></button>`).join("");
  const openEnt = e => {
    const media = e.tipo === "video"
      ? `<div class="ent__media"><video controls preload="metadata" playsinline poster="${IMG}${e.foto}-1600.jpg" src="${VID}${e.video}.mp4"></video></div>`
      : `<div class="ent__media ${e.foto2 ? "ent__photos" : ""}">${pic(e.foto, e.fotoAlt, "900px")}${e.foto2 ? pic(e.foto2.img, e.foto2.alt, "450px") : ""}</div>`;
    const qa = (e.qa || []).map(x => `<p class="q">${esc(x.q)}</p>${x.a.map(p => `<p>${esc(p)}</p>`).join("")}${x.cita ? `<blockquote class="pull"><p>${esc(x.cita)}</p><cite>${esc(e.nombre)}</cite></blockquote>` : ""}`).join("");
    sc.innerHTML = `<header class="ent__head"><p class="label">${esc(e.volanta)}</p><h2 id="sheet-title">${esc(e.titulo)}</h2>
      <p class="sub">${esc(e.nombre)} · ${esc(e.cargo)}, ${esc(e.institucion)}${e.fecha ? " · " + esc(e.fecha) : ""}</p></header>${media}
      <div class="lectura">${e.intro.map(p => `<p>${esc(p)}</p>`).join("")}<div class="qa">${qa}</div>
      <p class="ent__credit">Entrevista realizada por ${esc(e.entrevistador)}.${e.tipo === "video" ? " Texto: síntesis de la matriz de investigación." : ""}</p>
      ${e.pdf ? `<p><a class="btn btn--dark" href="${e.pdf}" target="_blank" rel="noopener">Ver PDF</a> <a class="btn" href="${e.pdf}" download>Descargar</a></p>` : ""}</div>`;
    sheet.showModal(); sheet.scrollTop = 0; document.body.style.overflow = "hidden"; playActive();
  };
  $("#bento").addEventListener("click", ev => { const b = ev.target.closest(".card"); if (b) openEnt(E[+b.dataset.i]); });
  sheet.addEventListener("close", () => { $$("video", sc).forEach(v => v.pause()); sc.innerHTML = ""; document.body.style.overflow = ""; playActive(); });
  sheet.addEventListener("click", e => { if (e.target === sheet) sheet.close(); });
  $$("dialog .sheet__close").forEach(b => b.onclick = () => b.closest("dialog").close());

  /* ---------- Material ---------- */
  const M = C.material, lb = $("#lightbox");
  $("#info3").innerHTML = M.infografias.map((f, i) => `<div class="rv" style="transition-delay:${i * 90}ms"><button type="button" data-f="${i}" aria-label="Ampliar infografía: ${esc(f.titulo)}">
    <div class="thumb">${pic(f.img, f.alt, "(max-width:860px) 100vw, 380px")}</div>
    <h3>${esc(f.titulo)} <span class="arrow">→</span></h3><span class="mano">${esc(f.credito || "infografía")}</span></button></div>`).join("");
  $("#info3").addEventListener("click", e => {
    const b = e.target.closest("button[data-f]"); if (!b) return;
    const f = M.infografias[+b.dataset.f];
    $("#lightbox-fig").innerHTML = `${pic(f.img, f.alt, "94vw", false)}<figcaption>${esc(f.titulo)}${f.credito ? " — " + esc(f.credito) : ""}</figcaption>`;
    lb.showModal();
  });
  lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });
  $("#links").innerHTML = M.enlaces.map((l, i) => `<li class="rv"><a href="${l.href}" target="_blank" rel="noopener"><span class="n">${String(i + 1).padStart(2, "0")}</span><span class="t">${esc(l.titulo)} ↗</span><span class="s">${esc(l.sitio)}</span></a></li>`).join("");

  /* ---------- Cierre, equipo, footer ---------- */
  if (N.cierre) $("#closing").innerHTML = `<p class="rv">${md(N.cierre).replace("</strong>", UNDER + "</strong>").replace(/<(\/?)strong>/g, "<$1b>")}</p>`;
  const Q = C.equipo, [n1, ...nn] = Q.integrantes;
  $("#equipo").innerHTML = `<p class="label">Equipo · Sobre la investigación</p>
    <h2 class="rv">${esc(n1)}${nn.length ? `<br><span class="light">y ${nn.map(esc).join(", ")}.</span>` : "."}</h2>
    <div class="equipo__grid">
      <div class="rv">${Q.foto ? `<div class="equipo__foto">${pic(Q.foto, Q.fotoAlt, "(max-width:860px) 100vw, 560px")}</div><p class="equipo__note mano">pasá el mouse${ARROW}</p>` : ""}</div>
      <div class="cols rv">
        <div><p class="label">Hipótesis de trabajo</p><p>${esc(Q.hipotesis)}</p></div>
        <div><p class="label">Ejes</p><ol>${Q.ejes.map(x => `<li>${esc(x)}</li>`).join("")}</ol></div>
      </div>
    </div>
    <div class="ficha rv"><span>${esc(S.materia)}</span><span>${esc(S.universidad)}</span>${S.catedra ? `<span>${esc(S.catedra)}</span>` : ""}<span>${S.anio}</span></div>`;
  $("#footer").innerHTML = `<div class="footer__in"><div><p class="big">${esc(S.serie)}.</p>
    <small>Una investigación de ${Q.integrantes.map(esc).join(" y ")} · ${esc(S.materia)}, ${esc(S.universidad)} · ${S.anio}</small>
    <small>Fotos de Wikimedia Commons (CC BY-SA), con autoría en cada imagen.</small></div>
    <span class="footer__logo" role="img" aria-label="PDI Periodismo de Investigación">${LOGO}</span></div>`;

  /* ---------- Reveals + trazos ---------- */
  once($$(".rv"), "in", "0px 0px -8% 0px");
  once($$(".closing p, .equipo__note, .hero__note"), "draw");
  onScroll();
})();
