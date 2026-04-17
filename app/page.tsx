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
      Agora Graphics is pleased to present this fabrication and production proposal for the Gymshark Phone Box experiential activation, developed in partnership with Ominto Studio&rsquo;s creative direction. This engagement delivers a custom-fabricated pink British phone box equipped with interactive photo, voucher, and call-response technology &mdash; engineered for a single-day pop-up across New York and/or Miami in July 2026. The proposal includes three execution options (NYC-only, Miami-only, or a dual-city deployment with inter-city rewrap), twelve recommended venues across both cities with estimated venue ranges, and a complete investment summary scaled to the client&rsquo;s $120,000 overall budget.
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
      <p><strong>Preferred Location:</strong> Astor Place Plaza, NoHo<br>
      <strong>Alt. Dates:</strong> June 27 or July 11, 2026<br>
      <strong>Hours:</strong> 10:00 AM &ndash; 6:00 PM<br>
      <strong>Load-In:</strong> 4:00 AM &ndash; 8:00 AM (permit window)<br>
      <strong>Audience:</strong> NYU students, downtown creatives, fitness-minded locals<br>
      <strong>Proximity:</strong> Steps from Gymshark NYC store for retail conversion</p>
    </div>
    <div class="overview-card" style="border-color:var(--f1-red)">
      <div class="ov-tag" style="color:var(--f1-red)">Activation &mdash; Miami</div>
      <h3>Miami Pop-Up</h3>
      <p><strong>Recommended Locations:</strong> Wynwood, Lincoln Road, Design District, Brickell, Muscle Beach, Bayfront Park, or Maurice A. Ferre Park<br>
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
          <div class="desc">Working analogue phone wired to an IVR-style prize quiz. Scripting, voice talent, keypad mapping (star = YES, hash = NO), and win/lose logic supplied by Agora in collaboration with Gymshark comms team.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$3,500</div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Live Call / Walkie-Talkie Relay</div>
          <div class="desc">Dual-mode relay so Gymshark social producers can cut in live for hosted calls. Audio broadcast externally so crowd can overhear both sides of the conversation during capture windows.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$1,800</div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Ceiling-Mounted Dual Camera System</div>
          <div class="desc">Two ceiling-mounted video+audio cameras capturing guest interactions, integrated with cloud storage subscription. &ldquo;Smile &mdash; you&rsquo;re on camera&rdquo; signage colour-matched to phone box pink for disclosure.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$2,400</div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Thermal Voucher Printer &amp; Shelf Mount</div>
          <div class="desc">Single-roll thermal ticket printer wrapped in matching pink vinyl, shelf-mounted under the phone and aligned to the bottom of the sliding door. Voucher template designed by Gymshark; Agora handles printer procurement, firmware, roll inventory, and wrap.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$1,950</div>
        </div>

        <div class="core-item" style="border-color:var(--mercedes-teal)">
          <div><div class="name">Selfie &amp; Belfie Mobile Mounts</div>
          <div class="desc">Two wall-mounted mobile phone holders spray-painted pink to blend into interior &mdash; one at face level, one positioned for the signature Gymshark &ldquo;belfie.&rdquo; Double-sided mounted to vinyl panels for clean removal.</div></div>
          <div class="price" style="color:var(--mercedes-teal)">$650</div>
        </div>
      </div>
    </div>
  </div>

  <!-- PHASE 03: BRANDING & PACKAGING -->
  <div class="phase" data-a>
    <div class="phase-head" onclick="togglePhase(this)" style="border-left:4px solid var(--f1-red)">
      <div class="phase-num" style="color:var(--f1-red)">03</div>
      <div class="phase-info">
        <h3>Branding &amp; Packaging</h3>
        <div class="sub">200-unit yellow-pages-inspired product boxes, wayfinding signage, disclosure graphics</div>
      </div>
      <div class="phase-toggle" style="border-color:var(--f1-red);color:var(--f1-red)">+</div>
    </div>
    <div class="phase-body">
      <div class="phase-inner" style="border-left:4px solid var(--f1-red)">
        <p class="phase-narrative">
          Every prize leaves the phone box in a custom-printed box &mdash; yellow-pages-inspired exteriors with campaign imagery inside, sized to fit a folded legging or short. The tactile unboxing extends the Phone Box moment beyond the 60-second interaction.
        </p>

        <div class="core-label" style="color:var(--f1-red)">Core Deliverables</div>

        <div class="core-item" style="border-color:var(--f1-red)">
          <div><div class="name">Custom Product Boxes (200 units)</div>
          <div class="desc">Yellow-pages-inspired exterior print with campaign-style interior imagery. Dimensions 300mm L &times; 200mm D &times; 70mm H. Structural board, full-colour offset print, assembled flat-packed for load-in.</div></div>
          <div class="price" style="color:var(--f1-red)">$4,800</div>
        </div>

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
          <div class="desc">Truck, rigging hardware, 2-person install crew, venue load-in coordination, module assembly, electrical hookup, and final finishing. 4&ndash;6 hour install window.</div></div>
          <div class="price">$4,200</div>
        </div>

        <div class="core-item">
          <div><div class="name">On-Site Technician (Operating Hours)</div>
          <div class="desc">1 dedicated technician for entire operating window to manage voucher roll, camera system, IVR prompts, and minor scenic touch-ups. Includes pre-open soundcheck and post-close shutdown.</div></div>
          <div class="price">$1,400</div>
        </div>

        <div class="core-item">
          <div><div class="name">Same-Day Strike &amp; Outbound Freight (Per Activation)</div>
          <div class="desc">Complete de-installation, module breakdown, and truck-loaded within venue&rsquo;s contracted strike window. Site restored to original condition.</div></div>
          <div class="price">$2,800</div>
        </div>

        <div class="core-item" style="border-color:var(--iwc-gold)">
          <div><div class="name">Inter-City Rewrap &amp; Transport (Option 3 Only)</div>
          <div class="desc">Climate-controlled warehouse hold between cities, repaint or rewrap of exterior / interior vinyl to refresh branding for the second city, truck transport from Miami to NYC (or reverse), and final inspection before second install.</div></div>
          <div class="price" style="color:var(--iwc-gold)">$9,500</div>
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
      <div class="sec-eye"><div class="bar" style="background:var(--mercedes-teal)"></div><span style="color:var(--mercedes-teal)">New York &bull; Six Venues</span></div>
      <h3>NYC Shortlist</h3>
      <p>A plaza in NoHo (preferred), plus five comparable downtown and Brooklyn venues matched on pedestrian volume, photo-ready backdrop, and fitness-aware audience density.</p>
    </div>

    <div class="loc-grid">

      <!-- NYC: ASTOR PLACE -->
      <div class="loc-card" style="border-color:var(--mercedes-teal)">
        <div class="loc-hero loc-hero-astor">
          <div class="loc-city" style="color:var(--mercedes-teal)">New York</div>
          <div class="loc-title">Astor Place Plaza</div>
          <div class="loc-sub">NoHo &bull; Preferred NYC Location</div>
        </div>
        <div class="loc-body">
          <div class="loc-price">Est. $8,000 &ndash; $15,000 / day</div>
          <p>Downtown hotspot at the intersection of NoHo, East Village, and Greenwich Village. Iconic Alamo Cube plaza, heavy NYU and commuter foot traffic, and just blocks from the Gymshark NYC store for retail hand-off. Managed by NYC DOT &amp; Village Alliance (permit required).</p>
          <ul>
            <li>Student &amp; creative audience, fitness-aware</li>
            <li>Open plaza layout ideal for crowd formation</li>
            <li>Content-ready cultural landmark backdrop</li>
            <li>Proximity to Gymshark retail for conversion</li>
          </ul>
          <a href="https://villagealliance.org/public-space" class="loc-link" target="_blank" rel="noopener">Village Alliance Public Space</a>
        </div>
      </div>

      <!-- NYC: WASHINGTON SQUARE PARK -->
      <div class="loc-card" style="border-color:var(--mercedes-teal)">
        <div class="loc-hero loc-hero-washsq">
          <div class="loc-city" style="color:var(--mercedes-teal)">New York</div>
          <div class="loc-title">Washington Square Park</div>
          <div class="loc-sub">Greenwich Village &bull; NYU hub</div>
        </div>
        <div class="loc-body">
          <div class="loc-price">Est. $6,000 &ndash; $12,000 / day</div>
          <p>The NYU-adjacent heart of Greenwich Village with the iconic marble arch as a permanent photo backdrop. Chess players, buskers, students, and tourists create constant ambient activity. Permitting via NYC Parks (Special Events Office).</p>
          <ul>
            <li>Globally recognised arch backdrop</li>
            <li>Heavy student and Gen-Z foot traffic</li>
            <li>Built-in cultural texture for social content</li>
            <li>Walking distance from Gymshark NYC store</li>
          </ul>
          <a href="https://www.nycgovparks.org/parks/washington-square-park" class="loc-link" target="_blank" rel="noopener">NYC Parks &mdash; Washington Sq</a>
        </div>
      </div>

      <!-- NYC: UNION SQUARE -->
      <div class="loc-card" style="border-color:var(--mercedes-teal)">
        <div class="loc-hero loc-hero-union">
          <div class="loc-city" style="color:var(--mercedes-teal)">New York</div>
          <div class="loc-title">Union Square</div>
          <div class="loc-sub">14th Street &bull; Manhattan</div>
        </div>
        <div class="loc-body">
          <div class="loc-price">Est. $10,000 &ndash; $18,000 / day</div>
          <p>One of the busiest pedestrian plazas in Manhattan with year-round farmers market activity, skater culture, and subway confluence. Precedent for major branded activations. Permitting via NYC DOT Plaza Program / Union Square Partnership.</p>
          <ul>
            <li>Highest daily foot traffic on NYC shortlist</li>
            <li>Skate/fitness/culture crossover audience</li>
            <li>Subway hub &mdash; 14th Street / L, N/Q/R/W, 4/5/6</li>
            <li>Strong precedent for large branded footprints</li>
          </ul>
          <a href="https://www.unionsquarenyc.org/" class="loc-link" target="_blank" rel="noopener">Union Square Partnership</a>
        </div>
      </div>

      <!-- NYC: FLATIRON PLAZA -->
      <div class="loc-card" style="border-color:var(--mercedes-teal)">
        <div class="loc-hero loc-hero-flatiron">
          <div class="loc-city" style="color:var(--mercedes-teal)">New York</div>
          <div class="loc-title">Flatiron Public Plaza</div>
          <div class="loc-sub">23rd St &amp; Broadway &bull; Flatiron District</div>
        </div>
        <div class="loc-body">
          <div class="loc-price">Est. $7,000 &ndash; $14,000 / day</div>
          <p>The triangular pedestrian plaza at the foot of the Flatiron Building &mdash; one of the most-photographed corners in NYC. Managed by the Flatiron NoMad Partnership with a strong track record of brand pop-ups. Lunch-rush density from NoMad/Flatiron office towers.</p>
          <ul>
            <li>Globally iconic architectural backdrop</li>
            <li>NoMad/Flatiron office lunch crowd (fitness-aware)</li>
            <li>Experienced venue partnership for brand pop-ups</li>
            <li>Short hop to Madison Square Park programming</li>
          </ul>
          <a href="https://flatironnomad.nyc/" class="loc-link" target="_blank" rel="noopener">Flatiron NoMad Partnership</a>
        </div>
      </div>

      <!-- NYC: DUMBO -->
      <div class="loc-card" style="border-color:var(--mercedes-teal)">
        <div class="loc-hero loc-hero-dumbo">
          <div class="loc-city" style="color:var(--mercedes-teal)">New York</div>
          <div class="loc-title">DUMBO / Pearl Street</div>
          <div class="loc-sub">Brooklyn &bull; Manhattan Bridge backdrop</div>
        </div>
        <div class="loc-body">
          <div class="loc-price">Est. $5,000 &ndash; $10,000 / day</div>
          <p>Cobblestone Brooklyn streets framing the Manhattan Bridge &mdash; arguably the most-photographed view in NYC and a magnet for tourists and content creators. DUMBO BID permitting, with strong precedent for fashion and lifestyle pop-ups.</p>
          <ul>
            <li>Postcard Manhattan Bridge backdrop</li>
            <li>Tourist + content creator dense environment</li>
            <li>Cobblestones + brick architecture complement pink</li>
            <li>Brooklyn Bridge Park adjacent for overflow</li>
          </ul>
          <a href="https://dumbo.nyc/" class="loc-link" target="_blank" rel="noopener">DUMBO Improvement District</a>
        </div>
      </div>

      <!-- NYC: DOMINO PARK -->
      <div class="loc-card" style="border-color:var(--mercedes-teal)">
        <div class="loc-hero loc-hero-domino">
          <div class="loc-city" style="color:var(--mercedes-teal)">New York</div>
          <div class="loc-title">Domino Park</div>
          <div class="loc-sub">Williamsburg &bull; East River waterfront</div>
        </div>
        <div class="loc-body">
          <div class="loc-price">Est. $4,000 &ndash; $8,000 / day</div>
          <p>Young Brooklyn waterfront park at the former Domino Sugar Refinery &mdash; fitness-coded audience (dedicated beach-volleyball courts, sunset joggers) with a skyline view. Managed by Two Trees Management with favourable brand partnership terms.</p>
          <ul>
            <li>Built-in fitness/wellness audience</li>
            <li>Lowest venue fee on NYC shortlist</li>
            <li>Waterfront + Manhattan skyline backdrop</li>
            <li>Private management &mdash; faster approvals</li>
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

      <!-- MIAMI: FREEDOM PARK / MAURICE FERRE -->
      <div class="loc-card" style="border-color:var(--f1-red)">
        <div class="loc-hero loc-hero-ferre">
          <div class="loc-city" style="color:var(--f1-red)">Miami</div>
          <div class="loc-title">Maurice A. Ferre Park</div>
          <div class="loc-sub">Downtown Miami waterfront (formerly Museum Park)</div>
        </div>
        <div class="loc-body">
          <div class="loc-price">Est. $3,000 &ndash; $6,000 / day</div>
          <p>Open waterfront park adjacent to P&eacute;rez Art Museum and Frost Museum of Science. Strong downtown energy, clean modernist backdrop, and Biscayne Bay sightlines. Permit via City of Miami Parks Department. Recommended interpretation of the client&rsquo;s &ldquo;Freedom Park&rdquo; reference.</p>
          <ul>
            <li>Waterfront + skyline backdrop</li>
            <li>Cultural adjacency (museums, arts)</li>
            <li>Open lawns accommodate larger footprints</li>
            <li>Transit-accessible (Metromover, parking)</li>
          </ul>
          <a href="https://www.bayfrontparkmiami.com/maurice-a-ferre-park" class="loc-link" target="_blank" rel="noopener">Maurice A. Ferr&eacute; Park</a>
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

      <!-- MIAMI: BRICKELL -->
      <div class="loc-card" style="border-color:var(--f1-red)">
        <div class="loc-hero loc-hero-brickell">
          <div class="loc-city" style="color:var(--f1-red)">Miami</div>
          <div class="loc-title">Brickell</div>
          <div class="loc-sub">Brickell City Centre &amp; Mary Brickell Village</div>
        </div>
        <div class="loc-body">
          <div class="loc-price">Est. $6,000 &ndash; $12,000 / day</div>
          <p>Miami&rsquo;s financial and luxury-residential core. High-disposable-income audience, dense evening bar/restaurant traffic, and climate-controlled plaza options at Brickell City Centre. Private venue management (Swire Properties) enables brand-first approvals.</p>
          <ul>
            <li>Affluent, fitness-active local audience</li>
            <li>Evening traffic extends activation window</li>
            <li>Private plazas &mdash; weather-protected options</li>
            <li>Dense residential tower base for repeat exposure</li>
          </ul>
          <a href="https://www.brickellcitycentre.com/" class="loc-link" target="_blank" rel="noopener">Brickell City Centre Official</a>
        </div>
      </div>

    </div>
  </div>

  <div class="loc-footnote" data-a>
    <strong>Note on pricing &amp; imagery:</strong> Daily ranges are pre-permit market estimates based on published rates and comparable 2024&ndash;2025 activation precedents. Actual venue fees depend on footprint, amenities (power, water, security), seasonality, dates, and negotiation, and are billed separately from the production investment and passed through at cost. Venue imagery is sourced from Wikimedia Commons and reviewed for venue accuracy; imagery for Flatiron Plaza shows the Flatiron Building itself (the plaza is directly adjacent and named for the building), Lummus Park shows the boardwalk rather than the Muscle Beach open-air gym specifically, and Brickell City Centre shows the site during late-stage 2015 construction &mdash; firm site-scouting photography will replace any flagged imagery before final issuance. Agora Graphics will secure firm quotes and permit letters for the client&rsquo;s selected venue(s) within 5 business days of a signed letter of intent.
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
      <tr><td>Deposit Received</td><td>60% project deposit &mdash; triggers procurement, engineering, and venue permit applications</td><td>April 22</td></tr>
      <tr><td>Venue Permits Applied</td><td>Permit applications filed for selected city / cities; deposit letters issued</td><td>April 25</td></tr>
      <tr><td>Creative Lock</td><td>Final artwork, voucher template, IVR scripting, and packaging dielines delivered to Agora</td><td>May 1</td></tr>
      <tr><td>Engineering &amp; Shop Drawings</td><td>Structural, electrical, and ballast drawings issued for client review</td><td>May 4 &ndash; 15</td></tr>
      <tr><td>Scenic Fabrication</td><td>Phone box shell build, paint, finish, lightbox assembly</td><td>May 18 &ndash; June 15</td></tr>
      <tr><td>Print &amp; Packaging Production</td><td>Vinyl, lightbox graphics, 200 product boxes, signage</td><td>May 25 &ndash; June 15</td></tr>
      <tr><td>Tech Bench Test</td><td>Full IVR + voucher printer + camera system rehearsed end-to-end at Agora facility</td><td>June 15 &ndash; 22</td></tr>
      <tr><td>Balance Payment</td><td>Remaining 40% balance due &mdash; three business days prior to first activation</td><td>June 23</td></tr>
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
      Three execution paths sized against Gymshark&rsquo;s $120,000 overall budget. All three include the full Phone Box object, interactive tech package, and 200 units of branded packaging. Option 3 is the recommended configuration: it spends the full budget, lands two cities back-to-back, and creates a natural content arc (Miami beach energy &rarr; NYC downtown energy) over a 14-day public window.
    </p>
  </div>

  <div class="pkg-grid" data-a>

    <!-- OPTION 1: NYC ONLY -->
    <div class="pkg-card" style="border-color:var(--mercedes-teal)">
      <div class="pkg-tag" style="color:var(--mercedes-teal)">Option 01</div>
      <h3>NYC Only</h3>
      <div class="pkg-date">June 27 <strong>or</strong> July 11, 2026</div>
      <div class="pkg-venue">Astor Place Plaza (preferred)</div>
      <ul class="pkg-list">
        <li>Complete Phone Box fabrication</li>
        <li>Full interactive tech package (IVR + cameras + voucher printer + selfie mounts)</li>
        <li>200 branded product boxes</li>
        <li>Disclosure + wayfinding signage</li>
        <li>Single-city freight, install, run, and strike</li>
        <li>1 activation day</li>
      </ul>
      <div class="pkg-price">
        <div class="pkg-prod-label">Production Investment</div>
        <div class="pkg-amount" style="color:var(--mercedes-teal)">$57,850</div>
        <div class="pkg-venue-line">+ NYC venue fee (est. $8K &ndash; $15K)</div>
        <div class="pkg-total">Total All-In (est.)<strong>$65,850 &ndash; $72,850</strong></div>
      </div>
    </div>

    <!-- OPTION 2: MIAMI ONLY -->
    <div class="pkg-card" style="border-color:var(--f1-red)">
      <div class="pkg-tag" style="color:var(--f1-red)">Option 02</div>
      <h3>Miami Only</h3>
      <div class="pkg-date">June 27 <strong>or</strong> July 11, 2026</div>
      <div class="pkg-venue">Recommended: Wynwood or Design District</div>
      <ul class="pkg-list">
        <li>Complete Phone Box fabrication</li>
        <li>Full interactive tech package (IVR + cameras + voucher printer + selfie mounts)</li>
        <li>200 branded product boxes</li>
        <li>Disclosure + wayfinding signage</li>
        <li>Single-city freight, install, run, and strike</li>
        <li>1 activation day</li>
      </ul>
      <div class="pkg-price">
        <div class="pkg-prod-label">Production Investment</div>
        <div class="pkg-amount" style="color:var(--f1-red)">$58,950</div>
        <div class="pkg-venue-line">+ Miami venue fee (est. $2.5K &ndash; $15K)</div>
        <div class="pkg-total">Total All-In (est.)<strong>$61,450 &ndash; $73,950</strong></div>
      </div>
    </div>

    <!-- OPTION 3: DUAL-CITY -->
    <div class="pkg-card recommended" style="border-color:var(--iwc-gold)">
      <div class="pkg-ribbon" style="background:var(--iwc-gold);color:var(--dark)">Recommended &mdash; Full Budget</div>
      <div class="pkg-tag" style="color:var(--iwc-gold)">Option 03</div>
      <h3>Dual-City</h3>
      <div class="pkg-date">Miami June 27 &rarr; NYC July 11, 2026</div>
      <div class="pkg-venue">Two venues, one object, one content arc</div>
      <ul class="pkg-list">
        <li>Everything in Options 1 &amp; 2</li>
        <li><strong>Inter-city rewrap</strong> between activations (refresh of exterior / interior vinyl)</li>
        <li>Climate-controlled warehouse hold</li>
        <li>Miami &rarr; NYC transport</li>
        <li>Second-city install, run, and strike</li>
        <li>2 activation days &bull; 14-day public arc</li>
      </ul>
      <div class="pkg-price">
        <div class="pkg-prod-label">Production Investment</div>
        <div class="pkg-amount" style="color:var(--iwc-gold)">$98,500</div>
        <div class="pkg-venue-line">+ Miami + NYC venue fees (est. $10.5K &ndash; $27K combined)</div>
        <div class="pkg-total">Total All-In (est.)<strong>$109,000 &ndash; $120,000</strong></div>
      </div>
    </div>

  </div>

  <div class="pkg-footnote" data-a>
    <strong>Budget alignment:</strong> Option 3 is scoped to land at or just under the client&rsquo;s $120,000 overall budget after venue pass-through fees are included. Options 1 and 2 leave meaningful headroom that may be redirected to enhanced tech, additional product inventory, paid media amplification, or a second single-city activation date.
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

      <tr class="divider"><td colspan="2">Phase 02 &mdash; Interactive Tech (All Options)</td></tr>
      <tr><td>Pre-Recorded Call-Response (IVR) System &mdash; scripting, voice, keypad logic</td><td>$3,500</td></tr>
      <tr><td>Live Call / Walkie-Talkie Relay &mdash; social producer handoff</td><td>$1,800</td></tr>
      <tr><td>Ceiling Dual Camera System &mdash; video + audio, cloud storage, disclosure sign</td><td>$2,400</td></tr>
      <tr><td>Thermal Voucher Printer &amp; Shelf Mount &mdash; wrapped, shelf aligned to sliding door</td><td>$1,950</td></tr>
      <tr><td>Selfie &amp; Belfie Mobile Mounts &mdash; colour-matched, dual-height</td><td>$650</td></tr>

      <tr class="divider"><td colspan="2">Phase 03 &mdash; Branding &amp; Packaging (All Options)</td></tr>
      <tr><td>Custom Product Boxes (200 units) &mdash; yellow-pages inspired, 300&times;200&times;70 mm</td><td>$4,800</td></tr>
      <tr><td>Disclosure &amp; Wayfinding Signage</td><td>$950</td></tr>
      <tr><td>Venue Dressing Kit &mdash; A-frames, stanchions, pavement decals</td><td>$1,750</td></tr>

      <tr class="divider"><td colspan="2">Phase 04 &mdash; Logistics, Install &amp; Strike (Per Activation)</td></tr>
      <tr><td>Inbound Logistics &amp; Install (Activation 1)</td><td>$4,200</td></tr>
      <tr><td>On-Site Technician (Activation 1)</td><td>$1,400</td></tr>
      <tr><td>Same-Day Strike &amp; Outbound Freight (Activation 1)</td><td>$2,800</td></tr>

      <tr class="divider"><td colspan="2">Option 03 Add-Ons &mdash; Dual-City</td></tr>
      <tr><td>Inter-City Rewrap &amp; Transport &mdash; warehouse hold, vinyl refresh, Miami&harr;NYC truck</td><td>$9,500</td></tr>
      <tr><td>Inbound Logistics &amp; Install (Activation 2)</td><td>$4,200</td></tr>
      <tr><td>On-Site Technician (Activation 2)</td><td>$1,400</td></tr>
      <tr><td>Same-Day Strike &amp; Outbound Freight (Activation 2)</td><td>$2,800</td></tr>
    </tbody>
    <tfoot>
      <tr><td style="color:var(--mercedes-teal)">Option 01 / Option 02 Subtotal</td><td>$57,850 &ndash; $58,950</td></tr>
      <tr><td style="color:var(--iwc-gold)">Option 03 Subtotal (Dual-City)</td><td>$98,500</td></tr>
    </tfoot>
  </table>

  <div class="engage-bar" data-a>
    <div class="engage-col" style="border-color:var(--iwc-gold)">
      <div class="tag" style="color:var(--iwc-gold)">Deposit &mdash; 60%</div>
      <div class="amt">Package-dependent</div>
      <div class="note">Due upon execution. Triggers procurement, engineering, and permit applications.</div>
    </div>
    <div class="engage-col" style="border-color:var(--mercedes-teal)">
      <div class="tag" style="color:var(--mercedes-teal)">Balance &mdash; 40%</div>
      <div class="amt">Package-dependent</div>
      <div class="note">Due three (3) business days prior to first activation installation.</div>
    </div>
  </div>

  <!-- PAYMENT METHODS -->
  <div class="pay-section" data-a>
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px">
      <div style="width:32px;height:2px;background:var(--iwc-gold)"></div>
      <span style="font-size:10px;letter-spacing:3px;text-transform:uppercase;font-weight:700;color:var(--iwc-gold)">Payment Methods</span>
    </div>
    <h3 style="font-family:var(--serif);font-size:22px;font-weight:700;color:var(--white);margin-bottom:6px">ACH or Wire Transfer Only</h3>
    <p style="font-size:12px;color:var(--text-muted);line-height:1.7;max-width:640px">All payments under this engagement are accepted exclusively via ACH electronic transfer or domestic wire transfer. Credit card, check, and cash payments are not accepted. Please reference the project document number (GS-PHONEBOX-001) on all remittances.</p>

    <div class="pay-grid">
      <div class="pay-method">
        <h4><div class="icon">$</div>ACH / Wire Transfer</h4>
        <div class="detail">
          <div class="label">Beneficiary</div>
          <strong>Agora Graphics, LLC</strong><br>
          <div class="label">Bank</div>
          <strong>Chase Business Banking</strong><br>
          <div class="label">Routing Number (ACH / Wire)</div>
          <strong>021000021</strong><br>
          <div class="label">Account Number</div>
          <strong>Provided upon execution</strong><br>
          <div class="label">Reference</div>
          <strong>GS-PHONEBOX-001</strong>
        </div>
      </div>
      <div class="pay-method">
        <h4><div class="icon">&rarr;</div>Pay Online</h4>
        <div class="detail">
          <p>For your convenience, payments may also be submitted directly through our secure invoicing platform. A QuickBooks invoice with a direct payment link will be issued upon execution of this agreement.</p>
          <div style="margin-top:14px">
            <a href="mailto:mike@agoragraphics.com?subject=GS-PHONEBOX-001%20%E2%80%94%20Payment%20Link%20Request" class="pay-btn pay-btn-secondary">Request Invoice &amp; Payment Link</a>
          </div>
          <div style="margin-top:10px;font-size:9px;color:rgba(138,138,149,0.5);letter-spacing:0.5px">Powered by QuickBooks &bull; Secure ACH &amp; wire transfer accepted</div>
        </div>
      </div>
    </div>
  </div>
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
    <p class="sec-desc">The terms below govern this engagement between Gymshark Ltd. (&ldquo;Client&rdquo;) and Agora Graphics, LLC (&ldquo;Producer&rdquo;), and are entered into in coordination with Ominto Studio as the Client&rsquo;s appointed creative agency. Cross-references in the form <span style="color:var(--mercedes-teal)">[MSA &sect;X.X]</span> point to the Master Services Agreement between the parties; click any reference to view the linked clause.</p>
  </div>

  <div class="terms-grid" data-a>
    <div class="terms-item">
      <h4>1. Acceptance &amp; Execution</h4>
      <ol>
        <li>This Proposal constitutes a binding offer upon execution by Client&rsquo;s authorised signatory. Execution may be accomplished via wet signature, DocuSign, or the embedded digital signature interface, each of which shall be deemed legally equivalent. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA &sect;3.1]</span></li>
        <li>This Proposal is valid for thirty (30) calendar days from the version date shown on the cover. Producer reserves the right to re-price or withdraw after expiration.</li>
        <li>Execution triggers the Payment Terms in Section 3 and authorises Producer to proceed with engineering, procurement, and fabrication in accordance with the selected option.</li>
      </ol>
    </div>

    <div class="terms-item">
      <h4>2. Scope &amp; Change Orders</h4>
      <ol>
        <li>Any modification to scope, quantity, dimensions, material specification, delivery schedule, venue selection, or production timeline after written approval of this Proposal requires a formally executed written Change Order signed by authorised representatives of both parties. Verbal approvals, email threads, or text messages shall not constitute binding authorisation. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA &sect;18]</span></li>
        <li>Change Orders are invoiced separately and do not alter the base project investment unless expressly stated.</li>
      </ol>
    </div>

    <div class="terms-item">
      <h4>3. Payment Terms</h4>
      <ol>
        <li>60% deposit due upon Proposal execution. 40% balance due three (3) business days prior to first activation installation. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA &sect;5]</span></li>
        <li>Payment shall be made exclusively via ACH electronic transfer or domestic wire transfer. Credit card, check, and cash payments are not accepted.</li>
        <li>Late payments accrue interest at 1.5% per month or the maximum rate permitted by applicable law, whichever is lower.</li>
      </ol>
    </div>

    <div class="terms-item">
      <h4>4. Creative Approvals &amp; Artwork</h4>
      <ol>
        <li>Client designates a single authorised representative empowered to approve artwork, authorise Change Orders, and make binding decisions on Client&rsquo;s behalf for the duration of this engagement. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA &sect;7.1]</span></li>
        <li>Client bears sole responsibility for final review and approval of all artwork, including copy, spelling, grammar, dimensions, colour accuracy, brand compliance, and layout. Written artwork approval constitutes authorisation to proceed to production.</li>
        <li>All final creative assets must be delivered in print-ready format by the Creative Lock milestone shown in the Workback Schedule. Late asset delivery may shift downstream milestones without relief of Client payment obligations.</li>
      </ol>
    </div>

    <div class="terms-item">
      <h4>5. Venue, Permits &amp; Insurance</h4>
      <ol>
        <li>Producer will apply for and administer venue permits on Client&rsquo;s behalf. Permit issuance is at the sole discretion of the venue or governing authority. Producer makes no warranty regarding permit approval timelines or venue availability on requested dates.</li>
        <li>Client is responsible for furnishing or underwriting all certificates of insurance, additional insured endorsements, and event liability coverage required by the selected venue(s). <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA &sect;11]</span></li>
        <li>All venue fees, mandatory security, and permit charges are passed through at cost.</li>
      </ol>
    </div>

    <div class="terms-item">
      <h4>6. Intellectual Property</h4>
      <ol>
        <li>Creative concept, design artwork, and campaign IP are retained by Client and Ominto Studio. Producer receives a limited licence to reproduce supplied artwork solely for the purpose of fulfilling this engagement.</li>
        <li>Producer retains ownership of proprietary fabrication methods, shop drawings, engineering, and production know-how.</li>
        <li>Producer may photograph finished work for portfolio and marketing use following public launch of the activation, unless Client expressly opts out in writing. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA &sect;9]</span></li>
      </ol>
    </div>

    <div class="terms-item">
      <h4>7. Termination &amp; Cancellation</h4>
      <ol>
        <li>Client may terminate for convenience upon written notice. Upon termination, Client shall reimburse Producer for all work performed, materials procured, and non-cancellable commitments incurred through the date of termination. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA &sect;15]</span></li>
        <li>Cancellation within 14 days of first activation forfeits the full deposit. Cancellation within 72 hours of first activation forfeits 100% of project investment.</li>
      </ol>
    </div>

    <div class="terms-item">
      <h4>8. Governing Law &amp; Dispute Resolution</h4>
      <ol>
        <li>This Agreement is governed by the laws of the State of New York, without regard to conflicts-of-law principles.</li>
        <li>Any dispute arising from or relating to this Agreement shall be resolved by binding arbitration administered by the American Arbitration Association in Nassau County, NY. <span style="color:var(--mercedes-teal);font-size:10px;cursor:pointer" onclick="openLegal('msa')">[MSA &sect;19]</span></li>
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
        <button class="sig-download-btn esign-btn" onclick="openDocuSignModal()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 15l2 2 4-4"/></svg>
          Send via DocuSign
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
          <button class="sig-download-btn esign-btn" onclick="openDocuSignModal()">
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

  <!-- MSA PANEL -->
  <div class="legal-panel" id="legal-msa">
    <button class="legal-close" onclick="closeLegal()">&times;</button>
    <div class="legal-panel-header">
      <div class="legal-eye">Master Services Agreement</div>
      <h3>MSA Cross-Reference</h3>
    </div>
    <p>This Proposal incorporates by reference the Master Services Agreement (&ldquo;MSA&rdquo;) between Gymshark Ltd. and Agora Graphics, LLC. The MSA governs the overarching business relationship &mdash; including intellectual property assignment, limitation of liability, insurance and indemnification, confidentiality, and dispute resolution &mdash; and shall control in the event of any conflict with this Proposal except where this Proposal expressly states otherwise.</p>
    <h4>Key Sections Referenced</h4>
    <p>&sect;3 &mdash; Engagement &amp; Execution<br>
    &sect;5 &mdash; Payment Terms<br>
    &sect;7 &mdash; Creative Approvals<br>
    &sect;9 &mdash; Intellectual Property<br>
    &sect;11 &mdash; Insurance &amp; Indemnification<br>
    &sect;15 &mdash; Termination<br>
    &sect;18 &mdash; Change Orders<br>
    &sect;19 &mdash; Governing Law &amp; Dispute Resolution</p>
    <p style="margin-top:24px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.06);font-size:11px;color:var(--text-muted)">Full MSA available upon request. Executed MSA takes precedence over any conflicting terms in this Proposal.</p>
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

    function submitSignature() {
      const now = new Date();
      const ts = now.toLocaleString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short'
      });
      const hash = 'SIG-' + now.getTime().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 8).toUpperCase();
      const submitWrap = document.getElementById('sig-submit-wrap');
      if (submitWrap) submitWrap.style.display = 'none';
      document.querySelectorAll('.sig-tab').forEach(t => (t as HTMLElement).style.display = 'none');
      document.querySelectorAll('.sig-options').forEach(o => (o as HTMLElement).style.display = 'none');
      const conf = document.getElementById('sig-confirmation');
      if (conf) conf.classList.add('show');
      const confirmTs = document.getElementById('sig-confirm-timestamp');
      if (confirmTs) confirmTs.textContent = 'Executed: ' + ts + ' | Reference: ' + hash;
    }

    function openDocuSignModal() {
      const subject = encodeURIComponent('Gymshark Phone Box \u2014 Proposal for Digital Signature | GS-PHONEBOX-001');
      const body = encodeURIComponent('Please find the Gymshark Phone Box NYC & Miami Activation proposal attached for digital signature.\n\nDocument: GS-PHONEBOX-001\n\nPlease review and execute at your earliest convenience.\n\n---\nAgora Graphics, LLC');
      window.location.href = 'mailto:mike@agoragraphics.com,julian@agvmiami.com?cc=info@agoravisuals.com&subject=' + subject + '&body=' + body;
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
    (window as any).openDocuSignModal = openDocuSignModal;
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
      delete (window as any).openDocuSignModal;
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
