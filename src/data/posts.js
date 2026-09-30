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

const MONTHS = {
  January: "01", February: "02", March: "03", April: "04", May: "05", June: "06",
  July: "07", August: "08", September: "09", October: "10", November: "11", December: "12",
};

/** "12 March 2026" -> "2026-03-12", for schema.org datePublished and <time>. */
function toIso(human) {
  const [d, m, y] = human.split(" ");
  return `${y}-${MONTHS[m]}-${d.padStart(2, "0")}`;
}

/* Each article supports one commercial page — blog content that never links
   to a service page is a wasted internal link. */
const SERVICE_FOR_CATEGORY = {
  "Web Development": "website-development",
  "Mobile Apps": "mobile-app-development",
  "Business Technology": "it-digital-solutions",
  "Graphic Design": "graphic-design-branding",
  Branding: "graphic-design-branding",
  "E-commerce": "ecommerce-development",
  "Digital Growth": "website-development",
};

/** Every word a reader actually sees, so read time and wordCount are true. */
function countWords(o) {
  const parts = [o.intro, o.quote, o.closing];
  for (const s of o.sections) {
    parts.push(s.heading, ...[].concat(s.body || []), ...(s.list || []), s.after);
    if (s.table) parts.push(...s.table.head, ...s.table.rows.flat());
  }
  return parts.filter(Boolean).join(" ").split(/\s+/).length;
}

function post(o) {
  const wordCount = countWords(o);
  return {
    author: AUTHOR,
    isoDate: toIso(o.date),
    isoModified: o.modified ? toIso(o.modified) : undefined,
    relatedService: SERVICE_FOR_CATEGORY[o.category],
    ...o,
    // Computed, not hand-typed: a "6 min read" on a 350-word article is a
    // promise the page does not keep. ~220 words a minute, never under 2.
    wordCount,
    readTime: `${Math.max(2, Math.round(wordCount / 220))} min`,
  };
}

