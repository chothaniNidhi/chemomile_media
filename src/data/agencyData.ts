import { ServiceItem, ProjectItem, TestimonialItem, ProcessStepItem, AdvantageItem } from '../types';

export const AGENCY_STATS = [
  { value: '$180M+', label: 'Client Revenue Influenced', sub: 'Across US Portfolio Brands' },
  { value: '98.4%', label: 'Partner Retention Rate', sub: 'Long-Term Creative Retainers' },
  { value: '45+', label: 'US States Served', sub: 'From Coast-to-Coast' },
  { value: '14', label: 'Design & Craft Accolades', sub: 'Awwwards, FWA & Brand Awards' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'brand-strategy',
    title: 'Brand Strategy & Identity',
    subtitle: 'From Unclear to Unmistakable',
    description: 'We carve distinct positions in crowded markets. Through deep cultural research, narrative architecture, and bespoke visual systems, we build brands that hold market authority.',
    iconName: 'Compass',
    badge: 'CORE FOUNDATION',
    metrics: '+4.2x Brand Recall',
    deliverables: [
      'Visual Identity & Logo Systems',
      'Brand Architecture & Guidelines',
      'Verbal Identity & Brand Tone',
      'Packaging & Print Systems',
      'Trademark-Ready Design Systems'
    ],
    gradient: 'from-[#398DA5]/20 via-[#FAF9F5] to-[#E6D2B3]/30',
    featuredVisual: {
      color: '#398DA5',
      shape: 'torus',
      label: 'Strategy Blueprint'
    }
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    subtitle: 'Community over Clutter',
    description: 'We banish generic posts. We architect bespoke content ecosystems that capture mindshare, cultivate authentic advocates, and turn casual followers into high-LTV customers.',
    iconName: 'Share2',
    badge: 'ORGANIC ACCELERATION',
    metrics: '340% Avg Engagement Growth',
    deliverables: [
      'Social Strategy & Narrative Arc',
      'Short-Form Video Production (Reels/TikTok)',
      'Creator & Influencer Partnerships',
      'Community Management & Growth',
      'Social Commerce & Shop Integrations'
    ],
    gradient: 'from-[#F7B638]/20 via-[#FAF9F5] to-[#A9BBA5]/30',
    featuredVisual: {
      color: '#F7B638',
      shape: 'sphere',
      label: 'Engagement Engine'
    }
  },
  {
    id: 'content-creation',
    title: 'Content Creation & Art Direction',
    subtitle: 'Cinematic Storytelling for Modern Brands',
    description: 'Compelling imagery speaks louder than buzzwords. We produce high-concept editorial photography, 3D motion graphics, brand films, and copy that arrests scrolling attention.',
    iconName: 'Camera',
    badge: 'VISUAL STORYTELLING',
    metrics: '2.8x Click-Through Rates',
    deliverables: [
      'Commercial Photography & Styling',
      '3D Motion Design & CGI Product Reveals',
      'Brand Documentary & Commercial Video',
      'Persuasive Editorial Copywriting',
      'Multi-Format Asset Libraries'
    ],
    gradient: 'from-[#A9BBA5]/25 via-[#FAF9F5] to-[#398DA5]/20',
    featuredVisual: {
      color: '#A9BBA5',
      shape: 'dodecahedron',
      label: 'Art Direction'
    }
  },
  {
    id: 'web-development',
    title: 'Web Design & 3D Development',
    subtitle: 'Digital flagship experiences that convert',
    description: 'Websites should not feel like digitized PDFs. We build award-winning 3D web experiences, headless e-commerce flagships, and web apps that deliver sensory delight with fast load speeds.',
    iconName: 'Code2',
    badge: 'AWARD-WINNING DEV',
    metrics: '+68% Conversion Uplift',
    deliverables: [
      'Three.js & WebGL 3D Interactive Design',
      'Full-Stack Next.js / React Development',
      'Shopify Plus & Headless Commerce',
      'Motion Design & Micro-Interactions',
      'High-Speed Core Web Vitals Optimization'
    ],
    gradient: 'from-[#398DA5]/25 via-[#FAF9F5] to-[#F7B638]/20',
    featuredVisual: {
      color: '#398DA5',
      shape: 'cylinder',
      label: '3D Web Experience'
    }
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    subtitle: 'Data-driven growth that scales sustainably',
    description: 'Creative and data shouldn’t operate in silos. We deploy full-funnel paid media campaigns across Meta, Google, and TikTok that convert creative resonance into bottom-line revenue.',
    iconName: 'TrendingUp',
    badge: 'MEASURABLE ROI',
    metrics: '4.8x Blended ROAS',
    deliverables: [
      'Omnichannel Paid Media (Meta, Google, TikTok)',
      'Creative Testing & Dynamic Creative Optimization',
      'Conversion Rate Optimization (CRO)',
      'Attribution Modeling & Custom Dashboards',
      'Retention Marketing (Klaviyo / Lifecycle Email)'
    ],
    gradient: 'from-[#E6D2B3]/35 via-[#FAF9F5] to-[#398DA5]/25',
    featuredVisual: {
      color: '#E6D2B3',
      shape: 'icosahedron',
      label: 'Performance Engine'
    }
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'lumina-botanical',
    title: 'Lumina Botanical Skincare',
    client: 'Lumina Labs',
    location: 'San Francisco, CA',
    category: 'Brand Identity',
    tagline: 'Clean clinical botanicals for intentional living',
    description: 'Complete brand genesis for a luxury bioactive skincare brand. We crafted an ethereal botanical visual identity, sustainable tactile packaging with embossed foil, and a high-converting digital storefront that generated $2.4M in its first 90 days.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop',
    accentColor: '#398DA5',
    metrics: [
      { label: 'First 90 Days Revenue', value: '$2.4M' },
      { label: 'E-Commerce Conversion', value: '4.8%' },
      { label: 'Organic Press Mentions', value: '38+' }
    ],
    challenge: 'Enter a saturated US clean-beauty market dominated by massive legacy players without relying strictly on high customer acquisition cost (CAC).',
    solution: 'Engineered a calming, clinical-yet-warm botanical identity and custom interactive ingredient encyclopedia in 3D that elevated customer trust immediately.',
    deliverables: ['Brand Identity', 'Custom Typography', 'Packaging Architecture', '3D Web Experience', 'Launch Campaign'],
    year: '2025'
  },
  {
    id: 'aura-health',
    title: 'Aura Health & Smart Wearables',
    client: 'Aura Bio-Tech Corp',
    location: 'Austin, TX',
    category: 'Web & 3D',
    tagline: 'Biometric harmony meets ambient human hardware',
    description: 'An interactive 3D WebGL product reveal and digital flagship for a next-generation circadian wearable. Visitors can dissect the device in real-time 3D, inspect sensors, and simulate bio-feedback visualization before pre-ordering.',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1200&auto=format&fit=crop',
    accentColor: '#F7B638',
    metrics: [
      { label: 'Pre-Orders Generated', value: '18,500+' },
      { label: 'Average Time on Site', value: '4m 42s' },
      { label: 'Awwwards Recognition', value: 'Site of the Day' }
    ],
    challenge: 'Explaining complex photonic sensor technology without confusing non-technical wellness consumers.',
    solution: 'Designed an interactive 3D exploded view with real-time lighting shaders that turns technical hardware specs into an emotional luxury experience.',
    deliverables: ['WebGL 3D Interactive Site', '3D Product Modeling', 'Sound Design Integration', 'Full-Funnel CRO'],
    year: '2025'
  },
  {
    id: 'solstice-beverage',
    title: 'Solstice Botanical Sparkling Water',
    client: 'Solstice Beverage Co.',
    location: 'Portland, OR',
    category: 'Social & Growth',
    tagline: 'Sun-steeped herbs in sparkling mineral spring water',
    description: 'Comprehensive brand relaunch and omnichannel social blitz across US coastal markets. We executed hyper-stylized macro photography, creator-led TikTok campaigns, and targeted regional retail activations that got Solstice stocked in 400+ Whole Foods doors.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1200&auto=format&fit=crop',
    accentColor: '#A9BBA5',
    metrics: [
      { label: 'Whole Foods Distribution', value: '420 Stores' },
      { label: 'Social Engagement Rate', value: '7.6%' },
      { label: 'Follower Growth (6 Mos)', value: '+142K' }
    ],
    challenge: 'Breaking through the noise of legacy sparkling water brands with a higher price-point botanical drink.',
    solution: 'Built an aspirational community brand centered on midday mindfulness, paired with high-energy UGC and sensory sound reels.',
    deliverables: ['Social Strategy', 'Content Studio Production', 'Influencer Seeding Kit', 'Retail POP Displays'],
    year: '2024'
  },
  {
    id: 'vanguard-capital',
    title: 'Vanguard Capital Partners',
    client: 'Vanguard Group NY',
    location: 'New York, NY',
    category: 'Performance',
    tagline: 'Quiet institutional power for modern venture funds',
    description: 'Rebranding and investor acquisition platform for a \$650M climate and clean-tech venture firm. We combined deep charcoal editorial aesthetics with bespoke typography and precision targeting to attract tier-1 family offices.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    accentColor: '#398DA5',
    metrics: [
      { label: 'LP Investor Inquiries', value: '+310%' },
      { label: 'Fund IV Oversubscribed', value: '$120M' },
      { label: 'Institutional Press', value: 'Forbes / WSJ' }
    ],
    challenge: 'Overcoming the dry, bureaucratic stereotype of venture capital web portals while maintaining institutional prestige.',
    solution: 'Created an editorial digital monograph with dynamic portfolio case studies and discreet private portal access.',
    deliverables: ['Institutional Brand System', 'Private LP Portal', 'Executive Media Training', 'Thought Leadership Suite'],
    year: '2024'
  },
  {
    id: 'kalon-architecture',
    title: 'Kalon Architectural Studio',
    client: 'Kalon Atelier',
    location: 'Seattle, WA',
    category: 'Web & 3D',
    tagline: 'Biophilic residential monoliths carved from native cedar',
    description: 'A minimalist digital archive showcasing award-winning Pacific Northwest architectural residences. Smooth horizontal scroll mechanics, full-screen blueprint reveals, and tactile cursor physics highlight architectural precision.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    accentColor: '#E6D2B3',
    metrics: [
      { label: 'High-Value Project Leads', value: '24 Deals' },
      { label: 'Architectural Record Feature', value: 'Lead Cover' },
      { label: 'Avg Inquired Project Budget', value: '$4.2M' }
    ],
    challenge: 'Showcasing sprawling physical spatial experiences on digital screens without losing emotional texture.',
    solution: 'Engineered a cinematic viewport with ambient soundscapes and high-definition architectural flythroughs.',
    deliverables: ['Custom Portfolio Architecture', 'Micro-Interactions', 'Interactive Project Map', 'Print Monograph'],
    year: '2024'
  }
];

