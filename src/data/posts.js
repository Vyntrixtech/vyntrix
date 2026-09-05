// Blog content — managed from the admin area in production; static here.
//
// One post carries `featured: true` and leads the index; every category then
// holds three more, so each filter on /blog fills a full row.

export const categories = [
  "Web Development",
  "Mobile Apps",
  "Business Technology",
  "Graphic Design",
  "Branding",
  "E-commerce",
  "Digital Growth",
];

const AUTHOR = "Vyntrix Technologies Team";

function post(o) {
  return { author: AUTHOR, ...o };
}

export const posts = [
  /* ---------------- featured ---------------- */
  post({
    slug: "why-your-website-is-losing-enquiries",
    title: "Why your website is losing enquiries (and it's rarely the design)",
    category: "Web Development",
    date: "12 March 2026",
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
  }),

  /* ---------------- Web Development ---------------- */
  post({
    slug: "how-long-a-website-really-takes",
    title: "How long a website really takes, week by week",
    category: "Web Development",
    date: "5 March 2026",
    readTime: "5 min",
    excerpt: "Four weeks is realistic for a Starter build — but only if content is ready. Here's where time actually goes.",
    intro:
      "Every agency quotes a timeline and every project slips. The slippage is rarely development — it is almost always the wait for content and decisions.",
    sections: [
      {
        heading: "Where the weeks go",
        body: "Discovery and sitemap take a few days. Design runs about a week. Build is a week or two depending on page count. Testing and launch prep is the last few days. On paper, four weeks.",
      },
      {
        heading: "What actually causes delay",
        body: "Waiting on copy, photography, logins to existing accounts, and one stakeholder who has not seen the design yet. We front-load all four in week one precisely because they are the usual culprits.",
      },
    ],
    quote: "Projects don't run late because of code. They run late waiting for a decision.",
    closing: "We set content deadlines at kick-off and treat them as seriously as our own build dates.",
  }),
  post({
    slug: "wordpress-or-custom-build",
    title: "WordPress or a custom build: how to choose without regret",
    category: "Web Development",
    date: "24 February 2026",
    readTime: "6 min",
    excerpt: "The right answer depends on who edits the site after launch, not on which platform is more capable.",
    intro:
      "This decision gets argued on technical grounds when it is really an operational one: who will be changing this site in six months, and how often?",
    sections: [
      {
        heading: "Choose WordPress when the team edits weekly",
        body: "If your team adds pages, posts or products regularly, a well-built WordPress site pays for itself in autonomy. The trade-off is ongoing maintenance — plugins and core need updating.",
      },
      {
        heading: "Choose a custom build when the site is stable",
        body: "A brochure site that changes twice a year does not need a CMS. A custom build is faster, more secure and cheaper to host, with content changes handled by us on a support plan.",
      },
    ],
    quote: "Pick the platform that matches how often the site will change, not the one with the longest feature list.",
    closing: "We ask about your editing habits in the first call, because it changes the quote materially.",
  }),
  post({
    slug: "website-accessibility-basics-uk",
    title: "Accessibility basics every UK business site should meet",
    category: "Web Development",
    date: "16 February 2026",
    readTime: "5 min",
    excerpt: "A short, practical list — most of it costs nothing if handled during the build rather than after.",
    intro:
      "Accessibility gets treated as a specialist add-on. Most of it is just careful building, and it is far cheaper done during the build than retrofitted afterwards.",
    sections: [
      {
        heading: "The four that matter most",
        body: "Sufficient colour contrast, real text instead of text baked into images, keyboard-navigable menus and forms, and descriptive alt text on meaningful images. That covers the majority of real-world barriers.",
      },
      {
        heading: "Why it also helps commercially",
        body: "The same work improves how search engines read the site, and it widens your audience. Under the Equality Act, reasonable adjustments apply to services delivered online too.",
      },
    ],
    quote: "Accessibility done during the build is free. Done afterwards, it's a second project.",
    closing: "We build to these basics by default — they are part of the brief, not an upgrade.",
  }),

  /* ---------------- Mobile Apps ---------------- */
  post({
    slug: "native-vs-cross-platform-2026",
    title: "Native or cross-platform: how we actually decide",
    category: "Mobile Apps",
    date: "2 March 2026",
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
        body: "Camera-heavy apps, anything leaning on device sensors, or apps competing on raw performance usually justify native development. We'll tell you honestly when that applies to you.",
      },
    ],
    quote: "The right platform choice is the one that gets your first version in front of real users fastest.",
    closing: "We scope this in the first call, before any commitment — it changes both the price and the timeline.",
  }),
  post({
    slug: "what-an-mvp-should-actually-contain",
    title: "What an MVP should actually contain (and what to cut)",
    category: "Mobile Apps",
    date: "19 February 2026",
    readTime: "6 min",
    excerpt: "Most first versions are too big. The test for every feature is whether its absence stops the app proving its idea.",
    intro:
      "The point of a first version is to find out whether people want the thing. Every feature that does not serve that question is delaying the answer and inflating the bill.",
    sections: [
      {
        heading: "The one-question test",
        body: "For each feature, ask: if this were missing, would the app fail to prove its core idea? If the answer is no, it goes in version two. Settings screens, profile editing and onboarding tours usually fail this test.",
      },
      {
        heading: "What almost always stays",
        body: "The core action, a way to sign in, and a way for you to see what users did. Without analytics you launch and learn nothing, which defeats the point of an MVP.",
      },
    ],
    quote: "An MVP isn't a smaller product. It's a question, asked in code.",
    closing: "We help draw that line during scoping — it is usually the single biggest lever on cost.",
  }),
  post({
    slug: "app-store-submission-what-to-expect",
    title: "App Store submission: what to expect the first time",
    category: "Mobile Apps",
    date: "8 February 2026",
    readTime: "4 min",
    excerpt: "Review rejections are normal, usually procedural, and easy to avoid if you know the common triggers.",
    intro:
      "First-time submitters expect a rubber stamp and are alarmed by a rejection. Rejections are routine and usually about paperwork rather than the app itself.",
    sections: [
      {
        heading: "The usual triggers",
        body: "Missing privacy policy, a demo account the reviewer cannot log into, a description promising features that are not there, and permission prompts without an explanation of why the app needs access.",
      },
      {
        heading: "Timelines to plan around",
        body: "Review typically takes a day or two, but budget a week for the first submission in case of a round trip. Never schedule a launch campaign before the app is approved.",
      },
    ],
    quote: "Plan for one rejection. If it doesn't come, you're a week early instead of a week late.",
    closing: "We handle submission under your developer accounts and manage the review correspondence.",
  }),

  /* ---------------- Business Technology ---------------- */
  post({
    slug: "domain-hosting-email-explained",
    title: "Domains, hosting and business email — a plain-English guide",
    category: "Business Technology",
    date: "22 February 2026",
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
  }),
  post({
    slug: "moving-away-from-an-agency",
    title: "How to leave an agency without losing your website",
    category: "Business Technology",
    date: "11 February 2026",
    readTime: "5 min",
    excerpt: "A short checklist of what you must hold in your own name before any handover goes wrong.",
    intro:
      "The worst time to discover your agency owns your domain is the week you decide to leave. A short audit now prevents an expensive standoff later.",
    sections: [
      {
        heading: "What must be in your name",
        body: "Domain registrar, hosting account, email tenancy, analytics property, and any app store developer accounts. If any of these sit in an agency account, ask for a transfer in writing.",
      },
      {
        heading: "What to request at handover",
        body: "A full backup of the site files and database, DNS records exported, and a plain list of every third-party service the site depends on with the login owner named against each.",
      },
    ],
    quote: "Ownership isn't a trust issue. It's basic business continuity.",
    closing: "We do this audit free for anyone considering a move, whether or not they end up working with us.",
  }),
  post({
    slug: "backups-that-actually-work",
    title: "Backups that actually work when you need them",
    category: "Business Technology",
    date: "30 January 2026",
    readTime: "4 min",
    excerpt: "An untested backup is a guess. Three questions tell you whether yours would survive a real incident.",
    intro:
      "Almost every business believes it has backups. Far fewer have ever restored one, which is the only test that counts.",
    sections: [
      {
        heading: "Three questions worth asking today",
        body: "How old is the most recent backup? Where is it stored — and is that the same server as the site? Has anyone ever restored from it successfully?",
      },
      {
        heading: "Off-site is the part people skip",
        body: "A backup on the same server as the website disappears with the server. Off-site copies cost very little and are the difference between an inconvenience and a rebuild.",
      },
    ],
    quote: "You don't have backups. You have restores — and only if you've tried one.",
    closing: "Support plans include scheduled off-site backups, and we test a restore periodically so it isn't theoretical.",
  }),

  /* ---------------- Graphic Design ---------------- */
  post({
    slug: "print-vs-digital-marketing-material",
    title: "When print still beats digital for small business marketing",
    category: "Graphic Design",
    date: "3 January 2026",
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
  }),
  post({
    slug: "what-to-send-your-designer",
    title: "What to send your designer so the first draft lands",
    category: "Graphic Design",
    date: "21 January 2026",
    readTime: "4 min",
    excerpt: "Four things that reliably cut a design project from three rounds of revisions to one.",
    intro:
      "Revision rounds are usually caused by a thin brief rather than a wayward designer. Four inputs remove most of the guesswork.",
    sections: [
      {
        heading: "Examples of what you like — and don't",
        body: "Three references you admire and one you dislike is more useful than a page of adjectives. 'Not this, because it feels cold' tells a designer more than 'make it modern'.",
      },
      {
        heading: "The final copy, not placeholder text",
        body: "Design shaped around real words rarely needs reworking. Design shaped around Lorem Ipsum almost always does, once the real headline turns out to be twice as long.",
      },
    ],
    quote: "A vague brief doesn't save time at the start. It spends it at the end.",
    closing: "We send a short brief template before kick-off for exactly this reason.",
  }),
  post({
    slug: "file-formats-explained-for-clients",
    title: "PNG, SVG, PDF: which logo file to send where",
    category: "Graphic Design",
    date: "9 January 2026",
    readTime: "3 min",
    excerpt: "A one-page reference so the right file goes to the printer, the web team and the sign writer.",
    intro:
      "Every brand handover includes a folder of formats and very little explanation. Here is which one to reach for.",
    sections: [
      {
        heading: "For screens",
        body: "SVG wherever possible — it stays sharp at any size and weighs almost nothing. PNG when the platform won't take SVG, and always with a transparent background.",
      },
      {
        heading: "For print and signage",
        body: "PDF or EPS, in vector, sent to the printer. Never send a PNG to a sign writer: it will be enlarged and it will look soft when it goes on the wall.",
      },
    ],
    quote: "Vector for anything that might get bigger. Raster only when you know the final size.",
    closing: "Our brand handovers group files by use case, not by format, so the choice is obvious.",
  }),

  /* ---------------- Branding ---------------- */
  post({
    slug: "logo-refresh-vs-full-rebrand",
    title: "Logo refresh or full rebrand? A five-minute test",
    category: "Branding",
    date: "10 February 2026",
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
  }),
  post({
    slug: "brand-guidelines-small-business",
    title: "Brand guidelines a small team will actually follow",
    category: "Branding",
    date: "27 January 2026",
    readTime: "5 min",
    excerpt: "Sixty-page brand bibles go unread. Here's the short version that keeps a small team consistent.",
    intro:
      "Large agencies deliver brand books nobody opens twice. A team of six needs something they can hold in their head.",
    sections: [
      {
        heading: "What a short guide must cover",
        body: "Logo files and the space around them, the exact colour values, two typefaces with the sizes you actually use, and three examples of the brand applied correctly.",
      },
      {
        heading: "What to leave out",
        body: "Brand personality essays, mood boards and tone-of-voice theory. If nobody can act on it during a busy Tuesday, it does not belong in the working guide.",
      },
    ],
    quote: "The best brand guide is the one that gets opened when someone is in a hurry.",
    closing: "We deliver a short working guide alongside the full set of files.",
  }),
  post({
    slug: "naming-a-business-practical-checks",
    title: "Naming a business: the practical checks before you fall in love",
    category: "Branding",
    date: "15 January 2026",
    readTime: "5 min",
    excerpt: "Four quick searches that stop you building a brand on a name you cannot actually use.",
    intro:
      "Naming is treated as a creative exercise and then derailed by an availability check that should have happened first.",
    sections: [
      {
        heading: "Run these four checks first",
        body: "Companies House for the registered name, a domain search for the .co.uk and .com, the UK trade mark register, and a plain search to see who already ranks for the word.",
      },
      {
        heading: "The spoken test",
        body: "Say the name down a phone line to someone who has not seen it written. If they cannot spell it back, every customer will mistype your domain for the life of the business.",
      },
    ],
    quote: "A name you can't own is a name you're renting from whoever registers it first.",
    closing: "We run these checks as part of naming work, before any design begins.",
  }),

  /* ---------------- E-commerce ---------------- */
  post({
    slug: "reduce-cart-abandonment",
    title: "Five checkout changes that reduce cart abandonment",
    category: "E-commerce",
    date: "28 January 2026",
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
  }),
  post({
    slug: "choosing-an-ecommerce-platform",
    title: "Shopify, WooCommerce or custom: matching platform to catalogue",
    category: "E-commerce",
    date: "6 January 2026",
    readTime: "6 min",
    excerpt: "Catalogue size, product complexity and who manages stock decide this — not monthly fees.",
    intro:
      "Platform comparisons usually start with pricing pages. Start instead with what you sell and who keeps it up to date.",
    sections: [
      {
        heading: "Small, simple catalogues",
        body: "Under a few hundred straightforward products, Shopify is hard to beat: hosting, payments and security are handled, and your team can run it without a developer.",
      },
      {
        heading: "Complex products or existing systems",
        body: "Variant-heavy ranges, trade pricing, or stock living in an accounting system usually justify WooCommerce or a custom build, where the rules can match how you actually trade.",
      },
    ],
    quote: "Pick for your catalogue and your team, not for the monthly fee.",
    closing: "We recommend the platform in the first call and are happy to say when the cheaper option is the right one.",
  }),
  post({
    slug: "product-photography-on-a-budget",
    title: "Product photography that sells, on a small budget",
    category: "E-commerce",
    date: "20 December 2025",
    readTime: "4 min",
    excerpt: "Consistency beats production value. What to fix first when a studio shoot isn't in the budget.",
    intro:
      "Shoppers cannot handle the product, so photography carries the whole job. Fortunately the things that matter most are cheap.",
    sections: [
      {
        heading: "Consistency first",
        body: "Same background, same angle, same crop across every product. An inconsistent gallery looks amateur far faster than a slightly soft photograph does.",
      },
      {
        heading: "Then scale and context",
        body: "One image showing the product in use or beside something familiar answers the question every listing gets asked: how big is it, really?",
      },
    ],
    quote: "A consistent set of decent photos outsells a mixed bag of great ones.",
    closing: "We set the shot list and specs during store build so the gallery holds together.",
  }),

  /* ---------------- Digital Growth ---------------- */
  post({
    slug: "measuring-website-roi",
    title: "How to actually measure your website's return on investment",
    category: "Digital Growth",
    date: "14 January 2026",
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
  }),
  post({
    slug: "local-seo-for-uk-businesses",
    title: "Local SEO: the short list for UK businesses",
    category: "Digital Growth",
    date: "2 January 2026",
    readTime: "6 min",
    excerpt: "For a business serving a city or region, a handful of fundamentals outperform any clever tactic.",
    intro:
      "Local search rewards accuracy and consistency far more than volume. For most regional businesses, the list of what matters is short.",
    sections: [
      {
        heading: "Get the basics exactly right",
        body: "A complete Google Business Profile, your name, address and phone number identical everywhere they appear, and a page per location or service area with real content on it.",
      },
      {
        heading: "Reviews are ranking and conversion at once",
        body: "Recent, specific reviews improve both visibility and the decision to call. Ask consistently at the point the customer is happiest, not months later.",
      },
    ],
    quote: "In local search, being consistent beats being clever.",
    closing: "We set the profile and on-page structure up during build so this compounds from launch.",
  }),
  post({
    slug: "content-that-earns-enquiries",
    title: "Writing content that earns enquiries, not just traffic",
    category: "Digital Growth",
    date: "12 December 2025",
    readTime: "5 min",
    excerpt: "Answer the questions customers ask before they buy. Those pages convert; general articles rarely do.",
    intro:
      "Plenty of business blogs attract readers who will never buy. The fix is writing for the questions asked immediately before a purchase.",
    sections: [
      {
        heading: "Write down the sales call",
        body: "The questions you answer on every enquiry call are your content plan. Cost, timescale, what's included, what goes wrong — those pages attract people already deciding.",
      },
      {
        heading: "Be specific enough to be useful",
        body: "Ranges beat evasion. A page that says 'most projects of this type run between X and Y, and here is what moves it' earns more trust than one that says 'contact us for pricing'.",
      },
    ],
    quote: "Traffic is an audience. Answering a buying question is a pipeline.",
    closing: "We map these pages during discovery, because they are usually the ones that pay for the site.",
  }),
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}

export function relatedPosts(current, count = 2) {
  const sameCategory = posts.filter((p) => p.slug !== current.slug && p.category === current.category);
  if (sameCategory.length >= count) return sameCategory.slice(0, count);
  const others = posts.filter((p) => p.slug !== current.slug && p.category !== current.category);
  return [...sameCategory, ...others].slice(0, count);
}
