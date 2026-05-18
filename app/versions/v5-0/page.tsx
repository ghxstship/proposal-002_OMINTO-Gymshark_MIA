"use client";

import { useEffect } from "react";
import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "AGV Miami",
  "description": "Full-service scenic fabrication and experiential production studio specializing in brand activations, custom scenic builds, large-format print and graphics, CNC millwork, and nationwide event installation. Serving New York, Miami, Las Vegas, and markets nationwide.",
  "url": "https://experienceagora.com",
  "telephone": "+1-516-283-0363",
  "email": "info@agoravisuals.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1440 Church St",
    "addressLocality": "Bohemia",
    "addressRegion": "NY",
    "postalCode": "11716",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "City", "name": "New York", "sameAs": "https://en.wikipedia.org/wiki/New_York_City" },
    { "@type": "City", "name": "Miami", "sameAs": "https://en.wikipedia.org/wiki/Miami" },
    { "@type": "City", "name": "Las Vegas", "sameAs": "https://en.wikipedia.org/wiki/Las_Vegas" }
  ],
  "knowsAbout": [
    "Scenic Fabrication",
    "Experiential Production",
    "Large-Format Printing",
    "CNC Millwork",
    "Brand Activations",
    "Event Production",
    "Retail Environments",
    "Pop-Up Fabrication",
    "Custom Display Fabrication"
  ],
  "sameAs": [
    "https://www.instagram.com/agoragraphics/",
    "https://www.linkedin.com/company/agora-graphics",
    "https://www.facebook.com/AgoraGraphics"
  ]
};

