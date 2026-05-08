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
      <span class="agora">OMINTO</span>
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

<!-- HERO -->
<section class="hero" id="top">
  <div class="hero-content">
    <div class="hero-eyebrow">Experiential Fabrication &amp; Production</div>
    <h1>Gymshark<br>Phone Box</h1>
    <h2>New York &amp; Miami Activation Proposal</h2>
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
        <div class="hero-meta-value">New York &amp; Miami</div>
      </div>
      <div class="hero-meta-item">
        <div class="hero-meta-label">Activation Dates</div>
        <div class="hero-meta-value">Friday, July 17, 2026</div>
      </div>
      <div class="hero-meta-item">
        <div class="hero-meta-label">Document</div>
        <div class="hero-meta-value">GS-PHONEBOX-001</div>
      </div>
      <div class="hero-meta-item">
        <div class="hero-meta-label">Version</div>
        <div class="hero-meta-value">Version 4.0 &mdash; May 8, 2026</div>
      </div>
    </div>

    <p class="hero-narrative">
      AGV Miami is pleased to present <strong>Version 4.0</strong> of this fabrication and production proposal for the Gymshark Phone Box experiential activation, developed in partnership with Ominto Studio&rsquo;s creative direction. V4.0 is a <strong>single-event programme</strong>: a fully-painted <strong>yellow</strong> British phone box equipped with interactive photo, voucher, and call-response technology, deployed for a one-day street activation at <strong>Euclid Oval, Lincoln Road Mall, Miami Beach</strong> on <strong>Friday, July 17, 2026</strong> from <strong>11 AM&ndash;8 PM</strong> (Saturday, July 18 held as a weather contingency). After Miami the booth ships straight to AGV Miami&rsquo;s NY shop, receives a light touchup, and is delivered to the Gymshark NYC flagship store. The previously-quoted concealed motorised slot has been replaced with a true <strong>hinged back distribution door</strong> for in-booth staff to dispense product directly. V4.0 lands at <strong>$79,550 net production (base)</strong> with an optional NYC local install team add-on at $4,400 &mdash; both well inside the $90K target.
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
    A pink British phone box on an American sidewalk is already a photograph waiting to happen. Add a ringing phone, a voucher printer, a ceiling camera, and a crowd that just stumbled into it &mdash; and you have a share-first moment built for scroll, not for spec sheets. Our job is to make the object feel inevitable on the street and flawless under close inspection.
  </blockquote>
  <div class="attr">AGV Miami &mdash; Building Brand Environments Since 2006</div>
</div>

<!-- OVERVIEW -->
<section id="overview" class="sec">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--mercedes-teal)"></div><span style="color:var(--mercedes-teal)">Project Overview</span></div>
    <h2>One Object. One Day. One Plaza.</h2>
    <p class="sec-desc">
      Gymshark&rsquo;s Phone Box activation reframes a classic British phone box as a one-day street stunt: passers-by answer a ringing phone, navigate a pre-recorded quiz or live-call prompt, step inside a fully-painted yellow interior, take a selfie or belfie, and walk away with a printed voucher and packaged product handed directly through the new hinged back door by a Gymshark team member inside. The concept lives or dies on craft &mdash; the finish, the tech, the dwell time, the crowd around the object. V4.0 is a focused single-event programme at <strong>Euclid Oval, Lincoln Road Mall, Miami Beach</strong> on <strong>Friday, July 17, 2026</strong>, followed by a light touchup at the AGV Miami NY shop and delivery to the Gymshark NYC flagship store.
    </p>
  </div>

  <div class="overview-grid" data-a>
    <div class="overview-card" style="border-color:var(--f1-red)">
      <div class="ov-tag" style="color:var(--f1-red)">The Activation &mdash; Miami</div>
      <h3>Euclid Oval, Lincoln Road Mall</h3>
      <p><strong>Venue:</strong> Euclid Oval (1100 block), <a href="https://lincolnroad.com/" target="_blank" rel="noopener" style="color:var(--f1-red);text-decoration:underline">Lincoln Road Mall</a>, Miami Beach<br>
      <strong>Date:</strong> Friday, July 17, 2026<br>
      <strong>Weather Contingency:</strong> Saturday, July 18, 2026<br>
      <strong>Hours:</strong> 11:00 AM &ndash; 7:00 PM<br>
      <strong>Load-In:</strong> 6:00 AM &ndash; 10:00 AM<br>
      <strong>Audience:</strong> Fitness culture, tourists, content creators, beach crowd<br>
      <strong>Pitch:</strong> Confirmed at the central pedestrian plaza on Lincoln Road &amp; Euclid Ave &mdash; ovoid hardscape, fountain backdrop, palm canopy, central to the Apple Store / J.Crew / Anthropologie anchor block.</p>
    </div>
    <div class="overview-card" style="border-color:var(--iwc-gold)">
      <div class="ov-tag" style="color:var(--iwc-gold)">Post-Activation &mdash; Logistics to NYC</div>
      <h3>Light Touchup &amp; Return to NYC</h3>
      <p><strong>Activity:</strong> Light touchup after Miami activation + return logistics to a New York handoff destination<br>
      <strong>Window:</strong> July 18 &ndash; August 1, 2026<br>
      <strong>NYC Activation:</strong> <strong>None</strong> &mdash; no Bond St presence, no in-store fixture, no street pop-up<br>
      <strong>Scope:</strong> Climate-controlled warehouse hold, light cosmetic touchup ($3,000), inter-city freight Miami &rarr; NYC, and final delivery handoff at the client&rsquo;s designated NYC address<br>
      <strong>Driver:</strong> Asset preservation and NYC handoff for any future Gymshark deployment of the box.</p>
    </div>
  </div>
</section>

