"""
Generate the multi-version invoice xlsx for the Gymshark Phone Box proposal.
Producer: AGV Miami (legal entity AGV Miami, LLC).
One workbook with three sheets, in this order:
  1. V3.0 (current — Euclid Oval, Lincoln Road Mall + Logistics to NYC)
  2. V2.0 (two-event sequence — Miami Lincoln Road + NYC Bond St in-store)
  3. V1.0 (initial issuance — three options, $98,500 dual-city target)
Run: python3 scripts/generate_invoice.py
Output: public/invoices/GS-PHONEBOX-001-V3.0.xlsx
"""
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment

OUTPUT = "public/invoices/GS-PHONEBOX-001-V3.0.xlsx"

GOLD = "D4AF37"
DARK = "0C0C10"
INK = "1A1A22"
MUTED = "8A8A95"
WHITE = "FFFFFF"

f_eyebrow = Font(name="Helvetica", size=9, bold=True, color=GOLD)
f_label = Font(name="Helvetica", size=9, bold=True, color=MUTED)
f_meta = Font(name="Helvetica", size=11, color=DARK)
f_phase = Font(name="Helvetica", size=11, bold=True, color=WHITE)
f_line_name = Font(name="Helvetica", size=10, bold=True, color=DARK)
f_line_desc = Font(name="Helvetica", size=9, color=MUTED)
f_amount = Font(name="Helvetica", size=10, bold=True, color=DARK)
f_subtotal = Font(name="Helvetica", size=10, bold=True, color=GOLD)
f_credit = Font(name="Helvetica", size=10, bold=True, color="C44A4A")
f_footer = Font(name="Helvetica", size=8, color=MUTED, italic=True)

fill_phase = PatternFill("solid", start_color=INK, end_color=INK)
fill_subtotal = PatternFill("solid", start_color="F5F1E0", end_color="F5F1E0")
fill_total = PatternFill("solid", start_color=GOLD, end_color=GOLD)

TAB_GOLD = "D4AF37"
TAB_TEAL = "00C2A8"
TAB_MUTED = "8A8A95"


def setup(ws):
    ws.column_dimensions["A"].width = 4
    ws.column_dimensions["B"].width = 40
    ws.column_dimensions["C"].width = 70
    ws.column_dimensions["D"].width = 16
    ws.column_dimensions["E"].width = 4


