type P = { className?: string }

const s = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export const ArrowRight = ({ className }: P) => (
  <svg className={className} {...s}><path d="M4 12h15M13 6l6 6-6 6" /></svg>
)

export const ArrowDown = ({ className }: P) => (
  <svg className={className} {...s}><path d="M12 4v15M6 13l6 6 6-6" /></svg>
)

export const Play = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg>
)

/* --- Processo / Quem somos --- */
export const Cart = ({ className }: P) => (
  <svg className={className} {...s}>
    <path d="M3 4h2.2l2 11.2a1.6 1.6 0 0 0 1.6 1.3h8.4a1.6 1.6 0 0 0 1.6-1.3L20.5 8H6" />
    <circle cx="9.5" cy="20" r="1.2" /><circle cx="17.5" cy="20" r="1.2" />
  </svg>
)

export const Sort = ({ className }: P) => (
  <svg className={className} {...s}>
    <circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /><path d="M8.5 11h5M11 8.5v5" />
  </svg>
)

export const Droplet = ({ className }: P) => (
  <svg className={className} {...s}>
    <path d="M12 3s6 6.3 6 10.2A6 6 0 0 1 6 13.2C6 9.3 12 3 12 3Z" />
    <path d="M9.4 14a2.7 2.7 0 0 0 2.6 2.6" />
  </svg>
)

export const CheckBadge = ({ className }: P) => (
  <svg className={className} {...s}>
    <path d="M12 3 4.5 6v5.4c0 4.3 3.1 7.8 7.5 8.6 4.4-.8 7.5-4.3 7.5-8.6V6L12 3Z" />
    <path d="m8.8 12 2.2 2.2 4.2-4.4" />
  </svg>
)

export const Gear = ({ className }: P) => (
  <svg className={className} {...s}>
    <circle cx="12" cy="12" r="3.2" />
    <path d="M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7M18.5 18.5l-1.7-1.7M7.2 7.2 5.5 5.5" />
  </svg>
)

export const Box = ({ className }: P) => (
  <svg className={className} {...s}>
    <path d="M3.5 7.5 12 3.5l8.5 4v9L12 20.5l-8.5-4v-9Z" />
    <path d="m3.5 7.5 8.5 4 8.5-4M12 11.5v9" />
  </svg>
)

export const Truck = ({ className }: P) => (
  <svg className={className} {...s}>
    <path d="M2.5 16.5V6.8a.8.8 0 0 1 .8-.8h9.4a.8.8 0 0 1 .8.8v9.7" />
    <path d="M13.5 10h3.6l4.4 4.3v2.2h-8" />
    <circle cx="6.8" cy="18" r="1.7" /><circle cx="17.2" cy="18" r="1.7" />
  </svg>
)

/* --- Números / Qualidade --- */
export const Weight = ({ className }: P) => (
  <svg className={className} {...s}>
    <path d="M6 8h12l1.8 11.2a1 1 0 0 1-1 1.3H5.2a1 1 0 0 1-1-1.3L6 8Z" />
    <path d="M9.4 8a2.6 2.6 0 1 1 5.2 0" />
  </svg>
)

export const Users = ({ className }: P) => (
  <svg className={className} {...s}>
    <circle cx="9" cy="8.5" r="3.2" />
    <path d="M2.8 19.5a6.2 6.2 0 0 1 12.4 0" />
    <path d="M16.2 6a3.2 3.2 0 0 1 0 6.2M17.5 14.2a5.6 5.6 0 0 1 3.7 5.3" />
  </svg>
)

export const Pin = ({ className }: P) => (
  <svg className={className} {...s}>
    <path d="M12 21s7-6.3 7-11.6A7 7 0 0 0 5 9.4C5 14.7 12 21 12 21Z" /><circle cx="12" cy="9.4" r="2.5" />
  </svg>
)

export const Shield = ({ className }: P) => (
  <svg className={className} {...s}>
    <path d="M12 3 4.8 6v5.6c0 4.3 3 7.8 7.2 8.6 4.2-.8 7.2-4.3 7.2-8.6V6L12 3Z" />
  </svg>
)