<!-- SCOPE -->
<section id="scope" class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Scope of Work</span></div>
    <h2>Fabrication &amp; Production Details</h2>
    <p class="sec-desc">
      The following deliverables represent the complete fabrication, tech, graphics, and packaging scope for the Gymshark Phone Box. Every element is specified against Ominto Studio&rsquo;s V2 design pack and engineered for rapid single-day installation, outdoor exposure, and safe guest interaction. All pricing is fully inclusive &mdash; on-site finishing, seaming, hardware, and scenic painting are integrated into every line item.
    </p>
  </div>

  <!-- COMPONENTS — THE PHONE BOX -->
  <div class="phase" data-a>
    <div class="phase-head" onclick="togglePhase(this)" style="border-left:4px solid var(--iwc-gold)">
      <div class="phase-num" style="color:var(--iwc-gold)">01</div>
      <div class="phase-info">
        <h3>The Phone Box</h3>
        <div class="sub">Custom scenic fabrication &bull; pink British phone box with lightbox shell, vinyl interior, and functional doors</div>
      </div>
      <div class="phase-toggle" style="border-color:var(--iwc-gold);color:var(--iwc-gold)">+</div>
    </div>
    <div class="phase-body">
      <div class="phase-inner" style="border-left:4px solid var(--iwc-gold)">
        <p class="phase-narrative">
          The hero object: a custom-fabricated British-style phone box painted Gymshark pink, with four-sided illuminated lightbox signage, a glass-and-vinyl front door, and a concealed sliding prize door. Interior is fully lined in pink vinyl to function as a photo studio, with a small seat, a working analogue phone handset, and a reflective ceiling dome light. Built in two freight-friendly modules for single-truck transport and ~4-hour on-site assembly.
        </p>

        <div class="core-label" style="color:var(--iwc-gold)">Core Deliverables</div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Phone Box Structural Shell <span style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--iwc-gold);font-weight:700;margin-left:8px;padding:2px 6px;border:1px solid var(--iwc-gold);border-radius:3px">V4 &mdash; dimensions per Ominto V2</span></div>
          <div class="desc">Custom scenic fabrication per Ominto V2 design pack. <strong>Footprint 164 &times; 94 cm</strong> (~5'4&Prime; &times; 3'1&Prime;); <strong>body height 213 cm</strong> (~7'0&Prime;); <strong>lightbox header +20 cm</strong> (total ~7'8&Prime;). Two-piece modular construction split into a 70 cm-deep back-of-house staff compartment and a 94 cm-deep guest compartment. Weatherproof marine-grade paint in Miami yellow (PMS callout TBC by Ominto). Engineered for curb-level install on pavement/plaza surface with concealed ballasting.</div></div>
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
          <div><div class="name">Painted Yellow Interior <span style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--iwc-gold);font-weight:700;margin-left:8px;padding:2px 6px;border:1px solid var(--iwc-gold);border-radius:3px">V4 &mdash; yellow confirmed</span></div>
          <div class="desc">Full four-wall yellow interior in marine-grade <strong>paint</strong>. Sand &amp; prep, primer, three-coat application of Miami yellow (PMS callout TBC by Ominto) in matte finish to minimise flash bounce on photo/video. Includes dimensional &ldquo;bum mirror&rdquo; with scripted messaging above and below.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$3,800</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Hinged Back Distribution Door <span style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--iwc-gold);font-weight:700;margin-left:8px;padding:2px 6px;border:1px solid var(--iwc-gold);border-radius:3px">V4 &mdash; replaces motorised slot</span></div>
          <div class="desc">True hinged back door, brand-yellow painted, no visible handle on the public face. Allows a Gymshark-supplied staff member to operate from inside the back-of-house compartment and hand product directly to the guest. Replaces the previously quoted concealed motorised sliding slot &mdash; simpler, lower-cost, and clearer staff workflow.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$1,800</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Interior Finishes</div>
          <div class="desc">Aluminium chequer-plate (five-bar pattern) flooring, circular dome overhead light, compact guest seat, and branded analogue phone with yellow handset (shelf mount aligned to voucher printer placement).</div></div>
          <div class="price" style="color:var(--iwc-gold)">$2,750</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Engineering, Structural Calcs &amp; Shop Drawings</div>
          <div class="desc">Licensed structural calculations for outdoor sidewalk install, wind-load &amp; ballast plan, electrical schematics for lightbox and tech integration, CAD shop drawings for fabrication, and venue-compliance drawing package. Required for private-venue permit submissions and insurance COI issuance.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$4,000</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Back-of-House Staff Compartment <span style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--iwc-gold);font-weight:700;margin-left:8px;padding:2px 6px;border:1px solid var(--iwc-gold);border-radius:3px">V4 &mdash; clarified spec</span></div>
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
        <h3>Interactive Tech Package</h3>
        <div class="sub">Call-response system, voucher printer, selfie rig, dual camera capture</div>
      </div>
      <div class="phase-toggle" style="border-color:var(--mercedes-teal);color:var(--mercedes-teal)">+</div>
    </div>
    <div class="phase-body">
      <div class="phase-inner" style="border-left:4px solid var(--mercedes-teal)">
        <p class="phase-narrative">
          The tech stack that turns a beautiful object into a content machine. Guests pick up the handset and navigate a pre-recorded prize quiz via the keypad (star for yes, hash for no) or participate in live walkie-talkie calls moderated by the Gymshark social team. Winners receive a printed voucher through the shelf-mounted thermal printer and a boxed product through the sliding door. Two ceiling cameras capture every interaction for UGC and organic social.
        </p>

        <div class="core-label" style="color:var(--mercedes-teal)">Core Deliverables</div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Pre-Recorded Call-Response System</div>
          <div class="desc">Working analogue phone wired to a production-grade IVR prize quiz with multi-branch scripting, licensed voice talent, keypad mapping (star = YES, hash = NO), and redundant win/lose logic. Scripting, voice talent, and QA supplied by AGV Miami in collaboration with Gymshark comms team.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$5,500</div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Two-Way Radio Pair &mdash; Motorola RMU2040 <span style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--mercedes-teal);font-weight:700;margin-left:8px;padding:2px 6px;border:1px solid var(--mercedes-teal);border-radius:3px">V4 &mdash; itemised</span></div>
          <div class="desc">2 &times; <a href="https://www.globalindustrial.com/p/motorola-rmu2040-rm-series-2-way-radio-2-channel-2-watt" target="_blank" rel="noopener" style="color:var(--mercedes-teal);text-decoration:underline">Motorola RMU2040 RM-Series 2-Way Radios</a> (2-channel, 2-watt UHF business-grade, license-free, ~250,000 sq ft / 12-floor range, NOAA weather alerts). One inside the booth for the guest, one with the on-site Gymshark athlete; includes spare batteries. Supports the deck&rsquo;s live-call moment (deck p.14) so the crowd can overhear both sides of the conversation while the GS social team records.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$700 <span style="font-size:9px;color:var(--text-muted);font-weight:400">(2 &times; $350)</span></div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Ceiling Cameras &mdash; Ring Mini Indoor Plug-In <span style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--mercedes-teal);font-weight:700;margin-left:8px;padding:2px 6px;border:1px solid var(--mercedes-teal);border-radius:3px">V4 &mdash; restored to dual per deck</span></div>
          <div class="desc">2 &times; <a href="https://ring.com/products/mini-indoor-security-camera-plug-in/" target="_blank" rel="noopener" style="color:var(--mercedes-teal);text-decoration:underline">Ring Mini Indoor Security Cameras</a> (1080p HD, two-way talk, motion detection, plug-in / no batteries, Wi-Fi, white finish). Cloud storage via Ring Protect subscription. Ceiling-mounted to cover both the guest compartment and back-of-house staff compartment per Ominto deck spec (p.15: &ldquo;2&times; camera fitted to ceiling&rdquo;).</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$300 <span style="font-size:9px;color:var(--text-muted);font-weight:400">(2 &times; $150)</span></div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Thermal Voucher Printer &amp; Shelf Mount <span style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--mercedes-teal);font-weight:700;margin-left:8px;padding:2px 6px;border:1px solid var(--mercedes-teal);border-radius:3px">V4 &mdash; right-sized</span></div>
          <div class="desc">80mm thermal ticket printer (<a href="https://a.co/d/0hWbMj1N" target="_blank" rel="noopener" style="color:var(--mercedes-teal);text-decoration:underline">Amazon-sourced hardware-equivalent class</a>) shelf-mounted under the analogue phone, wrapped in yellow vinyl. Voucher template designed by Gymshark; AGV Miami handles printer procurement, firmware, redundant roll inventory, and wrap.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$1,500</div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Wall-Mounted Selfie Stations <span style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--mercedes-teal);font-weight:700;margin-left:8px;padding:2px 6px;border:1px solid var(--mercedes-teal);border-radius:3px">V4 &mdash; upgraded to stations</span></div>
          <div class="desc">2 &times; wall-mounted selfie stations, painted to match the booth interior &mdash; one at face level, one positioned for the signature Gymshark &ldquo;belfie.&rdquo; Each station provides a stable phone holder for guests using their own devices. Replaces the V3 simple mobile-phone-mount line per Client direction.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$900 <span style="font-size:9px;color:var(--text-muted);font-weight:400">(2 &times; $450)</span></div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal);opacity:0.55">
          <div><div class="name">Content Capture &amp; Media Handoff Platform <span style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--mercedes-teal);font-weight:700;margin-left:8px;padding:2px 6px;border:1px solid var(--mercedes-teal);border-radius:3px">V4 &mdash; omitted</span></div>
          <div class="desc">Originally a traditional photobooth-style cloud workspace for AGV Miami to collect, colour-correct, and hand off UGC to Gymshark&rsquo;s social team within 48 hours of strike. Omitted in V4 per Client direction &mdash; raw camera files handed over on drive at strike, Gymshark social team handles the pipeline internally.</div></div>
          <div class="price" style="color:var(--mercedes-teal);text-decoration:line-through">$2,500</div>
        </div>
      </div>
    </div>
  </div>

  <!-- COMPONENTS — BRANDING & SIGNAGE -->
  <div class="phase" data-a>
    <div class="phase-head" onclick="togglePhase(this)" style="border-left:4px solid var(--f1-red)">
      <div class="phase-num" style="color:var(--f1-red)">03</div>
      <div class="phase-info">
        <h3>Branding &amp; Signage</h3>
        <div class="sub">Disclosure graphics, wayfinding, and venue dressing kit</div>
      </div>
      <div class="phase-toggle" style="border-color:var(--f1-red);color:var(--f1-red)">+</div>
    </div>
    <div class="phase-body">
      <div class="phase-inner" style="border-left:4px solid var(--f1-red)">
        <p class="phase-narrative">
          Branded signage, disclosure graphics, and a portable dressing kit that extends the phone box footprint on-site and frames queue, crowd, and content zones. Product packaging is <em>not</em> included in this revision per client direction; product units are supplied by Gymshark and distributed direct from the sliding door.
        </p>

        <div class="core-label" style="color:var(--f1-red)">Core Deliverables</div>

        <div class="core-item" style="border-color:var(--f1-red);opacity:0.55">
          <div><div class="name">Disclosure &amp; Wayfinding Signage <span style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--f1-red);font-weight:700;margin-left:8px;padding:2px 6px;border:1px solid var(--f1-red);border-radius:3px">V4 &mdash; removed</span></div>
          <div class="desc">Originally: &ldquo;Smile &mdash; you&rsquo;re on camera&rdquo; disclosure sign, queue management decals, and brand lockup callouts. <strong>Removed in V4 per Client direction</strong> &mdash; the camera-disclosure copy will be folded into existing booth signage at no extra cost.</div></div>
          <div class="price" style="color:var(--f1-red);text-decoration:line-through">$950</div>
        </div>

        <div class="core-item" style="border-color:var(--f1-red)">
          <div><div class="name">Venue Dressing Kit <span style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--f1-red);font-weight:700;margin-left:8px;padding:2px 6px;border:1px solid var(--f1-red);border-radius:3px">V4 &mdash; stanchions only, qty TBC</span></div>
          <div class="desc">Branded stanchion poles + ropes for crowd management at the Euclid Oval street activation. <strong>Quantity / linear feet to be confirmed by Client</strong> (how many poles, how many feet of rope) &mdash; the price below is held as a placeholder and will revise to firm with the count.</div></div>
          <div class="price" style="color:var(--f1-red)">$1,000</div>
        </div>

        <div class="core-item" style="border-color:var(--f1-red)">
          <div><div class="name">Daily Consumables &amp; Spares Kit</div>
          <div class="desc">Per-activation kit: voucher paper rolls, cleaning supplies, sanitisation wipes, yellow touch-up paint, vinyl repair patches, spare hardware, and gaffer tape. Sized for full-day operation. Essential for uninterrupted live run.</div></div>
          <div class="price" style="color:var(--f1-red)">$1,500</div>
        </div>

        <div class="core-item" style="border-color:var(--f1-red)">
          <div><div class="name">Custom Product Packaging &mdash; 200 units <span style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--f1-red);font-weight:700;margin-left:8px;padding:2px 6px;border:1px solid var(--f1-red);border-radius:3px">V4 &mdash; reinstated</span></div>
          <div class="desc">Yellow-palette product boxes, structural board, full-colour offset print, 300 &times; 200 &times; 70 mm, flat-packed for load-in. Quantity held at 200 per Client direction.</div></div>
          <div class="price" style="color:var(--f1-red)">$4,800</div>
        </div>
      </div>
    </div>
  </div>

  <!-- SERVICES — LOGISTICS & INSTALLATION -->
  <div class="phase" data-a>
    <div class="phase-head" onclick="togglePhase(this)" style="border-left:4px solid var(--white)">
      <div class="phase-num" style="color:var(--white)">04</div>
      <div class="phase-info">
        <h3>Logistics, Install &amp; Strike</h3>
        <div class="sub">Euclid Oval (Lincoln Road Mall) street install &bull; light touchup &bull; logistics to NYC handoff destination</div>
      </div>
      <div class="phase-toggle" style="border-color:var(--white);color:var(--white)">+</div>
    </div>
    <div class="phase-body">
      <div class="phase-inner" style="border-left:4px solid var(--white)">
        <p class="phase-narrative">
          Single-truck freight from the AGV Miami Bohemia, NY fabrication facility. The activation is a one-day Euclid Oval (Lincoln Road Mall) street install on Friday, July 17, 2026, with a 3-person install crew, dual on-site technicians during operating hours, and same-day strike. Saturday, July 18, 2026 is held as a weather contingency only. After Miami, a single light cosmetic touchup is applied at warehouse, then the box is logistically returned to a New York handoff destination. <strong>V3.0 removes the prior respray/rewrap package and the Gymshark Bond St in-store activation entirely</strong> &mdash; the box is now an asset transfer to NYC, not an activation in NYC.
        </p>

        <div class="core-label">The Activation &mdash; Euclid Oval, Lincoln Road Mall (Miami Beach)</div>

        <div class="core-item">
          <div><div class="name">Inbound Logistics &amp; Install &mdash; Miami</div>
          <div class="desc">Truck, rigging hardware, 3-person install crew, venue load-in coordination, module assembly, electrical hookup, permit-window supervisor, final finishing, and pre-open inspection. 4&ndash;6 hour install window at Euclid Oval.</div></div>
          <div class="price">$5,800</div>
        </div>

        <div class="core-item">
          <div><div class="name">On-Site Technicians &mdash; Miami (Operating Hours)</div>
          <div class="desc">Dedicated lead technician plus rotating second tech for rush windows and breaks. Covers voucher roll, camera system, IVR prompts, minor scenic touch-ups, live-call relay handoff with Gymshark social team, and pre-open soundcheck / post-close shutdown.</div></div>
          <div class="price">$2,800</div>
        </div>

        <div class="core-item">
          <div><div class="name">Same-Day Strike &amp; Outbound Freight &mdash; Miami</div>
          <div class="desc">Complete de-installation, module breakdown, crated outbound freight within Euclid Oval&rsquo;s contracted strike window. Site walk-through with the Lincoln Road BID operations team and full restoration to original condition.</div></div>
          <div class="price">$3,300</div>
        </div>

        <div class="core-label" style="color:var(--iwc-gold)">Post-Activation &mdash; Logistics to NYC <span style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--iwc-gold);font-weight:700;margin-left:8px;padding:2px 6px;border:1px solid var(--iwc-gold);border-radius:3px">V4 &mdash; transport-only base</span></div>
        <p class="phase-narrative" style="margin-top:4px;font-style:italic">After Miami strike, the booth ships straight to AGV Miami&rsquo;s NY shop for a light cosmetic touchup, then white-glove delivery to the Gymshark NYC flagship store. <strong>Base scope is transport-only;</strong> the local install team is available as an optional add-on quoted below.</p>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Climate-Controlled Warehouse Hold</div>
          <div class="desc">Secure climate-controlled storage of the full phone box assembly and tech stack at the AGV Miami NYC staging facility between the Miami strike and the NYC delivery. Held at climate spec per Client direction.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$2,400</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Inter-City Freight (Miami &rarr; NYC, Climate Truck)</div>
          <div class="desc">Dedicated climate-controlled truck from Euclid Oval, Lincoln Road Mall to the AGV Miami NYC staging facility, with real-time GPS tracking, two-driver rotation, and driver handoff documentation.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$5,500</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Light Touchup at NYC Staging</div>
          <div class="desc">Light cosmetic touchup pass at AGV Miami&rsquo;s NY shop following Miami strike, prior to flagship delivery: scuff/scratch repair, paint colour-match, lightbox edge cleanup, IVR/camera/printer functional re-test. Per Client direction, the booth ships straight to the NY shop and is refreshed locally before final delivery to the flagship store &mdash; tightest possible timeline.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$3,000</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">White-Glove Delivery to Gymshark NYC Flagship</div>
          <div class="desc">Climate-controlled final-mile delivery from the AGV Miami NY shop to the Gymshark NYC flagship retail address. Scheduled overnight or pre-open per store operations. Asset delivery only &mdash; in-store install is an optional add-on (below).</div></div>
          <div class="price" style="color:var(--iwc-gold)">$2,000</div>
        </div>

        <div class="reskin-subtotal" style="margin-top:10px;padding:12px 16px;border:1px solid var(--iwc-gold);border-radius:6px;display:flex;justify-content:space-between;align-items:center;background:rgba(212,175,55,0.06)">
          <span style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--iwc-gold);font-weight:700">Logistics-to-NYC Subtotal (Base)</span>
          <span style="font-family:var(--serif);font-size:18px;color:var(--iwc-gold);font-weight:700">$12,900</span>
        </div>

        <div class="core-label" style="color:var(--iwc-gold);margin-top:24px">Optional Add-On &mdash; NYC Local Install Team <span style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--iwc-gold);font-weight:700;margin-left:8px;padding:2px 6px;border:1px solid var(--iwc-gold);border-radius:3px">V4 &mdash; available, not in base</span></div>
        <p class="phase-narrative" style="margin-top:4px;font-style:italic">Quoted as an available add-on per Client direction. Activates only if Client elects to have AGV Miami install and commission the booth on-floor at the Gymshark NYC flagship store.</p>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Local Install Team &mdash; 1 Lead + 2 Crew</div>
          <div class="desc">On-site retail-environment install team for the Gymshark NYC flagship: 1 lead technician + 2 crew, floor-protection kit, retail-grade hand-tool kit, store-operations liaison. 4-hour install window scheduled to avoid trading hours.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$2,800</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">In-Store Fixture Setup</div>
          <div class="desc">Anchoring to retail-spec floor (no permanent penetration), electrical drop, IVR + camera + printer + lightbox bring-up, on-floor commissioning sign-off with the flagship store manager.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$1,600</div>
        </div>

        <div class="reskin-subtotal" style="margin-top:10px;padding:12px 16px;border:1px solid var(--iwc-gold);border-radius:6px;display:flex;justify-content:space-between;align-items:center;background:rgba(212,175,55,0.06)">
          <span style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--iwc-gold);font-weight:700">Optional Local Install Add-On Subtotal</span>
          <span style="font-family:var(--serif);font-size:18px;color:var(--iwc-gold);font-weight:700">$4,400</span>
        </div>
      </div>
    </div>
  </div>

  <!-- SERVICES — PROJECT MANAGEMENT -->
  <div class="phase" data-a>
    <div class="phase-head" onclick="togglePhase(this)" style="border-left:4px solid var(--mercedes-teal)">
      <div class="phase-num" style="color:var(--mercedes-teal)">05</div>
      <div class="phase-info">
        <h3>Project Management &amp; Client Services</h3>
        <div class="sub">Dedicated producer, client-services coverage, and cross-agency coordination</div>
      </div>
      <div class="phase-toggle" style="border-color:var(--mercedes-teal);color:var(--mercedes-teal)">+</div>
    </div>
    <div class="phase-body">
      <div class="phase-inner" style="border-left:4px solid var(--mercedes-teal)">
        <p class="phase-narrative">
          A dedicated AGV Miami producer and client-services coverage for the full engagement &mdash; kickoff through post-event reconciliation. Includes weekly status calls, cross-agency coordination with Ominto Studio and Gymshark stakeholders, vendor and venue relationship management, budget tracking, Change Order administration, and insurance/COI coordination.
        </p>

        <div class="core-label" style="color:var(--mercedes-teal)">Core Deliverables</div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Project Management Fee <span style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--mercedes-teal);font-weight:700;margin-left:8px;padding:2px 6px;border:1px solid var(--mercedes-teal);border-radius:3px">V4 &mdash; lean engagement</span></div>
          <div class="desc">Dedicated senior producer, weekly status reporting (vs daily), milestone tracking, vendor / venue liaison, COI + insurance coordination, post-event reconciliation. Async-first cadence appropriate for a single-event programme; same producer, lighter touch.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$6,000</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- LOCATIONS -->