export const WHY_CHOOSE_US_DATA: AdvantageItem[] = [
  {
    title: 'Strategy-First Architecture',
    subtitle: 'Never designing blindly for aesthetic trends',
    description: 'Every color hex, headline, and 3D polygon is anchored in rigorous US market intelligence, competitive moat analysis, and psychological consumer triggers.',
    statNumber: '100%',
    statLabel: 'Grounding in Business Logic',
    icon: 'Target',
    bullets: [
      'Comprehensive competitor landscape mapping',
      'Target buyer persona deep-dives',
      'Value proposition differentiation matrix'
    ]
  },
  {
    title: 'Awwwards-Caliber Creative Craft',
    subtitle: 'Sensory experiences that command memory',
    description: 'We reject generic templates and cookie-cutter layouts. We engineer custom bespoke typography, 3D interactive canvases, and cinematic brand identities that win industry awards.',
    statNumber: '14+',
    statLabel: 'International Design Awards',
    icon: 'Sparkles',
    bullets: [
      'Custom Three.js & WebGL implementations',
      'Handcrafted typography & bespoke palettes',
      'Micro-interactions that spark sensory delight'
    ]
  },
  {
    title: 'Data-Driven Mathematical Decisions',
    subtitle: 'Creative intuition validated by hard metrics',
    description: 'We test, measure, and optimize every funnel stage. From micro-copy multivariate testing to heatmaps and attribution tracking, we ensure visual elegance converts to cash flow.',
    statNumber: '3.4x',
    statLabel: 'Average Client ROAS Scale',
    icon: 'BarChart3',
    bullets: [
      'Real-time analytics and predictive attribution',
      'Continuous conversion rate optimization (CRO)',
      'A/B tested creative hooks across ad platforms'
    ]
  },
  {
    title: 'Growth-Focused Enterprise Results',
    subtitle: 'Scalable infrastructure built for expansion',
    description: 'We don’t deliver files and vanish. We build living design systems, modular e-commerce stacks, and automated marketing workflows that scale with you as your business multiplies.',
    statNumber: '$180M',
    statLabel: 'Client Valuation Added',
    icon: 'Rocket',
    bullets: [
      'Living Figma design token systems',
      'Headless modern tech stack longevity',
      'Quarterly growth & brand audit roadmaps'
    ]
  }
];