export const Leaf = ({ className }: P) => (
  <svg className={className} {...s}>
    <path d="M5 20c8-1 14-6 14-15-9 0-14 6-14 15Z" /><path d="M5 20c1.4-4 4-7 8-9.4" />
  </svg>
)

export const Headset = ({ className }: P) => (
  <svg className={className} {...s}>
    <path d="M4.5 14v-2a7.5 7.5 0 0 1 15 0v2" />
    <path d="M4.5 14h2v4.5h-2A1.5 1.5 0 0 1 3 17v-1.5A1.5 1.5 0 0 1 4.5 14ZM19.5 14h-2v4.5h2A1.5 1.5 0 0 0 21 17v-1.5a1.5 1.5 0 0 0-1.5-1.5Z" />
    <path d="M17.5 18.5v.5a2.5 2.5 0 0 1-2.5 2.5h-2" />
  </svg>
)

export const Route = ({ className }: P) => (
  <svg className={className} {...s}>
    <circle cx="6" cy="6" r="2.4" /><circle cx="18" cy="18" r="2.4" />
    <path d="M8.4 6h5.1a3.5 3.5 0 0 1 0 7h-3a3.5 3.5 0 0 0 0 7h5.1" />
  </svg>
)

/* --- Contato --- */
export const Phone = ({ className }: P) => (
  <svg className={className} {...s}>
    <path d="M5 3.5h3.4l1.6 4.3-2 1.5a12.4 12.4 0 0 0 6.2 6.2l1.5-2 4.3 1.6V19a2 2 0 0 1-2 2C10.6 21 3 13.4 3 5.5a2 2 0 0 1 2-2Z" />
  </svg>
)

export const Mail = ({ className }: P) => (
  <svg className={className} {...s}>
    <rect x="3" y="5" width="18" height="14" rx="2.2" /><path d="m4 7.5 8 5.5 8-5.5" />
  </svg>
)

export const Clock = ({ className }: P) => (
  <svg className={className} {...s}><circle cx="12" cy="12" r="8.8" /><path d="M12 6.8V12l3.4 2" /></svg>
)

/* --- Sociais --- */
export const Instagram = ({ className }: P) => (
  <svg className={className} {...s}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.6" /><circle cx="12" cy="12" r="3.7" /><circle cx="16.9" cy="7.1" r="1" fill="currentColor" />
  </svg>
)

export const Facebook = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.29-.04-1.27-.12-2.4-.12-2.38 0-4 1.45-4 4.12v2.3H7.6V13h2.7v8h3.2Z" />
  </svg>
)

export const Linkedin = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.94 8.5H4V20h2.94V8.5ZM5.47 3.6a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20 13.6c0-3.1-1.66-4.55-3.87-4.55-1.78 0-2.58 1-3.02 1.7V8.5H10.2c.04.83 0 11.5 0 11.5h2.9v-6.42c0-.26.02-.52.1-.7.2-.52.68-1.05 1.48-1.05 1.05 0 1.47.8 1.47 1.96V20H20v-6.4Z" />
  </svg>
)

export const Whatsapp = ({ className }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.5 0-10 4.5-10 10 0 1.77.47 3.45 1.28 4.9L2 22l5.25-1.28A9.96 9.96 0 0 0 12.04 22c5.5 0 10-4.5 10-10s-4.5-10-10-10Zm5.84 14.24c-.25.7-1.44 1.34-1.98 1.4-.5.06-1.14.09-1.84-.12-.42-.13-.97-.31-1.66-.6-2.93-1.27-4.84-4.22-4.99-4.42-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.6-.37.8-.37h.57c.18 0 .43-.07.67.51.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.32.4-.45.53-.15.15-.31.31-.13.6.18.3.8 1.32 1.71 2.14 1.18 1.05 2.17 1.38 2.47 1.53.3.15.47.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.75.83 2.05.98.3.15.5.23.57.35.07.13.07.75-.18 1.45Z" />
  </svg>
)
