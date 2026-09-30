// Location landing pages. Each one answers a different search: London-wide
// ("web design london", "website development company in london") and local
// East London ("web design east london", Forest Gate, Stratford). Keep the copy
// specific to the place and true to how we work — city-swapped templates are
// exactly what search engines discount.

export const locations = [
  {
    slug: "web-design-london",
    seoTitle: "Web Design London | Fixed-Price Web Design Agency | Vyntrix",
    metaDescription:
      "London web design and website development for small and growing businesses. Fixed scope, fixed price, written quote in one working day. Based in E7.",
    eyebrow: "London",
    h1: "Web design and website development in London",
    lede: "We design and build fast, mobile-first websites for London businesses: sites built to be found on Google and to turn visitors into enquiries. Every project is quoted at a fixed price before work starts.",
    areaName: "London",
    areaSchema: [{ "@type": "City", name: "London" }],
    intro: [
      "London is one of the most competitive markets in the UK for almost every service, from accountants and clinics to trades, restaurants and B2B firms. A website that just looks good is not enough. It has to load quickly on a phone, answer the questions buyers ask before they pick up the phone, and make getting in touch easy.",
      "That is what we build. We design and develop websites, apps and brands for small and mid-sized businesses from our base on Romford Road in East London, and we work with businesses across Greater London and the rest of the UK.",
    ],
    points: [
      { icon: "quote", title: "Fixed scope, fixed price", body: "A written quotation within one working day of our call: deliverables, timeline and price agreed before any work starts. No hourly billing." },
      { icon: "search", title: "Built to be found", body: "Clean URLs, fast pages, correct titles and structured data are part of every build, not an add-on, so the site starts with solid technical SEO." },
      { icon: "target", title: "Built to convert", body: "Short enquiry forms, click-to-call, visible pricing signals and proof in the right places, because traffic only matters if it turns into enquiries." },
      { icon: "shield", title: "You own everything", body: "Domain, hosting and code are set up in your name from day one. If you ever move on, you take the whole website with you." },
    ],
    sectors: [
      "Professional services: accountants, solicitors, consultants",
      "Health and wellbeing: clinics, dentists, therapists",
      "Trades and home services",
      "Restaurants, cafés and hospitality",
      "Retail and e-commerce brands",
      "Start-ups and B2B service companies",
    ],
    areas: ["Central London", "East London", "North London", "South London", "West London", "Canary Wharf and Docklands", "The City"],
    faq: [
      { q: "How much does a website cost in London?", a: "Every project is quoted individually at a fixed price after a free 30-minute call, because the cost depends on the number of pages, integrations and who writes the content. You get a written quotation within one working day, with the price and what's included." },
      { q: "How long does a website take to build?", a: "A Starter build typically launches about four weeks after the content is signed off. Larger or custom sites usually take six to ten weeks." },
      { q: "Will my new website rank on Google?", a: "Every site we build has the technical foundations in place: fast pages, clean URLs, titles, structured data and a sitemap. Rankings also depend on content and on other sites linking to you, and we'll tell you honestly what that involves for your market." },
      { q: "Can you redesign my existing website?", a: "Yes. We rebuild ageing sites, keeping and redirecting the pages that already rank so you don't lose existing search traffic." },
      { q: "Do you only work with London businesses?", a: "No. We are London-based and work with businesses across the UK; most projects run remotely, with calls at each stage." },
    ],
    related: ["website-development", "ecommerce-development", "ui-ux-design"],
    sibling: { slug: "web-design-east-london", label: "Web design in East London" },
  },
  {
    slug: "web-design-east-london",
    seoTitle: "Web Design East London | Forest Gate, Stratford & Newham",
    metaDescription:
      "East London web design from Romford Road, E7. Websites, apps and branding for businesses in Forest Gate, Stratford, Newham and beyond. Fixed-price quotes.",
    eyebrow: "East London",
    h1: "Web design in East London: Forest Gate, Stratford and Newham",
    lede: "A local web design and development studio on Romford Road, E7. We build websites, apps and brands for East London businesses, at a fixed price and with one named contact from the first call to launch.",
    areaName: "East London",
    areaSchema: [
      { "@type": "Place", name: "East London" },
      { "@type": "Place", name: "Forest Gate" },
      { "@type": "Place", name: "Stratford" },
      { "@type": "AdministrativeArea", name: "London Borough of Newham" },
    ],
    intro: [
      "East London businesses often end up with one of two options: a large central-London agency priced for corporate budgets, or a template site that never brings in an enquiry. We sit in between. We're a small studio based at the Business Centre, 246–250 Romford Road, Forest Gate, and we build properly engineered websites at a fixed price agreed up front.",
      "Whether you run a shop on Green Street, a clinic in Stratford, a trade business in Ilford or a start-up near the Olympic Park, the brief is the same: a fast, mobile-first site that people nearby can find on Google, and a simple way for them to get in touch.",
    ],
    points: [
      { icon: "pin", title: "Local and accountable", body: "One named contact owns your project from the first call to launch day, and we're based in E7, not in another time zone." },
      { icon: "search", title: "Found in local search", body: "Location-aware page titles, your address and service area marked up correctly, and advice on setting up your Google Business Profile." },
      { icon: "quote", title: "Fixed price, in writing", body: "A written quotation within one working day: deliverables, timeline and price agreed before any work starts." },
      { icon: "layers", title: "More than a website", body: "Logos and branding, online shops, mobile apps, and business email and domain setup, all from one team." },
    ],
    sectors: [
      "Independent shops and market traders",
      "Restaurants, takeaways and cafés",
      "Clinics, pharmacies and beauty businesses",
      "Builders, electricians, plumbers and other trades",
      "Community organisations and charities",
      "Start-ups and small B2B firms",
    ],
    areas: ["Forest Gate", "Stratford", "Manor Park", "East Ham", "West Ham", "Plaistow", "Upton Park", "Ilford", "Leyton", "Walthamstow", "Barking", "Canning Town"],
    faq: [
      { q: "Where are you based?", a: "At the Business Centre, 246–250 Romford Road, London E7 9HZ, in Forest Gate, in the London Borough of Newham." },
      { q: "Can you help my business show up in Google Maps?", a: "Your Google Business Profile is what drives map results. We make sure your website supports it, with a consistent name, address and phone number, local page content and structured data, and we can walk you through setting up and verifying the profile." },
      { q: "How much does a website cost?", a: "We quote each project at a fixed price after a free 30-minute call. You get the written quotation within one working day." },
      { q: "Do you build online shops?", a: "Yes: Shopify, WooCommerce or custom stores, depending on your catalogue size and who manages the stock." },
      { q: "Can you do our logo and branding too?", a: "Yes. We design logos, brand identities, menus, signage and social templates as well as websites." },
    ],
    related: ["website-development", "graphic-design-branding", "ecommerce-development"],
    sibling: { slug: "web-design-london", label: "Web design across London" },
  },
];

export function getLocation(slug) {
  return locations.find((l) => l.slug === slug);
}
