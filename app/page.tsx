"use client";

import { useEffect } from "react";
import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Agora Graphics",
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
      <span>Agora Graphics</span>
    </div>

    <div class="hero-meta">
      <div class="hero-meta-item">
        <div class="hero-meta-label">Cities</div>
        <div class="hero-meta-value">New York &amp; Miami</div>
      </div>
      <div class="hero-meta-item">
        <div class="hero-meta-label">Activation Dates</div>
        <div class="hero-meta-value">June 27 &amp; July 11, 2026</div>
      </div>
      <div class="hero-meta-item">
        <div class="hero-meta-label">Document</div>
        <div class="hero-meta-value">GS-PHONEBOX-001</div>
      </div>
      <div class="hero-meta-item">
        <div class="hero-meta-label">Version</div>
        <div class="hero-meta-value">Version 1.0 &mdash; April 17, 2026</div>
      </div>
    </div>

    <p class="hero-narrative">
      Agora Graphics is pleased to present this fabrication and production proposal for the Gymshark Phone Box experiential activation, developed in partnership with Ominto Studio&rsquo;s creative direction. This engagement delivers a custom-fabricated pink British phone box equipped with interactive photo, voucher, and call-response technology &mdash; engineered for a single-day pop-up across Miami and/or New York in July 2026. The proposal includes three execution options (Option 01 Miami-only, Option 02 NYC-only, or Option 03 Miami-first &rarr; NYC with a fully itemized reskin package), twelve recommended venues across both cities (NYC restricted to private properties per FIFA programming conflicts), and a complete investment summary scaled to the client&rsquo;s $120K&ndash;$125K production-investment target.
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
  <div class="attr">Agora Graphics &mdash; Building Brand Environments Since 2006</div>
</div>

