# VTech website wireframe

_Started 2026-09-01 17:12 UTC_

---

## User

Wireframe the website screens for VTech Limited, have shared the website brief. I want the design system with IT and digital services for all sorts of mobile and web application, solutions for businesses across globe.

## Assistant



## Assistant

I'll read the brief first.

_[tool: read_skill_prompt]_

_[tool: run_script]_

_[tool: ask_user]_

Read the brief — waiting on your answers to the form (screens to cover, how many directions, fidelity, and what Home should lead with) before I start wireframing.

## User

Answered — Asked for follow-up questions; screens: Home, About Us, Services overview, Single service page, Packages, Contact / quote form, Blog index, Blog article, Admin/CMS dashboard; breadth: 3-5 different directions for Home, then one path for the rest; fidelity: Near-final layout; desktop_mobile: Desktop + mobile for key screens; differentiator: Services grid — breadth of capability, Outcomes — business growth results

## Assistant



## Assistant

_[tool: ask_user]_

Round two is up — which screens need mobile, how deep the admin goes, and which service page to use as the pattern.

## User

Answered — mobile_screens: Home, Services overview, Single service page, Packages, Blog article; admin_scope: Dashboard + enquiries inbox; service_page: Mobile App Development

## Assistant

_[tool: list_files]_

_[tool: grep]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

Twelve screens on one canvas: three Home directions (1a capability-grid, 1b outcomes-led, 1c split-index with sidebar nav), then About, Services overview, the Mobile App service page as the pattern for all seven, Packages, Contact/quote, Blog index, article, the admin dashboard + enquiries inbox, and five mobile screens.

Packages has a live toggle — the Tweaks panel switches it between shown prices and request-quote-only. Missing so far: Our Work index and project detail; say the word and I'll add them.

## User

Great, but I want this website in a different design system from color perspective and typography. I like the layout. I want you to give me specific options for IT and digital color themes that are very popular for this industry. I like the modernism but I would prefer tech colors.

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Four tech palettes at the top of the canvas, same 1a layout and Modernist structure (flat, 2px rules, zero radius, flush-left) so only colour and type change:

- **2a Midnight & Cyan** — dark navy, cyan signal. Space Grotesk / IBM Plex Sans. Reads as infrastructure and capability.
- **2b Ultraviolet** — light ground, violet accent. Manrope. Modern SaaS energy, approachable for small businesses.
- **2c Terminal** — near-black, signal green, mono headings. IBM Plex Mono / Sans. Most developer-credible, least corporate.
- **2d Steel & Signal Blue** — light steel, classic blue. Sora / Public Sans. Safest for corporate and property clients.

Pick one and I'll roll it across all twelve screens; palette and typeface can also be mixed across options.

## User

I like terminal theme, apply that to all the pages, I choose 1b for home page.

## Assistant

Copying the option set aside, then applying Terminal across the whole path.

_[tool: copy_files]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

Terminal applied to every screen — Home now the outcomes-led layout (1b), plus About, Services, the Mobile App service page, Packages, Contact, Blog index, article, admin, and the five mobile screens. Modernist structure kept intact: zero radius, 2px rules, flush-left labels; accent green reserved for the primary action, numerals and small emphasis, never body copy. A token sheet sits at 3t.

The earlier colour-option canvas is preserved as "VTech Wireframes v1 (colour options)". Still missing: Our Work index and project detail — want them in this theme?

## User

I want the website to have some fluidity in the layout backgrounds, and I want some fresh green color, not this one. Try to see the website references I am sharing with you and redesign our pages like this.

## Assistant

Copying the Terminal version aside, then rebuilding on the aurora direction.

_[tool: copy_files]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

Rebuilt on the reference direction — all nine desktop screens plus the five mobile ones:

- Fresh green (#4FE89A with a #8BFFC0 highlight) replacing the terminal green; buttons and price figures use a soft green gradient rather than a flat fill.
- Fluid grounds: aurora radial glows behind every hero, gradient section transitions instead of hard rules, and a glowing gradient CTA panel at the foot of each page.
- Soft translucent cards at 20–26px corners, pill nav and pill buttons, centred section headers with green eyebrow labels.
- Type moved to Plus Jakarta Sans headings over DM Sans body.

Tokens are documented at 4t. Terminal version kept as "VTech Wireframes v2 (terminal)". Want a mint/teal variant of the accent, or the Our Work index and project detail added next?

## User

Great, I like this alot, I want you to start making high fidelity website now with proper illustrations and icons. Keep the design wireframes as is. I want the illustrations to have a professional but coding style animations, keep the images abstract for the services we are buiding. Add a seperate page for demo where customer will fill a form to send us enquiry. write great high-converting hooks on demo page. Add a 404 page with cool illustration of wires and aura light going off.

## Assistant

Building the hi-fi site as a new file with an in-design page switcher, animated abstract illustrations, and an inline icon set. Wireframes stay untouched.

_[tool: dc_write]_

_[tool: dc_html_str_replace]_

_[tool: dc_set_props]_

## User

Apply drawing

## Assistant

_[tool: grep]_

## User

Remove.

## User

Use this logo and add some hues of blue in the website. The illustrations arent working well with our website. I like the iconography. 

Illustrations in the cards are making layout changes and content changes, which were already locked in previous version. we need to enhance the website with the illustrations not add haywired elements in the name of illustration, do a premium design job with illustrations. but keep it relevant to the responsiveness of the website. 

Redesign the website now, just do 4 pages for now using my instructions,

## User

Use this logo and add some hues of blue in the website. The illustrations arent working well with our website. I like the iconography. 

Illustrations in the cards are making layout changes and content changes, which were already locked in previous version. we need to enhance the website with the illustrations not add haywired elements in the name of illustration, do a premium design job with illustrations. but keep it relevant to the responsiveness of the website. 

Redesign the website now, just do 4 pages for now using my instructions,

## Assistant

_[tool: view_image]_

_[tool: image_metadata]_

