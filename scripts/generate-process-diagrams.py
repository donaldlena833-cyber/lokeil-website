from html import escape
from textwrap import wrap
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / 'public' / 'process'
ROOT.mkdir(parents=True, exist_ok=True)

DIAGRAMS = {
    'shower': (
        'What sits behind shower tile',
        'Typical bonded waterproof shower wall sequence',
        [('01', 'Solid backing', 'Choose a suitable wall base for the specified system.'),
         ('02', 'Waterproof layer', 'Join seams, corners and openings to the drain system.'),
         ('03', 'Setting mortar', 'Use a compatible mortar and achieve required coverage.'),
         ('04', 'Tile and grout', 'Set the planned layout, then finish the joints.'),
         ('05', 'Final joints', 'Use the specified sealant at changes of plane.')],
        'Tile and grout are the visible finish. The waterproof assembly manages water.'
    ),
    'floor': (
        'How a tile floor comes together',
        'Preparation and layout before the finished surface',
        [('01', 'Inspect base', 'Check soundness, movement and finished floor height.'),
         ('02', 'Prepare surface', 'Use a suitable substrate or underlayment.'),
         ('03', 'Plan layout', 'Balance cuts, pattern and doorway transitions.'),
         ('04', 'Set tile', 'Use compatible setting material and spacing.'),
         ('05', 'Finish edges', 'Grout and complete movement and transition details.')],
        'A shower floor also needs a sloped waterproof assembly tied to its drain.'
    ),
    'niche': (
        'How a shower niche is planned',
        'Storage needs to fit the wall and the wet area system',
        [('01', 'Locate opening', 'Check framing, plumbing and bottle dimensions.'),
         ('02', 'Build support', 'Create a solid box that fits the tile layout.'),
         ('03', 'Waterproof', 'Connect every corner and seam to the wall system.'),
         ('04', 'Pitch the sill', 'Guide water back into the shower.'),
         ('05', 'Finish tile', 'Align cuts and complete the edge treatment.')],
        'The photo cannot show the hidden waterproofing behind a finished niche.'
    ),
    'cabinet': (
        'How cabinet installation is planned',
        'A straight line depends on the support and measurements',
        [('01', 'Measure room', 'Check walls, floor, appliances and clearances.'),
         ('02', 'Set reference', 'Mark level lines and locate suitable support.'),
         ('03', 'Install boxes', 'Secure and align cabinets to the specified support.'),
         ('04', 'Fit details', 'Add fillers, panels, doors and hardware.'),
         ('05', 'Check use', 'Open every door and drawer, then adjust reveals.')],
        'The cabinet plan sets the position of counters and backsplash tile.'
    ),
    'paint': (
        'How a wall gets ready for paint',
        'The finish is only as good as the surface below it',
        [('01', 'Protect room', 'Cover floors, fixtures and adjacent finishes.'),
         ('02', 'Repair wall', 'Patch damage and let repairs cure.'),
         ('03', 'Smooth base', 'Sand and remove dust where needed.'),
         ('04', 'Prime', 'Choose a primer suited to the surface and finish.'),
         ('05', 'Finish coats', 'Apply paint and inspect edges in room light.')],
        'Moisture exposed rooms need products chosen for the actual conditions.'
    ),
}

for name, (title, subtitle, steps, footnote) in DIAGRAMS.items():
    cards = []
    for i, (number, heading, body) in enumerate(steps):
        x = 45 + i * 226
        body_lines = wrap(body, 17)
        body_svg = "".join(f'<tspan x="{x + 25}" dy="27">{escape(line)}</tspan>' for line in body_lines)
        cards.append(f'''<g>
          <rect x="{x}" y="190" width="210" height="345" rx="18" fill="#fffdf7" stroke="#d8d7c8" stroke-width="2"/>
          <circle cx="{x + 36}" cy="230" r="23" fill="#b4754a"/>
          <text x="{x + 36}" y="237" text-anchor="middle" class="number">{number}</text>
          <rect x="{x + 25}" y="285" width="160" height="5" rx="2" fill="#b4754a" opacity="0.75"/>
          <text x="{x + 25}" y="337" class="heading">{escape(heading)}</text>
          <text x="{x + 25}" y="365" class="body">{body_svg}</text>
        </g>''')
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="680" viewBox="0 0 1200 680" role="img" aria-labelledby="title desc">
<title id="title">{escape(title)}</title><desc id="desc">{escape(subtitle)}. {escape(footnote)}</desc>
<style>
.title {{ font: 600 48px Georgia, serif; fill: #223027; }}
.sub {{ font: 23px Arial, sans-serif; fill: #586157; }}
.heading {{ font: 600 23px Arial, sans-serif; fill: #223027; }}
.number {{ font: 700 18px Arial, sans-serif; fill: #fffdf7; }}
.body {{ font: 19px Arial, sans-serif; fill: #455247; }}
.foot {{ font: 19px Arial, sans-serif; fill: #586157; }}
</style>
<rect width="1200" height="680" fill="#f1f0e8"/>
<text x="45" y="82" class="title">{escape(title)}</text>
<text x="45" y="126" class="sub">{escape(subtitle)}</text>
<path d="M 90 260 H 1110" stroke="#b4754a" stroke-width="3" opacity="0.4"/>
{''.join(cards)}
<text x="45" y="603" class="foot">{escape(footnote)}</text>
<text x="45" y="645" class="foot">Typical process only. Materials and details depend on the project.</text>
</svg>'''
    (ROOT / f'{name}.svg').write_text(svg)