<!-- OVERVIEW -->
<section id="overview" class="sec">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--mercedes-teal)"></div><span style="color:var(--mercedes-teal)">Project Overview</span></div>
    <h2>Two Cities. One Iconic Object.</h2>
    <p class="sec-desc">
      Gymshark&rsquo;s Phone Box activation reframes a classic British phone box as a single-day retail stunt: passers-by answer a ringing phone, navigate a pre-recorded quiz or live-call prompt, step inside a pink vinyl-lined interior, take a selfie or belfie, and walk away with a printed voucher and packaged product. The concept lives or dies on craft &mdash; the finish, the tech, the dwell time, the crowd around the object. This proposal scopes a production-ready build that can deploy in either New York or Miami on June 27 or July 11, 2026, with the option to land in both cities back-to-back via a mid-July rewrap.
    </p>
  </div>

  <div class="overview-grid" data-a>
    <div class="overview-card" style="border-color:var(--mercedes-teal)">
      <div class="ov-tag" style="color:var(--mercedes-teal)">Activation &mdash; New York</div>
      <h3>NYC Pop-Up</h3>
      <p><strong>Preferred Location:</strong> Rockefeller Center Plaza or Manhattan West (private properties)<br>
      <strong>Alt. Dates:</strong> June 27 or July 11, 2026<br>
      <strong>Hours:</strong> 10:00 AM &ndash; 6:00 PM<br>
      <strong>Load-In:</strong> 4:00 AM &ndash; 8:00 AM (private venue window)<br>
      <strong>Audience:</strong> Midtown office workers, luxury gym members, tourists<br>
      <strong>Note:</strong> FIFA programming excludes city-owned venues &mdash; private only</p>
    </div>
    <div class="overview-card" style="border-color:var(--f1-red)">
      <div class="ov-tag" style="color:var(--f1-red)">Activation &mdash; Miami</div>
      <h3>Miami Pop-Up</h3>
      <p><strong>Recommended Locations:</strong> Midtown Miami (client-preferred), Wynwood, Lincoln Road, Brickell City Centre, Muscle Beach, or Bayfront Park<br>
      <strong>Alt. Dates:</strong> June 27 or July 11, 2026<br>
      <strong>Hours:</strong> 11:00 AM &ndash; 7:00 PM<br>
      <strong>Load-In:</strong> 6:00 AM &ndash; 10:00 AM (venue-dependent)<br>
      <strong>Audience:</strong> Fitness culture, tourists, content creators, beach crowd<br>
      <strong>Duration:</strong> Single-day stunt with full content capture</p>
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

  <!-- PHASE 01: THE PHONE BOX -->
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
          <div><div class="name">Phone Box Structural Shell</div>
          <div class="desc">Custom scenic fabrication per Ominto V2 dimensions. Weatherproof exterior, marine-grade paint in Gymshark Pink (PMS match to #FF4BA2), modular two-piece construction for freight. Engineered for curb-level install on pavement/plaza surface with concealed ballasting.</div></div>
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
          <div><div class="name">Pink Vinyl Interior Lining</div>
          <div class="desc">Full four-wall pink vinyl wrap optimised as a photo/video backdrop. Matte finish to minimise flash bounce. Includes dimensional &ldquo;bum mirror&rdquo; with scripted messaging above and below.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$3,200</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Concealed Sliding Prize Door</div>
          <div class="desc">Motorised sliding door (direction TBC per engineering review), colour-matched to exterior with no visible handle on the public face &mdash; disguised for the &ldquo;magic reveal&rdquo; moment when a winning guest receives their product.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$3,400</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Interior Finishes</div>
          <div class="desc">Aluminium chequer-plate (five-bar pattern) flooring, circular dome overhead light, compact guest seat, and branded analogue phone with pink handset (shelf mount aligned to voucher printer placement).</div></div>
          <div class="price" style="color:var(--iwc-gold)">$2,750</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Engineering, Structural Calcs &amp; Shop Drawings</div>
          <div class="desc">Licensed structural calculations for outdoor sidewalk install, wind-load &amp; ballast plan, electrical schematics for lightbox and tech integration, CAD shop drawings for fabrication, and venue-compliance drawing package. Required for private-venue permit submissions and insurance COI issuance.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$4,000</div>
        </div>
      </div>
    </div>
  </div>

  <!-- PHASE 02: INTERACTIVE TECH -->
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
          <div class="desc">Working analogue phone wired to a production-grade IVR prize quiz with multi-branch scripting, licensed voice talent, keypad mapping (star = YES, hash = NO), and redundant win/lose logic. Scripting, voice talent, and QA supplied by Agora in collaboration with Gymshark comms team.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$5,500</div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Live Call / Walkie-Talkie Relay</div>
          <div class="desc">Dual-mode encrypted relay so Gymshark social producers can cut in live for hosted calls with studio-grade audio. Audio broadcast externally so crowd can overhear both sides during capture windows. Includes backup uplink and on-site producer headset.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$2,900</div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Ceiling-Mounted Dual Camera System</div>
          <div class="desc">Two ceiling-mounted 4K video+audio cameras with cloud-storage subscription and live-preview monitoring for the social team. &ldquo;Smile &mdash; you&rsquo;re on camera&rdquo; signage colour-matched to phone box pink for disclosure. Includes media-handoff package.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$4,500</div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Thermal Voucher Printer &amp; Shelf Mount</div>
          <div class="desc">Premium dual-speed thermal ticket printer wrapped in matching pink vinyl, shelf-mounted under the phone and aligned to the bottom of the sliding door. Voucher template designed by Gymshark; Agora handles printer procurement, firmware, redundant roll inventory, and wrap.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$2,800</div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Selfie &amp; Belfie Mobile Mounts</div>
          <div class="desc">Two wall-mounted mobile phone holders spray-painted pink with integrated motion-triggered ring-light inserts &mdash; one at face level, one positioned for the signature Gymshark &ldquo;belfie.&rdquo; Double-sided mounted to vinyl panels for clean removal.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$1,800</div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Content Capture &amp; Media Handoff Platform</div>
          <div class="desc">Dedicated cloud workspace for captured UGC, colour-corrected proxy exports, organised file-naming by activation day and guest interaction, and a post-event media-handoff package delivered to Gymshark&rsquo;s social team within 48 hours of strike.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$2,500</div>
        </div>
      </div>
    </div>
  </div>

  <!-- PHASE 03: BRANDING & SIGNAGE -->
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

        <div class="core-item" style="border-color:var(--f1-red)">
          <div><div class="name">Disclosure &amp; Wayfinding Signage</div>
          <div class="desc">&ldquo;Smile &mdash; you&rsquo;re on camera&rdquo; disclosure sign, queue management decals, and brand lockup callouts per venue requirements. Produced in brand palette.</div></div>
          <div class="price" style="color:var(--f1-red)">$950</div>
        </div>

        <div class="core-item" style="border-color:var(--f1-red)">
          <div><div class="name">Venue Dressing Kit</div>
          <div class="desc">Portable A-frame sidewalk signage, branded stanchions, and pavement decals to extend phone box footprint and direct foot traffic. Reusable across both activations in Option 3.</div></div>
          <div class="price" style="color:var(--f1-red)">$1,750</div>
        </div>

        <div class="core-item" style="border-color:var(--f1-red)">
          <div><div class="name">Daily Consumables &amp; Spares Kit</div>
          <div class="desc">Per-activation kit: voucher paper rolls (primary + backup), cleaning supplies, sanitisation wipes, touch-up paint, vinyl repair patches, spare hardware, and pink gaffer tape. Sized for full-day operation with margin. Essential for uninterrupted live run.</div></div>
          <div class="price" style="color:var(--f1-red)">$2,500</div>
        </div>
      </div>
    </div>
  </div>

  <!-- PHASE 04: LOGISTICS & INSTALLATION -->
  <div class="phase" data-a>
    <div class="phase-head" onclick="togglePhase(this)" style="border-left:4px solid var(--white)">
      <div class="phase-num" style="color:var(--white)">04</div>
      <div class="phase-info">
        <h3>Logistics, Install &amp; Strike</h3>
        <div class="sub">Transport, permit-window install, staffing, strike, and storage between activations</div>
      </div>
      <div class="phase-toggle" style="border-color:var(--white);color:var(--white)">+</div>
    </div>
    <div class="phase-body">
      <div class="phase-inner" style="border-left:4px solid var(--white)">
        <p class="phase-narrative">
          Single-truck freight from the Agora Bohemia, NY fabrication facility. Each activation includes a 2-person install crew, 1 on-site technician during operating hours, and same-day strike. Option 3 adds a climate-controlled warehouse hold and a repaint/rewrap window between activations.
        </p>

        <div class="core-label">Core Deliverables</div>

        <div class="core-item">
          <div><div class="name">Inbound Logistics &amp; Install (Per Activation)</div>
          <div class="desc">Truck, rigging hardware, 3-person install crew, venue load-in coordination, module assembly, electrical hookup, permit-window supervisor, final finishing, and pre-open inspection. 4&ndash;6 hour install window.</div></div>
          <div class="price">$5,800</div>
        </div>

        <div class="core-item">
          <div><div class="name">On-Site Technicians (Operating Hours)</div>
          <div class="desc">Dedicated lead technician plus rotating second tech for rush windows and breaks. Covers voucher roll, camera system, IVR prompts, minor scenic touch-ups, live-call relay handoff with Gymshark social team, and pre-open soundcheck / post-close shutdown.</div></div>
          <div class="price">$2,800</div>
        </div>

        <div class="core-item">
          <div><div class="name">Same-Day Strike &amp; Outbound Freight (Per Activation)</div>
          <div class="desc">Complete de-installation, module breakdown, crated outbound freight within venue&rsquo;s contracted strike window. Site walk-through with venue operations and full restoration to original condition.</div></div>
          <div class="price">$3,300</div>
        </div>

        <div class="core-label" style="color:var(--iwc-gold)">Option 03 Add-On &mdash; Inter-City Reskin Package</div>
        <p class="phase-narrative" style="margin-top:4px;font-style:italic">The reskin package is activated only when Option 3 (Miami first, NYC second) is selected. Each sub-line is itemized and invoiced only if Option 3 is executed.</p>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Climate-Controlled Warehouse Hold (Miami &rarr; NYC)</div>
          <div class="desc">Secure climate-controlled storage of the full phone box assembly and tech stack for the ~10-day window between Miami strike and NYC install. Includes rigging, inventory, and insurance coverage during hold.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$2,900</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Inter-City Freight (Miami &rarr; NYC, Climate Truck)</div>
          <div class="desc">Dedicated climate-controlled truck from the Miami strike site to the Agora NYC staging facility for reskin, with real-time GPS tracking, two-driver rotation, and driver handoff documentation.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$5,500</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Exterior Vinyl Refresh (NYC Reskin)</div>
          <div class="desc">Removal of Miami-facing exterior vinyl and application of NYC-specific campaign wrap. Includes marine-grade clear over-laminate, on-site seam finishing, and touch-up colour matching to Gymshark Pink #FF4BA2.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$5,400</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Interior Vinyl Refresh (NYC Reskin)</div>
          <div class="desc">Removal of Miami-facing interior pink vinyl + &ldquo;bum mirror&rdquo; messaging and application of NYC-specific interior graphics. Seam finishing, touch-up paint, and updated dimensional mirror messaging included.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$3,500</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Lightbox Graphic Refresh (NYC Reskin)</div>
          <div class="desc">Reprint and reinstallation of the four translucent lightbox faces with NYC-specific wordmark and campaign treatment. Miami lightbox faces archived in climate-controlled storage for future reuse.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$2,400</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">NYC Site Re-Survey &amp; Local Permit Coordination</div>
          <div class="desc">On-the-ground NYC site re-survey at the chosen private venue (ballast, access, electrical, egress), local permit liaison with the venue operator, updated insurance COI issuance for the second city, and final site-readiness sign-off before NYC truck-out.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$2,500</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Pre-Deployment QC &amp; Refinishing</div>
          <div class="desc">Full reassembly inspection, touch-up paint, electrical recheck, IVR + camera + printer systems re-bench-test at the NYC staging facility, updated voice-prompt QC, and final sign-off prior to NYC truck-out.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$2,800</div>
        </div>

        <div class="reskin-subtotal" style="margin-top:10px;padding:12px 16px;border:1px solid var(--iwc-gold);border-radius:6px;display:flex;justify-content:space-between;align-items:center;background:rgba(212,175,55,0.06)">
          <span style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--iwc-gold);font-weight:700">Reskin Package Subtotal &mdash; Option 03 Only</span>
          <span style="font-family:var(--serif);font-size:18px;color:var(--iwc-gold);font-weight:700">$25,000</span>
        </div>
      </div>
    </div>
  </div>

  <!-- PHASE 05: PROJECT MANAGEMENT -->
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
          A dedicated Agora producer and client-services coverage for the full engagement &mdash; kickoff through post-event reconciliation. Includes weekly status calls, cross-agency coordination with Ominto Studio and Gymshark stakeholders, vendor and venue relationship management, budget tracking, Change Order administration, and insurance/COI coordination.
        </p>

        <div class="core-label" style="color:var(--mercedes-teal)">Core Deliverables</div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Project Management Fee (Full Engagement)</div>
          <div class="desc">Dedicated senior producer, weekly status reporting, milestone tracking, Change Order administration, vendor / venue liaison, COI + insurance coordination, and post-event reconciliation. Covers the full engagement window from contract execution through project closeout.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$12,000</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- LOCATIONS -->