export const posts = [
  /* ---------------- featured ---------------- */
  post({
    slug: "why-your-website-is-losing-enquiries",
    metaTitle: "Why Your Website Isn't Getting Enquiries | Vyntrix",
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

  /* ---------------- Link-worthy reference pieces ---------------- */
  post({
    slug: "website-enquiry-calculator",
    metaTitle: "How Many Website Visitors to Win One Client? | Vyntrix",
    title: "How many website visitors does it take to win one client? The enquiry maths for service businesses",
    category: "Digital Growth",
    date: "25 September 2026",
    excerpt:
      "Three formulas that turn traffic, conversion rate and close rate into a cost per client — with worked scenarios you can copy into a spreadsheet.",
    intro:
      "Most small businesses judge a website on traffic. That number means nothing until you connect it to two others: how many visitors send an enquiry, and how many enquiries become paying clients. Put the three together and you get the only figure that matters for a service business — how many visitors, and how much spend, it takes to win one client. This page gives you the formulas, a set of worked scenarios and the levers that move each number.",
    sections: [
      {
        heading: "The three formulas",
        body: "You need three inputs, all of which you can pull from your own records: your enquiry conversion rate (enquiries ÷ website sessions), your close rate (new clients ÷ enquiries) and the value of a client (first-year gross profit, not revenue). Everything else follows.",
        list: [
          "Visitors per client = 1 ÷ (enquiry conversion rate × close rate)",
          "Cost per client (paid traffic) = visitors per client × average cost per click",
          "Break-even cost per click = client value ÷ visitors per client",
        ],
        after:
          "Use gross profit for client value. A £6,000 project that costs you £3,500 to deliver is worth £2,500 to this calculation — using revenue will tell you a campaign is profitable when it is not.",
      },
      {
        heading: "Worked scenarios",
        body: "The table below runs the formulas across five combinations of conversion and close rate, with a £3 cost per click and a client worth £2,500 in first-year gross profit. These are illustrative inputs, not industry benchmarks — replace them with your own numbers, because your market, pricing and sales process will differ.",
        table: {
          caption: "Visitors and paid-traffic cost to win one client (£3 CPC, £2,500 client value)",
          head: ["Enquiry conversion", "Close rate", "Visitors per client", "Cost per client at £3 CPC", "Break-even CPC"],
          rows: [
            ["1%", "10%", "1,000", "£3,000", "£2.50"],
            ["1%", "20%", "500", "£1,500", "£5.00"],
            ["2%", "20%", "250", "£750", "£10.00"],
            ["2%", "30%", "167", "£500", "£15.00"],
            ["3%", "30%", "111", "£333", "£22.50"],
          ],
        },
        after:
          "Read the table from top to bottom: moving enquiry conversion from 1% to 2% halves the traffic you need, and the same is true of moving close rate from 10% to 20%. Improving both multiplies. That is why fixing the website and the sales follow-up usually beats buying more traffic.",
      },
      {
        heading: "Where to find your real numbers",
        body: "You do not need an analytics platform to start. Count enquiries from your inbox and phone log for the last 90 days, count the clients those enquiries became, and take sessions from whatever analytics or hosting statistics you have. If you run Google Ads, the platform reports your actual average cost per click.",
        list: [
          "Enquiries: form submissions, calls and direct emails that mention the website — count them for one full quarter.",
          "Close rate: clients won ÷ enquiries received in the same period. Exclude spam and job applicants.",
          "Client value: average first-year gross profit per client, from your accounts rather than a quote.",
          "Cost per click: from Google Ads, or leave paid traffic out and use the visitors-per-client figure alone.",
        ],
      },
      {
        heading: "The levers that move each number",
        body: "Each input has a small number of practical levers. Most of them are on the website or in the first hour after an enquiry arrives.",
        table: {
          caption: "What typically moves each input",
          head: ["Input", "Main levers", "Who owns it"],
          rows: [
            ["Enquiry conversion", "Form length, mobile load speed, clear pricing signals, visible proof (reviews, case studies), a phone number that works on tap", "Website"],
            ["Close rate", "Speed of first response, a written quote within a day, qualifying questions on the form, follow-up after the quote", "Sales process"],
            ["Client value", "Packaging, retainers and maintenance plans, repeat work", "Business model"],
            ["Cost per click", "Search terms bought, match types, negative keywords, landing-page relevance", "Paid search"],
          ],
        },
      },
      {
        heading: "A worked example",
        body: [
          "A London accountancy practice gets 1,200 website sessions a month and 12 enquiries — a 1% conversion rate — and wins 2 of those 12 as clients, a close rate of about 17%. At those rates it needs roughly 600 visitors per client.",
          "Two changes — cutting the contact form from nine fields to four, and replying to every enquiry within the hour — lift conversion to 1.5% and close rate to 25%. Visitors per client falls to about 267. The same 1,200 monthly sessions now produce four to five clients instead of two, with no extra traffic bought.",
        ],
      },
    ],
    quote: "Traffic is an input. The number that pays the bills is visitors per client.",
    closing:
      "Copy the three formulas into a spreadsheet, fill in a quarter of your own data and you will know which lever is worth pulling first. If the answer is the website, that is the work we do — and we quote it at a fixed price before anything starts.",
  }),

  post({
    slug: "landing-page-conversion-checklist",
    metaTitle: "Landing Page Conversion Checklist: 25 Checks | Vyntrix",
    title: "The landing page conversion checklist: 25 checks for pages that should win quote and demo requests",
    category: "Web Development",
    date: "25 September 2026",
    excerpt:
      "A 25-point audit checklist for service and B2B landing pages, grouped by what the visitor needs at each moment — from the first five seconds to the thank-you page.",
    intro:
      "A landing page for a service business has one job: turn a qualified visitor into a quote or demo request. This checklist is the one we run before a page goes live and when a client's page is getting traffic but not enquiries. It is grouped by the order in which a visitor experiences the page, and every item is something you can check yourself in a few minutes on your phone.",
    sections: [
      {
        heading: "The first five seconds",
        body: "Before a visitor scrolls, they decide whether they are in the right place. These checks cover what is visible without scrolling on a phone.",
        list: [
          "1. The headline names the service and who it is for — not a slogan.",
          "2. The headline matches the search or ad that brought the visitor, word for word where possible.",
          "3. One primary call to action is visible without scrolling, with a verb that describes what happens next (\"Get a written quote\", not \"Submit\").",
          "4. A location or service-area signal is visible if you serve a region.",
          "5. The page loads its main content in under about 2.5 seconds on a mid-range phone on 4G.",
        ],
      },
      {
        heading: "Proof and trust",
        body: "Service buyers are buying a promise. These items give them evidence before they have to ask for it.",
        list: [
          "6. At least one named client result, case study or review appears above the halfway point.",
          "7. Reviews link to or quote a third-party source (Google, Clutch, Trustpilot) rather than floating anonymously.",
          "8. A real person — name, role, photo — is visible somewhere on the page.",
          "9. Company details are present: registered company name, company number and a physical address.",
          "10. Any accreditation or partner badge links to its verification page.",
        ],
      },
      {
        heading: "Offer and pricing clarity",
        body: "Uncertainty about cost is the most common reason a qualified visitor leaves without enquiring.",
        list: [
          "11. The page gives a price, a starting price or a realistic range — or explains exactly how pricing is set.",
          "12. What is included is listed plainly, and so is what is not.",
          "13. The timeline from enquiry to delivery is stated.",
          "14. The next step after enquiring is described (\"we reply within one working day with a written quote\").",
          "15. Objections from sales calls are answered in a short FAQ on the page itself.",
        ],
      },
      {
        heading: "The form",
        body: "The form is where most enquiries are lost. Test it by submitting it yourself, on a phone.",
        list: [
          "16. The form asks for four to six fields; anything else is asked after first contact.",
          "17. Field labels stay visible while typing (placeholders alone disappear).",
          "18. The phone field accepts spaces, brackets and a +44 prefix without an error.",
          "19. Errors are explained next to the field, in words, and entered data is not wiped.",
          "20. A successful submission shows a clear confirmation and sends an email receipt.",
        ],
      },
      {
        heading: "Measurement and follow-up",
        body: "A page you cannot measure cannot be improved, and an enquiry that waits a day is often already lost.",
        list: [
          "21. Each form submission and phone-number tap is recorded as a conversion in analytics.",
          "22. The source of each enquiry (search, ads, referral) is captured with the lead.",
          "23. Enquiries are routed to a monitored inbox with a named owner.",
          "24. First response happens within one working hour during business hours.",
          "25. The page is re-tested on a phone after every change to the site.",
        ],
      },
      {
        heading: "How to score your page",
        body: "Score one point for each check your page passes. The bands below are a practical triage guide rather than a statistical benchmark.",
        table: {
          caption: "Triage bands for the 25-point checklist",
          head: ["Score", "What it usually means", "Where to start"],
          rows: [
            ["21–25", "The page is not the bottleneck", "Look at traffic quality and sales follow-up"],
            ["15–20", "Some leaks, fixable in days", "Fix the form and pricing-clarity items first"],
            ["8–14", "The page is costing you enquiries", "Rewrite the first screen, then add proof"],
            ["0–7", "Rebuild before buying more traffic", "Start with a single-purpose page and a four-field form"],
          ],
        },
      },
    ],
    quote: "Test the form on a phone before you spend another pound sending people to it.",
    closing:
      "Run the checklist on your own page this week. If more than five items fail and you would rather hand it over, we build and fix landing pages at a fixed, quoted price.",
  }),

  /* ---------------- Web Development ---------------- */
  post({
    slug: "how-long-a-website-really-takes",
    metaTitle: "How Long Does a Website Take to Build? | Vyntrix",
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
    metaTitle: "WordPress or Custom Build: How to Choose | Vyntrix",
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
    metaTitle: "Website Accessibility Basics for UK Businesses",
    title: "Accessibility basics every UK business site should meet",
    category: "Web Development",
    // Filed under Web Development editorially, but accessibility is a UI/UX
    // decision — and this is the article that gives that service page its
    // supporting content.
    relatedService: "ui-ux-design",
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
    metaTitle: "Native vs Cross-Platform Apps: How to Decide",
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
    metaTitle: "What an MVP Should Actually Contain | Vyntrix",
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
    metaTitle: "App Store Submission: What to Expect | Vyntrix",
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
    metaTitle: "Domains, Hosting & Business Email Explained",
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
    metaTitle: "How to Leave a Web Agency Safely | Vyntrix",
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
    metaTitle: "Website Backups That Actually Work | Vyntrix",
    relatedService: "it-digital-solutions",
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
    metaTitle: "Print vs Digital Marketing for Small Business",
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
    metaTitle: "What to Send Your Designer Before You Start",
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
    metaTitle: "PNG, SVG or PDF: Which Logo File to Use",
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
    metaTitle: "Logo Refresh or Full Rebrand? | Vyntrix",
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
    metaTitle: "Brand Guidelines for Small Businesses | Vyntrix",
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
    metaTitle: "Naming a Business: Practical Checks First",
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
    metaTitle: "5 Checkout Fixes to Reduce Cart Abandonment",
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
    metaTitle: "Shopify, WooCommerce or Custom: How to Choose",
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
    metaTitle: "Product Photography on a Small Budget | Vyntrix",
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
    metaTitle: "How to Measure Website ROI | Vyntrix",
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
    metaTitle: "Local SEO Checklist for UK Businesses",
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
    metaTitle: "Writing Content That Earns Enquiries | Vyntrix",
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

/**
 * The articles the homepage leads with: the featured post, then the newest
 * from categories it hasn't used yet, so the three tags are always different
 * and the row shows the breadth of what we write about rather than three
 * variations on one subject.
 */
export function homepagePosts(count = 3) {
  const featured = posts.find((p) => p.featured);
  const picked = featured ? [featured] : [];
  const used = new Set(picked.map((p) => p.category));

  for (const p of posts) {
    if (picked.length === count) break;
    if (used.has(p.category) || picked.includes(p)) continue;
    picked.push(p);
    used.add(p.category);
  }
  return picked;
}

/**
 * The articles that support one service page. Blog posts already point at a
 * service; this is the other direction, so a service page and its articles
 * form a cluster rather than a one-way street.
 */
export function postsForService(serviceSlug, count = 3) {
  return posts.filter((p) => p.relatedService === serviceSlug).slice(0, count);
}

export function relatedPosts(current, count = 2) {
  const sameCategory = posts.filter((p) => p.slug !== current.slug && p.category === current.category);
  if (sameCategory.length >= count) return sameCategory.slice(0, count);
  const others = posts.filter((p) => p.slug !== current.slug && p.category !== current.category);
  return [...sameCategory, ...others].slice(0, count);
}
