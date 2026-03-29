# PRD: Rail Trail Stories — Web Prototype
*MassDOT Innovation Lab Fellow Application*

---

## 1. Project Overview

A short, literary web experience that guides users through the discovery of Massachusetts rail trails near them — surfacing the railroad history, heritage sites, and poetry connected to each trail. The experience sits closer to an editorial web piece or educational feature than a navigation tool. Built as a lo-fi prototype demonstrating concept, visual language, and user flow. Experienceable in under 2 minutes.

**Title:** Rail Trail Stories

**Intersection:** Massachusetts rail trail restoration (transportation) × history, literature, and place-based education (humanities)

**Deliverable:** Static HTML/CSS/JS prototype, desktop-only, deployable via GitHub Pages or Netlify drop. No backend. No application meta-framing in the experience itself — context lives in an accompanying README.

**Feel:** Wholesome, educational, civic. Evokes non-profit, school, or state government websites — warm, trustworthy, readable, place-honoring. Not a sleek data visualization. Not a dark-mode product app.

---

## 2. Recommended Trail Selection

Four trails selected for geographic spread, historical richness, and strength of literary/poetic connection.

### Trail A — Minuteman Bikeway
- **Region:** Greater Boston
- **Route:** Cambridge / Alewife → Lexington → Bedford (10.5 mi)
- **Railroad origin:** Lexington & West Cambridge Railroad (1846); later Lexington Branch of the Fitchburg Railroad
- **Why:** The oldest commuter rail line in the US west of Boston. Passes directly through Lexington and the Concord corridor — the heartland of American Transcendentalism. Emerson, Thoreau, and Alcott all lived within a few miles of this corridor.
- **Literary anchor:** Ralph Waldo Emerson (public domain), Henry David Thoreau (public domain)
- **Poetry candidates:** Emerson's "Hamatreya" (the land itself speaks), Thoreau's "Walking" (prose-poem, PD), Robert Frost (fair use — candidate poems to be selected with user during build)
- **In-development nearby:** Grand Junction Path (Cambridge), Northern Strand Community Trail extensions

### Trail B — Norwottuck Rail Trail
- **Region:** Pioneer Valley
- **Route:** Northampton → Amherst → Belchertown (10.1 mi)
- **Railroad origin:** New Haven & Northampton Railroad (1853); later Central Vermont Railway
- **Why:** Passes through Emily Dickinson's Amherst. Runs near the Connecticut River floodplain through the Five College corridor.
- **Literary anchor:** Emily Dickinson (public domain), Amy Lowell (public domain)
- **Poetry:** Emily Dickinson selections (Poetry Foundation / Emily Dickinson Archive); Amy Lowell, "Lilacs" (full text, public domain, Project Gutenberg) — a long poem of New England place and flowering that suits the Pioneer Valley spring landscape; Robert Frost (fair use — candidate poems to be selected with user during build)
- **In-development nearby:** Deerfield River Rail Trail, Connecticut River Greenway extensions

### Trail C — Cape Cod Rail Trail
- **Region:** Cape Cod / Southeast MA
- **Route:** Dennis → Wellfleet (25 mi, longest in MA)
- **Railroad origin:** Old Colony Railroad (1865); Cape Cod Central Railroad
- **Why:** Passes through the landscape Thoreau described in *Cape Cod* (1865).
- **Literary anchor:** Henry David Thoreau (public domain)
- **Poetry:**
  - Thoreau prose-poetry from *Cape Cod* (Project Gutenberg, public domain)
- **In-development nearby:** Shining Sea Bikeway extensions, Cape Cod Canal Trail improvements