def header_block(ws, row, version, issue_date, scope_summary, activation_summary):
    ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=4)
    cell = ws.cell(row=row, column=2, value="AGV MIAMI")
    cell.font = Font(name="Helvetica", size=24, bold=True, color=DARK)
    ws.row_dimensions[row].height = 36
    row += 1

    ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=4)
    cell = ws.cell(row=row, column=2, value=f"EXPERIENTIAL FABRICATION & PRODUCTION  ·  PROPOSAL INVOICE  ·  {version}")
    cell.font = Font(name="Helvetica", size=9, bold=True, color=GOLD)
    row += 2

    ws.cell(row=row, column=2, value="PRODUCER").font = f_label
    ws.cell(row=row, column=3, value="CLIENT").font = f_label
    ws.cell(row=row, column=4, value="PROJECT").font = f_label
    row += 1

    ws.cell(row=row, column=2, value="AGV Miami, LLC").font = f_meta
    ws.cell(row=row, column=3, value="Gymshark Ltd.").font = f_meta
    ws.cell(row=row, column=4, value="GS-PHONEBOX-001").font = f_meta
    row += 1

    ws.cell(row=row, column=2, value="1440 Church St").font = f_meta
    ws.cell(row=row, column=3, value="Attn: Authorized Billing Contact").font = f_meta
    ws.cell(row=row, column=4, value=version).font = f_meta
    row += 1

    ws.cell(row=row, column=2, value="Bohemia, NY 11716").font = f_meta
    ws.cell(row=row, column=3, value="c/o Ominto Studio").font = f_meta
    ws.cell(row=row, column=4, value=f"Issue Date: {issue_date}").font = f_meta
    row += 1

    ws.cell(row=row, column=2, value="julian@agvmiami.com").font = f_meta
    ws.cell(row=row, column=4, value=activation_summary[0]).font = f_meta
    row += 1

    ws.cell(row=row, column=2, value="info@agoravisuals.com").font = f_meta
    ws.cell(row=row, column=4, value=activation_summary[1] if len(activation_summary) > 1 else "").font = f_meta
    row += 2

    ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=4)
    cell = ws.cell(row=row, column=2, value=f"{version.split()[1]} SCOPE")
    cell.font = f_eyebrow
    row += 1

    ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=4)
    cell = ws.cell(row=row, column=2, value=scope_summary)
    cell.font = Font(name="Helvetica", size=10, color=DARK)
    cell.alignment = Alignment(wrap_text=True, vertical="top")
    ws.row_dimensions[row].height = max(40, 14 * (1 + len(scope_summary) // 90))
    row += 2
    return row


def phase_header(ws, row, label):
    ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=4)
    c = ws.cell(row=row, column=2, value=label)
    c.font = f_phase
    c.fill = fill_phase
    c.alignment = Alignment(horizontal="left", vertical="center", indent=1)
    ws.row_dimensions[row].height = 24
    return row + 1


def line_item(ws, row, name, desc, amount):
    ws.cell(row=row, column=2, value=name).font = f_line_name
    ws.cell(row=row, column=2).alignment = Alignment(vertical="top", wrap_text=True)
    ws.cell(row=row, column=3, value=desc).font = f_line_desc
    ws.cell(row=row, column=3).alignment = Alignment(vertical="top", wrap_text=True)
    c = ws.cell(row=row, column=4, value=amount)
    c.font = f_amount
    c.number_format = '"$"#,##0'
    c.alignment = Alignment(horizontal="right", vertical="top")
    ws.row_dimensions[row].height = 36
    return row + 1


def subtotal_row(ws, row, label, amount):
    for col in (2, 3, 4):
        ws.cell(row=row, column=col).fill = fill_subtotal
    ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=3)
    c = ws.cell(row=row, column=2, value=label)
    c.font = f_subtotal
    c.alignment = Alignment(horizontal="right", indent=1)
    c2 = ws.cell(row=row, column=4, value=amount)
    c2.font = f_subtotal
    c2.number_format = '"$"#,##0'
    c2.alignment = Alignment(horizontal="right")
    ws.row_dimensions[row].height = 22
    return row + 1


def gross_total_row(ws, row, label, amount):
    ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=3)
    c = ws.cell(row=row, column=2, value=label)
    c.font = Font(name="Helvetica", size=12, bold=True, color=DARK)
    c.alignment = Alignment(horizontal="right", indent=1)
    c2 = ws.cell(row=row, column=4, value=amount)
    c2.font = Font(name="Helvetica", size=12, bold=True, color=DARK)
    c2.number_format = '"$"#,##0'
    c2.alignment = Alignment(horizontal="right")
    return row + 1


def credit_row(ws, row, label, amount):
    ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=3)
    c = ws.cell(row=row, column=2, value=label)
    c.font = f_credit
    c.alignment = Alignment(horizontal="right", indent=1)
    c2 = ws.cell(row=row, column=4, value=amount)
    c2.font = f_credit
    c2.number_format = '"-$"#,##0'
    c2.alignment = Alignment(horizontal="right")
    return row + 1


def net_total_bar(ws, row, label, amount):
    for col in (2, 3, 4):
        ws.cell(row=row, column=col).fill = fill_total
    ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=3)
    c = ws.cell(row=row, column=2, value=label)
    c.font = Font(name="Helvetica", size=14, bold=True, color=DARK)
    c.alignment = Alignment(horizontal="right", indent=1, vertical="center")
    c2 = ws.cell(row=row, column=4, value=amount)
    c2.font = Font(name="Helvetica", size=18, bold=True, color=DARK)
    c2.number_format = '"$"#,##0'
    c2.alignment = Alignment(horizontal="right", vertical="center")
    ws.row_dimensions[row].height = 32
    return row + 1


