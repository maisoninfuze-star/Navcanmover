/* Nav Can Movers — i18n (FR/EN) + scroll motion + parallax truck video */
(() => {
  /* ---------------- i18n ---------------- */
  const I18N = {
    en: {
      "brand.name": "Nav Can Movers Express",
      "brand.tag": "Marketplace Pickup &amp; Delivery",
      "scroll": "Scroll",
      "nav.services": "Services",
      "nav.process": "Process",
      "hero.l1": "Bought it,",
      "hero.l3": "We haul it.",
      "hero.sub": "You scored a deal on Marketplace or Kijiji — we pick it up and drop it at your door. Pickup-truck delivery across Montreal, at honestly good prices.",
      "hero.cta": "Get a price →",
      "wwd.tag": "( What We Do )",
      "wwd.head": "We don't just move boxes. We pick up the couch, the dresser, the fridge you just bought online — <span class=\"muted\">carefully, same-day, and without the headache.</span>",
      "wwd.p1": "Found something great on Facebook Marketplace, Kijiji or a yard sale but no way to bring it home? Our pickup truck and crew handle the lift, the drive and the delivery.",
      "wwd.p2": "We work around your schedule, strap everything down, protect your find, and bring it straight to your place. No van rental, no begging friends, no scratched floors.",
      "band.tag": "( On The Road )",
      "band.head": "Your Marketplace finds, delivered safely across <span class=\"accent\">Montreal.</span>",
      "kin.1": "We", "kin.2": "Pick", "kin.3": "It", "kin.4": "Up",
      "kin.p": "Every pickup is different. We stay flexible, keep you posted by text, and adapt to whatever the seller's driveway throws at us.",
      "proc.head": "How we keep it easy",
      "proc.sub": "Three things we get right on every pickup — so getting your find home feels handled, not stressful.",
      "proc.1.t": "Careful Handling",
      "proc.1.p": "Furniture wrapped in blankets, straps over every load, nothing sliding around in the bed. Your bargain arrives in the same shape you bought it.",
      "proc.2.t": "Same-Day & On Time",
      "proc.2.p": "Seller wants it gone today? We can usually pick up within hours and text you the whole way. Your schedule, not ours.",
      "proc.3.t": "Honest Pricing",
      "proc.3.p": "Flat, upfront price based on distance and size — no surprise fees, no per-minute meter. You know the cost before we roll out.",
      "stat.1": "Years hauling Montreal finds",
      "stat.2": "Pickups delivered",
      "stat.3": "Loads strapped & protected",
      "stat.4": "Days a week — weekends too",
      "svc.tag": "( Our Services )",
      "svc.1.t": "Marketplace Pickup",
      "svc.1.p": "One couch, a table, a fridge — we meet the seller, load it in the truck and bring it to your door. Priced by the job, not padded by the hour.",
      "svc.2.t": "Furniture & Big Items",
      "svc.2.p": "Sofas, beds, appliances, that impossible armoire from three floors up — we've got the truck, the straps and the muscle to get it home in one piece.",
      "cta.head": "Found it? Let's<br><span class=\"accent\">bring it home.</span>",
      "cta.sub": "Send us the listing and your address. We'll give you a flat price and a pickup time that works.",
      "cta.btn": "Call 514-999-9176",
      "foot.about": "Pickup-truck delivery for your Marketplace & second-hand finds, proudly based in Montreal, Quebec.",
      "foot.touch": "Get in touch",
      "foot.area": "Service area",
      "foot.areas": "Montreal Island<br>West Island · Laval<br>Greater Montreal",
      "foot.follow": "Follow",
      "foot.copy": "© Nav Can Movers Express — Montreal, QC",
      "foot.lic": "Licensed & insured · RBQ on request",
      "marq": ["Marketplace Pickup", "Furniture & Big Items", "Montreal & West Island", "Same-Day Hauls", "Honest Pricing"]
    },
    fr: {
      "brand.name": "Nav Can Déménagement Express",
      "brand.tag": "Ramassage &amp; Livraison Marketplace",
      "scroll": "Défiler",
      "nav.services": "Services",
      "nav.process": "Démarche",
      "hero.l1": "Acheté,",
      "hero.l3": "On le livre.",
      "hero.sub": "Vous avez déniché une aubaine sur Marketplace ou Kijiji — on va la chercher et on la livre à votre porte. Livraison en camionnette partout à Montréal, à prix honnêtes.",
      "hero.cta": "Obtenir un prix →",
      "wwd.tag": "( Ce qu'on fait )",
      "wwd.head": "On ne déplace pas juste des boîtes. On ramasse le sofa, la commode, le frigo que vous venez d'acheter en ligne — <span class=\"muted\">avec soin, le jour même, et sans tracas.</span>",
      "wwd.p1": "Une belle trouvaille sur Facebook Marketplace, Kijiji ou une vente de garage mais aucun moyen de la ramener? Notre camionnette et notre équipe s'occupent du levage, du transport et de la livraison.",
      "wwd.p2": "On s'adapte à votre horaire, on attache tout solidement, on protège votre trouvaille et on la livre chez vous. Pas de location de van, pas d'amis à supplier, pas de planchers égratignés.",
      "band.tag": "( Sur la route )",
      "band.head": "Vos trouvailles Marketplace, livrées en toute sécurité partout à <span class=\"accent\">Montréal.</span>",
      "kin.1": "On", "kin.2": "Le", "kin.3": "Ra-", "kin.4": "masse",
      "kin.p": "Chaque ramassage est différent. On reste flexibles, on vous tient au courant par texto et on s'adapte à toutes les entrées de garage.",
      "proc.head": "Simple, du début à la fin",
      "proc.sub": "Trois choses qu'on réussit à chaque ramassage — pour que ramener votre trouvaille soit géré, pas stressant.",
      "proc.1.t": "Manipulation soignée",
      "proc.1.p": "Meubles enveloppés de couvertures, sangles sur chaque chargement, rien qui glisse dans la boîte. Votre aubaine arrive dans le même état qu'à l'achat.",
      "proc.2.t": "Le jour même, à l'heure",
      "proc.2.p": "Le vendeur veut s'en débarrasser aujourd'hui? On peut souvent ramasser en quelques heures et vous texter en chemin. Votre horaire, pas le nôtre.",
      "proc.3.t": "Prix honnêtes",
      "proc.3.p": "Prix fixe et clair selon la distance et la taille — aucuns frais surprises, pas de compteur à la minute. Vous connaissez le coût avant qu'on parte.",
      "stat.1": "Ans à transporter les trouvailles de Montréal",
      "stat.2": "Ramassages livrés",
      "stat.3": "Chargements sanglés et protégés",
      "stat.4": "Jours sur 7 — fins de semaine aussi",
      "svc.tag": "( Nos services )",
      "svc.1.t": "Ramassage Marketplace",
      "svc.1.p": "Un sofa, une table, un frigo — on rencontre le vendeur, on charge le tout et on le livre chez vous. Prix au forfait, pas gonflé à l'heure.",
      "svc.2.t": "Meubles & gros articles",
      "svc.2.p": "Sofas, lits, électroménagers, cette armoire impossible au troisième étage — on a le camion, les sangles et les bras pour la ramener intacte.",
      "cta.head": "Trouvé? On le<br><span class=\"accent\">ramène chez vous.</span>",
      "cta.sub": "Envoyez-nous l'annonce et votre adresse. On vous donne un prix fixe et une heure de ramassage qui marche.",
      "cta.btn": "Appelez 514-999-9176",
      "foot.about": "Livraison en camionnette pour vos trouvailles Marketplace et de seconde main, fièrement basée à Montréal, Québec.",
      "foot.touch": "Nous joindre",
      "foot.area": "Zone de service",
      "foot.areas": "Île de Montréal<br>West Island · Laval<br>Grand Montréal",
      "foot.follow": "Suivez-nous",
      "foot.copy": "© Nav Can Déménagement Express — Montréal, QC",
      "foot.lic": "Licencié et assuré · RBQ sur demande",
      "marq": ["Ramassage Marketplace", "Meubles & gros articles", "Montréal & West Island", "Ramassage le jour même", "Prix honnêtes"]
    }
  };

  function applyLang(lang) {
    const dict = I18N[lang] || I18N.en;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    // marquee
    const marq = document.getElementById("ncm-marquee");
    if (marq && dict.marq) {
      const items = dict.marq;
      const one = items.map((t) => `<span>${t}</span><span>·</span>`).join("");
      marq.innerHTML = one + one;
    }
    // toggle button state
    document.querySelectorAll("[data-lang-btn]").forEach((b) => {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang-btn") === lang);
    });
    try { localStorage.setItem("ncm-lang", lang); } catch (e) {}
  }

  function initLang() {
    let lang = "en";
    try {
      const saved = localStorage.getItem("ncm-lang");
      if (saved === "fr" || saved === "en") lang = saved;
      else if ((navigator.language || "").toLowerCase().startsWith("fr")) lang = "fr";
    } catch (e) {}
    applyLang(lang);
    document.querySelectorAll("[data-lang-btn]").forEach((b) => {
      b.addEventListener("click", () => applyLang(b.getAttribute("data-lang-btn")));
    });
  }

  /* ---------------- motion ---------------- */
  function animateCount(el) {
    const target = parseFloat(el.getAttribute("data-count")) || 0;
    const dur = 1400, start = performance.now();
    const fmt = (n) => Math.round(n).toLocaleString("en-US");
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = fmt(target * eased);
      if (t < 1) requestAnimationFrame(tick); else el.textContent = fmt(target);
    };
    requestAnimationFrame(tick);
  }

  function initMotion() {
    const root = document.getElementById("ncm-root");
    if (!root) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        if (!e.target.hasAttribute("data-count")) {
          e.target.querySelectorAll("[data-count]").forEach((c) => animateCount(c));
        }
        io.unobserve(e.target);
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });
    root.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

    const heroes = root.querySelectorAll(".ncm-hero");
    heroes.forEach((el, i) => {
      if (i === 0) requestAnimationFrame(() => el.classList.add("is-in"));
      else io.observe(el);
    });

    // parallax truck video — scrub frames with scroll
    const layer = document.getElementById("ncm-parallax");
    const sec = layer && layer.parentElement;
    const v = document.getElementById("ncm-truck");
    if (sec && layer) {
      const update = () => {
        const rect = sec.getBoundingClientRect();
        const vh = window.innerHeight;
        const sweep = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
        layer.style.transform = "translate3d(0," + ((sweep - 0.5) * 16).toFixed(2) + "%,0)";
        if (v && v.duration && isFinite(v.duration)) {
          const t = sweep * v.duration;
          if (Math.abs(v.currentTime - t) > 0.03) { try { v.currentTime = t; } catch (e) {} }
        }
      };
      let raf = 0;
      const loop = () => { update(); raf = requestAnimationFrame(loop); };
      const vis = new IntersectionObserver((ents) => {
        ents.forEach((en) => {
          if (en.isIntersecting && !raf) loop();
          else if (!en.isIntersecting && raf) { cancelAnimationFrame(raf); raf = 0; }
        });
      }, { rootMargin: "40% 0px 40% 0px" });
      vis.observe(sec);
      if (v) { v.muted = true; v.playsInline = true; v.loop = false; v.autoplay = false; try { v.pause(); } catch (e) {} }
      update();
    }

    // hero video — autoplay + loop so it's clearly a moving video. Some browsers
    // block autoplay until interaction, so retry on a few events and on scroll.
    const hv = document.getElementById("ncm-hero-vid");
    if (hv) {
      hv.muted = true; hv.playsInline = true; hv.loop = true; hv.autoplay = true;
      const tryPlay = () => { try { const p = hv.play(); if (p && p.catch) p.catch(() => {}); } catch (e) {} };
      tryPlay();
      ["loadeddata", "canplay"].forEach((ev) => hv.addEventListener(ev, tryPlay, { once: true }));
      const kick = () => { tryPlay(); if (!hv.paused) { window.removeEventListener("scroll", kick); window.removeEventListener("pointerdown", kick); } };
      window.addEventListener("scroll", kick, { passive: true });
      window.addEventListener("pointerdown", kick);
    }
  }

  /* ---------------- chrome: frosted header + scroll progress ---------------- */
  function initChrome() {
    const header = document.querySelector("#ncm-root header");
    const prog = document.getElementById("ncm-progress");
    const apply = () => {
      const y = window.scrollY || window.pageYOffset || 0;
      if (header) header.setAttribute("data-scrolled", y > 40 ? "true" : "false");
      if (prog) {
        const max = (document.documentElement.scrollHeight - window.innerHeight) || 1;
        prog.style.width = Math.max(0, Math.min(1, y / max)) * 100 + "%";
      }
    };
    window.addEventListener("scroll", apply, { passive: true });
    window.addEventListener("resize", apply, { passive: true });
    apply();
  }

  document.addEventListener("DOMContentLoaded", () => { initLang(); initChrome(); requestAnimationFrame(initMotion); });
})();
