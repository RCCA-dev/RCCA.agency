const SITE=(()=>{
const CONTACT_EMAIL = "rcca.agency@gmail.com";

const services = [
  {
    id: "web",
    number: "01",
    title: "Website Development",
    tagline: "Fast, cinematic, conversion-built sites",
    body: "Custom marketing sites, landing pages and e-commerce storefronts engineered for speed and search. We design in-browser, ship responsive builds, and hand over a site your team can actually update.",
    points: [
      "Design systems & UI/UX",
      "Performance-first builds (90+ Lighthouse)",
      "SEO structure, schema & analytics",
      "CMS, e-commerce & payment setup",
    ],
  },
  {
    id: "campaigns",
    number: "02",
    title: "Campaign Management",
    tagline: "Paid media that pays for itself",
    body: "Full-funnel Meta, Google and TikTok campaigns — from creative strategy and audience mapping to daily optimisation and transparent reporting on the numbers that matter.",
    points: [
      "Creative strategy & ad production",
      "Audience research & funnel mapping",
      "A/B testing and scaling frameworks",
      "Weekly ROAS & CAC reporting",
    ],
  },
  {
    id: "clipping",
    number: "03",
    title: "Content Clipping",
    tagline: "One long-form asset. Thirty scroll-stoppers.",
    body: "We mine your podcasts, streams and webinars for the moments that travel, then cut, caption and format them for Reels, Shorts and TikTok with a consistent posting cadence.",
    points: [
      "Hook-first clip selection",
      "Auto-captions & brand kit styling",
      "Vertical reframing for every platform",
      "Posting calendar & performance review",
    ],
  },
  {
    id: "video",
    number: "04",
    title: "Video Editing",
    tagline: "Story, pace, sound design",
    body: "Brand films, product launches, YouTube long-form and ad creative. Colour graded, sound designed and delivered in every aspect ratio you need.",
    points: [
      "Narrative & pacing edit",
      "Colour grading and sound design",
      "Motion graphics & subtitles",
      "Multi-format delivery",
    ],
  },
  {
    id: "ai",
    number: "05",
    title: "AI Automation",
    tagline: "Put the busywork on autopilot",
    body: "Custom AI assistants, lead qualification bots and content pipelines wired into the tools you already use — so your team spends time on the work only humans can do.",
    points: [
      "AI chat & support agents",
      "Lead scoring and CRM enrichment",
      "Document & content generation pipelines",
      "Internal knowledge assistants",
    ],
  },
  {
    id: "n8n",
    number: "06",
    title: "n8n Workflows",
    tagline: "Your stack, finally talking to itself",
    body: "Self-hosted or cloud n8n builds that connect CRM, billing, inbox, sheets and Slack into reliable automations with logging, retries and alerting built in.",
    points: [
      "Workflow architecture & audit",
      "API and webhook integrations",
      "Error handling, retries, alerting",
      "Documentation & team handover",
    ],
  },
];

const stats = [
  { value: "120+", label: "Projects delivered" },
  { value: "40M+", label: "Views generated" },
  { value: "4.2x", label: "Average client ROAS" },
  { value: "18", label: "Countries served" },
];

const testimonials = [
  {
    quote:
      "RCCA rebuilt our storefront in five weeks and the difference was immediate — page speed doubled and checkout completion went from 38% to 61%. They ask better questions than any agency we've hired.",
    name: "Hamza Sheikh",
    role: "Founder, Northline Supply",
    result: "+61% checkout completion",
  },
  {
    quote:
      "We handed them a year of raw podcast footage. Within two months our Shorts channel passed 9 million views and inbound demo requests tripled. The clipping team just gets what travels.",
    name: "Elena Marsh",
    role: "Head of Growth, Fyra Labs",
    result: "9.1M views in 60 days",
  },
  {
    quote:
      "The n8n workflows they built quietly removed about 30 hours of manual admin a week. Leads route themselves, invoices reconcile themselves, and nothing falls through anymore.",
    name: "Daniyal Rehman",
    role: "Operations Director, Verta Group",
    result: "30 hrs/week saved",
  },
  {
    quote:
      "Our paid spend was flat for a year. RCCA restructured the funnel, rewrote the creative and got us to 4.6x ROAS by month three. Reporting is honest, even when the news isn't.",
    name: "Sofia Bianchi",
    role: "CMO, Atelier Nove",
    result: "4.6x ROAS",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    body: "A working session on goals, audience and constraints. We audit what exists and agree on the numbers we're moving.",
  },
  {
    step: "02",
    title: "Blueprint",
    body: "Scope, timeline and a written plan — screens, funnels or workflow maps — approved before a single line is built.",
  },
  {
    step: "03",
    title: "Build",
    body: "Weekly builds in a shared preview link. You see progress as it happens instead of waiting for a big reveal.",
  },
  {
    step: "04",
    title: "Scale",
    body: "Launch, measure, iterate. Monthly reporting and a retained team that keeps optimising after go-live.",
  },
];

const projects = [
  {
    slug: "northline",
    title: "Northline Supply",
    category: "Website Development",
    year: "2025",
    summary:
      "A full storefront rebuild for an outdoor equipment brand — headless commerce, sub-second loads and a checkout rewritten around one-thumb use.",
    metrics: [
      { value: "+61%", label: "Checkout completion" },
      { value: "0.9s", label: "Largest paint" },
      { value: "+34%", label: "Organic traffic" },
    ],
  },
  {
    slug: "fyra",
    title: "Fyra Labs",
    category: "Content Clipping & Editing",
    year: "2025",
    summary:
      "Turned 48 hours of podcast archive into 320 vertical clips with a daily posting cadence across Shorts, Reels and TikTok.",
    metrics: [
      { value: "9.1M", label: "Views in 60 days" },
      { value: "320", label: "Clips shipped" },
      { value: "3x", label: "Demo requests" },
    ],
  },
  {
    slug: "verta",
    title: "Verta Group",
    category: "AI Automation & n8n",
    year: "2024",
    summary:
      "Twenty-two n8n workflows connecting CRM, billing and support, with an AI triage agent that drafts replies and routes edge cases to humans.",
    metrics: [
      { value: "30h", label: "Saved weekly" },
      { value: "22", label: "Live workflows" },
      { value: "99.6%", label: "Run success rate" },
    ],
  },
  {
    slug: "atelier-nove",
    title: "Atelier Nove",
    category: "Campaign Management",
    year: "2024",
    summary:
      "Rebuilt a stalled paid programme for a fashion house: new creative system, restructured funnel and a testing cadence that compounds monthly.",
    metrics: [
      { value: "4.6x", label: "ROAS" },
      { value: "-38%", label: "Cost per acquisition" },
      { value: "2.1M", label: "Reach per month" },
    ],
  },
];
return {CONTACT_EMAIL,services,stats,testimonials,process:processSteps,projects};})();
