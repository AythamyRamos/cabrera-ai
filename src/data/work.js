// ─────────────────────────────────────────────────────────────────────────
// Cabrera AI — "Our Work" project data
//
// This is the single source of truth for what appears in the Selected Work
// homepage section and the /work page. Only add projects here that have
// been explicitly approved for public display.
//
// NEVER add: RKShair, PK Facility Services, London Bites — these are
// permanently excluded from the public Cabrera AI portfolio (private /
// client work). If you're tempted to add one of these back, don't —
// check with Aythamy first.
// ─────────────────────────────────────────────────────────────────────────

export const STATUS = {
  LIVE: 'Live',
  DEMO: 'Demo',
  IN_DEVELOPMENT: 'In Development',
  PROTOTYPE: 'Prototype / Pre-Pilot',
};

export const workCategories = ['All', 'AI', 'SaaS', 'Websites', 'Automation', 'Education', 'Other'];

export const workProjects = [
  {
    id: 1,
    slug: 'studybuddy',
    name: 'StudyBuddy',
    category: 'Education',
    status: STATUS.LIVE,
    icon: '🎓',
    description: 'An AI study companion that helps students learn, revise, and prepare for exams — explaining concepts, generating practice questions, and tracking progress.',
    tags: ['React', 'AI', 'Education'],
    liveUrl: 'https://studybuddy.cabreraai.com',
    featured: true,
  },
  {
    id: 2,
    slug: 'asistentemed',
    name: 'AsistenteMed',
    category: 'AI',
    status: STATUS.LIVE,
    icon: '🩺',
    description: 'A Spanish-language AI health information assistant designed to make general health information easier to understand and help users prepare for conversations with healthcare professionals.',
    tags: ['AI', 'WhatsApp', 'Health'],
    liveUrl: 'https://asistentemed.cabreraai.com',
    featured: true,
    disclaimer: 'Provides general health information only. Not a substitute for professional medical advice, diagnosis, or treatment.',
  },
  {
    id: 3,
    slug: 'care-clarity',
    name: 'Care Clarity',
    category: 'AI',
    status: STATUS.DEMO,
    icon: '📄',
    description: 'An AI document assistant that turns complex care, housing, and benefits paperwork into clear summaries, action points, and draft responses.',
    tags: ['AI', 'Document Assistant'],
    liveUrl: 'https://carebench.lovable.app',
    featured: true,
    disclaimer: 'Demo project. Not legal, medical, financial, or benefits advice.',
  },
  {
    id: 4,
    slug: 'cabrera-escapes',
    name: 'Cabrera Escapes',
    category: 'Websites',
    status: STATUS.LIVE,
    icon: '🧭',
    description: 'A multi-language travel planning site for building bespoke holiday packages — flights, stays, transfers, and local favourites, organised end to end.',
    tags: ['React', 'Travel', 'Multi-language'],
    liveUrl: 'https://escapes.cabreraai.com',
    featured: true,
  },
  {
    id: 5,
    slug: 'ramos-maintenance',
    name: 'Ramos Maintenance',
    category: 'Websites',
    status: STATUS.LIVE,
    icon: '🛠️',
    description: 'A business website for a London property maintenance and handyman service — built to present services clearly and convert visitors into booked jobs.',
    tags: ['Website', 'Local Business'],
    liveUrl: 'https://rm.cabreraai.com',
    featured: true,
  },
  {
    id: 6,
    slug: 'bookedin-whatsapp',
    name: 'BookedIn WhatsApp',
    category: 'SaaS',
    status: STATUS.IN_DEVELOPMENT,
    icon: '📅',
    description: 'A multi-tenant WhatsApp booking platform for salons and barbers — appointment scheduling, staff and availability management, and automated reminders.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
    liveUrl: null,
    featured: false,
  },
  {
    id: 7,
    slug: 'token-compass',
    name: 'Token Compass',
    category: 'Other',
    status: STATUS.IN_DEVELOPMENT,
    icon: '🧭',
    description: 'A Solana token intelligence and community growth dashboard, surfacing risk and momentum signals alongside campaign and community tooling.',
    tags: ['Solana', 'Dashboard', 'Web3'],
    liveUrl: null,
    featured: false,
  },
  {
    id: 8,
    slug: 'villow-ai-presentation-agent',
    name: 'Villow AI Presentation Agent',
    category: 'AI',
    status: STATUS.PROTOTYPE,
    icon: '🖥️',
    description: 'An AI agent that helps generate presentation decks and slide content from a brief. Early-stage — not yet a production product.',
    tags: ['AI', 'Presentations'],
    liveUrl: null,
    featured: false,
  },
  {
    id: 9,
    slug: 'ecuazone',
    name: 'EcuaZONE',
    category: 'Other',
    status: STATUS.LIVE,
    icon: '🎬',
    description: 'An entertainment platform spotlighting young talent from Equatorial Guinea — challenges, social experiences, and original content.',
    tags: ['Media', 'Entertainment'],
    liveUrl: 'https://ecuazone.cabreraai.com',
    featured: false,
  },
];

export const featuredWork = workProjects.filter(p => p.featured);