<section id="locations" class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Venue</span></div>
    <h2>One Venue. One Activation.</h2>
    <p class="sec-desc">
      V3.0 proposes a single venue: <strong>Euclid Oval, Lincoln Road Mall</strong> (Miami Beach) for a one-day street activation on <strong>Friday, July 17, 2026</strong>. Saturday, July 18, 2026 is held against the same permit window as a weather contingency only. The Lincoln Road venue fee is passed through at cost. <strong>No NYC venue, no Bond St activation</strong>; the box is logistically returned to a New York handoff destination after Miami.
    </p>
  </div>

  <!-- MIAMI SUBSECTION -->
  <div class="loc-city-section" data-a>
    <div class="loc-city-heading">
      <div class="sec-eye"><div class="bar" style="background:var(--f1-red)"></div><span style="color:var(--f1-red)">Miami &bull; The Activation &bull; Street</span></div>
      <h3>Miami Venue</h3>
      <p>The activation runs as a one-day street pop-up at Euclid Oval, Lincoln Road Mall on Friday, July 17, 2026 (with Saturday, July 18, 2026 held as a weather contingency). The Lincoln Road BID handles permitting; the Miami venue fee is the only venue pass-through across the entire programme.</p>
    </div>

    <div class="loc-grid loc-grid-feature">

      <!-- MIAMI: EUCLID OVAL, LINCOLN ROAD MALL -->
      <div class="loc-card" style="border-color:var(--f1-red)">
        <div class="loc-hero loc-hero-lincoln">
          <div class="loc-city" style="color:var(--f1-red)">Miami</div>
          <div class="loc-title">Euclid Oval, Lincoln Road Mall</div>
          <div class="loc-sub">Miami Beach &bull; Friday, July 17, 2026</div>
        </div>
        <div class="loc-body">
          <div class="loc-price">Est. $5,000 &ndash; $10,000 / day</div>
          <p>Pedestrian-only outdoor shopping district with recent streetscape regeneration. Bold palm-lined aesthetic with steady 7-day foot traffic of tourists, residents, and beach-goers. Permitting via City of Miami Beach and the Lincoln Road Business Improvement District.</p>
          <p style="margin-top:12px;padding:12px 14px;border:1px solid var(--f1-red);border-radius:4px;background:rgba(244,162,97,0.06);font-size:11px;line-height:1.65"><strong style="color:var(--f1-red);text-transform:uppercase;letter-spacing:1.5px;font-size:10px">Venue &amp; Pitch &mdash; Confirmed</strong><br><strong>Pitch:</strong> <em>Euclid Oval</em>, the central pedestrian plaza at Lincoln Road &amp; Euclid Ave (1100 block) &mdash; ovoid hardscape with fountain backdrop, palm canopy, established BID activation slot, central to the Apple Store / J.Crew / Anthropologie anchor block.<br><strong>Date:</strong> Friday, July 17, 2026.<br><strong>Weather contingency:</strong> Saturday, July 18, 2026 &mdash; held by the BID against the same permit window for outdoor weather displacement only.</p>
          <ul>
            <li>Car-free corridor &mdash; safe for street-level activation</li>
            <li>High dwell time, shopping-mindset audience</li>
            <li>Adjacent cafes and retail enable spillover</li>
            <li>Precedent for branded pop-ups at scale</li>
          </ul>
          <a href="https://lincolnroad.com/" class="loc-link" target="_blank" rel="noopener">Lincoln Road BID</a>
        </div>
      </div>

    </div>
  </div>

  <div class="loc-footnote" data-a>
    <strong>Note on pricing &amp; venue fees:</strong> The Lincoln Road daily range is a pre-permit market estimate based on published rates and comparable 2024&ndash;2025 activation precedents. The actual venue fee depends on footprint, amenities (power, water, security), seasonality, dates, and negotiation, and is billed separately from the production investment and passed through at cost. <strong>V3.0 has no NYC venue.</strong> Post-Miami, the box is logistically returned to a New York handoff destination &mdash; the line items for warehouse hold, light touchup, inter-city freight, and final NYC delivery in the Investment Summary cover this transfer at cost. No respray, no rewrap, no in-store activation in V3.0.
  </div>