export const PROCESS_DATA: ProcessStepItem[] = [
  {
    number: '01',
    title: 'Discover',
    phase: 'WEEKS 1 — 2',
    description: 'We dive deep beneath the surface of your business. We audit your current brand equity, interview key stakeholders, dissect your competitors, and unearth unexploited market white-space.',
    deliverables: ['Brand Audit Synthesis', 'Customer Persona Archetypes', 'Competitive Positioning Matrix', 'Creative Brief & North Star'],
    duration: '2 Weeks',
    icon: 'Search'
  },
  {
    number: '02',
    title: 'Strategize',
    phase: 'WEEKS 3 — 4',
    description: 'We define the strategic spine of your brand. We formulate your core messaging pillars, unique value proposition, verbal voice, and overarching go-to-market trajectory.',
    deliverables: ['Brand Narrative Deck', 'Core Value Architecture', 'Information Architecture', 'Growth Roadmap & KPIs'],
    duration: '2 Weeks',
    icon: 'Compass'
  },
  {
    number: '03',
    title: 'Create',
    phase: 'WEEKS 5 — 8',
    description: 'The creative alchemy begins. Our team crafts the visual identity, 3D assets, custom website code, motion systems, and high-impact advertising assets in synchronized sprints.',
    deliverables: ['Complete Visual Identity System', 'Interactive 3D Web Flagship', 'Packaging & Collateral', 'High-Converting Ad Creative Library'],
    duration: '4 Weeks',
    icon: 'Palette'
  },
  {
    number: '04',
    title: 'Launch',
    phase: 'WEEKS 9 — 10',
    description: 'Execution meets theater. We orchestrate a synchronized multi-channel launch across digital platforms, PR networks, email lists, and paid social channels with zero downtime.',
    deliverables: ['Deployment & QA Testing', 'PR Launch Kit & Social Campaign', 'Paid Media Funnel Activation', 'Analytics & Tracking Architecture'],
    duration: '2 Weeks',
    icon: 'Send'
  },
  {
    number: '05',
    title: 'Grow',
    phase: 'ONGOING RETAINER',
    description: 'Launch day is just the starting line. We continuously test, analyze consumer behavior, deploy creative iterations, and scale advertising spend to maximize enterprise valuation.',
    deliverables: ['Bi-Weekly Performance Reviews', 'Continuous A/B Creative Testing', 'Quarterly Growth Sprints', 'Ongoing Brand Governance'],
    duration: 'Long-term',
    icon: 'TrendingUp'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'Chamomile Media transformed our brand from a confusing technical lab into a cult-favorite botanical brand. Our DTC sales surged 340% within four months of the 3D flagship website launch.',
    author: 'Elena Vance, Ph.D.',
    role: 'Founder & CEO',
    company: 'Lumina Botanical Labs',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    projectType: 'Brand Identity & 3D Web Experience',
    highlightMetric: '+340% DTC Revenue',
    rating: 5
  },
  {
    id: 'test-2',
    quote: 'The 3D interactive product experience Chamomile Media engineered for our wearable pre-order was nothing short of breathtaking. We hit our first year sales target in just 26 days.',
    author: 'Marcus Sterling',
    role: 'Chief Product Officer',
    company: 'Aura Bio-Tech Corp',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    projectType: '3D WebGL Reveal & Growth Campaign',
    highlightMetric: '18,500 Pre-Orders',
    rating: 5
  },
  {
    id: 'test-3',
    quote: 'They brought calm and precision to a high-stakes \$650M fund launch. Their understanding of US investor psychology paired with impeccable design gave us an unbeatable edge.',
    author: 'Victoria Sterling-Hayes',
    role: 'Managing Partner',
    company: 'Vanguard Capital Partners',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop',
    projectType: 'Institutional Rebrand & LP Portal',
    highlightMetric: 'Fund Oversubscribed by $120M',
    rating: 5
  }
];

export const FAQ_DATA = [
  {
    q: 'How does Chamomile Media differ from traditional digital agencies?',
    a: 'Traditional agencies either offer pretty graphics with zero business metrics, or aggressive ad tactics with terrible design. We unify botanical calm and design excellence with cold, analytical performance marketing. Plus, our interactive 3D WebGL capabilities give you a site that truly stands apart.'
  },
  {
    q: 'What is typical project turnaround time?',
    a: 'Complete brand identity and 3D web flagships typically take between 6 to 10 weeks from initial discovery to live production. For fast-track performance marketing retainers, we can launch initial testing cycles in as little as 14 business days.'
  },
  {
    q: 'Do you work with startups, established brands, or both?',
    a: 'We work with ambitious US businesses across all growth stages — from venture-backed Seed and Series-A startups ready for their breakout identity, to mid-market enterprise brands requiring digital modernization.'
  },
  {
    q: 'What does "Calming the Chaos of Branding" mean?',
    a: 'Modern marketing is noisy, fragmented, and overwhelming. We simplify your entire brand ecosystem into a clear, unified, and tranquil digital machine where every element has purpose and drives tangible ROI.'
  }
];