<section id="locations" class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Location Options</span></div>
    <h2>Twelve Venues. Two Cities.</h2>
    <p class="sec-desc">
      Six vetted New York venues and six Miami-area venues &mdash; spanning plazas, art districts, waterfront parks, retail corridors, and beachfronts &mdash; all suitable for a single-day Phone Box deployment. Daily venue ranges are pre-permit market estimates based on published rates and comparable 2024&ndash;2025 activation precedents; final figures are confirmed at permit issuance and vary with footprint, amenities, seasonality, and negotiation. Venue fees are passed through at cost and are <em>not</em> included in the production investment unless explicitly rolled into a package.
    </p>
  </div>

  <!-- NYC SUBSECTION -->
  <div class="loc-city-section" data-a>
    <div class="loc-city-heading">
      <div class="sec-eye"><div class="bar" style="background:var(--mercedes-teal)"></div><span style="color:var(--mercedes-teal)">New York &bull; Six Venues &bull; Private-Only</span></div>
      <h3>NYC Shortlist</h3>
      <p>All NYC candidates are <strong>privately owned &amp; independently managed</strong> &mdash; city-owned parks, plazas, and DOT-managed spaces are unavailable during the FIFA World Cup programming window. The shortlist below covers six private campuses and waterfronts that can issue brand-first approvals independent of the city permitting process.</p>
    </div>

    <div class="loc-grid">

      <!-- NYC: ROCKEFELLER CENTER -->
      <div class="loc-card" style="border-color:var(--mercedes-teal)">
        <div class="loc-hero loc-hero-rockefeller">
          <div class="loc-city" style="color:var(--mercedes-teal)">New York</div>
          <div class="loc-title">Rockefeller Center Plaza</div>
          <div class="loc-sub">Midtown &bull; Tishman Speyer (private)</div>
        </div>
        <div class="loc-body">
          <div class="loc-price">Est. $18,000 &ndash; $32,000 / day</div>
          <p>Privately owned and operated by Tishman Speyer. Iconic Channel Gardens, rink-level plaza, and Top of the Rock frontage deliver globally-recognised content backdrops and premium Midtown foot traffic from the surrounding office towers and luxury gym memberships.</p>
          <ul>
            <li>Private ownership &mdash; brand-first approvals</li>
            <li>Globally iconic backdrop for content</li>
            <li>Dense Midtown lunch + after-work traffic</li>
            <li>On-site facilities, power, and security infrastructure</li>
          </ul>
          <a href="https://www.rockefellercenter.com/events-and-experiences/" class="loc-link" target="_blank" rel="noopener">Rockefeller Center Events</a>
        </div>
      </div>

      <!-- NYC: MANHATTAN WEST -->
      <div class="loc-card" style="border-color:var(--mercedes-teal)">
        <div class="loc-hero loc-hero-manwest">
          <div class="loc-city" style="color:var(--mercedes-teal)">New York</div>
          <div class="loc-title">Manhattan West Plaza</div>
          <div class="loc-sub">Hudson Yards West &bull; Brookfield Properties (private)</div>
        </div>
        <div class="loc-body">
          <div class="loc-price">Est. $10,000 &ndash; $18,000 / day</div>
          <p>Privately owned open-air plaza operated by Brookfield Properties on the 9th Avenue / 33rd Street block. Modern architectural backdrop, glass-walled lobbies, and a built-in event infrastructure designed for branded activations. Direct access from Moynihan Train Hall.</p>
          <ul>
            <li>Private plaza &mdash; streamlined permitting</li>
            <li>Event-ready infrastructure (power, data, security)</li>
            <li>Adjacent to Hudson Yards &amp; High Line foot traffic</li>
            <li>Moynihan / Penn commuter volume</li>
          </ul>
          <a href="https://manhattanwestnyc.com/events/" class="loc-link" target="_blank" rel="noopener">Manhattan West Events</a>
        </div>
      </div>

      <!-- NYC: SEAPORT DISTRICT -->
      <div class="loc-card" style="border-color:var(--mercedes-teal)">
        <div class="loc-hero loc-hero-seaport">
          <div class="loc-city" style="color:var(--mercedes-teal)">New York</div>
          <div class="loc-title">Seaport District NYC</div>
          <div class="loc-sub">Lower Manhattan &bull; Howard Hughes Corp. (private)</div>
        </div>
        <div class="loc-body">
          <div class="loc-price">Est. $8,000 &ndash; $15,000 / day</div>
          <p>Privately master-planned district operated by Howard Hughes Corporation. Cobblestone streets, restored Fulton Market Building, Pier 17 rooftop, and East River waterfront. Strong precedent for brand pop-ups and live programming &mdash; tourist and FiDi weekday audience.</p>
          <ul>
            <li>Private district &mdash; single point of approval</li>
            <li>Cobblestone + waterfront content textures</li>
            <li>Pier 17 rooftop as secondary activation surface</li>
            <li>Tourist + finance weekday + weekend mix</li>
          </ul>
          <a href="https://www.theseaport.nyc/events" class="loc-link" target="_blank" rel="noopener">Seaport District Events</a>
        </div>
      </div>

      <!-- NYC: HUDSON YARDS -->
      <div class="loc-card" style="border-color:var(--mercedes-teal)">
        <div class="loc-hero loc-hero-hudson">
          <div class="loc-city" style="color:var(--mercedes-teal)">New York</div>
          <div class="loc-title">Hudson Yards Public Square</div>
          <div class="loc-sub">West Side &bull; Related Companies (private)</div>
        </div>
        <div class="loc-body">
          <div class="loc-price">Est. $12,000 &ndash; $22,000 / day</div>
          <p>Privately owned public square at the base of the Vessel and The Shops &amp; Restaurants. Operated by Related Companies / Oxford Properties with dedicated events infrastructure. High retail-adjacent traffic and a strong fitness-oriented audience via Equinox Hudson Yards and SoulCycle.</p>
          <ul>
            <li>Private property &mdash; expedited brand approvals</li>
            <li>Retail-adjacent, fitness-dense audience</li>
            <li>7 train, High Line, Vessel content synergy</li>
            <li>Event operations team on-site</li>
          </ul>
          <a href="https://www.hudsonyardsnewyork.com/discover/events" class="loc-link" target="_blank" rel="noopener">Hudson Yards Events</a>
        </div>
      </div>

      <!-- NYC: INDUSTRY CITY -->
      <div class="loc-card" style="border-color:var(--mercedes-teal)">
        <div class="loc-hero loc-hero-industry">
          <div class="loc-city" style="color:var(--mercedes-teal)">New York</div>
          <div class="loc-title">Industry City</div>
          <div class="loc-sub">Sunset Park, Brooklyn &bull; Jamestown (private)</div>
        </div>
        <div class="loc-body">
          <div class="loc-price">Est. $5,000 &ndash; $10,000 / day</div>
          <p>Privately owned 35-acre innovation and retail campus operated by Jamestown. Outdoor courtyards, turf lawns, and waterfront access provide a flexible canvas for branded activations. Creative-class Brooklyn audience and a strong DTC/lifestyle brand precedent.</p>
          <ul>
            <li>Private campus &mdash; flexible brand partnerships</li>
            <li>Creative-class Brooklyn audience</li>
            <li>Indoor + outdoor fallback footprints</li>
            <li>Strong precedent for DTC/lifestyle pop-ups</li>
          </ul>
          <a href="https://industrycity.com/events/" class="loc-link" target="_blank" rel="noopener">Industry City Events</a>
        </div>
      </div>

      <!-- NYC: DOMINO PARK -->
      <div class="loc-card" style="border-color:var(--mercedes-teal)">
        <div class="loc-hero loc-hero-domino">
          <div class="loc-city" style="color:var(--mercedes-teal)">New York</div>
          <div class="loc-title">Domino Park</div>
          <div class="loc-sub">Williamsburg &bull; Two Trees Management (private)</div>
        </div>
        <div class="loc-body">
          <div class="loc-price">Est. $4,000 &ndash; $8,000 / day</div>
          <p>Privately owned and operated waterfront park at the former Domino Sugar Refinery &mdash; fitness-coded audience (dedicated beach-volleyball courts, sunset joggers) with a skyline view. Managed by Two Trees Management with favourable brand partnership terms.</p>
          <ul>
            <li>Private ownership &mdash; faster brand approvals</li>
            <li>Built-in fitness/wellness audience</li>
            <li>Lowest venue fee on NYC shortlist</li>
            <li>Waterfront + Manhattan skyline backdrop</li>
          </ul>
          <a href="https://www.dominopark.com/" class="loc-link" target="_blank" rel="noopener">Domino Park Official</a>
        </div>
      </div>

    </div>
  </div>

  <!-- MIAMI SUBSECTION -->
  <div class="loc-city-section" data-a>
    <div class="loc-city-heading">
      <div class="sec-eye"><div class="bar" style="background:var(--f1-red)"></div><span style="color:var(--f1-red)">Miami &bull; Six Venues</span></div>
      <h3>Miami Shortlist</h3>
      <p>The client&rsquo;s named Miami candidates plus Agora&rsquo;s recommended additions &mdash; from beachfront fitness culture to private luxury plazas and waterfront downtown parks.</p>
    </div>

    <div class="loc-grid">

      <!-- MIAMI: WYNWOOD -->
      <div class="loc-card" style="border-color:var(--f1-red)">
        <div class="loc-hero loc-hero-wynwood">
          <div class="loc-city" style="color:var(--f1-red)">Miami</div>
          <div class="loc-title">Wynwood Walls &amp; Art District</div>
          <div class="loc-sub">NW 2nd Ave corridor</div>
        </div>
        <div class="loc-body">
          <div class="loc-price">Est. $6,000 &ndash; $12,000 / day</div>
          <p>Globally recognised street-art district with its own pre-assembled content audience. Private management (Goldman Properties / Wynwood BID) allows for controlled activations. High concentration of creative agencies, cafes, and drop-in tourist traffic.</p>
          <ul>
            <li>Built-in photo-first visitor base</li>
            <li>Colour-saturated backdrop complements pink phone box</li>
            <li>Private venue &mdash; faster permitting turnaround</li>
            <li>Evening crowd extends activation window</li>
          </ul>
          <a href="https://thewynwoodwalls.com/" class="loc-link" target="_blank" rel="noopener">Wynwood Walls Official</a>
        </div>
      </div>

      <!-- MIAMI: LINCOLN ROAD -->
      <div class="loc-card" style="border-color:var(--f1-red)">
        <div class="loc-hero loc-hero-lincoln">
          <div class="loc-city" style="color:var(--f1-red)">Miami</div>
          <div class="loc-title">Lincoln Road Mall</div>
          <div class="loc-sub">Miami Beach</div>
        </div>
        <div class="loc-body">
          <div class="loc-price">Est. $5,000 &ndash; $10,000 / day</div>
          <p>Pedestrian-only outdoor shopping district with recent streetscape regeneration. Bold palm-lined aesthetic with steady 7-day foot traffic of tourists, residents, and beach-goers. Permitting via City of Miami Beach &amp; Lincoln Road Business Improvement District.</p>
          <ul>
            <li>Car-free corridor &mdash; safe for street-level activation</li>
            <li>High dwell time, shopping-mindset audience</li>
            <li>Adjacent cafes and retail enable spillover</li>
            <li>Precedent for branded pop-ups at scale</li>
          </ul>
          <a href="https://lincolnroad.com/" class="loc-link" target="_blank" rel="noopener">Lincoln Road BID</a>
        </div>
      </div>

      <!-- MIAMI: MUSCLE BEACH -->
      <div class="loc-card" style="border-color:var(--f1-red)">
        <div class="loc-hero loc-hero-muscle">
          <div class="loc-city" style="color:var(--f1-red)">Miami</div>
          <div class="loc-title">Muscle Beach / Lummus Park</div>
          <div class="loc-sub">South Beach beachfront</div>
        </div>
        <div class="loc-body">
          <div class="loc-price">Est. $2,500 &ndash; $5,000 / day</div>
          <p>Iconic open-air gym on Ocean Drive &mdash; arguably the most fitness-coded patch of sidewalk in the Americas. Lowest permit tier of the Miami shortlist, but adds logistical complexity (sand, sun exposure, tourist density). Permit via Miami Beach Parks &amp; Recreation.</p>
          <ul>
            <li>Unmatched fitness-culture association</li>
            <li>High ambient traffic &mdash; tourists, joggers, influencers</li>
            <li>Lowest venue fee on the Miami shortlist</li>
            <li>Strong content environment: ocean, palms, golden hour</li>
          </ul>
          <a href="https://www.miamibeachfl.gov/city-hall/parks-and-recreation/parks-facilities-directory/lummus-park/" class="loc-link" target="_blank" rel="noopener">Miami Beach Parks &mdash; Lummus</a>
        </div>
      </div>

      <!-- MIAMI: MIDTOWN -->
      <div class="loc-card" style="border-color:var(--f1-red)">
        <div class="loc-hero loc-hero-midtown">
          <div class="loc-city" style="color:var(--f1-red)">Miami</div>
          <div class="loc-title">Midtown Miami</div>
          <div class="loc-sub">Between Design District &amp; Wynwood &bull; Client-preferred</div>
        </div>
        <div class="loc-body">
          <div class="loc-price">Est. $5,000 &ndash; $10,000 / day</div>
          <p>Strategic position between the Design District and Wynwood &mdash; dense with luxury fitness operators (UFC Gym, Barry&rsquo;s Bootcamp, Elevation, Anatomy) and the target demographic that over-indexes on Gymshark. Private-plaza footprints (Midtown Miami, Shops at Midtown) enable brand-first approvals and evening extension.</p>
          <ul>
            <li>Direct audience overlap with luxury gym membership base</li>
            <li>Private property &mdash; faster permitting, brand-friendly</li>
            <li>Walkable to Design District &amp; Wynwood for content spill</li>
            <li>Evening bar/restaurant traffic extends activation window</li>
          </ul>
          <a href="https://www.midtownmiami.com/" class="loc-link" target="_blank" rel="noopener">Midtown Miami Official</a>
        </div>
      </div>

      <!-- MIAMI: BAYFRONT / BISCAYNE -->
      <div class="loc-card" style="border-color:var(--f1-red)">
        <div class="loc-hero loc-hero-bayfront">
          <div class="loc-city" style="color:var(--f1-red)">Miami</div>
          <div class="loc-title">Bayfront Park</div>
          <div class="loc-sub">Downtown / Biscayne Boulevard</div>
        </div>
        <div class="loc-body">
          <div class="loc-price">Est. $4,000 &ndash; $8,000 / day</div>
          <p>Major downtown activation park with established infrastructure for branded events (Ultra, F1 Fan Zones, concerts). Managed by the Bayfront Park Management Trust &mdash; experienced permitting body with fast-track processes for qualified clients. Recommended interpretation of the client&rsquo;s &ldquo;Biscayne Park&rdquo; reference.</p>
          <ul>
            <li>Event-experienced venue team</li>
            <li>Existing power, water, and security infrastructure</li>
            <li>Waterfront visibility from Biscayne Blvd</li>
            <li>Strong cruise-passenger and tourist flow</li>
          </ul>
          <a href="https://www.bayfrontparkmiami.com/" class="loc-link" target="_blank" rel="noopener">Bayfront Park Management Trust</a>
        </div>
      </div>

      <!-- MIAMI: BRICKELL CITY CENTRE -->
      <div class="loc-card" style="border-color:var(--f1-red)">
        <div class="loc-hero loc-hero-brickell">
          <div class="loc-city" style="color:var(--f1-red)">Miami</div>
          <div class="loc-title">Brickell City Centre</div>
          <div class="loc-sub">Luxury retail &amp; private plaza &bull; Swire Properties</div>
        </div>
        <div class="loc-body">
          <div class="loc-price">Est. $6,000 &ndash; $12,000 / day</div>
          <p>Miami&rsquo;s financial and luxury-residential core, narrowed to Swire Properties&rsquo; privately-managed Brickell City Centre campus. High-disposable-income audience, dense evening bar/restaurant traffic, and climate-controlled plaza options under the Climate Ribbon canopy. Private venue management enables brand-first approvals and fast turnarounds.</p>
          <ul>
            <li>Affluent, fitness-active local audience</li>
            <li>Evening traffic extends activation window</li>
            <li>Climate Ribbon canopy &mdash; weather-protected options</li>
            <li>Single venue manager &mdash; streamlined approvals</li>
          </ul>
          <a href="https://www.brickellcitycentre.com/" class="loc-link" target="_blank" rel="noopener">Brickell City Centre Official</a>
        </div>
      </div>

    </div>
  </div>

  <div class="loc-footnote" data-a>
    <strong>Note on pricing &amp; imagery:</strong> Daily ranges are pre-permit market estimates based on published rates and comparable 2024&ndash;2025 activation precedents. Actual venue fees depend on footprint, amenities (power, water, security), seasonality, dates, and negotiation, and are billed separately from the production investment and passed through at cost. NYC candidates are restricted to privately owned &amp; independently managed properties per FIFA programming conflicts with city-owned venues; private venue fees may exceed public venue comparables. Firm site-scouting photography and brand-first letters of intent from each private operator will be secured by Agora Graphics within 5 business days of a signed letter of intent.
  </div>
