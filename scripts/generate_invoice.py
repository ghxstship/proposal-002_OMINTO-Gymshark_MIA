"""
Generate the V3.0 invoice xlsx for the Gymshark Phone Box proposal.
Producer: AGV Miami (legal entity AGV Miami, LLC).
Run: python3 scripts/generate_invoice.py
Output: public/invoices/GS-PHONEBOX-001-V3.0.xlsx
"""
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

OUTPUT = "public/invoices/GS-PHONEBOX-001-V3.0.xlsx"

GOLD = "D4AF37"
DARK = "0C0C10"
INK = "1A1A22"
MUTED = "8A8A95"
WHITE = "FFFFFF"
ACCENT_PINK = "FF4BA2"

thin = Side(style="thin", color="DDDDDD")
border_all = Border(top=thin, left=thin, right=thin, bottom=thin)

f_title = Font(name="Helvetica", size=22, bold=True, color=DARK)
f_eyebrow = Font(name="Helvetica", size=9, bold=True, color=GOLD)
f_label = Font(name="Helvetica", size=9, bold=True, color=MUTED)
f_meta = Font(name="Helvetica", size=11, color=DARK)
f_phase = Font(name="Helvetica", size=11, bold=True, color=WHITE)
f_line_name = Font(name="Helvetica", size=10, bold=True, color=DARK)
f_line_desc = Font(name="Helvetica", size=9, color=MUTED)
f_amount = Font(name="Helvetica", size=10, bold=True, color=DARK)
f_subtotal = Font(name="Helvetica", size=10, bold=True, color=GOLD)
f_total = Font(name="Helvetica", size=14, bold=True, color=DARK)
f_total_amount = Font(name="Helvetica", size=14, bold=True, color=GOLD)
f_credit = Font(name="Helvetica", size=10, bold=True, color="C44A4A")
f_footer = Font(name="Helvetica", size=8, color=MUTED, italic=True)

fill_phase = PatternFill("solid", start_color=INK, end_color=INK)
fill_subtotal = PatternFill("solid", start_color="F5F1E0", end_color="F5F1E0")
fill_total = PatternFill("solid", start_color=GOLD, end_color=GOLD)
fill_header = PatternFill("solid", start_color=DARK, end_color=DARK)


