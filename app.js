/**
 * ═══════════════════════════════════════════════════════════════
 *  LINK MANAGER — App
 *  Renderiza a página a partir do CONFIG (config.js)
 * ═══════════════════════════════════════════════════════════════
 */

(() => {
  "use strict";

  // ─── Biblioteca de ícones SVG (Lucide-style, outline) ───────
  const ICONS = {
    briefcase: `<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M12 12v.01"/></svg>`,
    github: `<svg viewBox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    graduation: `<svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5"/></svg>`,
    layers: `<svg viewBox="0 0 24 24"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>`,
    globe: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
    code: `<svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    rocket: `<svg viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
    mail: `<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    star: `<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    heart: `<svg viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    zap: `<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor" stroke="none"/></svg>`,
    email: `<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    arrowUpRight: `<svg viewBox="0 0 24 24"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>`,
  };

  // ─── Helpers ─────────────────────────────────────────────────
  function getIcon(name) {
    return ICONS[name] || ICONS.globe;
  }

  function el(tag, attrs = {}, ...children) {
    const element = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
      if (key === "className") {
        element.className = value;
      } else if (key.startsWith("data")) {
        element.setAttribute(key.replace(/([A-Z])/g, "-$1").toLowerCase(), value);
      } else {
        element.setAttribute(key, value);
      }
    }
    for (const child of children) {
      if (typeof child === "string") {
        element.innerHTML += child;
      } else if (child) {
        element.appendChild(child);
      }
    }
    return element;
  }

  // ─── Atualizar Metadados ─────────────────────────────────────
  function applyMeta() {
    const { meta, profile } = CONFIG;
    document.title = meta.title || `${profile.name} — Links`;

    setMetaTag("description", meta.description);
    setMetaTag("theme-color", meta.themeColor);

    setMetaProperty("og:title", meta.title);
    setMetaProperty("og:description", meta.description);
    if (meta.ogImage) setMetaProperty("og:image", meta.ogImage);
    setMetaProperty("og:type", "website");
  }

  function setMetaTag(name, content) {
    if (!content) return;
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", name);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  }

  function setMetaProperty(property, content) {
    if (!content) return;
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("property", property);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  }

  // ─── Gerar Favicon SVG com Iniciais ─────────────────────────
  function generateFavicon() {
    const { initials } = CONFIG.profile;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <rect width="64" height="64" rx="14" fill="#0A0A0A"/>
      <text x="32" y="40" text-anchor="middle" font-family="Inter,system-ui,sans-serif"
            font-size="24" font-weight="600" fill="#C8AA7E">${initials}</text>
    </svg>`;
    const encoded = "data:image/svg+xml," + encodeURIComponent(svg);
    let link = document.querySelector('link[rel="icon"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "icon");
      link.setAttribute("type", "image/svg+xml");
      document.head.appendChild(link);
    }
    link.setAttribute("href", encoded);
  }

  // ─── Renderizar Avatar ──────────────────────────────────────
  function renderAvatar() {
    const { initials, avatarUrl } = CONFIG.profile;
    const wrapper = el("div", { className: "avatar", "aria-hidden": "true" });

    if (avatarUrl) {
      const img = el("img", {
        className: "avatar__image",
        src: avatarUrl,
        alt: CONFIG.profile.name,
      });
      wrapper.appendChild(img);
    } else {
      const span = el("span", { className: "avatar__initials" });
      span.textContent = initials;
      wrapper.appendChild(span);
    }
    return wrapper;
  }

  // ─── Renderizar Ícones Sociais ──────────────────────────────
  function renderSocials() {
    const nav = el("nav", { className: "socials", "aria-label": "Redes sociais" });
    CONFIG.socials.forEach((social) => {
      const a = el("a", {
        className: "social-link",
        href: social.url,
        target: social.platform === "email" ? "_self" : "_blank",
        rel: "noopener noreferrer",
        "aria-label": social.ariaLabel,
      });
      a.innerHTML = getIcon(social.platform);
      nav.appendChild(a);
    });
    return nav;
  }

  // ─── Renderizar Card de Link ────────────────────────────────
  function renderLinkCard(link) {
    const a = el("a", {
      className: "link-card",
      href: link.url,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": `${link.title} — ${link.subtitle}`,
    });

    // Ícone à esquerda
    const iconDiv = el("div", { className: "link-card__icon" });
    iconDiv.innerHTML = getIcon(link.icon);

    // Texto central
    const textDiv = el("div", { className: "link-card__text" });
    const title = el("div", { className: "link-card__title" });
    title.textContent = link.title;
    const subtitle = el("div", { className: "link-card__subtitle" });
    subtitle.textContent = link.subtitle;
    textDiv.appendChild(title);
    textDiv.appendChild(subtitle);

    // Seta à direita
    const arrowDiv = el("div", { className: "link-card__arrow", "aria-hidden": "true" });
    arrowDiv.innerHTML = getIcon("arrowUpRight");

    a.appendChild(iconDiv);
    a.appendChild(textDiv);
    a.appendChild(arrowDiv);

    return a;
  }

  // ─── Renderizar Seções ──────────────────────────────────────
  function renderSections() {
    const wrapper = el("div", { className: "sections" });

    CONFIG.sections.forEach((section) => {
      const sectionEl = el("section");

      // Rótulo da seção
      const label = el("div", { className: "section-label" });
      label.textContent = `${section.number} / ${section.title}`;
      sectionEl.appendChild(label);

      // Cards
      const linksContainer = el("div", { className: "section-links" });
      section.links.forEach((link) => {
        linksContainer.appendChild(renderLinkCard(link));
      });
      sectionEl.appendChild(linksContainer);

      wrapper.appendChild(sectionEl);
    });

    // Seção CTA
    const ctaSection = el("div", { className: "cta-section" });
    const ctaLabel = el("div", { className: "section-label" });
    ctaLabel.textContent = `0${CONFIG.sections.length + 1} / CONTATO`;
    ctaSection.appendChild(ctaLabel);

    const ctaButton = el("a", {
      className: "cta-button",
      href: CONFIG.cta.url,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": CONFIG.cta.ariaLabel,
    });
    ctaButton.textContent = CONFIG.cta.text;
    ctaSection.appendChild(ctaButton);

    wrapper.appendChild(ctaSection);

    return wrapper;
  }

  // ─── Renderizar Rodapé ──────────────────────────────────────
  function renderFooter() {
    const footer = el("footer", { className: "footer" });
    footer.textContent = CONFIG.footer.text;
    return footer;
  }

  // ─── Aplicar Animações Escalonadas ──────────────────────────
  function applyStaggeredAnimations(container) {
    const animatableSelectors = [
      ".avatar",
      ".profile-name",
      ".tagline",
      ".bio",
      ".socials",
      ".section-label",
      ".link-card",
      ".cta-button",
      ".footer",
    ];

    let delay = 0;
    animatableSelectors.forEach((selector) => {
      const elements = container.querySelectorAll(selector);
      elements.forEach((el) => {
        delay++;
        el.classList.add("animate-in", `delay-${Math.min(delay, 15)}`);
      });
    });
  }

  // ─── Montar Página ──────────────────────────────────────────
  function render() {
    applyMeta();
    generateFavicon();

    const container = el("main", {
      className: "container",
      role: "main",
      "aria-label": `Links pessoais de ${CONFIG.profile.name}`,
    });

    // Cabeçalho
    const header = el("header", { className: "header" });
    header.appendChild(renderAvatar());

    const name = el("h1", { className: "profile-name" });
    name.textContent = CONFIG.profile.name;
    header.appendChild(name);

    const tagline = el("p", { className: "tagline" });
    tagline.textContent = CONFIG.profile.tagline;
    header.appendChild(tagline);

    const bio = el("p", { className: "bio" });
    bio.textContent = CONFIG.profile.bio;
    header.appendChild(bio);

    header.appendChild(renderSocials());
    container.appendChild(header);

    // Seções
    container.appendChild(renderSections());

    // Rodapé
    container.appendChild(renderFooter());

    // Montar no DOM
    const root = document.getElementById("app");
    root.innerHTML = "";
    root.appendChild(container);

    // Animações
    applyStaggeredAnimations(container);
  }

  // ─── Iniciar ────────────────────────────────────────────────
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
