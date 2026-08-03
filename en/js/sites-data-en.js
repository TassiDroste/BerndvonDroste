/* ============================================================
   UNESCO World Heritage in Danger — Site Data (English)
   ------------------------------------------------------------
   Source: UNESCO World Heritage Centre (whc.unesco.org/en/danger/)
   As of July 2026 (48th session, Busan) — 58 sites (43 cultural / 15 natural)
   ------------------------------------------------------------
   Fields per site:
     name    — Official English name
     country — Country (main administration)
     type    — "cultural" | "natural"
     lat,lng — Approximate coordinates
     listed  — Year of inscription on the World Heritage List
     since   — Year added to the List of World Heritage in Danger
     threat  — Short description of the threat
   ============================================================ */

const sites = [
  // ── SYRIA (6) — Civil war ──────────────────────────────────
  { name: "Ancient City of Aleppo", country: "Syria", type: "cultural", lat: 36.1989, lng: 37.1620, since: 2013, listed: 1986, threat: "Syrian civil war; severe destruction, ongoing threat." },
  { name: "Ancient City of Damascus", country: "Syria", type: "cultural", lat: 33.5117, lng: 36.3066, since: 2013, listed: 1979, threat: "Syrian civil war; shelling and damage to historic buildings." },
  { name: "Ancient City of Bosra", country: "Syria", type: "cultural", lat: 32.5176, lng: 36.4815, since: 2013, listed: 1980, threat: "Syrian civil war." },
  { name: "Ancient Villages of Northern Syria", country: "Syria", type: "cultural", lat: 36.3344, lng: 36.8439, since: 2013, listed: 2011, threat: "Civil war; looting and destruction by armed groups." },
  { name: "Crac des Chevaliers & Qal'at Salah El‑Din", country: "Syria", type: "cultural", lat: 34.7567, lng: 36.2944, since: 2013, listed: 2006, threat: "Syrian civil war; damage during combat." },
  { name: "Site of Palmyra", country: "Syria", type: "cultural", lat: 34.5511, lng: 38.2683, since: 2013, listed: 1980, threat: "Severe destruction by Islamic State forces." },

  // ── LIBYA (4) ──────────────────────────────────────────────
  { name: "Archaeological Site of Cyrene", country: "Libya", type: "cultural", lat: 32.8228, lng: 21.8589, since: 2016, listed: 1982, threat: "Libyan civil war; armed groups in the area." },
  { name: "Archaeological Site of Leptis Magna", country: "Libya", type: "cultural", lat: 32.6386, lng: 14.2920, since: 2016, listed: 1982, threat: "Libyan civil war." },
  { name: "Archaeological Site of Sabratha", country: "Libya", type: "cultural", lat: 32.8054, lng: 12.4853, since: 2016, listed: 1982, threat: "Libyan civil war." },
  { name: "Rock-Art Sites of Tadrart Acacus", country: "Libya", type: "cultural", lat: 24.7794, lng: 10.4378, since: 2016, listed: 1985, threat: "Civil war; vandalism of prehistoric rock paintings." },

  // ── YEMEN (4) ──────────────────────────────────────────────
  { name: "Old City of Sana'a", country: "Yemen", type: "cultural", lat: 15.3556, lng: 44.2089, since: 2015, listed: 1986, threat: "Yemeni civil war." },
  { name: "Old Walled City of Shibam", country: "Yemen", type: "cultural", lat: 15.9272, lng: 48.6264, since: 2015, listed: 1982, threat: "Armed conflict; inadequate conservation." },
  { name: "Historic Town of Zabid", country: "Yemen", type: "cultural", lat: 14.1956, lng: 43.3258, since: 2000, listed: 1993, threat: "Deterioration of historic buildings." },
  { name: "Landmarks of the Ancient Kingdom of Saba, Marib", country: "Yemen", type: "cultural", lat: 15.4567, lng: 45.3261, since: 2023, listed: 2023, threat: "Threat of destruction from the Yemeni civil war." },

  // ── IRAQ (3) ───────────────────────────────────────────────
  { name: "Ashur (Qal'at Sherqat)", country: "Iraq", type: "cultural", lat: 35.4581, lng: 43.2606, since: 2003, listed: 2003, threat: "Security situation; planned reservoir (suspended)." },
  { name: "Hatra", country: "Iraq", type: "cultural", lat: 35.5786, lng: 42.7197, since: 2015, listed: 1985, threat: "Destruction by Islamic State forces." },
  { name: "Samarra Archaeological City", country: "Iraq", type: "cultural", lat: 34.1985, lng: 43.8742, since: 2007, listed: 2007, threat: "Aftermath of the Iraq War; insufficient state control." },

  // ── PALESTINE (4) ──────────────────────────────────────────
  { name: "Old Town of Hebron / Al‑Khalil", country: "Palestine", type: "cultural", lat: 31.5246, lng: 35.1106, since: 2017, listed: 2017, threat: "Conflict; structural deterioration." },
  { name: "Battir — Land of Olives and Vines", country: "Palestine", type: "cultural", lat: 31.7203, lng: 35.1378, since: 2014, listed: 2014, threat: "Israeli separation barrier; farmers cut off from their fields." },
  { name: "Saint Hilarion Monastery / Tell Umm Amer", country: "Palestine", type: "cultural", lat: 31.4467, lng: 34.3858, since: 2024, listed: 2024, threat: "Gaza war." },
  { name: "Sebastia", country: "Palestine", type: "cultural", lat: 32.2765, lng: 35.1897, since: 2026, listed: 2026, threat: "Armed conflict; planned expropriation that would divide the site (emergency procedure, 2026)." },

  // ── UKRAINE (4) — Russian war of aggression ────────────────
  { name: "Historic Centre of Odesa", country: "Ukraine", type: "cultural", lat: 46.4825, lng: 30.7233, since: 2023, listed: 2023, threat: "Russo-Ukrainian war." },
  { name: "Kyiv: Saint Sophia Cathedral & Kyiv Pechersk Lavra", country: "Ukraine", type: "cultural", lat: 50.4528, lng: 30.5147, since: 2023, listed: 1990, threat: "Russo-Ukrainian war." },
  { name: "L'viv — Ensemble of the Historic Centre", country: "Ukraine", type: "cultural", lat: 49.8419, lng: 24.0316, since: 2023, listed: 1998, threat: "Russo-Ukrainian war." },
  { name: "Ancient City of Tauric Chersonese and its Chora", country: "Ukraine", type: "cultural", lat: 44.6117, lng: 33.4931, since: 2026, listed: 2013, threat: "Unauthorised excavations and construction projects by the occupying authorities in Crimea." },

  // ── DR CONGO (4) — Natural heritage in conflict zones ──────
  { name: "Virunga National Park", country: "DR Congo", type: "natural", lat: -0.7500, lng: 29.2000, since: 1994, listed: 1979, threat: "Poaching, deforestation, consequences of civil war." },
  { name: "Garamba National Park", country: "DR Congo", type: "natural", lat: 4.0500, lng: 29.4500, since: 1996, listed: 1980, threat: "Poaching (ivory, rhinoceros)." },
  { name: "Kahuzi-Biega National Park", country: "DR Congo", type: "natural", lat: -2.3000, lng: 28.7500, since: 1997, listed: 1980, threat: "Deforestation, poaching, armed conflicts." },
  { name: "Okapi Wildlife Reserve", country: "DR Congo", type: "natural", lat: 1.7000, lng: 28.5000, since: 1997, listed: 1996, threat: "Looting, poaching, armed conflicts." },

  // ── MALI (3) ───────────────────────────────────────────────
  { name: "Timbuktu", country: "Mali", type: "cultural", lat: 16.7666, lng: -3.0026, since: 2012, listed: 1988, threat: "Threat from Islamist groups, AQIM and Ansar Dine." },
  { name: "Tomb of Askia", country: "Mali", type: "cultural", lat: 16.2900, lng: -0.0420, since: 2012, listed: 2004, threat: "Damage by Islamist groups." },
  { name: "Old Towns of Djenné", country: "Mali", type: "cultural", lat: 13.9050, lng: -4.5550, since: 2016, listed: 1988, threat: "Regional insecurity; decay; uncontrolled urbanisation." },

  // ── REST OF AFRICA (6) ─────────────────────────────────────
  { name: "Boma-Badingilo Migratory Landscape", country: "South Sudan", type: "natural", lat: 6.0000, lng: 33.0000, since: 2026, listed: 2026, threat: "Poaching plus infrastructure and oil projects threaten the largest land-mammal migration on Earth (emergency procedure, 2026)." },
  { name: "Mount Nimba Strict Nature Reserve", country: "Guinea / Côte d'Ivoire", type: "natural", lat: 7.5500, lng: -8.4500, since: 1992, listed: 1981, threat: "Iron ore mining; refugee influx." },
  { name: "Aïr and Ténéré Natural Reserves", country: "Niger", type: "natural", lat: 18.5000, lng: 8.5000, since: 1992, listed: 1991, threat: "Insurgency, unrest, decline of wildlife populations." },
  { name: "Manovo-Gounda St Floris National Park", country: "Central African Republic", type: "natural", lat: 8.6667, lng: 21.5000, since: 1997, listed: 1988, threat: "Illegal grazing, poaching, precarious security situation." },
  { name: "Selous Game Reserve", country: "Tanzania", type: "natural", lat: -9.0000, lng: 37.4000, since: 2014, listed: 1982, threat: "Mining, large infrastructure projects, poaching." },
  { name: "Lake Turkana National Parks", country: "Kenya", type: "natural", lat: 3.5000, lng: 36.1000, since: 2018, listed: 1997, threat: "Impact of the Gilgel Gibe III dam in Ethiopia on the ecosystem." },

  // ── AFGHANISTAN (2) ────────────────────────────────────────
  { name: "Cultural Landscape and Archaeological Remains of the Bamiyan Valley", country: "Afghanistan", type: "cultural", lat: 34.8500, lng: 67.8333, since: 2003, listed: 2003, threat: "Abandonment, military action, prior destruction of the Buddhas." },
  { name: "Minaret and Archaeological Remains of Jam", country: "Afghanistan", type: "cultural", lat: 34.3961, lng: 64.5158, since: 2002, listed: 2002, threat: "Lack of legal protection; poor state of conservation." },

  // ── AMERICAS & CARIBBEAN (8) ───────────────────────────────
  { name: "Historic Inner City of Paramaribo", country: "Suriname", type: "cultural", lat: 5.8232, lng: -55.1679, since: 2026, listed: 2002, threat: "New construction projects alter the historic urban landscape; decay of the wooden architecture." },
  { name: "City of Potosí", country: "Bolivia", type: "cultural", lat: -19.5836, lng: -65.7531, since: 2014, listed: 1987, threat: "Ongoing mining destabilises the Cerro Rico." },
  { name: "Coro and its Port", country: "Venezuela", type: "cultural", lat: 11.4022, lng: -69.6722, since: 2005, listed: 1993, threat: "Damage from heavy rains 2004/05; lack of conservation measures." },
  { name: "Chan Chan Archaeological Zone", country: "Peru", type: "cultural", lat: -8.1058, lng: -79.0758, since: 1986, listed: 1986, threat: "Natural erosion of the adobe architecture." },
  { name: "Fortifications of Portobelo-San Lorenzo", country: "Panama", type: "cultural", lat: 9.5530, lng: -79.6533, since: 2012, listed: 1980, threat: "Environmental factors; lack of maintenance; urban pressure." },
  { name: "Río Plátano Biosphere Reserve", country: "Honduras", type: "natural", lat: 15.7000, lng: -84.7000, since: 2011, listed: 1982, threat: "Illegal logging, poaching, land grabbing." },
  { name: "Islands and Protected Areas of the Gulf of California", country: "Mexico", type: "natural", lat: 28.5000, lng: -112.0000, since: 2019, listed: 2005, threat: "Imminent extinction of the vaquita porpoise." },
  { name: "Everglades National Park", country: "United States", type: "natural", lat: 25.4500, lng: -80.9000, since: 2010, listed: 1979, threat: "Water quality and flow; consequences of past hurricanes." },

  // ── ASIA & PACIFIC (4) ─────────────────────────────────────
  { name: "Historic Centre of Shakhrisyabz", country: "Uzbekistan", type: "cultural", lat: 39.0517, lng: 66.8358, since: 2016, listed: 2000, threat: "Destruction of medieval districts; continued construction." },
  { name: "Nan Madol — Ceremonial Centre of Eastern Micronesia", country: "Micronesia", type: "cultural", lat: 6.8417, lng: 158.3333, since: 2016, listed: 2016, threat: "Silting of channels; overgrowth of structures." },
  { name: "East Rennell", country: "Solomon Islands", type: "natural", lat: -11.6833, lng: 160.3167, since: 2013, listed: 1998, threat: "Impact of logging on the ecosystem." },
  { name: "Tropical Rainforest Heritage of Sumatra", country: "Indonesia", type: "natural", lat: 2.5000, lng: 99.5000, since: 2011, listed: 2004, threat: "Poaching, illegal logging, road building, agriculture." },

  // ── EUROPE & OTHER (5) ─────────────────────────────────────
  // Note: The Historic Centre of Vienna was removed from the Danger List at the
  //       48th session (Busan, July 2026) and therefore no longer appears on the map.
  { name: "Medieval Monuments in Kosovo", country: "Kosovo / Serbia", type: "cultural", lat: 42.6450, lng: 20.2872, since: 2006, listed: 2004, threat: "Lack of legal protection; political instability." },
  { name: "Roșia Montană Mining Landscape", country: "Romania", type: "cultural", lat: 46.3000, lng: 23.1300, since: 2021, listed: 2021, threat: "Plans to resume mining activities." },
  { name: "Rachid Karami International Fair-Tripoli", country: "Lebanon", type: "cultural", lat: 34.4361, lng: 35.8497, since: 2023, listed: 2023, threat: "Lebanese liquidity crisis; lack of funds for conservation." },
  { name: "Mount Amel Castles (Jabal Amel)", country: "Lebanon", type: "cultural", lat: 33.1917, lng: 35.4170, since: 2026, listed: 2026, threat: "Heavy damage from the armed conflict in southern Lebanon (emergency procedure, 2026)." },
  { name: "Tyre", country: "Lebanon", type: "cultural", lat: 33.2705, lng: 35.1963, since: 2026, listed: 1984, threat: "Direct war damage to the ancient Phoenician port in southern Lebanon." },

  // ── ISRAEL / JERUSALEM (1) ─────────────────────────────────
  { name: "Old City of Jerusalem and its Walls", country: "Jerusalem", type: "cultural", lat: 31.7767, lng: 35.2345, since: 1982, listed: 1981, threat: "Uncontrolled urban development; general deterioration." }
];
