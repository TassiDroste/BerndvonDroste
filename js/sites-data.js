/* ============================================================
   UNESCO World Heritage in Danger — Site Data
   ------------------------------------------------------------
   Source: UNESCO World Heritage Centre (whc.unesco.org/en/danger/)
   Stand: November 2025 — 53 Stätten (39 Kultur / 14 Natur)
   ------------------------------------------------------------
   Felder pro Stätte:
     name    — Deutscher Name der Stätte
     country — Land (Hauptverwaltung)
     type    — "cultural" | "natural"
     lat,lng — Approximate Koordinaten
     listed  — Jahr der Aufnahme ins UNESCO-Welterbe
     since   — Jahr der Aufnahme auf die Rote Liste
     threat  — Kurzbeschreibung der Bedrohungslage
   ============================================================ */

const sites = [
  // ── SYRIEN (6) — Bürgerkrieg ───────────────────────────────
  { name: "Altstadt von Aleppo", country: "Syrien", type: "cultural", lat: 36.1989, lng: 37.1620, since: 2013, listed: 1986, threat: "Syrischer Bürgerkrieg, schwere Zerstörungen, anhaltende Bedrohung." },
  { name: "Altstadt von Damaskus", country: "Syrien", type: "cultural", lat: 33.5117, lng: 36.3066, since: 2013, listed: 1979, threat: "Syrischer Bürgerkrieg; Beschuss und Beschädigung historischer Bausubstanz." },
  { name: "Altstadt von Bosra", country: "Syrien", type: "cultural", lat: 32.5176, lng: 36.4815, since: 2013, listed: 1980, threat: "Syrischer Bürgerkrieg." },
  { name: "Antike Dörfer Nordsyriens", country: "Syrien", type: "cultural", lat: 36.3344, lng: 36.8439, since: 2013, listed: 2011, threat: "Bürgerkrieg, Plünderungen und Zerstörungen durch militante Gruppen." },
  { name: "Crac des Chevaliers & Qal'at Salah El‑Din", country: "Syrien", type: "cultural", lat: 34.7567, lng: 36.2944, since: 2013, listed: 2006, threat: "Syrischer Bürgerkrieg; Beschädigungen während der Kämpfe." },
  { name: "Palmyra", country: "Syrien", type: "cultural", lat: 34.5511, lng: 38.2683, since: 2013, listed: 1980, threat: "Schwerste Zerstörungen durch den Islamischen Staat." },

  // ── LIBYEN (4) ─────────────────────────────────────────────
  { name: "Archäologische Stätte Kyrene", country: "Libyen", type: "cultural", lat: 32.8228, lng: 21.8589, since: 2016, listed: 1982, threat: "Libyscher Bürgerkrieg, bewaffnete Gruppen im Gebiet." },
  { name: "Archäologische Stätte Leptis Magna", country: "Libyen", type: "cultural", lat: 32.6386, lng: 14.2920, since: 2016, listed: 1982, threat: "Libyscher Bürgerkrieg." },
  { name: "Archäologische Stätte Sabratha", country: "Libyen", type: "cultural", lat: 32.8054, lng: 12.4853, since: 2016, listed: 1982, threat: "Libyscher Bürgerkrieg." },
  { name: "Felsmalereien des Tadrart Acacus", country: "Libyen", type: "cultural", lat: 24.7794, lng: 10.4378, since: 2016, listed: 1985, threat: "Bürgerkrieg, Vandalismus an prähistorischen Felsmalereien." },

  // ── JEMEN (4) ──────────────────────────────────────────────
  { name: "Altstadt von Sana'a", country: "Jemen", type: "cultural", lat: 15.3556, lng: 44.2089, since: 2015, listed: 1986, threat: "Jemenitischer Bürgerkrieg." },
  { name: "Altstadt von Shibam (ummauert)", country: "Jemen", type: "cultural", lat: 15.9272, lng: 48.6264, since: 2015, listed: 1982, threat: "Bewaffneter Konflikt, mangelhafte Erhaltung." },
  { name: "Historische Stadt Zabid", country: "Jemen", type: "cultural", lat: 14.1956, lng: 43.3258, since: 2000, listed: 1993, threat: "Verfall historischer Bauten." },
  { name: "Wahrzeichen des antiken Königreichs Saba, Marib", country: "Jemen", type: "cultural", lat: 15.4567, lng: 45.3261, since: 2023, listed: 2023, threat: "Zerstörungsgefahr durch jemenitischen Bürgerkrieg." },

  // ── IRAK (3) ───────────────────────────────────────────────
  { name: "Aššur (Qal'at Sherqat)", country: "Irak", type: "cultural", lat: 35.4581, lng: 43.2606, since: 2003, listed: 2003, threat: "Sicherheitslage, geplanter Stausee (ausgesetzt)." },
  { name: "Hatra", country: "Irak", type: "cultural", lat: 35.5786, lng: 42.7197, since: 2015, listed: 1985, threat: "Zerstörung durch den Islamischen Staat." },
  { name: "Archäologische Stadt Samarra", country: "Irak", type: "cultural", lat: 34.1985, lng: 43.8742, since: 2007, listed: 2007, threat: "Folgen des Irakkriegs, mangelnde staatliche Kontrolle." },

  // ── PALÄSTINA (3) ──────────────────────────────────────────
  { name: "Altstadt Hebron / Al‑Khalil", country: "Palästina", type: "cultural", lat: 31.5246, lng: 35.1106, since: 2017, listed: 2017, threat: "Konflikt, baulicher Verfall." },
  { name: "Battir — Land der Oliven und Reben", country: "Palästina", type: "cultural", lat: 31.7203, lng: 35.1378, since: 2014, listed: 2014, threat: "Israelische Sperranlage; Bauern werden von Feldern getrennt." },
  { name: "Kloster St. Hilarion / Tell Umm Amer", country: "Palästina", type: "cultural", lat: 31.4467, lng: 34.3858, since: 2024, listed: 2024, threat: "Gaza‑Krieg." },

  // ── UKRAINE (3) — Russischer Angriffskrieg ─────────────────
  { name: "Historisches Zentrum von Odesa", country: "Ukraine", type: "cultural", lat: 46.4825, lng: 30.7233, since: 2023, listed: 2023, threat: "Russisch‑ukrainischer Krieg." },
  { name: "Kyjiw: Sophienkathedrale & Kyjiwer Höhlenkloster", country: "Ukraine", type: "cultural", lat: 50.4528, lng: 30.5147, since: 2023, listed: 1990, threat: "Russisch‑ukrainischer Krieg." },
  { name: "Lwiw — Ensemble des historischen Zentrums", country: "Ukraine", type: "cultural", lat: 49.8419, lng: 24.0316, since: 2023, listed: 1998, threat: "Russisch‑ukrainischer Krieg." },

  // ── DR KONGO (4) — Naturerbe in Konfliktzonen ──────────────
  { name: "Virunga‑Nationalpark", country: "DR Kongo", type: "natural", lat: -0.7500, lng: 29.2000, since: 1994, listed: 1979, threat: "Wilderei, Abholzung, Folgen des Bürgerkriegs." },
  { name: "Garamba‑Nationalpark", country: "DR Kongo", type: "natural", lat: 4.0500, lng: 29.4500, since: 1996, listed: 1980, threat: "Wilderei (Elfenbein, Nashörner)." },
  { name: "Kahuzi‑Biega‑Nationalpark", country: "DR Kongo", type: "natural", lat: -2.3000, lng: 28.7500, since: 1997, listed: 1980, threat: "Abholzung, Wilderei, bewaffnete Konflikte." },
  { name: "Okapi‑Wildreservat", country: "DR Kongo", type: "natural", lat: 1.7000, lng: 28.5000, since: 1997, listed: 1996, threat: "Plünderung, Wilderei, bewaffnete Konflikte." },

  // ── MALI (3) ───────────────────────────────────────────────
  { name: "Timbuktu", country: "Mali", type: "cultural", lat: 16.7666, lng: -3.0026, since: 2012, listed: 1988, threat: "Bedrohung durch islamistische Gruppen, AQIM und Ansar Dine." },
  { name: "Grabmal von Askia", country: "Mali", type: "cultural", lat: 16.2900, lng: -0.0420, since: 2012, listed: 2004, threat: "Beschädigungen durch islamistische Gruppen." },
  { name: "Altstädte von Djenné", country: "Mali", type: "cultural", lat: 13.9050, lng: -4.5550, since: 2016, listed: 1988, threat: "Regionale Unsicherheit, Verfall, unkontrollierte Urbanisierung." },

  // ── WEITERES AFRIKA (5) ────────────────────────────────────
  { name: "Mount Nimba Strict Nature Reserve", country: "Guinea / Côte d'Ivoire", type: "natural", lat: 7.5500, lng: -8.4500, since: 1992, listed: 1981, threat: "Eisenerzbergbau, Flüchtlingsströme." },
  { name: "Air‑ und Ténéré‑Naturreservate", country: "Niger", type: "natural", lat: 18.5000, lng: 8.5000, since: 1992, listed: 1991, threat: "Aufstände, Unruhen, Rückgang der Tierpopulation." },
  { name: "Manovo‑Gounda‑St‑Floris‑Nationalpark", country: "Zentralafrikanische Republik", type: "natural", lat: 8.6667, lng: 21.5000, since: 1997, listed: 1988, threat: "Illegale Beweidung, Wilderei, prekäre Sicherheitslage." },
  { name: "Selous‑Wildreservat", country: "Tansania", type: "natural", lat: -9.0000, lng: 37.4000, since: 2014, listed: 1982, threat: "Bergbau, Großinfrastrukturprojekte, Wilderei." },
  { name: "Nationalparks am Turkana‑See", country: "Kenia", type: "natural", lat: 3.5000, lng: 36.1000, since: 2018, listed: 1997, threat: "Auswirkungen des Gilgel‑Gibe‑III‑Damms in Äthiopien auf das Ökosystem." },

  // ── AFGHANISTAN (2) ────────────────────────────────────────
  { name: "Bamiyan‑Tal: Kulturlandschaft & archäologische Reste", country: "Afghanistan", type: "cultural", lat: 34.8500, lng: 67.8333, since: 2003, listed: 2003, threat: "Verlassen, militärische Aktion, frühere Sprengung der Buddhas." },
  { name: "Minarett und archäologische Reste von Dscham", country: "Afghanistan", type: "cultural", lat: 34.3961, lng: 64.5158, since: 2002, listed: 2002, threat: "Mangelnder gesetzlicher Schutz, schlechter Erhaltungszustand." },

  // ── AMERIKA & KARIBIK (7) ──────────────────────────────────
  { name: "Stadt Potosí", country: "Bolivien", type: "cultural", lat: -19.5836, lng: -65.7531, since: 2014, listed: 1987, threat: "Anhaltender Bergbau destabilisiert den Cerro Rico." },
  { name: "Coro und sein Hafen", country: "Venezuela", type: "cultural", lat: 11.4022, lng: -69.6722, since: 2005, listed: 1993, threat: "Schäden durch Starkregen 2004/05, fehlende Erhaltungsmaßnahmen." },
  { name: "Chan Chan, archäologische Zone", country: "Peru", type: "cultural", lat: -8.1058, lng: -79.0758, since: 1986, listed: 1986, threat: "Natürliche Erosion der Lehmziegelarchitektur." },
  { name: "Festungen Portobelo‑San Lorenzo", country: "Panama", type: "cultural", lat: 9.5530, lng: -79.6533, since: 2012, listed: 1980, threat: "Umweltfaktoren, fehlende Instandhaltung, urbaner Druck." },
  { name: "Río Plátano‑Biosphärenreservat", country: "Honduras", type: "natural", lat: 15.7000, lng: -84.7000, since: 2011, listed: 1982, threat: "Illegaler Holzeinschlag, Wilderei, Landnahme." },
  { name: "Inseln und Schutzgebiete im Golf von Kalifornien", country: "Mexiko", type: "natural", lat: 28.5000, lng: -112.0000, since: 2019, listed: 2005, threat: "Drohende Ausrottung des Vaquita‑Schweinswals." },
  { name: "Everglades‑Nationalpark", country: "USA", type: "natural", lat: 25.4500, lng: -80.9000, since: 2010, listed: 1979, threat: "Wasserqualität und Wasserfluss, Folgen früherer Hurrikane." },

  // ── ASIEN & PAZIFIK (4) ────────────────────────────────────
  { name: "Historisches Zentrum Shakhrisabz", country: "Usbekistan", type: "cultural", lat: 39.0517, lng: 66.8358, since: 2016, listed: 2000, threat: "Zerstörung mittelalterlicher Stadtteile, fortgesetzte Bebauung." },
  { name: "Nan Madol — Zeremonialzentrum Mikronesiens", country: "Mikronesien", type: "cultural", lat: 6.8417, lng: 158.3333, since: 2016, listed: 2016, threat: "Verschlammung der Kanäle, Überwucherung der Bauwerke." },
  { name: "East Rennell", country: "Salomonen", type: "natural", lat: -11.6833, lng: 160.3167, since: 2013, listed: 1998, threat: "Auswirkungen der Holzwirtschaft auf das Ökosystem." },
  { name: "Tropisches Regenwalderbe von Sumatra", country: "Indonesien", type: "natural", lat: 2.5000, lng: 99.5000, since: 2011, listed: 2004, threat: "Wilderei, illegaler Holzeinschlag, Straßenbau, Landwirtschaft." },

  // ── EUROPA & SONSTIGE (4) ──────────────────────────────────
  { name: "Mittelalterliche Denkmäler im Kosovo", country: "Kosovo / Serbien", type: "cultural", lat: 42.6450, lng: 20.2872, since: 2006, listed: 2004, threat: "Fehlender gesetzlicher Schutz, politische Instabilität." },
  { name: "Historisches Zentrum von Wien", country: "Österreich", type: "cultural", lat: 48.2082, lng: 16.3738, since: 2017, listed: 2001, threat: "Neue Hochhausprojekte beeinträchtigen die historische Silhouette." },
  { name: "Bergbaulandschaft Roșia Montană", country: "Rumänien", type: "cultural", lat: 46.3000, lng: 23.1300, since: 2021, listed: 2021, threat: "Pläne zur Wiederaufnahme von Bergbauaktivitäten." },
  { name: "Internationale Rachid‑Karami‑Messe Tripoli", country: "Libanon", type: "cultural", lat: 34.4361, lng: 35.8497, since: 2023, listed: 2023, threat: "Libanesische Liquiditätskrise, fehlende Mittel für den Erhalt." },

  // ── ISRAEL / JERUSALEM (1) ─────────────────────────────────
  { name: "Altstadt von Jerusalem und ihre Mauern", country: "Jerusalem", type: "cultural", lat: 31.7767, lng: 35.2345, since: 1982, listed: 1981, threat: "Unkontrollierte städtische Entwicklung, allgemeiner Verschlechterungszustand." }
];