def main():
    wb = Workbook()
    ws = wb.active
    ws.title = "Invoice GS-PHONEBOX-001 V3.0"

    ws.column_dimensions["A"].width = 4
    ws.column_dimensions["B"].width = 40
    ws.column_dimensions["C"].width = 70
    ws.column_dimensions["D"].width = 16
    ws.column_dimensions["E"].width = 4

    row = 1

    # Header band
    ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=4)
    cell = ws.cell(row=row, column=2, value="AGV MIAMI")
    cell.font = Font(name="Helvetica", size=24, bold=True, color=DARK)
    cell.alignment = Alignment(horizontal="left", vertical="center")
    ws.row_dimensions[row].height = 36
    row += 1

    ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=4)
    cell = ws.cell(row=row, column=2, value="EXPERIENTIAL FABRICATION & PRODUCTION  ·  PROPOSAL INVOICE")
    cell.font = Font(name="Helvetica", size=9, bold=True, color=GOLD)
    cell.alignment = Alignment(horizontal="left", vertical="center")
    row += 1

    row += 1

    # Two-column header: Producer (left) vs Client/Project (right)
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
    ws.cell(row=row, column=4, value="Version 3.0").font = f_meta
    row += 1

    ws.cell(row=row, column=2, value="Bohemia, NY 11716").font = f_meta
    ws.cell(row=row, column=3, value="c/o Ominto Studio").font = f_meta
    ws.cell(row=row, column=4, value="Issue Date: April 29, 2026").font = f_meta
    row += 1

    ws.cell(row=row, column=2, value="julian@agvmiami.com").font = f_meta
    ws.cell(row=row, column=3, value="").font = f_meta
    ws.cell(row=row, column=4, value="Activation: July 17, 2026").font = f_meta
    row += 1

    ws.cell(row=row, column=2, value="info@agoravisuals.com").font = f_meta
    ws.cell(row=row, column=4, value="(backup July 18, 2026)").font = f_meta
    row += 2

    # Project description
    ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=4)
    cell = ws.cell(row=row, column=2, value="V3.0 SCOPE")
    cell.font = f_eyebrow
    row += 1

    ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=4)
    cell = ws.cell(row=row, column=2, value=(
        "Single-event programme: fully-painted pink British phone box with interactive call/voucher/photo tech, "
        "deployed for a one-day street activation at Lincoln Road Mall, Miami Beach on July 17, 2026 "
        "(backup July 18). Light touchup post-Miami; logistical return to NYC handoff destination — "
        "no NYC retail activation, no respray/rewrap package."
    ))
    cell.font = Font(name="Helvetica", size=10, color=DARK)
    cell.alignment = Alignment(wrap_text=True, vertical="top")
    ws.row_dimensions[row].height = 50
    row += 2

    # Line items table
    def phase_header(label):
        nonlocal row
        ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=4)
        c = ws.cell(row=row, column=2, value=label)
        c.font = f_phase
        c.fill = fill_phase
        c.alignment = Alignment(horizontal="left", vertical="center", indent=1)
        ws.row_dimensions[row].height = 24
        row += 1

    def line_item(name, desc, amount):
        nonlocal row
        ws.cell(row=row, column=2, value=name).font = f_line_name
        ws.cell(row=row, column=2).alignment = Alignment(vertical="top", wrap_text=True)
        ws.cell(row=row, column=3, value=desc).font = f_line_desc
        ws.cell(row=row, column=3).alignment = Alignment(vertical="top", wrap_text=True)
        c = ws.cell(row=row, column=4, value=amount)
        c.font = f_amount
        c.number_format = '"$"#,##0'
        c.alignment = Alignment(horizontal="right", vertical="top")
        ws.row_dimensions[row].height = 36
        row += 1

    def subtotal(label, amount):
        nonlocal row
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
        row += 1

    # Phase 01
    phase_header("Phase 01  —  The Phone Box (Painted Finish)")
    line_item("Phone Box Structural Shell", "Custom scenic fabrication, marine-grade paint in Gymshark Pink, two-piece modular construction", 14500)
    line_item("4-Sided Illuminated Lightbox Signage", "LED-backlit translucent face panels on all four sides; weatherproof housing", 6800)
    line_item("Glass & Semi-Transparent Vinyl Panels", "Tempered glass on front door + sides with custom-printed semi-transparent privacy vinyl", 2900)
    line_item("Pink Painted Interior Finish (V3.0)", "Fully-painted four-wall pink interior — replaces vinyl-lined interior for durability and finish quality", 3200)
    line_item("Concealed Sliding Prize Door", "Motorised, colour-matched, no visible handle on public face", 3400)
    line_item("Interior Finishes", "Aluminium chequer-plate flooring, dome light, guest seat, branded analogue phone", 2750)
    line_item("Engineering, Structural Calcs & Shop Drawings", "Wind-load, ballast plan, electrical schematics, CAD shop drawings, venue-compliance package", 4000)
    subtotal("Subtotal — The Phone Box", 37550)

    # Phase 02
    phase_header("Phase 02  —  Interactive Tech + Content Capture")
    line_item("Pre-Recorded Call-Response (IVR) System", "Multi-branch scripting, licensed voice talent, keypad mapping, redundant win/lose logic, QA", 5500)
    line_item("Live Call / Walkie-Talkie Relay", "Dual-mode encrypted relay, backup uplink, on-site producer headset, external broadcast", 2900)
    line_item("Ceiling Dual Camera System", "Two 4K video+audio cameras, cloud storage, live-preview monitoring, disclosure signage", 4500)
    line_item("Selfie & Belfie Mobile Mounts", "Two pink wall-mounted holders with motion-triggered ring-light inserts, dual-height", 1800)
    line_item("Thermal Voucher Printer & Shelf Mount", "Dual-speed thermal ticket printer, pink wrap, redundant roll inventory, firmware", 2800)
    line_item("Content Capture & Media Handoff Platform", "Cloud workspace, colour-corrected proxies, organised file-naming, 48-hour handoff", 2500)
    subtotal("Subtotal — Interactive Tech + Content Capture", 20000)

    # Phase 03
    phase_header("Phase 03  —  Branding, Signage & Consumables")
    line_item("Disclosure & Wayfinding Signage", "Camera-disclosure sign, queue management decals, brand lockup callouts in brand palette", 950)
    line_item("Venue Dressing Kit", "Portable A-frame signage, branded stanchions, pavement decals for Lincoln Road street activation", 1750)
    line_item("Daily Consumables & Spares Kit", "Voucher paper rolls, cleaning supplies, sanitisation wipes, touch-up paint, vinyl repair, pink gaffer", 2500)
    subtotal("Subtotal — Branding, Signage & Consumables", 5200)

    # Phase 04 — Activation
    phase_header("Phase 04a  —  The Activation (Lincoln Road, Miami Beach)")
    line_item("Inbound Logistics & Install", "Truck, rigging hardware, 3-person install crew, permit-window supervisor, 4–6 hr install window", 5800)
    line_item("On-Site Technicians", "Dedicated lead technician plus rotating second tech for rush windows and breaks", 2800)
    line_item("Same-Day Strike & Outbound Freight", "Complete de-installation, module breakdown, crated outbound freight, full site restoration", 3300)
    subtotal("Subtotal — The Activation (Lincoln Road)", 11900)

    # Phase 04b — Logistics to NYC
    phase_header("Phase 04b  —  Logistics to NYC (Asset Transfer Only)")
    line_item("Climate-Controlled Warehouse Hold", "Secure climate-controlled storage at the AGV Miami NYC staging facility between Miami strike and NYC handoff", 2400)
    line_item("Inter-City Freight (Climate-Controlled Truck)", "Miami → AGV Miami NYC staging facility with real-time GPS tracking, two-driver rotation, handoff documentation", 5500)
    line_item("Light Touchup After First Activation (V3 — new line)", "Single light cosmetic touchup pass after Miami activation: scuff/scratch repair, paint colour-match, lightbox edge cleanup, IVR/camera/printer functional re-test", 3000)
    line_item("Final Delivery to NYC Handoff Destination", "Climate-controlled final-mile delivery from AGV Miami NYC staging to client's designated NYC handoff address. Asset transfer only — no installation, commissioning, or activation.", 2000)
    subtotal("Subtotal — Logistics to NYC", 12900)

    # Phase 05
    phase_header("Phase 05  —  Project Management & Client Services")
    line_item("Project Management Fee", "Dedicated senior producer, weekly status reporting, milestone tracking, Change Order administration, vendor / venue liaison, COI + insurance coordination, post-event reconciliation", 12000)
    subtotal("Subtotal — Project Management", 12000)

    row += 1

    # Totals block
    ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=3)
    c = ws.cell(row=row, column=2, value="Gross Production Investment")
    c.font = Font(name="Helvetica", size=12, bold=True, color=DARK)
    c.alignment = Alignment(horizontal="right", indent=1)
    c2 = ws.cell(row=row, column=4, value=100150)
    c2.font = Font(name="Helvetica", size=12, bold=True, color=DARK)
    c2.number_format = '"$"#,##0'
    c2.alignment = Alignment(horizontal="right")
    row += 1

    ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=3)
    c = ws.cell(row=row, column=2, value="Less: Preferred Partner Credit")
    c.font = f_credit
    c.alignment = Alignment(horizontal="right", indent=1)
    c2 = ws.cell(row=row, column=4, value=-5000)
    c2.font = f_credit
    c2.number_format = '"-$"#,##0'
    c2.alignment = Alignment(horizontal="right")
    row += 1

    # Net total bar
    for col in (2, 3, 4):
        ws.cell(row=row, column=col).fill = fill_total
    ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=3)
    c = ws.cell(row=row, column=2, value="NET V3.0 PRODUCTION INVESTMENT")
    c.font = Font(name="Helvetica", size=14, bold=True, color=DARK)
    c.alignment = Alignment(horizontal="right", indent=1, vertical="center")
    c2 = ws.cell(row=row, column=4, value=95150)
    c2.font = Font(name="Helvetica", size=18, bold=True, color=DARK)
    c2.number_format = '"$"#,##0'
    c2.alignment = Alignment(horizontal="right", vertical="center")
    ws.row_dimensions[row].height = 32
    row += 2

    # Payment Terms
    ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=4)
    cell = ws.cell(row=row, column=2, value="PAYMENT TERMS")
    cell.font = f_eyebrow
    row += 1

    ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=4)
    cell = ws.cell(row=row, column=2, value=(
        "60% deposit ($57,090) due upon Client's written approval of this Scope of Work (Proposal execution). "
        "40% balance ($38,060) due five (5) business days prior to first activation installation (i.e., on or before July 10, 2026). "
        "Payment exclusively via ACH electronic transfer or domestic wire transfer; ACH/wire details issued directly to the Client billing contact upon SoW approval. "
        "Reference GS-PHONEBOX-001 V3.0 on all remittances."
    ))
    cell.font = Font(name="Helvetica", size=10, color=DARK)
    cell.alignment = Alignment(wrap_text=True, vertical="top")
    ws.row_dimensions[row].height = 70
    row += 2

    # Footer
    ws.merge_cells(start_row=row, start_column=2, end_row=row, end_column=4)
    cell = ws.cell(row=row, column=2, value=(
        "AGV Miami, LLC  ·  1440 Church St, Bohemia, NY 11716  ·  julian@agvmiami.com  ·  This invoice is issued in connection with proposal "
        "GS-PHONEBOX-001 V3.0 and incorporates by reference the executed Master Services Agreement between AGV Miami, LLC and Gymshark Ltd."
    ))
    cell.font = f_footer
    cell.alignment = Alignment(wrap_text=True, vertical="top", horizontal="left")
    ws.row_dimensions[row].height = 32

    wb.save(OUTPUT)
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    main()