</section>

<!-- PRODUCTION JOURNEY -->
<section id="journey" class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--mercedes-teal)"></div><span style="color:var(--mercedes-teal)">Your Production Journey</span></div>
    <h2>Eight Phases. One Seamless Deployment.</h2>
    <p class="sec-desc">
      Every Agora engagement follows a structured, milestone-gated production lifecycle &mdash; from creative alignment through post-event strike. Each phase builds on the last with defined deliverables and approval checkpoints, scaled here for a 10-week lead time into a July 2026 activation.
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
      <p>Structural engineering calculations, shop drawings, electrical schematics for lightbox and tech, ballast plan for outdoor install, and venue compliance documentation.</p>
      <div class="step-date">May 4 &ndash; May 15</div>
    </div>
    <div class="journey-step" style="border-color:var(--iwc-gold)">
      <div class="step-num" style="color:var(--iwc-gold)">04</div>
      <h4>Fabrication &amp; Print Production</h4>
      <p>Custom scenic builds, precision CNC milling, millwork assembly, large-format vinyl and lightbox output, packaging production, and multi-stage quality control inspections.</p>
      <div class="step-date">May 18 &ndash; June 15</div>
    </div>
    <div class="journey-step" style="border-color:var(--mercedes-teal)">
      <div class="step-num" style="color:var(--mercedes-teal)">05</div>
      <h4>Logistics &amp; Pre-Deployment</h4>
      <p>Precision crating, climate-protected transport from our Bohemia, NY fabrication facility to the activation city, and overnight delivery coordination with venue management.</p>
      <div class="step-date">June 22 &ndash; June 26</div>
    </div>
    <div class="journey-step" style="border-color:var(--mercedes-teal)">
      <div class="step-num" style="color:var(--mercedes-teal)">06</div>
      <h4>Installation &amp; On-Site Build</h4>
      <p>Permit-window install at the selected venue, scenic assembly, tech integration, leveling, graphic application, and final scenic finishing.</p>
      <div class="step-date">June 27 &amp;/or July 11</div>
    </div>
    <div class="journey-step" style="border-color:var(--mercedes-teal)">
      <div class="step-num" style="color:var(--mercedes-teal)">07</div>
      <h4>Activation &amp; Live Operations</h4>
      <p>Full-day public operation with on-site technician coverage, voucher roll management, camera system monitoring, and live-call coordination with the Gymshark social team.</p>
      <div class="step-date">June 27 &amp;/or July 11</div>
    </div>
    <div class="journey-step" style="border-color:var(--mercedes-teal)">
      <div class="step-num" style="color:var(--mercedes-teal)">08</div>
      <h4>Strike &amp; Project Closeout</h4>
      <p>Complete de-installation, asset removal, and full site restoration to original condition. Option 3: warehouse hold + rewrap between cities. Post-event reconciliation, final documentation, and project archive.</p>
      <div class="step-date">July 11 &ndash; July 18</div>
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
      <tr><td>Scope Approval</td><td>Option selected, city/cities confirmed, production authorisation issued</td><td>April 18</td></tr>
      <tr><td>Deposit Received</td><td>60% project deposit &mdash; due upon Scope of Work approval; triggers procurement, engineering, and venue permit applications</td><td>April 22</td></tr>
      <tr><td>Venue Permits Applied</td><td>Permit applications filed for selected city / cities; deposit letters issued</td><td>April 25</td></tr>
      <tr><td>Creative Lock</td><td>Final artwork, voucher template, IVR scripting, and packaging dielines delivered to Agora</td><td>May 1</td></tr>
      <tr><td>Engineering &amp; Shop Drawings</td><td>Structural, electrical, and ballast drawings issued for client review</td><td>May 4 &ndash; 15</td></tr>
      <tr><td>Scenic Fabrication</td><td>Phone box shell build, paint, finish, lightbox assembly</td><td>May 18 &ndash; June 15</td></tr>
      <tr><td>Print &amp; Graphics Production</td><td>Exterior vinyl, interior vinyl, lightbox graphics, disclosure + wayfinding signage</td><td>May 25 &ndash; June 15</td></tr>
      <tr><td>Tech Bench Test</td><td>Full IVR + voucher printer + camera system rehearsed end-to-end at Agora facility</td><td>June 15 &ndash; 22</td></tr>
      <tr><td>Balance Payment</td><td>Remaining 40% balance due &mdash; five (5) business days prior to first activation</td><td>June 22</td></tr>
      <tr><td>Transit to Activation 1</td><td>Truck loaded, transported to chosen city (Miami or NYC)</td><td>June 24 &ndash; 26</td></tr>
      <tr><td>Activation 1 Install &amp; Run</td><td>Pre-dawn install, 8&ndash;10 hr operational window, same-day strike</td><td>June 27</td></tr>
      <tr><td>Rewrap Window (Option 3)</td><td>Climate-controlled hold + rewrap / repaint between cities</td><td>June 28 &ndash; July 9</td></tr>
      <tr><td>Activation 2 Install &amp; Run (Option 3 / Alt Date)</td><td>Second-city install, operational run, same-day strike</td><td>July 11</td></tr>
      <tr><td>Strike &amp; Return Freight</td><td>Final de-installation and return transport to Agora facility</td><td>July 11 &ndash; 13</td></tr>
      <tr><td>Project Closeout</td><td>Post-event reconciliation, captured media handoff, closeout deliverables</td><td>July 18</td></tr>
    </tbody>
  </table>
