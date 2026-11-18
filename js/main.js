(() => {
  const C = window.CONTENT;
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s = "") => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const IMG = "assets/img/", VID = "assets/video/";

  // <picture> WebP + fallback JPG
  const pic = (name, alt = "", sizes = "100vw", lazy = true) => name ? `<picture>
    <source type="image/webp" srcset="${IMG}${name}-800.webp 800w, ${IMG}${name}-1600.webp 1600w" sizes="${sizes}">
    <img src="${IMG}${name}-1600.jpg" alt="${esc(alt)}" ${lazy ? 'loading="lazy"' : 'fetchpriority="high"'} decoding="async"></picture>` : "";

  /* ---------- 1. Loader ---------- */
  const loader = $("#loader");
  const endIntro = () => {
    loader.classList.add("done");
    try { sessionStorage.setItem("pdi-intro", "1"); } catch (e) {}
    document.removeEventListener("keydown", introKey);
  };
  const introKey = e => { if (["Escape", "Enter", " "].includes(e.key)) { e.preventDefault(); endIntro(); } };
  if (document.documentElement.classList.contains("no-intro")) loader.remove();
  else {
    document.addEventListener("keydown", introKey);
    $(".loader__skip").addEventListener("click", endIntro);
    setTimeout(endIntro, 2300);
  }

  /* ---------- 2. Header ---------- */
  const toggle = $(".header__toggle"), nav = $("#nav");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", open);
    nav.classList.toggle("open", open);
  });
  nav.addEventListener("click", e => { if (e.target.tagName === "A") { toggle.setAttribute("aria-expanded", "false"); nav.classList.remove("open"); } });
  const links = [...nav.querySelectorAll("a")];
  const secObs = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) links.forEach(a => a.classList.toggle("active", a.hash === "#" + en.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  ["nota", "shorts", "entrevistas", "material", "equipo"].forEach(id => secObs.observe(document.getElementById(id)));

  /* ---------- 3. Nota principal ---------- */
  const N = C.nota, S = C.sitio;
  $("#hero").innerHTML = `
    <div class="hero__bg">${pic(N.portada.img, N.portada.alt, "100vw", false)}</div>
    <div class="hero__inner reveal">
      <p class="kicker">${esc(N.volanta || S.serie)}</p>
      <h1>${esc(N.titulo || S.serie)}</h1>
      <p class="hero__bajada">${esc(N.bajada || S.tema)}</p>
      <div class="hero__meta">
        <span>Por <strong>${N.autores.map(esc).join(" y ")}</strong></span>
        ${N.fecha ? `<span>${esc(N.fecha)}</span>` : ""}
        <span>${esc(S.materia)} · ${esc(S.universidad)}</span>
      </div>
      <a class="scroll-cue" href="${N.publicada ? "#nota-body" : "#shorts"}">${N.publicada ? "Leer la nota" : "Ver los shorts"}</a>
    </div>
    <p class="hero__credit">${esc(N.portada.credito)}</p>`;

  const POS = ["center", "30% 25%", "75% 60%", "50% 15%", "20% 80%", "85% 30%"];
  const md = t => esc(t).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"); // **negrita**
  const block = b => {
    if (b.t === "destacado") return `<p class="destacado reveal">${md(b.texto)}</p>`;
    if (b.t === "h2") return `<h2>${esc(b.texto)}</h2>`;
    if (b.t === "cita") return `<blockquote class="pull reveal"><p>${esc(b.texto)}</p>${b.autor ? `<cite>${esc(b.autor)}</cite>` : ""}</blockquote>`;
    if (b.t === "mosaico") return `<figure class="mosaico reveal" role="img" aria-label="${esc(b.alt)}" data-fotos="${b.fotos.join(",")}">
      <div class="mosaico__grid">${Array.from({ length: 15 }, (_, i) => `<div class="mz"><img src="${IMG}${b.fotos[i % b.fotos.length]}-800.webp" alt="" style="object-position:${POS[i % POS.length]}"><img alt="" class="next"></div>`).join("")}</div>
      <figcaption>${esc(b.pie || "")}<small>${esc(b.credito || "")}</small></figcaption></figure>`;
    if (b.t === "tira") return `<figure class="tira">
      <div class="tira__track">${b.fotos.map((f, i) => `<figure class="tira__item">${pic(f.img, f.alt, "(max-width:560px) 80vw, 560px")}<figcaption><span>${String(i + 1).padStart(2, "0")}</span>${esc(f.pie)}</figcaption></figure>`).join("")}</div>
      <figcaption class="tira__credito">${esc(b.credito || "")}</figcaption></figure>`;
    if (b.t === "img") return `<figure class="reveal">${pic(b.img, b.alt, "(max-width: 1040px) 100vw, 1040px")}<figcaption>${esc(b.pie || "")}${b.credito ? `<small>${esc(b.credito)}</small>` : ""}</figcaption></figure>`;
    return `<p>${md(b.texto)}</p>`;
  };
  $("#nota-body").innerHTML = N.publicada && N.cuerpo.length
    ? `<div class="prose dropcap">${N.cuerpo.map(block).join("")}</div>`
    : `<div class="pending reveal"><strong>La nota principal está en edición</strong>Mientras tanto, recorré la investigación en los shorts, las entrevistas y el material adicional.</div>`;

  // Mosaico: cada 1,6 s cambia una celda al azar con fundido
  document.querySelectorAll(".mosaico").forEach(fig => {
    const fotos = fig.dataset.fotos.split(","), cells = [...fig.querySelectorAll(".mz")];
    let visible = false;
    new IntersectionObserver(([en]) => { visible = en.isIntersecting; }).observe(fig);
    if (reduced) return;
    setInterval(() => {
      if (!visible || document.hidden) return;
      const c = cells[Math.floor(Math.random() * cells.length)], [cur, nxt] = c.querySelectorAll("img");
      const pick = fotos.filter(f => !cur.src.includes(f + "-"))[Math.floor(Math.random() * (fotos.length - 1))];
      nxt.onload = () => { c.classList.add("swap"); setTimeout(() => { cur.src = nxt.src; cur.style.objectPosition = nxt.style.objectPosition; c.classList.remove("swap"); }, 700); };
      nxt.style.objectPosition = POS[Math.floor(Math.random() * POS.length)];
      nxt.src = `${IMG}${pick}-800.webp`;
    }, 1600);
  });

  // Tira: se desplaza en horizontal con el scroll; la foto del centro toma color
  const tiras = [...document.querySelectorAll(".tira")];
  const moveTiras = () => tiras.forEach(t => {
    const r = t.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) return;
    const track = $(".tira__track", t), p = Math.min(1, Math.max(0, (innerHeight - r.top) / (innerHeight + r.height)));
    track.style.transform = `translateX(${-p * (track.scrollWidth - t.clientWidth)}px)`;
    track.querySelectorAll(".tira__item").forEach(it => {
      const b = it.getBoundingClientRect(), d = Math.abs(b.left + b.width / 2 - innerWidth / 2) / (innerWidth / 2);
      it.style.setProperty("--g", Math.min(1, d * 1.6).toFixed(2));
    });
  });
  if (!reduced && tiras.length) { let raf = 0; addEventListener("scroll", () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(moveTiras); }, { passive: true }); addEventListener("resize", moveTiras); moveTiras(); }

  const bar = $("#progress"), nota = $("#nota");
  const onScroll = () => {
    const r = nota.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight)));
    bar.style.transform = `scaleX(${p || 0})`;
  };
  addEventListener("scroll", onScroll, { passive: true });

  /* ---------- 4. Shorts ---------- */
  const shorts = C.shorts, track = $("#track"), carousel = $("#carousel"), dots = $("#dots");
  $("#shorts-serie").textContent = S.serie;
  let idx = 0, muted = true, inView = false;
  track.innerHTML = shorts.map((s, i) => `
    <div class="slide" data-i="${i}" style="background-image:url(${IMG}poster-${s.id}.jpg)" role="group" aria-roledescription="short" aria-label="${i + 1} de ${shorts.length}: ${esc(s.titulo)}">
      <div class="slide__bar"></div>
      <div class="slide__ui">
        <button type="button" class="play" aria-label="Pausar">❚❚</button>
        <button type="button" class="mute" aria-label="Activar sonido">🔇</button>
      </div>
    </div>`).join("");
  dots.innerHTML = shorts.map((s, i) => `<button type="button" role="tab" aria-label="${esc(s.cap)}: ${esc(s.titulo)}" data-i="${i}"></button>`).join("");
  const slides = [...track.children];

  const ensureVideo = (el, s) => {
    let v = $("video", el);
    if (!v) {
      v = document.createElement("video");
      Object.assign(v, { muted: true, playsInline: true, preload: "metadata", poster: `${IMG}poster-${s.id}.jpg` });
      v.setAttribute("playsinline", "");
      v.src = `${VID}${s.id}.mp4`;
      v.addEventListener("timeupdate", () => { $(".slide__bar", el).style.width = (v.currentTime / v.duration * 100 || 0) + "%"; });
      v.addEventListener("ended", () => idx < shorts.length - 1 && go(idx + 1));
      v.addEventListener("play", () => { $(".play", el).textContent = "❚❚"; $(".play", el).setAttribute("aria-label", "Pausar"); });
      v.addEventListener("pause", () => { $(".play", el).textContent = "▶"; $(".play", el).setAttribute("aria-label", "Reproducir"); });
      el.prepend(v);
    }
    return v;
  };
  const syncMute = () => slides.forEach(el => {
    const b = $(".mute", el); b.textContent = muted ? "🔇" : "🔊";
    b.setAttribute("aria-label", muted ? "Activar sonido" : "Silenciar");
    const v = $("video", el); if (v) v.muted = muted;
  });

  function go(n) {
    idx = Math.max(0, Math.min(shorts.length - 1, n));
    slides.forEach((el, i) => {
      const d = i - idx, ad = Math.abs(d);
      el.style.transform = `translateX(calc(var(--w) * ${d * 0.86})) scale(${d ? 0.8 : 1})`;
      el.style.opacity = ad > 2 ? 0 : ad === 2 ? 0.5 : 1;
      el.style.zIndex = 10 - ad;
      el.style.pointerEvents = ad > 2 ? "none" : "";
      el.classList.toggle("is-active", !d);
      el.setAttribute("aria-hidden", d ? "true" : "false");
      $(".slide__ui", el).querySelectorAll("button").forEach(b => b.tabIndex = d ? -1 : 0);
      // lazy: solo el activo y los adyacentes tienen video
      if (ad <= 1) { const v = ensureVideo(el, shorts[i]); v.muted = muted; if (d) v.pause(); }
      else { const v = $("video", el); if (v) { v.pause(); v.removeAttribute("src"); v.load(); v.remove(); } }
    });
    const s = shorts[idx];
    $("#short-cap").textContent = s.cap + " · " + s.dur;
    $("#short-title").textContent = s.titulo;
    $("#short-desc").textContent = s.desc;
    [...dots.children].forEach((b, i) => b.setAttribute("aria-selected", i === idx));
    $(".carousel__arrow.prev").disabled = idx === 0;
    $(".carousel__arrow.next").disabled = idx === shorts.length - 1;
    playActive();
  }
  function playActive() {
    const v = $("video", slides[idx]);
    if (!v) return;
    if (inView && !reduced && !$("#modal").open) v.play().catch(() => {});
    else v.pause();
  }
  $(".carousel__arrow.prev").onclick = () => go(idx - 1);
  $(".carousel__arrow.next").onclick = () => go(idx + 1);
  dots.addEventListener("click", e => e.target.dataset.i && go(+e.target.dataset.i));
  track.addEventListener("click", e => {
    const el = e.target.closest(".slide"); if (!el || swiped) return (swiped = false);
    const i = +el.dataset.i;
    if (i !== idx) return go(i);
    const v = $("video", el);
    if (e.target.closest(".mute")) { muted = !muted; syncMute(); if (!muted) v.play().catch(() => {}); return; }
    if (v) v.paused ? v.play().catch(() => {}) : v.pause();
  });
  carousel.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") { e.preventDefault(); go(idx - 1); }
    if (e.key === "ArrowRight") { e.preventDefault(); go(idx + 1); }
  });
  document.addEventListener("keydown", e => {
    if (!inView || document.querySelector("dialog[open]") || carousel.contains(document.activeElement) || /INPUT|TEXTAREA|VIDEO/.test(document.activeElement.tagName)) return;
    if (e.key === "ArrowLeft") go(idx - 1);
    if (e.key === "ArrowRight") go(idx + 1);
  });
  let x0 = null, swiped = false;
  carousel.addEventListener("pointerdown", e => { x0 = e.clientX; swiped = false; });
  carousel.addEventListener("pointerup", e => {
    if (x0 === null) return;
    const dx = e.clientX - x0; x0 = null;
    if (Math.abs(dx) > 40) { swiped = true; go(idx + (dx < 0 ? 1 : -1)); } // swiped: ignora el click que sigue al arrastre
  });
  new IntersectionObserver(([en]) => { inView = en.isIntersecting; playActive(); }, { threshold: 0.5 }).observe(carousel);
  go(0); syncMute();

  const P = C.podcast;
  $("#podcast").innerHTML = `<video controls preload="none" playsinline poster="${IMG}${P.poster}-1600.jpg" src="${VID}${P.video}.mp4" aria-label="Podcast ${esc(P.titulo)}"></video>
    <div class="podcast__txt"><p class="kicker">${esc(P.kicker)} · ${esc(P.dur)}</p><h3>${esc(P.titulo)}</h3><p>${esc(P.desc)}</p></div>`;
  $("#podcast video").addEventListener("play", () => { const v = $("video", slides[idx]); if (v) v.pause(); }); // no superponer audio con el short activo

  /* ---------- 5. Entrevistas ---------- */
  const E = C.entrevistas, modal = $("#modal"), mc = $("#modal-content");
  $("#covers").innerHTML = E.map((e, i) => {
    const pend = e.tipo === "pendiente";
    const tag = pend ? `<span class="cover__tag muted">Próximamente</span>` : `<span class="cover__tag">${e.tipo === "video" ? "▶ Video · " + e.dur : "Entrevista escrita"}</span>`;
    return `<${pend ? "div" : "button type=\"button\""} class="cover reveal${pend ? " cover--pending" : ""}" data-i="${i}" ${pend ? 'aria-disabled="true"' : `aria-label="Abrir entrevista a ${esc(e.nombre)}"`} style="transition-delay:${i * 80}ms">
      <div class="cover__img" style="--pos:${e.fotoPos || "center"}">${pic(e.foto, e.fotoAlt, "(max-width:560px) 50vw, 300px")}</div>
      <div class="cover__top">${tag}</div>
      <div class="cover__body">
        <h3 class="cover__name">${esc(e.nombre)}</h3>
        <p class="cover__role">${esc(e.cargo)}<br>${esc(e.institucion)}</p>
        <p class="cover__by">Entrevista: <b>${esc(e.entrevistador)}</b></p>
      </div>
    </${pend ? "div" : "button"}>`;
  }).join("");

  const openEnt = e => {
    const head = `<header class="ent-head"><p class="kicker">${esc(e.volanta)}</p><h2 id="modal-title">${esc(e.titulo)}</h2>
      <p class="sub">${esc(e.nombre)} · ${esc(e.cargo)}, ${esc(e.institucion)}${e.fecha ? ` · ${esc(e.fecha)}` : ""}</p></header>`;
    const intro = `<div class="prose dropcap">${e.intro.map(p => `<p>${esc(p)}</p>`).join("")}</div>`;
    let media = "", qa = "";
    if (e.tipo === "video") {
      media = `<div class="ent-video"><video controls preload="metadata" playsinline poster="${IMG}${e.foto}-1600.jpg" src="${VID}${e.video}.mp4"></video></div>`;
    } else {
      media = `<div class="ent-photo">${pic(e.foto, e.fotoAlt, "450px")}${e.foto2 ? pic(e.foto2.img, e.foto2.alt, "450px") : ""}</div>`;
      qa = `<div class="prose qa">${e.qa.map(x => `<p class="q">${esc(x.q)}</p>${x.a.map(p => `<p>${esc(p)}</p>`).join("")}${x.cita ? `<blockquote class="pull"><p>“${esc(x.cita)}”</p><cite>${esc(e.nombre)}</cite></blockquote>` : ""}`).join("")}</div>`;
    }
    const credit = `<div class="prose"><p class="ent-credit">Entrevista realizada por ${esc(e.entrevistador)}.${e.tipo === "video" ? " Texto: síntesis de la matriz de investigación." : ""}</p>
      ${e.pdf ? `<p><a class="btn" href="${e.pdf}" target="_blank" rel="noopener">Ver PDF</a> <a class="btn" href="${e.pdf}" download>Descargar</a></p>` : ""}</div>`;
    mc.innerHTML = head + media + intro + qa + credit;
    modal.showModal(); modal.scrollTop = 0;
    document.body.style.overflow = "hidden";
    playActive();
  };
  $("#covers").addEventListener("click", ev => {
    const b = ev.target.closest("button.cover"); if (b) openEnt(E[+b.dataset.i]);
  });
  modal.addEventListener("close", () => { mc.querySelectorAll("video").forEach(v => v.pause()); mc.innerHTML = ""; document.body.style.overflow = ""; playActive(); });
  document.querySelectorAll("dialog .modal__close").forEach(b => b.addEventListener("click", () => b.closest("dialog").close()));

  /* ---------- 6. Material adicional ---------- */
  const M = C.material;
  const groups = [
    ["infografias", "Infografías", M.infografias.map((f, i) => `<figure class="infografia reveal"><button type="button" class="thumb thumb--contain" data-f="${i}" aria-label="Ampliar infografía: ${esc(f.titulo)}">${pic(f.img, f.alt, "(max-width:560px) 100vw, 400px")}</button>
      <figcaption>${esc(f.titulo)}${f.credito ? ` <small>${esc(f.credito)}</small>` : ""}</figcaption></figure>`).join("")],
    ["enlaces", "Enlaces", M.enlaces.map(l => `<a class="card card--link reveal" href="${l.href}" target="_blank" rel="noopener"><span class="sitio">${esc(l.sitio)}</span><h4>${esc(l.titulo)}</h4><span class="ir">Abrir enlace ↗</span></a>`).join("")],
  ];
  $("#material-grid").innerHTML = groups.map(([id, t, html]) => `<div class="mat-group" data-g="${id}"><h3>${t}</h3>${html}</div>`).join("");
  const filters = $("#filters");
  filters.innerHTML = [["todo", "Todo"], ...groups.map(g => [g[0], g[1]])].map(([id, t], i) => `<button type="button" data-f="${id}" aria-pressed="${!i}">${t}</button>`).join("");
  filters.addEventListener("click", e => {
    const f = e.target.dataset.f; if (!f) return;
    filters.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", b.dataset.f === f));
    document.querySelectorAll(".mat-group").forEach(g => {
      g.hidden = f !== "todo" && g.dataset.g !== f;
      g.querySelectorAll(".reveal").forEach(r => r.classList.add("in"));
    });
  });
  const lb = $("#lightbox");
  $("#material-grid").addEventListener("click", e => {
    const t = e.target.closest(".thumb"); if (!t) return;
    const f = M.infografias[+t.dataset.f];
    $("#lightbox-fig").innerHTML = `${pic(f.img, f.alt, "94vw", false)}<figcaption>${esc(f.titulo)}${f.credito ? ` — ${esc(f.credito)}` : ""}</figcaption>`;
    lb.showModal();
  });
  lb.addEventListener("click", e => { if (e.target === lb) lb.close(); });

  /* ---------- 7. Equipo + footer ---------- */
  const Q = C.equipo;
  $("#equipo-body").innerHTML = `
    <div class="reveal">
      ${Q.foto ? `<div class="equipo__foto">${pic(Q.foto, Q.fotoAlt, "(max-width:860px) 100vw, 440px")}</div>` : ""}
      <ul class="integrantes">${Q.integrantes.map(n => `<li>${esc(n)}</li>`).join("")}</ul>
      <dl class="ficha">
        <dt>Materia</dt><dd>${esc(S.materia)}</dd>
        <dt>Universidad</dt><dd>${esc(S.universidad)}</dd>
        ${S.catedra ? `<dt>Cátedra</dt><dd>${esc(S.catedra)}</dd>` : ""}
        <dt>Año</dt><dd>${S.anio}</dd>
      </dl>
    </div>
    <div class="reveal">
      <p class="kicker">Hipótesis de trabajo</p>
      <p class="hipotesis">${esc(Q.hipotesis)}</p>
      <p class="kicker" style="margin-top:2.5rem">Ejes de la investigación</p>
      <ol class="ejes">${Q.ejes.map(x => `<li>${esc(x)}</li>`).join("")}</ol>
    </div>`;
  $("#footer-text").textContent = `${S.serie} · Una investigación de ${Q.integrantes.join(" y ")} · ${S.materia}, ${S.universidad} · ${S.anio}`;

  /* ---------- Reveals ---------- */
  const rv = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); rv.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach(el => reduced ? el.classList.add("in") : rv.observe(el));
})();
