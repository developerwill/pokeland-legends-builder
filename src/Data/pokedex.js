const pokedex = [
    {
        "id": "1",
        "pokedex_id": "9",
        "real_name": "Mega Blastoise",
        "name": "Mega Blastoise",
        "variation": "mega",
        "img": "9_mega_blastoise.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "2",
        "pokedex_id": "95",
        "real_name": "Onix",
        "name": "Overlord Crystal Onix",
        "variation": "overlord",
        "img": "95_overlord_crystal_onix.webp",
        "type_1": "rock",
        "type_2": "ground"
    },
    {
        "id": "3",
        "pokedex_id": "95",
        "real_name": "Crystal Onix",
        "name": "Crystal Onix",
        "variation": "epic",
        "img": "95_epic_crystal_onix.webp",
        "type_1": "rock",
        "type_2": "ground"
    },
    {
        "id": "4",
        "pokedex_id": "94",
        "real_name": "Mega Gengar",
        "name": "Mega Gengar",
        "variation": "mega",
        "img": "94_mega_gengar.webp",
        "type_1": "ghost",
        "type_2": "poison"
    },
    {
        "id": "5",
        "pokedex_id": "94",
        "real_name": "Gengar",
        "name": "Agatha Gengar",
        "variation": "epic",
        "img": "94_epic_agatha_gengar.webp",
        "type_1": "ghost",
        "type_2": "poison"
    },
    {
        "id": "6",
        "pokedex_id": "89",
        "real_name": "Muk",
        "name": "Muk",
        "variation": "alolan",
        "img": "89_alolan_muk.webp",
        "type_1": "poison",
        "type_2": "dark"
    },
    {
        "id": "7",
        "pokedex_id": "88",
        "real_name": "Grimer",
        "name": "Grimer",
        "variation": "alolan",
        "img": "88_alolan_grimer.webp",
        "type_1": "poison",
        "type_2": "dark"
    },
    {
        "id": "8",
        "pokedex_id": "889",
        "real_name": "Zamazenta",
        "name": "Overlord Shield King",
        "variation": "overlord",
        "img": "889_overlord_zamazenta.webp",
        "type_1": "fighting",
        "type_2": ""
    },
    {
        "id": "9",
        "pokedex_id": "889",
        "real_name": "Zamazenta",
        "name": "Shield King",
        "variation": "epic",
        "img": "889_epic_zamazenta.webp",
        "type_1": "fighting",
        "type_2": ""
    },
    {
        "id": "10",
        "pokedex_id": "888",
        "real_name": "Zacian",
        "name": "Overlord Sword King",
        "variation": "overlord",
        "img": "888_overlord_zacian.webp",
        "type_1": "fairy",
        "type_2": ""
    },
    {
        "id": "11",
        "pokedex_id": "888",
        "real_name": "Zacian",
        "name": "Sword King",
        "variation": "epic",
        "img": "888_epic_zacian.webp",
        "type_1": "fairy",
        "type_2": ""
    },
    {
        "id": "12",
        "pokedex_id": "80",
        "real_name": "Mega Slowbrow",
        "name": "Mega Slowbrow",
        "variation": "mega",
        "img": "80_mega_slowbrow.webp",
        "type_1": "water",
        "type_2": "psychic"
    },
    {
        "id": "13",
        "pokedex_id": "809",
        "real_name": "Melmetal",
        "name": "Overlord Melmetal",
        "variation": "overlord",
        "img": "809_overlord_melmetal.webp",
        "type_1": "steel",
        "type_2": ""
    },
    {
        "id": "14",
        "pokedex_id": "809",
        "real_name": "Melmetal",
        "name": "Melmetal",
        "variation": "epic",
        "img": "809_epic_melmetal.webp",
        "type_1": "steel",
        "type_2": ""
    },
    {
        "id": "15",
        "pokedex_id": "807",
        "real_name": "Zeraora",
        "name": "Resonance Zeraora",
        "variation": "resonance",
        "img": "807_resonance_zeraora.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "16",
        "pokedex_id": "807",
        "real_name": "Zeraora",
        "name": "Overlord Zeraora",
        "variation": "overlord",
        "img": "807_overlord_zeraora.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "17",
        "pokedex_id": "807",
        "real_name": "Zeraora",
        "name": "Zeraora",
        "variation": "epic",
        "img": "807_epic_zeraora.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "18",
        "pokedex_id": "806",
        "real_name": "Blacephalon",
        "name": "Overlord Blacephalon",
        "variation": "overlord",
        "img": "806_overlord_blacephalon.webp",
        "type_1": "fire",
        "type_2": "ghost"
    },
    {
        "id": "19",
        "pokedex_id": "806",
        "real_name": "Blacephalon",
        "name": "Blacephalon",
        "variation": "epic",
        "img": "806_epic_blacephalon.webp",
        "type_1": "fire",
        "type_2": "ghost"
    },
    {
        "id": "20",
        "pokedex_id": "805",
        "real_name": "Stakataka",
        "name": "Overlord Stakataka",
        "variation": "overlord",
        "img": "805_overlord_stakataka.webp",
        "type_1": "rock",
        "type_2": "steel"
    },
    {
        "id": "21",
        "pokedex_id": "805",
        "real_name": "Stakataka",
        "name": "Stakataka",
        "variation": "epic",
        "img": "805_epic_stakataka.webp",
        "type_1": "rock",
        "type_2": "steel"
    },
    {
        "id": "22",
        "pokedex_id": "804",
        "real_name": "Naganadel",
        "name": "Naganadel",
        "variation": "epic",
        "img": "804_epic_naganadel.webp",
        "type_1": "poison",
        "type_2": "dragon"
    },
    {
        "id": "23",
        "pokedex_id": "803",
        "real_name": "Poipole",
        "name": "Poipole",
        "variation": "epic",
        "img": "803_epic_poipole.webp",
        "type_1": "poison",
        "type_2": ""
    },
    {
        "id": "24",
        "pokedex_id": "802",
        "real_name": "Marshadow",
        "name": "Overlord Marshadow",
        "variation": "overlord",
        "img": "802_overlord_marshadow.webp",
        "type_1": "fighting",
        "type_2": "ghost"
    },
    {
        "id": "25",
        "pokedex_id": "802",
        "real_name": "Marshadow",
        "name": "Marshadow",
        "variation": "epic",
        "img": "802_epic_marshadow.webp",
        "type_1": "fighting",
        "type_2": "ghost"
    },
    {
        "id": "26",
        "pokedex_id": "801",
        "real_name": "Magearna",
        "name": "Overlord Soul Heart",
        "variation": "overlord",
        "img": "801_overlord_soul_heart_magearna.webp",
        "type_1": "steel",
        "type_2": "fairy"
    },
    {
        "id": "27",
        "pokedex_id": "801",
        "real_name": "Magearna",
        "name": "Overlord Magearna",
        "variation": "overlord",
        "img": "801_overlord_magearna.webp",
        "type_1": "steel",
        "type_2": "fairy"
    },
    {
        "id": "28",
        "pokedex_id": "801",
        "real_name": "Magearna",
        "name": "Soul",
        "variation": "epic",
        "img": "801_epic_soul_magearna.webp",
        "type_1": "steel",
        "type_2": "fairy"
    },
    {
        "id": "29",
        "pokedex_id": "801",
        "real_name": "Magearna",
        "name": "Magearna",
        "variation": "epic",
        "img": "801_epic_magearna.webp",
        "type_1": "steel",
        "type_2": "fairy"
    },
    {
        "id": "30",
        "pokedex_id": "800",
        "real_name": "Ultra Necrozma",
        "name": "Ultra Necrozma",
        "variation": "mega",
        "img": "800_mega_necrozma.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "31",
        "pokedex_id": "800",
        "real_name": "Dusk Mane Necrozma",
        "name": "Ultra Sun Necrozma",
        "variation": "epic",
        "img": "800_epic_ultra_sun_dusk_mane_necrozma.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "32",
        "pokedex_id": "800",
        "real_name": "Dawn Wings Necrozma",
        "name": "Ultra Moon Necrozma",
        "variation": "epic",
        "img": "800_epic_ultra_moon_dawn_wings_necrozma.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "33",
        "pokedex_id": "800",
        "real_name": "Necrozma",
        "name": "Necrozma",
        "variation": "epic",
        "img": "800_epic_necrozma.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "34",
        "pokedex_id": "799",
        "real_name": "Guzzlord",
        "name": "Overlord Guzzlord",
        "variation": "overlord",
        "img": "799_overlord_guzzlord.webp",
        "type_1": "dark",
        "type_2": "dragon"
    },
    {
        "id": "35",
        "pokedex_id": "799",
        "real_name": "Guzzlord",
        "name": "Guzzlord",
        "variation": "epic",
        "img": "799_epic_guzzlord.webp",
        "type_1": "dark",
        "type_2": "dragon"
    },
    {
        "id": "36",
        "pokedex_id": "798",
        "real_name": "Kartana",
        "name": "Overlord Kartana",
        "variation": "overlord",
        "img": "798_overlord_kartana.webp",
        "type_1": "grass",
        "type_2": "steel"
    },
    {
        "id": "37",
        "pokedex_id": "798",
        "real_name": "Kartana",
        "name": "Kartana",
        "variation": "epic",
        "img": "798_epic_kartana.webp",
        "type_1": "grass",
        "type_2": "steel"
    },
    {
        "id": "38",
        "pokedex_id": "797",
        "real_name": "Celesteela",
        "name": "Celesteela",
        "variation": "epic",
        "img": "797_epic_celesteela.webp",
        "type_1": "steel",
        "type_2": "flying"
    },
    {
        "id": "39",
        "pokedex_id": "796",
        "real_name": "Xurkitree",
        "name": "Overlord Xurkitree",
        "variation": "overlord",
        "img": "796_overlord_xurkitree.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "40",
        "pokedex_id": "796",
        "real_name": "Xurkitree",
        "name": "Xurkitree",
        "variation": "epic",
        "img": "796_epic_xurkitree.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "41",
        "pokedex_id": "795",
        "real_name": "Pheromosa",
        "name": "Overlord Pheromosa",
        "variation": "overlord",
        "img": "795_overlord_pheromosa.webp",
        "type_1": "bug",
        "type_2": "fighting"
    },
    {
        "id": "42",
        "pokedex_id": "795",
        "real_name": "Pheromosa",
        "name": "Pheromosa",
        "variation": "epic",
        "img": "795_epic_pheromosa.webp",
        "type_1": "bug",
        "type_2": "fighting"
    },
    {
        "id": "43",
        "pokedex_id": "794",
        "real_name": "Buzzwole",
        "name": "Overlord Buzzwole",
        "variation": "overlord",
        "img": "794_overlord_buzzwole.webp",
        "type_1": "bug",
        "type_2": "fighting"
    },
    {
        "id": "44",
        "pokedex_id": "794",
        "real_name": "Buzzwole",
        "name": "Buzzwole",
        "variation": "epic",
        "img": "794_epic_buzzwole.webp",
        "type_1": "bug",
        "type_2": "fighting"
    },
    {
        "id": "45",
        "pokedex_id": "793",
        "real_name": "Nihilego",
        "name": "Overlord Void Mine",
        "variation": "overlord",
        "img": "793_overlord_void_lusamine_nihilego.webp",
        "type_1": "rock",
        "type_2": "poison"
    },
    {
        "id": "46",
        "pokedex_id": "793",
        "real_name": "Nihilego",
        "name": "Void Mine",
        "variation": "epic",
        "img": "793_epic_void_lusamine_nihilego.webp",
        "type_1": "rock",
        "type_2": "poison"
    },
    {
        "id": "47",
        "pokedex_id": "793",
        "real_name": "Nihilego",
        "name": "Nihilego",
        "variation": "epic",
        "img": "793_epic_nihilego.webp",
        "type_1": "rock",
        "type_2": "poison"
    },
    {
        "id": "48",
        "pokedex_id": "792",
        "real_name": "Lunala",
        "name": "Overlord Lunala",
        "variation": "overlord",
        "img": "792_overlord_lunala.webp",
        "type_1": "psychic",
        "type_2": "ghost"
    },
    {
        "id": "49",
        "pokedex_id": "792",
        "real_name": "Lunala",
        "name": "Lunala",
        "variation": "epic",
        "img": "792_epic_lunala.webp",
        "type_1": "psychic",
        "type_2": "ghost"
    },
    {
        "id": "50",
        "pokedex_id": "791",
        "real_name": "Solgaleo",
        "name": "Overlord Solgaleo",
        "variation": "overlord",
        "img": "791_overlord_solgaleo.webp",
        "type_1": "psychic",
        "type_2": "steel"
    },
    {
        "id": "51",
        "pokedex_id": "791",
        "real_name": "Solgaleo",
        "name": "Solgaleo",
        "variation": "epic",
        "img": "791_epic_solgaleo.webp",
        "type_1": "psychic",
        "type_2": "steel"
    },
    {
        "id": "52",
        "pokedex_id": "788",
        "real_name": "Tapu Fini",
        "name": "Overlord Tapu Fini",
        "variation": "overlord",
        "img": "788_overlord_tapu-fini.webp",
        "type_1": "water",
        "type_2": "fairy"
    },
    {
        "id": "53",
        "pokedex_id": "788",
        "real_name": "Tapu Fini",
        "name": "Tapu Fini",
        "variation": "epic",
        "img": "788_epic_tapu-fini.webp",
        "type_1": "water",
        "type_2": "fairy"
    },
    {
        "id": "54",
        "pokedex_id": "787",
        "real_name": "Tapu Bulu",
        "name": "Tapu Bulu",
        "variation": "epic",
        "img": "787_epic_tapu-bulu.webp",
        "type_1": "grass",
        "type_2": "fairy"
    },
    {
        "id": "55",
        "pokedex_id": "786",
        "real_name": "Tapu Lele",
        "name": "Tapu Lele",
        "variation": "epic",
        "img": "786_epic_tapu-lele.webp",
        "type_1": "psychic",
        "type_2": "fairy"
    },
    {
        "id": "56",
        "pokedex_id": "785",
        "real_name": "Tapu Koko",
        "name": "Resonance Tapu Koko",
        "variation": "resonance",
        "img": "785_resonance_tapu-koko.webp",
        "type_1": "electric",
        "type_2": "fairy"
    },
    {
        "id": "57",
        "pokedex_id": "785",
        "real_name": "Tapu Koko",
        "name": "Overlord Tapu Koko",
        "variation": "overlord",
        "img": "785_overlord_tapu-koko.webp",
        "type_1": "electric",
        "type_2": "fairy"
    },
    {
        "id": "58",
        "pokedex_id": "785",
        "real_name": "Tapu Koko",
        "name": "Tapu Koko",
        "variation": "epic",
        "img": "785_epic_tapu-koko.webp",
        "type_1": "electric",
        "type_2": "fairy"
    },
    {
        "id": "59",
        "pokedex_id": "784",
        "real_name": "Kommo-o",
        "name": "Kommo-o",
        "variation": "epic",
        "img": "784_epic_kommo-o.webp",
        "type_1": "dragon",
        "type_2": "fighting"
    },
    {
        "id": "60",
        "pokedex_id": "773",
        "real_name": "Silvally",
        "name": "Silvally",
        "variation": "epic",
        "img": "773_epic_silvally.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "61",
        "pokedex_id": "76",
        "real_name": "Golem",
        "name": "Golem",
        "variation": "alolan",
        "img": "76_alolan_golem.webp",
        "type_1": "rock",
        "type_2": "electric"
    },
    {
        "id": "62",
        "pokedex_id": "75",
        "real_name": "Graveler",
        "name": "Graveler",
        "variation": "alolan",
        "img": "75_alolan_graveler.webp",
        "type_1": "rock",
        "type_2": "electric"
    },
    {
        "id": "63",
        "pokedex_id": "74",
        "real_name": "Geodude",
        "name": "Geodude",
        "variation": "alolan",
        "img": "74_alolan_geodude.webp",
        "type_1": "rock",
        "type_2": "electric"
    },
    {
        "id": "64",
        "pokedex_id": "747",
        "real_name": "Mareanie",
        "name": "James Mareanie",
        "variation": "epic",
        "img": "747_epic_james_mareanie.webp",
        "type_1": "poison",
        "type_2": "water"
    },
    {
        "id": "65",
        "pokedex_id": "745",
        "real_name": "Lycanroc",
        "name": "Champion Lycanroc",
        "variation": "epic",
        "img": "745_epic_champion_lycanroc.webp",
        "type_1": "rock",
        "type_2": ""
    },
    {
        "id": "66",
        "pokedex_id": "721",
        "real_name": "Volcanion",
        "name": "Overlord Volcanion",
        "variation": "overlord",
        "img": "721_overlord_volcanion.webp",
        "type_1": "fire",
        "type_2": "water"
    },
    {
        "id": "67",
        "pokedex_id": "721",
        "real_name": "Volcanion",
        "name": "Volcanion",
        "variation": "epic",
        "img": "721_epic_volcanion.webp",
        "type_1": "fire",
        "type_2": "water"
    },
    {
        "id": "68",
        "pokedex_id": "720",
        "real_name": "Unbound Hoopa",
        "name": "Overlord Hoopa",
        "variation": "overlord",
        "img": "720_overlord_unbound_hoopa.webp",
        "type_1": "psychic",
        "type_2": "ghost"
    },
    {
        "id": "69",
        "pokedex_id": "720",
        "real_name": "Unbound Hoopa",
        "name": "Unbound Hoopa",
        "variation": "epic",
        "img": "720_epic_unbound_hoopa.webp",
        "type_1": "psychic",
        "type_2": "ghost"
    },
    {
        "id": "70",
        "pokedex_id": "720",
        "real_name": "Confined Hoopa",
        "name": "Confined Hoopa",
        "variation": "epic",
        "img": "720_epic_confined_hoopa.webp",
        "type_1": "psychic",
        "type_2": "ghost"
    },
    {
        "id": "71",
        "pokedex_id": "719",
        "real_name": "Diancie",
        "name": "Resonance Diancie",
        "variation": "resonance",
        "img": "719_resonance_diancie.webp",
        "type_1": "rock",
        "type_2": "fairy"
    },
    {
        "id": "72",
        "pokedex_id": "719",
        "real_name": "Mega Diancie",
        "name": "Overlord Diancie",
        "variation": "overlord",
        "img": "719_overlord_diancie.webp",
        "type_1": "rock",
        "type_2": "fairy"
    },
    {
        "id": "73",
        "pokedex_id": "719",
        "real_name": "Mega Diancie",
        "name": "Mega Diancie",
        "variation": "mega",
        "img": "719_mega_diancie.webp",
        "type_1": "rock",
        "type_2": "fairy"
    },
    {
        "id": "74",
        "pokedex_id": "719",
        "real_name": "Diancie",
        "name": "Diancie",
        "variation": "epic",
        "img": "719_epic_diancie.webp",
        "type_1": "rock",
        "type_2": "fairy"
    },
    {
        "id": "75",
        "pokedex_id": "718",
        "real_name": "Zygarde Complete Form",
        "name": "Resonance Zygarde",
        "variation": "resonance",
        "img": "718_resonance_zygarde.webp",
        "type_1": "dragon",
        "type_2": "ground"
    },
    {
        "id": "76",
        "pokedex_id": "718",
        "real_name": "Zygarde Complete Form",
        "name": "Overlord Zygarde",
        "variation": "overlord",
        "img": "718_overlord_zygarde.webp",
        "type_1": "dragon",
        "type_2": "ground"
    },
    {
        "id": "77",
        "pokedex_id": "718",
        "real_name": "Zygarde Complete Form",
        "name": "Overlord Flare Zygarde",
        "variation": "overlord",
        "img": "718_overlord_flare_zygarde.webp",
        "type_1": "dragon",
        "type_2": "ground"
    },
    {
        "id": "78",
        "pokedex_id": "718",
        "real_name": "Zygarde",
        "name": "Zygarde",
        "variation": "epic",
        "img": "718_epic_zygarde.webp",
        "type_1": "dragon",
        "type_2": "ground"
    },
    {
        "id": "79",
        "pokedex_id": "718",
        "real_name": "Zygarde Complete Form",
        "name": "Flare Zygarde",
        "variation": "epic",
        "img": "718_epic_flare_zygarde.webp",
        "type_1": "dragon",
        "type_2": "ground"
    },
    {
        "id": "80",
        "pokedex_id": "717",
        "real_name": "Yveltal",
        "name": "Resonance Yveltal",
        "variation": "resonance",
        "img": "717_resonance_yveltal.webp",
        "type_1": "dark",
        "type_2": "flying"
    },
    {
        "id": "81",
        "pokedex_id": "717",
        "real_name": "Yveltal",
        "name": "Overlord Yveltal",
        "variation": "overlord",
        "img": "717_overlord_yveltal.webp",
        "type_1": "dark",
        "type_2": "flying"
    },
    {
        "id": "82",
        "pokedex_id": "717",
        "real_name": "Yveltal",
        "name": "Yveltal",
        "variation": "epic",
        "img": "717_epic_yveltal.webp",
        "type_1": "dark",
        "type_2": "flying"
    },
    {
        "id": "83",
        "pokedex_id": "716",
        "real_name": "Xerneas",
        "name": "Overlord Xerneas",
        "variation": "overlord",
        "img": "716_overlord_xerneas.webp",
        "type_1": "fairy",
        "type_2": ""
    },
    {
        "id": "84",
        "pokedex_id": "716",
        "real_name": "Xerneas",
        "name": "Xerneas",
        "variation": "epic",
        "img": "716_epic_xerneas.webp",
        "type_1": "fairy",
        "type_2": ""
    },
    {
        "id": "85",
        "pokedex_id": "706",
        "real_name": "Goodra",
        "name": "Goodra",
        "variation": "epic",
        "img": "706_epic_goodra.webp",
        "type_1": "dragon",
        "type_2": ""
    },
    {
        "id": "86",
        "pokedex_id": "6",
        "real_name": "Mega Charizard X",
        "name": "Overlord Charizard X",
        "variation": "overlord",
        "img": "6_overlord_charizard-x.webp",
        "type_1": "fire",
        "type_2": "flying"
    },
    {
        "id": "87",
        "pokedex_id": "6",
        "real_name": "Mega Charizard Y",
        "name": "Mega Charizard Y",
        "variation": "mega",
        "img": "6_mega_charizard-y.webp",
        "type_1": "fire",
        "type_2": "flying"
    },
    {
        "id": "88",
        "pokedex_id": "6",
        "real_name": "Mega Charizard X",
        "name": "Mega Charizard X",
        "variation": "mega",
        "img": "6_mega_charizard-x.webp",
        "type_1": "fire",
        "type_2": "flying"
    },
    {
        "id": "89",
        "pokedex_id": "65",
        "real_name": "Mega Alakazam",
        "name": "Mega Alakazam",
        "variation": "mega",
        "img": "65_mega_alakazam.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "90",
        "pokedex_id": "658",
        "real_name": "Greninja",
        "name": "Overlord Greninja",
        "variation": "overlord",
        "img": "658_overlord_ash_greninja.webp",
        "type_1": "water",
        "type_2": "dark"
    },
    {
        "id": "91",
        "pokedex_id": "658",
        "real_name": "Mega Greninja",
        "name": "Greninja Bone Type",
        "variation": "mega",
        "img": "658_mega_bone_type_greninja.webp",
        "type_1": "water",
        "type_2": "dark"
    },
    {
        "id": "92",
        "pokedex_id": "658",
        "real_name": "Ash Greninja",
        "name": "Ash Greninja",
        "variation": "mega",
        "img": "658_mega_ash_greninja.webp",
        "type_1": "water",
        "type_2": "dark"
    },
    {
        "id": "93",
        "pokedex_id": "649",
        "real_name": "Genesect",
        "name": "Overlord Genesect",
        "variation": "overlord",
        "img": "649_overlord_genesect.webp",
        "type_1": "bug",
        "type_2": "steel"
    },
    {
        "id": "94",
        "pokedex_id": "649",
        "real_name": "Genesect",
        "name": "Genesect",
        "variation": "epic",
        "img": "649_epic_genesect.webp",
        "type_1": "bug",
        "type_2": "steel"
    },
    {
        "id": "95",
        "pokedex_id": "648",
        "real_name": "Meloetta Pirouette Form",
        "name": "Pirouette Form Meloetta",
        "variation": "epic",
        "img": "648_epic_pirouette_form_meloetta.webp",
        "type_1": "normal",
        "type_2": "psychic"
    },
    {
        "id": "96",
        "pokedex_id": "648",
        "real_name": "Meloetta Aria Form",
        "name": "Aria Form Meloetta",
        "variation": "epic",
        "img": "648_epic_aria_form_meloetta.webp",
        "type_1": "normal",
        "type_2": "psychic"
    },
    {
        "id": "97",
        "pokedex_id": "647",
        "real_name": "Keldeo",
        "name": "Overlord Keldeo",
        "variation": "overlord",
        "img": "647_overlord_resolute_form_keldeo.webp",
        "type_1": "water",
        "type_2": "fighting"
    },
    {
        "id": "98",
        "pokedex_id": "647",
        "real_name": "Keldeo Resolute Form",
        "name": "Resolute Form Keldeo",
        "variation": "epic",
        "img": "647_epic_resolute_form_keldeo.webp",
        "type_1": "water",
        "type_2": "fighting"
    },
    {
        "id": "99",
        "pokedex_id": "647",
        "real_name": "Keldeo Ordinary Form",
        "name": "Ordinary Form Keldeo",
        "variation": "epic",
        "img": "647_epic_ordinary_form_keldeo.webp",
        "type_1": "water",
        "type_2": "fighting"
    },
    {
        "id": "100",
        "pokedex_id": "646",
        "real_name": "White Kyurem",
        "name": "Resonance White Kyurem",
        "variation": "resonance",
        "img": "646_resonance_white_kyurem.webp.webp",
        "type_1": "dragon",
        "type_2": "ice"
    },
    {
        "id": "101",
        "pokedex_id": "646",
        "real_name": "Black Kyurem",
        "name": "Resonance Black Kyurem",
        "variation": "resonance",
        "img": "646_resonance_black_kyurem.webp.webp",
        "type_1": "dragon",
        "type_2": "ice"
    },
    {
        "id": "102",
        "pokedex_id": "646",
        "real_name": "Kyurem",
        "name": "Overlord Unova Kyurem",
        "variation": "overlord",
        "img": "646_overlord_unova_kyurem.webp.webp",
        "type_1": "dragon",
        "type_2": "ice"
    },
    {
        "id": "103",
        "pokedex_id": "646",
        "real_name": "Black Kyurem",
        "name": "Overlord Black Kyurem",
        "variation": "overlord",
        "img": "646_overlord_black_kyurem.webp.webp",
        "type_1": "dragon",
        "type_2": "ice"
    },
    {
        "id": "104",
        "pokedex_id": "646",
        "real_name": "White Kyurem",
        "name": "White Kyurem",
        "variation": "epic",
        "img": "646_epic_white_kyurem.webp.webp",
        "type_1": "dragon",
        "type_2": "ice"
    },
    {
        "id": "105",
        "pokedex_id": "646",
        "real_name": "Unova Kyurem",
        "name": "Unova Kyurem",
        "variation": "epic",
        "img": "646_epic_unova_kyurem.webp.webp",
        "type_1": "dragon",
        "type_2": "ice"
    },
    {
        "id": "106",
        "pokedex_id": "646",
        "real_name": "Kyurem",
        "name": "Kyurem",
        "variation": "epic",
        "img": "646_epic_kyurem.webp",
        "type_1": "dragon",
        "type_2": "ice"
    },
    {
        "id": "107",
        "pokedex_id": "646",
        "real_name": "Black Kyurem",
        "name": "Black Kyurem",
        "variation": "epic",
        "img": "646_epic_black_kyurem.webp.webp",
        "type_1": "dragon",
        "type_2": "ice"
    },
    {
        "id": "108",
        "pokedex_id": "645",
        "real_name": "Therian Form Landorus",
        "name": "Therian Landorus",
        "variation": "epic",
        "img": "645_epic_therian_landorus.webp",
        "type_1": "ground",
        "type_2": "flying"
    },
    {
        "id": "109",
        "pokedex_id": "645",
        "real_name": "Incarnate Landorus",
        "name": "Incarnate Landorus",
        "variation": "epic",
        "img": "645_epic_incarnate_landorus.webp.webp",
        "type_1": "ground",
        "type_2": "flying"
    },
    {
        "id": "110",
        "pokedex_id": "644",
        "real_name": "Zekrom",
        "name": "Overlord Zekrom",
        "variation": "overlord",
        "img": "644_overlord_zekrom.webp",
        "type_1": "dragon",
        "type_2": "electric"
    },
    {
        "id": "111",
        "pokedex_id": "644",
        "real_name": "Zekrom",
        "name": "Zekrom",
        "variation": "epic",
        "img": "644_epic_zekrom.webp",
        "type_1": "dragon",
        "type_2": "electric"
    },
    {
        "id": "112",
        "pokedex_id": "643",
        "real_name": "Reshiram",
        "name": "Overlord Reshiram",
        "variation": "overlord",
        "img": "643_overlord_reshiram.webp",
        "type_1": "dragon",
        "type_2": "fire"
    },
    {
        "id": "113",
        "pokedex_id": "643",
        "real_name": "Reshiram",
        "name": "Reshiram",
        "variation": "epic",
        "img": "643_epic_reshiram.webp",
        "type_1": "dragon",
        "type_2": "fire"
    },
    {
        "id": "114",
        "pokedex_id": "642",
        "real_name": "Thundurus Therian Forme",
        "name": "Overlord Thundurus",
        "variation": "overlord",
        "img": "642_overlord_therian_form_thundurus.webp.webp",
        "type_1": "electric",
        "type_2": "flying"
    },
    {
        "id": "115",
        "pokedex_id": "642",
        "real_name": "Therian Form Thundurus",
        "name": "Therian Form Thundurus",
        "variation": "epic",
        "img": "642_epic_therian_form_thundurus.webp.webp",
        "type_1": "electric",
        "type_2": "flying"
    },
    {
        "id": "116",
        "pokedex_id": "642",
        "real_name": "Incarnate Form Thundurus",
        "name": "Incarnate Form Thundurus",
        "variation": "epic",
        "img": "642_epic_incarnate_form_thundurus.webp.webp",
        "type_1": "electric",
        "type_2": "flying"
    },
    {
        "id": "117",
        "pokedex_id": "641",
        "real_name": "Tornadus Therian Forme",
        "name": "Overlord Tornadus",
        "variation": "overlord",
        "img": "641_overlord_therian_form_tornadus.webp",
        "type_1": "flying",
        "type_2": ""
    },
    {
        "id": "118",
        "pokedex_id": "641",
        "real_name": "Therian Form Tornadus",
        "name": "Therian Form Tornadus",
        "variation": "epic",
        "img": "641_epic_therian_form_tornadus.webp",
        "type_1": "flying",
        "type_2": ""
    },
    {
        "id": "119",
        "pokedex_id": "641",
        "real_name": "Incarnate Form Tornadus",
        "name": "Incarnate Form Tornadus",
        "variation": "epic",
        "img": "641_epic_incarnate_form_tornadus.webp",
        "type_1": "flying",
        "type_2": ""
    },
    {
        "id": "120",
        "pokedex_id": "640",
        "real_name": "Virizion",
        "name": "Virizion",
        "variation": "epic",
        "img": "640_epic_verizion.webp",
        "type_1": "grass",
        "type_2": "fighting"
    },
    {
        "id": "121",
        "pokedex_id": "639",
        "real_name": "Terrakion",
        "name": "Terrakion",
        "variation": "epic",
        "img": "639_epic_terrakion.webp",
        "type_1": "rock",
        "type_2": "fighting"
    },
    {
        "id": "122",
        "pokedex_id": "638",
        "real_name": "Cobalion",
        "name": "Cobalion",
        "variation": "epic",
        "img": "638_epic_cobalion.webp",
        "type_1": "steel",
        "type_2": "fighting"
    },
    {
        "id": "123",
        "pokedex_id": "635",
        "real_name": "Hydreigon",
        "name": "Hydreigon",
        "variation": "epic",
        "img": "635_epic_hydreigon.webp",
        "type_1": "dark",
        "type_2": "dragon"
    },
    {
        "id": "124",
        "pokedex_id": "621",
        "real_name": "Druddigon",
        "name": "Iris Druddigon",
        "variation": "epic",
        "img": "621_epic_druddigon.webp",
        "type_1": "dragon",
        "type_2": ""
    },
    {
        "id": "125",
        "pokedex_id": "612",
        "real_name": "Haxorus",
        "name": "Haxorus",
        "variation": "epic",
        "img": "612_epic_haxorus.webp",
        "type_1": "dragon",
        "type_2": ""
    },
    {
        "id": "126",
        "pokedex_id": "571",
        "real_name": "Zoroark",
        "name": "Overlord Zoroark",
        "variation": "overlord",
        "img": "571_overlord_zoroark.webp",
        "type_1": "dark",
        "type_2": ""
    },
    {
        "id": "127",
        "pokedex_id": "571",
        "real_name": "Zoroark",
        "name": "Overlord Master Of Illusions",
        "variation": "overlord",
        "img": "571_overlord_master_of_illusions_zoroark.webp",
        "type_1": "dark",
        "type_2": "poison"
    },
    {
        "id": "128",
        "pokedex_id": "571",
        "real_name": "Zoroark",
        "name": "Zoroark",
        "variation": "epic",
        "img": "571_epic_zoroark.webp",
        "type_1": "dark",
        "type_2": ""
    },
    {
        "id": "129",
        "pokedex_id": "571",
        "real_name": "Zoroark",
        "name": "Master Of Illusions Zoroark",
        "variation": "epic",
        "img": "571_epic_master_of_illusions_zoroark.webp",
        "type_1": "dark",
        "type_2": "poison"
    },
    {
        "id": "130",
        "pokedex_id": "570",
        "real_name": "Zorua",
        "name": "Zorua",
        "variation": "epic",
        "img": "570_epic_zorua.webp",
        "type_1": "dark",
        "type_2": ""
    },
    {
        "id": "131",
        "pokedex_id": "53",
        "real_name": "Persian",
        "name": "Persian",
        "variation": "alolan",
        "img": "53_alolan_persian.webp",
        "type_1": "dark",
        "type_2": ""
    },
    {
        "id": "132",
        "pokedex_id": "531",
        "real_name": "Mega Audino",
        "name": "Mega Audino",
        "variation": "mega",
        "img": "531_mega_audino.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "133",
        "pokedex_id": "52",
        "real_name": "Meowth",
        "name": "Meowth",
        "variation": "alolan",
        "img": "52_alolan_meowth.webp",
        "type_1": "dark",
        "type_2": ""
    },
    {
        "id": "134",
        "pokedex_id": "51",
        "real_name": "Dugtrio",
        "name": "Dugtrio",
        "variation": "alolan",
        "img": "51_alolan_dugtrio.webp",
        "type_1": "ground",
        "type_2": "steel"
    },
    {
        "id": "135",
        "pokedex_id": "50",
        "real_name": "Diglet",
        "name": "Diglett",
        "variation": "alolan",
        "img": "50_alolan_diglet.webp",
        "type_1": "ground",
        "type_2": "steel"
    },
    {
        "id": "136",
        "pokedex_id": "494",
        "real_name": "Victini",
        "name": "Overlord Victini",
        "variation": "overlord",
        "img": "494_overlord_victini.webp",
        "type_1": "psychic",
        "type_2": "fire"
    },
    {
        "id": "137",
        "pokedex_id": "494",
        "real_name": "Victini",
        "name": "Victini",
        "variation": "epic",
        "img": "494_epic_victini.webp",
        "type_1": "psychic",
        "type_2": "fire"
    },
    {
        "id": "138",
        "pokedex_id": "493",
        "real_name": "Arceus",
        "name": "Overlord Creator Arceus",
        "variation": "overlord",
        "img": "493_overlord_creator_arceus.webp",
        "type_1": "infinity",
        "type_2": ""
    },
    {
        "id": "139",
        "pokedex_id": "493",
        "real_name": "Arceus",
        "name": "Creator Arceus",
        "variation": "epic",
        "img": "493_epic_creator_arceus.webp",
        "type_1": "non-type",
        "type_2": ""
    },
    {
        "id": "140",
        "pokedex_id": "493",
        "real_name": "Arceus",
        "name": "Arceus",
        "variation": "epic",
        "img": "493_epic_arceus.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "141",
        "pokedex_id": "492",
        "real_name": "Sky Form Shaymin",
        "name": "Sky Form Shaymin",
        "variation": "epic",
        "img": "492_epic_sky_form_shaymin.webp",
        "type_1": "grass",
        "type_2": ""
    },
    {
        "id": "142",
        "pokedex_id": "492",
        "real_name": "Land Form Shaymin",
        "name": "Land Form Shaymin",
        "variation": "epic",
        "img": "492_epic_land_form_shaymin.webp",
        "type_1": "grass",
        "type_2": ""
    },
    {
        "id": "143",
        "pokedex_id": "491",
        "real_name": "Darkrai",
        "name": "Overlord Darkrai",
        "variation": "overlord",
        "img": "491_overlord_darkrai.webp",
        "type_1": "dark",
        "type_2": ""
    },
    {
        "id": "144",
        "pokedex_id": "491",
        "real_name": "Darkrai",
        "name": "Darkrai",
        "variation": "epic",
        "img": "491_epic_darkrai.webp",
        "type_1": "dark",
        "type_2": ""
    },
    {
        "id": "145",
        "pokedex_id": "490",
        "real_name": "Manaphy",
        "name": "Manaphy",
        "variation": "epic",
        "img": "490_epic_manaphy.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "146",
        "pokedex_id": "489",
        "real_name": "Phione",
        "name": "Phione",
        "variation": "epic",
        "img": "489_epic_phione.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "147",
        "pokedex_id": "488",
        "real_name": "Cresselia",
        "name": "Overlord Cresselia",
        "variation": "overlord",
        "img": "488_overlord_cresselia.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "148",
        "pokedex_id": "488",
        "real_name": "Cresselia",
        "name": "Cresselia",
        "variation": "epic",
        "img": "488_epic_cresselia.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "149",
        "pokedex_id": "487",
        "real_name": "Origin Form Giratina",
        "name": "Resonance Giratina",
        "variation": "resonance",
        "img": "487_resonance_origin_form_giratina.webp",
        "type_1": "ghost",
        "type_2": "dragon"
    },
    {
        "id": "150",
        "pokedex_id": "487",
        "real_name": "Giratina Origin Forme",
        "name": "Overlord Giratina",
        "variation": "overlord",
        "img": "487_overlord_origin_form_giratina.webp",
        "type_1": "ghost",
        "type_2": "dragon"
    },
    {
        "id": "151",
        "pokedex_id": "487",
        "real_name": "Origin Form Giratina",
        "name": "Origin Form Giratina",
        "variation": "mega",
        "img": "487_mega_origin_form_giratina.webp",
        "type_1": "ghost",
        "type_2": "dragon"
    },
    {
        "id": "152",
        "pokedex_id": "487",
        "real_name": "Giratina Altered Forme",
        "name": "Giratina",
        "variation": "epic",
        "img": "487_epic_giratina.webp",
        "type_1": "ghost",
        "type_2": "dragon"
    },
    {
        "id": "153",
        "pokedex_id": "486",
        "real_name": "Regigigas",
        "name": "Overlord Regigas",
        "variation": "overlord",
        "img": "486_overlord_regigigas.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "154",
        "pokedex_id": "486",
        "real_name": "Regigigas",
        "name": "Regigigas",
        "variation": "epic",
        "img": "486_epic_regigigas.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "155",
        "pokedex_id": "485",
        "real_name": "Heatran",
        "name": "Resonance Heatran",
        "variation": "resonance",
        "img": "485_resonance_heatran.webp",
        "type_1": "fire",
        "type_2": "steel"
    },
    {
        "id": "156",
        "pokedex_id": "485",
        "real_name": "Heatran",
        "name": "Overlord Heatran",
        "variation": "overlord",
        "img": "485_overlord_heatran.webp",
        "type_1": "fire",
        "type_2": "steel"
    },
    {
        "id": "157",
        "pokedex_id": "485",
        "real_name": "Heatran",
        "name": "Heatran",
        "variation": "epic",
        "img": "485_epic_heatran.webp",
        "type_1": "fire",
        "type_2": "steel"
    },
    {
        "id": "158",
        "pokedex_id": "484",
        "real_name": "Palkia",
        "name": "Resonance Palkia",
        "variation": "resonance",
        "img": "484_resonance_palkia.webp",
        "type_1": "water",
        "type_2": "dragon"
    },
    {
        "id": "159",
        "pokedex_id": "484",
        "real_name": "Palkia",
        "name": "Overlord Palkia",
        "variation": "overlord",
        "img": "484_overlord_palkia.webp",
        "type_1": "water",
        "type_2": "dragon"
    },
    {
        "id": "160",
        "pokedex_id": "484",
        "real_name": "Palkia",
        "name": "Palkia",
        "variation": "epic",
        "img": "484_epic_palkia.webp",
        "type_1": "water",
        "type_2": "dragon"
    },
    {
        "id": "161",
        "pokedex_id": "483",
        "real_name": "Dialga",
        "name": "Resonance Dialga",
        "variation": "resonance",
        "img": "483_resonance_dialga.webp",
        "type_1": "steel",
        "type_2": "dragon"
    },
    {
        "id": "162",
        "pokedex_id": "483",
        "real_name": "Primal Dialga",
        "name": "Overlord Primal Dialga",
        "variation": "overlord",
        "img": "483_overlord_primal_dialga.webp",
        "type_1": "dark",
        "type_2": "dragon"
    },
    {
        "id": "163",
        "pokedex_id": "483",
        "real_name": "Dialga",
        "name": "Overlord Dialga",
        "variation": "overlord",
        "img": "483_overlord_dialga.webp",
        "type_1": "steel",
        "type_2": "dragon"
    },
    {
        "id": "164",
        "pokedex_id": "483",
        "real_name": "Dialga",
        "name": "Primal Dialga",
        "variation": "epic",
        "img": "483_epic_primal_dialga.webp",
        "type_1": "dark",
        "type_2": "dragon"
    },
    {
        "id": "165",
        "pokedex_id": "483",
        "real_name": "Dialga",
        "name": "Dialga",
        "variation": "epic",
        "img": "483_epic_dialga.webp",
        "type_1": "steel",
        "type_2": "dragon"
    },
    {
        "id": "166",
        "pokedex_id": "482",
        "real_name": "Azelf",
        "name": "Azelf",
        "variation": "epic",
        "img": "482_epic_azelf.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "167",
        "pokedex_id": "481",
        "real_name": "Mesprit",
        "name": "Mesprit",
        "variation": "epic",
        "img": "481_epic_mesprit.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "168",
        "pokedex_id": "480",
        "real_name": "Uxie",
        "name": "Uxie",
        "variation": "epic",
        "img": "480_epic_uxie.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "169",
        "pokedex_id": "475",
        "real_name": "Mega Gallade",
        "name": "Mega Gallade",
        "variation": "mega",
        "img": "475_mega_gallade.webp",
        "type_1": "psychic",
        "type_2": "fighting"
    },
    {
        "id": "170",
        "pokedex_id": "646",
        "real_name": "White Kyurem",
        "name": "Overlord White Kyurem",
        "variation": "overlord",
        "img": "646_overlord_white_kyurem.webp.webp",
        "type_1": "dragon",
        "type_2": "ice"
    },
    {
        "id": "171",
        "pokedex_id": "460",
        "real_name": "Mega Abomasnow",
        "name": "Mega Abomasnow",
        "variation": "mega",
        "img": "460_mega_abomasnow.webp",
        "type_1": "grass",
        "type_2": "ice"
    },
    {
        "id": "172",
        "pokedex_id": "448",
        "real_name": "Mega Lucario",
        "name": "Mega Lucario",
        "variation": "mega",
        "img": "448_mega_lucario.webp",
        "type_1": "fighting",
        "type_2": "steel"
    },
    {
        "id": "173",
        "pokedex_id": "445",
        "real_name": "Mega Garchomp",
        "name": "Mega Garchomp",
        "variation": "mega",
        "img": "445_mega_garchomp.webp",
        "type_1": "dragon",
        "type_2": "ground"
    },
    {
        "id": "174",
        "pokedex_id": "445",
        "real_name": "Mega Garchomp",
        "name": "Cynthia Garchomp",
        "variation": "mega",
        "img": "445_mega_cynthias_garchomp.webp",
        "type_1": "dragon",
        "type_2": "ground"
    },
    {
        "id": "175",
        "pokedex_id": "445",
        "real_name": "Garchomp",
        "name": "Garchomp",
        "variation": "epic",
        "img": "445_epic_garchomp.webp",
        "type_1": "dragon",
        "type_2": "ground"
    },
    {
        "id": "176",
        "pokedex_id": "429",
        "real_name": "Mismagius",
        "name": "Mismagius",
        "variation": "epic",
        "img": "429_epic_mismagius.webp",
        "type_1": "ghost",
        "type_2": ""
    },
    {
        "id": "177",
        "pokedex_id": "428",
        "real_name": "Mega Lopunny",
        "name": "Mega Lopunny",
        "variation": "mega",
        "img": "428_mega_lopunny.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "178",
        "pokedex_id": "3",
        "real_name": "Mega Venusaur",
        "name": "Mega Venusaur",
        "variation": "mega",
        "img": "3_mega_venusaur.webp",
        "type_1": "grass",
        "type_2": "poison"
    },
    {
        "id": "179",
        "pokedex_id": "38",
        "real_name": "Ninetales",
        "name": "Ninetales",
        "variation": "alolan",
        "img": "38_alolan_ninetiles.webp",
        "type_1": "ice",
        "type_2": "fairy"
    },
    {
        "id": "180",
        "pokedex_id": "386",
        "real_name": "Speed Form Deoxys",
        "name": "Overlord Speed Deoxys",
        "variation": "overlord",
        "img": "386_overlord_speed_form_deoxys.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "181",
        "pokedex_id": "386",
        "real_name": "Normal Form Deoxys",
        "name": "Overlord Deoxys",
        "variation": "overlord",
        "img": "386_overlord_normal_form_deoxys.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "182",
        "pokedex_id": "386",
        "real_name": "Defense Form Deoxys",
        "name": "Overlord Defense Deoxys",
        "variation": "overlord",
        "img": "386_overlord_defense_form_deoxys.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "183",
        "pokedex_id": "386",
        "real_name": "Attack Form Deoxys",
        "name": "Overlord Attack Deoxys",
        "variation": "overlord",
        "img": "386_overlord_attack_form_deoxys.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "184",
        "pokedex_id": "386",
        "real_name": "Speed Form Deoxys",
        "name": "Speed Form Deoxys",
        "variation": "epic",
        "img": "386_epic_speed_form_deoxys.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "185",
        "pokedex_id": "386",
        "real_name": "Normal Form Deoxys",
        "name": "Normal Form Deoxys",
        "variation": "epic",
        "img": "386_epic_normal_form_deoxys.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "186",
        "pokedex_id": "386",
        "real_name": "Defense Form Deoxys",
        "name": "Defense Form Deoxys",
        "variation": "epic",
        "img": "386_epic_defense_form_deoxys.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "187",
        "pokedex_id": "386",
        "real_name": "Attack Form Deoxys",
        "name": "Attack Form Deoxys",
        "variation": "epic",
        "img": "386_epic_attack_form_deoxys.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "188",
        "pokedex_id": "385",
        "real_name": "Jirachi",
        "name": "Overlord Jirachi",
        "variation": "overlord",
        "img": "385_overlord_jirachi.webp",
        "type_1": "steel",
        "type_2": "psychic"
    },
    {
        "id": "189",
        "pokedex_id": "385",
        "real_name": "Jirachi",
        "name": "Jirachi",
        "variation": "epic",
        "img": "385_epic_jirachi.webp",
        "type_1": "steel",
        "type_2": "psychic"
    },
    {
        "id": "190",
        "pokedex_id": "384",
        "real_name": "Mega Rayquaza",
        "name": "Overlord Rayquaza",
        "variation": "overlord",
        "img": "384_overlord_rayquaza.webp",
        "type_1": "dragon",
        "type_2": "flying"
    },
    {
        "id": "191",
        "pokedex_id": "384",
        "real_name": "Mega Rayquaza",
        "name": "Mega Rayquaza",
        "variation": "mega",
        "img": "384_mega_rayquaza.webp",
        "type_1": "dragon",
        "type_2": "flying"
    },
    {
        "id": "192",
        "pokedex_id": "384",
        "real_name": "Rayquaza",
        "name": "Rayquaza",
        "variation": "epic",
        "img": "384_epic_rayquaza.webp",
        "type_1": "dragon",
        "type_2": "flying"
    },
    {
        "id": "193",
        "pokedex_id": "383",
        "real_name": "Primal Groudon",
        "name": "Overlord Earth Devil",
        "variation": "overlord",
        "img": "383_overlord_primal_groudon.webp",
        "type_1": "ground",
        "type_2": ""
    },
    {
        "id": "194",
        "pokedex_id": "383",
        "real_name": "Primal Groudon",
        "name": "Overlord Groudon",
        "variation": "overlord",
        "img": "383_overlord_origin_primal_groudon.webp",
        "type_1": "ground",
        "type_2": ""
    },
    {
        "id": "195",
        "pokedex_id": "383",
        "real_name": "Primal Groudon",
        "name": "Origin Groudon",
        "variation": "mega",
        "img": "383_mega_origin_primal_groudon.webp",
        "type_1": "ground",
        "type_2": ""
    },
    {
        "id": "196",
        "pokedex_id": "383",
        "real_name": "Primal Groudon",
        "name": "Earth Devil",
        "variation": "epic",
        "img": "383_epic_primal_groudon.webp",
        "type_1": "ground",
        "type_2": ""
    },
    {
        "id": "197",
        "pokedex_id": "383",
        "real_name": "Groudon",
        "name": "Groudon",
        "variation": "epic",
        "img": "383_epic_groudon.webp",
        "type_1": "ground",
        "type_2": ""
    },
    {
        "id": "198",
        "pokedex_id": "382",
        "real_name": "Primal Kyogre",
        "name": "Overlord Ocean Devil",
        "variation": "overlord",
        "img": "382_overlord_primal_kyogre.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "199",
        "pokedex_id": "382",
        "real_name": "Primal Kyogre",
        "name": "Overlord Kyogre",
        "variation": "overlord",
        "img": "382_overlord_origin_primal_kyogre.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "200",
        "pokedex_id": "382",
        "real_name": "Primal Kyogre",
        "name": "Origin Kyogre",
        "variation": "mega",
        "img": "382_mega_origin_primal_kyogre.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "201",
        "pokedex_id": "382",
        "real_name": "Primal Kyogre",
        "name": "Ocean Devil",
        "variation": "epic",
        "img": "382_epic_primal_kyogre.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "202",
        "pokedex_id": "381",
        "real_name": "Mega Latios",
        "name": "Overlord Latios",
        "variation": "overlord",
        "img": "381_overlord_latios.webp",
        "type_1": "dragon",
        "type_2": "psychic"
    },
    {
        "id": "203",
        "pokedex_id": "381",
        "real_name": "Latios",
        "name": "Latios",
        "variation": "epic",
        "img": "381_epic_latios.webp",
        "type_1": "dragon",
        "type_2": "psychic"
    },
    {
        "id": "204",
        "pokedex_id": "382",
        "real_name": "Kyogre",
        "name": "Kyogre",
        "variation": "epic",
        "img": "382_epic_kyogre.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "205",
        "pokedex_id": "380",
        "real_name": "Mega Latias",
        "name": "Overlord Latias",
        "variation": "overlord",
        "img": "380_overlord_latias.webp",
        "type_1": "dragon",
        "type_2": "psychic"
    },
    {
        "id": "206",
        "pokedex_id": "380",
        "real_name": "Latias",
        "name": "Latias",
        "variation": "epic",
        "img": "380_epic_latias.webp",
        "type_1": "dragon",
        "type_2": "psychic"
    },
    {
        "id": "207",
        "pokedex_id": "37",
        "real_name": "Vulpix",
        "name": "Vulpix",
        "variation": "alolan",
        "img": "37_alolan_vulpix.webp",
        "type_1": "ice",
        "type_2": ""
    },
    {
        "id": "208",
        "pokedex_id": "37",
        "real_name": "Vulpix",
        "name": "Lilie Vulpix",
        "variation": "alolan",
        "img": "37_alolan_lilie_vulpix.webp",
        "type_1": "ice",
        "type_2": "fairy"
    },
    {
        "id": "209",
        "pokedex_id": "379",
        "real_name": "Registeel",
        "name": "Registeel",
        "variation": "epic",
        "img": "379_epic_regiteel.webp",
        "type_1": "steel",
        "type_2": ""
    },
    {
        "id": "210",
        "pokedex_id": "378",
        "real_name": "Regice",
        "name": "Regice",
        "variation": "epic",
        "img": "378_epic_regice.webp",
        "type_1": "ice",
        "type_2": ""
    },
    {
        "id": "211",
        "pokedex_id": "377",
        "real_name": "Regirock",
        "name": "Regirock",
        "variation": "epic",
        "img": "377_epic_regirock.webp",
        "type_1": "rock",
        "type_2": ""
    },
    {
        "id": "212",
        "pokedex_id": "376",
        "real_name": "Mega Metagross",
        "name": "Mega Metagross",
        "variation": "mega",
        "img": "376_mega_metagross.webp",
        "type_1": "steel",
        "type_2": "psychic"
    },
    {
        "id": "213",
        "pokedex_id": "376",
        "real_name": "Shiny Metagross",
        "name": "Steven Stone Metagross",
        "variation": "epic",
        "img": "376_epic_steven_stone_metagross.webp",
        "type_1": "steel",
        "type_2": "psychic"
    },
    {
        "id": "214",
        "pokedex_id": "376",
        "real_name": "Metagross",
        "name": "Metagross",
        "variation": "epic",
        "img": "376_epic_metagross.webp",
        "type_1": "steel",
        "type_2": "psychic"
    },
    {
        "id": "215",
        "pokedex_id": "373",
        "real_name": "Mega Salamence",
        "name": "Mega Salamence",
        "variation": "mega",
        "img": "373_mega_salamence.webp",
        "type_1": "dragon",
        "type_2": "flying"
    },
    {
        "id": "216",
        "pokedex_id": "373",
        "real_name": "Salamence",
        "name": "Salamence",
        "variation": "epic",
        "img": "373_epic_salamence.webp",
        "type_1": "dragon",
        "type_2": "flying"
    },
    {
        "id": "217",
        "pokedex_id": "359",
        "real_name": "Mega Absol",
        "name": "Mega Absol",
        "variation": "mega",
        "img": "359_mega_absol.webp",
        "type_1": "dark",
        "type_2": ""
    },
    {
        "id": "218",
        "pokedex_id": "354",
        "real_name": "mega Banette",
        "name": "Mega Banette",
        "variation": "mega",
        "img": "354_mega_banette.webp",
        "type_1": "ghost",
        "type_2": ""
    },
    {
        "id": "219",
        "pokedex_id": "334",
        "real_name": "Mega Altaria",
        "name": "Mega Altaria",
        "variation": "mega",
        "img": "334_mega_altaria.webp",
        "type_1": "dragon",
        "type_2": "flying"
    },
    {
        "id": "220",
        "pokedex_id": "323",
        "real_name": "Mega Camerupt",
        "name": "Mega Camerupt",
        "variation": "mega",
        "img": "323_mega_camerupt.webp",
        "type_1": "fire",
        "type_2": "ground"
    },
    {
        "id": "221",
        "pokedex_id": "319",
        "real_name": "Mega Sharpedo",
        "name": "Mega Sharpedo",
        "variation": "mega",
        "img": "319_mega_sharpedo.webp",
        "type_1": "water",
        "type_2": "dark"
    },
    {
        "id": "222",
        "pokedex_id": "310",
        "real_name": "Mega Manectric",
        "name": "Mega Manectric",
        "variation": "mega",
        "img": "310_mega_manectric.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "223",
        "pokedex_id": "308",
        "real_name": "Mega Medicham",
        "name": "Mega Medicham",
        "variation": "mega",
        "img": "308_mega_medicham.webp",
        "type_1": "fighting",
        "type_2": "psychic"
    },
    {
        "id": "224",
        "pokedex_id": "306",
        "real_name": "Mega Aggron",
        "name": "Mega Aggron",
        "variation": "mega",
        "img": "306_mega_aggron.webp",
        "type_1": "steel",
        "type_2": "rock"
    },
    {
        "id": "225",
        "pokedex_id": "303",
        "real_name": "Mega Mawile",
        "name": "Mega Mawile",
        "variation": "mega",
        "img": "303_mega_mawile.webp",
        "type_1": "steel",
        "type_2": "fairy"
    },
    {
        "id": "226",
        "pokedex_id": "302",
        "real_name": "Mega Sableye",
        "name": "Mega Sableye",
        "variation": "mega",
        "img": "302_mega_sableye.webp",
        "type_1": "dark",
        "type_2": "ghost"
    },
    {
        "id": "227",
        "pokedex_id": "28",
        "real_name": "Sandslash",
        "name": "Sandslash",
        "variation": "alolan",
        "img": "28_alolan_sandslash.webp",
        "type_1": "ice",
        "type_2": "steel"
    },
    {
        "id": "228",
        "pokedex_id": "289",
        "real_name": "Slaking",
        "name": "Slaking",
        "variation": "epic",
        "img": "289_epic_slaking.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "229",
        "pokedex_id": "282",
        "real_name": "Mega Gardevoir",
        "name": "Mega Gardevoir",
        "variation": "mega",
        "img": "282_mega_gardevoir.webp",
        "type_1": "psychic",
        "type_2": "fairy"
    },
    {
        "id": "230",
        "pokedex_id": "282",
        "real_name": "Mega Gardevoir",
        "name": "Diantha Gardevoir",
        "variation": "mega",
        "img": "282_mega_dianthas_gardevoir.webp",
        "type_1": "psychic",
        "type_2": "fairy"
    },
    {
        "id": "231",
        "pokedex_id": "381",
        "real_name": "Mega Latios",
        "name": "Mega Latios",
        "variation": "mega",
        "img": "381_mega_latios.webp",
        "type_1": "dragon",
        "type_2": "psychic"
    },
    {
        "id": "232",
        "pokedex_id": "380",
        "real_name": "Mega Latias",
        "name": "Mega Latias",
        "variation": "mega",
        "img": "380_mega_latias.webp",
        "type_1": "dragon",
        "type_2": "psychic"
    },
    {
        "id": "233",
        "pokedex_id": "27",
        "real_name": "Sandshrew",
        "name": "Sandshrew",
        "variation": "alolan",
        "img": "27_alolan_sandshrew.webp",
        "type_1": "ice",
        "type_2": "steel"
    },
    {
        "id": "234",
        "pokedex_id": "26",
        "real_name": "Raichu",
        "name": "Raichu",
        "variation": "alolan",
        "img": "26_alolan_raichu.webp",
        "type_1": "electric",
        "type_2": "psychic"
    },
    {
        "id": "235",
        "pokedex_id": "260",
        "real_name": "mega Swampert",
        "name": "Mega Swampert",
        "variation": "mega",
        "img": "260_mega_swampert.webp",
        "type_1": "water",
        "type_2": "ground"
    },
    {
        "id": "236",
        "pokedex_id": "25",
        "real_name": "Partner Pikachu",
        "name": "Overlord Pikachu",
        "variation": "overlord",
        "img": "25_overlord_pikachu.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "237",
        "pokedex_id": "257",
        "real_name": "Mega Blaziken",
        "name": "Mega Blaziken",
        "variation": "mega",
        "img": "257_mega_blaziken.webp",
        "type_1": "fire",
        "type_2": "fighting"
    },
    {
        "id": "238",
        "pokedex_id": "254",
        "real_name": "Mega Sceptile",
        "name": "Mega Sceptile",
        "variation": "mega",
        "img": "254_mega_septile.webp",
        "type_1": "grass",
        "type_2": ""
    },
    {
        "id": "239",
        "pokedex_id": "251",
        "real_name": "Celebi",
        "name": "Overlord Celebi",
        "variation": "overlord",
        "img": "251_overlord_celebi.webp",
        "type_1": "psychic",
        "type_2": "grass"
    },
    {
        "id": "240",
        "pokedex_id": "251",
        "real_name": "Celebi",
        "name": "Celebi",
        "variation": "epic",
        "img": "251_epic_celebi.webp",
        "type_1": "psychic",
        "type_2": "grass"
    },
    {
        "id": "241",
        "pokedex_id": "150",
        "real_name": "Mega Shadow Mewtwo",
        "name": "Resonance Shadow Mewtwo X",
        "variation": "resonance",
        "img": "150_resonance_shadow_mewtwo-x.webp",
        "type_1": "dark",
        "type_2": "ghost"
    },
    {
        "id": "242",
        "pokedex_id": "250",
        "real_name": "Ho-Oh",
        "name": "Resonance Ho-Oh",
        "variation": "resonance",
        "img": "250_resonance_ohoh.webp",
        "type_1": "fire",
        "type_2": "flying"
    },
    {
        "id": "243",
        "pokedex_id": "250",
        "real_name": "Ho-Oh",
        "name": "Overlord Ho-Oh",
        "variation": "overlord",
        "img": "250_overlord_ohoh.webp",
        "type_1": "fire",
        "type_2": "flying"
    },
    {
        "id": "244",
        "pokedex_id": "250",
        "real_name": "Shadow Ho-Oh",
        "name": "Overlord Dark Ho-Oh",
        "variation": "overlord",
        "img": "250_overlord_dark_ohoh.webp",
        "type_1": "fire",
        "type_2": "flying"
    },
    {
        "id": "245",
        "pokedex_id": "250",
        "real_name": "Ho-Oh",
        "name": "Ho-Oh",
        "variation": "epic",
        "img": "250_epic_ohoh.webp",
        "type_1": "fire",
        "type_2": "flying"
    },
    {
        "id": "246",
        "pokedex_id": "250",
        "real_name": "Shadow Ho-Oh",
        "name": "Dark Ho-Oh",
        "variation": "epic",
        "img": "250_epic_dark_ohoh.webp",
        "type_1": "fire",
        "type_2": "flying"
    },
    {
        "id": "247",
        "pokedex_id": "249",
        "real_name": "Lugia",
        "name": "Resonance Lugia",
        "variation": "resonance",
        "img": "249_resonance_lugia.webp",
        "type_1": "psychic",
        "type_2": "flying"
    },
    {
        "id": "248",
        "pokedex_id": "249",
        "real_name": "Lugia",
        "name": "Overlord Lugia",
        "variation": "overlord",
        "img": "249_overlord_lugia.webp",
        "type_1": "psychic",
        "type_2": "flying"
    },
    {
        "id": "249",
        "pokedex_id": "249",
        "real_name": "Dark Lugia",
        "name": "Overlord Dark Lugia",
        "variation": "overlord",
        "img": "249_overlord_dark_lugia.webp",
        "type_1": "psychic",
        "type_2": "flying"
    },
    {
        "id": "250",
        "pokedex_id": "249",
        "real_name": "Lugia",
        "name": "Lugia",
        "variation": "epic",
        "img": "249_epic_lugia.webp",
        "type_1": "psychic",
        "type_2": "flying"
    },
    {
        "id": "251",
        "pokedex_id": "249",
        "real_name": "Shadow Lugia",
        "name": "Dark Lugia",
        "variation": "epic",
        "img": "249_epic_dark_lugia.webp",
        "type_1": "psychic",
        "type_2": "flying"
    },
    {
        "id": "252",
        "pokedex_id": "248",
        "real_name": "Mega Tyranitar",
        "name": "Mega Tyranitar",
        "variation": "mega",
        "img": "248_mega_tyranitar.webp",
        "type_1": "rock",
        "type_2": "dark"
    },
    {
        "id": "253",
        "pokedex_id": "248",
        "real_name": "Tyranitar",
        "name": "Tyranitar",
        "variation": "epic",
        "img": "248_epic_tyranitar.webp",
        "type_1": "rock",
        "type_2": "dark"
    },
    {
        "id": "254",
        "pokedex_id": "245",
        "real_name": "Suicune",
        "name": "Suicune",
        "variation": "epic",
        "img": "245_epic_suicune.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "255",
        "pokedex_id": "244",
        "real_name": "Entei",
        "name": "Resonance Spell Of The Unown",
        "variation": "resonance",
        "img": "244_resonance_spell_of_the_unknow_entei.webp",
        "type_1": "fire",
        "type_2": "water"
    },
    {
        "id": "256",
        "pokedex_id": "244",
        "real_name": "Entei",
        "name": "Overlord Spell of the Unown",
        "variation": "overlord",
        "img": "244_overlord_spell_of_the_unknow_entei.webp",
        "type_1": "fire",
        "type_2": ""
    },
    {
        "id": "257",
        "pokedex_id": "244",
        "real_name": "Entei",
        "name": "Spell Of The Unown",
        "variation": "epic",
        "img": "244_epic_spell_of_the_unknow_entei.webp",
        "type_1": "fire",
        "type_2": ""
    },
    {
        "id": "258",
        "pokedex_id": "244",
        "real_name": "Entei",
        "name": "Entei",
        "variation": "epic",
        "img": "244_epic_entei.webp",
        "type_1": "fire",
        "type_2": ""
    },
    {
        "id": "259",
        "pokedex_id": "243",
        "real_name": "Raikou",
        "name": "Resonance Raikou",
        "variation": "resonance",
        "img": "243_resonance_raiko.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "260",
        "pokedex_id": "243",
        "real_name": "Raikou",
        "name": "Overlord Raikou",
        "variation": "overlord",
        "img": "243_overlord_raiko.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "261",
        "pokedex_id": "243",
        "real_name": "Raikou",
        "name": "Raikou",
        "variation": "epic",
        "img": "243_epic_raiko.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "262",
        "pokedex_id": "229",
        "real_name": "Mega Houndoom",
        "name": "Mega Houndoom",
        "variation": "mega",
        "img": "229_mega_houndoom.webp",
        "type_1": "dark",
        "type_2": "fire"
    },
    {
        "id": "263",
        "pokedex_id": "214",
        "real_name": "Mega Heracross",
        "name": "Mega Heracross",
        "variation": "mega",
        "img": "214_mega_heracross.webp",
        "type_1": "bug",
        "type_2": "fighting"
    },
    {
        "id": "264",
        "pokedex_id": "212",
        "real_name": "Mega Scizor",
        "name": "Mega Scizor",
        "variation": "mega",
        "img": "212_mega_scizor.webp",
        "type_1": "bug",
        "type_2": "steel"
    },
    {
        "id": "265",
        "pokedex_id": "20",
        "real_name": "Raticate",
        "name": "Raticate",
        "variation": "alolan",
        "img": "20_alolan_raticate.webp",
        "type_1": "dark",
        "type_2": "normal"
    },
    {
        "id": "266",
        "pokedex_id": "208",
        "real_name": "Mega Steelix",
        "name": "Mega Steelix",
        "variation": "mega",
        "img": "208_mega_steelix.webp",
        "type_1": "steel",
        "type_2": "ground"
    },
    {
        "id": "267",
        "pokedex_id": "19",
        "real_name": "Rattata",
        "name": "Rattata",
        "variation": "alolan",
        "img": "19_alolan_rattata.webp",
        "type_1": "dark",
        "type_2": "normal"
    },
    {
        "id": "268",
        "pokedex_id": "18",
        "real_name": "Mega Pidgeot",
        "name": "Mega Pidgeot",
        "variation": "mega",
        "img": "18_mega_pidgeot.webp",
        "type_1": "normal",
        "type_2": "flying"
    },
    {
        "id": "269",
        "pokedex_id": "181",
        "real_name": "Mega Ampharos",
        "name": "Mega Ampharos",
        "variation": "mega",
        "img": "181_mega_ampharos.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "270",
        "pokedex_id": "149",
        "real_name": "Dragonite",
        "name": "Lance Dragonite",
        "variation": "epic",
        "img": "149_epic_lance_dragonite.webp",
        "type_1": "dragon",
        "type_2": "flying"
    },
    {
        "id": "271",
        "pokedex_id": "15",
        "real_name": "Mega Beedrill",
        "name": "Mega Beedrill",
        "variation": "mega",
        "img": "15_mega_beedrill.webp",
        "type_1": "bug",
        "type_2": "poison"
    },
    {
        "id": "272",
        "pokedex_id": "151",
        "real_name": "Mew",
        "name": "Mew",
        "variation": "epic",
        "img": "151_epic_mew.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "273",
        "pokedex_id": "150",
        "real_name": "Mega Mewtwo Y",
        "name": "Resonance Mewtwo Y",
        "variation": "resonance",
        "img": "150_resonance_mewtwo_y.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "274",
        "pokedex_id": "150",
        "real_name": "Mega Mewtwo X",
        "name": "Resonance Mewtwo X",
        "variation": "resonance",
        "img": "150_resonance_mewtwo-x.webp",
        "type_1": "psychic",
        "type_2": "fighting"
    },
    {
        "id": "275",
        "pokedex_id": "150",
        "real_name": "Mega Shadow Mewtwo X",
        "name": "Overlord Shadow Mewtwo X",
        "variation": "overlord",
        "img": "150_overlord_shadow_mewtwo-x.webp",
        "type_1": "dark",
        "type_2": "ghost"
    },
    {
        "id": "276",
        "pokedex_id": "150",
        "real_name": "Mega Mewtwo Y",
        "name": "Overlord Mewtwo Y",
        "variation": "overlord",
        "img": "150_overlord_mewtwo_y.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "277",
        "pokedex_id": "150",
        "real_name": "Mega Mewtwo X",
        "name": "Overlord Mewtwo X",
        "variation": "overlord",
        "img": "150_overlord_mewtwo-x.webp",
        "type_1": "psychic",
        "type_2": "fighting"
    },
    {
        "id": "278",
        "pokedex_id": "150",
        "real_name": "Mewtwo",
        "name": "Overlord Armor Mewtwo",
        "variation": "overlord",
        "img": "150_overlord_armor_mewtwo-v2.webp",
        "type_1": "psychic",
        "type_2": "steel"
    },
    {
        "id": "279",
        "pokedex_id": "150",
        "real_name": "Mewtwo",
        "name": "Overlord Armor Mewtwo",
        "variation": "overlord",
        "img": "150_overlord_armor_mewtwo-v1.webp",
        "type_1": "psychic",
        "type_2": "steel"
    },
    {
        "id": "280",
        "pokedex_id": "150",
        "real_name": "Mega Shadow Mewtwo X",
        "name": "Shadow Mewtwo X",
        "variation": "mega",
        "img": "150_mega_shadow_mewtwo-x.webp",
        "type_1": "dark",
        "type_2": "ghost"
    },
    {
        "id": "281",
        "pokedex_id": "150",
        "real_name": "Mega Mewtwo Y",
        "name": "Mega Mewtwo Y",
        "variation": "mega",
        "img": "150_mega_mewtwo_y.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "282",
        "pokedex_id": "150",
        "real_name": "Mega Mewtwo X",
        "name": "Mega Mewtwo X",
        "variation": "mega",
        "img": "150_mega_mewtwo-x.webp",
        "type_1": "psychic",
        "type_2": "fighting"
    },
    {
        "id": "283",
        "pokedex_id": "150",
        "real_name": "Mewtwo",
        "name": "Mewtwo",
        "variation": "epic",
        "img": "150_epic_mewtwo.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "284",
        "pokedex_id": "150",
        "real_name": "Mewtwo",
        "name": "Armor Mewtwo",
        "variation": "epic",
        "img": "150_epic_armor_mewtwo.webp",
        "type_1": "psychic",
        "type_2": "steel"
    },
    {
        "id": "285",
        "pokedex_id": "149",
        "real_name": "Dragonite",
        "name": "Dragonite",
        "variation": "epic",
        "img": "149_epic_dragonite.webp",
        "type_1": "dragon",
        "type_2": "flying"
    },
    {
        "id": "286",
        "pokedex_id": "146",
        "real_name": "Moltres",
        "name": "Moltres",
        "variation": "epic",
        "img": "146_epic_moltres.webp",
        "type_1": "fire",
        "type_2": "flying"
    },
    {
        "id": "287",
        "pokedex_id": "145",
        "real_name": "Zapdos",
        "name": "Zapdos",
        "variation": "epic",
        "img": "145_epic_zapdos.webp",
        "type_1": "electric",
        "type_2": "flying"
    },
    {
        "id": "288",
        "pokedex_id": "144",
        "real_name": "Articuno",
        "name": "Articuno",
        "variation": "epic",
        "img": "144_epic_articuno.webp",
        "type_1": "ice",
        "type_2": "flying"
    },
    {
        "id": "289",
        "pokedex_id": "143",
        "real_name": "Snorlax",
        "name": "Snorlax",
        "variation": "epic",
        "img": "143_epic_snorlax.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "290",
        "pokedex_id": "143",
        "real_name": "Snorlax",
        "name": "Ash Snorlax",
        "variation": "epic",
        "img": "143_epic_ash_snorlax.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "291",
        "pokedex_id": "142",
        "real_name": "Aerodactyl",
        "name": "Overlord Aerodactyl",
        "variation": "overlord",
        "img": "142_overlord_aerodactyl.webp",
        "type_1": "rock",
        "type_2": "flying"
    },
    {
        "id": "292",
        "pokedex_id": "142",
        "real_name": "Mega Aerodactyl",
        "name": "Mega Aerodactyl",
        "variation": "mega",
        "img": "142_mega_aerodactyl.webp",
        "type_1": "rock",
        "type_2": "flying"
    },
    {
        "id": "293",
        "pokedex_id": "142",
        "real_name": "Aerodactyl",
        "name": "Bone Type Aerodactyl",
        "variation": "epic",
        "img": "142_epic_erodactyl.webp",
        "type_1": "rock",
        "type_2": "flying"
    },
    {
        "id": "294",
        "pokedex_id": "130",
        "real_name": "Mega Shiny Gyarados",
        "name": "Mega Red Gyarados",
        "variation": "mega",
        "img": "130_mega_red_gyarados.webp",
        "type_1": "water",
        "type_2": "flying"
    },
    {
        "id": "295",
        "pokedex_id": "130",
        "real_name": "Mega Gyarados",
        "name": "Mega Gyarados",
        "variation": "mega",
        "img": "130_mega_gyarados.webp",
        "type_1": "water",
        "type_2": "flying"
    },
    {
        "id": "296",
        "pokedex_id": "127",
        "real_name": "Mega Pinsir",
        "name": "Mega Pinsir",
        "variation": "mega",
        "img": "127_mega_pinsir.webp",
        "type_1": "bug",
        "type_2": ""
    },
    {
        "id": "297",
        "pokedex_id": "115",
        "real_name": "Mega Kangaskhan",
        "name": "Mega Kangaskhan",
        "variation": "mega",
        "img": "115_mega_kangaskhan.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "298",
        "pokedex_id": "105",
        "real_name": "Marowak",
        "name": "Marowak",
        "variation": "alolan",
        "img": "105_alolan_marowak.webp",
        "type_1": "fire",
        "type_2": "ghost"
    },
    {
        "id": "299",
        "pokedex_id": "103",
        "real_name": "Exeggutor",
        "name": "Exeggutor",
        "variation": "alolan",
        "img": "103_alolan_exeggutor.webp",
        "type_1": "grass",
        "type_2": "dragon"
    },
    {
        "id": "300",
        "pokedex_id": "9",
        "real_name": "Blastoise",
        "name": "Blastoise",
        "variation": "normal",
        "img": "9_blastoise.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "301",
        "pokedex_id": "9",
        "real_name": "Blastoise",
        "name": "Ash Blastoise",
        "variation": "special",
        "img": "9_ash_blastoise.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "302",
        "pokedex_id": "99",
        "real_name": "Kingler",
        "name": "Kingler",
        "variation": "normal",
        "img": "99_kingler.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "303",
        "pokedex_id": "98",
        "real_name": "Krabby",
        "name": "Krabby",
        "variation": "normal",
        "img": "98_krabby.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "304",
        "pokedex_id": "97",
        "real_name": "Hypno",
        "name": "Hypno",
        "variation": "normal",
        "img": "97_hypno.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "305",
        "pokedex_id": "96",
        "real_name": "Drowzee",
        "name": "Drowzee",
        "variation": "normal",
        "img": "96_drowzee.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "306",
        "pokedex_id": "95",
        "real_name": "Onix",
        "name": "Onix",
        "variation": "normal",
        "img": "95_onix.webp",
        "type_1": "rock",
        "type_2": "ground"
    },
    {
        "id": "307",
        "pokedex_id": "95",
        "real_name": "Onix",
        "name": "Brock Onix",
        "variation": "special",
        "img": "95_brock_onix.webp",
        "type_1": "rock",
        "type_2": "ground"
    },
    {
        "id": "308",
        "pokedex_id": "94",
        "real_name": "Gengar",
        "name": "Gengar",
        "variation": "normal",
        "img": "94_gengar.webp",
        "type_1": "ghost",
        "type_2": "poison"
    },
    {
        "id": "309",
        "pokedex_id": "93",
        "real_name": "Haunter",
        "name": "Haunter",
        "variation": "normal",
        "img": "93_haunter.webp",
        "type_1": "ghost",
        "type_2": "poison"
    },
    {
        "id": "310",
        "pokedex_id": "92",
        "real_name": "Gastly",
        "name": "Gastly",
        "variation": "normal",
        "img": "92_gastly.webp",
        "type_1": "ghost",
        "type_2": "poison"
    },
    {
        "id": "311",
        "pokedex_id": "91",
        "real_name": "Cloyster",
        "name": "Cloyster",
        "variation": "normal",
        "img": "91_cloyster.webp",
        "type_1": "water",
        "type_2": "ice"
    },
    {
        "id": "312",
        "pokedex_id": "90",
        "real_name": "Shellder",
        "name": "Shellder",
        "variation": "normal",
        "img": "90_shellder.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "313",
        "pokedex_id": "8",
        "real_name": "Wartortle",
        "name": "Wartortle",
        "variation": "normal",
        "img": "8_wartortle.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "314",
        "pokedex_id": "89",
        "real_name": "Muk",
        "name": "Muk",
        "variation": "normal",
        "img": "89_muk.webp",
        "type_1": "poison",
        "type_2": ""
    },
    {
        "id": "315",
        "pokedex_id": "88",
        "real_name": "Grimer",
        "name": "Grimer",
        "variation": "normal",
        "img": "88_grimer.webp",
        "type_1": "poison",
        "type_2": ""
    },
    {
        "id": "316",
        "pokedex_id": "87",
        "real_name": "Dewgong",
        "name": "Dewgong",
        "variation": "normal",
        "img": "87_dewgong.webp",
        "type_1": "water",
        "type_2": "ice"
    },
    {
        "id": "317",
        "pokedex_id": "877",
        "real_name": "Hungry Mode Morpeko",
        "name": "New Year Morpeko",
        "variation": "special",
        "img": "877_hangry_mode_morpeko.webp.webp",
        "type_1": "electric",
        "type_2": "dark"
    },
    {
        "id": "318",
        "pokedex_id": "877",
        "real_name": "Full Belly Mode Morpeko",
        "name": "New Year Morpeko",
        "variation": "normal",
        "img": "877_full_belly_mode_morpeko.webp",
        "type_1": "electric",
        "type_2": "dark"
    },
    {
        "id": "319",
        "pokedex_id": "86",
        "real_name": "Seel",
        "name": "Seel",
        "variation": "normal",
        "img": "86_seel.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "320",
        "pokedex_id": "85",
        "real_name": "Dodrio",
        "name": "Dodrio",
        "variation": "normal",
        "img": "85_dodrio.webp",
        "type_1": "normal",
        "type_2": "flying"
    },
    {
        "id": "321",
        "pokedex_id": "84",
        "real_name": "Doduo",
        "name": "Doduo",
        "variation": "normal",
        "img": "84_doduo.webp",
        "type_1": "normal",
        "type_2": "flying"
    },
    {
        "id": "322",
        "pokedex_id": "83",
        "real_name": "Farfetch`d",
        "name": "Farfetch d",
        "variation": "normal",
        "img": "83_farfetch'd.webp",
        "type_1": "normal",
        "type_2": "flying"
    },
    {
        "id": "323",
        "pokedex_id": "82",
        "real_name": "Magneton",
        "name": "Magneton",
        "variation": "normal",
        "img": "82_magneton.webp",
        "type_1": "electric",
        "type_2": "steel"
    },
    {
        "id": "324",
        "pokedex_id": "81",
        "real_name": "Magnemite",
        "name": "Magnemite",
        "variation": "normal",
        "img": "81_magnemite.webp",
        "type_1": "electric",
        "type_2": "steel"
    },
    {
        "id": "325",
        "pokedex_id": "80",
        "real_name": "Slowbro",
        "name": "Slowbrow",
        "variation": "normal",
        "img": "80_slowbro.webp",
        "type_1": "water",
        "type_2": "psychic"
    },
    {
        "id": "326",
        "pokedex_id": "808",
        "real_name": "Meltan",
        "name": "Meltan",
        "variation": "normal",
        "img": "808_meltan.webp",
        "type_1": "steel",
        "type_2": ""
    },
    {
        "id": "327",
        "pokedex_id": "7",
        "real_name": "Squirtle",
        "name": "Squirtle",
        "variation": "normal",
        "img": "7_squirtle.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "328",
        "pokedex_id": "7",
        "real_name": "Squirtle",
        "name": "Ash Squirtle",
        "variation": "special",
        "img": "7_ash_squirtle.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "329",
        "pokedex_id": "79",
        "real_name": "Slowpoke",
        "name": "Slowpoke",
        "variation": "normal",
        "img": "79_slowpoke.webp",
        "type_1": "water",
        "type_2": "psychic"
    },
    {
        "id": "330",
        "pokedex_id": "78",
        "real_name": "Rapidash",
        "name": "Rapidash",
        "variation": "normal",
        "img": "78_rapidash.webp",
        "type_1": "fire",
        "type_2": ""
    },
    {
        "id": "331",
        "pokedex_id": "783",
        "real_name": "Hakamo-o",
        "name": "Hakamo-o",
        "variation": "normal",
        "img": "783_hakamo-o.webp",
        "type_1": "dragon",
        "type_2": "fighting"
    },
    {
        "id": "332",
        "pokedex_id": "782",
        "real_name": "Jangmo-o",
        "name": "Jangmo-o",
        "variation": "normal",
        "img": "782_jangmo-o.webp",
        "type_1": "dragon",
        "type_2": ""
    },
    {
        "id": "333",
        "pokedex_id": "77",
        "real_name": "Ponyta",
        "name": "Ponyta",
        "variation": "normal",
        "img": "77_ponyta.webp",
        "type_1": "fire",
        "type_2": ""
    },
    {
        "id": "334",
        "pokedex_id": "778",
        "real_name": "Mimikyu",
        "name": "Mimikyu",
        "variation": "normal",
        "img": "778_mimikyu.webp",
        "type_1": "ghost",
        "type_2": "fairy"
    },
    {
        "id": "335",
        "pokedex_id": "778",
        "real_name": "Mimikyu",
        "name": "Jessie Mimikyu",
        "variation": "special",
        "img": "778_jessie_mimikyu.webp",
        "type_1": "ghost",
        "type_2": "fairy"
    },
    {
        "id": "336",
        "pokedex_id": "776",
        "real_name": "Turtonator",
        "name": "Turtonator",
        "variation": "normal",
        "img": "776_turtonator.webp",
        "type_1": "fire",
        "type_2": "dragon"
    },
    {
        "id": "337",
        "pokedex_id": "76",
        "real_name": "Golem",
        "name": "Golem",
        "variation": "normal",
        "img": "76_golem.webp",
        "type_1": "rock",
        "type_2": "ground"
    },
    {
        "id": "338",
        "pokedex_id": "765",
        "real_name": "Oranguru",
        "name": "Oranguru",
        "variation": "normal",
        "img": "765_oranguru.webp",
        "type_1": "normal",
        "type_2": "psychic"
    },
    {
        "id": "339",
        "pokedex_id": "760",
        "real_name": "Bewear",
        "name": "Bewear",
        "variation": "normal",
        "img": "760_bewear.webp",
        "type_1": "normal",
        "type_2": "fighting"
    },
    {
        "id": "340",
        "pokedex_id": "75",
        "real_name": "Graveler",
        "name": "Graveler",
        "variation": "normal",
        "img": "75_graveler.webp",
        "type_1": "rock",
        "type_2": "ground"
    },
    {
        "id": "341",
        "pokedex_id": "759",
        "real_name": "Stufful",
        "name": "Stufful",
        "variation": "normal",
        "img": "759_stufful.webp",
        "type_1": "normal",
        "type_2": "fighting"
    },
    {
        "id": "342",
        "pokedex_id": "758",
        "real_name": "Salazzle",
        "name": "Salazzle",
        "variation": "normal",
        "img": "758_salazzle.webp",
        "type_1": "poison",
        "type_2": "fire"
    },
    {
        "id": "343",
        "pokedex_id": "757",
        "real_name": "Salandit",
        "name": "Salandit",
        "variation": "normal",
        "img": "757_salandit.webp",
        "type_1": "poison",
        "type_2": "fire"
    },
    {
        "id": "344",
        "pokedex_id": "756",
        "real_name": "Shiinotic",
        "name": "Shiinotic",
        "variation": "normal",
        "img": "756_shiinotic.webp",
        "type_1": "grass",
        "type_2": "fairy"
    },
    {
        "id": "345",
        "pokedex_id": "755",
        "real_name": "Morelull",
        "name": "Morelull",
        "variation": "normal",
        "img": "755_morelull.webp",
        "type_1": "grass",
        "type_2": "fairy"
    },
    {
        "id": "346",
        "pokedex_id": "752",
        "real_name": "Araquanid",
        "name": "Araquanid",
        "variation": "normal",
        "img": "752_araquanid.webp",
        "type_1": "water",
        "type_2": "bug"
    },
    {
        "id": "347",
        "pokedex_id": "751",
        "real_name": "Dewpider",
        "name": "Dewpider",
        "variation": "normal",
        "img": "751_dewpider.webp",
        "type_1": "water",
        "type_2": "bug"
    },
    {
        "id": "348",
        "pokedex_id": "74",
        "real_name": "Geodude",
        "name": "Geodude",
        "variation": "normal",
        "img": "74_geodude.webp",
        "type_1": "rock",
        "type_2": "ground"
    },
    {
        "id": "349",
        "pokedex_id": "748",
        "real_name": "Toxapex",
        "name": "Toxapex",
        "variation": "normal",
        "img": "748_toxapex.webp",
        "type_1": "poison",
        "type_2": "water"
    },
    {
        "id": "350",
        "pokedex_id": "747",
        "real_name": "Mareanie",
        "name": "Mareanie",
        "variation": "normal",
        "img": "747_mareanie.webp",
        "type_1": "poison",
        "type_2": "water"
    },
    {
        "id": "351",
        "pokedex_id": "745",
        "real_name": "Midnight Form Lycanroc",
        "name": "Midnight Form Lycanroc",
        "variation": "special",
        "img": "745_midnight_form_lycanroc.webp.webp",
        "type_1": "rock",
        "type_2": ""
    },
    {
        "id": "352",
        "pokedex_id": "745",
        "real_name": "Midday Form Lycanroc",
        "name": "Midday Form Lycanroc",
        "variation": "normal",
        "img": "745_midday_form_lycanroc.webp",
        "type_1": "rock",
        "type_2": ""
    },
    {
        "id": "353",
        "pokedex_id": "745",
        "real_name": "Dusk Form Lycanroc",
        "name": "Dusk Form Lycanroc",
        "variation": "special",
        "img": "745_dusk_form_lycanroc.webp.webp",
        "type_1": "rock",
        "type_2": ""
    },
    {
        "id": "354",
        "pokedex_id": "744",
        "real_name": "Rockruff",
        "name": "Rockruff",
        "variation": "normal",
        "img": "744_rockruff.webp",
        "type_1": "rock",
        "type_2": ""
    },
    {
        "id": "355",
        "pokedex_id": "73",
        "real_name": "Tentacruel",
        "name": "Tentacruel",
        "variation": "normal",
        "img": "73_tentacruel.webp",
        "type_1": "water",
        "type_2": "poison"
    },
    {
        "id": "356",
        "pokedex_id": "738",
        "real_name": "Vikavolt",
        "name": "Vikavolt",
        "variation": "normal",
        "img": "738_vikavolt.webp",
        "type_1": "bug",
        "type_2": "electric"
    },
    {
        "id": "357",
        "pokedex_id": "737",
        "real_name": "Charjabug",
        "name": "Charjabug",
        "variation": "normal",
        "img": "737_charjabug.webp",
        "type_1": "bug",
        "type_2": "electric"
    },
    {
        "id": "358",
        "pokedex_id": "736",
        "real_name": "Grubbin",
        "name": "Grubbin",
        "variation": "normal",
        "img": "736_grubbin.webp",
        "type_1": "bug",
        "type_2": ""
    },
    {
        "id": "359",
        "pokedex_id": "72",
        "real_name": "Tentacool",
        "name": "Tentacool",
        "variation": "normal",
        "img": "72_tentacool.webp",
        "type_1": "water",
        "type_2": "poison"
    },
    {
        "id": "360",
        "pokedex_id": "725",
        "real_name": "Litten",
        "name": "Litten",
        "variation": "normal",
        "img": "725_litten.webp",
        "type_1": "fire",
        "type_2": ""
    },
    {
        "id": "361",
        "pokedex_id": "71",
        "real_name": "Victreebel",
        "name": "Victreebel",
        "variation": "normal",
        "img": "71_victreebel.webp",
        "type_1": "grass",
        "type_2": "poison"
    },
    {
        "id": "362",
        "pokedex_id": "718",
        "real_name": "Cell Form Zygarde",
        "name": "Core of Zygarde",
        "variation": "special",
        "img": "718_cell_form_zygarde.webp",
        "type_1": "dragon",
        "type_2": "ground"
    },
    {
        "id": "363",
        "pokedex_id": "718",
        "real_name": "50 Form Zygarde",
        "name": "Zygarde 50% Form",
        "variation": "normal",
        "img": "718_50_form_zygarde.webp",
        "type_1": "dragon",
        "type_2": "ground"
    },
    {
        "id": "364",
        "pokedex_id": "718",
        "real_name": "10 Form Zygarde",
        "name": "Zygarde 10% Form",
        "variation": "special",
        "img": "718_10_form_zygarde.webp",
        "type_1": "dragon",
        "type_2": "ground"
    },
    {
        "id": "365",
        "pokedex_id": "70",
        "real_name": "Weepinbell",
        "name": "Weepinbell",
        "variation": "normal",
        "img": "70_weepinbell.webp",
        "type_1": "grass",
        "type_2": "poison"
    },
    {
        "id": "366",
        "pokedex_id": "709",
        "real_name": "Trevenant",
        "name": "Trevenant",
        "variation": "normal",
        "img": "709_trevenant.webp",
        "type_1": "ghost",
        "type_2": "grass"
    },
    {
        "id": "367",
        "pokedex_id": "708",
        "real_name": "Phantump",
        "name": "Phantump",
        "variation": "normal",
        "img": "708_phantump.webp",
        "type_1": "ghost",
        "type_2": "grass"
    },
    {
        "id": "368",
        "pokedex_id": "705",
        "real_name": "Sliggoo",
        "name": "Sliggoo",
        "variation": "normal",
        "img": "705_sliggoo.webp",
        "type_1": "dragon",
        "type_2": ""
    },
    {
        "id": "369",
        "pokedex_id": "704",
        "real_name": "Goomy",
        "name": "Goomy",
        "variation": "normal",
        "img": "704_goomy.webp",
        "type_1": "dragon",
        "type_2": ""
    },
    {
        "id": "370",
        "pokedex_id": "702",
        "real_name": "Dedenne",
        "name": "Dedenne",
        "variation": "normal",
        "img": "702_dedenne.webp",
        "type_1": "electric",
        "type_2": "fairy"
    },
    {
        "id": "371",
        "pokedex_id": "701",
        "real_name": "Hawlucha",
        "name": "Ash Ketchum Hawlucha",
        "variation": "normal",
        "img": "701_hawlucha.webp",
        "type_1": "fighting",
        "type_2": "flying"
    },
    {
        "id": "372",
        "pokedex_id": "700",
        "real_name": "Sylveon",
        "name": "Sylveon",
        "variation": "normal",
        "img": "700_sylveon.webp",
        "type_1": "fairy",
        "type_2": ""
    },
    {
        "id": "373",
        "pokedex_id": "6",
        "real_name": "Charizard",
        "name": "Charizard",
        "variation": "normal",
        "img": "6_charizard.webp",
        "type_1": "fire",
        "type_2": "flying"
    },
    {
        "id": "374",
        "pokedex_id": "6",
        "real_name": "Charizard",
        "name": "Ash Charizard",
        "variation": "special",
        "img": "6_ash_charizard.webp",
        "type_1": "fire",
        "type_2": "flying"
    },
    {
        "id": "375",
        "pokedex_id": "69",
        "real_name": "Bellsprout",
        "name": "Bellsprout",
        "variation": "normal",
        "img": "69_bellsprout.webp",
        "type_1": "grass",
        "type_2": "poison"
    },
    {
        "id": "376",
        "pokedex_id": "699",
        "real_name": "Aurorus",
        "name": "Aurorus",
        "variation": "normal",
        "img": "699_aurorus.webp",
        "type_1": "rock",
        "type_2": "ice"
    },
    {
        "id": "377",
        "pokedex_id": "698",
        "real_name": "Amaura",
        "name": "Amaura",
        "variation": "normal",
        "img": "698_amaura.webp",
        "type_1": "rock",
        "type_2": "ice"
    },
    {
        "id": "378",
        "pokedex_id": "696",
        "real_name": "Tyrunt",
        "name": "Tyrunt",
        "variation": "normal",
        "img": "696_tyrunt.webp",
        "type_1": "rock",
        "type_2": "dragon"
    },
    {
        "id": "379",
        "pokedex_id": "68",
        "real_name": "Machamp",
        "name": "Machamp",
        "variation": "normal",
        "img": "68_machamp.webp",
        "type_1": "fighting",
        "type_2": ""
    },
    {
        "id": "380",
        "pokedex_id": "687",
        "real_name": "Malamar",
        "name": "Malamar",
        "variation": "normal",
        "img": "687_malamar.webp",
        "type_1": "dark",
        "type_2": "psychic"
    },
    {
        "id": "381",
        "pokedex_id": "686",
        "real_name": "Inkay",
        "name": "Inkay",
        "variation": "normal",
        "img": "686_inkay.webp",
        "type_1": "dark",
        "type_2": "psychic"
    },
    {
        "id": "382",
        "pokedex_id": "681",
        "real_name": "Shield Form Aegislash",
        "name": "Aegislash",
        "variation": "normal",
        "img": "681_shield_form_aegislash.webp",
        "type_1": "steel",
        "type_2": "ghost"
    },
    {
        "id": "383",
        "pokedex_id": "680",
        "real_name": "Doublade",
        "name": "Doublade",
        "variation": "normal",
        "img": "680_doublade.webp",
        "type_1": "steel",
        "type_2": "ghost"
    },
    {
        "id": "384",
        "pokedex_id": "67",
        "real_name": "Machoke",
        "name": "Machoke",
        "variation": "normal",
        "img": "67_machoke.webp",
        "type_1": "fighting",
        "type_2": ""
    },
    {
        "id": "385",
        "pokedex_id": "679",
        "real_name": "Honedge",
        "name": "Honedge",
        "variation": "normal",
        "img": "679_honedge.webp",
        "type_1": "steel",
        "type_2": "ghost"
    },
    {
        "id": "386",
        "pokedex_id": "678",
        "real_name": "Male Meowstic",
        "name": "Male Meowstic",
        "variation": "special",
        "img": "678_male_meowstic.webp.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "387",
        "pokedex_id": "678",
        "real_name": "Female Meowstic",
        "name": "Female Meowstic",
        "variation": "normal",
        "img": "678_female_meowstic.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "388",
        "pokedex_id": "675",
        "real_name": "Pangoro",
        "name": "Pangoro",
        "variation": "normal",
        "img": "675_pangoro.webp",
        "type_1": "fighting",
        "type_2": "dark"
    },
    {
        "id": "389",
        "pokedex_id": "674",
        "real_name": "Pancham",
        "name": "Pancham",
        "variation": "normal",
        "img": "674_pancham.webp",
        "type_1": "fighting",
        "type_2": ""
    },
    {
        "id": "390",
        "pokedex_id": "697",
        "real_name": "Tyrantrum",
        "name": "Tyrantrum",
        "variation": "normal",
        "img": "697_tyrantrum.webp",
        "type_1": "rock",
        "type_2": "dragon"
    },
    {
        "id": "391",
        "pokedex_id": "66",
        "real_name": "Machop",
        "name": "Machop",
        "variation": "normal",
        "img": "66_machop.webp",
        "type_1": "fighting",
        "type_2": ""
    },
    {
        "id": "392",
        "pokedex_id": "668",
        "real_name": "Pyroar",
        "name": "Pyroar",
        "variation": "normal",
        "img": "668_pyroar.webp",
        "type_1": "fire",
        "type_2": "normal"
    },
    {
        "id": "393",
        "pokedex_id": "667",
        "real_name": "Litleo",
        "name": "Litleo",
        "variation": "normal",
        "img": "667_litleo.webp",
        "type_1": "fire",
        "type_2": "normal"
    },
    {
        "id": "394",
        "pokedex_id": "662",
        "real_name": "Talonflame",
        "name": "Talonflame",
        "variation": "normal",
        "img": "662_talonflame.webp",
        "type_1": "fire",
        "type_2": "flying"
    },
    {
        "id": "395",
        "pokedex_id": "662",
        "real_name": "Fletchinder",
        "name": "Fletchinder",
        "variation": "normal",
        "img": "662_fletchinder.webp",
        "type_1": "fire",
        "type_2": "flying"
    },
    {
        "id": "396",
        "pokedex_id": "661",
        "real_name": "Fletchling",
        "name": "Fletchling",
        "variation": "normal",
        "img": "661_fletchling.webp",
        "type_1": "normal",
        "type_2": "flying"
    },
    {
        "id": "397",
        "pokedex_id": "65",
        "real_name": "Alakazam",
        "name": "Alakazam",
        "variation": "normal",
        "img": "65_alakazam.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "398",
        "pokedex_id": "658",
        "real_name": "Greninja",
        "name": "Greninja",
        "variation": "normal",
        "img": "658_greninja.webp",
        "type_1": "water",
        "type_2": "dark"
    },
    {
        "id": "399",
        "pokedex_id": "657",
        "real_name": "Frogadier",
        "name": "Frogadier",
        "variation": "normal",
        "img": "657_frogadier.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "400",
        "pokedex_id": "656",
        "real_name": "Froakie",
        "name": "Froakie",
        "variation": "normal",
        "img": "656_froakie.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "401",
        "pokedex_id": "655",
        "real_name": "Delphox",
        "name": "Delphox",
        "variation": "normal",
        "img": "655_delphox.webp",
        "type_1": "fire",
        "type_2": "psychic"
    },
    {
        "id": "402",
        "pokedex_id": "654",
        "real_name": "Braixen",
        "name": "Braixen",
        "variation": "normal",
        "img": "654_braixen.webp",
        "type_1": "fire",
        "type_2": ""
    },
    {
        "id": "403",
        "pokedex_id": "653",
        "real_name": "Fennekin",
        "name": "Fennekin",
        "variation": "normal",
        "img": "653_fennekin.webp",
        "type_1": "fire",
        "type_2": ""
    },
    {
        "id": "404",
        "pokedex_id": "64",
        "real_name": "Kadabra",
        "name": "Kadabra",
        "variation": "normal",
        "img": "64_kadabra.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "405",
        "pokedex_id": "63",
        "real_name": "Abra",
        "name": "Abra",
        "variation": "normal",
        "img": "63_abra.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "406",
        "pokedex_id": "637",
        "real_name": "Volcarona",
        "name": "Volcarona",
        "variation": "normal",
        "img": "637_volcarona.webp",
        "type_1": "bug",
        "type_2": "fire"
    },
    {
        "id": "407",
        "pokedex_id": "636",
        "real_name": "Larvesta",
        "name": "Larvesta",
        "variation": "normal",
        "img": "636_larvesta.webp",
        "type_1": "bug",
        "type_2": "fire"
    },
    {
        "id": "408",
        "pokedex_id": "634",
        "real_name": "Zweilous",
        "name": "Zweilous",
        "variation": "normal",
        "img": "634_zweilous.webp",
        "type_1": "dark",
        "type_2": "dragon"
    },
    {
        "id": "409",
        "pokedex_id": "633",
        "real_name": "Deino",
        "name": "Deino",
        "variation": "normal",
        "img": "633_deino.webp",
        "type_1": "dark",
        "type_2": "dragon"
    },
    {
        "id": "410",
        "pokedex_id": "62",
        "real_name": "Poliwrath",
        "name": "Poliwrath",
        "variation": "normal",
        "img": "62_poliwrath.webp",
        "type_1": "water",
        "type_2": "fighting"
    },
    {
        "id": "411",
        "pokedex_id": "61",
        "real_name": "Poliwhirl",
        "name": "Poliwhirl",
        "variation": "normal",
        "img": "61_poliwhirl.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "412",
        "pokedex_id": "617",
        "real_name": "Accelgor",
        "name": "Accelgor",
        "variation": "normal",
        "img": "617_accelgor.webp",
        "type_1": "bug",
        "type_2": ""
    },
    {
        "id": "413",
        "pokedex_id": "616",
        "real_name": "Shelmet",
        "name": "Shelmet",
        "variation": "normal",
        "img": "616_shelmet.webp",
        "type_1": "bug",
        "type_2": ""
    },
    {
        "id": "414",
        "pokedex_id": "615",
        "real_name": "Cryogonal",
        "name": "Cryogonal",
        "variation": "normal",
        "img": "615_cryogonal.webp",
        "type_1": "ice",
        "type_2": ""
    },
    {
        "id": "415",
        "pokedex_id": "611",
        "real_name": "Fraxure",
        "name": "Fraxure",
        "variation": "normal",
        "img": "611_fraxure.webp",
        "type_1": "dragon",
        "type_2": ""
    },
    {
        "id": "416",
        "pokedex_id": "610",
        "real_name": "Axew",
        "name": "Axew",
        "variation": "normal",
        "img": "610_axew.webp",
        "type_1": "dragon",
        "type_2": ""
    },
    {
        "id": "417",
        "pokedex_id": "60",
        "real_name": "Poliwag",
        "name": "Poliwag",
        "variation": "normal",
        "img": "60_poliwag.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "418",
        "pokedex_id": "609",
        "real_name": "Chandelure",
        "name": "Chandelure",
        "variation": "normal",
        "img": "609_chandelure.webp",
        "type_1": "ghost",
        "type_2": "fire"
    },
    {
        "id": "419",
        "pokedex_id": "608",
        "real_name": "Lampent",
        "name": "Lampent",
        "variation": "normal",
        "img": "608_lampent.webp",
        "type_1": "ghost",
        "type_2": "fire"
    },
    {
        "id": "420",
        "pokedex_id": "607",
        "real_name": "Litwick",
        "name": "Litwick",
        "variation": "normal",
        "img": "607_litwick.webp",
        "type_1": "ghost",
        "type_2": "fire"
    },
    {
        "id": "421",
        "pokedex_id": "5",
        "real_name": "Charmeleon",
        "name": "Charmeleon",
        "variation": "normal",
        "img": "5_charmeleon.webp",
        "type_1": "fire",
        "type_2": ""
    },
    {
        "id": "422",
        "pokedex_id": "58",
        "real_name": "Growlithe",
        "name": "Growlithe",
        "variation": "normal",
        "img": "58_growlithe.webp",
        "type_1": "fire",
        "type_2": ""
    },
    {
        "id": "423",
        "pokedex_id": "587",
        "real_name": "Emolga",
        "name": "Emolga",
        "variation": "normal",
        "img": "587_emolga.webp",
        "type_1": "electric",
        "type_2": "flying"
    },
    {
        "id": "424",
        "pokedex_id": "583",
        "real_name": "Vanillish",
        "name": "Vanillish",
        "variation": "normal",
        "img": "583_vanillish.webp",
        "type_1": "ice",
        "type_2": ""
    },
    {
        "id": "425",
        "pokedex_id": "582",
        "real_name": "Vanillite",
        "name": "Vanillite",
        "variation": "normal",
        "img": "582_vanillite.webp",
        "type_1": "ice",
        "type_2": ""
    },
    {
        "id": "426",
        "pokedex_id": "57",
        "real_name": "Primeape",
        "name": "Primeape",
        "variation": "normal",
        "img": "57_primeape.webp",
        "type_1": "fighting",
        "type_2": ""
    },
    {
        "id": "427",
        "pokedex_id": "576",
        "real_name": "Gothitelle",
        "name": "Gothitelle",
        "variation": "normal",
        "img": "576_gothitelle.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "428",
        "pokedex_id": "575",
        "real_name": "Gothorita",
        "name": "Gothorita",
        "variation": "normal",
        "img": "575_gothorita.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "429",
        "pokedex_id": "574",
        "real_name": "Gothita",
        "name": "Gothita",
        "variation": "normal",
        "img": "574_gothita.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "430",
        "pokedex_id": "573",
        "real_name": "Cinccino",
        "name": "Cinccino",
        "variation": "normal",
        "img": "573_cinccino.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "431",
        "pokedex_id": "572",
        "real_name": "Minccino",
        "name": "Minccino",
        "variation": "normal",
        "img": "572_minccino.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "432",
        "pokedex_id": "56",
        "real_name": "Mankey",
        "name": "Mankey",
        "variation": "normal",
        "img": "56_mankey.webp",
        "type_1": "fighting",
        "type_2": ""
    },
    {
        "id": "433",
        "pokedex_id": "567",
        "real_name": "Archeops",
        "name": "Archeops",
        "variation": "normal",
        "img": "567_archeops.webp",
        "type_1": "rock",
        "type_2": "flying"
    },
    {
        "id": "434",
        "pokedex_id": "566",
        "real_name": "Archen",
        "name": "Archen",
        "variation": "normal",
        "img": "566_archen.webp",
        "type_1": "rock",
        "type_2": "flying"
    },
    {
        "id": "435",
        "pokedex_id": "563",
        "real_name": "Cofagrigus",
        "name": "Cofagrigus",
        "variation": "normal",
        "img": "563_cofagrigus.webp",
        "type_1": "ghost",
        "type_2": ""
    },
    {
        "id": "735",
        "pokedex_id": "584",
        "real_name": "Vanilluxe",
        "name": "Vanilluxe",
        "variation": "normal",
        "img": "584_vanilluxe.webp",
        "type_1": "ice",
        "type_2": ""
    },
    {
        "id": "437",
        "pokedex_id": "562",
        "real_name": "Yamask",
        "name": "Crying Mask",
        "variation": "normal",
        "img": "562_yamask.webp",
        "type_1": "ghost",
        "type_2": ""
    },
    {
        "id": "438",
        "pokedex_id": "55",
        "real_name": "Golduck",
        "name": "Golduck",
        "variation": "normal",
        "img": "55_golduck.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "439",
        "pokedex_id": "553",
        "real_name": "Krookodile",
        "name": "Krookodile",
        "variation": "normal",
        "img": "553_krookodile.webp",
        "type_1": "ground",
        "type_2": "dark"
    },
    {
        "id": "440",
        "pokedex_id": "552",
        "real_name": "Krokorok",
        "name": "Krokorok",
        "variation": "normal",
        "img": "552_krokorok.webp",
        "type_1": "ground",
        "type_2": "dark"
    },
    {
        "id": "441",
        "pokedex_id": "551",
        "real_name": "Sandile",
        "name": "Sandile",
        "variation": "normal",
        "img": "551_sandile.webp",
        "type_1": "ground",
        "type_2": "dark"
    },
    {
        "id": "442",
        "pokedex_id": "54",
        "real_name": "Psyduck",
        "name": "Psyduck",
        "variation": "normal",
        "img": "54_psyduck.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "443",
        "pokedex_id": "547",
        "real_name": "Whimsicott",
        "name": "Whimsicott",
        "variation": "normal",
        "img": "547_whimsicott.webp",
        "type_1": "grass",
        "type_2": "fairy"
    },
    {
        "id": "444",
        "pokedex_id": "546",
        "real_name": "Cottonee",
        "name": "Cottonee",
        "variation": "normal",
        "img": "546_cottonee.webp",
        "type_1": "grass",
        "type_2": "fairy"
    },
    {
        "id": "445",
        "pokedex_id": "53",
        "real_name": "Persian",
        "name": "Persian",
        "variation": "normal",
        "img": "53_persian.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "446",
        "pokedex_id": "531",
        "real_name": "Audino",
        "name": "Audino",
        "variation": "normal",
        "img": "531_audino.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "447",
        "pokedex_id": "52",
        "real_name": "Meowth",
        "name": "Team Rocket Meowth",
        "variation": "special",
        "img": "52_team_rocket_meowth.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "448",
        "pokedex_id": "52",
        "real_name": "Meowth",
        "name": "Meowth",
        "variation": "normal",
        "img": "52_meowth.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "449",
        "pokedex_id": "51",
        "real_name": "Dugtrio",
        "name": "Dugtrio",
        "variation": "normal",
        "img": "51_dugtrio.webp",
        "type_1": "ground",
        "type_2": ""
    },
    {
        "id": "450",
        "pokedex_id": "50",
        "real_name": "Diglett",
        "name": "Diglett",
        "variation": "normal",
        "img": "50_diglett.webp",
        "type_1": "ground",
        "type_2": ""
    },
    {
        "id": "451",
        "pokedex_id": "4",
        "real_name": "Charmander",
        "name": "Charmander",
        "variation": "normal",
        "img": "4_charmander.webp",
        "type_1": "fire",
        "type_2": ""
    },
    {
        "id": "452",
        "pokedex_id": "49",
        "real_name": "Venomoth",
        "name": "Venomoth",
        "variation": "normal",
        "img": "49_venomoth.webp",
        "type_1": "bug",
        "type_2": "poison"
    },
    {
        "id": "453",
        "pokedex_id": "498",
        "real_name": "Tepig",
        "name": "Tepig",
        "variation": "normal",
        "img": "498_tepig.webp",
        "type_1": "fire",
        "type_2": ""
    },
    {
        "id": "454",
        "pokedex_id": "497",
        "real_name": "Serperior",
        "name": "Serperior",
        "variation": "normal",
        "img": "497_serperior.webp",
        "type_1": "grass",
        "type_2": ""
    },
    {
        "id": "455",
        "pokedex_id": "496",
        "real_name": "Servine",
        "name": "Servine",
        "variation": "normal",
        "img": "496_servine.webp",
        "type_1": "grass",
        "type_2": ""
    },
    {
        "id": "456",
        "pokedex_id": "495",
        "real_name": "Snivy",
        "name": "Snivy",
        "variation": "normal",
        "img": "495_snivy.webp",
        "type_1": "grass",
        "type_2": ""
    },
    {
        "id": "457",
        "pokedex_id": "48",
        "real_name": "Venonat",
        "name": "Venonat",
        "variation": "normal",
        "img": "48_venonat.webp",
        "type_1": "bug",
        "type_2": "poison"
    },
    {
        "id": "458",
        "pokedex_id": "47",
        "real_name": "Parasect",
        "name": "Parasect",
        "variation": "normal",
        "img": "47_parasect.webp",
        "type_1": "bug",
        "type_2": "grass"
    },
    {
        "id": "459",
        "pokedex_id": "477",
        "real_name": "Dusknoir",
        "name": "Dusknoir",
        "variation": "normal",
        "img": "477_dusknoir.webp",
        "type_1": "ghost",
        "type_2": ""
    },
    {
        "id": "460",
        "pokedex_id": "476",
        "real_name": "Probopass",
        "name": "Probopass",
        "variation": "normal",
        "img": "476_probopass.webp",
        "type_1": "rock",
        "type_2": "steel"
    },
    {
        "id": "461",
        "pokedex_id": "475",
        "real_name": "Gallade",
        "name": "Gallade",
        "variation": "normal",
        "img": "475_gallade.webp",
        "type_1": "psychic",
        "type_2": "fighting"
    },
    {
        "id": "462",
        "pokedex_id": "474",
        "real_name": "Porygon-z",
        "name": "Porygon-z",
        "variation": "normal",
        "img": "474_porygon-z.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "463",
        "pokedex_id": "473",
        "real_name": "Mamoswine",
        "name": "Mamoswine",
        "variation": "normal",
        "img": "473_mamoswine.webp",
        "type_1": "ice",
        "type_2": "ground"
    },
    {
        "id": "464",
        "pokedex_id": "471",
        "real_name": "Glaceon",
        "name": "Glaceon",
        "variation": "normal",
        "img": "471_glaceon.webp",
        "type_1": "ice",
        "type_2": ""
    },
    {
        "id": "465",
        "pokedex_id": "470",
        "real_name": "Leafeon",
        "name": "Leafeon",
        "variation": "normal",
        "img": "470_leafeon.webp",
        "type_1": "grass",
        "type_2": ""
    },
    {
        "id": "466",
        "pokedex_id": "46",
        "real_name": "Paras",
        "name": "Paras",
        "variation": "normal",
        "img": "46_paras.webp",
        "type_1": "bug",
        "type_2": "grass"
    },
    {
        "id": "467",
        "pokedex_id": "468",
        "real_name": "Togekiss",
        "name": "Togekiss",
        "variation": "normal",
        "img": "468_togekiss.webp",
        "type_1": "fairy",
        "type_2": "flying"
    },
    {
        "id": "468",
        "pokedex_id": "467",
        "real_name": "Magmortar",
        "name": "Magmortar",
        "variation": "normal",
        "img": "467_magmortar.webp",
        "type_1": "fire",
        "type_2": ""
    },
    {
        "id": "469",
        "pokedex_id": "466",
        "real_name": "Electivire",
        "name": "Electivire",
        "variation": "normal",
        "img": "466_electivire.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "470",
        "pokedex_id": "465",
        "real_name": "Tangrowth",
        "name": "Tangrowth",
        "variation": "normal",
        "img": "465_tangrowth.webp",
        "type_1": "grass",
        "type_2": ""
    },
    {
        "id": "471",
        "pokedex_id": "464",
        "real_name": "Rhyperior",
        "name": "Rhyperior",
        "variation": "normal",
        "img": "464_rhyperior.webp",
        "type_1": "ground",
        "type_2": "rock"
    },
    {
        "id": "472",
        "pokedex_id": "463",
        "real_name": "Lickilicky",
        "name": "Lickilicky",
        "variation": "normal",
        "img": "463_lickilicky.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "473",
        "pokedex_id": "462",
        "real_name": "Magnezone",
        "name": "Magnezone",
        "variation": "normal",
        "img": "462_magnezone.webp",
        "type_1": "electric",
        "type_2": "steel"
    },
    {
        "id": "474",
        "pokedex_id": "461",
        "real_name": "Weavile",
        "name": "Weavile",
        "variation": "normal",
        "img": "461_weavile.webp",
        "type_1": "dark",
        "type_2": "ice"
    },
    {
        "id": "475",
        "pokedex_id": "460",
        "real_name": "Abomasnow",
        "name": "Abomasnow",
        "variation": "normal",
        "img": "460_abomasnow.webp",
        "type_1": "grass",
        "type_2": "ice"
    },
    {
        "id": "476",
        "pokedex_id": "45",
        "real_name": "Vileplume",
        "name": "Vileplume",
        "variation": "normal",
        "img": "45_vileplume.webp",
        "type_1": "grass",
        "type_2": "poison"
    },
    {
        "id": "477",
        "pokedex_id": "459",
        "real_name": "Snover",
        "name": "Snover",
        "variation": "normal",
        "img": "459_snover.webp",
        "type_1": "grass",
        "type_2": "ice"
    },
    {
        "id": "478",
        "pokedex_id": "458",
        "real_name": "Mantyke",
        "name": "Mantyke",
        "variation": "normal",
        "img": "458_mantyke.webp",
        "type_1": "water",
        "type_2": "flying"
    },
    {
        "id": "479",
        "pokedex_id": "457",
        "real_name": "Lumineon",
        "name": "Lumineon",
        "variation": "normal",
        "img": "457_lumineon.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "480",
        "pokedex_id": "454",
        "real_name": "Toxicroak",
        "name": "Toxicroak",
        "variation": "normal",
        "img": "454_toxicroak.webp",
        "type_1": "poison",
        "type_2": "fighting"
    },
    {
        "id": "481",
        "pokedex_id": "453",
        "real_name": "Croagunk",
        "name": "Croagunk",
        "variation": "normal",
        "img": "453_croagunk.webp",
        "type_1": "poison",
        "type_2": "fighting"
    },
    {
        "id": "482",
        "pokedex_id": "452",
        "real_name": "Drapion",
        "name": "Drapion",
        "variation": "normal",
        "img": "452_drapion.webp",
        "type_1": "poison",
        "type_2": "dark"
    },
    {
        "id": "483",
        "pokedex_id": "451",
        "real_name": "Skorupi",
        "name": "Skorupi",
        "variation": "normal",
        "img": "451_skorupi.webp",
        "type_1": "poison",
        "type_2": "bug"
    },
    {
        "id": "484",
        "pokedex_id": "44",
        "real_name": "Gloom",
        "name": "Gloom",
        "variation": "normal",
        "img": "44_gloom.webp",
        "type_1": "grass",
        "type_2": "poison"
    },
    {
        "id": "485",
        "pokedex_id": "448",
        "real_name": "Lucario",
        "name": "Lucario",
        "variation": "normal",
        "img": "448_lucario.webp",
        "type_1": "fighting",
        "type_2": "steel"
    },
    {
        "id": "486",
        "pokedex_id": "447",
        "real_name": "Riolu",
        "name": "Riolu",
        "variation": "normal",
        "img": "447_riolu.webp",
        "type_1": "fighting",
        "type_2": ""
    },
    {
        "id": "487",
        "pokedex_id": "446",
        "real_name": "Munchlax",
        "name": "Munchlax",
        "variation": "normal",
        "img": "446_munchlax.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "488",
        "pokedex_id": "444",
        "real_name": "Gabite",
        "name": "Gabite",
        "variation": "normal",
        "img": "444_gabite.webp",
        "type_1": "dragon",
        "type_2": "ground"
    },
    {
        "id": "489",
        "pokedex_id": "443",
        "real_name": "Gible",
        "name": "Gible",
        "variation": "normal",
        "img": "443_gible.webp",
        "type_1": "dragon",
        "type_2": "ground"
    },
    {
        "id": "490",
        "pokedex_id": "440",
        "real_name": "Happiny",
        "name": "Happiny",
        "variation": "normal",
        "img": "440_happiny.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "491",
        "pokedex_id": "43",
        "real_name": "Oddish",
        "name": "Oddish",
        "variation": "normal",
        "img": "43_oddish.webp",
        "type_1": "grass",
        "type_2": "poison"
    },
    {
        "id": "492",
        "pokedex_id": "439",
        "real_name": "Mime Jr.",
        "name": "Mime Jr.",
        "variation": "normal",
        "img": "439_mime jr..webp",
        "type_1": "psychic",
        "type_2": "fairy"
    },
    {
        "id": "493",
        "pokedex_id": "437",
        "real_name": "Bronzong",
        "name": "Bronzong",
        "variation": "normal",
        "img": "437_bronzong.webp",
        "type_1": "steel",
        "type_2": "psychic"
    },
    {
        "id": "494",
        "pokedex_id": "436",
        "real_name": "Bronzor",
        "name": "Bronzor",
        "variation": "normal",
        "img": "436_bronzor.webp",
        "type_1": "steel",
        "type_2": "psychic"
    },
    {
        "id": "495",
        "pokedex_id": "430",
        "real_name": "Honchkrow",
        "name": "Honchkrow",
        "variation": "normal",
        "img": "430_honchkrow.webp",
        "type_1": "dark",
        "type_2": "flying"
    },
    {
        "id": "496",
        "pokedex_id": "42",
        "real_name": "Golbat",
        "name": "Golbat",
        "variation": "normal",
        "img": "42_golbat.webp",
        "type_1": "poison",
        "type_2": "flying"
    },
    {
        "id": "497",
        "pokedex_id": "428",
        "real_name": "Lopunny",
        "name": "Lopunny",
        "variation": "normal",
        "img": "428_lopunny.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "498",
        "pokedex_id": "427",
        "real_name": "Buneary",
        "name": "Buneary",
        "variation": "normal",
        "img": "427_buneary.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "499",
        "pokedex_id": "41",
        "real_name": "Zubat",
        "name": "Zubat",
        "variation": "normal",
        "img": "41_zubat.webp",
        "type_1": "poison",
        "type_2": "flying"
    },
    {
        "id": "500",
        "pokedex_id": "40",
        "real_name": "Wigglytuff",
        "name": "Wigglytuff",
        "variation": "normal",
        "img": "40_wigglytuff.webp",
        "type_1": "normal",
        "type_2": "fairy"
    },
    {
        "id": "501",
        "pokedex_id": "409",
        "real_name": "Rampardos",
        "name": "Rampardos",
        "variation": "normal",
        "img": "409_rampardos.webp",
        "type_1": "rock",
        "type_2": ""
    },
    {
        "id": "502",
        "pokedex_id": "408",
        "real_name": "Cranidos",
        "name": "Cranidos",
        "variation": "normal",
        "img": "408_cranidos.webp",
        "type_1": "rock",
        "type_2": ""
    },
    {
        "id": "503",
        "pokedex_id": "405",
        "real_name": "Luxray",
        "name": "Luxray",
        "variation": "normal",
        "img": "405_luxray.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "504",
        "pokedex_id": "404",
        "real_name": "Luxio",
        "name": "Luxio",
        "variation": "normal",
        "img": "404_luxio.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "505",
        "pokedex_id": "403",
        "real_name": "Shinx",
        "name": "Shinx",
        "variation": "normal",
        "img": "403_shinx.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "506",
        "pokedex_id": "3",
        "real_name": "Venusaur",
        "name": "Venusaur",
        "variation": "normal",
        "img": "3_venusaur.webp",
        "type_1": "grass",
        "type_2": "poison"
    },
    {
        "id": "507",
        "pokedex_id": "39",
        "real_name": "Jigglypuff",
        "name": "Jigglypuff",
        "variation": "normal",
        "img": "39_jigglypuff.webp",
        "type_1": "normal",
        "type_2": "fairy"
    },
    {
        "id": "508",
        "pokedex_id": "395",
        "real_name": "Empoleon",
        "name": "Empoleon",
        "variation": "normal",
        "img": "395_empoleon.webp",
        "type_1": "water",
        "type_2": "steel"
    },
    {
        "id": "509",
        "pokedex_id": "394",
        "real_name": "Prinplup",
        "name": "Prinplup",
        "variation": "normal",
        "img": "394_prinplup.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "510",
        "pokedex_id": "393",
        "real_name": "Piplup",
        "name": "Piplup",
        "variation": "normal",
        "img": "393_piplup.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "511",
        "pokedex_id": "392",
        "real_name": "Infernape",
        "name": "Infernape",
        "variation": "normal",
        "img": "392_infernape.webp",
        "type_1": "fire",
        "type_2": "fighting"
    },
    {
        "id": "512",
        "pokedex_id": "392",
        "real_name": "Infernape",
        "name": "Ash Infernape",
        "variation": "special",
        "img": "392_ash_infernape.webp",
        "type_1": "fire",
        "type_2": "fighting"
    },
    {
        "id": "513",
        "pokedex_id": "391",
        "real_name": "Monferno",
        "name": "Monferno",
        "variation": "normal",
        "img": "391_monferno.webp",
        "type_1": "fire",
        "type_2": "fighting"
    },
    {
        "id": "514",
        "pokedex_id": "390",
        "real_name": "Chimchar",
        "name": "Chimchar",
        "variation": "normal",
        "img": "390_chimchar.webp",
        "type_1": "fire",
        "type_2": ""
    },
    {
        "id": "515",
        "pokedex_id": "38",
        "real_name": "Ninetales",
        "name": "Ninetales",
        "variation": "normal",
        "img": "38_ninetales.webp",
        "type_1": "fire",
        "type_2": ""
    },
    {
        "id": "516",
        "pokedex_id": "389",
        "real_name": "Torterra",
        "name": "Torterra",
        "variation": "normal",
        "img": "389_torterra.webp",
        "type_1": "grass",
        "type_2": "ground"
    },
    {
        "id": "517",
        "pokedex_id": "388",
        "real_name": "Grotle",
        "name": "Grotle",
        "variation": "normal",
        "img": "388_grotle.webp",
        "type_1": "grass",
        "type_2": ""
    },
    {
        "id": "518",
        "pokedex_id": "387",
        "real_name": "Turtwig",
        "name": "Turtwig",
        "variation": "normal",
        "img": "387_turtwig.webp",
        "type_1": "grass",
        "type_2": ""
    },
    {
        "id": "519",
        "pokedex_id": "37",
        "real_name": "Vulpix",
        "name": "Vulpix",
        "variation": "normal",
        "img": "37_vulpix.webp",
        "type_1": "fire",
        "type_2": ""
    },
    {
        "id": "520",
        "pokedex_id": "375",
        "real_name": "Metang",
        "name": "Metang",
        "variation": "normal",
        "img": "375_metang.webp",
        "type_1": "steel",
        "type_2": "psychic"
    },
    {
        "id": "521",
        "pokedex_id": "374",
        "real_name": "Beldum",
        "name": "Beldum",
        "variation": "normal",
        "img": "374_beldum.webp",
        "type_1": "steel",
        "type_2": "psychic"
    },
    {
        "id": "522",
        "pokedex_id": "372",
        "real_name": "Shelgon",
        "name": "Shelgon",
        "variation": "normal",
        "img": "372_shelgon.webp",
        "type_1": "dragon",
        "type_2": ""
    },
    {
        "id": "523",
        "pokedex_id": "371",
        "real_name": "Bagon",
        "name": "Bagon",
        "variation": "normal",
        "img": "371_bagon.webp",
        "type_1": "dragon",
        "type_2": ""
    },
    {
        "id": "524",
        "pokedex_id": "36",
        "real_name": "Clefable",
        "name": "Clefable",
        "variation": "normal",
        "img": "36_clefable.webp",
        "type_1": "fairy",
        "type_2": ""
    },
    {
        "id": "525",
        "pokedex_id": "478",
        "real_name": "Froslass",
        "name": "Froslass",
        "variation": "normal",
        "img": "478_froslass.webp",
        "type_1": "ice",
        "type_2": "ghost"
    },
    {
        "id": "526",
        "pokedex_id": "367",
        "real_name": "Huntail",
        "name": "Huntail",
        "variation": "normal",
        "img": "367_huntail.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "527",
        "pokedex_id": "366",
        "real_name": "Clamperl",
        "name": "Clamperl",
        "variation": "normal",
        "img": "366_clamperl.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "528",
        "pokedex_id": "360",
        "real_name": "Wynaut",
        "name": "Wynaut",
        "variation": "normal",
        "img": "360_wynaut.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "529",
        "pokedex_id": "35",
        "real_name": "Clefairy",
        "name": "Clefairy",
        "variation": "normal",
        "img": "35_clefairy.webp",
        "type_1": "fairy",
        "type_2": ""
    },
    {
        "id": "530",
        "pokedex_id": "359",
        "real_name": "Absol",
        "name": "Absol",
        "variation": "normal",
        "img": "359_absol.webp",
        "type_1": "dark",
        "type_2": ""
    },
    {
        "id": "531",
        "pokedex_id": "357",
        "real_name": "Tropius",
        "name": "Tropius",
        "variation": "normal",
        "img": "357_tropius.webp",
        "type_1": "grass",
        "type_2": "flying"
    },
    {
        "id": "532",
        "pokedex_id": "356",
        "real_name": "Dusclops",
        "name": "Dusclops",
        "variation": "normal",
        "img": "356_dusclops.webp",
        "type_1": "ghost",
        "type_2": ""
    },
    {
        "id": "533",
        "pokedex_id": "355",
        "real_name": "Duskull",
        "name": "Duskull",
        "variation": "normal",
        "img": "355_duskull.webp",
        "type_1": "ghost",
        "type_2": ""
    },
    {
        "id": "534",
        "pokedex_id": "354",
        "real_name": "Banette",
        "name": "Banette",
        "variation": "normal",
        "img": "354_banette.webp",
        "type_1": "ghost",
        "type_2": ""
    },
    {
        "id": "535",
        "pokedex_id": "353",
        "real_name": "Shuppet",
        "name": "Shuppet",
        "variation": "normal",
        "img": "353_shuppet.webp",
        "type_1": "ghost",
        "type_2": ""
    },
    {
        "id": "536",
        "pokedex_id": "351",
        "real_name": "Rainy Form Castform",
        "name": "Rainy Form Castform",
        "variation": "special",
        "img": "351_rany_form_castform.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "537",
        "pokedex_id": "351",
        "real_name": "Castform",
        "name": "Castform",
        "variation": "normal",
        "img": "351_castform.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "538",
        "pokedex_id": "350",
        "real_name": "Milotic",
        "name": "Milotic",
        "variation": "normal",
        "img": "350_milotic.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "539",
        "pokedex_id": "34",
        "real_name": "Nidoking",
        "name": "Nidoking",
        "variation": "normal",
        "img": "34_nidoking.webp",
        "type_1": "poison",
        "type_2": "ground"
    },
    {
        "id": "540",
        "pokedex_id": "349",
        "real_name": "Feebas",
        "name": "Feebas",
        "variation": "normal",
        "img": "349_feebas.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "541",
        "pokedex_id": "348",
        "real_name": "Armaldo",
        "name": "Armaldo",
        "variation": "normal",
        "img": "348_armaldo.webp",
        "type_1": "rock",
        "type_2": "bug"
    },
    {
        "id": "542",
        "pokedex_id": "347",
        "real_name": "Anorith",
        "name": "Anorith",
        "variation": "normal",
        "img": "347_anorith.webp",
        "type_1": "rock",
        "type_2": "bug"
    },
    {
        "id": "543",
        "pokedex_id": "346",
        "real_name": "Cradily",
        "name": "Cradily",
        "variation": "normal",
        "img": "346_cradily.webp",
        "type_1": "rock",
        "type_2": "grass"
    },
    {
        "id": "544",
        "pokedex_id": "345",
        "real_name": "Lileep",
        "name": "Lileep",
        "variation": "normal",
        "img": "345_lileep.webp",
        "type_1": "rock",
        "type_2": "grass"
    },
    {
        "id": "545",
        "pokedex_id": "344",
        "real_name": "Claydol",
        "name": "Claydol",
        "variation": "normal",
        "img": "344_claydol.webp",
        "type_1": "ground",
        "type_2": "psychic"
    },
    {
        "id": "546",
        "pokedex_id": "343",
        "real_name": "Baltoy",
        "name": "Baltoy",
        "variation": "normal",
        "img": "343_baltoy.webp",
        "type_1": "ground",
        "type_2": "psychic"
    },
    {
        "id": "547",
        "pokedex_id": "342",
        "real_name": "Crawdaunt",
        "name": "Giant Crawdaunt",
        "variation": "special",
        "img": "342_giant_crawdaunt.webp",
        "type_1": "water",
        "type_2": "dark"
    },
    {
        "id": "548",
        "pokedex_id": "342",
        "real_name": "Crawdaunt",
        "name": "Crawdaunt",
        "variation": "normal",
        "img": "342_crawdaunt.webp",
        "type_1": "water",
        "type_2": "dark"
    },
    {
        "id": "549",
        "pokedex_id": "341",
        "real_name": "Corphish",
        "name": "Corphish",
        "variation": "normal",
        "img": "341_corphish.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "550",
        "pokedex_id": "334",
        "real_name": "Altaria",
        "name": "Altaria",
        "variation": "normal",
        "img": "334_altaria.webp",
        "type_1": "dragon",
        "type_2": "flying"
    },
    {
        "id": "551",
        "pokedex_id": "333",
        "real_name": "Swablu",
        "name": "Swablu",
        "variation": "normal",
        "img": "333_swablu.webp",
        "type_1": "normal",
        "type_2": "flying"
    },
    {
        "id": "552",
        "pokedex_id": "330",
        "real_name": "Flygon",
        "name": "Flygon",
        "variation": "normal",
        "img": "330_flygon.webp",
        "type_1": "ground",
        "type_2": "dragon"
    },
    {
        "id": "553",
        "pokedex_id": "329",
        "real_name": "Vibrava",
        "name": "Vibrava",
        "variation": "normal",
        "img": "329_vibrava.webp",
        "type_1": "ground",
        "type_2": "dragon"
    },
    {
        "id": "554",
        "pokedex_id": "328",
        "real_name": "Trapinch",
        "name": "Trapinch",
        "variation": "normal",
        "img": "328_trapinch.webp",
        "type_1": "ground",
        "type_2": ""
    },
    {
        "id": "555",
        "pokedex_id": "324",
        "real_name": "Torkoal",
        "name": "Torkoal",
        "variation": "normal",
        "img": "324_torkoal.webp",
        "type_1": "fire",
        "type_2": ""
    },
    {
        "id": "556",
        "pokedex_id": "323",
        "real_name": "Camerupt",
        "name": "Camerupt",
        "variation": "normal",
        "img": "323_camerupt.webp",
        "type_1": "fire",
        "type_2": "ground"
    },
    {
        "id": "557",
        "pokedex_id": "322",
        "real_name": "Numel",
        "name": "Numel",
        "variation": "normal",
        "img": "322_numel.webp",
        "type_1": "fire",
        "type_2": "ground"
    },
    {
        "id": "558",
        "pokedex_id": "321",
        "real_name": "Wailord",
        "name": "Wailord",
        "variation": "normal",
        "img": "321_wailord.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "559",
        "pokedex_id": "320",
        "real_name": "Wailmer",
        "name": "Wailmer",
        "variation": "normal",
        "img": "320_wailmer.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "560",
        "pokedex_id": "319",
        "real_name": "Sharpedo",
        "name": "Sharpedo",
        "variation": "normal",
        "img": "319_sharpedo.webp",
        "type_1": "water",
        "type_2": "dark"
    },
    {
        "id": "561",
        "pokedex_id": "318",
        "real_name": "Carvanha",
        "name": "Carvanha",
        "variation": "normal",
        "img": "318_carvanha.webp",
        "type_1": "water",
        "type_2": "dark"
    },
    {
        "id": "562",
        "pokedex_id": "317",
        "real_name": "Swalot",
        "name": "Swalot",
        "variation": "normal",
        "img": "317_swalot.webp",
        "type_1": "poison",
        "type_2": ""
    },
    {
        "id": "563",
        "pokedex_id": "316",
        "real_name": "Gulpin",
        "name": "Gulpin",
        "variation": "normal",
        "img": "316_gulpin.webp",
        "type_1": "poison",
        "type_2": ""
    },
    {
        "id": "564",
        "pokedex_id": "312",
        "real_name": "Minun",
        "name": "Minun",
        "variation": "normal",
        "img": "312_minun.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "565",
        "pokedex_id": "311",
        "real_name": "Plusle",
        "name": "Plusle",
        "variation": "normal",
        "img": "311_plusle.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "566",
        "pokedex_id": "310",
        "real_name": "Manectric",
        "name": "Manectric",
        "variation": "normal",
        "img": "310_manectric.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "567",
        "pokedex_id": "309",
        "real_name": "Electrike",
        "name": "Electrike",
        "variation": "normal",
        "img": "309_electrike.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "568",
        "pokedex_id": "308",
        "real_name": "Medicham",
        "name": "Medicham",
        "variation": "normal",
        "img": "308_medicham.webp",
        "type_1": "fighting",
        "type_2": "psychic"
    },
    {
        "id": "569",
        "pokedex_id": "307",
        "real_name": "Meditite",
        "name": "Meditite",
        "variation": "normal",
        "img": "307_meditite.webp",
        "type_1": "fighting",
        "type_2": "psychic"
    },
    {
        "id": "570",
        "pokedex_id": "306",
        "real_name": "Aggron",
        "name": "Aggron",
        "variation": "normal",
        "img": "306_aggron.webp",
        "type_1": "steel",
        "type_2": "rock"
    },
    {
        "id": "571",
        "pokedex_id": "305",
        "real_name": "Lairon",
        "name": "Lairon",
        "variation": "normal",
        "img": "305_lairon.webp",
        "type_1": "steel",
        "type_2": "rock"
    },
    {
        "id": "572",
        "pokedex_id": "304",
        "real_name": "Aron",
        "name": "Aron",
        "variation": "normal",
        "img": "304_aron.webp",
        "type_1": "steel",
        "type_2": "rock"
    },
    {
        "id": "573",
        "pokedex_id": "303",
        "real_name": "Mawile",
        "name": "Mawile",
        "variation": "normal",
        "img": "303_mawile.webp",
        "type_1": "steel",
        "type_2": "fairy"
    },
    {
        "id": "574",
        "pokedex_id": "302",
        "real_name": "Sableye",
        "name": "Sableye",
        "variation": "normal",
        "img": "302_sableye.webp",
        "type_1": "dark",
        "type_2": "ghost"
    },
    {
        "id": "575",
        "pokedex_id": "2",
        "real_name": "Ivysaur",
        "name": "Ivysaur",
        "variation": "normal",
        "img": "2_ivysaur.webp",
        "type_1": "grass",
        "type_2": "poison"
    },
    {
        "id": "576",
        "pokedex_id": "29",
        "real_name": "Nidoqueen",
        "name": "Nidoqueen",
        "variation": "normal",
        "img": "29_nidoqueen.webp",
        "type_1": "poison",
        "type_2": ""
    },
    {
        "id": "577",
        "pokedex_id": "299",
        "real_name": "Nosepass",
        "name": "Nosepass",
        "variation": "normal",
        "img": "299_nosepass.webp",
        "type_1": "rock",
        "type_2": ""
    },
    {
        "id": "578",
        "pokedex_id": "298",
        "real_name": "Azurill",
        "name": "Azurill",
        "variation": "normal",
        "img": "298_azurill.webp",
        "type_1": "normal",
        "type_2": "fairy"
    },
    {
        "id": "579",
        "pokedex_id": "295",
        "real_name": "Exploud",
        "name": "Exploud",
        "variation": "normal",
        "img": "295_exploud.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "580",
        "pokedex_id": "294",
        "real_name": "Loudred",
        "name": "Loudred",
        "variation": "normal",
        "img": "294_loudred.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "581",
        "pokedex_id": "293",
        "real_name": "Whismur",
        "name": "Whismur",
        "variation": "normal",
        "img": "293_whismur.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "582",
        "pokedex_id": "28",
        "real_name": "Sandslash",
        "name": "Sandslash",
        "variation": "normal",
        "img": "28_sandslash.webp",
        "type_1": "ground",
        "type_2": ""
    },
    {
        "id": "583",
        "pokedex_id": "288",
        "real_name": "Vigoroth",
        "name": "Vigoroth",
        "variation": "normal",
        "img": "288_vigoroth.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "584",
        "pokedex_id": "287",
        "real_name": "Slakoth",
        "name": "Slakoth",
        "variation": "normal",
        "img": "287_slakoth.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "585",
        "pokedex_id": "282",
        "real_name": "Gardevoir",
        "name": "Gardevoir",
        "variation": "normal",
        "img": "282_gardevoir.webp",
        "type_1": "psychic",
        "type_2": "fairy"
    },
    {
        "id": "586",
        "pokedex_id": "281",
        "real_name": "Kirlia",
        "name": "Kirlia",
        "variation": "normal",
        "img": "281_kirlia.webp",
        "type_1": "psychic",
        "type_2": "fairy"
    },
    {
        "id": "587",
        "pokedex_id": "280",
        "real_name": "Ralts",
        "name": "Ralts",
        "variation": "normal",
        "img": "280_ralts.webp",
        "type_1": "psychic",
        "type_2": "fairy"
    },
    {
        "id": "588",
        "pokedex_id": "27",
        "real_name": "Sandshrew",
        "name": "Sandshrew",
        "variation": "normal",
        "img": "27_sandshrew.webp",
        "type_1": "ground",
        "type_2": ""
    },
    {
        "id": "589",
        "pokedex_id": "272",
        "real_name": "Ludicolo",
        "name": "Ludicolo",
        "variation": "normal",
        "img": "272_ludicolo.webp",
        "type_1": "water",
        "type_2": "grass"
    },
    {
        "id": "590",
        "pokedex_id": "271",
        "real_name": "Lombre",
        "name": "Lombre",
        "variation": "normal",
        "img": "271_lombre.webp",
        "type_1": "water",
        "type_2": "grass"
    },
    {
        "id": "591",
        "pokedex_id": "270",
        "real_name": "Lotad",
        "name": "Lotad",
        "variation": "normal",
        "img": "270_lotad.webp",
        "type_1": "water",
        "type_2": "grass"
    },
    {
        "id": "592",
        "pokedex_id": "26",
        "real_name": "Raichu",
        "name": "Raichu",
        "variation": "normal",
        "img": "26_raichu.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "593",
        "pokedex_id": "269",
        "real_name": "Dustox",
        "name": "Dustox",
        "variation": "normal",
        "img": "269_dustox.webp",
        "type_1": "bug",
        "type_2": "poison"
    },
    {
        "id": "594",
        "pokedex_id": "268",
        "real_name": "Cascoon",
        "name": "Cascoon",
        "variation": "normal",
        "img": "268_cascoon.webp",
        "type_1": "bug",
        "type_2": ""
    },
    {
        "id": "595",
        "pokedex_id": "267",
        "real_name": "Beautifly",
        "name": "Beautifly",
        "variation": "normal",
        "img": "267_beautifly.webp",
        "type_1": "bug",
        "type_2": "flying"
    },
    {
        "id": "596",
        "pokedex_id": "265",
        "real_name": "Wurmple",
        "name": "Wurmple",
        "variation": "normal",
        "img": "265_wurmple.webp",
        "type_1": "bug",
        "type_2": ""
    },
    {
        "id": "597",
        "pokedex_id": "260",
        "real_name": "Swampert",
        "name": "Swampert",
        "variation": "normal",
        "img": "260_swampert.webp",
        "type_1": "water",
        "type_2": "ground"
    },
    {
        "id": "598",
        "pokedex_id": "260",
        "real_name": "Swampert",
        "name": "Bradon Swampert",
        "variation": "special",
        "img": "260_bradon_swampert.webp",
        "type_1": "water",
        "type_2": "ground"
    },
    {
        "id": "599",
        "pokedex_id": "25",
        "real_name": "Pikachu",
        "name": "Pikachu",
        "variation": "normal",
        "img": "25_pikachu.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "600",
        "pokedex_id": "54",
        "real_name": "Psyduck",
        "name": "Misty Psyduck",
        "variation": "special",
        "img": "54_misty_psyduck.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "601",
        "pokedex_id": "25",
        "real_name": "Pikachu",
        "name": "Dectective Pikachu",
        "variation": "special",
        "img": "25_dectective_pikachu.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "602",
        "pokedex_id": "25",
        "real_name": "Pikachu",
        "name": "Ash Pikachu",
        "variation": "special",
        "img": "25_ash_pikachu.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "603",
        "pokedex_id": "259",
        "real_name": "Marshtomp",
        "name": "Marshtomp",
        "variation": "normal",
        "img": "259_marshtomp.webp",
        "type_1": "water",
        "type_2": "ground"
    },
    {
        "id": "604",
        "pokedex_id": "258",
        "real_name": "Mudkip",
        "name": "Mudkip",
        "variation": "normal",
        "img": "258_mudkip.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "605",
        "pokedex_id": "257",
        "real_name": "Blaziken",
        "name": "May Blaziken",
        "variation": "special",
        "img": "257_may_blaziken.webp",
        "type_1": "fire",
        "type_2": "fighting"
    },
    {
        "id": "606",
        "pokedex_id": "257",
        "real_name": "Blaziken",
        "name": "Blaziken",
        "variation": "normal",
        "img": "257_blaziken.webp",
        "type_1": "fire",
        "type_2": "fighting"
    },
    {
        "id": "607",
        "pokedex_id": "256",
        "real_name": "Combusken",
        "name": "Combusken",
        "variation": "normal",
        "img": "256_combusken.webp",
        "type_1": "fire",
        "type_2": "fighting"
    },
    {
        "id": "608",
        "pokedex_id": "255",
        "real_name": "Torchic",
        "name": "Torchic",
        "variation": "normal",
        "img": "255_torchic.webp",
        "type_1": "fire",
        "type_2": ""
    },
    {
        "id": "609",
        "pokedex_id": "254",
        "real_name": "Sceptile",
        "name": "Sceptile",
        "variation": "normal",
        "img": "254_sceptile.webp",
        "type_1": "grass",
        "type_2": ""
    },
    {
        "id": "610",
        "pokedex_id": "254",
        "real_name": "Sceptile",
        "name": "Ash Ketchum Sceptile",
        "variation": "special",
        "img": "254_ash_sceptile.webp",
        "type_1": "grass",
        "type_2": ""
    },
    {
        "id": "611",
        "pokedex_id": "253",
        "real_name": "Grovyle",
        "name": "Grovyle",
        "variation": "normal",
        "img": "253_grovyle.webp",
        "type_1": "grass",
        "type_2": ""
    },
    {
        "id": "612",
        "pokedex_id": "252",
        "real_name": "Treecko",
        "name": "Treecko",
        "variation": "normal",
        "img": "252_treecko.webp",
        "type_1": "grass",
        "type_2": ""
    },
    {
        "id": "613",
        "pokedex_id": "24",
        "real_name": "Arbok",
        "name": "Jessie Arbok",
        "variation": "special",
        "img": "24_jessie_arbok.webp",
        "type_1": "poison",
        "type_2": ""
    },
    {
        "id": "614",
        "pokedex_id": "24",
        "real_name": "Arbok",
        "name": "Arbok",
        "variation": "normal",
        "img": "24_arbok.webp",
        "type_1": "poison",
        "type_2": ""
    },
    {
        "id": "615",
        "pokedex_id": "246",
        "real_name": "Larvitar",
        "name": "Larvitar",
        "variation": "normal",
        "img": "246_larvitar.webp",
        "type_1": "rock",
        "type_2": "ground"
    },
    {
        "id": "616",
        "pokedex_id": "247",
        "real_name": "Pupitar",
        "name": "Pupitar",
        "variation": "normal",
        "img": "247_pupitar.webp",
        "type_1": "rock",
        "type_2": "ground"
    },
    {
        "id": "617",
        "pokedex_id": "242",
        "real_name": "Blissey",
        "name": "Blissey",
        "variation": "normal",
        "img": "242_blissey.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "618",
        "pokedex_id": "240",
        "real_name": "Magby",
        "name": "Magby",
        "variation": "normal",
        "img": "240_magby.webp",
        "type_1": "fire",
        "type_2": ""
    },
    {
        "id": "619",
        "pokedex_id": "23",
        "real_name": "Ekans",
        "name": "Ekans",
        "variation": "normal",
        "img": "23_ekans.webp",
        "type_1": "poison",
        "type_2": ""
    },
    {
        "id": "620",
        "pokedex_id": "239",
        "real_name": "Elekid",
        "name": "Elekid",
        "variation": "normal",
        "img": "239_elekid.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "621",
        "pokedex_id": "238",
        "real_name": "Smoochum",
        "name": "Smoochum",
        "variation": "normal",
        "img": "238_smoochum.webp",
        "type_1": "ice",
        "type_2": "psychic"
    },
    {
        "id": "622",
        "pokedex_id": "234",
        "real_name": "Stantler",
        "name": "Stantler",
        "variation": "normal",
        "img": "234_stantler.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "623",
        "pokedex_id": "233",
        "real_name": "Porygon2",
        "name": "Porygon2",
        "variation": "normal",
        "img": "233_porygon2.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "624",
        "pokedex_id": "230",
        "real_name": "Kingdra",
        "name": "Kingdra",
        "variation": "normal",
        "img": "230_kingdra.webp",
        "type_1": "water",
        "type_2": "dragon"
    },
    {
        "id": "625",
        "pokedex_id": "22",
        "real_name": "Fearow",
        "name": "Fearow",
        "variation": "normal",
        "img": "22_fearow.webp",
        "type_1": "normal",
        "type_2": "flying"
    },
    {
        "id": "626",
        "pokedex_id": "229",
        "real_name": "Houndoom",
        "name": "Houndoom",
        "variation": "normal",
        "img": "229_houndoom.webp",
        "type_1": "dark",
        "type_2": "fire"
    },
    {
        "id": "627",
        "pokedex_id": "228",
        "real_name": "Houndour",
        "name": "Houndour",
        "variation": "normal",
        "img": "228_houndour.webp",
        "type_1": "dark",
        "type_2": "fire"
    },
    {
        "id": "628",
        "pokedex_id": "226",
        "real_name": "Mantine",
        "name": "Mantine",
        "variation": "normal",
        "img": "226_mantine.webp",
        "type_1": "water",
        "type_2": "flying"
    },
    {
        "id": "629",
        "pokedex_id": "225",
        "real_name": "Delibird",
        "name": "Delibird",
        "variation": "normal",
        "img": "225_delibird.webp",
        "type_1": "ice",
        "type_2": "flying"
    },
    {
        "id": "630",
        "pokedex_id": "221",
        "real_name": "Piloswine",
        "name": "Piloswine",
        "variation": "normal",
        "img": "221_piloswine.webp",
        "type_1": "ice",
        "type_2": "ground"
    },
    {
        "id": "631",
        "pokedex_id": "220",
        "real_name": "Swinub",
        "name": "Swinub",
        "variation": "normal",
        "img": "220_swinub.webp",
        "type_1": "ice",
        "type_2": "ground"
    },
    {
        "id": "632",
        "pokedex_id": "21",
        "real_name": "Spearow",
        "name": "Spearow",
        "variation": "normal",
        "img": "21_spearow.webp",
        "type_1": "normal",
        "type_2": "flying"
    },
    {
        "id": "633",
        "pokedex_id": "215",
        "real_name": "Sneasel",
        "name": "Sneasel",
        "variation": "normal",
        "img": "215_sneasel.webp",
        "type_1": "dark",
        "type_2": "ice"
    },
    {
        "id": "634",
        "pokedex_id": "214",
        "real_name": "Heracross",
        "name": "Heracross",
        "variation": "normal",
        "img": "214_heracross.webp",
        "type_1": "bug",
        "type_2": "fighting"
    },
    {
        "id": "635",
        "pokedex_id": "213",
        "real_name": "Shuckle",
        "name": "Shuckle",
        "variation": "normal",
        "img": "213_shuckle.webp",
        "type_1": "bug",
        "type_2": "rock"
    },
    {
        "id": "636",
        "pokedex_id": "212",
        "real_name": "Scizor",
        "name": "Scizor",
        "variation": "normal",
        "img": "212_scizor.webp",
        "type_1": "bug",
        "type_2": "steel"
    },
    {
        "id": "637",
        "pokedex_id": "20",
        "real_name": "Raticate",
        "name": "Raticate",
        "variation": "normal",
        "img": "20_raticate.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "638",
        "pokedex_id": "208",
        "real_name": "Steelix",
        "name": "Steelix",
        "variation": "normal",
        "img": "208_steelix.webp",
        "type_1": "steel",
        "type_2": "ground"
    },
    {
        "id": "639",
        "pokedex_id": "203",
        "real_name": "Girafarig",
        "name": "Girafarig",
        "variation": "normal",
        "img": "203_girafarig.webp",
        "type_1": "normal",
        "type_2": "psychic"
    },
    {
        "id": "640",
        "pokedex_id": "202",
        "real_name": "Wobbuffet",
        "name": "Wobbuffet",
        "variation": "normal",
        "img": "202_wobbuffet.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "641",
        "pokedex_id": "202",
        "real_name": "Wobbuffet",
        "name": "Team Rocket Wobbuffet",
        "variation": "special",
        "img": "202_team_rocket_wobbuffet.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "642",
        "pokedex_id": "200",
        "real_name": "Misdreavus",
        "name": "Misdreavus",
        "variation": "normal",
        "img": "200_misdreavus.webp",
        "type_1": "ghost",
        "type_2": ""
    },
    {
        "id": "643",
        "pokedex_id": "1",
        "real_name": "Bulbasaur",
        "name": "Bulbasaur",
        "variation": "normal",
        "img": "1_bulbasaur.webp",
        "type_1": "grass",
        "type_2": "poison"
    },
    {
        "id": "644",
        "pokedex_id": "19",
        "real_name": "Rattata",
        "name": "Rattata",
        "variation": "normal",
        "img": "19_rattata.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "645",
        "pokedex_id": "198",
        "real_name": "Murkrow",
        "name": "Murkrow",
        "variation": "normal",
        "img": "198_murkrow.webp",
        "type_1": "dark",
        "type_2": "flying"
    },
    {
        "id": "646",
        "pokedex_id": "197",
        "real_name": "Umbreon",
        "name": "Umbreon",
        "variation": "normal",
        "img": "197_umbreon.webp",
        "type_1": "dark",
        "type_2": ""
    },
    {
        "id": "647",
        "pokedex_id": "196",
        "real_name": "Espeon",
        "name": "Espeon",
        "variation": "normal",
        "img": "196_espeon.webp",
        "type_1": "psychic",
        "type_2": ""
    },
    {
        "id": "648",
        "pokedex_id": "18",
        "real_name": "Pidgeot",
        "name": "Pidgeot",
        "variation": "normal",
        "img": "18_pidgeot.webp",
        "type_1": "normal",
        "type_2": "flying"
    },
    {
        "id": "649",
        "pokedex_id": "186",
        "real_name": "Politoed",
        "name": "Politoed",
        "variation": "normal",
        "img": "186_politoed.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "650",
        "pokedex_id": "184",
        "real_name": "Azumarill",
        "name": "Azumarill",
        "variation": "normal",
        "img": "184_azumarill.webp",
        "type_1": "water",
        "type_2": "fairy"
    },
    {
        "id": "651",
        "pokedex_id": "183",
        "real_name": "Marill",
        "name": "Marill",
        "variation": "normal",
        "img": "183_marill.webp",
        "type_1": "water",
        "type_2": "fairy"
    },
    {
        "id": "652",
        "pokedex_id": "182",
        "real_name": "Bellossom",
        "name": "Bellossom",
        "variation": "normal",
        "img": "182_bellossom.webp",
        "type_1": "grass",
        "type_2": ""
    },
    {
        "id": "653",
        "pokedex_id": "181",
        "real_name": "Ampharos",
        "name": "Ampharos",
        "variation": "normal",
        "img": "181_ampharos.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "654",
        "pokedex_id": "180",
        "real_name": "Flaaffy",
        "name": "Flaaffy",
        "variation": "normal",
        "img": "180_flaaffy.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "655",
        "pokedex_id": "17",
        "real_name": "Pidgeotto",
        "name": "Pidgeotto",
        "variation": "normal",
        "img": "17_pidgeotto.webp",
        "type_1": "normal",
        "type_2": "flying"
    },
    {
        "id": "656",
        "pokedex_id": "179",
        "real_name": "Mareep",
        "name": "Mareep",
        "variation": "normal",
        "img": "179_mareep.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "657",
        "pokedex_id": "178",
        "real_name": "Xatu",
        "name": "Xatu",
        "variation": "normal",
        "img": "178_xatu.webp",
        "type_1": "psychic",
        "type_2": "flying"
    },
    {
        "id": "658",
        "pokedex_id": "177",
        "real_name": "Natu",
        "name": "Natu",
        "variation": "normal",
        "img": "177_natu.webp",
        "type_1": "psychic",
        "type_2": "flying"
    },
    {
        "id": "659",
        "pokedex_id": "176",
        "real_name": "Togetic",
        "name": "Togetic",
        "variation": "normal",
        "img": "176_togetic.webp",
        "type_1": "fairy",
        "type_2": "flying"
    },
    {
        "id": "660",
        "pokedex_id": "175",
        "real_name": "Togepi",
        "name": "Togepi",
        "variation": "normal",
        "img": "175_togepi.webp",
        "type_1": "fairy",
        "type_2": ""
    },
    {
        "id": "661",
        "pokedex_id": "174",
        "real_name": "Igglybuff",
        "name": "Igglybuff",
        "variation": "normal",
        "img": "174_igglybuff.webp",
        "type_1": "normal",
        "type_2": "fairy"
    },
    {
        "id": "662",
        "pokedex_id": "173",
        "real_name": "Cleffa",
        "name": "Cleffa",
        "variation": "normal",
        "img": "173_cleffa.webp",
        "type_1": "fairy",
        "type_2": ""
    },
    {
        "id": "663",
        "pokedex_id": "172",
        "real_name": "Pichu",
        "name": "Pichu",
        "variation": "normal",
        "img": "172_pichu.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "664",
        "pokedex_id": "171",
        "real_name": "Lanturn",
        "name": "Lanturn",
        "variation": "normal",
        "img": "171_lanturn.webp",
        "type_1": "water",
        "type_2": "electric"
    },
    {
        "id": "665",
        "pokedex_id": "170",
        "real_name": "Chinchou",
        "name": "Chinchou",
        "variation": "normal",
        "img": "170_chinchou.webp",
        "type_1": "water",
        "type_2": "electric"
    },
    {
        "id": "666",
        "pokedex_id": "16",
        "real_name": "Pidgey",
        "name": "Pidgey",
        "variation": "normal",
        "img": "16_pidgey.webp",
        "type_1": "normal",
        "type_2": "flying"
    },
    {
        "id": "667",
        "pokedex_id": "169",
        "real_name": "Crobat",
        "name": "Crobat",
        "variation": "normal",
        "img": "169_crobat.webp",
        "type_1": "poison",
        "type_2": "flying"
    },
    {
        "id": "668",
        "pokedex_id": "166",
        "real_name": "Ledian",
        "name": "Ledian",
        "variation": "normal",
        "img": "166_ledian.webp",
        "type_1": "bug",
        "type_2": "flying"
    },
    {
        "id": "669",
        "pokedex_id": "165",
        "real_name": "Ledyba",
        "name": "Ledyba",
        "variation": "normal",
        "img": "165_ledyba.webp",
        "type_1": "bug",
        "type_2": "flying"
    },
    {
        "id": "670",
        "pokedex_id": "164",
        "real_name": "Noctowl",
        "name": "Noctowl",
        "variation": "normal",
        "img": "164_noctowl.webp",
        "type_1": "normal",
        "type_2": "flying"
    },
    {
        "id": "671",
        "pokedex_id": "163",
        "real_name": "Hoothoot",
        "name": "Hoothoot",
        "variation": "normal",
        "img": "163_hoothoot.webp",
        "type_1": "normal",
        "type_2": "flying"
    },
    {
        "id": "672",
        "pokedex_id": "162",
        "real_name": "Furret",
        "name": "Furret",
        "variation": "normal",
        "img": "162_furret.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "673",
        "pokedex_id": "161",
        "real_name": "Sentret",
        "name": "Sentret",
        "variation": "normal",
        "img": "161_sentret.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "674",
        "pokedex_id": "160",
        "real_name": "Feraligatr",
        "name": "Feraligatr",
        "variation": "normal",
        "img": "160_feraligatr.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "675",
        "pokedex_id": "15",
        "real_name": "Beedrill",
        "name": "Beedrill",
        "variation": "normal",
        "img": "15_beedrill.webp",
        "type_1": "bug",
        "type_2": "poison"
    },
    {
        "id": "676",
        "pokedex_id": "159",
        "real_name": "Croconaw",
        "name": "Croconaw",
        "variation": "normal",
        "img": "159_croconaw.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "677",
        "pokedex_id": "158",
        "real_name": "Totodile",
        "name": "Totodile",
        "variation": "normal",
        "img": "158_totodile.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "678",
        "pokedex_id": "157",
        "real_name": "Typhlosion",
        "name": "Typhlosion",
        "variation": "normal",
        "img": "157_typhlosion.webp",
        "type_1": "fire",
        "type_2": ""
    },
    {
        "id": "679",
        "pokedex_id": "156",
        "real_name": "Quilava",
        "name": "Quilava",
        "variation": "normal",
        "img": "156_quilava.webp",
        "type_1": "fire",
        "type_2": ""
    },
    {
        "id": "680",
        "pokedex_id": "155",
        "real_name": "Cyndaquil",
        "name": "Cyndaquil",
        "variation": "normal",
        "img": "155_cyndaquil.webp",
        "type_1": "fire",
        "type_2": ""
    },
    {
        "id": "681",
        "pokedex_id": "154",
        "real_name": "Meganium",
        "name": "Meganium",
        "variation": "normal",
        "img": "154_meganium.webp",
        "type_1": "grass",
        "type_2": ""
    },
    {
        "id": "682",
        "pokedex_id": "153",
        "real_name": "Bayleef",
        "name": "Bayleef",
        "variation": "normal",
        "img": "153_bayleef.webp",
        "type_1": "grass",
        "type_2": ""
    },
    {
        "id": "683",
        "pokedex_id": "152",
        "real_name": "Chikorita",
        "name": "Chikorita",
        "variation": "normal",
        "img": "152_chikorita.webp",
        "type_1": "grass",
        "type_2": ""
    },
    {
        "id": "684",
        "pokedex_id": "14",
        "real_name": "Kakuna",
        "name": "Kakuna",
        "variation": "normal",
        "img": "14_kakuna.webp",
        "type_1": "bug",
        "type_2": "poison"
    },
    {
        "id": "685",
        "pokedex_id": "148",
        "real_name": "Dragonair",
        "name": "Dragonair",
        "variation": "normal",
        "img": "148_dragonair.webp",
        "type_1": "dragon",
        "type_2": ""
    },
    {
        "id": "686",
        "pokedex_id": "147",
        "real_name": "Dratini",
        "name": "Dratini",
        "variation": "normal",
        "img": "147_dratini.webp",
        "type_1": "dragon",
        "type_2": ""
    },
    {
        "id": "687",
        "pokedex_id": "142",
        "real_name": "Aerodactyl",
        "name": "Aerodactyl",
        "variation": "normal",
        "img": "142_aerodactyl.webp",
        "type_1": "rock",
        "type_2": "flying"
    },
    {
        "id": "688",
        "pokedex_id": "141",
        "real_name": "Kabutops",
        "name": "Kabutops",
        "variation": "normal",
        "img": "141_kabutops.webp",
        "type_1": "rock",
        "type_2": "water"
    },
    {
        "id": "689",
        "pokedex_id": "140",
        "real_name": "Kabuto",
        "name": "Kabuto",
        "variation": "normal",
        "img": "140_kabuto.webp",
        "type_1": "rock",
        "type_2": "water"
    },
    {
        "id": "690",
        "pokedex_id": "13",
        "real_name": "Weedle",
        "name": "Weedle",
        "variation": "normal",
        "img": "13_weedle.webp",
        "type_1": "bug",
        "type_2": "poison"
    },
    {
        "id": "691",
        "pokedex_id": "139",
        "real_name": "Omastar",
        "name": "Omastar",
        "variation": "normal",
        "img": "139_omastar.webp",
        "type_1": "rock",
        "type_2": "water"
    },
    {
        "id": "692",
        "pokedex_id": "138",
        "real_name": "Omanyte",
        "name": "Omanyte",
        "variation": "normal",
        "img": "138_omanyte.webp",
        "type_1": "rock",
        "type_2": "water"
    },
    {
        "id": "693",
        "pokedex_id": "137",
        "real_name": "Porygon",
        "name": "Porygon",
        "variation": "normal",
        "img": "137_porygon.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "694",
        "pokedex_id": "136",
        "real_name": "Flareon",
        "name": "Flareon",
        "variation": "normal",
        "img": "136_flareon.webp",
        "type_1": "fire",
        "type_2": ""
    },
    {
        "id": "695",
        "pokedex_id": "135",
        "real_name": "Jolteon",
        "name": "Jolteon",
        "variation": "normal",
        "img": "135_jolteon.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "696",
        "pokedex_id": "134",
        "real_name": "Vaporeon",
        "name": "Vaporeon",
        "variation": "normal",
        "img": "134_vaporeon.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "697",
        "pokedex_id": "133",
        "real_name": "Eevee",
        "name": "Eevee",
        "variation": "normal",
        "img": "133_eevee.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "698",
        "pokedex_id": "131",
        "real_name": "Lapras",
        "name": "Lapras",
        "variation": "normal",
        "img": "131_lapras.webp",
        "type_1": "water",
        "type_2": "ice"
    },
    {
        "id": "699",
        "pokedex_id": "130",
        "real_name": "Gyarados",
        "name": "Shiny Red Gyarados",
        "variation": "special",
        "img": "130_shinny_red_gyarados.webp",
        "type_1": "water",
        "type_2": "flying"
    },
    {
        "id": "700",
        "pokedex_id": "130",
        "real_name": "Gyarados",
        "name": "Gyarados",
        "variation": "normal",
        "img": "130_gyarados.webp",
        "type_1": "water",
        "type_2": "flying"
    },
    {
        "id": "701",
        "pokedex_id": "12",
        "real_name": "Butterfree",
        "name": "Butterfree",
        "variation": "normal",
        "img": "12_butterfree.webp",
        "type_1": "bug",
        "type_2": "flying"
    },
    {
        "id": "702",
        "pokedex_id": "129",
        "real_name": "Magikarp",
        "name": "Shiny Gold Magikarp",
        "variation": "special",
        "img": "129_shinny_gold_magikarp.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "703",
        "pokedex_id": "129",
        "real_name": "Magikarp",
        "name": "Magikarp",
        "variation": "normal",
        "img": "129_magikarp.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "704",
        "pokedex_id": "128",
        "real_name": "Tauros",
        "name": "Tauros",
        "variation": "normal",
        "img": "128_tauros.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "705",
        "pokedex_id": "127",
        "real_name": "Pinsir",
        "name": "Pinsir",
        "variation": "normal",
        "img": "127_pinsir.webp",
        "type_1": "bug",
        "type_2": ""
    },
    {
        "id": "706",
        "pokedex_id": "126",
        "real_name": "Magmar",
        "name": "Magmar",
        "variation": "normal",
        "img": "126_magmar.webp",
        "type_1": "fire",
        "type_2": ""
    },
    {
        "id": "707",
        "pokedex_id": "125",
        "real_name": "Electabuzz",
        "name": "Electabuzz",
        "variation": "normal",
        "img": "125_electabuzz.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "708",
        "pokedex_id": "124",
        "real_name": "Jynx",
        "name": "Jynx",
        "variation": "normal",
        "img": "124_jynx.webp",
        "type_1": "ice",
        "type_2": "psychic"
    },
    {
        "id": "709",
        "pokedex_id": "123",
        "real_name": "Scyther",
        "name": "Scyther",
        "variation": "normal",
        "img": "123_scyther.webp",
        "type_1": "bug",
        "type_2": "flying"
    },
    {
        "id": "710",
        "pokedex_id": "122",
        "real_name": "Mr. Mime",
        "name": "Mr. Mime",
        "variation": "normal",
        "img": "122_mr_mime.webp",
        "type_1": "psychic",
        "type_2": "fairy"
    },
    {
        "id": "711",
        "pokedex_id": "121",
        "real_name": "Starmie",
        "name": "Starmie",
        "variation": "normal",
        "img": "121_starmie.webp",
        "type_1": "water",
        "type_2": "psychic"
    },
    {
        "id": "712",
        "pokedex_id": "121",
        "real_name": "Starmie",
        "name": "Misty Starmie",
        "variation": "special",
        "img": "121_misty_starmie.webp",
        "type_1": "water",
        "type_2": "psychic"
    },
    {
        "id": "713",
        "pokedex_id": "120",
        "real_name": "Staryu",
        "name": "Staryu",
        "variation": "normal",
        "img": "120_staryu.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "714",
        "pokedex_id": "11",
        "real_name": "Metapod",
        "name": "Metapod",
        "variation": "normal",
        "img": "11_metapod.webp",
        "type_1": "bug",
        "type_2": ""
    },
    {
        "id": "715",
        "pokedex_id": "119",
        "real_name": "Seaking",
        "name": "Seaking",
        "variation": "normal",
        "img": "119_seaking.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "716",
        "pokedex_id": "118",
        "real_name": "Goldeen",
        "name": "Goldeen",
        "variation": "normal",
        "img": "118_goldeen.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "717",
        "pokedex_id": "117",
        "real_name": "Seadra",
        "name": "Seadra",
        "variation": "normal",
        "img": "117_seadra.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "718",
        "pokedex_id": "116",
        "real_name": "Horsea",
        "name": "Horsea",
        "variation": "normal",
        "img": "116_horsea.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "719",
        "pokedex_id": "115",
        "real_name": "Kangaskhan",
        "name": "Kangaskhan",
        "variation": "normal",
        "img": "115_kangaskhan.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "720",
        "pokedex_id": "114",
        "real_name": "Tangela",
        "name": "Tangela",
        "variation": "normal",
        "img": "114_tangela.webp",
        "type_1": "grass",
        "type_2": ""
    },
    {
        "id": "721",
        "pokedex_id": "113",
        "real_name": "Chansey",
        "name": "Chansey",
        "variation": "normal",
        "img": "113_chansey.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "722",
        "pokedex_id": "112",
        "real_name": "Rhydon",
        "name": "Rhydon",
        "variation": "normal",
        "img": "112_rhydon.webp",
        "type_1": "ground",
        "type_2": "rock"
    },
    {
        "id": "723",
        "pokedex_id": "111",
        "real_name": "Rhyhorn",
        "name": "Rhyhorn",
        "variation": "normal",
        "img": "111_rhyhorn.webp",
        "type_1": "ground",
        "type_2": "rock"
    },
    {
        "id": "724",
        "pokedex_id": "110",
        "real_name": "Weezing",
        "name": "Weezing",
        "variation": "normal",
        "img": "110_weezing.webp",
        "type_1": "poison",
        "type_2": ""
    },
    {
        "id": "725",
        "pokedex_id": "110",
        "real_name": "Weezing",
        "name": "James Weezing",
        "variation": "special",
        "img": "110_james_weezing.webp",
        "type_1": "poison",
        "type_2": ""
    },
    {
        "id": "726",
        "pokedex_id": "10",
        "real_name": "Caterpie",
        "name": "Caterpie",
        "variation": "normal",
        "img": "10_caterpie.webp",
        "type_1": "bug",
        "type_2": ""
    },
    {
        "id": "727",
        "pokedex_id": "109",
        "real_name": "Koffing",
        "name": "Koffing",
        "variation": "normal",
        "img": "109_koffing.webp",
        "type_1": "poison",
        "type_2": ""
    },
    {
        "id": "728",
        "pokedex_id": "108",
        "real_name": "Lickitung",
        "name": "Lickitung",
        "variation": "normal",
        "img": "108_lickitung.webp",
        "type_1": "normal",
        "type_2": ""
    },
    {
        "id": "729",
        "pokedex_id": "105",
        "real_name": "Marowak",
        "name": "Marowak",
        "variation": "normal",
        "img": "105_marowak.webp",
        "type_1": "ground",
        "type_2": ""
    },
    {
        "id": "730",
        "pokedex_id": "104",
        "real_name": "Cubone",
        "name": "Cubone",
        "variation": "normal",
        "img": "104_cubone.webp",
        "type_1": "ground",
        "type_2": ""
    },
    {
        "id": "731",
        "pokedex_id": "103",
        "real_name": "Exeggutor",
        "name": "Exeggutor",
        "variation": "normal",
        "img": "103_exeggutor.webp",
        "type_1": "grass",
        "type_2": "psychic"
    },
    {
        "id": "732",
        "pokedex_id": "102",
        "real_name": "Exeggcute",
        "name": "Exeggcute",
        "variation": "normal",
        "img": "102_exeggcute.webp",
        "type_1": "grass",
        "type_2": "psychic"
    },
    {
        "id": "733",
        "pokedex_id": "101",
        "real_name": "Electrode",
        "name": "Electrode",
        "variation": "normal",
        "img": "101_electrode.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "734",
        "pokedex_id": "100",
        "real_name": "Voltorb",
        "name": "Voltorb",
        "variation": "normal",
        "img": "100_voltorb.webp",
        "type_1": "electric",
        "type_2": ""
    },
    {
        "id": "738",
        "pokedex_id": "491",
        "real_name": "Darkrai",
        "name": "Resonance Darkrai",
        "variation": "resonance",
        "img": "491_resonance_darkrai.webp",
        "type_1": "Dark",
        "type_2": ""
    },
    {
        "id": "739",
        "pokedex_id": "766",
        "real_name": "Passimian",
        "name": "Passimian",
        "variation": "normal",
        "img": "766_passimian.webp",
        "type_1": "fighting",
        "type_2": ""
    },
    {
        "id": "740",
        "pokedex_id": "786",
        "real_name": "Tapu Lele",
        "name": "Overlord Tapu Lele",
        "variation": "overlord",
        "img": "786_overlord_tapu_lele.webp",
        "type_1": "psychic",
        "type_2": "fairy"
    },
    {
        "id": "741",
        "pokedex_id": "833",
        "real_name": "Chewtle",
        "name": "Chewtle",
        "variation": "normal",
        "img": "833_chewtle.webp",
        "type_1": "water",
        "type_2": ""
    },
    {
        "id": "742",
        "pokedex_id": "834",
        "real_name": "Drednaw",
        "name": "Drednaw",
        "variation": "normal",
        "img": "834_drednaw.webp",
        "type_1": "water",
        "type_2": "rock"
    },
    {
        "id": "743",
        "pokedex_id": "891",
        "real_name": "Kubfu",
        "name": "Kubfu",
        "variation": "normal",
        "img": "891_kubfu.webp",
        "type_1": "fighting",
        "type_2": ""
    },
    {
        "id": "744",
        "pokedex_id": "892",
        "real_name": "Urshifu Rapid Strike Style",
        "name": "Overlord Urshifu (Rapid Strike Style)",
        "variation": "overlord",
        "img": "892_overlord_urshifu_rapid_strike_style.webp",
        "type_1": "fighting",
        "type_2": "water"
    },
    {
        "id": "745",
        "pokedex_id": "892",
        "real_name": "Urshifu Single Strike Style",
        "name": "Urshifu Single Strike Style",
        "variation": "epic",
        "img": "892_epic_urshifu_single_strike_style.webp",
        "type_1": "fighting",
        "type_2": "dark"
    },
    {
        "id": "746",
        "pokedex_id": "892",
        "real_name": "Urshifu Rapid Strike Style",
        "name": "Urshifu Rapid Strike Style",
        "variation": "epic",
        "img": "892_epic_urshifu_rapid_strike_style.webp",
        "type_1": "fighting",
        "type_2": "water"
    }
]
export default pokedex;