</section>

<!-- WHY AGORA -->
<section class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Production Capabilities</span></div>
    <h2>Why Agora Graphics</h2>
    <p class="sec-desc">
      Since 2006, Agora Graphics has delivered scenic fabrication and experiential production for leading fashion, fitness, and lifestyle brands. Our vertically integrated operation &mdash; in-house engineering, CNC fabrication, large-format print, and field installation &mdash; enables uncompromising quality control from concept through strike, with the agility to execute single-day stunts in demanding venue environments.
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
    <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Package Options</span></div>
    <h2>Three Ways to Activate</h2>
    <p class="sec-desc">
      Three execution paths sized against Gymshark&rsquo;s $120K&ndash;$125K production-investment target for the recommended configuration. All three include the full Phone Box object, engineering &amp; shop drawings, the enhanced interactive tech + content capture platform, disclosure signage, venue dressing kit, consumables spares, and a dedicated project manager. Option 3 is the recommended configuration: it lands two cities back-to-back via a fully itemized reskin package and creates a natural content arc (Miami beach energy &rarr; NYC downtown energy) over a 14-day public window.
    </p>
  </div>

  <div class="pkg-grid" data-a>

    <!-- OPTION 1: MIAMI ONLY -->
    <div class="pkg-card" style="border-color:var(--f1-red)">
      <div class="pkg-tag" style="color:var(--f1-red)">Option 01</div>
      <h3>Miami Only</h3>
      <div class="pkg-date">June 27 <strong>or</strong> July 11, 2026</div>
      <div class="pkg-venue">Recommended: Midtown Miami (client-preferred) or Wynwood</div>
      <ul class="pkg-list">
        <li>Complete Phone Box fabrication + engineering package</li>
        <li>Enhanced interactive tech + content capture platform ($20K)</li>
        <li>Signage, venue dressing kit, and consumables spares</li>
        <li>Miami freight, 3-person install, dual-tech ops, and strike</li>
        <li>Project management &amp; client services ($12K)</li>
        <li>1 activation day</li>
      </ul>
      <div class="pkg-price">
        <div class="pkg-prod-label">Production Investment</div>
        <div class="pkg-amount" style="color:var(--f1-red)">$86,650</div>
        <div class="pkg-venue-line">+ Miami venue fee (est. $2.5K &ndash; $15K)</div>
        <div class="pkg-total">Total All-In (est.)<strong>$89,150 &ndash; $101,650</strong></div>
      </div>
    </div>

    <!-- OPTION 2: NYC ONLY -->
    <div class="pkg-card" style="border-color:var(--mercedes-teal)">
      <div class="pkg-tag" style="color:var(--mercedes-teal)">Option 02</div>
      <h3>NYC Only</h3>
      <div class="pkg-date">June 27 <strong>or</strong> July 11, 2026</div>
      <div class="pkg-venue">Private only: Rockefeller Center, Manhattan West, Seaport, Hudson Yards, Industry City, or Domino Park</div>
      <ul class="pkg-list">
        <li>Complete Phone Box fabrication + engineering package</li>
        <li>Enhanced interactive tech + content capture platform ($20K)</li>
        <li>Signage, venue dressing kit, and consumables spares</li>
        <li>NYC freight, 3-person install, dual-tech ops, and strike</li>
        <li>Project management &amp; client services ($12K)</li>
        <li>1 activation day</li>
      </ul>
      <div class="pkg-price">
        <div class="pkg-prod-label">Production Investment</div>
        <div class="pkg-amount" style="color:var(--mercedes-teal)">$86,650</div>
        <div class="pkg-venue-line">+ NYC private venue fee (est. $4K &ndash; $32K)</div>
        <div class="pkg-total">Total All-In (est.)<strong>$90,650 &ndash; $118,650</strong></div>
      </div>
    </div>

    <!-- OPTION 3: MIAMI FIRST → NYC (DUAL-CITY WITH RESKIN) -->
    <div class="pkg-card recommended" style="border-color:var(--iwc-gold)">
      <div class="pkg-ribbon" style="background:var(--iwc-gold);color:var(--dark)">Recommended &mdash; Full Budget</div>
      <div class="pkg-tag" style="color:var(--iwc-gold)">Option 03</div>
      <h3>Miami &rarr; NYC (Reskin)</h3>
      <div class="pkg-date">Miami June 27 &rarr; NYC July 11, 2026</div>
      <div class="pkg-venue">Two venues, one object, one content arc</div>
      <ul class="pkg-list">
        <li>Everything in Options 1 &amp; 2</li>
        <li><strong>Full inter-city reskin package</strong> ($25,000 &mdash; 7 itemized sub-lines in Investment Summary)</li>
        <li>Climate-controlled warehouse hold + inter-city freight</li>
        <li>Exterior + interior + lightbox NYC reskin</li>
        <li>NYC site re-survey &amp; local permit coordination</li>
        <li>Second-city install, run, and strike &bull; 14-day public arc</li>
      </ul>
      <div class="pkg-price">
        <div class="pkg-prod-label">Production Investment</div>
        <div class="pkg-amount" style="color:var(--iwc-gold)">$123,550</div>
        <div class="pkg-venue-line">+ Miami + NYC private venue fees (est. $6.5K &ndash; $47K combined)</div>
        <div class="pkg-total">Total All-In (est.)<strong>$130,050 &ndash; $170,550</strong></div>
      </div>
    </div>

  </div>

  <!-- COMPONENT SUMMARY — PRICING HIERARCHY / ITEMIZATION -->
  <div class="pkg-component-summary" data-a style="margin-top:40px">
    <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Component Pricing Hierarchy</span></div>
    <h3 style="font-size:22px;margin:8px 0 16px">What&rsquo;s Included in Each Option</h3>
    <p class="sec-desc" style="margin-bottom:20px">Side-by-side itemization of the components that build up each option&rsquo;s production investment. The shared base &mdash; phone box, tech, signage, and project management &mdash; is identical across all three options. Activation logistics and the reskin package scale by option.</p>

    <table class="component-summary-table">
      <thead>
        <tr>
          <th style="text-align:left">Component</th>
          <th style="text-align:right;color:var(--f1-red)">Option 01<br><span style="font-size:10px;font-weight:400;opacity:0.7">Miami Only</span></th>
          <th style="text-align:right;color:var(--mercedes-teal)">Option 02<br><span style="font-size:10px;font-weight:400;opacity:0.7">NYC Only</span></th>
          <th style="text-align:right;color:var(--iwc-gold)">Option 03<br><span style="font-size:10px;font-weight:400;opacity:0.7">Miami &rarr; NYC</span></th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Phase 01 &mdash; Phone Box (fabrication, finishes, engineering)</td><td class="r">$37,550</td><td class="r">$37,550</td><td class="r">$37,550</td></tr>
        <tr><td>Phase 02 &mdash; Interactive Tech + Content Capture Platform</td><td class="r">$20,000</td><td class="r">$20,000</td><td class="r">$20,000</td></tr>
        <tr><td>Phase 03 &mdash; Branding, Signage &amp; Consumables Kit</td><td class="r">$5,200</td><td class="r">$5,200</td><td class="r">$5,200</td></tr>
        <tr><td>Phase 04 &mdash; Miami Logistics, Install &amp; Strike</td><td class="r">$11,900</td><td class="r muted">&mdash;</td><td class="r">$11,900</td></tr>
        <tr><td>Phase 04 &mdash; NYC Logistics, Install &amp; Strike</td><td class="r muted">&mdash;</td><td class="r">$11,900</td><td class="r">$11,900</td></tr>
        <tr><td>Phase 04 &mdash; Option 03 Reskin Package (7 itemized lines)</td><td class="r muted">&mdash;</td><td class="r muted">&mdash;</td><td class="r">$25,000</td></tr>
        <tr><td>Phase 05 &mdash; Project Management &amp; Client Services</td><td class="r">$12,000</td><td class="r">$12,000</td><td class="r">$12,000</td></tr>
      </tbody>
      <tfoot>
        <tr class="prod-total">
          <td><strong>Production Investment</strong></td>
          <td class="r" style="color:var(--f1-red)"><strong>$86,650</strong></td>
          <td class="r" style="color:var(--mercedes-teal)"><strong>$86,650</strong></td>
          <td class="r" style="color:var(--iwc-gold)"><strong>$123,550</strong></td>
        </tr>
        <tr class="venue-line">
          <td>+ Venue Pass-Through (est.)</td>
          <td class="r">$2.5K &ndash; $15K</td>
          <td class="r">$4K &ndash; $32K</td>
          <td class="r">$6.5K &ndash; $47K</td>
        </tr>
        <tr class="allin-total">
          <td><strong>Total All-In (est.)</strong></td>
          <td class="r"><strong>$89,150 &ndash; $101,650</strong></td>
          <td class="r"><strong>$90,650 &ndash; $118,650</strong></td>
          <td class="r"><strong>$130,050 &ndash; $170,550</strong></td>
        </tr>
      </tfoot>
    </table>
  </div>

  <div class="pkg-footnote" data-a>
    <strong>Budget alignment:</strong> Option 3 production investment of $123,550 lands squarely inside the client&rsquo;s $120K&ndash;$125K target window. Venue fees are passed through separately at cost; the all-in range reflects premium NYC private venues (e.g., Rockefeller Center) at the top and value-tier combinations (e.g., Midtown Miami + Domino Park) at the bottom. Options 1 and 2 at $86,650 leave meaningful headroom for enhanced tech, additional production management, paid media amplification, or a second single-city activation date.
  </div>