</section>

<!-- PRODUCTION JOURNEY -->
<section id="journey" class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--mercedes-teal)"></div><span style="color:var(--mercedes-teal)">Your Production Journey</span></div>
    <h2>Eight Phases. One Seamless Deployment.</h2>
    <p class="sec-desc">
      Every AGV Miami engagement follows a structured, milestone-gated production lifecycle &mdash; from creative alignment through post-event strike. Each phase builds on the last with defined deliverables and approval checkpoints, scaled here for a ~10-week lead time from Scope Approval (Monday, May 4, 2026) into the Friday, July 17, 2026 activation at Euclid Oval, Lincoln Road Mall, followed by light touchup and logistics return to a New York handoff destination.
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
      <p>Structural engineering calculations, shop drawings, electrical schematics for lightbox and tech, ballast plan for outdoor install, and Lincoln Road BID / Euclid Oval compliance documentation.</p>
      <div class="step-date">May 22 &ndash; June 5, 2026</div>
    </div>
    <div class="journey-step" style="border-color:var(--iwc-gold)">
      <div class="step-num" style="color:var(--iwc-gold)">04</div>
      <h4>Fabrication &amp; Print Production</h4>
      <p>Custom scenic builds, precision CNC milling, millwork assembly, full painted-finish phase (no interior vinyl in V3), lightbox output, and multi-stage QC inspections.</p>
      <div class="step-date">June 8 &ndash; July 6, 2026</div>
    </div>
    <div class="journey-step" style="border-color:var(--mercedes-teal)">
      <div class="step-num" style="color:var(--mercedes-teal)">05</div>
      <h4>Logistics &amp; Pre-Deployment</h4>
      <p>Precision crating, climate-protected transport from our Bohemia, NY fabrication facility to Lincoln Road, Miami Beach, with overnight delivery coordination with the BID.</p>
      <div class="step-date">July 14 &ndash; 16, 2026</div>
    </div>
    <div class="journey-step" style="border-color:var(--mercedes-teal)">
      <div class="step-num" style="color:var(--mercedes-teal)">06</div>
      <h4>Installation &amp; On-Site Build</h4>
      <p>Permit-window install at Euclid Oval, Lincoln Road Mall on Friday, July 17, 2026. 4&ndash;6 hour install window, 3-person crew, dual on-site technicians, pre-open inspection. Saturday, July 18, 2026 held as a weather contingency.</p>
      <div class="step-date">Friday, July 17, 2026</div>
    </div>
    <div class="journey-step" style="border-color:var(--mercedes-teal)">
      <div class="step-num" style="color:var(--mercedes-teal)">07</div>
      <h4>Activation &amp; Live Operations</h4>
      <p>One-day public operation at Euclid Oval with on-site tech, voucher, camera, and live-call coverage. <strong>No NYC activation in V3.0.</strong></p>
      <div class="step-date">Friday, July 17, 2026</div>
    </div>
    <div class="journey-step" style="border-color:var(--mercedes-teal)">
      <div class="step-num" style="color:var(--mercedes-teal)">08</div>
      <h4>Strike, Touchup &amp; NYC Logistics Handoff</h4>
      <p>Same-day strike at Euclid Oval; inter-city freight Miami &rarr; NYC; climate-controlled hold + light touchup ($3,000) at AGV Miami&rsquo;s NYC staging facility; final delivery to a NYC handoff destination. Post-event reconciliation, final documentation, project archive.</p>
      <div class="step-date">Strike July 17 &bull; NYC handoff by August 1, 2026 &bull; Closeout August 7, 2026</div>
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
      <tr><td>Scope Approval</td><td>V3.0 plan approved (Euclid Oval, Lincoln Road Mall + logistics to NYC handoff); production authorisation issued</td><td>Monday, May 4, 2026</td></tr>
      <tr><td>Deposit Received</td><td>60% project deposit &mdash; due upon Scope of Work approval; triggers procurement, engineering, and Lincoln Road BID permit application</td><td>May 6, 2026</td></tr>
      <tr><td>Permit Applied &mdash; Euclid Oval</td><td>Permit application filed with the Lincoln Road BID and the City of Miami Beach for the Euclid Oval pitch (1100 block) on Friday, July 17, 2026</td><td>May 8, 2026</td></tr>
      <tr><td>Creative Lock</td><td>Final artwork, voucher template, and IVR scripting delivered to AGV Miami</td><td>May 22, 2026</td></tr>
      <tr><td>Engineering &amp; Shop Drawings</td><td>Structural, electrical, ballast, and Lincoln Road BID / Euclid Oval compliance drawings issued for client review</td><td>May 22 &ndash; June 5, 2026</td></tr>
      <tr><td>Scenic Fabrication</td><td>Phone box shell build, full paint finish (no interior vinyl in V3), lightbox assembly</td><td>June 8 &ndash; July 6, 2026</td></tr>
      <tr><td>Print &amp; Graphics Production</td><td>Lightbox graphics, disclosure + wayfinding signage, sidewalk/window signage</td><td>June 15 &ndash; July 6, 2026</td></tr>
      <tr><td>Tech Bench Test</td><td>Full IVR + voucher printer + camera system rehearsed end-to-end at AGV Miami facility</td><td>July 6 &ndash; 10, 2026</td></tr>
      <tr><td>Balance Payment</td><td>Remaining 40% balance due &mdash; five (5) business days prior to the Euclid Oval activation</td><td>Friday, July 10, 2026</td></tr>
      <tr><td>Transit to Miami</td><td>Truck loaded, transported from Bohemia, NY to Euclid Oval, Lincoln Road Mall, Miami Beach</td><td>July 14 &ndash; 16, 2026</td></tr>
      <tr><td>The Activation &mdash; Euclid Oval</td><td>Pre-dawn install at Euclid Oval, Lincoln Road Mall, 8&ndash;10 hr operational window, same-day strike. Saturday, July 18, 2026 held as a weather contingency only.</td><td>Friday, July 17, 2026</td></tr>
      <tr><td>Inter-City Freight Miami &rarr; NYC</td><td>Climate-controlled truck from Euclid Oval strike site to AGV Miami&rsquo;s NYC staging facility</td><td>July 18 &ndash; 21, 2026</td></tr>
      <tr><td>Light Touchup After First Activation</td><td>Single light cosmetic touchup pass ($3,000): scuff/scratch repair, paint colour-match, lightbox edge cleanup, IVR/camera/printer functional re-test</td><td>July 22 &ndash; 28, 2026</td></tr>
      <tr><td>Final Delivery to NYC Handoff Destination</td><td>Climate-controlled final-mile delivery from AGV Miami NYC staging to the client&rsquo;s designated NYC handoff address (TBC by Gymshark). Asset transfer only &mdash; no install, commissioning, or activation.</td><td>By August 1, 2026</td></tr>
      <tr><td>Project Closeout</td><td>Post-event reconciliation, captured media handoff, closeout deliverables</td><td>August 7, 2026</td></tr>
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
    <h2>One Plan. One Activation.</h2>
    <p class="sec-desc">
      V4.0 is a focused, single-event programme: a one-day street activation at <strong>Euclid Oval, Lincoln Road Mall, Miami Beach</strong> on <strong>Friday, July 17, 2026 from 11 AM&ndash;8 PM</strong>, followed by a light cosmetic touchup at AGV Miami&rsquo;s NY shop and white-glove delivery to the Gymshark NYC flagship store. Yellow palette confirmed; concealed motorised slot replaced with a true hinged back distribution door. NYC base scope is transport-only; the local install team is available as an optional add-on.
    </p>
  </div>

  <div class="pkg-grid" data-a style="grid-template-columns:1fr;max-width:780px;margin:0 auto">

    <!-- PLAN: V4.0 EUCLID OVAL + TRANSPORT TO NYC FLAGSHIP -->
    <div class="pkg-card recommended" style="border-color:var(--iwc-gold)">
      <div class="pkg-ribbon" style="background:var(--iwc-gold);color:var(--dark)">Plan &mdash; V4.0</div>
      <div class="pkg-tag" style="color:var(--iwc-gold)">The Activation</div>
      <h3>Euclid Oval + Transport to NYC Flagship</h3>
      <div class="pkg-date">Euclid Oval, Lincoln Road Mall &mdash; Friday, July 17, 2026, 11 AM&ndash;8 PM &rarr; Gymshark NYC flagship delivery by Thursday, July 23, 2026</div>
      <div class="pkg-venue">One street activation at Euclid Oval, Lincoln Road Mall, Miami Beach &bull; light touchup at AGV Miami NY shop &bull; white-glove delivery to the Gymshark NYC flagship store. <strong>Optional NYC local install team available as add-on.</strong></div>
      <ul class="pkg-list">
        <li><strong>Euclid Oval, Lincoln Road Mall street activation &mdash; Friday, July 17, 2026</strong> from 11 AM&ndash;8 PM (Saturday, July 18 held as a weather contingency)</li>
        <li><strong>Painted yellow finish</strong> throughout (Miami palette confirmed) for durability and on-day photo readiness</li>
        <li><strong>Hinged back distribution door</strong> for a Gymshark staff member to operate from inside &mdash; replaces the concealed motorised slot in earlier versions</li>
        <li>Climate-controlled warehouse hold + climate freight (Miami &rarr; AGV Miami NY shop)</li>
        <li>Light touchup at NY shop, then white-glove delivery to the Gymshark NYC flagship store</li>
        <li>Optional add-on: <strong>NYC local install team (1 lead + 2 crew) + in-store fixture setup</strong> &mdash; +$4,400 if elected</li>
        <li>200-unit yellow-palette product packaging, dedicated project management, $5K Preferred Partner Credit</li>
      </ul>
      <div class="pkg-price">
        <div class="pkg-prod-label">Gross Production Investment (Base)</div>
        <div class="pkg-amount" style="color:var(--text-muted);font-size:22px">$84,550</div>
        <div class="pkg-venue-line" style="color:var(--mercedes-teal)">Less: Preferred Partner Credit &mdash; &minus;$5,000</div>
        <div class="pkg-prod-label" style="margin-top:14px">Net V4.0 Production Investment (Base)</div>
        <div class="pkg-amount" style="color:var(--iwc-gold)">$79,550</div>
        <div class="pkg-venue-line">+ Lincoln Road venue fee (est. $5K &ndash; $10K) &bull; Optional NYC install add-on +$4,400</div>
        <div class="pkg-total">With Optional Install Add-On<strong>$83,950 net</strong></div>
      </div>
    </div>

  </div>

  <!-- COMPONENT SUMMARY — PRICING HIERARCHY / ITEMIZATION -->
  <div class="pkg-component-summary" data-a style="margin-top:40px">
    <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Component Pricing Hierarchy</span></div>
    <h3 style="font-size:22px;margin:8px 0 16px">What&rsquo;s Included</h3>
    <p class="sec-desc" style="margin-bottom:20px">Itemization of the V4.0 Components and Services. The Activation covers Euclid Oval (Lincoln Road Mall) install, 11 AM&ndash;8 PM ops, and same-day strike; Logistics to NYC (Base) covers climate hold, climate freight, light touchup at AGV Miami&rsquo;s NY shop, and white-glove delivery to the Gymshark NYC flagship. The NYC local install team is quoted separately as an available add-on, not in the base.</p>

    <table class="component-summary-table">
      <thead>
        <tr>
          <th style="text-align:left">Component</th>
          <th style="text-align:right;color:var(--iwc-gold)">V4.0 Plan<br><span style="font-size:10px;font-weight:400;opacity:0.7">Euclid Oval + Transport to NYC Flagship</span></th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Components &mdash; The Phone Box (painted yellow, hinged back door, compartment, dims per Ominto V2)</td><td class="r">$38,350</td></tr>
        <tr><td>Components &mdash; Interactive Tech (2&times; Ring cameras, 2&times; Motorola RMU2040 radios, $1.5K printer, 2&times; selfie stations)</td><td class="r">$8,900</td></tr>
        <tr><td>Components &mdash; Branding, Signage &amp; Consumables (no disclosure, stanchions only, packaging in)</td><td class="r">$7,300</td></tr>
        <tr><td>Services &mdash; The Activation: Euclid Oval (Lincoln Road Mall), 11 AM&ndash;8 PM</td><td class="r">$11,100</td></tr>
        <tr><td>Services &mdash; Logistics to NYC (Base, transport-only)</td><td class="r">$12,900</td></tr>
        <tr><td>Services &mdash; Project Management (V4 lean)</td><td class="r">$6,000</td></tr>
        <tr><td style="color:var(--mercedes-teal)">Credits &mdash; Preferred Partner Credit</td><td class="r" style="color:var(--mercedes-teal)">&minus;$5,000</td></tr>
      </tbody>
      <tfoot>
        <tr class="prod-total">
          <td><strong>Net V4.0 Production Investment (Base)</strong></td>
          <td class="r" style="color:var(--iwc-gold)"><strong>$79,550</strong></td>
        </tr>
        <tr class="venue-line">
          <td>Optional Add-On &mdash; NYC Local Install Team</td>
          <td class="r">+$4,400</td>
        </tr>
        <tr class="venue-line">
          <td>+ Venue Pass-Through (est.)</td>
          <td class="r">$5K &ndash; $10K (Lincoln Road only)</td>
        </tr>
        <tr class="allin-total">
          <td><strong>Net with Optional Install + Venue (est.)</strong></td>
          <td class="r"><strong>$88,950 &ndash; $93,950</strong></td>
        </tr>
      </tfoot>
    </table>
  </div>

  <div class="pkg-footnote" data-a>
    <strong>Budget alignment (V4.0):</strong> Gross base production investment is $84,550; net of the $5,000 Preferred Partner Credit, V4.0 lands at <strong>$79,550 net (base)</strong>. The optional NYC local install team add-on is $4,400 if elected, taking the net to $83,950 &mdash; both well inside the $90K target. Tech package itemised against the Ominto deck (2&times; Ring Mini cameras, 2&times; Motorola RMU2040 radios, $1.5K thermal printer, 2&times; wall-mounted selfie stations). V4 deltas vs V3.0: hinged back distribution door replaces the motorised slot (cleaner, lower-cost); selfie/belfie spec held at static-basic with articulating upgrade quoted as an option; ceiling camera held at single 4K pending production-team review; consumer walkie pair; content capture, disclosure & wayfinding signage, and store wayfinding kit removed; venue dressing kit pared to stanchions only (qty TBC); 200-unit packaging held; NYC base scope is transport-only with the local install team available as an add-on; PM engagement at the leaner $6K cadence. Lincoln Road BID venue fee (covering the BID daily fee, pop-up permit, expedited permitting, and supplemental insurance) is the only pass-through cost.
  </div>