def payment_block(ws, row, deposit, balance, balance_due_date, version_short):
    ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=4)
    cell = ws.cell(row=row, column=2, value="PAYMENT TERMS")
    cell.font = f_eyebrow
    row += 1

    ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=4)
    body = (
        f"60% deposit (${deposit:,}) due upon Client's written approval of this Scope of Work (Proposal execution). "
        f"40% balance (${balance:,}) due five (5) business days prior to first activation installation "
        f"({balance_due_date}). "
        f"Payment exclusively via ACH electronic transfer or domestic wire transfer; ACH/wire details issued directly to the Client billing contact upon SoW approval. "
        f"Reference GS-PHONEBOX-001 {version_short} on all remittances."
    )
    cell = ws.cell(row=row, column=2, value=body)
    cell.font = Font(name="Helvetica", size=10, color=DARK)
    cell.alignment = Alignment(wrap_text=True, vertical="top")
    ws.row_dimensions[row].height = 70
    return row + 2


def footer(ws, row, version_short):
    ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=4)
    cell = ws.cell(row=row, column=2, value=(
        f"AGV Miami, LLC  ·  1440 Church St, Bohemia, NY 11716  ·  julian@agvmiami.com  ·  This invoice is issued in connection with proposal "
        f"GS-PHONEBOX-001 {version_short} and incorporates by reference the executed Master Services Agreement between AGV Miami, LLC and Gymshark Ltd."
    ))
    cell.font = f_footer
    cell.alignment = Alignment(wrap_text=True, vertical="top", horizontal="left")
    ws.row_dimensions[row].height = 32


