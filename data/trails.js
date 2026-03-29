/* ============================================================
   Rail Trail Stories — data/trails.js
   All poem texts are public domain.
   ============================================================ */

const TRAILS = {

  /* ── Cape Cod Rail Trail ─────────────────────────────── */
  capecod: {
    name:       'Cape Cod Rail Trail',
    region:     'capecod',
    route:      { from: 'South Yarmouth', to: 'Wellfleet' },
    length:     '25.5 miles',
    railroad:   'Old Colony Railroad (1865)',
    yearRestored: 1980,
    geojsonPath: 'data/geojson/capecod.geojson',
    cardImage:   'Images/Cape_Cod_Rail_Trail.jpg',
    headerImage: 'Images/Cape_Cod_Rail_Trail.jpg',
    wikiUrl:     'https://en.wikipedia.org/wiki/Cape_Cod_Rail_Trail',

    historicalFragment:
      'The railroad arrived in Hyannis in 1854, and suddenly Boston was a few hours away ' +
      'rather than a day. What it carried, above all, was summer.',

    history:
      'Before the railroad came to Cape Cod, the Cape was a world apart. Getting there meant ' +
      'a slow journey by stagecoach or packet boat. The Cape Cod Branch Railroad changed that, ' +
      'almost overnight. Chartered in 1846, the line pushed south from Middleborough, reached ' +
      'Sandwich in 1848, and arrived at Hyannis by July 8, 1854.[1] Suddenly, Boston was a ' +
      'few hours away rather than a day.\n\n' +
      'What the railroad carried, above all, was summer. Beginning in the 1850s and accelerating ' +
      'through the Gilded Age, the Old Colony Railroad — which absorbed the Cape Cod line in ' +
      '1872 — transformed this sandy, sea-lashed peninsula into one of New England\'s premier ' +
      'summer destinations.[2] The trains brought families from Boston and Providence, hotel ' +
      'guests, day-trippers chasing the ocean breeze. The line extended east to Orleans in 1865 ' +
      'and all the way to Provincetown in 1873.[2]\n\n' +
      'The twentieth century brought highways, and the highways brought cars, and slowly the ' +
      'summer trains became obsolete. Passenger service ended in 1959.[1] Penn Central, which ' +
      'had absorbed the Old Colony\'s successor, went bankrupt in 1970. Massachusetts purchased ' +
      'the corridor in 1976 and converted it to a recreational trail in 1980.[3]\n\n' +
      'The trail follows the old rail bed through seven Cape towns, through pitch pine and scrub ' +
      'oak barrens, past cranberry bogs and kettle ponds, within earshot of the ocean on both ' +
      'sides. It is the landscape Henry David Thoreau described in his 1865 book Cape Cod — ' +
      '"a wild, rank place," in his phrase, scoured clean by the Atlantic.[4]',

    sites: [
      {
        name:    'Nickerson State Park, Brewster',
        lat:      41.7573,
        lng:     -70.0046,
        note:    'The trail runs through 8 miles of this 1,900-acre state park in Brewster, ' +
                 'encompassing kettle ponds formed by glacial retreat — Cliff Pond, Flax Pond, ' +
                 'Little Cliff Pond — and dense stands of pitch pine. One of the most-visited ' +
                 'state parks in Massachusetts.',
        wikiUrl: 'https://en.wikipedia.org/wiki/Nickerson_State_Park'
      },
      {
        name:    'Salt Pond Visitor Center, Eastham',
        lat:      41.8368,
        lng:     -69.9737,
        popupImage: 'Images/Salt-Pond-Eastham.png',
        note:    'The trail passes near the Salt Pond Visitor Center of the Cape Cod National ' +
                 'Seashore in Eastham — the gateway to the Outer Cape that Thoreau explored on ' +
                 'foot in the 1840s and 1850s. The National Seashore, established in 1961, ' +
                 'preserved much of the landscape he described.',
        wikiUrl: 'https://en.wikipedia.org/wiki/Cape_Cod_National_Seashore'
      },
      {
        name:    'Wellfleet — Northern Terminus',
        lat:      41.9282,
        lng:     -70.0325,
        note:    'The trail\'s northern terminus near Wellfleet sits at the edge of the Outer ' +
                 'Cape. Nearby: Wellfleet Bay Wildlife Sanctuary and Marconi Beach, site of ' +
                 'Guglielmo Marconi\'s first transatlantic wireless station in America (1903). ' +
                 'The landscape here is as close to Thoreau\'s Cape Cod as still exists.',
        wikiUrl: 'https://en.wikipedia.org/wiki/Wellfleet,_Massachusetts'
      }
    ],

    poems: [
      {
        poet:       'Henry David Thoreau',
        title:      'Cape Cod (excerpt)',
        year:        1865,
        sourceUrl:  'https://www.gutenberg.org/files/34392/34392-h/34392-h.htm',
        sourceLabel: 'Project Gutenberg',
        publicDomain: true,
        fullText:
          'The white breakers were rushing to the shore; the foam ran up the sand, and then ' +
          'ran back as far as we could see, as regularly, to compare great things with small, ' +
          'as the master of a choir beats time with his white wand; and ever and anon a higher ' +
          'wave caused us hastily to deviate from our path, and we looked back on our tracks ' +
          'filled with water and foam. The breakers looked like droves of a thousand wild horses ' +
          'of Neptune, rushing to the shore, with their white manes streaming far behind; and ' +
          'when at length the sun shone for a moment, their manes were rainbow-tinted.\n\n' +
          'A man may stand there and put all America behind him.'
      }
    ],

    inDevelopment: [
      {
        name:        'Bourne Rail Trail',
        status:      'Phase 1 underway',
        description: 'A planned 6.5-mile trail connecting the Shining Sea Bikeway in Falmouth ' +
                     'with the Cape Cod Canal path, creating a continuous off-road connection ' +
                     'from the canal to Wellfleet. Phase 1 is a half-mile paved section at ' +
                     'Monument Neck Road. The corridor is part of the Strategic Rail Corridor ' +
                     'Network, requiring U.S. Department of Defense coordination.',
        link: 'https://www.railstotrails.org/trailblog/massachusetts-shining-sea-bikeway-january-2026-trail-of-the-month/'
      }
    ],

    citations: [
      { id: 1, text: 'Wikipedia, "Cape Cod Rail Trail"',       url: 'https://en.wikipedia.org/wiki/Cape_Cod_Rail_Trail' },
      { id: 2, text: 'Wikipedia, "Old Colony Railroad"',       url: 'https://en.wikipedia.org/wiki/Old_Colony_Railroad' },
      { id: 3, text: 'Wikipedia, "Cape Cod Branch Railroad"',  url: 'https://en.wikipedia.org/wiki/Cape_Cod_Branch_Railroad' },
      { id: 4, text: 'Henry David Thoreau, Cape Cod (1865)',   url: 'https://www.gutenberg.org/files/34392/34392-h/34392-h.htm' }
    ]
  },

  /* ── Norwottuck Rail Trail ────────────────────────────── */
  norwottuck: {
    name:       'Norwottuck Rail Trail',
    region:     'pioneer',
    route:      { from: 'Northampton', to: 'Belchertown' },
    length:     '11 miles',
    railroad:   'Central Massachusetts Railroad (1887)',
    yearRestored: 1993,
    geojsonPath: 'data/geojson/norwottuck.geojson',
    cardImage:   null,
    headerImage: null,
    wikiUrl:     'https://en.wikipedia.org/wiki/Norwottuck_Branch_Rail_Trail',

    historicalFragment:
      'The Connecticut River Valley has always been the spine of western Massachusetts — its ' +
      'farms, its colleges, its small cities arranged along the floodplain like beads on a string.',

    history:
      'The Connecticut River Valley has always been the spine of western Massachusetts — its ' +
      'farms, its colleges, its small cities arranged along the floodplain like beads on a ' +
      'string. When the Central Massachusetts Railroad extended its tracks through this corridor ' +
      'in 1887, connecting Northampton through Hadley and Amherst to points east, it was ' +
      'threading itself into one of the most densely settled agricultural landscapes in New ' +
      'England.[1]\n\n' +
      'The railroad carried what the valley produced: passengers commuting between the Five ' +
      'College towns, freight moving between the farms of Hadley and the warehouses of ' +
      'Northampton, grain destined for the farmer\'s supply warehouse in Amherst. Three ' +
      'round-trip passenger trains ran daily in the 1920s.[1] The line was leased to the ' +
      'Boston & Maine Railroad, which called it the Central Massachusetts Branch.\n\n' +
      'Then the roads won. Passenger service ended on April 23, 1932.[1] Freight held on ' +
      'longer, sustained by a paper mill in Northampton — but when the mill closed around ' +
      '1979, the last reason to run trains disappeared.[1] The state acquired the corridor ' +
      'in 1980.\n\n' +
      'The trail\'s name came from a suggestion by the Hadley Historical Commission: Norwottuck, ' +
      'for the Native American people who had lived in this valley for thousands of years before ' +
      'European contact and long before any railroad.[3] On July 29, 1993, the Massachusetts ' +
      'Department of Environmental Management officially opened the trail.[2]\n\n' +
      'Today the trail is best known for its crossing of the Connecticut River — a graceful ' +
      'bridge with views of the floodplain meadows of Hadley, fields cultivated for centuries. ' +
      'Emily Dickinson\'s house in Amherst is a short walk from the trail.',

    sites: [
      {
        name:    'Historic Freight Depot, Hadley',
        lat:      42.3490,
        lng:     -72.5440,
        note:    'The Massachusetts Central Railroad Freight Depot in Hadley survives along ' +
                 'the trail corridor — one of the few remaining physical structures from the ' +
                 'railroad era. A historic photograph from around 1917 shows the Norwottuck ' +
                 'Station at South Amherst, capturing the scale and ordinariness of branch-line ' +
                 'railroad life in this valley.',
        wikiUrl: 'https://en.wikipedia.org/wiki/Norwottuck_Rail_Trail'
      },
      {
        name:    'Emily Dickinson\'s Amherst',
        lat:      42.3732,
        lng:     -72.5199,
        note:    'The trail passes through Amherst, where Emily Dickinson spent nearly her ' +
                 'entire life. The Emily Dickinson Museum — the house where she wrote almost ' +
                 '1,800 poems — is a short walk from the trail at 280 Main Street. Dickinson ' +
                 'observed the railroad from her property and wrote about locomotives in ' +
                 'several poems.',
        wikiUrl: 'https://en.wikipedia.org/wiki/Emily_Dickinson_Museum'
      }
    ],

    poems: [
      {
        poet:        'Amy Lowell',
        title:       'Lilacs',
        year:         1925,
        sourceUrl:   'https://www.poetryfoundation.org/poems/42992/lilacs-56d221a873ff1',
        sourceLabel: 'Poetry Foundation',
        publicDomain: true,
        fullText:
          'Lilacs,\nFalse blue,\nWhite,\nPurple,\nColor of lilac,\n' +
          'Your great puffs of flowers\nAre everywhere in this my New England.\n' +
          'Among your heart-shaped leaves\nOrange orioles hop like music-box birds and sing\n' +
          'Their little weak soft songs;\nIn the crooks of your branches\n' +
          'The bright eyes of song sparrows sitting on spotted eggs\n' +
          'Peer restlessly through the light and shadow\nOf all Springs.\n' +
          'Lilacs in dooryards\nHolding quiet conversations with an early moon;\n' +
          'Lilacs watching a deserted house\nSettling sideways into the grass of an old road;\n' +
          'Lilacs, wind-beaten, staggering under a lopsided shock of bloom\nAbove a cellar dug into a hill.\n' +
          'You are everywhere.\nYou were everywhere.\n' +
          'You tapped the window when the preacher preached his sermon,\n' +
          'And ran along the road beside the boy going to school.\n' +
          'You stood by the pasture-bars to give the cows good milking,\n' +
          'You persuaded the housewife that her dishpan was of silver\n' +
          'And her husband an image of pure gold.\n\n' +
          'May is lilac here in New England,\n' +
          'May is a thrush singing "Sun up!" on a tip-top ash tree,\n' +
          'May is white clouds behind pine-trees\nPuffed out and marching upon a blue sky.\n' +
          'May is a green as no other,\nMay is much sun through small leaves,\nMay is soft earth,\n' +
          'And apple-blossoms,\nAnd windows open to a South Wind.\n' +
          'May is full light wind of lilac\nFrom Canada to Narragansett Bay.\n\n' +
          'Lilacs,\nFalse blue,\nWhite,\nPurple,\nColor of lilac.\n' +
          'Heart-leaves of lilac all over New England,\n' +
          'Roots of lilac under all the soil of New England,\n' +
          'Lilac in me because I am New England,\n' +
          'Because my roots are in it,\nBecause my leaves are of it,\n' +
          'Because my flowers are for it,\nBecause it is my country\n' +
          'And I speak to it of itself\nAnd sing of it with my own voice\n' +
          'Since certainly it is mine.'
      },
      {
        poet:        'Emily Dickinson',
        title:       'I like to see it lap the Miles \u2014',
        year:        'c. 1862',
        sourceUrl:   'https://www.poetryfoundation.org/poems/56019/i-like-to-see-it-lap-the-miles-383',
        sourceLabel: 'Poetry Foundation',
        publicDomain: true,
        fullText:
          'I like to see it lap the Miles \u2014\n' +
          'And lick the Valleys up \u2014\n' +
          'And stop to feed itself at Tanks \u2014\n' +
          'And then \u2014 prodigious step\n\n' +
          'Around a Pile of Mountains \u2014\n' +
          'And supercilious peer\n' +
          'In Shanties \u2014 by the sides of Roads \u2014\n' +
          'And then a Quarry pare\n\n' +
          'To fit its sides\n' +
          'And crawl between\n' +
          'Complaining all the while\n' +
          'In horrid \u2014 hooting stanza \u2014\n' +
          'Then chase itself down Hill \u2014\n\n' +
          'And neigh like Boanerges \u2014\n' +
          'Then \u2014 prompter than a Star\n' +
          'Stop \u2014 docile and omnipotent\n' +
          'At its own stable door \u2014'
      }
    ],

    inDevelopment: [
      {
        name:        'Mass Central Rail Trail \u2014 Belchertown Extension',
        status:      'Active development (2025)',
        description: 'The Norwottuck is the anchor segment of the larger Mass Central Rail Trail, ' +
                     'a 104-mile planned corridor from Northampton to Boston. Directly east of the ' +
                     'Norwottuck terminus, the Belchertown Greenway segment is under active ' +
                     'development, with a 2025 MassTrails grant funding reconstruction of the ' +
                     'Jabish Brook bridge. When complete, the MCRT will allow travel from ' +
                     'Northampton to Boston almost entirely on trail.',
        link: 'https://www.masscentralrailtrail.org/'
      }
    ],

    citations: [
      { id: 1, text: 'Wikipedia, "Norwottuck Rail Trail"',        url: 'https://en.wikipedia.org/wiki/Norwottuck_Rail_Trail' },
      { id: 2, text: 'Wikipedia, "Central Massachusetts Railroad"', url: 'https://en.wikipedia.org/wiki/Central_Massachusetts_Railroad' },
      { id: 3, text: 'Mass.gov, "Norwottuck Rail Trail"',         url: 'https://www.mass.gov/locations/norwottuck-rail-trail/' }
    ]
  },

  /* ── Minuteman Bikeway ───────────────────────────────── */
  minuteman: {
    name:       'Minuteman Bikeway',
    region:     'boston',
    route:      { from: 'Cambridge (Alewife)', to: 'Bedford' },
    length:     '10.5 miles',
    railroad:   'Lexington & West Cambridge Railroad (1846)',
    yearRestored: 1992,
    geojsonPath: 'data/geojson/minuteman.geojson',
    cardImage:   null,
    headerImage: null,
    wikiUrl:     'https://en.wikipedia.org/wiki/Minuteman_Bikeway',

    historicalFragment:
      'In the autumn of 1845, a group of businessmen in Lexington petitioned the legislature ' +
      'for a railroad — not something grand, just a modest single-track line connecting their ' +
      'market town to the city, ten miles east.',

    history:
      'In the autumn of 1845, a group of businessmen in Lexington petitioned the Massachusetts ' +
      'legislature for a railroad. They were not asking for something grand — just a modest ' +
      'single-track line connecting their market town to the Fitchburg Railroad at West Cambridge, ' +
      'ten miles east. The Lexington & West Cambridge Railroad was chartered that year and opened ' +
      'in 1846, making it one of the earliest commuter rail lines in the country west of Boston.[1]\n\n' +
      'For the next 130 years, the line carried daily life: residents commuting to the city, ' +
      'farmers bringing produce to market, students headed to and from school. Steam gave way to ' +
      'diesel in 1956. The Boston & Lowell Railroad had long since bought the line, extended it ' +
      'west to Bedford and Concord, and stitched it into a broader network. Nineteen daily round ' +
      'trips served Arlington around 1900.[1]\n\n' +
      'What ended it, as with so many New England branch lines, was a combination of highway ' +
      'competition and institutional indifference. The MBTA absorbed the line in 1976, but a ' +
      'January 1977 snowstorm blocked the tracks — and when the storm cleared, the MBTA quietly ' +
      'announced it would not resume service.[2] Freight continued for a few more years, ' +
      'then stopped.\n\n' +
      'In 1991, the corridor was railbanked and construction began. The first sections opened in ' +
      '1992 and 1993; the final extension to Alewife T station opened in 1998.[3] Today the ' +
      'trail carries far more people than the railroad ever did. It closely follows the route of ' +
      'Paul Revere\'s ride of April 1775. In 2008, the Minuteman Bikeway was inducted into the ' +
      'national Rail-Trail Hall of Fame.[3]',

    sites: [
      {
        name:    'Lexington Battle Green',
        lat:      42.4474,
        lng:     -71.2297,
        note:    'Less than a quarter mile from the trail, the Battle Green marks the site of ' +
                 'the first shots of the American Revolution on April 19, 1775 — the same morning ' +
                 'Paul Revere rode through this corridor. The trail roughly retraces his route. ' +
                 'The original 1775 Buckman Tavern still stands on the Green.',
        wikiUrl: 'https://en.wikipedia.org/wiki/Lexington,_Massachusetts'
      },
      {
        name:    'Bedford Depot Park',
        lat:      42.4916,
        lng:     -71.2762,
        note:    'The western terminus preserves a remarkable artifact: a Boston & Maine ' +
                 'Railroad RDC (Rail Diesel Car) on permanent display beside the former depot. ' +
                 'It is the last surviving example of the equipment that ran this line in its ' +
                 'final decades of service. The depot building has been restored as a trailhead.',
        wikiUrl: 'https://en.wikipedia.org/wiki/Bedford_Depot'
      },
      {
        name:    'Spy Pond, Arlington',
        lat:      42.4195,
        lng:     -71.1620,
        note:    'Spy Pond sits directly alongside the trail in Arlington, named — according to ' +
                 'local tradition — because colonial scouts used its frozen surface to observe ' +
                 'British troop movements during the Revolution. The pond and its surrounding ' +
                 'conservation land form one of the trail\'s most scenic stretches.',
        wikiUrl: 'https://en.wikipedia.org/wiki/Spy_Pond'
      }
    ],

    poems: [
      {
        poet:        'Ralph Waldo Emerson',
        title:       'Hamatreya (Earth-Song)',
        year:         1847,
        sourceUrl:   'https://www.poetryfoundation.org/poems/52341/hamatreya',
        sourceLabel: 'Poetry Foundation',
        publicDomain: true,
        fullText:
          'Bulkeley, Hunt, Willard, Hosmer, Meriam, Flint,\n' +
          'Possessed the land which rendered to their toil\n' +
          'Hay, corn, roots, hemp, flax, apples, wool, and wood.\n' +
          'Each of these landlords walked amidst his farm,\n' +
          'Saying, "\u2019Tis mine, my children\u2019s and my name\u2019s.\n' +
          'How sweet the west wind sounds in my own trees!\n' +
          'How graceful climb those shadows on my hill!\n' +
          'I fancy these pure waters and the flags\n' +
          'Know me, as does my dog: we sympathize;\n' +
          'And, I affirm, my actions smack of the soil."\n\n' +
          'Where are these men? Asleep beneath their grounds:\n' +
          'And strangers, fond as they, their furrows plough.\n' +
          'Earth laughs in flowers, to see her boastful boys\n' +
          'Earth-proud, proud of the earth which is not theirs;\n' +
          'Who steer the plough, but cannot steer their feet\n' +
          'Clear of the grave.\n\n' +
          '        EARTH-SONG\n\n' +
          '    "Mine and yours;\n' +
          '    Mine, not yours.\n' +
          '    Earth endures;\n' +
          '    Stars abide \u2014\n' +
          '    Shine down in the old sea;\n' +
          '    Old are the shores;\n' +
          '    But where are old men?\n' +
          '    I who have seen much,\n' +
          '    Such have I never seen.\n\n' +
          '    "They called me theirs,\n' +
          '    Who so controlled me;\n' +
          '    Yet every one\n' +
          '    Wished to stay, and is gone,\n' +
          '    How am I theirs,\n' +
          '    If they cannot hold me,\n' +
          '    But I hold them?"\n\n' +
          'When I heard the Earth-song\n' +
          'I was no longer brave;\n' +
          'My avarice cooled\n' +
          'Like lust in the chill of the grave.'
      },
      {
        poet:        'Robert Frost',
        title:       'After Apple-Picking',
        year:         1914,
        sourceUrl:   'https://www.poetryfoundation.org/poems/44259/after-apple-picking',
        sourceLabel: 'Poetry Foundation',
        publicDomain: true,
        fullText:
          'My long two-pointed ladder\'s sticking through a tree\n' +
          'Toward heaven still,\n' +
          'And there\'s a barrel that I didn\'t fill\n' +
          'Beside it, and there may be two or three\n' +
          'Apples I didn\'t pick upon some bough.\n' +
          'But I am done with apple-picking now.\n' +
          'Essence of winter sleep is on the night,\n' +
          'The scent of apples: I am drowsing off.\n' +
          'I cannot rub the strangeness from my sight\n' +
          'I got from looking through a pane of glass\n' +
          'I skimmed this morning from the drinking trough\n' +
          'And held against the world of hoary grass.\n' +
          'It melted, and I let it fall and break.\n' +
          'But I was well\n' +
          'Upon my way to sleep before it fell,\n' +
          'And I could tell\n' +
          'What form my dreaming was about to take.\n' +
          'Magnified apples appear and disappear,\n' +
          'Stem end and blossom end,\n' +
          'And every fleck of russet showing clear.\n' +
          'My instep arch not only keeps the ache,\n' +
          'It keeps the pressure of a ladder-round.\n' +
          'I feel the ladder sway as the boughs bend.\n' +
          'And I keep hearing from the cellar bin\n' +
          'The rumbling sound\n' +
          'Of load on load of apples coming in.\n' +
          'For I have had too much\n' +
          'Of apple-picking: I am overtired\n' +
          'Of the great harvest I myself desired.\n' +
          'There were ten thousand thousand fruit to touch,\n' +
          'Cherish in hand, lift down, and not let fall.\n' +
          'For all\n' +
          'That struck the earth,\n' +
          'No matter if not bruised or spiked with stubble,\n' +
          'Went surely to the cider-apple heap\n' +
          'As of no worth.\n' +
          'One can see what will trouble\n' +
          'This sleep of mine, whatever sleep it is.\n' +
          'Were he not gone,\n' +
          'The woodchuck could say whether it\'s like his\n' +
          'Long sleep, as I describe its coming on,\n' +
          'Or just some human sleep.'
      }
    ],

    inDevelopment: [
      {
        name:        'Northern Strand Community Trail',
        status:      'Mostly complete; extensions active',
        description: 'The Northern Strand runs through five urban communities — Everett, Malden, ' +
                     'Revere, Saugus, and Lynn — on a former railroad right-of-way. A planned ' +
                     'extension would connect through downtown Lynn to the shoreline. Part of the ' +
                     'larger East Coast Greenway corridor.',
        link: 'https://en.wikipedia.org/wiki/Northern_Strand_Community_Trail'
      },
      {
        name:        'Grand Junction Path, Cambridge',
        status:      'Partial; eastern segments open',
        description: 'The Grand Junction railroad right-of-way through Cambridge has been partially ' +
                     'converted to a multi-use path. Progress on the western portion is complicated ' +
                     'by active freight and transit equipment transfers.',
        link: 'https://www.cambridgema.gov/CDD/Projects/Transportation/GrandJunctionPathway'
      }
    ],

    citations: [
      { id: 1, text: 'Wikipedia, "Lexington and West Cambridge Railroad"', url: 'https://en.wikipedia.org/wiki/Lexington_and_West_Cambridge_Railroad' },
      { id: 2, text: 'Wikipedia, "Minuteman Commuter Bikeway"',            url: 'https://en.wikipedia.org/wiki/Minuteman_Commuter_Bikeway' },
      { id: 3, text: 'Rails-to-Trails Conservancy, "Minuteman Bikeway"',  url: 'https://www.railstotrails.org/trailblog/the-minuteman-bikeway-a-revolution-on-two-wheels/' }
    ]
  },

  /* ── Ashuwillticook Rail Trail ────────────────────────── */
  ashuwillticook: {
    name:       'Ashuwillticook Rail Trail',
    region:     'berkshires',
    route:      { from: 'Adams', to: 'Pittsfield' },
    length:     '14 miles',
    railroad:   'Pittsfield & North Adams Railroad (1845)',
    yearRestored: 2001,
    geojsonPath: 'data/geojson/ashuwillticook.geojson',
    cardImage:   null,
    headerImage: null,
    wikiUrl:     'https://en.wikipedia.org/wiki/Ashuwillticook_Rail_Trail',

    historicalFragment:
      'The Hoosac Valley is a long green corridor through the northern Berkshires, held between ' +
      'the shoulders of Mount Greylock. The Mahican people called this place ashuwillticook — ' +
      'the pleasant river between the hills.',

    history:
      'The Hoosac Valley is a long green corridor through the northern Berkshires, held between ' +
      'the shoulders of Mount Greylock to the east and the Hoosac Range to the west. The Hoosic ' +
      'River runs through the valley floor, which is why the Mahican people called this place ' +
      'ashuwillticook — the pleasant river between the hills.[1] When the Pittsfield & North Adams ' +
      'Railroad began laying track through this valley in 1845, it was entering one of the oldest-' +
      'settled and most industrialized landscapes in western Massachusetts.\n\n' +
      'The railroad connected the mill towns of Adams and Cheshire — known for paper mills, marble ' +
      'quarrying, and textile manufacturing — to Pittsfield, the Berkshire County seat.[1] The ' +
      'Western Railroad acquired the line during construction, and it eventually became part of the ' +
      'Boston & Albany\'s North Adams Branch, later passing to the New York Central in 1900 and ' +
      'finally to the Boston & Maine Corporation in 1981.[1]\n\n' +
      'Through all these corporate changes, the valley\'s mills churned along. Adams was a major ' +
      'paper-producing town; Cheshire had once supplied the famous "Cheshire Mammoth Cheese" to ' +
      'President Jefferson in 1802. Boston & Maine operated the line until 1990, when service ' +
      'finally ceased.[1]\n\n' +
      'The trail opened in phases beginning in 2001, with extensions in 2004, 2017, 2022, and ' +
      'most recently 2024.[2] It runs along the Hoosic River and the edge of Cheshire Reservoir, ' +
      'with the flanking mountains always visible on either side. A few miles from the southern ' +
      'end of the trail, Herman Melville wrote Moby-Dick at his farm Arrowhead between 1850 and ' +
      '1851. He claimed the silhouette of Greylock, visible from his writing desk, inspired the ' +
      'great white whale.[4]',

    sites: [
      {
        name:    'Adams Station Trailhead',
        lat:      42.6220,
        lng:     -73.1176,
        note:    'The Adams trailhead preserves the former railroad station building, now restored ' +
                 'as a trail access point. Beside it stands a historic Hoosac Valley Line passenger ' +
                 'railcar on permanent outdoor display. The Adams station was the industrial heart ' +
                 'of the northern Berkshires rail network, serving the paper mills and marble ' +
                 'quarries that defined the town.',
        wikiUrl: 'https://en.wikipedia.org/wiki/Adams,_Massachusetts'
      },
      {
        name:    'Cheshire Reservoir',
        lat:      42.5670,
        lng:     -73.1460,
        note:    'The trail follows the eastern edge of Cheshire Reservoir for a long scenic ' +
                 'stretch, with views across open water to the hills beyond. Cheshire was home ' +
                 'to the famous "Cheshire Mammoth Cheese" — a 1,235-pound wheel presented to ' +
                 'President Jefferson in 1802, a gift from the town\'s dairy farmers that became ' +
                 'a national curiosity.',
        wikiUrl: 'https://en.wikipedia.org/wiki/Cheshire_Mammoth_Cheese'
      },
      {
        name:    'View toward Mount Greylock',
        lat:      42.5900,
        lng:     -73.1300,
        note:    'From multiple points along the trail\'s central section, Mount Greylock — at ' +
                 '3,491 feet the highest peak in Massachusetts — is visible to the east. Melville ' +
                 'dedicated Pierre, or The Ambiguities to Greylock "in all his benignity." ' +
                 'Thoreau, Hawthorne, and Oliver Wendell Holmes Sr. all wrote about the mountain.',
        wikiUrl: 'https://en.wikipedia.org/wiki/Mount_Greylock'
      }
    ],

    poems: [
      {
        poet:        'William Cullen Bryant',
        title:       'To a Waterfowl',
        year:         1818,
        sourceUrl:   'https://www.poetryfoundation.org/poems/51861/to-a-waterfowl',
        sourceLabel: 'Poetry Foundation',
        publicDomain: true,
        fullText:
          'Whither, \'midst falling dew,\n' +
          'While glow the heavens with the last steps of day,\n' +
          'Far, through their rosy depths, dost thou pursue\n' +
          'Thy solitary way?\n\n' +
          'Vainly the fowler\'s eye\n' +
          'Might mark thy distant flight, to do thee wrong,\n' +
          'As, darkly seen against the crimson sky,\n' +
          'Thy figure floats along.\n\n' +
          'Seek\'st thou the plashy brink\n' +
          'Of weedy lake, or marge of river wide,\n' +
          'Or where the rocking billows rise and sink\n' +
          'On the chaf\u00e9d ocean side?\n\n' +
          'There is a Power, whose care\n' +
          'Teaches thy way along that pathless coast,\u2014\n' +
          'The desert and illimitable air\n' +
          'Lone wandering, but not lost.\n\n' +
          'All day thy wings have fanned,\n' +
          'At that far height, the cold thin atmosphere;\n' +
          'Yet stoop not, weary, to the welcome land,\n' +
          'Though the dark night is near.\n\n' +
          'And soon that toil shall end,\n' +
          'Soon shalt thou find a summer home, and rest,\n' +
          'And scream among thy fellows; reeds shall bend,\n' +
          'Soon, o\'er thy sheltered nest.\n\n' +
          'Thou\'rt gone, the abyss of heaven\n' +
          'Hath swallowed up thy form, yet, on my heart\n' +
          'Deeply hath sunk the lesson thou hast given,\n' +
          'And shall not soon depart.\n\n' +
          'He, who, from zone to zone,\n' +
          'Guides through the boundless sky thy certain flight,\n' +
          'In the long way that I must trace alone,\n' +
          'Will lead my steps aright.'
      }
    ],

    inDevelopment: [
      {
        name:        'Ashuwillticook Rail Trail \u2014 Continued Southern Extension',
        status:      'Active development',
        description: 'The trail\'s most recent 2024 extension pushed the southern terminus to ' +
                     'Merrill Road in Pittsfield at a cost of $2.3 million. Further extensions ' +
                     'are anticipated to continue southward into Pittsfield\'s urban core and ' +
                     'eventually connect to other Berkshire trail corridors.',
        link: 'https://www.berkshireeagle.com/news/northern_berkshires/rail-trail-extension-pittsfield-adams-merrill-road/article_af3bfc0a-ca1b-11ef-934b-8f073f6d44b8.html'
      },
      {
        name:        'Berkshire Greenway',
        status:      'Planning and advocacy phase',
        description: 'Various Berkshire County planning efforts envision a connected trail ' +
                     'network running the length of Berkshire County from the Vermont border ' +
                     'south to Connecticut, incorporating the Ashuwillticook and other existing ' +
                     'corridors. The Berkshire Regional Planning Commission is building toward ' +
                     'this vision incrementally.',
        link: 'https://storymaps.arcgis.com/stories/dc69c1d06f2a44c19e7df703294c2349'
      }
    ],

    citations: [
      { id: 1, text: 'Wikipedia, "Ashuwillticook Rail Trail"',          url: 'https://en.wikipedia.org/wiki/Ashuwillticook_Rail_Trail' },
      { id: 2, text: 'Wikipedia, "Pittsfield and North Adams Railroad"', url: 'https://en.wikipedia.org/wiki/Pittsfield_and_North_Adams_Railroad' },
      { id: 3, text: 'TrailLink, "Ashuwillticook Rail Trail"',           url: 'https://www.traillink.com/trail/ashuwillticook-rail-trail/' },
      { id: 4, text: 'Wikipedia, "Arrowhead (Melville home)"',          url: 'https://en.wikipedia.org/wiki/Arrowhead_(Melville_home)' }
    ]
  }

}; /* end TRAILS */
