// Blog content — managed from the admin area in production; static here.

export const categories = [
  "Web Development",
  "Mobile Apps",
  "Business Technology",
  "Graphic Design",
  "Branding",
  "E-commerce",
  "Digital Growth",
];

export const posts = [
  {
    slug: "why-your-website-is-losing-enquiries",
    title: "Why your website is losing enquiries (and it's rarely the design)",
    category: "Web Development",
    date: "12 March 2026",
    author: "Vyntrix Technologies Team",
    readTime: "6 min",
    excerpt:
      "Most 'the website isn't working' problems trace back to three unglamorous causes — none of which is how it looks.",
    featured: true,
    intro:
      "A client tells us their website 'isn't working.' Almost every time, the fix has nothing to do with how the site looks — and everything to do with three unglamorous, fixable problems.",
    sections: [
      {
        heading: "The form is the product",
        body: "Traffic is not the bottleneck for most small businesses — the enquiry form is. A form that asks for too much, loads slowly, or fails silently on mobile will quietly lose you leads you already paid to attract. Before touching the design, we test the form on a real phone with a real connection.",
      },
      {
        heading: "Speed is a business number, not a vanity metric",
        body: "Every extra second of load time measurably reduces conversion. We treat page speed the way we treat pricing — as a decision with a direct line to revenue, not an afterthought for the launch checklist.",
      },
    ],
    quote: "The most expensive part of a slow website is the enquiry that never gets typed.",
    closing:
      "None of this requires a redesign. It requires someone to actually submit the form, on a phone, on 4G, and fix what breaks.",
  },
  {
    slug: "native-vs-cross-platform-2026",
    title: "Native or cross-platform: how we actually decide",
    category: "Mobile Apps",
    date: "2 March 2026",
    author: "Vyntrix Technologies Team",
    readTime: "5 min",
    excerpt:
      "The honest version of this decision has almost nothing to do with technology preference and everything to do with what the app needs to do.",
    intro:
      "Every app project starts with the same question, usually asked the wrong way: 'should we build native or cross-platform?' The honest answer depends on what the app actually needs to do, not on technology preference.",
    sections: [
      {
        heading: "When cross-platform wins",
        body: "For most business apps — bookings, ordering, internal tools, customer portals — a single cross-platform codebase gets you to both stores faster and costs less to maintain. That's the right default.",
      },
      {
        heading: "When native earns its cost",
        body: "Camera-heavy apps, anything leaning on device sensors, or apps competing on raw performance (games, AR) usually justify native development. We'll tell you honestly when that applies to you.",
      },
    ],
    quote: "The right platform choice is the one that gets your first version in front of real users fastest.",
    closing: "We scope this in the first call, before any commitment — it changes both the price and the timeline.",
  },
  {
    slug: "domain-hosting-email-explained",
    title: "Domains, hosting and business email — a plain-English guide",
    category: "Business Technology",
    date: "22 February 2026",
    author: "Vyntrix Technologies Team",
    readTime: "7 min",
    excerpt:
      "Three separate things get bundled into one confusing conversation. Here's what each one actually is, and who should own it.",
    intro:
      "Domain, hosting and email get bundled into one confusing conversation, usually by whoever is trying to sell you all three at once. They are three separate things.",
    sections: [
      {
        heading: "Your domain is your address, not your website",
        body: "A domain is a name you rent, renewed yearly, that points at wherever your site actually lives. It should always be registered in your name, never your agency's.",
      },
      {
        heading: "Hosting is the computer your site runs on",
        body: "Speed, uptime and security all trace back here. Cheap, shared hosting is the single most common cause of a slow site — not the code sitting on it.",
      },
    ],
    quote: "If you don't have the login to your own domain registrar, you don't own your website.",
    closing: "We set all three up in your name from day one, and hand you every login before we start building.",
  },
  {
    slug: "logo-refresh-vs-full-rebrand",
    title: "Logo refresh or full rebrand? A five-minute test",
    category: "Branding",
    date: "10 February 2026",
    author: "Vyntrix Technologies Team",
    readTime: "4 min",
    excerpt: "Most businesses need a tidy-up, not a reinvention. Here's how to tell which one you actually need.",
    intro:
      "Most businesses that think they need a rebrand actually need a tidy-up. Confusing the two wastes budget and unsettles customers who already recognise you.",
    sections: [
      {
        heading: "Signs you need a refresh",
        body: "Your name and positioning still fit, but the logo, colours or type look dated next to newer competitors. A refresh keeps recognition intact while modernising execution.",
      },
      {
        heading: "Signs you need a full rebrand",
        body: "The business has changed direction, merged, or the name itself is holding you back. That's a different, bigger conversation — and worth having properly.",
      },
    ],
    quote: "Recognition is an asset. Don't spend it unless the business underneath has actually changed.",
    closing: "We start every branding project by asking which of these two conversations we're actually having.",
  },
  {
    slug: "reduce-cart-abandonment",
    title: "Five checkout changes that reduce cart abandonment",
    category: "E-commerce",
    date: "28 January 2026",
    author: "Vyntrix Technologies Team",
    readTime: "6 min",
    excerpt: "Small, unglamorous checkout fixes that consistently move the needle more than a full redesign.",
    intro:
      "Cart abandonment gets blamed on price and shipping cost — real factors, but rarely the whole story. The checkout flow itself usually loses more sales than either.",
    sections: [
      {
        heading: "Let people check out as a guest",
        body: "Forcing account creation before checkout is one of the most reliable ways to lose a sale that was already won. Offer it after, not before.",
      },
      {
        heading: "Show the total cost early",
        body: "Shipping and tax appearing for the first time on the final screen reads as a bait-and-switch, even when it isn't one. Show the real total as early as possible.",
      },
    ],
    quote: "Every extra field between 'add to cart' and 'paid' is a chance to lose the sale.",
    closing: "We audit an existing checkout in under a day and usually find two or three fixes worth making first.",
  },
  {
    slug: "measuring-website-roi",
    title: "How to actually measure your website's return on investment",
    category: "Digital Growth",
    date: "14 January 2026",
    author: "Vyntrix Technologies Team",
    readTime: "5 min",
    excerpt: "Traffic and page views are not business results. Here's what to track instead.",
    intro:
      "Traffic and page views feel like progress but rarely tell you whether a website is working. The numbers that matter are further down the funnel.",
    sections: [
      {
        heading: "Track enquiries, not visits",
        body: "A quiet site that converts one in ten visitors into a genuine enquiry is outperforming a busy one that converts none. Set up enquiry tracking before you spend a penny on traffic.",
      },
      {
        heading: "Compare against the cost of the alternative",
        body: "The right comparison isn't 'website cost vs. zero' — it's 'website cost vs. the enquiries you're currently losing to a competitor with a better one.'",
      },
    ],
    quote: "A website's job is to turn attention into enquiries — measure that, not the attention itself.",
    closing: "We set up basic enquiry tracking on every build, so this conversation has real numbers behind it.",
  },
  {
    slug: "print-vs-digital-marketing-material",
    title: "When print still beats digital for small business marketing",
    category: "Graphic Design",
    date: "3 January 2026",
    author: "Vyntrix Technologies Team",
    readTime: "4 min",
    excerpt: "Digital isn't always the answer. A few situations where a well-designed printed piece still wins.",
    intro:
      "It's easy to assume digital always wins. For a few specific situations, a well-designed printed piece still earns its cost.",
    sections: [
      {
        heading: "Local, in-person businesses",
        body: "A menu, a price list or a leave-behind card still does real work for hospitality, trades and local retail — moments where a phone isn't the natural next step.",
      },
      {
        heading: "Trust signals at the point of decision",
        body: "A physical brochure handed over in a sales meeting carries a weight a PDF attachment doesn't. It's a small thing that consistently moves decisions.",
      },
    ],
    quote: "The right medium is whichever one is in front of the customer at the moment they decide.",
    closing: "We design print and digital material from the same brand system, so neither looks like an afterthought.",
  },
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

export function relatedPosts(current, count = 2) {
  return posts.filter((p) => p.slug !== current.slug && p.category === current.category).slice(0, count).length
    ? posts.filter((p) => p.slug !== current.slug && p.category === current.category).slice(0, count)
    : posts.filter((p) => p.slug !== current.slug).slice(0, count);
}
