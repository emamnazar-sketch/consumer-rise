/* Consumer Rising — Home Index data (Phase 1)
 * Household-product chemicals, FACTS ONLY. No ratings, no verdicts, no tiers.
 * Every fact below is traceable to a primary source opened during research
 * (ATSDR/CDC ToxFAQs, US EPA, NIH/PubMed), cited per fact. Regulatory-status
 * fields report only what Phase 1 sources verified; "Not covered in Phase 1
 * sources" means exactly that — not "unregulated." See home-index.html
 * methodology for the full source list. Last updated 2026-10-11.
 */
window.CR_HOME = {
  updated: "2026-10-11",
  count: 36,
  items: [
    {
      name: "Formaldehyde",
      id: "formaldehyde",
      aliases: ["formalin", "methanal", "methyl aldehyde"],
      found_in: ["all-purpose cleaners", "dish soap", "laundry detergent", "air fresheners", "cosmetics"],
      what_it_is: "A colorless gas with a sharp smell, used as a preservative and disinfectant. Some household products contain it directly; others contain preservatives that release it slowly over time.",
      facts: [
        {
          text: "In 2011, the U.S. Department of Health and Human Services determined that formaldehyde is a \u201cknown human carcinogen,\u201d based on sufficient human and animal inhalation studies.",
          source: { label: "ATSDR ToxFAQs: Formaldehyde", url: "https://wwwn.cdc.gov/TSp/ToxFAQs/ToxFAQsDetails.aspx?faqid=219&toxid=39" }
        },
        {
          text: "Breathing 0.1 to 0.5 parts per million can cause nose and eye irritation, neurological effects, and increased asthma and allergy risk.",
          source: { label: "ATSDR ToxFAQs: Formaldehyde", url: "https://wwwn.cdc.gov/TSp/ToxFAQs/ToxFAQsDetails.aspx?faqid=219&toxid=39" }
        },
        {
          text: "Indoor air levels (typically 0.02\u20134 ppm) usually exceed outdoor levels. Formaldehyde is used as a preservative in household products including antiseptics, medicines, and cosmetics.",
          source: { label: "ATSDR ToxFAQs: Formaldehyde", url: "https://wwwn.cdc.gov/TSp/ToxFAQs/ToxFAQsDetails.aspx?faqid=219&toxid=39" }
        },
        {
          text: "OSHA sets a workplace exposure limit of 0.75 ppm over an 8-hour day.",
          source: { label: "ATSDR ToxFAQs: Formaldehyde", url: "https://wwwn.cdc.gov/TSp/ToxFAQs/ToxFAQsDetails.aspx?faqid=219&toxid=39" }
        }
      ],
      us_status: "No federal ban on household use found in Phase 1 sources; OSHA workplace limit 0.75 ppm (8-hr TWA).",
      eu_status: "Not covered in Phase 1 sources.",
      ca_status: "Not covered in Phase 1 sources."
    },
    {
      name: "1,4-Dioxane",
      id: "1-4-dioxane",
      aliases: ["dioxane", "p-dioxane"],
      found_in: ["laundry detergent", "dish soap", "shampoo", "bubble bath", "all-purpose cleaners"],
      what_it_is: "A clear liquid solvent that never appears on ingredient labels because it is not added on purpose \u2014 it forms as a byproduct when ethoxylated cleaning ingredients (like SLES) are manufactured.",
      facts: [
        {
          text: "1,4-Dioxane is a trace contaminant of ethoxylated ingredients that may be listed as PEG, polyethylene, polyethylene glycol, polyoxyethylene, or ingredients ending in \u201c-eth\u201d or \u201c-oxynol.\u201d Manufacturers reduce it to low levels before these chemicals become household products.",
          source: { label: "ATSDR ToxFAQs: 1,4-Dioxane", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=954&toxid=199" }
        },
        {
          text: "The U.S. Department of Health and Human Services considers 1,4-dioxane \u201creasonably anticipated to be a human carcinogen.\u201d",
          source: { label: "ATSDR ToxFAQs: 1,4-Dioxane", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=954&toxid=199" }
        },
        {
          text: "High levels can damage the liver and kidneys. Laboratory rats that breathed 1,4-dioxane vapors most of their lives developed cancers inside the nose and abdominal cavity; rats and mice that drank it developed liver cancer.",
          source: { label: "ATSDR ToxFAQs: 1,4-Dioxane", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=954&toxid=199" }
        },
        {
          text: "Skin can contact 1,4-dioxane when using cosmetics, detergents, bubble baths, and shampoos that contain it.",
          source: { label: "ATSDR ToxFAQs: 1,4-Dioxane", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=954&toxid=199" }
        },
        {
          text: "EPA determined that 1,4-dioxane in drinking water at 4 mg/L for one day (or 0.4 mg/L for 10 days) is not expected to cause adverse effects in children.",
          source: { label: "ATSDR ToxFAQs: 1,4-Dioxane", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=954&toxid=199" }
        }
      ],
      us_status: "No federal ban found in Phase 1 sources; EPA drinking-water guidance 4 mg/L (1-day, children); OSHA workplace limit 100 ppm.",
      eu_status: "Not covered in Phase 1 sources.",
      ca_status: "Not covered in Phase 1 sources."
    },
    {
      name: "2-Butoxyethanol",
      id: "2-butoxyethanol",
      aliases: ["butyl cellosolve", "ethylene glycol monobutyl ether", "EGBE"],
      found_in: ["all-purpose spray", "window cleaner", "liquid soap", "degreasers"],
      what_it_is: "A solvent that helps cleaners cut through grease and grime. It enters the body mainly two ways: breathing spray mist and absorbing it through skin.",
      facts: [
        {
          text: "Exposure happens mainly from breathing contaminated air or through skin contact when using household products containing it.",
          source: { label: "ATSDR ToxFAQs: 2-Butoxyethanol", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=346&toxid=61" }
        },
        {
          text: "Exposure to large amounts can irritate the nose and eyes and cause headache and vomiting.",
          source: { label: "ATSDR ToxFAQs: 2-Butoxyethanol", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=346&toxid=61" }
        },
        {
          text: "Animal studies showed that 2-butoxyethanol destroys red blood cells (hemolysis).",
          source: { label: "ATSDR ToxFAQs: 2-Butoxyethanol", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=346&toxid=61" }
        },
        {
          text: "HHS, IARC, and EPA have not classified 2-butoxyethanol for carcinogenicity \u2014 ATSDR notes no cancer studies are available.",
          source: { label: "ATSDR ToxFAQs: 2-Butoxyethanol", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=346&toxid=61" }
        },
        {
          text: "It is used in liquid soaps, cosmetics, and industrial and household cleaners. OSHA sets a workplace limit of 50 ppm.",
          source: { label: "ATSDR ToxFAQs: 2-Butoxyethanol", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=346&toxid=61" }
        }
      ],
      us_status: "No federal ban found in Phase 1 sources; OSHA workplace limit 50 ppm.",
      eu_status: "Not covered in Phase 1 sources.",
      ca_status: "Not covered in Phase 1 sources."
    },
    {
      name: "Toluene",
      id: "toluene",
      aliases: ["methylbenzene", "toluol"],
      found_in: ["paint thinner", "adhesives", "nail polish", "spot removers", "rubber cement"],
      what_it_is: "A sharp-smelling solvent that dissolves paints, glues, and polishes. It evaporates fast, so using these products means breathing it in.",
      facts: [
        {
          text: "Breathing toluene can cause headaches, dizziness, and nausea. It affects the nervous system.",
          source: { label: "ATSDR ToxFAQs: Toluene", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=160&toxid=29" }
        },
        {
          text: "Long-term workplace exposure has caused hearing loss and loss of color vision.",
          source: { label: "ATSDR ToxFAQs: Toluene", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=160&toxid=29" }
        },
        {
          text: "Studies generally indicate toluene does not cause cancer (EPA: inadequate information; IARC: not classifiable as to carcinogenicity).",
          source: { label: "ATSDR ToxFAQs: Toluene", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=160&toxid=29" }
        },
        {
          text: "Toluene is found in paints, paint thinners, adhesives, nail polish, and gasoline.",
          source: { label: "ATSDR ToxFAQs: Toluene", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=160&toxid=29" }
        }
      ],
      us_status: "No federal ban on household use found in Phase 1 sources.",
      eu_status: "Not covered in Phase 1 sources.",
      ca_status: "Not covered in Phase 1 sources."
    },
    {
      name: "Xylene",
      id: "xylene",
      aliases: ["xylol", "dimethylbenzene", "mixed xylenes"],
      found_in: ["paint thinner", "varnish", "adhesives", "cleaning agents", "gasoline"],
      what_it_is: "A sweet-smelling, highly flammable liquid refined from petroleum. It is one of the top-30 chemicals produced in the U.S. by volume, used as a solvent and cleaning agent.",
      facts: [
        {
          text: "Xylene exists as three isomers (meta-, ortho-, para-). It is a colorless, sweet-smelling liquid that catches fire easily and occurs naturally in petroleum and coal tar.",
          source: { label: "ATSDR ToxFAQs: Xylene", url: "https://stacks.cdc.gov/view/cdc/45479/cdc_45479_DS1.pdf" }
        },
        {
          text: "High levels \u2014 breathed or through skin \u2014 can cause headache, dizziness, confusion, loss of coordination and balance, irritation of skin, eyes, nose, and throat, memory difficulties, and changes in the liver and kidneys. Very high levels can cause unconsciousness and death.",
          source: { label: "ATSDR ToxFAQs: Xylene", url: "https://stacks.cdc.gov/view/cdc/45479/cdc_45479_DS1.pdf" }
        },
        {
          text: "Both IARC and EPA found insufficient information to determine whether xylene causes cancer.",
          source: { label: "ATSDR ToxFAQs: Xylene", url: "https://stacks.cdc.gov/view/cdc/45479/cdc_45479_DS1.pdf" }
        },
        {
          text: "Xylene is used as a solvent and cleaning agent, a thinner for paint, and in paints and varnishes. OSHA sets a workplace limit of 100 ppm; EPA sets a drinking-water limit of 10 ppm.",
          source: { label: "ATSDR ToxFAQs: Xylene", url: "https://stacks.cdc.gov/view/cdc/45479/cdc_45479_DS1.pdf" }
        }
      ],
      us_status: "No federal ban found in Phase 1 sources; OSHA workplace limit 100 ppm; EPA drinking-water limit 10 ppm.",
      eu_status: "Not covered in Phase 1 sources.",
      ca_status: "Not covered in Phase 1 sources."
    },
    {
      name: "Styrene",
      id: "styrene",
      aliases: ["vinylbenzene", "phenylethylene"],
      found_in: ["polystyrene plastics", "resins", "rubber products", "insulation"],
      what_it_is: "The building block of polystyrene plastics and resins. It is primarily an industrial chemical, but it migrates from plastics and building materials into indoor air.",
      facts: [
        {
          text: "High levels of styrene affect the nervous system \u2014 reported effects include changes in color vision, tiredness, slowed reaction time, and concentration problems.",
          source: { label: "ATSDR ToxFAQs: Styrene", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=420&toxid=74" }
        },
        {
          text: "The National Toxicology Program (2011) classifies styrene as \u201creasonably anticipated to be a human carcinogen.\u201d",
          source: { label: "ATSDR ToxFAQs: Styrene", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=420&toxid=74" }
        },
        {
          text: "IARC classifies styrene as a \u201cpossible human carcinogen.\u201d",
          source: { label: "ATSDR ToxFAQs: Styrene", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=420&toxid=74" }
        },
        {
          text: "OSHA sets a workplace limit of 100 ppm. EPA drinking-water guidance: 20 mg/L for one day, 0.1 mg/L lifetime.",
          source: { label: "ATSDR ToxFAQs: Styrene", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=420&toxid=74" }
        }
      ],
      us_status: "No federal ban found in Phase 1 sources; OSHA workplace limit 100 ppm.",
      eu_status: "Not covered in Phase 1 sources.",
      ca_status: "Not covered in Phase 1 sources."
    },
    {
      name: "Tetrachloroethylene (Perc)",
      id: "perchloroethylene",
      aliases: ["perc", "tetrachloroethene", "dry-cleaning fluid"],
      found_in: ["dry-cleaned clothes", "spot removers", "metal degreasers"],
      what_it_is: "The standard solvent of the dry-cleaning industry. Clothes brought home from the dry cleaner can release small amounts of it into indoor air.",
      facts: [
        {
          text: "Tetrachloroethylene is used in dry cleaning and metal degreasing. High levels can cause dizziness, unconsciousness, and death.",
          source: { label: "ATSDR ToxFAQs: Tetrachloroethylene", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=264&toxid=48" }
        },
        {
          text: "DHHS considers it \u201creasonably anticipated to be a human carcinogen\u201d; EPA calls it \u201clikely carcinogenic by all routes of exposure\u201d; IARC calls it \u201cprobably carcinogenic to humans.\u201d",
          source: { label: "ATSDR ToxFAQs: Tetrachloroethylene", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=264&toxid=48" }
        },
        {
          text: "Dry-cleaned clothes release small amounts of tetrachloroethylene into indoor air.",
          source: { label: "ATSDR ToxFAQs: Tetrachloroethylene", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=264&toxid=48" }
        },
        {
          text: "OSHA sets a workplace exposure limit of 100 ppm over an 8-hour day.",
          source: { label: "ATSDR ToxFAQs: Tetrachloroethylene", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=264&toxid=48" }
        }
      ],
      us_status: "No federal ban on dry-cleaning use found in Phase 1 sources; OSHA workplace limit 100 ppm.",
      eu_status: "Not covered in Phase 1 sources.",
      ca_status: "Not covered in Phase 1 sources."
    },
    {
      name: "Benzene",
      id: "benzene",
      aliases: ["benzol"],
      found_in: ["gasoline", "paint removers", "detergents (as feedstock)", "gas stoves (indoor air)"],
      what_it_is: "A highly flammable liquid with a gasoline-like odor. Industry uses it to make plastics, detergents, and paint removers \u2014 and it shows up in homes from gas stoves, attached garages, and traffic exhaust.",
      facts: [
        {
          text: "Exposure to benzene can decrease the number of red and white blood cells. Long-term exposure may cause leukemia (bone-marrow cancer).",
          source: { label: "ATSDR ToxFAQs: Benzene", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=38&toxid=14" }
        },
        {
          text: "The U.S. Department of Health and Human Services, the EPA, and IARC all classify benzene as a known human carcinogen.",
          source: { label: "ATSDR ToxFAQs: Benzene", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=38&toxid=14" }
        },
        {
          text: "Inside homes, benzene can be released from gas stoves and ovens, and from fuel or wood-based heat sources such as fireplaces.",
          source: { label: "ATSDR ToxFAQs: Benzene", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=38&toxid=14" }
        },
        {
          text: "Benzene is used in industry as a solvent and to make plastics, nylon resins, detergents, paint removers, and rubber goods.",
          source: { label: "ATSDR ToxFAQs: Benzene", url: "https://wwwn.cdc.gov/TSP/ToxFAQs/ToxFAQsDetails.aspx?faqid=38&toxid=14" }
        }
      ],
      us_status: "No federal ban on industrial use found in Phase 1 sources; strictly regulated in workplaces.",
      eu_status: "Not covered in Phase 1 sources.",
      ca_status: "Not covered in Phase 1 sources."
    },
    {
      name: "Ammonia",
      id: "ammonia",
      aliases: ["ammonium hydroxide (in cleaners)", "aqueous ammonia"],
      found_in: ["window cleaner", "all-purpose cleaners", "floor cleaners"],
      what_it_is: "A sharp-smelling gas dissolved in water to make glass and floor cleaners. It cuts grease well \u2014 and irritates eyes, nose, throat, and lungs just as readily.",
      facts: [
        {
          text: "Many household and industrial cleaners contain ammonia, including window-cleaning products. Ammonia is a colorless gas with a very distinct odor.",
          source: { label: "ATSDR ToxFAQs: Ammonia", url: "https://stacks.cdc.gov/view/cdc/48575/cdc_48575_DS1.pdf" }
        },
        {
          text: "High levels cause irritation and serious burns to the skin, mouth, throat, lungs, and eyes. At very high levels, ammonia can cause death.",
          source: { label: "ATSDR ToxFAQs: Ammonia", url: "https://stacks.cdc.gov/view/cdc/48575/cdc_48575_DS1.pdf" }
        },
        {
          text: "There is no evidence that ammonia causes cancer. DHHS, EPA, and IARC have not classified ammonia for carcinogenicity.",
          source: { label: "ATSDR ToxFAQs: Ammonia", url: "https://stacks.cdc.gov/view/cdc/48575/cdc_48575_DS1.pdf" }
        },
        {
          text: "OSHA sets an 8-hour workplace limit of 25 ppm and a 15-minute short-term limit of 35 ppm. ATSDR advises ventilation, protective clothing, and eye protection when using ammonia cleaners.",
          source: { label: "ATSDR ToxFAQs: Ammonia", url: "https://stacks.cdc.gov/view/cdc/48575/cdc_48575_DS1.pdf" }
        }
      ],
      us_status: "No federal ban found in Phase 1 sources; OSHA workplace limit 25 ppm (8-hr).",
      eu_status: "Not covered in Phase 1 sources.",
      ca_status: "Not covered in Phase 1 sources."
    },
    {
      name: "Chlorine",
      id: "chlorine",
      aliases: ["chlorine gas"],
      found_in: ["swimming pools", "drinking-water disinfection", "bleach products (as released gas)"],
      what_it_is: "A yellow-green gas with a strong irritating odor. You rarely meet it as a gas at home \u2014 but household bleach products can release it, which is when it matters.",
      facts: [
        {
          text: "Chlorine gas is irritating and corrosive to the respiratory tract, eyes, and skin. High levels cause fluid accumulation in the lungs (pulmonary edema) and can cause death.",
          source: { label: "ATSDR ToxFAQs: Chlorine", url: "https://stacks.cdc.gov/view/cdc/156000/cdc_156000_DS1.pdf" }
        },
        {
          text: "DHHS, IARC, and EPA have not classified chlorine as to its carcinogenicity.",
          source: { label: "ATSDR ToxFAQs: Chlorine", url: "https://stacks.cdc.gov/view/cdc/156000/cdc_156000_DS1.pdf" }
        },
        {
          text: "The general population may be exposed through products made from chlorine, such as sodium hypochlorite, used as a disinfectant in public drinking water and swimming pools and as common household bleach.",
          source: { label: "ATSDR ToxFAQs: Chlorine", url: "https://stacks.cdc.gov/view/cdc/156000/cdc_156000_DS1.pdf" }
        },
        {
          text: "OSHA sets a ceiling limit of 1 ppm in workplace air. EPA sets a drinking-water limit of 4 mg/L.",
          source: { label: "ATSDR ToxFAQs: Chlorine", url: "https://stacks.cdc.gov/view/cdc/156000/cdc_156000_DS1.pdf" }
        }
      ],
      us_status: "No federal ban found in Phase 1 sources; OSHA ceiling 1 ppm; EPA drinking-water limit 4 mg/L.",
      eu_status: "Not covered in Phase 1 sources.",
      ca_status: "Not covered in Phase 1 sources."
    },
    {
      name: "Sodium hypochlorite (Bleach)",
      id: "sodium-hypochlorite",
      aliases: ["bleach", "liquid bleach", "chlorine bleach"],
      found_in: ["laundry bleach", "disinfecting sprays", "mold and mildew removers", "toilet bowl cleaners"],
      what_it_is: "The active ingredient in liquid household bleach. It disinfects by releasing chlorine \u2014 which is also why it demands respect in how it is stored and used.",
      facts: [
        {
          text: "Sodium hypochlorite is used as a disinfectant in public drinking water and swimming pools and as common household bleach \u2014 and it may release chlorine gas.",
          source: { label: "ATSDR ToxFAQs: Chlorine", url: "https://stacks.cdc.gov/view/cdc/156000/cdc_156000_DS1.pdf" }
        },
        {
          text: "Swallowing a product containing sodium hypochlorite can produce corrosive chlorine gas in the stomach and cause serious corrosive injury.",
          source: { label: "ATSDR ToxFAQs: Chlorine", url: "https://stacks.cdc.gov/view/cdc/156000/cdc_156000_DS1.pdf" }
        },
        {
          text: "ATSDR advises that household products containing sodium hypochlorite be stored in safe locations, out of the reach of children.",
          source: { label: "ATSDR ToxFAQs: Chlorine", url: "https://stacks.cdc.gov/view/cdc/156000/cdc_156000_DS1.pdf" }
        }
      ],
      us_status: "No federal ban found in Phase 1 sources; regulated as a pesticide (disinfectant) by EPA.",
      eu_status: "Not covered in Phase 1 sources.",
      ca_status: "Not covered in Phase 1 sources."
    },
    {
      name: "Mixing bleach with other cleaners (safety)",
      id: "bleach-mixing-warning",
      aliases: ["bleach + ammonia", "bleach + acid", "chloramine gas"],
      found_in: ["any bleach product combined with other cleaners"],
      what_it_is: "Not an ingredient \u2014 a reaction. When bleach (sodium hypochlorite) meets acids or ammonia from other cleaners, it can release toxic gases into your home\u2019s air. This entry exists because the chemistry is well documented and the mistake is common.",
      facts: [
        {
          text: "Household products containing sodium hypochlorite \u201cmay release chlorine gas,\u201d according to ATSDR.",
          source: { label: "ATSDR ToxFAQs: Chlorine", url: "https://stacks.cdc.gov/view/cdc/156000/cdc_156000_DS1.pdf" }
        },
        {
          text: "Chlorine gas at low levels (1\u201310 ppm) can cause sore throat, coughing, and eye and skin irritation; higher levels cause burning eyes and skin, wheezing, fluid in the lungs, and can cause death.",
          source: { label: "ATSDR ToxFAQs: Chlorine", url: "https://stacks.cdc.gov/view/cdc/156000/cdc_156000_DS1.pdf" }
        },
        {
          text: "Ammonia cleaners irritate the eyes, throat, and lungs on their own. ATSDR advises ensuring adequate ventilation and wearing proper clothing and eye protection when using cleaners that contain ammonia.",
          source: { label: "ATSDR ToxFAQs: Ammonia", url: "https://stacks.cdc.gov/view/cdc/48575/cdc_48575_DS1.pdf" }
        }
      ],
      us_status: "Safety information, not a product: both bleach and ammonia cleaners are legal to sell. See Sodium hypochlorite and Ammonia entries.",
      eu_status: "Not covered in Phase 1 sources.",
      ca_status: "Not covered in Phase 1 sources."
    },
    {
      name: "Phthalates (DEHP, DBP, DEP)",
      id: "phthalates",
      aliases: ["DEHP", "di(2-ethylhexyl) phthalate", "DBP", "dibutyl phthalate", "DEP", "diethyl phthalate", "plasticizers"],
      found_in: ["vinyl shower curtains", "vinyl flooring", "adhesives", "detergents", "personal-care products (soaps, shampoos)"],
      what_it_is: "A family of chemicals that make plastics flexible and help fragrances linger. They are in vinyl, adhesives, detergents, and personal-care products \u2014 and they do not stay put: they migrate into air, dust, and food.",
      facts: [
        {
          text: "DEHP is a man-made plasticizer. ATSDR states plainly: \u201cThe developing fetus and male reproductive system are targets of DEHP toxicity.\u201d",
          source: { label: "ATSDR ToxFAQs: DEHP", url: "https://wwwn.cdc.gov/TSp/ToxFAQs/ToxFAQsDetails.aspx?faqid=377&toxid=65" }
        },
        {
          text: "In men, increased DEHP exposure has been linked with decreased testosterone and sperm motility. In animals, high doses damaged the testes and reduced fertility.",
          source: { label: "ATSDR ToxFAQs: DEHP", url: "https://wwwn.cdc.gov/TSp/ToxFAQs/ToxFAQsDetails.aspx?faqid=377&toxid=65" }
        },
        {
          text: "NTP classifies DEHP as \u201creasonably anticipated to be a human carcinogen\u201d; EPA calls it a \u201cprobable human carcinogen\u201d; IARC calls it \u201cpossibly carcinogenic to humans.\u201d",
          source: { label: "ATSDR ToxFAQs: DEHP", url: "https://wwwn.cdc.gov/TSp/ToxFAQs/ToxFAQsDetails.aspx?faqid=377&toxid=65" }
        },
        {
          text: "Phthalates as a group are used in vinyl flooring, adhesives, detergents, and personal-care products including soaps, shampoos, hair sprays, and nail polishes. Once in the body they break down into metabolites that pass out in urine.",
          source: { label: "CDC NHANES: Phthalates", url: "https://wwwn.cdc.gov/Nchs/Data/Nhanes/Public/2017/DataFiles/PHTHTE_J.htm" }
        }
      ],
      us_status: "No federal ban on phthalates in cleaning products found in Phase 1 sources.",
      eu_status: "Not covered in Phase 1 sources.",
      ca_status: "Not covered in Phase 1 sources."
    },
    {
      name: "Triclosan",
      id: "triclosan",
      aliases: ["2,4,4\u2019-trichloro-2\u2019-hydroxydiphenyl ether"],
      found_in: ["antibacterial hand soap", "antibacterial dish soap", "cutting boards", "shower curtains", "mattresses", "textiles"],
      what_it_is: "An antimicrobial added to slow the growth of bacteria, fungi, and mildew. It was the active ingredient in most \u201cantibacterial\u201d hand soaps \u2014 until the FDA ruled that makers could not prove it worked better than plain soap.",
      facts: [
        {
          text: "Triclosan is an antimicrobial active ingredient used since 1969 to slow or stop the growth of bacteria, fungi, and mildew, including as a materials preservative in floors, shower curtains, mattresses, textiles, and carpeting.",
          source: { label: "US EPA: Triclosan", url: "https://www.epa.gov/ingredients-used-pesticide-products/triclosan" }
        },
        {
          text: "FDA issued a final rule establishing that OTC consumer antiseptic wash products (liquid, foam, and gel hand soaps; bar soaps; body washes) containing triclosan and certain other actives can no longer be marketed \u2014 manufacturers did not demonstrate they are safe for long-term daily use and more effective than plain soap and water.",
          source: { label: "US EPA: Triclosan", url: "https://www.epa.gov/ingredients-used-pesticide-products/triclosan" }
        },
        {
          text: "EPA\u2019s 2008 human-health assessment found no dietary risks of concern; NHANES biomonitoring showed aggregate (dietary + residential) exposures did not result in unreasonable adverse effects.",
          source: { label: "US EPA: Triclosan", url: "https://www.epa.gov/ingredients-used-pesticide-products/triclosan" }
        },
        {
          text: "Triclosan is undergoing EPA registration review, which will consider data on endocrine effects, developmental and reproductive toxicity, chronic toxicity, and carcinogenicity.",
          source: { label: "US EPA: Triclosan", url: "https://www.epa.gov/ingredients-used-pesticide-products/triclosan" }
        }
      ],
      us_status: "Removed from OTC consumer antiseptic washes by FDA final rule; still permitted in other product types.",
      eu_status: "Not covered in Phase 1 sources.",
      ca_status: "Not covered in Phase 1 sources."
    },
    {
      name: "Triclocarban",
      id: "triclocarban",
      aliases: ["TCC"],
      found_in: ["antibacterial bar soap"],
      what_it_is: "Triclosan\u2019s partner in antibacterial bar soaps. It was swept up in the same FDA action that removed 19 antiseptic ingredients from consumer wash products.",
      facts: [
        {
          text: "Triclocarban was one of 19 active ingredients \u2014 with triclosan the most commonly used \u2014 that FDA\u2019s final rule found not generally recognized as safe and effective (GRAS/GRAE) in OTC consumer antiseptic wash products.",
          source: { label: "FDA Final Rule (Federal Register)", url: "https://s3.amazonaws.com/public-inspection.federalregister.gov/2016-21337.pdf" }
        },
        {
          text: "Manufacturers failed to demonstrate the 19 ingredients were safe for long-term daily use and more effective than plain soap and water in preventing illness and the spread of infection.",
          source: { label: "US EPA: Triclosan", url: "https://www.epa.gov/ingredients-used-pesticide-products/triclosan" }
        },
        {
          text: "The rule covers consumer washes intended for use with water and rinsed off after use. It does not affect hand sanitizers, wipes, or antibacterial products used in healthcare settings.",
          source: { label: "US EPA: Triclosan", url: "https://www.epa.gov/ingredients-used-pesticide-products/triclosan" }
        }
      ],
      us_status: "Removed from OTC consumer antiseptic washes by FDA final rule (with triclosan).",
      eu_status: "Not covered in Phase 1 sources.",
      ca_status: "Not covered in Phase 1 sources."
    },
    {
      name: "Methylisothiazolinone (MI)",
      id: "methylisothiazolinone",
      aliases: ["MI", "MIT", "2-methyl-4-isothiazolin-3-one"],
      found_in: ["dish soap", "laundry detergent", "all-purpose cleaners", "water-based paints", "cleaning wipes"],
      what_it_is: "A powerful preservative that kills bacteria, fungi, and algae in water-based products \u2014 from dish soap to wall paint. It is also one of the most documented causes of contact allergy from household products.",
      facts: [
        {
          text: "Isothiazolinone derivatives (MCI, MI, BIT, OIT) are widely used in non-cosmetic products \u2014 including household detergents, dish-washing and washing-machine liquids, and multi-purpose household detergents \u2014 for their strong bactericide, fungicide, and algicide properties.",
          source: { label: "PubMed 28174143 (Aerts et al., 2017)", url: "https://pubmed.ncbi.nlm.nih.gov/28174143/" }
        },
        {
          text: "Their inherent sensitization potential ranks MCI > MI > BIT > OIT, and \u201callergic contact dermatitis is frequently observed, both in consumers as well as workers in various industries.\u201d",
          source: { label: "PubMed 28174143 (Aerts et al., 2017)", url: "https://pubmed.ncbi.nlm.nih.gov/28174143/" }
        },
        {
          text: "The presence of isothiazolinones in multi-purpose household detergents \u201cmay elicit (airborne) allergic contact dermatitis.\u201d",
          source: { label: "PubMed 28174143 (Aerts et al., 2017)", url: "https://pubmed.ncbi.nlm.nih.gov/28174143/" }
        }
      ],
      us_status: "No federal ban found in Phase 1 sources.",
      eu_status: "Not covered in Phase 1 sources.",
      ca_status: "Not covered in Phase 1 sources."
    },
    {
      name: "Benzisothiazolinone (BIT)",
      id: "benzisothiazolinone",
      aliases: ["BIT", "1,2-benzisothiazolin-3-one"],
      found_in: ["all-purpose cleaners", "laundry detergent", "water-based paints"],
      what_it_is: "A cousin of MI in the isothiazolinone preservative family. It is considered a weaker sensitizer than MI \u2014 but it still causes allergic contact dermatitis in consumers and workers.",
      facts: [
        {
          text: "BIT is an isothiazolinone derivative used in household detergents and water-based paints for its bactericide, fungicide, and algicide properties.",
          source: { label: "PubMed 28174143 (Aerts et al., 2017)", url: "https://pubmed.ncbi.nlm.nih.gov/28174143/" }
        },
        {
          text: "Sensitization potential across the family ranks MCI > MI > BIT > OIT \u2014 BIT is weaker than MI and MCI but remains a documented sensitizer.",
          source: { label: "PubMed 28174143 (Aerts et al., 2017)", url: "https://pubmed.ncbi.nlm.nih.gov/28174143/" }
        },
        {
          text: "\u201cAllergic contact dermatitis is frequently observed, both in consumers as well as workers,\u201d from isothiazolinone derivatives including BIT.",
          source: { label: "PubMed 28174143 (Aerts et al., 2017)", url: "https://pubmed.ncbi.nlm.nih.gov/28174143/" }
        }
      ],
      us_status: "No federal ban found in Phase 1 sources.",
      eu_status: "Not covered in Phase 1 sources.",
      ca_status: "Not covered in Phase 1 sources."
    },
{
    name: "Sodium lauryl sulfate",
    id: "sodium-lauryl-sulfate",
    aliases: ["SLS", "sodium dodecyl sulfate", "sodium dodecyl sulphate", "SDS"],
    found_in: ["laundry detergent", "dishwasher detergent", "all-purpose spray cleaner", "shampoo"],
    what_it_is: "An anionic (foam-making) surfactant, also called sodium dodecyl sulfate (CAS 151-21-3). It is made by reacting lauryl alcohol from petroleum or plant sources with sulfur trioxide, then neutralizing with sodium carbonate.",
    facts: [
      {
        text: "The review reports SLS is used at 1-30% in cleaning products (laundry detergents, spray cleaners, dishwasher detergents) and 0.01-50% in cosmetics.",
        source: { label: "Bondi et al. 2015, PMC (NLM)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4651417/" }
      },
      {
        text: "The acute oral LD50 of SLS in rats is reported as 600-1,288 mg/kg; in human patch tests, concentrations above 2% are considered irritating to normal skin, and irritation increases with concentration and duration of contact.",
        source: { label: "Bondi et al. 2015, PMC (NLM)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4651417/" }
      },
      {
        text: "CIR's review, as summarized, found that most SLS applied to skin remains in or on the skin surface; the absorbed portion is metabolized by the liver into more water-soluble metabolites and excreted in urine, feces, and sometimes expired breath, with no evidence of accumulation in vital organs.",
        source: { label: "Bondi et al. 2015, PMC (NLM)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4651417/" }
      },
      {
        text: "SLS is not listed as a carcinogen by IARC, the NTP, California Proposition 65, the EPA, or the EU; NLM's TOXNET did not classify it as a known or suspected mutagen, reproductive or developmental toxicant, neurotoxicant, or endocrine disruptor.",
        source: { label: "Bondi et al. 2015, PMC (NLM)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4651417/" }
      },
      {
        text: "Over 99% of SLS biodegrades per the OECD 301 standard, with a reported bioconcentration factor of 2.1-7.1.",
        source: { label: "Bondi et al. 2015, PMC (NLM)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4651417/" }
      }
    ],
    us_status: "FDA lists SLS as a multipurpose food additive permitted for direct and indirect addition to food; not listed as a carcinogen by EPA, NTP, or California Proposition 65 (per Bondi et al. 2015 review).",
    eu_status: "Not listed as a carcinogen by the EU (per Bondi et al. 2015 review).",
    ca_status: "Not on California's Proposition 65 list of carcinogens (per Bondi et al. 2015 review)."
  },
  {
    name: "Sodium laureth sulfate",
    id: "sodium-laureth-sulfate",
    aliases: ["SLES", "sodium laureth sulphate", "sodium lauryl ether sulfate", "sodium lauryl ether sulphate"],
    found_in: ["shampoo", "laundry detergent", "dish soap", "all-purpose cleaner"],
    what_it_is: "An anionic surfactant made by ethoxylation (adding ethylene oxide units) of lauryl alcohol followed by sulfation; CIR describes it as a salt of sulfated ethoxylated alcohols. It is the ethoxylated counterpart of SLS, used for foam and cleaning.",
    facts: [
      {
        text: "CIR's 2010 assessment (Robinson et al.) describes sodium laureth sulfate as a member of a group of salts of sulfated ethoxylated alcohols; sodium and ammonium laureth sulfate did not evoke adverse responses in toxicological testing, but SLES was shown to be a dermal and ocular irritant (not a sensitizer), and the Panel noted data gaps on use and concentration.",
        source: { label: "CIR 2010 report abstract, PubMed (NLM)", url: "https://pubmed.ncbi.nlm.nih.gov/20634505/" }
      },
      {
        text: "NTP's Report on Carcinogens profile states that 1,4-dioxane may be formed as a byproduct of ethylene-oxide condensation reactions during the manufacture of detergents, shampoos, and surfactants, and that the general population could be exposed through residues in these products.",
        source: { label: "NTP Report on Carcinogens, 1,4-Dioxane profile", url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/Dioxane.pdf" }
      },
      {
        text: "NTP lists 1,4-dioxane as 'reasonably anticipated to be a human carcinogen' based on sufficient evidence of carcinogenicity from studies in experimental animals.",
        source: { label: "NTP Report on Carcinogens, 1,4-Dioxane profile", url: "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/Dioxane.pdf" }
      },
      {
        text: "An NLM-hosted review states the potential for SLES (sodium lauryl ether sulfate) to be contaminated with 1,4-dioxane during the ethoxylation process is well established, while non-ethoxylated surfactants such as SLS do not share the same contamination risk barring cross-contamination during manufacturing.",
        source: { label: "Bondi et al. 2015, PMC (NLM)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4651417/" }
      }
    ],
    us_status: "Not covered in Phase 2 sources.",
    eu_status: "Not covered in Phase 2 sources.",
    ca_status: "Not covered in Phase 2 sources."
  },
  {
    name: "Cocamide DEA",
    id: "cocamide-dea",
    aliases: ["cocamide diethanolamine", "coconut oil diethanolamine condensate", "coconut oil acid diethanolamine condensate"],
    found_in: ["shampoo", "hand soap", "dish soap"],
    what_it_is: "A foaming-agent surfactant made by reacting the fatty acids of coconut oil with diethanolamine; also called coconut oil diethanolamine condensate (CAS 68603-42-9). NTP describes it as a mixture of fatty acid diethanolamides of the acids found in coconut oil.",
    facts: [
      {
        text: "NTP describes coconut oil acid diethanolamine condensate as a mixture of fatty acid diethanolamides of the acids found in coconut oil, widely used in cosmetics, shampoos, soaps, and related consumer products.",
        source: { label: "NTP TR-479 abstract", url: "https://ntp.niehs.nih.gov/go/tr479abs" }
      },
      {
        text: "In NTP's 2-year dermal studies (TR-479), there was no evidence of carcinogenic activity in male rats, equivocal evidence in female rats (marginal increase in renal tubule neoplasms), and clear evidence in male mice (hepatic and renal tubule neoplasms) and female mice (hepatic neoplasms); NTP noted the increases were associated with the concentration of free diethanolamine present as a contaminant in the condensate.",
        source: { label: "NTP TR-479 abstract", url: "https://ntp.niehs.nih.gov/go/tr479abs" }
      },
      {
        text: "NTP's genetic toxicology testing of the condensate was negative in vitro (Salmonella, mouse lymphoma cells, Chinese hamster ovary cells) but positive in the peripheral-blood micronucleus test in male and female mice.",
        source: { label: "NTP TR-479 abstract", url: "https://ntp.niehs.nih.gov/go/tr479abs" }
      },
      {
        text: "IARC classified coconut oil diethanolamine condensate as Group 2B ('possibly carcinogenic to humans') with sufficient evidence of carcinogenicity in experimental animals; OEHHA cites this classification as the basis for adding it to the Proposition 65 list effective June 22, 2012.",
        source: { label: "OEHHA Proposition 65 listing notice", url: "https://oehha.ca.gov/proposition-65/crnr/benzophenone-coconut-oil-diethanolamine-condensate-cocamide-diethanolamine-diethanolamine-and-2" }
      }
    ],
    us_status: "Not covered in Phase 2 sources.",
    eu_status: "Not covered in Phase 2 sources.",
    ca_status: "Listed under California Proposition 65 as known to the State to cause cancer, effective June 22, 2012 (OEHHA)."
  },
  {
    name: "DEA / MEA / TEA",
    id: "dea-mea-tea",
    aliases: ["diethanolamine", "DEA", "monoethanolamine", "MEA", "ethanolamine", "triethanolamine", "TEA", "trolamine"],
    found_in: ["laundry detergent", "dish soap", "shampoo", "household polish"],
    what_it_is: "Three related alkanolamine chemicals - diethanolamine (DEA), monoethanolamine (MEA), and triethanolamine (TEA) - used as surfactant building blocks, emulsifiers, and pH adjusters. DEA is used to make the diethanolamide surfactants formulated into soaps and detergents.",
    facts: [
      {
        text: "In NTP's 2-year dermal studies of diethanolamine (TR-478), there was no evidence of carcinogenic activity in male or female rats and clear evidence in male and female mice (increased liver neoplasms in both sexes; renal tubule neoplasms in males); all genetic toxicology assays (Salmonella, mouse lymphoma, CHO cells, mouse micronucleus) were negative.",
        source: { label: "NTP TR-478 abstract", url: "https://ntp.niehs.nih.gov/go/tr478abs" }
      },
      {
        text: "NTP reports diethanolamine is used to make diethanolamides and diethanolamine salts of long-chain fatty acids formulated into soaps and surfactants in liquid laundry and dishwashing detergents, cosmetics, shampoos, and hair conditioners.",
        source: { label: "NTP TR-478 abstract", url: "https://ntp.niehs.nih.gov/go/tr478abs" }
      },
      {
        text: "IARC classified diethanolamine as Group 2B ('possibly carcinogenic to humans') with sufficient evidence of carcinogenicity in experimental animals; OEHHA cites this as the basis for adding diethanolamine to the Proposition 65 list effective June 22, 2012.",
        source: { label: "OEHHA Proposition 65 listing notice", url: "https://oehha.ca.gov/proposition-65/crnr/benzophenone-coconut-oil-diethanolamine-condensate-cocamide-diethanolamine-diethanolamine-and-2" }
      },
      {
        text: "In NTP's 2-year dermal study of triethanolamine in mice (TR-518, 2004), NTP concluded it caused liver tumors in female mice and may have caused a slight increase in liver hemangiosarcomas in males; triethanolamine was not mutagenic in the in vitro or in vivo tests performed.",
        source: { label: "NTP TR-518 full report (PDF)", url: "http://ntp.niehs.nih.gov/ntp/htdocs/lt_rpts/TR518.pdf" }
      },
      {
        text: "CIR's original 1983 safety assessment covered monoethanolamine (now called ethanolamine), diethanolamine, and triethanolamine together; in 2010 the CIR Expert Panel began re-reviewing that assessment as three separate ingredient reports.",
        source: { label: "CIR Expert Panel meeting memo, Dec 2010", url: "https://www.cir-safety.org/sites/default/files/117_Buff1.pdf" }
      }
    ],
    us_status: "Not covered in Phase 2 sources.",
    eu_status: "Not covered in Phase 2 sources.",
    ca_status: "Diethanolamine listed under California Proposition 65 as known to the State to cause cancer, effective June 22, 2012 (OEHHA)."
  },
{
    name: "DMDM hydantoin",
    id: "dmdm-hydantoin",
    aliases: ["1,3-dimethylol-5,5-dimethylhydantoin", "dimethyloldimethyl hydantoin", "Glydant"],
    found_in: ["shampoo", "hair conditioner", "body wash", "liquid hand soap", "moisturizing lotion"],
    what_it_is: "An antimicrobial preservative used in water-based cosmetics and personal care products. It belongs to the formaldehyde-releasing preservatives: it works by slowly releasing formaldehyde in the product over its shelf life.",
    facts: [
      {
        text: "A NIOSH/CDC study (Ham et al., 2019) lists 1,3-dimethylol-5,5-dimethylhydantoin (DMDM hydantoin) as one of the common formaldehyde-releasing agents found in consumer products.",
        source: { label: "CDC Stacks (NIOSH/CDC manuscript)", url: "https://stacks.cdc.gov/view/cdc/76180/cdc_76180_DS1.pdf?" }
      },
      {
        text: "The same study reports that the rate of decomposition to release formaldehyde is dependent on the chemical species, the product matrix, pH, temperature and time.",
        source: { label: "CDC Stacks (NIOSH/CDC manuscript)", url: "https://stacks.cdc.gov/view/cdc/76180/cdc_76180_DS1.pdf?" }
      },
      {
        text: "A laboratory study of eight preservatives (Lv et al., Int J Cosmet Sci, 2015) found formaldehyde release ranked paraformaldehyde > diazolidinyl urea > DMDM hydantoin ≈ quaternium-15 ≈ imidazolidinyl urea > methenamine > bronopol > PTSAF, and that release depended on the matrix, pH, storage time and mainly temperature.",
        source: { label: "PubMed 25704726", url: "https://pubmed.ncbi.nlm.nih.gov/25704726/" }
      },
      {
        text: "A survey of 89 cosmetic products (Doi et al., J Health Sci, 2010) detected formaldehyde in all products tested; products declared to contain dimethyloldimethyl hydantoin and diazolidinyl urea had significantly higher formaldehyde concentrations than products declared to contain imidazolidinyl urea and bronopol.",
        source: { label: "J-STAGE (J Health Sci)", url: "https://www.jstage.jst.go.jp/article/jhs/56/1/56_1_116/_article/-char/en" }
      },
      {
        text: "In a 2019 survey of 283 cosmetic products in Italy (Panico et al.), DMDM hydantoin was listed on 16 products (8.4%), mostly rinse-off products, and was the most common formaldehyde-releaser found (53.6% of releaser listings).",
        source: { label: "PMC6477564", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6477564/" }
      }
    ],
    us_status: "Not covered in Phase 2 sources.",
    eu_status: "Not covered in Phase 2 sources.",
    ca_status: "Formaldehyde (gas) is listed under California Proposition 65 as causing cancer (OEHHA; date of listing 01/01/1988; No Significant Risk Level 40 µg/day)."
  },
  {
    name: "Quaternium-15",
    id: "quaternium-15",
    aliases: ["methenamine 3-chloroallylochloride", "cis-1-(3-chloroallyl)-3,5,7-triaza-1-azoniaadamantane chloride", "Dowicil 200"],
    found_in: ["shampoo", "hair conditioner", "body lotion", "body wash", "sunscreen"],
    what_it_is: "A preservative and antistatic agent (a quaternary ammonium salt) used in cosmetics. The EU Scientific Committee on Consumer Safety describes it as known to be a formaldehyde releaser.",
    facts: [
      {
        text: "The SCCS opinion on quaternium-15 (SCCS/1344/10, 2011) states that CTAC is known to be a formaldehyde releaser and that a consumer product containing it may also contain free formaldehyde; at the time it was used as a preservative in rinse-off and leave-on products (including shampoo, hair conditioner, body lotion, shower products, sunscreen and baby products) at up to 0.2% under then-current EU legislation.",
        source: { label: "EC SCCS opinion SCCS/1344/10", url: "https://ec.europa.eu/health/scientific_committees/consumer_safety/docs/sccs_o_077.pdf" }
      },
      {
        text: "The same SCCS opinion notes the cis-isomer is classified as a CMR substance (toxic to reproduction, category 2, GHS); the SCCS could not assess safety at up to 0.2% because dermal absorption values were not reliable and a NOAEL could not be established, and stated that continued use 'may not be safe'.",
        source: { label: "EC SCCS opinion SCCS/1344/10", url: "https://ec.europa.eu/health/scientific_committees/consumer_safety/docs/sccs_o_077.pdf" }
      },
      {
        text: "A retrospective analysis of 1905 patch-tested patients (Odhav and Belsito, Dermatitis, 2012) found 9.5% reacted to quaternium-15, 7.2% to formaldehyde and 5.4% to both; the relationship between reactivity to the two was statistically significant, but the severity of the formaldehyde reaction did not predict quaternium-15 reactivity. The authors concluded quaternium-15 may not be a significant formaldehyde releaser and that the coreactivity requires further study.",
        source: { label: "Dermatitis (LiebertPub)", url: "https://www.liebertpub.com/doi/10.1097/DER.0b013e31823d1785" }
      },
      {
        text: "A laboratory study of eight preservatives (Lv et al., Int J Cosmet Sci, 2015) found formaldehyde release from quaternium-15 was approximately equal to DMDM hydantoin and imidazolidinyl urea, and lower than diazolidinyl urea and paraformaldehyde.",
        source: { label: "PubMed 25704726", url: "https://pubmed.ncbi.nlm.nih.gov/25704726/" }
      }
    ],
    us_status: "Not covered in Phase 2 sources.",
    eu_status: "Commission Regulation (EU) 2019/831: quaternium-15 was deleted from the Annex V list of preservatives allowed in cosmetic products (where it had been allowed up to 0.2%) and added to the Annex II list of substances prohibited in cosmetic products, following the CMR category 2 classification of the cis-isomer and the 2011 SCCS opinion.",
    ca_status: "Formaldehyde (gas) is listed under California Proposition 65 as causing cancer (OEHHA; date of listing 01/01/1988; No Significant Risk Level 40 µg/day)."
  },
  {
    name: "Bronopol",
    id: "bronopol",
    aliases: ["2-bromo-2-nitropropane-1,3-diol"],
    found_in: ["shampoo", "body wash", "hair conditioner", "moisturizing lotion"],
    what_it_is: "A broad-spectrum antimicrobial preservative used in cosmetics and personal care products. The SCCS describes it as a preservative permitted in cosmetics that decomposes into nitrosating agent(s) and formaldehyde.",
    facts: [
      {
        text: "A laboratory study of eight preservatives (Lv et al., Int J Cosmet Sci, 2015) found bronopol released the least formaldehyde of the group tested (only PTSAF released less), and that release depended on the matrix, pH, storage time and mainly temperature.",
        source: { label: "PubMed 25704726", url: "https://pubmed.ncbi.nlm.nih.gov/25704726/" }
      },
      {
        text: "The SCCS opinion on nitrosamines in cosmetic products (SCCS/1458/11, 2012) states bronopol is permitted for use in cosmetics and was found to be an effective nitrosating agent: in aqueous alkaline solution, diethanolamine and triethanolamine yielded NDELA in substantial amounts after prolonged storage in the presence of bronopol.",
        source: { label: "EC SCCS opinion SCCS/1458/11", url: "https://ec.europa.eu/health/scientific_committees/consumer_safety/docs/sccs_o_090.pdf" }
      },
      {
        text: "The same SCCS opinion reports that bronopol decomposes into nitrosating agent(s) and formaldehyde, which may enhance nitrosamine formation through the catalytic effect of formaldehyde, and states that co-formulation of bronopol with compounds having a nitrosatable nitrogen is to be avoided.",
        source: { label: "EC SCCS opinion SCCS/1458/11", url: "https://ec.europa.eu/health/scientific_committees/consumer_safety/docs/sccs_o_090.pdf" }
      },
      {
        text: "A survey of 89 cosmetic products (Doi et al., J Health Sci, 2010) found formaldehyde concentrations in products declared to contain bronopol were significantly lower than in products declared to contain dimethyloldimethyl hydantoin and diazolidinyl urea.",
        source: { label: "J-STAGE (J Health Sci)", url: "https://www.jstage.jst.go.jp/article/jhs/56/1/56_1_116/_article/-char/en" }
      }
    ],
    us_status: "Not covered in Phase 2 sources.",
    eu_status: "The SCCS nitrosamines opinion (2012) notes bronopol is permitted for use in cosmetics; no opened Phase 2 source stated a numeric EU concentration limit.",
    ca_status: "Formaldehyde (gas) is listed under California Proposition 65 as causing cancer (OEHHA; date of listing 01/01/1988; No Significant Risk Level 40 µg/day)."
  },
  {
    name: "Imidazolidinyl urea",
    id: "imidazolidinyl-urea",
    aliases: ["Germall 115"],
    found_in: ["shampoo", "body wash", "moisturizing lotion", "hair conditioner"],
    what_it_is: "An antimicrobial preservative used in cosmetics, chemically related to diazolidinyl urea. A NIOSH/CDC study lists it among the common formaldehyde-releasing agents.",
    facts: [
      {
        text: "A NIOSH/CDC study (Ham et al., 2019) lists imidazolidinyl urea as one of the common formaldehyde-releasing agents found in consumer products, and reports that the rate of decomposition to release formaldehyde depends on the chemical species, matrix, pH, temperature and time.",
        source: { label: "CDC Stacks (NIOSH/CDC manuscript)", url: "https://stacks.cdc.gov/view/cdc/76180/cdc_76180_DS1.pdf?" }
      },
      {
        text: "A laboratory study of eight preservatives (Lv et al., Int J Cosmet Sci, 2015) found formaldehyde release from imidazolidinyl urea was approximately equal to DMDM hydantoin and quaternium-15, and lower than diazolidinyl urea and paraformaldehyde.",
        source: { label: "PubMed 25704726", url: "https://pubmed.ncbi.nlm.nih.gov/25704726/" }
      },
      {
        text: "A survey of 89 cosmetic products (Doi et al., J Health Sci, 2010) found formaldehyde concentrations in products declared to contain imidazolidinyl urea were significantly lower than in products declared to contain dimethyloldimethyl hydantoin and diazolidinyl urea.",
        source: { label: "J-STAGE (J Health Sci)", url: "https://www.jstage.jst.go.jp/article/jhs/56/1/56_1_116/_article/-char/en" }
      },
      {
        text: "In a 2019 survey of 283 cosmetic products in Italy (Panico et al.), imidazolidinyl urea was listed on 11 products (5.8%), across rinse-off, leave-on and make-up categories, and was the second most common formaldehyde-releaser found (39.3% of releaser listings).",
        source: { label: "PMC6477564", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6477564/" }
      }
    ],
    us_status: "Not covered in Phase 2 sources.",
    eu_status: "Not covered in Phase 2 sources.",
    ca_status: "Formaldehyde (gas) is listed under California Proposition 65 as causing cancer (OEHHA; date of listing 01/01/1988; No Significant Risk Level 40 µg/day)."
  },
  {
    name: "Diazolidinyl urea",
    id: "diazolidinyl-urea",
    aliases: ["Germall II"],
    found_in: ["shampoo", "moisturizing lotion", "body wash", "hair conditioner"],
    what_it_is: "A heterocyclic-substituted urea used as a preservative in a variety of cosmetic products. The CIR 1990 safety assessment notes it is a formaldehyde releaser.",
    facts: [
      {
        text: "The CIR Final Report on the Safety Assessment of Diazolidinyl Urea (1990) notes it is a formaldehyde releaser, used in cosmetics at normal product concentrations of 0.2 to 0.4%, up to a maximum of 1.0%, and concludes it may be used at the minimum effective concentration, not to exceed 0.5%.",
        source: { label: "CIR final report (SagePub)", url: "https://journals.sagepub.com/doi/10.3109/10915819009078735" }
      },
      {
        text: "The same CIR report records that diazolidinyl urea was slightly toxic to rats in acute oral studies but relatively non-toxic in subchronic studies; it was a mild sensitizer in guinea pigs in three maximization studies but not a sensitizer in a fourth non-maximization study; and it was nonmutagenic in the Ames test and the micronucleus assay.",
        source: { label: "CIR final report (SagePub)", url: "https://journals.sagepub.com/doi/10.3109/10915819009078735" }
      },
      {
        text: "The same CIR report records human-study findings: at concentrations up to 0.4% it was a mild cumulative skin irritant in humans, and 57 of 2385 patients had allergic reactions to 1.0% diazolidinyl urea.",
        source: { label: "CIR final report (SagePub)", url: "https://journals.sagepub.com/doi/10.3109/10915819009078735" }
      },
      {
        text: "A laboratory study of eight preservatives (Lv et al., Int J Cosmet Sci, 2015) found diazolidinyl urea had the second-highest formaldehyde release of the group (after paraformaldehyde).",
        source: { label: "PubMed 25704726", url: "https://pubmed.ncbi.nlm.nih.gov/25704726/" }
      }
    ],
    us_status: "CIR is a US-based expert panel; its 1990 report concluded diazolidinyl urea may be used in cosmetics at the minimum effective concentration, not to exceed 0.5%.",
    eu_status: "Not covered in Phase 2 sources.",
    ca_status: "Formaldehyde (gas) is listed under California Proposition 65 as causing cancer (OEHHA; date of listing 01/01/1988; No Significant Risk Level 40 µg/day)."
  },
  {
    name: "Parabens",
    id: "parabens",
    aliases: ["methylparaben", "propylparaben", "butylparaben", "p-hydroxybenzoic acid esters"],
    found_in: ["face cream", "hand cream", "sunscreen", "lipstick", "body lotion"],
    what_it_is: "A group of p-hydroxybenzoic acid (PHBA) esters used as preservatives in cosmetics, foods and pharmaceuticals. The CIR-assessed group includes methyl-, ethyl-, propyl-, isopropyl-, butyl-, isobutyl- and benzylparaben.",
    facts: [
      {
        text: "The CIR Final Amended Report on parabens (2008) describes parabens as a group of PHBA esters used in over 22,000 cosmetics as preservatives at concentrations up to 0.8% (mixtures) or 0.4% (single paraben); they penetrate the stratum corneum in inverse relation to ester chain length, are hydrolyzed by carboxylesterases in skin, and do not accumulate in the body.",
        source: { label: "PubMed 19101832 (CIR report)", url: "https://pubmed.ncbi.nlm.nih.gov/19101832/" }
      },
      {
        text: "The same CIR report states the panel compared cosmetic-product exposures to a NOAEL of 1000 mg/kg/day from a study of butylparaben's effects on the male reproductive system, calculating margins of safety of approximately 6000 (infants, single paraben) to 840 (adults, multiple parabens), which the panel described as conservative.",
        source: { label: "PubMed 19101832 (CIR report)", url: "https://pubmed.ncbi.nlm.nih.gov/19101832/" }
      },
      {
        text: "Commission Regulation (EU) No 1004/2014 keeps methylparaben and ethylparaben allowed at 0.4% (single ester) / 0.8% (mixtures of esters), while butylparaben and propylparaben are limited to 0.14% (as acid) for the sum of individual concentrations and are prohibited in leave-on products designed for the nappy area of children under three years of age.",
        source: { label: "EU Regulation 1004/2014 (legislation.gov.uk)", url: "https://www.legislation.gov.uk/eur/2014/1004/2020-01-31" }
      },
      {
        text: "The same regulation records that isopropylparaben, isobutylparaben, phenylparaben, benzylparaben and pentylparaben were banned from cosmetic products by Commission Regulation (EU) No 358/2014.",
        source: { label: "EU Regulation 1004/2014 (legislation.gov.uk)", url: "https://www.legislation.gov.uk/eur/2014/1004/2020-01-31" }
      },
      {
        text: "In a 2019 survey of 283 cosmetic products in Italy (Panico et al.), methylparaben was the most detected paraben (15.2% of products) and was found in all products containing at least one paraben; propylparaben was found in 7.9% and butylparaben in 6 products (3.1%), with parabens mostly present in leave-on products (face and hand cream, sunscreen, aftershave).",
        source: { label: "PMC6477564", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6477564/" }
      }
    ],
    us_status: "CIR (a US-based expert panel) reviewed the paraben group in its 2008 amended report (see facts); no US regulatory (FDA) page was opened in Phase 2.",
    eu_status: "Regulation (EU) No 1004/2014: methyl- and ethylparaben allowed at 0.4% (single) / 0.8% (mixtures); butyl- and propylparaben limited to 0.14% (as acid) sum and prohibited in leave-on nappy-area products for children under three; isopropyl-, isobutyl-, phenyl-, benzyl- and pentylparaben banned by Regulation (EU) No 358/2014.",
    ca_status: "Not covered in Phase 2 sources."
  },
{
    name: "Fragrance (as a label term)",
    id: "fragrance-label-term",
    aliases: ["parfum", "aroma", "fragrance"],
    found_in: ["laundry detergent", "dish soap", "air fresheners", "all-purpose cleaners"],
    what_it_is: "On ingredient lists, the single word 'fragrance' (or 'parfum' / 'aroma') can stand in for an entire fragrance mixture, without naming the individual chemicals in it. This single-term listing is permitted under US federal law and under California law.",
    facts: [
      {
        text: "California's Cleaning Product Right to Know Act (SB 258) defines a 'fragrance ingredient' as any intentionally added substance or complex mixture of aroma chemicals, natural essential oils, and other functional ingredients whose sole purpose is to impart an odor or scent, or to counteract an odor.",
        source: { label: "California SB 258 bill text (leginfo)", url: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201720180SB258" }
      },
      {
        text: "Under the same law, a fragrance ingredient is treated as 'intentionally added', which includes the components of intentionally added fragrance ingredients — but manufacturers may still list fragrance ingredients on the product label under the single term 'fragrances' (and colorants as 'colorants').",
        source: { label: "California SB 258 bill text (leginfo)", url: "https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201720180SB258" }
      },
      {
        text: "The US EPA states that, unlike food products, manufacturers of chemical products are not required by law to list ingredients on their containers or make them public.",
        source: { label: "EPA Safer Choice FAQ", url: "https://www.epa.gov/saferchoice/frequently-asked-questions-safer-choice" }
      },
      {
        text: "EPA notes an exception it administers itself: products carrying the Safer Choice label must disclose all ingredients, including fragrances, either on the product or on an easy-access website, as a condition of the label.",
        source: { label: "EPA Safer Choice FAQ", url: "https://www.epa.gov/saferchoice/frequently-asked-questions-safer-choice" }
      },
      {
        text: "In the EU, Article 19(1)(g) of Regulation (EC) No 1223/2009 provides that perfume and aromatic compositions and their raw materials are referred to by the terms 'parfum' or 'aroma' in the list of ingredients, with substances required under the 'Other' column of Annex III indicated in addition to those terms.",
        source: { label: "EU Regulation 1223/2009, consolidated 2017 (EUR-Lex)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02009R1223-20171225" }
      }
    ],
    us_status: "Under US federal law, manufacturers of chemical products are not required to list ingredients on their containers or make them public (EPA Safer Choice FAQ).",
    eu_status: "EU Regulation (EC) No 1223/2009, Article 19(1)(g): perfume and aromatic compositions and their raw materials are referred to by the terms 'parfum' or 'aroma'; substances required under the 'Other' column of Annex III are indicated in the ingredient list in addition to those terms.",
    ca_status: "California SB 258 (Cleaning Product Right to Know Act, 2017) requires designated cleaning products sold in California to disclose on the label either designated-list ingredients plus EU Annex III fragrance allergens at or above 0.01%, or all intentionally added ingredients (unless confidential business information) — but it expressly permits fragrance ingredients to be listed as 'fragrances'."
  },
  {
    name: "The 26 EU fragrance allergens (group)",
    id: "eu-26-fragrance-allergens",
    aliases: ["EU 26", "26 fragrance allergens", "Annex III fragrance allergens"],
    found_in: ["perfumes and colognes", "scented lotions and creams", "laundry detergent", "fabric softeners", "air fresheners"],
    what_it_is: "A defined group of 26 fragrance substances — including limonene, linalool, geraniol, citronellol, eugenol, coumarin, citral, cinnamal, plus oak moss and tree moss extracts — that EU law requires to be named individually on cosmetic ingredient labels when present above set thresholds, instead of being covered by the single term 'parfum' or 'aroma.'",
    facts: [
      {
        text: "The 26 substances were introduced into Annex III of the EU Cosmetics Directive by the 7th amendment (Directive 2003/15/EC), on the basis of a 1999 SCCNFP opinion identifying fragrance allergens about which consumers should receive information; they sit at entries 67-92 of Annex III to Regulation (EC) No 1223/2009.",
        source: { label: "European Commission SCCS opinion summary", url: "https://ec.europa.eu/health/scientific_committees/opinions_layman/perfume-allergies/en/l-3/1-introduction.htm" }
      },
      {
        text: "The substances must be named in the ingredient list when their concentration exceeds 0.01% in rinse-off products or 0.001% in leave-on products; the Commission describes these limits as a pragmatic administrative decision taken when dose-response data were insufficient.",
        source: { label: "European Commission SCCS opinion summary", url: "https://ec.europa.eu/health/scientific_committees/opinions_layman/perfume-allergies/en/l-3/1-introduction.htm" }
      },
      {
        text: "The 'Other' column of Annex III entries 67-92 in the Regulation's consolidated text repeats the same rule per entry: the presence of the substance must be indicated in the ingredient list referred to in Article 19(1)(g) when its concentration exceeds 0.001% in leave-on products or 0.01% in rinse-off products.",
        source: { label: "EU Regulation 1223/2009, consolidated 2017 (EUR-Lex)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:02009R1223-20171225" }
      },
      {
        text: "Examples named in the SCCS documentation include amyl cinnamal, geraniol, citronellol, eugenol, coumarin, citral, cinnamal, limonene, linalool, farnesol, benzyl alcohol, benzyl benzoate, and the oak moss and tree moss extracts.",
        source: { label: "European Commission SCCS opinion summary", url: "https://ec.europa.eu/health/scientific_committees/opinions_layman/perfume-allergies/en/l-3/1-introduction.htm" }
      }
    ],
    us_status: "No US federal equivalent: the EPA notes chemical-product manufacturers are not required to list ingredients publicly, and the FDA cosmetics-labeling summary page returned HTTP 404 when checked.",
    eu_status: "Regulation (EC) No 1223/2009, Annex III, entries 67-92: each of the 26 fragrance allergens must be indicated in the ingredient list when its concentration exceeds 0.001% in leave-on products or 0.01% in rinse-off products.",
    ca_status: "California SB 258 requires designated cleaning products sold in California to list on the label each EU Annex III fragrance allergen (as required to be labeled by EU Detergents Regulation No 648/2004) present at a concentration at or above 0.01% (100 ppm)."
  },
{
    name: "Sodium tripolyphosphate",
    id: "sodium-tripolyphosphate",
    aliases: ["STPP"],
    found_in: ["laundry detergent", "dishwasher detergent"],
    what_it_is: "Sodium tripolyphosphate (STPP) is a phosphate salt used in laundry and dishwasher detergent formulations. Phosphates in consumer detergents have been restricted in the EU and are generally excluded from EPA-certified products for environmental reasons.",
    facts: [
      {
        text: "Regulation (EU) No 259/2012 bars consumer laundry detergents from the market if the total phosphorus content is 0.5 grams or more in the recommended quantity for a standard washing-machine load; the limitation applies from 30 June 2013.",
        source: { label: "Regulation (EU) No 259/2012, Annex VIa", url: "https://www.legislation.gov.uk/eur/2012/259/annexes/adopted?view=plain" }
      },
      {
        text: "The same regulation bars consumer automatic dishwasher detergents from the market if the total phosphorus content is 0.3 grams or more in the standard dosage; that limitation applies from 1 January 2017.",
        source: { label: "Regulation (EU) No 259/2012, Annex VIa", url: "https://www.legislation.gov.uk/eur/2012/259/annexes/adopted?view=plain" }
      },
      {
        text: "The regulation's recital states that phosphates in consumer laundry and dishwasher detergents were limited in order to reduce the contribution of phosphates from detergents to eutrophication risks and to reduce the cost of phosphate removal in wastewater treatment plants.",
        source: { label: "Regulation (EU) No 259/2012, recitals", url: "https://www.legislation.gov.uk/eur/2012/259/introduction/adopted/data.xht?view=snippet&wrap=true" }
      },
      {
        text: "EPA's Safer Choice standard states that, as a general rule, phosphates are not allowed in Safer Choice or DfE-certified products; the one exception is for oxidant stabilizers, at no more than 0.5% phosphorus in a certified product.",
        source: { label: "EPA Safer Choice Standard (FDLP archive)", url: "https://permanent.fdlp.gov/websites/www.epa.gov/2026/https@www.epa.gov/system/files/documents/2024-08/epas-safer-choice-and-design-for-the-environment-dfe-standard_0.pdf" }
      },
      {
        text: "In 1977, US House bill H.R.8521 (95th Congress) was introduced to direct the EPA Administrator to prohibit the sale of detergents containing excessive phosphorus in the Great Lakes region, with limits of 0.5% phosphorus for machine laundry detergents and household cleaning agents; the bill was referred to committee.",
        source: { label: "Congress.gov, H.R.8521", url: "https://www.congress.gov/bill/95th-congress/house-bill/8521" }
      }
    ],
    us_status: "No federal ban on phosphates in detergents is in force (H.R.8521 of 1977 was introduced, not enacted). EPA's Safer Choice program generally excludes phosphates from certified products, with a narrow exception for oxidant stabilizers at no more than 0.5% phosphorus.",
    eu_status: "Regulation (EU) No 259/2012 limits phosphorus in consumer laundry detergents (0.5 g per standard load, from 30 June 2013) and consumer automatic dishwasher detergents (0.3 g per standard dose, from 1 January 2017).",
    ca_status: "Not covered in Phase 2 sources."
  },
  {
    name: "Nonylphenol ethoxylates (NPEs)",
    id: "nonylphenol-ethoxylates",
    aliases: ["NPEs", "nonylphenol ethoxylates", "alkylphenol ethoxylates"],
    found_in: ["laundry detergent", "all-purpose cleaner"],
    what_it_is: "Nonylphenol ethoxylates (NPEs) are nonionic surfactants - detergent-like substances - used in industrial processes and in consumer products such as laundry detergents. In the environment they break down into nonylphenol (NP).",
    facts: [
      {
        text: "EPA states that NPEs are used in a wide variety of industrial applications and consumer products, and that many of these uses - such as laundry detergents - are 'down-the-drain' applications.",
        source: { label: "EPA: Risk Management for NP/NPEs", url: "https://www.epa.gov/assessing-and-managing-chemicals-under-tsca/risk-management-nonylphenol-and-nonylphenol-ethoxylates" }
      },
      {
        text: "EPA states that NPEs, though less toxic and persistent than nonylphenol, are also highly toxic to aquatic organisms and degrade into nonylphenol in the environment.",
        source: { label: "EPA: Risk Management for NP/NPEs", url: "https://www.epa.gov/assessing-and-managing-chemicals-under-tsca/risk-management-nonylphenol-and-nonylphenol-ethoxylates" }
      },
      {
        text: "EPA states that nonylphenol is persistent in the aquatic environment, moderately bioaccumulative, and extremely toxic to aquatic organisms, and has exhibited estrogenic properties in in vitro and in vivo assays.",
        source: { label: "EPA: Risk Management for NP/NPEs", url: "https://www.epa.gov/assessing-and-managing-chemicals-under-tsca/risk-management-nonylphenol-and-nonylphenol-ethoxylates" }
      },
      {
        text: "EPA states that nonylphenol has been detected in human breast milk, blood, and urine and is associated with reproductive and developmental effects in rodents.",
        source: { label: "EPA: Risk Management for NP/NPEs", url: "https://www.epa.gov/assessing-and-managing-chemicals-under-tsca/risk-management-nonylphenol-and-nonylphenol-ethoxylates" }
      },
      {
        text: "On September 25, 2014, EPA proposed a Significant New Use Rule under TSCA for 15 nonylphenols and nonylphenol ethoxylates, requiring at least 90 days notice to EPA before manufacture, import, or processing starts or resumes; the public comment period closed January 15, 2015.",
        source: { label: "EPA: Risk Management for NP/NPEs", url: "https://www.epa.gov/assessing-and-managing-chemicals-under-tsca/risk-management-nonylphenol-and-nonylphenol-ethoxylates" }
      }
    ],
    us_status: "EPA proposed a TSCA Significant New Use Rule for 15 NP/NPEs in September 2014 (comment period closed January 15, 2015), giving EPA the opportunity to review and limit new or resumed uses. EPA's 2012 Safer Choice alternatives assessment identified eight safer alternatives to NPEs.",
    eu_status: "Commission Regulation (EU) 2016/26 added entry 46a to REACH Annex XVII: nonylphenol ethoxylates at 0.01% by weight or more may not be placed on the market after 3 February 2021 in textile articles that can reasonably be expected to be washed in water during their normal lifecycle.",
    ca_status: "Not covered in Phase 2 sources."
  },
  {
    name: "Hydrochloric acid",
    id: "hydrochloric-acid",
    aliases: ["muriatic acid", "hydrogen chloride (gas form)"],
    found_in: ["toilet bowl cleaner", "descaler"],
    what_it_is: "Hydrochloric acid is the acidic solution formed when hydrogen chloride gas dissolves in water. Both the gas and the acid are corrosive.",
    facts: [
      {
        text: "ATSDR states that at room temperature hydrogen chloride is a colorless to slightly yellow, corrosive, nonflammable gas that is heavier than air and has a strong irritating odor, and that upon contact with water it forms hydrochloric acid.",
        source: { label: "ATSDR ToxFAQs: Hydrogen Chloride", url: "https://www.atsdr.cdc.gov/toxfaqs/tfacts173.pdf" }
      },
      {
        text: "ATSDR states that hydrogen chloride is irritating and corrosive to any tissue it contacts; brief exposure to low levels causes throat irritation, while higher levels can result in rapid breathing, narrowing of the bronchioles, fluid accumulation in the lungs, and even death.",
        source: { label: "ATSDR ToxFAQs: Hydrogen Chloride", url: "https://www.atsdr.cdc.gov/toxfaqs/tfacts173.pdf" }
      },
      {
        text: "ECHA's REACH registration dossier notes that studies with hydrogen chloride gas and with hydrochloric acid are mutually exchangeable for hazard identification, because the gas immediately dissociates to hydrochloric acid on contact with water, skin, mucous membranes, or biological media.",
        source: { label: "ECHA REACH dossier: Hydrogen chloride", url: "https://lexview-int.regione.fvg.it/serviziovia/documentazione/SCR1698/DOCUMENTAZIONE PROPONENTE/06_ALLEGATI VERVIA - VIS/VIS ALL 5 - BANCA DATI VIS/ECHA_HCL_TOX_HYDROGEN CHLORIDE - REGISTRATION DOSSIER.PDF" }
      },
      {
        text: "ECHA's dossier records that in a 128-week rat inhalation study at 10 ppm hydrogen chloride gas, no preneoplastic or neoplastic nasal lesions developed, and no evidence of treatment-related carcinogenicity was observed in animal studies by inhalation, oral, or dermal administration.",
        source: { label: "ECHA REACH dossier: Hydrogen chloride", url: "https://lexview-int.regione.fvg.it/serviziovia/documentazione/SCR1698/DOCUMENTAZIONE PROPONENTE/06_ALLEGATI VERVIA - VIS/VIS ALL 5 - BANCA DATI VIS/ECHA_HCL_TOX_HYDROGEN CHLORIDE - REGISTRATION DOSSIER.PDF" }
      },
      {
        text: "ATSDR reports that OSHA has set a ceiling limit of 5 parts of hydrogen chloride per million parts of air (5 ppm) in workplace air.",
        source: { label: "ATSDR ToxFAQs: Hydrogen Chloride", url: "https://www.atsdr.cdc.gov/toxfaqs/tfacts173.pdf" }
      }
    ],
    us_status: "OSHA sets a ceiling limit of 5 ppm for hydrogen chloride in workplace air. DHHS, IARC, and EPA have not classified hydrogen chloride as to its carcinogenicity; IARC considers hydrochloric acid not classifiable as to carcinogenicity to humans.",
    eu_status: "ECHA's REACH registration dossier records an EU indicative occupational exposure limit as the basis for worker DNELs for hydrogen chloride: 8 mg/m3 for long-term inhalation (8-hour TWA) and 15 mg/m3 for short-term inhalation (15-minute STEL).",
    ca_status: "Not covered in Phase 2 sources."
  },
  {
    name: "Sodium hydroxide",
    id: "sodium-hydroxide",
    aliases: ["lye", "caustic soda", "soda lye", "sodium hydrate"],
    found_in: ["drain cleaner", "oven cleaner"],
    what_it_is: "Sodium hydroxide (lye, caustic soda) is a colorless-to-white, odorless solid sold as flakes, beads, or granules. It is corrosive to tissue and to metals.",
    facts: [
      {
        text: "NIOSH lists exposure routes as inhalation, ingestion, and skin and/or eye contact, and lists symptoms including irritation of the eyes, skin, and mucous membrane, pneumonitis, eye and skin burns, and temporary loss of hair.",
        source: { label: "NIOSH Pocket Guide: Sodium hydroxide", url: "https://www.cdc.gov/NIOSH/npg/npgd0565.html" }
      },
      {
        text: "NIOSH lists a Recommended Exposure Limit of 2 mg/m3 as a ceiling, an OSHA Permissible Exposure Limit of 2 mg/m3 as an 8-hour TWA, and an IDLH value of 10 mg/m3 for sodium hydroxide.",
        source: { label: "NIOSH Pocket Guide: Sodium hydroxide", url: "https://www.cdc.gov/NIOSH/npg/npgd0565.html" }
      },
      {
        text: "NIOSH describes sodium hydroxide as a noncombustible solid that, when in contact with water, may generate sufficient heat to ignite combustible materials, and notes that it is corrosive to metals.",
        source: { label: "NIOSH Pocket Guide: Sodium hydroxide", url: "https://www.cdc.gov/NIOSH/npg/npgd0565.html" }
      },
      {
        text: "NIOSH lists incompatibilities and reactivities including water, acids, flammable liquids, organic halogens, nitromethane, and metals such as aluminum, tin, and zinc.",
        source: { label: "NIOSH Pocket Guide: Sodium hydroxide", url: "https://www.cdc.gov/NIOSH/npg/npgd0565.html" }
      }
    ],
    us_status: "OSHA PEL: 2 mg/m3 (8-hour TWA). NIOSH REL: 2 mg/m3 (ceiling). NIOSH IDLH: 10 mg/m3.",
    eu_status: "Not covered in Phase 2 sources.",
    ca_status: "Not covered in Phase 2 sources."
  },
  {
    name: "Naphtha / petroleum distillates",
    id: "naphtha-petroleum-distillates",
    aliases: ["Stoddard solvent", "mineral spirits", "white spirits", "petroleum solvent"],
    found_in: ["all-purpose cleaner", "furniture polish", "degreaser"],
    what_it_is: "Petroleum distillates - including naphtha, Stoddard solvent, mineral spirits, and white spirits - are kerosene-like mixtures of hydrocarbons used as solvents in cleaners, polishes, and degreasers.",
    facts: [
      {
        text: "ATSDR describes Stoddard solvent as a petroleum mixture also known as dry cleaning safety solvent, petroleum solvent, and varnoline (trade names Texsolve S and Varsol 1), similar to white spirits.",
        source: { label: "ATSDR ToxFAQs: Stoddard Solvent", url: "https://www.atsdr.cdc.gov/toxfaqs/tfacts79.pdf" }
      },
      {
        text: "ATSDR lists uses including paint thinner, some photocopier toners, printing inks, and adhesives, dry cleaning solvent, and general cleaner and degreaser.",
        source: { label: "ATSDR ToxFAQs: Stoddard Solvent", url: "https://www.atsdr.cdc.gov/toxfaqs/tfacts79.pdf" }
      },
      {
        text: "ATSDR describes Stoddard solvent as a colorless, flammable liquid that smells and tastes like kerosene and turns into vapor at temperatures of 150-200 C.",
        source: { label: "ATSDR ToxFAQs: Stoddard Solvent", url: "https://www.atsdr.cdc.gov/toxfaqs/tfacts79.pdf" }
      },
      {
        text: "ATSDR states that people who breathe Stoddard solvent can experience headaches, dizziness, and eye, skin, or throat irritation.",
        source: { label: "ATSDR ToxFAQs: Stoddard Solvent", url: "https://www.atsdr.cdc.gov/toxfaqs/tfacts79.pdf" }
      },
      {
        text: "ATSDR reports that OSHA has set a maximum exposure limit of 500 ppm for an 8-hour workday and 40-hour workweek, and that NIOSH recommends average workplace air levels not exceed 60 ppm over a 10-hour workday.",
        source: { label: "ATSDR ToxFAQs: Stoddard Solvent", url: "https://www.atsdr.cdc.gov/toxfaqs/tfacts79.pdf" }
      }
    ],
    us_status: "OSHA PEL for Stoddard solvent: 500 ppm (8-hour TWA). NIOSH REL: 60 ppm (10-hour TWA). IARC has determined that Stoddard solvent is not classifiable as to its carcinogenicity to humans.",
    eu_status: "Not covered in Phase 2 sources.",
    ca_status: "Not covered in Phase 2 sources."
  },
  {
    name: "Optical brighteners",
    id: "optical-brighteners",
    aliases: ["fluorescent whitening agents", "FWAs"],
    found_in: ["laundry detergent"],
    what_it_is: "Optical brighteners - also called fluorescent whitening agents (FWAs) - are complex organic molecules that stick to fabrics like dyes, absorb ultraviolet light, and re-emit it as visible blue light so fabrics look whiter and brighter.",
    facts: [
      {
        text: "EPA's Safer Choice standard defines a fluorescent whitening agent (optical brightener) as: 'Complex, organic molecules that adhere to fabrics as though they were dyes. Ultraviolet (UV) energy is absorbed, converted, and emitted as visible blue light to enhance fabric appearance and maintain whiteness or brightness.'",
        source: { label: "EPA Safer Choice Standard (FDLP archive)", url: "https://permanent.fdlp.gov/websites/www.epa.gov/2026/https@www.epa.gov/system/files/documents/2024-08/epas-safer-choice-and-design-for-the-environment-dfe-standard_0.pdf" }
      },
      {
        text: "EPA's Safer Choice standard states that colorants - including pigments and optical brighteners - include as part of their functionality the ability to resist degradation and be effective over long periods.",
        source: { label: "EPA Safer Choice Standard (FDLP archive)", url: "https://permanent.fdlp.gov/websites/www.epa.gov/2026/https@www.epa.gov/system/files/documents/2024-08/epas-safer-choice-and-design-for-the-environment-dfe-standard_0.pdf" }
      },
      {
        text: "EPA's Safer Choice standard states that colorants including optical brighteners can be complex molecules and mixtures and often lack measured toxicity data, and that EPA evaluates them using the Master Criteria toxicity thresholds for human-health and environmental endpoints.",
        source: { label: "EPA Safer Choice Standard (FDLP archive)", url: "https://permanent.fdlp.gov/websites/www.epa.gov/2026/https@www.epa.gov/system/files/documents/2024-08/epas-safer-choice-and-design-for-the-environment-dfe-standard_0.pdf" }
      }
    ],
    us_status: "EPA's Safer Choice program reviews optical brighteners as colorants under its Master Criteria toxicity thresholds for human-health and environmental endpoints.",
    eu_status: "Not covered in Phase 2 sources.",
    ca_status: "Not covered in Phase 2 sources."
  },
  {
    name: "EDTA (ethylenediaminetetraacetic acid)",
    id: "edta",
    aliases: ["ethylenediaminetetraacetic acid", "tetrasodium EDTA", "edetate sodium", "edetic acid"],
    found_in: ["laundry detergent", "all-purpose cleaner", "dishwasher detergent"],
    what_it_is: "EDTA (ethylenediaminetetraacetic acid) and its salts, such as tetrasodium EDTA, are chelating agents that bind metal ions.",
    facts: [
      {
        text: "EPA states: 'EDTA is a chelating agent. Its ability to bind heavy metal ions can be used to sequester these trace metals.'",
        source: { label: "EPA: EDTA tolerance reassessment (2004)", url: "https://www.epa.gov/sites/default/files/2015-04/documents/edta.pdf" }
      },
      {
        text: "EPA reports that detergent preparations are probably the predominant source of EDTA found in domestic sewage, contributing an estimated 100 parts per billion to EDTA in average sewage streams; measured sewage effluent concentrations ranged from 200 to 1200 ppb.",
        source: { label: "EPA: EDTA tolerance reassessment (2004)", url: "https://www.epa.gov/sites/default/files/2015-04/documents/edta.pdf" }
      },
      {
        text: "EPA states that when released to soil or water, EDTA is slow to degrade, with aerobic biodegradation (mineralization) the dominant mechanism, and extrapolates first-order aerobic soil metabolism half-lives of roughly 17 to 75 weeks (4 to 18 months).",
        source: { label: "EPA: EDTA tolerance reassessment (2004)", url: "https://www.epa.gov/sites/default/files/2015-04/documents/edta.pdf" }
      },
      {
        text: "EPA states that in water EDTA is not expected to sorb appreciably to sediments or suspended solids and is not retained or altered chemically in typical water treatment facilities; based on tests with bluegill sunfish and its physicochemical properties, EDTA is not expected to bioconcentrate.",
        source: { label: "EPA: EDTA tolerance reassessment (2004)", url: "https://www.epa.gov/sites/default/files/2015-04/documents/edta.pdf" }
      },
      {
        text: "EPA's review found EDTA ranges from practically non-toxic to moderately toxic on an acute basis depending on the salt, with algae the most sensitive species on a chronic basis.",
        source: { label: "EPA: EDTA tolerance reassessment (2004)", url: "https://www.epa.gov/sites/default/files/2015-04/documents/edta.pdf" }
      }
    ],
    us_status: "EPA reclassified EDTA and 24 of its salts as List 4B (inerts of minimal concern) and reassessed their tolerance exemptions under 40 CFR 180.1001(c). EPA's Safer Choice program maintains separate functional-class criteria for chelating and sequestering agents.",
    eu_status: "Not covered in Phase 2 sources.",
    ca_status: "Not covered in Phase 2 sources."
  }
  ]
};