# ---------- V3.0 SHEET (current) ----------
def build_v3_sheet(ws):
    setup(ws)
    ws.sheet_properties.tabColor = TAB_GOLD
    row = header_block(
        ws, row=1,
        version="Version 3.0",
        issue_date="April 29, 2026",
        scope_summary=(
            "Single-event programme: fully-painted pink British phone box with interactive call/voucher/photo tech, "
            "deployed for a one-day street activation at Euclid Oval, Lincoln Road Mall, Miami Beach on Friday, "
            "July 17, 2026 (Saturday, July 18 held as a weather contingency). Light touchup post-Miami; logistical "
            "return to NYC handoff destination — no NYC retail activation, no respray/rewrap package."
        ),
        activation_summary=("Activation: Friday, July 17, 2026", "Venue: Euclid Oval, Lincoln Road Mall"),
    )

    row = phase_header(ws, row, "Phase 01  —  The Phone Box (Painted Finish)")
    row = line_item(ws, row, "Phone Box Structural Shell", "Custom scenic fabrication, marine-grade paint in Gymshark Pink, two-piece modular construction", 14500)
    row = line_item(ws, row, "4-Sided Illuminated Lightbox Signage", "LED-backlit translucent face panels on all four sides; weatherproof housing", 6800)
    row = line_item(ws, row, "Glass & Semi-Transparent Vinyl Panels", "Tempered glass on front door + sides with custom-printed semi-transparent privacy vinyl", 2900)
    row = line_item(ws, row, "Pink Painted Interior Finish (V3.0)", "Fully-painted four-wall pink interior — replaces vinyl-lined interior for durability and finish quality", 3200)
    row = line_item(ws, row, "Concealed Sliding Prize Door", "Motorised, colour-matched, no visible handle on public face", 3400)
    row = line_item(ws, row, "Interior Finishes", "Aluminium chequer-plate flooring, dome light, guest seat, branded analogue phone", 2750)
    row = line_item(ws, row, "Engineering, Structural Calcs & Shop Drawings", "Wind-load, ballast plan, electrical schematics, CAD shop drawings, venue-compliance package", 4000)
    row = subtotal_row(ws, row, "Subtotal — The Phone Box", 37550)

    row = phase_header(ws, row, "Phase 02  —  Interactive Tech + Content Capture")
    row = line_item(ws, row, "Pre-Recorded Call-Response (IVR) System", "Multi-branch scripting, licensed voice talent, keypad mapping, redundant win/lose logic, QA", 5500)
    row = line_item(ws, row, "Live Call / Walkie-Talkie Relay", "Dual-mode encrypted relay, backup uplink, on-site producer headset, external broadcast", 2900)
    row = line_item(ws, row, "Ceiling Dual Camera System", "Two 4K video+audio cameras, cloud storage, live-preview monitoring, disclosure signage", 4500)
    row = line_item(ws, row, "Selfie & Belfie Mobile Mounts", "Two pink wall-mounted holders with motion-triggered ring-light inserts, dual-height", 1800)
    row = line_item(ws, row, "Thermal Voucher Printer & Shelf Mount", "Dual-speed thermal ticket printer, pink wrap, redundant roll inventory, firmware", 2800)
    row = line_item(ws, row, "Content Capture & Media Handoff Platform", "Cloud workspace, colour-corrected proxies, organised file-naming, 48-hour handoff", 2500)
    row = subtotal_row(ws, row, "Subtotal — Interactive Tech + Content Capture", 20000)

    row = phase_header(ws, row, "Phase 03  —  Branding, Signage & Consumables")
    row = line_item(ws, row, "Disclosure & Wayfinding Signage", "Camera-disclosure sign, queue management decals, brand lockup callouts in brand palette", 950)
    row = line_item(ws, row, "Venue Dressing Kit", "Portable A-frame signage, branded stanchions, pavement decals for the Euclid Oval street activation", 1750)
    row = line_item(ws, row, "Daily Consumables & Spares Kit", "Voucher paper rolls, cleaning supplies, sanitisation wipes, touch-up paint, vinyl repair, pink gaffer", 2500)
    row = subtotal_row(ws, row, "Subtotal — Branding, Signage & Consumables", 5200)

    row = phase_header(ws, row, "Phase 04a  —  The Activation (Euclid Oval, Lincoln Road Mall, Miami Beach)")
    row = line_item(ws, row, "Inbound Logistics & Install", "Truck, rigging hardware, 3-person install crew, permit-window supervisor, 4–6 hr install window", 5800)
    row = line_item(ws, row, "On-Site Technicians", "Dedicated lead technician plus rotating second tech for rush windows and breaks", 2800)
    row = line_item(ws, row, "Same-Day Strike & Outbound Freight", "Complete de-installation, module breakdown, crated outbound freight, full site restoration", 3300)
    row = subtotal_row(ws, row, "Subtotal — The Activation (Euclid Oval)", 11900)

    row = phase_header(ws, row, "Phase 04b  —  Logistics to NYC (Asset Transfer Only)")
    row = line_item(ws, row, "Climate-Controlled Warehouse Hold", "Secure climate-controlled storage at the AGV Miami NYC staging facility between Miami strike and NYC handoff", 2400)
    row = line_item(ws, row, "Inter-City Freight (Climate-Controlled Truck)", "Miami → AGV Miami NYC staging facility with real-time GPS tracking, two-driver rotation, handoff documentation", 5500)
    row = line_item(ws, row, "Light Touchup After First Activation (V3 — new line)", "Single light cosmetic touchup pass after Miami activation: scuff/scratch repair, paint colour-match, lightbox edge cleanup, IVR/camera/printer functional re-test", 3000)
    row = line_item(ws, row, "Final Delivery to NYC Handoff Destination", "Climate-controlled final-mile delivery from AGV Miami NYC staging to client's designated NYC handoff address. Asset transfer only — no installation, commissioning, or activation.", 2000)
    row = subtotal_row(ws, row, "Subtotal — Logistics to NYC", 12900)

    row = phase_header(ws, row, "Phase 05  —  Project Management & Client Services")
    row = line_item(ws, row, "Project Management Fee", "Dedicated senior producer, weekly status reporting, milestone tracking, Change Order administration, vendor / venue liaison, COI + insurance coordination, post-event reconciliation", 12000)
    row = subtotal_row(ws, row, "Subtotal — Project Management", 12000)

    row += 1
    row = gross_total_row(ws, row, "Gross Production Investment", 100150)
    row = credit_row(ws, row, "Less: Preferred Partner Credit", -5000)
    row = net_total_bar(ws, row, "NET V3.0 PRODUCTION INVESTMENT", 95150)
    row += 1

    row = payment_block(ws, row, deposit=57090, balance=38060, balance_due_date="on or before Friday, July 10, 2026", version_short="V3.0")
    footer(ws, row, "V3.0")


