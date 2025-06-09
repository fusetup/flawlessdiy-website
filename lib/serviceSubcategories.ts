// lib/serviceSubcategories.ts
// Map service slugs to their subcategories (example for Carpentry)
export const serviceSubcategories: Record<string, Array<{ topic: string; description: string; icon?: string }>> = {
  carpentry: [
    {
      topic: "Door Hanging",
      description: `A well-fitted door says “welcome”—a wonky one says “help.”\n🚪 We install internal and external doors with perfect hinge alignment and latch positioning.\nIncludes cutting, levelling, lock fitting, and quiet closing that won’t wake the neighbours.\nNew build, refurb, or a quick upgrade—we handle it all.`,
      icon: "Hammer",
    },
    {
      topic: "Skirting Board Installation",
      description: `Skirting that actually skirts properly.\n📐 We cut and install clean, gap-free skirting to protect walls and complete the look.\nFrom classic profiles to modern styles—we make it seamless.\nCorners are mitred perfectly. No caulk rescue missions required.`,
      icon: "Layers",
    },
    {
      topic: "Custom Shelving",
      description: `Storage meets style—and actually fits your space.\n🪚 We build and install shelves to suit any wall, alcove, or oddly shaped corner.\nIdeal for books, plants, retail displays, or your growing collection of mugs.\nWe handle floating, bracketed, or fully bespoke designs.`,
      icon: "Layers",
    },
    {
      topic: "Loft Boarding",
      description: `More room without moving house? Yes please.\n🪜 We install secure, raised loft boards for safe storage access—insulation-friendly too.\nIncludes ladder fitting, hatch work, and edge protection if needed.\nPerfect for decluttering without sacrificing the garage.`,
      icon: "Layers",
    },
    {
      topic: "Stud Wall Construction",
      description: `Need a new room but not a new postcode?\n🧱 We build internal non-load-bearing stud walls to divide space, zone areas, or create storage.\nIncludes framing, plasterboarding, insulation and door openings.\nIdeal for offices, spare rooms, or that en-suite you’ve been promising.`,
      icon: "SquareKanban",
    },
    {
      topic: "Bespoke Wardrobes",
      description: `Off-the-shelf storage never really fits, does it?\n👕 We design, build, and install fitted wardrobes tailored to your space and style.\nSliding doors, shaker fronts, or open units—we handle it all.\nMaximise space from floor to ceiling with a clutter-free finish.`,
      icon: "Layers",
    },
    {
      topic: "Architrave Installation",
      description: `Details matter—and architrave is where trim meets polish.\n🪞 We install neat, clean-edged architraves around doors and windows.\nPerfect for period features or modern updates.\nNo gaps, no mismatched corners, just sharp lines.`,
      icon: "SquareKanban",
    },
    {
      topic: "Decking Installation",
      description: `Make outdoors feel like an extra room—with no walls.\n🌳 We design and build timber decking for gardens, terraces, or patios.\nFrame prep, drainage, edge detail—we handle the lot.\nGreat for entertaining, lounging, or barefoot tea time.`,
      icon: "TreePalm",
    },
    {
      topic: "Staircase Repairs",
      description: `Creaks, wobbles, or a mystery gap? We’ve seen it all.\n🪜 We repair treads, risers, handrails, and bannisters with zero drama.\nSafe, silent, and structurally sound—just as stairs should be.\nAlso great if the dog refuses to go up creaky ones.`,
      icon: "Hammer",
    },    {
      topic: "Window Sill Repair",
      description: `Rotted, cracked, or sagging sills? Time to restore or replace.\n🪟 We repair or refit both interior and exterior window sills to protect and finish frames.\nIncludes sanding, sealing, and repainting (if required).\nYour windows will thank you—with better insulation and zero draughts.`,
      icon: "SquareKanban",
    },
    {
      topic: "Flooring",
      description: `Beautiful floors that stand the test of time and everyday life.\n🪵 We install laminate, engineered wood, vinyl, and solid timber flooring with precision.\nIncludes subfloor preparation, underlay, skirting, and door threshold strips.\nWhether it's a single room refresh or whole-house transformation—we deliver smooth, gap-free results.`,
      icon: "Layers",
    },
    {
      topic: "Kitchen",
      description: `Custom kitchen solutions that work as hard as you do.\n🍳 We design, build, and install bespoke kitchen units, worktops, and storage solutions.\nIncludes cabinet construction, door hanging, drawer runners, and integrated appliance housing.\nFrom compact galley kitchens to spacious family hubs—we create functional, beautiful spaces.`,
      icon: "ChefHat",
    },
  ],
  cleaning: [
    {
      topic: "End of Tenancy Cleaning",
      description: `Landlord approved. Deposit-saving deep cleans.\n🏠 We scrub top to bottom—kitchen, bathroom, carpets, appliances, the lot.\nIncludes oven degrease, limescale removal, and fridge refresh.\nIdeal for tenants, landlords, and letting agents.`,
      icon: "Home",
    },
    {
      topic: "Regular Domestic Cleaning",
      description: `Clean home, clear mind, and zero mop-related guilt.\n🧽 Weekly, fortnightly, or monthly visits to dust, mop, vacuum, and sanitise.\nKitchens, bathrooms, bedrooms—we handle it all with a smile.\nCustom checklists welcome if you're a bit particular (we get it).`,
      icon: "Sparkles",
    },
    {
      topic: "Oven Cleaning",
      description: `Because no one enjoys tackling six months of roast dinners.\n🔥 We deep clean inside, outside, trays, racks, and extractor fans.\nGrease, burnt-on food, and mystery smells? Gone.\nSafe products, no fumes, and your oven shines like new.`,
      icon: "Flame",
    },
    {
      topic: "Carpet Cleaning",
      description: `Fresh fibres, zero footprints, and allergen control in one go.\n🧼 We offer hot water extraction or dry methods depending on your carpet type.\nLifts stains, revives colours, and reduces built-up dust.\nIdeal for homes, rentals, and offices.`,
      icon: "Layers",
    },
    {
      topic: "Window Cleaning",
      description: `Smear-free windows you’ll actually notice when the sun hits.\n🪟 We clean inside and out with streak-free results and safe ladder access.\nFrames, sills, and tough corners included as standard.\nSay goodbye to handprints and smudged skylights.`,
      icon: "Wind",
    },
    {
      topic: "Bathroom Deep Clean",
      description: `Because limescale doesn’t deserve a permanent home.\n🚿 We scrub grout, descale taps, sanitise surfaces, and clear drains.\nTiles, mirrors, fittings—all left sparkling.`,
      icon: "ShowerHead",
    },
    {
      topic: "After-Build Clean",
      description: `Turn your dusty building site back into a livable space.\n🔧 We remove plaster dust, paint flecks, silicone smudges, and debris.\nFloors, surfaces, and fittings are all cleaned and polished.\nIdeal post-renovation, re-fit, or home improvement chaos.`,
      icon: "Wrench",
    },
    {
      topic: "Fridge/Freezer Cleaning",
      description: `Cold storage should not include science experiments.\n🥶 We empty, disinfect, and deodorise fridges and freezers (fully defrosted first).\nShelves, drawers, rubber seals—it all gets the deep clean treatment.\nPerfect pre-move, post-spill, or seasonal refresh.`,
      icon: "Snowflake",
    },
    {
      topic: "Floor Stripping & Polishing",
      description: `Bring back the shine without breaking your back.\n🧼 We machine strip, buff, and polish vinyl or hard floors for a clean, glossy finish.\nIncludes old polish removal, resealing, and slip-safe shine.\nIdeal for offices, commercial kitchens, and hallways.`,
      icon: "Sparkles",
    },
    {
      topic: "Kitchen Degrease",
      description: `When your splashback has seen one too many fry-ups.\n🍳 We clean cupboards, worktops, walls, and extractor filters top to bottom.\nSticky, greasy surfaces are no match for our methods.\nPerfect before a deep clean, sale, or inspection.`,
      icon: "Utensils",
    },
  ],
  gardening: [
    {
      topic: "Lawn Mowing",
      description: `Your grass deserves a glow-up—not a random strim.\n🌱 We cut, edge, and tidy up your lawn so it actually looks intentional.\nIncludes clippings removal, border trims, and a much better first impression.\nOne-time visits or scheduled cuts—no missed patches, no uneven scalping.`,
      icon: "Layers",
    },
    {
      topic: "Hedge Trimming",
      description: `Good hedges make great neighbours—especially when they’re not swallowing fences.\n✂️ We shape, reduce, and tidy all hedge types, from tiny box to towering beasts.\nClean lines, healthy regrowth, and no leftover clippings.\nWe work seasonally to encourage density and long-term hedge health.`,
      icon: "Layers",
    },
    {
      topic: "Weed Control",
      description: `We tackle weeds so you don’t have to play garden whack-a-mole.\n🌾 Manual removal or safe herbicide application, depending on the battlefield.\nPerfect for paths, patios, flowerbeds, and those mystery green things you never planted.\nLong-lasting treatments that won’t harm your plants or pets.`,
      icon: "Layers",
    },
    {
      topic: "Garden Clearance",
      description: `When the garden’s more "wildlife sanctuary" than "outdoor living," we step in.\n🧹 We remove overgrowth, rubbish, brambles, and other chaos—fast.\nIdeal before moving out, selling up, or getting serious about the space.\nWe leave it clear, tidy, and ready for whatever comes next.`,
      icon: "Layers",
    },
    {
      topic: "Planting Services",
      description: `Whether it’s spring blooms or shrubs with ambition, we get them in the ground right.\n🌸 We advise, dig, plant, and position with sunlight and spacing in mind.\nGreat for new beds, refreshes, or your first go at tomatoes.\nWe also source high-quality plants if you need help choosing.`,
      icon: "Layers",
    },
    {
      topic: "Soil Preparation",
      description: `Healthy gardens start underground. (No, really.)\n🌾 We turn, aerate, and enrich soil so it’s fit for planting, seeding, or mulching.\nIt’s the gym workout your soil didn’t know it needed.\nPerfect for vegetable beds, lawn reseeding, or soil revival.`,
      icon: "Layers",
    },
    {
      topic: "Mulching",
      description: `Mulch: nature’s do-it-all. Looks good. Feeds plants. Stops weeds.\n🍂 We apply bark, compost, or chip mulch for moisture retention and tidy finish.\nSay goodbye to dry beds and hello to low-maintenance beauty.\nWe’ll help you choose the right mulch type for your space and goals.`,
      icon: "Layers",
    },
    {
      topic: "Seasonal Tidy-Ups",
      description: `End-of-season chaos? We’re the garden version of a spring clean.\n🍁 We rake, prune, cut back, and prep your space for the next weather curveball.\nPerfect for pre-winter shutdowns or post-winter wakeups.\nIncludes tip runs, green waste clearance, and a fresh start for your plants.`,
      icon: "Layers",
    },
    {
      topic: "Irrigation Setup",
      description: `Watering cans are cute—until the third trip.\n💧 We install hose systems or advise on water-smart setups for beds and lawns.\nSave time, water, and plants that need actual consistency.\nIdeal for busy homeowners, greenhouses, or holiday-proofing your garden.`,
      icon: "Layers",
    },
    {
      topic: "Turfing",
      description: `Instant lawn gratification. Real or fake—we lay it right.\n🌿 We prep the base, level the surface, and roll out fresh turf like pros.\nNo bare patches. No drama. Just green.\nIncludes aftercare advice so your new lawn actually stays lush.`,
      icon: "Layers",
    },
  ],
  "gutter-cleaning": [
    {
      topic: "Gutter Vacuuming",
      description: `The sky vacuum your gutters wish they had.\n🌀 We clear out moss, leaves, sludge, and debris from up to 3 storeys—all from the ground.\nOnboard camera ensures nothing is missed and everything is safely removed.\nGreat for residential homes, office blocks, or hard-to-reach lines.`,
      icon: "Layers",
    },
    {
      topic: "Downpipe Unblocking",
      description: `Because rainwater should go down the pipe, not over your patio.\n🪠 We manually or rod-clear blockages, roots, and compacted waste in downpipes.\nIncludes flow testing and full debris removal at ground level.\nOften the cause of mysterious damp spots and overflows.`,
      icon: "Layers",
    },
    {
      topic: "Gutter Maintenance Check",
      description: `Think of it as your gutter’s annual health check.\n🔍 We visually inspect for cracks, loose fixings, sagging, and pooling issues.\nPhotos and notes included if repairs are needed.\nPreventative care = fewer expensive surprises later.`,
      icon: "Layers",
    },
    {
      topic: "Fascia Wipe Down",
      description: `Keep your edges crisp and clean while we’re up there.\n🧽 We clean fascia boards of dirt, mould, and algae build-up during gutter servicing.\nImproves curb appeal and helps preserve your roofline.\nSimple add-on that makes a big difference visually.`,
      icon: "Layers",
    },
    {
      topic: "Gutter Guard Installation",
      description: `Stop the leaves before they start trouble.\n🛡 We install mesh or brush guards to block future debris build-up.\nReduces cleaning frequency and prevents bird nesting too.\nIdeal for tree-lined properties or rental portfolios.`,
      icon: "Layers",
    },
    {
      topic: "Conservatory Gutter Cleaning",
      description: `Delicate glass? No problem. We go gentle.\n🌦 We clean conservatory gutter lines using vacuum or low-pressure rinsing.\nProtects seals, keeps water flowing, and avoids staining.\nIncludes optional fascia wipe for a full refresh.`,
      icon: "Layers",
    },
    {
      topic: "Rainwater Flow Test",
      description: `Not just clean—but confirmed working.\n💧 We test rainwater movement through guttering and downpipes after every service.\nIncludes hose-fed simulation or real-time overflow checks.\nPeace of mind before the next storm hits.`,
      icon: "Layers",
    },
    {
      topic: "Outbuilding Gutter Cleaning",
      description: `Garages, sheds, and annexes need love too.\n🏚 We clear gutters on detached buildings using the same safe vacuum system.\nQuick, tidy, and ideal for properties with multiple structures.\nCan be bundled with house clean or done standalone.`,
      icon: "Layers",
    },
    {
      topic: "Emergency Overflow Response",
      description: `When it’s raining indoors—call us.\n🚨 We respond quickly to overflow issues, water ingress, or blocked outlets.\nFast vacuuming and pipe clearance to minimise damage.\nGreat for storm aftermaths or last-minute tenant complaints.`,
      icon: "Layers",
    },
    {
      topic: "Gutter Joint Resealing",
      description: `A drip today is a stain tomorrow.\n🔧 We reseal leaking joints between gutter sections to stop persistent drips.\nIncludes surface cleaning and water testing.\nBest done during or after a full clean for lasting results.`,
      icon: "Layers",
    },
  ],
  handyman: [
    {
      topic: "Flat Pack Assembly",
      description: `Box of parts? Bag of screws? No problem.\n🛠 Desks, wardrobes, beds, chairs – built securely and placed exactly where you want them.\nWe bring tools, patience, and instructions-reading superpowers.\nNo missing screws left behind—we check every piece is done right.`,
      icon: "Layers",
    },
    {
      topic: "TV Wall Mounting",
      description: `Don’t trust your TV to guesswork and plasterboard.\n📺 We’ll securely mount your screen, hide the cables, and make sure it’s level—because the sofa deserves a perfect view.\nWe check wall types, weight ratings, and bracket compatibility.\nNo dangling cables or crooked installs—just a cinema-ready finish.`,
      icon: "Layers",
    },
    {
      topic: "Curtain Rail Installation",
      description: `Rods, tracks, poles—curtains don’t hang themselves.\n🪛 We drill, align, and fix your rails, whether it’s a bay window or a tricky stud wall.\nNeed help choosing the right fixings? We’ve got you.\nWe’ll even hang the curtains if you ask nicely.`,
      icon: "Layers",
    },
    {
      topic: "Picture & Mirror Hanging",
      description: `Avoid 17 extra holes in the wall.\n🖼 We’ll hang artwork, mirrors, or wall décor straight, safe, and right first time.\nSuitable for plaster, brick, or mystery walls—you name it.\nLaser-level precision and zero drama.`,
      icon: "Layers",
    },
    {
      topic: "Door Handle Repairs",
      description: `Wobbly knobs? Loose latches? No drama.\n🚪 We tighten, replace, or realign door handles so they open, close, and actually stay shut.\nInternal doors, latches, locks—we handle all types.\nYour doors will thank you. (Silently. Because they close properly now.)`,
      icon: "Layers",
    },
    {
      topic: "Shelf Fitting",
      description: `Need more space or just somewhere to put the houseplants?\n📚 We fit floating or bracketed shelves with the right fixings for the right walls.\nPerfect alignment and weight-checking included.\nNo slanting shelves. No mid-week collapses.`,
      icon: "Layers",
    },
    {
      topic: "Blind Installation",
      description: `Light control, privacy, style—all sorted.\n🪟 We install roller, Venetian, and blackout blinds to suit your frames and windows.\nTidy, aligned, and fully functional on day one.\nNo dangling cords or uneven drops here.`,
      icon: "Layers",
    },
    {
      topic: "Minor Leak Repairs",
      description: `A drip today, a flood tomorrow. Best call us now.\n💧 We tighten joints, reseal connections, and stop leaks in their tracks.\nKitchens, bathrooms, radiators—we’ll stop the trickle.\nWe’ll even clean up the puddle (if you haven’t already mopped it).`,
      icon: "Layers",
    },
    {
      topic: "Furniture Repairs",
      description: `Wobbly chair? Cabinet falling apart? Give it one last chance.\n🪑 We reattach, reinforce, and restore basic furniture damage so you don’t need to replace it.\nGreat for giving old furniture new life.\nFast fixes that actually hold—no glue-and-hope jobs here.`,
      icon: "Layers",
    },
    {
      topic: "Wall Crack Filling",
      description: `A little crack can ruin a good wall.\n🎨 We fill, smooth, and prep minor cracks so your walls are paint-ready again.\nPerfect for pre-decoration or end-of-tenancy touch-ups.\nSay goodbye to surface flaws and hello to clean lines.`,
      icon: "Layers",
    },
  ],
  "jet-wash-cleaning": [
    {
      topic: "Driveway Jet Washing",
      description: `Because tyre marks and moss don’t exactly scream “welcome.”\n🧼 We pressure clean concrete, paving, or resin drives for a crisp, refreshed look.\nRemoves oil stains, algae, and that weird green stripe down the middle.\nAlso great before resealing or selling your property.`,
      icon: "Layers",
    },
    {
      topic: "Patio Cleaning",
      description: `Your patio deserves better than patchy power rinses.\n🪴 We lift dirt, mould, and lichen from slabs, flags, tiles, and grout.\nRestores grip, colour, and pride in your BBQ space.\nNo flooding, no damage—just clean results.`,
      icon: "Layers",
    },
    {
      topic: "Decking Cleaning",
      description: `Because algae and timber don’t mix.\n🌿 We use gentle jet settings to clean wooden or composite decks safely.\nRemoves slippery build-up while protecting the surface grain.\nIdeal before re-staining or just enjoying barefoot evenings.`,
      icon: "Layers",
    },
    {
      topic: "Brick Wall Washing",
      description: `Give your brickwork a break from years of grime.\n🧱 We rinse vertical surfaces to clear dirt, dust, and pollution streaks.\nIncludes controlled pressure to avoid mortar damage.\nMakes your garden walls and facades pop again.`,
      icon: "Layers",
    },
    {
      topic: "Garden Furniture Cleaning",
      description: `Wipe-downs won’t cut it—especially after winter.\n🪑 We pressure wash plastic, wood, rattan, or metal furniture to restore appearance.\nNo soap residue, no flaking—just ready-to-sit freshness.\nAlso great for prepping before outdoor events or sales.`,
      icon: "Layers",
    },
    {
      topic: "Garage Floor Cleaning",
      description: `Because concrete stains are surprisingly stubborn.\n🧽 We degrease and blast away oil, tyre marks, and dust from garage floors.\nImproves appearance and safety for both home and commercial units.\nBest paired with an empty garage and strong before/after photos.`,
      icon: "Layers",
    },
    {
      topic: "Graffiti Removal",
      description: `Spray paint happens—we know how to make it un-happen.\n🎨 We use safe solvents and pressure washing to remove graffiti from brick, render, or panels.\nTargeted treatment avoids ghosting and damage.\nFast, discreet, and council-compliant.`,
      icon: "Layers",
    },
    {
      topic: "Vehicle Jet Wash (On-Site)",
      description: `Your car deserves better than a supermarket sponge swipe.\n🚗 We bring a portable unit to wash cars, bikes, vans—at home or at work.\nIncludes body rinse, wheel clean, and bug-splat removal.\nGreat for busy schedules, fleets, or driveway-only detailers.`,
      icon: "Layers",
    },
    {
      topic: "Bin Area Cleaning",
      description: `Because bin day shouldn’t come with a biohazard warning.\n🗑️ We clean waste storage zones with hot-pressure and anti-odour agents.\nRemoves built-up grime, fly-attractants, and unpleasant smells.\nEssential for shared properties and commercial premises.`,
      icon: "Layers",
    },
    {
      topic: "Swimming Pool Area Wash",
      description: `Keep your pool area safe, sharp, and slime-free.\n🏊 We pressure clean non-slip surfaces and grouting around pools and hot tubs.\nEliminates algae, sunscreen stains, and general grime.\nNon-abrasive technique keeps finishes intact and party-ready.`,
      icon: "Layers",
    },
  ],
  painting: [
    {
      topic: "Wall Painting",
      description: `Because patchy paint jobs shouldn’t be part of the aesthetic.\n🎨 We prep, cut-in, and roll emulsion or specialist paints for smooth, even results.\nGreat for freshening rooms, updating colour schemes, or rental turnarounds.\nIncludes filler work and light sanding as needed.`,
      icon: "Layers",
    },
    {
      topic: "Ceiling Painting",
      description: `No more neck ache or drip panic—we’ve got the ceilings covered.\n🧱 We apply matt, stain-block, or anti-mould finishes with roller precision.\nTidy edging and lighting cut-outs handled neatly.\nIdeal for refreshes or post-damp restoration.`,
      icon: "Layers",
    },
    {
      topic: "Trim & Woodwork Painting",
      description: `Sharp lines. Clean edges. No brush marks.\n🪵 We paint skirting boards, door frames, architraves, and windows with gloss, satin, or eggshell.\nMeticulous masking and sanding = a pro finish every time.\nAdds the final polish to any room repaint.`,
      icon: "Layers",
    },
    {
      topic: "Exterior Masonry Painting",
      description: `Because your house deserves curb appeal too.\n🏠 We apply breathable, weatherproof coatings to render, brick, or stone surfaces.\nPressure washing, crack filling, and primer as standard.\nProtects against the elements—and looks fantastic doing it.`,
      icon: "Layers",
    },
    {
      topic: "Fence & Shed Painting",
      description: `A splash of colour and a coat of protection in one go.\n🪚 We treat timber fencing, gates, and sheds with long-life preservatives and finishes.\nIncludes moss removal and sanding where needed.\nKeeps wood healthy and the garden looking sharp.`,
      icon: "Layers",
    },
    {
      topic: "Metal Gate Painting",
      description: `Rust has met its match.\n🛠 We wire-brush, prime, and paint metal gates, railings, and bars in smooth, even coats.\nRust-resistant options and decorative finishes available.\nGoodbye flaky black paint—hello sharp kerbside style.`,
      icon: "Layers",
    },
    {
      topic: "Feature Wall Design",
      description: `Make a statement without saying a word.\n🎯 We apply bold colours, geometric designs, or textured finishes to create a standout wall.\nIncludes layout marking, masking, and laser-straight edges.\nPerfect for lounges, offices, or creative spaces.`,
      icon: "Layers",
    },
    {
      topic: "Wallpaper Installation",
      description: `When paint just doesn’t cut it.\n🧻 We hang patterned, textured, or mural wallpaper with precise alignment and no bubbles.\nIncludes wall prep, lining paper if needed, and seamless joins.\nIdeal for statement spaces or high-end finishes.`,
      icon: "Layers",
    },
    {
      topic: "Staircase Painting",
      description: `High-traffic detail painting done with serious care.\n🪜 We hand-paint risers, bannisters, spindles, and newels with durable coatings.\nIncludes sanding, priming, and anti-slip where applicable.\nTransforms tired stairs into standout features.`,
      icon: "Layers",
    },
    {
      topic: "Garage Door Painting",
      description: `Refresh your garage door and give the whole exterior a lift.\n🚪 We clean, sand, prime, and repaint wooden or metal garage doors.\nRust treatment, weatherproofing, and colour matching included.\nGreat as a standalone or paired with masonry painting.`,
      icon: "Layers",
    },
  ],
  // Add other services here (gardening, etc.)
};
