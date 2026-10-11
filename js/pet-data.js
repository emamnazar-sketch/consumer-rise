/* Consumer Rising — Pet Index data (pet food ingredients, full verdicts).
   Same schema as CR_INGREDIENTS. Risk ratings are the site's editorial
   judgment based on FDA-CVM, AAFCO, EFSA and published research.
   Keep language plain and non-alarmist. */
window.CR_PET_INGREDIENTS = [
  {
    "aliases": [
      "Red 40",
      "Yellow 5",
      "Yellow 6",
      "Blue 2",
      "Blue 1",
      "FD&C Red No. 40",
      "tartrazine",
      "Allura Red",
      "Sunset Yellow"
    ],
    "bullets": [
      "The colors exist for the owner, not the pet: a pet-food trade column states plainly that 'food colors are not important for pets' and add no nutritive value — dogs and cats barely register them.",
      "AAFCO's rule (PF7): an artificial color may be used in pet food only if shown harmless to pets, and FDA-listed colors count as satisfactory evidence. Certified synthetics like Red 40, Yellow 5, Yellow 6, and Blue 2 must have each batch certified by FDA for composition and purity.",
      "FDA labeling rules require colors to be named on the pet-food label in order of predominance — writing 'color added' without naming the source violates the rule.",
      "The same dyes are under fire in human food: in 2025 FDA and HHS announced a joint effort to remove certain petroleum-based colors from the human food supply over concerns about children's behavior.",
      "Honest caveat: the verified source states 'no specific data exists in pets' on health effects of artificial colors — pet-specific harm is implied by opinion pieces, not established by studies.",
      "Documented nuisances are real, if minor: dyed cat food stains carpets when vomited up as hairballs, and bright red or blue stools send worried owners calling the vet."
    ],
    "category": "Color additive (cosmetic)",
    "description": "Synthetic dyes added to pet food purely to look appealing to the human buyer — they add no nutrition, and dogs and cats barely register the colors. The same dyes are now under scrutiny in human food.",
    "e_number": null,
    "id": "artificial-colors-pet",
    "ins_number": null,
    "last_reviewed": "2026-10-11",
    "link": null,
    "name": "Artificial colors (Red 40, Yellow 5, Blue 2) — pet food",
    "regulatory_status": {
      "eu": "The same dyes fall under the EU's E-number additive rules.",
      "us": "AAFCO PF7 permits artificial colors shown harmless to pets; FDA-listed colors (21 CFR 73/74) count as satisfactory evidence. Certified colors (Red 40, Yellow 5, Yellow 6, Blue 2) require FDA batch certification under 21 CFR 80 and must be named on labels in descending predominance."
    },
    "risk": "caution",
    "risk_weight": 20,
    "sources": [
      {
        "label": "Petfood Industry — Color my world (AAFCO PF7, FDA labeling position, 'no specific data in pets')",
        "url": "https://www.petfoodindustry.com/blogs-columns/ingredient-issues/article/15769167/color-my-world"
      },
      {
        "label": "Petfood Industry — Adding a little color to petfoods, naturally (Red 40/Yellow 5/Blue 2, EU E-number rules)",
        "url": "https://www.petfoodindustry.com/nutrition/pet-food-ingredients/article/15454363/adding-a-little-color-to-petfoodsnaturally"
      }
    ],
    "function": "Color additive (cosmetic)"
  },
  {
    "aliases": [
      "BHA",
      "butylated hydroxyanisole",
      "E320"
    ],
    "bullets": [
      "The US National Toxicology Program lists BHA as 'reasonably anticipated to be a human carcinogen' — a listing in place since 1991, based on forestomach tumors in rats, mice, and hamsters fed BHA.",
      "Human evidence is thin: the same program calls the human data inadequate, and one large Dutch population study found no extra stomach-cancer risk at normal dietary levels.",
      "The FDA still permits BHA in animal food (capped at 0.02% of the fat or oil content) but put it under formal safety re-review in 2026 — being selected for review is prioritization, not a finding of harm.",
      "Cats were the worry species because they process phenolic compounds poorly. After a dedicated 60-cat tolerance study, European regulators concluded 150 mg/kg in complete feed is safe for cats.",
      "Look for 'BHA' or 'butylated hydroxyanisole' on labels — dry kibble and treats with added fats are the usual places. BHA-free formulas preserved with mixed tocopherols are widely available."
    ],
    "category": "Synthetic antioxidant preservative",
    "description": "A lab-made antioxidant that keeps fats and oils in dry pet food from going rancid. It is one of the most common preservatives in kibble — and one of the most debated, because a US government program lists it as 'reasonably anticipated to be a human carcinogen' based on animal studies.",
    "e_number": "E320",
    "id": "bha-pet",
    "ins_number": 320,
    "last_reviewed": "2026-10-11",
    "link": null,
    "name": "BHA (Butylated Hydroxyanisole) — pet food",
    "regulatory_status": {
      "eu": "Authorized as a feed additive up to 150 mg/kg complete feed in all animal species. EFSA's 2021 opinion found that level safe for cats after a dedicated tolerance study; the UK FSA/FSS agreed in a 2023 assessment.",
      "us": "FDA lists BHA as GRAS for animal food, capped at 0.02% of fat or oil content. In 2026 FDA made BHA a top-priority chemical for its new post-market safety reassessment and asked industry for use and safety data (docket FDA-2026-N-0302); no finding of harm announced."
    },
    "risk": "caution",
    "risk_weight": 20,
    "sources": [
      {
        "label": "NTP 15th Report on Carcinogens — BHA profile",
        "url": "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/butylatedhydroxyanisole.pdf"
      },
      {
        "label": "Cheese Reporter — FDA seeks BHA use/safety data (Feb 2026)",
        "url": "https://cheesereporter.com/news/2026/02/13/fda-seeks-info-on-uses-safety-of-bha-takes-new-approach-to-no-artificial-colors-claims/"
      },
      {
        "label": "UK FSA/FSS — BHA feed additive assessment for cats (RP 1198, Aug 2023)",
        "url": "https://science.food.gov.uk/article/140394-safety-assessment-of-the-application-for-butylated-hydroxyanisole-bha-as-a-feed-additive-for-use-in-cats-from-fediaf-rp1198.pdf"
      }
    ],
    "function": "Synthetic antioxidant preservative"
  },
  {
    "aliases": [
      "BHT",
      "butylated hydroxytoluene",
      "butylhydroxytoluene",
      "E321"
    ],
    "bullets": [
      "BHT is BHA's close chemical cousin — a synthetic antioxidant that keeps fats in dry pet food from going rancid and off-smelling.",
      "The FDA permits BHT in animal food and has made no finding of harm — but in 2026 it opened a formal post-market safety re-review of BHT, with the comment period running through August 2026. A review is an open question, not a verdict.",
      "There is no recall, no public health alert, and no official recommendation to avoid BHT; current federal rules have not changed.",
      "BHT can also enter pet food indirectly: international shipping rules allow BHT in bulk fish meal to prevent spontaneous combustion at sea, so kibble containing fish meal may carry residues.",
      "It appears by name on ingredient labels, and BHT-free formulas (often preserved with mixed tocopherols) are sold in the same aisles — so label-readers can already choose to avoid it."
    ],
    "category": "Synthetic antioxidant preservative",
    "description": "A synthetic antioxidant that keeps fats and oils in dry pet food from going rancid. The FDA still permits it and has found no harm — but put it under formal safety re-review in 2026, so the question is officially open rather than settled.",
    "e_number": "E321",
    "id": "bht-pet",
    "ins_number": 321,
    "last_reviewed": "2026-10-11",
    "link": null,
    "name": "BHT (Butylated Hydroxytoluene) — pet food",
    "regulatory_status": {
      "eu": "Pet-feed-specific EU status could not be verified from an opened source during research. In human food the EU permits BHT as additive E321 (EFSA re-evaluated it in 2012, set a daily limit of 0.25 mg/kg body weight).",
      "us": "Permitted for decades under federal regulation (21 CFR 172.115, alone or combined with BHA, within set limits). In 2026 FDA opened a post-market safety reassessment of BHT (docket FDA-2026-N-2526, comment window reopened to August 31, 2026); no finding of harm, no warning, no restriction issued."
    },
    "risk": "caution",
    "risk_weight": 20,
    "sources": [
      {
        "label": "Medical Daily — FDA reopens BHT comment period (July 2026)",
        "url": "https://www.medicaldaily.com/fda-reopens-bht-comment-period-food-preservative-review-2026-476760"
      },
      {
        "label": "Petfood Industry — Ethoxyquin redux (fish-meal/BHT context, former FDA official)",
        "url": "https://www.petfoodindustry.com/safety-quality/pet-food-regulations/article/15449902/petfood-industry-petfood-insights-ethoxyquin-redux"
      }
    ],
    "function": "Synthetic antioxidant preservative"
  },
  {
    "aliases": [
      "carrageenan",
      "E407",
      "Chondrus extract",
      "carrageenin",
      "processed Eucheuma seaweed"
    ],
    "bullets": [
      "The controversy is really about two substances: most alarming studies used degraded carrageenan (poligeenan) — made with strong acid at near-boiling temperatures — which researchers use to cause inflammation on purpose. A 2014 critical review concluded poligeenan 'is not a food additive' and its toxic properties don't occur with food-grade carrageenan.",
      "Regulators say food-grade carrageenan is not carcinogenic: EFSA found no genotoxicity or carcinogenicity concern and no adverse effects in chronic rat studies up to 7,500 mg/kg/day — though it made its daily intake limit temporary in 2018 over unresolved data gaps.",
      "The pet-specific gap is real: in 2022 EFSA's feed panel said it was 'not in the position to conclude on safety' for pets because no pet studies were submitted — the safety verdict for dogs and cats as a feed additive is officially open, not closed.",
      "The low-molecular-weight fraction is a genuine specification concern: EFSA requires no more than 5% of food-grade carrageenan below 50 kDa, and in one monkey study the degraded material found in feces couldn't be ruled out as treatment-related.",
      "US status: permitted — carrageenan is a direct food additive (21 CFR 172.620) and Chondrus extract is GRAS in animal feed (21 CFR 582.7255). FDA rejected a 2008 citizen petition to revoke it, finding the cited studies not relevant to dietary exposure.",
      "Where to find it: wet/canned pet food — gravies, gels, loaf and chunk formats. Look for 'carrageenan' on the label."
    ],
    "category": "Thickener / gelling agent",
    "description": "A gel-forming carbohydrate from red seaweed that thickens the gravy in canned pet food and holds chunks in suspension. The alarming research mostly concerns degraded carrageenan (poligeenan) — a different, non-food substance — but Europe's feed panel could not confirm food-grade carrageenan safe for pets either.",
    "e_number": "E407",
    "id": "carrageenan-pet",
    "ins_number": 407,
    "last_reviewed": "2026-10-11",
    "link": null,
    "name": "Carrageenan — pet food",
    "regulatory_status": {
      "eu": "Permitted as E407, but EFSA's 2018 re-evaluation made its group ADI (75 mg/kg bw/day) temporary over chemistry, exposure, and toxicology data gaps. EFSA's 2022 feed panel could not conclude on safety for pets due to lack of pet-specific studies.",
      "us": "Permitted: direct food additive (21 CFR 172.620); Chondrus extract (carrageenin) GRAS in animal feed (21 CFR 582.7255). FDA denied a 2008 citizen petition to revoke carrageenan's approval (2012), finding the cited studies not relevant to dietary exposure."
    },
    "risk": "caution",
    "risk_weight": 20,
    "sources": [
      {
        "label": "21 CFR §582.7255 — Chondrus extract (carrageenin) GRAS in animal feed (govinfo.gov)",
        "url": "https://www.govinfo.gov/content/pkg/CFR-2024-title21-vol6/pdf/CFR-2024-title21-vol6-sec582-7333.pdf"
      },
      {
        "label": "Happi — FDA confirms safety of carrageenan (2012 response to citizen petition)",
        "url": "https://www.happi.com/fda-confirms-safety-of-carrageenan/"
      },
      {
        "label": "EFSA FEEDAP 2022 — Safety and efficacy of carrageenan as a feed additive for pets (PMC9053139)",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9053139/"
      },
      {
        "label": "Weiner 2014 — Critical review of carrageenan GI toxicology (abstract)",
        "url": "https://www.tandfonline.com/doi/abs/10.1080/20024091064282"
      }
    ],
    "function": "Thickener / gelling agent"
  },
  {
    "aliases": [
      "ethoxyquin",
      "ethoxyquin, a preservative"
    ],
    "bullets": [
      "The EU suspended ethoxyquin's authorization as a feed additive for all animal species in 2017. Europe's food-safety agency later said it could not clear it for long-lived animals — a group that includes pet dogs and cats — because of p-phenetidine, a possible-mutagen impurity left over from manufacturing.",
      "The US FDA still permits ethoxyquin in animal food (up to 150 ppm) and requires it on the label even when it arrives indirectly through an ingredient like fish meal.",
      "In the 1990s, after dog-owner complaints, FDA studies found liver pigment buildup and slightly raised liver enzymes in nursing mother dogs fed the maximum level — both effects reversed when ethoxyquin was removed. FDA then asked makers to voluntarily halve the dog-food maximum to 75 ppm.",
      "Most pet food companies removed ethoxyquin from dog and cat recipes decades ago under public pressure, so products that still list it are now the minority.",
      "Watch for fish-meal carryover: bulk fish meal shipped by sea is treated with ethoxyquin (or BHT) to stop spontaneous combustion, so residues can reach pet food through that ingredient even in 'no ethoxyquin' formulas."
    ],
    "category": "Synthetic antioxidant preservative",
    "description": "A powerful synthetic antioxidant used to keep animal-feed fats fresh — and required in bulk fish meal shipped by sea to stop it catching fire. The EU suspended it from animal feed in 2017 over an unresolved impurity concern; the US still permits it, though most pet food brands dropped it years ago.",
    "e_number": null,
    "id": "ethoxyquin-pet",
    "ins_number": null,
    "last_reviewed": "2026-10-11",
    "link": null,
    "name": "Ethoxyquin — pet food",
    "regulatory_status": {
      "eu": "Authorization as a feed additive suspended for all animal species in 2017. EFSA's 2022 reassessment could not conclude it safe for long-lived or breeding animals (which include pet dogs and cats) because of the p-phenetidine impurity; cleared only for animals reared for meat production.",
      "us": "FDA-approved animal feed additive (21 CFR 573.380/573.400), maximum 150 ppm in complete animal food; must be declared on labels even when it enters via fish-meal carryover. After 1990s dog studies, FDA asked industry to voluntarily lower dog-food levels to 75 ppm; the codified regulation was never amended."
    },
    "risk": "avoid",
    "risk_weight": 30,
    "sources": [
      {
        "label": "FDA Center for Veterinary Medicine — Labeling and Use of Ethoxyquin in Animal Feed",
        "url": "https://www.fda.gov/animal-veterinary/ingredients-additives/labeling-and-use-ethoxyquin-animal-feed"
      },
      {
        "label": "Petfood Industry — Ethoxyquin redux (former FDA official's history of the 1990s episode)",
        "url": "https://www.petfoodindustry.com/safety-quality/pet-food-regulations/article/15449902/petfood-industry-petfood-insights-ethoxyquin-redux"
      },
      {
        "label": "The Cattle Site — EFSA reassesses feed additive ethoxyquin (March 2022)",
        "url": "https://www.thecattlesite.com/news/58171/efsa-reassesses-feed-additive-ethoxyquin-2"
      }
    ],
    "function": "Synthetic antioxidant preservative"
  },
  {
    "aliases": [
      "garlic",
      "garlic powder",
      "onion",
      "onion powder",
      "chives",
      "leeks",
      "shallots",
      "aged garlic extract"
    ],
    "bullets": [
      "ASPCA lists onion, garlic, and chives as people-foods to avoid: they 'can cause gastrointestinal irritation and red blood cell damage, which can lead to anemia' — cats are more susceptible, dogs at risk depending on the amount.",
      "The mechanism is established: oxidizing sulfur compounds overwhelm red blood cells' defenses. Dogs have weak antioxidant activity at the red-cell membrane, and cat hemoglobin is unusually vulnerable to oxidative damage.",
      "Reported problem doses for onion: about 5 g per kg of body weight for cats, 15-30 g/kg for dogs. All forms count — raw, cooked, dried, powdered; cooking does not make onion safe.",
      "Garlic is murkier: fewer dose reports exist. One study found dehydrated garlic at 5 g/kg damaged red blood cells without causing full anemia, and aged garlic extract behaves more like an antioxidant. Similar data for cats is missing.",
      "Some pet food companies use onion flavor or garlic and have run feeding trials to substantiate them — but the veterinary literature's bottom line is that more research is needed, particularly on safe thresholds.",
      "Genetics matter: Japanese breeds (Akita, Shiba Inu, Jindo) are more susceptible, and antioxidant supplements do not cancel out the oxidative effect."
    ],
    "category": "Flavoring / Allium hazard",
    "description": "Onions and garlic contain sulfur compounds that damage dogs' and cats' red blood cells, causing anemia at high enough doses. Cats are more sensitive than dogs — and no safe threshold is established, especially for cats.",
    "e_number": null,
    "id": "garlic-onion-pets",
    "ins_number": null,
    "last_reviewed": "2026-10-11",
    "link": null,
    "name": "Garlic and onion (incl. powders) — pet hazard",
    "regulatory_status": {
      "eu": "Not verified during research.",
      "us": "No FDA-CVM prohibition found. Several mainstream pet food companies use onion flavor/powder and garlic in formulas, citing feeding trials. ASPCA advises against feeding Allium species (onion, garlic, chives, leeks) to pets."
    },
    "risk": "caution",
    "risk_weight": 20,
    "sources": [
      {
        "label": "ASPCA — People Foods to Avoid Feeding Your Pets (Allium: red blood cell damage, anemia)",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/people-foods-avoid-feeding-your-pets"
      },
      {
        "label": "Petfood Industry — Onions and garlic in pet food offer flavor in the right amounts (mechanism, doses, form differences)",
        "url": "https://www.petfoodindustry.com/nutrition/pet-food-ingredients/article/15466335/ingredient-issues-onions-and-garlic-in-pet-food-offer-flavor-in-the-right-amounts"
      }
    ],
    "function": "Flavoring / Allium hazard"
  },
  {
    "aliases": [
      "menadione",
      "vitamin K3",
      "menadione sodium bisulfite complex",
      "menadione dimethylpyrimidinol bisulfite",
      "menadione nicotinamide bisulfite",
      "MSBC"
    ],
    "bullets": [
      "Menadione (K3) is a provitamin, not the natural vitamin: it must be converted in the gut into active vitamin K2. Natural K1/K2 have no known toxicity at high doses — the same is not true of synthetic menadione.",
      "The toxicity mechanism is documented in lab studies: in isolated rat liver cells, menadione depleted glutathione — one of the body's main natural antioxidants — causing oxidative damage to cell membranes (Bellomo et al., 1987).",
      "Route matters: the documented harms (liver toxicity, jaundice, hemolytic anemia in human infants) came from injection, not food. Oral menadione is tolerated at far higher levels — safety margins at pet-food levels are roughly 1,000-fold.",
      "There is a real reason it's added: cats on high-fish diets without supplemental vitamin K suffered prolonged clotting times and hemorrhages — AAFCO recommends 0.1 mg vitamin K/kg dry matter in cat foods with over 25% fish.",
      "The honest caveats: menadione was never formally FDA-approved as a pet-food additive — its presence rests on prior-sanction history plus enforcement discretion — and part of AAFCO's 2021 safety conclusion rests on confidential industry data.",
      "Label names to look for: 'menadione sodium bisulfite complex', 'menadione dimethylpyrimidinol bisulfite', or 'menadione nicotinamide bisulfite'."
    ],
    "category": "Nutritional supplement (synthetic vitamin K)",
    "description": "A cheap, stable synthetic form of vitamin K added to pet food to prevent clotting problems — especially in fish-heavy cat foods. Regulators consider it safe at the tiny nutritional levels used, but the toxicity mechanism is real and it was never formally approved for pet food.",
    "e_number": null,
    "id": "menadione-pet",
    "ins_number": null,
    "last_reviewed": "2026-10-11",
    "link": null,
    "name": "Menadione (vitamin K3) — pet food",
    "regulatory_status": {
      "eu": "Authorized: Commission Implementing Regulation (EU) 2015/2307 authorizes menadione sodium bisulphite and menadione nicotinamide bisulphite for all animal species, following EFSA's 2014 opinion of no adverse effects under proposed conditions of use (with handler-inhalation and drinking-water caveats).",
      "us": "Nuanced: menadione and menadione sodium bisulfite complex are prior-sanctioned for poultry feed; two bisulfite complexes are approved feed additives for chicken, turkey, and swine only (21 CFR 573.620/573.625). No express FDA food-additive approval for pet food — presence rests on prior-sanction history plus enforcement discretion. AAFCO's 2021 expert panel recommended MSBC as safe for all animals under good feeding practices."
    },
    "risk": "caution",
    "risk_weight": 20,
    "sources": [
      {
        "label": "FDA-CVM — Vitamin K Substances and Animal Feed",
        "url": "https://www.fda.gov/animal-veterinary/safe-feed/vitamin-k-substances-and-animal-feed"
      },
      {
        "label": "AAFCO — Recommendations for Use of Menadione Sodium Bisulfite Complex in Animal Feed (2021 panel)",
        "url": "https://www.aafco.org/wp-content/uploads/2023/01/Recommendations_for_Use_of_Menadione_Sodium_Bisulfite_Complex_MSBC_in_Animal_Feed.pdf"
      },
      {
        "label": "Linus Pauling Institute (Oregon State) — Vitamin K, Safety/Toxicity",
        "url": "http://lpi.oregonstate.edu/mic/vitamins/vitamin-K"
      },
      {
        "label": "Bellomo et al. 1987 — menadione oxidative stress in rat hepatocytes (PubMed PMID 3593416)",
        "url": "https://pubmed.ncbi.nlm.nih.gov/3593416/"
      }
    ],
    "function": "Nutritional supplement (synthetic vitamin K)"
  },
  {
    "aliases": [
      "propylene glycol",
      "1,2-propanediol",
      "E1520"
    ],
    "bullets": [
      "Federal regulation 21 CFR §589.1001 states propylene glycol in cat food 'has not been shown by adequate scientific data to be safe' — its use in cat food makes the feed adulterated under federal law (final rule, May 2, 1996).",
      "The finding behind the ban: cats fed propylene glycol at 12% of the diet developed Heinz body anemia — damaged, misshapen red blood cells — within weeks (Christopher et al., 1989).",
      "Dogs tolerate it far better: a two-year controlled study found propylene glycol well tolerated in dogs at up to about 8% of the diet; typical pet-food use is around 2%.",
      "It is not antifreeze: propylene glycol is often confused with ethylene glycol (car antifreeze) — they are different chemicals, and propylene glycol is permitted in human food at proper levels.",
      "Regulators still police it: in 2012 a cat-treat brand recalled a product for containing propylene glycol — no harm was reported; the recall happened because the ingredient doesn't belong in cat food under the 1996 rule.",
      "Where to find it: semi-moist/soft-moist dog foods and treats, listed by name on the label."
    ],
    "category": "Humectant (moisture control)",
    "description": "A slightly sweet liquid that keeps semi-moist pet foods soft and stops them drying out. It is documented to damage cats' red blood cells — the FDA banned it from cat food in 1996, though it remains permitted in dog food.",
    "e_number": "E1520",
    "id": "propylene-glycol-pet",
    "ins_number": 1520,
    "last_reviewed": "2026-10-11",
    "link": null,
    "name": "Propylene glycol — pet food",
    "regulatory_status": {
      "eu": "E1520 is an authorized EU food additive; EFSA set an acceptable daily intake of 25 mg/kg body weight/day. No pet-food-specific EU action was verified during research.",
      "us": "PROHIBITED in cat food by federal regulation (21 CFR §589.1001, final rule May 2, 1996) — use in cat food makes the feed adulterated. Remains permitted in dog food and other animal feeds (prior GRAS listing, 21 CFR 582.1666/184.1666)."
    },
    "risk": "avoid",
    "risk_weight": 30,
    "sources": [
      {
        "label": "21 CFR §589.1001 — Propylene glycol in or on cat food (govinfo.gov)",
        "url": "https://www.govinfo.gov/content/pkg/CFR-2000-title21-vol6/pdf/CFR-2000-title21-vol6-sec589-2000.pdf"
      },
      {
        "label": "Petfood Industry — Propylene glycol: when, where and how should it be used (Dr. Greg Aldrich)",
        "url": "https://www.petfoodindustry.com/nutrition/pet-food-ingredients/article/15459644/propylene-glycol-when-where-and-how-should-it-be-used"
      }
    ],
    "function": "Humectant (moisture control)"
  },
  {
    "aliases": [
      "meat and bone meal",
      "poultry by-product meal",
      "meat meal",
      "animal digest",
      "animal by-product meal",
      "animal fat"
    ],
    "bullets": [
      "AAFCO's definitions are broad: 'poultry by-product meal' means ground, rendered clean parts like necks, feet, undeveloped eggs, and viscera; 'meat meal' excludes blood, hair, hoof, horn, and hide trimmings. The mammal-meal definitions are nearly identical — so the label alone can't tell you which tissues are inside.",
      "Quality is allowed to vary a lot: meat meal's bone content (ash) can exceed 20% and protein runs 50-60% depending on the supplier — only the supplier and manufacturer know the actual content of a given batch.",
      "There are floor-level legal controls: AAFCO caps calcium at 2.2 times phosphorus in meat meal and limits indigestible protein — so the category isn't unregulated, just not precisely disclosed.",
      "The one FDA-documented contamination link is CVM's pentobarbital survey: euthanasia-drug residue was associated with rendered ingredients ranked higher on the label in the sampled lots — but FDA itself says those results were a snapshot and can't be generalized to pet food today.",
      "The internet-famous '4D meat' claim is not established fact: FDA's own enforcement position says uncooked 4-D meat is inherently adulterated. The honest issue is opacity and batch-to-batch variability, not proven toxicity.",
      "Rendering also recycles nutrients: organ meats like liver and kidney are nutrient-dense, and rendering turns processing leftovers into usable protein instead of landfill waste."
    ],
    "category": "Rendered protein ingredient",
    "description": "Dried, ground, heat-rendered animal tissues used as the main protein in much commercial pet food. The issue is not proven poison — it is opacity: labels don't reveal which animals or tissues went in, and quality varies batch to batch.",
    "e_number": null,
    "id": "rendered-meals-pet",
    "ins_number": null,
    "last_reviewed": "2026-10-11",
    "link": null,
    "name": "Rendered meals and by-products — pet food",
    "regulatory_status": {
      "eu": "Not verified during research.",
      "us": "AAFCO defines each term in its Official Publication (e.g., poultry by-product meal 9.10, meat meal 9.40, meat by-products 9.3). FDA's Compliance Policy Guides allow rendered materials from animals that died other than by slaughter in animal feed under conditions (proper rendering, no violative residues); uncooked 4-D meat is deemed inherently adulterated and subject to enforcement."
    },
    "risk": "caution",
    "risk_weight": 20,
    "sources": [
      {
        "label": "Petfood Industry — Not all meat meals in pet food are created equal (quotes AAFCO definitions)",
        "url": "https://www.petfoodindustry.com/pet-food-market/blog/15467340/not-all-meat-meals-in-pet-food-are-created-equal"
      },
      {
        "label": "FDA CVM — Pentobarbital survey appendix (dog food samples and results)",
        "url": "https://www.fda.gov/aboutfda/centersoffices/officeoffoods/cvm/cvmfoiaelectronicreadingroom/ucm129134.htm"
      },
      {
        "label": "Petfood Industry — FDA Compliance Policy Guides: a useful pet food resource",
        "url": "https://www.petfoodindustry.com/safety-quality/pet-food-regulations/article/15465206/fda-compliance-policy-guides-a-useful-pet-food-resource"
      }
    ],
    "function": "Rendered protein ingredient"
  },
  {
    "aliases": [
      "xylitol",
      "birch sugar",
      "wood sugar",
      "birch bark extract"
    ],
    "bullets": [
      "In dogs, xylitol is rapidly absorbed and makes the pancreas dump insulin — blood sugar can crash within 30 minutes to 2 hours; higher doses can cause liver failure within 24-48 hours.",
      "The toxic dose is small: Pet Poison Helpline puts poisoning at 0.05 g per pound of body weight — a single piece of gum (0.22-1.0 g xylitol) can poison a 10-pound dog.",
      "Signs can start in 10-15 minutes: vomiting, weakness, staggering, collapse, seizures. Signs are occasionally delayed for hours — so never wait for symptoms before calling the vet.",
      "Cats are not at risk: Pet Poison Helpline and VCA both state cats (plus ferrets and horses) don't experience this toxicity — it is documented in dogs.",
      "Prognosis is excellent if caught early and blood sugar is treated; guarded once liver failure develops — speed is the variable that matters."
    ],
    "category": "Human-food sweetener; severe dog toxin",
    "description": "A sugar-alcohol sweetener harmless to people but dangerous to dogs: it triggers a massive insulin release causing rapid, potentially fatal low blood sugar, and liver failure at higher doses. Mostly a human-food hazard (gum, peanut butter, candy) that dogs get into.",
    "e_number": null,
    "id": "xylitol-pet",
    "ins_number": null,
    "last_reviewed": "2026-10-11",
    "link": null,
    "name": "Xylitol (birch sugar) — dog toxin",
    "regulatory_status": {
      "eu": "Not verified during research.",
      "us": "FDA's Center for Veterinary Medicine has issued 'Paws Off Xylitol' consumer advisories after multiple dog-poisoning reports, many involving chewing gum. No general prohibition — it remains a common human-food ingredient, which is why owner awareness is the safeguard."
    },
    "risk": "avoid",
    "risk_weight": 30,
    "sources": [
      {
        "label": "Pet Poison Helpline — Xylitol Poisonous To Dogs (dose threshold, signs, treatment)",
        "url": "https://www.petpoisonhelpline.com/pet-safety-tips/is-xylitol-poisonous-to-dogs/?links1Page=17020"
      },
      {
        "label": "VCA Canada — Xylitol Poisoning in Dogs (mechanism, liver-failure timing, species exceptions)",
        "url": "https://vcacanada.com/know-your-pet/xylitol-toxicity-in-dogs"
      },
      {
        "label": "ASPCA — People Foods to Avoid Feeding Your Pets (hypoglycemia and liver damage)",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/people-foods-avoid-feeding-your-pets"
      }
    ],
    "function": "Human-food sweetener; severe dog toxin"
  },
  {
    "aliases": [
      "melamine",
      "cyanuric acid",
      "melamine cyanurate",
      "wheat gluten adulteration"
    ],
    "bullets": [
      "On March 16, 2007, Menu Foods recalled 'cuts and gravy' pet foods after cats and dogs began dying of kidney failure; the recalls eventually swelled past 60 million containers from nearly 100 brands — the largest pet food recall in US history.",
      "The cause was deliberate fraud: wheat gluten from Chinese suppliers had been spiked with melamine and cyanuric acid, industrial chemicals rich in nitrogen that fooled protein-content tests into reading the flour as high-protein gluten.",
      "Neither chemical is highly dangerous alone, but together they were deadly: inside pets' bodies, melamine reacted with cyanuric acid to form durable crystals that clogged kidneys, causing acute renal failure in both cats and dogs.",
      "The death toll is uncertain, but FDA consumer reports suggest approximately 1,950 cats and 2,200 dogs died; a veterinary survey confirmed kidney failure in 236 cats and 112 dogs by April 2007.",
      "There were criminal consequences: in 2009, the owners of ChemNutra — the US company that imported the tainted gluten — pleaded guilty to their roles in distributing it, and a federal grand jury indicted three Chinese nationals.",
      "The legacy is regulatory: the tragedy drove the pet food industry's supplier-testing programs and helped spur the Food Safety Modernization Act of 2011 and the FDA Amendments Act of 2007."
    ],
    "category": "Adulterant (2007 contamination crisis)",
    "description": "Industrial chemicals fraudulently added to wheat gluten in 2007 to fake higher protein readings — together they formed kidney-destroying crystals that killed thousands of cats and dogs in the largest pet food recall in US history.",
    "e_number": null,
    "id": "melamine-pet",
    "ins_number": null,
    "last_reviewed": "2026-10-11",
    "link": null,
    "name": "Melamine & cyanuric acid (2007 adulteration) — pet food",
    "regulatory_status": {
      "eu": "Not a permitted feed substance; the 2007 crisis prompted EU scrutiny of imported protein ingredients.",
      "us": "Never permitted in pet food — this was criminal adulteration, not a regulatory gray zone. FDA's Office of Criminal Investigations pursued the importers; ChemNutra's owners pleaded guilty in 2009. The FDA Amendments Act of 2007 mandated FDA develop pet-food labeling rules apart from AAFCO (still uncompleted)."
    },
    "risk": "avoid",
    "risk_weight": 30,
    "sources": [
      {
        "label": "Petfood Industry — Melamine recalls shaped pet food trends, safety programs (recall scope, death counts, guilty pleas)",
        "url": "https://www.petfoodindustry.com/news-newsletters/pet-food-news/article/15463501/melamine-recalls-shaped-pet-food-trends-safety-programs"
      },
      {
        "label": "NTP — Research Concept: Melamine/Cyanuric Acid (2008, adulteration mechanism, kidney crystals)",
        "url": "https://ntp.niehs.nih.gov/ntp/noms/final_resconcept/melamine_cyanuric.pdf"
      },
      {
        "label": "Journal of Medical Toxicology — Review of pet food recalls involving chemical contaminants 1996–2008 (Springer)",
        "url": "http://link.springer.com/article/10.1007/s13181-010-0123-5"
      }
    ],
    "function": "Adulterant (2007 contamination crisis)"
  },
  {
    "aliases": [
      "aflatoxin",
      "aflatoxins",
      "Aspergillus flavus",
      "mycotoxin"
    ],
    "bullets": [
      "On December 30, 2020, Midwestern Pet Foods recalled Sportmix dry pet food after at least 28 dogs died and 8 fell ill; by January 2021 the FDA was aware of more than 110 dead and 210 sick pets, and the recall grew to 1,000+ lots.",
      "The killer was aflatoxin — poison made by the mold Aspergillus flavus growing on drought-stressed corn. Missouri agriculture labs found levels up to 558 parts per billion; the FDA treats pet food above 20 ppb as adulterated.",
      "Aflatoxin is invisible: the FDA's alert stressed the toxins 'can be present even if there is no visible mold.' A Missouri veterinarian caught it only because dying kennel dogs showed liver-disease symptoms and he sent food for toxicology testing.",
      "Dogs and cats show loss of appetite, listlessness, and vomiting; at high doses aflatoxin causes acute liver failure and death. It is also a known carcinogen with chronic exposure.",
      "The company had no previous recalls in its nearly 100-year history; Midwestern later paid $6.375 million to settle a class action from owners whose pets were sickened or killed.",
      "Mycotoxins survive kibble manufacturing: they resist the high heat and drying of extrusion, so once contaminated grain enters the plant, processing does not destroy the toxin."
    ],
    "category": "Mycotoxin contaminant",
    "description": "Poisonous mold toxins that grow on corn and grains under drought or poor storage — invisible, heat-resistant, and responsible for the 2020–21 Sportmix recall that killed more than 110 dogs.",
    "e_number": null,
    "id": "aflatoxin-pet",
    "ins_number": null,
    "last_reviewed": "2026-10-11",
    "link": null,
    "name": "Aflatoxins — pet food contaminant",
    "regulatory_status": {
      "eu": "EU sets maximum aflatoxin levels for animal feed under Directive 2002/32/EC (20 ppb for complete feed, same threshold as the US).",
      "us": "FDA considers dog and cat food above 20 ppb aflatoxin adulterated under the Food, Drug, and Cosmetic Act. FDA issued a corporate-wide warning letter to Midwestern Pet Foods in August 2021 after inspecting its Oklahoma plant."
    },
    "risk": "avoid",
    "risk_weight": 30,
    "sources": [
      {
        "label": "Petfood Industry — Aflatoxin pet food recall goes international; 110 deaths (recall timeline, FDA counts, 558 ppb findings)",
        "url": "https://www.petfoodindustry.com/safety-quality/pet-food-recalls/article/15467532/aflatoxin-pet-food-recall-goes-international-110-deaths"
      },
      {
        "label": "FDA — Alert: Certain Lots of Sportmix Pet Food Recalled for Potentially Fatal Levels of Aflatoxin (Dec 2020)",
        "url": "https://www.fda.gov/animal-veterinary/outbreaks-and-advisories/fda-alert-certain-lots-sportmix-pet-food-recalled-potentially-fatal-levels-aflatoxin"
      },
      {
        "label": "FDA — Warning Letter to Midwestern Pet Foods (Aug 9, 2021, inspection findings)",
        "url": "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/midwestern-pet-food-613845-08092021"
      }
    ],
    "function": "Mycotoxin contaminant"
  },
  {
    "aliases": [
      "vitamin D toxicity",
      "hypervitaminosis D",
      "excess vitamin D",
      "cholecalciferol excess"
    ],
    "bullets": [
      "In January 2019, Hill's Pet Nutrition recalled canned dog foods after a dog showed vitamin D toxicity; by March the recall had expanded to 86 lots across 33 varieties, and again in May — all traced to a vitamin premix from a US supplier that contained far too much vitamin D.",
      "Vitamin D is essential for dogs, but excess causes vomiting, loss of appetite, increased thirst and urination, drooling, weight loss — and at very high levels, kidney failure or death.",
      "Hill's was not alone: in December 2018 the FDA flagged dry dog foods from a common contract manufacturer (Sunshine Mills) for the same problem, and in February 2023 Nestlé Purina recalled a prescription dry dog food after two confirmed toxicity cases.",
      "FDA investigated and issued warning letters to both Sunshine Mills and Hill's in 2019 — a sign the agency treated supplier quality control, not the nutrient itself, as the failure.",
      "The honest context: these were manufacturing errors in vitamin premixes, not evidence that normal vitamin D levels in pet food are dangerous. But the episodes show how a single supplier error can reach millions of cans."
    ],
    "category": "Nutrient excess (manufacturing error)",
    "description": "Vitamin D is essential for dogs — but supplier errors have repeatedly put toxic levels into canned and dry dog food, triggering major recalls from Hill's, Sunshine Mills, and Purina.",
    "e_number": null,
    "id": "vitamin-d-excess-pet",
    "ins_number": null,
    "last_reviewed": "2026-10-11",
    "link": null,
    "name": "Excess vitamin D (recall history) — pet food",
    "regulatory_status": {
      "eu": "EU feed rules set maximum vitamin D3 levels for pet food; excess-vitamin-D recalls are a manufacturing-compliance matter.",
      "us": "FDA issued 2019 alerts on Hill's (33 varieties, 86 lots) and Sunshine Mills dry foods, plus a 2023 Purina Pro Plan Veterinary Diets recall; warning letters went to Hill's and Sunshine Mills. No change to permitted vitamin D levels — enforcement targeted supplier quality control."
    },
    "risk": "caution",
    "risk_weight": 20,
    "sources": [
      {
        "label": "FDA — Alert: Potentially Toxic Levels of Vitamin D in 33 Varieties of Hill's Canned Dog Food (2019)",
        "url": "https://www.fda.gov/AnimalVeterinary/NewsEvents/ucm634138.htm"
      },
      {
        "label": "FDA — Vitamin D Toxicity in Dogs (Hill's, Sunshine Mills, Purina recall history; warning letters)",
        "url": "https://www.fda.gov/animal-veterinary/animal-health-literacy/vitamin-d-toxicity-dogs"
      }
    ],
    "function": "Nutrient excess (manufacturing error)"
  },
  {
    "aliases": [
      "grain-free DCM",
      "diet-associated DCM",
      "peas and lentils heart disease",
      "pulses",
      "legume-heavy diets"
    ],
    "bullets": [
      "In July 2018, FDA's Center for Veterinary Medicine began investigating reports of dilated cardiomyopathy (DCM) — a weakening and enlargement of the heart — in dogs eating foods 'many labeled as grain-free' with high proportions of peas, lentils, other pulses, and potatoes among the first ingredients.",
      "The signal was striking: in cases where dogs ate a single primary diet, 90% were eating grain-free food, and 93% of named products contained peas and/or lentils. Affected breeds included Golden Retrievers, Labradors, and others not genetically prone to DCM.",
      "Taurine entered the picture because some affected dogs had low blood taurine — a documented cause of DCM — and several recovered with taurine supplementation plus diet change. But other affected dogs had normal taurine, so deficiency doesn't explain every case.",
      "The evidence has evolved: in December 2022 the FDA ended routine updates, stating adverse-event numbers 'do not supply sufficient data to establish a causal relationship.' A 2023 peer-reviewed study found no causal link, and a 2026 Dog Aging Project analysis of nearly 50,000 dogs found grain-free status did not predict new cardiac diagnoses.",
      "Honest bottom line: the FDA never proved grain-free or pulse-heavy diets cause DCM, and newer large studies are reassuring — but the investigation was real, the case cluster was real, and the mechanism (possibly involving taurine metabolism or fiber/oligosaccharides in peas) remains unresolved."
    ],
    "category": "Dietary pattern under investigation",
    "description": "The FDA's 2018–2022 investigation into heart disease in dogs eating grain-free, pulse-heavy diets — a real case cluster with an still-unresolved mechanism, though newer large studies have not confirmed a causal link.",
    "e_number": null,
    "id": "grain-free-dcm-pet",
    "ins_number": null,
    "last_reviewed": "2026-10-11",
    "link": null,
    "name": "Grain-free / pulse-heavy diets & DCM — under investigation",
    "regulatory_status": {
      "eu": "No EU regulatory action; the investigation was US-led.",
      "us": "FDA-CVM investigated 2018–2022 (1,100+ DCM reports); ended routine public updates in December 2022 without establishing causation. No recalls, no ingredient bans, no formula mandates resulted. FDA continues to encourage DCM case reporting."
    },
    "risk": "caution",
    "risk_weight": 20,
    "sources": [
      {
        "label": "Petfood Industry — Potatoes, peas, lentils correlated to dog heart disease (FDA case data)",
        "url": "https://www.petfoodindustry.com/news-newsletters/pet-food-news/press-release/15464945/potatoes-peas-lentils-correlated-to-dog-heart-disease"
      },
      {
        "label": "All The Best Pet Care — Legumes, DCM, and taurine deficiency (FDA timeline, BSM Partners 2023 study)",
        "url": "https://www.allthebestpetcare.com/pet-nutrition/legumes-dilated-cardiomyopathy-dcm-and-taurine-deficiency/"
      },
      {
        "label": "ScienMag — Grain-free dog foods cleared in major two-year Dog Aging Project study (2026)",
        "url": "https://scienmag.com/grain-free-dog-foods-cleared-in-major-two-year-study-of-canine-heart-disease/"
      }
    ],
    "function": "Dietary pattern under investigation"
  },
  {
    "aliases": [
      "grapes",
      "raisins",
      "sultanas",
      "currants",
      "grape toxicity"
    ],
    "bullets": [
      "Grapes, raisins, sultanas, and currants can cause sudden kidney failure in dogs — the ASPCA's Animal Poison Control Center documented about 140 cases in a single year, with 50 developing symptoms and 7 dying.",
      "The cruelty is unpredictability: toxicity is idiosyncratic. Some dogs are harmed by a few grapes while others show no reaction, and there is no established safe amount — every exposure should be treated as a potential emergency.",
      "The mechanism was a mystery for years, but 2022–2024 research points to tartaric acid: dogs barely express the kidney transporter (OAT4) that clears it in humans, so it accumulates in kidney tubule cells and destroys them. Raisins concentrate roughly 4–5× more tartaric acid per gram than fresh grapes.",
      "Signs start with vomiting within 24 hours, followed by lethargy, loss of appetite, and abdominal pain; kidney failure brings tremors, reduced urination, and potentially death. Washing, organic sourcing, or removing seeds does not make grapes safe.",
      "Cats appear unaffected — grape toxicity is documented in dogs, with only anecdotal reports in cats or ferrets. If your dog eats any grape product, call your vet or poison control immediately; do not wait for symptoms."
    ],
    "category": "Human-food toxin (dogs)",
    "description": "Grapes and raisins can trigger sudden, potentially fatal kidney failure in dogs — with no predictable safe dose. Research now points to tartaric acid as the culprit.",
    "e_number": null,
    "id": "grapes-raisins-pet",
    "ins_number": null,
    "last_reviewed": "2026-10-11",
    "link": null,
    "name": "Grapes & raisins — dog toxin",
    "regulatory_status": {
      "eu": "Not a pet-food ingredient; no regulatory status applicable.",
      "us": "Not a pet-food ingredient. ASPCA Animal Poison Control lists grapes/raisins among people-foods to never feed dogs; no FDA action because this is an owner-awareness hazard, not a manufacturing issue."
    },
    "risk": "avoid",
    "risk_weight": 30,
    "sources": [
      {
        "label": "ASPCA — People Foods to Avoid Feeding Your Pets (grapes/raisins: kidney failure)",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/people-foods-avoid-feeding-your-pets"
      },
      {
        "label": "Wikipedia — Grape toxicity in dogs (APCC case data, tartaric acid mechanism)",
        "url": "https://en.wikipedia.org/wiki/Grape_toxicity_in_dogs"
      }
    ],
    "function": "Human-food toxin (dogs)"
  },
  {
    "aliases": [
      "theobromine",
      "chocolate poisoning",
      "cacao",
      "cocoa"
    ],
    "bullets": [
      "Chocolate's danger to dogs comes from methylxanthines — theobromine and caffeine — which dogs metabolize far more slowly than humans (theobromine's half-life in dogs is 17.5 hours vs. a few hours in people).",
      "The Merck Veterinary Manual's dose ladder: mild signs (vomiting, diarrhea, restlessness) from about 20 mg/kg theobromine; heart effects at 40–50 mg/kg; seizures at 60 mg/kg and above; the oral lethal dose is roughly 100–200 mg/kg.",
      "Darkness matters: baking chocolate and cocoa powder carry ~390–800 mg theobromine per ounce, dark chocolate ~130–150 mg/oz, milk chocolate ~44–58 mg/oz, white chocolate negligible. About an ounce of milk chocolate per pound of body weight is potentially lethal.",
      "Death is usually from cardiac arrhythmias, overheating, or respiratory failure — and the high fat in chocolate can additionally trigger pancreatitis in susceptible dogs.",
      "Reassuring context from the UK's Veterinary Poisons Information Service: across 1,000 followed-up canine cases, only 5 were fatal, and about half of reported cases never developed symptoms. Still, any known ingestion warrants a vet call with the type, amount, and the dog's weight."
    ],
    "category": "Human-food toxin (dogs)",
    "description": "Theobromine and caffeine in chocolate overstimulate dogs' hearts and nervous systems — mild at a nibble of milk chocolate, potentially lethal at baking-chocolate doses.",
    "e_number": null,
    "id": "chocolate-pet",
    "ins_number": null,
    "last_reviewed": "2026-10-11",
    "link": null,
    "name": "Chocolate (theobromine) — dog toxin",
    "regulatory_status": {
      "eu": "Not a pet-food ingredient; no regulatory status applicable.",
      "us": "Not a pet-food ingredient. ASPCA lists chocolate among people-foods to avoid; veterinary poison centers treat it as one of the most common dog-poisoning calls."
    },
    "risk": "avoid",
    "risk_weight": 30,
    "sources": [
      {
        "label": "Merck Veterinary Manual — Chocolate Toxicosis in Animals (dose thresholds, mechanism, treatment)",
        "url": "https://www.msdvetmanual.com/toxicology/food-hazards/chocolate-toxicosis-in-animals?query=theobromine"
      },
      {
        "label": "Veterinary Poisons Information Service — Revised treatment doses for chocolate (700+ case analysis)",
        "url": "https://www.vpisglobal.com/2014/12/02/revised-treatment-doses-for-chocolate/"
      }
    ],
    "function": "Human-food toxin (dogs)"
  },
  {
    "aliases": [
      "macadamia",
      "macadamia nut toxicosis",
      "Macadamia integrifolia"
    ],
    "bullets": [
      "Macadamia nuts cause a distinctive dog-only syndrome: weakness (especially hind legs), vomiting, ataxia, tremors, joint pain, and fever — usually within 12 hours of eating them.",
      "The ASPCA's poison center treated 29 cases over five years (published in Veterinary and Human Toxicology, 2000); an Australian study of 13 dogs found signs at 0.7–4.9 g/kg — as few as a handful of nuts for a medium dog.",
      "The mechanism is genuinely unknown — hypotheses involve neurotransmitter or neuromuscular effects, but no toxic compound has been identified. Dogs are the only species reported affected.",
      "The good news: prognosis is excellent. Most dogs recover fully within 24–48 hours with supportive care, and many mild cases resolve without treatment. There is no antidote; treatment is decontamination plus nursing care.",
      "The high fat content adds a second risk: pancreatitis. Keep macadamia-containing cookies and candies away from dogs, and note that one nut in a large dog is far less concerning than a handful in a small one — call your vet with the amount and the dog's weight."
    ],
    "category": "Human-food toxin (dogs)",
    "description": "Macadamia nuts trigger weakness, tremors, and vomiting in dogs — and only in dogs. The mechanism is unknown, but recovery is typically complete within two days.",
    "e_number": null,
    "id": "macadamia-pet",
    "ins_number": null,
    "last_reviewed": "2026-10-11",
    "link": null,
    "name": "Macadamia nuts — dog toxin",
    "regulatory_status": {
      "eu": "Not a pet-food ingredient; no regulatory status applicable.",
      "us": "Not a pet-food ingredient. ASPCA lists macadamia nuts among people-foods to avoid feeding dogs."
    },
    "risk": "avoid",
    "risk_weight": 30,
    "sources": [
      {
        "label": "Bark & Whiskers — Dangers of feeding macadamia nuts to pets (APCC 29-case data, Australian study)",
        "url": "https://www.barkandwhiskers.com/content/files/2026/03/why-you-shouldnt-feed-macadamia-nuts-to-your-pets.pdf"
      },
      {
        "label": "ASPCA — People Foods to Avoid Feeding Your Pets (macadamia nuts listed)",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/people-foods-avoid-feeding-your-pets"
      }
    ],
    "function": "Human-food toxin (dogs)"
  },
  {
    "aliases": [
      "copper sulfate",
      "copper chelate",
      "copper proteinate",
      "copper-associated hepatopathy",
      "copper storage disease"
    ],
    "bullets": [
      "Copper is essential for dogs — but too much accumulates in the liver, causing copper-associated hepatopathy (chronic hepatitis). A study of 546 dogs found liver copper above 1,000 µg/g in about 25% of Labrador Retrievers biopsied from the mid-1990s onward, with levels rising over time in all breeds.",
      "The controversy: in 1997, AAFCO profiles began requiring highly bioavailable copper sulfate or chelates in premixes — despite no evidence of copper deficiency being a problem. Veterinary researchers (Twedt et al., JAVMA 2021) asked whether the guidelines should be reconsidered, noting the current minimum is ~1.7× the intake that copper-restricted diets safely provide.",
      "Genetics complicate the picture: Bedlington Terriers, Labradors, Dalmatians, and Dobermans are predisposed to copper storage disease, but rising cases across all breeds suggest diet plays a role beyond genes.",
      "Treatment exists — chelation with d-penicillamine plus lifetime copper-restricted diet — but it takes months, requires repeat monitoring, and restricted diets are mostly prescription-only.",
      "Honest caveat: regulators have not changed the guidelines, stating a lack of evidence directly linking food copper levels to the disease trend. This is a genuine open scientific dispute, not a settled hazard."
    ],
    "category": "Trace mineral excess (genuine controversy)",
    "description": "Copper is a required nutrient — but increasingly bioavailable forms in dog food, plus rising liver-copper levels across breeds, have veterinary researchers questioning whether current minimums are too high.",
    "e_number": null,
    "id": "copper-excess-pet",
    "ins_number": null,
    "last_reviewed": "2026-10-11",
    "link": null,
    "name": "Excess copper — pet food controversy",
    "regulatory_status": {
      "eu": "FEDIAF sets copper levels for pet food; no EU action on the excess-copper question was verified during research.",
      "us": "AAFCO nutrient profiles set minimum copper levels (no maximum for adult maintenance); manufacturers must include copper but need not declare the amount. FDA/AAFCO have not revised guidelines despite the JAVMA 2021 challenge."
    },
    "risk": "caution",
    "risk_weight": 20,
    "sources": [
      {
        "label": "JAVMA 2021 — Is it time to reconsider current guidelines for copper content in commercial dog foods? (Twedt et al.)",
        "url": "http://avmajournals.avma.org/view/journals/javma/258/4/javma.258.4.357.xml"
      },
      {
        "label": "PMC — Hepatic copper concentrations in 546 dogs, 1982–2015 (rising trend, breed data)",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6272033/"
      }
    ],
    "function": "Trace mineral excess (genuine controversy)"
  },
  {
    "aliases": [
      "sodium pentobarbital",
      "pentobarbital residue",
      "euthanasia drug"
    ],
    "bullets": [
      "Pentobarbital is the drug used to euthanize animals — and FDA surveys in 1998 and 2000 found its residues in many commercial dry dog foods, associated with rendered ingredients (meat and bone meal, beef and bone meal, animal fat, animal digest) listed high on the label.",
      "The FDA's own data tables name brands: multiple Ol' Roy, Trailblazer, Dad's, and Weis products tested positive, with Survey #2 measuring up to 32 parts per billion. Products where rendered ingredients ranked 1st–3rd were far more likely to test positive (60%) than those ranking them 4th–7th (6%).",
      "FDA concluded the low levels were 'unlikely' to harm dogs — but also stated plainly that no tolerance exists for any pentobarbital in animal feed, and that using material from euthanized animals is never allowed.",
      "The source was never definitively proven: FDA found no dog or cat DNA in samples and speculated euthanized cattle or horses, while independent researchers disputed that conclusion. The honest position is that the contamination pathway remains unresolved.",
      "It still happens: in 2017, Evanger's and Smucker's (Gravy Train) products were found contaminated with pentobarbital, triggering recalls — proof this is not just a 1990s story."
    ],
    "category": "Euthanasia-drug contaminant",
    "description": "Residues of the animal euthanasia drug found by the FDA in many dry dog foods — linked to rendered ingredients, with zero legal tolerance and an still-unresolved contamination pathway.",
    "e_number": null,
    "id": "pentobarbital-pet",
    "ins_number": null,
    "last_reviewed": "2026-10-11",
    "link": null,
    "name": "Pentobarbital — pet food contaminant",
    "regulatory_status": {
      "eu": "Not a permitted feed substance; EU feed law prohibits material from euthanized animals.",
      "us": "Zero tolerance: FDA states no pentobarbital is allowed in animal feed and euthanized-animal material is never permitted — though the agency judged the surveyed residue levels unlikely to harm dogs. 2017 Evanger's/Smucker's contaminations triggered recalls."
    },
    "risk": "avoid",
    "risk_weight": 30,
    "sources": [
      {
        "label": "FDA CVM — Dog Food Survey Results: Pentobarbital Residue (Survey #1 & #2 data tables)",
        "url": "https://www.fda.gov/about-fda/cvm-foia-electronic-reading-room/dog-food-survey-results-survey-1-qualitative-analyses-pentobarbital-residue"
      },
      {
        "label": "Petfood Industry — Pentobarbital residues in pet foods (Dr. Dzanis: rendering survival, zero tolerance)",
        "url": "https://www.petfoodindustry.com/safety-quality/pet-food-safety/article/15464692/pentobarbital-residues-in-pet-foods"
      }
    ],
    "function": "Euthanasia-drug contaminant"
  },
  {
    "aliases": [
      "TBHQ",
      "tertiary butylhydroquinone",
      "tert-butylhydroquinone",
      "E319"
    ],
    "bullets": [
      "TBHQ is a synthetic antioxidant in the same family as BHA and BHT — it delays rancidity in fats and greatly extends shelf life of pet foods and treats.",
      "The FDA permits up to 0.02% of the oil content, but high doses are acutely toxic: 1–4 grams can cause nausea, vomiting, delirium, tinnitus, and collapse in humans.",
      "Long-term high-dose feeding in laboratory animals produced stomach-tumor precursors and DNA damage — the findings that keep TBHQ on watch lists even though permitted levels are far lower.",
      "A peer-reviewed review of TBHQ, BHA, and propyl gallate as food antioxidants documented cytotoxic and genotoxic effects at the cellular level, with TBHQ among the compounds studied.",
      "Industry is moving away: ingredient suppliers report pet food makers increasingly replacing TBHQ (alongside BHA, BHT, and ethoxyquin) with mixed tocopherols and other label-friendly antioxidants — so TBHQ-free options are widely available."
    ],
    "category": "Synthetic antioxidant preservative",
    "description": "A synthetic fat preservative related to BHA/BHT — permitted at low levels, but high doses are acutely toxic and long-term high-dose animal studies showed stomach-tumor precursors and DNA damage.",
    "e_number": "E319",
    "id": "tbhq-pet",
    "ins_number": 319,
    "last_reviewed": "2026-10-11",
    "link": null,
    "name": "TBHQ — pet food",
    "regulatory_status": {
      "eu": "E319 is an authorized EU food additive with set limits; no pet-food-specific EU action was verified during research.",
      "us": "FDA permits TBHQ up to 0.02% of oil/fat content in foods. No FDA finding of harm at permitted levels; no re-review announced as of research date."
    },
    "risk": "caution",
    "risk_weight": 20,
    "sources": [
      {
        "label": "Petfood Industry — Preservative TBHQ may present hazards in petfood (dose data, animal findings)",
        "url": "https://www.petfoodindustry.com/news-newsletters/pet-food-news/article/15454771/preservative-tbhq-may-present-hazards-in-petfood"
      },
      {
        "label": "Wiley Food Science & Nutrition — Cytotoxic and genotoxic effects of TBHQ, BHA and propyl gallate (2024 review)",
        "url": "https://onlinelibrary.wiley.com/doi/10.1002/fsn3.4373"
      }
    ],
    "function": "Synthetic antioxidant preservative"
  },
  {
    "aliases": [
      "caffeine",
      "coffee",
      "energy drinks",
      "alcohol",
      "ethanol",
      "methylxanthine"
    ],
    "bullets": [
      "Caffeine is toxic to both dogs and cats: VCA Animal Hospitals notes that while a lick of coffee is unlikely to harm most pets, one or two caffeine pills can be fatal for small dogs and cats.",
      "Signs mirror an overdose of stimulation — hyperactivity, restlessness, rapid heart rate, tremors, vomiting — and can start within hours and last for days; untreated large ingestions can damage the liver, heart, kidneys, and central nervous system.",
      "Published toxic doses: agitation above ~15 mg/kg, serious cardiac effects above ~50 mg/kg, with a reported lethal dose around 140 mg/kg in dogs. Common sources beyond coffee include energy drinks, diet pills, pain-medication combinations, and guarana supplements.",
      "Alcohol is the depressant mirror image: the ASPCA lists it among people-foods to avoid, causing vomiting, diarrhea, coordination loss, central nervous system depression, breathing difficulty, abnormal blood acidity, coma, and death.",
      "Both are owner-awareness hazards rather than pet-food ingredients — they reach pets through spilled drinks, counter-surfing, and unattended cups. If ingestion happens, call your vet or poison control immediately; this is not veterinary advice."
    ],
    "category": "Human-drink toxins (pets)",
    "description": "Caffeine overstimulates pets' hearts and nervous systems; alcohol depresses them — both can kill. Neither belongs in pet food; both reach pets through human drinks left in reach.",
    "e_number": null,
    "id": "caffeine-alcohol-pet",
    "ins_number": null,
    "last_reviewed": "2026-10-11",
    "link": null,
    "name": "Caffeine & alcohol — pet toxins",
    "regulatory_status": {
      "eu": "Not pet-food ingredients; no regulatory status applicable.",
      "us": "Not pet-food ingredients. ASPCA lists alcohol among people-foods to avoid; veterinary poison centers treat caffeine ingestion as a common emergency call."
    },
    "risk": "avoid",
    "risk_weight": 30,
    "sources": [
      {
        "label": "VCA Canada — Caffeine Toxicity in Pets (sources, symptoms, fatal pill doses)",
        "url": "https://vcacanada.com/know-your-pet/caffeine-toxicity-in-pets"
      },
      {
        "label": "ASPCA — People Foods to Avoid Feeding Your Pets (alcohol: CNS depression, coma, death)",
        "url": "https://www.aspca.org/pet-care/aspca-poison-control/people-foods-avoid-feeding-your-pets"
      }
    ],
    "function": "Human-drink toxins (pets)"
  },
{
  "aliases": [
    "hops",
    "humulus lupulus",
    "beer hops",
    "common hops",
    "spent hops"
  ],
  "bullets": [
    "Hops — the flowers used to brew beer — can trigger malignant hyperthermia in dogs: a runaway, life-threatening fever. Pet Poison Helpline lists panting, racing heart rate, vomiting, seizures, and death as the clinical picture, with rapid onset after ingestion.",
    "The veterinary literature is small but stark: Duncan, Hare & Buck (JAVMA, 1997) described a malignant hyperthermia-like reaction in five dogs after hops ingestion, and a veterinary toxicology summary notes that even small amounts can trigger a reaction — including 'spent' hops already used in brewing.",
    "Greyhounds were the first breed flagged, but Labrador Retrievers, Saint Bernards, Pointers, Dobermans, Border Collies, and others have since been reported — Pet Poison Helpline says any breed or mixed-breed dog may be affected, with predisposed breeds at higher risk.",
    "The practical danger is home brewing: brewers often compost spent hops or spread them in the yard, where dogs find them. Veterinary guidance is to seal used hops in a container and dispose of them in the trash — never compost where a dog can reach.",
    "Treatment is an emergency: aggressive cooling, IV fluids, and drugs such as dantrolene or cyproheptadine. The veterinary summary warns the outcome is often fatal without prompt, aggressive therapy — and notes rigor mortis setting in within minutes of death in some cases."
  ],
  "category": "Human-food toxin (dogs)",
  "description": "The flowers used to brew beer can trigger malignant hyperthermia — a runaway, often fatal fever — in dogs. Fresh or 'spent' brewing hops are both dangerous.",
  "e_number": null,
  "id": "hops-pet",
  "ins_number": null,
  "last_reviewed": "2026-10-11",
  "link": null,
  "name": "Hops — dog toxin",
  "regulatory_status": {
    "eu": "Not a pet-food ingredient; no regulatory status applicable.",
    "us": "Not a pet-food ingredient. Pet Poison Helpline lists hops as toxic to dogs; no FDA action because this is an owner-awareness hazard, not a manufacturing issue."
  },
  "risk": "avoid",
  "risk_weight": 30,
  "sources": [
    {
      "label": "Pet Poison Helpline — Brewing Hops Poisonous to Pets (Humulus lupulus: life-threatening high fever, breed predisposition)",
      "url": "https://www.petpoisonhelpline.com/poison/hops/"
    },
    {
      "label": "DVM toxicology summary — Hops ingestion (cites Duncan et al. 1997 JAVMA: malignant hyperthermia-like reaction in five dogs)",
      "url": "https://assets.ctfassets.net/rt5zmd3ipxai/6fzeHNx8AHVgXH554r0WUa/ad8ea9078ebee58762221086c703f1e1/Hops-Ingestion-DYK-12-09.pdf"
    }
  ],
  "function": "Human-food toxin (dogs)"
},
{
  "aliases": [
    "yeast dough",
    "bread dough",
    "raw dough",
    "unbaked dough",
    "pizza dough",
    "dough"
  ],
  "bullets": [
    "Raw yeast dough causes two separate emergencies in dogs. First, it keeps rising in the warm, moist stomach — expanding to many times its original size, causing pain, retching, and bloat, and sometimes breathing problems or stomach rupture. Second, the fermenting yeast releases alcohol, so the dog is simultaneously at risk of alcohol poisoning.",
    "The ASPCA's poison control guidance states it plainly: yeast dough 'can rise and cause gas to accumulate in your pet's digestive system... the stomach to bloat, and potentially twist, becoming a life-threatening emergency,' and the yeast 'produces alcohol as a by-product in the stomach environment.'",
    "A practicing veterinarian's case column documents a dog that stole bread dough off a counter and nearly died — noting that 'some dogs die after eating raw bread dough,' with alcohol poisoning signs (poor coordination, disorientation, coma) layered on top of the bloat.",
    "Baked bread is not the hazard — heat kills the yeast. The danger is specifically raw or rising dough: bread, pizza, and roll dough left on counters or in trash.",
    "If a dog eats raw dough, veterinarians advise emergency care, not watchful waiting: cooling the stomach contents (ice chips) can slow yeast activity, but bloat and alcohol toxicity can both progress fast. General information only — not veterinary advice; call your vet or poison control immediately."
  ],
  "category": "Human-food toxin (dogs)",
  "description": "Unbaked yeast dough keeps rising inside a dog's stomach — causing bloat that can twist the stomach — while fermenting yeast simultaneously produces alcohol. Either mechanism alone can be fatal.",
  "e_number": null,
  "id": "yeast-dough-pet",
  "ins_number": null,
  "last_reviewed": "2026-10-11",
  "link": null,
  "name": "Unbaked yeast dough — dog toxin",
  "regulatory_status": {
    "eu": "Not a pet-food ingredient; no regulatory status applicable.",
    "us": "Not a pet-food ingredient. ASPCA Animal Poison Control lists yeast dough among people-foods to never feed pets; no FDA action because this is an owner-awareness hazard, not a manufacturing issue."
  },
  "risk": "avoid",
  "risk_weight": 30,
  "sources": [
    {
      "label": "ASPCA — People Foods to Avoid Feeding Your Pets (yeast dough: bloat/twist emergency + alcohol by-product)",
      "url": "https://www.aspca.org/pet-care/aspca-poison-control/people-foods-avoid-feeding-your-pets"
    },
    {
      "label": "Ask the Vet (IBJ) — Keep bread dough away from dog (dough expansion, stomach rupture, alcohol poisoning; dogs have died)",
      "url": "https://www.ibj.com/articles/ask-the-vet-keep-bread-dough-away-from-dog"
    }
  ],
  "function": "Human-food toxin (dogs)"
},
{
  "aliases": [
    "liver",
    "beef liver",
    "chicken liver",
    "cod liver oil",
    "vitamin A",
    "hypervitaminosis A",
    "retinol"
  ],
  "bullets": [
    "Vitamin A is fat-soluble, so it accumulates: chronic excess from liver-heavy homemade diets or cod liver oil produces hypervitaminosis A. The MSD Veterinary Manual documents toxicosis after consumption of large amounts of cod liver oil and animal livers, with toxic intakes starting around 10 times the dietary requirement.",
    "Cats are the classic victims — they require preformed vitamin A and cannot convert plant carotenes. A published DVM case report describes an 8-year-old cat fed exclusively on raw beef liver and giblets for three months: it developed tetraparalysis, fusion of the cervical and thoracic vertebrae (C1–T7), and severe hepatic fibrosis.",
    "The skeletal signature is distinctive: new bone growth around joints and vertebrae, fusing the neck and forelimbs — affected cats adopt a rigid, 'kangaroo-like' sitting posture and eventually cannot reach their food bowl.",
    "Acute signs per the MSD manual include malaise, anorexia, peeling skin, weakness, tremors, seizures, paralysis, and death — generally resolving when excess vitamin A is withdrawn, though fused bone does not un-fuse.",
    "This is a pattern-of-feeding hazard, not a single-meal toxin: commercial pet foods are formulated to safe vitamin A levels. The risk sits with homemade liver-heavy diets and indiscriminate cod liver oil supplementation. General information only — not veterinary advice; talk to your vet before supplementing."
  ],
  "category": "Nutritional excess (homemade diets)",
  "description": "Liver is extraordinarily rich in vitamin A, which accumulates in the body. Cats fed liver-heavy homemade diets for months develop fused vertebrae, crippling bone growth, and liver damage.",
  "e_number": null,
  "id": "vitamin-a-liver-pet",
  "ins_number": null,
  "last_reviewed": "2026-10-11",
  "link": null,
  "name": "Excess liver / vitamin A toxicity — pet food",
  "regulatory_status": {
    "eu": "Complete pet foods are formulated within FEDIAF/EU safe vitamin A limits; the hazard is owner-formulated homemade diets, which fall outside feed regulation.",
    "us": "AAFCO nutrient profiles cap vitamin A in complete pet foods; the hazard is owner-formulated liver-heavy homemade diets, which fall outside feed regulation. No FDA action because this is a feeding-practice issue, not a manufacturing one."
  },
  "risk": "caution",
  "risk_weight": 20,
  "sources": [
    {
      "label": "MSD Veterinary Manual — Vitamin A Toxicosis in Animals (cod liver oil/liver documentation, 10–1,000x requirement threshold, clinical signs)",
      "url": "https://www.msdvetmanual.com/toxicology/toxicoses-from-human-vitamins-minerals-and-dietary-supplements/toxicoses-in-animals-from-human-multivitamins-and-supplements"
    },
    {
      "label": "Clinician's Brief / Troyer DVM — Hypervitaminosis A & chronic hepatic injury (cat fed raw beef liver 3 months: tetraparalysis, C1–T7 fusion, hepatic fibrosis)",
      "url": "http://assets.ctfassets.net/4dmg3l1sxd6g/5IGdX88u8gFxsITojemHl5/943e242aacaa2d545ccf4e52d3b92265/cap_hypervitaminosis--hyperthyroidism_0-19151-article.pdf"
    }
  ],
  "function": "Nutritional excess (homemade diets)"
},
{
  "aliases": [
    "nutmeg",
    "myristicin",
    "myristica fragrans",
    "ground nutmeg"
  ],
  "bullets": [
    "Nutmeg contains myristicin, a compound that is hallucinogenic in dogs and can raise heart rate and blood pressure — straining the heart. Veterinary-reviewed guidance lists vomiting, diarrhea, disorientation, hallucinations, tremors, seizures, and high body temperature as the toxicity signs.",
    "Dose matters, and the honest picture is mixed: one emergency veterinarian puts a toxic dose at as little as 1 teaspoon of ground nutmeg or three whole nuts, while Pet Poison Helpline notes a dog would have to consume a very large amount to show symptoms. Small amounts typically cause only stomach upset.",
    "The realistic danger is the spice jar, not the pie slice: most recipes contain under a teaspoon of nutmeg spread across a whole dessert, but a dog that raids the spice rack can ingest a genuinely toxic dose. Nutmeg essential oil and diffusers count too.",
    "Signs are dose-dependent: a nibble brings digestive upset; a large dose brings the neurological and cardiovascular signs. If a dog gets into ground nutmeg or whole nuts and shows disorientation, tremors, or a racing heart, it is an emergency vet visit.",
    "Keep the whole spice rack out of reach — and note that holiday baking concentrates several dog hazards at once (nutmeg plus chocolate, xylitol, and high-fat doughs). General information only — not veterinary advice."
  ],
  "category": "Human-food toxin (dogs)",
  "description": "Nutmeg's myristicin is hallucinogenic in dogs and can drive up heart rate and blood pressure. A nibble upsets the stomach; a spice-jar raid can be genuinely dangerous.",
  "e_number": null,
  "id": "nutmeg-pet",
  "ins_number": null,
  "last_reviewed": "2026-10-11",
  "link": null,
  "name": "Nutmeg (myristicin) — dog toxin",
  "regulatory_status": {
    "eu": "Not a pet-food ingredient; no regulatory status applicable.",
    "us": "Not a pet-food ingredient. Listed among people-foods hazardous to dogs by veterinary sources; no FDA action because this is an owner-awareness hazard, not a manufacturing issue."
  },
  "risk": "caution",
  "risk_weight": 20,
  "sources": [
    {
      "label": "Chewy (vet-reviewed) — Can Dogs Have Nutmeg? (myristicin: hallucinogenic, HR/BP effects; dose honesty via Pet Poison Helpline)",
      "url": "https://www.chewy.com/education/dog/food-and-nutrition/can-dogs-have-nutmeg"
    },
    {
      "label": "Dogtopia (reviewed by Senior Director of Health & Safety) — Fall spices: nutmeg myristicin poisoning signs by dose",
      "url": "https://www.dogtopia.com/blog/dog-dos-and-donts-fall-themed-food/"
    }
  ],
  "function": "Human-food toxin (dogs)"
},
{
  "aliases": [
    "tuna",
    "canned tuna",
    "albacore",
    "chunk light tuna",
    "tuna-based cat food"
  ],
  "bullets": [
    "An all-tuna diet is nutritionally incomplete for cats in several documented ways: tuna is low in vitamin E (risking steatitis — painful, sometimes fatal inflammation of body fat), low in vitamin K (risking internal bleeding), low in B vitamins and calcium, and high in magnesium (linked to bladder problems). One practicing veterinarian's column calls the all-tuna diet 'nutritionally incomplete and unbalanced.'",
    "Steatitis — 'yellow fat disease' — is the signature tuna-linked condition: veterinary nutrition references describe it in cats fed diets high in unsaturated fatty acids with insufficient vitamin E, with canned red tuna specifically incriminated. The cat becomes feverish, depressed, and in pain when touched.",
    "Mercury is the quieter concern: a Tufts veterinary nutritionist notes no confirmed poisoning reports in cats from commercial tuna cat food, but a cat eating tuna as its main diet ingests far more mercury per body weight than even a heavy tuna-eating human — and mercury signs (loss of coordination, tremors) mimic thiamine deficiency, so cases may go undiagnosed.",
    "Not all tuna is equal: albacore comes from a larger species with roughly three times the mercury of chunk-light. Tufts advises occasional chunk-light treats at most — no more than 10% of daily calories — and notes cats fed canned tuna daily also show increased risk of oral squamous cell carcinoma.",
    "The practical line: an occasional tuna treat is widely considered fine; tuna as the diet is where the documented problems (steatitis, deficiencies, mercury load) accumulate. General information only — not veterinary advice."
  ],
  "category": "Nutritional excess (cats)",
  "description": "Tuna as a treat is fine; tuna as a diet is not. All-tuna feeding in cats is linked to painful yellow fat disease, vitamin deficiencies, and a heavy mercury load.",
  "e_number": null,
  "id": "tuna-cats-pet",
  "ins_number": null,
  "last_reviewed": "2026-10-11",
  "link": null,
  "name": "Tuna-heavy diets — cat hazard",
  "regulatory_status": {
    "eu": "Complete pet foods must meet FEDIAF nutritional guidelines; the hazard is owner-fed all-tuna diets, which fall outside feed regulation.",
    "us": "AAFCO nutrient profiles require complete cat foods to carry adequate vitamin E, K, and B vitamins; the hazard is owner-fed all-tuna diets, which fall outside feed regulation. No FDA action because this is a feeding-practice issue."
  },
  "risk": "caution",
  "risk_weight": 20,
  "sources": [
    {
      "label": "Tufts University — Mercury in canned tuna for cats (no confirmed poisoning reports; chunk-light vs albacore; 10% calorie guidance)",
      "url": "https://now.tufts.edu/2014/01/27/concerns-about-mercury-poisoning-it-safe-give-canned-tuna-cats-treat"
    },
    {
      "label": "Ask the Vet (IBJ) — Feed commercial cat food, not just tuna (steatitis, vitamin K/E deficiency, mercury, magnesium, oral SCC risk)",
      "url": "https://www.ibj.com/articles/ask-the-vet-feed-commercial-cat-food-not-just-tuna"
    }
  ],
  "function": "Nutritional excess (cats)"
}
];