const htmlContent = `
<!-- NAV -->
<nav class="nav">
  <div class="nav-inner">
    <div class="nav-brand">
      <span class="agora">AGV MIAMI</span>
      <span class="x">x</span>
      <img src="/gymshark-logo.svg" alt="Gymshark" class="nav-logo" style="height:16px" />
    </div>
    <div class="nav-links">
      <a href="#overview">Overview</a>
      <a href="#scope">Scope</a>
      <a href="#locations">Locations</a>
      <a href="#journey">Process</a>
      <a href="#schedule">Timeline</a>
      <a href="#packages">Packages</a>
      <a href="#terms">Agreement</a>
      <a href="#authorize" class="active">Authorize</a>
    </div>
  </div>
</nav>

<!-- VERSION BANNER (SNAPSHOT) -->
<div class="version-banner">
  <div class="version-banner-inner">
    <div class="version-banner-tag">Frozen Snapshot</div>
    <div class="version-banner-text">You are viewing the <strong>Version 5.0</strong> snapshot &mdash; May 18, 2026. The canonical proposal lives at <code style="color:var(--iwc-gold)">/</code> and is currently identical; this URL will be preserved unchanged when future versions ship.</div>
    <a href="/" class="version-banner-link">View Latest &rarr;</a>
  </div>
</div>

<!-- HERO -->
<section class="hero" id="top">
  <div class="hero-content">
    <div class="hero-eyebrow">Experiential Fabrication &amp; Production</div>
    <h1>Gymshark<br>Phone Box</h1>
    <h2>Miami Beach + NYC Flagship Activation Proposal</h2>
    <div class="hero-bar"></div>

    <div class="hero-partners">
      <span>Gymshark</span>
      <span class="sep">x</span>
      <span>Ominto Studio</span>
      <span class="sep">x</span>
      <span>AGV Miami</span>
    </div>

    <div class="hero-meta">
      <div class="hero-meta-item">
        <div class="hero-meta-label">Cities</div>
        <div class="hero-meta-value">Miami Beach + NYC Flagship</div>
      </div>
      <div class="hero-meta-item">
        <div class="hero-meta-label">Activation Dates</div>
        <div class="hero-meta-value">Miami: Fri, Jul 17, 2026 &middot; NYC: Sat, Jul 25, 2026</div>
      </div>
      <div class="hero-meta-item">
        <div class="hero-meta-label">Document</div>
        <div class="hero-meta-value">GS-PHONEBOX-001</div>
      </div>
      <div class="hero-meta-item">
        <div class="hero-meta-label">Version</div>
        <div class="hero-meta-value">Version 5.0 &mdash; May 18, 2026</div>
      </div>
    </div>

    <p class="hero-narrative">
      <strong>Version 5.0.</strong> One phone box, two deployments. Built in <strong>Pantone pink</strong> for Miami. Repainted <strong>teal</strong> at the AGV NY shop in transit. <strong>Lincoln Road Mall, Miami Beach &mdash; Fri, Jul 17, 2026, 11 AM&ndash;8 PM</strong> (Sat, Jul 18 held as weather contingency). <strong>Gymshark NYC Flagship &mdash; Sat, Jul 25, 2026, 10 AM live.</strong> Miami runs with the full interactive stack: a 1&ndash;9 random-digit prize quiz on the handset, ceiling cameras, voucher printer, two wall-mounted selfie stations, Motorola RMU2040s on a Pantone-pink Gymshark wrap. NYC runs tech-free as a retail fixture &mdash; back door locked, fish-eye dome retrofitted at the ceiling, holders on the wall, instructions off. <strong>$90,000 net</strong> production (gross $95,000 less $5,000 Preferred Partner Credit), plus a separate <strong>$10,000 Venue &amp; Permit Expediting Allowance</strong> held at cost.
    </p>
    <div class="hero-doc">Confidential &amp; Proprietary &bull; Prepared exclusively for Gymshark Ltd. and Ominto Studio</div>
  </div>
  <div class="hero-scroll" onclick="document.getElementById('overview').scrollIntoView({behavior:'smooth'})">
    <span>Explore Proposal</span>
    <div class="arrow">&darr;</div>
  </div>
</section>

<!-- BRAND NARRATIVE -->
<div class="brand-narrative" data-a>
  <blockquote>
    A Pantone-pink British phone box on Lincoln Road is already the photograph. Add a ringing handset, a 1&ndash;9 prize quiz, a voucher rolling out of the shelf-mounted printer, and a crowd that just walked into it. Strike the tech at sunset. Repaint the shell teal at the NY shop. Land it on the floor of the Gymshark NYC flagship before doors open Saturday. Built to read clean on the street and under store lights.
  </blockquote>
  <div class="attr">AGV Miami &mdash; Building Brand Environments Since 2006</div>
</div>

<!-- OVERVIEW -->
<section id="overview" class="sec">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--mercedes-teal)"></div><span style="color:var(--mercedes-teal)">Project Overview</span></div>
    <h2>One Object. Two Cities. Two Lives.</h2>
    <p class="sec-desc">
      One phone box, built once, deployed twice. <strong>Miami</strong> is the street moment: Pantone pink, full interactive stack on the handset, voucher printer running, ceiling cameras up, two selfie stations on the wall, product handed through the lockable back door. Strike at sunset. <strong>NYC</strong> is the retail moment: same shell, repainted teal at the AGV NY shop in transit, fish-eye dome retrofitted at the ceiling, tech stripped out, instructions off the wall, locked from the public side. <strong>Lincoln Road Mall, Miami Beach &mdash; Fri, Jul 17, 2026, 11 AM&ndash;8 PM.</strong> <strong>Gymshark NYC Flagship &mdash; Sat, Jul 25, 2026, 10 AM live.</strong>
    </p>
  </div>

  <div class="overview-grid" data-a>
    <div class="overview-card" style="border-color:var(--f1-red)">
      <div class="ov-tag" style="color:var(--f1-red)">The Activation &mdash; Miami</div>
      <h3>Lincoln Road Mall</h3>
      <p><strong>Venue:</strong> <a href="https://lincolnroad.com/" target="_blank" rel="noopener" style="color:var(--f1-red);text-decoration:underline">Lincoln Road Mall</a>, Miami Beach<br>
      <strong>Date:</strong> Friday, July 17, 2026<br>
      <strong>Weather Contingency:</strong> Saturday, July 18, 2026<br>
      <strong>Hours:</strong> 11:00 AM &ndash; 8:00 PM<br>
      <strong>Load-In:</strong> 6:00 AM &ndash; 10:00 AM<br>
      <strong>Palette:</strong> Pantone pink &mdash; full interactive stack live (IVR prize quiz, voucher printer, ceiling cameras, two selfie stations, Motorola RMU2040 radios)<br>
      <strong>Setting:</strong> Pedestrian-only outdoor shopping district with palm canopy, central to the Apple Store / J.Crew / Anthropologie anchor block.</p>
    </div>
    <div class="overview-card" style="border-color:var(--mercedes-teal)">
      <div class="ov-tag" style="color:var(--mercedes-teal)">The Activation &mdash; NYC Flagship</div>
      <h3>Gymshark NYC Flagship Retail Install</h3>
      <p><strong>Venue:</strong> Gymshark NYC Flagship<br>
      <strong>Live:</strong> Saturday, July 25, 2026, 10:00 AM<br>
      <strong>Install Window:</strong> Overnight Fri, Jul 24 into Sat, Jul 25 &mdash; 4-hour install, 1 lead + 2 crew, landed before 10 AM live<br>
      <strong>Palette:</strong> Teal &mdash; repainted at the AGV NY shop in transit Jul 18&ndash;23<br>
      <strong>Tech:</strong> None &mdash; IVR, printer, cameras, and radios pack out at Miami strike. Fish-eye dome mirror retrofitted at the ceiling (replaces dome light). Holders stay on the wall; instructions off.<br>
      <strong>Hardware:</strong> Back door locked from the public face, keyed. White-glove delivery from the AGV NY shop the night of Jul 24.</p>
    </div>
  </div>
</section>

<!-- SCOPE -->
<section id="scope" class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Scope of Work</span></div>
    <h2>Fabrication &amp; Production Details</h2>
    <p class="sec-desc">
      Eight phases, line-itemised. Fabrication, dual paint cycle, interactive tech, branded pink Pantone extras, the Miami activation, logistics through the AGV NY shop, the NYC retail install, on-site support in Miami, and the producer fee. Specified against Ominto Studio&rsquo;s V2 design pack. Engineered for a one-day outdoor stunt and a retail handoff six days later. Pricing is inclusive &mdash; finishing, seaming, hardware, and paint sit inside each line.
    </p>
  </div>

  <!-- COMPONENTS — THE PHONE BOX -->
  <div class="phase" data-a>
    <div class="phase-head" onclick="togglePhase(this)" style="border-left:4px solid var(--iwc-gold)">
      <div class="phase-num" style="color:var(--iwc-gold)">01</div>
      <div class="phase-info">
        <h3>The Phone Box &mdash; Pink Miami + Teal NYC Dual-Finish</h3>
        <div class="sub">Custom scenic fabrication &bull; British phone box with lightbox shell, lockable back door, fish-eye dome retrofit, dual paint cycle</div>
      </div>
      <div class="phase-toggle" style="border-color:var(--iwc-gold);color:var(--iwc-gold)">+</div>
    </div>
    <div class="phase-body">
      <div class="phase-inner" style="border-left:4px solid var(--iwc-gold)">
        <p class="phase-narrative">
          The hero object. Custom-fabricated British phone box, painted Pantone pink for Miami, repainted teal at the AGV NY shop in transit. Four-sided illuminated lightbox signage. Glass-and-vinyl front door. Lockable back distribution door, keyed for the NYC retail install. Aluminium chequer-plate floor. Guest seat. Working analogue handset. Fish-eye dome mirror at the NYC ceiling (replaces the Miami dome light). Two freight-friendly modules, single-truck transport, ~4-hour on-site assembly.
        </p>

        <div class="core-label" style="color:var(--iwc-gold)">Core Deliverables</div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Phone Box Structural Shell</div>
          <div class="desc">Custom scenic fabrication per Ominto V2 design pack. <strong>Footprint 164 &times; 94 cm</strong> (~5'4&Prime; &times; 3'1&Prime;); <strong>body height 213 cm</strong> (~7'0&Prime;); <strong>lightbox header +20 cm</strong> (total ~7'8&Prime;). Two-piece modular construction split into a 70 cm-deep back-of-house staff compartment and a 94 cm-deep guest compartment. Weatherproof marine-grade build engineered for curb-level install on pavement/plaza surface with concealed ballasting and a follow-on retail handoff.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$14,500</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">4-Sided Illuminated Lightbox Signage</div>
          <div class="desc">LED-backlit translucent face panels on all four sides with &ldquo;GYMSHARK&rdquo; wordmark and sharkhead mark. Dimmable driver, weatherproof housing, consolidated single-cord power feed.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$6,800</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Glass &amp; Semi-Transparent Vinyl Panels</div>
          <div class="desc">Tempered glass panels on front door and sides with custom-printed semi-transparent privacy vinyl &mdash; preserves the &ldquo;reveal&rdquo; moment when guests enter. Vinyl finish print-matched to brand palette.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$2,900</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Dual Paint Cycle &mdash; Pink Miami &rarr; Teal NYC Refresh</div>
          <div class="desc">Full marine-grade paint programme across both deployments. Cycle one: sand &amp; prep, primer, three-coat application of Pantone pink in matte finish (Miami palette) at the fab shop. Cycle two: scuff/scratch repair, lightbox edge cleanup, then full repaint to teal (NYC palette) at the AGV NY shop between Miami strike and the flagship delivery. Matte finish on both passes to keep flash bounce low on photo/video. Dimensional mirror with scripted messaging above and below.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$4,500</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Hinged + Lockable Back Distribution Door</div>
          <div class="desc">True hinged back door, brand-painted, no visible handle on the public face. Miami: a Gymshark staff member operates from inside the back-of-house compartment and hands product directly to the guest. NYC: keyed lock retrofitted at the NY shop so the door stays secured on the retail floor. Replaces the earlier concealed motorised slot &mdash; simpler workflow, lower cost, retail-safe.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$2,000</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Fish-Eye Dome Mirror &mdash; NYC Ceiling Retrofit</div>
          <div class="desc">Convex fish-eye dome mirror retrofitted at the NY shop, mounted at the ceiling in place of the Miami dome light. Reads as a wide-angle photo moment on the retail floor, no electrical load. Pulled out of the box at Miami strike; installed during the teal refresh cycle Jul 18&ndash;23.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$400</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Interior Finishes</div>
          <div class="desc">Aluminium chequer-plate (five-bar pattern) flooring, circular dome overhead light (Miami &mdash; pulled out for NYC), compact guest seat, and branded analogue phone with handset on a shelf mount aligned to the voucher printer placement.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$2,750</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Engineering, Structural Calcs &amp; Shop Drawings</div>
          <div class="desc">Licensed structural calculations for outdoor sidewalk install, wind-load &amp; ballast plan, electrical schematics for lightbox and tech integration, CAD shop drawings for fabrication, and venue-compliance drawing package. Required for private-venue permit submissions and insurance COI issuance.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$4,000</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Back-of-House Staff Compartment</div>
          <div class="desc">Interior partition wall + small staff stoop creating a private back compartment behind the hinged distribution door. One Gymshark-supplied team member operates from inside, handing product through the back door to the guest. Talent supplied by Client per the proposal exclusions.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$1,800</div>
        </div>
      </div>
    </div>
  </div>

  <!-- COMPONENTS — INTERACTIVE TECH -->
  <div class="phase" data-a>
    <div class="phase-head" onclick="togglePhase(this)" style="border-left:4px solid var(--mercedes-teal)">
      <div class="phase-num" style="color:var(--mercedes-teal)">02</div>
      <div class="phase-info">
        <h3>Interactive Tech &mdash; Miami Only</h3>
        <div class="sub">1&ndash;9 random-digit prize quiz, green/red YES/NO caps, Motorola pair, ceiling cameras, voucher printer, two selfie stations</div>
      </div>
      <div class="phase-toggle" style="border-color:var(--mercedes-teal);color:var(--mercedes-teal)">+</div>
    </div>
    <div class="phase-body">
      <div class="phase-inner" style="border-left:4px solid var(--mercedes-teal)">
          <p class="phase-narrative">
            Miami-only. The full stack packs out at strike &mdash; NYC runs tech-free. Lift the handset. Press any digit 1&ndash;9. One of three rotating questions per digit fires back, 27 in the pool so the crowd can&rsquo;t coach itself. <strong>#</strong> for YES, <strong>*</strong> for NO &mdash; custom green and red caps fabricated to slot over those two keys. Win, the voucher prints on the shelf-mounted thermal printer; a Gymshark staffer dispenses product through the back door. Two Ring Mini cameras at the ceiling cover the guest and back-of-house compartments. Two wall-mounted selfie stations hold the guest&rsquo;s own phone &mdash; face-level and belfie-angle. Two Motorola RMU2040 radios wear a Pantone-pink Gymshark-logo sticker over the Motorola branding so the prop reads as brand, not vendor.
          </p>

        <div class="core-label" style="color:var(--mercedes-teal)">Core Deliverables</div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">IVR &mdash; 1&ndash;9 Random-Digit Prize Quiz, 27-Question Rotation</div>
          <div class="desc">Working analogue handset wired to a production-grade IVR. Guest presses any digit 1&ndash;9; one of three rotating questions per digit fires, 27 in the pool. Keypad mapping: <strong># = YES, * = NO</strong>. Multi-branch scripting, licensed voice talent, redundant win/lose logic, full QA pass. Scripting and voice talent supplied by AGV Miami in collaboration with the Gymshark comms team.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$7,500</div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Green/Red YES/NO Caps (Custom Fab)</div>
          <div class="desc">Custom-fabricated keypad caps that slot over the existing handset keypad &mdash; green over <strong>#</strong> (YES), red over <strong>*</strong> (NO). Resin-printed, brand-matched, friction-fit so they stay put under repeat use and pull clean for transport.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$400</div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Two-Way Radio Pair &mdash; Motorola RMU2040 + Brand-Mask Stickers</div>
          <div class="desc">2 &times; <a href="https://www.globalindustrial.com/p/motorola-rmu2040-rm-series-2-way-radio-2-channel-2-watt" target="_blank" rel="noopener" style="color:var(--mercedes-teal);text-decoration:underline">Motorola RMU2040 RM-Series 2-Way Radios</a> (2-channel, 2-watt UHF business-grade, license-free, ~250,000 sq ft / 12-floor range, NOAA weather alerts). Custom Pantone-pink Gymshark-logo stickers applied over the Motorola wordmark so the radio reads as a Gymshark prop. One inside the booth for the guest, one with the on-site Gymshark athlete; spare batteries included.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$800</div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Ceiling Cameras &mdash; Ring Mini Indoor Plug-In</div>
          <div class="desc">2 &times; <a href="https://ring.com/products/mini-indoor-security-camera-plug-in/" target="_blank" rel="noopener" style="color:var(--mercedes-teal);text-decoration:underline">Ring Mini Indoor Security Cameras</a> (1080p HD, two-way talk, motion detection, plug-in / no batteries, Wi-Fi, white finish). Cloud storage via Ring Protect subscription. Ceiling-mounted to cover both the guest compartment and back-of-house staff compartment per Ominto deck spec (p.15: &ldquo;2&times; camera fitted to ceiling&rdquo;).</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$300</div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Wall-Mounted Selfie Stations</div>
          <div class="desc">2 &times; wall-mounted selfie stations, painted to match the booth interior &mdash; one at face level, one positioned for the signature Gymshark &ldquo;belfie.&rdquo; Each station holds the guest&rsquo;s own phone. Holders stay on the wall through the NYC retail install; instructions come off.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$900</div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Thermal Voucher Printer + Pink Vinyl Shelf Mount</div>
          <div class="desc">80mm thermal ticket printer (<a href="https://a.co/d/0hWbMj1N" target="_blank" rel="noopener" style="color:var(--mercedes-teal);text-decoration:underline">Amazon-sourced hardware-equivalent class</a>) shelf-mounted under the handset, wrapped in Pantone-pink vinyl. Voucher template designed by Gymshark; AGV Miami handles printer procurement, firmware, redundant roll inventory, and wrap. Packs out at Miami strike.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$1,500</div>
        </div>

      </div>
    </div>
  </div>

  <!-- COMPONENTS — BRANDING & SIGNAGE -->
  <div class="phase" data-a>
    <div class="phase-head" onclick="togglePhase(this)" style="border-left:4px solid var(--f1-red)">
      <div class="phase-num" style="color:var(--f1-red)">03</div>
      <div class="phase-info">
        <h3>Branding + Pink Pantone Extras</h3>
        <div class="sub">Pantone-pink stanchions, branded umbrellas, disclaimer stand, water bottles, daily consumables</div>
      </div>
      <div class="phase-toggle" style="border-color:var(--f1-red);color:var(--f1-red)">+</div>
    </div>
    <div class="phase-body">
      <div class="phase-inner" style="border-left:4px solid var(--f1-red)">
        <p class="phase-narrative">
          The crew kit that lives around the box on Lincoln Road. Pantone-pink stanchions with Gymshark logo plates frame the queue. Branded pink umbrellas hold the line in sun. Disclaimer stand at the booth entry handles capture, audio, and voucher terms. 200 branded water bottles at the queue head. Daily consumables &amp; spares kit covers a full operating day. Product packaging is out of scope here &mdash; Ominto Studio handles packaging direct, flat-packed delivery to the AGV workshop.
        </p>

        <div class="core-label" style="color:var(--f1-red)">Core Deliverables</div>

        <div class="core-item" style="border-color:var(--f1-red)">
          <div><div class="name">Custom Pink-Pantone Stanchions + Gymshark-Logo Posts</div>
          <div class="desc">Custom-fabricated stanchion poles and ropes in Pantone pink, posts branded with Gymshark logo plates. Sized for the Lincoln Road queue line and the booth perimeter. Replaces the V4 generic venue dressing kit.</div></div>
          <div class="price" style="color:var(--f1-red)">$1,800</div>
        </div>

        <div class="core-item" style="border-color:var(--f1-red)">
          <div><div class="name">Branded Pink Umbrellas</div>
          <div class="desc">Pantone-pink umbrellas with the Gymshark wordmark, sized for queue shade and content readability. Sourced, printed, and palletised by AGV Miami. Hand-out or queue-line use at the Client&rsquo;s call.</div></div>
          <div class="price" style="color:var(--f1-red)">$2,200</div>
        </div>

        <div class="core-item" style="border-color:var(--f1-red)">
          <div><div class="name">Disclaimer Stand &mdash; Booth Entry</div>
          <div class="desc">Free-standing disclaimer stand at the booth entry covering capture (ceiling cameras), audio (IVR), and voucher terms. Print + structure by AGV Miami; copy supplied by Gymshark legal.</div></div>
          <div class="price" style="color:var(--f1-red)">$850</div>
        </div>

        <div class="core-item" style="border-color:var(--f1-red)">
          <div><div class="name">Branded Gymshark Water Bottles &mdash; 200 units</div>
          <div class="desc">200 branded water bottles at the queue head, Pantone-pink wrap with Gymshark wordmark. Hand-out volume sized to Lincoln Road foot traffic on a July afternoon.</div></div>
          <div class="price" style="color:var(--f1-red)">$1,400</div>
        </div>

        <div class="core-item" style="border-color:var(--f1-red)">
          <div><div class="name">Daily Consumables &amp; Spares Kit</div>
          <div class="desc">Per-activation kit: voucher paper rolls, cleaning supplies, sanitisation wipes, Pantone-pink touch-up paint, vinyl repair patches, spare hardware, and gaffer tape. Sized for full-day operation.</div></div>
          <div class="price" style="color:var(--f1-red)">$1,500</div>
        </div>
      </div>
    </div>
  </div>

  <!-- SERVICES — LOGISTICS & INSTALLATION -->
  <div class="phase" data-a>
    <div class="phase-head" onclick="togglePhase(this)" style="border-left:4px solid var(--white)">
      <div class="phase-num" style="color:var(--white)">04</div>
      <div class="phase-info">
        <h3>The Activation &mdash; Lincoln Road Mall, Fri Jul 17, 11 AM&ndash;8 PM</h3>
        <div class="sub">Inbound logistics, install, on-site technicians, same-day strike, outbound freight</div>
      </div>
      <div class="phase-toggle" style="border-color:var(--white);color:var(--white)">+</div>
    </div>
    <div class="phase-body">
      <div class="phase-inner" style="border-left:4px solid var(--white)">
        <p class="phase-narrative">
          The Miami day. Single-truck freight to Lincoln Road. 4&ndash;6 hour install window. Three-person install crew. Dual on-site technicians through operating hours, 11 AM&ndash;8 PM. Same-day strike at sunset; outbound freight loaded for the AGV NY shop. Sat, Jul 18 held as weather contingency only.
        </p>

        <div class="core-label">Core Deliverables</div>

        <div class="core-item">
          <div><div class="name">Inbound Logistics &amp; Install &mdash; Miami</div>
          <div class="desc">Truck, rigging hardware, 3-person install crew, venue load-in coordination, module assembly, electrical hookup, permit-window supervisor, final finishing, and pre-open inspection. 4&ndash;6 hour install window at Lincoln Road Mall.</div></div>
          <div class="price">$4,800</div>
        </div>

        <div class="core-item">
          <div><div class="name">On-Site Technicians &mdash; 11 AM&ndash;8 PM</div>
          <div class="desc">Dedicated lead technician plus rotating second tech for rush windows and breaks. Covers voucher roll, camera system, IVR prompts, minor scenic touch-ups, and pre-open soundcheck / post-close shutdown.</div></div>
          <div class="price">$3,000</div>
        </div>

        <div class="core-item">
          <div><div class="name">Same-Day Strike &amp; Outbound Freight</div>
          <div class="desc">Complete de-installation, module breakdown, crated outbound freight within Lincoln Road Mall&rsquo;s contracted strike window. Site walk-through with the Lincoln Road BID operations team and full restoration to original condition.</div></div>
          <div class="price">$3,300</div>
        </div>
      </div>
    </div>
  </div>

  <!-- PHASE 05 — LOGISTICS TO NYC + TEAL REFRESH -->
  <div class="phase" data-a>
    <div class="phase-head" onclick="togglePhase(this)" style="border-left:4px solid var(--iwc-gold)">
      <div class="phase-num" style="color:var(--iwc-gold)">05</div>
      <div class="phase-info">
        <h3>Logistics to NYC + Teal Refresh at NY Shop</h3>
        <div class="sub">Climate hold, inter-city freight, teal repaint cycle + lock retrofit, white-glove flagship delivery</div>
      </div>
      <div class="phase-toggle" style="border-color:var(--iwc-gold);color:var(--iwc-gold)">+</div>
    </div>
    <div class="phase-body">
      <div class="phase-inner" style="border-left:4px solid var(--iwc-gold)">
        <p class="phase-narrative">
          Miami strike to flagship delivery. The box leaves Lincoln Road Friday night, holds at climate spec, freights to the AGV NY shop, gets repainted teal, has the keyed lock retrofitted on the back door, the fish-eye dome mirror fitted at the ceiling, edge cleanup on the lightbox, then a white-glove drop at the Gymshark NYC flagship the night of Fri, Jul 24 ahead of 10 AM live on Sat, Jul 25.
        </p>

        <div class="core-label" style="color:var(--iwc-gold)">Core Deliverables</div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Climate-Controlled Warehouse Hold</div>
          <div class="desc">Secure climate-controlled storage of the full phone box assembly between the Miami strike and the start of the teal refresh cycle at the AGV NY shop. Held at climate spec.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$2,400</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Inter-City Freight Miami &rarr; AGV NY Shop</div>
          <div class="desc">Dedicated climate-controlled truck from Lincoln Road Mall to the AGV NY shop. Real-time GPS tracking, two-driver rotation, driver handoff documentation.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$5,500</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Teal Repaint Cycle + Lock Retrofit + Edge Cleanup at NY Shop</div>
          <div class="desc">Full repaint to teal at the AGV NY shop Jul 18&ndash;23: scuff/scratch repair, primer, three-coat teal application, lightbox edge cleanup. Keyed lock retrofitted on the back distribution door for retail. Fish-eye dome mirror installed at the ceiling in place of the Miami dome light. Final QC pass before white-glove delivery.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$4,500</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">White-Glove Delivery to Gymshark NYC Flagship</div>
          <div class="desc">Climate-controlled final-mile delivery from the AGV NY shop to the Gymshark NYC flagship. Scheduled the night of Fri, Jul 24 to land before the Sat, Jul 25, 10 AM live.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$2,000</div>
        </div>
      </div>
    </div>
  </div>

  <!-- PHASE 06 — NYC RETAIL INSTALL -->
  <div class="phase" data-a>
    <div class="phase-head" onclick="togglePhase(this)" style="border-left:4px solid var(--mercedes-teal)">
      <div class="phase-num" style="color:var(--mercedes-teal)">06</div>
      <div class="phase-info">
        <h3>NYC Retail Install &mdash; Gymshark Flagship, Sat Jul 25, 10 AM Live</h3>
        <div class="sub">1 lead + 2 crew, 4-hour overnight install, fish-eye mirror set, tech-free retail fixture</div>
      </div>
      <div class="phase-toggle" style="border-color:var(--mercedes-teal);color:var(--mercedes-teal)">+</div>
    </div>
    <div class="phase-body">
      <div class="phase-inner" style="border-left:4px solid var(--mercedes-teal)">
        <p class="phase-narrative">
          The retail handoff. Overnight install lands before doors. One lead, two crew, 4-hour window. Tech-free build: IVR, printer, cameras, and radios stay in Miami. Back door locked from the public face. Fish-eye dome mirror set at the ceiling. Selfie holders stay on the wall; instructions off. Final on-floor commissioning sign-off with the flagship store manager.
        </p>

        <div class="core-label" style="color:var(--mercedes-teal)">Core Deliverables</div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Local Install Team &mdash; 1 Lead + 2 Crew</div>
          <div class="desc">On-site retail-environment install team: 1 lead technician + 2 crew, floor-protection kit, retail-grade hand-tool kit, store-operations liaison. 4-hour install window scheduled overnight Fri, Jul 24 &rarr; Sat, Jul 25 to land before 10 AM live.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$2,800</div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">In-Store Fixture Setup + Fish-Eye Mirror Install</div>
          <div class="desc">Anchoring to retail-spec floor (no permanent penetration), back-door lock check, fish-eye dome mirror fitted at the ceiling, selfie-holder placement, lightbox bring-up, on-floor commissioning sign-off with the flagship store manager.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$1,200</div>
        </div>
      </div>
    </div>
  </div>

  <!-- PHASE 07 — ON-SITE SUPPORT (MIAMI) -->
  <div class="phase" data-a>
    <div class="phase-head" onclick="togglePhase(this)" style="border-left:4px solid var(--f1-red)">
      <div class="phase-num" style="color:var(--f1-red)">07</div>
      <div class="phase-info">
        <h3>On-Site Support &mdash; Miami</h3>
        <div class="sub">Sprinter van rental, parking permit administration</div>
      </div>
      <div class="phase-toggle" style="border-color:var(--f1-red);color:var(--f1-red)">+</div>
    </div>
    <div class="phase-body">
      <div class="phase-inner" style="border-left:4px solid var(--f1-red)">
        <p class="phase-narrative">
          Day-of support running the Miami floor. Sprinter van parked close to Lincoln Road under a City of Miami Beach permit, holds excess stock, GS equipment, voucher rolls, water bottles. Permit administration sits with AGV.
        </p>

        <div class="core-label" style="color:var(--f1-red)">Core Deliverables</div>

        <div class="core-item" style="border-color:var(--f1-red)">
          <div><div class="name">Sprinter Van Rental &mdash; 1 Day</div>
          <div class="desc">Single-day Sprinter van rental for Fri, Jul 17, parked under a City of Miami Beach permit close to Lincoln Road. Holds excess product inventory, Gymshark-supplied equipment, voucher rolls, water bottles. Insurance and fuel inside the line.</div></div>
          <div class="price" style="color:var(--f1-red)">$450</div>
        </div>

        <div class="core-item" style="border-color:var(--f1-red)">
          <div><div class="name">Parking Permit Administration</div>
          <div class="desc">City of Miami Beach parking permit pulled and administered by AGV for the day-of Sprinter van. Permit fees themselves sit inside the Venue + Permit Expediting Allowance below.</div></div>
          <div class="price" style="color:var(--f1-red)">$250</div>
        </div>
      </div>
    </div>
  </div>

  <!-- PHASE 08 — PROJECT MANAGEMENT -->
  <div class="phase" data-a>
    <div class="phase-head" onclick="togglePhase(this)" style="border-left:4px solid var(--mercedes-teal)">
      <div class="phase-num" style="color:var(--mercedes-teal)">08</div>
      <div class="phase-info">
        <h3>Project Management &amp; Client Services</h3>
        <div class="sub">Dedicated producer, client-services coverage, and cross-agency coordination</div>
      </div>
      <div class="phase-toggle" style="border-color:var(--mercedes-teal);color:var(--mercedes-teal)">+</div>
    </div>
    <div class="phase-body">
      <div class="phase-inner" style="border-left:4px solid var(--mercedes-teal)">
        <p class="phase-narrative">
          One producer across both deployments. Kickoff through post-event reconciliation. Weekly status, cross-agency coordination with Ominto Studio and Gymshark, vendor and venue liaison, budget tracking, Change Order administration, COI + insurance coordination.
        </p>

        <div class="core-label" style="color:var(--mercedes-teal)">Core Deliverables</div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Project Management Fee</div>
          <div class="desc">Dedicated senior producer covering both Miami and the NYC retail install. Weekly status reporting, milestone tracking, vendor and venue liaison, COI + insurance coordination, post-event reconciliation. Same producer, two surfaces.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$6,000</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- LOCATIONS -->
<section id="locations" class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Venues</span></div>
    <h2>Two Venues. Two Lives.</h2>
    <p class="sec-desc">
      V5.0 runs across two venues. <strong>Lincoln Road Mall, Miami Beach</strong> &mdash; Fri, Jul 17, 2026, 11 AM&ndash;8 PM (Sat, Jul 18 held as weather contingency). <strong>Gymshark NYC Flagship</strong> &mdash; Sat, Jul 25, 2026, 10 AM live, overnight install Fri, Jul 24. Lincoln Road BID daily fee, permits, COI, and expediting sit inside the $10,000 Venue + Permit Expediting Allowance (held at cost, overages billed back).
    </p>
  </div>

  <!-- MIAMI SUBSECTION -->
  <div class="loc-city-section" data-a>
    <div class="loc-city-heading">
      <div class="sec-eye"><div class="bar" style="background:var(--f1-red)"></div><span style="color:var(--f1-red)">Miami &bull; The Activation &bull; Street</span></div>
      <h3>Miami Venue</h3>
      <p>The activation runs as a one-day street pop-up at Lincoln Road Mall on Friday, July 17, 2026 (with Saturday, July 18, 2026 held as a weather contingency). The Lincoln Road BID handles permitting; the Miami venue fee is the only venue pass-through across the entire programme.</p>
    </div>

    <div class="loc-grid loc-grid-feature">

      <!-- MIAMI: LINCOLN ROAD MALL -->
      <div class="loc-card" style="border-color:var(--f1-red)">
        <div class="loc-hero loc-hero-lincoln">
          <div class="loc-city" style="color:var(--f1-red)">Miami</div>
          <div class="loc-title">Lincoln Road Mall</div>
          <div class="loc-sub">Miami Beach &bull; Friday, July 17, 2026</div>
        </div>
        <div class="loc-body">
          <div class="loc-price">Pantone pink &bull; full interactive stack live</div>
          <p>Pedestrian-only outdoor shopping district with recent streetscape regeneration. Steady 7-day foot traffic of tourists, residents, and beach-goers. Permitting via City of Miami Beach and the Lincoln Road Business Improvement District; sits inside the Venue + Permit Expediting Allowance.</p>
          <p style="margin-top:12px;padding:12px 14px;border:1px solid var(--f1-red);border-radius:4px;background:rgba(244,162,97,0.06);font-size:11px;line-height:1.65"><strong style="color:var(--f1-red);text-transform:uppercase;letter-spacing:1.5px;font-size:10px">Venue &mdash; Confirmed</strong><br><strong>Venue:</strong> Lincoln Road Mall, Miami Beach &mdash; pedestrian-only outdoor shopping district with palm canopy, central to the Apple Store / J.Crew / Anthropologie anchor block.<br><strong>Date:</strong> Friday, July 17, 2026, 11 AM&ndash;8 PM.<br><strong>Weather contingency:</strong> Saturday, July 18, 2026 &mdash; held by the BID against the same permit window for outdoor weather displacement only.</p>
          <ul>
            <li>Car-free corridor &mdash; safe for street-level activation</li>
            <li>High dwell time, shopping-mindset audience</li>
            <li>Full tech stack on the floor: IVR, printer, cameras, radios</li>
            <li>Pantone-pink stanchions, umbrellas, water bottles, disclaimer stand</li>
          </ul>
          <a href="https://lincolnroad.com/" class="loc-link" target="_blank" rel="noopener">Lincoln Road BID</a>
        </div>
      </div>

      <!-- NYC: GYMSHARK FLAGSHIP -->
      <div class="loc-card" style="border-color:var(--mercedes-teal)">
        <div class="loc-hero">
          <div class="loc-city" style="color:var(--mercedes-teal)">New York</div>
          <div class="loc-title">Gymshark NYC Flagship</div>
          <div class="loc-sub">Saturday, July 25, 2026 &bull; 10 AM Live</div>
        </div>
        <div class="loc-body">
          <div class="loc-price">Teal palette &bull; tech-free retail fixture</div>
          <p>The retail second life. Six days after Miami strike, the same shell lands on the flagship floor in teal. Tech stack stripped out. Back door locked from the public face. Fish-eye dome mirror at the ceiling, holders on the wall, instructions off.</p>
          <p style="margin-top:12px;padding:12px 14px;border:1px solid var(--mercedes-teal);border-radius:4px;background:rgba(34,178,156,0.06);font-size:11px;line-height:1.65"><strong style="color:var(--mercedes-teal);text-transform:uppercase;letter-spacing:1.5px;font-size:10px">Retail Install</strong><br><strong>Live:</strong> Saturday, July 25, 2026, 10 AM.<br><strong>Install:</strong> Overnight Fri, Jul 24 &rarr; Sat, Jul 25 &mdash; 4-hour window, 1 lead + 2 crew, landed before doors.<br><strong>Delivery:</strong> White-glove handoff from the AGV NY shop the night of Jul 24.</p>
          <ul>
            <li>Tech-free &mdash; no IVR, no printer, no cameras, no radios</li>
            <li>Lockable back door (keyed) for retail safety</li>
            <li>Fish-eye dome mirror retrofitted at the ceiling</li>
            <li>Selfie holders stay on the wall; instructions removed</li>
          </ul>
        </div>
      </div>

    </div>
  </div>

  <div class="loc-footnote" data-a>
    <strong>Venue + permit accounting.</strong> Lincoln Road BID daily fee, permits, site deposits, mandatory security, COI premiums, and permit expediting sit inside the <strong>$10,000 Venue + Permit Expediting Allowance</strong> below &mdash; tracked at cost, overages billed back to Client on actual receipts. The Gymshark NYC flagship is brand-owned; no venue fee. Logistics through the AGV NY shop, the teal refresh cycle, and white-glove flagship delivery are itemised inside the production investment.
  </div>
</section>

<!-- PRODUCTION JOURNEY -->
<section id="journey" class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--mercedes-teal)"></div><span style="color:var(--mercedes-teal)">Your Production Journey</span></div>
    <h2>Eight Phases. Two Deployments.</h2>
    <p class="sec-desc">
      Milestone-gated production from creative alignment through both deployments. Scope Approval Mon, May 18, 2026 &rarr; Lincoln Road Mall street activation Fri, Jul 17 &rarr; teal refresh at the AGV NY shop Jul 18&ndash;23 &rarr; Gymshark NYC flagship retail install live Sat, Jul 25, 10 AM &rarr; closeout Fri, Jul 31.
    </p>
  </div>

  <div class="journey-grid" data-a>
    <div class="journey-step" style="border-color:var(--iwc-gold)">
      <div class="step-num" style="color:var(--iwc-gold)">01</div>
      <h4>Discovery &amp; Creative Consultation</h4>
      <p>Strategic alignment on brand vision, venue requirements, audience experience goals, and technical constraints. Site surveys and stakeholder interviews inform the creative brief.</p>
      <div class="step-date">Completed &mdash; March 2026</div>
    </div>
    <div class="journey-step" style="border-color:var(--iwc-gold)">
      <div class="step-num" style="color:var(--iwc-gold)">02</div>
      <h4>Concept Design &amp; Visualization</h4>
      <p>Creative direction development, 3D renderings, spatial layout planning, and material specification. Visual presentations for client review and iterative refinement.</p>
      <div class="step-date">Completed &mdash; March 2026</div>
    </div>
    <div class="journey-step" style="border-color:var(--iwc-gold)">
      <div class="step-num" style="color:var(--iwc-gold)">03</div>
      <h4>Engineering &amp; Technical Development</h4>
      <p>Structural engineering calculations, shop drawings, electrical schematics for lightbox and tech, ballast plan for outdoor install, and Lincoln Road BID compliance documentation.</p>
      <div class="step-date">May 29 &ndash; June 12, 2026</div>
    </div>
    <div class="journey-step" style="border-color:var(--iwc-gold)">
      <div class="step-num" style="color:var(--iwc-gold)">04</div>
      <h4>Fabrication &amp; Print Production</h4>
      <p>Custom scenic build, CNC milling, millwork assembly, Pantone-pink paint finish (cycle one), lightbox output, IVR caps fabrication, and multi-stage QC inspections. Teal repaint cycle scheduled for the AGV NY shop in transit.</p>
      <div class="step-date">June 15 &ndash; July 6, 2026</div>
    </div>
    <div class="journey-step" style="border-color:var(--mercedes-teal)">
      <div class="step-num" style="color:var(--mercedes-teal)">05</div>
      <h4>Logistics &amp; Pre-Deployment</h4>
      <p>Precision crating, climate-protected transport from the Bohemia, NY fabrication facility to Lincoln Road Mall, Miami Beach.</p>
      <div class="step-date">July 14 &ndash; 16, 2026</div>
    </div>
    <div class="journey-step" style="border-color:var(--mercedes-teal)">
      <div class="step-num" style="color:var(--mercedes-teal)">06</div>
      <h4>The Miami Activation</h4>
      <p>Pre-dawn install at Lincoln Road Mall. 4&ndash;6 hour window, 3-person crew, dual on-site technicians, 11 AM&ndash;8 PM operating window with the full interactive stack live. Same-day strike at sunset. Sat, Jul 18 held as a weather contingency.</p>
      <div class="step-date">Friday, July 17, 2026</div>
    </div>
    <div class="journey-step" style="border-color:var(--mercedes-teal)">
      <div class="step-num" style="color:var(--mercedes-teal)">07</div>
      <h4>Teal Refresh at the AGV NY Shop</h4>
      <p>Inter-city climate freight Miami &rarr; AGV NY shop. Tech stack pulled. Full teal repaint cycle. Lock retrofit on the back door. Fish-eye dome mirror set at the ceiling. Lightbox edge cleanup. Final QC before white-glove delivery.</p>
      <div class="step-date">July 18 &ndash; 23, 2026</div>
    </div>
    <div class="journey-step" style="border-color:var(--mercedes-teal)">
      <div class="step-num" style="color:var(--mercedes-teal)">08</div>
      <h4>NYC Retail Install &amp; Closeout</h4>
      <p>White-glove delivery to the Gymshark NYC flagship the night of Fri, Jul 24. Overnight 4-hour install, 1 lead + 2 crew, tech-free retail build. Live Sat, Jul 25, 10 AM. Post-event reconciliation, captured media handoff, project archive.</p>
      <div class="step-date">Delivery Jul 24 &bull; Live Jul 25, 10 AM &bull; Closeout Jul 31, 2026</div>
    </div>
  </div>
</section>

<!-- TIMELINE -->
<section id="schedule" class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--mercedes-teal)"></div><span style="color:var(--mercedes-teal)">Production Timeline</span></div>
    <h2>Workback Schedule</h2>
    <p class="sec-desc">All milestones depend on timely creative approvals, venue confirmation, and receipt of deposit. Delays at any gate may push downstream windows.</p>
  </div>

  <table class="sched-table" data-a>
    <thead><tr><th>Phase</th><th>Milestone</th><th>Date</th></tr></thead>
    <tbody>
      <tr><td>Scope Approval</td><td>V5.0 plan approved (Lincoln Road Mall + Gymshark NYC flagship retail install); production authorisation issued</td><td>Monday, May 18, 2026</td></tr>
      <tr><td>60% Deposit</td><td>$54,000 deposit due on countersign &mdash; triggers procurement, engineering, and Lincoln Road BID permit expediting</td><td>Wednesday, May 20, 2026</td></tr>
      <tr><td>Creative Lock</td><td>Final artwork, voucher template, and IVR 27-question pool delivered to AGV Miami</td><td>Friday, May 29, 2026</td></tr>
      <tr><td>Assets from Ominto Studio</td><td>Print-ready creative assets handed from Ominto Studio to AGV Miami (packaging routes through Ominto direct)</td><td>W/c Monday, June 8, 2026</td></tr>
      <tr><td>Engineering &amp; Permit</td><td>Structural, electrical, ballast, and Lincoln Road BID compliance drawings issued; permit application filed with the BID and the City of Miami Beach</td><td>May 29 &ndash; June 12, 2026</td></tr>
      <tr><td>Scenic Fabrication</td><td>Phone box shell build, Pantone-pink paint cycle one, lightbox assembly, lockable back distribution door, green/red YES/NO caps fab</td><td>June 15 &ndash; July 6, 2026</td></tr>
      <tr><td>Print &amp; Graphics Production</td><td>Lightbox graphics, Pantone-pink stanchion plates, umbrellas, water-bottle wrap, disclaimer stand</td><td>June 22 &ndash; July 6, 2026</td></tr>
      <tr><td>Tech Bench Test</td><td>Full IVR (27-question pool) + voucher printer + Ring Mini cameras + radio pair rehearsed end-to-end at AGV Miami facility</td><td>July 6 &ndash; 10, 2026</td></tr>
      <tr><td>40% Balance</td><td>$36,000 balance due &mdash; five (5) business days prior to the Miami install</td><td>Friday, July 10, 2026</td></tr>
      <tr><td>Transit to Miami</td><td>Truck loaded, transported from Bohemia, NY to Lincoln Road Mall, Miami Beach</td><td>July 14 &ndash; 16, 2026</td></tr>
      <tr><td>The Activation &mdash; Miami</td><td>Pre-dawn install at Lincoln Road Mall, 11 AM&ndash;8 PM operating window, same-day strike. Sat, Jul 18 held as weather contingency.</td><td>Friday, July 17, 2026</td></tr>
      <tr><td>Return + Teal Refresh at NY Shop</td><td>Inter-city freight Miami &rarr; AGV NY shop, full teal repaint cycle, lock retrofit on back door, fish-eye dome retrofit, lightbox edge cleanup, final QC</td><td>July 18 &ndash; 23, 2026</td></tr>
      <tr><td>White-Glove Flagship Delivery</td><td>Climate-controlled final-mile delivery from the AGV NY shop to the Gymshark NYC flagship, scheduled the night of Jul 24 to land before live</td><td>Friday, July 24, 2026</td></tr>
      <tr><td><strong>NYC Retail Install Live</strong></td><td>Overnight 4-hour install (1 lead + 2 crew), tech-free retail build, on-floor commissioning sign-off, <strong>doors at 10 AM</strong></td><td><strong>Saturday, July 25, 2026, 10 AM</strong></td></tr>
      <tr><td>Project Closeout</td><td>Post-event reconciliation, captured media handoff, closeout deliverables</td><td>Friday, July 31, 2026</td></tr>
    </tbody>
  </table>
</section>

<!-- WHY AGORA -->
<section class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Production Capabilities</span></div>
    <h2>Why AGV Miami</h2>
    <p class="sec-desc">
      Since 2006, AGV Miami has delivered scenic fabrication and experiential production for leading fashion, fitness, and lifestyle brands. Our vertically integrated operation &mdash; in-house engineering, CNC fabrication, large-format print, and field installation &mdash; enables uncompromising quality control from concept through strike, with the agility to execute single-day stunts in demanding venue environments.
    </p>
  </div>

  <div class="cap-grid" data-a>
    <div class="cap-card">
      <div class="cap-icon" style="color:var(--iwc-gold)">&loz;</div>
      <h4>Vertically Integrated Fabrication</h4>
      <p>25,000+ sq ft Bohemia, NY headquarters housing scenic fabrication, millwork, CNC routing, large-format printing, and finishing under one roof &mdash; eliminating third-party dependencies.</p>
      <div class="cap-stat"><span>Scenic Builds</span><span>Millwork</span><span>CNC</span><span>Large-Format Print</span></div>
    </div>
    <div class="cap-card">
      <div class="cap-icon" style="color:var(--mercedes-teal)">&loz;</div>
      <h4>Fashion &amp; Lifestyle Brand Expertise</h4>
      <p>Track record executing high-stakes activations for fashion, sportswear, and lifestyle brands in flagship retail corridors, tentpole events, and sidewalk pop-ups across major metros.</p>
      <div class="cap-stat"><span>Fashion</span><span>Sportswear</span><span>Hospitality</span><span>Retail</span></div>
    </div>
    <div class="cap-card">
      <div class="cap-icon" style="color:var(--f1-red)">&loz;</div>
      <h4>Nationwide Field Operations</h4>
      <p>Install teams across New York, Miami, Las Vegas, and markets nationwide. Specialists in overnight/early-morning permit windows, multi-venue coordination, and strict building management protocols.</p>
      <div class="cap-stat"><span>New York</span><span>Miami</span><span>Las Vegas</span><span>Nationwide</span></div>
    </div>
  </div>
</section>

<!-- PACKAGES -->
<section id="packages" class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Plan</span></div>
    <h2>One Plan. Two Deployments.</h2>
    <p class="sec-desc">
      V5.0 is a dual-deployment programme. <strong>Miami</strong> is the street activation at <strong>Lincoln Road Mall, Fri Jul 17, 2026, 11 AM&ndash;8 PM</strong> &mdash; Pantone-pink shell, full interactive stack, voucher printer, selfie stations, branded pink Pantone kit. <strong>NYC</strong> is the retail install at the <strong>Gymshark NYC Flagship, live Sat Jul 25, 2026, 10 AM</strong> &mdash; teal repaint at the AGV NY shop in transit, lockable back door, fish-eye dome retrofit, tech-free retail fixture.
    </p>
  </div>

  <div class="pkg-grid" data-a style="grid-template-columns:1fr;max-width:780px;margin:0 auto">

    <!-- PLAN: V5.0 LINCOLN ROAD MALL + NYC FLAGSHIP RETAIL INSTALL -->
    <div class="pkg-card recommended" style="border-color:var(--iwc-gold)">
      <div class="pkg-ribbon" style="background:var(--iwc-gold);color:var(--dark)">Plan &mdash; V5.0</div>
      <div class="pkg-tag" style="color:var(--iwc-gold)">Dual Deployment</div>
      <h3>Lincoln Road Mall + NYC Flagship Retail Install</h3>
      <div class="pkg-date">Lincoln Road Mall &mdash; Fri, Jul 17, 2026, 11 AM&ndash;8 PM &rarr; Gymshark NYC Flagship live Sat, Jul 25, 2026, 10 AM</div>
      <div class="pkg-venue">Pantone-pink Miami street activation &bull; teal refresh at AGV NY shop in transit &bull; tech-free NYC flagship retail install live July 25.</div>
      <ul class="pkg-list">
        <li><strong>Lincoln Road Mall street activation &mdash; Fri, Jul 17, 2026</strong>, 11 AM&ndash;8 PM (Sat, Jul 18 held as weather contingency)</li>
        <li><strong>Pantone-pink Miami palette</strong> with full interactive stack: 1&ndash;9 random-digit prize quiz (27-question rotation), green/red YES/NO caps, voucher printer, 2&times; Ring Mini cameras, 2&times; Motorola RMU2040s (pink Gymshark stickers), 2&times; wall-mounted selfie stations</li>
        <li><strong>Pink Pantone extras kit:</strong> stanchions, branded umbrellas, disclaimer stand, 200 branded water bottles, daily consumables</li>
        <li><strong>Logistics + teal refresh:</strong> climate freight Miami &rarr; AGV NY shop, full teal repaint cycle, lock retrofit on back door, fish-eye dome mirror retrofitted at the ceiling</li>
        <li><strong>NYC flagship retail install &mdash; Sat, Jul 25, 2026, 10 AM live</strong>: 1 lead + 2 crew, 4-hour overnight install, tech-free fixture</li>
        <li>On-site support (Sprinter van + parking permit administration), dedicated producer, $5K Preferred Partner Credit</li>
        <li>Packaging out of scope &mdash; Ominto Studio handles direct, flat-pack delivery to AGV workshop</li>
      </ul>
      <div class="pkg-price">
        <div class="pkg-prod-label">Gross Production Investment (Base)</div>
        <div class="pkg-amount" style="color:var(--text-muted);font-size:22px">$95,000</div>
        <div class="pkg-venue-line" style="color:var(--mercedes-teal)">Less: Preferred Partner Credit &mdash; &minus;$5,000</div>
        <div class="pkg-prod-label" style="margin-top:14px">Net V5.0 Production Investment</div>
        <div class="pkg-amount" style="color:var(--iwc-gold)">$90,000</div>
        <div class="pkg-venue-line">+ $10,000 Venue + Permit Expediting Allowance (held at cost, overages billed back)</div>
        <div class="pkg-total">Total at Cap<strong>$100,000</strong></div>
      </div>
    </div>

  </div>

  <!-- COMPONENT SUMMARY — PRICING HIERARCHY / ITEMIZATION -->
  <div class="pkg-component-summary" data-a style="margin-top:40px">
    <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Component Pricing Hierarchy</span></div>
    <h3 style="font-size:22px;margin:8px 0 16px">What&rsquo;s Included</h3>
    <p class="sec-desc" style="margin-bottom:20px">Eight-phase itemisation of V5.0. The Phone Box covers the dual paint cycle, lockable back door, and fish-eye dome retrofit. Interactive Tech is Miami-only. Branding + Pink Pantone Extras covers stanchions, umbrellas, water bottles, disclaimer stand. The Activation covers Lincoln Road install, ops, and same-day strike. Logistics + Teal Refresh covers climate hold, freight, repaint at the NY shop, and white-glove flagship delivery. NYC Retail Install covers the overnight 4-hour build at the Gymshark flagship. On-Site Support covers the Miami sprinter van + permit admin. PM covers both deployments.</p>

    <table class="component-summary-table">
      <thead>
        <tr>
          <th style="text-align:left">Phase</th>
          <th style="text-align:right;color:var(--iwc-gold)">V5.0 Plan<br><span style="font-size:10px;font-weight:400;opacity:0.7">Lincoln Road Mall + NYC Flagship Retail Install</span></th>
        </tr>
      </thead>
      <tbody>
        <tr><td>01 &mdash; The Phone Box (Pink Miami + Teal NYC dual-finish)</td><td class="r">$39,650</td></tr>
        <tr><td>02 &mdash; Interactive Tech (Miami only)</td><td class="r">$11,400</td></tr>
        <tr><td>03 &mdash; Branding + Pink Pantone Extras</td><td class="r">$7,750</td></tr>
        <tr><td>04 &mdash; The Activation (Lincoln Road Mall, Fri Jul 17, 11 AM&ndash;8 PM)</td><td class="r">$11,100</td></tr>
        <tr><td>05 &mdash; Logistics to NYC + Teal Refresh at NY Shop</td><td class="r">$14,400</td></tr>
        <tr><td>06 &mdash; NYC Retail Install (Gymshark Flagship, Sat Jul 25, 10 AM Live)</td><td class="r">$4,000</td></tr>
        <tr><td>07 &mdash; On-Site Support (Miami)</td><td class="r">$700</td></tr>
        <tr><td>08 &mdash; Project Management &amp; Client Services</td><td class="r">$6,000</td></tr>
        <tr><td style="color:var(--mercedes-teal)">Credits &mdash; Preferred Partner Credit</td><td class="r" style="color:var(--mercedes-teal)">&minus;$5,000</td></tr>
      </tbody>
      <tfoot>
        <tr class="prod-total">
          <td><strong>Net V5.0 Production Investment</strong></td>
          <td class="r" style="color:var(--iwc-gold)"><strong>$90,000</strong></td>
        </tr>
        <tr class="venue-line">
          <td style="color:var(--mercedes-teal)">+ Venue &amp; Permit Expediting Allowance (pass-through, held at cost)</td>
          <td class="r" style="color:var(--mercedes-teal)">$10,000</td>
        </tr>
        <tr class="allin-total">
          <td><strong>Total at Cap (Production + Allowance)</strong></td>
          <td class="r"><strong>$100,000</strong></td>
        </tr>
      </tfoot>
    </table>
  </div>

  <div class="pkg-footnote" data-a>
    <strong>Budget alignment.</strong> Gross production investment is $95,000; net of the $5,000 Preferred Partner Credit, V5.0 lands at <strong>$90,000 net</strong>. The $10,000 Venue + Permit Expediting Allowance is a separate pass-through line, tracked at cost; overages billed back to Client on actual receipts. Total at cap: $100,000.
  </div>
</section>

<!-- INVESTMENT -->
<section id="investment" class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Project Investment</span></div>
    <h2>Investment Summary</h2>
    <p class="sec-desc">
      Eight-phase line-item breakdown supporting V5.0. The Phone Box covers the dual paint cycle (pink Miami + teal NYC), lockable back door, and fish-eye dome retrofit. Interactive Tech is Miami-only. Branding + Pink Pantone Extras covers stanchions, umbrellas, water bottles, disclaimer stand. The Activation covers the Lincoln Road day. Logistics + Teal Refresh covers freight and the AGV NY shop repaint cycle. NYC Retail Install covers the overnight build at the Gymshark flagship. On-Site Support covers Miami sprinter van + permit admin. PM covers both. The $10,000 Venue + Permit Expediting Allowance is a pass-through, held at cost.
    </p>
  </div>

  <table class="invest-table" data-a>
    <thead><tr><th>Item</th><th style="text-align:right">Investment</th></tr></thead>
    <tbody>
      <tr class="divider"><td colspan="2">Phase 01 &mdash; The Phone Box (Pink Miami + Teal NYC Dual-Finish)</td></tr>
      <tr class="subcat"><td colspan="2">Structural Build</td></tr>
      <tr class="item"><td><span class="item-name">Phone Box Structural Shell</span><span class="item-desc">Custom scenic fabrication, marine-grade build, two-piece modular construction</span></td><td>$14,500</td></tr>
      <tr class="item"><td><span class="item-name">4-Sided Illuminated Lightbox Signage</span><span class="item-desc">LED backlit, all four faces, weatherproof housing, single-cord power feed</span></td><td>$6,800</td></tr>
      <tr class="item"><td><span class="item-name">Glass &amp; Semi-Transparent Vinyl Panels</span><span class="item-desc">Tempered glass, front door and sides, custom-printed semi-transparent privacy vinyl</span></td><td>$2,900</td></tr>
      <tr class="subcat"><td colspan="2">Finish &amp; Hardware</td></tr>
      <tr class="item"><td><span class="item-name">Dual Paint Cycle (Pink Miami &rarr; Teal NYC Refresh)</span><span class="item-desc">Pantone-pink three-coat application at the fab shop; full teal repaint cycle at the AGV NY shop between Miami strike and flagship delivery. Matte finish on both passes. Dimensional mirror with scripted messaging above and below.</span></td><td>$4,500</td></tr>
      <tr class="item"><td><span class="item-name">Hinged + Lockable Back Distribution Door</span><span class="item-desc">True hinged back door with keyed lock retrofitted at the NY shop for the NYC retail install. No visible public-face handle.</span></td><td>$2,000</td></tr>
      <tr class="item"><td><span class="item-name">Fish-Eye Dome Mirror (NYC Ceiling Retrofit)</span><span class="item-desc">Convex fish-eye dome mirror, fitted at the AGV NY shop, replaces the Miami dome light at the NYC flagship ceiling.</span></td><td>$400</td></tr>
      <tr class="item"><td><span class="item-name">Interior Finishes</span><span class="item-desc">Aluminium chequer-plate flooring, dome light (Miami), guest seat, branded analogue phone on shelf mount</span></td><td>$2,750</td></tr>
      <tr class="subcat"><td colspan="2">Engineering &amp; Back-of-House</td></tr>
      <tr class="item"><td><span class="item-name">Engineering, Structural Calcs &amp; Shop Drawings</span><span class="item-desc">Wind-load, ballast plan, electrical schematics, CAD shop drawings, venue-compliance package</span></td><td>$4,000</td></tr>
      <tr class="item"><td><span class="item-name">Back-of-House Staff Compartment</span><span class="item-desc">Interior partition + small staff stoop creating a private back compartment behind the lockable distribution door. Staff supplied by Client.</span></td><td>$1,800</td></tr>
      <tr class="sub-subtotal"><td><em>Subtotal &mdash; Phase 01: The Phone Box</em></td><td><em>$39,650</em></td></tr>

      <tr class="divider"><td colspan="2">Phase 02 &mdash; Interactive Tech (Miami Only)</td></tr>
      <tr class="subcat"><td colspan="2">Handset &amp; Quiz</td></tr>
      <tr class="item"><td><span class="item-name">IVR &mdash; 1&ndash;9 Random-Digit Prize Quiz (27-Question Rotation)</span><span class="item-desc">Press any digit 1&ndash;9; one of three rotating questions per digit fires, 27 in the pool. Keypad mapping: # = YES, * = NO. Multi-branch scripting, licensed voice talent, redundant win/lose logic, full QA.</span></td><td>$7,500</td></tr>
      <tr class="item"><td><span class="item-name">Green/Red YES/NO Caps (Custom Fab)</span><span class="item-desc">Resin-printed keypad caps that slot over the handset keypad &mdash; green over # (YES), red over * (NO). Friction-fit, brand-matched.</span></td><td>$400</td></tr>
      <tr class="subcat"><td colspan="2">Comms</td></tr>
      <tr class="item"><td><span class="item-name">Two-Way Radio Pair &mdash; Motorola RMU2040 + Brand-Mask Stickers</span><span class="item-desc">2 &times; Motorola RMU2040 RM-Series radios with custom Pantone-pink Gymshark-logo stickers over the Motorola wordmark. Spare batteries included.</span></td><td>$800</td></tr>
      <tr class="subcat"><td colspan="2">Capture &amp; Output</td></tr>
      <tr class="item"><td><span class="item-name">Ceiling Cameras &mdash; Ring Mini Indoor Plug-In</span><span class="item-desc">2 &times; Ring Mini Indoor Security Cameras (1080p HD, plug-in/Wi-Fi). Cloud storage via Ring Protect.</span></td><td>$300</td></tr>
      <tr class="item"><td><span class="item-name">Wall-Mounted Selfie Stations</span><span class="item-desc">2 &times; wall-mounted selfie stations &mdash; face-level + belfie-angle. Holders stay on the wall through the NYC install; instructions off.</span></td><td>$900</td></tr>
      <tr class="item"><td><span class="item-name">Thermal Voucher Printer + Pink Vinyl Shelf Mount</span><span class="item-desc">80mm thermal ticket printer, Pantone-pink vinyl wrap, shelf-mounted under the handset. Packs out at Miami strike.</span></td><td>$1,500</td></tr>
      <tr class="sub-subtotal"><td><em>Subtotal &mdash; Phase 02: Interactive Tech (Miami)</em></td><td><em>$11,400</em></td></tr>

      <tr class="divider"><td colspan="2">Phase 03 &mdash; Branding + Pink Pantone Extras</td></tr>
      <tr class="item"><td><span class="item-name">Custom Pink-Pantone Stanchions + Gymshark-Logo Posts</span><span class="item-desc">Pantone-pink stanchion poles and ropes; posts branded with Gymshark logo plates.</span></td><td>$1,800</td></tr>
      <tr class="item"><td><span class="item-name">Branded Pink Umbrellas</span><span class="item-desc">Pantone-pink umbrellas with Gymshark wordmark for queue shade and content readability.</span></td><td>$2,200</td></tr>
      <tr class="item"><td><span class="item-name">Disclaimer Stand (Booth Entry)</span><span class="item-desc">Free-standing disclaimer stand covering capture, audio, and voucher terms. Print + structure by AGV Miami; copy from Gymshark legal.</span></td><td>$850</td></tr>
      <tr class="item"><td><span class="item-name">Branded Gymshark Water Bottles (200 units)</span><span class="item-desc">200 branded water bottles at the queue head, Pantone-pink wrap with Gymshark wordmark.</span></td><td>$1,400</td></tr>
      <tr class="item"><td><span class="item-name">Daily Consumables &amp; Spares Kit</span><span class="item-desc">Voucher paper rolls, cleaning supplies, sanitisation wipes, Pantone-pink touch-up paint, vinyl repair, gaffer.</span></td><td>$1,500</td></tr>
      <tr class="sub-subtotal"><td><em>Subtotal &mdash; Phase 03: Branding + Pink Pantone Extras</em></td><td><em>$7,750</em></td></tr>

      <tr class="divider"><td colspan="2">Phase 04 &mdash; The Activation (Lincoln Road Mall, Fri Jul 17, 11 AM&ndash;8 PM)</td></tr>
      <tr class="item"><td><span class="item-name">Inbound Logistics &amp; Install (Miami)</span><span class="item-desc">Truck, rigging, 3-person install crew, 4&ndash;6 hr install window, lead-tech supervisor at load-in.</span></td><td>$4,800</td></tr>
      <tr class="item"><td><span class="item-name">On-Site Technicians (11 AM&ndash;8 PM)</span><span class="item-desc">Dedicated lead technician plus rotating second tech for rush windows and breaks.</span></td><td>$3,000</td></tr>
      <tr class="item"><td><span class="item-name">Same-Day Strike &amp; Outbound Freight</span><span class="item-desc">Complete de-installation, module breakdown, crated outbound freight, full site restoration.</span></td><td>$3,300</td></tr>
      <tr class="sub-subtotal"><td><em>Subtotal &mdash; Phase 04: The Activation (Miami)</em></td><td><em>$11,100</em></td></tr>

      <tr class="divider" style="color:var(--iwc-gold)"><td colspan="2">Phase 05 &mdash; Logistics to NYC + Teal Refresh at NY Shop</td></tr>
      <tr class="item"><td><span class="item-name">Climate-Controlled Warehouse Hold</span><span class="item-desc">Secure climate-controlled storage between Miami strike and the start of the teal refresh cycle.</span></td><td>$2,400</td></tr>
      <tr class="item"><td><span class="item-name">Inter-City Freight Miami &rarr; AGV NY Shop</span><span class="item-desc">Dedicated climate-controlled truck, real-time GPS tracking, two-driver rotation, handoff documentation.</span></td><td>$5,500</td></tr>
      <tr class="item"><td><span class="item-name">Teal Repaint Cycle + Lock Retrofit + Edge Cleanup at NY Shop</span><span class="item-desc">Full teal repaint at the AGV NY shop Jul 18&ndash;23, keyed lock retrofit on the back door, fish-eye dome install at the ceiling, lightbox edge cleanup, final QC.</span></td><td>$4,500</td></tr>
      <tr class="item"><td><span class="item-name">White-Glove Delivery to Gymshark NYC Flagship</span><span class="item-desc">Climate-controlled final-mile delivery from the AGV NY shop to the Gymshark NYC flagship the night of Fri, Jul 24.</span></td><td>$2,000</td></tr>
      <tr class="sub-subtotal" style="color:var(--iwc-gold)"><td><em>Subtotal &mdash; Phase 05: Logistics + Teal Refresh</em></td><td><em>$14,400</em></td></tr>

      <tr class="divider" style="color:var(--mercedes-teal)"><td colspan="2">Phase 06 &mdash; NYC Retail Install (Gymshark Flagship, Sat Jul 25, 10 AM Live)</td></tr>
      <tr class="item"><td><span class="item-name">Local Install Team &mdash; 1 Lead + 2 Crew</span><span class="item-desc">Retail-environment install team, 4-hour overnight install Fri Jul 24 &rarr; Sat Jul 25, lands before 10 AM live.</span></td><td>$2,800</td></tr>
      <tr class="item"><td><span class="item-name">In-Store Fixture Setup + Fish-Eye Mirror Install</span><span class="item-desc">Anchoring to retail-spec floor, back-door lock check, fish-eye dome mirror fitted at the ceiling, selfie-holder placement, lightbox bring-up, on-floor commissioning sign-off.</span></td><td>$1,200</td></tr>
      <tr class="sub-subtotal" style="color:var(--mercedes-teal)"><td><em>Subtotal &mdash; Phase 06: NYC Retail Install</em></td><td><em>$4,000</em></td></tr>

      <tr class="divider" style="color:var(--f1-red)"><td colspan="2">Phase 07 &mdash; On-Site Support (Miami)</td></tr>
      <tr class="item"><td><span class="item-name">Sprinter Van Rental (1 day)</span><span class="item-desc">Day-of Sprinter van parked under a City of Miami Beach permit close to Lincoln Road; holds excess stock, GS equipment, voucher rolls, water bottles.</span></td><td>$450</td></tr>
      <tr class="item"><td><span class="item-name">Parking Permit Administration</span><span class="item-desc">City of Miami Beach parking permit pulled and administered by AGV for the day-of Sprinter van.</span></td><td>$250</td></tr>
      <tr class="sub-subtotal" style="color:var(--f1-red)"><td><em>Subtotal &mdash; Phase 07: On-Site Support</em></td><td><em>$700</em></td></tr>

      <tr class="divider"><td colspan="2">Phase 08 &mdash; Project Management &amp; Client Services</td></tr>
      <tr class="item"><td><span class="item-name">Project Management Fee</span><span class="item-desc">Dedicated senior producer covering both Miami and the NYC retail install. Weekly status, vendor / venue liaison, COI + insurance coordination, post-event reconciliation.</span></td><td>$6,000</td></tr>
      <tr class="sub-subtotal"><td><em>Subtotal &mdash; Phase 08: Project Management</em></td><td><em>$6,000</em></td></tr>

      <tr class="divider" style="color:var(--mercedes-teal)"><td colspan="2">Credits</td></tr>
      <tr class="item"><td><span class="item-name">Preferred Partner Credit</span><span class="item-desc">$5,000 credit reflecting AGV Miami&rsquo;s appreciation for Gymshark&rsquo;s business and the partnership opportunity.</span></td><td style="color:var(--mercedes-teal)">&minus;$5,000</td></tr>
      <tr class="sub-subtotal" style="color:var(--mercedes-teal)"><td><em>Subtotal &mdash; Credits</em></td><td><em>&minus;$5,000</em></td></tr>
    </tbody>
    <tfoot>
      <tr><td style="color:var(--text-muted)">Gross Production Investment (Base)</td><td style="color:var(--text-muted)">$95,000</td></tr>
      <tr><td style="color:var(--mercedes-teal)">Less: Preferred Partner Credit</td><td style="color:var(--mercedes-teal)">&minus;$5,000</td></tr>
      <tr><td style="color:var(--iwc-gold)"><strong>Net V5.0 Production Investment</strong></td><td style="color:var(--iwc-gold)"><strong>$90,000</strong></td></tr>
    </tfoot>
  </table>

  <!-- VENUE & PERMIT ALLOWANCE — PASS-THROUGH -->
  <div class="allowance-block" data-a style="margin-top:32px;padding:24px 28px;border:2px solid var(--mercedes-teal);border-radius:8px;background:rgba(34,178,156,0.06)">
    <div class="sec-eye" style="margin-bottom:10px"><div class="bar" style="background:var(--mercedes-teal)"></div><span style="color:var(--mercedes-teal)">Allowance &mdash; Venue Rental &amp; Permit Expediting &mdash; Pass-Through &mdash; Not in V5.0 Net</span></div>
    <h3 style="font-size:20px;margin:0 0 12px;color:var(--mercedes-teal)">Venue Rental &amp; Permit Expediting Allowance</h3>
    <p style="font-size:13px;line-height:1.65;margin-bottom:14px">Estimated allowance covering Lincoln Road BID daily fee, permits, site deposits, mandatory security, COI premiums, and permit expediting. <strong>Tracked at cost. Overages billed back to Client on actual receipts.</strong> This allowance is separate from the $90,000 V5.0 net production investment.</p>
    <div style="display:flex;justify-content:space-between;align-items:center;padding:14px 18px;border:1px solid var(--mercedes-teal);border-radius:6px;background:rgba(34,178,156,0.08)">
      <span style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--mercedes-teal);font-weight:700">Allowance Total &mdash; Held at Cost &mdash; Overages Billed Back</span>
      <span style="font-family:var(--serif);font-size:22px;color:var(--mercedes-teal);font-weight:700">$10,000</span>
    </div>
  </div>

  <div class="engage-bar" data-a>
    <div class="engage-col" style="border-color:var(--iwc-gold)">
      <div class="tag" style="color:var(--iwc-gold)">Deposit &mdash; 60%</div>
      <div class="amt">$54,000</div>
      <div class="note">Due upon Client&rsquo;s written approval of this Scope of Work (Proposal execution). Triggers procurement, engineering, and the Lincoln Road BID permit application. Calculated on the V5.0 net of $90,000.</div>
    </div>
    <div class="engage-col" style="border-color:var(--mercedes-teal)">
      <div class="tag" style="color:var(--mercedes-teal)">Balance &mdash; 40%</div>
      <div class="amt">$36,000</div>
      <div class="note">Due five (5) business days prior to the Lincoln Road Mall activation install (target Friday, July 10, 2026).</div>
    </div>
  </div>

  <p class="sec-desc" style="font-size:11px;color:var(--text-muted);margin-top:16px">Payment instructions (ACH / wire details) will be issued directly to the authorised Client billing contact upon written approval of this Scope of Work. Payment shall be made exclusively via ACH electronic transfer or domestic wire transfer; credit card, check, and cash payments are not accepted.</p>
</section>

<!-- EXCLUSIONS -->
<section class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Exclusions &amp; Clarifications</span></div>
    <h2>Scope Exclusions</h2>
    <p class="sec-desc" style="margin-bottom:8px">The following items, services, and responsibilities are expressly excluded from the scope of this proposal and shall not be provided, arranged, or assumed by AGV Miami, LLC (&ldquo;Producer&rdquo;) under this engagement. Client acknowledges and agrees that Producer bears no obligation, liability, or responsibility for any item listed below unless separately authorised in writing via executed change order.</p>
    <div class="legal-disclaimer">All capitalised terms not otherwise defined herein shall have the meanings ascribed to them in the Master Services Agreement between the parties.</div>
  </div>

  <div class="excl-grid" data-a>
    <div class="excl-item">
      <h4>Venue Fees, Permits &amp; Insurance</h4>
      <p>Venue daily rental fees, permit issuance fees, site deposits, mandatory security, and certificate-of-insurance premiums are <strong>covered by the $10,000 Venue + Permit Expediting Allowance above; overages billed back to Client at cost on receipts.</strong> Producer administers permits on Client&rsquo;s behalf inside the allowance.</p>
    </div>
    <div class="excl-item">
      <h4>Brand Ambassador &amp; Talent Staffing</h4>
      <p>On-site brand ambassadors, host talent, street teams, and social producers are excluded. Producer provides one technical operator per activation only. Talent procurement, scheduling, and fees are Client&rsquo;s responsibility.</p>
    </div>
    <div class="excl-item">
      <h4>Product &amp; Voucher Inventory</h4>
      <p>Gymshark product units (leggings, shorts, or other) to be distributed through the back door are supplied by Client. Voucher codes, e-commerce redemption infrastructure, and any back-end fulfilment technology are Client-side.</p>
    </div>
    <div class="excl-item">
      <h4>Packaging</h4>
      <p>Product packaging is organised by <strong>Ominto Studio direct</strong>, flat-pack delivery to the AGV workshop. Not in AGV Miami scope under this proposal.</p>
    </div>
    <div class="excl-item">
      <h4>Paid Media &amp; PR</h4>
      <p>Paid social amplification, influencer contracts, press outreach, and PR coverage are excluded. Producer retains no rights to activation content; Client receives all captured footage for internal use.</p>
    </div>
    <div class="excl-item">
      <h4>Adverse Weather &amp; Force Majeure</h4>
      <p>Cancellation or postponement due to weather, civil disturbance, venue restriction, or force majeure events does not relieve Client of committed fabrication and production costs already incurred at the time of cancellation. Rescheduling fees may apply.</p>
    </div>
    <div class="excl-item">
      <h4>Creative Design &amp; IP</h4>
      <p>Creative direction, design artwork, copywriting, and concept IP are provided by Ominto Studio and licensed to the project. Producer&rsquo;s role is fabrication and production execution against supplied creative. Producer does not originate design or hold design rights under this engagement.</p>
    </div>
  </div>
</section>

<!-- TERMS -->
<section id="terms" class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--mercedes-teal)"></div><span style="color:var(--mercedes-teal)">Agreement</span></div>
    <h2>Terms &amp; Conditions</h2>
    <p class="sec-desc">The terms below govern this engagement between Gymshark Ltd. (&ldquo;Client&rdquo;) and AGV Miami, LLC (&ldquo;Producer&rdquo;), and are entered into in coordination with Ominto Studio as the Client&rsquo;s appointed creative agency. Cross-references in the form <span style="color:var(--mercedes-teal)">[MSA S#]</span> point to the corresponding section of the Master Services Agreement between the parties; click any reference to open the full MSA in a side panel.</p>
  </div>

  <div class="terms-grid" data-a>
    <div class="terms-item">
      <h4>1. Acceptance &amp; Execution</h4>
      <ol>
        <li>This Proposal constitutes a binding offer upon execution by Client&rsquo;s authorised signatory. Execution may be accomplished via wet signature or the embedded digital signature interface above, each of which shall be deemed legally equivalent. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA S1]</span></li>
        <li>This Proposal is valid for thirty (30) calendar days from the version date shown on the cover. Producer reserves the right to re-price or withdraw after expiration.</li>
        <li>Execution triggers the Payment Terms in Section 3 and authorises Producer to proceed with engineering, procurement, and fabrication in accordance with the selected option.</li>
      </ol>
    </div>

    <div class="terms-item">
      <h4>2. Scope &amp; Change Orders</h4>
      <ol>
        <li>Any modification to scope, quantity, dimensions, material specification, delivery schedule, venue selection, or production timeline after written approval of this Proposal requires a formally executed written Change Order signed by authorised representatives of both parties. Verbal approvals, email threads, or text messages shall not constitute binding authorisation. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA S2]</span></li>
        <li>Change Orders are invoiced separately and do not alter the base project investment unless expressly stated.</li>
      </ol>
    </div>

    <div class="terms-item">
      <h4>3. Payment Terms</h4>
      <ol>
        <li>60% deposit due upon Client&rsquo;s written approval of this Scope of Work (Proposal execution). 40% balance due five (5) business days prior to first activation installation. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA S5]</span></li>
        <li>Payment shall be made exclusively via ACH electronic transfer or domestic wire transfer. Credit card, check, and cash payments are not accepted.</li>
        <li>Late payments accrue interest at 1.5% per month or the maximum rate permitted by applicable law, whichever is lower.</li>
      </ol>
    </div>

    <div class="terms-item">
      <h4>4. Creative Approvals &amp; Artwork</h4>
      <ol>
        <li>Client designates a single authorised representative empowered to approve artwork, authorise Change Orders, and make binding decisions on Client&rsquo;s behalf for the duration of this engagement. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA S4 / S7]</span></li>
        <li>Client bears sole responsibility for final review and approval of all artwork, including copy, spelling, grammar, dimensions, colour accuracy, brand compliance, and layout. Written artwork approval constitutes authorisation to proceed to production.</li>
        <li>All final creative assets must be delivered in print-ready format by the Creative Lock milestone shown in the Workback Schedule. Late asset delivery may shift downstream milestones without relief of Client payment obligations.</li>
      </ol>
    </div>

    <div class="terms-item">
      <h4>5. Venue, Permits &amp; Insurance</h4>
      <ol>
        <li>Producer will apply for and administer venue permits on Client&rsquo;s behalf. Permit issuance is at the sole discretion of the venue or governing authority. Producer makes no warranty regarding permit approval timelines or venue availability on requested dates.</li>
        <li>Client is responsible for furnishing or underwriting all certificates of insurance, additional insured endorsements, and event liability coverage required by the selected venue(s). <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA S9 / S12]</span></li>
        <li>All venue fees, mandatory security, and permit charges are passed through at cost.</li>
      </ol>
    </div>

    <div class="terms-item">
      <h4>6. Intellectual Property</h4>
      <ol>
        <li>Creative concept, design artwork, and campaign IP are retained by Client and Ominto Studio. Producer receives a limited licence to reproduce supplied artwork solely for the purpose of fulfilling this engagement.</li>
        <li>Producer retains ownership of proprietary fabrication methods, shop drawings, engineering, and production know-how.</li>
        <li>Producer may photograph finished work for portfolio and marketing use following public launch of the activation, unless Client expressly opts out in writing. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA S8]</span></li>
      </ol>
    </div>

    <div class="terms-item">
      <h4>7. Termination &amp; Cancellation</h4>
      <ol>
        <li>Client may terminate for convenience upon written notice. Upon termination, Client shall reimburse Producer for all work performed, materials procured, and non-cancellable commitments incurred through the date of termination. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA S10]</span></li>
        <li>Cancellation within 14 days of first activation forfeits the full deposit. Cancellation within 72 hours of first activation forfeits 100% of project investment.</li>
      </ol>
    </div>

    <div class="terms-item">
      <h4>8. Governing Law &amp; Dispute Resolution</h4>
      <ol>
        <li>This Agreement is governed by the laws of the State of New York, without regard to conflicts-of-law principles.</li>
        <li>Any dispute arising from or relating to this Agreement shall be resolved by binding arbitration administered by the American Arbitration Association in Nassau County, NY. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA S13]</span></li>
      </ol>
    </div>

    <div class="terms-item">
      <h4>9. Full Agreement &amp; MSA Precedence</h4>
      <ol>
        <li>This Proposal, together with the executed Master Services Agreement between the parties, constitutes the complete and exclusive agreement between Client and Producer with respect to the subject matter hereof.</li>
        <li>In the event of any conflict between this Proposal and the MSA, the MSA controls except where this Proposal expressly states otherwise.</li>
      </ol>
    </div>

    <!-- VERSION HISTORY -->
    <div id="document-control" style="margin-top:40px" data-a>
      <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Document Control</span></div>
      <h3 style="font-size:22px;margin-bottom:6px">Version History</h3>
      <p class="sec-desc" style="margin-bottom:12px">Every issued version of this proposal is preserved at a permanent URL so the evolution of scope, pricing, and timeline can be reviewed against any prior round of feedback. Click any version to open that frozen snapshot in a new tab.</p>
      <table class="version-table">
        <thead><tr><th>Version</th><th>Date</th><th>Issued By</th><th>Summary of Changes</th><th>Snapshot</th></tr></thead>
        <tbody>
          <tr><td>1.0</td><td>April 17, 2026</td><td>AGV Miami</td><td>Initial proposal issued to Gymshark and Ominto Studio for the Gymshark Phone Box activation in New York and Miami in July 2026. Three execution paths offered: Miami-only single-day pop-up, NYC-only single-day pop-up, or dual-city back-to-back deployment with inter-city reskin. Production-investment target of $98,500 for the dual-city configuration.</td><td><a href="/versions/v1-0" target="_blank" rel="noopener" style="color:var(--iwc-gold);text-decoration:underline">View v1.0 &rarr;</a></td></tr>
          <tr><td>2.0</td><td>April 29, 2026</td><td>AGV Miami</td><td>Two-event sequence. <strong>Event 01 &mdash; Miami:</strong> Lincoln Road Mall street activation on June 27, 2026. <strong>Event 02 &mdash; New York:</strong> in-store fixture at Gymshark Bond St (11 Bond St, NY 10005), delivered by July 9, 2026 to anchor the July 11 product launch and a 4-week in-store run through August 6, 2026. Inter-city respray to NYC palette between events. <strong>Production:</strong> $124,150 gross less $5,000 Partner Credit = $119,150 net. <strong>Estimated total:</strong> $124,150&ndash;$129,150.</td><td><a href="/versions/v2-0" target="_blank" rel="noopener" style="color:var(--iwc-gold);text-decoration:underline">View v2.0 &rarr;</a></td></tr>
          <tr><td>3.0</td><td>April 29, 2026</td><td>AGV Miami</td><td>V3.0 narrows the programme to a <strong>single street activation</strong> at <strong>Lincoln Road Mall, Miami Beach</strong> on <strong>Friday, July 17, 2026</strong>. <strong>Production:</strong> $100,150 gross less $5,000 Partner Credit = $95,150 net.</td><td><a href="/versions/v3-0" target="_blank" rel="noopener" style="color:var(--iwc-gold);text-decoration:underline">View v3.0 &rarr;</a></td></tr>
          <tr><td>4.0</td><td>May 8, 2026</td><td>AGV Miami</td><td><strong>Superseded by V5.0.</strong> Single-event programme at Lincoln Road Mall, Miami Beach, Friday, July 17, 2026, 11 AM&ndash;8 PM. Yellow palette throughout. Hinged back distribution door; 2&times; Motorola RMU2040 radios, 2&times; Ring Mini cameras, 80mm thermal printer, 2&times; wall-mounted selfie stations, 200-unit yellow-palette product packaging. NYC base scope was transport-only; local install team quoted as an add-on. <strong>Production (Base):</strong> $84,550 gross less $5,000 Partner Credit = $79,550 net. With optional NYC install add-on: $83,950 net. Payment: 60% deposit $47,730 on SoW approval; 40% balance $31,820 due Friday, July 10, 2026.</td><td><a href="/versions/v4-0" target="_blank" rel="noopener" style="color:var(--iwc-gold);text-decoration:underline">View v4.0 &rarr;</a></td></tr>
          <tr><td><strong>5.0</strong></td><td><strong>May 18, 2026</strong></td><td>AGV Miami</td><td><strong>Current.</strong> Dual-deployment programme: Lincoln Road Mall street activation Fri, Jul 17, 11 AM&ndash;8 PM + Gymshark NYC Flagship retail install live 10 AM Sat, Jul 25. Pantone pink Miami palette; teal refresh at AGV NY shop in transit. IVR upgraded to 1&ndash;9 random-digit prize quiz with 27-question rotation. Lockable back door, fish-eye dome retrofit at NYC. New Pink-Pantone extras kit: stanchions, umbrellas, disclaimer stand, water bottles. Sprinter van + parking permit added. Packaging routes through Ominto direct (out of AGV scope). <strong>Production:</strong> $95,000 gross less $5,000 Partner Credit = <strong>$90,000 net</strong>. <strong>$10,000 Venue + Permit Expediting Allowance</strong> (pass-through, overages billed at cost). Payment: 60% deposit $54,000 on SoW approval; 40% balance $36,000 due Fri, Jul 10, 2026.</td><td><a href="/versions/v5-0" target="_blank" rel="noopener" style="color:var(--iwc-gold);text-decoration:underline">View v5.0 &rarr;</a></td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section" data-a>
  <h2>Next Steps</h2>
  <div class="cta-row">
    <a href="#authorize" class="cta-btn cta-primary" onclick="document.getElementById('authorize').scrollIntoView({behavior:'smooth'});return false;">Approve &amp; Execute &rarr;</a>
    <a href="mailto:mike@agoragraphics.com,jclarkson@agvmiami.com?cc=info@agoravisuals.com&subject=Gymshark%20Phone%20Box%20%E2%80%94%20Revision%20Request%20%7C%20GS-PHONEBOX-001" class="cta-btn cta-secondary">Request Revisions</a>
    <a href="https://experienceagora.com" class="cta-btn cta-tertiary" target="_blank" rel="noopener">Explore Our Portfolio</a>
  </div>
</section>

<!-- SIGNATURE -->
<section id="authorize" class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Authorization</span></div>

    <div class="sig-block" id="sig-block-main">
      <h3>Authorization to Proceed</h3>
      <p class="legal">
        By executing this agreement, Client acknowledges review and acceptance of this Proposal, including the complete Scope of Work, Venues, Plan, Investment Summary, Venue + Permit Expediting Allowance, Payment Terms, Exclusions, and Terms &amp; Conditions outlined herein. Client hereby authorises AGV Miami, LLC to proceed with engineering, procurement, and fabrication for the V5.0 Plan (Lincoln Road Mall, Miami Beach, Fri, Jul 17, 2026, 11 AM&ndash;8 PM + Gymshark NYC Flagship retail install live Sat, Jul 25, 2026, 10 AM). Execution constitutes authorisation to initiate production and triggers applicable payment terms as stated.
      </p>

      <div class="sig-summary">Plan: V5.0 &mdash; Lincoln Road Mall, Miami Beach (Fri, Jul 17, 2026, 11 AM&ndash;8 PM; Sat, Jul 18 held as weather contingency) + Gymshark NYC Flagship retail install (Sat, Jul 25, 2026, 10 AM live)</div>
      <div class="sig-meta">Plus $10,000 Venue + Permit Expediting Allowance (pass-through) &bull; Payment Terms: 60/40 &bull; Document: GS-PHONEBOX-001</div>

      <!-- SIGNING OPTIONS -->
      <div class="sig-options">
        <button class="sig-opt-btn active" onclick="switchSigTab('draw',this)" style="background:var(--iwc-gold);color:var(--dark)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/></svg>
          Draw Signature
        </button>
        <button class="sig-opt-btn" onclick="switchSigTab('type',this)" style="background:rgba(255,255,255,0.06);color:var(--text)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/></svg>
          Type Signature
        </button>
        <button class="sig-download-btn print-btn" onclick="window.print()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
          Print / Download PDF
        </button>
      </div>

      <!-- DRAW SIGNATURE TAB -->
      <div class="sig-tab active" id="sig-tab-draw">
        <div class="sig-grid">
          <div class="sig-col">
            <div class="role">Client</div>
            <div class="company">Gymshark Ltd.</div>
            <div class="sig-canvas-wrap">
              <canvas class="sig-canvas" id="sig-canvas-client"></canvas>
              <div class="sig-canvas-hint">Draw your signature here</div>
            </div>
            <input class="sig-input" id="sig-name-client" type="text" placeholder="Printed Name">
            <input class="sig-input" id="sig-title-client" type="text" placeholder="Title">
            <div class="sig-actions">
              <button class="sig-clear" onclick="clearCanvas('client')">Clear</button>
            </div>
          </div>
          <div class="sig-col">
            <div class="role">Producer</div>
            <div class="company">AGV Miami, LLC</div>
            <div class="sig-canvas-wrap">
              <canvas class="sig-canvas" id="sig-canvas-producer"></canvas>
              <div class="sig-canvas-hint">Draw your signature here</div>
            </div>
            <input class="sig-input" id="sig-name-producer" type="text" placeholder="Printed Name">
            <input class="sig-input" id="sig-title-producer" type="text" placeholder="Title">
            <div class="sig-actions">
              <button class="sig-clear" onclick="clearCanvas('producer')">Clear</button>
            </div>
          </div>
        </div>
      </div>

      <!-- TYPE SIGNATURE TAB -->
      <div class="sig-tab" id="sig-tab-type">
        <div class="sig-grid">
          <div class="sig-col">
            <div class="role">Client</div>
            <div class="company">Gymshark Ltd.</div>
            <input class="sig-input" id="sig-typed-client" type="text" placeholder="Type your full name" oninput="updateTypedSig('client')">
            <div class="sig-typed-preview" id="sig-typed-preview-client"></div>
            <input class="sig-input" id="sig-typed-title-client" type="text" placeholder="Title">
          </div>
          <div class="sig-col">
            <div class="role">Producer</div>
            <div class="company">AGV Miami, LLC</div>
            <input class="sig-input" id="sig-typed-producer" type="text" placeholder="Type your full name" oninput="updateTypedSig('producer')">
            <div class="sig-typed-preview" id="sig-typed-preview-producer"></div>
            <input class="sig-input" id="sig-typed-title-producer" type="text" placeholder="Title">
          </div>
        </div>
      </div>

      <!-- SUBMIT -->
      <div style="text-align:center;margin-top:24px" id="sig-submit-wrap">
        <button class="sig-submit" id="sig-submit-btn" disabled onclick="submitSignature()">
          Execute Agreement
        </button>
        <div class="sig-timestamp" id="sig-timestamp"></div>
      </div>

      <!-- CONFIRMATION -->
      <div class="sig-confirmation" id="sig-confirmation">
        <div class="checkmark">&check;</div>
        <h4>Agreement Executed</h4>
        <p>This proposal has been digitally signed and executed.</p>
        <div class="sig-timestamp" id="sig-confirm-timestamp"></div>
        <div class="sig-download-row">
          <button class="sig-download-btn print-btn" onclick="window.print()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
            Download Signed PDF
          </button>
          <button class="sig-download-btn esign-btn" onclick="emailSignedCopy()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Email Signed Copy
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer class="footer">
  <div class="footer-inner">
    <div>
      <h4>AGORA GRAPHICS</h4>
      <div class="services">
        <a href="https://experienceagora.com" target="_blank" rel="noopener">EXPERIENTIAL FABRICATION</a> &bull;
        <a href="https://experienceagora.com" target="_blank" rel="noopener">SCENIC PRODUCTION</a> &bull;
        <a href="https://experienceagora.com" target="_blank" rel="noopener">LARGE-FORMAT PRINT</a> &bull;
        <a href="https://experienceagora.com" target="_blank" rel="noopener">MILLWORK</a> &bull;
        <a href="https://experienceagora.com" target="_blank" rel="noopener">ENGINEERING</a> &bull;
        <a href="https://experienceagora.com" target="_blank" rel="noopener">INSTALLATION</a>
      </div>
      <p style="font-size:11px;color:var(--text-muted);max-width:420px;margin-top:14px;line-height:1.6">Full-service scenic fabrication and experiential production studio specialising in brand activations, retail environments, sportswear campaigns, trade show exhibits, and large-format graphics &mdash; serving Miami, New York, Las Vegas, and markets nationwide.</p>
      <div class="locations">Miami, FL &bull; New York, NY &bull; Las Vegas, NV</div>
      <div class="socials">
        <a href="https://www.instagram.com/agoragraphics/" class="social-btn" target="_blank" rel="noopener">IG</a>
        <a href="https://www.linkedin.com/company/agora-graphics" class="social-btn" target="_blank" rel="noopener">in</a>
        <a href="https://www.facebook.com/AgoraGraphics" class="social-btn" target="_blank" rel="noopener">fb</a>
      </div>
    </div>
    <div>
      <h4>CONTACT</h4>
      <div class="contact-item"><span>&rArr;</span><a href="mailto:mike@agoragraphics.com">mike@agoragraphics.com</a></div>
      <div class="contact-item"><span>&rArr;</span><a href="mailto:info@agoravisuals.com">info@agoravisuals.com</a></div>
      <div class="contact-item"><span>&rArr;</span><a href="tel:+15162830363">+1 (516) 283-0363</a></div>
      <div class="contact-item"><span>&rArr;</span><a href="https://experienceagora.com" target="_blank" rel="noopener">experienceagora.com</a></div>
    </div>
    <div>
      <h4>LEGAL</h4>
      <a class="legal-link" onclick="openLegal('msa')">Master Services Agreement</a>
      <a class="legal-link" onclick="openLegal('terms')">Terms of Service</a>
      <a class="legal-link" onclick="openLegal('privacy')">Privacy &amp; Confidentiality</a>
    </div>
  </div>
  <div class="footer-bottom">
    <div>&copy; 2026 AGV Miami, LLC. All rights reserved. Gymshark&reg; is a registered trademark of Gymshark Ltd.</div>
    <div>Document GS-PHONEBOX-001 &bull; Confidential &amp; Proprietary &bull; Prepared exclusively for Gymshark Ltd. and Ominto Studio</div>
  </div>
</footer>

<!-- LEGAL OVERLAY -->
<div class="legal-overlay" onclick="if(event.target===this)closeLegal()">

  <!-- MSA PANEL — FULL TEXT -->
  <div class="legal-panel" id="legal-msa">
    <div class="legal-panel-header">
      <h3>Master Services Agreement</h3>
      <button class="legal-close" onclick="closeLegal()">&times;</button>
    </div>
    <div class="legal-panel-body">
      <p style="color:var(--iwc-gold);font-size:10px;letter-spacing:1px;text-transform:uppercase;margin-bottom:16px">AGV Miami, LLC &mdash; 2026 Master Services Agreement</p>

      <h4><div class="section-num">S1 &mdash; Parties &amp; Engagement</div>Parties to This Agreement</h4>
      <p>This Master Services Agreement (&ldquo;Agreement&rdquo;) is entered into between AGV Miami, LLC (&ldquo;AGV Miami,&rdquo; &ldquo;Company,&rdquo; &ldquo;We&rdquo;) and the client identified on the executed Proposal or Estimate (&ldquo;Client,&rdquo; &ldquo;You&rdquo;). Execution of any Proposal, Estimate, or Work Order constitutes acceptance of this Agreement in its entirety.</p>

      <h4><div class="section-num">S2 &mdash; Scope of Work</div>Scope of Services</h4>
      <ol>
        <li>AGV Miami will provide scenic fabrication, graphics production, printing, millwork, display construction, installation, and related services as described in the executed Proposal or Estimate.</li>
        <li>Services are limited to the narrative and itemized scope outlined in each project document. Items not explicitly described are excluded unless added via written Change Order.</li>
        <li>All work is performed on a project basis. This Agreement does not create an employment, partnership, or joint venture relationship.</li>
      </ol>

      <h4><div class="section-num">S3 &mdash; Estimates &amp; Pricing</div>Basis of Estimate</h4>
      <ol>
        <li>All proposals are based on preliminary dimensions, creative materials, and project scope provided at the time of estimating.</li>
        <li>Final pricing may adjust based on confirmed dimensions, finalized creative, engineering requirements, material availability, or scope changes.</li>
        <li>Estimates are valid for thirty (30) days unless otherwise noted. Material costs and availability are subject to change after this period.</li>
      </ol>

      <h4><div class="section-num">S4 &mdash; Client Responsibilities</div>Client Obligations</h4>
      <ol>
        <li>Client shall provide print-ready artwork, brand guidelines, and all creative assets by agreed deadlines.</li>
        <li>Client is responsible for confirming venue requirements, access schedules, floor plans, and any landlord or building approvals required for installation.</li>
        <li>On-site discrepancies between provided information and actual site conditions may result in additional costs billed as a Change Order.</li>
        <li>Client is responsible for final review and approval of all artwork including copy, spelling, dimensions, and layout prior to production.</li>
      </ol>

      <h4><div class="section-num">S5 &mdash; Payment Terms</div>Payment</h4>
      <ol>
        <li>All payments are accepted exclusively via ACH electronic transfer or domestic wire transfer. Credit card, check, and cash payments are not accepted.</li>
        <li>Unless otherwise specified, payment terms are 60% deposit upon Client&rsquo;s written approval of the applicable Scope of Work (Proposal or Estimate execution) and 40% balance due five (5) business days prior to delivery or installation.</li>
        <li>Deposit initiates engineering, procurement, and fabrication. Work will not commence until deposit is received.</li>
        <li>Change Order invoices are due in full upon approval.</li>
        <li>Production schedule and delivery dates may be delayed if payments are not received when due.</li>
        <li>Late payments are subject to a 1.5% monthly interest charge on outstanding balances.</li>
      </ol>

      <h4><div class="section-num">S6 &mdash; Shipping, Delivery &amp; Installation</div>Logistics</h4>
      <ol>
        <li>Delivery and installation pricing is based on standard business hours unless otherwise noted in the Proposal.</li>
        <li>Overnight, weekend, or holiday labor is subject to premium rates and will be itemized in the Proposal or billed as a Change Order.</li>
        <li>Venue labor requirements (union, drayage, rigging) are the responsibility of the Client unless explicitly included in the AGV Miami scope.</li>
        <li>Risk of loss transfers to Client upon delivery to site or completion of installation.</li>
      </ol>

      <h4><div class="section-num">S7 &mdash; Artwork &amp; Proofing</div>Creative Production</h4>
      <ol>
        <li>AGV Miami is not liable for errors in client-approved artwork, including color reproduction, spelling, or dimensional accuracy.</li>
        <li>Digital proofs are provided for review. Physical color matching is approximate due to variations in substrates, inks, and viewing conditions.</li>
        <li>Post-approval changes will be billed as additional work.</li>
      </ol>

      <h4><div class="section-num">S8 &mdash; Intellectual Property</div>Ownership &amp; IP</h4>
      <ol>
        <li>Client-provided artwork, logos, and brand assets remain the property of the Client.</li>
        <li>AGV Miami retains ownership of all custom engineering drawings, structural designs, and proprietary fabrication methods.</li>
        <li>Fabricated elements remain the property of AGV Miami until paid in full.</li>
        <li>AGV Miami reserves the right to photograph completed work for portfolio use following public installation or event.</li>
      </ol>

      <h4><div class="section-num">S9 &mdash; Warranties &amp; Liability</div>Warranties</h4>
      <ol>
        <li>AGV Miami warrants that all work will be performed in a professional and workmanlike manner consistent with industry standards.</li>
        <li>Fabricated elements are warranted against defects in materials and workmanship for the duration of the project installation period.</li>
        <li>AGV Miami&rsquo;s total liability under this Agreement shall not exceed the total fees paid by Client for the specific project.</li>
        <li>AGV Miami shall not be liable for indirect, incidental, consequential, or punitive damages.</li>
      </ol>

      <h4><div class="section-num">S10 &mdash; Cancellation</div>Cancellation &amp; Termination</h4>
      <ol>
        <li>Post-approval cancellation: Client is liable for all costs incurred to date including materials ordered, fabrication in progress, and labor expended.</li>
        <li>In-progress fabrication and custom materials are non-refundable.</li>
        <li>Cancellation within seven (7) days of scheduled delivery or installation: Client is liable for 100% of the project value.</li>
      </ol>

      <h4><div class="section-num">S11 &mdash; Force Majeure</div>Force Majeure</h4>
      <p>Neither party shall be liable for delays or failure to perform due to circumstances beyond reasonable control, including but not limited to natural disasters, pandemics, government actions, material shortages, transportation disruptions, or labor disputes.</p>

      <h4><div class="section-num">S12 &mdash; Indemnification</div>Indemnification</h4>
      <p>Client agrees to indemnify and hold harmless AGV Miami, LLC, its officers, employees, and agents from any claims, damages, losses, or expenses arising from Client&rsquo;s use of delivered materials, venue conditions, or third-party interactions related to the project.</p>

      <h4><div class="section-num">S13 &mdash; Governing Law</div>Governing Law &amp; Disputes</h4>
      <p>This Agreement shall be governed by and construed in accordance with the laws of the State of New York. Any disputes shall be resolved through binding arbitration in Suffolk County, New York, in accordance with the rules of the American Arbitration Association.</p>

      <h4><div class="section-num">S14 &mdash; Entire Agreement</div>Entire Agreement</h4>
      <p>This Agreement, together with any executed Proposals, Estimates, Work Orders, and Change Orders, constitutes the entire agreement between the parties and supersedes all prior negotiations, representations, or agreements. Amendments must be in writing and signed by both parties.</p>

      <p style="margin-top:28px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.06);font-size:10px;color:rgba(138,138,149,0.4)">AGV Miami, LLC &bull; 1440 Church St, Bohemia, NY 11716 &bull; EIN on file &bull; This document is incorporated by reference into all project Proposals and Estimates.</p>
    </div>
  </div>

  <!-- TERMS PANEL -->
  <div class="legal-panel" id="legal-terms">
    <button class="legal-close" onclick="closeLegal()">&times;</button>
    <div class="legal-panel-header">
      <div class="legal-eye">Terms of Service</div>
      <h3>AGV Miami Terms of Service</h3>
    </div>
    <p>Use of AGV Miami services, websites, and digital properties is governed by our standard Terms of Service, which incorporate by reference the specific terms of any executed engagement (including this Proposal and the MSA).</p>
    <h4>Engagement Terms</h4>
    <p>Specific terms governing this engagement are enumerated in Section &ldquo;Terms &amp; Conditions&rdquo; above and in the executed MSA. Where a conflict exists, the MSA controls.</p>
  </div>

  <!-- PRIVACY PANEL -->
  <div class="legal-panel" id="legal-privacy">
    <button class="legal-close" onclick="closeLegal()">&times;</button>
    <div class="legal-panel-header">
      <div class="legal-eye">Privacy &amp; Confidentiality</div>
      <h3>Information Handling</h3>
    </div>
    <p>This Proposal and all attached or referenced documents contain confidential and proprietary information of AGV Miami, LLC, Ominto Studio, and Gymshark Ltd. All parties agree to maintain strict confidentiality and not to disclose, distribute, or reproduce this document or its contents to any third party without prior written consent.</p>
    <h4>Data Handling</h4>
    <p>AGV Miami collects and processes only the information necessary to fulfil project obligations: contact details, project specifications, creative assets, and payment information. We do not sell, share, or distribute client information to third parties except as required to perform contracted services.</p>
    <h4>Guest Capture &amp; Disclosure</h4>
    <p>The Phone Box includes ceiling-mounted video and audio capture. On-site disclosure signage (&ldquo;Smile &mdash; you&rsquo;re on camera&rdquo;) will be installed at guest eye-line. Captured media is owned by Client and processed in accordance with Client&rsquo;s privacy policy and applicable state/federal law.</p>
    <p style="margin-top:28px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.06);font-size:10px;color:rgba(138,138,149,0.4)">Document: GS-PHONEBOX-001 &bull; Confidential &amp; Proprietary</p>
  </div>
</div>`;