# ---------- V2.0 SHEET ----------
def build_v2_sheet(ws):
    setup(ws)
    ws.sheet_properties.tabColor = TAB_TEAL
    row = header_block(
        ws, row=1,
        version="Version 2.0",
        issue_date="April 29, 2026",
        scope_summary=(
            "Two-event sequence. Event 01 — Miami: Lincoln Road Mall street activation on Saturday, June 27, 2026 "
            "(AGV Miami recommended Euclid Oval, 1100 block). Event 02 — New York: in-store fixture at Gymshark "
            "Bond St, delivered by July 9, 2026 to anchor the July 11 product launch and a 4-week in-store run "
            "through August 6, 2026. Inter-city respray/rewrap to NYC palette between events. "
            "[Superseded by V3.0 — included for reference only.]"
        ),
        activation_summary=("Event 01 (Miami): June 27, 2026", "Event 02 (NYC Bond St): July 9 – Aug 6, 2026"),
    )

    row = phase_header(ws, row, "Phase 01  —  The Phone Box")
    row = line_item(ws, row, "Phone Box Structural Shell", "Custom scenic fabrication, marine-grade paint, two-piece modular", 14500)
    row = line_item(ws, row, "4-Sided Illuminated Lightbox Signage", "LED-backlit translucent face panels on all four sides", 6800)
    row = line_item(ws, row, "Glass & Semi-Transparent Vinyl Panels", "Tempered glass on front door + sides", 2900)
    row = line_item(ws, row, "Pink Vinyl Interior Lining", "Four-wall pink vinyl wrap with 'bum mirror' messaging", 3200)
    row = line_item(ws, row, "Concealed Sliding Prize Door", "Motorised, colour-matched", 3400)
    row = line_item(ws, row, "Interior Finishes", "Chequer plate floor, dome light, seat, analogue phone", 2750)
    row = line_item(ws, row, "Engineering, Structural Calcs & Shop Drawings", "Wind-load, ballast, electrical, CAD", 4000)
    row = subtotal_row(ws, row, "Subtotal — The Phone Box", 37550)

    row = phase_header(ws, row, "Phase 02  —  Interactive Tech + Content Capture")
    row = line_item(ws, row, "Pre-Recorded Call-Response (IVR) System", "Multi-branch scripting, licensed voice, QA", 5500)
    row = line_item(ws, row, "Live Call / Walkie-Talkie Relay", "Dual-mode encrypted relay, backup uplink, producer headset", 2900)
    row = line_item(ws, row, "Ceiling Dual Camera System", "Two 4K cameras, cloud storage, live-preview, disclosure signage", 4500)
    row = line_item(ws, row, "Selfie & Belfie Mobile Mounts", "Motion-triggered ring-light inserts, dual-height", 1800)
    row = line_item(ws, row, "Thermal Voucher Printer & Shelf Mount", "Dual-speed thermal printer, pink wrap, redundant roll inventory", 2800)
    row = line_item(ws, row, "Content Capture & Media Handoff Platform", "Cloud workspace, proxies, 48-hour handoff", 2500)
    row = subtotal_row(ws, row, "Subtotal — Interactive Tech + Content Capture", 20000)

    row = phase_header(ws, row, "Phase 03  —  Branding, Signage & Consumables")
    row = line_item(ws, row, "Disclosure & Wayfinding Signage", "Camera-disclosure, queue management decals, brand lockup callouts", 950)
    row = line_item(ws, row, "Venue Dressing Kit", "A-frame signage, branded stanchions, pavement decals", 1750)
    row = line_item(ws, row, "Daily Consumables & Spares Kit", "Voucher rolls, cleaning, spares, gaffer", 2500)
    row = subtotal_row(ws, row, "Subtotal — Branding, Signage & Consumables", 5200)

    row = phase_header(ws, row, "Phase 04a  —  Event 01: Miami Lincoln Road Street Activation")
    row = line_item(ws, row, "Inbound Logistics & Install (Miami)", "3-person install crew, permit-window supervisor, 4–6 hr install window", 5800)
    row = line_item(ws, row, "On-Site Technicians (Miami)", "Lead technician + rotating second tech for rush windows", 2800)
    row = line_item(ws, row, "Same-Day Strike & Outbound Freight (Miami)", "De-installation, module breakdown, crated outbound freight", 3300)
    row = subtotal_row(ws, row, "Subtotal — Event 01 Miami", 11900)

    row = phase_header(ws, row, "Phase 04b  —  Inter-City Respray/Rewrap to NYC Palette")
    row = line_item(ws, row, "Climate-Controlled Warehouse Hold (10 days)", "Secure climate-controlled storage between Miami strike and NYC delivery", 2900)
    row = line_item(ws, row, "Inter-City Freight (Miami → NYC, climate truck)", "Dedicated climate truck with two-driver rotation, GPS tracking", 5500)
    row = line_item(ws, row, "Exterior Vinyl Refresh (NYC Reskin)", "Removal of Miami exterior vinyl + NYC-specific campaign wrap", 5400)
    row = line_item(ws, row, "Interior Vinyl Refresh (NYC Reskin)", "Removal of Miami interior vinyl + NYC product-launch creative", 3500)
    row = line_item(ws, row, "Lightbox Graphic Refresh (NYC Reskin)", "Reprint and reinstallation of four lightbox faces with NYC creative", 2400)
    row = line_item(ws, row, "NYC Site Re-Survey & Local Permit Coordination", "On-the-ground survey, permit liaison, COI issuance, site readiness sign-off", 2500)
    row = line_item(ws, row, "Pre-Deployment QC & Refinishing", "Reassembly inspection, touch-up paint, electrical recheck, system bench-test", 2800)
    row = subtotal_row(ws, row, "Subtotal — Respray Package", 25000)

    row = phase_header(ws, row, "Phase 04c  —  Event 02: NYC Bond St In-Store Activation")
    row = line_item(ws, row, "Inbound Logistics & Install (NYC)", "3-person install crew, permit-window supervisor", 5800)
    row = line_item(ws, row, "On-Site Technicians (NYC)", "Lead technician + rotating second tech", 2800)
    row = line_item(ws, row, "Strike & Outbound Freight (NYC)", "End-of-launch de-installation and return freight", 3300)
    row = subtotal_row(ws, row, "Subtotal — Event 02 NYC", 11900)

    row = phase_header(ws, row, "Phase 05  —  Project Management & Client Services")
    row = line_item(ws, row, "Project Management Fee", "Dedicated senior producer, weekly status, milestone tracking, COI + insurance coordination", 12000)
    row = subtotal_row(ws, row, "Subtotal — Project Management", 12000)

    row += 1
    row = gross_total_row(ws, row, "Gross Production Investment", 124150)
    row = credit_row(ws, row, "Less: Preferred Partner Credit", -5000)
    row = net_total_bar(ws, row, "NET V2.0 PRODUCTION INVESTMENT", 119150)
    row += 1

    row = payment_block(ws, row, deposit=71490, balance=47660, balance_due_date="five (5) business days prior to Event 01 install", version_short="V2.0")
    footer(ws, row, "V2.0 — superseded by V3.0")


