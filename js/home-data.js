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
  count: 17,
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
    }
  ]
};
