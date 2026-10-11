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
  }
];
