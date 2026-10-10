/* Consumer Rising — Ingredient Index data (50 entries).
   Risk ratings are the site's editorial judgment. Keep language plain and
   non-alarmist; details live on the linked findings where they exist. */
window.CR_INGREDIENTS = [
  {
    name: "High Fructose Corn Syrup",
    id: "hfcs",
    aliases: ["HFCS", "HFCS-55", "Glucose-fructose syrup", "Isoglucose"],
    e_number: null,
    ins_number: null,
    risk: "high",
    risk_weight: 30,
    category: "Sweetener",
    description: "A cheap liquid sweetener made from corn starch. It is the main sweetener in most American sodas and shows up in bread, ketchup, and salad dressing too.",
    regulatory_status: { us: "GRAS; widely used in sodas and processed foods", eu: "Permitted as glucose-fructose syrup (isoglucose)" },
    last_reviewed: "2026-10-10",
    bullets: [
      "About 55% fructose and 45% glucose — very close to table sugar, which is 50/50.",
      "The problem is total added sugar: high intake is linked to obesity, type 2 diabetes, and heart disease.",
      "One 12-ounce soda carries about 39 grams of sugar — more than a full day's limit for most adults.",
      "US use peaked around 1999 and has fallen as soda sales dropped."
    ],
    link: "/investigations/truth-about-hfcs",
    sources: [
      { label: "Coca-Cola nutrition facts (39g sugar / 12 oz)", url: "https://coca-cola.com/us/en/brands/coca-cola/products/original" },
      { label: "USDA ERS: sweetener availability peaked 1999", url: "https://www.ers.usda.gov/data-products/ag-and-food-statistics-charting-the-essentials/food-availability-and-consumption?topicId=080e8d1d-e61e-4bd8-beac-51f0f1d1f0fe" }
    ]
  },
  {
    name: "Red 40",
    id: "e129",
    aliases: ["Allura Red AC", "E129", "FD&C Red No. 40"],
    e_number: "E129",
    ins_number: 129,
    risk: "high",
    risk_weight: 30,
    category: "Food Dye",
    description: "One of the most widely used artificial colors in US food — candy, drinks, cereals, and snacks. It makes food look bright red or orange.",
    regulatory_status: { us: "FDA-approved color additive", eu: "Permitted; must carry warning on effects on activity and attention in children" },
    last_reviewed: "2026-10-10",
    bullets: [
      "In the EU, foods with this dye must warn they 'may have an adverse effect on activity and attention in children.'",
      "A 2007 study linked a mix of artificial colors to more hyperactivity in some children.",
      "Watchdog groups have petitioned the FDA for years to take a harder look at dyes.",
      "Look for 'Red 40', 'Allura Red', or 'E129' — brightest reds, oranges, and pinks are the usual suspects."
    ],
    link: "/investigations/red-dye-40",
    sources: [
      { label: "FDA: color additives information for consumers", url: "https://www.fda.gov/food/food-ingredients-packaging/color-additives-information-consumers" },
      { label: "EFSA: food colours", url: "https://www.efsa.europa.eu/en/topics/topic/food-colours" }
    ]
  },
  {
    name: "Yellow 5",
    id: "e102",
    aliases: ["Tartrazine", "E102", "FD&C Yellow No. 5"],
    e_number: "E102",
    ins_number: 102,
    risk: "high",
    risk_weight: 30,
    category: "Food Dye",
    description: "The bright yellow dye in candy, drinks, chips, and even some medicines. It carries the same EU child-attention warning as Red 40.",
    regulatory_status: { us: "FDA-approved; must be declared by name on labels", eu: "Permitted; must carry warning on effects on activity and attention in children" },
    last_reviewed: "2026-10-10",
    bullets: [
      "EU requires the same 'activity and attention in children' warning label as other artificial colors.",
      "Included in the color mixes studied for links to hyperactivity in sensitive children.",
      "Hives from tartrazine are rare — but unlike most dyes, the FDA requires it to be listed by name on labels, so sensitive people can avoid it.",
      "Check candy, sports drinks, flavored chips, and instant noodles for 'Yellow 5' or 'Tartrazine'."
    ],
    link: null,
    sources: [
      { label: "FDA: color additives information for consumers", url: "https://www.fda.gov/food/food-ingredients-packaging/color-additives-information-consumers" }
    ]
  },
  {
    name: "Sodium Benzoate",
    id: "e211",
    aliases: ["E211", "Benzoic acid (related)"],
    e_number: "E211",
    ins_number: 211,
    risk: "medium",
    risk_weight: 15,
    category: "Preservative",
    description: "A preservative that keeps sodas, juices, and condiments from spoiling. Common in acidic drinks.",
    regulatory_status: { us: "GRAS preservative", eu: "Permitted preservative (E211)" },
    last_reviewed: "2026-10-10",
    bullets: [
      "Was part of the color-plus-preservative mix tied to hyperactivity in the 2007 children's study.",
      "Can form benzene when mixed with vitamin C in drinks: FDA surveys in 2005–2007 found a small handful of 100+ tested drinks above the 5 ppb drinking-water limit; makers reformulated and retests came back under 1.5 ppb.",
      "Generally considered safe at approved levels by the FDA.",
      "If you drink a lot of soda with both sodium benzoate and vitamin C, that is the combo to watch."
    ],
    link: null,
    sources: [
      { label: "FSAI summary of FDA benzene-in-drinks surveys 2005–2007", url: "https://www.fsai.ie/enforcement-and-legislation/official-controls/monitoring/surveillance/introduction-benzene-survey-2006" }
    ]
  },
  {
    name: "Monosodium Glutamate (MSG)",
    id: "e621",
    aliases: ["MSG", "E621", "Yeast extract (similar)", "Hydrolyzed protein (similar)"],
    e_number: "E621",
    ins_number: 621,
    risk: "low",
    risk_weight: 5,
    category: "Flavor Enhancer",
    description: "A flavor booster for savory food. The scare started in 1968; the science since then has been mixed and mostly reassuring at normal food levels.",
    regulatory_status: { us: "GRAS", eu: "Permitted flavor enhancer (E621)" },
    last_reviewed: "2026-10-10",
    bullets: [
      "The FDA classifies MSG as 'generally recognized as safe' (GRAS).",
      "A 1995 expert review found no consistent link to reported symptoms in double-blind studies.",
      "Glutamate occurs naturally in tomatoes, cheese, and mushrooms.",
      "Often hides under names like 'yeast extract' and 'hydrolyzed vegetable protein'."
    ],
    link: "/investigations/msg",
    sources: [
      { label: "FDA: Questions and Answers on MSG", url: "https://www.fda.gov/food/food-additives-petitions/questions-and-answers-monosodium-glutamate-msg" }
    ]
  },
  {
    name: "Partially Hydrogenated Oils",
    id: "pho",
    aliases: ["PHOs", "Partially hydrogenated soybean oil", "Shortening (some)"],
    e_number: null,
    ins_number: null,
    risk: "high",
    risk_weight: 30,
    category: "Fat/Oil",
    description: "The main source of artificial trans fat. The FDA gave the industry until 2020 to remove them — but label loopholes mean traces can remain.",
    regulatory_status: { us: "No longer GRAS (FDA, 2015); removed from US food supply", eu: "Trans fat capped at 2g per 100g fat (Regulation 2019/649)" },
    last_reviewed: "2026-10-10",
    bullets: [
      "In 2015 the FDA ruled PHOs are no longer 'generally recognized as safe.'",
      "Trans fats raise LDL ('bad') cholesterol.",
      "Label trick: under 0.5g per serving can still be called '0g trans fat' — so '0g' is not always zero.",
      "Read ingredients for the words 'partially hydrogenated', especially in frosting, popcorn, and baked goods."
    ],
    link: "/investigations/trans-fats-hiding",
    sources: [
      { label: "FDA: final determination on partially hydrogenated oils", url: "https://www.fda.gov/food/food-additives-petitions/final-determination-regarding-partially-hydrogenated-oils-removing-trans-fat" }
    ]
  },
  {
    name: "Aspartame",
    id: "e951",
    aliases: ["E951", "NutraSweet", "Equal"],
    e_number: "E951",
    ins_number: 951,
    risk: "medium",
    risk_weight: 15,
    category: "Sweetener",
    description: "The sweetener in most diet sodas and sugar-free gum. In 2023 the WHO's cancer agency called it 'possibly carcinogenic' — while other expert groups disagreed.",
    regulatory_status: { us: "FDA-approved sweetener", eu: "Permitted sweetener (E951)" },
    last_reviewed: "2026-10-10",
    bullets: [
      "IARC classified aspartame Group 2B ('possibly carcinogenic') in July 2023, based on limited evidence.",
      "The same review kept the daily limit at 40 mg per kg of body weight; the FDA publicly disagreed with the 2B label.",
      "The WHO's May 2023 guideline says non-sugar sweeteners do not help with weight control.",
      "People with the rare disorder PKU must avoid it — the FDA requires every aspartame product to warn 'PHENYLKETONURICS: CONTAINS PHENYLALANINE.'"
    ],
    link: "/investigations/artificial-sweeteners",
    sources: [
      { label: "FDA: aspartame, PKU warning and labeling", url: "https://www.fda.gov/food/food-additives-petitions/aspartame-and-other-sweeteners-food" }
    ]
  },
  {
    name: "Brominated Vegetable Oil (BVO)",
    id: "e443",
    aliases: ["BVO", "E443"],
    e_number: "E443",
    ins_number: 443,
    risk: "high",
    risk_weight: 30,
    category: "Emulsifier",
    description: "Used to keep citrus flavor mixed in some sodas and sports drinks. The FDA revoked its authorization for use in food in 2024.",
    regulatory_status: { us: "FDA food authorization revoked (2024)", eu: "Never approved for food use" },
    last_reviewed: "2026-10-10",
    bullets: [
      "The FDA revoked BVO's food authorization in July 2024, concluding it was no longer considered safe after NIH-collaboration studies found potential adverse health effects.",
      "California's Food Safety Act (AB 418) also bans it in food from January 2027.",
      "Companies were given time to reformulate — check citrus sodas bought before the switch.",
      "Look for 'brominated vegetable oil' in citrus-flavored drinks."
    ],
    link: null,
    sources: [
      { label: "FDA: BVO authorization revoked July 2024", url: "https://www.fda.gov/food/food-additives-petitions/brominated-vegetable-oil-bvo" },
      { label: "California AB 418 — text of the law", url: "https://leginfo.legislature.ca.gov/faces/billCompareClient.xhtml?bill_id=202320240AB418&showamends=false" }
    ]
  },
  {
    name: "Potassium Bromate",
    id: "e924",
    aliases: ["Bromated flour", "E924"],
    e_number: "E924",
    ins_number: 924,
    risk: "high",
    risk_weight: 30,
    category: "Flour Improver",
    description: "A flour additive that makes bread rise higher and look whiter. Removed from EU food years ago — still allowed in the US.",
    regulatory_status: { us: "Permitted; banned in California from Jan 2027 (AB 418)", eu: "Not approved for food use" },
    last_reviewed: "2026-10-10",
    bullets: [
      "IARC classifies it Group 2B ('possibly carcinogenic to humans') based on sufficient evidence in animals.",
      "California bans it in food from January 2027 under the California Food Safety Act (AB 418).",
      "Most of it breaks down during baking, but residues can remain.",
      "Look for 'potassium bromate' or 'bromated flour' on bread and roll labels."
    ],
    link: null,
    sources: [
      { label: "IARC Monographs Vol. 73: potassium bromate, Group 2B", url: "http://publications.iarc.who.int/91" },
      { label: "California AB 418 — text of the law", url: "https://leginfo.legislature.ca.gov/faces/billCompareClient.xhtml?bill_id=202320240AB418&showamends=false" }
    ]
  },
  {
    name: "BHA",
    id: "e320",
    aliases: ["Butylated hydroxyanisole", "E320"],
    e_number: "E320",
    ins_number: 320,
    risk: "high",
    risk_weight: 30,
    category: "Preservative/Antioxidant",
    description: "A preservative that keeps fats in chips, cereal, and gum from going stale. Listed as 'reasonably anticipated to be a human carcinogen' in the US.",
    regulatory_status: { us: "Permitted; NTP lists as 'reasonably anticipated to be a human carcinogen'", eu: "Permitted antioxidant (E320); ADI 1.0 mg/kg bw/day" },
    last_reviewed: "2026-10-10",
    bullets: [
      "The US National Toxicology Program lists BHA as 'reasonably anticipated to be a human carcinogen' based on animal studies.",
      "Authorized — not banned — in the EU as E320, with an EFSA acceptable daily intake of 1.0 mg per kg of body weight per day.",
      "IARC classifies it Group 2B ('possibly carcinogenic to humans') based on limited animal data and no conclusive human data.",
      "Often paired with BHT (E321) — if you see one, look for the other.",
      "Common in chips, cereal, chewing gum, and instant noodles."
    ],
    link: null,
    sources: [
      { label: "EFSA 2011: BHA (E320) re-evaluation, ADI 1.0 mg/kg bw/day", url: "https://doi.org/10.2903/j.efsa.2011.2392" }
    ]
  },
  {
    name: "Titanium Dioxide",
    id: "e171",
    aliases: ["E171", "CI 77891"],
    e_number: "E171",
    ins_number: 171,
    risk: "medium",
    risk_weight: 15,
    category: "Colorant/Whitening Agent",
    description: "Makes candy, frosting, and coffee creamer look bright white. The EU banned it as a food additive in 2022 after EFSA's safety review.",
    regulatory_status: { us: "FDA-approved color additive", eu: "Banned as a food additive (2022)" },
    last_reviewed: "2026-10-10",
    bullets: [
      "The EU banned E171 in food in 2022 after EFSA concluded it could no longer be considered safe — a genotoxicity concern could not be ruled out.",
      "Still fully allowed in US food; the FDA has not followed the EU.",
      "The concern is about tiny nanoparticles — an area where science is still catching up.",
      "Look for it in white candy shells, frosting, and powdered creamers."
    ],
    link: null,
    sources: [
      { label: "EFSA 2021: E171 no longer considered safe as a food additive", url: "https://www.efsa.europa.eu/en/news/titanium-dioxide-e171-no-longer-considered-safe-when-used-food-additive" }
    ]
  },
  {
    name: "Carrageenan",
    id: "e407",
    aliases: ["E407", "Irish moss (source)"],
    e_number: "E407",
    ins_number: 407,
    risk: "low",
    risk_weight: 5,
    category: "Thickener/Stabilizer",
    description: "A thickener from red seaweed in chocolate milk, ice cream, and plant milks. Lab research raised gut-inflammation questions; regulators say current uses look safe.",
    regulatory_status: { us: "Permitted direct food additive (21 CFR 172.620)", eu: "Permitted thickener (E407)" },
    last_reviewed: "2026-10-10",
    bullets: [
      "NIH-funded lab research linked food-grade carrageenan to gut inflammation in cell and animal studies.",
      "EFSA's 2018 re-evaluation found no safety concern at reported uses, but noted data gaps.",
      "Do not confuse food-grade carrageenan with 'degraded carrageenan' (poligeenan), a lab chemical not allowed in food.",
      "Many brands now print 'carrageenan-free' on the carton if you want to skip it."
    ],
    link: "/investigations/carrageenan",
    sources: [
      { label: "EFSA 2018: re-evaluation of carrageenan (E 407)", url: "https://doi.org/10.2903/j.efsa.2018.5238" }
    ]
  },
  {
    name: "Sodium Nitrite & Sodium Nitrate",
    id: "sodium-nitrite",
    aliases: ["Sodium Nitrite", "Sodium Nitrate", "E250", "E251", "E249 (Potassium Nitrite)", "E252 (Potassium Nitrate)", "celery powder", "celery juice powder", "cultured celery juice"],
    e_number: "E250",
    ins_number: 250,
    risk: "high",
    risk_weight: 30,
    category: "Preservative",
    description: "The preservatives that keep bacon pink, hot dogs shelf-stable, and deli meat free of botulism. They do a real food-safety job — but in the body's acid stomach environment, nitrite can convert into nitrosamines, and IARC classifies ingested nitrite under nitrosating conditions as probably carcinogenic to humans (Group 2A).",
    regulatory_status: {
      eu: "Permitted as E249-E252; after EFSA's 2023 assessment found current nitrosamine exposure a health concern, the EU moved to tighten maximum permitted levels.",
      us: "Permitted in cured meats under federal limits — USDA rules set ingoing nitrite levels (e.g., for bacon) and require bacon to be tested for nitrosamines."
    },
    last_reviewed: "2026-10-10",
    bullets: ["In the stomach's acid environment, nitrite can react with amines and amides from meat protein to form N-nitroso compounds, some of which are known carcinogens.", "IARC classified ingested nitrate and nitrite, under conditions that result in endogenous nitrosation, as probably carcinogenic to humans (Group 2A).", "Nitrites and nitrates sit at number one on EWG's Dirty Dozen list of food additives, which cites their probable-carcinogen classification when ingested.", "The label trick to know: meats cured with celery powder are still cured — the nitrite molecule is identical regardless of source, and USDA rules require the 'uncured' label on them.", "Look for 'sodium nitrite', 'sodium nitrate', 'celery powder', 'cultured celery juice', or E249-E252 on labels — and do not read 'uncured' or 'no nitrates added' as nitrite-free."],
    link: null,
    sources: [
      {
        label: "EWG: Dirty Dozen Guide to Food Additives",
        url: "https://www.ewg.org/news-insights/news-release/2014/11/new-guide-warns-dirty-dozen-food-additives"
      },
      {
        label: "UK Food Standards Agency: Safety of Nitrates and Nitrites as Food Additives (2025 review)",
        url: "https://science.food.gov.uk/article/144676-safety-of-nitrates-and-nitrites-as-food-additives.pdf"
      },
      {
        label: "USDA FSIS: 9 CFR 424.22 — permitted uses of nitrite in meat",
        url: "https://www.govinfo.gov/content/pkg/CFR-2020-title9-vol2/pdf/CFR-2020-title9-vol2-sec424-22.pdf"
      },
      {
        label: "ScienceInsights: What 'uncured' deli meat really means",
        url: "https://scienceinsights.org/what-does-uncured-deli-meat-mean-the-truth/"
      }
    ]
  },
  {
    name: "Acesulfame Potassium (Ace-K)",
    id: "acesulfame-potassium",
    aliases: ["Acesulfame Potassium", "Acesulfame-K", "Ace-K", "Sunett", "E950"],
    e_number: "E950",
    ins_number: 950,
    risk: "high",
    risk_weight: 30,
    category: "Sweetener",
    description: "A calorie-free sweetener found in diet sodas, sugar-free baked goods, and other 'diet' products. It is FDA-approved, but CSPI rates it Avoid — and a large 2022 French cohort linked higher intake to higher coronary heart disease risk, a signal worth knowing about but not proof of harm.",
    regulatory_status: {
      eu: "Approved as E950; like other artificial sweeteners, it is currently being re-evaluated by EFSA and other health agencies.",
      us: "FDA-approved as a food additive; FDA's position is that approved high-intensity sweeteners are safe for the general population under their conditions of use."
    },
    last_reviewed: "2026-10-10",
    bullets: ["The 2022 NutriNet-Sante prospective cohort (103,388 French adults) associated acesulfame-K intake with higher coronary heart disease risk (hazard ratio 1.40, 95% CI 1.06-1.84).", "That was an observational study — it found an association, not proof that the sweetener caused the heart events, and the researchers call for more research.", "CSPI rates acesulfame potassium Avoid, citing a possible small cancer risk alongside the newer cardiovascular signal.", "It is widely used in products marketed as 'sugar-free' or 'diet,' including soft drinks and baked goods, and it stays sweet at baking temperatures.", "Look for 'acesulfame potassium', 'Ace-K', 'Sunett', or 'E950' on labels — it is often listed alongside other sweeteners in the same ingredient line."],
    link: null,
    sources: [
      {
        label: "BMJ 2022: Artificial sweeteners and risk of cardiovascular diseases (NutriNet-Sante cohort)",
        url: "https://www.bmj.com/content/378/bmj-2022-071204"
      },
      {
        label: "FDA: High-Intensity Sweeteners",
        url: "https://www.fda.gov/food/food-additives-petitions/high-intensity-sweeteners"
      },
      {
        label: "CSPI Chemical Cuisine: Low-Calorie Sweeteners",
        url: "https://www.cspi.org/chemical-cuisine/low-calorie-sweeteners"
      }
    ]
  },
  {
    name: "Sucralose",
    id: "sucralose",
    aliases: ["Sucralose", "Splenda", "E955"],
    e_number: "E955",
    ins_number: 955,
    risk: "high",
    risk_weight: 30,
    category: "Sweetener",
    description: "The sweetener sold as Splenda, spread across the 'sugar-free' aisle — diet drinks, gum, baked goods, and tabletop packets. Two independent 2022 studies raised flags: a large French cohort linked it to coronary heart disease risk, and a human trial found it disrupted gut bacteria and blood-sugar response.",
    regulatory_status: {
      eu: "Approved as E955; like other artificial sweeteners, it is currently being re-evaluated by EFSA and other health agencies.",
      us: "FDA-approved as a food additive; FDA's position is that approved high-intensity sweeteners are safe for the general population under their conditions of use."
    },
    last_reviewed: "2026-10-10",
    bullets: ["The 2022 NutriNet-Sante prospective cohort (103,388 French adults) associated sucralose intake with higher coronary heart disease risk (hazard ratio 1.31, 95% CI 1.00-1.71).", "That cohort finding is observational — an association, not causal proof — but it landed alongside a very different kind of evidence in the same year.", "In a 2022 randomized trial of 120 healthy adults, sucralose altered the gut and oral microbiome and significantly impaired glycemic responses, at doses below the acceptable daily intake.", "The microbiome link looks causal rather than coincidental: transplanting participants' gut bacteria into germ-free mice reproduced the blood-sugar changes.", "CSPI rates sucralose Avoid, citing a possible small cancer risk.", "Look for 'sucralose', 'Splenda', or 'E955' on labels — in diet drinks, gum, baked goods, powdered drink mixes, and tabletop packets."],
    link: null,
    sources: [
      {
        label: "BMJ 2022: Artificial sweeteners and risk of cardiovascular diseases (NutriNet-Sante cohort)",
        url: "https://www.bmj.com/content/378/bmj-2022-071204"
      },
      {
        label: "Cell 2022: Personalized microbiome-driven effects of non-nutritive sweeteners on human glucose tolerance (Suez et al.)",
        url: "https://www.cell.com/cell/fulltext/S0092-8674(22)00919-9"
      },
      {
        label: "CSPI Chemical Cuisine: Low-Calorie Sweeteners",
        url: "https://www.cspi.org/chemical-cuisine/low-calorie-sweeteners"
      }
    ]
  },
  {
    name: "Red 3 (Erythrosine)",
    id: "red-3",
    aliases: ["Red 3", "Erythrosine", "FD&C Red No. 3", "Red No. 3", "E127"],
    e_number: "E127",
    ins_number: 127,
    risk: "high",
    risk_weight: 30,
    category: "Food Dye",
    description: "The bright cherry-red dye in candy, frostings, and baked goods — and the additive behind the biggest US food-dye regulatory action in decades. In January 2025 the FDA revoked its authorization for food, but be clear-eyed about why: the decision was a matter of law, not new evidence of human harm.",
    regulatory_status: {
      eu: "Never broadly authorized — in the EU, E127 is permitted only in niche uses such as cocktail and candied cherries.",
      us: "Authorization revoked by the FDA in January 2025; phase-out is in progress — food makers must reformulate by January 15, 2027, ingested-drug makers by January 18, 2028."
    },
    last_reviewed: "2026-10-10",
    bullets: ["The FDA revoked Red 3's authorization for food and ingested drugs in January 2025 under the Delaney Clause, a 1960 law that bars any color additive found to cause cancer in humans or animals.", "The trigger was a 2022 color-additive petition citing studies in which high doses of the dye caused thyroid tumors in male rats.", "The honest caveat, in the FDA's own words: the rat tumors came from a hormonal mechanism specific to male rats that does not occur in humans, and there is no evidence Red 3 causes cancer in people.", "Food manufacturers have until January 15, 2027 to reformulate; makers of ingested drugs have until January 18, 2028.", "CSPI flagged this dye for decades — a 1983 FDA-requested review committee called the rat thyroid-tumor evidence 'convincing' — and joined the 2022 petition.", "Look for 'Red 3', 'FD&C Red No. 3', 'erythrosine', or 'E127' on labels — mostly in cherry-red candy, cake icing, and frostings."],
    link: null,
    sources: [
      {
        label: "FDA Constituent Update (Jan 15, 2025), via Ai Kahu reprint Red No. 3 in food and ingested drugs (reprint)",
        url: "https://www.aikahuculinarysolutions.com/news-notes/2025/1/30/fda-bans-red-dye-40"
      },
      {
        label: "Philippine DTI advisory: US FDA revokes authorization for FD&C Red No. 3",
        url: "https://www.dti.gov.ph/dti-archives/dti-advisories-archived/dti-us-fda-revokes-authorization-fdampc-red-no-3-food-ingested-drugs"
      },
      {
        label: "CSPI Chemical Cuisine: Artificial colorings (synthetic food dyes)",
        url: "https://www.cspi.org/chemical-cuisine/artificial-colorings-synthetic-food-dyes"
      },
      {
        label: "EU Regulation 1333/2008, Annex II: E127 erythrosine authorized uses",
        url: "https://www.legislation.gov.uk/eur/2008/1333/annex/II/table/34/group/3/2025-02-27?view=extent"
      }
    ]
  },
  {
    name: "Yellow 6 (Sunset Yellow)",
    id: "yellow-6",
    aliases: ["Yellow 6", "Sunset Yellow", "Sunset Yellow FCF", "FD&C Yellow No. 6", "E110"],
    e_number: "E110",
    ins_number: 110,
    risk: "high",
    risk_weight: 30,
    category: "Food Dye",
    description: "One of the most widely used dyes in US candy, sodas, and snacks. California's 2021 OEHHA review — the most rigorous assessment of dyes and children to date — found synthetic dyes can worsen neurobehavioral problems in some children, and that the FDA's intake limits may not protect kids.",
    regulatory_status: {
      eu: "Permitted, but as one of the 'Southampton six,' any product containing it must carry the warning that it may have an adverse effect on activity and attention in children.",
      us: "FDA-permitted; it is one of the seven FDA-approved dyes OEHHA evaluated, and the FDA sets no behavioral warning requirement for it."
    },
    last_reviewed: "2026-10-10",
    bullets: ["CSPI describes Yellow 6 as the third-most-widely-used synthetic dye, found in beverages, candy, and baked goods.", "OEHHA's 2021 report — a two-year review of human and animal studies — found synthetic food dyes are associated with adverse neurobehavioral outcomes in some children, including inattentiveness, hyperactivity, and restlessness.", "The report found the FDA's intake limits rest on decades-old studies that were not designed to detect behavioral effects, and may not adequately protect children.", "CSPI rates all synthetic food dyes, including Yellow 6, Avoid.", "Look for 'Yellow 6', 'Sunset Yellow', 'FD&C Yellow No. 6', or 'E110' on labels — orange sodas, cheesy snacks, and bright candies are the usual places."],
    link: null,
    sources: [
      {
        label: "OEHHA (Apr 2021): Report links synthetic food dyes to hyperactivity and other neurobehavioral effects in children",
        url: "https://oehha.ca.gov/risk-assessment/press-release/report-links-synthetic-food-dyes-hyperactivity-and-other-neurobehavioral-effects-children"
      },
      {
        label: "CSPI Chemical Cuisine: Artificial colorings (synthetic food dyes)",
        url: "https://www.cspi.org/chemical-cuisine/artificial-colorings-synthetic-food-dyes"
      },
      {
        label: "CMS Law: Compulsory warnings on colours in food and drink (EU Regulation 1333/2008, Southampton six)",
        url: "https://cms.law/en/gbr/legal-updates/compulsory-warnings-on-colours-in-food-and-drink"
      }
    ]
  },
  {
    name: "Blue 1 (Brilliant Blue)",
    id: "blue-1",
    aliases: ["Blue 1", "Brilliant Blue", "Brilliant Blue FCF", "FD&C Blue No. 1", "E133"],
    e_number: "E133",
    ins_number: 133,
    risk: "high",
    risk_weight: 30,
    category: "Food Dye",
    description: "The blue in candy, sports drinks, and baked goods — often mixed with yellows to make green. It carries the same class-level concerns as the other synthetic dyes, but the honest truth is that Blue 1 has thinner dye-specific research than the yellows and reds.",
    regulatory_status: {
      eu: "Permitted; it is not one of the six 'Southampton' dyes, so it does not trigger the EU warning label about effects on activity and attention in children.",
      us: "FDA-permitted; no behavioral warning requirement."
    },
    last_reviewed: "2026-10-10",
    bullets: ["OEHHA's 2021 review evaluated seven FDA-approved synthetic dyes, including Blue 1, and linked the class to adverse neurobehavioral outcomes in some children — so the class finding covers it, but most of the underlying studies tested other dyes.", "The dye-specific record is thin: CSPI notes one unpublished animal test suggesting a small cancer risk and a test-tube study hinting at effects on neurons, plus occasional allergic reactions.", "CSPI's own verdict is cautious rather than damning: Blue 1 'might be safe for people who are not allergic, but it should be better tested.'", "Even so, CSPI rates all synthetic food dyes, including Blue 1, Avoid.", "Look for 'Blue 1', 'Brilliant Blue', 'FD&C Blue No. 1', or 'E133' on labels — electric-blue candy, sports drinks, and frostings."],
    link: null,
    sources: [
      {
        label: "CSPI Chemical Cuisine: Artificial colorings (synthetic food dyes)",
        url: "https://www.cspi.org/chemical-cuisine/artificial-colorings-synthetic-food-dyes"
      },
      {
        label: "OEHHA (Apr 2021): Report links synthetic food dyes to hyperactivity and other neurobehavioral effects in children",
        url: "https://oehha.ca.gov/risk-assessment/press-release/report-links-synthetic-food-dyes-hyperactivity-and-other-neurobehavioral-effects-children"
      },
      {
        label: "CMS Law: Compulsory warnings on colours in food and drink (EU Regulation 1333/2008, Southampton six)",
        url: "https://cms.law/en/gbr/legal-updates/compulsory-warnings-on-colours-in-food-and-drink"
      }
    ]
  },
  {
    name: "BHT (Butylated Hydroxytoluene)",
    id: "bht",
    aliases: ["BHT", "butylated hydroxytoluene", "butylhydroxytoluene", "E321"],
    e_number: "E321",
    ins_number: 321,
    risk: "high",
    risk_weight: 30,
    category: "Antioxidant (preservative)",
    description: "A synthetic antioxidant that keeps fats and oils in cereals, snack foods, and packaged goods from going rancid. It holds a spot on EWG's Dirty Dozen list of additives to avoid — though the case against it is precautionary, not proven.",
    regulatory_status: {
      eu: "Permitted as food additive E321; EFSA re-evaluated it in 2012, set a daily intake limit of 0.25 mg/kg body weight, and found it not a genotoxic concern.",
      us: "The FDA classifies BHT as Generally Recognized as Safe (GRAS) and permits its use as an antioxidant in food."
    },
    last_reviewed: "2026-10-10",
    bullets: ["EWG put BHT on its Dirty Dozen list of additives to avoid, noting it has been shown to cause cancer in animals.", "The cancer agency IARC puts BHT in Group 3 — 'not classifiable as to its carcinogenicity to humans' — meaning the evidence doesn't settle the question either way.", "EFSA's 2012 review found BHT not a genotoxic concern but noted liver tumors in male rats at high doses; it set a daily limit of 0.25 mg/kg body weight that typical diets don't exceed.", "EFSA's own exposure check found heavy-eating children in Finland and the Netherlands could exceed that daily limit.", "Look for 'BHT', 'butylated hydroxytoluene', or 'E321' on labels — breakfast cereals, chewing gum, and fat-heavy snacks are the usual places."],
    link: null,
    sources: [
      {
        label: "EWG: Dirty Dozen Guide to Food Additives (2014)",
        url: "https://www.ewg.org/news-insights/news-release/2014/11/new-guide-warns-dirty-dozen-food-additives"
      },
      {
        label: "EFSA: re-evaluation of BHT (E 321) as a food additive (2012)",
        url: "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2012.2588"
      },
      {
        label: "FoodAdditives.net: BHT (E321) uses and safety summary",
        url: "https://foodadditives.net/antioxidant/butylated-hydroxytoluene-bht/"
      }
    ]
  },
  {
    name: "TBHQ (Tertiary Butylhydroquinone)",
    id: "tbhq",
    aliases: ["TBHQ", "tertiary butylhydroquinone", "tert-butylhydroquinone", "t-butylhydroquinone", "E319"],
    e_number: "E319",
    ins_number: 319,
    risk: "high",
    risk_weight: 30,
    category: "Antioxidant (preservative)",
    description: "The preservative that keeps crackers, potato products, and oil-heavy baked goods from going rancid — EWG found it in over 2,700 packaged foods. Human data on its effects is essentially absent, which is itself the point.",
    regulatory_status: {
      eu: "Permitted as food additive E319 with a daily intake limit of 0.7 mg/kg body weight; it is not approved for infant formula in the EU.",
      us: "The FDA permits TBHQ as a food antioxidant, capping total antioxidants at 0.02% of a food's oil or fat content."
    },
    last_reviewed: "2026-10-10",
    bullets: ["CSPI rates TBHQ 'avoid' in its Chemical Cuisine guide because of its cancer risk.", "EWG calls it an ingredient of concern and suggests limiting it: multiple animal studies tie it to immune dysfunction, including weaker natural-killer-cell and flu responses.", "EWG's own 2021 peer-reviewed study found TBHQ may act as an immunotoxin, affecting receptors that regulate inflammation and immune responses.", "Regulators approved it decades ago — the FDA in 1972, the EU in 2004 — but the EU still won't allow it in infant formula over safety concerns for babies.", "Look for 'TBHQ', 'tertiary butylhydroquinone', or 'E319' on labels — crackers, potato chips, and oil-heavy baked goods are the usual suspects."],
    link: null,
    sources: [
      {
        label: "EWG: evaluation of food chemicals — TBHQ",
        url: "http://www.ewg.org/research/ewg-evaluation-food-chemicals-tbhq"
      },
      {
        label: "21 CFR 172.185 — TBHQ (eCFR via Cornell LII)",
        url: "https://www.law.cornell.edu/cfr/text/21/172.185"
      },
      {
        label: "CSPI: TBHQ rated 'avoid' (IHOP pancakes ingredient review)",
        url: "https://www.cspi.org/article/these-ihop-pancakes-pack-24-teaspoons-sugar"
      },
      {
        label: "EU Directive 2006/52/EC (authorizes TBHQ; withdraws propylparaben)",
        url: "https://www.legislation.gov.uk/eudr/2006/52/adopted/data.xht?view=snippet&wrap=true"
      }
    ]
  },
  {
    name: "Propyl Gallate",
    id: "propyl-gallate",
    aliases: ["propyl gallate", "E310"],
    e_number: "E310",
    ins_number: 310,
    risk: "high",
    risk_weight: 30,
    category: "Antioxidant (preservative)",
    description: "An antioxidant that protects fats and oils in meat products, frozen foods, and candy — usually teamed up with BHA and BHT. EWG calls it an ingredient of concern and recommends limiting it.",
    regulatory_status: {
      eu: "Permitted as E310; EFSA's 2014 re-evaluation set a daily limit of 0.5 mg/kg body weight and concluded current uses are not a safety concern — though high-end exposure estimates exceeded that limit.",
      us: "The FDA classified propyl gallate as GRAS in 1948 and caps total antioxidants at 0.02% of a food's fat or oil content."
    },
    last_reviewed: "2026-10-10",
    bullets: ["The US government's 1982 animal bioassay found it not carcinogenic in rats or mice overall — but flagged extra, mostly benign tumors in low-dose male rats, an odd pattern that can signal hormone disruption.", "Newer animal and cell studies link it to male infertility and testicular toxicity in mice, interference with estrogen production, and impaired early embryo development.", "CSPI's own review notes the same odd low-dose tumor pattern and says this additive needs to be better studied.", "EWG recommends limiting foods containing it, while EFSA's 2014 review concluded current uses are not a safety concern — the evidence genuinely points both ways.", "Look for 'propyl gallate' or 'E310' on labels — meat products, frozen foods, and candy are where EWG finds it most."],
    link: null,
    sources: [
      {
        label: "EWG: evaluation of food chemicals — propyl gallate",
        url: "http://www.ewg.org/research/ewg-evaluation-food-chemicals-propyl-gallate"
      },
      {
        label: "CSPI Chemical Cuisine: propyl gallate",
        url: "https://www.cspi.org/chemical-cuisine/propyl-gallate"
      },
      {
        label: "EFSA: re-evaluation of propyl gallate (E 310) as a food additive (2014)",
        url: "https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2014.3642"
      }
    ]
  },
  {
    name: "Parabens (Propylparaben & Methylparaben)",
    id: "parabens",
    aliases: ["propylparaben", "propyl paraben", "methylparaben", "methyl paraben", "propyl p-hydroxybenzoate (related)", "E216", "E218"],
    e_number: "E216",
    ins_number: 216,
    risk: "medium",
    risk_weight: 15,
    category: "Preservative",
    description: "Antimicrobial preservatives in tortillas, muffins, and some processed meats — the same chemical family used in cosmetics. Europe banned propylparaben from food in 2006; the US never did.",
    regulatory_status: {
      eu: "The EU withdrew propylparaben (E216) and its sodium salt (E217) from authorized food additives in 2006, after EFSA could not set a safe daily intake — a sharp split with the US.",
      us: "The FDA still permits propylparaben in food — it judged it safe in 1972 for direct addition below 0.1% of the finished food."
    },
    last_reviewed: "2026-10-10",
    bullets: ["EFSA concluded it could not set a safe daily intake for propylparaben after studies showed reduced sperm production in juvenile male rats at the lowest dose tested.", "EWG calls propylparaben a recognized endocrine disruptor and put it at #3 on its Dirty Dozen list of additives to avoid.", "The human-risk picture at actual food levels is genuinely debated: EFSA itself said dietary exposure was 'limited and unlikely to represent a risk to consumers.'", "Only propylparaben was banned in the EU — methyl and ethyl parabens stayed approved, since EFSA cleared them with a group daily intake.", "Look for 'propylparaben', 'propyl paraben', 'methylparaben', or 'E216'/'E218' on labels — tortillas, muffins, and packaged baked goods are the usual suspects."],
    link: null,
    sources: [
      {
        label: "EFSA: advises on the safety of paraben usage in food",
        url: "https://www.efsa.europa.eu/en/news/efsa-advises-safety-paraben-usage-food"
      },
      {
        label: "EU Directive 2006/52/EC (withdraws E216/E217; authorizes TBHQ)",
        url: "https://www.legislation.gov.uk/eudr/2006/52/adopted/data.xht?view=snippet&wrap=true"
      },
      {
        label: "Food Navigator: EWG calls on food manufacturers to stop using propyl paraben (2015)",
        url: "https://www.foodnavigator.com/Article/2015/04/08/EWG-calls-on-food-manufacturers-to-stop-using-propyl-paraben/"
      },
      {
        label: "EWG: Dirty Dozen Guide to Food Additives (2014)",
        url: "https://www.ewg.org/news-insights/news-release/2014/11/new-guide-warns-dirty-dozen-food-additives"
      }
    ]
  },
  {
    name: "Caramel Color III & IV",
    id: "caramel-color",
    aliases: ["caramel color", "caramel colour", "caramel coloring", "caramel colouring", "ammonia caramel (related)", "sulfite ammonia caramel (related)", "E150c", "E150d"],
    e_number: "E150c",
    ins_number: 150,
    risk: "medium",
    risk_weight: 15,
    category: "Color",
    description: "The brown in colas, soy sauce, and baked goods — the most widely used coloring in food by weight. Only the ammonia-processed kinds (Classes III and IV) carry the contaminant 4-MEI.",
    regulatory_status: {
      eu: "Permitted as E150c and E150d; EFSA's 2011 re-evaluation set intake limits for all four caramel classes and judged 4-MEI exposure from them not a concern.",
      us: "The FDA permits caramel coloring; California lists its contaminant 4-MEI as a carcinogen under Prop 65, with warnings required above 29 micrograms per serving."
    },
    last_reviewed: "2026-10-10",
    bullets: ["The US National Toxicology Program found 4-MEI caused lung tumors in male and female mice; IARC calls it 'possibly carcinogenic to humans.'", "CSPI advises avoiding or drinking less cola and other ammonia-caramel-colored drinks specifically — soy sauce and baked goods matter far less because the amounts are small.", "Dose is the story: after tests found up to 150 micrograms of 4-MEI per can, Coke and Pepsi cut it below California's action threshold in products sold nationwide.", "EFSA's 2011 review of all four caramel classes concluded the 4-MEI exposure from caramel colors was 'not of concern' — a calmer read than California's.", "Look for 'caramel color', 'caramel colour', or 'E150c'/'E150d' on labels — colas are the exposure that matters most; the splash in soy sauce or baked goods is far less."],
    link: null,
    sources: [
      {
        label: "CSPI Chemical Cuisine: caramel coloring",
        url: "https://www.cspi.org/chemical-cuisine/caramel-coloring"
      },
      {
        label: "OEHHA: 4-methylimidazole (4-MEI) fact sheet (Prop 65)",
        url: "https://oehha.ca.gov/proposition-65/4-methylimidazole-4-mei-fact-sheet"
      },
      {
        label: "EFSA: re-evaluation of caramel colours (E 150 a,b,c,d) (2011)",
        url: "https://efsa.onlinelibrary.wiley.com/doi/abs/10.2903/j.efsa.2011.2004"
      }
    ]
  },
  {
    name: "Azodicarbonamide (ADA)",
    id: "azodicarbonamide",
    aliases: ["azodicarbonamide", "ADA", "azobisformamide (related)", "E927a", "E927"],
    e_number: "E927a",
    ins_number: 927,
    risk: "medium",
    risk_weight: 15,
    category: "Dough Conditioner / Flour Treatment",
    description: "The 'yoga mat chemical' — a dough conditioner that makes bread rise higher and fluffier, best known from the 2014 campaign that got Subway to drop it. When baked, it breaks down into semicarbazide.",
    regulatory_status: {
      eu: "Banned as a food additive in the EU and Australia — a sharp split with the US.",
      us: "The FDA considers it generally recognized as safe and allows up to 45 ppm in flour — though it put ADA under review in 2025."
    },
    last_reviewed: "2026-10-10",
    bullets: ["Its breakdown product semicarbazide shows 'weak carcinogenic activity' in lab animals, though human data is inconclusive.", "Subway and Wendy's removed it in 2014 after public pressure, and Arby's followed by 2026 — its use is in decline.", "CSPI said in 2014 that azodicarbonamide 'has been poorly tested' and urged reducing its use in food.", "The FDA still considers it safe at permitted levels — the EU ban is precautionary, and even EFSA once called the exposure from food-contact uses 'not a concern.'", "Look for 'azodicarbonamide' or 'ADA' on labels — it's a flour treatment, so commercial breads, buns, and bagels are where to check."],
    link: null,
    sources: [
      {
        label: "Wikipedia: azodicarbonamide (E927a; regulation and safety)",
        url: "https://en.wikipedia.org/wiki/Azodicarbonamide"
      },
      {
        label: "Tasting Table: the 'yoga mat chemical' banned from food in multiple countries",
        url: "https://www.tastingtable.com/2109958/chemical-arbys-bread-banned-other-countries/"
      }
    ]
  },
  {
    name: "Phosphates (incl. Phosphoric Acid)",
    id: "phosphates",
    aliases: ["phosphoric acid", "sodium phosphate", "sodium acid pyrophosphate", "trisodium phosphate", "dicalcium phosphate", "E338", "E339", "E450", "E451"],
    e_number: "E338",
    ins_number: 338,
    risk: "medium",
    risk_weight: 15,
    category: "Preservative / Acidity Regulator / Leavening",
    description: "A huge family of additives doing dozens of jobs — leavening baked goods, emulsifying processed cheese, adding tang to colas. One recent study found phosphate additives in 56% of products from America's top 25 food makers.",
    regulatory_status: {
      eu: "No specific restriction.",
      us: "The FDA permits phosphate additives across dozens of technical functions, and US labels don't have to disclose total phosphorus content — so there's no way to see your full intake."
    },
    last_reviewed: "2026-10-10",
    bullets: ["In a 2023 cohort of 95,000+ French adults, higher intake of trisodium phosphate (E339) was linked to higher coronary heart disease risk — but the signal was modest and observational, not proof.", "Inorganic phosphate additives are absorbed at over 90%, versus 20–60% for natural phosphorus — so they can spike blood phosphate fast.", "The kidney evidence is strongest in at-risk people: excess phosphate is tied to bone disease, heart problems, and hormone disruption in chronic kidney disease patients.", "Nephrology reviewers note the cardiovascular evidence from diet studies is inconsistent and call for clinical trials before stronger conclusions.", "Look for anything with 'phos' in it on labels — 'phosphoric acid', 'sodium phosphate', 'sodium acid pyrophosphate' — they show up across every packaged-food category."],
    link: null,
    sources: [
      {
        label: "BMJ: food additive emulsifiers and CVD risk in the NutriNet-Santé cohort (2023)",
        url: "https://www.bmj.com/content/382/bmj-2023-076058"
      },
      {
        label: "AJCN: phosphate-based additives in processed foods — US packaged food supply (2025)",
        url: "https://ajcn.nutrition.org/article/S0002-9165(25)00009-7/fulltext"
      },
      {
        label: "Purdue: nutrition researcher warns against processed foods for CKD patients (2026)",
        url: "https://www.purdue.edu/hhs/news/2026/02/purdue-nutrition-science-researcher-warns-against-processed-foods-for-chronic-kidney-disease-patients/"
      },
      {
        label: "Seminars in Nephrology: phosphorus intake and outcomes in CKD (review)",
        url: "https://www.seminarsinnephrology.org/article/S0270-9295(26)00040-9/abstract"
      }
    ]
  },
  {
    name: "Mono- and Diglycerides of Fatty Acids",
    id: "mono-diglycerides",
    aliases: ["Mono- and diglycerides", "monoglycerides", "distilled monoglycerides", "mono- & diglycerides of edible fats or oils", "E471"],
    e_number: "E471",
    ins_number: 471,
    risk: "medium",
    risk_weight: 15,
    category: "Emulsifier",
    description: "One of the most widely consumed emulsifiers in processed food — it keeps cakes, biscuits, mayonnaise, and other fats and sauces smooth and shelf-stable.",
    regulatory_status: {
      eu: "Authorized in the EU; EFSA has evaluated emulsifiers' safety and set acceptable daily intakes.",
      us: "FDA lists mono- and diglycerides as GRAS (generally recognized as safe)."
    },
    last_reviewed: "2026-10-10",
    bullets: ["A 2023 prospective cohort of 95,442 French adults linked higher intake of mono- and diglycerides (E471) and their esters (E472) to higher risk of cardiovascular disease, coronary heart disease, and cerebrovascular disease.", "The study was observational — it found associations, not proof of cause — though its sensitivity analyses gave consistent results.", "These emulsifiers are among the most-consumed food additives: more than half of industrial food and beverage products contain at least one emulsifier.", "Within the group, the lactic (E472b) and citric acid (E472c) esters showed the strongest individual signals.", "Look for 'mono- and diglycerides', 'monoglycerides', or 'E471' — plus E472a–f esters — on baked goods, margarine, and creamy dressings."],
    link: null,
    sources: [
      {
        label: "BMJ 2023: Food additive emulsifiers and risk of cardiovascular disease in the NutriNet-Santé cohort",
        url: "https://www.bmj.com/content/382/bmj-2023-076058"
      },
      {
        label: "FDA: Food Additive Status List",
        url: "https://downloads.regulations.gov/FDA-2022-D-0281-0007/attachment_2.pdf"
      }
    ]
  },
  {
    name: "Polysorbate 80",
    id: "polysorbate-80",
    aliases: ["Polysorbate 80", "polysorbate-80", "tween 80", "polyoxyethylene (20) sorbitan monooleate", "E433"],
    e_number: "E433",
    ins_number: 433,
    risk: "medium",
    risk_weight: 15,
    category: "Emulsifier",
    description: "An emulsifier used in ice cream, baked goods, and creamy sauces — and one of two emulsifiers tested in a much-discussed 2015 mouse study on gut inflammation.",
    regulatory_status: {
      eu: "Authorized in the EU; EFSA has evaluated emulsifiers' safety and set acceptable daily intakes.",
      us: "FDA permits polysorbate 80 as an emulsifier in specified foods."
    },
    last_reviewed: "2026-10-10",
    bullets: ["In a 2015 Nature study, mice given relatively low concentrations of polysorbate 80 developed low-grade intestinal inflammation and metabolic-syndrome-like effects, with robust colitis in mice predisposed to it.", "The researchers traced the effects to gut-microbiota changes: germ-free mice were protected, and transplants of treated microbiota transferred the problems.", "This was mice, not people — the lead researcher said the effects 'may be observed in humans as well,' which is a hypothesis, not a finding.", "Human evidence is still preliminary: in the large French NutriNet-Santé cohort, too few participants consumed polysorbate 80 for it to be studied individually.", "Look for 'polysorbate 80', 'tween 80', or 'E433' on ice cream, dressings, and baked goods."],
    link: null,
    sources: [
      {
        label: "PubMed: Chassaing et al., Nature 2015 — Dietary emulsifiers impact the mouse gut microbiota",
        url: "https://pubmed.ncbi.nlm.nih.gov/25731162/"
      },
      {
        label: "Reuters 2015: Study links common food additives to Crohn's disease, colitis",
        url: "https://www.reuters.com/article/2015/02/25/us-science-emulsifiers-idUSKBN0LT26S20150225/"
      },
      {
        label: "BMJ 2023: Food additive emulsifiers and risk of cardiovascular disease in the NutriNet-Santé cohort",
        url: "https://www.bmj.com/content/382/bmj-2023-076058"
      },
      {
        label: "FDA: Food Additive Status List",
        url: "https://downloads.regulations.gov/FDA-2022-D-0281-0007/attachment_2.pdf"
      }
    ]
  },
  {
    name: "Carboxymethylcellulose",
    id: "carboxymethylcellulose",
    aliases: ["Carboxymethylcellulose", "cellulose gum", "sodium carboxymethylcellulose", "E466"],
    e_number: "E466",
    ins_number: 466,
    risk: "medium",
    risk_weight: 15,
    category: "Emulsifier / Thickener",
    description: "A thickener and emulsifier that gives ice cream its body and keeps baked goods and sauces smooth — backed by two independent lines of cautionary evidence.",
    regulatory_status: {
      eu: "Authorized in the EU; EFSA has evaluated emulsifiers' safety and set acceptable daily intakes.",
      us: "FDA lists sodium carboxymethylcellulose (cellulose gum) as GRAS."
    },
    last_reviewed: "2026-10-10",
    bullets: ["In the 2023 NutriNet-Santé cohort, higher carboxymethylcellulose (E466) intake was associated with higher risk of cardiovascular disease and coronary heart disease.", "In mice, carboxymethylcellulose promoted low-grade gut inflammation and metabolic-syndrome-like effects driven by microbiota changes — the same 2015 study as polysorbate 80.", "A short human trial found 15 g/day of carboxymethylcellulose — far above normal intake — rapidly altered gut microbiota and caused post-meal abdominal discomfort.", "Two lines of evidence converge, but neither proves cause: the cohort is observational and the mechanistic work is mostly in animals.", "Look for 'carboxymethylcellulose', 'cellulose gum', or 'E466' — the French cohort found cakes, biscuits, and processed potatoes were the main dietary sources of celluloses."],
    link: null,
    sources: [
      {
        label: "BMJ 2023: Food additive emulsifiers and risk of cardiovascular disease in the NutriNet-Santé cohort",
        url: "https://www.bmj.com/content/382/bmj-2023-076058"
      },
      {
        label: "PubMed: Chassaing et al., Nature 2015 — Dietary emulsifiers impact the mouse gut microbiota",
        url: "https://pubmed.ncbi.nlm.nih.gov/25731162/"
      },
      {
        label: "FDA: Food Additive Status List",
        url: "https://downloads.regulations.gov/FDA-2022-D-0281-0007/attachment_2.pdf"
      }
    ]
  },
  {
    name: "Saccharin",
    id: "saccharin",
    aliases: ["Saccharin", "Sweet'N Low", "sodium saccharin", "E954"],
    e_number: "E954",
    ins_number: 954,
    risk: "medium",
    risk_weight: 15,
    category: "Sweetener",
    description: "A zero-calorie artificial sweetener with a long, instructive history: a 1970s rat bladder-cancer scare put warning labels on every packet, then the mechanism turned out to be rat-only and the labels came off in 2000.",
    regulatory_status: {
      eu: "Authorized in the EU as sweetener E954; EFSA's 2024 re-evaluation set a safe daily intake (ADI) of 9 mg/kg body weight and found no safety concern at typical exposures.",
      us: "FDA-regulated non-nutritive sweetener; its warning-label requirement was repealed in 2000."
    },
    last_reviewed: "2026-10-10",
    bullets: ["Early-1970s rat studies linked saccharin to bladder cancer, and Congress required a warning label on all saccharin-containing foods.", "Later work showed the rat tumors came from a mechanism unique to rats; human studies found no consistent link to bladder cancer.", "Saccharin was removed from the US National Toxicology Program's carcinogen list in 2000, and the warning-label law was repealed that December.", "The open question today is metabolic, not cancer: a 2022 randomized trial in 120 adults found saccharin altered gut bacteria and impaired glucose tolerance in some participants.", "CSPI still rates saccharin 'Avoid,' citing a small cancer risk.", "Look for 'saccharin' or 'E954' — check tabletop sweetener packets and some diet drinks."],
    link: null,
    sources: [
      {
        label: "NCI fact sheet: Artificial Sweeteners and Cancer",
        url: "https://permanent.fdlp.gov/lps99601/fs3_19.pdf"
      },
      {
        label: "EFSA 2024: Re-evaluation of saccharin and its salts (E 954) as food additives",
        url: "https://www.efsa.europa.eu/en/plain-language-summary/re-evaluation-saccharin-and-its-sodium-potassium-and-calcium-salts-e-954"
      },
      {
        label: "Suez Lab: Cell 2022 human trial of non-nutritive sweeteners and glucose tolerance",
        url: "https://www.suezlab.org/highlights/nns-cell-2022"
      },
      {
        label: "CSPI: Low-Calorie Sweeteners",
        url: "https://www.cspi.org/chemical-cuisine/low-calorie-sweeteners"
      }
    ]
  },
  {
    name: "Erythritol",
    id: "erythritol",
    aliases: ["Erythritol", "E968"],
    e_number: "E968",
    ins_number: 968,
    risk: "medium",
    risk_weight: 15,
    category: "Sweetener (sugar alcohol)",
    description: "A sugar alcohol marketed in keto and 'sugar-free' products as the safe sweetener — now at the center of a live scientific debate about heart risk.",
    regulatory_status: {
      eu: "EFSA likewise treats it as safe; its EU re-evaluation completed in 2023.",
      us: "Classified by the FDA as generally recognized as safe (GRAS), with no restriction on use."
    },
    last_reviewed: "2026-10-10",
    bullets: ["A 2023 Nature Medicine study found cardiac patients with high blood erythritol were about twice as likely to have a major cardiac event over the next three years.", "The same research group showed erythritol increased platelet aggregation in human blood and sped clot formation in a mouse model of arterial injury.", "A later intervention study found a standard 30 g dose — about what's in a sugar-free soda or muffin — acutely increased platelet reactivity in healthy volunteers.", "This is association plus mechanism, not proof: the researchers themselves call for more prospective studies before drawing conclusions.", "Notably, CSPI still lists erythritol among the sweeteners that 'appear to be safer' — the evidence is genuinely mixed.", "Look for 'erythritol' or 'E968' in keto and 'sugar-free' candies, baked goods, and drinks."],
    link: null,
    sources: [
      {
        label: "Cleveland Clinic ConsultQD: Evidence mounts that erythritol raises cardiovascular risk",
        url: "http://consultqd.clevelandclinic.org/evidence-mounts-that-sugar-substitute-erythritol-raises-cardiovascular-risk"
      },
      {
        label: "CSPI: Low-Calorie Sweeteners",
        url: "https://www.cspi.org/chemical-cuisine/low-calorie-sweeteners"
      },
      {
        label: "EFSA: Sweeteners authorised for use in the EU",
        url: "https://efsa.europa.eu/pl/topics/topic/sweeteners"
      }
    ]
  },
  {
    name: "Xylitol",
    id: "xylitol",
    aliases: ["Xylitol", "birch sugar", "E967"],
    e_number: "E967",
    ins_number: 967,
    risk: "medium",
    risk_weight: 15,
    category: "Sweetener (sugar alcohol)",
    description: "A sugar alcohol often derived from birch, used in sugar-free candy, 'keto-friendly' baked goods, and toothpaste — the second sugar alcohol flagged by Cleveland Clinic researchers for clotting risk.",
    regulatory_status: {
      eu: "Authorized in the EU as sweetener E967; EFSA's re-evaluation is ongoing.",
      us: "FDA permits xylitol in foods for special dietary uses."
    },
    last_reviewed: "2026-10-10",
    bullets: ["In a 2024 European Heart Journal study, people in the top third of blood xylitol levels were about 50% more likely to have a cardiovascular event over three years (adjusted hazard ratio 1.57).", "Xylitol increased platelet sensitivity to clotting signals in human blood and sped clot formation and artery blockage in mice.", "In a small human test, a xylitol-sweetened drink raised blood xylitol 1,000-fold within 30 minutes and made platelets more clot-prone.", "Like erythritol, this is association plus mechanism, not proof — the authors say further safety studies are warranted.", "Trace amounts in toothpaste are not the concern; the risk, if real, would come from ingesting the large amounts added to foods.", "Look for 'xylitol', 'birch sugar', or 'E967' in sugar-free candy, keto sweets, and 'diabetes-friendly' baked goods."],
    link: null,
    sources: [
      {
        label: "NIH Research Matters: Xylitol may affect cardiovascular health",
        url: "https://www.nih.gov/news-events/nih-research-matters/xylitol-may-affect-cardiovascular-health"
      },
      {
        label: "Cleveland Clinic ConsultQD: Xylitol linked to heightened cardiovascular risk",
        url: "https://consultqd.clevelandclinic.org/another-sugar-substitute-xylitol-is-linked-to-heightened-cardiovascular-risk"
      },
      {
        label: "FDA: Food Additive Status List",
        url: "https://downloads.regulations.gov/FDA-2022-D-0281-0007/attachment_2.pdf"
      },
      {
        label: "EFSA: Sweeteners authorised for use in the EU",
        url: "https://efsa.europa.eu/pl/topics/topic/sweeteners"
      }
    ]
  },
  {
    name: "Sulfites",
    id: "sulfites",
    aliases: ["Sulfites", "sulfur dioxide", "sodium sulfite", "sodium bisulfite", "sodium metabisulfite", "potassium bisulfite", "potassium metabisulfite", "E220", "E223"],
    e_number: "E220",
    ins_number: 220,
    risk: "medium",
    risk_weight: 15,
    category: "Preservative",
    description: "Preservatives that keep dried fruit bright and wine from spoiling — safe for most people, but genuinely dangerous for asthmatics and sensitive individuals.",
    regulatory_status: {
      eu: "Mandatory labeling at relevant levels: sulphites above 10 mg/kg must be declared, and wine above 10 mg/litre must state 'Contains: sulphites'.",
      us: "FDA restricts the riskiest uses and requires sulfite declaration on labels, e.g., wine."
    },
    last_reviewed: "2026-10-10",
    bullets: ["Sulfites prevent discoloration in dried fruit and some potatoes, and bacterial growth in wine.", "For non-sensitive people, sulfites are safe — but they can cause severe reactions, especially in asthmatics.", "At least twelve deaths in the 1980s were linked to sulfites, mostly from restaurant foods with extremely high sulfite levels.", "After CSPI pressure and a congressional hearing, the FDA banned the most dangerous uses and required sulfite declaration on wine labels.", "Since those actions, CSPI reports it is not aware of any additional deaths.", "Look for 'sulfites', 'sulfur dioxide', 'sodium/potassium metabisulfite', or E220–E228 on wine, dried fruit, and some dried or frozen potatoes."],
    link: null,
    sources: [
      {
        label: "CSPI: Sulfites (Chemical Cuisine)",
        url: "https://www.cspi.org/chemical-cuisine/sulfites-sulfur-dioxide-sodium-sulfite-sodium-bisulfite-potassium-bisulfite-sodium"
      },
      {
        label: "FSA technical guidance: allergen labelling under EU Regulation 1169/2011",
        url: "https://webarchive.nationalarchives.gov.uk/ukgwa/20180411152518mp_/https://www.food.gov.uk/sites/default/files/food-allergen-labelling-technical-guidance.pdf"
      }
    ]
  },
  {
    name: "Blue 2",
    id: "blue-2",
    aliases: ["Blue 2", "FD&C Blue No. 2", "indigotine", "E132"],
    e_number: "E132",
    ins_number: 132,
    risk: "medium",
    risk_weight: 15,
    category: "Food Dye",
    description: "One of the less-studied synthetic blue dyes, used in candy, drinks, baked goods, and pet food. It carries the class-level concerns behind all synthetic dyes without much dye-specific data of its own.",
    regulatory_status: {
      eu: "Permitted as E132, but it does NOT carry the EU's mandatory children's attention-and-activity warning label, which applies only to six other dyes (E102, E104, E110, E122, E124, E129).",
      us: "FDA-approved color additive under 21 CFR 74.102 — permitted for coloring foods generally at good manufacturing practice levels."
    },
    last_reviewed: "2026-10-10",
    bullets: ["CSPI rates all synthetic food dyes, Blue 2 included, 'Avoid' over neurobehavioral concerns in children.", "California's 2021 OEHHA report — the most rigorous review to date — concluded the seven most-used dyes, Blue 2 among them, can cause or worsen neurobehavioral problems in some children.", "Animal studies raised inconclusive hints of brain tumors in male rats, but the FDA concluded there is 'reasonable certainty of no harm' — that tension is worth knowing, not a verdict.", "CSPI lists pet food, beverages, and candy as Blue 2's main uses, and it is individually less studied than the yellows and reds.", "Look for 'Blue 2', 'indigotine', 'FD&C Blue No. 2', or 'E132' on labels — bright blue candy, frosting, and pet kibble are the usual suspects."],
    link: null,
    sources: [
      {
        label: "CSPI Chemical Cuisine: artificial colorings (synthetic food dyes)",
        url: "https://www.cspi.org/chemical-cuisine/artificial-colorings-synthetic-food-dyes"
      },
      {
        label: "FDA 21 CFR 74.102: FD&C Blue No. 2 (govinfo)",
        url: "https://www.govinfo.gov/content/pkg/CFR-1999-title21-vol1/pdf/CFR-1999-title21-vol1-sec74-102.pdf"
      },
      {
        label: "UK Trading Standards: colours in food — E132 permitted, warning list excludes it",
        url: "https://www.businesscompanion.info/node/507/printable/pdf"
      }
    ]
  },
  {
    name: "Sodium Aluminum Phosphate",
    id: "sodium-aluminum-phosphate",
    aliases: ["sodium aluminum phosphate", "SALP", "E541"],
    e_number: "E541",
    ins_number: 541,
    risk: "medium",
    risk_weight: 15,
    category: "Leavening Agent",
    description: "The leavening acid in self-rising flour, baking powder, cake mixes, and processed cheese. It is one of the main food-additive sources of dietary aluminum.",
    regulatory_status: {
      eu: "Heavily restricted since 2014 — now allowed only in certain layered sponge cakes, capped at 400 mg aluminum per kg — after EFSA's 2018 review found no concern at those tightened levels.",
      us: "FDA permits SALP for wide use in baked goods, including self-rising flours and cake mixes, so American exposure is almost certainly higher than in Europe."
    },
    last_reviewed: "2026-10-10",
    bullets: ["A 2019 human trial found the aluminum in SALP is bioavailable: 18 volunteers eating SALP-containing pancakes excreted more than twice as much aluminum in urine as at baseline.", "EFSA sets the tolerable weekly intake of aluminum at 1 mg per kg of body weight, based on animal studies showing neurotoxicity and developmental effects, and has warned a significant share of Europeans already exceed it.", "The study estimated a daily breakfast of those SALP pancakes could supply aluminum at roughly eight times EFSA's tolerable intake for a 60-kg adult — though real-world servings vary widely.", "Crucially, no study has linked SALP itself to human neurotoxicity — the concern is cumulative aluminum exposure, not this additive alone, and that link from food additives specifically remains unproven.", "EWG keeps aluminum-based additives on its 'watch list,' advising people to limit them in heavily processed foods while the science catches up.", "Look for 'sodium aluminum phosphate', 'SALP', or 'E541' — check baking powder, self-rising flour, and cake-mix labels first."],
    link: null,
    sources: [
      {
        label: "Study: increased urinary aluminium excretion after ingestion of SALP (Food Additives & Contaminants, 2019)",
        url: "https://www.tandfonline.com/doi/full/10.1080/19440049.2019.1626998"
      },
      {
        label: "EWG Dirty Dozen guide to food additives (aluminum watch list)",
        url: "https://www.ewg.org/news-insights/news-release/2014/11/new-guide-warns-dirty-dozen-food-additives"
      }
    ]
  },
  {
    name: "Interesterified Oils",
    id: "interesterified-oils",
    aliases: ["interesterified soybean oil", "interesterified palm oil", "interesterified oils"],
    e_number: null,
    ins_number: null,
    risk: "medium",
    risk_weight: 15,
    category: "Fat (processed)",
    description: "The industry's quiet replacement for trans fats in margarines, baked goods, and confectionery — made by chemically rearranging which fatty acids sit on the fat molecule.",
    regulatory_status: {
      eu: "No specific restriction on interesterified oils in the EU.",
      us: "No specific restriction on interesterified oils in the US."
    },
    last_reviewed: "2026-10-10",
    bullets: ["A 2018 rat study found interesterified soybean oil caused more weight gain and worse glucose tolerance than regular soybean oil on otherwise identical diets.", "A 2007 human trial found interesterified fat raised fasting glucose by about 20% in a month and depressed fasting insulin and HDL cholesterol versus unmodified palm olein.", "The 2007 research team included the Malaysian Palm Oil Board's nutrition director, and the 2025 trial was funded by the same board — this debate has industry fingerprints on both sides.", "A 2025 King's College London / Maastricht double-blind trial of 47 adults found no meaningful harm to cholesterol, insulin sensitivity, inflammation, or liver fat from interesterified fats at realistic intakes.", "Both the King's researchers and the 2007 authors agree on one thing: longer-term human studies are still needed.", "Look for the words 'interesterified oil' or 'interesterified palm/soybean oil' in the ingredient list of margarines, pastries, and confectionery — especially ones marketed trans-fat-free."],
    link: null,
    sources: [
      {
        label: "2025 King's College London / Maastricht RCT on interesterified fats (ScienceDaily summary)",
        url: "https://www.sciencedaily.com/releases/2025/10/251027224855.htm"
      },
      {
        label: "2007 Sundram human trial on interesterified fat vs palm olein (MedicalXpress / Brandeis)",
        url: "https://medicalxpress.com/news/2007-01-fat-problem-added.html"
      },
      {
        label: "2018 rat study: interesterified soybean oil and metabolic dysfunction (PubMed 30005920)",
        url: "https://pubmed.ncbi.nlm.nih.gov/30005920/"
      }
    ]
  },
  {
    name: "DATEM",
    id: "datem",
    aliases: ["DATEM", "E472e", "diacetyl tartaric acid esters of mono- and diglycerides"],
    e_number: "E472e",
    ins_number: 472,
    risk: "low",
    risk_weight: 5,
    category: "Dough Conditioner / Emulsifier",
    description: "One of the most common dough conditioners in commercial bread and buns — it makes loaves rise higher, stay soft longer, and survive high-speed industrial baking.",
    regulatory_status: {
      eu: "Authorized as E472e under EU Regulation 1333/2008; EFSA re-evaluated it in 2020 alongside the other E472 esters.",
      us: "FDA classifies DATEM as Generally Recognized as Safe (GRAS)."
    },
    last_reviewed: "2026-10-10",
    bullets: ["DATEM is a synthetic emulsifier made by esterifying mono- and diglycerides with diacetyl tartaric acid — a powerful dough strengthener you would never find in a home kitchen.", "Public toxicology data specific to DATEM is remarkably thin for something millions of people eat daily, and that data gap is itself the honest headline of this entry.", "The only recurring concern is mechanistic, not empirical: DATEM resembles emulsifiers like polysorbate-80 and carboxymethylcellulose, which have disturbed gut mucus layers in animal studies — but DATEM itself has barely been tested.", "Products certified organic often prohibit synthetic emulsifiers like DATEM, which makes artisan or organic breads the straightforward workaround.", "Look for 'DATEM', 'E472e', or 'diacetyl tartaric acid esters of mono- and diglycerides' — supermarket breads, buns, bagels, and crackers are the main hiding spots."],
    link: null,
    sources: [
      {
        label: "Examining DATEM's path from bakery staple to health concern (NewsTarget, Oct 2026)",
        url: "https://www.newstarget.com/2026-10-04-examining-datems-path-bakery-staple-health-concern.html"
      },
      {
        label: "EU Regulation 1333/2008: E472e on the authorized additive list (legislation.gov.uk)",
        url: "https://www.legislation.gov.uk/eur/2008/1333/annexes/2020-03-19/data.xht?view=snippet&wrap=true"
      },
      {
        label: "EFSA 2020 re-evaluation covering E472e (PubMed 39816965)",
        url: "https://pubmed.ncbi.nlm.nih.gov/39816965/"
      }
    ]
  },
  {
    name: "Sodium Stearoyl Lactylate",
    id: "sodium-stearoyl-lactylate",
    aliases: ["sodium stearoyl lactylate", "SSL", "E481", "sodium stearoyl-2-lactylate"],
    e_number: "E481",
    ins_number: 481,
    risk: "low",
    risk_weight: 5,
    category: "Dough Conditioner / Emulsifier",
    description: "DATEM's quieter partner in the bread aisle — an emulsifier that strengthens dough, softens crumb, and keeps commercial loaves fresh longer.",
    regulatory_status: {
      eu: "Authorized as E481; EFSA's 2013 re-evaluation set an acceptable daily intake of 22 mg/kg bw/day after reviewing reproductive toxicity, carcinogenicity, and genotoxicity studies.",
      us: "FDA lists sodium stearoyl lactylate under 21 CFR 172.846 as a direct food additive that 'may be safely used' — in baked products up to 0.5 parts per 100 of flour used."
    },
    last_reviewed: "2026-10-10",
    bullets: ["SSL is made by reacting stearic acid with lactic acid into their sodium salts; FDA caps its use at 0.5 parts per 100 of flour in baked goods.", "It is one of the most heavily studied bread emulsifiers: EFSA's 2013 review covered reproductive toxicity, carcinogenicity, and genotoxicity before setting an ADI of 22 mg per kg of body weight per day.", "JECFA has held an ADI of 20 mg per kg of body weight since 1973 — among the longest-standing additive safety assessments in the book.", "Beyond bread it shows up in coffee whiteners, dehydrated potatoes, sauces, gravies, and snack dips.", "Look for 'sodium stearoyl lactylate', 'SSL', or 'E481' on bread, bun, and roll labels — where DATEM appears, SSL often follows."],
    link: null,
    sources: [
      {
        label: "FDA 21 CFR 172.846: sodium stearoyl lactylate (govinfo)",
        url: "https://www.govinfo.gov/content/pkg/CFR-2011-title21-vol3/pdf/CFR-2011-title21-vol3-sec172-846.pdf"
      },
      {
        label: "Sodium stearoyl lactylate: uses, EU authorization, EFSA ADI (FoodAdditives.net)",
        url: "https://foodadditives.net/emulsifiers/sodium-stearoyl-lactylate/"
      }
    ]
  },
  {
    name: "Disodium Inosinate & Disodium Guanylate",
    id: "disodium-inosinate-guanylate",
    aliases: ["disodium inosinate", "disodium guanylate", "E631", "E627", "I+G"],
    e_number: "E631",
    ins_number: 631,
    risk: "low",
    risk_weight: 5,
    category: "Flavor Enhancer",
    description: "The umami amplifiers hiding behind MSG on snack and soup labels — they make savory flavors taste several times stronger than MSG alone.",
    regulatory_status: {
      eu: "Authorized in the EU — E631 for seasonings and condiments — after a Scientific Committee on Food safety evaluation prior to authorization.",
      us: "FDA considers disodium guanylate safe as a food additive; no dosage guideline has been established due to limited research."
    },
    last_reviewed: "2026-10-10",
    bullets: ["Disodium inosinate and disodium guanylate are nucleotide salts — the 'I+G' of the flavor industry — that amplify MSG's umami effect several times over.", "They are rarely used alone and almost always appear with MSG, yeast extract, or hydrolyzed protein, which is why the label rarely tells the whole story.", "Both compounds occur naturally — disodium guanylate is found in fish and dried mushrooms — so your body already handles them from whole foods.", "The thin-evidence problem is real: dosage guidelines have never been established because direct research is sparse, not because harm was found.", "People with gout or MSG sensitivity may want to be cautious, since guanylates metabolize into purines that can raise uric acid levels.", "Look for 'disodium inosinate', 'disodium guanylate', 'E631', 'E627', or 'I+G' — chips, instant noodles, canned soups, and seasoning packets are the usual spots."],
    link: null,
    sources: [
      {
        label: "Disodium guanylate: uses, nutrition, and safety (Healthline)",
        url: "https://www.healthline.com/nutrition/disodium-guanylate"
      },
      {
        label: "EU written question on E621/E631/E632 authorization (EUR-Lex)",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:92001E000119&from=FR"
      }
    ]
  },
  {
    name: "Natural Flavors",
    id: "natural-flavors",
    aliases: ["natural flavors", "natural flavoring", "natural flavouring"],
    e_number: null,
    ins_number: null,
    risk: "low",
    risk_weight: 5,
    category: "Flavoring",
    description: "The most common two-word mystery on US labels — a legal category, not a health claim, covering dozens of undisclosed flavor chemicals derived from natural sources.",
    regulatory_status: {
      eu: "The EU's 2008 flavorings regulation is stricter: a flavor may only be called 'natural' under anti-misleading criteria, and a 'natural strawberry flavor' must get at least 95% of its flavoring from strawberries.",
      us: "FDA defines 'natural flavor' under 21 CFR 101.22 as flavoring constituents derived from plant or animal sources — spices, fruit, meat, fermentation products, and more — with no requirement to name them individually."
    },
    last_reviewed: "2026-10-10",
    bullets: ["Be blunt: there is no strong evidence that natural flavors harm you — the real issue is transparency, and it deserves to be said that plainly.", "One 'natural flavors' listing can represent dozens of oils, extracts, distillates, and solvents that never appear individually on the label.", "The word describes the molecule's origin, not how heavily it was processed — a natural flavor can be lab-extracted and reconstructed much like an artificial one.", "Under US rules a 'strawberry-flavored' product may contain little or no actual strawberry; in the EU, a 95% rule blocks that move.", "Look for 'natural flavors' or 'natural flavoring' near the end of the ingredient list — its position tells you nothing about what's inside, so brands that name their flavor sources (like 'lemon oil') are the transparent ones."],
    link: null,
    sources: [
      {
        label: "What 'natural flavors' really mean under FDA law (NuSpice)",
        url: "https://www.nuproductsseasoning.com/nuspotlight/what-natural-flavors-really-mean-under-fda-law/"
      },
      {
        label: "EU Regulation 1334/2008 on flavourings: 'natural' criteria (legislation.gov.uk)",
        url: "https://www.legislation.gov.uk/cy/eur/2008/1334/introduction/adopted"
      },
      {
        label: "EWG Dirty Dozen guide: secret flavor ingredients",
        url: "https://www.ewg.org/news-insights/news-release/2014/11/new-guide-warns-dirty-dozen-food-additives"
      }
    ]
  },
  {
    name: "Artificial Flavors",
    id: "artificial-flavors",
    aliases: ["Artificial flavors", "Artificial flavor", "Artificial flavoring"],
    e_number: null,
    ins_number: null,
    risk: "low",
    risk_weight: 5,
    category: "Flavoring",
    description: "A catch-all label word for flavor chemicals made in a lab rather than pulled from food — and you usually cannot tell what is actually inside it.",
    regulatory_status: {
      eu: "Permitted under Regulation (EC) 1334/2008, which maintains a Union list of authorized flavoring substances.",
      us: "FDA-permitted; 'artificial flavor' is a lawful generic declaration under 21 CFR 101.22, so makers do not have to name each flavor chemical."
    },
    last_reviewed: "2026-10-10",
    bullets: ["The FDA defines 'artificial flavor' as any flavoring substance not derived from a spice, fruit, vegetable, herb, meat, dairy, or similar natural source.", "EWG notes that a single 'flavoring' on a label can be a mixture of 100 or more substances, none of them disclosed individually.", "FDA labeling guidance lets makers declare flavors with the generic words 'natural flavor' or 'artificial flavor' instead of naming each ingredient.", "The real issue here is transparency, not documented harm — there is no strong evidence that artificial flavors as a category are toxic to people.", "Look for 'artificial flavor' or 'artificial flavoring' on labels — wherever it appears, the exact chemicals behind the taste stay hidden by design."],
    link: null,
    sources: [
      {
        label: "EWG: Dirty Dozen Guide to Food Additives (secret flavor ingredients)",
        url: "https://www.ewg.org/news-insights/news-release/2014/11/new-guide-warns-dirty-dozen-food-additives"
      },
      {
        label: "eCFR: 21 CFR 101.22 — labeling of spices, flavorings, colorings",
        url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-101"
      },
      {
        label: "Regulation (EC) 1334/2008 on flavourings (Union list of flavouring substances)",
        url: "https://faolex.fao.org/docs/pdf/eur212753.pdf"
      }
    ]
  },
  {
    name: "Maltodextrin",
    id: "maltodextrin",
    aliases: ["Maltodextrin"],
    e_number: null,
    ins_number: null,
    risk: "low",
    risk_weight: 5,
    category: "Thickener / Filler",
    description: "A highly processed starch used as a filler, thickener, and carrier in everything from salad dressing to 'sugar-free' snacks.",
    regulatory_status: {
      eu: "No specific restriction.",
      us: "FDA-affirmed GRAS as a direct food ingredient, with no limit other than current good manufacturing practice (21 CFR 184.1444)."
    },
    last_reviewed: "2026-10-10",
    bullets: ["Maltodextrin is a nonsweet polymer of D-glucose units made by partially hydrolyzing corn, potato, or rice starch.", "Its glycemic index is reported around 85–105 — near or above pure glucose, which is the 100 reference point.", "Because food law defines 'sugars' by chemical structure rather than blood-sugar effect, maltodextrin does not count as sugar on the label even though it behaves like glucose in the body.", "A 2024 lab study using human gut-microbiota models found maltodextrin shifted bacterial populations in potentially harmful directions — interesting, but it was an in-vitro model, not a human trial.", "Look for 'maltodextrin' on labels — sports drinks, protein powders, salad dressings, and 'sugar-free' products are common places to find it."],
    link: null,
    sources: [
      {
        label: "FDA 21 CFR 184.1444 — Maltodextrin (GRAS affirmation)",
        url: "https://www.govinfo.gov/content/pkg/CFR-2012-title21-vol3/pdf/CFR-2012-title21-vol3-sec184-1444.pdf"
      },
      {
        label: "Onnit (Advisory Board vetted): maltodextrin GI 85–105 vs glucose 100",
        url: "https://www.onnit.com/blogs/the-edge/maltodextrin-the-time-and-place-for-high-glycemic-carbohydrates"
      },
      {
        label: "Yarley et al. 2025 (IJMSCI): review of maltodextrin as a hidden sugar",
        url: "https://mail.valleyinternational.net/index.php/ijmsci/article/download/5019/2753/14293"
      },
      {
        label: "Gonza et al. 2024 (PubMed 38519184): food additives and gut microbiota, in-vitro SHIME model",
        url: "https://pubmed.ncbi.nlm.nih.gov/38519184/"
      }
    ]
  },
  {
    name: "Sorbitol",
    id: "sorbitol",
    aliases: ["Sorbitol", "E420", "Sorbitol syrup"],
    e_number: "E420",
    ins_number: 420,
    risk: "low",
    risk_weight: 5,
    category: "Sweetener (sugar alcohol)",
    description: "A sugar alcohol used to sweeten sugar-free gum, candy, and diet foods — the concern here is concrete and well documented: too much upsets your stomach.",
    regulatory_status: {
      eu: "Authorized as food additive E420 in the polyols group; EU rules require a laxative-effects warning where polyol content is high.",
      us: "FDA-permitted as a nutritive sweetener and humectant; foods that could deliver 50 g or more a day must carry the statement 'Excess consumption may have a laxative effect.'"
    },
    last_reviewed: "2026-10-10",
    bullets: ["CSPI notes that large amounts of most sugar alcohols — sorbitol included — may cause diarrhea or have a laxative effect.", "The FDA requires the label statement 'Excess consumption may have a laxative effect' when a food's foreseeable daily intake could reach 50 grams of sorbitol.", "Sorbitol occurs naturally in some plants, but the kind used in food is typically manufactured.", "Most sugar alcohols carry about half the calories of sugar, so sorbitol gives sweetness with fewer calories — but it is not calorie-free.", "Look for 'sorbitol' or 'E420' — sugar-free gum, mints, and diet candy are the usual suspects, and it pays to notice how much you chew in a day."],
    link: null,
    sources: [
      {
        label: "CSPI Chemical Cuisine: low-calorie sweeteners (sugar-alcohol GI effects)",
        url: "https://www.cspi.org/chemical-cuisine/low-calorie-sweeteners"
      },
      {
        label: "FDA 21 CFR 184.1835 — Sorbitol (laxative label requirement)",
        url: "https://www.govinfo.gov/content/pkg/CFR-2000-title21-vol3/pdf/CFR-2000-title21-vol3-sec184-1835.pdf"
      },
      {
        label: "Regulation (EC) 1333/2008, Annex II — E420 Sorbitols in the polyols group",
        url: "https://www.legislation.gov.uk/eur/2008/1333/annex/II/2018-05-14?view=extent"
      },
      {
        label: "EU proposal on additive labelling: polyol laxative warning wording",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52007PC0673"
      }
    ]
  },
  {
    name: "Calcium Disodium EDTA",
    id: "edta",
    aliases: ["Calcium disodium EDTA", "Calcium disodium edetate", "EDTA", "E385"],
    e_number: "E385",
    ins_number: 385,
    risk: "low",
    risk_weight: 5,
    category: "Preservative (chelator)",
    description: "A preservative that works by grabbing onto stray metal ions — tiny amounts of iron and copper in food that would otherwise turn fats rancid and colors dull.",
    regulatory_status: {
      eu: "Authorized as E385 with maximum levels of 75–250 mg/kg depending on the food category.",
      us: "FDA-permitted in specific foods with maximum use levels set by 21 CFR 172.120 — for example 75 ppm in dressings and mayonnaise."
    },
    last_reviewed: "2026-10-10",
    bullets: ["It is a chelating (sequestering) agent: it locks up free metal ions such as iron, copper, and zinc so they cannot react with food and spoil its color, flavor, or smell.", "The FDA lists exactly which foods may contain it and caps the amount — 75 parts per million in mayonnaise, salad dressing, and sauces, for example.", "Its safety as a food additive is approved by the FDA, EFSA, and the joint FAO/WHO expert committee on food additives (JECFA).", "The theoretical worry is mineral chelation, but problems are only reported at large doses — vomiting, diarrhea, abdominal pain — while at food levels the evidence of harm is thin.", "Look for 'calcium disodium EDTA' or 'EDTA' — most often on mayonnaise, salad dressings, canned beans, and soft drinks."],
    link: null,
    sources: [
      {
        label: "foodadditives.net: Calcium disodium EDTA (E385) — uses and safety",
        url: "https://foodadditives.net/preservatives/calcium-disodium-edta/"
      },
      {
        label: "21 CFR 172.120 — Calcium disodium EDTA (FDA use levels)",
        url: "https://www.law.cornell.edu/cfr/text/21/172.120"
      }
    ]
  },
  {
    name: "Propylene Glycol",
    id: "propylene-glycol",
    aliases: ["Propylene glycol", "Propane-1,2-diol", "E1520"],
    e_number: "E1520",
    ins_number: 1520,
    risk: "low",
    risk_weight: 5,
    category: "Solvent / Humectant",
    description: "A moisture-holding solvent that keeps cake mixes soft and carries flavors and colors evenly through food — a different chemical from the toxic antifreeze ingredient it keeps getting confused with.",
    regulatory_status: {
      eu: "Authorized as E1520; EFSA's 2018 re-evaluation kept the acceptable daily intake of 25 mg/kg body weight per day and found reported exposures did not exceed it.",
      us: "FDA GRAS; approved for uses including seasonings, confections, frostings, and frozen dairy at set maximum levels."
    },
    last_reviewed: "2026-10-10",
    bullets: ["In food it works as a humectant and solvent carrier — holding moisture in cakes, frostings, and ice cream, and dissolving flavors and colors so they spread evenly.", "It is not the same as ethylene glycol, the poisonous antifreeze ingredient — food-grade propylene glycol may be used in food, ethylene glycol may not.", "Much of the public debate about propylene glycol centers on e-cigarettes and inhaled exposure rather than food — as a food additive at regulated levels, the evidence of harm is thin.", "EFSA re-evaluated it in 2018 and saw no reason to revise the 1996 acceptable daily intake of 25 mg/kg body weight per day.", "Look for 'propylene glycol' or 'E1520' — cake mixes, frostings, and food colorings are the usual places it shows up."],
    link: null,
    sources: [
      {
        label: "foodadditives.net: Propylene Glycol (E1520) — uses, FDA GRAS, EFSA 2018 re-evaluation",
        url: "https://foodadditives.net/solvent/propylene-glycol/"
      },
      {
        label: "EMA: propylene glycol used as an excipient (food vs inhalation exposure context)",
        url: "https://www.ema.europa.eu/en/documents/report/propylene-glycol-used-excipient-report-published-support-questions-and-answers-propylene-glycol-used-excipient-medicinal-products-human-use_en.pdf"
      }
    ]
  },
  {
    name: "Carmine",
    id: "carmine",
    aliases: ["Carmine", "Cochineal extract", "Cochineal", "Carminic acid", "Natural Red 4", "E120"],
    e_number: "E120",
    ins_number: 120,
    risk: "low",
    risk_weight: 5,
    category: "Color (natural)",
    description: "A pink-to-red color made from the cochineal insect — the 'natural' color with a documented, if rare, severe-allergy risk.",
    regulatory_status: {
      eu: "Authorized as E120 (cochineal, carminic acid, carmines) under EU food additive law.",
      us: "FDA-permitted color additive; foods must declare it by its common name since January 2011, after reports of severe allergic reactions."
    },
    last_reviewed: "2026-10-10",
    bullets: ["Carmine and cochineal extract are red colorings derived from the dried bodies of cochineal insects.", "CSPI notes that carmine can cause severe allergic reactions.", "The FDA changed its labeling rules in response to reports of severe allergic reactions, including anaphylaxis — the reactions are rare, but real.", "Since January 2011, foods must list 'carmine' or 'cochineal extract' by name instead of hiding them under 'artificial color.'", "Look for 'carmine', 'cochineal extract', or 'E120' — yogurts, fruit drinks, candy, and ice cream are typical places to spot it."],
    link: null,
    sources: [
      {
        label: "CSPI Chemical Cuisine: artificial colorings (carmine allergy note)",
        url: "https://www.cspi.org/chemical-cuisine/artificial-colorings-synthetic-food-dyes"
      },
      {
        label: "FDA confirms Jan 5, 2011 compliance date for carmine/cochineal labeling rule",
        url: "https://foodbeveragelitigationupdate.com/fda-confirms-effective-date-of-color-additive-labeling-rule/"
      },
      {
        label: "Regulation (EC) 1333/2008, Annex II — E120 Cochineal, Carminic acid, Carmines",
        url: "https://www.legislation.gov.uk/eur/2008/1333/annex/II/2018-05-14?view=extent"
      }
    ]
  },
  {
    name: "Diacetyl",
    id: "diacetyl",
    aliases: ["diacetyl", "2,3-butanedione", "artificial butter flavor", "artificial butter flavoring"],
    e_number: null,
    ins_number: null,
    risk: "low",
    risk_weight: 5,
    category: "Flavoring",
    description: "The chemical behind the butter flavor in microwave popcorn and many baked goods — the one behind 'popcorn lung.'",
    regulatory_status: {
      eu: "No specific restriction on its use as a food flavoring.",
      us: "FDA GRAS for eating; the agency's concern was never about eating it, only about workers breathing concentrated flavor vapors in factories."
    },
    last_reviewed: "2026-10-10",
    bullets: ["'Popcorn lung' (obliterative bronchiolitis) struck workers at microwave popcorn plants who breathed concentrated butter-flavor vapors every day; it scars the airways and cannot be cured.", "The FDA determined diacetyl is 'generally recognized as safe' to eat — the risk was never about eating popcorn, only about breathing factory air.", "The four biggest US microwave-popcorn makers removed added diacetyl from nearly all their products in 2007.", "EWG put diacetyl on its Dirty Dozen additives list because of that severe, irreversible occupational lung condition.", "Look for 'diacetyl', '2,3-butanedione', or 'artificial butter flavor' on labels — microwave popcorn, bakery mixes, and flavored coffee are the usual suspects."],
    link: null,
    sources: [
      {
        label: "CDC/NIOSH: Flavorings and Lung Disease",
        url: "https://www.cdc.gov/niosh/flavoring-related-lung-disease/about/"
      },
      {
        label: "EWG: New Guide Warns of 'Dirty Dozen' Food Additives (2014)",
        url: "https://www.ewg.org/news-insights/news-release/2014/11/new-guide-warns-dirty-dozen-food-additives"
      },
      {
        label: "Quality Assurance & Food Safety (AP): Popcorn Makers Eliminate Butter Flavor Diacetyl (2007)",
        url: "https://www.qualityassurancemag.com/news/popcorn-makers-eliminate-butter-flavor-diacetyl-/"
      }
    ]
  },
  {
    name: "Calcium Propionate",
    id: "calcium-propionate",
    aliases: ["calcium propionate", "E282", "preservative 282"],
    e_number: "E282",
    ins_number: 282,
    risk: "low",
    risk_weight: 5,
    category: "Preservative",
    description: "The mold inhibitor behind long-lasting bread — the quiet preservative in the bread aisle.",
    regulatory_status: {
      eu: "Authorized as food additive E282 under Regulation (EC) No 1333/2008.",
      us: "FDA-affirmed GRAS as a direct food ingredient under 21 CFR 184.1221, used per good manufacturing practice."
    },
    last_reviewed: "2026-10-10",
    bullets: ["A 2002 Australian trial of 27 children with behavioral problems found 52% behaved worse when exposed to calcium propionate, versus 19% showing statistically significant improvement; reported symptoms included irritability, restlessness, inattention, and sleep disturbances.", "That trial is small and old, and it is the only human trial of its kind we could find — one study can't carry a verdict, and the finding needs replication before any stronger claim is fair.", "The FDA affirmed calcium propionate as GRAS under its own regulation (21 CFR 184.1221) — a firmer legal footing than most additives get.", "It works by suppressing mold and some bacteria in baked goods, without meaningfully affecting yeast fermentation.", "Look for 'calcium propionate', 'E282', or 'preservative 282' on labels — bread, buns, and tortillas are the usual suspects."],
    link: null,
    sources: [
      {
        label: "Just Food: Bread preservative linked to behavioural problems in children (2002)",
        url: "https://www.just-food.com/news/australia-bread-preservative-linked-to-behavioural-problems-in-children/"
      },
      {
        label: "FDA GRAS Notice 712 (Calcium acetate): lists Calcium propionate affirmed GRAS under 21 CFR 184.1221",
        url: "https://www.FDA.Gov/media/107449/download"
      },
      {
        label: "Niran Bio: Calcium Propionate regulatory and use summary",
        url: "https://www.niranbio.com/calcium-propionate/"
      }
    ]
  },
  {
    name: "Green 3",
    id: "green-3",
    aliases: ["Green 3", "Fast Green FCF", "FD&C Green No. 3", "E143"],
    e_number: "E143",
    ins_number: 143,
    risk: "low",
    risk_weight: 5,
    category: "Food Dye",
    description: "The quiet one of the synthetic dye family — a green color used in some candies and beverages, and not widely used at all.",
    regulatory_status: {
      eu: "E143 does not appear anywhere in the EU's consolidated food-additives regulation — it is not an authorized EU food color.",
      us: "FDA permanently listed for foods, drugs, and cosmetics (foods generally); every batch must be FDA-certified."
    },
    last_reviewed: "2026-10-10",
    bullets: ["California's 2021 OEHHA review found the seven most-used synthetic dyes, including Green 3, can cause or worsen neurobehavioral problems in some children.", "Green 3 has far less dye-specific research behind it than the bigger dyes — most of the concern comes from that class-level finding rather than Green 3 studies alone.", "A 1981 industry study hinted at bladder and testes tumors in male rats, but the FDA re-analyzed the data with other statistical tests and concluded the dye was safe.", "CSPI still rates the whole synthetic-dye category 'Avoid,' Green 3 included.", "Look for 'Green 3' or 'FD&C Green No. 3' on labels — brightly green candies and beverages are the usual suspects."],
    link: null,
    sources: [
      {
        label: "CSPI Chemical Cuisine: Artificial colorings (synthetic food dyes)",
        url: "https://www.cspi.org/chemical-cuisine/artificial-colorings-synthetic-food-dyes"
      },
      {
        label: "FDA: Regulatory Status of Color Additives database (FD&C Green No. 3 entry)",
        url: "https://hfpappexternal.fda.gov/scripts/fdcc/index.cfm?set=ColorAdditives&sort=Sort_Unique_ID&order=ASC&showAll=true&type=column&search=Use-current%C2%A4VARCHAR%C2%A4foods"
      },
      {
        label: "EUR-Lex: Consolidated Regulation (EC) No 1333/2008 on food additives (no E143 listed)",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02008R1333-20240602"
      }
    ]
  },
  {
    name: "Allulose",
    id: "allulose",
    aliases: ["allulose", "D-allulose", "D-psicose", "psicose"],
    e_number: null,
    ins_number: null,
    risk: "low",
    risk_weight: 5,
    category: "Sweetener (rare sugar)",
    description: "The new 'rare sugar' sweetener in keto products — about a tenth of sugar's calories, without the same blood-sugar spike.",
    regulatory_status: {
      eu: "Never authorized as a novel food; EFSA's June 2025 opinion concluded its safety could not be established because the applicant did not supply the requested data.",
      us: "FDA GRAS; since 2019 the FDA lets makers exclude it from total- and added-sugars declarations — it still counts as carbohydrate at 0.4 calories per gram."
    },
    last_reviewed: "2026-10-10",
    bullets: ["CSPI calls allulose one of the sweeteners that 'appears to be safer' — with the caveat that large amounts can cause diarrhea or other GI discomfort in some people.", "It occurs naturally in trace amounts in foods like figs and raisins, but the allulose you eat is made industrially from fructose.", "The FDA accepted its GRAS status starting in 2012, and in 2019 exempted it from total- and added-sugars labeling.", "The long-term data simply doesn't exist yet — allulose is genuinely new, and 'we don't know yet' is the honest position.", "Look for 'allulose', 'D-allulose', or 'D-psicose' on labels — keto and 'sugar-free' protein bars, ice cream, and baked goods are the usual suspects."],
    link: null,
    sources: [
      {
        label: "CSPI Chemical Cuisine: Low-Calorie Sweeteners",
        url: "https://www.cspi.org/chemical-cuisine/low-calorie-sweeteners"
      },
      {
        label: "FDA GRAS Notice 1057: D-psicose (allulose)",
        url: "https://www.FDA.Gov/media/166068/download?attachment"
      },
      {
        label: "Wikipedia: Allulose (regulatory history; EFSA June 2025 novel-food opinion)",
        url: "http://en.wikipedia.org/wiki/Psicose"
      }
    ]
  },
  {
    name: "Dimethylpolysiloxane",
    id: "dimethylpolysiloxane",
    aliases: ["dimethylpolysiloxane", "polydimethylsiloxane", "PDMS", "E900", "silicone oil"],
    e_number: "E900",
    ins_number: 900,
    risk: "low",
    risk_weight: 5,
    category: "Anti-foaming Agent",
    description: "A silicone-based anti-foaming agent that keeps hot cooking oil from foaming over — a processing aid you will likely never taste or notice.",
    regulatory_status: {
      eu: "Authorized as anti-foaming agent E900; EFSA's 2020 re-evaluation found no safety concern at reported use levels.",
      us: "Permitted as a defoaming agent in food processing under 21 CFR 173.340, capped at 10 parts per million in food (zero in milk)."
    },
    last_reviewed: "2026-10-10",
    bullets: ["It's the E900 in fast-food frying oil — a silicone-based anti-foaming agent that keeps very hot oil from foaming and bubbling over.", "In the EU it's authorized for frying oils and fats, chewing gum, and batters, among other uses.", "EFSA's 2020 re-evaluation found almost all of it passes through the gut unabsorbed and excreted unchanged, with no concern for genotoxicity — and set an acceptable daily intake of 17 mg per kg of body weight per day.", "Independent toxicology at actual food levels is thin and no strong harm signal exists — this entry is here because readers will encounter the name and ask.", "Look for 'dimethylpolysiloxane', 'E900', or 'polydimethylsiloxane' on labels — fast-food frying oils and fried foods are the usual suspects."],
    link: null,
    sources: [
      {
        label: "EFSA FAF Panel: Re-evaluation of dimethyl polysiloxane (E 900) as a food additive (PubMed 37649521)",
        url: "https://pubmed.ncbi.nlm.nih.gov/37649521/"
      },
      {
        label: "21 CFR 173.340: Defoaming agents (Cornell LII)",
        url: "https://www.law.cornell.edu/cfr/text/21/173.340"
      },
      {
        label: "Commission Regulation (EU) No 1057/2012: use of dimethyl polysiloxane (E 900) as antifoaming agent",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32012R1057"
      },
      {
        label: "FoodAdditives.net: Dimethylpolysiloxane (E900) uses and safety summary",
        url: "https://foodadditives.net/antifoaming-agent/dimethylpolysiloxane/?origin=serp_auto"
      }
    ]
  }
];
