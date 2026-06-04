/* ═══════════════════════════════════════════════════════
   ARS — AUTHENTIC RECIPE STATION
   Complete Food Data (54 Recipes)
   ═══════════════════════════════════════════════════════ */

window.ARS_FOOD_DATA = {
  categories: [
  {
    "id": "starters",
    "name": "Starters & Pakodas",
    "emoji": "🍤",
    "tagline": "High-margin deep-fried starters, pakodas, and omelettes engineered for live-counter speed."
  },
  {
    "id": "patrapoda",
    "name": "Signature Patrapoda",
    "emoji": "🔥",
    "tagline": "House specialty slow-cooked in banana leaves and perfectly spiced."
  },
  {
    "id": "grill",
    "name": "Charcoal & Tandoor Grilled",
    "emoji": "🍢",
    "tagline": "Smoky, tender, and lower in calories."
  },
  {
    "id": "chinese",
    "name": "Indo-Chinese",
    "emoji": "🌶️",
    "tagline": "Staggering high-yield wok-tossed recipes powered by the single Master Chilli Gravy engine."
  },
  {
    "id": "rolls",
    "name": "Premium Rolls",
    "emoji": "🌯",
    "tagline": "Street-style flaky rolls wrapped in egg jackets, optimized for par-cooked bulk preparation."
  },
  {
    "id": "burgers-sandwiches",
    "name": "Burgers & Sandwiches",
    "emoji": "🍔",
    "tagline": "Loaded burgers, Sujata-grilled sandwiches, and crunchy French fries designed for quick assembly."
  }
],
  recipes: [
  {
    "id": 101,
    "name": "Mushroom Pakoda",
    "prices": [
      "₹69",
      "₹139"
    ],
    "categoryId": "starters",
    "categoryName": "Starters & Pakodas",
    "colorAccent": "#0c831f",
    "quickMix": "Structuring Deep-Fried Mushroom Pakoda (ଛତୁ ପକୋଡ଼ା) at dual volume tiers of ₹69 (Regular) and ₹139 (Full) using your 2.5...",
    "description": "Structuring Deep-Fried Mushroom Pakoda (ଛତୁ ପକୋଡ଼ା) at dual volume tiers of ₹69 (Regular) and ₹139 (Full) using your 2.5L commercial electric deep fryer is an exceptionally smart, high-margin move. Mushrooms have a low wholesale raw material cost but carry high perceived value among vegetarian customers looking for a juicy, meaty evening snack.\n\nTo make this highly profitable, you can use standard fresh Button mushrooms or Oyster mushrooms cut into halves (or quarters if they are large). The primary culinary challenge with mushrooms is their massive water content (nearly 90%). If you don't extract or lock in that moisture before frying, they will weep water into the batter, turning the pakodas soggy and causing the fryer oil to splatter violently.",
    "portionControl": "The commercial portion structure must be tightly controlled by weight:\n\nRegular Portion (₹69): 80g net raw mushrooms + batter volume (≈ 8–10 crisp pakodas).\n\nFull Portion (₹139): 180g net raw mushrooms + batter volume (≈ 18–22 crisp pakodas — adds 20g bonus weight to drive the upsell).",
    "costBreakdown": [
      "Component Cost (Per Plate)\tRegular Portion (Retail: ₹69)\tFull Portion (Retail: ₹139)",
      "Fresh Cleaned Mushrooms\t80g = ₹10.00\t180g = ₹22.50",
      "The Crunch Batter Matrix\tBesan, Rice Flour, Cornstarch\t₹1.50",
      "Aromatics & Spices (Onion, Garlic, Curry Leaf, Chilli)\t₹2.00\t₹4.00",
      "Commercial Frying Oil (Rice Bran / Palm absorption)\t₹3.00\t₹5.50",
      "Packaging & Green Chutney / Onion salad\t₹2.50\t₹4.50",
      "Direct Fryer Electricity\t2000W Fryer 3.5-minute cycle\t₹1.50",
      "TOTAL PRODUCTION COST\t₹20.50\t₹42.50",
      "FOOD COST PERCENTAGE\t29.7%\t30.5%",
      "GROSS PROFIT MARGIN\t70.3% (₹48.50 Profit)\t69.5% (₹96.50 Profit)",
      "Financial Matrix: Because mushrooms are light and expand beautifully when coated in a jagged onion-and-flour batter, the plate looks incredibly full and premium while your raw material cost stays safely around 30%."
    ],
    "ingredients": [
      "To keep mushroom pakodas shatter-crisp for home delivery, you need a high-starch outer shell that creates a barrier against steam escaping from inside the mushroom. Use this exact flour ratio:",
      "Besan (Gram Flour): 50% (For the rich, earthy flavor and golden base).",
      "Rice Flour (Chaula Gunda): 35% (The secret to a long-lasting, glass-like crunch).",
      "Cornstarch / Arraroot: 15% (Forms a tight, sealed shell that blocks oil absorption and locks in moisture).",
      "The Street-Style Lifter: Plenty of finely sliced onions (cut into thin, long shards) and a handful of coarsely torn fresh curry leaves (Bhrusanga Patra)."
    ],
    "steps": [
      {
        "title": "The Mushroom Moisture Drain",
        "duration": "5 Mins",
        "detail": "Wash the mushrooms quickly (do not let them soak in water). Wipe them completely dry with a clean kitchen towel and slice them into halves. Toss them with a tiny pinch of salt and 21​ tsp vinegar or lemon juice. Let them sit for 3 minutes, then gently squeeze out any surface water they release.",
        "timerSeconds": 300
      },
      {
        "title": "The Dry-Flour Coating Bind",
        "duration": "3 Mins",
        "detail": "Add your thin onion shards, chopped green chillies, ginger-garlic paste, curry leaves, turmeric, chilli powder, and chaat masala directly to the mushrooms. Dust the dry batter flour mix straight over the tray. Do not add water. Mix firmly with your hands. The mushroom's natural moisture and the weeping onion juice will wet the flours, forming a thick, sticky paste that clings tightly to the mushroom halves.",
        "timerSeconds": 180
      },
      {
        "title": "Fryer Thermal Calibration",
        "duration": "2 Mins",
        "detail": "Fill your 2.5L fryer to its maximum fill line with clean Rice Bran or Palm oil. Turn the temperature dial to 180∘C. Wait until the indicator light shuts off, signaling the oil is fully heated and charged.",
        "timerSeconds": 120
      },
      {
        "title": "The Scattered Drop Fry",
        "duration": "4 Mins",
        "detail": "Submerge the empty wire basket into the hot oil first. Pick up 2–3 mushroom halves coated in onion strands at a time and drop them individually into the hot oil through the surface. Fry for 3.5 to 4 minutes until the exterior turns into a deep amber, crispy crust. Lift the basket, hook it to drain for 15 seconds, dust with black salt or chaat masala, and serve piping hot.",
        "timerSeconds": 240
      }
    ],
    "hacks": [
      {
        "title": "The 2.5L Oil Plunge Warning",
        "text": "Mushrooms are cold and contain water. If you dump a full, wet-coated \"Full Portion\" (approx. 20 pieces) into your compact 2.5L fryer all at once, the oil temperature will plummet instantly. The mushrooms will start boiling in the oil instead of frying, making the batter slide off and turn into a greasy, soggy mess. Always fry your Full Portion orders in two split, rapid back-to-back batches to keep the oil screaming hot."
      },
      {
        "title": "The Onion Wrapping Trick",
        "text": "Ensure your onions are sliced paper-thin and long. When tossed with the dry flour and mushrooms, these sticky onion strands wrap around the mushroom halves. When deep-fried, the onions crisp up into erratic, jagged shapes. This expands the physical size of each pakoda by 40% without adding expensive mushroom weight."
      },
      {
        "title": "No Pre-Frying for Mushrooms",
        "text": "Unlike chicken or fish, mushrooms cannot be par-fried hours in advance. If a par-fried mushroom pakoda sits in a refrigerator, the internal mushroom will continue to bleed water into the cooked crust, turning it completely soggy and un-servable. Always mix the batter and fry mushroom pakodas strictly fresh on order."
      }
    ],
    "storageAndWaste": "Because mushrooms spoil rapidly once exposed to moisture and salt, strict prep separation is mandatory to protect your margins.\n\n1. The Raw Separation Protocol (Zero-Waste Setup)\n\nNever mix raw mushrooms, sliced onions, salt, and flours together in bulk for storage. Within an hour, the mixture will turn into a watery, unusable batter soup.\n\nThe Kitchen Line Setup: Keep your washed, dried, and sliced raw mushroom halves stored dry in an airtight container in the chiller at 2∘C to 4∘C (holds perfectly for 24 to 36 hours). Keep your flour mix dry in a jar on the counter. Only combine a single portion of mushrooms, fresh onion shards, curry leaves, spices, and flour mix in a small bowl when an order prints. This guarantees a rock-solid crunch every single time and prevents raw inventory wastage.\n\n2. Upcycling Unsold Cooked Pakodas (Zero-Waste Strategy)\n\nIf you have fried mushroom pakodas left over at the end of the evening shift due to a canceled delivery or over-cooking, do not discard them. Store them cold overnight and upcycle them into a premium item for your next day's lunch thali crew:\n\nMushroom Pakoda Besara / Chilli Kassa: Heat a wok with mustard oil, crackle some mustard seeds, and toss in sliced onions, green chillies, and a tablespoon of Besara (mustard) paste or basic onion-tomato gravy. Drop the cold leftover mushroom pakodas directly into this hot, pungent gravy base with a quick splash of water. The crispy outer batter acts like a sponge, absorbing the sauce beautifully to create a sensational \"Mushroom Pakoda Patua\" or \"Mushroom 65 Dry Kassa\" side dish that sells out instantly at 100% profit.\n\nWould you like me to map out a complementary dipping sauce formula—like a punchy garlic-pudina street chutney—that pairs perfectly with this item, or should we break down another high-margin starter for your menu?"
  },
  {
    "id": 102,
    "name": "Paneer Pakoda",
    "prices": [
      "₹69",
      "₹139"
    ],
    "categoryId": "starters",
    "categoryName": "Starters & Pakodas",
    "colorAccent": "#0c831f",
    "quickMix": "Structuring Deep-Fried Paneer Pakoda (ପନିର ପକୋଡ଼ା) at dual volume tiers of ₹69 (Regular) and ₹139 (Full) using your 2.5L...",
    "description": "Structuring Deep-Fried Paneer Pakoda (ପନିର ପକୋଡ଼ା) at dual volume tiers of ₹69 (Regular) and ₹139 (Full) using your 2.5L commercial electric deep fryer is a brilliant, high-demand play for the evening snack crowd. Paneer is the undisputed king of vegetarian starters, and hitting a sub-₹70 entry price point will make your order counter line stretch out daily.\n\nBecause dairy carries a high raw material cost, tight portion control by weight is the only way to safeguard your margins. You must cut your paneer into uniform, rectangular batons (3 cm×1 cm×1 cm). Cutting them into blocks or fingers ensures they look elongated and hefty on the plate while cooking completely through to a soft, creamy core in under 3 minutes.",
    "portionControl": "The commercial weight matrix must be strictly executed by the line cooks:\n\nRegular Portion (₹69): 60g net raw paneer + batter volume (≈ 5 chunky pieces).\n\nFull Portion (₹139): 130g net raw paneer + batter volume (≈ 11 chunky pieces — includes 10g bonus meat-equivalent to lock in the upsell).",
    "costBreakdown": [
      "Component Cost (Per Plate)\tRegular Portion (Retail: ₹69)\tFull Portion (Retail: ₹139)",
      "Fresh Dairy Paneer Batons\t60g = ₹14.00\t130g = ₹30.30",
      "The Crunch Batter Matrix\tBesan, Rice Flour, Cornstarch\t₹1.50",
      "Aromatics & Spices (Chilli, Ginger-Garlic, Ajwain, Mint)\t₹1.50\t₹3.00",
      "Commercial Frying Oil (Palm / Rice Bran absorption)\t₹2.50\t₹5.00",
      "Packaging & Green Chutney / Onion salad\t₹2.50\t₹4.50",
      "Direct Fryer Electricity\t2000W Fryer 3-minute cycle\t₹1.50",
      "TOTAL PRODUCTION COST\t₹23.50\t₹48.80",
      "FOOD COST PERCENTAGE\t34.1%\t35.1%",
      "GROSS PROFIT MARGIN\t65.9% (₹45.50 Profit)\t64.9% (₹90.20 Profit)"
    ],
    "ingredients": [
      "Paneer pakodas face a unique dual challenge: the outer crust must be perfectly crispy, but the inner paneer must remain milky and soft—never rubbery. To achieve this, use a slightly thicker, enveloping batter coat:",
      "Besan (Gram Flour): 65% (Provides the rich, classic nutty aroma and a thick, smooth coating wall).",
      "Rice Flour (Chaula Gunda): 20% (Provides the long-lasting outer crunch that survives delivery steam).",
      "Cornstarch / Arraroot: 15% (Seals the jacket instantly upon touching the oil, locking the dairy fats inside).",
      "The Digestibility Lifter: 21​ tsp of crushed Ajwain (Carom seeds) and a pinch of asafoetida (hing) mixed into the flour base. This cuts the heaviness of the besan and paneer, creating a distinct, hotel-style fragrance."
    ],
    "steps": [
      {
        "title": "The Warm-Saline Rest",
        "duration": "5 Mins",
        "detail": "Cut your paneer into uniform 3 cm×1 cm batons. If using refrigerated or frozen blocks, soak the cut pieces in warm, lightly salted water for 5 minutes, then drain and pat completely dry. This step keeps the paneer soft, juicy, and well-seasoned to the core.",
        "timerSeconds": 300
      },
      {
        "title": "The Inside-Out Mint Slit",
        "duration": "3 Mins",
        "detail": "Make a small, shallow, lengthwise slit down the center of each paneer baton. Smear a tiny drop of dense green mint-garlic chutney inside the slit, then dust the batons with a light pinch of chaat masala and red chilli powder. This hidden spice layer gives the pakoda a massive burst of flavor at the very first bite.",
        "timerSeconds": 180
      },
      {
        "title": "The Ribbon-Batter Prep",
        "duration": "2 Mins",
        "detail": "Whisk your flour matrix with water, ginger-garlic paste, salt, turmeric, and ajwain until it forms a smooth, thick batter that handles like a ribbon (similar to pancake batter). Preheat your 2.5L fryer to 180∘C until the thermal light turns off.",
        "timerSeconds": 120
      },
      {
        "title": "The Submerged Drop Fry",
        "duration": "3 Mins",
        "detail": "Submerge the wire fryer basket into the hot oil first. Hold each stuffed paneer baton by its tip, dip it into the thick batter to form a complete, seamless jacket, and slide it gently into the hot oil. Fry for exactly 2.5 to 3 minutes until the exterior puffs up and turns a rich golden-yellow color. Lift, drain for 15 seconds, dust with black salt, and serve hot.",
        "timerSeconds": 180
      }
    ],
    "hacks": [
      {
        "title": "The 2.5L \"Sinking\" Batter Trap",
        "text": "Because paneer pakoda batter is thick and heavy, dropping the pieces too quickly can cause them to sink right through to the bottom mesh of your fryer basket, sticking to the wire grids. Always hold the coated paneer piece halfway inside the hot oil surface for 3 seconds before letting go. This flash-cooks the outer batter layer instantly, allowing the pakoda to float freely without sticking."
      },
      {
        "title": "The Double-Coating Secret",
        "text": "If your batter is too thin, it will slip off the sleek, oily surface of the paneer during frying, leaving exposed bald patches that turn rubbery. To avoid this, ensure your batter is thick enough to coat a spoon, or dust your raw paneer batons lightly with dry cornstarch before dipping them into the wet batter."
      },
      {
        "title": "No High-Heat Flash Frying",
        "text": "Never cook paneer pakodas at 190∘C or double-fry them. High heat causes the moisture inside the dairy to vaporize aggressively, forcing the paneer proteins to contract tightly. This strips away its creaminess and turns your high-value snack into a rubbery, chewy block. Stick to a strict, single-fry cycle at 180∘C."
      }
    ],
    "storageAndWaste": "Dairy spoils quickly and absorbs ambient refrigerator smells if left uncovered. Maintain tight station hygiene to prevent raw inventory loss:\n\n1. The Line Station Setup (The Order-by-Order Dip)\n\nNever leave paneer batons sitting inside the wet besan batter container for hours. The paneer will dissolve into the mix, thinning your batter and ruining its binding properties.\n\nThe Pro Setup: Keep your pre-cut, stuffed paneer batons arranged neatly in a dry, stainless steel container lined with butter paper. Keep this container tightly sealed inside your chiller at 2∘C to 4∘C (holds perfectly fresh for 36 hours). Keep your bulk wet batter stored separately in a plastic jug. Dip the required number of pieces (5 or 11) into the batter jar only when an order ticket buzzes. This keeps your line neat and your waste at absolute zero.\n\n2. Upcycling Unsold Cooked Pakodas (Zero-Waste Strategy)\n\nIf you have fried paneer pakodas left over at closing time due to a canceled delivery or staff over-prep, do not discard them. Store them cold. The next morning, upcycle them into a premium item for your afternoon lunch thali crew:\n\nPaneer Pakoda Butter Kassa / Kadhai: Slice the cold leftover paneer pakodas into halves. Heat a wok with oil or butter, add ginger-garlic paste, chopped onions, capsicum, and a standard red tomato-gravy base. Toss the cooked pakoda pieces straight into this bubbling curry base with a splash of hot water. The thick besan-rice crust absorbs the gravy beautifully, acting like a rich, savory kofta jacket. Sell it as a high-margin \"Paneer Pakoda Curry\" or \"Paneer Malai Kofta\" side dish to clear your inventory out at a massive profit.\n\nWould you like me to map out a bulk batching formula for the internal mint stuffing paste to help your prep cooks standardize the flavor profile, or should we move on to break down another profitable street snack for your menu?"
  },
  {
    "id": 103,
    "name": "Egg Chop",
    "prices": [
      "₹39",
      "₹79"
    ],
    "categoryId": "starters",
    "categoryName": "Starters & Pakodas",
    "colorAccent": "#dc2626",
    "quickMix": "Introducing an authentic, street-style Egg Chop (ଡିମ୍ବ ଚପ୍) at dual price tiers of ₹39 (Regular) and ₹79 (Full) using yo...",
    "description": "Introducing an authentic, street-style Egg Chop (ଡିମ୍ବ ଚପ୍) at dual price tiers of ₹39 (Regular) and ₹79 (Full) using your 2.5L commercial electric deep fryer is a brilliant, high-margin revenue generator. Egg Chop is a beloved evening staple across Odisha—prized for its crispy outer crust, spiced potato casing, and rich boiled egg core.\n\nTraditional Odia Egg Chop Structure. Source: odisha food delite - WordPress.com",
    "portionControl": "To hit these aggressive price points with an incredible food cost profile, the portion sizes must be clearly engineered by cutting the boiled eggs strategically:\n\nRegular Portion (₹39): 1 Jumbo Egg Chop. Inside is 21​ a boiled egg wrapped in a thick, highly seasoned aloo bharta casing and breaded to look massive.\n\nFull Portion (₹79): 2 Jumbo Egg Chops. Each contains 21​ a boiled egg (≈ 1 full egg total across the plate), served with a bonus side of onion-cucumber salad and punchy mustard-chilli chutney.",
    "costBreakdown": [
      "| Component Cost (Per Plate) | Regular Portion (1 Jumbo Chop | Retail: ₹39) | Full Portion (2 Jumbo Chops | Retail: ₹79) |",
      "| :--- | :--- | :--- |",
      "| Wholesale Boiled Eggs | 21​ Egg = ₹3.00 | 1 Full Egg = ₹6.00 |",
      "| Spiced Potato Filling Matrix | 60g aloo bharta = ₹1.50 | 120g aloo bharta = ₹3.00 |",
      "| Breading Shell (Maida slurry + Biscuit powder) | ₹1.50 | ₹3.00 |",
      "| Commercial Frying Oil | Rice Bran / Palm (Absorption loss) | ₹2.00 | ₹3.50 |",
      "| Packaging & Ghugni / Chutney | Paper plate + dip + onion garnish | ₹2.50 | ₹4.50 |",
      "| Direct Fryer Electricity | 2000W Fryer 3-minute cycle | ₹1.50 | ₹2.50 |",
      "| TOTAL PRODUCTION COST | ₹12.00 | ₹25.50 |",
      "| FOOD COST PERCENTAGE | 30.7% | 32.2% |",
      "| GROSS PROFIT MARGIN | 69.3% (₹27.00 Profit) | 67.8% (₹53.50 Profit) |"
    ],
    "ingredients": [
      "Frying boiled eggs carries an operational hazard: if moisture hits the yolk directly in the oil, it can violently explode. The aloo casing and breading must form a tight, complete seal.",
      "1. The Aloo Bharta Masala Base (Per 20 Chops)",
      "Potatoes (Boiled & mashed dry): 1 kg.",
      "The Flavor Trio: 100g finely chopped onions, 2 tablespoons of ginger-garlic paste, and plenty of coarsely torn curry leaves.",
      "Spices: Turmeric, Kashmiri chilli powder (gives the potato that signature deep color seen in the image), and Odia Bhaja Masala (roasted cumin and dry red chilli powder).",
      "2. The Budget-Friendly Breading",
      "The Slurry: A thin, runny mixture of Maida, cornstarch, water, and salt.",
      "The Outer Shell: Coarsely ground local rusks or toast biscuit powder. Do not use expensive Panko crumbs here; local toast powder provides that classic rustic, hard street-style crunch while being extremely cost-efficient."
    ],
    "steps": [
      {
        "title": "The Egg Slicing & Core Wrap",
        "duration": "10 Mins",
        "detail": "Hard-boil your eggs completely and peel them. Slice each egg perfectly in half lengthwise. Take a 60g portion of your cold, spiced potato mixture, flatten it in your palm, place the half egg yolk-side down against the potato, and wrap the potato up around the egg. Shape it into a smooth, oval, egg-like dome with no cracks.",
        "timerSeconds": 600
      },
      {
        "title": "The Double-Shell Shield",
        "duration": "5 Mins",
        "detail": "Preheat your 2.5L electric deep fryer to 180∘C. Dip the potato-wrapped chop into the runny maida slurry, let the excess drip off, then roll it immediately in the toast biscuit powder to coat completely. Press firmly with your palms so the breading locks onto the potato layer.",
        "timerSeconds": 300
      },
      {
        "title": "The High-Speed Drop Fry",
        "duration": "2 Mins",
        "detail": "Submerge your wire fryer basket into the hot oil first. Drop the breaded chops into the basket gently. Because the interior ingredients (eggs and potatoes) are already fully cooked, you are only frying to crisp the shell. Fry for exactly 2 to 2.5 minutes until the exterior shell turns a deep golden-brown, crispy armor.",
        "timerSeconds": 120
      },
      {
        "title": "The Drain & Plate Setup",
        "duration": "1 Min",
        "detail": "Lift the basket and let it hang to drain excess surface oil for 15 seconds. Dust the hot chops with black salt or chaat masala. Serve immediately alongside sliced raw onions and a spoonful of pungent mustard chutney (Kasundi).",
        "timerSeconds": 60
      }
    ],
    "hacks": [
      {
        "title": "The Yolk Explosion Warning",
        "text": "If your line cooks leave a bald spot where the egg white or yolk is exposed through the potato casing, the hot 180∘C oil will penetrate instantly, causing the egg to burst or crack violently inside your 2.5L fryer. Enforce a strict quality control check: every chop must be completely covered in potato and double-breaded before touching the oil."
      },
      {
        "title": "The Sinking Basket Problem",
        "text": "Wet-breaded chops are heavy and can easily stick to the bottom mesh wire of your fryer basket if dropped too quickly, tearing off the crust. Always swirl the chop gently in the top layer of the oil for 3 seconds before letting it settle."
      },
      {
        "title": "The Aloo Moisture Trap",
        "text": "Never use freshly boiled, steaming hot potatoes to make the bharta casing. Hot potatoes hold steam and become sticky and gooey; when fried, this steam will expand, causing the outer breading to crack open. Always boil your potatoes hours in advance, cool them completely, and mash them dry."
      }
    ],
    "storageAndWaste": "Egg Chop is an incredible fast-food item because it can be fully prepared and shaped ahead of time, allowing you to manage your line station with zero waste.\n\n1. The Par-Crate Fridge Protocol (High-Speed Turnaround)\n\nDo not roll and shape chops live on order during peak evening rushes. It slows down your ticket speed.\n\nThe Pro Move: Have your prep cooks batch-prepare, shape, and fully bread 50 to 100 egg chops during the afternoon. Arrange them in a single layer on a plastic crate or tray lined with butter paper. Cover the tray with plastic wrap and store it in your chiller at 2∘C to 4∘C. They will hold perfectly fresh for up to 36 hours. When a customer arrives, take out the exact count (1 or 2) straight from the fridge and drop them directly into the 180∘C fryer. Hot, crackling egg chops hit the plate in 2 minutes flat.\n\n2. Upcycling Unsold Inventory (Zero-Waste Strategy)\n\nIf you have un-fried breaded egg chops left over at closing time that cannot be stored further, do not discard them. Upcycle them into your next day's high-margin lunch curry thali:\n\nAloo Egg Chop Curry (Dimer Dalna Style): The next morning, remove the outer biscuit crumbs. Coarsely crush the potato-and-egg chops into thick chunks. Heat a pan with oil, prepare a standard ginger-garlic and onion-tomato gravy, and gently drop these spiced potato-and-egg chunks into the bubbling gravy. The spiced potato casing dissolves slightly to thicken the curry, creating a rich, highly popular \"Egg-Aloo Katak Curry\" side item for your lunch rice thali crowd. This salvages 100% of your food cost.\n\nWould you like me to map out an easy, low-cost recipe for the street-style Kasundi mustard chutney to pair with these chops, or break down another profitable evening starter item for your kitchen menu?"
  },
  {
    "id": 104,
    "name": "Chilli Prawn",
    "prices": [
      "Regular: ₹139",
      "Full: ₹259"
    ],
    "categoryId": "chinese",
    "categoryName": "Indo-Chinese",
    "colorAccent": "#dc2626",
    "quickMix": "A master-gravy strategy is the ultimate way to unlock lightning-fast ticket times and flawless consistency in a commerci...",
    "description": "A master-gravy strategy is the ultimate way to unlock lightning-fast ticket times and flawless consistency in a commercial Indo-Chinese kitchen. By engineering one base \"Master Chilli Gravy,\" your line cook only needs to ladle the base into a hot wok, drop in the flash-fried protein (Prawns, Chicken, Paneer), and toss. No measuring sauces under pressure.\n\nTo launch this high-efficiency system, let’s look at your first item: Chilli Prawn (regular at ₹139 and full at ₹259) cooked using your 2.5L electric deep fryer and a wok line.\n\nTo protect your target food cost, you must source peeled, deveined small white prawns (size 80/100 count per kg). Prawns shrink when fried, but the master gravy coating will plump them up, giving the customer a high-volume, premium plate experience.",
    "portionControl": "",
    "costBreakdown": [
      "Regular Portion (₹139): 80g net prawns + 80ml Master Gravy (≈ 8–10 juicy pieces).",
      "Full Portion (₹259): 170g net prawns + 150ml Master Gravy (≈ 18–20 juicy pieces — includes 10g bonus seafood to push the higher ticket).",
      "Component Cost (Per Plate)\tRegular Portion (Retail: ₹139)\tFull Portion (Retail: ₹259)",
      "Cleaned Small Prawns\t80g = ₹24.80\t170g = ₹52.70",
      "The Prawn Crunch Batter\tCornstarch, Maida, Egg-white\t₹1.50",
      "Master Chilli Gravy Base\tThick house sauce ladle allocation\t₹5.50",
      "Fresh Toss Veggies\t40g Diced Onion & Capsicum mix\t₹2.00",
      "Commercial Frying Oil\tRice Bran / Palm (Absorption loss)\t₹3.00",
      "Packaging & Containers\tLeak-proof microwave box\t₹3.50",
      "Direct Power & Overhead\tFryer + Wok burner overhead\t₹2.50",
      "TOTAL PRODUCTION COST\t₹42.80\t₹85.70",
      "FOOD COST PERCENTAGE\t30.8%\t33.1%",
      "GROSS PROFIT MARGIN\t69.2% (₹96.20 Profit)\t66.9% (₹173.30 Profit)",
      "🧪 The Universal \"Master Chilli Gravy\" Batch Formula",
      "This is the bulk blueprint for your single base gravy. It is perfectly balanced to cut through the richness of fried paneer, chicken, and prawns.",
      "Yield: Approx. 3 Liters of Concentrated Gravy Base (Enough for ~25-30 Regular Portions).",
      "Ingredients for Bulk Base:",
      "The Liquid Engine: 1 Liter Water / Low-cost Chicken-Bone Stock.",
      "The Chinese Sauce Matrix: 400ml Dark Soy Sauce, 600ml Spicy Red Chilli Sauce, 300ml Green Chilli Sauce, 200ml Tomato Ketchup (essential to balance the heat with mild sweetness), 50ml White Vinegar.",
      "The Thickener: 100g Cornstarch dissolved in 150ml cold water (Cornstarch slurry).",
      "Taste Enhancers: 4 tbsp Sugar, 2 tbsp Black Pepper powder, 2 tbsp MSG (Ajinomoto), and Salt to taste.",
      "Bulk Gravy Preparation Steps:",
      "In a large stainless steel stockpot, combine the water/stock, all sauces, vinegar, sugar, pepper, MSG, and salt. Bring it to a rolling boil over a medium burner.",
      "Give the cornstarch slurry a quick stir and pour it slowly into the boiling pot while whisking continuously.",
      "Simmer for 3 minutes until the gravy turns glossy, deep crimson-brown, and thick enough to coat the back of a spoon.",
      "Cool and Store: Let it cool completely, then store it in a plastic container in your refrigerator line. This is your master concentrate."
    ],
    "ingredients": [],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "When an order for Chilli Prawn prints, your line cook executes these two stations simultaneously in under 3 minutes flat:",
        "timerSeconds": 10
      },
      {
        "title": "Station 1: The Prawn Flash-Fry",
        "duration": "2 Mins",
        "detail": "Take your dry, cleaned small prawns (80g for Regular / 170g for Full). Toss them in a light, dry coat of 70% Cornstarch and 30% Maida with a splash of egg-white and salt. Drop them into your 2.5L fryer calibrated strictly at 180∘C. Fry for exactly 2 minutes until they develop a crisp, golden, translucent shell. Lift and drain.",
        "timerSeconds": 120
      },
      {
        "title": "Station 2: The Wok Smoke",
        "duration": "1 Min",
        "detail": "Fire up your wok burner on maximum heat. Add 1 tbsp oil. Throw in 1 tsp minced garlic, 1 tsp minced ginger, and your diced onion/capsicum squares. Flash-sear on screaming high heat for exactly 20 seconds to get that signature smoky wok-hei char without softening the veggies.",
        "timerSeconds": 60
      },
      {
        "title": "Station 3: The Master Ladle Merge",
        "duration": "30 Secs",
        "detail": "Ladle your cold Master Chilli Gravy Base directly into the smoking wok (80ml for Regular / 150ml for Full) along with a tiny splash of water. Let it bubble and activate for 10 seconds. Toss in your hot, flash-fried crispy prawns. Flip the wok vigorously 4–5 times so the hot gravy glazes the starch shell uniformly. Plate immediately.",
        "timerSeconds": 30
      }
    ],
    "hacks": [
      {
        "title": "The Soggy-Prevention Starch Barrier",
        "text": "Prawns release moisture rapidly after frying. If your batter is pure maida (refined flour), the master gravy will turn it into a soggy, gummy paste within a 15-minute delivery ride. Using a high-cornstarch batter (70%) creates a glassy, crystalline shell that repels liquid absorption, ensuring the prawns stay perfectly crispy even when swimming in hot gravy."
      },
      {
        "title": "The Wok-Hei Emulsification Trick",
        "text": "When the cold master gravy hits the scorching hot wok, the starches cook instantly. If the gravy looks too thick or clumped, keep a squeeze bottle of plain water next to the burner. A 2-second squirt of water into the sides of the wok will instantly create a smooth, velvety, high-gloss restaurant glaze."
      },
      {
        "title": "The Portion Scoop Hack",
        "text": "To prevent line cooks from over-pouring your expensive sauce during a rush, do not let them use random spoons. Buy labeled commercial portion ladles (2 oz / 60ml and 4 oz / 120ml size). One clear rule for the kitchen staff: 1.5 scoops for a Regular portion, 2.5 scoops for a Full portion. This stops sauce wastage and locks in your margins."
      }
    ],
    "storageAndWaste": "Because this master gravy is boiled and stabilized with cornstarch and vinegars, it has an incredibly stable shelf-life compared to raw prep.\n\n1. Master Gravy Bulk Storage\n\nThe cooked Master Chilli Gravy base can be stored in an airtight plastic container at 2∘C to 4∘C for up to 5 days without any degradation in flavor or binding power.\n\nNever dip a wet or dirty ladle into the main master container. Always pour out your estimated nightly requirement into a smaller line-chiller squeeze bottle or container at the start of the evening shift.\n\n2. Handling Raw Prawn Stock\n\nKeep your raw, cleaned prawns stored un-salted on a bed of crushed ice in your chiller. Never pre-batter prawns hours in advance. If left in wet batter, the seafood proteins break down, the prawns turn mushy, and they will lose all their natural sweet snap when hitting the deep fryer oil.\n\n3. Upcycling Unsold Cooked Chilli Prawns (Zero-Waste Strategy)\n\nIf a Chilli Prawn order gets canceled or left over at closing time, do not throw it away.\n\nThe Chinese Rice/Noodle Combo Hack: The next morning, chop the leftover cooked chilli prawns and their glazed veggies into tiny bits. Toss this entire smoky sauce-and-seafood mixture directly into a high-heat wok along with boiled rice or noodles and a handful of spring onions. The caramelized chilli gravy acts as the perfect seasoning base, creating an incredible, premium \"Smoky Szechuan Prawn Fried Rice\" that you can sell as a high-margin lunch box combo.\n\nNow that your Master Chilli Gravy is built and ready in the cooler, which item on your menu are we mapping into this line system next? We can seamlessly adapt this exact sequence for Chilli Chicken, Chilli Paneer, or Chilli Mushroom to match your price points."
  },
  {
    "id": 105,
    "name": "Chilli Chicken",
    "prices": [
      "₹99",
      "₹179"
    ],
    "categoryId": "chinese",
    "categoryName": "Indo-Chinese",
    "colorAccent": "#dc2626",
    "quickMix": "Integrating Chilli Chicken at dual price tiers of ₹99 (Regular) and ₹179 (Full) into your new master-gravy system is whe...",
    "description": "Integrating Chilli Chicken at dual price tiers of ₹99 (Regular) and ₹179 (Full) into your new master-gravy system is where you will see the highest operational return on investment. Chilli Chicken is the highest-volume non-veg starter on any Indo-Chinese menu; by running it through your pre-made Master Chilli Gravy, your ticket times will drop to under 3 minutes flat.\n\nTo maintain your food cost below 32% at these competitive price points, you must source boneless chicken breast trimmings or skinless breast pieces cut into clean, uniform 1.5 cm cubes. Small, uniform cubes are mandatory—they flash-fry quickly in your 2.5L electric deep fryer without drying out, ensuring the meat stays incredibly juicy while the master gravy coats the crisp outer jacket.",
    "portionControl": "",
    "costBreakdown": [
      "Regular Portion (₹99): 80g net raw chicken meat + 80ml Master Gravy (≈ 7–8 juicy pieces).",
      "Full Portion (₹179): 160g net raw chicken meat + 150ml Master Gravy (≈ 15–16 juicy pieces).",
      "Component Cost (Per Plate)\tRegular Portion (Retail: ₹99)\tFull Portion (Retail: ₹179)",
      "Boneless Chicken Cubes\t80g = ₹17.60\t160g = ₹35.20",
      "The Chicken Crunch Batter\tCornstarch, Maida, Egg-white\t₹1.50",
      "Master Chilli Gravy Base\tHouse sauce ladle allocation\t₹5.50",
      "Fresh Toss Veggies\t40g Diced Onion & Capsicum squares\t₹2.00",
      "Commercial Frying Oil\tRice Bran / Palm (Absorption loss)\t₹3.00",
      "Packaging & Containers\tLeak-proof microwave box\t₹3.50",
      "Direct Power & Overhead\tFryer + Wok burner overhead\t₹2.00",
      "TOTAL PRODUCTION COST\t₹35.10\t₹67.20",
      "FOOD COST PERCENTAGE\t35.4%\t37.5%",
      "GROSS PROFIT MARGIN\t64.6% (₹63.90 Profit)\t62.5% (₹111.80 Profit)"
    ],
    "ingredients": [],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "With your Master Chilli Gravy Concentrate already prepared and waiting in the line cooler, your line cook can execute an order for Chilli Chicken in under 3 minutes flat:",
        "timerSeconds": 10
      },
      {
        "title": "Station 1: The Chicken Flash-Fry",
        "duration": "2 Mins",
        "detail": "Take your pre-marinated 1.5 cm boneless chicken cubes (80g for Regular / 160g for Full). Toss them in a wet coating of 70% Cornstarch and 30% Maida with a splash of egg-white and salt. Drop them individually into your 2.5L deep fryer set strictly at 180∘C. Fry for exactly 2.5 minutes until the batter sets into a crisp, pale-golden shell. Lift and drain.",
        "timerSeconds": 120
      },
      {
        "title": "Station 2: The Veggie Sear",
        "duration": "1 Min",
        "detail": "Fire up your wok burner on maximum heat. Add 1 tbsp oil. Toss in 1 tsp minced garlic, 1 tsp minced ginger, 1 slit green chilli, and your diced onion/capsicum squares. Flash-sear on high heat for exactly 20 seconds to develop a smoky wok aroma while keeping the veggies perfectly vibrant and crunchy.",
        "timerSeconds": 60
      },
      {
        "title": "Station 3: The Master Ladle Merge",
        "duration": "30 Secs",
        "detail": "Ladle your cold Master Chilli Gravy Base directly into the smoking wok (80ml for Regular / 150ml for Full) along with a small splash of water or kitchen stock. Let it bubble and activate for 10 seconds. Toss in your hot, deep-fried crispy chicken pieces. Flip the wok vigorously 4–5 times to emulsify the glaze uniformly over the chicken. Plate immediately.",
        "timerSeconds": 30
      }
    ],
    "hacks": [
      {
        "title": "The Velvet Marination Secret",
        "text": "Because chicken breast can dry out under high fryer heat, implement a \"Velveting\" stage during afternoon prep. Marinate the raw chicken cubes with a splash of vinegar or curd, ginger-garlic paste, a dash of soy sauce, and salt for at least 20 minutes before adding the starch flours. The acid locks the cellular moisture inside the chicken, ensuring every chunk stays milky-soft on the inside."
      },
      {
        "title": "The 2.5L Oil Thermal Trap",
        "text": "Chicken breast pieces are cold when pulled from the line fridge. If your cook dumps a \"Full Portion\" (160g of chicken) into the 2.5L fryer all at once, the oil temperature will drop instantly, making the coating soggy and greasy. Enforce a strict rule: always drop the pieces individually and split a Full Portion into two rapid, back-to-back basket fries."
      },
      {
        "title": "Ladle Management Discipline",
        "text": "Keep your exact portion control ladles next to the master gravy container. One ladle scoop for Regular, two scoops for Full. This completely prevents your kitchen staff from over-pouring your high-value sauce under rush hour stress, protecting your calculated 63%+ profit margin."
      }
    ],
    "storageAndWaste": "Because your master gravy is fully boiled, stable, and stored separately from the fresh proteins and vegetables, raw ingredient wastage drops close to zero.\n\n1. Raw Mince & Cube Storage\n\nNever mix raw chicken cubes with the wet frying batter or fresh onions hours in advance. The chicken will purge its internal juices into the flours, making the coating slide off during deep-frying. Store your dry, spiced chicken cubes in an airtight container in your chiller at 1∘C to 3∘C for up to 48 hours. Coat them in the wet starch slurry only when an order ticket buzzes.\n\n2. Handling Cooked Overstock (Zero-Waste Upcycling)\n\nIf a Chilli Chicken order is canceled or left unsold at closing time, do not discard it. Store it cold overnight and upcycle it into your next day's high-margin lunch crowd items:\n\nChilli Chicken Fried Rice / Chow Mein Combo: The next morning, chop the cold cooked chilli chicken chunks and their glazed veggies into fine dice. Toss this entire smoky, sauce-heavy mixture directly into a high-heat wok along with boiled rice or noodles, fresh cabbage shreads, and spring onions. The caramelized master chilli gravy behaves as the perfect seasoning engine, creating a spectacular \"Smoky Chilli Chicken Fried Rice Combo\" that you can sell as a premium lunch box item with 100% salvaged profit.\n\nNow that your Chilli Prawn and Chilli Chicken lines are perfectly standardized using the Master Gravy, would you like me to map out Chilli Paneer or Chilli Mushroom at your target price points next?"
  },
  {
    "id": 106,
    "name": "Chilli Mushroom",
    "prices": [
      "₹89",
      "₹159"
    ],
    "categoryId": "chinese",
    "categoryName": "Indo-Chinese",
    "colorAccent": "#0c831f",
    "quickMix": "Integrating Chilli Mushroom at dual price tiers of ₹89 (Regular) and ₹159 (Full) into your single master-gravy system is...",
    "description": "Integrating Chilli Mushroom at dual price tiers of ₹89 (Regular) and ₹159 (Full) into your single master-gravy system is a highly lucrative move. Mushrooms provide an incredibly meaty, juicy texture that vegetarian customers crave, while boasting a low raw material wholesale cost that pads your bottom line.\n\nThe primary operational challenge when running mushrooms through a hot line wok is their 90% water content. If your line cooks do not seal them properly in the deep fryer, the mushrooms will bleed water into your Master Chilli Gravy, breaking the emulsion and turning your premium glossy glaze into a thin, watery soup.\n\nBy applying a high-starch flash-fry technique in your 2.5L electric deep fryer, you can lock that moisture inside a glass-like shell before tossing it into the gravy line.",
    "portionControl": "",
    "costBreakdown": [
      "Regular Portion (₹89): 90g net mushrooms + 80ml Master Gravy (≈ 8–10 juicy pieces).",
      "Full Portion (₹159): 200g net mushrooms + 150ml Master Gravy (≈ 18–20 juicy pieces — includes 20g bonus weight to trigger the higher ticket upsell).",
      "Component Cost (Per Plate)\tRegular Portion (Retail: ₹89)\tFull Portion (Retail: ₹159)",
      "Fresh Cleaned Button Mushrooms\t90g = ₹11.25\t200g = ₹25.00",
      "The Moisture-Lock Crunch Batter\tCornstarch, Maida, Baking Powder\t₹1.50",
      "Master Chilli Gravy Base\tThick house sauce ladle allocation\t₹5.50",
      "Fresh Toss Veggies\t40g Diced Onion & Capsicum squares\t₹2.00",
      "Commercial Frying Oil\tRice Bran / Palm (Absorption loss)\t₹3.00",
      "Packaging & Containers\tLeak-proof microwave box\t₹3.50",
      "Direct Power & Overhead\tFryer + Wok burner operation\t₹2.00",
      "TOTAL PRODUCTION COST\t₹28.75\t₹57.00",
      "FOOD COST PERCENTAGE\t32.3%\t35.8%",
      "GROSS PROFIT MARGIN\t67.7% (₹60.25 Profit)\t64.2% (₹102.00 Profit)"
    ],
    "ingredients": [],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "With your Master Chilli Gravy Concentrate already prepared and cooling on the line station, your line cook can execute a fresh order of Chilli Mushroom in under 3 minutes flat:",
        "timerSeconds": 10
      },
      {
        "title": "Station 1: The Moisture-Lock Flash Fry",
        "duration": "2 Mins",
        "detail": "Take your cleaned button mushroom halves (90g for Regular / 200g for Full). Toss them in a thick, ribbon-like batter made of 75% Cornstarch and 25% Maida with a pinch of baking powder and salt. Drop them individually into your 2.5L fryer set strictly at 180∘C. Fry for exactly 2 minutes until a hard, translucent, crispy shell forms. Lift and drain immediately.",
        "timerSeconds": 120
      },
      {
        "title": "Station 2: The Veggie Sear",
        "duration": "1 Min",
        "detail": "Fire up your wok burner on maximum heat. Add 1 tbsp oil. Throw in 1 tsp minced garlic, 1 tsp minced ginger, 1 slit green chilli, and your diced onion/capsicum squares. Flash-sear on high heat for exactly 20 seconds to get that signature smoky wok aroma while keeping the vegetables bright, vibrant, and crunchy.",
        "timerSeconds": 60
      },
      {
        "title": "Station 3: The Master Ladle Merge",
        "duration": "30 Secs",
        "detail": "Ladle your cold Master Chilli Gravy Base directly into the smoking wok (80ml for Regular / 150ml for Full) along with a tiny splash of water to loosen the starches. Let it bubble and caramelize for 10 seconds. Toss in your hot, deep-fried crispy mushrooms. Flip the wok aggressively 4–5 times to coat the pieces uniformly, and plate.",
        "timerSeconds": 30
      }
    ],
    "hacks": [
      {
        "title": "The Glassy Cornstarch Shield",
        "text": "Never use a flour batter dominant in Maida (refined flour) for mushrooms. Maida absorbs moisture like a sponge; the moment the hot mushroom bleeds its interior juices, a maida shell turns soggy and falls off. A high-cornstarch (75%) batter forms a tight, glass-like crystalline armor that traps steam inside the mushroom while repelling liquid from the gravy outside."
      },
      {
        "title": "The No-Stand Rule (Zero Soup Risk)",
        "text": "Once mushroom pakodas are fried, they must hit the master gravy wok immediately. If your cook leaves fried mushrooms sitting in a storage bowl for more than 3 minutes before tossing, the internal steam will condense, destroying the crispy crust from the inside out. Fry on order, drop straight into the boiling gravy."
      },
      {
        "title": "The 2.5L Oil Flash Temperature Check",
        "text": "Mushrooms are cold and water-dense. If your cook dumps a \"Full Portion\" (200g) into the 2.5L deep fryer basket in one single movement, the oil temperature will collapse. This causes the batter to melt into the oil instead of setting. Enforce a strict kitchen rule: split a Full Portion of mushrooms into two rapid, back-to-back basket drops."
      }
    ],
    "storageAndWaste": "Because mushrooms degrade rapidly once exposed to salt and moisture, separate storage of line items is critical to keeping your wastage at zero.\n\n1. Raw Mushroom Line Protocol\n\nNever mix raw mushroom pieces with salt, fresh onions, or your wet batter hours in advance. Within 30 minutes, the salt will bleed the mushrooms dry, thinning your batter into an unusable, watery soup.\n\nThe Station Setup: Keep your washed, completely dried, and cut raw mushroom halves stored in an airtight container lined with dry paper towels in your chiller at 2∘C to 4∘C (holds perfectly for 24 to 36 hours). Only toss a portion of mushrooms into your wet starch slurry the moment the kitchen buzzer sounds.\n\n2. Upcycling Unsold Cooked Chilli Mushrooms (Zero-Waste Strategy)\n\nIf a Chilli Mushroom order gets canceled or left over at closing time, do not discard it. Store it cold overnight and upcycle it into your next day's lunch thali menu:\n\nSmoky Mushroom Veg Noodles / Fried Rice: The next morning, chop the cold cooked chilli mushrooms and their glazed vegetables into a rough dice. Toss this entire sauce-heavy, highly flavorful mix directly into a screaming hot wok along with boiled noodles or rice, shredded cabbage, and spring onions. The caramelized master chilli gravy acts as your primary seasoning engine, transforming dead inventory into a premium \"Smoky Mushroom Szechuan Rice Combo\" that yields 100% pure profit.\n\nNow that your Chilli Prawn, Chilli Chicken, and Chilli Mushroom lines are fully standardized using your single Master Gravy base, would you like me to map out Chilli Paneer at your target price points next to complete your Indo-Chinese menu manual?"
  },
  {
    "id": 107,
    "name": "Chilli Paneer",
    "prices": [
      "₹89",
      "₹159"
    ],
    "categoryId": "chinese",
    "categoryName": "Indo-Chinese",
    "colorAccent": "#0c831f",
    "quickMix": "Integrating Chilli Paneer at dual price tiers of ₹89 (Regular) and ₹159 (Full) into your single master-gravy system comp...",
    "description": "Integrating Chilli Paneer at dual price tiers of ₹89 (Regular) and ₹159 (Full) into your single master-gravy system completes your high-efficiency Indo-Chinese kitchen manual. Paneer is the most popular premium vegetarian starter on the market, and offering a sub-₹90 entry price point will make it a massive volume driver for your evening crowds.\n\nBecause dairy carries a high raw material cost, tight portion control is your only defense for maintaining healthy margins. You must cut your paneer into uniform, 1.5 cm cubes. This size ensures that when the pieces hit your 2.5L electric deep fryer, they flash-fry to a crisp finish in under 2 minutes without drying out or turning rubbery, keeping the core soft and milky.",
    "portionControl": "",
    "costBreakdown": [
      "Regular Portion (₹89): 80g net raw paneer + 80ml Master Gravy (≈ 6–7 chunky cubes).",
      "Full Portion (₹159): 170g net raw paneer + 150ml Master Gravy (≈ 14–15 chunky cubes — includes 10g bonus dairy to trigger the higher ticket upsell).",
      "Component Cost (Per Plate)\tRegular Portion (Retail: ₹89)\tFull Portion (Retail: ₹159)",
      "Fresh Dairy Paneer Cubes\t80g = ₹18.50\t170g = ₹39.30",
      "Fresh Toss Veggies\t40g Diced Onion & Capsicum squares\t₹2.00",
      "The Crunch Batter Jacket\tCornstarch, Maida, White Pepper\t₹1.50",
      "Master Chilli Gravy Base\tThick house sauce ladle allocation\t₹5.50",
      "Commercial Frying Oil\tRice Bran / Palm (Absorption loss)\t₹2.50",
      "Packaging & Containers\tLeak-proof microwave box\t₹3.50",
      "Direct Power & Overhead\tFryer + Wok burner operation\t₹2.00",
      "TOTAL PRODUCTION COST\t₹35.50\t₹70.80",
      "FOOD COST PERCENTAGE\t39.8%\t44.5%",
      "GROSS PROFIT MARGIN\t60.2% (₹53.50 Profit)\t55.5% (₹88.20 Profit)",
      "Financial Matrix: Because paneer has a premium baseline cost, its food cost percentage runs higher than mushrooms or chicken. However, because it runs through your pre-made Master Chilli Gravy, the lightning-fast 3-minute prep time reduces labor overhead, and high volume comfortably offsets the tighter margin."
    ],
    "ingredients": [],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "With your Master Chilli Gravy Concentrate prepped and ready on the line, your line cook can plate a fresh order of Chilli Paneer in under 3 minutes flat:",
        "timerSeconds": 10
      },
      {
        "title": "Station 1: The Crisp-Jacket Flash Fry",
        "duration": "2 Mins",
        "detail": "Take your dry 1.5 cm paneer cubes (80g for Regular / 170g for Full). Toss them in a wet coating batter made of 70% Cornstarch and 30% Maida with a pinch of white pepper and salt. Drop them individually into your 2.5L fryer set strictly at 180∘C. Fry for exactly 90 to 120 seconds until a light, pale-golden crisp shell forms. Lift and drain immediately.",
        "timerSeconds": 120
      },
      {
        "title": "Station 2: The Veggie Sear",
        "duration": "1 Min",
        "detail": "Fire up your wok burner on maximum heat. Add 1 tbsp oil. Throw in 1 tsp minced garlic, 1 tsp minced ginger, 1 slit green chilli, and your diced onion/capsicum squares. Flash-sear on high heat for exactly 20 seconds to develop a smoky wok-hei aroma while keeping the vegetables bright, vibrant, and crunchy.",
        "timerSeconds": 60
      },
      {
        "title": "Station 3: The Master Ladle Merge",
        "duration": "30 Secs",
        "detail": "Ladle your cold Master Chilli Gravy Base directly into the smoking wok (80ml for Regular / 150ml for Full) along with a tiny splash of water. Let it bubble and caramelize for 10 seconds. Toss in your hot, deep-fried crispy paneer cubes. Flip the wok aggressively 4–5 times so the hot gravy glazes the starch shell uniformly, and plate.",
        "timerSeconds": 30
      }
    ],
    "hacks": [
      {
        "title": "The Warm Saline Soak (The Soft Core Secret)",
        "text": "Refrigerated or commercial block paneer can easily dry out and turn rubbery under intense deep-fryer heat. Instruct your prep team to soak the pre-cut 1.5 cm cubes in warm, lightly salted water for 10 minutes, then drain and pat completely dry before the evening shift. This step ensures the paneer core stays milky-soft and well-seasoned, even after being coated and fried."
      },
      {
        "title": "The Non-Stick Cornstarch Dust",
        "text": "Paneer cubes coated in wet batter love to stick together inside a compact 2.5L fryer basket, forming a large lump that tears open when separated. The Pro Fix: Dust your raw, dry paneer cubes with a thin layer of dry cornstarch first, then drop them into your wet coating batter slurry. This creates a double-locking layer that keeps the cubes completely independent and free-floating in the oil."
      },
      {
        "title": "Strict Time Control",
        "text": "Never let paneer sit in the fryer for more than 2 minutes. Excess frying time forces the dairy proteins to shrink and squeeze out moisture, turning a premium appetizer into tough, chewy cubes. Fry on order, pull the basket the second the coat turns crisp."
      }
    ],
    "storageAndWaste": "Dairy absorbs ambient refrigerator odors instantly and spoils rapidly if exposed to moisture fluctuations. Manage your line station with these rules:\n\n1. The Line Station Setup (The Order-by-Order Dip)\n\nNever leave paneer cubes sitting inside a container of wet frying batter for hours. The paneer will slowly weep its dairy moisture into the mix, thinning out your batter and causing the coating to slip off completely during frying.\n\nThe Pro Setup: Keep your pre-cut, dry paneer cubes stored in a tightly sealed stainless steel container lined with butter paper inside your chiller at 2∘C to 4∘C (holds perfectly for 48 hours). Keep your wet batter slurry separate. Dip the required number of pieces into the batter only when the kitchen buzzer sounds. This keeps your station neat and raw wastage at absolute zero.\n\n2. Upcycling Unsold Cooked Chilli Paneer (Zero-Waste Strategy)\n\nIf a Chilli Paneer order gets canceled or left over at closing time, do not discard it. Store it cold overnight and upcycle it into your next day's high-margin lunch thali crowd menu:\n\nChilli Paneer Fried Rice / Fried Bao Fillers: The next morning, scrape the cold cooked chilli paneer cubes out and chop them into a fine dice along with their glazed onions and capsicums. Toss this entire sauce-heavy, deeply savory mix into a hot wok with boiled rice, shredded cabbage, and spring onions to sell as a premium \"Smoky Szechuan Paneer Rice Combo.\" Alternatively, use the diced chilli paneer mix as a highly profitable stuffing for evening \"Veg Chinese Sliders / Baos.\" This transforms dead dairy inventory into 100% pure profit."
  },
  {
    "id": 108,
    "name": "Egg Chilli",
    "prices": [
      "₹59",
      "₹99"
    ],
    "categoryId": "chinese",
    "categoryName": "Indo-Chinese",
    "colorAccent": "#dc2626",
    "quickMix": "Integrating Egg Chilli at dual price tiers of ₹59 (Regular) and ₹99 (Full) into your single master-gravy system is the u...",
    "description": "Integrating Egg Chilli at dual price tiers of ₹59 (Regular) and ₹99 (Full) into your single master-gravy system is the ultimate budget non-veg revenue driver. In the evening fast-food market, an entry-level non-veg option under ₹60 acts as a massive customer magnet. Because eggs have an incredibly low wholesale cost, this item will easily pull in high volumes while protecting your profit margins.",
    "portionControl": "To hit these aggressive price points with solid food cost percentages, your portion sizes must be strictly mapped by egg count:\n\nRegular Portion (₹59): 1.5 Hard-Boiled Eggs. Sliced into 6 uniform quarters total, battered, flash-fried, and tossed in 60ml of Master Gravy.\n\nFull Portion (₹99): 3 Hard-Boiled Eggs. Sliced into 12 uniform quarters total, battered, flash-fried, and tossed in 120ml of Master Gravy.",
    "costBreakdown": [
      "Component Cost (Per Plate)\tRegular Portion (Retail: ₹59)\tFull Portion (Retail: ₹99)",
      "Wholesale Hard-Boiled Eggs\t1.5 Eggs = ₹9.00\t3 Eggs = ₹18.00",
      "The Crunch Batter Jacket\tCornstarch, Maida, Yellow Color\t₹1.50",
      "Fresh Toss Veggies\t30g Diced Onion & Capsicum squares\t₹1.50",
      "Master Chilli Gravy Base\tThick house sauce ladle allocation\t₹4.50",
      "Commercial Frying Oil\tRice Bran / Palm (Absorption loss)\t₹2.50",
      "Packaging & Containers\tLeak-proof microwave box / pouch\t₹2.50",
      "Direct Power & Overhead\tFryer + Wok burner operation\t₹1.50",
      "TOTAL PRODUCTION COST\t₹23.00\t₹43.50",
      "FOOD COST PERCENTAGE\t38.9%\t43.9%",
      "GROSS PROFIT MARGIN\t61.1% (₹36.00 Profit)\t56.1% (₹55.50 Profit)",
      "Financial Matrix: While the food cost percentage hovers around 39%-44% due to the aggressive entry-level pricing, the absolute cash turnover is incredibly fast. Because eggs are pre-boiled, this item takes under 2 minutes on the live line, making it a high-speed, high-volume winner."
    ],
    "ingredients": [],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "With your Master Chilli Gravy Concentrate cooling on the line station, your line cook can plate a fresh order of Egg Chilli in under 120 seconds flat:",
        "timerSeconds": 10
      },
      {
        "title": "Station 1: The Anti-Burst Flash Fry",
        "duration": "1 Min",
        "detail": "Take your pre-boiled, quartered egg pieces (6 quarters for Regular / 12 quarters for Full). Dip them into a thick, smooth batter made of 70% Cornstarch and 30% Maida with a pinch of salt. Drop them individually into your 2.5L fryer set strictly at 180∘C. Fry for exactly 60 to 90 seconds until a hard, golden-crisp shell forms around the egg white and yolk. Lift and drain.",
        "timerSeconds": 60
      },
      {
        "title": "Station 2: The Veggie Sear",
        "duration": "30 Secs",
        "detail": "Fire up your wok burner on maximum heat. Add 1 tbsp oil. Throw in 1 tsp minced garlic, 1 tsp minced ginger, 1 slit green chilli, and your diced onion/capsicum squares. Flash-sear on high heat for exactly 15–20 seconds to get that smoky wok aroma while keeping the vegetables perfectly vibrant and crunchy.",
        "timerSeconds": 30
      },
      {
        "title": "Station 3: The Master Ladle Merge",
        "duration": "30 Secs",
        "detail": "Ladle your cold Master Chilli Gravy Base directly into the smoking wok (60ml for Regular / 120ml for Full) along with a tiny splash of water. Let it bubble and caramelize for 5 seconds. Toss in your hot, deep-fried crispy egg quarters. Flip the wok gently 3–4 times so the gravy glazes the starch shell without breaking the eggs, and plate immediately.",
        "timerSeconds": 30
      }
    ],
    "hacks": [
      {
        "title": "The Yolk-Explosion Protection Lock",
        "text": "Hard-boiled egg yolks contain trapped moisture. If raw yolk hits 180∘C oil directly, it will vaporize instantly and violently explode, splattering hot oil all over your kitchen and emptying the egg shell. The Pro Fix: Ensure your coating batter is thick like pancake batter. When dipping the egg quarters, ensure the batter forms a complete, seamless jacket over the exposed yolk surface to seal it completely before it drops into the oil."
      },
      {
        "title": "Gentle Wok Handling",
        "text": "Boiled eggs are delicate. If your line cook uses a heavy metal spatula to aggressively stir the egg chilli in the wok, the yolk will separate from the white, clouding your beautiful, glossy master gravy. Enforce the flip method: cooks should rely entirely on tossing and flipping the wok itself to coat the pieces, keeping the spatula use to an absolute minimum."
      },
      {
        "title": "The Single-Layer Fry",
        "text": "Because egg pieces are light and sticky, dropping them all at once into a 2.5L fryer basket will cause them to clump into a single massive ball. Instruct your cooks to drop the pieces individually, face-down into the oil."
      }
    ],
    "storageAndWaste": "Boiled eggs are incredibly stable, allowing you to manage your line station with virtually zero raw inventory waste.\n\n1. The Pre-Boil Bulk Protocol\n\nNever peel boiled eggs too far in advance. Exposed egg white dries out, turns rubbery, and smells unpleasant in a refrigerator line.\n\nThe Pro Setup: Hard-boil 50 to 100 eggs during your afternoon prep shift. Leave them completely in their shells and store them in a plastic crate in your chiller at 2∘C to 4∘C (holds perfectly fresh for up to 72 hours). At the start of the evening shift, peel and slice only 15–20 eggs into quarter trays for immediate line assembly. Peel more only as the order machine prints.\n\n2. Upcycling Unsold Cooked Egg Chilli (Zero-Waste Strategy)\n\nIf an Egg Chilli order gets canceled or left over at closing time, do not discard it. Store it cold overnight and upcycle it into your next day's high-margin lunch thali crowd menu:\n\nEgg Chilli Fried Rice / Egg Masala Gravy Extender: The next morning, remove the egg quarters from the leaves/containers. Coarsely chop the egg whites and fried batter jackets. Toss this highly seasoned, savory, and smoky mix directly into a hot wok with boiled rice, shredded cabbage, and spring onions to sell as a premium \"Smoky Chinese Egg Fried Rice.\" Alternatively, mash the leftover egg chilli chunks directly into a rich, North-Indian style onion gravy to create a thick, deeply aromatic \"Egg Keema Curry\" side item for your afternoon lunch thalis. This transforms dead inventory into 100% pure profit."
  },
  {
    "id": 109,
    "name": "Vibrant Colour Dumplings",
    "prices": [
      "6 Pieces: ₹99",
      "10 Pieces: ₹149",
      "Gravy Add-on: +₹39"
    ],
    "categoryId": "chinese",
    "categoryName": "Indo-Chinese",
    "colorAccent": "#0c831f",
    "quickMix": "Handcrafted momos with natural colored wrappers, optimized for commercial steamer execution and high-margin gravy upsells.",
    "description": "(Handcrafted momos with natural colored wrappers)\n\nItemWrapper ColorCheese Chicken Dumplings🟢 GreenCheese Corn Dumplings🔴 RedPaneer Dumplings🟠 OrangeChicken Dumplings🟡 Yellow\n\nDumpling Combo Pricing:\n\n6 Pieces: ₹99\n\n10 Pieces: ₹149\n\nChef's Special Add-on: Tossed in Chilli Gravy Masala or Garlic Gravy Masala for ₹39 extra\n\nwe will buy freozen so tell me the after thing in momo steamer\n\nShifting to a pre-bought frozen model for these Vibrant Colour Dumplings is an excellent operational move. It completely eliminates the massive labor, consistency issues, and vegetable-waste headaches that come with blending natural colors (like spinach, beetroot, and carrot juices) into handmade wrappers in-house.\n\nBecause you are buying them frozen, your entire business model now rests on flawless steamer execution, temperature control, and high-margin flavor upselling.\n\nHere is the commercial operational blueprint for managing your frozen vibrant dumpling line from the moment they leave the freezer to the hot plate.",
    "portionControl": "",
    "costBreakdown": [
      "To maintain a highly profitable 30-35% Food Cost Percentage at your retail prices, your target wholesale landing cost for the frozen premium colored dumplings should hover between ₹4.50 to ₹5.50 per piece.",
      "1. Base Combo Profit Margins",
      "Menu Tier\tTotal Pieces\tEst. Wholesale Cost (Protein/Veg Blend)\tOverhead & Gas Cost\tTotal Plate Production Cost\tRetail Price\tPure Profit Margin",
      "6-Piece Combo\t6 Pcs\t₹30.00\t₹3.50\t₹33.50\t₹99\t66.1% (₹65.50)",
      "10-Piece Combo\t10 Pcs\t₹50.00\t₹5.00\t₹55.00\t₹149\t63.1% (₹94.00)",
      "2. The Add-on Goldmine: Chef’s Special Gravy (₹39 Extra)",
      "When a customer pays ₹39 extra to have their dumplings tossed in gravy, your profit sky-rockets. You are already using your pre-made Master Chilli Gravy or a garlic variant, which costs pennies to dispense.",
      "Gravy allocation cost (80ml ladle + wok fuel): ₹6.50",
      "Retail Price: ₹39.00",
      "Gross Margin on the Add-on: 83.3% (₹32.50 pure profit per upgrade)"
    ],
    "ingredients": [],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "The absolute biggest risk with frozen colored dumplings is over-steaming. If they sit in the steam for too long, the wrappers will absorb excess water, turning gummy and fragile. The vibrant natural colors (Green, Red, Orange, Yellow) will also bleed into each other, leaving you with a dull, muddy-looking plate.",
        "timerSeconds": 10
      },
      {
        "title": "Station 1: The Strict Zero-Thaw Rule",
        "duration": "Continuous",
        "detail": "Keep the frozen dumplings strictly inside your deep freezer at −18∘C right up until the order ticket prints. Never thaw frozen momos on the counter. Thawing turns the outer skin sticky and wet; when placed in the steamer, they will tear open instantly and dump their fillings.",
        "timerSeconds": 60
      },
      {
        "title": "Station 2: Pre-Heating & Tray Oil Shielding",
        "duration": "2 Mins",
        "detail": "Ensure the water in the bottom tier of your commercial momo steamer is at a rolling, violent boil before adding any food. Brush the perforated aluminum or stainless steel steamer tiers generously with refined vegetable oil (do not use mustard oil here, as it will stain the yellow and green wrappers).",
        "timerSeconds": 120
      },
      {
        "title": "Station 3: The Frozen Steam Burst",
        "duration": "8-10 Mins",
        "detail": "Arrange the rock-hard frozen dumplings on the oiled tray, leaving a 1-inch gap between each piece (if they touch, the skins will fuse together and rip when plated). Cover with the heavy lid. Steam strictly for 8 to 10 minutes. Because they are frozen, the first 3 minutes simply bring the core to temperature; the final 5 minutes flash-cook the wrappers.",
        "timerSeconds": 600
      },
      {
        "title": "Station 4: The Core Temperature Check",
        "duration": "1 Min",
        "detail": "At the 8-minute mark, press a dumpling gently with a gloved finger. The wrapper should feel taut, springy, and completely non-sticky, and the vibrant color should look glossy. Internal filling temperature must read at least 75∘C on a probe thermometer to ensure the frozen chicken or paneer core is piping hot. 🌶️ Executing the ₹39 Chef's Special Add-on (Wok Line) If the customer orders the dumplings \"Tossed in Chilli Gravy Masala or Garlic Gravy Masala,\" your line cook pulls the dumplings from the steamer 1 minute early (at the 7-minute mark) so they don't break in the wok, and drops them straight into the sauce line: 1. Tossed in Chilli Gravy Masala Heat a wok on high flame, add 1 tsp oil, and flash-fry a few diced onions and green capsicum squares for 15 seconds. Ladle in 70ml of your pre-made Master Chilli Gravy Base along with a tiny splash of water to loosen it up. Let it bubble and activate. Drop the hot, steamed colored dumplings straight from the steamer into the bubbling wok. The No-Spatula Flip: Do not stir with a metal spoon, or you will puncture the delicate wrappers. Flip and toss the wok gently 3–4 times until the glossy, red chilli glaze coats the colorful dumplings completely. Plate immediately. 2. Tossed in Garlic Gravy Masala Heat a wok, add 1 tbsp oil, and throw in 1.5 tablespoons of extremely finely minced fresh garlic. Flash-fry on medium-high heat until the garlic turns aromatic and pale golden (do not burn it, or it turns bitter). Add a splash of clear chicken/veg stock, 21​ tsp dark soy sauce, 21​ tsp vinegar, a pinch of white pepper, sugar, and MSG. Thicken instantly with a 1-tsp splash of cornstarch slurry to create a clear, high-gloss garlic glaze. Drop in the steamed dumplings, toss gently for 10 seconds to envelope them in the garlicky glaze, and garnish with fresh spring onion greens.",
        "timerSeconds": 60
      }
    ],
    "hacks": [
      {
        "title": "The Cabbage Leaf Shield",
        "text": "Instead of constantly brushing oil onto your metal steamer trays (which can get sticky and baked-on over a long shift), line the steamer trays completely with whole, raw green cabbage leaves. Place your frozen dumplings directly on top of the cabbage bed. The natural moisture in the cabbage prevents the dumpling wrappers from sticking to the metal, adds a clean aroma, and keeps your steamer cleanup time at zero."
      },
      {
        "title": "Managing the Multi-Color Stack",
        "text": "Never steam your meat dumplings (Cheese Chicken & Chicken) on the same tier as your vegetarian dumplings (Cheese Corn & Paneer). Vegetarian customers will walk away instantly if they see meat juices dripping down from an upper tier. The Rule: Always place Veg tiers (Red & Orange wrapper dumplings) on the top levels, and Meat tiers (Green & Yellow wrapper dumplings) on the lower levels closer to the water."
      },
      {
        "title": "The Over-Steaming Decay",
        "text": "If a batch of dumplings sits in an active steamer for more than 15 minutes because of a slow delivery rider, the wrapper starch will completely break down. The dumplings will turn into a mushy, waterlogged mess, and the vibrant colors will wash out completely. Never load the steamer based on guesswork; steam strictly based on live order tickets."
      }
    ],
    "storageAndWaste": "Because you are dealing with a pre-manufactured, frozen premium product, you have the advantage of holding stock long-term, but only if your cold chain is tightly managed.\n\n1. Freezer Management (The Frost Defense)\n\nThe Air-Tight Seal: When you open a bulk wholesale 1kg or 2kg bag of frozen dumplings to pull out a portion, never throw the bag back into the freezer open or loosely folded. The dry freezer air will cause \"freezer burn,\" drawing the moisture out of the wrappers and turning the edges white and chalky. When steamed, freezer-burned wrappers crack open and leak. Always seal opened bags tightly using a heavy-duty clip or tape.\n\nTemperature Control: Your deep freezer must maintain a constant temperature between −18∘C to −22∘C. If your staff constantly opens and closes the freezer door during rush hours, the temperature will spike, causing the dumplings to surface-thaw slightly and clump into a single solid frozen block. Store your nightly portion estimates in a smaller, dedicated line-freezer chest to protect your main bulk backup stock.\n\n2. Handling Steamed Leftovers (Zero-Waste Upcycling)\n\nIf you have steamed dumplings left over in your trays at closing time, they cannot be re-steamed the next day (they will turn into mush). Do not discard them; turn them into high-profit evening specials the next afternoon:\n\nThe Deep-Fried Crunchy Premium Momo: Take the cold, leftover steamed dumplings from the night before. Dip them in a very thin cornstarch slurry and roll them in local breadcrumbs or cornflake crumbs. Deep-fry them in your 2.5L fryer at 180∘C for 2 minutes until ultra-crisp. Sell them as a premium \"Crunchy Fried Vibrant Dumpling\" tier for ₹119. The crunchy breading completely masks the soft, twice-cooked wrapper, turning a potential loss into a premium, high-margin crunch snack.\n\nWould you like me to break down a bulk recipe for the signature fiery Tomato-Sesame Momo Chutney to serve alongside your base combos, or map out another high-yield starter item for your line?"
  },
  {
    "id": 110,
    "name": "Non-Veg Mix Roll",
    "prices": [
      "₹119"
    ],
    "categoryId": "rolls",
    "categoryName": "Premium Rolls",
    "colorAccent": "#dc2626",
    "quickMix": "A Non-Veg Mix Roll (ମିକ୍ସ ନନ୍-ଭେଜ୍ ରୋଲ୍) at a ₹119 retail price point is a dominant street-food item. Rolls are a high-v...",
    "description": "A Non-Veg Mix Roll (ମିକ୍ସ ନନ୍-ଭେଜ୍ ରୋଲ୍) at a ₹119 retail price point is a dominant street-food item. Rolls are a high-volume, quick-service staple. The primary commercial challenge with a \"Mix\" roll is that customers expect a premium medley of multiple proteins—specifically Egg, Chicken, and Prawns—stuffed into a single flaky paratha wrapper.\n\nIf you pack the roll with heavy portions of whole chicken chunks and prawns, your profit margin will collapse. The key to hitting ₹119 while preserving a sub-30% food cost is a master assembly strategy: use a single whole egg as the base binder on the tawa, and fill the core with a highly flavorful, minced mix of chicken trimmings and small prawns extended with crunch-heavy sliced onions.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Jumbo Roll (~250g total weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Maida Paratha Wrapper\t1 Pre-rolled laccha paratha base\t₹3.50",
      "Wholesale Poultry Egg\t1 Whole egg (beaten onto the paratha)\t₹6.00",
      "Chicken Breast Trimmings\t40g (Finely minced/shredded)\t₹8.80",
      "Small Peeled Prawns\t20g (Small 80/100 size, chopped)\t₹5.50",
      "Master Chilli Gravy Glaze\t30ml allocation (The seasoning engine)\t₹2.00",
      "Roll Salad Filler\t40g Finely sliced onions & green chillies\t₹1.50",
      "Frying Fat & Sauces\tRefined oil/vanaspati + Ketchup/Mayo drizzle\t₹4.20",
      "Packaging Wrapper\tButter paper sleeve + rubber band\t₹1.50",
      "Direct Fuel & Overhead\tTawa burner allocation\t₹2.50",
      "TOTAL PRODUCTION COST\t\t₹35.50",
      "Financial Matrix: At a ₹119 retail price, a ₹35.50 raw material cost gives you a 29.8% Food Cost Percentage. This locks in an outstanding 70.2% Gross Margin (₹83.50 pure profit per roll)."
    ],
    "ingredients": [
      "The Wrapper: 1 Maida paratha disc (75g dough ball, rolled out thin with a touch of oil for flakiness).",
      "The Binder: 1 whole egg.",
      "The Mix Filling: 40g raw chicken breast (finely chopped or run through a coarse mincer) and 20g small peeled prawns (cut into halves).",
      "The Flavor Catalyst: 1 portion ladle (30ml) of your pre-made Master Chilli Gravy Base. (Using your existing chilli gravy means the line cook doesn't need to slow down to add soy sauce, chilli sauce, or spices individually).",
      "The Crunch Salad: 1 handful of raw, paper-thin sliced onions, 2 minced green chillies, 41​ tsp chaat masala, and a squeeze of fresh lemon juice.",
      "The Finishing Drizzle: 1 tsp tomato ketchup and 1 tsp commercial eggless mayonnaise."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "To keep up with the evening rush, separate your roll production into two parallel tawa zones: The Filling Zone and The Paratha Zone.",
        "timerSeconds": 10
      },
      {
        "title": "Zone 1: The Non-Veg Mix Toss",
        "duration": "90 Secs",
        "detail": "Heat 1 tsp oil on the high-heat side of your flat tawa. Toss in your minced chicken and chopped small prawns together. Because the pieces are tiny, they will flash-cook completely in 60 seconds. Ladle in 30ml of your Master Chilli Gravy Base. Flip vigorously until the sauce caramelizes and forms a thick, sticky, bone-dry glaze over the meat. Push the filling to the cool side of the tawa.",
        "timerSeconds": 90
      },
      {
        "title": "Zone 2: The Laccha Paratha Sear",
        "duration": "60 Secs",
        "detail": "On the main section of the tawa, slap down your pre-rolled maida paratha with a splash of oil. Fry for 30 seconds per side until pale golden and flaky.",
        "timerSeconds": 60
      },
      {
        "title": "Zone 3: The Egg Fusion",
        "duration": "30 Secs",
        "detail": "Crack 1 egg, beat it quickly with a pinch of salt, and pour it directly onto the center of the tawa. Immediately slap the fried paratha flat on top of the raw egg. Press down with a spatula. The egg will fuse seamlessly to the paratha within 30 seconds. Flip the whole thing over so the egg side faces up.",
        "timerSeconds": 30
      },
      {
        "title": "Zone 4: Stuffed Roll Assembly",
        "duration": "30 Secs",
        "detail": "Transfer the egg-coated paratha to your greaseproof wrapping paper. Lay your hot, chilli-glazed chicken and prawn filling in a neat line right down the center. Top with your seasoned onion-chilli salad. Add a zig-zag drizzle of ketchup and mayonnaise. Roll it tightly into a cigar shape, wrap the lower half in butter paper, and hand it over.",
        "timerSeconds": 30
      }
    ],
    "hacks": [
      {
        "title": "The Master Gravy Integration",
        "text": "Do not waste time shaking individual bottles of vinegar, green chilli sauce, and soy sauce onto the tawa during a busy evening shift. Your pre-made Master Chilli Gravy Base is already perfectly balanced. Ladling a single 30ml shot onto the frying meat handles 100% of the seasoning, cuts your assembly time in half, and guarantees every single roll tastes identical."
      },
      {
        "title": "The Fine-Chop Illusion",
        "text": "Never use big, whole chicken chunks or large prawns in a roll wrapper. Big chunks cause the roll to look bumpy, tear the paratha during wrapping, and make the portion size feel sparse. By coarsely mincing the chicken breast and chopping the small prawns, the meat distributes evenly from the first bite to the last. The customer feels like the roll is completely packed with non-veg goodies."
      },
      {
        "title": "The Sliced Onion Volume Multiplier",
        "text": "Slicing your onions paper-thin and tossing them with a hit of lemon juice and chaat masala right before assembly is critical. The sharp acidity cuts through the heavy grease of the fried paratha, while the raw volume expands the diameter of the roll, making it look like a massive, filling meal for ₹119."
      }
    ],
    "storageAndWaste": "Roll ingredients turn watery and sour rapidly if exposed to improper temperature management on a live street line. Enforce these strict management protocols:\n\n1. Pre-Rolled Dough Prep\n\nDo not roll out your maida paranthas completely fresh on order during rush hour.\n\nThe Pro Move: Semi-cook (Kacha-Pakka) your paratha discs beforehand during afternoon prep. Flash-fry them on a dry tawa for just 15 seconds per side without oil until they hold their shape but remain white. Stack them with sheets of wax paper or clean plastic wraps in between to stop sticking, and store covered in the line fridge. During the evening rush, your cook just grabs a paratha sheet, hits it with oil, and completes the final fry. This keeps your ticket speed under 3 minutes.\n\n2. Upcycling Unsold Cooked Mix Filling (Zero-Waste Strategy)\n\nBecause you are using chopped raw proteins, any meat left over in your line bowls at closing time can be instantly diverted:\n\nThe Mix Non-Veg Fried Rice/Chowmein Hack: If you have pre-chopped raw chicken and prawns left over at the end of the shift, do not let them sit another day. Flash-fry them on the tawa with a splash of oil until cooked, cool them down, and store cold. The next morning, dump this cooked mix protein base directly into your high-heat wok line to create premium, high-margin \"Mix Non-Veg Fried Rice\" or \"Mix Chinese Hakka Noodles\" for the afternoon lunch thali rush. This eliminates meat waste entirely, safeguarding your hard-earned 70% gross profit margins."
  },
  {
    "id": 111,
    "name": "Veg Mix Roll",
    "prices": [
      "₹119"
    ],
    "categoryId": "rolls",
    "categoryName": "Premium Rolls",
    "colorAccent": "#0c831f",
    "quickMix": "An entry-level Veg Mix Roll (ମିକ୍ସ ଭେଜ୍ ରୋଲ୍) at a ₹119 retail price is a high-margin powerhouse if you step away from t...",
    "description": "An entry-level Veg Mix Roll (ମିକ୍ସ ଭେଜ୍ ରୋଲ୍) at a ₹119 retail price is a high-margin powerhouse if you step away from the basic, boring street-style cabbage stuffing. When a customer spends ₹119 on a veg roll, they expect premium textures—specifically a hearty mix of Paneer, sweet corn, crisp capsicum, and golden-fried potatoes wrapped in a flaky, layered paratha.\n\nThe commercial challenge with vegetable rolls is avoiding a soggy filling. Vegetables bleed water when salted on a hot tawa, which can tear your paratha wrapper during assembly.\n\nBy running your vegetable mix through a dry, fast-searing tawa method and glazing it with your pre-made Master Chilli Gravy, you keep the crunch intact, hit a sub-25% food cost, and pump out rolls in under 2 minutes flat.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Jumbo Roll (~260g total weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Maida Paratha Wrapper\t1 Pre-rolled laccha paratha base\t₹3.50",
      "Fresh Dairy Paneer\t30g (Cut into small 1cm cubes)\t₹7.00",
      "Sweet Corn & Green Peas\t20g (Par-boiled mix)\t₹1.00",
      "Diced Veggies (Capsicum/Onion)\t30g Crisp square cuts\t₹1.50",
      "Par-boiled Potato (Filler)\t40g (Diced small & crisped)\t₹1.00",
      "Master Chilli Gravy Glaze\t30ml allocation (The seasoning engine)\t₹2.00",
      "Roll Salad Filler\t40g Finely sliced onions & green chillies\t₹1.50",
      "Frying Fat & Sauces\tRefined oil/vanaspati + Ketchup/Mayo drizzle\t₹4.20",
      "Packaging Wrapper\tButter paper sleeve + rubber band\t₹1.50",
      "Direct Fuel & Overhead\tTawa burner allocation\t₹2.50",
      "TOTAL PRODUCTION COST\t\t₹25.70",
      "Financial Matrix: At a ₹119 retail price, a ₹25.70 raw material cost gives you a spectacular 21.6% Food Cost Percentage. This locks in an outstanding 78.4% Gross Margin (₹93.30 pure profit per roll). Because vegetables and potatoes are highly budget-friendly, this item acts as one of the most profitable assets on your menu."
    ],
    "ingredients": [
      "The Wrapper: 1 Maida paratha disc (75g dough ball, rolled thin with flaky oil layers).",
      "The Premium Mix Filling: 30g fresh paneer (1cm small cubes), 20g sweet corn and green peas, 30g diced onions and capsicum squares.",
      "The Bulk Filler: 40g par-boiled potato (diced into small 1cm cubes to match the paneer).",
      "The Flavor Catalyst: 1 portion ladle (30ml) of your pre-made Master Chilli Gravy Base. (Using your existing chilli gravy means the cook doesn't need to slow down to add soy sauce, chilli sauce, or spices individually on the tawa).",
      "The Crunch Salad: 1 handful of raw, paper-thin sliced onions, 2 minced green chillies, 41​ tsp chaat masala, and a squeeze of fresh lemon juice.",
      "The Finishing Drizzle: 1 tsp tomato ketchup and 1 tsp commercial eggless mayonnaise."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "To maintain rapid ticket turnarounds during the evening rush, structure your flat-top tawa into two distinct temperature zones.",
        "timerSeconds": 10
      },
      {
        "title": "Zone 1: The Premium Veg & Paneer Sear",
        "duration": "60 Secs",
        "detail": "Heat 1 tsp of oil on the high-heat side of your flat tawa. Throw in your small potato cubes, sweet corn, peas, diced onions, capsicum, and paneer cubes all at once. Flash-sear on high heat for 45 seconds to get a slight blistered char on the capsicum and potato edges without letting them release water or turn mushy.",
        "timerSeconds": 60
      },
      {
        "title": "Zone 2: The Master Gravy Glaze",
        "duration": "30 Secs",
        "detail": "Ladle 30ml of your Master Chilli Gravy Base directly over the sizzling vegetable-paneer mix. Flip and stir vigorously. The heat will dry out the moisture instantly, forcing the starches in the master gravy to caramelize into a thick, sticky, bone-dry glaze that clings to every single cube. Push the filling to the cool side of the tawa.",
        "timerSeconds": 30
      },
      {
        "title": "Zone 3: The Flaky Paratha Crisp",
        "duration": "60 Secs",
        "detail": "On the main section of the tawa, slap down your pre-rolled, semi-cooked kacha-pakka maida paratha with a splash of oil or vanaspati. Fry for 30 seconds per side, pressing with a clean cloth or spatula until it puffs into flaky layers and turns an attractive golden-brown.",
        "timerSeconds": 60
      },
      {
        "title": "Zone 4: Roll Packing & Drizzle",
        "duration": "30 Secs",
        "detail": "Transfer the hot paratha to a sheet of greaseproof wrapping paper. Arrange your hot, chilli-glazed veggie-paneer mix in a straight line down the center. Top with your seasoned raw onion-chilli crunch salad. Add a clean zig-zag drizzle of ketchup and eggless mayonnaise. Roll it tightly into a cigar shape, tuck the butter paper sleeve into the bottom, and serve.",
        "timerSeconds": 30
      }
    ],
    "hacks": [
      {
        "title": "The Master Gravy Consistency Locked",
        "text": "Running your veg filling through your pre-made Master Chilli Gravy Base handles 100% of your seasoning, cuts assembly time down by a minute, and guarantees that your veg roll carries the exact same addictive, savory umami profile as your high-selling chilli starters."
      },
      {
        "title": "The Potato-Paneer Identity Illusion",
        "text": "Cutting your par-boiled potatoes into identical 1cm small cubes to match the size of your paneer cubes is a brilliant menu engineering trick. When tossed together in the dark, rich master chilli gravy, the potatoes absorb the glaze and blend visually with the paneer. The customer feels like the roll is loaded with premium paneer chunks from the first bite to the last, dramatically increasing the perceived value of the ₹119 plate."
      },
      {
        "title": "The Par-Boiled Stability Protocol",
        "text": "Never use raw potatoes or completely boiled, mushy mashed potatoes on the tawa. Raw potatoes take too long to cook, and mashed potatoes turn gummy under a spatula. Boil whole potatoes to exactly 70% doneness beforehand, cool them down in the fridge to firm up the starches, and dice them. They will stay perfectly distinct and crisp up beautifully on the hot oil flat-top."
      }
    ],
    "storageAndWaste": "Vegetable prep can decay or turn soggy within a few hours on a humid kitchen line if not managed defensively.\n\n1. Par-Baking the Wrappers\n\nDo not let your line cook roll out dough balls from scratch for every order. It destroys your line speed. Semi-cook your paratha discs during afternoon hours. Flash them on a dry tawa for 15 seconds per side until they hold their circular shape but stay completely white. Stack them with plastic sheets or wax paper in between to prevent sticking, and keep them covered in the line fridge. When an order lands, hit the paratha sheet with oil and crisp it up in 60 seconds flat.\n\n2. Bulk Mix Handling (The Salt Ban)\n\nNever add salt or your master gravy to your bulk container of diced vegetables and paneer ahead of time. Salt will immediately draw out the water from the onions and capsicum, leaving you with a watery, limp vegetable soup that will turn sour in the fridge.\n\nThe Pro Setup: Keep your diced capsicum, onions, sweet corn, boiled potato cubes, and paneer mixed together completely dry and unsalted in a stainless steel container in your line chiller at 2∘C to 4∘C (holds perfectly fresh for up to 36 hours). Only scoop out a portion and combine it with the salt and master gravy on the live tawa when the order prints.\n\n3. Upcycling Unsold Cooked Veg Filling (Zero-Waste Strategy)\n\nIf you have pre-fried, chilli-glazed veggie-paneer filling left over on the tawa at closing time, do not discard it.\n\nThe Veg Szechuan Fried Rice/Noodle Hack: Store the cooked leftover mix cold overnight. The next morning, dump this highly seasoned, smoky, sauce-heavy veggie-paneer mix directly into your high-heat wok line along with boiled rice or noodles, fresh cabbage shreds, and a splash of vinegar. The caramelized master chilli gravy acts as the perfect flavor engine, instantly transforming dead tawa inventory into a premium \"Veg Szechuan Fried Rice Combo\" for your lunch thali rush. This eliminates vegetable wastage entirely, protecting your massive 78% gross profit margins."
  },
  {
    "id": 112,
    "name": "Prawn Roll",
    "prices": [
      "₹89"
    ],
    "categoryId": "rolls",
    "categoryName": "Premium Rolls",
    "colorAccent": "#dc2626",
    "quickMix": "A pricing target of ₹89 retail for a Prawn Roll (ଚିଙ୍ଗୁଡ଼ି ରୋଲ୍) is an unbelievable crowd-puller. Most quick-service res...",
    "description": "A pricing target of ₹89 retail for a Prawn Roll (ଚିଙ୍ଗୁଡ଼ି ରୋଲ୍) is an unbelievable crowd-puller. Most quick-service restaurants and food trucks easily charge ₹140 to ₹180 for a seafood roll. Hitting ₹89 means this will be your highest-volume street snack, but it requires strict discipline with portion control and intelligent filler engineering to keep your food cost stable.\n\nTo preserve a sub-35% food cost, you cannot use large, expensive prawns. You must source peeled, deveined small white prawns (size 80/100 or 100/120 count per kg). By chopping these small prawns into halves, they distribute beautifully across the entire length of the roll. To build substantial physical volume inside the flaky paratha wrapper, you must use a 50:50 ratio of prawns and crispy par-boiled potato cubes, completely bound together in your pre-made Master Chilli Gravy.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Standard Roll (~200g total weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Maida Paratha Wrapper\t1 Pre-rolled laccha paratha base\t₹3.50",
      "Small Peeled Prawns\t40g net weight (Chopped into halves)\t₹11.00",
      "Par-boiled Potato (Filler)\t40g (Diced into small 1cm cubes)\t₹1.00",
      "Diced Onion & Capsicum\t20g Crisp square cuts\t₹1.00",
      "Master Chilli Gravy Glaze\t30ml allocation (The seasoning engine)\t₹2.00",
      "Roll Salad Filler\t40g Finely sliced onions & green chillies\t₹1.50",
      "Frying Fat & Sauces\tRefined oil/vanaspati + Ketchup/Mayo drizzle\t₹4.20",
      "Packaging Wrapper\tButter paper sleeve + rubber band\t₹1.50",
      "Direct Fuel & Overhead\tTawa burner allocation\t₹2.50",
      "TOTAL PRODUCTION COST\t\t₹28.20",
      "Financial Matrix: At a ₹89 retail price, a ₹28.20 raw material cost puts your Food Cost Percentage at 31.7%. This delivers an exceptional 68.3% Gross Margin (₹60.80 profit per roll). Because the ticket price is under ₹90, high volume will generate massive daily cash flow."
    ],
    "ingredients": [
      "The Wrapper: 1 Maida paratha disc (75g dough ball, rolled out thin with a touch of oil for flakiness).",
      "The Seafood Core: 40g small peeled prawns (cut into halves to double the piece count visually).",
      "The Volume Extender: 40g par-boiled potato (diced into small 1cm cubes to match the prawn size).",
      "Aromatics: 20g diced onions and green capsicum squares.",
      "The Flavor Catalyst: 1 portion ladle (30ml) of your pre-made Master Chilli Gravy Base. (This eliminates the need for your cooks to pull individual sauce bottles during peak hours).",
      "The Crunch Salad: 1 handful of raw, paper-thin sliced onions, 2 minced green chillies, 41​ tsp chaat masala, and a squeeze of fresh lemon juice.",
      "The Finishing Drizzle: 1 tsp tomato ketchup and 1 tsp commercial eggless mayonnaise."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "To maintain an ultra-fast turnaround time on your street line, utilize the split-zone method on your flat-top tawa.",
        "timerSeconds": 10
      },
      {
        "title": "Zone 1: The High-Heat Prawn & Potato Sear",
        "duration": "60 Secs",
        "detail": "Heat 1 tsp oil on the scorching high-heat side of your flat tawa. Throw in your chopped prawns, small potato cubes, diced onions, and capsicum all at once. Because the prawns are small and the potatoes are pre-boiled, flash-sear them together for exactly 45–60 seconds until the prawns pink up and turn opaque.",
        "timerSeconds": 60
      },
      {
        "title": "Zone 2: The Master Gravy Glaze Emulsification",
        "duration": "30 Secs",
        "detail": "Ladle 30ml of your Master Chilli Gravy Base directly over the sizzling prawn-potato mix. Stir and flip aggressively with your spatula. The starches in the gravy will cook instantly, turning into a thick, sticky, completely dry glaze that locks onto the prawns and potatoes. Push the filling to the cool side of the tawa.",
        "timerSeconds": 30
      },
      {
        "title": "Zone 3: The Flaky Paratha Crisp",
        "duration": "60 Secs",
        "detail": "On the center section of the tawa, slap down your pre-rolled, semi-cooked kacha-pakka maida paratha sheet with a splash of oil or vanaspati. Fry for 30 seconds per side, pressing firmly until it puffs into golden, flaky layers.",
        "timerSeconds": 60
      },
      {
        "title": "Zone 4: Roll Stuffing & Packing",
        "duration": "30 Secs",
        "detail": "Transfer the hot paratha to a sheet of greaseproof wrapping paper. Lay your hot, chilli-glazed prawn and potato filling in a neat line down the center. Top with your seasoned raw onion-chilli crunch salad. Add a clean zig-zag drizzle of ketchup and eggless mayonnaise. Roll it tightly into a cigar shape, wrap the lower half in butter paper, and hand it to the runner.",
        "timerSeconds": 30
      }
    ],
    "hacks": [
      {
        "title": "The Potato-Prawn Identity Trick",
        "text": "Cut your par-boiled potatoes into tiny 1cm cubes that perfectly match the physical size of your halved small prawns. When tossed and glazed inside the dark, rich crimson Master Chilli Gravy, the potatoes absorb the seafood juices and blend visually with the prawns. When eating, the customer gets a uniform, dense, incredibly savory bite every time, feeling like the roll is completely packed with premium prawns."
      },
      {
        "title": "The Master Gravy Standard",
        "text": "Do not let your line cooks drizzle raw soy sauce or chilli sauce directly onto the tawa. Your pre-made master gravy holds 100% of the seasoning matrix. It cuts assembly time down by 90 seconds, prevents a watery filling from making the paratha soggy, and ensures your Prawn Roll tastes exactly like your high-selling chilli starters."
      },
      {
        "title": "The Acid Wash Crunch",
        "text": "Always toss your raw roll onions with a heavy splash of lemon juice and chaat masala right before stuffing. The sharp acidity cuts right through the heavy grease of the fried paratha, balancing the richness and giving a refreshing, snappy crunch."
      }
    ],
    "storageAndWaste": "Seafood spoils rapidly, and raw onion contact will sour an entire prep batch if temperature control slips on a live kitchen line.\n\n1. Par-Baking the Parathas\n\nNever let your line cooks roll and stretch out dough balls from scratch for an ₹89 entry-level item during the evening rush. Semi-cook your paratha discs beforehand during afternoon prep hours. Flash them on a dry tawa for 15 seconds per side until they hold their circular shape but stay completely white. Stack them with sheets of wax paper or clean plastic wraps in between to stop sticking, and store covered in the line fridge. Grab, oil, and crisp them in 60 seconds flat on order.\n\n2. Prawn Station Hygiene (The Ice Protocol)\n\nNever mix raw small prawns with salt or your master gravy ahead of time. Salt will draw out the moisture from the seafood, leaving you with tiny, tough, rubbery prawns and a watery marinade that will slide right off on the tawa.\n\nThe Pro Setup: Keep your cleaned, dry, halved raw prawns stored completely un-salted in a stainless steel container nested inside a larger container filled with crushed ice right on your line table (1∘C to 2∘C). Keep your diced capsicum, onions, and boiled potato cubes dry in separate containers. Only combine a single portion scoop on the hot tawa when the order ticket prints. This keeps your raw seafood pristine for up to 36 hours and cuts inventory waste to zero.\n\n3. Upcycling Unsold Cooked Filling (Zero-Waste Strategy)\n\nIf your cook has pre-fried, chilli-glazed prawn-and-potato filling left over on the flat-top at closing time, do not discard it.\n\nThe Prawn Szechuan Rice / Noodle Combo: Store the cooked leftover mix cold overnight. The next morning, dump this highly seasoned, smoky, sauce-heavy prawn-and-potato mix directly into a screaming hot wok along with boiled rice or noodles, cabbage shreds, and a splash of vinegar. The caramelized master chilli gravy acts as your primary seasoning engine, transforming dead tawa inventory into a high-demand \"Smoky Prawn Fried Rice Combo\" for your lunch thali rush. This completely eliminates seafood wastage, protecting your clear 68% gross profit margins."
  },
  {
    "id": 113,
    "name": "Double Egg Chicken Roll",
    "prices": [
      "₹79"
    ],
    "categoryId": "rolls",
    "categoryName": "Premium Rolls",
    "colorAccent": "#dc2626",
    "quickMix": "A Double Egg Chicken Roll (ଡବଲ୍ ଅଣ୍ଡା କୁକୁଡ଼ା ରୋଲ୍) at a ₹79 retail price point is a high-volume street-food classic. At...",
    "description": "A Double Egg Chicken Roll (ଡବଲ୍ ଅଣ୍ଡା କୁକୁଡ଼ା ରୋଲ୍) at a ₹79 retail price point is a high-volume street-food classic. At under ₹80, it acts as a massive driver for the evening crowd. The core challenge here is that customers expect a substantial, heavy roll with a rich egg layer on both sides and a generous filling of juicy chicken.\n\nTo protect your margins and hit a sub-35% food cost, you must use boneless chicken breast trimmings cut into tiny 1 cm pieces or shredded chicken instead of large chunks. Because you are using two whole poultry eggs on the tawa, the eggs act as a massive structural binder and volume filler, allowing you to stretch 50g of raw chicken into a massive, heavy, premium-looking roll wrapper.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Heavy Jumbo Roll (~260g total weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Maida Paratha Wrapper\t1 Pre-rolled laccha paratha base\t₹3.50",
      "Wholesale Poultry Eggs\t2 Whole eggs (beaten onto the tawa)\t₹12.00",
      "Chicken Breast Trimmings\t50g (Finely shredded / chopped)\t₹11.00",
      "Master Chilli Gravy Glaze\t30ml allocation (The seasoning engine)\t₹2.00",
      "Roll Salad Filler\t40g Finely sliced onions & green chillies\t₹1.50",
      "Frying Fat & Sauces\tRefined oil/vanaspati + Ketchup/Mayo drizzle\t₹4.20",
      "Packaging Wrapper\tButter paper sleeve + rubber band\t₹1.50",
      "Direct Fuel & Overhead\tTawa burner allocation\t₹2.50",
      "TOTAL PRODUCTION COST\t\t₹38.20",
      "Financial Matrix: At a ₹79 retail price, a ₹38.20 raw production cost gives you a 48.4% Food Cost Percentage, leaving a 51.6% Gross Margin (₹40.80 pure profit per roll). While the food cost percentage is higher than your veggie items, the massive customer volume and ultra-fast turnaround on a single tawa make it a heavy cash-flow generator."
    ],
    "ingredients": [
      "The Wrapper: 1 Maida paratha disc (75g dough ball, rolled thin with flaky oil layers).",
      "The Double Binder: 2 whole poultry eggs.",
      "The Chicken Filling: 50g raw chicken breast trimmings, finely chopped or shredded into small 1 cm bits.",
      "The Flavor Catalyst: 1 portion ladle (30ml) of your pre-made Master Chilli Gravy Base. (Using your existing chilli gravy means the cook doesn't need to slow down to add individual sauces on the line).",
      "The Crunch Salad: 1 handful of raw, paper-thin sliced onions, 2 minced green chillies, 41​ tsp chaat masala, and a squeeze of fresh lemon juice.",
      "The Finishing Drizzle: 1 tsp tomato ketchup and 1 tsp commercial eggless mayonnaise."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "To keep up with heavy evening rush hours, separate your flat-top tawa into two parallel zones: The Filling Zone and The Egg-Paratha Zone.",
        "timerSeconds": 10
      },
      {
        "title": "Zone 1: The Fast Chicken Shred Toss",
        "duration": "60 Secs",
        "detail": "Heat 1 tsp oil on the hot side of your flat tawa. Toss in your 50g of finely chopped chicken breast trimmings. Because the chicken pieces are tiny, they will flash-cook completely to the core in 45 seconds. Ladle in 30ml of your Master Chilli Gravy Base. Flip vigorously until the gravy turns into a thick, sticky, completely dry glaze coating the meat. Push the filling to the cool side of the tawa.",
        "timerSeconds": 60
      },
      {
        "title": "Zone 2: The Paratha Flash Crisp",
        "duration": "30 Secs",
        "detail": "On the main section of the tawa, slap down your pre-rolled, semi-cooked kacha-pakka maida paratha base with a splash of oil or vanaspati. Fry for 15 seconds per side until it warms through and expands.",
        "timerSeconds": 30
      },
      {
        "title": "Zone 3: The Double-Egg Fusion",
        "duration": "40 Secs",
        "detail": "Crack 2 whole eggs into a cup, beat them quickly with a pinch of salt, and pour them directly onto the center of the hot tawa. Spread the eggs slightly with your spatula to match the diameter of your paratha. Immediately slap the crisped paratha flat on top of the raw liquid egg. Press down firmly with a spatula. The eggs will cook and fuse seamlessly to the paratha within 30 seconds. Flip the entire sheet over for 10 seconds to toast the outer side.",
        "timerSeconds": 40
      },
      {
        "title": "Zone 4: Roll Stuffing & Packing",
        "duration": "30 Secs",
        "detail": "Transfer the double-egg paratha (egg-side facing up) onto a sheet of greaseproof wrapping paper. Lay your hot, chilli-glazed chicken filling in a clean line right down the center. Top with your seasoned onion-chilli crunch salad. Add a quick zig-zag drizzle of ketchup and eggless mayonnaise. Roll it tightly into a cigar shape, wrap the lower half in butter paper, and hand it over.",
        "timerSeconds": 30
      }
    ],
    "hacks": [
      {
        "title": "The Shredded Chicken Illusion",
        "text": "Never use big, chunky chicken cubes in an egg-heavy roll. Big chunks cause the roll to look uneven and pull out completely in a single bite. By finely shredding or chopping your chicken breast into 1 cm bits, the meat blends perfectly with the soft double-egg layer, distributing evenly from the first bite to the last. The customer feels like the roll is completely packed with premium chicken."
      },
      {
        "title": "The Double-Egg Omelette Wall",
        "text": "Two eggs release a massive volume of liquid protein on a hot flat-top. Make sure your line cook spreads the raw beaten egg out to the exact outer diameter of the paratha before slapping the bread down. This creates a thick, beautiful golden egg rim around the entire border of the roll, which instantly maximizes the visual premium value of the ₹79 plate."
      },
      {
        "title": "The Master Gravy Binding Standard",
        "text": "Running your chicken filling through your pre-made Master Chilli Gravy Base handles 100% of your seasoning needs in a single stroke. It cuts your tawa assembly time down by a minute, prevents a loose sauce from leaking out of the bottom of the paper wrap, and ensures your rolls carry that exact same addictive umami flavor as your high-selling chilli starters."
      }
    ],
    "storageAndWaste": "Chicken and raw egg washes turn watery and spoil rapidly if exposed to ambient heat fluctuations on a busy street line.\n\n1. Par-Baking the Parathas\n\nNever let your line cooks roll out raw dough balls from scratch for an entry-level item during the evening rush. Semi-cook your paratha discs beforehand during afternoon prep hours. Flash them on a dry tawa for 15 seconds per side until they hold their circular shape but stay completely white. Stack them with plastic sheets or wax paper in between to stop sticking, and store covered in the line fridge. Grab, oil, and crisp them in 30 seconds flat on order.\n\n2. The Raw Prep Separation\n\nNever mix raw chicken bits with salt, fresh onions, or your master gravy ahead of time. Salt will draw out the moisture from the chicken, leaving you with dry, tough, rubbery meat bits and a watery marinade that will slide right off on the tawa.\n\nThe Line Setup: Keep your pre-chopped, raw chicken bits stored completely dry and un-salted in an airtight stainless steel container in your line chiller at 2∘C to 4∘C (holds perfectly fresh for up to 48 hours). Only scoop out a portion and combine it with the master gravy directly on the hot tawa surface when the order prints.\n\n3. Upcycling Unsold Cooked Chicken (Zero-Waste Strategy)\n\nIf your cook has pre-fried, chilli-glazed chicken filling left over on the flat-top at closing time, do not discard it.\n\nThe Chicken Szechuan Rice / Noodle Combo: Store the cooked leftover mix cold overnight. The next morning, dump this highly seasoned, smoky, sauce-heavy chicken mix directly into a screaming hot wok along with boiled rice or noodles, cabbage shreds, and a splash of vinegar. The caramelized master chilli gravy acts as your primary seasoning engine, transforming dead tawa inventory into a high-demand \"Smoky Chicken Fried Rice Combo\" for your lunch thali rush. This completely eliminates meat wastage, protecting your clear gross profit margins."
  },
  {
    "id": 114,
    "name": "Mushroom Roll",
    "prices": [
      "₹79"
    ],
    "categoryId": "rolls",
    "categoryName": "Premium Rolls",
    "colorAccent": "#0c831f",
    "quickMix": "An entry-level Mushroom Roll (ଛତୁ ରୋଲ୍) at a ₹79 retail price is an exceptional high-margin street food item. In the veg...",
    "description": "An entry-level Mushroom Roll (ଛତୁ ରୋଲ୍) at a ₹79 retail price is an exceptional high-margin street food item. In the vegetarian fast-food market, hitting a price point under ₹80 captures a massive chunk of the evening snack crowd. Mushrooms offer a juicy, meaty bite that mimics meat textures, yet they boast a very low wholesale raw material cost that heavily pads your bottom line.\n\nThe primary commercial hurdle with mushrooms is their massive 90% water content. If you salt them carelessly on a hot tawa, they will purge their water, turning your filling into a wet, soggy soup that will tear through your flaky paratha wrapper.\n\nBy applying a fast-searing tawa method and glazing the mixture with your pre-made Master Chilli Gravy, you lock the moisture inside, hit a sub-25% food cost, and pump out rolls in under 90 seconds flat.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Standard Roll (~200g total weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Maida Paratha Wrapper\t1 Pre-rolled laccha paratha base\t₹3.50",
      "Fresh Button/Oyster Mushroom\t60g (Sliced into thin, uniform strips)\t₹7.50",
      "Diced Veggies (Capsicum/Onion)\t20g Crisp square cuts\t₹1.00",
      "Par-boiled Potato (Filler)\t30g (Diced small & crisped)\t₹0.75",
      "Master Chilli Gravy Glaze\t30ml allocation (The seasoning engine)\t₹2.00",
      "Roll Salad Filler\t40g Finely sliced onions & green chillies\t₹1.50",
      "Frying Fat & Sauces\tRefined oil/vanaspati + Ketchup/Mayo drizzle\t₹4.20",
      "Packaging Wrapper\tButter paper sleeve + rubber band\t₹1.50",
      "Direct Fuel & Overhead\tTawa burner allocation\t₹2.50",
      "TOTAL PRODUCTION COST\t\t₹24.45",
      "Financial Matrix: At a ₹79 retail price, a ₹24.45 raw production cost gives you an incredible 31.0% Food Cost Percentage. This locks in an outstanding 69.0% Gross Margin (₹54.55 pure profit per roll). Because mushrooms are highly cost-efficient when portioned correctly, this item acts as a major cash-flow driver."
    ],
    "ingredients": [
      "The Wrapper: 1 Maida paratha disc (75g dough ball, rolled thin with flaky oil layers).",
      "The Core Filling: 60g fresh button or oyster mushrooms, sliced into thin, uniform strips.",
      "The Volume Extender: 30g par-boiled potato (diced into small 1cm cubes).",
      "Aromatics: 20g diced onions and green capsicum squares.",
      "The Flavor Catalyst: 1 portion ladle (30ml) of your pre-made Master Chilli Gravy Base. (This eliminates the need for your cooks to pull individual sauce bottles during rush hours).",
      "The Crunch Salad: 1 handful of raw, paper-thin sliced onions, 2 minced green chillies, 41​ tsp chaat masala, and a squeeze of fresh lemon juice.",
      "The Finishing Drizzle: 1 tsp tomato ketchup and 1 tsp commercial eggless mayonnaise."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "To maintain an ultra-fast turnaround time on your street line, split your flat-top tawa into two temperature zones.",
        "timerSeconds": 10
      },
      {
        "title": "Zone 1: The High-Heat Flash Mushroom Sear",
        "duration": "45 Secs",
        "detail": "Heat 1 tsp oil on the scorching high-heat side of your flat tawa. Throw in your sliced mushrooms, small potato cubes, diced onions, and capsicum all at once. Flash-sear on high heat for exactly 45 seconds. Searing on high heat seals the cellular surface of the mushrooms instantly, preventing them from weeping water on the flat-top.",
        "timerSeconds": 45
      },
      {
        "title": "Zone 2: The Master Gravy Glaze Lock",
        "duration": "30 Secs",
        "detail": "Ladle 30ml of your Master Chilli Gravy Base directly over the sizzling mushroom-potato mix. Stir and flip aggressively with your spatula. The starches in your master gravy will cook instantly, turning into a thick, sticky, completely dry glaze that coats the mushroom pieces. Push the filling to the cool side of the tawa.",
        "timerSeconds": 30
      },
      {
        "title": "Zone 3: The Flaky Paratha Crisp",
        "duration": "60 Secs",
        "detail": "On the center section of the tawa, slap down your pre-rolled, semi-cooked kacha-pakka maida paratha sheet with a splash of oil or vanaspati. Fry for 30 seconds per side, pressing firmly until it puffs into golden, flaky layers.",
        "timerSeconds": 60
      },
      {
        "title": "Zone 4: Roll Stuffing & Packing",
        "duration": "30 Secs",
        "detail": "Transfer the hot paratha to a sheet of greaseproof wrapping paper. Lay your hot, chilli-glazed mushroom and potato filling in a neat line down the center. Top with your seasoned raw onion-chilli crunch salad. Add a clean zig-zag drizzle of ketchup and eggless mayonnaise. Roll it tightly into a cigar shape, wrap the lower half in butter paper, and hand it over.",
        "timerSeconds": 30
      }
    ],
    "hacks": [
      {
        "title": "The Mushroom-Potato Identity Illusion",
        "text": "Slice your mushrooms into thin strips and cut your par-boiled potatoes into identical small 1cm pieces. When tossed and glazed inside the dark, rich crimson Master Chilli Gravy, the potatoes absorb the mushroom flavor and blend visually with the mushrooms. The customer gets a dense, incredibly savory bite every time, feeling like the roll is completely packed with premium mushrooms."
      },
      {
        "title": "The Master Gravy Standard",
        "text": "Running your mushroom filling through your pre-made Master Chilli Gravy Base handles 100% of your seasoning needs in a single stroke. It cuts your tawa assembly time down by a minute, prevents a loose sauce from leaking out of the bottom of the paper wrap, and ensures your rolls carry that exact same addictive umami flavor as your high-selling chilli starters."
      },
      {
        "title": "The High-Heat Searing Rule",
        "text": "Never cook mushrooms on low or medium tawa heat. Low heat will cause the mushrooms to boil in their own juices, stripping away their plump volume and leaving your filling soggy. Keep the tawa smoking hot for Step 1."
      }
    ],
    "storageAndWaste": "Mushrooms degrade rapidly once exposed to moisture and salt. Strict prep separation is mandatory to protect your margins.\n\n1. Par-Baking the Parathas\n\nNever let your line cooks roll out raw dough balls from scratch for an entry-level item during the evening rush. Semi-cook your paratha discs beforehand during afternoon prep hours. Flash them on a dry tawa for 15 seconds per side until they hold their circular shape but stay completely white. Stack them with plastic sheets or wax paper in between to stop sticking, and store covered in the line fridge. Grab, oil, and crisp them in 30 seconds flat on order.\n\n2. Bulk Mix Handling (The Salt Ban)\n\nNever add salt or your master gravy to your bulk container of sliced mushrooms and potatoes ahead of time. Salt will immediately draw out the water from the mushrooms, leaving you with a watery, limp soup that will turn sour in the fridge.\n\nThe Pro Setup: Keep your sliced mushrooms, diced capsicum, onions, and boiled potato cubes mixed together completely dry and unsalted in a stainless steel container in your line chiller at 2∘C to 4∘C (holds perfectly fresh for up to 24 to 36 hours). Only scoop out a portion and combine it with the master gravy directly on the hot tawa surface when the order prints.\n\n3. Upcycling Unsold Cooked Filling (Zero-Waste Strategy)\n\nIf your cook has pre-fried, chilli-glazed mushroom-and-potato filling left over on the flat-top at closing time, do not discard it.\n\nThe Mushroom Szechuan Rice / Noodle Combo: Store the cooked leftover mix cold overnight. The next morning, dump this highly seasoned, smoky, sauce-heavy mix directly into a screaming hot wok along with boiled rice or noodles, cabbage shreds, and a splash of vinegar. The caramelized master chilli gravy acts as your primary seasoning engine, transforming dead tawa inventory into a high-demand \"Smoky Mushroom Fried Rice Combo\" for your lunch thalis. This eliminates waste entirely, protecting your clear 69% gross profit margins."
  },
  {
    "id": 115,
    "name": "Cheese Corn Roll",
    "prices": [
      "₹79"
    ],
    "categoryId": "rolls",
    "categoryName": "Premium Rolls",
    "colorAccent": "#0c831f",
    "quickMix": "An entry-level Cheese Corn Roll at a ₹79 retail price is an incredibly high-margin asset for an evening quick-service st...",
    "description": "An entry-level Cheese Corn Roll at a ₹79 retail price is an incredibly high-margin asset for an evening quick-service street line. Cheese and corn is a globally loved flavor pairing that carries a massive premium perception, especially among vegetarian and family crowds.\n\nHowever, because dairy fats are expensive, trying to fill an entire roll with pure processed cheese or mozzarella blocks at ₹79 will destroy your profitability. The commercial secret here is a high-yield filling matrix: use a sweet, golden corn mash extended with finely diced crisp capsicum, and bind it together using a cost-effective, high-viscosity commercial liquid cheese sauce rather than expensive melting cheese blocks.\n\nBy flash-searing this golden filling on your flat-top tawa and rolling it into a flaky, layered paratha, you deliver a rich, gooey, premium experience while hitting a sub-30% food cost with an assembly time under 90 seconds.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Standard Roll (~210g total weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Maida Paratha Wrapper\t1 Pre-rolled laccha paratha base\t₹3.50",
      "Sweet Corn Kernels\t50g (Par-boiled, slightly crushed)\t₹2.50",
      "Diced Capsicum & Onion\t30g Crisp, small square cuts\t₹1.50",
      "Commercial Liquid Cheese Sauce\t25g (High-viscosity cheddar style)\t₹4.50",
      "Processed Cheese Shreds\t10g (For the visual top-garnish stretch)\t₹2.50",
      "Master Chilli Gravy Glaze\t20ml allocation (The background flavor kick)\t₹1.30",
      "Roll Salad Filler\t30g Finely sliced onions & green chillies\t₹1.20",
      "Frying Fat & Sauces\tRefined oil/vanaspati + Mayonnaise drizzle\t₹3.50",
      "Packaging Wrapper\tButter paper sleeve + rubber band\t₹1.50",
      "Direct Fuel & Overhead\tTawa burner allocation\t₹2.50",
      "TOTAL PRODUCTION COST\t\t₹24.50",
      "Financial Matrix: At a ₹79 retail price, a ₹24.50 raw production cost delivers an outstanding 31.0% Food Cost Percentage, locking in a 69.0% Gross Margin (₹54.50 pure profit per roll)."
    ],
    "ingredients": [
      "The Wrapper: 1 Maida paratha disc (75g dough ball, rolled thin with flaky oil layers).",
      "The Golden Core: 50g par-boiled sweet corn kernels. (Pro Tip: Run 30% of the corn through a blender to create a paste; it acts as a free natural binder for the filling).",
      "The Crunch Aromatics: 30g finely diced green capsicum and onions.",
      "The Dual-Cheese Binding Matrix: 25g commercial liquid cheese sauce (provides the thick, creamy base) and 10g shredded processed cheese (provides the premium visual dairy identity inside the roll).",
      "The Flavor Catalyst: 1 small portion ladle (20ml) of your pre-made Master Chilli Gravy Base. (Adding a touch of chilli gravy introduces garlic, soy, and heat, balancing the sweet corn and rich cheese so the roll doesn't taste bland).",
      "The Crunch Salad: 1 handful of raw, paper-thin sliced onions, 1 minced green chilli, and 41​ tsp chaat masala."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "To maintain rapid ticket turnarounds during evening rush hours, divide your flat-top tawa into a high-heat cooking zone and a medium-heat paratha zone.",
        "timerSeconds": 10
      },
      {
        "title": "Zone 1: The Fast Veg & Corn Sear",
        "duration": "45 Secs",
        "detail": "Heat 1 tsp oil on the high-heat side of your flat tawa. Throw in your sweet corn kernels, diced capsicum, and onions all at once. Flash-sear on high heat for exactly 45 seconds until the veggies blister slightly while retaining their bright color and snappy crunch.",
        "timerSeconds": 45
      },
      {
        "title": "Zone 2: The Creamy Glaze Merge",
        "duration": "20 Secs",
        "detail": "Turn down the tawa heat slightly. Ladle 20ml of your Master Chilli Gravy and your 25g of liquid cheese sauce directly over the sizzling corn mixture. Stir and flip aggressively for 15-20 seconds. The starches in the sauces will instantly emulsify, forming a thick, creamy, sticky golden-red glaze that completely envelopes the corn. Push the filling to the cool side of the tawa.",
        "timerSeconds": 20
      },
      {
        "title": "Zone 3: The Flaky Paratha Crisp",
        "duration": "60 Secs",
        "detail": "On the main section of the tawa, slap down your pre-rolled, semi-cooked kacha-pakka maida paratha base with a splash of oil or vanaspati. Fry for 30 seconds per side, pressing firmly until it puffs into golden, flaky layers.",
        "timerSeconds": 60
      },
      {
        "title": "Zone 4: Roll Packing & Garnish",
        "duration": "30 Secs",
        "detail": "Transfer the hot paratha to a sheet of greaseproof wrapping paper. Arrange your hot, creamy cheese-corn filling in a straight line down the center. Sprinkle the 10g of shredded processed cheese directly over the hot filling so it melts instantly from the residual steam. Top with your raw onion-chilli crunch salad, roll it tightly into a cigar shape, tuck the butter paper sleeve into the bottom, and serve.",
        "timerSeconds": 30
      }
    ],
    "hacks": [
      {
        "title": "The Master Gravy Balancing Act",
        "text": "Never use pure cheese sauce alone in a roll filling. Cheese and sweet corn can taste overly sweet and heavy to the local palate after two bites. Adding a 20ml splash of your pre-made Master Chilli Gravy introduces a sharp garlic, vinegar, and umami base that cuts through the heavy dairy fat, making the roll incredibly savory and craveable."
      },
      {
        "title": "The Liquid-to-Solid Cheese Trick",
        "text": "Block mozzarella or cheddar is highly expensive and loses its moisture rapidly on an open street tawa, turning rubbery. Using a commercial liquid cheese sauce gives you massive volume, high heat resistance on the tawa, and a consistently smooth, gooey mouthfeel at a fraction of the cost. The small 10g sprinkle of real processed cheese shreds at the final assembly stage provides the visual proof the customer expects when they open the roll wrapper."
      },
      {
        "title": "The Part-Crush Corn Hack",
        "text": "Do not drop 100% whole corn kernels into the roll filling. Whole kernels will slide out of the paratha wrapper when the customer takes a bite, creating a messy experience. Run one-third of your prep corn through a quick blender pulse before shifting it to the line tray. The crushed corn paste binds with your cheese sauces, creating a uniform filling that stays locked inside the roll from the first bite to the last."
      }
    ],
    "storageAndWaste": "Dairy sauces and sweet corn ferment rapidly if exposed to stagnant moisture or temperature abuse on a hot street line.\n\n1. Par-Baking the Wrappers\n\nNever let your line cooks roll out dough balls from scratch for an entry-level item during the evening rush. Semi-cook your paratha discs beforehand during afternoon prep hours. Flash them on a dry tawa for 15 seconds per side until they hold their circular shape but stay completely white. Stack them with plastic sheets or wax paper in between to stop sticking, and store covered in the line fridge. Grab, oil, and crisp them in 30 seconds flat on order.\n\n2. Bulk Core Setup (The Un-Salted Rule)\n\nNever mix your liquid cheese sauce or salt into your bulk container of par-boiled corn and diced capsicum for storage. Salt and dairy will cause the raw onions and capsicum to bleed water, turning your filling mix into a watery, sour soup in the fridge overnight.\n\nThe Pro Setup: Keep your par-boiled sweet corn, diced capsicum, and diced onions mixed together completely dry and unsalted in a stainless steel container in your line chiller at 2∘C to 4∘C (holds perfectly fresh for up to 36 hours). Keep your liquid cheese sauce container separate. Only combine a single portion scoop of the veg-corn mix with the cheese sauce on the hot live tawa surface when the order prints. This eliminates raw material wastage entirely.\n\n3. Upcycling Unsold Cooked Filling (Zero-Waste Strategy)\n\nIf your cook has pre-fried, cheese-glazed corn filling left over on the flat-top at closing time, do not discard it.\n\nThe Smoky Cheese Corn Sandwich / Burger Patty Base: Store the cooked leftover mix cold overnight. The next morning, this dense, cheesy corn paste makes the perfect high-value, spreadable filling for a lunch-hour \"Smoky Cheese Corn Grilled Sandwich\" or can be mixed with mashed potatoes and breadcrumbs to form premium evening \"Corn & Cheese Croquettes/Patties\". This ensures you salvage 100% of your ingredient costs, protecting your massive 69% gross profit margins."
  },
  {
    "id": 116,
    "name": "Egg Chicken Roll",
    "prices": [
      "₹69"
    ],
    "categoryId": "rolls",
    "categoryName": "Premium Rolls",
    "colorAccent": "#dc2626",
    "quickMix": "A Egg Chicken Roll (ଅଣ୍ଡା କୁକୁଡ଼ା ରୋଲ୍) at a ₹69 retail price point is the ultimate high-volume street-food classic. At ...",
    "description": "A Egg Chicken Roll (ଅଣ୍ଡା କୁକୁଡ଼ା ରୋଲ୍) at a ₹69 retail price point is the ultimate high-volume street-food classic. At under ₹70, it is a massive driver for evening crowds. The core commercial hurdle is that customers expect a substantial, meaty roll with a visible egg layer fused to the paratha and plenty of juicy chicken inside.\n\nTo protect your margins and hit a sub-35% food cost, you must use boneless chicken breast trimmings cut into tiny 1 cm pieces or finely shredded chicken instead of large chunks. Because you are using one whole poultry egg on the tawa, the egg acts as a structural binder and volume filler, allowing you to stretch 40g of raw chicken into a heavy, satisfying, premium-looking roll wrapper.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Standard Roll (~220g total weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Maida Paratha Wrapper\t1 Pre-rolled laccha paratha base\t₹3.50",
      "Wholesale Poultry Egg\t1 Whole egg (beaten onto the tawa)\t₹6.00",
      "Chicken Breast Trimmings\t40g (Finely shredded / chopped)\t₹8.80",
      "Master Chilli Gravy Glaze\t30ml allocation (The seasoning engine)\t₹2.00",
      "Roll Salad Filler\t40g Finely sliced onions & green chillies\t₹1.50",
      "Frying Fat & Sauces\tRefined oil/vanaspati + Ketchup/Mayo drizzle\t₹4.20",
      "Packaging Wrapper\tButter paper sleeve + rubber band\t₹1.50",
      "Direct Fuel & Overhead\tTawa burner allocation\t₹2.50",
      "TOTAL PRODUCTION COST\t\t₹30.00",
      "Financial Matrix: At a ₹69 retail price, a ₹30.00 raw production cost gives you an outstanding 43.5% Food Cost Percentage, leaving a 56.5% Gross Margin (₹39.00 pure profit per roll). While the food cost percentage is higher than your pure veggie items, the massive customer volume and ultra-fast turnaround on a single tawa make it a heavy cash-flow generator."
    ],
    "ingredients": [
      "The Wrapper: 1 Maida paratha disc (75g dough ball, rolled thin with flaky oil layers).",
      "The Binder: 1 whole poultry egg.",
      "The Chicken Filling: 40g raw chicken breast trimmings, finely chopped or shredded into small 1 cm bits.",
      "The Flavor Catalyst: 1 portion ladle (30ml) of your pre-made Master Chilli Gravy Base. (Using your existing chilli gravy means the cook doesn't need to slow down to add individual sauces on the line).",
      "The Crunch Salad: 1 handful of raw, paper-thin sliced onions, 2 minced green chillies, 41​ tsp chaat masala, and a squeeze of fresh lemon juice.",
      "The Finishing Drizzle: 1 tsp tomato ketchup and 1 tsp commercial eggless mayonnaise."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "To keep up with heavy evening rush hours, separate your flat-top tawa into two parallel zones: The Filling Zone and The Egg-Paratha Zone.",
        "timerSeconds": 10
      },
      {
        "title": "Zone 1: The Fast Chicken Shred Toss",
        "duration": "60 Secs",
        "detail": "Heat 1 tsp oil on the hot side of your flat tawa. Toss in your 40g of finely chopped chicken breast trimmings. Because the chicken pieces are tiny, they will flash-cook completely to the core in 45 seconds. Ladle in 30ml of your Master Chilli Gravy Base. Flip vigorously until the gravy turns into a thick, sticky, completely dry glaze coating the meat. Push the filling to the cool side of the tawa.",
        "timerSeconds": 60
      },
      {
        "title": "Zone 2: The Paratha Flash Crisp",
        "duration": "30 Secs",
        "detail": "On the main section of the tawa, slap down your pre-rolled, semi-cooked kacha-pakka maida paratha base with a splash of oil or vanaspati. Fry for 15 seconds per side until it warms through and expands.",
        "timerSeconds": 30
      },
      {
        "title": "Zone 3: The Egg Fusion",
        "duration": "30 Secs",
        "detail": "Crack 1 whole egg into a cup, beat it quickly with a pinch of salt, and pour it directly onto the center of the hot tawa. Spread the egg slightly with your spatula to match the diameter of your paratha. Immediately slap the crisped paratha flat on top of the raw liquid egg. Press down firmly with a spatula. The egg will cook and fuse seamlessly to the paratha within 25 seconds. Flip the entire sheet over for 5 seconds to toast the outer side.",
        "timerSeconds": 30
      },
      {
        "title": "Zone 4: Roll Stuffing & Packing",
        "duration": "30 Secs",
        "detail": "Transfer the egg-coated paratha (egg-side facing up) onto a sheet of greaseproof wrapping paper. Lay your hot, chilli-glazed chicken filling in a clean line right down the center. Top with your seasoned onion-chilli crunch salad. Add a quick zig-zag drizzle of ketchup and eggless mayonnaise. Roll it tightly into a cigar shape, wrap the lower half in butter paper, and hand it over.",
        "timerSeconds": 30
      }
    ],
    "hacks": [
      {
        "title": "The Shredded Chicken Illusion",
        "text": "Never use big, chunky chicken cubes in an egg roll. Big chunks cause the roll to look uneven and pull out completely in a single bite. By finely shredding or chopping your chicken breast into 1 cm bits, the meat blends perfectly with the soft egg layer, distributing evenly from the first bite to the last. The customer feels like the roll is completely packed with premium chicken."
      },
      {
        "title": "The Egg Border Frame",
        "text": "Make sure your line cook spreads the raw beaten egg out slightly on the tawa before slapping the bread down. This creates a beautiful golden egg rim around the entire border of the roll, which instantly maximizes the visual premium value of the ₹69 plate."
      },
      {
        "title": "The Master Gravy Binding Standard",
        "text": "Running your chicken filling through your pre-made Master Chilli Gravy Base handles 100% of your seasoning needs in a single stroke. It cuts your tawa assembly time down by a minute, prevents a loose sauce from leaking out of the bottom of the paper wrap, and ensures your rolls carry that exact same addictive umami flavor as your high-selling chilli starters."
      }
    ],
    "storageAndWaste": "Chicken and raw egg washes turn watery and spoil rapidly if exposed to ambient heat fluctuations on a busy street line.\n\n1. Par-Baking the Parathas\n\nNever let your line cooks roll out raw dough balls from scratch for an entry-level item during the evening rush. Semi-cook your paratha discs beforehand during afternoon prep hours. Flash them on a dry tawa for 15 seconds per side until they hold their circular shape but stay completely white. Stack them with plastic sheets or wax paper in between to stop sticking, and store covered in the line fridge. Grab, oil, and crisp them in 30 seconds flat on order.\n\n2. The Raw Prep Separation\n\nNever mix raw chicken bits with salt, fresh onions, or your master gravy ahead of time. Salt will draw out the moisture from the chicken, leaving you with dry, tough, rubbery meat bits and a watery marinade that will slide right off on the tawa.\n\nThe Line Setup: Keep your pre-chopped, raw chicken bits stored completely dry and un-salted in an airtight stainless steel container in your line chiller at 2∘C to 4∘C (holds perfectly fresh for up to 48 hours). Only scoop out a portion and combine it with the master gravy directly on the hot tawa surface when the order prints.\n\n3. Upcycling Unsold Cooked Chicken (Zero-Waste Strategy)\n\nIf your cook has pre-fried, chilli-glazed chicken filling left over on the flat-top at closing time, do not discard it.\n\nThe Chicken Szechuan Rice / Noodle Combo: Store the cooked leftover mix cold overnight. The next morning, dump this highly seasoned, smoky, sauce-heavy chicken mix directly into a screaming hot wok along with boiled rice or noodles, cabbage shreds, and a splash of vinegar. The caramelized master chilli gravy acts as your primary seasoning engine, transforming dead tawa inventory into a high-demand \"Smoky Chicken Fried Rice Combo\" for your lunch thali rush. This completely eliminates meat wastage, protecting your clear gross profit margins."
  },
  {
    "id": 117,
    "name": "Paneer Roll",
    "prices": [
      "₹69"
    ],
    "categoryId": "rolls",
    "categoryName": "Premium Rolls",
    "colorAccent": "#0c831f",
    "quickMix": "An entry-level Paneer Roll (ପନିର ରୋଲ୍) at a ₹69 retail price is an incredibly powerful sales driver. Paneer is the undis...",
    "description": "An entry-level Paneer Roll (ପନିର ରୋଲ୍) at a ₹69 retail price is an incredibly powerful sales driver. Paneer is the undisputed king of vegetarian street food. Hitting a sub-₹70 price point will guarantee a constant line at your counter, but because raw dairy blocks are expensive, it requires strict portion discipline and clever filling mechanics to protect your target margins.\n\nTo hit a sub-35% food cost without leaving the roll looking empty, you cannot use large, thick paneer slabs. You must cut your paneer into small 1 cm cubes or thin matchstick batons. This allows 50g of paneer to scatter evenly across the entire length of the paratha wrapper. To build substantial physical volume, combine the paneer with a 50:50 ratio of par-boiled crisp potato cubes, bound together perfectly using your pre-made Master Chilli Gravy.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Standard Roll (~210g total weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Maida Paratha Wrapper\t1 Pre-rolled laccha paratha base\t₹3.50",
      "Fresh Dairy Paneer\t50g net weight (Cut into 1cm small cubes)\t₹11.50",
      "Par-boiled Potato (Filler)\t40g (Diced into small 1cm cubes)\t₹1.00",
      "Diced Onion & Capsicum\t20g Crisp square cuts\t₹1.00",
      "Master Chilli Gravy Glaze\t30ml allocation (The seasoning engine)\t₹2.00",
      "Roll Salad Filler\t40g Finely sliced onions & green chillies\t₹1.50",
      "Frying Fat & Sauces\tRefined oil/vanaspati + Ketchup/Mayo drizzle\t₹4.20",
      "Packaging Wrapper\tButter paper sleeve + rubber band\t₹1.50",
      "Direct Fuel & Overhead\tTawa burner allocation\t₹2.50",
      "TOTAL PRODUCTION COST\t\t₹28.70",
      "Financial Matrix: At a ₹69 retail price, a ₹28.70 raw material cost sets your Food Cost Percentage at 41.6%. While this food cost runs slightly higher due to the premium nature of dairy, its absolute margin (₹40.30 profit per roll) combined with rapid evening turnover makes it an incredible cash-flow asset for your kitchen."
    ],
    "ingredients": [
      "The Wrapper: 1 Maida paratha disc (75g dough ball, rolled out thin with flaky oil layers).",
      "The Premium Core: 50g fresh dairy paneer, cut into uniform 1 cm small cubes.",
      "The Volume Extender: 40g par-boiled potato, diced into matching 1 cm cubes.",
      "The Crunch Vegetables: 20g diced onions and green capsicum squares.",
      "The Flavor Catalyst: 1 portion ladle (30ml) of your pre-made Master Chilli Gravy Base. (Locks in identical, savory seasoning without slowing down the line).",
      "The Crunch Salad: 1 handful of raw, paper-thin sliced onions, 2 minced green chillies, 41​ tsp chaat masala, and a squeeze of fresh lemon juice.",
      "The Finishing Drizzle: 1 tsp tomato ketchup and 1 tsp commercial eggless mayonnaise."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "To hit a fast ticket turnaround time under 90 seconds, use the split-zone method on your flat-top tawa.",
        "timerSeconds": 10
      },
      {
        "title": "Zone 1: The High-Heat Paneer & Potato Sear",
        "duration": "45 Secs",
        "detail": "Heat 1 tsp oil on the hot side of your flat tawa. Throw in your small paneer cubes, potato cubes, diced onions, and capsicum all at once. Flash-sear on high heat for exactly 45 seconds. This browns the edges of the paneer and potato quickly while keeping the vegetables snappy and vibrant.",
        "timerSeconds": 45
      },
      {
        "title": "Zone 2: The Master Gravy Glaze Lock",
        "duration": "30 Secs",
        "detail": "Ladle 30ml of your Master Chilli Gravy Base directly over the sizzling mix. Stir and flip aggressively. The intense heat will instantly dry out the liquid, forcing the rich starches in the master gravy to form a sticky, bone-dry glaze that tightly binds the paneer and potatoes together. Push it to the cool side of the tawa.",
        "timerSeconds": 30
      },
      {
        "title": "Zone 3: The Flaky Paratha Crisp",
        "duration": "60 Secs",
        "detail": "On the main section of the tawa, slap down your pre-rolled, semi-cooked kacha-pakka maida paratha sheet with a splash of oil or vanaspati. Fry for 30 seconds per side, pressing firmly until it puffs into golden, flaky layers.",
        "timerSeconds": 60
      },
      {
        "title": "Zone 4: Roll Stuffing & Packing",
        "duration": "30 Secs",
        "detail": "Transfer the hot paratha to a sheet of greaseproof wrapping paper. Arrange your hot, chilli-glazed paneer and potato filling in a straight line down the center. Top with your seasoned raw onion-chilli crunch salad. Add a clean zig-zag drizzle of ketchup and eggless mayonnaise. Roll it tightly into a cigar shape, wrap the lower half in butter paper, and serve.",
        "timerSeconds": 30
      }
    ],
    "hacks": [
      {
        "title": "The Cube-Blending Illusion",
        "text": "Cutting your par-boiled potatoes into identical 1 cm cubes that perfectly match the size of your paneer cubes is an invaluable menu engineering trick. When tossed and glazed together inside the dark crimson Master Chilli Gravy, the potatoes absorb the seasonings and blend visually with the paneer. When eating, the customer gets a dense, incredibly savory bite every time, feeling like the roll is completely packed with premium paneer chunks."
      },
      {
        "title": "The Warm Saline Soak (Soft Core Secret)",
        "text": "Refrigerated or block paneer turns rubbery instantly when fried on a dry tawa. Have your prep cooks soak the cut 1 cm paneer cubes in warm, lightly salted water for 10 minutes, then drain and pat dry before the shift. This steps keeps the paneer soft, juicy, and creamy inside the roll."
      },
      {
        "title": "The Master Gravy Edge",
        "text": "Do not let your cooks fiddle with individual sauce bottles on the line. Your pre-made master gravy holds 100% of the flavor profile, prevents a loose sauce from leaking out of the paper wrap, and ensures your paneer roll carries the exact same addictive umami flavor as your high-selling chilli starters."
      }
    ],
    "storageAndWaste": "Dairy spoils quickly and absorbs ambient refrigerator smells if left uncovered. Maintain tight station hygiene to prevent raw inventory loss:\n\n1. Par-Baking the Parathas\n\nNever let your line cooks roll out raw dough balls from scratch during peak hours. Semi-cook your paratha discs beforehand during afternoon prep hours. Flash them on a dry tawa for 15 seconds per side until they hold their circular shape but stay completely white. Stack them with sheets of wax paper or clean plastic wraps in between to stop sticking, and store covered in the line fridge. Grab, oil, and crisp them in 30 seconds flat on order.\n\n2. Bulk Mix Handling (The Salt Ban)\n\nNever add salt or your master gravy to your bulk container of diced paneer, potatoes, and vegetables ahead of time. Salt will draw out the water from the onions and capsicum, leaving you with a watery, limp mixture that will turn sour in the fridge overnight.\n\nThe Pro Setup: Keep your paneer cubes, boiled potato cubes, diced capsicum, and onions mixed together completely dry and unsalted in a stainless steel container in your line chiller at 2∘C to 4∘C (holds perfectly fresh for up to 36 hours). Only scoop out a portion and combine it with the master gravy directly on the hot live tawa surface when the order prints.\n\n3. Upcycling Unsold Cooked Filling (Zero-Waste Strategy)\n\nIf your cook has pre-fried, chilli-glazed paneer filling left over on the flat-top at closing time, do not discard it.\n\nThe Paneer Szechuan Rice / Noodle Combo: Store the cooked leftover mix cold overnight. The next morning, dump this highly seasoned, smoky, sauce-heavy paneer-potato mix directly into a screaming hot wok along with boiled rice or noodles, cabbage shreds, and a splash of vinegar. The caramelized master chilli gravy acts as your primary seasoning engine, transforming dead tawa inventory into a high-demand \"Smoky Paneer Fried Rice Combo\" for your lunch thalis. This eliminates waste entirely, protecting your clear gross profit margins."
  },
  {
    "id": 118,
    "name": "Egg Roll (Double Egg)",
    "prices": [
      "₹59"
    ],
    "categoryId": "rolls",
    "categoryName": "Premium Rolls",
    "colorAccent": "#dc2626",
    "quickMix": "A Double Egg Roll (ଡବଲ୍ ଅଣ୍ଡା ରୋଲ୍) at a ₹59 retail price is the undisputed anchor asset of any high-volume street-food ...",
    "description": "A Double Egg Roll (ଡବଲ୍ ଅଣ୍ଡା ରୋଲ୍) at a ₹59 retail price is the undisputed anchor asset of any high-volume street-food operation. It is the absolute benchmark by which street-line customers judge value. Because it contains zero meat or expensive dairy components, it boasts a highly optimized raw material cost while delivering an immediate cash-flow surge during the peak evening rush.\n\nThe commercial secret to a spectacular ₹59 Double Egg Roll lies in the physical spread. By beating two whole eggs to maximum volume and spreading them into a wide, golden canvas on the flat-top, you create an incredibly thick, heavy protein jacket that completely envelopes the paratha, allowing you to hit a sub-25% food cost with an assembly time of under 60 seconds.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Standard Jumbo Roll (~190g total weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Maida Paratha Wrapper\t1 Pre-rolled laccha paratha base\t₹3.50",
      "Wholesale Poultry Eggs\t2 Whole eggs (beaten onto the tawa)\t₹12.00",
      "Master Chilli Gravy Glaze\t25ml allocation (The seasoning engine)\t₹1.70",
      "Roll Salad Filler\t40g Finely sliced onions & green chillies\t₹1.50",
      "Frying Fat & Sauces\tRefined oil/vanaspati + Ketchup/Mayo drizzle\t₹4.20",
      "Packaging Wrapper\tButter paper sleeve + rubber band\t₹1.50",
      "Direct Fuel & Overhead\tTawa burner allocation\t₹2.50",
      "TOTAL PRODUCTION COST\t\t₹26.90",
      "Financial Matrix: At a ₹59 retail price, a ₹26.90 total production cost locks in a beautiful 45.6% Food Cost Percentage, leaving a clean 54.4% Gross Margin (₹32.10 pure profit per roll). Because this item requires zero advance meat prep or complex chopping, it functions as your fastest kitchen turnaround asset."
    ],
    "ingredients": [
      "The Wrapper: 1 Maida paratha disc (75g dough ball, rolled thin with flaky oil layers).",
      "The Double Binder: 2 whole poultry eggs.",
      "The Flavor Catalyst: 1 small portion ladle (25ml) of your pre-made Master Chilli Gravy Base. (Instead of shaking dry spices or raw sauces, splashing 25ml of your master gravy straight onto the hot egg layer caramelizes instantly, injecting deep garlic-umami notes directly into the core).",
      "The Crunch Salad: 1 handful of raw, paper-thin sliced onions, 2 minced green chillies, 41​ tsp chaat masala, and a squeeze of fresh lemon juice.",
      "The Finishing Drizzle: 1 tsp tomato ketchup and 1 tsp commercial eggless mayonnaise."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "To handle unrelenting rush-hour queues, your line cook runs a continuous assembly line on the main flat-top tawa:",
        "timerSeconds": 10
      },
      {
        "title": "Step 1: The Paratha Flash Crisp",
        "duration": "30 Secs",
        "detail": "Slap down your pre-rolled, semi-cooked kacha-pakka maida paratha sheet onto the medium-heat side of the tawa with a splash of oil or vanaspati. Fry for 15 seconds per side until it warms through, starts to blister with golden dots, and expands its layers.",
        "timerSeconds": 30
      },
      {
        "title": "Step 2: The Double-Egg Spread & Fusion",
        "duration": "30 Secs",
        "detail": "Crack 2 whole eggs into a stainless cup, beat them vigorously with a fork and a pinch of salt for 5 seconds to inject air, and pour them directly onto the screaming hot center of the tawa. Use the back of your ladle to spread the egg out to match the diameter of your paratha. Immediately slap the crisped paratha flat on top of the liquid egg. Press down firmly with a wide spatula so the egg fuses completely to the dough layers.",
        "timerSeconds": 30
      },
      {
        "title": "Step 3: The Master Gravy Glaze Sear",
        "duration": "15 Secs",
        "detail": "Flip the entire egg-paratha sheet over so the egg side faces up. Ladle 25ml of your Master Chilli Gravy Base directly over the hot, cooked egg surface and smear it rapidly with the back of the spoon. The residual tawa heat will instantly flash-caramelize the starches in the gravy, locking a rich, sticky seasoning layer onto the egg wall.",
        "timerSeconds": 15
      },
      {
        "title": "Step 4: Salad Stuffing & Wrapping",
        "duration": "20 Secs",
        "detail": "Slide the glazed double-egg paratha onto a sheet of greaseproof wrapping paper. Arrange your seasoned raw onion-chilli crunch salad down the exact center line. Add a clean, rapid zig-zag drizzle of ketchup and eggless mayonnaise. Roll it tightly into a dense cigar shape, wrap the lower half firmly in a butter paper sleeve, and hand it to the packing counter.",
        "timerSeconds": 20
      }
    ],
    "hacks": [
      {
        "title": "The Aerated Fork Beat",
        "text": "Instruct your cooks to never just crack eggs straight onto the paratha. Beating 2 whole eggs vigorously in a cup for 5 seconds introduces micro-bubbles. When this aerated mixture hits a hot, oiled flat-top, it puffs up, expanding its surface volume by 30%. This makes the egg layer look and feel twice as thick to the customer without costing you an extra paisa."
      },
      {
        "title": "The Master Gravy Application Shield",
        "text": "Smearing your pre-made Master Chilli Gravy Base directly onto the hot cooked egg surface before adding the raw onion salad is a game-changing commercial technique. The sticky, concentrated sauce acts as an anchoring glue for the raw onion shards, preventing them from tumbling out of the roll while the customer is eating it on the go."
      },
      {
        "title": "The Visual Border Frame",
        "text": "Make sure your cook spreads the raw egg layer slightly wider than the paratha base on the tawa. When the paratha is pressed down, the egg cooks into a beautiful, prominent golden-brown lace border around the entire circumference of the roll. This visual premium look justifies the ₹59 value instantly."
      }
    ],
    "storageAndWaste": "An egg roll operation has almost zero direct product wastage because raw ingredients are cracked fresh on order, but the paratha station must be optimized for speed:\n\n1. The Afternoon Par-Bake Protocol\n\nNever roll, stretch, and throw dough balls from scratch when a line of 20 customers is staring at your counter. Semi-cook your paratha discs beforehand during your afternoon prep shift. Flash them on a dry tawa for 15 seconds per side without oil until they hold their circular shape but stay completely white and soft. Stack them with sheets of wax paper or clean plastic wraps in between to stop sticking, and store covered in the line fridge. They will hold perfectly for up to 48 hours. Grab, oil, and crisp them in 30 seconds flat on live order.\n\n2. Onion Line Protection (The Acid Lock)\n\nNever mix salt into your bulk container of sliced raw onions ahead of time. Salt will draw out the water from the onions within 20 minutes, leaving you with a watery, limp, and pungent mess that will ruin the crunch of the roll filling and sour rapidly under kitchen heat. Keep your sliced onions completely dry in a perforated container. Only toss a small handful with salt, green chillies, and lemon juice in a small working bowl on the side every 30 minutes to supply the live line.\n\nWould you like me to map out a breakdown for a low-cost, refreshing Signature Mint-Yogurt Roll Spread to help differentiate your vegetarian rolls from competition, or should we continue evaluating another profitable item for your kitchen manual?"
  },
  {
    "id": 119,
    "name": "Egg Roll (Single Egg)",
    "prices": [
      "₹49"
    ],
    "categoryId": "rolls",
    "categoryName": "Premium Rolls",
    "colorAccent": "#dc2626",
    "quickMix": "A Single Egg Roll (ଅଣ୍ଡା ରୋଲ୍) at a ₹49 retail price is the most critical volume anchor and low-barrier entry point on y...",
    "description": "A Single Egg Roll (ଅଣ୍ଡା ରୋଲ୍) at a ₹49 retail price is the most critical volume anchor and low-barrier entry point on your street-line menu. Under ₹50, this item serves as a major customer magnet, driving heavy traffic to your counter during the peak evening rush.\n\nBecause it contains zero meat, dairy, or complex ingredients, it boasts your lowest absolute production cost, a sub-25% food cost percentage, and a rapid live line turnaround time of under 45 seconds.\n\nTo protect your margins at ₹49, your line cook must rely on a specific flat-top technique: maximizing the physical spread of a single egg to cover the paratha uniformly, ensuring the customer gets an egg-rich bite from end to end without needing a second egg.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Standard Roll (~160g total weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Maida Paratha Wrapper\t1 Pre-rolled laccha paratha base\t₹3.50",
      "Wholesale Poultry Egg\t1 Whole egg (beaten onto the tawa)\t₹6.00",
      "Master Chilli Gravy Glaze\t20ml allocation (The seasoning engine)\t₹1.30",
      "Roll Salad Filler\t40g Finely sliced onions & green chillies\t₹1.50",
      "Frying Fat & Sauces\tRefined oil/vanaspati + Ketchup/Mayo drizzle\t₹4.20",
      "Packaging Wrapper\tButter paper sleeve + rubber band\t₹1.50",
      "Direct Fuel & Overhead\tTawa burner allocation\t₹2.50",
      "TOTAL PRODUCTION COST\t\t₹20.50",
      "Financial Matrix: At a ₹49 retail price, a ₹20.50 total production cost delivers an incredible 41.8% Food Cost Percentage, leaving a solid 58.2% Gross Margin (₹28.50 pure profit per roll). Because the entry barrier is so low, this item functions as an exceptional cash-flow generator through pure sheet volume."
    ],
    "ingredients": [
      "The Wrapper: 1 Maida paratha disc (75g dough ball, rolled thin with flaky oil layers).",
      "The Binder: 1 whole poultry egg.",
      "The Flavor Catalyst: 1 small portion ladle (20ml) of your pre-made Master Chilli Gravy Base. (Instead of shaking dry spices or raw sauces, splashing 20ml of your master gravy straight onto the hot egg layer caramelizes instantly, injecting deep garlic-umami notes directly into the core).",
      "The Crunch Salad: 1 handful of raw, paper-thin sliced onions, 2 minced green chillies, 41​ tsp chaat masala, and a squeeze of fresh lemon juice.",
      "The Finishing Drizzle: 1 tsp tomato ketchup and 1 tsp commercial eggless mayonnaise."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "To handle heavy evening rush-hour queues, your line cook runs a continuous assembly line on the main flat-top tawa:",
        "timerSeconds": 10
      },
      {
        "title": "Step 1: The Paratha Flash Crisp",
        "duration": "20 Secs",
        "detail": "Slap down your pre-rolled, semi-cooked kacha-pakka maida paratha sheet onto the medium-heat side of the tawa with a splash of oil or vanaspati. Fry for 10 seconds per side until it warms through, starts to blister with pale-golden dots, and expands its layers.",
        "timerSeconds": 20
      },
      {
        "title": "Step 2: The Single-Egg Spread & Fusion",
        "duration": "20 Secs",
        "detail": "Crack 1 whole egg into a stainless cup, beat it vigorously with a fork and a pinch of salt for 5 seconds to inject air, and pour it directly onto the screaming hot center of the tawa. Use the back of your ladle to spread the egg out rapidly in a wide circle. Immediately slap the crisped paratha flat on top of the liquid egg. Press down firmly with a wide spatula so the single egg fuses completely to the dough layers.",
        "timerSeconds": 20
      },
      {
        "title": "Step 3: The Master Gravy Glaze Sear",
        "duration": "10 Secs",
        "detail": "Flip the entire egg-paratha sheet over so the egg side faces up. Ladle 20ml of your Master Chilli Gravy Base directly over the hot, cooked egg surface and smear it rapidly with the back of the spoon. The residual tawa heat will instantly flash-caramelize the starches in the gravy, locking a rich, sticky seasoning layer onto the egg wall.",
        "timerSeconds": 10
      },
      {
        "title": "Step 4: Salad Stuffing & Wrapping",
        "duration": "15 Secs",
        "detail": "Slide the glazed egg paratha onto a sheet of greaseproof wrapping paper. Arrange your seasoned raw onion-chilli crunch salad down the exact center line. Add a clean, rapid zig-zag drizzle of ketchup and eggless mayonnaise. Roll it tightly into a dense cigar shape, wrap the lower half firmly in a butter paper sleeve, and hand it to the packing counter.",
        "timerSeconds": 15
      }
    ],
    "hacks": [
      {
        "title": "The Aerated Fork Beat",
        "text": "Instruct your cooks to never just crack eggs straight onto the paratha. Beating 1 whole egg vigorously in a cup for 5 seconds introduces micro-bubbles. When this aerated mixture hits a hot, oiled flat-top, it puffs up, expanding its surface volume by 30%. This makes a single egg layer look and feel substantially thicker to the customer without costing you an extra paisa."
      },
      {
        "title": "The Master Gravy Application Shield",
        "text": "Smearing your pre-made Master Chilli Gravy Base directly onto the hot cooked egg surface before adding the raw onion salad is a game-changing commercial technique. The sticky, concentrated sauce acts as an anchoring glue for the raw onion shards, preventing them from tumbling out of the roll while the customer is eating it on the go."
      },
      {
        "title": "The Visual Border Frame",
        "text": "Make sure your cook spreads the raw egg layer slightly wider than the paratha base on the tawa. When the paratha is pressed down, the egg cooks into a beautiful, prominent golden-brown lace border around the entire circumference of the roll. This visual premium look justifies the ₹49 value instantly."
      }
    ],
    "storageAndWaste": "An egg roll operation has almost zero direct product wastage because raw ingredients are cracked fresh on order, but the paratha station must be optimized for speed:\n\n1. The Afternoon Par-Bake Protocol\n\nNever roll, stretch, and throw dough balls from scratch when a line of 20 customers is staring at your counter. Semi-cook your paratha discs beforehand during your afternoon prep shift. Flash them on a dry tawa for 15 seconds per side without oil until they hold their circular shape but stay completely white and soft. Stack them with sheets of wax paper or clean plastic wraps in between to stop sticking, and store covered in the line fridge. They will hold perfectly for up to 48 hours. Grab, oil, and crisp them in 30 seconds flat on live order.\n\n2. Onion Line Protection (The Acid Lock)\n\nNever mix salt into your bulk container of sliced raw onions ahead of time. Salt will draw out the water from the onions within 20 minutes, leaving you with a watery, limp, and pungent mess that will ruin the crunch of the roll filling and sour rapidly under kitchen heat. Keep your sliced onions completely dry in a perforated container. Only toss a small handful with salt, green chillies, and lemon juice in a small working bowl on the side every 30 minutes to supply the live line.\n\nWhich item on your menu are we mapping into this line system next? We can seamlessly adapt your master kitchen manual to handle the remaining appetizers or main courses to keep your margins fully protected."
  },
  {
    "id": 120,
    "name": "Chicken Corn Cheese Loaded Burger",
    "prices": [
      "₹129"
    ],
    "categoryId": "burgers-sandwiches",
    "categoryName": "Burgers & Sandwiches",
    "colorAccent": "#dc2626",
    "quickMix": "Entering the competitive burger segment with a Chicken Corn Cheese Loaded Burger (ଚିକେନ୍ କର୍ଣ୍ଣ ଚିଜ୍ ବର୍ଗର) at an aggres...",
    "description": "Entering the competitive burger segment with a Chicken Corn Cheese Loaded Burger (ଚିକେନ୍ କର୍ଣ୍ଣ ଚିଜ୍ ବର୍ଗର) at an aggressive ₹129 price point is a phenomenal way to capture the youth and delivery demographic. To the customer, a burger described as \"loaded\" with chicken, corn, and cheese carries an automatic premium expectation of a gooey, indulgent, heavy-duty meal.\n\nHowever, trying to manufacture a heavy burger using premium whole chicken breasts, sweet corn, and expensive melting mozzarella blocks at ₹129 will completely destroy your profit margins.\n\nThe commercial fast-food secret to conquering this price point is smart component engineering:\n\nThe Patty Engine: Craft a high-volume, crispy fried patty using a 60:40 mixture of ground chicken mince and par-boiled crushed sweet corn, bound with breadcrumbs and flash-fried in your 2.5L commercial deep fryer.\n\nThe Loaded Cheese Layer: Instead of expensive cheese slices or gourmet blocks that don't melt uniformly, flood the burger bun using a highly efficient dual-cheese matrix—combining a rich, high-viscosity commercial liquid cheddar sauce with a smaller sprinkle of real processed cheese shreds to provide the visual stretch.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Heavy Loaded Burger (~240g total weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Premium 4\" Sesame Burger Bun\t1 Pair (Toasted with a touch of butter)\t₹4.50",
      "Ground Chicken Mince\t50g (For the patty base)\t₹9.00",
      "Sweet Corn Kernels\t35g (20g crushed in patty + 15g whole in sauce)\t₹1.75",
      "Patty Breading Matrix\tMaida slurry + Local crisp rusk crumbs\t₹2.00",
      "Commercial Liquid Cheese Sauce\t30g (High-viscosity warm cheddar style)\t₹5.40",
      "Processed Cheese Shreds\t10g (For the premium visual dairy identity)\t₹2.50",
      "Master Chilli Gravy Drizzle\t15ml ladle allocation (The flavor profile linker)\t₹1.00",
      "Fresh Crunch Salad Filler\tShredded cabbage/lettuce + 2 onion rings\t₹1.50",
      "Frying Fat & Mayonnaise Spread\tDeep fryer oil absorption loss + bun mayo\t₹4.50",
      "Packaging Wrapper\tFood-grade burger wrap paper + sticker\t₹1.80",
      "Direct Fryer Electricity & Gas\t2000W Fryer 3.5-minute cycle + tawa heat\t₹2.50",
      "TOTAL PRODUCTION COST\t\t₹36.45",
      "Financial Matrix: At a ₹129 retail price, a ₹36.45 raw production cost delivers an outstanding 28.3% Food Cost Percentage. This locks in an exceptional 71.7% Gross Margin (₹92.55 pure profit per burger)! By embedding the corn directly into the meat patty and utilizing high-viscosity liquid cheese, you keep the bite absolutely massive while protecting your target 30% baseline cost."
    ],
    "ingredients": [
      "To hit standard kitchen line speeds during an intense evening rush, your prep team must batch-manufacture the components during afternoon hours.",
      "1. The Chicken-Corn High-Yield Patty (Yield: 20 Patties)",
      "The Mix: Combine 1 kg of raw chicken mince, 400g of par-boiled sweet corn kernels (run through a mixer for 3 seconds to form a coarse, sticky paste), 150g of fine breadcrumbs (acts as a binder and volume extender), 2 tbsp ginger-garlic paste, 1 tbsp salt, 1 tbsp white pepper powder, and 1 tbsp chicken seasoning masala.",
      "Portioning: Shape into uniform 80g round patties using a commercial burger press or ring mold. They must match the 4\" diameter of your buns perfectly.",
      "2. The Loaded Chilli-Cheese Glaze (Per Burger Line Assembly)",
      "Instead of letting your cooks layer plain, cold mayo, combine 30g of warm commercial liquid cheese sauce with a 15ml splash of your pre-made Master Chilli Gravy Base. This creates an incredible, signature Spicy Golden-Red Cheese Glaze that injects instant garlic-umami notes and balances the sweetness of the corn."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "When an order ticket for the Loaded Burger prints, your line cook executes the assembly in under 4 minutes flat:",
        "timerSeconds": 10
      },
      {
        "title": "Step 1: The Crispy Patty Deep Fry",
        "duration": "3 Mins",
        "detail": "Take a pre-formed 80g Chicken-Corn patty straight from your line cooler. Dip it into a thin maida-cornstarch slurry, roll it immediately in coarse rusk/biscuit breadcrumbs, and drop it into your 2.5L deep fryer calibrated strictly at 180∘C. Fry for exactly 3 to 3.5 minutes until the exterior armor turns an ultra-crisp, deep golden-brown.",
        "timerSeconds": 180
      },
      {
        "title": "Step 2: The Sesame Bun Toast",
        "duration": "30 Secs",
        "detail": "While the patty is frying, slice your 4\" sesame burger bun in half. Slap both sides onto a medium-heat flat tawa with a light smear of butter or oil for 20 seconds until the internal crumbs are toasted pale-brown. This forms a structural fat barrier that prevents sauces from making the bread soggy.",
        "timerSeconds": 30
      },
      {
        "title": "Step 3: The Loaded Cheese Glaze Setup",
        "duration": "20 Secs",
        "detail": "Spread 1 tsp of basic eggless mayo on the bottom bun and top with a layer of finely shredded crisp cabbage or lettuce. Lay the hot, crackling fried chicken-corn patty directly on top of the greens. Pour your 30g of liquid cheese sauce mixed with 15ml of Master Chilli Gravy straight over the hot patty surface, and scatter 15g of whole sweet corn kernels directly into the gooey cheese layer.",
        "timerSeconds": 20
      },
      {
        "title": "Step 4: The Visual Dairy Crown & Pack",
        "duration": "20 Secs",
        "detail": "Sprinkle your 10g of real processed cheese shreds straight into the hot, bubbling liquid cheese glaze—the residual heat from the fresh-fried patty will melt the shreds instantly, creating an authentic dairy-stretch appearance. Top with 2 thin raw onion rings, close the burger with the top bun, wrap tightly in food-grade greaseproof paper, and send it to the pickup counter.",
        "timerSeconds": 20
      }
    ],
    "hacks": [
      {
        "title": "The Master Gravy Integration",
        "text": "Do not let your cooks throw random hot sauces or soy drizzles onto a burger bun. Mixing a 15ml ladle shot of your pre-made Master Chilli Gravy directly into the commercial liquid cheese sauce links the entire burger flavor profile to your highest-selling starters, cutting assembly time down by a minute while guaranteeing an incredibly savory, addictive finish."
      },
      {
        "title": "The Ground Corn-Mince Binding Hack",
        "text": "Running a portion of your sweet corn through a quick blender pulse to create a thick, sticky paste before mixing it into the chicken mince is a game-changing menu engineering trick. The corn starches act as a natural, cost-free binder that locks the chicken juices inside the patty during deep frying. This prevents the chicken from shrinking or drying out in your 2.5L fryer, ensuring the patty stays thick, plump, and milky-soft."
      },
      {
        "title": "The Toasting Structural Barrier",
        "text": "Never skip toasting the interior of the burger buns on the tawa. If you apply heavy, loaded liquid cheese sauce directly to a cold, un-toasted bun surface, the bread will act like a sponge, absorbing the liquid and turning into a soggy, collapsing mess within a 15-minute home delivery window. Toasting creates a sealed, crispy crust that preserves the burger's shape perfectly."
      }
    ],
    "storageAndWaste": "Because you are dealing with raw poultry mince mixed with sugar-rich sweet corn, strict refrigeration hygiene is mandatory to achieve an absolute zero-waste operation.\n\n1. The Patty Freeze-Store Protocol\n\nNever leave pre-formed raw chicken-corn patties sitting at room temperature on your assembly line. Within an hour, the corn will begin to ferment and weep sugar moisture, turning the meat sour and breaking down the patty's structure.\n\nThe Pro Setup: Once your prep team shapes the 80g patties during the afternoon, arrange them in a single layer on a plastic tray lined with greaseproof wax paper. Stack the trays up, wrap them tightly in plastic cling wrap, and store them directly in your deep freezer at −18∘C. They will hold perfectly fresh for up to 30 days with zero quality loss.\n\nThe Line Pull: At the start of the evening shift, move only 15–20 frozen patties down to your line refrigerator chiller (2∘C to 4∘C) to thaw slightly for immediate frying access. This keeps your main backup stock completely safe from thermal shock.\n\n2. Upcycling Leftover Cooked Buns & Patties (Zero-Waste Strategy)\n\nIf you have a fried chicken-corn patty left over at closing time due to a canceled delivery or staff over-cooking, do not discard it.\n\nThe Loaded Chicken-Corn Loaded Fries Garnish: Store the cooked patty cold overnight. The next afternoon, coarsely chop the cold fried patty into small, bite-sized popcorn nuggets. Re-flash them in your 2.5L deep fryer at 180∘C for just 60 seconds to restore the crispiness. Scatter these crunchy chicken-corn chunks directly over a standard plate of budget-friendly French fries, flood the plate with a ladle of your liquid cheese/master chilli gravy mix, and sell it as a premium \"Loaded Cheesy Chicken-Corn Street Fries\" special for ₹149. This completely salvages your ingredient costs, transforming dead inventory into 100% pure profit!\n\nWhich item on your menu are we mapping into this standardized line system next? We can seamlessly evaluate your remaining main courses or appetizers to ensure your kitchen operations stay fast, consistent, and highly profitable."
  },
  {
    "id": 121,
    "name": "KitKat Choco Chips Burger (Dessert Special)",
    "prices": [
      "₹129"
    ],
    "categoryId": "burgers-sandwiches",
    "categoryName": "Burgers & Sandwiches",
    "colorAccent": "#0c831f",
    "quickMix": "An sweet dessert item like a KitKat Choco Chips Burger (କିଟ୍‌କାଟ୍ ଚକୋ ଚିପ୍ସ ବର୍ଗର) at a ₹129 price point is a brilliant,...",
    "description": "An sweet dessert item like a KitKat Choco Chips Burger (କିଟ୍‌କାଟ୍ ଚକୋ ଚିପ୍ସ ବର୍ଗର) at a ₹129 price point is a brilliant, high-margin strategic addition to your evening menu. In the quick-service fast-food space, sweet desserts are massive triggers for impulse buying, especially among teenagers, college groups, and children who want a sweet finish after eating a savory roll or a spicy chilli starter.\n\nHowever, trying to manufacture a complex dessert burger using premium, high-cost whole chocolate blocks or gourmet baking ingredients at ₹129 will quickly destroy your target margins.\n\nThe commercial fast-food secret to conquering this dessert spot is high-yield component engineering:\n\nThe Sweet \"Patty\" Illusion: Instead of using an expensive baked chocolate cake layer, create a massive, crunchy dessert core using an ultra-low-cost, high-yield base made of crushed crispy local glucose biscuits bound with cheap cocoa powder, sweet condensed milk, and a handful of real choco chips. This mixture is pressed into a burger mold and chilled.\n\nThe KitKat Premium Identity: You do not need to stuff multiple whole bars of KitKat inside the bun. Use just one standard 3-finger KitKat bar (sliced into small bits) arranged strategically around the outer rim of the burger layer. This ensures the customer visually sees and bites into the iconic crunchy wafer, while the inner volume is completely filled by your high-yielding, dense biscuit-chocolate matrix.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Heavy Dessert Burger (~210g total weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Premium 4\" Sweet / Sesame Bun\t1 Pair (Toasted on clean tawa with butter)\t₹4.50",
      "High-Yield Choco Patty Base\t60g (Crushed biscuit + cocoa + condensed milk)\t₹7.00",
      "Premium Dark Choco Chips\t15g (10g inside patty base + 5g top garnish)\t₹3.50",
      "Standard Commercial KitKat Bar\t1 Bar (3-finger size, chopped into bits)\t₹15.00",
      "Commercial Chocolate Syrup\t20ml ladle allocation (Hershey style glaze)\t₹3.00",
      "Sweet White Whipped Cream\t25g (The cooling dairy matrix / lettuce layer)\t₹3.00",
      "Direct Frying Oil / Bun Fat\tButter / Vanaspati for tawa toasting\t₹1.50",
      "Packaging & Burger Box\tPremium dessert wrapping paper + box\t₹3.50",
      "Direct Line Electricity & Gas\tTawa heating + line refrigeration overhead\t₹1.50",
      "TOTAL PRODUCTION COST\t\t₹42.50",
      "Financial Matrix: At a ₹129 retail price, a ₹42.50 total raw production cost delivers an exceptional 32.9% Food Cost Percentage. This locks in an outstanding 67.1% Gross Margin (₹86.50 pure profit per burger)! Because this dessert requires absolutely zero deep-fryer space (leaving your 2.5L fryer completely free to pump out high-volume savory starters), it functions as an exceptional, hassle-free revenue driver on the cold-prep assembly line."
    ],
    "ingredients": [
      "To maintain lighting-fast ticket turnarounds during an intense evening rush, your kitchen prep team must batch-manufacture the chocolate components during afternoon down hours.",
      "1. The Crunchy Dark Choco Patty (Yield: 20 Patties)",
      "The Mix: Finely crush 800g of low-cost sweet glucose biscuits into a sandy powder. Combine it with 150g of standard commercial cocoa powder, 350g of sweet condensed milk, 200g of premium dark choco chips, and a splash of milk or melted fat to bind. Knead until it forms a dense, glossy, pliable chocolate dough.",
      "Portioning: Divide into uniform 60g round portions. Press them firmly inside a standard 4\" burger ring mold to shape them into flat, even chocolate discs. Wrap them in sheets of butter paper and store them inside your refrigerator chiller line to firm up.",
      "2. The Dairy \"Lettuce\" Layer",
      "Do not use actual green lettuce or savory vegetables here. Use a cheap, high-yield non-dairy sweet whipping cream (the type used for bakery cakes). Whip it to stiff peaks during afternoon prep and store it in a plastic piping bag in the fridge. This acts as your cool, velvety base layer that mimics burger mayonnaise while balancing the heavy sweetness of the dark chocolate."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "Because this item requires zero deep-frying, your cold-prep line cook can assemble and plate a fresh KitKat Dessert Burger in under 90 seconds flat:",
        "timerSeconds": 10
      },
      {
        "title": "Step 1: The Sweet Bun Fat-Seal Toast",
        "duration": "30 Secs",
        "detail": "Slice your 4\" burger bun cleanly in half. Slap both halves onto a medium-heat flat tawa with a light smear of unsalted butter or oil for 20 seconds until the internal crumbs turn crisp and light golden-brown. This step is mandatory: the toasted crust forms a firm structural fat barrier that stops the wet chocolate syrup and whipped cream from melting directly into the bread crumbs and turning the bun soggy.",
        "timerSeconds": 30
      },
      {
        "title": "Step 2: The Whipped Cream Cool Bed",
        "duration": "25 Secs",
        "detail": "Place the hot, toasted bottom bun onto your dessert wrapping paper. Pipe a thick, uniform spiral bed of your cold whipped cream (25g) directly over the warm bread crumb base. This cream layer mimics the visual weight of burger mayonnaise while adding massive physical height to the plate.",
        "timerSeconds": 25
      },
      {
        "title": "Step 3: The Crunch Choco Patty Drop",
        "duration": "15 Secs",
        "detail": "Take a cold, pre-formed 60g Choco Biscuit Patty disc straight from your line cooler and drop it directly onto the bed of white whipped cream. Drizzle a heavy 10ml ladle shot of chocolate syrup directly over the chocolate patty surface to form a high-gloss, premium looking glaze.",
        "timerSeconds": 15
      },
      {
        "title": "Step 4: The KitKat Premium Border & Crown",
        "duration": "20 Secs",
        "detail": "Take your chopped KitKat bar pieces and arrange them in a dense circle right around the outer rim of the chocolate patty so the wafer bits are prominently visible from the sides of the burger. Scatter your remaining 5g of dark choco chips into the center, drizzle the final 10ml of chocolate syrup in a clean zig-zag pattern, close with the top bun, and slide it instantly into a premium dessert box.",
        "timerSeconds": 20
      }
    ],
    "hacks": [
      {
        "title": "The Sweet Fat-Sealing Hack",
        "text": "Never skip toasting the internal crumbs of your dessert burger buns with butter on the tawa. If your cook applies heavy, liquid chocolate syrup and light whipped cream directly to a cold, un-toasted bun surface, the soft bread will act like a giant sponge. It will absorb the liquids instantly, turning into a wet, collapsing, unappealing mush within a 15-minute delivery rider's journey. Toasting locks the shape of the burger perfectly."
      },
      {
        "title": "The Visual Outer-Rim Placement Rule",
        "text": "Instruct your line cook to never bury the chopped KitKat bar pieces deep inside the center of the chocolate dough patty. If hidden inside, the customer cannot visually identify why they paid ₹129 for a specialty item. By arranging the chopped KitKat pieces strictly along the outer circumference of the bun layer, the wafer fingers stick out clearly, instantly making the burger look highly premium, loaded, and social-media ready."
      },
      {
        "title": "The Zero-Fryer Operational Clearance",
        "text": "Because this special dessert burger is built entirely out of cold, pre-baked, and par-chilled afternoon components, it requires absolute zero deep-fryer oil or hot wok line space during peak evening rush hours. This allows your main hot station cooks to stay 100% focused on blasting out high-margin Chilli Prawn, Chilli Chicken, and Egg Rolls without creating a bottleneck in the kitchen."
      }
    ],
    "storageAndWaste": "Because you are dealing with stabilized bakery whipped creams and biscuit-based chocolate doughs, this item boasts the lowest ingredient degradation risk on your entire evening menu, allowing you to run a near-perfect zero-waste line.\n\n1. The Chocolate Patty Cold Protocol\n\nNever leave pre-formed 60g chocolate biscuit patties sitting out on a warm kitchen shelf near your wok burners. While they do not spoil like raw poultry or fresh dairy paneer, the kitchen heat will melt the internal fats and sugar matrices, causing the patties to turn soft, sticky, and lose their neat, round circular shape.\n\nThe Station Setup: Keep your pre-formed, paper-wrapped chocolate patties stacked neatly in an airtight plastic container deep inside your line chiller at 2∘C to 4∘C. Under this strict cold seal, the biscuit starches hold their moisture perfectly, staying rich, crunchy, and fresh for up to 7 days with absolutely zero quality loss. Only pull out a single disc the exact moment an order ticket buzzes.\n\n2. Upcycling Unsold Dessert Stock (Zero-Waste Strategy)\n\nIf you have pre-formed chocolate biscuit patties or leftover chopped KitKat bits remaining at closing time that are approaching their shelf limit, do not discard them.\n\nThe Premium KitKat Choco-Chips Thick Shake Up-sell: The next afternoon, take your cold leftover 60g chocolate burger patty and any broken KitKat bar crumbs, and drop them straight into a commercial blender jar. Add 150ml of chilled milk, 1 scoop of budget vanilla ice cream, and a heavy squirt of chocolate syrup. Blend on high speed for 30 seconds to create an ultra-thick, rich, premium \"Loaded KitKat Choco-Chips Shake\" that you can feature on your afternoon beverage menu for ₹119. This completely salvages your raw ingredient investments, ensuring you extract 100% pure commercial profit from every gram of inventory!\n\nYour evening fast-food menu manual—covering high-volume savory rolls, precise deep-fried starters running through a single master-gravy system, crispy loaded burgers, and premium dessert specials—is now fully optimized for maximum ticket speed, ironclad portion control, and elite profit protection.\n\nWould you like us to review the layout of your kitchen line stations to minimize the foot movement of your cooks during peak rush hours, or should we break down a pricing matrix for a refreshing beverage tier next?"
  },
  {
    "id": 122,
    "name": "Chicken Burger",
    "prices": [
      "₹99"
    ],
    "categoryId": "burgers-sandwiches",
    "categoryName": "Burgers & Sandwiches",
    "colorAccent": "#dc2626",
    "quickMix": "Introducing a classic Chicken Burger (ଚିକେନ୍ ବର୍ଗର) at a crisp ₹99 price point gives your menu a massive volume driver. ...",
    "description": "Introducing a classic Chicken Burger (ଚିକେନ୍ ବର୍ଗର) at a crisp ₹99 price point gives your menu a massive volume driver. At under ₹100, this is a psychologically powerful entry-level item that captures budget-conscious students and fast-paced evening commuters who want a quick, filling alternative to a chicken roll.\n\nTo protect your margins and hit a sub-30% food cost at this aggressive price point, you must avoid expensive pre-formed commercial patties. Instead, your prep team will batch-manufacture an ultra-high-yield 70g crispy chicken patty using fresh chicken mince and a smart crumb binder, flash-frying it to order in your 2.5L electric deep fryer.\n\nBy layering this crispy patty with a signature mayo blend laced with your Master Chilli Gravy Base, you give this budget burger an addictive, premium street-style punch.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Standard Burger (~190g total weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Standard 4\" Sesame Burger Bun\t1 Pair (Toasted on flat tawa with butter)\t₹3.50",
      "Ground Chicken Mince\t50g (For the patty core)\t₹9.00",
      "Patty Volume Extender & Breading\t15g Breadcrumbs / Rusk powder + Maida slurry\t₹2.00",
      "Master Chilli Gravy Mayo Spread\t20g (Eggless mayo mixed with 5ml Master Gravy)\t₹2.50",
      "Fresh Crunch Salad Filler\t25g Finely shredded crisp cabbage + 2 onion rings\t₹1.20",
      "Commercial Frying Oil\tDeep fryer absorption loss (Palm/Rice Bran)\t₹2.50",
      "Packaging & Wrapper\tFood-grade burger wrap paper + sticker\t₹1.50",
      "Direct Fryer Electricity & Gas\t2000W Fryer 3-minute cycle + tawa heat\t₹2.00",
      "TOTAL PRODUCTION COST\t\t₹24.20",
      "Financial Matrix: At a ₹99 retail price, a ₹24.20 raw production cost delivers a spectacular 24.4% Food Cost Percentage! This locks in a massive 75.6% Gross Margin (₹74.80 pure profit per burger). Because the entry cost is exceptionally low, this burger stands out as one of the most profitable non-veg assets on your entire line."
    ],
    "ingredients": [
      "To maintain lightning-fast line speeds during the evening rush, your prep team must batch-manufacture and portion the patties during afternoon down hours.",
      "The Street-Style Crispy Chicken Patty (Yield: 20 Patties)",
      "The Meat Matrix: Combine 1 kg of raw chicken mince, 200g of fine breadcrumbs (acts as a moisture-locking volume binder), 2 tablespoons of ginger-garlic paste, 1 tablespoon of salt, 1 tablespoon of black pepper powder, and 1 tablespoon of garam masala or chicken seasoning powder.",
      "Portioning: Knead the mixture thoroughly and shape it into uniform 60g to 65g round patties using a 4\" ring mold or commercial burger press. Ensure they are pressed flat so they fry uniformly to the core. Once breaded, they will sit at a substantial 70g+ operational weight."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "When an order ticket for a ₹99 Chicken Burger prints, your line cook executes the assembly in under 3.5 minutes flat:",
        "timerSeconds": 10
      },
      {
        "title": "Step 1: The Crispy Patty Deep Fry",
        "duration": "3 Mins",
        "detail": "Take a pre-formed chicken patty straight from your line cooler. Dip it into a thin maida-cornstarch slurry, roll it immediately in coarse local rusk/biscuit crumbs, and drop it into your 2.5L deep fryer calibrated strictly at 180∘C. Fry for exactly 3 minutes until the exterior shell sets into an ultra-crisp, deep golden-brown armor. Lift and drain for 10 seconds.",
        "timerSeconds": 180
      },
      {
        "title": "Step 2: The Sesame Bun Toast",
        "duration": "20 Secs",
        "detail": "While the patty is frying, slice your 4\" sesame burger bun in half. Slap both halves onto a medium-heat flat tawa with a light smear of butter or oil for 20 seconds until the internal crumbs turn crisp and pale golden-brown. This step is mandatory: the toasted crust forms a firm structural fat barrier that stops the mayonnaise and chicken juices from making the bread soggy.",
        "timerSeconds": 20
      },
      {
        "title": "Step 3: The Master Mayo Layering",
        "duration": "15 Secs",
        "detail": "Place the hot, toasted bottom bun onto your greaseproof wrapping paper. Spread a heavy 20g layer of your House Chilli Mayo (commercial eggless mayo pre-blended with a 5ml dash of your Master Chilli Gravy Base). This introduces a sharp garlic-umami heat that links the burger flavor profile directly to your high-selling starters. Top with a neat pile of finely shredded crisp cabbage.",
        "timerSeconds": 15
      },
      {
        "title": "Step 4: The Final Assembly & Pack",
        "duration": "15 Secs",
        "detail": "Lay the fresh-fried, hot crispy chicken patty directly over the bed of shredded cabbage. Top the patty with 2 thin raw onion rings and a quick squeeze of tomato ketchup. Close the burger firmly with the top bun, wrap it tightly in food-grade wrapping paper to lock in the structural shape, and pass it to the pickup counter.",
        "timerSeconds": 15
      }
    ],
    "hacks": [
      {
        "title": "The Master Gravy Mayo Blend",
        "text": "Do not buy expensive specialty burger sauces. Simply mix a small 5ml splash of your pre-made Master Chilli Gravy Base into 15g of standard, low-cost commercial eggless mayonnaise. The cornstarch, dark soy, and garlic elements inside your master gravy transform the plain mayo into a high-end, deeply savory signature burger spread that local street food lovers will instantly crave."
      },
      {
        "title": "The Fine-Shred Cabbage Volume Trick",
        "text": "Avoid expensive, volatile lettuce leaves that turn black and slimy within hours inside a hot kitchen line. Use finely shredded green cabbage instead. When packed tightly onto the bottom bun, shredded cabbage creates massive physical height and a crisp, clean crunch that holds its structure perfectly during delivery rides."
      },
      {
        "title": "The Tawa-Toasted Moisture Guard",
        "text": "Never use cold, un-toasted buns. If you apply heavy mayonnaise and a hot chicken patty directly onto a cold bun, the soft bread crumb acts like a giant sponge. It will absorb the liquids instantly, turning into a wet, collapsing mush within a 15-minute home delivery window. Toasting creates a sealed, crunchy barrier that protects your burger's structural integrity."
      }
    ],
    "storageAndWaste": "Because you are dealing with raw poultry mince, strict temperature control is your only defense against product spoilage and raw material loss.\n\n1. The Patty Freeze-Store Protocol\n\nNever leave raw chicken patties sitting out on your assembly line counters. Kitchen heat will cause the chicken mince to purge its moisture, breaking down the binder matrix and making the patty fall apart inside your 2.5L fryer oil.\n\nThe Pro Setup: Once your prep team shapes the patties during the afternoon, arrange them in a single layer on plastic trays lined with greaseproof wax paper. Stack the trays, wrap them tightly in plastic cling wrap, and store them directly in your deep freezer at −18∘C. They will hold perfectly fresh for up to 30 days. At the start of the evening shift, move only 15–20 patties down to your line chiller (2∘C to 4∘C) for rapid operational access, keeping your bulk backup completely safe from thermal shock.\n\n2. Upcycling Leftover Cooked Inventory (Zero-Waste Strategy)\n\nIf you have a fried chicken patty left over at closing time due to a canceled delivery order or staff over-cooking, do not discard it.\n\nThe Chicken Chow Mein / Rice Shred Garnish: Store the cooked patty cold overnight. The next morning, remove the outer breading and use a sharp knife to shred the cold chicken patty core into thin strips. Toss these seasoned chicken shreds directly into a high-heat wok line along with boiled noodles or rice, shredded cabbage, onions, and a splash of soy sauce. The seasoned chicken mince blends seamlessly into the starch base, allowing you to sell a premium \"Chicken Hakka Chow Mein\" or \"Chicken Fried Rice\" for your lunch thali crowd, salvages 100% of your ingredient costs, and protects your clear profit margins!"
  },
  {
    "id": 123,
    "name": "Veg Cheese Corn Burger",
    "prices": [
      "₹99"
    ],
    "categoryId": "burgers-sandwiches",
    "categoryName": "Burgers & Sandwiches",
    "colorAccent": "#0c831f",
    "quickMix": "An entry-level Veg Cheese Corn Burger (ଭେଜ୍ ଚିଜ୍ କର୍ଣ୍ଣ ବର୍ଗର) at a ₹99 price point is a high-volume vegetarian champion...",
    "description": "An entry-level Veg Cheese Corn Burger (ଭେଜ୍ ଚିଜ୍ କର୍ଣ୍ଣ ବର୍ଗର) at a ₹99 price point is a high-volume vegetarian champion. Offering a combination of sweet corn and gooey cheese for under a hundred rupees is a massive psychological trigger for college students and evening snack hunters who want an indulgent, premium bite without breaking a ₹100 note.\n\nThe commercial challenge here is managing dairy costs. Trying to fill a ₹99 burger with expensive, thick mozzarella or processed cheese slices will wipe out your margins.\n\nThe fast-food secret to protecting your sub-30% food cost is a high-yield matrix: combine your sweet corn with mashed potatoes to form a dense, crispy Veg-Corn Patty, and flood the bun using a cost-effective, high-viscosity commercial liquid cheese sauce paired with a small top-garnish of real processed cheese shreds for the visual dairy identity.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Standard Burger (~200g total weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Standard 4\" Sesame Burger Bun\t1 Pair (Toasted on flat tawa with butter)\t₹3.50",
      "Par-boiled Potato Patty Base\t40g (The high-yield volume filler)\t₹1.00",
      "Sweet Corn Kernels\t25g (15g inside patty + 10g whole in sauce layer)\t₹1.25",
      "Diced Veggies (Capsicum/Onion)\t15g Finely minced bits inside patty\t₹0.75",
      "Patty Breading & Slurry\tMaida-cornstarch dip + Local rusk crumbs\t₹2.00",
      "Commercial Liquid Cheese Sauce\t25g (High-viscosity cheddar style)\t₹4.50",
      "Processed Cheese Shreds\t8g (For the premium visual dairy identity)\t₹2.00",
      "Master Chilli Gravy Mayo Spread\t15g (Eggless mayo mixed with 5ml Master Gravy)\t₹2.20",
      "Fresh Crunch Salad Filler\t25g Finely shredded crisp cabbage + 2 onion rings\t₹1.20",
      "Frying Fat & Absorption\tDeep fryer absorption loss (Palm/Rice Bran)\t₹2.50",
      "Packaging & Wrapper\tFood-grade burger wrap paper + sticker\t₹1.50",
      "Direct Power & Overhead\tFryer + Wok burner operation\t₹2.00",
      "TOTAL PRODUCTION COST\t\t₹24.40",
      "Financial Matrix: At a ₹99 retail price, a ₹24.40 raw production cost delivers an incredible 24.6% Food Cost Percentage! This locks in a massive 75.4% Gross Margin (₹74.60 pure profit per burger). Because the raw ingredients (potatoes and sweet corn) are highly budget-friendly, this burger stands out as a pure cash-flow generator."
    ],
    "ingredients": [
      "To maintain lighting-fast line speeds during the evening rush, your prep team must batch-manufacture and shape the patties during afternoon down hours.",
      "The Sweet Corn & Potato Patty (Yield: 20 Patties)",
      "The Mix: Mash 1 kg of 70% par-boiled potatoes (cooled beforehand to firm up the starches). Combine with 300g of par-boiled sweet corn kernels (run 100g through a blender for 3 seconds to form a sticky paste that acts as a natural binder), 100g of finely minced onions and capsicum, 100g of breadcrumbs, 1 tbsp ginger-garlic paste, 1 tbsp salt, and 1 tbsp chaat masala or mix-veg seasoning.",
      "Portioning: Shape into uniform 65g round patties using a 4\" ring mold. Once coated in a thin maida slurry and rolled in coarse local rusk crumbs, the ready-to-fry weight sits at a substantial 75g+."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "When an order ticket for a ₹99 Veg Cheese Corn Burger prints, your line cook executes the assembly in under 3.5 minutes flat:",
        "timerSeconds": 10
      },
      {
        "title": "Step 1: The Crispy Patty Deep Fry",
        "duration": "2.5 Mins",
        "detail": "Take a pre-formed Veg-Corn patty straight from your line cooler. Drop it into your 2.5L deep fryer calibrated strictly at 180∘C. Fry for exactly 2.5 minutes until the outer crust turns ultra-crisp and turns a beautiful golden-brown. Lift and drain for 10 seconds.",
        "timerSeconds": 300
      },
      {
        "title": "Step 2: The Sesame Bun Toast",
        "duration": "20 Secs",
        "detail": "While the patty is frying, slice your 4\" sesame burger bun in half. Slap both halves onto a medium-heat flat tawa with a light smear of butter or oil for 20 seconds until the internal crumbs turn crisp and pale golden-brown. This step is mandatory: the toasted crust forms a firm structural fat barrier that stops the liquid cheese and mayonnaise from turning the bread into a soggy mess.",
        "timerSeconds": 20
      },
      {
        "title": "Step 3: The Master Mayo & Sauce Layering",
        "duration": "15 Secs",
        "detail": "Place the hot, toasted bottom bun onto your greaseproof wrapping paper. Spread a heavy 15g layer of your House Chilli Mayo (commercial eggless mayo pre-blended with a 5ml dash of your Master Chilli Gravy Base). Top with a neat pile of finely shredded crisp cabbage. Lay the fresh-fried, hot crispy veg patty directly over the greens.",
        "timerSeconds": 15
      },
      {
        "title": "Step 4: The Loaded Cheese Flood & Pack",
        "duration": "15 Secs",
        "detail": "Pour your 25g of liquid cheese sauce straight over the hot patty surface, scatter 10g of whole sweet corn kernels directly into the sauce, and sprinkle your 8g of real processed cheese shreds on top. The residual heat from the fresh-fried patty will melt the shreds instantly, creating an authentic dairy-stretch appearance. Top with 2 thin raw onion rings, close with the top bun, wrap tightly in food-grade paper, and serve.",
        "timerSeconds": 15
      }
    ],
    "hacks": [
      {
        "title": "The Master Gravy Mayo Blend",
        "text": "Do not buy expensive specialty burger sauces. Simply mix a small 5ml splash of your pre-made Master Chilli Gravy Base into 10g of standard, low-cost commercial eggless mayonnaise. The cornstarch, dark soy, and garlic elements inside your master gravy transform the plain mayo into a high-end, deeply savory signature burger spread that local street food lovers will instantly crave."
      },
      {
        "title": "The Part-Crush Corn Patty Hack",
        "text": "Running a portion of your sweet corn through a quick blender pulse to create a thick, sticky paste before mixing it into the potato base is a game-changing menu engineering trick. The corn starches act as a natural, cost-free binder that locks the potato patty together during deep frying. This prevents the patty from breaking apart or absorbing excess grease inside your 2.5L fryer, keeping it light, crisp, and uniform."
      },
      {
        "title": "The Liquid-to-Solid Cheese Trick",
        "text": "Block mozzarella or cheddar is highly expensive and loses its moisture rapidly on a hot kitchen line, turning rubbery. Using a commercial liquid cheese sauce gives you massive volume, high heat resistance, and a consistently smooth, gooey mouthfeel at a fraction of the cost. The small 8g sprinkle of real processed cheese shreds at the final assembly stage provides the visual proof the customer expects when they open the burger wrap."
      }
    ],
    "storageAndWaste": "Because you are dealing with moisture-heavy par-boiled potatoes and sugar-rich sweet corn, strict refrigeration hygiene is mandatory to achieve an absolute zero-waste operation.\n\n1. The Patty Freeze-Store Protocol\n\nNever leave pre-formed raw potato-corn patties sitting at room temperature on your assembly line. Within an hour, the corn will begin to weep sugar moisture, turning the potato mixture sour and loose, causing the patty to burst open inside your deep fryer oil.\n\nThe Pro Setup: Once your prep team shapes the patties during the afternoon, arrange them in a single layer on plastic trays lined with greaseproof wax paper. Stack the trays up, wrap them tightly in plastic cling wrap, and store them directly in your deep freezer at −18∘C. They will hold perfectly fresh for up to 30 days with zero quality loss. Move only 15–20 patties to your line fridge at the start of the shift for live orders.\n\n2. Upcycling Leftover Cooked Inventory (Zero-Waste Strategy)\n\nIf you have a fried veggie-corn patty left over at closing time due to a canceled delivery or staff over-cooking, do not discard it.\n\nThe Loaded Veggie Street Fries Garnish: Store the cooked patty cold overnight. The next afternoon, coarsely chop the cold fried patty into small, bite-sized nuggets. Re-flash them in your 2.5L deep fryer at 180∘C for just 60 seconds to restore the crispiness. Scatter these crunchy veggie-corn chunks directly over a standard plate of budget-friendly French fries, flood the plate with a ladle of your liquid cheese/master chilli gravy mix, and sell it as a premium \"Loaded Cheesy Veggie-Corn Street Fries\" special for ₹139. This completely salvages your ingredient costs, transforming dead inventory into 100% pure profit!"
  },
  {
    "id": 124,
    "name": "Veg Burger",
    "prices": [
      "₹69"
    ],
    "categoryId": "burgers-sandwiches",
    "categoryName": "Burgers & Sandwiches",
    "colorAccent": "#0c831f",
    "quickMix": "An entry-level Veg Burger (ଭେଜ୍ ବର୍ଗର) at a sharp ₹69 price point is the ultimate low-barrier customer magnet for your b...",
    "description": "An entry-level Veg Burger (ଭେଜ୍ ବର୍ଗର) at a sharp ₹69 price point is the ultimate low-barrier customer magnet for your burger station. Positioned under ₹70, this item serves as a massive traffic driver for school and college students, matching the exact pricing of your premium veg rolls.\n\nThe commercial key to winning at ₹69 is speed and simplicity. By utilizing a high-yield, potato-based Aloo Tikki Patty enhanced with budget-friendly green peas and carrots, and layering it with a signature house mayo, you achieve a lighting-fast assembly time of under 3 minutes and lock in a sub-25% food cost percentage.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Standard Burger (~170g total weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Standard 4\" Sesame Burger Bun\t1 Pair (Toasted on flat tawa with oil/butter)\t₹3.50",
      "Par-boiled Potato Patty Base\t50g (The high-yield volume anchor)\t₹1.25",
      "Boiled Green Peas & Carrots\t15g (Finely mashed mix for color & identity)\t₹0.50",
      "Patty Breading & Slurry\tMaida-cornstarch slurry dip + Local rusk crumbs\t₹1.50",
      "Master Chilli Gravy Mayo Spread\t15g (Eggless mayo mixed with 5ml Master Gravy)\t₹2.20",
      "Fresh Crunch Salad Filler\t25g Finely shredded crisp cabbage + 2 onion rings\t₹1.20",
      "Frying Fat & Oil Loss\tDeep fryer absorption loss (Palm/Rice Bran)\t₹2.00",
      "Packaging & Wrapper\tFood-grade burger wrap paper + sticker\t₹1.50",
      "Direct Power & Overhead\tFryer + Tawa operation overhead\t₹1.50",
      "TOTAL PRODUCTION COST\t\t₹15.15",
      "Financial Matrix: At a ₹69 retail price, a ₹15.15 total production cost delivers an outstanding 22.0% Food Cost Percentage! This locks in a spectacular 78.0% Gross Margin (₹53.85 pure profit per burger). Because potatoes and seasonal root veggies carry an incredibly low baseline wholesale cost, this burger is your highest-margin vegetarian asset by percentage."
    ],
    "ingredients": [
      "To guarantee rapid ticket turnarounds during intense evening rush hours, your prep team must batch-manufacture and shape the patties during afternoon down hours.",
      "The Classic Crispy Aloo Veg Patty (Yield: 25 Patties)",
      "The Mix: Mash 1.25 kg of 70% par-boiled potatoes (must be fully cooled in the fridge beforehand to lock the starches and eliminate moisture). Knead in 350g of a par-boiled green peas and finely minced carrot mix, 100g of breadcrumbs (moisture-locking volume extender), 2 tbsp ginger-garlic paste, 1.5 tbsp salt, 1 tbsp red chilli powder, and 1 tbsp garam masala.",
      "Portioning: Shape into uniform 65g round patties using a standard 4\" burger ring mold. Ensure they are pressed completely flat to guarantee rapid frying straight to the core."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "When an order ticket for a ₹69 Veg Burger prints, your line cook executes the assembly sequence in under 150 seconds flat:",
        "timerSeconds": 10
      },
      {
        "title": "Step 1: The Crispy Tikki Deep Fry",
        "duration": "2 Mins",
        "detail": "Take a pre-formed classic veg patty straight from your line cooler. Drop it directly into your 2.5L deep fryer calibrated strictly at 180∘C. Fry for exactly 2 minutes until the outer rusk shell locks into a hard, ultra-crisp, deep golden armor. Lift the basket and drain for 10 seconds.",
        "timerSeconds": 120
      },
      {
        "title": "Step 2: The Bun Tawa Toast",
        "duration": "20 Secs",
        "detail": "While the patty is flash-frying, slice your burger bun in half. Slap both halves onto a medium-heat flat tawa with a quick smear of oil or butter for 20 seconds until the internal crumbs turn crisp and pale brown. Never skip this: the toasted crust forms a firm structural barrier that stops sauces from making the bread soggy.",
        "timerSeconds": 20
      },
      {
        "title": "Step 3: The Master Mayo & Crunch Bed",
        "duration": "15 Secs",
        "detail": "Place the hot, toasted bottom bun onto your greaseproof wrapping paper. Spread a heavy 15g layer of your House Chilli Mayo (low-cost commercial eggless mayo pre-blended with a 5ml dash of your Master Chilli Gravy Base). Top with a neat pile of finely shredded crisp cabbage.",
        "timerSeconds": 15
      },
      {
        "title": "Step 4: The Core Stack & Wrap",
        "duration": "15 Secs",
        "detail": "Lay the hot, crackling fried veg patty directly over the shredded cabbage bed. Top with 2 thin raw onion rings and a quick, clean zig-zag drizzle of tomato ketchup. Close the burger firmly with the top bun, wrap tightly in paper to lock in the structural shape, and pass it to the runner.",
        "timerSeconds": 15
      }
    ],
    "hacks": [
      {
        "title": "The Master Gravy Mayo Blend",
        "text": "Do not spend money on branded, premium burger sauces. Simply mix a small 5ml splash of your pre-made Master Chilli Gravy Base into 10g of standard commercial eggless mayonnaise. The cornstarch, garlic, and dark soy elements inside your master gravy transform the plain mayo into a deeply savory, signature street-style burger spread that keeps customers hooked."
      },
      {
        "title": "The Cold-Potato Starch Lock",
        "text": "Never use freshly boiled, warm potatoes to shape your burger patties. Warm potatoes hold excessive moisture and behave loosely on a hot line, causing the patty to absorb grease like a sponge and crack open inside your deep fryer. Boil your potatoes to exactly 70% doneness the afternoon prior, and store them in your chiller overnight. The cooling process recrystallizes the starches, making the patty incredibly firm, clean-cutting, and crisp."
      },
      {
        "title": "The Cabbage Over Lettuce Rule",
        "text": "Avoid volatile lettuce leaves that wilt, turn slimy, and go to waste rapidly on a hot street line. Finely shredded green cabbage costs next to nothing, creates a massive visual lift and physical height on the bun, and maintains its satisfying, snappy crunch even through long delivery journeys."
      }
    ],
    "storageAndWaste": "Because potato-based items are highly stable when frozen but turn sour rapidly if exposed to stagnant ambient heat, strict storage discipline is required.\n\n1. The Patty Freeze-Store Protocol\n\nNever leave pre-formed raw potato patties sitting out on your assembly line counters. Within an hour, the starches will break down, turning the patty soft and causing it to melt into your deep fryer oil.\n\nThe Pro Setup: Once your prep team shapes the patties during the afternoon, arrange them in a single layer on plastic trays lined with greaseproof wax paper. Stack the trays up, wrap them tightly in plastic cling wrap, and store them directly in your deep freezer at −18∘C. They will hold perfectly fresh for up to 30 days with zero quality loss. Move only 15–20 patties to your line fridge chiller at the start of the shift for live orders.\n\n2. Upcycling Leftover Cooked Inventory (Zero-Waste Strategy)\n\nIf you have a fried veg patty left over at closing time due to a canceled delivery or staff over-cooking, do not discard it.\n\nThe Veg Burger Patty Keema Wrap: Store the cooked patty cold overnight. The next afternoon, use a spatula to coarsely mash the cold fried potato patty directly on your flat-top tawa. Toss it with a 20ml ladle of your Master Chilli Gravy Base, a handful of sliced onions, and fresh green chillies for 45 seconds until steaming hot. Wrap this highly seasoned, smoky aloo-keema mixture inside a standard paratha sheet to sell as a flash \"Street Special Aloo Masala Roll\" for ₹49. This completely salvages your ingredient costs, transforming a dead asset into 100% pure profit!\n\nYour entire quick-service evening menu manual—spanning high-speed master-gravy starters, standardized color-wrapper dumplings, high-margin flaky rolls, crispy loaded burgers, and impulse dessert specials—is now completely dialed in for peak operational efficiency, ironclad portion control, and max profit protection.\n\nWould you like me to map out a standardized framework for your kitchen's daily opening and closing inventory sheets to track these exact protein and dairy portions, or should we focus on another area of your brand?"
  },
  {
    "id": 125,
    "name": "Chocolate Blast Sandwich",
    "prices": [
      "₹99"
    ],
    "categoryId": "burgers-sandwiches",
    "categoryName": "Burgers & Sandwiches",
    "colorAccent": "#0c831f",
    "quickMix": "Running the Chocolate Blast Sandwich (ଚକୋଲେଟ୍ ବ୍ଲାଷ୍ଟ୍ ସ୍ୟାଣ୍ଡୱିଚ୍) at a ₹99 retail price through a high-powered Sujata ...",
    "description": "Running the Chocolate Blast Sandwich (ଚକୋଲେଟ୍ ବ୍ଲାଷ୍ଟ୍ ସ୍ୟାଣ୍ଡୱିଚ୍) at a ₹99 retail price through a high-powered Sujata 2000W commercial griller completely changes your kitchen line speed.\n\nUnlike a flat-top tawa, a 2000W contact griller cooks from the top and bottom simultaneously under heavy spring-loaded pressure. This cuts your execution time in half, completely liquefies the chocolate core into a molten river, and locks the outer bread crumbs into an ultra-crisp, deep-grooved grid pattern that looks highly premium.\n\nBecause a contact griller applies aggressive top-down heat, you must adjust the filling assembly defensively. If you use loose, thin chocolate syrup inside, the 2000W element will boil it instantly, causing it to rupture through the bread crust and burn onto the griller plates.\n\nBy utilizing a dense high-viscosity commercial chocolate paste combined with dark chocolate chips and a crunch-layer of crushed chocolate glucose biscuits, you create a stable core that melts perfectly without leaking.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Standard Sandwich cut into 4 quarters (~180g total weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Jumbo White Sandwich Bread\t2 Slices (Premium soft crumb)\t₹4.00",
      "Commercial Chocolate Paste/Spread\t35g (High-viscosity bakery style)\t₹6.50",
      "Premium Dark Choco Chips\t15g (Inside core for rich texture)\t₹3.50",
      "Crushed Choco Biscuit Layer\t15g (Provides internal crunch & structural height)\t₹1.00",
      "Commercial Chocolate Syrup\t15ml ladle allocation (Top garnish glaze)\t₹2.25",
      "Dairy Butter / Vanaspati\t12g (For uniform griller plate lubrication)\t₹2.80",
      "Packaging & Window Box\tGreaseproof inner wrap + cardboard window box\t₹3.50",
      "Direct Griller Power & Overhead\tSujata 2000W 90-second cycle allocation\t₹1.20",
      "TOTAL PRODUCTION COST\t\t₹24.75",
      "Financial Matrix: At a ₹99 retail price, a ₹24.75 raw production cost yields a spectacular 25.0% Food Cost Percentage! This locks in an outstanding 75.0% Gross Margin (₹74.25 pure profit per sandwich). Because this runs entirely in the Sujata griller, it requires zero space in your 2.5L deep fryer or wok line, allowing you to maximize output during the evening rush."
    ],
    "ingredients": [
      "The Carbs: 2 slices of Jumbo-sized white sandwich bread. (Jumbo bread provides a larger footprint that fills out the Sujata griller plates and ensures the sandwich doesn't look squashed or tiny when cut into 4 quarters).",
      "The Molten Core: 35g commercial dark chocolate spread.",
      "The Textural Identity: 15g dark chocolate chips.",
      "The Volume Extender: 15g coarsely crushed chocolate glucose biscuits (like Bourbon or Oreo crumbs).",
      "The Toasting Agent: 12g salted dairy butter or high-grade vanaspati.",
      "The Finishing Garnish: 15ml commercial chocolate syrup (Hershey-style) + 1 tsp icing sugar for dusting."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "To guarantee rapid ticket turnarounds under 2 minutes, keep your Sujata 2000W griller pre-heated and set to 180∘C to 190∘C throughout the evening shift.",
        "timerSeconds": 10
      },
      {
        "title": "Step 1: The Bread Internal Spread",
        "duration": "30 Secs",
        "detail": "Lay 2 jumbo bread slices flat on your clean prep table. Evenly apply 35g of chocolate spread across both internal faces from edge to edge. Scatter 15g of dark chocolate chips and 15g of coarsely crushed chocolate biscuits over one slice. Close the sandwich firmly and press down slightly to lock the components in place.",
        "timerSeconds": 30
      },
      {
        "title": "Step 2: The 2000W Dual-Plate Blast",
        "duration": "90 Secs",
        "detail": "Brush a light layer of butter (approx. 4g) directly onto the top and bottom plates of the pre-heated Sujata griller. Place the sandwich in the center. Brush the remaining butter on the top slice of bread. Lower the heavy griller lid and clamp it down securely. Cook for exactly 75 to 90 seconds—do not open the lid early. The 2000W dual plates will rapidly toast the exterior crumbs into an ultra-crisp mahogany armor while blasting heat into the core to liquefy the chips.",
        "timerSeconds": 90
      },
      {
        "title": "Step 3: The Precision Quarter Cut",
        "duration": "15 Secs",
        "detail": "Lift the griller lid, slide the smoking hot, grid-marked sandwich out onto a clean cutting board using a heat-resistant spatula. Using a sharp serrated bread knife, execute two clean diagonal cuts to slice the sandwich into 4 uniform, triangular quarters. The cuts will reveal a glossy, molten chocolate river core.",
        "timerSeconds": 15
      },
      {
        "title": "Step 4: The Visual Garnish & Pack",
        "duration": "30 Secs",
        "detail": "Arrange the 4 sandwich quarters standing upright or tiled on their side inside your window packaging box so the molten seams face the customer. Drizzle 15ml of chocolate syrup in a rapid zig-zag pattern over the top grids, dust with a tiny pinch of icing sugar for a premium bakery finish, and hand it to the runner.",
        "timerSeconds": 30
      }
    ],
    "hacks": [
      {
        "title": "The 2000W Core Rupture Shield",
        "text": "Contact grillers operating at 2000W transfer heat with intense efficiency. If your cook applies loose, watery chocolate syrup inside the sandwich bread crumbs, it will reach boiling point in 20 seconds, steam up aggressively, burst the bread seams, and scorch onto your griller plates, creating a bitter smoke that ruins your kitchen ambiance. Stick strictly to the thick chocolate paste and solid choco-chips matrix; it holds its shape perfectly until it undergoes a controlled melt."
      },
      {
        "title": "The Crushed Biscuit Height Trick",
        "text": "Under the heavy weight of a commercial griller lid, standard white bread can compress into a thin, flat sheet. Adding 15g of coarsely crushed chocolate biscuits inside the core acts as a structural pillar. It prevents the jumbo bread from collapsing completely under the heavy griller plates, ensures the sandwich retains a thick, premium profile, and adds an addictive cookie-crunch to the molten filling."
      },
      {
        "title": "Edge-to-Edge Spread Rule",
        "text": "Instruct your cooks to spread the chocolate paste completely to the outermost crust lines of the bread slices. Because the griller seals the outer borders of the sandwich tightly, any area left without spread will turn into dry, compressed cardboard texture. Every bite from the tip to the outer crust must be intensely chocolatey."
      }
    ],
    "storageAndWaste": "Because this sandwich relies entirely on ambient-stable commercial chocolate spreads and dry biscuits, it carries your kitchen line's lowest inventory decay risk.\n\n1. Griller Plate Hygiene Maintenance\n\nThe aggressive heat of the Sujata griller can cause residual butter or stray chocolate syrup drops on the plates to carbonize into black ash over a 4-hour shift. If left uncleaned, this bitter residue will transfer onto the next sandwich, ruining its appearance. Instruct your line cook to wipe down the griller plates with a clean, damp cloth or brass wire brush after every 5 orders. Never use sharp metal scrapers or knives on the plates, as it strips away the non-stick coating.\n\n2. Biscuit Crush Management\n\nHave your afternoon prep team crush 1 kg of chocolate biscuits into a coarse rubble size. Store this dry mix in a clear, airtight plastic container with a dedicated 15g portion scoop. This allows your line cooks to assemble orders with absolute portion accuracy in under 30 seconds without creating a bottleneck at the dessert station.\n\n3. Upcycling Leftover Cooked Components (Zero-Waste Strategy)\n\nIf you have jumbo bread slices that are approaching their expiration date or loaves that have sustained surface damage, do not discard them.\n\nThe Chocolate Blast Fried Sundae Garnish: Cut the damaged bread slices into tiny 1 cm cubes. Drop them directly into your 2.5L deep fryer at 180∘C for 60 seconds until they turn into ultra-crunchy dessert croutons. Toss these hot croutons in a steel bowl with leftover chocolate syrup and a handful of choco chips. Serve this warm, crispy, chocolate-soaked crunch-mix over a scoop of basic vanilla ice cream as a premium \"Crunchy Choco-Bread Sundae\" for ₹119. This converts potential waste bread into immediate, high-margin revenue!\n\nWhich item on your menu are we mapping into this high-speed commercial line system next? We can seamlessly evaluate your remaining sandwiches or loaded burger options to keep your operations running at maximum efficiency."
  },
  {
    "id": 126,
    "name": "Paneer Corn Cheese Sandwich",
    "prices": [
      "₹79"
    ],
    "categoryId": "burgers-sandwiches",
    "categoryName": "Burgers & Sandwiches",
    "colorAccent": "#0c831f",
    "quickMix": "Running your premium Paneer Corn Cheese Sandwich (ପନିର କର୍ଣ୍ଣ ଚିଜ୍ ସ୍ୟାଣ୍ଡୱିଚ୍) at a ₹79 retail price through a high-pow...",
    "description": "Running your premium Paneer Corn Cheese Sandwich (ପନିର କର୍ଣ୍ଣ ଚିଜ୍ ସ୍ୟାଣ୍ଡୱିଚ୍) at a ₹79 retail price through a high-powered Sujata 2000W commercial griller completely changes your kitchen line speed.\n\nUnlike a flat-top tawa, a contact griller cooks from the top and bottom simultaneously under heavy spring-loaded pressure. This cuts your execution time in half, completely melts the internal cheese into a gooey layer, and locks the outer bread crumbs into an ultra-crisp, deep-grooved grid pattern that looks highly premium.\n\nBecause a contact griller applies aggressive top-down pressure, you must adjust the filling assembly defensively. If you use loose, watery sauces inside, the 2000W element will squeeze them right out through the bread seams, burning onto your griller plates and making a mess.\n\nBy flash-searing your ingredients on a tawa first to create a thick, sticky paneer-corn-cheese paste, you create a stable core that handles the intense griller pressure without leaking.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Standard Sandwich cut into 4 quarters (~190g total weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Standard White Sandwich Bread\t2 Slices (Premium soft crumb)\t₹3.50",
      "Fresh Dairy Paneer\t30g (Cut into tiny 5mm cubes)\t₹7.00",
      "Sweet Corn Kernels\t25g (Par-boiled, sweet profile)\t₹1.25",
      "Diced Veggies (Capsicum/Onion)\t20g Crisp, small square cuts\t₹1.00",
      "Commercial Liquid Cheese Sauce\t25g (High-viscosity cheddar/jalpeño style)\t₹4.50",
      "Processed Cheese Shreds\t8g (For the visual top-garnish stretch)\t₹2.00",
      "Master Chilli Gravy Seasoning\t10ml allocation (The flavor profile linker)\t₹0.70",
      "Dairy Butter / Vanaspati\t10g (For uniform griller plate lubrication)\t₹2.50",
      "Packaging Wrapper\tGreaseproof inner wrap + paper pouch/box\t₹2.50",
      "Direct Griller Power & Overhead\tSujata 2000W 90-second cycle allocation\t₹1.20",
      "TOTAL PRODUCTION COST\t\t₹26.15",
      "Financial Matrix: At a ₹79 retail price, a ₹26.15 total production cost locks in an excellent 33.1% Food Cost Percentage, leaving a solid 66.9% Gross Margin (₹52.85 pure profit per sandwich)."
    ],
    "ingredients": [
      "The Carbs: 2 slices of standard-sized white sandwich bread.",
      "The Dairy Core: 30g fresh paneer, diced meticulously into tiny 5 mm cubes.",
      "The Sweet Crunch: 25g par-boiled sweet corn kernels.",
      "The Aromatics: 20g finely diced green capsicum and onions.",
      "The Dual-Cheese Matrix: 25g commercial liquid cheese sauce (provides the thick, savory moisture base) and 8g shredded processed cheese (provides the premium visual stringy identity).",
      "The Flavor Catalyst: 1 small portion splash (10ml) of your pre-made Master Chilli Gravy Base. (Adding a touch of chilli gravy introduces garlic, soy, and heat, cutting through the heavy dairy fats so the sandwich stays intensely savory).",
      "The Toasting Agent: 10g salted dairy butter or high-grade vanaspati for a crackling exterior."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "To guarantee rapid ticket turnarounds under 2 minutes, keep your Sujata 2000W griller pre-heated and set to 180∘C to 190∘C throughout the evening shift.",
        "timerSeconds": 10
      },
      {
        "title": "Step 1: The Core Filling Flash Tawa Sear",
        "duration": "30 Secs",
        "detail": "Heat a tiny drop of oil on the high-heat side of your flat tawa. Throw in your 5 mm paneer cubes, sweet corn, diced capsicum, and onions all at once. Flash-sear on high heat for 15 seconds. Ladle over 10ml of Master Chilli Gravy and your 25g of liquid cheese sauce. Stir vigorously for 15 seconds until it forms a thick, bubbling, sticky paste. Push it to the cool side of the tawa.",
        "timerSeconds": 30
      },
      {
        "title": "Step 2: Internal Spread & Stuff",
        "duration": "15 Secs",
        "detail": "Lay 2 fresh bread slices on your prep board. Scoop the hot, cheesy paneer-corn filling directly onto one slice, spreading it evenly edge-to-edge. Scatter the 8g of processed cheese shreds directly over the hot filling so they begin melting from the residual steam. Close the sandwich firmly.",
        "timerSeconds": 15
      },
      {
        "title": "Step 3: The 2000W Dual-Plate Blast",
        "duration": "75 Secs",
        "detail": "Brush a light layer of butter (approx. 3g) directly onto the top and bottom plates of the pre-heated Sujata griller. Place the sandwich in the center. Brush the remaining butter on the top slice of bread. Lower the heavy griller lid and clamp it down securely. Cook for exactly 60 to 75 seconds—do not open the lid early. The 2000W dual plates will rapidly toast the exterior crumbs into an ultra-crisp mahogany armor while blasting heat into the core to melt the processed shreds.",
        "timerSeconds": 75
      },
      {
        "title": "Step 4: The Quarter Cut & Pack",
        "duration": "15 Secs",
        "detail": "Lift the griller lid, slide the smoking hot, grid-marked sandwich out onto a clean cutting board. Using a sharp serrated knife, make two rapid diagonal cuts to slice it into 4 uniform, triangular quarters. Arrange them upright inside your packaging wrapper so the gooey, golden paneer-cheese seams face the customer, and serve.",
        "timerSeconds": 15
      }
    ],
    "hacks": [
      {
        "title": "The 2000W Pressure Shield",
        "text": "Contact grillers operating at 2000W transfer heat and apply downward force with intense efficiency. If your cook applies loose, un-cooked sauces inside the sandwich bread, it will squeeze out of the seams, burning onto your griller plates and creating a bitter smoke. Running the filling through the tawa flash-sear stage for 30 seconds cooks out excess moisture and binds it into a thick paste that holds its shape under pressure."
      },
      {
        "title": "The Mini-Cube Particle Spread",
        "text": "Never use thick slabs or large chunks of paneer in a toasted sandwich. Large chunks cause the bread to lift unevenly, leaving un-toasted white cold spots on your bread wrapper. By dicing your paneer into tiny 5 mm mini-cubes, the dairy particles suspend perfectly inside the liquid cheese sauce, distributing evenly across the entire surface area. The customer gets a dense, satisfying bite of paneer and corn in every mouthful."
      },
      {
        "title": "Edge-to-Edge Spread Rule",
        "text": "Instruct your cooks to spread the filling completely to the outermost crust lines of the bread slices. Because the griller seals the outer borders of the sandwich tightly under pressure, any area left without filling will turn into dry, compressed cardboard texture. Every bite from the tip to the outer crust must be intensely flavorful."
      }
    ],
    "storageAndWaste": "Dairy components and par-boiled corn spoil or ferment rapidly if exposed to stagnant moisture and heat fluctuations on a live street line.\n\n1. Griller Plate Hygiene Maintenance\n\nThe aggressive heat of the Sujata griller can cause residual butter or stray cheese drops on the plates to carbonize into black ash over a 4-hour shift. If left uncleaned, this bitter residue will transfer onto the next sandwich, ruining its appearance. Instruct your line cook to wipe down the griller plates with a clean, damp cloth or brass wire brush after every 5 orders. Never use sharp metal scrapers or knives on the plates, as it strips away the non-stick coating.\n\n2. The Pre-Mix Station Setup (The Moisture Ban)\n\nNever mix your liquid cheese sauce or salt into your bulk line container of paneer and corn ahead of time. Salt will draw out water from the onions and capsicum, leaving you with a watery, sour mixture that will turn thin and ruin your bread crumbs.\n\nThe Pro Setup: Keep your pre-cut 5 mm paneer cubes, par-boiled sweet corn, diced capsicum, and onions mixed together completely dry and unsalted inside an airtight stainless steel container in your line chiller at 2∘C to 4∘C (holds perfectly fresh for up to 36 hours). Only scoop out a portion and combine it with the cheese sauce and master gravy directly on the hot live tawa surface when the order prints. This cuts raw material waste to absolute zero.\n\n3. Upcycling Leftover Cooked Filling (Zero-Waste Strategy)\n\nIf your cook has pre-fried, cheesy paneer-corn filling left over on the flat-top at closing time due to a canceled order, do not discard it.\n\nThe Premium Cheesy Chinese Bao / Roll Stuffing: Store the cooked cheesy paneer-corn paste cold overnight. The next afternoon, this dense, highly seasoned mixture can be used as a high-margin premium stuffing for an afternoon \"Veg Cheese Corn Masala Roll\" (priced at ₹59) or mixed directly into boiled noodles to create a special \"Cheesy Paneer Corn Hakka Noodles\" lunch bowl. This ensures you salvage 100% of your food cost investment, turning potential waste into pure profit!\n\nWhich item on your menu are we mapping into this high-speed commercial line system next? We can seamlessly evaluate your remaining dishes to ensure your kitchen operations stay fast, consistent, and highly profitable."
  },
  {
    "id": 127,
    "name": "Paneer Sandwich",
    "prices": [
      "₹65"
    ],
    "categoryId": "burgers-sandwiches",
    "categoryName": "Burgers & Sandwiches",
    "colorAccent": "#0c831f",
    "quickMix": "Running your entry-level Paneer Sandwich (ପନିର ସ୍ୟାଣ୍ଡୱିଚ୍) at a ₹65 retail price point through a high-powered Sujata 20...",
    "description": "Running your entry-level Paneer Sandwich (ପନିର ସ୍ୟାଣ୍ଡୱିଚ୍) at a ₹65 retail price point through a high-powered Sujata 2000W commercial griller completely optimizes your kitchen line speed.\n\nUnlike cooking on a flat-top tawa, a contact griller cooks from the top and bottom simultaneously under heavy spring-loaded pressure. This cuts your execution time down to just 60 seconds, completely locking the outer bread crumbs into an ultra-crisp, deep-grooved grid pattern that looks highly premium while maintaining a sub-35% food cost percentage.\n\nBecause a contact griller applies aggressive top-down pressure, you must adjust the filling assembly defensively. If you use loose, watery sauces inside, the 2000W element will squeeze them right out through the bread seams, burning onto your griller plates. By flash-binding the ingredients on a hot tawa with a blend of commercial eggless mayo and a splash of your Master Chilli Gravy Base, you create a stable, thick paste that handles the intense griller pressure without leaking.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Standard Sandwich cut into 4 quarters (~175g total weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Standard White Sandwich Bread\t2 Slices (Premium soft crumb)\t₹3.50",
      "Fresh Dairy Paneer\t45g net weight (Cut into tiny 5mm cubes)\t₹10.35",
      "Diced Veggies (Capsicum/Onion)\t25g Crisp, small square cuts\t₹1.00",
      "Master Chilli Gravy Mayo Binder\t20g (Eggless mayo mixed with 5ml Master Gravy)\t₹2.50",
      "Dairy Butter / Vanaspati\t10g (For uniform griller plate lubrication)\t₹2.50",
      "Packaging & Paper Pouch\tGreaseproof wrapper paper sleeve\t₹1.50",
      "Direct Griller Power & Overhead\tSujata 2000W 60-second cycle allocation\t₹1.10",
      "TOTAL PRODUCTION COST\t\t₹22.45",
      "Financial Matrix: At a ₹65 retail price, a ₹22.45 raw production cost delivers an excellent 34.5% Food Cost Percentage! This locks in a highly profitable 65.5% Gross Margin (₹42.55 pure profit per sandwich). Running entirely through the Sujata griller, this item bypasses your deep fryer completely, keeping your kitchen lines moving at maximum capacity."
    ],
    "ingredients": [
      "The Carbs: 2 slices of standard-sized white sandwich bread.",
      "The Protein Core: 45g fresh dairy paneer, meticulously cut into uniform 5mm small cubes.",
      "The Crunch Aromatics: 25g finely diced green capsicum and onions.",
      "The Flavor Catalyst & Binder: 20g of House Chilli Mayo (commercial eggless mayo pre-blended with a 5ml dash of your Master Chilli Gravy Base). (This eliminates the need for your cooks to shake multiple dry spice jars or individual sauce bottles during peak hours).",
      "The Toasting Agent: 10g salted dairy butter or high-grade vanaspati for a perfectly golden crust."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "To guarantee rapid ticket turnarounds under 2 minutes, keep your Sujata 2000W griller pre-heated and set to 180∘C to 190∘C throughout the evening shift.",
        "timerSeconds": 10
      },
      {
        "title": "Step 1: The Quick Paneer & Veg Tawa Bind",
        "duration": "20 Secs",
        "detail": "Heat a tiny drop of oil on the high-heat side of your flat tawa. Throw in your 5mm paneer cubes, diced onions, and capsicum all at once. Flash-sear on high heat for exactly 10 seconds. Add your 20g of House Chilli Mayo (pre-mixed with Master Chilli Gravy). Stir rapidly with your spatula for 10 seconds until the sauce bubbles and forms a thick, uniform coating that tightly binds the ingredients together. Push it to the cool side of the tawa.",
        "timerSeconds": 20
      },
      {
        "title": "Step 2: The Core Stuffing Layer",
        "duration": "15 Secs",
        "detail": "Lay 2 fresh bread slices on your clean prep table. Scoop the hot, savory paneer-veg mixture directly onto one slice, spreading it evenly from edge to edge. Close the sandwich firmly, pressing down slightly to lock the filling in place.",
        "timerSeconds": 15
      },
      {
        "title": "Step 3: The 2000W Dual-Plate Blast",
        "duration": "60 Secs",
        "detail": "Brush a light layer of butter (approx. 3g) directly onto the top and bottom plates of the pre-heated Sujata griller. Place the sandwich in the center. Brush the remaining butter on the top slice of bread. Lower the heavy griller lid and clamp it down securely. Cook for exactly 50 to 60 seconds—do not open the lid early. The 2000W dual plates will rapidly toast the exterior crumbs into an ultra-crisp mahogany armor.",
        "timerSeconds": 60
      },
      {
        "title": "Step 4: The Quarter Cut & Pack",
        "duration": "15 Secs",
        "detail": "Lift the griller lid, slide the smoking hot, grid-marked sandwich out onto a clean cutting board. Using a sharp serrated knife, make two rapid diagonal cuts to slice it into 4 uniform, triangular quarters. Arrange them neatly inside your greaseproof paper pouch so the savory paneer seams face outward, and serve instantly.",
        "timerSeconds": 15
      }
    ],
    "hacks": [
      {
        "title": "The 2000W Pressure Shield",
        "text": "Contact grillers operating at 2000W transfer heat and apply downward force with intense efficiency. If your cook applies loose, un-cooked mayo or raw sauces inside the sandwich bread, it will squeeze right out of the seams, burning onto your griller plates and creating a bitter smoke. Running the filling through the tawa flash-sear stage for 20 seconds cooks out excess moisture and binds it into a thick paste that holds its shape under pressure."
      },
      {
        "title": "The 5mm Particle Spread Hack",
        "text": "Never use thick slabs or large chunks of paneer in a budget toasted sandwich. Large chunks cause the bread to lift unevenly, leaving un-toasted, cold white patches on your bread wrapper. By dicing your paneer into tiny 5mm mini-cubes, the particles suspend perfectly inside the mayo binder, distributing evenly across the entire surface area. The customer gets a dense, satisfying bite of paneer in every single mouthful."
      },
      {
        "title": "Edge-to-Edge Spread Rule",
        "text": "Instruct your cooks to spread the filling completely to the outermost crust lines of the bread slices. Because the griller seals the outer borders of the sandwich tightly under pressure, any area left without filling will turn into dry, compressed cardboard texture. Every bite from the tip to the outer crust must be intensely flavorful."
      }
    ],
    "storageAndWaste": "Dairy components turn sour and spoil rapidly if exposed to stagnant ambient heat or humidity fluctuations on a live street line.\n\n1. Griller Plate Hygiene Maintenance\n\nThe aggressive heat of the Sujata griller can cause residual butter or stray sauce drops on the plates to carbonize into black ash over a 4-hour shift. If left uncleaned, this bitter residue will transfer onto the next sandwich, ruining its appearance. Instruct your line cook to wipe down the griller plates with a clean, damp cloth or brass wire brush after every 5 orders. Never use sharp metal scrapers or knives on the plates, as it strips away the non-stick coating.\n\n2. The Pre-Mix Station Setup (The Moisture Ban)\n\nNever mix your house chilli mayo spread or salt into your bulk line container of paneer and vegetables ahead of time. Salt will draw out the water from the onions and capsicum, leaving you with a watery, limp mixture that will turn thin and ruin the crispness of your bread crumbs.\n\nThe Pro Setup: Keep your pre-cut 5mm paneer cubes, diced capsicum, and onions mixed together completely dry and unsalted inside an airtight stainless steel container in your line chiller at 2∘C to 4∘C (holds perfectly fresh for up to 36 hours). Only scoop out a portion and combine it with the mayo binder directly on the hot live tawa surface when the order prints. This cuts raw material waste to absolute zero.\n\n3. Upcycling Leftover Cooked Filling (Zero-Waste Strategy)\n\nIf your cook has pre-fried, chilli-glazed paneer filling left over on the flat-top at closing time due to a canceled order or staff over-cooking, do not discard it.\n\nThe Paneer Szechuan Fried Rice Extender: Store the cooked leftover mixture cold overnight. The next morning, dump this highly seasoned, savory paneer-veg mix directly into a screaming hot wok along with boiled rice or noodles, fresh cabbage shreds, and a splash of vinegar. The caramelized master chilli gravy elements inside the mix act as an exceptional flavor engine, transforming dead tawa inventory into a high-demand \"Veg Paneer Fried Rice Combo\" for your lunch thali crowd. This ensures you salvage 100% of your food cost investment, turning potential waste into pure profit!\n\nWhich item on your menu are we mapping into this high-speed commercial line system next? We can seamlessly evaluate your remaining sandwiches or loaded burger options to keep your operations running at maximum efficiency."
  },
  {
    "id": 128,
    "name": "Paneer Corn Sandwich",
    "prices": [
      "₹65"
    ],
    "categoryId": "burgers-sandwiches",
    "categoryName": "Burgers & Sandwiches",
    "colorAccent": "#0c831f",
    "quickMix": "Running your entry-level Paneer Corn Sandwich (ପନିର କର୍ଣ୍ଣ ସ୍ୟାଣ୍ଡୱିଚ୍) at a ₹65 retail price point through a high-power...",
    "description": "Running your entry-level Paneer Corn Sandwich (ପନିର କର୍ଣ୍ଣ ସ୍ୟାଣ୍ଡୱିଚ୍) at a ₹65 retail price point through a high-powered Sujata 2000W commercial griller completely optimizes your kitchen line speed.\n\nUnlike cooking on a flat-top tawa, a contact griller cooks from the top and bottom simultaneously under heavy spring-loaded pressure. This cuts your execution time down to just 60 seconds, completely locking the outer bread crumbs into an ultra-crisp, deep-grooved grid pattern that looks highly premium while maintaining an excellent sub-35% food cost percentage.\n\nBecause a contact griller applies aggressive top-down pressure, you must adjust the filling assembly defensively. If you use loose, watery sauces inside, the 2000W element will squeeze them right out through the bread seams, burning onto your griller plates. By flash-binding the ingredients on a hot tawa with a blend of commercial eggless mayo and a splash of your Master Chilli Gravy Base, you create a stable, thick paste that handles the intense griller pressure without leaking.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Standard Sandwich cut into 4 quarters (~180g total weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Standard White Sandwich Bread\t2 Slices (Premium soft crumb)\t₹3.50",
      "Fresh Dairy Paneer\t30g net weight (Cut into tiny 5mm cubes)\t₹6.90",
      "Sweet Corn Kernels\t20g (Par-boiled, sweet profile)\t₹1.00",
      "Diced Veggies (Capsicum/Onion)\t20g Crisp, small square cuts\t₹1.00",
      "Master Chilli Gravy Mayo Binder\t20g (Eggless mayo mixed with 5ml Master Gravy)\t₹2.50",
      "Dairy Butter / Vanaspati\t10g (For uniform griller plate lubrication)\t₹2.50",
      "Packaging & Paper Pouch\tGreaseproof wrapper paper sleeve\t₹1.50",
      "Direct Griller Power & Overhead\tSujata 2000W 60-second cycle allocation\t₹1.10",
      "TOTAL PRODUCTION COST\t\t₹20.00",
      "Financial Matrix: At a ₹65 retail price, a ₹20.00 raw production cost delivers an outstanding 30.7% Food Cost Percentage! This locks in a spectacular 69.3% Gross Margin (₹45.00 pure profit per sandwich). Running entirely through the Sujata griller, this item bypasses your deep fryer completely, keeping your kitchen lines moving at maximum capacity."
    ],
    "ingredients": [
      "The Carbs: 2 slices of standard-sized white sandwich bread.",
      "The Protein Core: 30g fresh dairy paneer, cut meticulously into uniform 5mm small cubes.",
      "The Sweet Crunch: 20g par-boiled sweet corn kernels.",
      "The Aromatics: 20g finely diced green capsicum and onions.",
      "The Flavor Catalyst & Binder: 20g of House Chilli Mayo (commercial eggless mayo pre-blended with a 5ml dash of your Master Chilli Gravy Base).",
      "The Toasting Agent: 10g salted dairy butter or high-grade vanaspati for a perfectly golden crust."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "To guarantee rapid ticket turnarounds under 2 minutes, keep your Sujata 2000W griller pre-heated and set to 180∘C to 190∘C throughout the evening shift.",
        "timerSeconds": 10
      },
      {
        "title": "Step 1: The Core Filling Flash Tawa Bind",
        "duration": "20 Secs",
        "detail": "Heat a tiny drop of oil on the high-heat side of your flat tawa. Throw in your 5mm paneer cubes, sweet corn, diced onions, and capsicum all at once. Flash-sear on high heat for 10 seconds. Add your 20g of House Chilli Mayo (pre-mixed with Master Chilli Gravy). Stir rapidly with your spatula for 10 seconds until the sauce bubbles and forms a thick, sticky coating that tightly binds the ingredients together. Push it to the cool side of the tawa.",
        "timerSeconds": 20
      },
      {
        "title": "Step 2: The Core Stuffing Layer",
        "duration": "15 Secs",
        "detail": "Lay 2 fresh bread slices on your clean prep table. Scoop the hot, savory paneer-corn mixture directly onto one slice, spreading it evenly from edge to edge. Close the sandwich firmly, pressing down slightly to lock the filling in place.",
        "timerSeconds": 15
      },
      {
        "title": "Step 3: The 2000W Dual-Plate Blast",
        "duration": "60 Secs",
        "detail": "Brush a light layer of butter (approx. 3g) directly onto the top and bottom plates of the pre-heated Sujata griller. Place the sandwich in the center. Brush the remaining butter on the top slice of bread. Lower the heavy griller lid and clamp it down securely. Cook for exactly 50 to 60 seconds—do not open the lid early. The 2000W dual plates will rapidly toast the exterior crumbs into an ultra-crisp mahogany armor.",
        "timerSeconds": 60
      },
      {
        "title": "Step 4: The Quarter Cut & Pack",
        "duration": "15 Secs",
        "detail": "Lift the griller lid, slide the smoking hot, grid-marked sandwich out onto a clean cutting board. Using a sharp serrated knife, make two rapid diagonal cuts to slice it into 4 uniform, triangular quarters. Arrange them neatly inside your greaseproof paper pouch so the colorful paneer-corn seams face outward, and serve instantly.",
        "timerSeconds": 15
      }
    ],
    "hacks": [
      {
        "title": "The 2000W Pressure Shield",
        "text": "Contact grillers operating at 2000W transfer heat and apply downward force with intense efficiency. If your cook applies loose, un-cooked mayo or raw sauces inside the sandwich bread, it will squeeze right out of the seams, burning onto your griller plates and creating a bitter smoke. Running the filling through the tawa flash-sear stage for 20 seconds cooks out excess moisture and binds it into a thick paste that holds its shape under pressure."
      },
      {
        "title": "The Particle Distribution Trick",
        "text": "Never use large chunks or thick slabs of paneer in a budget toasted sandwich. Large chunks cause the bread to lift unevenly, leaving un-toasted white cold spots on your bread wrapper. By dicing your paneer into tiny 5mm mini-cubes to match the size of your sweet corn, the particles distribute evenly across the entire surface area. The customer gets a dense, satisfying bite of both paneer and corn in every single mouthful."
      },
      {
        "title": "Edge-to-Edge Spread Rule",
        "text": "Instruct your cooks to spread the filling completely to the outermost crust lines of the bread slices. Because the griller seals the outer borders of the sandwich tightly under pressure, any area left without filling will turn into dry, compressed cardboard texture. Every bite from the tip to the outer crust must be intensely flavorful."
      }
    ],
    "storageAndWaste": "Dairy components and sweet corn turn sour and ferment rapidly if exposed to stagnant ambient heat or humidity fluctuations on a live street line.\n\n1. Griller Plate Hygiene Maintenance\n\nThe aggressive heat of the Sujata griller can cause residual butter or stray sauce drops on the plates to carbonize into black ash over a 4-hour shift. If left uncleaned, this bitter residue will transfer onto the next sandwich, ruining its appearance. Instruct your line cook to wipe down the griller plates with a clean, damp cloth or brass wire brush after every 5 orders. Never use sharp metal scrapers or knives on the plates, as it strips away the non-stick coating.\n\n2. The Pre-Mix Station Setup (The Moisture Ban)\n\nNever mix your house chilli mayo spread or salt into your bulk line container of paneer and corn ahead of time. Salt will draw out the water from the onions and capsicum, leaving you with a watery, limp mixture that will turn thin and ruin the crispness of your bread crumbs.\n\nThe Pro Setup: Keep your pre-cut 5mm paneer cubes, par-boiled sweet corn, diced capsicum, and onions mixed together completely dry and unsalted inside an airtight stainless steel container in your line chiller at 2∘C to 4∘C (holds perfectly fresh for up to 36 hours). Only scoop out a portion and combine it with the mayo binder directly on the hot live tawa surface when the order prints. This cuts raw material waste to absolute zero.\n\n3. Upcycling Leftover Cooked Filling (Zero-Waste Strategy)\n\nIf your cook has pre-fried, chilli-glazed paneer-corn filling left over on the flat-top at closing time due to a canceled order, do not discard it.\n\nThe Veg Corn Szechuan Rice Extender: Store the cooked leftover mixture cold overnight. The next morning, dump this highly seasoned, savory paneer-corn-veg mix directly into a screaming hot wok along with boiled rice or noodles, fresh cabbage shreds, and a splash of vinegar. The caramelized master chilli gravy elements inside the mix act as an exceptional flavor engine, transforming dead tawa inventory into a high-demand \"Veg Szechuan Corn Fried Rice Combo\" for your lunch thali crowd, ensuring you salvage 100% of your food cost investment.\n\nWhich item or section of your brand are we mapping into this high-speed commercial line system next? We can seamlessly evaluate your remaining sandwiches or loaded burger options to keep your operations running at maximum efficiency."
  },
  {
    "id": 129,
    "name": "Corn Sandwich",
    "prices": [
      "₹55"
    ],
    "categoryId": "burgers-sandwiches",
    "categoryName": "Burgers & Sandwiches",
    "colorAccent": "#0c831f",
    "quickMix": "Running your entry-level Corn Sandwich (କର୍ଣ୍ଣ ସ୍ୟାଣ୍ଡୱିଚ୍) at a ₹55 retail price point through your high-powered Sujata...",
    "description": "Running your entry-level Corn Sandwich (କର୍ଣ୍ଣ ସ୍ୟାଣ୍ଡୱିଚ୍) at a ₹55 retail price point through your high-powered Sujata 2000W commercial griller completely streamlines your kitchen line speed.\n\nUnlike cooking on a flat-top tawa, a contact griller cooks from the top and bottom simultaneously under heavy spring-loaded pressure. This cuts your execution time down to just 60 seconds, completely locking the outer bread crumbs into an ultra-crisp, deep-grooved grid pattern that looks highly premium while maintaining an exceptional sub-25% food cost percentage.\n\nBecause a contact griller applies aggressive top-down pressure, you must adjust the filling assembly defensively. If you use loose, watery sauces inside, the 2000W element will squeeze them right out through the bread seams, burning onto your griller plates. By flash-binding the ingredients on a hot tawa with a blend of commercial eggless mayo and a splash of your Master Chilli Gravy Base, you create a stable, thick paste that handles the intense griller pressure without leaking.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Standard Sandwich cut into 4 quarters (~165g total weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Standard White Sandwich Bread\t2 Slices (Premium soft crumb)\t₹3.50",
      "Sweet Corn Kernels\t50g (35g whole + 15g crushed as binder)\t₹2.50",
      "Diced Veggies (Capsicum/Onion)\t25g Crisp, small square cuts\t₹1.00",
      "Master Chilli Gravy Mayo Binder\t20g (Eggless mayo mixed with 5ml Master Gravy)\t₹2.50",
      "Dairy Butter / Vanaspati\t10g (For uniform griller plate lubrication)\t₹2.50",
      "Packaging & Paper Pouch\tGreaseproof wrapper paper sleeve\t₹1.50",
      "Direct Griller Power & Overhead\tSujata 2000W 60-second cycle allocation\t₹1.10",
      "TOTAL PRODUCTION COST\t\t₹15.10",
      "Financial Matrix: At a ₹55 retail price, a ₹15.10 raw production cost delivers an incredible 27.5% Food Cost Percentage! This locks in a spectacular 72.5% Gross Margin (₹39.90 pure profit per sandwich). Running entirely through the Sujata griller, this item keeps your kitchen lines moving rapidly without touching your deep fryer."
    ],
    "ingredients": [
      "The Carbs: 2 slices of standard-sized white sandwich bread.",
      "The Golden Core: 50g par-boiled sweet corn kernels. (Pro Tip: Run 30% of the corn through a blender to create a paste; it acts as a free natural binder for the filling).",
      "The Crunch Aromatics: 25g finely diced green capsicum and onions.",
      "The Flavor Catalyst & Binder: 20g of House Chilli Mayo (commercial eggless mayo pre-blended with a 5ml dash of your Master Chilli Gravy Base). (This eliminates the need for your cooks to shake multiple dry spice jars or individual sauce bottles during peak hours).",
      "The Toasting Agent: 10g salted dairy butter or high-grade vanaspati for a perfectly golden crust."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "To guarantee rapid ticket turnarounds under 2 minutes, keep your Sujata 2000W griller pre-heated and set to 180∘C to 190∘C throughout the evening shift.",
        "timerSeconds": 10
      },
      {
        "title": "Step 1: The Core Filling Flash Tawa Bind",
        "duration": "20 Secs",
        "detail": "Heat a tiny drop of oil on the high-heat side of your flat tawa. Throw in your sweet corn mix (whole and crushed paste), diced onions, and capsicum all at once. Flash-sear on high heat for 10 seconds. Add your 20g of House Chilli Mayo (pre-mixed with Master Chilli Gravy). Stir rapidly with your spatula for 10 seconds until the sauce bubbles and forms a thick, sticky coating that tightly binds the ingredients together. Push it to the cool side of the tawa.",
        "timerSeconds": 20
      },
      {
        "title": "Step 2: The Core Stuffing Layer",
        "duration": "15 Secs",
        "detail": "Lay 2 fresh bread slices on your clean prep table. Scoop the hot, savory corn mixture directly onto one slice, spreading it evenly from edge to edge. Close the sandwich firmly, pressing down slightly to lock the filling in place.",
        "timerSeconds": 15
      },
      {
        "title": "Step 3: The 2000W Dual-Plate Blast",
        "duration": "60 Secs",
        "detail": "Brush a light layer of butter (approx. 3g) directly onto the top and bottom plates of the pre-heated Sujata griller. Place the sandwich in the center. Brush the remaining butter on the top slice of bread. Lower the heavy griller lid and clamp it down securely. Cook for exactly 50 to 60 seconds—do not open the lid early. The 2000W dual plates will rapidly toast the exterior crumbs into an ultra-crisp mahogany armor.",
        "timerSeconds": 60
      },
      {
        "title": "Step 4: The Quarter Cut & Pack",
        "duration": "15 Secs",
        "detail": "Lift the griller lid, slide the smoking hot, grid-marked sandwich out onto a clean cutting board. Using a sharp serrated knife, make two rapid diagonal cuts to slice it into 4 uniform, triangular quarters. Arrange them neatly inside your greaseproof paper pouch so the bright golden corn seams face outward, and serve instantly.",
        "timerSeconds": 15
      }
    ],
    "hacks": [
      {
        "title": "The 2000W Pressure Shield",
        "text": "Contact grillers operating at 2000W transfer heat and apply downward force with intense efficiency. If your cook applies loose, un-cooked mayo or raw sauces inside the sandwich bread, it will squeeze right out of the seams, burning onto your griller plates and creating a bitter smoke. Running the filling through the tawa flash-sear stage for 20 seconds cooks out excess moisture and binds it into a thick paste that holds its shape under pressure."
      },
      {
        "title": "The Part-Crush Corn Volume Hack",
        "text": "Do not drop 100% whole corn kernels into the sandwich filling. If you do, the sandwich will flatten completely under the heavy griller plates, leaving it looking thin, and the whole kernels will roll right out when the customer takes a bite. Running one-third of your prep corn through a quick blender pulse creates a thick paste that spreads smoothly edge-to-edge, traps the whole kernels, and increases the physical height of the filling at zero extra cost."
      },
      {
        "title": "Edge-to-Edge Spread Rule",
        "text": "Instruct your cooks to spread the filling completely to the outermost crust lines of the bread slices. Because the griller seals the outer borders of the sandwich tightly under pressure, any area left without filling will turn into dry, compressed cardboard texture. Every bite from the tip to the outer crust must be intensely flavorful."
      }
    ],
    "storageAndWaste": "Sweet corn and fresh vegetables turn sour and ferment rapidly if exposed to stagnant ambient heat or humidity fluctuations on a live street line.\n\n1. Griller Plate Hygiene Maintenance\n\nThe aggressive heat of the Sujata griller can cause residual butter or stray sauce drops on the plates to carbonize into black ash over a 4-hour shift. If left uncleaned, this bitter residue will transfer onto the next sandwich, ruining its appearance. Instruct your line cook to wipe down the griller plates with a clean, damp cloth or brass wire brush after every 5 orders. Never use sharp metal scrapers or knives on the plates, as it strips away the non-stick coating.\n\n2. The Pre-Mix Station Setup (The Moisture Ban)\n\nNever mix your house chilli mayo spread or salt into your bulk line container of corn and vegetables ahead of time. Salt will draw out the water from the onions and capsicum, leaving you with a watery, limp mixture that will turn thin and ruin the crispness of your bread crumbs.\n\nThe Pro Setup: Keep your par-boiled whole corn and crushed paste, diced capsicum, and onions mixed together completely dry and unsalted inside an airtight stainless steel container in your line chiller at 2∘C to 4∘C (holds perfectly fresh for up to 36 hours). Only scoop out a portion and combine it with the mayo binder directly on the hot live tawa surface when the order prints. This cuts raw material waste to absolute zero.\n\n3. Upcycling Leftover Cooked Filling (Zero-Waste Strategy)\n\nIf your cook has pre-fried, chilli-glazed corn filling left over on the flat-top at closing time due to a canceled order or staff over-cooking, do not discard it.\n\nThe Veg Chinese Fried Rice Extender: Store the cooked leftover mixture cold overnight. The next morning, dump this highly seasoned, savory corn-veg mix directly into a screaming hot wok along with boiled rice or noodles, fresh cabbage shreds, and a splash of vinegar. The caramelized master chilli gravy elements inside the mix act as an exceptional flavor engine, transforming dead tawa inventory into a high-demand \"Sweet Corn Fried Rice Combo\" for your lunch thali crowd, ensuring you salvage 100% of your food cost investment.\n\nWhich item or section of your brand are we optimizing next? We can seamlessly evaluate your remaining dishes or deep-dive into station efficiency metrics to ensure your kitchen setup stays blazing fast and highly profitable."
  },
  {
    "id": 130,
    "name": "Baby Corn Pakoda",
    "prices": [
      "₹119"
    ],
    "categoryId": "starters",
    "categoryName": "Starters & Pakodas",
    "colorAccent": "#0c831f",
    "quickMix": "Adding Baby Corn Pakoda (ବେବି କର୍ଣ୍ଣ ପକୋଡ଼ା) at a ₹119 price point to your evening fried-starter lineup is an excellent ...",
    "description": "Adding Baby Corn Pakoda (ବେବି କର୍ଣ୍ଣ ପକୋଡ଼ା) at a ₹119 price point to your evening fried-starter lineup is an excellent commercial move. In the street-food and quick-service segment, deep-fried crunch items are the highest-velocity companions to hot tea, cold beverages, and main-course rolls.\n\nTo achieve an elite sub-25% food cost and maximize kitchen line throughput, this item must be engineered specifically for your 2.5L commercial deep fryer.\n\nThe fast-food trap with baby corn is serving long, thick, rubbery spears that tear away from their batter coat in one bite. The commercial secret is the diagonal flash-cut method: slicing each baby corn spear diagonally into thin, elongated 1.5-inch diamond coins. This increases the surface area exponentially, allowing a standard 80g wholesale portion to look like a massive, overflowing plate of golden fritters that flash-cooks to a shattering crisp in under 2 minutes.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Full Starter Plate (~180g fried output weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Wholesale Baby Corn\t80g (Approx. 4-5 spears, diagonally cut)\t₹9.60",
      "The Crunch Batter Matrix\t40g Besan + 15g Rice Flour / Cornstarch\t₹2.20",
      "Master Chilli Gravy Base\t15ml (The internal seasoning marinade)\t₹1.00",
      "Spices & Aromatics\tAjwain, turmeric, ginger-garlic paste, salt\t₹1.00",
      "Commercial Frying Oil\t2.5L Fryer absorption loss (Palm/Rice Bran)\t₹4.50",
      "Garnish Layer\tChaat masala dust + 2 slit green chillies\t₹0.80",
      "Line Packaging / Serving Plate\tButter-paper-lined bio plate or delivery box\t₹2.50",
      "Direct Fryer Power\t2000W Fryer 120-second operational cycle\t₹1.80",
      "TOTAL PRODUCTION COST\t\t₹23.40",
      "Financial Matrix: At a ₹119 retail price, a ₹23.40 raw production cost locks in a spectacular 19.7% Food Cost Percentage! This yields a massive 80.3% Gross Margin (₹95.60 pure profit per plate). Because it bypasses the flat-top tawa entirely and utilizes the dead time of your 2.5L deep fryer, it stands as one of your highest-yielding vegetarian money-makers."
    ],
    "ingredients": [
      "The Core: 80g fresh, firm baby corn spears.",
      "The Flavor Anchor: 15ml of your pre-made Master Chilli Gravy Base (used as a 10-second flash marinade before battering to inject deep garlic, soy, and umami flavors directly into the corn).",
      "The Crisp Batter Armor (Batch Prep Ratio):",
      "Besan (Gram Flour): 40g (For structural flavor and deep golden color).",
      "Rice Flour or Cornstarch: 15g (The structural crisp factor—rice flour keeps the pakoda crunchy for up to 20 minutes in a delivery box).",
      "Spices: 41​ tsp ajwain (carom seeds), 41​ tsp red chilli powder, 41​ tsp turmeric, and a pinch of baking soda (for a light, airy puff)."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "To handle unrelenting peak-hour rushes, your fryer cook must operate with a dry-wet separation setup next to the 2.5L fryer:",
        "timerSeconds": 10
      },
      {
        "title": "Step 1: The Diagonal Bias Cut & Flash Marinade",
        "duration": "20 Secs",
        "detail": "Take 80g of par-boiled baby corn spears. Slice them at a sharp 45∘ diagonal angle into 1.5-inch long diamond pieces. Toss the cut pieces instantly in a small stainless steel bowl with 15ml of your Master Chilli Gravy Base. The starches and garlic notes in your master gravy will coat the wet corn surface, acting as a high-flavor primer.",
        "timerSeconds": 20
      },
      {
        "title": "Step 2: The Batter Coat Drop",
        "duration": "15 Secs",
        "detail": "Dump the seasoned baby corn pieces straight into your thick, pre-prepared pakoda batter slurry. Toss rapidly with a gloved hand or spider skimmer to ensure every single diamond coin is completely enveloped in the golden batter matrix.",
        "timerSeconds": 15
      },
      {
        "title": "Step 3: The 2.5L Deep Fryer Blast",
        "duration": "120 Secs",
        "detail": "Drop the coated baby corn pieces individually into the 2.5L commercial deep fryer calibrated strictly at 180∘C. Fry for exactly 1.5 to 2 minutes. Because the corn is cut into thin bias slices, it cooks instantly, while the rice-flour armor locks into a hard, rigid, golden-brown crunch. Lift the basket and shake off excess oil for 10 seconds.",
        "timerSeconds": 120
      },
      {
        "title": "Step 4: The Chaat Garnish & Serving Stack",
        "duration": "15 Secs",
        "detail": "Toss the crackling hot pakodas into a dry bowl. Dust aggressively with 21​ tsp chaat masala, throw in 2 flash-fried slit green chillies, and dump the overflowing heap onto a butter-paper-lined serving plate. Serve immediately with a side of mint chutney.",
        "timerSeconds": 15
      }
    ],
    "hacks": [
      {
        "title": "The Master Gravy Binding Shield",
        "text": "Never use plain water to make your pakoda batter taste good. Slicing the corn and flash-tossing it in 15ml of your Master Chilli Gravy Base before coating creates an inseparable flavor bridge. The sticky starches in the master gravy lock onto the baby corn skin, preventing the besan batter from slipping off or separating from the vegetable during deep frying."
      },
      {
        "title": "The 45-Degree Illusion",
        "text": "Never cut baby corn into straight round discs or serve them whole. Round discs look small and cheap, while whole spears are expensive to portion. Cutting them on a sharp 45∘ diagonal bias yields long, elegant, premium-looking pieces that spread out widely on the plate. This makes an 80g portion look like a massive, loaded starter basket that fully validates the ₹119 price tag."
      },
      {
        "title": "The Rice Flour Moisture Guard",
        "text": "Standard besan batter turns soft, soggy, and limp within 7 minutes inside a sealed home-delivery cardboard box. By replacing 25% of your flour volume with fine rice flour, you alter the starch structure. Rice flour does not absorb water easily, ensuring your baby corn pakodas stay completely crisp and crackling even after a 15-minute delivery ride."
      }
    ],
    "storageAndWaste": "Baby corn holds an excellent shelf life if preserved away from raw ambient air fluctuations, which cause it to turn brown and oxidize.\n\n1. The Afternoon Par-Boil Protocol\n\nRaw baby corn can be tough and fibrous. Have your afternoon prep team blanch the whole baby corn spears in boiling salted water for exactly 3 minutes. Plunge them immediately into ice-cold water to stop the cooking process. Drain them completely until dry.\n\nThe Storage Setup: Store the blanched, dried whole spears in an airtight plastic container lined with a paper towel inside your line chiller at 2∘C to 4∘C. Under this cold chain, they hold perfectly crisp and fresh for up to 4 days. Never chop the corn into pieces ahead of time; only slice them on a live order ticket to prevent the edges from drying out and turning grey.\n\n2. Upcycling Leftover Components (Zero-Waste Strategy)\n\nIf your cook has par-boiled baby corn spears approaching their shelf limit at the end of a slow week, do not let them spoil.\n\nThe Baby Corn Master Chilli Crispy Appetizer Up-sell: The next evening, instead of a pakoda, run a flash special on your board. Take those baby corn spears, cut them into your signature diagonal shapes, dust them lightly in dry cornstarch, and deep fry them naked at 180∘C until hard and blistered. Toss them directly into a smoking hot wok with a heavy ladle of your Master Chilli Gravy Base, diced capsicum, and onions for 30 seconds. Plate it beautifully and sell it as a premium \"Crispy Baby Corn Chilli Starter\" for ₹149. This completely liquidates your stock, converting older raw inventory into maximum revenue!\n\nWhich item or section of your evening fast-food menu are we standardizing into this high-margin line format next?"
  },
  {
    "id": 131,
    "name": "Dragon Corn",
    "prices": [
      "₹119"
    ],
    "categoryId": "chinese",
    "categoryName": "Indo-Chinese",
    "colorAccent": "#0c831f",
    "quickMix": "Adding Dragon Corn (ଡ୍ରାଗନ୍ କର୍ଣ୍ଣ) at a ₹119 retail price to your evening starter menu introduces a high-margin, visual...",
    "description": "Adding Dragon Corn (ଡ୍ରାଗନ୍ କର୍ଣ୍ଣ) at a ₹119 retail price to your evening starter menu introduces a high-margin, visually striking Indo-Chinese appetizer. Popular with the college crowd and family delivery orders, \"Dragon\" items carry a premium reputation for being fiercely spicy, bright crimson, and deeply caramelized.\n\nThe fast-food operational challenge with corn starters is speed and portion control. If your cook flash-fries whole sweet corn kernels, they bounce around dynamically, explode in the fryer oil, and dry out instantly.\n\nThe commercial secret to a sub-25% food cost and a lightning-fast turnaround time is The Cluster Coating Matrix: tossing a standard 90g wholesale portion of sweet corn into an aggressive cornstarch slurry with a splash of your Master Chilli Gravy Base. This causes the kernels to flash-fry into crunchy, irregular golden popcorn clusters that can be rapidly tossed in a smoking wok with a fiery red glaze.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Full Starter Plate (~190g total output weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Wholesale Sweet Corn\t90g Net weight (Par-boiled kernels)\t₹4.50",
      "The Cluster Armor\t30g Cornstarch + 10g Maida\t₹1.50",
      "Master Chilli Gravy Glaze\t45ml allocation (The seasoning & binding engine)\t₹3.00",
      "Dragon Glaze Additives\t10ml Schezwan sauce / Red Chilli Paste + Touch of honey\t₹1.50",
      "Wok Crunch Veggies\t20g Sliced onions, green capsicum, & spring onion greens\t₹1.00",
      "Commercial Frying Oil\t2.5L Fryer absorption loss (Palm/Rice Bran)\t₹4.50",
      "Premium Visual Garnish\t1 tsp Toasted white sesame seeds (The Dragon Identity)\t₹1.20",
      "Line Packaging / Plate\tButter-paper-lined bio plate or delivery box\t₹2.50",
      "Direct Fryer & Gas Fuel\tDeep fryer cycle + high-blast wok burner\t₹2.50",
      "TOTAL PRODUCTION COST\t\t₹22.20",
      "Financial Matrix: At a ₹119 retail price, a ₹22.20 raw production cost delivers an outstanding 18.7% Food Cost Percentage! This locks in a spectacular 81.3% Gross Margin (₹96.80 pure profit per plate). By transforming low-cost sweet corn into a premium fiery appetizer, this item functions as an elite cash-flow engine for your kitchen line."
    ],
    "ingredients": [
      "The Core: 90g par-boiled sweet corn kernels (fully drained and patted dry).",
      "The Cluster Batter: 30g cornstarch, 10g maida, and a 5ml splash of water.",
      "The Aromatics: 1 tbsp finely minced garlic, 1 tsp minced ginger, and 2 split green chillies.",
      "The Wok Veggies: 20g of thinly sliced onions and green capsicum strips.",
      "The Dragon Sauce Engine: 45ml of your pre-made Master Chilli Gravy Base mixed with 1 tsp fiery Schezwan paste and 21​ tsp honey or sugar.",
      "The Signature Garnish: 1 tsp toasted white sesame seeds and a handful of chopped spring onion greens."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "To hit a fast turnaround time under 3 minutes, your line cooks execute a rapid tag-team handoff between the 2.5L fryer and the high-blast wok burner:",
        "timerSeconds": 10
      },
      {
        "title": "Step 1: The Cluster Coating Mix",
        "duration": "30 Secs",
        "detail": "Take 90g of par-boiled sweet corn kernels in a stainless steel bowl. Dust them with 30g cornstarch and 10g maida. Shake the bowl aggressively so the flour locks onto the damp kernels. Splash a tiny drop of water over the mix and toss again. The corn must clump together into irregular clusters of 3 to 5 kernels, completely sealed in a dry flour armor.",
        "timerSeconds": 30
      },
      {
        "title": "Step 2: The Cluster Flash Fry",
        "duration": "90 Secs",
        "detail": "Drop the flour-coated corn clusters directly into your 2.5L deep fryer calibrated strictly at 180∘C. Fry for exactly 75 to 90 seconds. The cornstarch armor will immediately set into a rigid, ultra-crisp shell, sealing the moisture inside the corn and preventing the kernels from exploding in the hot oil. Lift and drain.",
        "timerSeconds": 90
      },
      {
        "title": "Step 3: The Fiery Dragon Wok Toss",
        "duration": "45 Secs",
        "detail": "Simultaneously, fire up your wok burner on high blast. Add 1 tbsp oil, throwing in your minced garlic, ginger, green chillies, sliced onions, and capsicum. Flash-sear for 15 seconds. Pour in your Dragon Sauce Engine (45ml Master Chilli Gravy + Schezwan paste + honey). Let it bubble and reduce for 10 seconds into a sticky, bright red glaze.",
        "timerSeconds": 45
      },
      {
        "title": "Step 4: The Sesame Glaze Lock & Plate",
        "duration": "15 Secs",
        "detail": "Dump the crispy fried corn clusters straight into the bubbling wok glaze. Toss aggressively 4 to 5 times on high heat. The starch shell will instantly absorb the liquid, locking a glossy, intense red coat onto the corn. Throw in the spring onions and toasted sesame seeds, give it one final flip, and slide the steaming mound onto a serving plate.",
        "timerSeconds": 15
      }
    ],
    "hacks": [
      {
        "title": "The Slurry Shield (Anti-Explosion Trick)",
        "text": "Naked sweet corn kernels hold massive internal moisture. If dropped directly into a hot deep fryer, the water vapor expands rapidly, causing the kernels to violently pop and spray dangerous hot oil across your station. Dressing them into The Cluster Coating Matrix creates a hard structural barrier that traps the vapor safely, guarantees an ultra-satisfying crunch, and keeps your fryer station clean and secure."
      },
      {
        "title": "The Honey-Schezwan Profile",
        "text": "The word \"Dragon\" on a menu implies a specific flavor profile—it cannot just taste like standard chilli corn. Mixing a 1 tsp shot of Schezwan paste and a touch of honey directly into your Master Chilli Gravy Base inside the wok creates a complex flavor profile. The sweetness of the honey balances the sharp heat of the chillies and rounds out the natural sugars of the sweet corn, keeping customers hooked."
      },
      {
        "title": "The White Sesame Visual Identity",
        "text": "Never skip the toasted white sesame seed garnish. Against the intense crimson glaze of the caramelized dragon corn, the pale white sesame seeds pop visually. It provides a high-end, premium restaurant aesthetic that fully justifies the ₹119 menu price."
      }
    ],
    "storageAndWaste": "Sweet corn is highly stable when stored dry, allowing you to run a near-perfect zero-waste starter line if temperature boundaries are maintained.\n\n1. Sweet Corn Moisture Drainage\n\nNever coat your sweet corn in cornstarch ahead of time during afternoon hours. If left sitting, the cornstarch will absorb the internal moisture of the corn, turning into a wet, soggy paste that will slough off into a slimy mess at the bottom of your deep fryer.\n\nThe Line Setup: Par-boil your bulk sweet corn for 3 minutes during afternoon prep, drain it completely through a colander, and pat it dry. Store the dry kernels in a covered container inside your line chiller at 2∘C to 4∘C. Keep your cornstarch and maida mix in a dry shaker box right next to the fryer. Only combine the corn and flour live when the order prints.\n\n2. Upcycling Unsold Cooked Clusters (Zero-Waste Strategy)\n\nBecause this item is glazed in a high-starch sauce, any plates left over due to a delivery cancellation will lose their crispness within 30 minutes. Do not throw this stock away.\n\nThe Dragon Corn Fried Rice Combo Base: Store any unsold cooked dragon corn cold overnight. The next morning, the sticky, highly seasoned corn clusters will have firmed up. Dump this entire leftover corn-and-sauce mixture directly into a screaming hot wok along with boiled rice, shredded cabbage, and a dash of vinegar. The caramelized sugars, garlic, and sesame elements inside the dragon corn act as an exceptional flavor base, transforming dead inventory into a high-demand \"Fiery Dragon Corn Fried Rice\" lunch special for ₹129. This completely salvages your ingredient costs, protecting your gross profit margins.\n\nWhich item or section of your evening fast-food menu manual are we standardizing into this high-margin format next?"
  },
  {
    "id": 132,
    "name": "American Corn Fry",
    "prices": [
      "₹99"
    ],
    "categoryId": "starters",
    "categoryName": "Starters & Pakodas",
    "colorAccent": "#0c831f",
    "quickMix": "An entry-level American Corn Fry (ଆମେରିକାନ୍ କର୍ଣ୍ଣ ଫ୍ରାଏ) at a ₹99 retail price point is a high-velocity, high-profit ch...",
    "description": "An entry-level American Corn Fry (ଆମେରିକାନ୍ କର୍ଣ୍ଣ ଫ୍ରାଏ) at a ₹99 retail price point is a high-velocity, high-profit champion for your frying station. Positioned strategically under the ₹100 psychological barrier, this classic crisp starter acts as an instant volume driver for college groups, families, and evening delivery tickets.\n\nTo hit an elite sub-20% food cost percentage, this item must be engineered strictly for speed and crisp retention inside your 2.5L commercial deep fryer.\n\nThe fast-food operational secret to conquering this item at ₹99 is The Isolated Kernel Armor: tossing a precise 90g wholesale portion of sweet corn in a dry cornstarch coating so that every single kernel fries into an independent, ultra-crunchy golden pearl. Tossed dry in a steel bowl with aromatic spices instead of a heavy wok sauce, it stays crackling crisp for long delivery windows and keeps your line moving at maximum speed.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Full Starter Plate (~160g total output weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Wholesale Sweet Corn\t90g Net weight (Par-boiled kernels)\t₹4.50",
      "The Isolated Kernel Armor\t35g Cornstarch (For crisp separation)\t₹1.40",
      "The Seasoning Engine\tChaat masala, red chilli powder, black salt\t₹0.80",
      "Wok Aromatics\t15g Finely minced onions & green chillies\t₹0.70",
      "Commercial Frying Oil\t2.5L Fryer absorption loss (Palm/Rice Bran)\t₹4.50",
      "Fresh Citrus Layer\t41​ Fresh lemon wedge squeeze\t₹0.50",
      "Line Packaging / Serving Plate\tButter-paper-lined bio plate or delivery pouch\t₹2.50",
      "Direct Fryer Power\t2000W Fryer 90-second operational cycle\t₹1.50",
      "TOTAL PRODUCTION COST\t\t₹16.40",
      "Financial Matrix: At a ₹99 retail price, a ₹16.40 raw production cost delivers a spectacular 16.6% Food Cost Percentage! This locks in a massive 83.4% Gross Margin (₹82.60 pure profit per plate). Because it completely bypasses your wet wok line and requires zero expensive sauces, it stands as your highest-margin vegetarian starter by percentage."
    ],
    "ingredients": [
      "The Core: 90g par-boiled sweet corn kernels (must be fully drained and damp, not dripping wet).",
      "The Crunch Armor: 35g pure cornstarch (do not add maida here; maida makes the coating doughy, whereas pure cornstarch ensures a shattering, glass-like crunch).",
      "The Toss Aromatics: 15g paper-thin minced raw onions, 1 minced green chilli, and a small handful of chopped fresh coriander leaves.",
      "The Dry Spice Engine: 21​ tsp chat masala, 41​ tsp red chilli powder, 41​ tsp roasted cumin powder, and a pinch of black salt (kala namak).",
      "The Acid Wake-up: A firm squeeze of a fresh lemon wedge."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "Because this starter requires zero wet wok cooking, your fryer cook can execute and plate a fresh order in under 2 minutes flat:",
        "timerSeconds": 10
      },
      {
        "title": "Step 1: The Isolated Armor Shake",
        "duration": "20 Secs",
        "detail": "Take 90g of par-boiled, damp sweet corn kernels in a dry stainless steel bowl. Dump 35g of pure cornstarch straight over the corn. Shake the bowl aggressively using a circular rolling motion. Every single kernel must be completely and independently blanketed in a dry white flour armor, with no wet spots visible. Run the corn through a wide wire mesh sifter for 3 seconds to discard any loose, excess starch.",
        "timerSeconds": 20
      },
      {
        "title": "Step 2: The 2.5L Deep Fryer Blast",
        "duration": "90 Secs",
        "detail": "Drop the coated, sifted corn pearls directly into your 2.5L commercial deep fryer calibrated strictly at 180∘C. Fry for exactly 75 to 90 seconds. The cornstarch armor will instantly set into a rigid, ultra-crisp shell, sealing the moisture safely inside the corn and preventing the kernels from exploding in the hot oil. Lift the fryer basket and shake off excess oil vigorously for 10 seconds.",
        "timerSeconds": 90
      },
      {
        "title": "Step 3: The Dry Steel Bowl Toss",
        "duration": "15 Secs",
        "detail": "Dump the hot, crackling fried corn pearls straight into a clean, dry steel bowl. Immediately throw in your Dry Spice Engine (chaat masala, chilli powder, black salt), your Toss Aromatics (minced onions, green chillies, coriander), and give the bowl 3 rapid, aggressive flips. Squeeze the fresh lemon wedge over the tumbling pearls to help the spices stick to the hot armor.",
        "timerSeconds": 15
      },
      {
        "title": "Step 4: The Overflowing Plate Stack",
        "duration": "10 Secs",
        "detail": "Pour the steaming, golden-crisp corn pearls onto a butter-paper-lined bio plate or into a delivery box. The individual kernels will pile up naturally into a massive, overflowing heap that looks incredibly generous, and pass it to the runner instantly.",
        "timerSeconds": 10
      }
    ],
    "hacks": [
      {
        "title": "The Starch Armor Shield (Anti-Explosion Trick)",
        "text": "Naked sweet corn kernels hold massive internal moisture. If dropped directly into a hot deep fryer, the water vapor expands rapidly, causing the kernels to violently pop and spray dangerous hot oil across your station. Dressing them into The Isolated Kernel Armor creates a hard structural barrier that traps the vapor safely, guarantees an ultra-satisfying crunch, and keeps your fryer station clean and secure."
      },
      {
        "title": "The Wide Mesh Sifter Hack",
        "text": "Never drop un-sifted, starch-heavy coated corn straight into the fryer basket. Loose, unattached cornstarch will fall into the oil, scorching instantly at 180∘C. This breaks down your cooking oil, turns it dark and bitter, and doubles your oil replacement costs. Taking 3 seconds to run the coated corn through a wide wire sifter keeps your 2.5L fryer oil clean and clear for days."
      },
      {
        "title": "The Dry Bowl Toss Principle",
        "text": "Never introduce wet sauces (like soy sauce or ketchup) or cook this item in a wet wok line. The beauty of American Corn Fry is its dry, crackling texture. Wet sauces will soften the thin cornstarch shell within 60 seconds, turning your premium crisp starter into a soggy, limp mass by the time a delivery rider arrives at a customer's doorstep. Stick strictly to dry spices, raw aromatics, and live lemon juice."
      }
    ],
    "storageAndWaste": "Sweet corn is highly stable when stored dry, allowing you to run a near-perfect zero-waste starter line if temperature boundaries are maintained.\n\n1. Sweet Corn Moisture Drainage\n\nNever coat your sweet corn in cornstarch ahead of time during afternoon hours. If left sitting, the cornstarch will absorb the internal moisture of the corn, turning into a wet, sticky paste that will slough off into a slimy mess at the bottom of your deep fryer.\n\nThe Line Setup: Par-boil your bulk sweet corn for 3 minutes during afternoon prep, drain it completely through a colander, and pat it dry. Store the dry kernels in a covered container inside your line chiller at 2∘C to 4∘C. Keep your cornstarch in a dry container right next to the fryer. Only combine the corn and flour live when the order prints.\n\n2. Upcycling Leftover Dry Inventory (Zero-Waste Strategy)\n\nBecause this item is served entirely dry and uses basic kitchen staples, your raw material waste risk is practically zero. However, if your prep team par-boils too much sweet corn and it approaches its 4-day line chiller shelf limit, do not let it go to waste.\n\nThe High-Margin Corn Cheese Sandwich Extender: Take that leftover par-boiled sweet corn, chop it coarsely, and move it to your bread station. Blend it with your commercial liquid cheese sauce and diced capsicum to use as the core filling matrix for your high-margin ₹55 Corn Sandwich or your ₹79 Paneer Corn Cheese Sandwich. This completely liquidizes your older vegetable stock, transforming a potential loss into 100% clear profit!\n\nWhich item or section of your evening fast-food menu manual are we standardizing into this high-margin format next?"
  },
  {
    "id": 133,
    "name": "Peri Peri French Fries",
    "prices": [
      "₹89"
    ],
    "categoryId": "burgers-sandwiches",
    "categoryName": "Burgers & Sandwiches",
    "colorAccent": "#0c831f",
    "quickMix": "Adding Peri Peri French Fries (ପେରି ପେରି ଫ୍ରେଞ୍ଚ ଫ୍ରାଇଜ୍) at a ₹89 retail price point to your fryer station gives you a ...",
    "description": "Adding Peri Peri French Fries (ପେରି ପେରି ଫ୍ରେଞ୍ଚ ଫ୍ରାଇଜ୍) at a ₹89 retail price point to your fryer station gives you a high-margin, lightning-fast snack. Positioned beneath the ₹100 threshold, fries are the ultimate cross-sell item—customers routinely add them to a burger or roll order without a second thought, instantly boosting your average ticket value.\n\nTo guarantee an elite sub-25% food cost percentage and lighting-fast ticket turnarounds during peak evening rushes, you must bypass the labor-intensive process of washing, peeling, cutting, and soaking raw potatoes. Instead, operate strictly with 6mm or 9mm frozen commercial straight-cut French fries cooked straight from freeze to fryer in your 2.5L commercial deep fryer.\n\nBy tossing these blazing hot fries dry in a stainless bowl with a precise dose of a high-impact spice mix, you hit an assembly time of under 3 minutes with zero kitchen line complexity.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Standard Serving Pouch (~130g fried output weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Commercial Frozen Fries (6mm/9mm)\t140g Frozen weight (Yields ~130g fried)\t₹9.80",
      "Premium Peri Peri Seasoning Mix\t4g (High-impact, dry spice matrix)\t₹1.20",
      "Commercial Frying Oil\t2.5L Fryer absorption loss (Palm/Rice Bran)\t₹4.50",
      "Line Packaging Bag\tPaper fry pouch or vented delivery box\t₹1.50",
      "Direct Fryer Power\t2000W Fryer 3-minute operational cycle\t₹1.80",
      "TOTAL PRODUCTION COST\t\t₹18.80",
      "Financial Matrix: At a ₹89 retail price, a ₹18.80 raw production cost delivers an incredible 21.1% Food Cost Percentage! This locks in a massive 78.9% Gross Margin (₹70.20 pure profit per portion). Because it requires zero prep labor, zero knife work, and uses zero wet line sauces, it stands out as a pure cash-flow generator."
    ],
    "ingredients": [
      "The Substrate: 140g frozen straight-cut commercial French fries (Keep them completely frozen until the fryer basket drops).",
      "The Flavor Anchor: 4g of high-grade dry Peri Peri spice seasoning (a sharp blend of dehydrated garlic, chili flakes, paprika, black pepper, and citric acid).",
      "The Cooking Medium: Refined palm or rice bran oil inside your 2.5L fryer, calibrated to an ironclad cooking temperature of 180∘C."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "When a ticket prints for Peri Peri Fries, your fryer cook executes the entire process without moving a single step away from the frying station:",
        "timerSeconds": 10
      },
      {
        "title": "Step 1: The Frozen Blast Deep Fry",
        "duration": "3 Mins",
        "detail": "Weigh 140g of frozen fries straight out of your line freezer chest (never let them thaw). Drop them immediately into the 2.5L deep fryer basket at 180∘C. Give the basket a aggressive shake after 30 seconds to prevent the fries from clustering together. Fry for exactly 3 minutes until the internal water vapor cooks out and the outer potato starch crust turns a crisp, light golden-yellow.",
        "timerSeconds": 180
      },
      {
        "title": "Step 2: The Double-Drip Oil Drain",
        "duration": "15 Secs",
        "detail": "Lift the fryer basket out of the oil. Shake it vigorously 4 to 5 times over the fryer well. Hook the basket onto the drainage clip for exactly 15 seconds. Shaking and draining eliminates excess surface oil, keeping the fries light and preventing the packaging from turning greasy.",
        "timerSeconds": 15
      },
      {
        "title": "Step 3: The Hot Steel Bowl Toss",
        "duration": "15 Secs",
        "detail": "Dump the crackling hot fries immediately into a clean, dry stainless steel bowl. Dust your 4g of Peri Peri seasoning evenly over the top. Give the bowl 3 to 4 rapid, aggressive upward flips. The fries must be seasoned while blazing hot (100∘C+); the residual hot surface oil forces the dry spices to melt slightly and permanently fuse to the potato armor.",
        "timerSeconds": 15
      },
      {
        "title": "Step 4: The Pouch Stack & Serve",
        "duration": "10 Secs",
        "detail": "Pour the steaming, bright-orange spiced fries straight into a food-grade paper fry pouch or a vented cardboard delivery box. The straight cuts will pile up naturally to create great visual height, and pass it to the pickup runner.",
        "timerSeconds": 10
      }
    ],
    "hacks": [
      {
        "title": "The Anti-Thaw Rule",
        "text": "Never, under any circumstances, allow your frozen fries to thaw out on the kitchen counter during slow hours. If frozen fries thaw, the interior ice crystals melt into water, which is absorbed directly by the raw potato starch cells. When dropped into the fryer, this excess moisture causes the fry to turn limp, oil-logged, and soggy within 2 minutes of plating. Store them rock-hard at −18∘C and drop them into the oil frozen."
      },
      {
        "title": "The Hot-Toss Fusion Hack",
        "text": "Instruct your line cooks to never season fries after placing them in the serving box. If dusted cold or inside the box, the dry Peri Peri powder will simply slip off the potato skin and pool uselessly at the bottom of the container. Tossing them inside a steel bowl the exact second they exit the fryer well uses the oil's high heat to melt and seal the spice layer directly onto the fry."
      },
      {
        "title": "The Vented Packaging Shield",
        "text": "For home-delivery orders, never seal French fries inside a completely airtight plastic bag or un-vented container. The intense residual heat of the fresh-fried potatoes will generate steam trapped inside the package. The bread crumb or potato armor will re-absorb this steam, turning your ultra-crisp fries into a wet, soggy mass by the time the delivery rider arrives. Use paper pouches or punch ventilation holes into the sides of your delivery boxes."
      }
    ],
    "storageAndWaste": "Because commercial frozen fries are par-blanched and flash-frozen at the factory level, they carry a long shelf life, making it easy to run an absolute zero-waste frying line.\n\n1. The Chest Freezer Sub-Sampling Protocol\n\nOpening a bulk 2.5 kg bag of frozen fries repeatedly next to a hot deep fryer introduces ambient kitchen humidity inside the bag. This moisture creates frost clumps on the remaining fries, causing them to sputter and pop violently when dropped into hot oil.\n\nThe Setup: Every afternoon, have your prep team portion the bulk bags into smaller, clear plastic zipper bags containing exactly 700g (5 standard line portions). Keep these sub-sampled bags stacked inside your line freezer chest. Your cook only opens one 700g bag at a time during the evening rush, keeping your core backup inventory pristine and free of frost damage at −18∘C.\n\n2. Upcycling Leftover Cooked Fries (Zero-Waste Strategy)\n\nIf you have a batch of fries that have sat on the line too long due to a canceled delivery ticket or cooking error and have turned cold and limp, do not discard them.\n\nThe Loaded Chicken-Corn Loaded Fries Upgrade: Move the cold fries to your starter station. Coarsely chop them up, slice up a cold leftover fried chicken-corn patty from your burger station, and toss them together. Re-flash the mix in your deep fryer for just 45 seconds to restore an intense crispiness. Dump the hot potato and chicken chunks onto a plate, flood it with a ladle of your liquid cheddar cheese sauce mixed with Master Chilli Gravy, scatter whole sweet corn kernels on top, and sell it as a premium \"Loaded Cheesy Chicken-Corn Street Fries\" special for ₹149. This completely reclaims your raw material costs, transforming dead inventory into pure profit!\n\nWhich item or section of your evening fast-food menu manual are we standardizing into this high-margin format next?"
  },
  {
    "id": 134,
    "name": "Dragon Fries",
    "prices": [
      "₹79"
    ],
    "categoryId": "burgers-sandwiches",
    "categoryName": "Burgers & Sandwiches",
    "colorAccent": "#0c831f",
    "quickMix": "Adding Dragon Fries (ଡ୍ରାଗନ୍ ଫ୍ରାଇଜ୍) at a ₹79 retail price to your fryer and wok stations delivers a highly addictive, ...",
    "description": "Adding Dragon Fries (ଡ୍ରାଗନ୍ ଫ୍ରାଇଜ୍) at a ₹79 retail price to your fryer and wok stations delivers a highly addictive, fiery Indo-Chinese side dish. Sells under the ₹80 psychological benchmark make this a massive impulse upgrade for customers who want a punchy alternative to regular peri-peri fries.\n\nThe fast-food trap with sauced fries is instant sogginess. If a cook drops standard hot fries into a loose, watery sauce, the potato starch skin turns into a wet, limp mush before it even leaves the kitchen window.\n\nThe commercial operational secret to hitting a sub-25% food cost and keeping this item crackling crisp through a home delivery window is The High-Viscosity Glaze Reduction: flash-frying frozen fries to a hard, over-baked armor and tossing them rapidly in a screaming-hot wok with your Master Chilli Gravy Base spiked with Schezwan paste and a touch of honey. The sauce coats the fries like a glossy, sticky lacquer without soaking into the core potato crumbs.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Full Starter Plate (~160g total output weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Commercial Frozen Fries (6mm/9mm)\t130g Frozen weight (Yields ~120g fried)\t₹9.10",
      "Master Chilli Gravy Base\t30ml allocation (The flavor engine)\t₹2.00",
      "Dragon Glaze Additives\t10ml Schezwan sauce / Red Chilli Paste + Sweetener\t₹1.20",
      "Wok Crunch Aromatics\t15g Sliced onions, green capsicum, & minced garlic\t₹0.80",
      "Commercial Frying Oil\t2.5L Fryer absorption loss (Palm/Rice Bran)\t₹4.50",
      "Premium Visual Garnish\t21​ tsp Toasted white sesame seeds + spring onions\t₹0.70",
      "Line Packaging / Serving Box\tVented cardboard delivery box / bio plate\t₹2.50",
      "Direct Fryer & Gas Fuel\tDeep fryer cycle + high-blast wok burner\t₹2.20",
      "TOTAL PRODUCTION COST\t\t₹23.00",
      "Financial Matrix: At a ₹79 retail price, a ₹23.00 raw production cost delivers an outstanding 29.1% Food Cost Percentage, securing a powerful 70.9% Gross Margin (₹56.00 pure profit per plate). Because it utilizes your low-cost frozen potato inventory and blends seamlessly into your existing master-gravy starter routine, it requires zero specialized raw materials."
    ],
    "ingredients": [
      "The Substrate: 130g frozen straight-cut commercial French fries (cook straight from freeze).",
      "The Aromatics: 1 tsp finely minced garlic, 1 minced green chilli.",
      "The Wok Crunch Veggies: 15g of very thinly sliced onions and green capsicum strips.",
      "The Fiery Dragon Glaze Engine: 30ml of your pre-made Master Chilli Gravy Base mixed with 1 tsp hot Schezwan paste and 21​ tsp honey or sugar.",
      "The Signature Garnish: 21​ tsp toasted white sesame seeds and a sprinkling of chopped spring onion greens."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "To guarantee maximum crisp retention, your line cooks execute a rapid, tight handoff between the deep fryer and the high-blast wok burner in under 4 minutes flat:",
        "timerSeconds": 10
      },
      {
        "title": "Step 1: The Hard Armor Over-Fry",
        "duration": "3.5 Mins",
        "detail": "Weigh 130g of frozen fries straight out of your line chest cooler. Drop them immediately into your 2.5L deep fryer calibrated at 180∘C. Fry for exactly 3.5 minutes—this is 30 seconds longer than normal fries. You need to purposely over-cook the exterior starch shell into a rigid, extra-crisp, deep golden-yellow shield to handle the upcoming wet wok toss. Lift and drain for 10 seconds.",
        "timerSeconds": 300
      },
      {
        "title": "Step 2: The Glaze Reduction Blast",
        "duration": "20 Secs",
        "detail": "Simultaneously, fire up your wok burner on high blast. Add 1 tsp oil, throwing in your minced garlic, chilli, sliced onions, and capsicum strips. Flash-sear for 10 seconds. Pour in your Fiery Dragon Glaze Engine (30ml Master Chilli Gravy + Schezwan paste + honey). Let it bubble fiercely and reduce for 10 seconds until it turns into a thick, sticky, syrupy crimson glaze.",
        "timerSeconds": 20
      },
      {
        "title": "Step 3: The Rapid Wok Glaze Lock",
        "duration": "15 Secs",
        "detail": "Dump the hard-fried, screaming-hot fries directly into the bubbling wok reduction. Execute 3 to 4 aggressive, rapid upward flips. The fries must not sit or simmer in the sauce. The sticky glaze will instantly grab onto the rigid potato skin, sealing a glossy, fiery red lacquer over every fry without penetrating the core.",
        "timerSeconds": 15
      },
      {
        "title": "Step 4: The Dragon Garnish & Box Pack",
        "duration": "10 Secs",
        "detail": "Throw in your spring onion greens and toasted white sesame seeds, give it one final snap-flip, and slide the steaming, red-hot fries into a vented delivery box or serving plate. The sesame seeds pop brightly against the red sauce, instantly conveying premium value, and pass it to the runner.",
        "timerSeconds": 10
      }
    ],
    "hacks": [
      {
        "title": "The 3.5-Minute Over-Fry Shield",
        "text": "If you cook fries to a normal soft-golden stage and toss them in a hot wok sauce, the residual steam and moisture inside the potato crumb will instantly break down the crust, turning your fries into a mushy, unappealing paste. Purposely over-frying them for 3.5 minutes drives out maximum internal water vapor and hardens the starch armor, ensuring the fries maintain an audible crunch even under a heavy glaze layer."
      },
      {
        "title": "The High-Viscosity Reduction Trick",
        "text": "Never allow your cooks to pour water, loose stocks, or excess soy sauce into the wok during assembly. The sauce matrix must be cooked down until it is thick and syrupy before the fries hit the metal. A thick, high-viscosity reduction wraps around the exterior grid lines of the fries like an airtight coating instead of soaking into the potato crumbs."
      },
      {
        "title": "The White Sesame Visual Pop",
        "text": "Never skip the toasted white sesame seed garnish. Against the intense, dark crimson glaze of the caramelized dragon fries, the pale white sesame seeds add an elegant, intentional contrast that visually converts a low-cost plate of French fries into a premium, restaurant-grade appetizer."
      }
    ],
    "storageAndWaste": "Because frozen fries and your bulk master gravy base are highly shelf-stable under strict temperature boundaries, you can run an absolute zero-waste assembly station.\n\n1. The Anti-Clump Frost Protocol\n\nOpening your bulk bag of frozen fries repeatedly next to a boiling wok line introduces ambient steam inside the bag. This creates frost clusters on the potatoes, causing the fryer oil to pop and spray violently, which degrades oil quality rapidly.\n\nThe Setup: Keep your main French fry backup stock locked hard at −18∘C in your chest freezer. Move only a single sub-sampled 1 kg container to your line cooler at the start of the evening shift, allowing rapid operational access while protecting your core inventory from moisture breakdown.\n\n2. Upcycling Leftover Sauced Fries (Zero-Waste Strategy)\n\nBecause this item is coated in a sticky Indo-Chinese glaze, any plates left over due to a canceled delivery order will lose their crispness within 20 minutes on the pickup counter. Do not throw this stock away.\n\nThe Dragon Corn & Potato Fried Rice Extender: Move any unsold, cold dragon fries to your wok station. Coarsely chop the glazed potatoes into small dice. Toss them into a screaming-hot wok along with boiled rice, shredded cabbage, a handful of sweet corn kernels, and a splash of vinegar. The caramelized sugars, garlic, and sesame elements already baked onto the dragon potato pieces act as an exceptional flavor base, transforming dead inventory into a high-demand \"Fiery Dragon Potato & Corn Fried Rice\" lunch thali special for ₹119. This completely salvages your food cost investment, turning potential waste into clear profit!\n\nWhich item or section of your evening fast-food menu are we optimizing next?"
  },
  {
    "id": 135,
    "name": "French Fries (Classic)",
    "prices": [
      "₹59"
    ],
    "categoryId": "burgers-sandwiches",
    "categoryName": "Burgers & Sandwiches",
    "colorAccent": "#0c831f",
    "quickMix": "Adding French Fries (Classic) [କ୍ଲାସିକ୍ ଫ୍ରେଞ୍ଚ ଫ୍ରାଇଜ୍] at a ₹59 retail price point gives your bread and fryer station ...",
    "description": "Adding French Fries (Classic) [କ୍ଲାସିକ୍ ଫ୍ରେଞ୍ଚ ଫ୍ରାଇଜ୍] at a ₹59 retail price point gives your bread and fryer station an unbeatable, high-volume entry-level hook. Positioned strategically at a highly accessible price below ₹60, this classic menu staple functions as a powerful traffic magnet, driving high-volume add-on sales alongside your entry-level veg burgers and rolls.\n\nTo protect your margins and lock in a highly defensive sub-25% food cost at this aggressive price point, you must bypass the labor-intensive process of washing, peeling, and hand-cutting raw potatoes. Instead, operate strictly with 6mm or 9mm frozen commercial straight-cut French fries cooked straight from freeze to fryer in your 2.5L commercial deep fryer. This eliminates kitchen line complexity, standardizes your yield, and drops your live assembly time to under 3.5 minutes.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Standard Serving Pouch (~120g fried output weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Commercial Frozen Fries (6mm/9mm)\t130g Frozen weight (Yields ~120g fried)\t₹9.10",
      "Fine Line Iodized Salt\t2g (The classic seasoning anchor)\t₹0.10",
      "Commercial Frying Oil\t2.5L Fryer absorption loss (Palm/Rice Bran)\t₹4.50",
      "Line Packaging Bag\tPaper fry pouch wrapper sleeve\t₹1.20",
      "Direct Fryer Power\t2000W Fryer 3-minute operational cycle\t₹1.80",
      "TOTAL PRODUCTION COST\t\t₹16.70",
      "Financial Matrix: At a Briefly stated ₹59 retail price, a ₹16.70 raw production cost delivers an outstanding 28.3% Food Cost Percentage! This secures a highly profitable 71.7% Gross Margin (₹42.30 pure profit per portion). Because it requires zero prep labor, zero knife work, and uses zero wet line sauces, it stands out as a pure cash-flow generator."
    ],
    "ingredients": [
      "The Substrate: 130g frozen straight-cut commercial French fries (Keep them completely frozen until the fryer basket drops).",
      "The Flavor Anchor: 2g of fine iodized salt (do not use coarse sea salt; fine table salt forms a tighter molecular bond with the hot oil surface).",
      "The Cooking Medium: Refined palm or rice bran oil inside your 2.5L fryer, calibrated to an ironclad cooking temperature of 180∘C."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "When a ticket prints for Classic Fries, your fryer cook executes the entire process without moving a single step away from the frying station:",
        "timerSeconds": 10
      },
      {
        "title": "Step 1: The Frozen Blast Deep Fry",
        "duration": "3 Mins",
        "detail": "Weigh 130g of frozen fries straight out of your line freezer chest (never let them thaw). Drop them immediately into the 2.5L deep fryer basket at 180∘C. Give the basket an aggressive shake after 30 seconds to prevent the potatoes from clustering together. Fry for exactly 3 minutes until the internal water vapor cooks out and the outer potato starch crust turns a crisp, light golden-yellow.",
        "timerSeconds": 180
      },
      {
        "title": "Step 2: The Double-Drip Oil Drain",
        "duration": "15 Secs",
        "detail": "Lift the fryer basket out of the oil. Shake it vigorously 4 to 5 times over the fryer well. Hook the basket onto the drainage clip for exactly 15 seconds. Shaking and draining eliminates excess surface oil, keeping the fries light and preventing the packaging from turning greasy.",
        "timerSeconds": 15
      },
      {
        "title": "Step 3: The Hot Steel Bowl Salt Toss",
        "duration": "15 Secs",
        "detail": "Dump the crackling hot fries immediately into a clean, dry stainless steel bowl. Dust your 2g of fine salt evenly over the top. Give the bowl 3 to 4 rapid, aggressive upward flips. The fries must be salted while blazing hot (100∘C+); the residual hot surface oil forces the salt crystals to bind permanently to the potato armor.",
        "timerSeconds": 15
      },
      {
        "title": "Step 4: The Pouch Stack & Serve",
        "duration": "10 Secs",
        "detail": "Pour the steaming, crisp golden fries straight into a food-grade paper fry pouch sleeve or a vented cardboard delivery box. The straight cuts will pile up naturally to create great visual height, and pass it to the pickup runner instantly.",
        "timerSeconds": 10
      }
    ],
    "hacks": [
      {
        "title": "The Anti-Thaw Rule",
        "text": "Never, under any circumstances, allow your frozen fries to thaw out on the kitchen counter during slow hours. If frozen fries thaw, the interior ice crystals melt into water, which is absorbed directly by the raw potato starch cells. When dropped into the fryer, this excess moisture causes the fry to turn limp, oil-logged, and soggy within 2 minutes of plating. Store them rock-hard at −18∘C and drop them into the oil frozen."
      },
      {
        "title": "The Hot-Toss Fusion Hack",
        "text": "Instruct your line cooks to never salt fries after placing them in the serving pouch. If dusted cold or inside the box, the salt crystals will simply slip off the potato skin and pool uselessly at the bottom of the container. Tossing them inside a steel bowl the exact second they exit the fryer well uses the oil's high heat to melt and seal the salt layer directly onto the fry."
      },
      {
        "title": "The Vented Packaging Shield",
        "text": "For home-delivery orders, never seal French fries inside a completely airtight plastic bag or un-vented container. The intense residual heat of the fresh-fried potatoes will generate steam trapped inside the package. The bread crumb or potato armor will re-absorb this steam, turning your ultra-crisp fries into a wet, soggy mass by the time the delivery rider arrives. Use paper pouches or punch ventilation holes into the sides of your delivery boxes."
      }
    ],
    "storageAndWaste": "Because commercial frozen fries are par-blanched and flash-frozen at the factory level, they carry a long shelf life, making it easy to run an absolute zero-waste frying line.\n\n1. The Chest Freezer Sub-Sampling Protocol\n\nOpening a bulk 2.5 kg bag of frozen fries repeatedly next to a hot deep fryer introduces ambient kitchen humidity inside the bag. This moisture creates frost clumps on the remaining fries, causing them to sputter and pop violently when dropped into hot oil.\n\nThe Setup: Every afternoon, have your prep team portion the bulk bags into smaller, clear plastic zipper bags containing exactly 650g (5 standard line portions). Keep these sub-sampled bags stacked inside your line freezer chest. Your cook only opens one 650g bag at a time during the evening rush, keeping your core backup inventory pristine and free of frost damage at −18∘C.\n\n2. Upcycling Leftover Cooked Fries (Zero-Waste Strategy)\n\nIf you have a batch of fries that have sat on the line too long due to a canceled delivery ticket or cooking error and have turned cold and limp, do not discard them.\n\nThe Loaded Chicken-Corn Fries Upgrade: Move the cold fries to your starter station. Coarsely chop them up, slice up a cold leftover fried chicken patty from your burger station, and toss them together. Re-flash the mix in your deep fryer for just 45 seconds to restore an intense crispiness. Dump the hot potato and chicken chunks onto a plate, flood it with a ladle of your liquid cheddar cheese sauce mixed with Master Chilli Gravy, scatter whole sweet corn kernels on top, and sell it as a premium \"Loaded Cheesy Chicken-Corn Street Fries\" special for ₹149. This completely reclaims your raw material costs, transforming dead inventory into pure profit!\n\nEvery entry on your quick-service frying, bread, and tawa line manual—covering high-volume master-gravy starters, standardized color-wrapper dumplings, flaky rolls, crispy loaded burgers, butter-toasted sandwiches, and high-velocity fry baskets—is now completely standardized for peak operational speed and profit protection.\n\nWould you like us to compile these individual raw material calculations into a unified Master Shift Opening/Closing Excel Matrix Template to easily track your daily portion logs, or should we audit a beverage tier next?"
  },
  {
    "id": 136,
    "name": "Double Special Omelette",
    "prices": [
      "₹45"
    ],
    "categoryId": "starters",
    "categoryName": "Starters & Pakodas",
    "colorAccent": "#dc2626",
    "quickMix": "Adding the Double Special Omelette (ଡବଲ୍ ସ୍ପେସିଆଲ୍ ଓମଲେଟ୍) at a ₹45 retail price point to your live tawa station deliver...",
    "description": "Adding the Double Special Omelette (ଡବଲ୍ ସ୍ପେସିଆଲ୍ ଓମଲେଟ୍) at a ₹45 retail price point to your live tawa station delivers a massive volume anchor. In the evening street-food and quick-service segment, egg items are the ultimate high-velocity assets. They serve as an instant standalone snack for health-conscious commuters, a popular side dish alongside your flaky rolls, and a quick protein upgrade that keeps your cash flow moving fast.\n\nTo hit a sub-35% food cost at this hyper-competitive ₹45 price while standing out from basic street stalls, your line cooks will execute a Double-Egg Fluffy Volume Matrix. By whipping two standard commercial eggs with a precise ratio of crisp local aromatics and a 10ml shot of your Master Chilli Gravy Base directly on a high-heat flat tawa, you create an omelette that expands dramatically in physical size, fills the plate completely, and delivers an assembly time of under 90 seconds.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Large Fluffy Omelette (~140g finished weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Commercial Eggs (Size M/L)\t2 Units (Sourced via wholesale tray crates)\t₹10.00",
      "Master Chilli Gravy Base\t10ml splash (The secret umami catalyst)\t₹0.70",
      "The Crunch Aromatics\t20g Finely minced onions + 1 slit green chilli\t₹1.00",
      "Fresh Green Layer\t5g Chopped fresh coriander leaves\t₹0.20",
      "The Street Spice Mix\tHaldi, red chilli powder, fine iodized salt\t₹0.30",
      "Commercial Cooking Oil\t8ml (For aggressive tawa searing & fluffing)\t₹1.20",
      "Line Packaging / Serving Plate\tButter-paper-lined bio plate or paper pouch\t₹1.50",
      "Direct Tawa Gas Fuel\tHigh-blast burner 60-second cycle\t₹1.00",
      "TOTAL PRODUCTION COST\t\t₹15.90",
      "Financial Matrix: At a ₹45 retail price, a ₹15.90 raw production cost delivers an outstanding 35.3% Food Cost Percentage! This secures a solid 64.7% Gross Margin (₹29.10 pure profit per omelette). Because egg inventory has a rapid daily turnover and requires zero advanced afternoon cooking lines, this item functions as a highly defensive cash-flow stabilizer for your station."
    ],
    "ingredients": [
      "The Protein Base: 2 fresh commercial chicken eggs.",
      "The Flavor Engine: 10ml of your pre-made Master Chilli Gravy Base. (Adding a splash of master gravy introduces pre-cooked garlic, dark soy, and cornstarch starches straight into the raw egg liquid, which structurally thickens the mix and traps air bubbles for a fluffier texture).",
      "The Tawa Aromatics: 20g finely minced raw onions, 1 finely chopped local green chilli, and a small handful of fresh coriander leaves.",
      "The Dry Spice Dust: 41​ tsp fine table salt, a pinch of turmeric (for a rich, bright yellow color identity), and a pinch of red chilli powder.",
      "The Searing Agent: 8ml refined palm or rice bran oil."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "When an order ticket for a Double Special Omelette prints, your tawa cook executes the entire preparation, flip, and plate sequence in under 90 seconds flat:",
        "timerSeconds": 10
      },
      {
        "title": "Step 1: The High-Speed Whisk & Starched Aeration",
        "duration": "20 Secs",
        "detail": "Crack 2 eggs directly into a stainless steel whipping mug. Throw in your minced onions, green chillies, coriander, dry spices, and the 10ml splash of Master Chilli Gravy. Using a wire whisk or fork, beat the mixture aggressively for 15 seconds. The rapid whisking forces air into the egg proteins, while the starches in the master gravy lock those air pockets in place, prepping the liquid to puff up instantly on the heat.",
        "timerSeconds": 20
      },
      {
        "title": "Step 2: The Screaming-Hot Tawa Pour",
        "duration": "25 Secs",
        "detail": "Ladle 8ml of cooking oil onto the high-heat zone of your flat-top tawa. The oil must be screaming hot and shimmering, but not smoking (175∘C+ clearence). Pour the whisked egg mixture directly into the center of the hot oil. It will sizzle violently and expand outward immediately. Use your spatula to rapidly push the raw liquid from the center to the outer edges, expanding the omelette's circumference to fill out the tawa surface.",
        "timerSeconds": 25
      },
      {
        "title": "Step 3: The Center Edge Snap-Flip",
        "duration": "30 Secs",
        "detail": "Let the bottom layer sear for 25 seconds until it locks into a deeply caramelized, golden-brown crust. Slide your long steel spatula completely under the center of the omelette, execute a swift, clean snap-flip, and cook the reverse side for exactly 15 seconds to flash-set the top moisture without drying out the interior egg cells.",
        "timerSeconds": 30
      },
      {
        "title": "Step 4: The Trifold Stack & Plate",
        "duration": "15 Secs",
        "detail": "Fold the omelette into a clean rectangle or half-moon shape using your spatula. Slide the steaming, fluffy omelette straight onto a butter-paper-lined bio plate or wrap it inside greaseproof delivery paper. Dust the top with a pinch of black pepper or chaat masala, and hand it to the pickup runner instantly.",
        "timerSeconds": 15
      }
    ],
    "hacks": [
      {
        "title": "The Master Gravy Volume Hack",
        "text": "Standard street omelettes made with just eggs and salt can deflate into a flat, rubbery sheet within 3 minutes of plating. Mixing a 10ml splash of your pre-made Master Chilli Gravy Base into the raw egg liquid is a highly effective menu engineering trick. The cornstarch elements inside your master gravy bind with the egg whites, creating a reinforced molecular framework that traps steam. This ensures the omelette puffs up to twice its normal thickness and retains its plump, premium appearance even through a 15-minute delivery ride."
      },
      {
        "title": "The Screaming-Hot Pour Rule",
        "text": "Never pour whisked egg liquid onto a cold or medium-warm tawa surface. If the surface is cool, the egg will absorb the cooking oil like a sponge, turning greasy, heavy, and flat. The oil must be hot enough to instantly flash-fry the bottom layer of egg the microsecond it hits the steel, driving air upward to generate maximum fluffiness and a clean, non-greasy bite."
      },
      {
        "title": "The Uniform Onion Mince",
        "text": "Ensure your prep team uses a mechanical chopper or a sharp knife to mince the onions into tiny, uniform 2mm pieces. If the onion chunks are cut too large and heavy, they will sink to the bottom of the raw egg mix, break the delicate egg protein bonds during the pour, and cause the omelette to split apart violently when your cook attempts the high-speed flip."
      }
    ],
    "storageAndWaste": "Egg items carry the lowest inventory waste risk in your entire kitchen because shell eggs are naturally protected and highly shelf-stable under basic operational hygiene parameters.\n\n1. The Raw Egg Crate Rotation\n\nNever store bulk egg crates directly on the kitchen floor near a hot tawa burner line. Ambient kitchen heat and humidity fluctuations will accelerate the thinning of the inner egg whites, causing your omelettes to lose their fluffing capability.\n\nThe Setup: Keep your bulk wholesale egg crates stored in a cool, dry pantry area stacked neatly on plastic pallets. Move only two crates (60 eggs) down to a designated countertop holding well right next to your tawa station at the start of the evening rush. This keeps your backup stock protected while ensuring lightning-fast access for live tickets.\n\n2. Upcycling Near-Expiry Component Assets (Zero-Waste Strategy)\n\nBecause shell eggs are ordered and consumed fresh daily, raw material loss is almost non-existent. However, if you have a slow weather night and end the shift with small quantities of pre-chopped onion-chilli-coriander mix, do not discard it.\n\nThe Premium Egg Bhurji / Roll Extender Base: Gather any leftover minced onion and chilli mix at closing time, seal it tightly in a plastic container, and place it in your line chiller at 2∘C to 4∘C. The next afternoon, use this seasoned aromatic mix as the high-flavor starting base for your high-margin Double Egg Rolls or flash-cook it into a Street-Style Egg Bhurji Starter for your lunch crowd. This ensures zero vegetable waste on your line, protecting your baseline profit percentages perfectly.\n\nWith your starters, dumplings, flaky rolls, loaded burgers, butter-toasted sandwiches, crisp fry baskets, and now this high-speed Double Special Omelette fully dialed in, your quick-service manual is exceptionally robust.\n\nWhat section of your menu or brand operations shall we pressure-test next? We can map out a beverage module, design an efficient inventory tracking tool, or optimize your lunch thali systems. Propose your next target!"
  },
  {
    "id": 137,
    "name": "Double Masala Omelette",
    "prices": [
      "₹39"
    ],
    "categoryId": "starters",
    "categoryName": "Starters & Pakodas",
    "colorAccent": "#dc2626",
    "quickMix": "An entry-level Double Masala Omelette (ଡବଲ୍ ମସଲା ଓମଲେଟ୍) at a sharp ₹39 retail price point is a high-volume vegetarian-a...",
    "description": "An entry-level Double Masala Omelette (ଡବଲ୍ ମସଲା ଓମଲେଟ୍) at a sharp ₹39 retail price point is a high-volume vegetarian-adjacent champion for your tawa station. Positioned strategically under ₹40, this classic item functions as a massive foot-traffic driver for budget-conscious evening commuters, students, and fitness enthusiasts looking for a low-cost, high-protein snack.\n\nThe commercial challenge at ₹39 is protecting your margins against fluctuating wholesale egg prices.\n\nThe fast-food operational secret to locking in a sub-30% food cost is a high-yield volume strategy: instead of relying solely on egg volume, you flood the mix with a precise, high-volume ratio of finely minced onions and green chillies to physically bulk up the omelette. When whipped with a 5ml splash of your Master Chilli Gravy Base, the starches trap air pockets, forcing two standard eggs to balloon across the entire surface of your flat-top tawa to create a massive, plate-covering presentation.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Large Fluffy Omelette (~150g finished weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Commercial Eggs (Size M)\t2 Units (Wholesale tray crate sourcing)\t₹7.50",
      "Bulk Onion Volume Extender\t30g Finely minced raw onions (The primary bulk filler)\t₹0.75",
      "The Spicy Punch\t1 Finely chopped local green chilli\t₹0.20",
      "Master Chilli Gravy Base\t5ml splash (The structural starch catalyst)\t₹0.35",
      "The Dry Masala Engine\tHaldi, red chilli powder, garam masala, fine salt\t₹0.30",
      "Commercial Cooking Oil\t6ml (For tawa searing & high-heat fluffing)\t₹0.90",
      "Line Packaging Bag\tButter-paper-lined paper pouch sleeve\t₹1.00",
      "Direct Tawa Gas Fuel\tHigh-blast burner 60-second cycle overhead\t₹0.50",
      "TOTAL PRODUCTION COST\t\t₹11.50",
      "Financial Matrix: At a ₹39 retail price, a ₹11.50 raw production cost delivers an incredible 29.5% Food Cost Percentage! This secures a spectacular 70.5% Gross Margin (₹27.50 pure profit per omelette). Because egg items require zero advanced afternoon prep cooking lines and have an instant daily inventory turnover, this item acts as an elite cash-flow stabilizer for your live kitchen."
    ],
    "ingredients": [
      "The Protein Base: 2 fresh commercial chicken eggs (Size M).",
      "The Bulk Extender: 30g finely minced raw onions. (Minced onions absorb the egg liquid and expand on the tawa, giving the item a heavy, thick texture that satisfies the customer for just ₹39).",
      "The Heat Identity: 1 finely chopped local green chilli.",
      "The Flavor Catalyst: 5ml of your pre-made Master Chilli Gravy Base. (The cornstarch and garlic-soy notes inside your master gravy bind with the egg whites to form a structural framework that traps steam, keeping the omelette from deflating).",
      "The Dry Masala Engine: 41​ tsp fine table salt, a pinch of turmeric (for a bright yellow color), 41​ tsp red chilli powder, and a pinch of commercial kitchen king or garam masala.",
      "The Searing Agent: 6ml refined palm or rice bran oil."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "When an order ticket for a ₹39 Double Masala Omelette prints, your tawa cook executes the preparation, flip, and wrap sequence in under 90 seconds flat:",
        "timerSeconds": 10
      },
      {
        "title": "Step 1: The High-Volume Whisk & Starch Lock",
        "duration": "20 Secs",
        "detail": "Crack 2 eggs directly into a stainless steel whipping mug. Add your 30g of minced onions, chopped green chillies, the Dry Masala Engine, and the 5ml splash of Master Chilli Gravy. Whisk the mixture aggressively with a fork for 15 seconds. The rapid whisking forces air into the egg proteins, while the starches inside the master gravy lock those air pockets in place.",
        "timerSeconds": 20
      },
      {
        "title": "Step 2: The High-Heat Tawa Expansion",
        "duration": "25 Secs",
        "detail": "Ladle 6ml of cooking oil onto the high-heat zone of your flat-top tawa. The oil must be screaming hot and shimmering (175∘C+ clearance). Pour the whisked egg mixture directly into the center of the tawa. It will sizzle violently. Use your spatula to rapidly push the pooling raw liquid from the center out to the edges, expanding the omelette's circumference to its absolute maximum limit.",
        "timerSeconds": 25
      },
      {
        "title": "Step 3: The Center Snap-Flip",
        "duration": "30 Secs",
        "detail": "Let the bottom layer sear for 25 seconds until it locks into a deeply caramelized, golden-brown masala crust. Slide your long steel spatula completely under the center, execute a swift, clean snap-flip, and cook the reverse side for exactly 15 seconds to flash-set the remaining moisture without drying out the core egg cells.",
        "timerSeconds": 30
      },
      {
        "title": "Step 4: The Half-Moon Stack & Wrap",
        "duration": "15 Secs",
        "detail": "Fold the massive omelette cleanly into a half-moon or tight rectangle using your spatula. Slide the steaming, fluffy masala omelette straight into a budget-friendly butter-paper-lined paper pouch sleeve. Hand it to the pickup runner instantly.",
        "timerSeconds": 15
      }
    ],
    "hacks": [
      {
        "title": "The Onion-to-Egg Ratio Hack",
        "text": "At a budget price point of ₹39, you cannot afford to have a flat, skinny presentation. Increasing your raw onion mince to exactly 30g per portion acts as a structural volume expander. The dense onion particles separate the egg layers during the high-heat pour, allowing steam to cook through the center rapidly and puffing the physical diameter of the omelette so it looks massive on the serving counter."
      },
      {
        "title": "The Fine Masala Distribution",
        "text": "Never let your cooks throw large, uneven pinches of garam masala or salt directly onto the tawa. If spices clump together inside the whisking mug, the customer will hit a bitter, salty hot-spot. Have your afternoon prep team pre-blend your salt, haldi, chilli powder, and garam masala into a single, unified \"Master Masala Container\" with a dedicated 21​ tsp portion scoop. This guarantees absolute flavor consistency across every single shift."
      },
      {
        "title": "The Screaming-Hot Tawa Rule",
        "text": "Never pour whisked egg liquid onto a cold or semi-warm tawa surface. A cool tawa causes the raw egg cells to absorb the cooking oil like a sponge, leaving the final omelette greasy, heavy, flat, and unappealing. The oil must be shimmering hot to instantly flash-fry the bottom layer of egg the microsecond it hits the steel, driving air upward to generate an immediate fluffiness."
      }
    ],
    "storageAndWaste": "Egg items carry the lowest inventory waste risk in your entire kitchen because shell eggs are naturally protected and highly shelf-stable under basic operational parameters.\n\n1. The Bulk Crate Protection\n\nNever store bulk egg crates directly on the kitchen floor near a hot tawa burner line. Ambient kitchen heat and humidity fluctuations will accelerate the thinning of the inner egg whites, causing your omelettes to lose their fluffing capability on the tawa.\n\nThe Line Setup: Keep your bulk wholesale egg crates stored in a cool, dry pantry area stacked neatly on plastic pallets. Move only one crate (30 eggs) down to a designated countertop holding well right next to your tawa station at the start of the evening rush. This keeps your backup stock protected while ensuring lightning-fast access for live tickets.\n\n2. Upcycling Near-Expiry Component Assets (Zero-Waste Strategy)\n\nBecause shell eggs are ordered and consumed fresh daily, raw material loss is practically non-existent. However, if you end the shift with small quantities of pre-chopped onion-chilli mix, do not discard it.\n\nThe Premium Egg Roll Extender Base: Gather any leftover minced onion and chilli mix at closing time, seal it tightly in a plastic container, and place it in your line chiller at 2∘C to 4∘C. The next afternoon, use this seasoned aromatic mix as the high-flavor starting base for your high-margin ₹69 Veg Burger Patty Mix or flash-cook it into an Egg Roll lining. This ensures zero vegetable waste on your line, protecting your baseline profit percentages perfectly.\n\nWhich item or section of your evening fast-food menu manual are we standardizing into this high-margin format next? We can seamlessly map out your beverage module or optimize your daily inventory sheet template."
  },
  {
    "id": 138,
    "name": "Single Special Omelette",
    "prices": [
      "₹35"
    ],
    "categoryId": "starters",
    "categoryName": "Starters & Pakodas",
    "colorAccent": "#dc2626",
    "quickMix": "An entry-level Single Special Omelette (ସିଙ୍ଗଲ୍ ସ୍ପେସିଆଲ୍ ଓମଲେଟ୍) at a sharp ₹35 retail price point gives your live tawa...",
    "description": "An entry-level Single Special Omelette (ସିଙ୍ଗଲ୍ ସ୍ପେସିଆଲ୍ ଓମଲେଟ୍) at a sharp ₹35 retail price point gives your live tawa station an unbeatable, high-margin single-egg hook. Positioned strategically beneath the ₹40 threshold, this item acts as a massive traffic driver—functioning as a lightning-fast standalone protein snack for evening commuters or a low-barrier add-on item that customers seamlessly pair with your flaky rolls.\n\nThe commercial challenge with a single-egg menu item at ₹35 is preventing it from looking thin, skinny, or flat on the plate.\n\nThe fast-food operational secret to locking in an elite sub-30% food cost while maintaining excellent plate coverage is The Aerated Starch Expansion: whipping one standard large egg with a precise, volume-bulking ratio of finely minced local aromatics and a 5ml splash of your Master Chilli Gravy Base. The pre-cooked starches inside your master gravy bind tightly with the egg whites, reinforcing the molecular structure to trap steam. This forces a single egg to balloon dramatically across your high-heat flat tawa, creating a plump, fluffy, and highly satisfying presentation.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Standard Fluffy Omelette (~95g finished weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Commercial Egg (Size L)\t1 Unit (Wholesale tray crate sourcing)\t₹5.00",
      "Master Chilli Gravy Base\t5ml splash (The structural starch binder)\t₹0.35",
      "The Crunch Aromatics\t15g Finely minced onions + 1 slit green chilli\t₹0.75",
      "Fresh Green Layer\t3g Chopped fresh coriander leaves\t₹0.15",
      "The Street Spice Mix\tHaldi, red chilli powder, fine iodized salt\t₹0.20",
      "Commercial Cooking Oil\t5ml (For clean tawa searing & high-heat puffing)\t₹0.75",
      "Line Packaging Bag\tButter-paper-lined paper pouch sleeve\t₹1.00",
      "Direct Tawa Gas Fuel\tHigh-blast burner operational cycle overhead\t₹0.50",
      "TOTAL PRODUCTION COST\t\t₹9.70",
      "Financial Matrix: At a ₹35 retail price, a ₹9.70 raw production cost delivers an incredible 27.7% Food Cost Percentage! This secures a spectacular 72.3% Gross Margin (₹25.30 pure profit per omelette). Because egg inventory requires zero advanced afternoon prep cooking lines and has an instantaneous daily turnover, this item functions as an elite cash-flow stabilizer for your live kitchen."
    ],
    "ingredients": [
      "The Protein Base: 1 fresh commercial chicken egg (Size L preferred for maximum albumen volume).",
      "The Flavor Anchor: 5ml of your pre-made Master Chilli Gravy Base. (Adding a touch of chilli gravy introduces pre-cooked garlic, soy, and cornstarch starches straight into the raw egg liquid, which structurally thickens the mix and traps air bubbles for a fluffier texture).",
      "The Tawa Aromatics: 15g finely minced raw onions, 1 finely chopped local green chilli, and a small handful of fresh coriander leaves.",
      "The Dry Spice Dust: 41​ tsp fine table salt, a pinch of turmeric (for a rich, bright yellow color identity), and a pinch of red chilli powder.",
      "The Searing Agent: 5ml refined palm or rice bran oil."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "When an order ticket for a ₹35 Single Special Omelette prints, your tawa cook executes the entire preparation, flip, and wrap sequence in under 75 seconds flat:",
        "timerSeconds": 10
      },
      {
        "title": "Step 1: The High-Speed Whisk & Starched Aeration",
        "duration": "15 Secs",
        "detail": "Crack 1 large egg directly into a stainless steel whipping mug. Throw in your minced onions, green chillies, coriander, dry spices, and the 5ml splash of Master Chilli Gravy. Using a fork or small wire whisk, beat the mixture aggressively for 12 seconds. The rapid whisking forces air into the egg proteins, while the starches in the master gravy lock those air pockets in place.",
        "timerSeconds": 15
      },
      {
        "title": "Step 2: The Screaming-Hot Tawa Pour",
        "duration": "20 Secs",
        "detail": "Ladle 5ml of cooking oil onto the high-heat zone of your flat-top tawa. The oil must be screaming hot and shimmering (175∘C+ clearance). Pour the whisked egg mixture directly into the center of the hot oil. It will sizzle violently and expand outward immediately. Use your spatula to rapidly guide the raw liquid from the center to the outer edges, expanding the omelette's circumference to its maximum physical limit.",
        "timerSeconds": 20
      },
      {
        "title": "Step 3: The Center Snap-Flip",
        "duration": "25 Secs",
        "detail": "Let the bottom layer sear for 15 seconds until it locks into a deeply caramelized, golden-brown crust. Slide your long steel spatula completely under the center of the omelette, execute a swift, clean snap-flip, and cook the reverse side for exactly 10 seconds to flash-set the remaining moisture without drying out the interior egg cells.",
        "timerSeconds": 25
      },
      {
        "title": "Step 4: The Clean Roll & Paper Pouch Pack",
        "duration": "15 Secs",
        "detail": "Roll or fold the omelette cleanly into a tight half-moon or neat rectangular log using your spatula. Slide the steaming, fluffy single omelette straight into a budget-friendly butter-paper-lined paper pouch sleeve. Hand it to the pickup runner instantly.",
        "timerSeconds": 15
      }
    ],
    "hacks": [
      {
        "title": "The Master Gravy Deflation Shield",
        "text": "Standard street omelettes made with just a single egg and salt deflate into a flat, rubbery, unappealing sheet within 2 minutes of plating. Mixing a 5ml splash of your pre-made Master Chilli Gravy Base into the raw egg liquid is a crucial line hack. The cornstarch elements inside your master gravy bind with the egg whites, creating a reinforced molecular framework that traps steam. This ensures the omelette puffs up to twice its normal thickness and retains its plump appearance on the counter."
      },
      {
        "title": "The Screaming-Hot Pour Rule",
        "text": "Never pour whisked egg liquid onto a cool or semi-warm tawa surface. A cool tawa causes the raw egg cells to absorb the cooking oil like a sponge, leaving the final omelette greasy, heavy, and flat. The oil must be shimmering hot to instantly flash-fry the bottom layer of egg the microsecond it hits the steel, driving air upward to generate maximum fluffiness and a clean, non-greasy bite."
      },
      {
        "title": "The Uniform Onion Mince",
        "text": "Ensure your prep team uses a sharp knife or mechanical chopper to mince the onions into tiny, uniform 2mm pieces. If the onion chunks are cut too large and heavy, they will sink to the bottom of the raw egg mix, break the delicate egg protein bonds during the pour, and cause the single egg to split apart violently when your cook attempts the high-speed flip."
      }
    ],
    "storageAndWaste": "Egg items carry the lowest inventory waste risk in your entire kitchen because shell eggs are naturally protected and highly shelf-stable under basic operational parameters.\n\n1. The Raw Egg Crate Rotation\n\nNever store bulk egg crates directly on the kitchen floor near a hot tawa burner line. Ambient kitchen heat and humidity fluctuations will accelerate the thinning of the inner egg whites, causing your omelettes to lose their fluffing capability on the tawa.\n\nThe Line Setup: Keep your bulk wholesale egg crates stored in a cool, dry pantry area stacked neatly on plastic pallets. Move only one crate (30 eggs) down to a designated countertop holding well right next to your tawa station at the start of the evening rush. This keeps your backup stock protected while ensuring lightning-fast access for live tickets.\n\n2. Upcycling Near-Expiry Component Assets (Zero-Waste Strategy)\n\nBecause shell eggs are ordered and consumed fresh daily, raw material loss is practically non-existent. However, if you end the shift with small quantities of pre-chopped onion-chilli-coriander mix, do not discard it.\n\nThe Premium Egg Roll Extender Base: Gather any leftover minced onion and chilli mix at closing time, seal it tightly in a plastic container, and place it in your line chiller at 2∘C to 4∘C. The next afternoon, use this seasoned aromatic mix as the high-flavor starting base for your high-margin Double Egg Rolls or flash-cook it into an Egg Roll lining. This ensures zero vegetable waste on your line, protecting your baseline profit percentages perfectly.\n\nYour evening operations manual—fully spanning high-speed master-gravy starters, standardized colored-wrapper dumplings, high-margin flaky rolls, crispy loaded burgers, butter-toasted sandwiches, crisp fry baskets, and your high-velocity egg lineup—is now completely standardized for peak operational speed, absolute portion control, and max profit protection.\n\nWould you like us to map out a standardized menu format for your beverage and mocktail tier, or should we design an automated kitchen daily closing waste-log protocol next?"
  },
  {
    "id": 139,
    "name": "Single Masala Omelette",
    "prices": [
      "₹29"
    ],
    "categoryId": "starters",
    "categoryName": "Starters & Pakodas",
    "colorAccent": "#dc2626",
    "quickMix": "An entry-level Single Masala Omelette (ସିଙ୍ଗଲ୍ ମସଲା ଓମଲେଟ୍) at a sharp ₹29 retail price point is the absolute lowest-bar...",
    "description": "An entry-level Single Masala Omelette (ସିଙ୍ଗଲ୍ ମସଲା ଓମଲେଟ୍) at a sharp ₹29 retail price point is the absolute lowest-barrier protein hook for your live tawa station. Positioned strategically below the ₹30 mark, this classic item functions as a high-volume traffic magnet for evening commuters, students, and budget-seeking laborers looking for an affordable, hot snack.\n\nThe commercial challenge at ₹29 is protecting your margins against shifting wholesale egg prices while preventing a single egg from looking thin or like a flat, dry skin on the plate.\n\nThe fast-food operational secret to locking in an elite sub-25% food cost while maintaining great plate coverage is The Particle Extension Hack: flooding the mix with a precise, high-volume ratio of finely minced onions and green chillies to physically bulk up the single egg. When whipped with a 5ml splash of your Master Chilli Gravy Base, the starches trap steam, forcing a single egg to balloon across the tawa into a substantial, highly satisfying presentation.",
    "portionControl": "",
    "costBreakdown": [
      "Target Yield: 1 Standard Fluffy Omelette (~100g finished weight)",
      "Ingredient Component\tQuantity Required\tEstimated Cost (INR)",
      "Commercial Egg (Size M/L)\t1 Unit (Wholesale tray crate sourcing)\t₹5.00",
      "Bulk Onion Volume Extender\t20g Finely minced raw onions (The primary filler)\t₹0.50",
      "The Spicy Punch\t1 Finely chopped local green chilli\t₹0.20",
      "Master Chilli Gravy Base\t5ml splash (The structural starch binder)\t₹0.35",
      "The Dry Masala Engine\tHaldi, red chilli powder, garam masala, fine salt\t₹0.20",
      "Commercial Cooking Oil\t4ml (For clean tawa searing & high-heat puffing)\t₹0.60",
      "Line Packaging Bag\tButter-paper-lined paper pouch sleeve\t₹1.00",
      "Direct Tawa Gas Fuel\tHigh-blast burner operational cycle overhead\t₹0.50",
      "TOTAL PRODUCTION COST\t\t₹8.35",
      "Financial Matrix: At a ₹29 retail price, a ₹8.35 raw production cost delivers an incredible 28.8% Food Cost Percentage! This secures a spectacular 71.2% Gross Margin (₹20.65 pure profit per omelette). Because egg inventory requires zero advanced afternoon prep cooking lines and has an instantaneous daily turnover, this item functions as an elite cash-flow stabilizer for your live kitchen."
    ],
    "ingredients": [
      "The Protein Base: 1 fresh commercial chicken egg (Size M/L).",
      "The Bulk Extender: 20g finely minced raw onions. (Minced onions absorb the egg liquid and expand on the tawa, giving the single egg a heavy, thick texture that satisfies the customer for just ₹29).",
      "The Heat Identity: 1 finely chopped local green chilli.",
      "The Flavor Catalyst: 5ml of your pre-made Master Chilli Gravy Base. (The cornstarch and garlic-soy notes inside your master gravy bind with the egg whites to form a structural framework that traps steam, keeping the omelette from deflating).",
      "The Dry Masala Engine: 41​ tsp fine table salt, a pinch of turmeric (for a bright yellow color), 41​ tsp red chilli powder, and a pinch of commercial kitchen king or garam masala.",
      "The Searing Agent: 4ml refined palm or rice bran oil."
    ],
    "steps": [
      {
        "title": "Preparation Note",
        "duration": "Continuous",
        "detail": "When an order ticket for a ₹29 Single Masala Omelette prints, your tawa cook executes the preparation, flip, and wrap sequence in under 75 seconds flat:",
        "timerSeconds": 10
      },
      {
        "title": "Step 1: The High-Volume Whisk & Starch Lock",
        "duration": "15 Secs",
        "detail": "Crack 1 egg directly into a stainless steel whipping mug. Add your 20g of minced onions, chopped green chillies, the Dry Masala Engine, and the 5ml splash of Master Chilli Gravy. Whisk the mixture aggressively with a fork for 12 seconds. The rapid whisking forces air into the egg proteins, while the starches inside the master gravy lock those air pockets in place.",
        "timerSeconds": 15
      },
      {
        "title": "Step 2: The High-Heat Tawa Expansion",
        "duration": "20 Secs",
        "detail": "Ladle 4ml of cooking oil onto the high-heat zone of your flat-top tawa. The oil must be screaming hot and shimmering (175∘C+ clearance). Pour the whisked egg mixture directly into the center of the tawa. It will sizzle violently. Use your spatula to rapidly push the pooling raw liquid from the center out to the edges, expanding the omelette's circumference to its absolute maximum limit.",
        "timerSeconds": 20
      },
      {
        "title": "Step 3: The Center Snap-Flip",
        "duration": "25 Secs",
        "detail": "Let the bottom layer sear for 15 seconds until it locks into a deeply caramelized, golden-brown masala crust. Slide your long steel spatula completely under the center, execute a swift, clean snap-flip, and cook the reverse side for exactly 10 seconds to flash-set the remaining moisture without drying out the core egg cells.",
        "timerSeconds": 25
      },
      {
        "title": "Step 4: The Half-Moon Stack & Wrap",
        "duration": "15 Secs",
        "detail": "Fold the omelette cleanly into a half-moon or tight rectangle using your spatula. Slide the steaming, fluffy masala omelette straight into a budget-friendly butter-paper-lined paper pouch sleeve. Hand it to the pickup runner instantly.",
        "timerSeconds": 15
      }
    ],
    "hacks": [
      {
        "title": "The Onion-to-Egg Ratio Hack",
        "text": "At a budget price point of ₹29, you cannot afford to have a flat, skinny presentation. Increasing your raw onion mince to exactly 20g per portion acts as a structural volume expander for a single egg. The dense onion particles separate the egg layers during the high-heat pour, allowing steam to cook through the center rapidly and puffing the physical diameter of the omelette so it looks massive on the serving counter."
      },
      {
        "title": "The Fine Masala Distribution",
        "text": "Never let your cooks throw large, uneven pinches of garam masala or salt directly onto the tawa. If spices clump together inside the whisking mug, the customer will hit a bitter, salty hot-spot. Have your afternoon prep team pre-blend your salt, haldi, chilli powder, and garam masala into a single, unified \"Master Masala Container\" with a dedicated 21​ tsp portion scoop. This guarantees absolute flavor consistency across every single shift."
      },
      {
        "title": "The Screaming-Hot Tawa Rule",
        "text": "Never pour whisked egg liquid onto a cold or semi-warm tawa surface. A cool tawa causes the raw egg cells to absorb the cooking oil like a sponge, leaving the final omelette greasy, heavy, flat, and unappealing. The oil must be shimmering hot to instantly flash-fry the bottom layer of egg the microsecond it hits the steel, driving air upward to generate an immediate fluffiness."
      }
    ],
    "storageAndWaste": "Egg items carry the lowest inventory waste risk in your entire kitchen because shell eggs are naturally protected and highly shelf-stable under basic operational parameters.\n\n1. The Bulk Crate Protection\n\nNever store bulk egg crates directly on the kitchen floor near a hot tawa burner line. Ambient kitchen heat and humidity fluctuations will accelerate the thinning of the inner egg whites, causing your omelettes to lose their fluffing capability on the tawa.\n\nThe Line Setup: Keep your bulk wholesale egg crates stored in a cool, dry pantry area stacked neatly on plastic pallets. Move only one crate (30 eggs) down to a designated countertop holding well right next to your tawa station at the start of the evening rush. This keeps your backup stock protected while ensuring lightning-fast access for live tickets.\n\n2. Upcycling Near-Expiry Component Assets (Zero-Waste Strategy)\n\nBecause shell eggs are ordered and consumed fresh daily, raw material loss is practically non-existent. However, if you end the shift with small quantities of pre-chopped onion-chilli mix, do not discard it.\n\nThe Premium Egg Roll Extender Base: Gather any leftover minced onion and chilli mix at closing time, seal it tightly in a plastic container, and place it in your line chiller at 2∘C to 4∘C. The next afternoon, use this seasoned aromatic mix as the high-flavor starting base for your high-margin ₹69 Veg Burger Patty Mix or flash-cook it into an Egg Roll lining. This ensures zero vegetable waste on your line, protecting your baseline profit percentages perfectly."
  },
  {
    "id": 201,
    "name": "Prawn Patrapoda",
    "prices": [
      "₹149"
    ],
    "categoryId": "patrapoda",
    "categoryName": "Signature Patrapoda",
    "colorAccent": "#dc2626",
    "quickMix": "Juicy prawns in explosive spicy mustard marinade, sealed in banana leaf & charcoal-kissed.",
    "description": "Our house specialty—slow-cooked in banana leaves. Perfectly spiced. Juicy prawns smothered in a fiery mustard marinade, sealed tightly in clean banana leaves and charcoal-grilled to lock in the smoky juices.",
    "portionControl": "Single portion: 1 pack of banana-leaf wrapped prawns (approx 8-10 prawns).",
    "costBreakdown": [
      "Component\tCost",
      "Cleaned Prawns\t₹45.00",
      "Mustard Paste & Marinade\t₹8.00",
      "Banana Leaf & Garnish\t₹4.00",
      "Charcoal Smoke Fuel\t₹5.00",
      "Total Cost\t₹62.00"
    ],
    "ingredients": [
      "8-10 Small-Medium White Prawns (Cleaned & Deveined)",
      "2 tbsp Fresh Mustard Paste (Besara)",
      "1 tsp Garlic-Chilli Paste",
      "1 tsp Mustard Oil",
      "1 clean fresh banana leaf sheet",
      "Salt and Turmeric to taste"
    ],
    "steps": [
      {
        "title": "Marinade Setup",
        "duration": "5 Mins",
        "detail": "Clean prawns and toss with mustard paste, garlic-chilli paste, mustard oil, salt, and turmeric. Let sit for 5 minutes.",
        "timerSeconds": 300
      },
      {
        "title": "Banana Leaf Wrapping",
        "duration": "2 Mins",
        "detail": "Wilt the banana leaf over flame to make it pliable. Wrap the marinated prawns tightly inside, folding the corners and securing it with thread.",
        "timerSeconds": 120
      },
      {
        "title": "Slow Smoked Charcoal Grill",
        "duration": "8 Mins",
        "detail": "Place the leaf pocket over low-medium charcoal grill. Cook for 4 minutes per side until the banana leaf turns dark brown and charred.",
        "timerSeconds": 480
      },
      {
        "title": "Rest and Plate",
        "duration": "1 Min",
        "detail": "Let the pocket rest for 1 minute before opening. Serve hot in the leaf wrapper with onion rings.",
        "timerSeconds": 60
      }
    ],
    "hacks": [
      {
        "title": "Wilt leaf",
        "text": "Always heat the banana leaf over open flame for 3 seconds before wrapping. It softens the fibers and prevents the leaf from tearing."
      },
      {
        "title": "Mustard oil",
        "text": "Use pure cold-pressed mustard oil in the marinade for that authentic street-style Odia punch."
      }
    ],
    "storageAndWaste": "Keep raw prawns on ice. Prepare marinade in advance and store in line chiller for up to 3 days. Wrap and grill only fresh on order."
  },
  {
    "id": 202,
    "name": "Chicken Patrapoda",
    "prices": [
      "₹119"
    ],
    "categoryId": "patrapoda",
    "categoryName": "Signature Patrapoda",
    "colorAccent": "#dc2626",
    "quickMix": "Tender chicken cubes in explosive garlic-chilli-mustard marinade, leaf-wrapped and charcoal-grilled.",
    "description": "Tender boneless chicken pieces smothered in fresh mustard-garlic paste and green chillies, wrapped in banana leaf and slow-cooked over charcoal for a juicy, smoky, melt-in-the-mouth texture.",
    "portionControl": "Single portion: 1 pack of banana-leaf wrapped chicken (approx 100g raw chicken).",
    "costBreakdown": [
      "Component\tCost",
      "Chicken Cubes (100g)\t₹25.00",
      "Mustard & Spice Mix\t₹6.00",
      "Banana Leaf & Garnish\t₹4.00",
      "Charcoal Smoke Fuel\t₹5.00",
      "Total Cost\t₹40.00"
    ],
    "ingredients": [
      "100g Boneless Chicken (1.5cm cubes)",
      "2 tbsp Fresh Mustard Paste",
      "1 tbsp Ginger-Garlic Paste",
      "2 split Green Chillies",
      "1 tsp Mustard Oil",
      "1 clean fresh banana leaf sheet"
    ],
    "steps": [
      {
        "title": "Velvet Marinade",
        "duration": "10 Mins",
        "detail": "Mix chicken cubes with mustard oil, spices, mustard paste, and slit green chillies. Let it marinate in chiller for 10 minutes.",
        "timerSeconds": 600
      },
      {
        "title": "Wrap and Bind",
        "duration": "2 Mins",
        "detail": "Place marinated chicken in the center of a wilted banana leaf, wrap tightly into a square packet, and tie securely.",
        "timerSeconds": 120
      },
      {
        "title": "Slow Charcoal Cook",
        "duration": "10 Mins",
        "detail": "Grill over moderate charcoal embers for 5 minutes per side until the outer leaf turns charred and smoky.",
        "timerSeconds": 600
      }
    ],
    "hacks": [
      {
        "title": "Pierce chicken",
        "text": "Poke chicken cubes with a fork before marinating to allow the mustard kassa to penetrate deep to the core."
      }
    ],
    "storageAndWaste": "Keep marinated chicken in airtight container in chiller at 2-4°C. Holds for up to 36 hours. Do not freeze once marinated."
  },
  {
    "id": 203,
    "name": "Fish Patrapoda",
    "prices": [
      "₹119"
    ],
    "categoryId": "patrapoda",
    "categoryName": "Signature Patrapoda",
    "colorAccent": "#dc2626",
    "quickMix": "Fresh fish fillets smothered in mustard paste, wrapped in banana leaf and charcoal-grilled.",
    "description": "Fresh Rohu or Bhetki fillets coated in a rich mustard marinade, sealed inside clean banana leaves and slow-cooked over charcoal for a traditional Odia delicacy.",
    "portionControl": "Single portion: 1 pack of banana-leaf wrapped fish (approx 100g fish fillet).",
    "costBreakdown": [
      "Component\tCost",
      "Fresh Fish Fillet\t₹30.00",
      "Mustard Paste & Aromatics\t₹6.00",
      "Banana Leaf & Packaging\t₹5.00",
      "Charcoal Fuel\t₹5.00",
      "Total Cost\t₹46.00"
    ],
    "ingredients": [
      "100g Rohu or Bhetki Fish Fillet",
      "2 tbsp Mustard Paste",
      "1 tsp Ginger-Garlic paste",
      "1 tsp Lemon Juice",
      "1 tbsp Mustard Oil",
      "1 clean fresh banana leaf"
    ],
    "steps": [
      {
        "title": "Clean & Coat",
        "duration": "5 Mins",
        "detail": "Clean fish and rub with lemon juice, salt, and turmeric. Cover with mustard paste, garlic, and mustard oil.",
        "timerSeconds": 300
      },
      {
        "title": "Fold & Tie",
        "duration": "2 Mins",
        "detail": "Wrap fish fillet in a wilted banana leaf, tucking edges to seal marinade inside. Secure with twine.",
        "timerSeconds": 120
      },
      {
        "title": "Slow Roast",
        "duration": "8 Mins",
        "detail": "Roast on low charcoal grill for 4 minutes per side until fish is flaky and tender.",
        "timerSeconds": 480
      }
    ],
    "hacks": [
      {
        "title": "Lemon rub",
        "text": "Rub fish with lemon juice 5 minutes before applying mustard paste to remove any raw fishy odour."
      }
    ],
    "storageAndWaste": "Keep fresh fish fillet stored dry on ice. Prepare mustard paste in bulk daily. Assemble and cook fresh on order."
  },
  {
    "id": 204,
    "name": "Mushroom Patrapoda",
    "prices": [
      "₹119"
    ],
    "categoryId": "patrapoda",
    "categoryName": "Signature Patrapoda",
    "colorAccent": "#0c831f",
    "quickMix": "Fresh button mushrooms in fiery mustard marinade, slow-charcoal smoked in banana leaf.",
    "description": "Meaty mushrooms cut in halves, tossed in a pungent mustard-chilli marinade, wrapped in banana leaf and charcoal-grilled for an earthy, charred, vegetarian delight.",
    "portionControl": "Single portion: 1 banana-leaf wrap (approx 90g fresh mushrooms).",
    "costBreakdown": [
      "Component\tCost",
      "Button Mushrooms (90g)\t₹12.00",
      "Mustard Marinade\t₹5.00",
      "Banana Leaf & Wrapping\t₹4.00",
      "Charcoal Fuel\t₹5.00",
      "Total Cost\t₹26.00"
    ],
    "ingredients": [
      "90g fresh Button Mushrooms (halved)",
      "2 tbsp Mustard Paste",
      "1 tsp Mustard Oil",
      "2 Green Chillies (chopped)",
      "1 clean fresh banana leaf"
    ],
    "steps": [
      {
        "title": "Dry & Toss",
        "duration": "3 Mins",
        "detail": "Wipe mushrooms dry. Toss immediately with mustard paste, oil, salt, turmeric, and chopped green chillies.",
        "timerSeconds": 180
      },
      {
        "title": "Wrap",
        "duration": "2 Mins",
        "detail": "Place in wilted banana leaf and wrap tightly. Secure corners.",
        "timerSeconds": 120
      },
      {
        "title": "Grill & Smoke",
        "duration": "6 Mins",
        "detail": "Grill over medium charcoal embers for 3 minutes per side. Pull when leaf begins to char.",
        "timerSeconds": 360
      }
    ],
    "hacks": [
      {
        "title": "Mushrooms dry",
        "text": "Mushrooms release water when salted. Wrap and grill immediately after mixing with the marinade to prevent it from turning watery."
      }
    ],
    "storageAndWaste": "Store halved mushrooms dry in chiller. Assemble marinade and wrap only when order buzzer sounds."
  },
  {
    "id": 205,
    "name": "Chicken Leg",
    "prices": [
      "₹135"
    ],
    "categoryId": "grill",
    "categoryName": "Charcoal & Tandoor Grilled",
    "colorAccent": "#dc2626",
    "quickMix": "Tender chicken leg quarter in spicy yoghurt marinade, charcoal-grilled to smoky perfection.",
    "description": "Plump chicken leg quarter deeply slashed and marinated in tandoori spices and yoghurt, grilled over open charcoal flames for a crispy, charred skin and juicy interior.",
    "portionControl": "Single portion: 1 full chicken leg quarter (approx 180-200g weight).",
    "costBreakdown": [
      "Component\tCost",
      "Chicken Leg Quarter\t₹42.00",
      "Yoghurt & Tandoori Spices\t₹8.00",
      "Charcoal Fuel & Oil\t₹7.00",
      "Mint Chutney & Salad\t₹4.00",
      "Total Cost\t₹61.00"
    ],
    "ingredients": [
      "1 fresh Chicken Leg Quarter",
      "3 tbsp thick Hung Curd",
      "1 tbsp Tandoori Masala",
      "1 tsp Ginger-Garlic paste",
      "1 tsp Lemon juice",
      "1 tbsp Melted Butter for basting"
    ],
    "steps": [
      {
        "title": "Deep Gash & Rub",
        "duration": "5 Mins",
        "detail": "Make deep gashes in the chicken leg. Rub with lemon juice, salt, and chilli powder. Let rest.",
        "timerSeconds": 300
      },
      {
        "title": "Second Marinade",
        "duration": "15 Mins",
        "detail": "Whisk hung curd with tandoori masala and ginger-garlic paste. Coat chicken leg thoroughly. Let sit in chiller for 15 minutes.",
        "timerSeconds": 900
      },
      {
        "title": "Charcoal Tandoor Grill",
        "duration": "12 Mins",
        "detail": "Place on grill skewers over red-hot charcoal. Grill for 6 minutes per side, basting with melted butter frequently until cooked through and slightly charred.",
        "timerSeconds": 720
      }
    ],
    "hacks": [
      {
        "title": "Deep gashes",
        "text": "Always slash the meat down to the bone so the tandoori marinade cooks through and the flavor penetrates completely."
      }
    ],
    "storageAndWaste": "Keep chicken leg quarters pre-marinated in the chiller at 2-4°C. Holds perfectly for 24-36 hours."
  },
  {
    "id": 206,
    "name": "Chicken Wings (Grill)",
    "prices": [
      "₹99"
    ],
    "categoryId": "grill",
    "categoryName": "Charcoal & Tandoor Grilled",
    "colorAccent": "#dc2626",
    "quickMix": "Spicy marinated chicken wings grilled over open charcoal flames for a crisp, smoky skin.",
    "description": "Chicken wings rubbed with tandoori seasonings, skewered, and grilled over charcoal embers until the skin is blistered and crunchy.",
    "portionControl": "Single portion: 4 plump grilled chicken wings.",
    "costBreakdown": [
      "Component\tCost",
      "4 Chicken Wings\t₹28.00",
      "Spices & Marinade\t₹5.00",
      "Charcoal Fuel\t₹5.00",
      "Sauce & Onion Garnish\t₹3.00",
      "Total Cost\t₹41.00"
    ],
    "ingredients": [
      "4 fresh Chicken Wings (split)",
      "2 tbsp Hung Curd",
      "1 tsp Kashmiri Chilli powder",
      "1 tsp Garam Masala",
      "1 tsp Ginger-Garlic paste"
    ],
    "steps": [
      {
        "title": "Mix & Coat",
        "duration": "5 Mins",
        "detail": "Toss wings with yoghurt, chilli powder, spices, and salt. Allow to sit.",
        "timerSeconds": 300
      },
      {
        "title": "Skewering",
        "duration": "2 Mins",
        "detail": "Thread wings onto flat metal skewers, leaving small gaps in between.",
        "timerSeconds": 120
      },
      {
        "title": "High-Heat Grill",
        "duration": "8 Mins",
        "detail": "Grill over hot charcoal for 4 minutes per side. Baste once with butter to get a glossy, charred skin.",
        "timerSeconds": 480
      }
    ],
    "hacks": [
      {
        "title": "Wing split",
        "text": "Split the wingette and drumette before skewering. It increases surface area and ensures even cooking."
      }
    ],
    "storageAndWaste": "wings can be pre-marinated in bulk. Store in plastic containers in chiller for up to 48 hours."
  },
  {
    "id": 207,
    "name": "Prawn Grill",
    "prices": [
      "₹99"
    ],
    "categoryId": "grill",
    "categoryName": "Charcoal & Tandoor Grilled",
    "colorAccent": "#dc2626",
    "quickMix": "Skewered prawns marinated in garlic-chilli paste and grilled over charcoal.",
    "description": "Juicy prawns skewered and grilled rapidly over high-heat charcoal with a pungent garlic, chilli, and lemon glaze.",
    "portionControl": "Single portion: 6 large skewered prawns (approx 70g net raw weight).",
    "costBreakdown": [
      "Component\tCost",
      "6 peeled prawns\t₹32.00",
      "Garlic-Chilli Marinade\t₹6.00",
      "Skewers & Charcoal Fuel\t₹5.00",
      "Total Cost\t₹43.00"
    ],
    "ingredients": [
      "6 large Prawns (peeled & deveined)",
      "1 tbsp Garlic paste",
      "1 tsp Chilli paste",
      "1 tsp Lemon juice",
      "1 tsp Melted Butter"
    ],
    "steps": [
      {
        "title": "Quick Marinade",
        "duration": "3 Mins",
        "detail": "Toss prawns with garlic paste, chilli paste, lemon juice, salt, and turmeric.",
        "timerSeconds": 180
      },
      {
        "title": "Skewering",
        "duration": "1 Min",
        "detail": "Skewer prawns side-by-side on bamboo skewers.",
        "timerSeconds": 60
      },
      {
        "title": "Flash Grill",
        "duration": "4 Mins",
        "detail": "Grill over screaming hot charcoal for 2 minutes per side. Do not overcook or they turn rubbery. Brush with butter.",
        "timerSeconds": 240
      }
    ],
    "hacks": [
      {
        "title": "Soak skewers",
        "text": "If using bamboo skewers, soak them in water for 30 minutes before grilling to prevent them from burning."
      }
    ],
    "storageAndWaste": "Store cleaned prawns dry on ice. Marinate and skewer right before grilling to preserve fresh texture."
  },
  {
    "id": 208,
    "name": "Fish Grill",
    "prices": [
      "₹89"
    ],
    "categoryId": "grill",
    "categoryName": "Charcoal & Tandoor Grilled",
    "colorAccent": "#dc2626",
    "quickMix": "Fresh fish fillets rubbed with warm spices and grilled over open charcoal.",
    "description": "Fish fillets marinated in ginger-garlic and special grilled spice mix, charcoal-grilled to develop a smoky, thin crust.",
    "portionControl": "Single portion: 1 grilled fish fillet (approx 90g weight).",
    "costBreakdown": [
      "Component\tCost",
      "Fish Fillet\t₹28.00",
      "Marinade & Spices\t₹5.00",
      "Charcoal & Butter\t₹6.00",
      "Total Cost\t₹39.00"
    ],
    "ingredients": [
      "1 Fish Fillet (Rohu or Basa)",
      "1 tsp Ginger-Garlic paste",
      "1 tsp Fish Masala",
      "1 tsp Mustard oil",
      "1 tsp Lemon juice"
    ],
    "steps": [
      {
        "title": "Seasoning",
        "duration": "5 Mins",
        "detail": "Season fish with lemon juice, salt, ginger-garlic paste, and fish masala.",
        "timerSeconds": 300
      },
      {
        "title": "Grill Placement",
        "duration": "1 Min",
        "detail": "Brush fish wire rack with oil and place fish fillet inside to hold it flat.",
        "timerSeconds": 60
      },
      {
        "title": "Smoky Sear",
        "duration": "6 Mins",
        "detail": "Grill over moderate charcoal for 3 minutes per side until flesh is flaky and edges are lightly charred.",
        "timerSeconds": 360
      }
    ],
    "hacks": [
      {
        "title": "Wire rack oiling",
        "text": "Generously oil the wire grill rack before placing the fish. Fish skin sticks easily and will tear when flipping if not oiled."
      }
    ],
    "storageAndWaste": "Keep cleaned fish fillets dry in chiller. Marinate on order to keep fish firm."
  },
  {
    "id": 209,
    "name": "Chicken Grill",
    "prices": [
      "₹79"
    ],
    "categoryId": "grill",
    "categoryName": "Charcoal & Tandoor Grilled",
    "colorAccent": "#dc2626",
    "quickMix": "Boneless chicken chunks grilled over charcoal with a smoky tandoori coating.",
    "description": "Bite-sized chicken chunks marinated in yoghurt and red spices, skewered and charcoal-roasted for a juicy, charred street-style snack.",
    "portionControl": "Single portion: 5 skewered chicken chunks (approx 80g weight).",
    "costBreakdown": [
      "Component\tCost",
      "Chicken pieces (80g)\t₹18.00",
      "Tandoori Curd Marinade\t₹5.00",
      "Charcoal & Butter\t₹5.00",
      "Total Cost\t₹28.00"
    ],
    "ingredients": [
      "80g Boneless Chicken (cubes)",
      "2 tbsp Hung Curd",
      "1 tsp Tandoori spice mix",
      "1 tsp Ginger-garlic paste"
    ],
    "steps": [
      {
        "title": "Marinate",
        "duration": "10 Mins",
        "detail": "Coat chicken cubes in curd, ginger-garlic paste, salt, and tandoori spice mix. Let sit in chiller.",
        "timerSeconds": 600
      },
      {
        "title": "Skewer",
        "duration": "2 Mins",
        "detail": "Thread 5 pieces onto a skewer, placing an onion cube in between pieces.",
        "timerSeconds": 120
      },
      {
        "title": "Roast",
        "duration": "6 Mins",
        "detail": "Grill over hot charcoal for 3 minutes per side, basting with butter until cooked through.",
        "timerSeconds": 360
      }
    ],
    "hacks": [
      {
        "title": "Onion buffers",
        "text": "Placing sliced onion squares between chicken pieces keeps them moist and separates them for even heat circulation."
      }
    ],
    "storageAndWaste": "Keep chicken chunks pre-marinated in chiller for up to 36 hours. Skewer and grill fresh."
  },
  {
    "id": 210,
    "name": "Paneer Grill",
    "prices": [
      "₹79"
    ],
    "categoryId": "grill",
    "categoryName": "Charcoal & Tandoor Grilled",
    "colorAccent": "#0c831f",
    "quickMix": "Soft paneer cubes and veggies marinated in yoghurt-spices and charcoal-grilled.",
    "description": "Chunks of fresh dairy paneer, onions, and capsicums coated in spiced yoghurt batter, skewered and grilled over charcoal.",
    "portionControl": "Single portion: 4 chunky paneer pieces + veggies on a skewer.",
    "costBreakdown": [
      "Component\tCost",
      "Fresh Paneer (80g)\t₹19.00",
      "Veggies (Onion/Capsicum)\t₹3.00",
      "Yoghurt Marinade\t₹5.00",
      "Charcoal & Oil\t₹5.00",
      "Total Cost\t₹32.00"
    ],
    "ingredients": [
      "80g fresh Paneer (large cubes)",
      "Onion & Capsicum square shards",
      "2 tbsp Hung Curd",
      "1 tsp Tandoori masala",
      "1 tsp Ginger-Garlic paste"
    ],
    "steps": [
      {
        "title": "Coat Chunks",
        "duration": "5 Mins",
        "detail": "Toss paneer cubes, onion, and capsicum shards gently in spiced hung curd marinade.",
        "timerSeconds": 300
      },
      {
        "title": "Assemble Skewer",
        "duration": "2 Mins",
        "detail": "Alternate paneer cubes and vegetables on the skewer.",
        "timerSeconds": 120
      },
      {
        "title": "Flash Grill",
        "duration": "5 Mins",
        "detail": "Grill over hot charcoal for 2-3 minutes per side until paneer edges are golden-charred. Baste with butter.",
        "timerSeconds": 300
      }
    ],
    "hacks": [
      {
        "title": "Gentle skewering",
        "text": "Paneer is soft. Thread it slowly to prevent the blocks from cracking. If cold, soak paneer in warm water for 5 minutes first."
      }
    ],
    "storageAndWaste": "Keep cut paneer cubes dry in chiller. Marinade can be pre-made. Mix and grill on order."
  },
  {
    "id": 211,
    "name": "Prawn Pakoda",
    "prices": [
      "₹119",
      "₹239"
    ],
    "categoryId": "starters",
    "categoryName": "Starters & Pakodas",
    "colorAccent": "#dc2626",
    "quickMix": "Plump prawns double-dipped in spicy batter and deep-fried to a golden crunch.",
    "description": "Fresh prawns wrapped in a seasoned onion and gram flour batter, deep-fried to a glass-like crunch. A high-margin Odia street delicacy.",
    "portionControl": "Regular (₹119): 60g prawns (approx 6-8 pakodas). Full (₹239): 130g prawns (approx 14-16 pakodas).",
    "costBreakdown": [
      "Component\tRegular Portion (Retail: ₹119)\tFull Portion (Retail: ₹239)",
      "Cleaned Prawns\t₹20.00\t₹43.00",
      "Gram & Rice Flour Batter\t₹1.50\t₹3.00",
      "Spices & Aromatics\t₹1.50\t₹3.00",
      "Rice Bran Fryer Oil\t₹3.00\t₹5.50",
      "Packaging & Salad\t₹2.50\t₹4.50",
      "Electricity / Fuel\t₹1.50\t₹2.50",
      "Total Cost\t₹30.00\t₹61.50"
    ],
    "ingredients": [
      "Small cleaned white prawns",
      "Besan (Gram Flour) 60%",
      "Rice Flour 30%",
      "Cornstarch 10%",
      "Finely sliced onions",
      "Ginger-Garlic paste",
      "Spices (Chilli, Turmeric, Ajwain)"
    ],
    "steps": [
      {
        "title": "Wash & Dry Prawns",
        "duration": "3 Mins",
        "detail": "Clean prawns and pat dry. Toss with salt, ginger-garlic paste, and lemon juice.",
        "timerSeconds": 180
      },
      {
        "title": "Onion Flour Bind",
        "duration": "2 Mins",
        "detail": "Dust flour mix and onion shards over the prawns. Mix with hands. The prawn juices will bind the flours into a paste.",
        "timerSeconds": 120
      },
      {
        "title": "Fryer Precision Cook",
        "duration": "3 Mins",
        "detail": "Preheat oil to 180°C. Drop prawns coated in batter individually. Fry for 2.5 to 3 minutes until crisp and golden. Drain and dust with chaat masala.",
        "timerSeconds": 180
      }
    ],
    "hacks": [
      {
        "title": "Onion coating",
        "text": "Ensure onion shreds wrap around the prawns during the drop to create jagged, extra-crisp pakodas."
      }
    ],
    "storageAndWaste": "Keep raw prawns stored dry in Line chiller. Batter and fry on order."
  },
  {
    "id": 212,
    "name": "Chicken Lollipop",
    "prices": [
      "₹119",
      "₹239"
    ],
    "categoryId": "starters",
    "categoryName": "Starters & Pakodas",
    "colorAccent": "#dc2626",
    "quickMix": "Spicy chicken lollipop wings coated in custom batter and deep-fried.",
    "description": "Classic street-style chicken lollipops coated in a fiery red cornstarch-maida batter and deep-fried until shatter-crisp on the outside and tender inside.",
    "portionControl": "Regular (₹119): 4 pieces. Full (₹239): 9 pieces.",
    "costBreakdown": [
      "Component\tRegular Portion (Retail: ₹119)\tFull Portion (Retail: ₹239)",
      "Chicken Lollipops\t₹28.00\t₹63.00",
      "Coating Flour Batter\t₹2.00\t₹4.00",
      "Fryer Oil absorption\t₹3.00\t₹5.50",
      "Packaging & Garnish\t₹2.50\t₹4.50",
      "Total Cost\t₹37.50\t₹80.00"
    ],
    "ingredients": [
      "Chicken wings shaped into lollipops",
      "Cornstarch 60%",
      "Maida (Refined Flour) 40%",
      "Ginger-Garlic paste",
      "Kashmiri Red Chilli powder",
      "Egg white"
    ],
    "steps": [
      {
        "title": "First Marinade",
        "duration": "10 Mins",
        "detail": "Rub lollipop wings with ginger-garlic paste, chilli powder, soy sauce, and salt. Marinate in chiller.",
        "timerSeconds": 600
      },
      {
        "title": "Batter Coat",
        "duration": "2 Mins",
        "detail": "Dip lollipops in a thick slurry of cornstarch, maida, egg white, and red chilli powder.",
        "timerSeconds": 120
      },
      {
        "title": "Deep Fry",
        "duration": "5 Mins",
        "detail": "Preheat fryer to 175°C. Submerge the lollipop wings. Fry for 5 minutes until batter forms a solid crispy crust and meat cooks to the bone.",
        "timerSeconds": 300
      }
    ],
    "hacks": [
      {
        "title": "Foil wrap bones",
        "text": "Wrap the exposed wing bone tip with a small piece of aluminium foil before serving for a premium street appearance."
      }
    ],
    "storageAndWaste": "Keep lollipop pieces pre-shaped and marinated in chiller. Slurry and fry fresh on order."
  },
  {
    "id": 213,
    "name": "Chicken Wings",
    "prices": [
      "₹99",
      "₹199"
    ],
    "categoryId": "starters",
    "categoryName": "Starters & Pakodas",
    "colorAccent": "#dc2626",
    "quickMix": "Crispy fried chicken wings tossed in a spicy, seasoned batter.",
    "description": "Juicy chicken wings coated in a seasoned cornstarch-rice flour batter and deep-fried to a glass-like crunch.",
    "portionControl": "Regular (₹99): 4 pieces. Full (₹199): 9 pieces.",
    "costBreakdown": [
      "Component\tRegular Portion (Retail: ₹99)\tFull Portion (Retail: ₹199)",
      "Chicken Wings\t₹24.00\t₹54.00",
      "Batter & Spices\t₹1.50\t₹3.00",
      "Fryer Oil absorption\t₹3.00\t₹5.00",
      "Total Cost\t₹31.00\t₹66.50"
    ],
    "ingredients": [
      "Split Chicken Wings",
      "Cornstarch 50%",
      "Rice Flour 30%",
      "Maida 20%",
      "Ginger-Garlic paste",
      "Chilli powder"
    ],
    "steps": [
      {
        "title": "Wing Seasoning",
        "duration": "5 Mins",
        "detail": "Season split wings with ginger-garlic paste, salt, vinegar, and chilli powder.",
        "timerSeconds": 300
      },
      {
        "title": "Slurry & Toss",
        "duration": "2 Mins",
        "detail": "Coat wings in the starch and rice flour mix, adding a splash of water to form a sticky jacket.",
        "timerSeconds": 120
      },
      {
        "title": "Fryer Crisp",
        "duration": "4 Mins",
        "detail": "Fry in 180°C oil for 4.5 minutes until deep amber and crunchy.",
        "timerSeconds": 270
      }
    ],
    "hacks": [
      {
        "title": "Rice flour crunch",
        "text": "Adding 30% rice flour is the secret to keeping the wings crispy for long home delivery rides."
      }
    ],
    "storageAndWaste": "Pre-marinate split wings and store in chiller. Batter and fry on order."
  },
  {
    "id": 214,
    "name": "Cheese Balls",
    "prices": [
      "₹99",
      "₹199"
    ],
    "categoryId": "starters",
    "categoryName": "Starters & Pakodas",
    "colorAccent": "#0c831f",
    "quickMix": "Golden, crispy breaded spheres stuffed with molten cheese and herbs.",
    "description": "Golden-crispy breaded spheres packed with mozzarella cheese, green chillies, and herbs. Deep-fried until molten-soft inside.",
    "portionControl": "Regular (₹99): 6 pieces. Full (₹199): 13 pieces.",
    "costBreakdown": [
      "Component\tRegular (Retail: ₹99)\tFull (Retail: ₹199)",
      "Processed/Mozzarella Cheese\t₹22.00\t₹47.00",
      "Mashed Potato & Binder\t₹3.00\t₹6.00",
      "Breading (Maida slurry + Crumbs)\t₹2.50\t₹5.00",
      "Fryer Oil absorption\t₹3.00\t₹5.50",
      "Total Cost\t₹30.50\t₹63.50"
    ],
    "ingredients": [
      "Grated Mozzarella & Cheddar cheese",
      "Mashed Potatoes (dry)",
      "Finely chopped Green Chillies & Coriander",
      "Maida slurry",
      "Local rusk breadcrumbs"
    ],
    "steps": [
      {
        "title": "Core Shaping",
        "duration": "5 Mins",
        "detail": "Mix cheese, chopped chillies, coriander, and a touch of mashed potato. Roll into tight spheres.",
        "timerSeconds": 300
      },
      {
        "title": "Double Breading",
        "duration": "5 Mins",
        "detail": "Dip balls in maida slurry, roll in rusk breadcrumbs, dip in slurry again, and coat in crumbs for a thick protective shell.",
        "timerSeconds": 300
      },
      {
        "title": "Flash Fry",
        "duration": "2 Mins",
        "detail": "Preheat fryer to 180°C. Fry balls for exactly 2 minutes until outer breading is golden. Do not overfry or cheese will leak.",
        "timerSeconds": 120
      }
    ],
    "hacks": [
      {
        "title": "Double breading",
        "text": "Always double-bread cheese balls. If the shell has any cracks, the melting cheese will bleed out into the oil, creating a mess."
      }
    ],
    "storageAndWaste": "Prepare cheese balls in bulk, double-bread, and freeze. Fry directly from frozen (steams inside and crisps outside) — holds 1 month frozen."
  },
  {
    "id": 215,
    "name": "Chicken Pakoda",
    "prices": [
      "₹79",
      "₹159"
    ],
    "categoryId": "starters",
    "categoryName": "Starters & Pakodas",
    "colorAccent": "#dc2626",
    "quickMix": "Boneless chicken cubes coated in spiced gram flour and fried to a crisp.",
    "description": "Boneless chicken strips marinated with ginger-garlic paste and curry leaves, wrapped in a jagged gram flour and onion batter, deep-fried to a classic street-style crunch.",
    "portionControl": "Regular (₹79): 80g raw chicken (approx 7-8 pakodas). Full (₹159): 170g raw chicken (approx 15-17 pakodas).",
    "costBreakdown": [
      "Component\tRegular Portion (Retail: ₹79)\tFull Portion (Retail: ₹159)",
      "Boneless Chicken Cubes\t₹17.60\t₹37.40",
      "Gram & Rice Flour Batter\t₹1.50\t₹3.00",
      "Onion & Curry Leaf Shards\t₹1.50\t₹3.00",
      "Frying Oil absorption\t₹3.00\t₹5.50",
      "Packaging & Chutney\t$_2.50\t$_4.50"
    ],
    "ingredients": [
      "Boneless Chicken Cubes (1.5cm)",
      "Besan (Gram Flour) 60%",
      "Rice Flour 30%",
      "Cornstarch 10%",
      "Sliced onions & Curry leaves",
      "Ginger-Garlic paste"
    ],
    "steps": [
      {
        "title": "Acid Marinade",
        "duration": "10 Mins",
        "detail": "Toss chicken with vinegar, ginger-garlic paste, curry leaves, salt, and chilli powder. Let marinate.",
        "timerSeconds": 600
      },
      {
        "title": "Flour Toss",
        "duration": "2 Mins",
        "detail": "Dust the besan, rice flour, cornstarch, and thin onion slices straight onto the chicken. Mix with fingers. The chicken juices will form a thick paste.",
        "timerSeconds": 120
      },
      {
        "title": "Crisp Fry",
        "duration": "3 Mins",
        "detail": "Drop pieces individually into 180°C fryer. Cook for 3 minutes until outer coating is deep golden and chicken is cooked. Lift and drain.",
        "timerSeconds": 180
      }
    ],
    "hacks": [
      {
        "title": "Curry leaves",
        "text": "Tear curry leaves coarsely and press them onto the chicken with batter before frying. The fried leaves release a sensational street aroma."
      }
    ],
    "storageAndWaste": "Keep chicken cubes marinated in chiller. Batter and fry only when the order is received."
  }
]
};