</section>

<!-- INVESTMENT -->
<section id="investment" class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Project Investment</span></div>
    <h2>Investment Summary</h2>
    <p class="sec-desc">
      Line-item breakdown supporting the three package options above. Fabrication, tech, packaging, and single-city logistics are shared across all three. Option 3 adds inter-city rewrap and second-activation logistics. Venue fees are separate and passed through at cost.
    </p>
  </div>

  <table class="invest-table" data-a>
    <thead><tr><th>Item</th><th style="text-align:right">Investment</th></tr></thead>
    <tbody>
      <tr class="divider"><td colspan="2">Phase 01 &mdash; The Phone Box (All Options)</td></tr>
      <tr><td>Phone Box Structural Shell &mdash; custom fabrication, marine-grade paint, two-piece modular</td><td>$14,500</td></tr>
      <tr><td>4-Sided Illuminated Lightbox Signage &mdash; LED backlit, all four faces</td><td>$6,800</td></tr>
      <tr><td>Glass &amp; Semi-Transparent Vinyl Panels &mdash; front door &amp; sides</td><td>$2,900</td></tr>
      <tr><td>Pink Vinyl Interior Lining &mdash; four walls, bum mirror with messaging</td><td>$3,200</td></tr>
      <tr><td>Concealed Sliding Prize Door &mdash; motorised, colour-matched</td><td>$3,400</td></tr>
      <tr><td>Interior Finishes &mdash; chequer plate floor, dome light, seat, analogue phone</td><td>$2,750</td></tr>
      <tr><td>Engineering, Structural Calcs &amp; Shop Drawings &mdash; wind-load, ballast, electrical, CAD</td><td>$4,000</td></tr>
      <tr class="sub-subtotal"><td><em>Phase 01 Subtotal</em></td><td><em>$37,550</em></td></tr>

      <tr class="divider"><td colspan="2">Phase 02 &mdash; Interactive Tech + Content Capture (All Options)</td></tr>
      <tr><td>Pre-Recorded Call-Response (IVR) System &mdash; multi-branch scripting, licensed voice, QA</td><td>$5,500</td></tr>
      <tr><td>Live Call / Walkie-Talkie Relay &mdash; encrypted, backup uplink, producer headset</td><td>$2,900</td></tr>
      <tr><td>Ceiling Dual Camera System &mdash; 4K, cloud storage, live-preview monitoring, disclosure sign</td><td>$4,500</td></tr>
      <tr><td>Thermal Voucher Printer &amp; Shelf Mount &mdash; dual-speed, wrapped, redundant roll inventory</td><td>$2,800</td></tr>
      <tr><td>Selfie &amp; Belfie Mobile Mounts &mdash; motion-triggered ring-light inserts, dual-height</td><td>$1,800</td></tr>
      <tr><td>Content Capture &amp; Media Handoff Platform &mdash; cloud workspace, proxies, 48hr delivery</td><td>$2,500</td></tr>
      <tr class="sub-subtotal"><td><em>Phase 02 Subtotal</em></td><td><em>$20,000</em></td></tr>

      <tr class="divider"><td colspan="2">Phase 03 &mdash; Branding, Signage &amp; Consumables (All Options)</td></tr>
      <tr><td>Disclosure &amp; Wayfinding Signage</td><td>$950</td></tr>
      <tr><td>Venue Dressing Kit &mdash; A-frames, stanchions, pavement decals</td><td>$1,750</td></tr>
      <tr><td>Daily Consumables &amp; Spares Kit &mdash; voucher rolls, cleaning, spares, gaffer</td><td>$2,500</td></tr>
      <tr class="sub-subtotal"><td><em>Phase 03 Subtotal</em></td><td><em>$5,200</em></td></tr>

      <tr class="divider"><td colspan="2">Phase 04 &mdash; Miami Logistics, Install &amp; Strike (Options 01 &amp; 03)</td></tr>
      <tr><td>Inbound Logistics &amp; Install &mdash; Miami (3-person crew, supervisor)</td><td>$5,800</td></tr>
      <tr><td>On-Site Technicians &mdash; Miami (lead + rotating second)</td><td>$2,800</td></tr>
      <tr><td>Same-Day Strike &amp; Outbound Freight &mdash; Miami</td><td>$3,300</td></tr>
      <tr class="sub-subtotal"><td><em>Miami Activation Subtotal</em></td><td><em>$11,900</em></td></tr>

      <tr class="divider"><td colspan="2">Phase 04 &mdash; NYC Logistics, Install &amp; Strike (Options 02 &amp; 03)</td></tr>
      <tr><td>Inbound Logistics &amp; Install &mdash; NYC (3-person crew, supervisor)</td><td>$5,800</td></tr>
      <tr><td>On-Site Technicians &mdash; NYC (lead + rotating second)</td><td>$2,800</td></tr>
      <tr><td>Same-Day Strike &amp; Outbound Freight &mdash; NYC</td><td>$3,300</td></tr>
      <tr class="sub-subtotal"><td><em>NYC Activation Subtotal</em></td><td><em>$11,900</em></td></tr>

      <tr class="divider" style="color:var(--iwc-gold)"><td colspan="2">Option 03 Reskin Package &mdash; Miami &rarr; NYC (Itemized)</td></tr>
      <tr><td>Climate-Controlled Warehouse Hold (~10 days)</td><td>$2,900</td></tr>
      <tr><td>Inter-City Freight (Miami &rarr; NYC, climate-controlled truck)</td><td>$5,500</td></tr>
      <tr><td>Exterior Vinyl Refresh (NYC reskin)</td><td>$5,400</td></tr>
      <tr><td>Interior Vinyl Refresh (NYC reskin)</td><td>$3,500</td></tr>
      <tr><td>Lightbox Graphic Refresh (NYC reskin)</td><td>$2,400</td></tr>
      <tr><td>NYC Site Re-Survey &amp; Local Permit Coordination</td><td>$2,500</td></tr>
      <tr><td>Pre-Deployment QC &amp; Refinishing</td><td>$2,800</td></tr>
      <tr class="sub-subtotal" style="color:var(--iwc-gold)"><td><em>Reskin Package Subtotal (Option 03 Only)</em></td><td><em>$25,000</em></td></tr>

      <tr class="divider"><td colspan="2">Phase 05 &mdash; Project Management &amp; Client Services (All Options)</td></tr>
      <tr><td>Project Management Fee &mdash; full engagement, dedicated producer, PM &amp; client services</td><td>$12,000</td></tr>
      <tr class="sub-subtotal"><td><em>Phase 05 Subtotal</em></td><td><em>$12,000</em></td></tr>
    </tbody>
    <tfoot>
      <tr><td style="color:var(--f1-red)">Option 01 Production Investment (Miami Only)</td><td style="color:var(--f1-red)">$86,650</td></tr>
      <tr><td style="color:var(--mercedes-teal)">Option 02 Production Investment (NYC Only)</td><td style="color:var(--mercedes-teal)">$86,650</td></tr>
      <tr><td style="color:var(--iwc-gold)">Option 03 Production Investment (Miami &rarr; NYC with Reskin)</td><td style="color:var(--iwc-gold)">$123,550</td></tr>
    </tfoot>
  </table>

  <div class="engage-bar" data-a>
    <div class="engage-col" style="border-color:var(--iwc-gold)">
      <div class="tag" style="color:var(--iwc-gold)">Deposit &mdash; 60%</div>
      <div class="amt">Package-dependent</div>
      <div class="note">Due upon Client&rsquo;s written approval of this Scope of Work (Proposal execution). Triggers procurement, engineering, and permit applications.</div>
    </div>
    <div class="engage-col" style="border-color:var(--mercedes-teal)">
      <div class="tag" style="color:var(--mercedes-teal)">Balance &mdash; 40%</div>
      <div class="amt">Package-dependent</div>
      <div class="note">Due five (5) business days prior to first activation installation.</div>
    </div>
  </div>

  <p class="sec-desc" style="font-size:11px;color:var(--text-muted);margin-top:16px">Payment instructions (ACH / wire details) will be issued directly to the authorised Client billing contact upon written approval of this Scope of Work. Payment shall be made exclusively via ACH electronic transfer or domestic wire transfer; credit card, check, and cash payments are not accepted.</p>