### Trail D — Ashuwillticook Rail Trail
- **Region:** Berkshires
- **Route:** Adams → Lanesborough → Pittsfield (11.2 mi)
- **Railroad origin:** Pittsfield & North Adams Railroad (1845); later Boston & Albany
- **Why:** Runs through the Hoosac Valley past Mt. Greylock. Melville wrote *Moby-Dick* in Pittsfield; Bryant was born nearby in Cummington.
- **Literary anchor:** Herman Melville (public domain), William Cullen Bryant (public domain)
- **Poetry:** Bryant's "Thanatopsis" and/or "To a Waterfowl" (Project Gutenberg, PD); Melville prose from *Moby-Dick* or poems from *Battle-Pieces* (PD); candidate poems to be confirmed with user during build
- **In-development nearby:** Hoosac Range Trail connections, Berkshire Greenway proposals

### Why these four
- Geographic spread: E (Boston metro), Central-W (Pioneer Valley), SE (Cape), W (Berkshires)
- Each has a distinct literary personality and at least one confirmed public-domain or fair-use anchor poem
- Historical narratives vary: commuter rail, agricultural rail, resort rail, industrial rail
- Each region maps cleanly to one of four SVG map zones

---

## 3. Poetry Policy

**All poetry is public domain.** No copyrighted poem text is used.

**Poetry sources:**
- **Project Gutenberg** — public domain full texts (Emerson, Thoreau, Bryant, Dickinson, Lowell, Frost)
- **Poetry Foundation** (poetryfoundation.org) — contextual source links and author bios included in citations
- **Emily Dickinson Archive** (edickinson.org) — for Dickinson poems

**Confirmed poems (all public domain):**
- Henry David Thoreau, *Cape Cod* prose excerpt (1865) — Cape Cod trail
- Amy Lowell, "Lilacs" (1925) — Norwottuck
- Emily Dickinson, "I like to see it lap the Miles" (c.1862) — Norwottuck
- Robert Frost, "Mending Wall" (1914) — Norwottuck (optional third)
- Ralph Waldo Emerson, "Hamatreya" (1847) — Minuteman
- Robert Frost, "After Apple-Picking" (1914) — Minuteman
- William Cullen Bryant, "To a Waterfowl" (1818) — Ashuwillticook

---

## 4. User Flow — Screen by Screen

### Screen 1: Landing
**Purpose:** Set tone, introduce concept, invite entry.

**Content:**
- Background: Full-bleed `Images/Cape_Cod_Rail_Trail.jpg`, covering the full viewport
- Centered foreground: Glassmorphism card containing:
  - Title: **Rail Trail Stories**
  - Tagline: 1 sentence (e.g., "Discover the history, landscape, and poetry of Massachusetts rail trails.")
  - Body: 2–3 sentence editorial intro — establishes this as a journey, not a utility
  - CTA button: "Find trails near you →"

**Design notes:**
- Glass card: `background: rgba(255,255,255,0.65)`, `backdrop-filter: blur(12px)`, `border-radius: 16px`, `border: 1px solid rgba(255,255,255,0.4)`, `box-shadow: 0 8px 32px rgba(0,0,0,0.12)`
- Title in Playfair Display; body in Lora; button in forest green

### Screen 2: Location Selection
**Purpose:** Route the user to the right trail set without geolocation API.

