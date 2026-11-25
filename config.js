/**
 * ╔═══════════════════════════════════════════════════════════════╗
 * ║           CONFIGURAÇÃO PESSOAL — LINK MANAGER                ║
 * ║                                                               ║
 * ║  Edite APENAS este arquivo para personalizar sua página.      ║
 * ║  Nenhuma alteração no layout ou código é necessária.          ║
 * ╚═══════════════════════════════════════════════════════════════╝
 */

const CONFIG = {

  // ─── PERFIL ──────────────────────────────────────────────────
  profile: {
    name: "Jeffson Garreto",
    initials: "JG",
    // Para usar uma foto de perfil, descomente a linha abaixo
    // e adicione o caminho ou URL da imagem:
    // avatarUrl: "assets/avatar.jpg",
    tagline: "TECNOLOGIA · DESENVOLVIMENTO · INOVAÇÃO",
    bio: "Transformando ideias em soluções através da tecnologia.",
  },

  // ─── REDES SOCIAIS (ícones no cabeçalho) ─────────────────────
  // Cada item: { platform, url, ariaLabel }
  // Plataformas disponíveis: instagram, linkedin, github, email
  socials: [
    {
      platform: "instagram",
      url: "https://instagram.com/jeffsongarreto",
      ariaLabel: "Perfil no Instagram",
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/jeffsongarreto",
      ariaLabel: "Perfil no LinkedIn",
    },
    {
      platform: "github",
      url: "https://github.com/jeffsongarreto",
      ariaLabel: "Perfil no GitHub",
    },
    {
      platform: "email",
      url: "mailto:contato@jeffsongarreto.com",
      ariaLabel: "Enviar e-mail",
    },
  ],

  // ─── SEÇÕES DE LINKS ─────────────────────────────────────────
  // Cada seção: { number, title, links[] }
  // Cada link:  { icon, title, subtitle, url }
  //
  // Ícones disponíveis:
  //   briefcase, github, linkedin, graduation, layers,
  //   globe, code, rocket, mail, star, heart, zap
  sections: [
    {
      number: "01",
      title: "PROFISSIONAL",
      links: [
        {
          icon: "briefcase",
          title: "Meu portfólio",
          subtitle: "Experiência e trajetória",
          url: "https://jeffsongarreto.com",
        },
        {
          icon: "github",
          title: "GitHub",
          subtitle: "Projetos e desenvolvimento",
          url: "https://github.com/jeffsongarreto",
        },
        {
          icon: "linkedin",
          title: "LinkedIn",
          subtitle: "Conexões profissionais",
          url: "https://linkedin.com/in/jeffsongarreto",
        },
      ],
    },
    {
      number: "02",
      title: "PROJETOS",
      links: [
        {
          icon: "graduation",
          title: "Avalia.me",
          subtitle: "Tecnologia aplicada à educação",
          url: "https://avalia.me",
        },
        {
          icon: "layers",
          title: "Outros projetos",
          subtitle: "Soluções e experimentações",
          url: "#projetos",
        },
      ],
    },
  ],

  // ─── BOTÃO CTA (Chamada para ação) ───────────────────────────
  cta: {
    text: "Vamos conversar?",
    url: "https://wa.me/5500000000000", // Substitua pelo seu número
    ariaLabel: "Iniciar conversa no WhatsApp",
  },

  // ─── RODAPÉ ──────────────────────────────────────────────────
  footer: {
    text: "JEFFSON GARRETO · PERSONAL DIGITAL SPACE",
  },

  // ─── SEO E METADADOS ────────────────────────────────────────
  meta: {
    title: "Jeffson Garreto — Links",
    description:
      "Links pessoais e profissionais de Jeffson Garreto. Tecnologia, desenvolvimento e inovação.",
    themeColor: "#050505",
    ogImage: "", // URL de imagem para compartilhamento (opcional)
  },
};