</section>

<!-- INVESTMENT -->
<section id="investment" class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Project Investment</span></div>
    <h2>Investment Summary</h2>
    <p class="sec-desc">
      Line-item breakdown supporting the V4.0 plan. The Components scope (painted yellow phone box with hinged back distribution door, simplified tech, packaging) and Project Management Services build the production base. Activation Services itemise the Euclid Oval (Lincoln Road Mall) 11 AM&ndash;8 PM street logistics; Logistics-to-NYC base covers warehouse hold, climate freight, light touchup at AGV Miami&rsquo;s NY shop, and white-glove delivery to the Gymshark NYC flagship store. The optional NYC local install team is quoted separately as an add-on. The Lincoln Road BID venue fee is the only venue pass-through.
    </p>
  </div>

  <table class="invest-table" data-a>
    <thead><tr><th>Item</th><th style="text-align:right">Investment</th></tr></thead>
    <tbody>
      <tr class="divider"><td colspan="2">Components &mdash; The Phone Box</td></tr>
      <tr class="subcat"><td colspan="2">Structural Build</td></tr>
      <tr class="item"><td><span class="item-name">Phone Box Structural Shell</span><span class="item-desc">Custom scenic fabrication, marine-grade paint in Miami yellow (PMS TBC by Ominto), two-piece modular construction</span></td><td>$14,500</td></tr>
      <tr class="item"><td><span class="item-name">4-Sided Illuminated Lightbox Signage</span><span class="item-desc">LED backlit, all four faces, weatherproof housing, single-cord power feed</span></td><td>$6,800</td></tr>
      <tr class="item"><td><span class="item-name">Glass &amp; Semi-Transparent Vinyl Panels</span><span class="item-desc">Tempered glass, front door and sides, custom-printed yellow-palette privacy vinyl</span></td><td>$2,900</td></tr>
      <tr class="subcat"><td colspan="2">Interior</td></tr>
      <tr class="item"><td><span class="item-name">Painted Yellow Interior <span style="font-size:9px;letter-spacing:1px;text-transform:uppercase;color:var(--iwc-gold);font-weight:700;margin-left:6px;padding:1px 5px;border:1px solid var(--iwc-gold);border-radius:2px">V4 — yellow confirmed</span></span><span class="item-desc">Four-wall matte paint finish (Miami yellow), dimensional bum mirror with scripted messaging.</span></td><td>$3,800</td></tr>
      <tr class="item"><td><span class="item-name">Hinged Back Distribution Door <span style="font-size:9px;letter-spacing:1px;text-transform:uppercase;color:var(--iwc-gold);font-weight:700;margin-left:6px;padding:1px 5px;border:1px solid var(--iwc-gold);border-radius:2px">V4 — replaces motorised slot</span></span><span class="item-desc">True hinged back door, brand-yellow painted, no visible public-face handle. Allows staff to operate from inside and dispense product directly. Replaces the previously quoted concealed motorised sliding slot.</span></td><td>$1,800</td></tr>
      <tr class="item"><td><span class="item-name">Interior Finishes</span><span class="item-desc">Aluminium chequer-plate flooring, dome light, guest seat, branded analogue phone</span></td><td>$2,750</td></tr>
      <tr class="subcat"><td colspan="2">Engineering &amp; Documentation</td></tr>
      <tr class="item"><td><span class="item-name">Engineering, Structural Calcs &amp; Shop Drawings</span><span class="item-desc">Wind-load, ballast plan, electrical schematics, CAD shop drawings, venue-compliance package</span></td><td>$4,000</td></tr>
      <tr class="subcat"><td colspan="2">Back-of-House</td></tr>
      <tr class="item"><td><span class="item-name">Back-of-House Staff Compartment <span style="font-size:9px;letter-spacing:1px;text-transform:uppercase;color:var(--iwc-gold);font-weight:700;margin-left:6px;padding:1px 5px;border:1px solid var(--iwc-gold);border-radius:2px">V4 — clarified</span></span><span class="item-desc">Interior partition + small staff stoop creating a private back compartment behind the hinged distribution door. Staff supplied by Client.</span></td><td>$1,800</td></tr>
      <tr class="sub-subtotal"><td><em>Subtotal &mdash; The Phone Box</em></td><td><em>$38,350</em></td></tr>

      <tr class="divider"><td colspan="2">Components &mdash; Interactive Tech (V4 — itemised hardware)</td></tr>
      <tr class="subcat"><td colspan="2">Call &amp; Response System</td></tr>
      <tr class="item"><td><span class="item-name">Pre-Recorded Call-Response IVR System</span><span class="item-desc">Multi-branch scripting, licensed voice talent, keypad mapping (* = YES, # = NO), redundant win/lose logic, QA</span></td><td>$5,500</td></tr>
      <tr class="item"><td><span class="item-name">Two-Way Radio Pair &mdash; Motorola RMU2040 (2 &times; $350) <span style="font-size:9px;letter-spacing:1px;text-transform:uppercase;color:var(--iwc-gold);font-weight:700;margin-left:6px;padding:1px 5px;border:1px solid var(--iwc-gold);border-radius:2px">V4 — itemised</span></span><span class="item-desc">2 &times; Motorola RMU2040 RM-Series 2-Way Radios (2-channel, 2-watt UHF business-grade, ~250,000 sq ft / 12-floor range, NOAA weather alerts). One inside the booth, one with the Gymshark athlete; includes spare batteries.</span></td><td>$700</td></tr>
      <tr class="subcat"><td colspan="2">Capture</td></tr>
      <tr class="item"><td><span class="item-name">Ceiling Cameras &mdash; Ring Mini Indoor Plug-In (2 &times; $150) <span style="font-size:9px;letter-spacing:1px;text-transform:uppercase;color:var(--iwc-gold);font-weight:700;margin-left:6px;padding:1px 5px;border:1px solid var(--iwc-gold);border-radius:2px">V4 — restored to dual</span></span><span class="item-desc">2 &times; Ring Mini Indoor Security Cameras (1080p HD, two-way talk, motion detection, plug-in/Wi-Fi, white). Cloud storage via Ring Protect subscription. Restored to dual per Ominto deck spec (p.15: &ldquo;2&times; camera fitted to ceiling&rdquo;).</span></td><td>$300</td></tr>
      <tr class="item"><td><span class="item-name">Wall-Mounted Selfie Stations (2 &times; $450) <span style="font-size:9px;letter-spacing:1px;text-transform:uppercase;color:var(--iwc-gold);font-weight:700;margin-left:6px;padding:1px 5px;border:1px solid var(--iwc-gold);border-radius:2px">V4 — upgraded</span></span><span class="item-desc">2 &times; wall-mounted selfie stations, painted to match the booth interior &mdash; face-level + belfie-angle. Each station provides a stable phone holder for guests using their own devices.</span></td><td>$900</td></tr>
      <tr class="subcat"><td colspan="2">Output &amp; Handoff</td></tr>
      <tr class="item"><td><span class="item-name">Thermal Voucher Printer &amp; Shelf Mount <span style="font-size:9px;letter-spacing:1px;text-transform:uppercase;color:var(--iwc-gold);font-weight:700;margin-left:6px;padding:1px 5px;border:1px solid var(--iwc-gold);border-radius:2px">V4 — right-sized</span></span><span class="item-desc">80mm thermal ticket printer (Amazon-sourced hardware-equivalent class), yellow wrap, shelf-mounted under the analogue phone, redundant roll inventory, firmware.</span></td><td>$1,500</td></tr>
      <tr class="item omitted" style="opacity:0.55"><td><span class="item-name" style="text-decoration:line-through">Content Capture &amp; Media Handoff Platform</span><span class="item-desc">Omitted in V4 per Client direction. Raw camera files handed over on drive at strike at no extra cost; Gymshark social team handles the pipeline internally.</span></td><td style="text-decoration:line-through">&mdash;</td></tr>
      <tr class="sub-subtotal"><td><em>Subtotal &mdash; Interactive Tech</em></td><td><em>$8,900</em></td></tr>

      <tr class="divider"><td colspan="2">Components &mdash; Branding, Signage &amp; Consumables</td></tr>
      <tr class="subcat"><td colspan="2">Signage</td></tr>
      <tr class="item omitted" style="opacity:0.55"><td><span class="item-name" style="text-decoration:line-through">Disclosure &amp; Wayfinding Signage</span><span class="item-desc">Removed in V4 per Client direction. Camera-disclosure copy folded into existing booth signage at no extra cost.</span></td><td style="text-decoration:line-through">&mdash;</td></tr>
      <tr class="item"><td><span class="item-name">Venue Dressing Kit <span style="font-size:9px;letter-spacing:1px;text-transform:uppercase;color:var(--iwc-gold);font-weight:700;margin-left:6px;padding:1px 5px;border:1px solid var(--iwc-gold);border-radius:2px">V4 — stanchions only, qty TBC</span></span><span class="item-desc">Branded stanchion poles + ropes for crowd management. Quantity / linear feet TBC by Client; price held as a placeholder pending that confirmation.</span></td><td>$1,000</td></tr>
      <tr class="subcat"><td colspan="2">Operating Supplies</td></tr>
      <tr class="item"><td><span class="item-name">Daily Consumables &amp; Spares Kit</span><span class="item-desc">Voucher paper rolls, cleaning supplies, sanitisation wipes, yellow touch-up paint, vinyl repair, gaffer</span></td><td>$1,500</td></tr>
      <tr class="subcat"><td colspan="2">Packaging</td></tr>
      <tr class="item"><td><span class="item-name">Custom Product Packaging &mdash; 200 units <span style="font-size:9px;letter-spacing:1px;text-transform:uppercase;color:var(--iwc-gold);font-weight:700;margin-left:6px;padding:1px 5px;border:1px solid var(--iwc-gold);border-radius:2px">V4 — reinstated</span></span><span class="item-desc">Yellow-palette product boxes, structural board, full-colour offset print, 300 &times; 200 &times; 70 mm, flat-packed.</span></td><td>$4,800</td></tr>
      <tr class="sub-subtotal"><td><em>Subtotal &mdash; Branding, Signage &amp; Consumables</em></td><td><em>$7,300</em></td></tr>

      <tr class="divider"><td colspan="2">Services &mdash; The Activation: Euclid Oval (Lincoln Road Mall), 11 AM&ndash;8 PM</td></tr>
      <tr class="subcat"><td colspan="2">Install</td></tr>
      <tr class="item"><td><span class="item-name">Inbound Logistics &amp; Install</span><span class="item-desc">Truck, rigging hardware, 3-person install crew, 4&ndash;6 hr install window. Lead technician takes the supervisor role at load-in.</span></td><td>$4,800</td></tr>
      <tr class="subcat"><td colspan="2">On-Site Operations</td></tr>
      <tr class="item"><td><span class="item-name">On-Site Technicians (Extended to 8 PM)</span><span class="item-desc">Dedicated lead technician plus rotating second tech for rush windows and breaks, covering 11 AM&ndash;8 PM</span></td><td>$3,000</td></tr>
      <tr class="subcat"><td colspan="2">Strike &amp; Outbound</td></tr>
      <tr class="item"><td><span class="item-name">Same-Day Strike &amp; Outbound Freight</span><span class="item-desc">Complete de-installation, module breakdown, crated outbound freight, full site restoration</span></td><td>$3,300</td></tr>
      <tr class="sub-subtotal"><td><em>Subtotal &mdash; The Activation (Euclid Oval, Lincoln Road Mall)</em></td><td><em>$11,100</em></td></tr>

      <tr class="divider" style="color:var(--iwc-gold)"><td colspan="2">Services &mdash; Logistics to NYC (V4 Base, transport-only)</td></tr>
      <tr class="subcat"><td colspan="2">Storage &amp; Transport</td></tr>
      <tr class="item"><td><span class="item-name">Climate-Controlled Warehouse Hold</span><span class="item-desc">Secure climate-controlled storage at AGV Miami&rsquo;s NY shop between Miami strike and NYC delivery</span></td><td>$2,400</td></tr>
      <tr class="item"><td><span class="item-name">Inter-City Freight, Climate-Controlled Truck</span><span class="item-desc">Miami &rarr; AGV Miami NY shop with real-time GPS tracking, two-driver rotation, handoff documentation</span></td><td>$5,500</td></tr>
      <tr class="subcat"><td colspan="2">Cosmetic Touchup</td></tr>
      <tr class="item"><td><span class="item-name">Light Touchup at NYC Staging</span><span class="item-desc">Light cosmetic touchup pass at AGV Miami&rsquo;s NY shop following Miami strike, prior to flagship delivery: scuff/scratch repair, paint colour-match, lightbox edge cleanup, IVR/camera/printer functional re-test.</span></td><td>$3,000</td></tr>
      <tr class="subcat"><td colspan="2">Flagship Delivery</td></tr>
      <tr class="item"><td><span class="item-name">White-Glove Delivery to Gymshark NYC Flagship</span><span class="item-desc">Climate-controlled final-mile delivery from AGV Miami&rsquo;s NY shop to the Gymshark NYC flagship retail address. Scheduled overnight or pre-open.</span></td><td>$2,000</td></tr>
      <tr class="sub-subtotal" style="color:var(--iwc-gold)"><td><em>Subtotal &mdash; Logistics to NYC (Base)</em></td><td><em>$12,900</em></td></tr>

      <tr class="divider"><td colspan="2">Services &mdash; Project Management &amp; Client Services <span style="font-size:9px;font-weight:400;text-transform:none;letter-spacing:0.5px">&mdash; V4 lean engagement</span></td></tr>
      <tr class="subcat"><td colspan="2">Producer &amp; Client Services</td></tr>
      <tr class="item"><td><span class="item-name">Project Management Fee (V4 — lean)</span><span class="item-desc">Dedicated senior producer, weekly status reporting (vs daily), milestone tracking, vendor / venue liaison, COI + insurance coordination, post-event reconciliation. Async-first cadence appropriate for a single-event programme.</span></td><td>$6,000</td></tr>
      <tr class="sub-subtotal"><td><em>Subtotal &mdash; Project Management</em></td><td><em>$6,000</em></td></tr>

      <tr class="divider" style="color:var(--mercedes-teal)"><td colspan="2">Credits</td></tr>
      <tr class="subcat"><td colspan="2">Partner Credits</td></tr>
      <tr class="item"><td><span class="item-name">Preferred Partner Credit</span><span class="item-desc">$5,000 credit applied to bring the project into a more accessible budget range. Reflects AGV Miami&rsquo;s appreciation for Gymshark&rsquo;s business and the partnership opportunity.</span></td><td style="color:var(--mercedes-teal)">&minus;$5,000</td></tr>
      <tr class="sub-subtotal" style="color:var(--mercedes-teal)"><td><em>Subtotal &mdash; Credits</em></td><td><em>&minus;$5,000</em></td></tr>

      <tr class="divider" style="color:var(--iwc-gold)"><td colspan="2">Optional Add-On &mdash; NYC Local Install Team <span style="font-size:9px;font-weight:400;text-transform:none;letter-spacing:0.5px">&mdash; available, not in base</span></td></tr>
      <tr class="item"><td><span class="item-name">Local Install Team &mdash; 1 Lead + 2 Crew</span><span class="item-desc">On-site retail-environment install team for the Gymshark NYC flagship: 1 lead + 2 crew, 4-hour install window scheduled to avoid trading hours.</span></td><td>$2,800</td></tr>
      <tr class="item"><td><span class="item-name">In-Store Fixture Setup</span><span class="item-desc">Anchoring to retail-spec floor, electrical drop, IVR + camera + printer + lightbox bring-up, on-floor commissioning sign-off.</span></td><td>$1,600</td></tr>
      <tr class="sub-subtotal" style="color:var(--iwc-gold)"><td><em>Subtotal &mdash; Optional Local Install Add-On</em></td><td><em>$4,400</em></td></tr>
    </tbody>
    <tfoot>
      <tr><td style="color:var(--text-muted)">Gross Production Investment (Base)</td><td style="color:var(--text-muted)">$84,550</td></tr>
      <tr><td style="color:var(--mercedes-teal)">Less: Preferred Partner Credit</td><td style="color:var(--mercedes-teal)">&minus;$5,000</td></tr>
      <tr><td style="color:var(--iwc-gold)">Net V4.0 Production Investment (Base)</td><td style="color:var(--iwc-gold)">$79,550</td></tr>
      <tr><td>Net V4.0 with Optional Local Install Team</td><td>$83,950</td></tr>
    </tfoot>
  </table>

  <div class="engage-bar" data-a>
    <div class="engage-col" style="border-color:var(--iwc-gold)">
      <div class="tag" style="color:var(--iwc-gold)">Deposit &mdash; 60%</div>
      <div class="amt">$47,730</div>
      <div class="note">Due upon Client&rsquo;s written approval of this Scope of Work (Proposal execution). Triggers procurement, engineering, and the Euclid Oval / Lincoln Road BID permit application. Calculated on the V4.0 net base production investment of $79,550.</div>
    </div>
    <div class="engage-col" style="border-color:var(--mercedes-teal)">
      <div class="tag" style="color:var(--mercedes-teal)">Balance &mdash; 40%</div>
      <div class="amt">$31,820</div>
      <div class="note">Due five (5) business days prior to the Euclid Oval activation install (target Friday, July 10, 2026).</div>
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
      <p>All venue daily rental fees, permit issuance fees, site deposits, mandatory security, and certificate-of-insurance premiums are passed through at cost and invoiced separately. Producer will secure and administer permits on Client&rsquo;s behalf subject to a documented administrative fee.</p>
    </div>
    <div class="excl-item">
      <h4>Brand Ambassador &amp; Talent Staffing</h4>
      <p>On-site brand ambassadors, host talent, street teams, and social producers are excluded. Producer provides one technical operator per activation only. Talent procurement, scheduling, and fees are Client&rsquo;s responsibility.</p>
    </div>
    <div class="excl-item">
      <h4>Product &amp; Voucher Inventory</h4>
      <p>Gymshark product units (leggings, shorts, or other) to be distributed through the sliding door are supplied by Client. Voucher codes, e-commerce redemption infrastructure, and any back-end fulfilment technology are Client-side.</p>
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
          <tr><td>2.0</td><td>April 29, 2026</td><td>AGV Miami</td><td>Two-event sequence. <strong>Event 01 &mdash; Miami:</strong> Lincoln Road Mall street activation on June 27, 2026 (AGV Miami recommended Euclid Oval, 1100 block). <strong>Event 02 &mdash; New York:</strong> in-store fixture at Gymshark Bond St (11 Bond St, NY 10005), delivered by July 9, 2026 to anchor the July 11 product launch and a 4-week in-store run through August 6, 2026. Inter-city respray to NYC palette between events. <strong>Production:</strong> $124,150 gross less $5,000 Partner Credit = $119,150 net. <strong>Estimated total:</strong> $124,150&ndash;$129,150.</td><td><a href="/versions/v2-0" target="_blank" rel="noopener" style="color:var(--iwc-gold);text-decoration:underline">View v2.0 &rarr;</a></td></tr>
          <tr><td>3.0</td><td>April 29, 2026</td><td>AGV Miami</td><td>V3.0 narrows the programme to a <strong>single street activation</strong> at <strong>Euclid Oval, Lincoln Road Mall, Miami Beach</strong> on <strong>Friday, July 17, 2026</strong>. <strong>Production:</strong> $100,150 gross less $5,000 Partner Credit = $95,150 net.</td><td><a href="/versions/v3-0" target="_blank" rel="noopener" style="color:var(--iwc-gold);text-decoration:underline">View v3.0 &rarr;</a></td></tr>
          <tr><td><strong>4.0</strong></td><td><strong>May 8, 2026</strong></td><td>AGV Miami</td><td><strong>Current.</strong> V4.0 lands the V3.1 clarifications and itemises hardware against the Ominto deck. <strong>Yellow palette confirmed.</strong> <strong>Booth dimensions per Ominto V2:</strong> 164 &times; 94 cm body, 213 cm height + 20 cm lightbox header, 70 cm staff compartment + 94 cm guest compartment. <strong>Concealed motorised slot replaced with a true hinged back distribution door</strong> ($1,800, was $3,400). <strong>Tech itemised:</strong> 2&times; Motorola RMU2040 radios ($700), 2&times; Ring Mini Indoor cameras restored to dual per deck ($300), $1,500 thermal printer, 2&times; wall-mounted selfie stations ($900). <strong>Content Capture, Disclosure &amp; Wayfinding, Store Wayfinding Kit all removed</strong> per Client direction. <strong>Venue Dressing pared to stanchions only</strong> (qty TBC). <strong>Packaging held at 200 units.</strong> <strong>NYC base scope is transport-only</strong>; local install team (1 lead + 2 crew) available as a $4,400 add-on. <strong>11 AM&ndash;8 PM. PM at $6K. $5K Preferred Partner Credit retained.</strong> <strong>Production (Base):</strong> $84,550 gross less $5,000 Partner Credit = <strong>$79,550 net</strong>. With optional NYC install add-on: <strong>$83,950 net</strong>. Both well inside the $90K target. Payment: 60% deposit $47,730 on SoW approval; 40% balance $31,820 due Friday, July 10, 2026.</td><td><a href="/versions/v4-0" target="_blank" rel="noopener" style="color:var(--iwc-gold);text-decoration:underline">View v4.0 &rarr;</a></td></tr>
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
        By executing this agreement, Client acknowledges review and acceptance of this Proposal, including the complete Scope of Work, Venue, Plan, Investment Summary, Payment Terms, Exclusions, and Terms &amp; Conditions outlined herein. Client hereby authorises AGV Miami, LLC to proceed with engineering, procurement, and fabrication for the V4.0 Plan (Euclid Oval, Lincoln Road Mall, Friday, July 17, 2026, 11 AM&ndash;8 PM + Logistics to Gymshark NYC flagship). Execution constitutes authorisation to initiate production and triggers applicable payment terms as stated.
      </p>

      <div class="sig-summary">Plan: V4.0 &mdash; Euclid Oval, Lincoln Road Mall, Miami Beach (Friday, July 17, 2026, 11 AM&ndash;8 PM; Saturday, July 18, 2026 held as weather contingency) + Logistics to the Gymshark NYC flagship store by Thursday, July 23, 2026</div>
      <div class="sig-meta">Plus venue pass-through &bull; Payment Terms: 60/40 &bull; Document: GS-PHONEBOX-001</div>

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