**Content:**
- Background: Warm cream (#F2EDE4)
- Prompt: "Where are you in Massachusetts?"
- SVG map of Massachusetts, 4 clickable regions (Greater Boston, Pioneer Valley, Cape Cod, Berkshires)
- Hover: region fills with muted leafy green, label appears

**Interaction:** Click region → Screen 3 for that region

### Screen 3: Trail Discovery
**Purpose:** Show trail(s) in the selected region; prompt selection.

**Content:**
- Section header: "Trails near [Region Name]"
- Leaflet map centered on region, trail polyline(s) in ochre from actual GeoJSON
- 1–2 trail cards: name, route, length, one evocative historical fragment, "Explore →" link
- Below cards: brief in-development note ("More trails are coming to this region →" with link)

**Map:** CartoDB Voyager tiles, no API key. GeoJSON loaded via `L.geoJSON()`.

### Screen 4: Trail Deep-Dive
**Purpose:** The core editorial experience. History, place, poetry.

**Layout:** Two-column desktop grid (map 44% sticky / narrative 56% scrollable)

**Left — Map pane (sticky):**
- Leaflet map, trail polyline from GeoJSON, 2–3 `L.divIcon` markers for historical sites
- Marker popup: site name + 1 sentence + optional Wikipedia link

**Right — Narrative pane (scrollable):**
1. **Trail header:** name, route, length, railroad origin, year restored
2. **"The railroad that came before"** — 2–3 paragraphs (~350 words) with inline superscript citations linking to numbered footnotes; hyperlinked source names inline (e.g., "according to the [Rails-to-Trails Conservancy](https://...)"). Pull-quote callout for 1 key date or stat.
3. **Historical sites** — 2–3 entries matching map markers; 2–3 sentences each; Wikipedia link per site
4. **"Words from this place"** — 1–2 poem excerpts or full poems; poet name, title, year, source link; styled in Lora italic with cream background band, centered, generous leading
5. **"What's coming to this region"** — 1–2 in-development/restoration trail projects; brief description; links to Rails-to-Trails, MassTrails, or regional advocacy org

**Design notes:**
- No dark backgrounds anywhere in this screen
- Forest green for section subheads; ochre for pull-quote accent
- All links: forest green, underlined

### Screen 5: Closing + Citations
**Purpose:** Graceful coda + full transparent citations.

**Coda block:**
- Background: Soft forest green (#3B5E45) with cream/white text, OR warm cream with forest green text — TBD based on photo assets
- 3–5 sentences: the palimpsest of rail line under trail, industry under nature, labor under leisure
- Final pull-quote: one poem line with attribution
- Links: "Explore another trail →" (returns to Screen 2) | [Rails-to-Trails Conservancy](https://www.railstotrails.org/) | [MassTrails](https://masstrails.com)

**Citations section:**
- Background: Off-white (#FAF8F4), below coda
- Subhead: "Sources & Further Reading"
- Numbered list matching all inline citations used throughout
- Grouped:
  - **Trail Data & GIS** (MassGIS, OpenStreetMap, MassTrails, Wikipedia per trail)
  - **Historical Sources** (Rails-to-Trails profiles, Wikipedia railroad articles, local historical society links)
  - **Poetry Sources** (Project Gutenberg, Poetry Foundation, Emily Dickinson Archive; all poems public domain)
  - **In-Development Trails** (Rails-to-Trails TrailLink, MassTrails project listings, regional planning orgs)
- Style: bibliography-style serif, modest size, generous line height, forest green links

---

## 5. Content Requirements

### Per-screen assets

| Screen | Text | Images | Data |
|--------|------|--------|------|
| Landing | Title, tagline, 2–3 sentence intro | `Images/Cape_Cod_Rail_Trail.jpg` | — |
| Location | Prompt, region labels | SVG MA map (built in code) | Region → trail map |
| Discovery | Header, trail cards, in-dev note | Optional trail thumbnail | GeoJSON per trail |
| Deep-Dive | History ~350w, 3 site notes, 1–2 poems, in-dev entry | 1–2 photos per trail (user-supplied) | GeoJSON, marker lat/lng |
| Closing + Citations | Coda, pull-quote, full citations | Optional bg texture | All source URLs |

### Per-trail content (× 4 trails)
- Trail metadata (name, route, length, railroad, years)
- History narrative (~350 words, cited)
- 2–3 historical sites (name, lat/lng, description, Wikipedia link)
- Trail GeoJSON (from MassGIS or OpenStreetMap)
- 1–2 poems (full text or excerpt, source link, copyright status)
- Pull-quote (1 line)
- 1–2 in-development projects (name, status, link)
- 1–2 trail photos (user-supplied)

---

## 6. Data Strategy & Content Sprint Plan

### GIS / Trail Geometry

**Primary source:** MassGIS Open Data — statewide trails layer (https://www.mass.gov/info-details/massgis-data-layers)
- Download as GeoJSON or Shapefile → convert → simplify per trail

**Secondary source:** OpenStreetMap via Overpass API
- Query by relation name (e.g., `relation[name="Minuteman Bikeway"][out geom]`)
- Simplify with mapshaper to reduce file size while preserving shape

**Output:** `data/geojson/[trail-name].geojson` per trail, loaded in Leaflet via `L.geoJSON()`

### Historical content research

Per trail, draw from: Wikipedia (trail + railroad articles), Rails-to-Trails Conservancy profiles, local historical society pages, regional newspapers. Claude Code drafts ~350-word narrative with citation markers; user reviews before build.

### In-development trails research

Sources: Rails-to-Trails "TrailLink" project database, MassTrails active project listings, Pioneer Valley Planning Commission, Berkshire Regional Planning Commission, DCR trail development pages.

### Poetry research & selection

**All poems confirmed — all public domain:**
- Thoreau, *Cape Cod* excerpt (1865) — Cape Cod
- Amy Lowell, "Lilacs" (1925) — Norwottuck
- Emily Dickinson, "I like to see it lap the Miles" (c.1862) — Norwottuck
- Robert Frost, "Mending Wall" (1914) — Norwottuck (optional)
- Emerson, "Hamatreya" (1847) — Minuteman
- Robert Frost, "After Apple-Picking" (1914) — Minuteman
- Bryant, "To a Waterfowl" (1818) — Ashuwillticook

---

## 7. Technical Architecture

### File structure
```
/
├── index.html
├── style.css
├── script.js
├── data/
│   ├── trails.js           # metadata, history, poetry, sites, citations
│   └── geojson/
│       ├── minuteman.geojson
│       ├── norwottuck.geojson
│       ├── capecod.geojson
│       └── ashuwillticook.geojson
└── Images/
    └── Cape_Cod_Rail_Trail.jpg   # (+ user-supplied trail photos)
```

### Dependencies (CDN, no build step)
- Leaflet.js v1.9.x
- CartoDB Voyager tile layer (no API key)
- Google Fonts: Playfair Display, Lora, DM Sans
- No CSS or JS frameworks

### Screen navigation
- 5 `<section>` elements, one visible at a time via CSS class toggle
- JS state: `{ currentScreen, selectedRegion, selectedTrail }`

### Leaflet map
- `L.geoJSON(data, { style })` for trail polylines
- `L.divIcon` for historical site markers with `.bindPopup()`
- `map.fitBounds(layer.getBounds())` for auto-framing
- Single map instance, re-centered between Screen 3 and Screen 4

### Trail data schema (`data/trails.js`)
```js
const TRAILS = {
  capecod: {
    name: "Cape Cod Rail Trail",
    region: "capecod",
    route: { from: "Dennis", to: "Wellfleet" },
    length: "25 mi",
    railroad: "Old Colony Railroad",
    yearBuilt: 1865,
    yearRestored: 1978,
    geojsonPath: "data/geojson/capecod.geojson",
    historicalFragment: "Laid in 1865 to carry summer visitors from Boston to the Cape's outstretched arm...",
    history: `...`, // ~350 words, [1] [2] superscript citation markers
    sites: [
      {
        name: "Nickerson State Park",
        lat: 41.757, lng: -70.005,
        note: "...",
        wikiUrl: "https://en.wikipedia.org/wiki/Nickerson_State_Park"
      }
    ],
    poems: [
      {
        poet: "Henry David Thoreau",
        title: "Cape Cod (excerpt)",
        year: 1865,
        fullText: `...`,
        sourceUrl: "https://www.gutenberg.org/files/34392/34392-h/34392-h.htm",
        publicDomain: true
      }
    ],
    inDevelopment: [
      {
        name: "Shining Sea Bikeway Extension",
        status: "Active development",
        description: "...",
        link: "https://www.railstotrails.org/..."
      }
    ],
    citations: [
      { id: 1, text: "Wikipedia, \"Cape Cod Rail Trail\"", url: "https://en.wikipedia.org/wiki/Cape_Cod_Rail_Trail" },
      { id: 2, text: "Rails-to-Trails Conservancy, Cape Cod Rail Trail", url: "https://www.railstotrails.org/..." }
    ]
  }
  // minuteman, norwottuck, ashuwillticook ...
}
```

---

## 8. Design System

### Color palette (no black or dark-mode backgrounds)

| Name | Hex | Use |
|------|-----|-----|
| Cream | `#F2EDE4` | Primary screen backgrounds |
| Off-White | `#FAF8F4` | Cards, narrative pane, citations |
| Forest Green | `#3B5E45` | Subheads, buttons, hover, coda bg option |
| Leafy Green | `#6B8F6B` | SVG region hover, muted accents |
| Ochre | `#C4852A` | Trail lines, pull-quote accents, CTAs |
| Moss | `#4E6344` | Secondary text |
| Slate | `#8C9BA8` | Muted UI, dividers |
| Glass White | `rgba(255,255,255,0.65)` | Landing glassmorphism card |

### Typography

| Role | Font | Weight/Style |
|------|------|-------------|
| Display / titles | Playfair Display | 700 |
| Body / history | Lora | 400 regular |
| Poetry | Lora | 400 italic |
| UI / navigation | DM Sans | 400, 500 |
| Citations / captions | DM Sans | 400 small |

### Glassmorphism card (landing screen)
```css
.glass-card {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  padding: 48px 56px;
  max-width: 600px;
}
```

### Motion
- Screen transitions: CSS `opacity` fade, 300ms ease
- Leaflet `fitBounds` for map entry
- Poetry reveal: `opacity` + `translateY(8px)` on IntersectionObserver entry
- Region/card hover: color shift + `translateY(-2px)`
- No autoplay or looping animations

### Layout — Desktop Only
- Max content width: 1200px centered
- Deep-dive: CSS Grid, `44% 56%` columns
- Body text: 17–18px minimum
- 8px spacing unit

### Civic / non-profit aesthetic
- Generous whitespace; content-forward
- Links: forest green, underlined — legible and trustworthy
- Buttons: solid forest green, white text, `border-radius: 6px`
- Citations treated as a feature: visible, well-styled bibliography

---

## 9. Scope Decisions

### In v0
- 4 featured trails with actual GeoJSON geometry
- 4 SVG regions on clickable MA map
- Leaflet maps, CartoDB tiles
- ~350-word history per trail with inline citations
- 2–3 historical site markers per trail
- 1–2 poems per trail (all public domain)
- In-development trail entries per region
- Full citations section on closing screen
- Links to Rails-to-Trails, MassTrails, Wikipedia throughout
- Desktop-only layout
- Static deployment

### Deferred
- Geolocation API
- Full trail database
- Backend / CMS
- Audio narration, social sharing, print view
- Mobile layout
- Accessibility audit

---

## 10. Open Questions (1 remaining)

**Image assets:** The landing hero (`Images/Cape_Cod_Rail_Trail.jpg`) is confirmed. Do you have photos for the other 3 trails? If not, which trails have images and which need placeholder treatment? The build can proceed with placeholders styled via CSS, swapped in when photos are ready.

*(All other questions from earlier drafts have been resolved or given default decisions.)*

---

## 11. Content Sprint Order (Post-Approval)

1. Fetch and simplify GeoJSON for 4 trails (MassGIS / OpenStreetMap)
2. Draft history narratives × 4 (~350 words + citations each)
3. Identify historical sites × 4 (2–3 per trail, lat/lng, Wikipedia links)
4. Research in-development trails × 4 regions
5. Propose poetry candidates for user-selected poems; confirm full texts for confirmed poems
6. User reviews all content
7. Build begins

---

## 12. README / Fair Use Statement (to accompany prototype)

The README will include:
- Project description and MassDOT context
- Poetry attribution statement: all poems used are public domain. Full attribution provided for each.
- Full attribution list
- Data sources: MassGIS, OpenStreetMap, Rails-to-Trails, MassTrails, Wikipedia

---

*Draft PRD — Rail Trail Stories — March 2026*
