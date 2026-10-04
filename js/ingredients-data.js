/* ConsumerRise — Ingredient Index data (12 entries).
   Risk ratings are the site's editorial judgment. Keep language plain and
   non-alarmist; details live on the linked investigations where they exist. */
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
    link: "/investigations/truth-about-hfcs.html"
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
      "A small number of people report allergy-like reactions, including hives.",
      "Check candy, sports drinks, flavored chips, and instant noodles for 'Yellow 5' or 'Tartrazine'."
    ],
    link: null
  },
  {
    name: "Sodium Benzoate",
    aliases: ["E211", "Benzoic acid (related)"],
    risk: "medium",
    category: "Preservative",
    description: "A preservative that keeps sodas, juices, and condiments from spoiling. Common in acidic drinks.",
    bullets: [
      "Was part of the color-plus-preservative mix tied to hyperactivity in the 2007 children's study.",
      "Can form benzene (a known carcinogen) when mixed with vitamin C in drinks — regulators set limits, but the chemistry is real.",
      "Generally considered safe at approved levels by the FDA.",
      "If you drink a lot of soda with both sodium benzoate and vitamin C, that is the combo to watch."
    ],
    link: null
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
      "People with the rare disorder PKU must avoid it entirely — that warning is on every label."
    ],
    link: "/investigations/artificial-sweeteners.html"
  },
  {
    name: "Brominated Vegetable Oil (BVO)",
    aliases: ["BVO", "E443"],
    risk: "high",
    category: "Emulsifier",
    description: "Used to keep citrus flavor mixed in some sodas and sports drinks. The FDA revoked its authorization for use in food in 2024.",
    bullets: [
      "The FDA revoked BVO's food authorization in 2024 over thyroid and health concerns from newer studies.",
      "Banned in the EU, Japan, and many other countries long before the US acted.",
      "Companies were given time to reformulate — check citrus sodas bought before the switch.",
      "Look for 'brominated vegetable oil' in citrus-flavored drinks."
    ],
    link: null
  },
  {
    name: "Potassium Bromate",
    aliases: ["Bromated flour", "E924"],
    risk: "high",
    category: "Flour Improver",
    description: "A flour additive that makes bread rise higher and look whiter. Banned in the EU, China, and Brazil — still allowed in the US.",
    bullets: [
      "Classified as possibly carcinogenic to humans (Group 2B) based on animal studies.",
      "Banned as a food additive in the EU, China, India, and Brazil.",
      "Most of it breaks down during baking, but residues can remain.",
      "Look for 'potassium bromate' or 'bromated flour' on bread and roll labels."
    ],
    link: null
  },
  {
    name: "BHA",
    aliases: ["Butylated hydroxyanisole", "E320"],
    risk: "high",
    category: "Preservative/Antioxidant",
    description: "A preservative that keeps fats in chips, cereal, and gum from going stale. Listed as 'reasonably anticipated to be a human carcinogen' in the US.",
    bullets: [
      "The US National Toxicology Program lists BHA as 'reasonably anticipated to be a human carcinogen' based on animal studies.",
      "Banned or restricted in the EU, Japan, and other countries.",
      "Often paired with BHT (E321) — if you see one, look for the other.",
      "Common in chips, cereal, chewing gum, and instant noodles."
    ],
    link: null
  },
  {
    name: "Titanium Dioxide",
    aliases: ["E171", "CI 77891"],
    risk: "medium",
    category: "Colorant/Whitening Agent",
    description: "Makes candy, frosting, and coffee creamer look bright white. The EU banned it as a food additive in 2022 over genotoxicity worries.",
    bullets: [
      "The EU banned E171 in food in 2022, saying it could no longer be considered safe due to genotoxicity concerns.",
      "Still fully allowed in US food; the FDA has not followed the EU.",
      "The concern is about tiny nanoparticles — an area where science is still catching up.",
      "Look for it in white candy shells, frosting, and powdered creamers."
    ],
    link: null
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
