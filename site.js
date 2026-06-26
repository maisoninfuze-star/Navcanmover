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
      "hero.eyebrow": "<span style=\"color:#FFC83D;\">★★★★★</span> &nbsp;Montreal & West Island Movers",
      "hero.l1": "Professional Movers",
      "hero.l2": "in Montreal &",
      "hero.l3": "West Island",
      "hero.tagline": "Fast <span class=\"accent\">•</span> Reliable <span class=\"accent\">•</span> Affordable",
      "hero.sub": "Affordable movers serving Montreal & the West Island — residential & commercial moving, furniture delivery, Marketplace pickup, packing and storage. Open 7 days a week.",
      "hero.cta": "Get a Free Quote →",
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
      "svc.1.t": "Marketplace Pickup & Delivery",
      "svc.1.p": "One couch, a table, a fridge — we meet the seller, load it in the truck and bring it to your door. Priced by the job, not padded by the hour.",
      "svc.2.t": "Furniture Delivery",
      "svc.2.p": "Sofas, beds, appliances, that impossible armoire from three floors up — we've got the truck, the straps and the muscle to get it home in one piece.",
      "nav.reviews": "Reviews",
      "nav.faq": "FAQ",
      "nav.quote": "Free Quote",
      "hero.cta2": "📞 Call Now: 579-888-7555",
      "svc.more.tag": "( Full-Service Moving )",
      "svc.3.t": "Residential Moving",
      "svc.3.p": "Houses, condos and townhomes across Montreal and the West Island — packed, loaded and moved with care.",
      "svc.4.t": "Apartment Moving",
      "svc.4.p": "Studios, 3½, 4½ and walk-ups — fast, careful apartment moves with the lifting and the truck included.",
      "svc.5.t": "Commercial Moving",
      "svc.5.p": "Offices, stores and equipment relocated after hours or on weekends to keep your business running.",
      "svc.6.t": "Packing & Unpacking",
      "svc.6.p": "Boxes, bubble wrap and labels handled for you — packed up tight and unpacked at the other end.",
      "svc.7.t": "Furniture Assembly",
      "svc.7.p": "Beds, shelves, IKEA flat-packs and more — disassembled before the move and rebuilt at your new place.",
      "svc.8.t": "Short-Term Storage",
      "svc.8.p": "Between moves or waiting on a closing date? Keep your items safe in short-term warehouse storage.",
      "svc.9.t": "Senior Moving",
      "svc.9.p": "Patient, respectful help for seniors downsizing or moving to a residence — at an easy, unhurried pace.",
      "svc.10.t": "Student Moving",
      "svc.10.p": "Affordable, fast moves for students — dorms, apartments and everything in between, on a tight budget.",
      "why.tag": "( Why Choose Us )",
      "why.head": "Why choose<br>NAVCAN Express?",
      "why.1": "Fully Insured",
      "why.2": "Affordable Rates",
      "why.3": "Professional Team",
      "why.4": "Same-Day Service Available",
      "why.5": "Furniture Protection Included",
      "why.6": "Friendly & Reliable Service",
      "why.7": "No Hidden Charges",
      "why.8": "Free Estimates",
      "bar.call": "Call Now",
      "bar.wa": "WhatsApp",
      "cta.hours": "🕑 Available 7 Days a Week",
      "quote.tag": "( Get a Free Quote )",
      "quote.head": "Tell us what<br>you're moving.",
      "quote.sub": "Fill in the details and tap send — your quote request goes straight to our WhatsApp and we'll reply with a flat price and a pickup time, fast. No obligation.",
      "quote.perk1": "Same-day replies, 7 days a week",
      "quote.perk2": "Reply by WhatsApp — send photos right in the chat",
      "quote.perk3": "Flat, upfront pricing — no surprises",
      "quote.f.name": "Your name",
      "quote.f.pickup": "Pickup address",
      "quote.f.delivery": "Delivery address",
      "quote.f.date": "Preferred date",
      "quote.f.phone": "Your phone",
      "quote.f.items": "Item details",
      "quote.f.photos": "Photos (optional)",
      "quote.ph.name": "First & last name",
      "quote.ph.pickup": "Where we pick up",
      "quote.ph.delivery": "Where we drop off",
      "quote.ph.phone": "(514) 000-0000",
      "quote.ph.items": "e.g. 3-seat sofa + coffee table, 2nd floor, no elevator",
      "quote.photos.hint": "You'll be asked to attach these in the WhatsApp chat that opens.",
      "quote.submit": "Send via WhatsApp",
      "quote.or": "Prefer to call?",
      "rev.tag": "( Customer Reviews )",
      "rev.head": "Trusted across<br>Montreal.",
      "rev.count": "based on 120+ local jobs",
      "rev.1.t": "Bought a sectional off Marketplace in Laval with no way to get it home. They picked it up same day, wrapped it, and set it up in my living room. Spotless.",
      "rev.1.n": "— Marie-Pier L., Ahuntsic",
      "rev.2.t": "Used them for a 4½ apartment move in the Plateau. On time, fast, careful with the walls and stairs. Way cheaper than the big moving companies.",
      "rev.2.n": "— David R., Le Plateau",
      "rev.3.t": "Mattress and bed frame delivered across the West Island within hours of me messaging on WhatsApp. Friendly, honest pricing, no surprises.",
      "rev.3.n": "— Sarah K., Pierrefonds",
      "faq.tag": "( FAQ )",
      "faq.head": "Good<br>to know.",
      "faq.sub": "Pricing, insurance, areas and the rest. Still have a question? <a href=\"#quote\" style=\"color:var(--accent,#E63329);text-decoration:none;font-weight:700;\">Ask us for a quote.</a>",
      "faq.q1": "How much does it cost?",
      "faq.a1": "Pricing is flat and upfront, based on distance, size and the number of items — not a per-minute meter. Send us the details for a free quote and you'll know the full price before we roll out.",
      "faq.q2": "Are my items insured?",
      "faq.a2": "Yes — we're insured and every load is wrapped in blankets and strapped down. Your items are protected from pickup to drop-off. Proof of insurance is available on request.",
      "faq.q3": "Which areas do you serve?",
      "faq.a3": "All of Montreal Island, the West Island, Laval and Greater Montreal. Going a bit further? Message us — we often cover the surrounding regions too.",
      "faq.q4": "How fast can you come?",
      "faq.a4": "Often the same day. We work 7 days a week, including weekends and evenings. Tell us your preferred date and we'll confirm a pickup time that works for you.",
      "faq.q5": "Do you do full moves and storage?",
      "faq.a5": "Yes — apartment moves, office moves, furniture and mattress delivery, plus short-term warehouse storage between moves or while you wait on a closing date.",
      "faq.q6": "How do I pay?",
      "faq.a6": "Interac e-Transfer, cash or card. You'll get the agreed flat price before the job — no hidden fees, no deposit games.",
      "loc.tag": "( Service Areas )",
      "loc.head": "Serving Montreal<br>& the West Island.",
      "loc.addr.label": "Our address",
      "loc.areas.label": "Service areas",
      "loc.areas": "Montreal Island · West Island · Laval · Greater Montreal",
      "loc.cta": "Get Directions →",
      "cta.head": "Ready<br><span class=\"accent\">to move?</span>",
      "cta.sub": "Call us today for a free estimate — available 7 days a week across Montreal & the West Island.",
      "cta.btn": "Get Free Quote",
      "cta.btn2": "Book Your Move",
      "cta.btn3": "Call Now",
      "wa.label": "WhatsApp",
      "foot.about": "Pickup-truck delivery for your Marketplace & second-hand finds, proudly based in Montreal, Quebec.",
      "foot.touch": "Get in touch",
      "foot.area": "Service area",
      "foot.areas": "Montreal Island<br>West Island · Laval<br>Greater Montreal",
      "foot.follow": "Follow",
      "foot.copy": "© Nav Can Movers Express — Montreal, QC",
      "foot.lic": "Licensed & insured · RBQ on request",
      "marq": ["Residential Moving", "Commercial Moving", "Furniture Delivery", "Marketplace Pickup", "Packing & Storage", "Montreal & West Island", "Same-Day Service"]
    },
    fr: {
      "brand.name": "Nav Can Déménagement Express",
      "brand.tag": "Ramassage &amp; Livraison Marketplace",
      "scroll": "Défiler",
      "nav.services": "Services",
      "nav.process": "Démarche",
      "hero.eyebrow": "<span style=\"color:#FFC83D;\">★★★★★</span> &nbsp;Déménageurs · Montréal & West Island",
      "hero.l1": "Déménageurs",
      "hero.l2": "à Montréal &",
      "hero.l3": "West Island",
      "hero.tagline": "Rapide <span class=\"accent\">•</span> Fiable <span class=\"accent\">•</span> Abordable",
      "hero.sub": "Déménageurs abordables à Montréal et dans le West Island — déménagement résidentiel et commercial, livraison de meubles, ramassage Marketplace, emballage et entreposage. Ouvert 7 jours sur 7.",
      "hero.cta": "Soumission gratuite →",
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
      "svc.1.t": "Ramassage & livraison Marketplace",
      "svc.1.p": "Un sofa, une table, un frigo — on rencontre le vendeur, on charge le tout et on le livre chez vous. Prix au forfait, pas gonflé à l'heure.",
      "svc.2.t": "Livraison de meubles",
      "svc.2.p": "Sofas, lits, électroménagers, cette armoire impossible au troisième étage — on a le camion, les sangles et les bras pour la ramener intacte.",
      "nav.reviews": "Avis",
      "nav.faq": "FAQ",
      "nav.quote": "Soumission",
      "hero.cta2": "📞 Appelez: 579-888-7555",
      "svc.more.tag": "( Déménagement complet )",
      "svc.3.t": "Déménagement résidentiel",
      "svc.3.p": "Maisons, condos et maisons de ville à Montréal et dans le West Island — emballés, chargés et déménagés avec soin.",
      "svc.4.t": "Déménagement d'appartement",
      "svc.4.p": "Studios, 3½, 4½ et walk-ups — déménagements rapides et soignés, avec le levage et le camion inclus.",
      "svc.5.t": "Déménagement commercial",
      "svc.5.p": "Bureaux, commerces et équipement déménagés en soirée ou la fin de semaine pour ne pas arrêter vos opérations.",
      "svc.6.t": "Emballage & déballage",
      "svc.6.p": "Boîtes, papier bulle et étiquettes gérés pour vous — emballé serré et déballé à l'arrivée.",
      "svc.7.t": "Montage de meubles",
      "svc.7.p": "Lits, étagères, meubles IKEA et plus — démontés avant le déménagement et remontés chez vous.",
      "svc.8.t": "Entreposage court terme",
      "svc.8.p": "Entre deux déménagements ou en attente d'une prise de possession? Gardez vos biens en sécurité en entrepôt à court terme.",
      "svc.9.t": "Déménagement pour aînés",
      "svc.9.p": "Aide patiente et respectueuse pour les aînés qui réduisent ou déménagent en résidence — à un rythme tranquille.",
      "svc.10.t": "Déménagement étudiant",
      "svc.10.p": "Déménagements abordables et rapides pour étudiants — résidences, appartements et tout le reste, à petit budget.",
      "why.tag": "( Pourquoi nous )",
      "why.head": "Pourquoi choisir<br>NAVCAN Express?",
      "why.1": "Entièrement assuré",
      "why.2": "Tarifs abordables",
      "why.3": "Équipe professionnelle",
      "why.4": "Service le jour même",
      "why.5": "Protection des meubles incluse",
      "why.6": "Service amical et fiable",
      "why.7": "Aucuns frais cachés",
      "why.8": "Estimations gratuites",
      "bar.call": "Appelez",
      "bar.wa": "WhatsApp",
      "cta.hours": "🕑 Ouvert 7 jours sur 7",
      "quote.tag": "( Soumission gratuite )",
      "quote.head": "Dites-nous ce que<br>vous déménagez.",
      "quote.sub": "Remplissez les détails et envoyez — votre demande va directement à notre WhatsApp et on répond vite avec un prix fixe et une heure de ramassage. Sans engagement.",
      "quote.perk1": "Réponses le jour même, 7 jours sur 7",
      "quote.perk2": "Réponse par WhatsApp — envoyez vos photos dans le clavardage",
      "quote.perk3": "Prix fixe et clair — aucune surprise",
      "quote.f.name": "Votre nom",
      "quote.f.pickup": "Adresse de ramassage",
      "quote.f.delivery": "Adresse de livraison",
      "quote.f.date": "Date souhaitée",
      "quote.f.phone": "Votre téléphone",
      "quote.f.items": "Détails des articles",
      "quote.f.photos": "Photos (facultatif)",
      "quote.ph.name": "Prénom et nom",
      "quote.ph.pickup": "Où on ramasse",
      "quote.ph.delivery": "Où on livre",
      "quote.ph.phone": "(514) 000-0000",
      "quote.ph.items": "ex. sofa 3 places + table basse, 2e étage, sans ascenseur",
      "quote.photos.hint": "On vous demandera de les joindre dans le clavardage WhatsApp qui s'ouvre.",
      "quote.submit": "Envoyer par WhatsApp",
      "quote.or": "Préférez appeler?",
      "rev.tag": "( Avis clients )",
      "rev.head": "Approuvé partout<br>à Montréal.",
      "rev.count": "selon 120+ contrats locaux",
      "rev.1.t": "Acheté un sofa sectionnel sur Marketplace à Laval sans moyen de le ramener. Ramassé le jour même, emballé et installé dans mon salon. Impeccable.",
      "rev.1.n": "— Marie-Pier L., Ahuntsic",
      "rev.2.t": "Utilisés pour un déménagement de 4½ sur le Plateau. À l'heure, rapides, soigneux avec les murs et les escaliers. Bien moins cher que les grosses compagnies.",
      "rev.2.n": "— David R., Le Plateau",
      "rev.3.t": "Matelas et cadre de lit livrés dans le West Island quelques heures après mon message WhatsApp. Sympathiques, prix honnêtes, aucune surprise.",
      "rev.3.n": "— Sarah K., Pierrefonds",
      "faq.tag": "( FAQ )",
      "faq.head": "Bon<br>à savoir.",
      "faq.sub": "Prix, assurance, secteurs et le reste. Une autre question? <a href=\"#quote\" style=\"color:var(--accent,#E63329);text-decoration:none;font-weight:700;\">Demandez une soumission.</a>",
      "faq.q1": "Combien ça coûte?",
      "faq.a1": "Le prix est fixe et clair, selon la distance, la taille et le nombre d'articles — pas de compteur à la minute. Envoyez-nous les détails pour une soumission gratuite et vous saurez le prix total avant qu'on parte.",
      "faq.q2": "Mes articles sont-ils assurés?",
      "faq.a2": "Oui — on est assurés et chaque chargement est emballé et sanglé. Vos articles sont protégés du ramassage à la livraison. Preuve d'assurance sur demande.",
      "faq.q3": "Quels secteurs desservez-vous?",
      "faq.a3": "Toute l'île de Montréal, le West Island, Laval et le Grand Montréal. Un peu plus loin? Écrivez-nous — on couvre souvent les régions environnantes aussi.",
      "faq.q4": "En combien de temps pouvez-vous venir?",
      "faq.a4": "Souvent le jour même. On travaille 7 jours sur 7, soirs et fins de semaine inclus. Dites-nous votre date souhaitée et on confirme une heure de ramassage qui vous convient.",
      "faq.q5": "Faites-vous les déménagements complets et l'entreposage?",
      "faq.a5": "Oui — déménagements d'appartement et de bureau, livraison de meubles et de matelas, plus l'entreposage à court terme entre deux déménagements.",
      "faq.q6": "Comment payer?",
      "faq.a6": "Virement Interac, comptant ou carte. Vous obtenez le prix fixe convenu avant le travail — aucuns frais cachés.",
      "loc.tag": "( Secteurs desservis )",
      "loc.head": "Montréal<br>& le West Island.",
      "loc.addr.label": "Notre adresse",
      "loc.areas.label": "Secteurs desservis",
      "loc.areas": "Île de Montréal · West Island · Laval · Grand Montréal",
      "loc.cta": "Itinéraire →",
      "cta.head": "Prêt à<br><span class=\"accent\">déménager?</span>",
      "cta.sub": "Appelez-nous aujourd'hui pour une estimation gratuite — 7 jours sur 7 à Montréal et dans le West Island.",
      "cta.btn": "Soumission gratuite",
      "cta.btn2": "Réservez",
      "cta.btn3": "Appelez",
      "wa.label": "WhatsApp",
      "foot.about": "Livraison en camionnette pour vos trouvailles Marketplace et de seconde main, fièrement basée à Montréal, Québec.",
      "foot.touch": "Nous joindre",
      "foot.area": "Zone de service",
      "foot.areas": "Île de Montréal<br>West Island · Laval<br>Grand Montréal",
      "foot.follow": "Suivez-nous",
      "foot.copy": "© Nav Can Déménagement Express — Montréal, QC",
      "foot.lic": "Licencié et assuré · RBQ sur demande",
      "marq": ["Déménagement résidentiel", "Déménagement commercial", "Livraison de meubles", "Ramassage Marketplace", "Emballage & entreposage", "Montréal & West Island", "Service le jour même"]
    }
  };

  function applyLang(lang) {
    const dict = I18N[lang] || I18N.en;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    // translatable input placeholders
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const k = el.getAttribute("data-i18n-ph");
      if (dict[k] != null) el.setAttribute("placeholder", dict[k]);
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

  /* ---------------- quote form -> WhatsApp ---------------- */
  const WA_NUMBER = "15798887555"; // +1 579 888 7555

  function initQuoteForm() {
    const form = document.getElementById("ncm-quote-form");
    if (!form) return;
    const photos = form.querySelector("#q-photos");
    const hint = document.getElementById("q-photos-hint");
    const baseHint = hint ? hint.textContent : "";
    if (photos && hint) {
      photos.addEventListener("change", () => {
        const n = photos.files ? photos.files.length : 0;
        hint.textContent = n ? (n + (n === 1 ? " photo · " : " photos · ") + baseHint) : baseHint;
      });
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = (id) => (form.querySelector("#" + id) ? form.querySelector("#" + id).value.trim() : "");
      const fr = document.documentElement.lang === "fr";
      const n = photos && photos.files ? photos.files.length : 0;
      const L = fr
        ? { hi: "Bonjour Nav Can Déménagement Express, j'aimerais une soumission.", name: "Nom", pickup: "Ramassage", delivery: "Livraison", date: "Date souhaitée", phone: "Téléphone", items: "Articles", pc: " photo(s) à joindre dans ce clavardage" }
        : { hi: "Hi Nav Can Movers Express, I'd like a quote.", name: "Name", pickup: "Pickup", delivery: "Delivery", date: "Preferred date", phone: "Phone", items: "Items", pc: " photo(s) to attach in this chat" };
      const lines = [L.hi, ""];
      const add = (label, v) => { if (v) lines.push(label + ": " + v); };
      add(L.name, val("q-name"));
      add(L.pickup, val("q-pickup"));
      add(L.delivery, val("q-delivery"));
      add(L.date, val("q-date"));
      add(L.phone, val("q-phone"));
      add(L.items, val("q-items"));
      if (n > 0) lines.push("📷 " + n + L.pc);
      const url = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
      window.open(url, "_blank");
    });
  }

  /* ---------------- FAQ accordion ---------------- */
  function initFaq() {
    const root = document.getElementById("ncm-faq");
    if (!root) return;
    const items = Array.from(root.querySelectorAll(".ncm-faq-item"));
    items.forEach((item) => {
      const btn = item.querySelector(".ncm-faq-q");
      const ans = item.querySelector(".ncm-faq-a");
      if (!btn || !ans) return;
      btn.setAttribute("aria-expanded", "false");
      btn.addEventListener("click", () => {
        const isOpen = item.getAttribute("aria-expanded") === "true";
        items.forEach((other) => {
          if (other !== item) {
            other.setAttribute("aria-expanded", "false");
            const ob = other.querySelector(".ncm-faq-q");
            const oa = other.querySelector(".ncm-faq-a");
            if (ob) ob.setAttribute("aria-expanded", "false");
            if (oa) oa.style.maxHeight = "0px";
          }
        });
        if (isOpen) {
          item.setAttribute("aria-expanded", "false");
          btn.setAttribute("aria-expanded", "false");
          ans.style.maxHeight = "0px";
        } else {
          item.setAttribute("aria-expanded", "true");
          btn.setAttribute("aria-expanded", "true");
          ans.style.maxHeight = ans.scrollHeight + "px";
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLang();
    initChrome();
    initQuoteForm();
    initFaq();
    requestAnimationFrame(initMotion);
  });
})();