export default function ProposalPage() {
  useEffect(() => {
    // Legal panels
    function openLegal(type: string) {
      const overlay = document.querySelector('.legal-overlay');
      if (overlay) overlay.classList.add('open');
      document.querySelectorAll('.legal-panel').forEach(p => p.classList.remove('open'));
      const panel = document.getElementById('legal-' + type);
      if (panel) panel.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeLegal() {
      const overlay = document.querySelector('.legal-overlay');
      if (overlay) overlay.classList.remove('open');
      document.querySelectorAll('.legal-panel').forEach(p => p.classList.remove('open'));
      document.body.style.overflow = '';
    }

    // Digital Signature Canvas
    function initCanvas(id: string) {
      const c = document.getElementById(id) as HTMLCanvasElement | null;
      if (!c) return;
      const ctx = c.getContext('2d');
      if (!ctx) return;
      c.width = c.offsetWidth * 2;
      c.height = c.offsetHeight * 2;
      ctx.scale(2, 2);
      ctx.strokeStyle = '#FF4BA2';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      let drawing = false;
      let hasSig = false;
      function getPos(e: PointerEvent | TouchEvent) {
        const r = c!.getBoundingClientRect();
        const t = 'touches' in e ? e.touches[0] : e;
        return { x: t.clientX - r.left, y: t.clientY - r.top };
      }
      c.addEventListener('pointerdown', (e: PointerEvent) => {
        drawing = true;
        const p = getPos(e);
        ctx!.beginPath();
        ctx!.moveTo(p.x, p.y);
        e.preventDefault();
      });
      c.addEventListener('pointermove', (e: PointerEvent) => {
        if (!drawing) return;
        const p = getPos(e);
        ctx!.lineTo(p.x, p.y);
        ctx!.stroke();
        hasSig = true;
        c!.classList.add('signed');
        checkReady();
        e.preventDefault();
      });
      c.addEventListener('pointerup', () => { drawing = false; });
      c.addEventListener('pointerleave', () => { drawing = false; });
      (c as any)._clear = () => {
        ctx!.clearRect(0, 0, c!.width, c!.height);
        hasSig = false;
        c!.classList.remove('signed');
        checkReady();
      };
      (c as any)._hasSig = () => hasSig;
    }

    function clearCanvas(role: string) {
      const c = document.getElementById('sig-canvas-' + role) as any;
      if (c && c._clear) c._clear();
    }

    function checkReady() {
      const tab = document.querySelector('.sig-tab.active');
      const btn = document.getElementById('sig-submit-btn') as HTMLButtonElement | null;
      if (!tab || !btn) return;
      let ready = false;
      if (tab.id === 'sig-tab-draw') {
        const cc = document.getElementById('sig-canvas-client') as any;
        const nc = document.getElementById('sig-name-client') as HTMLInputElement | null;
        ready = cc && cc._hasSig && cc._hasSig() && nc !== null && nc.value.trim().length > 0;
      } else {
        const tc = document.getElementById('sig-typed-client') as HTMLInputElement | null;
        ready = tc !== null && tc.value.trim().length > 2;
      }
      btn.disabled = !ready;
      if (ready) { btn.classList.add('ready'); } else { btn.classList.remove('ready'); }
    }

    function switchSigTab(tab: string, btn: HTMLElement) {
      document.querySelectorAll('.sig-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.sig-opt-btn').forEach(b => {
        b.classList.remove('active');
        (b as HTMLElement).style.background = 'rgba(255,255,255,0.06)';
        (b as HTMLElement).style.color = 'var(--text)';
      });
      const tabEl = document.getElementById('sig-tab-' + tab);
      if (tabEl) tabEl.classList.add('active');
      btn.classList.add('active');
      btn.style.background = 'var(--iwc-gold)';
      btn.style.color = 'var(--dark)';
      checkReady();
    }

    function updateTypedSig(role: string) {
      const input = document.getElementById('sig-typed-' + role) as HTMLInputElement | null;
      const preview = document.getElementById('sig-typed-preview-' + role);
      if (input && preview) {
        preview.textContent = input.value;
      }
      checkReady();
    }

    function getSignerDetails() {
      const tab = document.querySelector('.sig-tab.active') as HTMLElement | null;
      let name = '';
      let title = '';
      let method = 'Drawn Signature';
      if (tab && tab.id === 'sig-tab-draw') {
        const nEl = document.getElementById('sig-name-client') as HTMLInputElement | null;
        const tEl = document.getElementById('sig-title-client') as HTMLInputElement | null;
        name = nEl ? nEl.value : '';
        title = tEl ? tEl.value : '';
      } else {
        const nEl = document.getElementById('sig-typed-client') as HTMLInputElement | null;
        const tEl = document.getElementById('sig-typed-title-client') as HTMLInputElement | null;
        name = nEl ? nEl.value : '';
        title = tEl ? tEl.value : '';
        method = 'Typed Signature';
      }
      return { name, title, method };
    }

    function sendCounterSignRequest(signer: { name: string; title: string; method: string }, ts: string, hash: string) {
      const subject = encodeURIComponent('SIGNED: Gymshark Phone Box Proposal \u2014 Counter-Signature Requested | GS-PHONEBOX-001');
      const body = encodeURIComponent(
        'The Gymshark Phone Box Activation Proposal (GS-PHONEBOX-001) has been digitally executed by the Client and is ready for AGV Miami counter-signature.\n\n' +
        '--- SIGNATURE RECORD ---\n' +
        'Document: GS-PHONEBOX-001\n' +
        'Client: Gymshark Ltd.\n' +
        'Signer Name: ' + (signer.name || '[pending]') + '\n' +
        'Signer Title: ' + (signer.title || '[pending]') + '\n' +
        'Signature Method: ' + signer.method + '\n' +
        'Executed Timestamp: ' + ts + '\n' +
        'Reference Hash: ' + hash + '\n\n' +
        '--- NEXT STEPS ---\n' +
        '1. Counter-sign the attached PDF in the Producer signature block.\n' +
        '2. Return a countersigned PDF copy to the Client distribution list.\n' +
        '3. Issue the 60% deposit invoice via QuickBooks per MSA S5.\n' +
        '4. Trigger procurement, engineering, and venue permit applications.\n\n' +
        'Client is requested to keep this email as proof of execution.\n\n---\nAGV Miami, LLC'
      );
      const to = 'mike@agoragraphics.com,jclarkson@agvmiami.com';
      const cc = 'info@agoravisuals.com';
      const mailto = 'mailto:' + to + '?cc=' + cc + '&subject=' + subject + '&body=' + body;
      window.open(mailto, '_blank');
    }

    function submitSignature() {
      const now = new Date();
      const ts = now.toLocaleString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short'
      });
      const hash = 'SIG-' + now.getTime().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 8).toUpperCase();
      const signer = getSignerDetails();
      const submitWrap = document.getElementById('sig-submit-wrap');
      if (submitWrap) submitWrap.style.display = 'none';
      document.querySelectorAll('.sig-tab').forEach(t => (t as HTMLElement).style.display = 'none');
      document.querySelectorAll('.sig-options').forEach(o => (o as HTMLElement).style.display = 'none');
      const conf = document.getElementById('sig-confirmation');
      if (conf) conf.classList.add('show');
      const confirmTs = document.getElementById('sig-confirm-timestamp');
      if (confirmTs) confirmTs.textContent = 'Executed: ' + ts + ' | Reference: ' + hash;
      // Notify AGV Miami and request counter-signature (opens user's mail client in a new tab)
      setTimeout(() => sendCounterSignRequest(signer, ts, hash), 300);
      // Store latest record for the "Email Signed Copy" button
      (window as any)._lastSig = { signer, ts, hash };
    }

    function emailSignedCopy() {
      const rec = (window as any)._lastSig as { signer: { name: string; title: string; method: string }; ts: string; hash: string } | undefined;
      const subject = encodeURIComponent('Your Signed Copy \u2014 Gymshark Phone Box Proposal | GS-PHONEBOX-001');
      const body = encodeURIComponent(
        'A signed copy of the Gymshark Phone Box Activation Proposal (GS-PHONEBOX-001) is ready for your records.\n\n' +
        (rec
          ? ('--- EXECUTION DETAILS ---\nSigner: ' + (rec.signer.name || '[pending]') + '\nTitle: ' + (rec.signer.title || '[pending]') + '\nMethod: ' + rec.signer.method + '\nExecuted: ' + rec.ts + '\nReference: ' + rec.hash + '\n\n')
          : '')
        + 'To save a PDF copy, click "Download Signed PDF" or use your browser\u2019s print dialog (Save as PDF).\n\n' +
        'Questions? Reply to this email or contact mike@agoragraphics.com.\n\n---\nAGV Miami, LLC'
      );
      window.location.href = 'mailto:?cc=mike@agoragraphics.com,jclarkson@agvmiami.com&subject=' + subject + '&body=' + body;
    }

    function togglePhase(el: HTMLElement) {
      const wasOpen = el.classList.contains('open');
      document.querySelectorAll('.phase-head').forEach(h => {
        h.classList.remove('open');
        const toggle = h.querySelector('.phase-toggle') as HTMLElement | null;
        if (toggle) {
          toggle.style.transform = '';
          toggle.style.background = 'transparent';
          toggle.style.color = toggle.style.borderColor;
        }
      });
      document.querySelectorAll('.phase-body').forEach(b => b.classList.remove('open'));
      if (!wasOpen) {
        el.classList.add('open');
        const t = el.querySelector('.phase-toggle') as HTMLElement | null;
        if (t) {
          t.style.transform = 'rotate(45deg)';
          t.style.background = t.style.borderColor;
          t.style.color = 'var(--dark)';
        }
        const sibling = el.nextElementSibling;
        if (sibling) sibling.classList.add('open');
      }
    }

    function toggleAddon(el: HTMLElement) {
      el.classList.toggle('checked');
      const c = el.querySelector('.addon-check');
      if (c) c.textContent = el.classList.contains('checked') ? '+' : '';
    }

    // Attach all functions to window so inline onclick handlers work
    (window as any).openLegal = openLegal;
    (window as any).closeLegal = closeLegal;
    (window as any).initCanvas = initCanvas;
    (window as any).clearCanvas = clearCanvas;
    (window as any).checkReady = checkReady;
    (window as any).switchSigTab = switchSigTab;
    (window as any).updateTypedSig = updateTypedSig;
    (window as any).submitSignature = submitSignature;
    (window as any).emailSignedCopy = emailSignedCopy;
    (window as any).togglePhase = togglePhase;
    (window as any).toggleAddon = toggleAddon;

    // Escape key to close legal panels
    const handleKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') closeLegal(); };
    document.addEventListener('keydown', handleKeyDown);

    // Initialize canvases
    initCanvas('sig-canvas-client');
    initCanvas('sig-canvas-producer');

    // Add input listeners for signature fields
    ['sig-name-client', 'sig-title-client', 'sig-name-producer', 'sig-title-producer'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('input', checkReady);
    });

    // Scroll animations - IntersectionObserver
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis'); });
    }, { threshold: 0.05 });
    document.querySelectorAll('[data-a]').forEach(el => obs.observe(el));

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      obs.disconnect();
      delete (window as any).openLegal;
      delete (window as any).closeLegal;
      delete (window as any).initCanvas;
      delete (window as any).clearCanvas;
      delete (window as any).checkReady;
      delete (window as any).switchSigTab;
      delete (window as any).updateTypedSig;
      delete (window as any).submitSignature;
      delete (window as any).emailSignedCopy;
      delete (window as any).togglePhase;
      delete (window as any).toggleAddon;
    };
  }, []);

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </>
  );
}
