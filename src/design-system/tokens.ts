export const tokens = {
  // Color system — original dark academic palette
  // Never use pure black or pure white. All surfaces are layered.
  colors: {
    // Backgrounds (from deepest to elevated)
    bg: {
      base:      "#0B0F14",   // page
      elevated:  "#12181F",   // cards, sidebars
      overlay:   "#1A222C",   // modals, popovers
      hover:     "#1F2833",
      active:    "#263140",
    },
    // Borders
    border: {
      subtle:    "#1E2833",
      default:   "#2A3544",
      strong:    "#3A4A5C",
      focus:     "#5B8DEF",
    },
    // Text
    text: {
      primary:   "#E8EEF4",
      secondary: "#A0AEC0",
      tertiary:  "#6B7A8D",
      inverse:   "#0B0F14",
      accent:    "#7EB6FF",
    },
    // Accent system (single primary + semantic)
    accent: {
      primary:   "#5B8DEF",   // main interactive
      primaryHover: "#4A7DE0",
      primaryMuted: "#2A3F66",
      success:   "#3DDC97",
      warning:   "#F5C542",
      danger:    "#F07178",
      info:      "#64B5F6",
    },
    // Mastery level colors
    mastery: {
      new:       "#6B7A8D",
      learning:  "#F5C542",
      reviewing: "#5B8DEF",
      mastered:  "#3DDC97",
    },
    // Subject identity accents (subtle, used for left borders / icons)
    subject: {
      networking2: "#5B8DEF",
      sia1:        "#A78BFA",
      mobile:      "#34D399",
    }
  },

  // Typography
  font: {
    sans: "'Inter', system-ui, -apple-system, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
  fontSize: {
    xs:   "0.75rem",    // 12px
    sm:   "0.875rem",   // 14px
    base: "1rem",       // 16px
    lg:   "1.125rem",   // 18px
    xl:   "1.25rem",    // 20px
    "2xl":"1.5rem",     // 24px
    "3xl":"1.875rem",   // 30px
    "4xl":"2.25rem",    // 36px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
  },

  // Spacing (4px base)
  space: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10:"2.5rem",
    12:"3rem",
    16:"4rem",
    20:"5rem",
    24:"6rem",
  },

  // Radii
  radius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl":"1.25rem",
    full: "9999px",
  },

  // Shadows (very subtle, layered)
  shadow: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.25)",
    md: "0 4px 12px -2px rgb(0 0 0 / 0.35)",
    lg: "0 12px 32px -4px rgb(0 0 0 / 0.45)",
    glow: "0 0 0 1px rgba(91, 141, 239, 0.35)",
  },

  // Motion
  motion: {
    fast: "120ms",
    normal: "200ms",
    slow: "320ms",
    ease: "cubic-bezier(0.4, 0, 0.2, 1)",
  },

  // Layout
  layout: {
    sidebarWidth: "280px",
    sidebarCollapsed: "72px",
    maxContent: "1120px",
    headerHeight: "56px",
  }
} as const;