</section>

<!-- EXCLUSIONS -->
<section class="sec" style="padding-top:0">
  <div data-a>
    <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Exclusions &amp; Clarifications</span></div>
    <h2>Scope Exclusions</h2>
    <p class="sec-desc" style="margin-bottom:8px">The following items, services, and responsibilities are expressly excluded from the scope of this proposal and shall not be provided, arranged, or assumed by Agora Graphics, LLC (&ldquo;Producer&rdquo;) under this engagement. Client acknowledges and agrees that Producer bears no obligation, liability, or responsibility for any item listed below unless separately authorised in writing via executed change order.</p>
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
    <p class="sec-desc">The terms below govern this engagement between Gymshark Ltd. (&ldquo;Client&rdquo;) and Agora Graphics, LLC (&ldquo;Producer&rdquo;), and are entered into in coordination with Ominto Studio as the Client&rsquo;s appointed creative agency. Cross-references in the form <span style="color:var(--mercedes-teal)">[MSA S#]</span> point to the corresponding section of the Master Services Agreement between the parties; click any reference to open the full MSA in a side panel.</p>
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
    <div style="margin-top:40px" data-a>
      <div class="sec-eye"><div class="bar" style="background:var(--iwc-gold)"></div><span style="color:var(--iwc-gold)">Document Control</span></div>
      <h3 style="font-size:22px;margin-bottom:12px">Version History</h3>
      <table class="version-table">
        <thead><tr><th>Version</th><th>Date</th><th>Issued By</th><th>Summary of Changes</th></tr></thead>
        <tbody>
          <tr><td>1.0</td><td>April 17, 2026</td><td>Agora Graphics</td><td>Initial proposal issued for Gymshark Phone Box NYC &amp; Miami July 2026 activation</td></tr>
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
    <a href="mailto:mike@agoragraphics.com,julian@agvmiami.com?cc=info@agoravisuals.com&subject=Gymshark%20Phone%20Box%20%E2%80%94%20Revision%20Request%20%7C%20GS-PHONEBOX-001" class="cta-btn cta-secondary">Request Revisions</a>
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
        By executing this agreement, Client acknowledges review and acceptance of this Proposal, including the complete Scope of Work, Location Options, Package Options, Investment Summary, Payment Terms, Exclusions, and Terms &amp; Conditions outlined herein. Client hereby authorises Agora Graphics, LLC to proceed with engineering, procurement, and fabrication in accordance with the selected package option. Execution constitutes authorisation to initiate production and triggers applicable payment terms as stated.
      </p>

      <div class="sig-summary">Selected Option: _____________________</div>
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
            <div class="company">Agora Graphics, LLC</div>
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
            <div class="company">Agora Graphics, LLC</div>
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
    <div>&copy; 2026 Agora Graphics, LLC. All rights reserved. Gymshark&reg; is a registered trademark of Gymshark Ltd.</div>
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
      <p style="color:var(--iwc-gold);font-size:10px;letter-spacing:1px;text-transform:uppercase;margin-bottom:16px">Agora Graphics, LLC &mdash; 2026 Master Services Agreement</p>

      <h4><div class="section-num">S1 &mdash; Parties &amp; Engagement</div>Parties to This Agreement</h4>
      <p>This Master Services Agreement (&ldquo;Agreement&rdquo;) is entered into between Agora Graphics, LLC (&ldquo;Agora,&rdquo; &ldquo;Company,&rdquo; &ldquo;We&rdquo;) and the client identified on the executed Proposal or Estimate (&ldquo;Client,&rdquo; &ldquo;You&rdquo;). Execution of any Proposal, Estimate, or Work Order constitutes acceptance of this Agreement in its entirety.</p>

      <h4><div class="section-num">S2 &mdash; Scope of Work</div>Scope of Services</h4>
      <ol>
        <li>Agora will provide scenic fabrication, graphics production, printing, millwork, display construction, installation, and related services as described in the executed Proposal or Estimate.</li>
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
        <li>Venue labor requirements (union, drayage, rigging) are the responsibility of the Client unless explicitly included in the Agora scope.</li>
        <li>Risk of loss transfers to Client upon delivery to site or completion of installation.</li>
      </ol>

      <h4><div class="section-num">S7 &mdash; Artwork &amp; Proofing</div>Creative Production</h4>
      <ol>
        <li>Agora is not liable for errors in client-approved artwork, including color reproduction, spelling, or dimensional accuracy.</li>
        <li>Digital proofs are provided for review. Physical color matching is approximate due to variations in substrates, inks, and viewing conditions.</li>
        <li>Post-approval changes will be billed as additional work.</li>
      </ol>

      <h4><div class="section-num">S8 &mdash; Intellectual Property</div>Ownership &amp; IP</h4>
      <ol>
        <li>Client-provided artwork, logos, and brand assets remain the property of the Client.</li>
        <li>Agora retains ownership of all custom engineering drawings, structural designs, and proprietary fabrication methods.</li>
        <li>Fabricated elements remain the property of Agora until paid in full.</li>
        <li>Agora reserves the right to photograph completed work for portfolio use following public installation or event.</li>
      </ol>

      <h4><div class="section-num">S9 &mdash; Warranties &amp; Liability</div>Warranties</h4>
      <ol>
        <li>Agora warrants that all work will be performed in a professional and workmanlike manner consistent with industry standards.</li>
        <li>Fabricated elements are warranted against defects in materials and workmanship for the duration of the project installation period.</li>
        <li>Agora&rsquo;s total liability under this Agreement shall not exceed the total fees paid by Client for the specific project.</li>
        <li>Agora shall not be liable for indirect, incidental, consequential, or punitive damages.</li>
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
      <p>Client agrees to indemnify and hold harmless Agora Graphics, LLC, its officers, employees, and agents from any claims, damages, losses, or expenses arising from Client&rsquo;s use of delivered materials, venue conditions, or third-party interactions related to the project.</p>

      <h4><div class="section-num">S13 &mdash; Governing Law</div>Governing Law &amp; Disputes</h4>
      <p>This Agreement shall be governed by and construed in accordance with the laws of the State of New York. Any disputes shall be resolved through binding arbitration in Suffolk County, New York, in accordance with the rules of the American Arbitration Association.</p>

      <h4><div class="section-num">S14 &mdash; Entire Agreement</div>Entire Agreement</h4>
      <p>This Agreement, together with any executed Proposals, Estimates, Work Orders, and Change Orders, constitutes the entire agreement between the parties and supersedes all prior negotiations, representations, or agreements. Amendments must be in writing and signed by both parties.</p>

      <p style="margin-top:28px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.06);font-size:10px;color:rgba(138,138,149,0.4)">Agora Graphics, LLC &bull; 1440 Church St, Bohemia, NY 11716 &bull; EIN on file &bull; This document is incorporated by reference into all project Proposals and Estimates.</p>
    </div>
  </div>

  <!-- TERMS PANEL -->
  <div class="legal-panel" id="legal-terms">
    <button class="legal-close" onclick="closeLegal()">&times;</button>
    <div class="legal-panel-header">
      <div class="legal-eye">Terms of Service</div>
      <h3>Agora Graphics Terms of Service</h3>
    </div>
    <p>Use of Agora Graphics services, websites, and digital properties is governed by our standard Terms of Service, which incorporate by reference the specific terms of any executed engagement (including this Proposal and the MSA).</p>
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
    <p>This Proposal and all attached or referenced documents contain confidential and proprietary information of Agora Graphics, LLC, Ominto Studio, and Gymshark Ltd. All parties agree to maintain strict confidentiality and not to disclose, distribute, or reproduce this document or its contents to any third party without prior written consent.</p>
    <h4>Data Handling</h4>
    <p>Agora Graphics collects and processes only the information necessary to fulfil project obligations: contact details, project specifications, creative assets, and payment information. We do not sell, share, or distribute client information to third parties except as required to perform contracted services.</p>
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
        'The Gymshark Phone Box Activation Proposal (GS-PHONEBOX-001) has been digitally executed by the Client and is ready for Agora Graphics counter-signature.\n\n' +
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
        'Client is requested to keep this email as proof of execution.\n\n---\nAgora Graphics, LLC'
      );
      const to = 'mike@agoragraphics.com,julian@agvmiami.com';
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
      // Notify Agora and request counter-signature (opens user's mail client in a new tab)
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
        'Questions? Reply to this email or contact mike@agoragraphics.com.\n\n---\nAgora Graphics, LLC'
      );
      window.location.href = 'mailto:?cc=mike@agoragraphics.com,julian@agvmiami.com&subject=' + subject + '&body=' + body;
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