# ---------- V1.0 SHEET ----------
def build_v1_sheet(ws):
    setup(ws)
    ws.sheet_properties.tabColor = TAB_MUTED
    row = header_block(
        ws, row=1,
        version="Version 1.0",
        issue_date="April 17, 2026",
        scope_summary=(
            "Initial issuance: three execution options against a $120,000 overall budget. Option 01 NYC-only; "
            "Option 02 Miami-only; Option 03 dual-city (Miami first → NYC second) with full inter-city reskin "
            "package. Twelve recommended venues across both cities. The figures below itemize the recommended "
            "Option 03 dual-city configuration ($98,500 production target). [Superseded by V2.0 and V3.0 — "
            "included for reference only.]"
        ),
        activation_summary=("Recommended Option 03: Miami Jun 27, 2026", "→ NYC Jul 11, 2026 (with reskin)"),
    )

    row = phase_header(ws, row, "Phase 01  —  The Phone Box")
    row = line_item(ws, row, "Phone Box Structural Shell", "Custom scenic fabrication, marine-grade paint, two-piece modular", 14500)
    row = line_item(ws, row, "4-Sided Illuminated Lightbox Signage", "LED-backlit translucent face panels on all four sides", 6800)
    row = line_item(ws, row, "Glass & Semi-Transparent Vinyl Panels", "Tempered glass on front door + sides", 2900)
    row = line_item(ws, row, "Pink Vinyl Interior Lining", "Four-wall pink vinyl wrap with 'bum mirror' messaging", 3200)
    row = line_item(ws, row, "Concealed Sliding Prize Door", "Motorised, colour-matched", 3400)
    row = line_item(ws, row, "Interior Finishes", "Chequer plate floor, dome light, seat, analogue phone", 2750)
    row = subtotal_row(ws, row, "Subtotal — The Phone Box", 33550)

    row = phase_header(ws, row, "Phase 02  —  Interactive Tech")
    row = line_item(ws, row, "Pre-Recorded Call-Response (IVR) System", "Scripting, voice, keypad logic", 3500)
    row = line_item(ws, row, "Live Call / Walkie-Talkie Relay", "Social producer handoff", 1800)
    row = line_item(ws, row, "Ceiling Dual Camera System", "Video+audio, cloud storage, disclosure sign", 2400)
    row = line_item(ws, row, "Thermal Voucher Printer & Shelf Mount", "Wrapped, shelf aligned to sliding door", 1950)
    row = line_item(ws, row, "Selfie & Belfie Mobile Mounts", "Colour-matched, dual-height", 650)
    row = subtotal_row(ws, row, "Subtotal — Interactive Tech", 10300)

    row = phase_header(ws, row, "Phase 03  —  Branding & Packaging")
    row = line_item(ws, row, "Custom Product Boxes (200 units)", "Yellow-pages inspired, 300×200×70 mm", 4800)
    row = line_item(ws, row, "Disclosure & Wayfinding Signage", "Camera disclosure, queue management decals", 950)
    row = line_item(ws, row, "Venue Dressing Kit", "A-frames, stanchions, pavement decals", 1750)
    row = subtotal_row(ws, row, "Subtotal — Branding & Packaging", 7500)

    row = phase_header(ws, row, "Phase 04  —  Logistics, Install & Strike (Per Activation)")
    row = line_item(ws, row, "Inbound Logistics & Install — Miami", "Truck, rigging, install crew, electrical hookup", 4200)
    row = line_item(ws, row, "On-Site Technician — Miami", "Single technician across operating window", 1400)
    row = line_item(ws, row, "Same-Day Strike & Outbound Freight — Miami", "De-installation, module breakdown, freight", 2800)
    row = line_item(ws, row, "Inbound Logistics & Install — NYC", "Truck, rigging, install crew, electrical hookup", 4200)
    row = line_item(ws, row, "On-Site Technician — NYC", "Single technician across operating window", 1400)
    row = line_item(ws, row, "Same-Day Strike & Outbound Freight — NYC", "De-installation, module breakdown, freight", 2800)
    row = subtotal_row(ws, row, "Subtotal — Two-City Logistics", 16800)

    row = phase_header(ws, row, "Phase 04 Add-On  —  Inter-City Rewrap (Option 03)")
    row = line_item(ws, row, "Inter-City Rewrap & Transport", "Warehouse hold, vinyl refresh, Miami↔NYC truck", 9500)
    row = subtotal_row(ws, row, "Subtotal — Inter-City Rewrap", 9500)

    row = phase_header(ws, row, "V1.0 Note  —  Other Programme Elements (Bundled)")
    row = line_item(
        ws, row,
        "Programme Bundle (V1.0 reference)",
        "V1.0 published a $98,500 dual-city production target that included additional logistics, contingency, and venue-specific finishing not yet itemized at issuance. The line items above ($77,650) plus this bundled allowance ($20,850) reconcile to the published $98,500 V1.0 figure. Subsequent versions broke out these items individually (engineering, content capture, project management, retail/respray scope changes).",
        20850,
    )
    row = subtotal_row(ws, row, "Subtotal — Bundled Allowance", 20850)

    row += 1
    row = gross_total_row(ws, row, "V1.0 Production Investment (Option 03 Dual-City)", 98500)
    row += 1

    row = payment_block(ws, row, deposit=59100, balance=39400, balance_due_date="three (3) business days prior to first activation", version_short="V1.0")
    footer(ws, row, "V1.0 — superseded by V2.0 and V3.0")


def main():
    wb = Workbook()

    ws3 = wb.active
    ws3.title = "V3.0 — Current"
    build_v3_sheet(ws3)

    ws2 = wb.create_sheet(title="V2.0 — Superseded")
    build_v2_sheet(ws2)

    ws1 = wb.create_sheet(title="V1.0 — Initial")
    build_v1_sheet(ws1)

    wb.save(OUTPUT)
    print(f"Wrote {OUTPUT} with sheets: {[s.title for s in wb.worksheets]}")


if __name__ == "__main__":
    main()
