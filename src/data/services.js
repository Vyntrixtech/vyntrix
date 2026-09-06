// Central service catalogue — shared by the Home cards, Services overview,
// Service detail pages, footer links and the Contact form's dropdown.

export const services = [
  {
    slug: "website-development",
    number: "01",
    icon: "website",
    name: "Website Development",
    short:
      "Business websites, e-commerce, landing pages, custom builds, redesigns, WordPress and ongoing maintenance.",
    tagline: "Designed, built, tested and maintained by one team.",
    lede: "Fast, responsive websites built to be found on search and to convert the visitors you already have.",
    included: [
      { title: "Business Websites", icon: "website", body: "Multi-page sites built around how your customers actually search and buy." },
      { title: "E-commerce Sites", icon: "ecommerce", body: "Product catalogues, payments and order management, built to scale." },
      { title: "Landing Pages", icon: "target", body: "Focused, fast-loading pages for a single campaign, offer or launch." },
      { title: "Custom Builds", icon: "wrench", body: "Bespoke functionality where an off-the-shelf platform will not do." },
      { title: "Website Redesigns", icon: "design", body: "A modern rebuild of an ageing site — content and structure included." },
      { title: "WordPress Sites", icon: "edit", body: "Editable, well-supported builds for teams who want to manage content." },
    ],
    faq: [
      { q: "How long does a website take to build?", a: "A Starter build typically launches in four weeks from signed-off content; larger or custom sites run six to ten." },
      { q: "Will it work on mobile?", a: "Every site is designed mobile-first and tested across common device sizes before launch." },
      { q: "Who owns the domain and hosting?", a: "You do. Accounts are set up in your name from day one, not ours." },
      { q: "What does maintenance cost after launch?", a: "Support is billed as a simple monthly plan — see Pricing for the current tiers." },
    ],
  },
  {
    slug: "mobile-app-development",
    number: "02",
    icon: "app",
    name: "Mobile App Development",
    short:
      "iOS, Android, cross-platform, customer portals, MVPs and app maintenance.",
    tagline: "Native and cross-platform apps for businesses that need to be in their customers' pocket.",
    lede: "Native and cross-platform applications for businesses that need their service in their customers' pocket — designed, built, tested and maintained by one team.",
    included: [
      { title: "iOS Applications", icon: "app", body: "Built and submitted to the App Store under your own developer account." },
      { title: "Android Applications", icon: "devices", body: "Play Store release with device testing across screen sizes." },
      { title: "Cross-platform Apps", icon: "layers", body: "One codebase, both stores, lower build and upkeep cost." },
      { title: "Business Applications", icon: "server", body: "Internal tools, bookings, stock, staff and ordering systems." },
      { title: "Customer Portals", icon: "lock", body: "Accounts, orders, documents and support in one place." },
      { title: "MVP Development", icon: "rocket", body: "A first version scoped to prove the idea quickly." },
    ],
    faq: [
      { q: "How long does an app take to build?", a: "An MVP typically ships in six to eight weeks; full builds run longer depending on scope." },
      { q: "Native or cross-platform — which do I need?", a: "Most business apps do well cross-platform; we'll recommend native only where performance demands it." },
      { q: "Who owns the code and the store accounts?", a: "You do — apps are published under your own developer accounts, not ours." },
      { q: "What does maintenance cost after launch?", a: "Support is billed as a simple monthly plan — see Pricing for the current tiers." },
    ],
  },
  {
    slug: "graphic-design-branding",
    number: "03",
    icon: "brand",
    name: "Graphic Design & Branding",
    short:
      "Logos, brand identity, print, menus, social and marketing material.",
    tagline: "An identity that carries across every surface your business shows up on.",
    lede: "Logo design, brand identity, business collateral and marketing material that give a growing business a consistent, professional look everywhere it appears.",
    included: [
      { title: "Logo Design", icon: "brand", body: "A mark and wordmark built to work at every size, on screen and in print." },
      { title: "Brand Identity", icon: "palette", body: "Colour, type and usage rules documented so the brand stays consistent." },
      { title: "Print Collateral", icon: "print", body: "Business cards, letterheads, flyers and brochures, print-ready." },
      { title: "Menus & Signage", icon: "badge", body: "Hospitality and retail material designed for real-world use." },
      { title: "Social Templates", icon: "grid", body: "On-brand templates so your team can post consistently without a designer." },
      { title: "Marketing Material", icon: "growth", body: "One-off campaign assets, from posters to exhibition graphics." },
    ],
    faq: [
      { q: "Do I get the source files?", a: "Yes — full ownership of logo source files and brand guidelines on completion." },
      { q: "Can you work from an existing logo?", a: "Yes, we can refresh or extend an existing mark rather than starting from zero." },
      { q: "How many concepts do I see?", a: "Typically three initial directions, refined into one after your feedback." },
      { q: "What does maintenance cost after launch?", a: "Ongoing design requests can be billed ad-hoc or added to a monthly plan." },
    ],
  },
  {
    slug: "ui-ux-design",
    number: "04",
    icon: "design",
    name: "UI/UX Design",
    short:
      "Web and app interfaces, wireframes, prototypes and experience design.",
    tagline: "Interfaces designed around how people actually use them.",
    lede: "Website and mobile app interfaces, wireframes, interactive prototypes and experience design — built to be handed straight to development.",
    included: [
      { title: "Wireframes", icon: "grid", body: "Low-fidelity layouts that lock structure before visual design starts." },
      { title: "UI Design", icon: "design", body: "High-fidelity screens in your brand, ready for build." },
      { title: "Prototypes", icon: "cursor", body: "Clickable prototypes for stakeholder review and user testing." },
      { title: "Design Systems", icon: "layers", body: "Reusable components so new screens stay consistent as you grow." },
      { title: "Usability Review", icon: "search", body: "An audit of an existing product with concrete fixes." },
      { title: "Handoff", icon: "file", body: "Developer-ready specs, assets and documentation." },
    ],
    faq: [
      { q: "Do you design or build, or both?", a: "Both — most clients use us for design and development together, but design stands alone too." },
      { q: "What tools do you design in?", a: "Figma, shared with you throughout so you can follow progress." },
      { q: "Can you redesign an existing product?", a: "Yes — we usually start with an audit before proposing changes." },
      { q: "What does maintenance cost after launch?", a: "Design support can continue on a monthly plan alongside development." },
    ],
  },
  {
    slug: "ecommerce-development",
    number: "05",
    icon: "ecommerce",
    name: "E-commerce Development",
    short:
      "Store development, product setup, payment gateways, carts, order management and support.",
    tagline: "Stores built to convert, not just to look good.",
    lede: "Store development, product setup, payment gateways, carts and order management — everything a retail business needs to sell online from day one.",
    included: [
      { title: "Store Build", icon: "ecommerce", body: "A fully branded storefront on a platform matched to your catalogue size." },
      { title: "Product Setup", icon: "tag", body: "Catalogue structure, variants, pricing and inventory configured for you." },
      { title: "Payment Gateways", icon: "card", body: "Card, wallet and buy-now-pay-later options, PCI-compliant by default." },
      { title: "Cart & Checkout", icon: "check", body: "A streamlined checkout tuned to reduce abandonment." },
      { title: "Order Management", icon: "clipboard", body: "Fulfilment, shipping rules and returns handled from one dashboard." },
      { title: "Ongoing Support", icon: "support", body: "Updates, security and performance monitoring after launch." },
    ],
    faq: [
      { q: "Which platform do you build on?", a: "We match the platform to your catalogue and budget — Shopify, WooCommerce or a custom build." },
      { q: "Can you migrate my existing store?", a: "Yes, including products, orders and customer accounts where the source platform allows it." },
      { q: "Who owns the store and payment accounts?", a: "You do — accounts are set up in your name from day one." },
      { q: "What does maintenance cost after launch?", a: "Support is billed as a simple monthly plan — see Pricing for the current tiers." },
    ],
  },
  {
    slug: "it-digital-solutions",
    number: "06",
    icon: "it",
    name: "IT & Digital Solutions",
    short:
      "Business email, domain management, hosting, cloud and technical consultancy.",
    tagline: "The infrastructure behind the website, set up properly once.",
    lede: "Business email, domain management, hosting, cloud solutions and technical consultancy for businesses that would rather not manage this themselves.",
    included: [
      { title: "Business Email", icon: "mail", body: "Professional email on your own domain, set up and secured." },
      { title: "Domain Management", icon: "domain", body: "Registration, renewal and DNS handled so nothing lapses." },
      { title: "Hosting", icon: "server", body: "Fast, monitored hosting matched to what your site actually needs." },
      { title: "Cloud Solutions", icon: "cloud", body: "Storage, backup and infrastructure set up for reliability." },
      { title: "Technical Consultancy", icon: "compass", body: "Plain-language advice before you commit to a platform or vendor." },
      { title: "Migrations", icon: "migrate", body: "Moving email, domains or hosting without downtime." },
    ],
    faq: [
      { q: "Can you take over an existing setup?", a: "Yes — we audit what's there first and migrate without downtime where possible." },
      { q: "Do I need to understand the technical side?", a: "No — we explain decisions in plain language and handle the implementation." },
      { q: "Who owns the accounts?", a: "You do, always — domains, hosting and email accounts are registered in your name." },
      { q: "What does maintenance cost after launch?", a: "Ongoing management is billed as a simple monthly plan." },
    ],
  },
  {
    slug: "maintenance-support",
    number: "07",
    icon: "maintenance",
    name: "Maintenance & Support",
    short:
      "Updates, security, backups, technical support, content changes, performance monitoring, hosting and domain management — billed as a monthly plan.",
    tagline: "We keep your digital business running after launch.",
    lede: "Updates, security, backups, technical support, content changes and performance monitoring — billed as a single monthly plan rather than ad-hoc hours.",
    included: [
      { title: "Website Updates", icon: "maintenance", body: "Core, plugin and platform updates applied on a schedule." },
      { title: "Security Updates", icon: "shield", body: "Patches and monitoring to keep the site out of trouble." },
      { title: "Backups", icon: "backup", body: "Regular, tested backups so recovery is never a scramble." },
      { title: "Technical Support", icon: "support", body: "A named contact for issues, not a ticket queue." },
      { title: "Content Changes", icon: "edit", body: "Text, image and page updates without needing a developer." },
      { title: "Performance Monitoring", icon: "gauge", body: "Uptime and speed tracked, with fixes applied before you notice." },
    ],
    faq: [
      { q: "Is this only for sites you built?", a: "No — we can take over maintenance of an existing site after a short audit." },
      { q: "How fast is support?", a: "Standard requests are actioned within one working day." },
      { q: "Can I cancel any time?", a: "Yes, plans are monthly with no long-term lock-in." },
      { q: "What if something breaks outside the plan's scope?", a: "We'll always tell you honestly and quote separately before doing extra work." },
    ],
  },
];

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}
