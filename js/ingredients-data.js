/* Consumer Rising — Ingredient Index data (12 entries).
   Risk ratings are the site's editorial judgment. Keep language plain and
   non-alarmist; details live on the linked findings where they exist. */
window.CR_INGREDIENTS = [
  {
    name: "High Fructose Corn Syrup",
    aliases: ["HFCS", "HFCS-55", "Glucose-fructose syrup", "Isoglucose"],
    risk: "high",
    category: "Sweetener",
    description: "A cheap liquid sweetener made from corn starch. It is the main sweetener in most American sodas and shows up in bread, ketchup, and salad dressing too.",
    bullets: [
      "About 55% fructose and 45% glucose — very close to table sugar, which is 50/50.",
      "The problem is total added sugar: high intake is linked to obesity, type 2 diabetes, and heart disease.",
      "One 12-ounce soda carries about 39 grams of sugar — more than a full day's limit for most adults.",
      "US use peaked around 1999 and has fallen as soda sales dropped."
    ],
    link: "/investigations/truth-about-hfcs.html",
    sources: [
      { label: "Coca-Cola nutrition facts (39g sugar / 12 oz)", url: "https://coca-cola.com/us/en/brands/coca-cola/products/original" },
      { label: "USDA ERS: sweetener availability peaked 1999", url: "https://www.ers.usda.gov/data-products/ag-and-food-statistics-charting-the-essentials/food-availability-and-consumption?topicId=080e8d1d-e61e-4bd8-beac-51f0f1d1f0fe" }
    ]
  },
  {
    name: "Red 40",
    aliases: ["Allura Red AC", "E129", "FD&C Red No. 40"],
    risk: "high",
    category: "Food Dye",
    description: "One of the most widely used artificial colors in US food — candy, drinks, cereals, and snacks. It makes food look bright red or orange.",
    bullets: [
      "In the EU, foods with this dye must warn they 'may have an adverse effect on activity and attention in children.'",
      "A 2007 study linked a mix of artificial colors to more hyperactivity in some children.",
      "Watchdog groups have petitioned the FDA for years to take a harder look at dyes.",
      "Look for 'Red 40', 'Allura Red', or 'E129' — brightest reds, oranges, and pinks are the usual suspects."
    ],
    link: "/investigations/red-dye-40.html"
  },
  {
    name: "Yellow 5",
    aliases: ["Tartrazine", "E102", "FD&C Yellow No. 5"],
    risk: "high",
    category: "Food Dye",
    description: "The bright yellow dye in candy, drinks, chips, and even some medicines. It carries the same EU child-attention warning as Red 40.",
    bullets: [
      "EU requires the same 'activity and attention in children' warning label as other artificial colors.",
      "Included in the color mixes studied for links to hyperactivity in sensitive children.",
      "The FDA estimates hives in fewer than 1 in 10,000 people — that is why it must be named on labels.",
      "Check candy, sports drinks, flavored chips, and instant noodles for 'Yellow 5' or 'Tartrazine'."
    ],
    link: null,
    sources: [
      { label: "FDA on tartrazine sensitivity (1 in 10,000)", url: "https://Www.news-medical.net/health/Tartrazine-Allergy.aspx" }
    ]
  },
  {
    name: "Sodium Benzoate",
    aliases: ["E211", "Benzoic acid (related)"],
    risk: "medium",
    category: "Preservative",
    description: "A preservative that keeps sodas, juices, and condiments from spoiling. Common in acidic drinks.",
    bullets: [
      "Was part of the color-plus-preservative mix tied to hyperactivity in the 2007 children's study.",
      "Can form benzene when mixed with vitamin C in drinks: in 2005–2006 the FDA found 5 of 100+ tested beverages above the 5 ppb drinking-water limit, and makers reformulated.",
      "Generally considered safe at approved levels by the FDA.",
      "If you drink a lot of soda with both sodium benzoate and vitamin C, that is the combo to watch."
    ],
    link: null,
    sources: [
      { label: "FDA benzene-in-soft-drinks survey 2005–2006 (FSAI summary)", url: "https://www.fsai.ie/enforcement-and-legislation/official-controls/monitoring/surveillance/introduction-benzene-survey-2006" }
    ]
  },
  {
    name: "Monosodium Glutamate (MSG)",
    aliases: ["MSG", "E621", "Yeast extract (similar)", "Hydrolyzed protein (similar)"],
    risk: "low",
    category: "Flavor Enhancer",
    description: "A flavor booster for savory food. The scare started in 1968; the science since then has been mixed and mostly reassuring at normal food levels.",
    bullets: [
      "The FDA classifies MSG as 'generally recognized as safe' (GRAS).",
      "A 1995 expert review found no consistent link to reported symptoms in double-blind studies.",
      "Glutamate occurs naturally in tomatoes, cheese, and mushrooms.",
      "Often hides under names like 'yeast extract' and 'hydrolyzed vegetable protein'."
    ],
    link: "/investigations/msg.html"
  },
  {
    name: "Partially Hydrogenated Oils",
    aliases: ["PHOs", "Partially hydrogenated soybean oil", "Shortening (some)"],
    risk: "high",
    category: "Fat/Oil",
    description: "The main source of artificial trans fat. The FDA gave the industry until 2020 to remove them — but label loopholes mean traces can remain.",
    bullets: [
      "In 2015 the FDA ruled PHOs are no longer 'generally recognized as safe.'",
      "Trans fats raise LDL ('bad') cholesterol.",
      "Label trick: under 0.5g per serving can still be called '0g trans fat' — so '0g' is not always zero.",
      "Read ingredients for the words 'partially hydrogenated', especially in frosting, popcorn, and baked goods."
    ],
    link: "/investigations/trans-fats-hiding.html"
  },
  {
    name: "Aspartame",
    aliases: ["E951", "NutraSweet", "Equal"],
    risk: "medium",
    category: "Sweetener",
    description: "The sweetener in most diet sodas and sugar-free gum. In 2023 the WHO's cancer agency called it 'possibly carcinogenic' — while other expert groups disagreed.",
    bullets: [
      "IARC classified aspartame Group 2B ('possibly carcinogenic') in July 2023, based on limited evidence.",
      "The same review kept the daily limit at 40 mg per kg of body weight; the FDA publicly disagreed with the 2B label.",
      "The WHO's May 2023 guideline says non-sugar sweeteners do not help with weight control.",
      "People with the rare disorder PKU must avoid it — the FDA requires every aspartame product to warn 'PHENYLKETONURICS: CONTAINS PHENYLALANINE.'"
    ],
    link: "/investigations/artificial-sweeteners.html",
    sources: [
      { label: "FDA: aspartame, PKU warning and labeling", url: "https://www.fda.gov/food/food-additives-petitions/aspartame-and-other-sweeteners-food" }
    ]
  },
  {
    name: "Brominated Vegetable Oil (BVO)",
    aliases: ["BVO", "E443"],
    risk: "high",
    category: "Emulsifier",
    description: "Used to keep citrus flavor mixed in some sodas and sports drinks. The FDA revoked its authorization for use in food in 2024.",
    bullets: [
      "The FDA revoked BVO's food authorization in July 2024, concluding it was no longer considered safe after NIH-collaboration studies found potential adverse health effects.",
      "The EU removed it from food years before the US acted.",
      "Companies were given time to reformulate — check citrus sodas bought before the switch.",
      "Look for 'brominated vegetable oil' in citrus-flavored drinks."
    ],
    link: null,
    sources: [
      { label: "FDA: BVO authorization revoked July 2024", url: "https://www.fda.gov/food/food-additives-petitions/brominated-vegetable-oil-bvo" },
      { label: "California Food Safety Act (AB 418) — EU precedent", url: "https://WWW.CONFECTIONERYNEWS.COM/Article/2023/10/10/California-Food-Safety-Act-signed-into-law-bans-four-food-additives-by-Jan.-2027/" }
    ]
  },
  {
    name: "Potassium Bromate",
    aliases: ["Bromated flour", "E924"],
    risk: "high",
    category: "Flour Improver",
    description: "A flour additive that makes bread rise higher and look whiter. Removed from EU food years ago — still allowed in the US.",
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
    aliases: ["Butylated hydroxyanisole", "E320"],
    risk: "high",
    category: "Preservative/Antioxidant",
    description: "A preservative that keeps fats in chips, cereal, and gum from going stale. Listed as 'reasonably anticipated to be a human carcinogen' in the US.",
    bullets: [
      "The US National Toxicology Program lists BHA as 'reasonably anticipated to be a human carcinogen' based on animal studies.",
      "Authorized — not banned — in the EU as E320, with an EFSA acceptable daily intake of 1.0 mg per kg of body weight per day.",
      "IARC classifies it Group 2B ('possibly carcinogenic to humans') based on limited animal data and no conclusive human data.",
      "Often paired with BHT (E321) — if you see one, look for the other.",
      "Common in chips, cereal, chewing gum, and instant noodles."
    ],
    link: null,
    sources: [
      { label: "EFSA/EU: BHA (E320) authorized, ADI 1.0 mg/kg bw/day", url: "https://foodadditives.net/antioxidant/butylated-hydroxyanisole-bha/" }
    ]
  },
  {
    name: "Titanium Dioxide",
    aliases: ["E171", "CI 77891"],
    risk: "medium",
    category: "Colorant/Whitening Agent",
    description: "Makes candy, frosting, and coffee creamer look bright white. The EU banned it as a food additive in 2022 after EFSA's safety review.",
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
    aliases: ["E407", "Irish moss (source)"],
    risk: "low",
    category: "Thickener/Stabilizer",
    description: "A thickener from red seaweed in chocolate milk, ice cream, and plant milks. Lab research raised gut-inflammation questions; regulators say current uses look safe.",
    bullets: [
      "NIH-funded lab research linked food-grade carrageenan to gut inflammation in cell and animal studies.",
      "EFSA's 2018 re-evaluation found no safety concern at reported uses, but noted data gaps.",
      "Do not confuse food-grade carrageenan with 'degraded carrageenan' (poligeenan), a lab chemical not allowed in food.",
      "Many brands now print 'carrageenan-free' on the carton if you want to skip it."
    ],
    link: "/investigations/carrageenan.html"
  }
];
