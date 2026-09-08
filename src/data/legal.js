// Privacy, Cookies and Terms.
//
// Written to describe what this site actually does, not from a template: it is
// a static site with no analytics, no tracking pixels and no cookies of its
// own. The only third-party request a visitor's browser makes is to Google
// Fonts. Keep this file honest — if the site later gains analytics, a chat
// widget or a form backend, these pages must change with it.

export const COMPANY = "Vyntrix Technologies Limited";
export const EMAIL = "info@vyntrixtechnologies.co.uk";
export const PHONE = "0207877897";
export const ADDRESS = "Business centre 246-250 Romford Road, London, England, E7 9HZ";
export const LAST_UPDATED = "8 September 2026";

export const legalPages = {
  privacy: {
    slug: "privacy",
    name: "Privacy Policy",
    title: "Privacy Policy | Vyntrix Technologies",
    description:
      "What personal data Vyntrix Technologies collects through this site, why, how long we keep it, and your rights over it under UK GDPR.",
    lede: `This policy explains what personal data ${COMPANY} collects through this website, why we collect it, how long we keep it and what rights you have over it.`,
    sections: [
      {
        heading: "Who we are",
        body: [
          `${COMPANY} is a UK-based digital solutions company registered in England and Wales, operating from ${ADDRESS}. For anything in this policy you can reach us at ${EMAIL} or ${PHONE}.`,
          "For the purposes of UK data protection law we are the data controller for personal data submitted through this website.",
        ],
      },
      {
        heading: "What we collect",
        body: [
          "We collect only what you choose to send us. The enquiry form on our contact page asks for your name, company name, email address, phone number, the service you are interested in, an indicative budget and a description of your project. Company name, phone number and budget are optional.",
          "If you email or call us instead, we hold whatever you include in that message.",
          "This website does not run analytics, advertising or tracking software, and it does not build a profile of your visit.",
        ],
      },
      {
        heading: "Why we collect it",
        body: [
          "To reply to your enquiry, prepare a quotation and, if you go ahead, to deliver and support the work. That is the only reason we ask.",
          "Our lawful basis is legitimate interest for responding to an enquiry you have sent us, and performance of a contract once you become a client. We do not send marketing email to people who have not asked for it.",
        ],
      },
      {
        heading: "Who else sees it",
        body: [
          "We do not sell personal data, and we do not share it with third parties for their own marketing.",
          "Our email is hosted by Hostinger, so enquiries you send us are stored on their mail servers. This website is served by GitHub Pages, which processes standard server request data such as IP addresses in order to deliver the page to you.",
          "Where a project requires a third party — a hosting provider, a payment processor, an app store — we will tell you which one before anything is set up, and those accounts are opened in your name.",
        ],
      },
      {
        heading: "How long we keep it",
        body: [
          "Enquiries that do not become projects are deleted within 24 months. Records relating to work we have carried out are kept for seven years, because UK tax and accounting rules require it.",
          "You can ask us to delete your enquiry sooner and we will, unless we are legally required to keep it.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "Under UK GDPR you can ask us for a copy of the personal data we hold about you, ask us to correct it, ask us to delete it, ask us to restrict how we use it, or object to our using it. You can also ask for it in a portable format.",
          `Email ${EMAIL} and we will respond within one month. There is no charge.`,
          "If you are not satisfied with how we have handled your data you can complain to the Information Commissioner's Office at ico.org.uk, though we would appreciate the chance to put it right first.",
        ],
      },
      {
        heading: "Security",
        body: [
          "This site is served over HTTPS. Enquiries reach us by email and are held in mailboxes protected by strong, unique credentials and two-factor authentication.",
          "No transmission over the internet is completely secure, so please do not send passwords, card details or other sensitive information through the enquiry form.",
        ],
      },
      {
        heading: "Changes",
        body: [
          `This policy was last updated on ${LAST_UPDATED}. If we change how we handle personal data we will update this page and change that date.`,
        ],
      },
    ],
  },

  cookies: {
    slug: "cookies",
    name: "Cookie Policy",
    title: "Cookie Policy | Vyntrix Technologies",
    description:
      "This website sets no cookies and runs no analytics or advertising trackers. What that means in practice, and the one third-party request your browser does make.",
    lede: "The short version: this website sets no cookies at all, so there is no cookie banner to dismiss and nothing for you to opt out of.",
    sections: [
      {
        heading: "What we do not use",
        body: [
          "No analytics cookies. No advertising or retargeting pixels. No social media trackers. No session cookies, because there is nothing to log in to. No consent-management platform, because there is no consent to manage.",
          "We are not making a privacy claim to be clever about it — the site simply does not need them, and a site that does not need them should not set them.",
        ],
      },
      {
        heading: "The one third-party request",
        body: [
          "Our typefaces are served by Google Fonts. When you open a page, your browser requests those font files from fonts.googleapis.com and fonts.gstatic.com. Google does not set cookies on these requests, but it does receive your IP address and browser details as part of delivering the files, and processes them under its own privacy policy.",
          "Nothing else on the page contacts a third party: there are no embedded videos, maps, chat widgets or advertising scripts.",
        ],
      },
      {
        heading: "Your browser's own storage",
        body: [
          "Your browser may cache pages, images and fonts so the site loads faster on your next visit. That cache lives on your device, is controlled by your browser settings, and is not readable by us.",
        ],
      },
      {
        heading: "If this changes",
        body: [
          `If we ever add analytics or any other technology that stores information on your device, we will ask for your consent first and update this page. It was last reviewed on ${LAST_UPDATED}.`,
        ],
      },
    ],
  },

  terms: {
    slug: "terms",
    name: "Terms of Use",
    title: "Terms of Use | Vyntrix Technologies",
    description:
      "Terms covering use of the Vyntrix Technologies website, what our published packages do and do not commit us to, and how project contracts are agreed.",
    lede: `These terms cover your use of this website. They are not the terms of any project we carry out for you — that work is governed by the written quotation and contract we agree with you separately.`,
    sections: [
      {
        heading: "Using this site",
        body: [
          "You are welcome to read, print and share these pages. You may not copy the site's design, code, illustrations or written content for use in another commercial project without our written permission.",
          "Please do not attempt to disrupt the site, probe it for vulnerabilities without asking us first, or use it to send unlawful or abusive material. If you believe you have found a security problem, email us and we will take it seriously.",
        ],
      },
      {
        heading: "What the content on this site is",
        body: [
          "The service descriptions, articles and guidance on this website are published in good faith as general information. They are not professional advice for your specific situation, and following them is at your own discretion.",
          "We keep the content current, but technology and regulation move. If a page matters to a decision you are making, ask us and we will confirm whether it still holds.",
        ],
      },
      {
        heading: "Pricing and quotations",
        body: [
          "Our packages describe what is typically included. They are not an offer capable of acceptance, and publishing them does not commit us to a price for your project.",
          "A price becomes binding only when we issue you a written quotation setting out the scope, the deliverables and the launch date, and you accept it. Until then, anything discussed is indicative.",
        ],
      },
      {
        heading: "Links to other sites",
        body: [
          "Where we link to a third-party website, we do so because we think it is useful. We do not control those sites and are not responsible for their content, their accuracy or how they handle your data.",
        ],
      },
      {
        heading: "Liability",
        body: [
          "We do not exclude or limit our liability for death or personal injury caused by negligence, for fraud, or for anything else that cannot lawfully be excluded.",
          "Subject to that, we are not liable for loss of profit, loss of business or indirect loss arising from your use of this website. The site is provided as it is, and we do not guarantee uninterrupted availability.",
        ],
      },
      {
        heading: "Governing law",
        body: [
          `These terms are governed by the law of England and Wales, and the courts of England and Wales have exclusive jurisdiction. ${COMPANY} is registered in England and Wales.`,
          `Last updated ${LAST_UPDATED}.`,
        ],
      },
    ],
  },
};

export const legalList = Object.values(legalPages);
