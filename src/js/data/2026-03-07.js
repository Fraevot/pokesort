dataSetVersion = "2026-03-07"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Generation",
    key: "gen",
    tooltip: "Check this to restrict to certain generations.",
    checked: false,
    sub: [
      { name: "Blue/Green/Red/Yellow", tooltip: "Kanto", key: "gen1" }
    ]
  },
  {
    name: "Filter by Evolution",
    key: "evo",
    tooltip: "Check this to restrict to pokemon of certain evolutions.",
    checked: false,
    sub: [
      { name: "1st Evolution", key: "evo1" },
      { name: "2nd Evolution", key: "evo2" },
      { name: "3rd Evolution", key: "evo3" },
      { name: "Single", key: "evos" },
      { name: "Legendary", key: "legend"},
      { name: "Mythical", key: "mythical"}
    ]
  },
  {
    name: "Filter by Type",
    key: "type",
    tooltip: "Check this to restrict to pokemon of certain types.",
    checked: false,
    sub: [
      { name: "Bug", key: "bug" },
      { name: "Dark", key: "dark" },
      { name: "Dragon", key: "dragon" },
      { name: "Electric", key: "electric" },
      { name: "Fairy", key: "fairy" },
      { name: "Fighting", key: "fighting" },
      { name: "Fire", key: "fire" },
      { name: "Flying", key: "flying" },
      { name: "Ghost", key: "ghost" },
      { name: "Grass", key: "grass" },
      { name: "Ground", key: "ground" },
      { name: "Ice", key: "ice" },
      { name: "Normal", key: "normal" },
      { name: "Poison", key: "poison" },
      { name: "Psychic", key: "psychic" },
      { name: "Rock", key: "rock" },
      { name: "Steel", key: "steel" },
      { name: "Water", key: "water" }
    ]
  },
  {
    name: "Filter Starters",
    key: "notstarter",
    tooltip: "Check this to list only the starters.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Bulbasaur",
    img: "bulbasaur.png", // images should be 480 wide and 720 tall
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["grass", "poison"],
      notstarter: false
    }
  },
  {
    name: "Ivysaur",
    img: "ivysaur.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["grass", "poison"],
      notstarter: false
    }
  },
  {
    name: "Venusaur",
    img: "venusaur.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo3"],
      type: ["grass", "poison"],
      notstarter: false
    }
  },
  {
    name: "Charmander",
    img: "charmander.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["fire"],
      notstarter: false
    }
  },
  {
    name: "Charmeleon",
    img: "charmeleon.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["fire"],
      notstarter: false
    }
  },
  {
    name: "Charizard",
    img: "charizard.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo3"],
      type: ["fire", "flying"],
      notstarter: false
    }
  },
  {
    name: "Squirtle",
    img: "squirtle.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["water"],
      notstarter: false
    }
  },
  {
    name: "Wartortle",
    img: "wartortle.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["water"],
      notstarter: false
    }
  },
  {
    name: "Blastoise",
    img: "blastoise.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo3"],
      type: ["water"],
      notstarter: false
    }
  },
  {
    name: "Caterpie",
    img: "caterpie.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["bug"],
      notstarter: true 
    }
  },
  {
    name: "Metapod",
    img: "metapod.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["bug"],
      notstarter: true
    }
  },
  {
    name: "Butterfree",
    img: "butterfree.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo3"],
      type: ["bug", "flying"],
      notstarter: true
    }
  },
  {
    name: "Weedle",
    img: "weedle.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["bug", "poison"],
      notstarter: true
    }
  },
  {
    name: "Kakuna",
    img: "kakuna.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["bug", "poison"],
      notstarter: true
    }
  },
  {
    name: "Beedrill",
    img: "beedrill.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo3"],
      type: ["bug", "poison"],
      notstarter: true
    }
  },
  {
    name: "Pidgey",
    img: "pidgey.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Pidgeotto",
    img: "pidgeotto.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Pidgeot",
    img: "pidgeot.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo3"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Rattata",
    img: "rattata.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Raticate",
    img: "raticate.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Spearow",
    img: "spearow.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Fearow",
    img: "fearow.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Ekans",
    img: "ekans.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["poison"],
      notstarter: true
    }
  },
  {
    name: "Arbok",
    img: "arbok.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: [""],
      notstarter: true
    }
  },
  {
    name: "Pikachu",
    img: "pikachu.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["electric"],
      notstarter: false
    }
  },
  {
    name: "Raichu",
    img: "raichu.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo3"],
      type: [""],
      notstarter: true
    }
  },
  {
    name: "Sandshrew",
    img: "sandshrew.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["ground"],
      notstarter: true
    }
  },
  {
    name: "Sandslash",
    img: "sandslash.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["ground"],
      notstarter: true
    }
  },
  {
    name: "Nidoran♀",
    img: "nidoranf.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["poison"],
      notstarter: true
    }
  },
  {
    name: "Nidorina",
    img: "nidorina.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["poison"],
      notstarter: true
    }
  },
  {
    name: "Nidoqueen",
    img: "nidoqueen.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo3"],
      type: ["poison", "ground"],
      notstarter: true
    }
  },
  {
    name: "Nidoran♂",
    img: "nidoranm.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["poison"],
      notstarter: true
    }
  },
  {
    name: "Nidorino",
    img: "nidorino.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["poison"],
      notstarter: true
    }
  },
  {
    name: "Nidoking",
    img: "nidoking.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo3"],
      type: ["poison", "ground"],
      notstarter: true
    }
  },
  {
    name: "Clefairy",
    img: "clefairy.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["fairy"],
      notstarter: true
    }
  },
  {
    name: "Clefable",
    img: "clefable.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["fairy"],
      notstarter: true
    }
  },
  {
    name: "Vulpix",
    img: "vulpix.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["fire"],
      notstarter: true
    }
  },
  {
    name: "Ninetales",
    img: "ninetales.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["fire"],
      notstarter: true
    }
  },
  {
    name: "Jigglypuff",
    img: "jigglypuff.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["normal", "fairy"],
      notstarter: true
    }
  },
  {
    name: "Wigglytuff",
    img: "wigglytuff.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo3"],
      type: ["normal", "fairy"],
      notstarter: true
    }
  },
  {
    name: "Zubat",
    img: "zubat.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["poison", "flying"],
      notstarter: true
    }
  },
  {
    name: "Golbat",
    img: "golbat.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["poison", "flying"],
      notstarter: true
    }
  },
  {
    name: "Oddish",
    img: "oddish.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["grass", "poison"],
      notstarter: true
    }
  },
  {
    name: "Gloom",
    img: "gloom.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["grass", "poison"],
      notstarter: true
    }
  },
  {
    name: "Vileplume",
    img: "vileplume.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo3"],
      type: ["grass", "poison"],
      notstarter: true
    }
  },
  {
    name: "Paras",
    img: "paras.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["bug", "grass"],
      notstarter: true
    }
  },
  {
    name: "Parasect",
    img: "parasect.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["bug", "grass"],
      notstarter: true
    }
  },
  {
    name: "Venonat",
    img: "venonat.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["bug", "poison"],
      notstarter: true
    }
  },
  {
    name: "Venomoth",
    img: "venomoth.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["bug", "poison"],
      notstarter: true
    }
  },
  {
    name: "Diglett",
    img: "diglett.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["ground"],
      notstarter: true
    }
  },
  {
    name: "Dugtrio",
    img: "dugtrio.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["ground"],
      notstarter: true
    }
  },
  {
    name: "Meowth",
    img: "meowth.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Persian",
    img: "persian.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Psyduck",
    img: "psyduck.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Golduck",
    img: "golduck.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Mankey",
    img: "mankey.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["fighting"],
      notstarter: true
    }
  },
  {
    name: "Primape",
    img: "primeape.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["fighting"],
      notstarter: true
    }
  },
  {
    name: "Growlithe",
    img: "growlithe.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["fire"],
      notstarter: true
    }
  },
  {
    name: "Arcanine",
    img: "arcanine.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["fire"],
      notstarter: true
    }
  },
  {
    name: "Poliwag",
    img: "poliwag.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Poliwhirl",
    img: "poliwhirl.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Poliwrath",
    img: "poliwrath.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo3"],
      type: ["water", "fighting"],
      notstarter: true
    }
  },
  {
    name: "Abra",
    img: "abra.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["psychic"],
      notstarter: true
    }
  },
  {
    name: "Kadabra",
    img: "kadabra.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["psychic"],
      notstarter: true
    }
  },
  {
    name: "Alakazam",
    img: "alakazam.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo3"],
      type: ["psychic"],
      notstarter: true
    }
  },
  {
    name: "Machop",
    img: "machop.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["fighting"],
      notstarter: true
    }
  },
  {
    name: "Machoke",
    img: "machoke.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["fighting"],
      notstarter: true
    }
  },
  {
    name: "Machamp",
    img: "machamp.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo3"],
      type: ["fighting"],
      notstarter: true
    }
  },
  {
    name: "Bellsprout",
    img: "bellsprout.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["grass", "poison"],
      notstarter: true
    }
  },
  {
    name: "Weepinbell",
    img: "weepinbell.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["grass", "poison"],
      notstarter: true
    }
  },
  {
    name: "Victreebel",
    img: "victreebel.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo3"],
      type: ["grass", "poison"],
      notstarter: true
    }
  },
  {
    name: "Tentacool",
    img: "tentacool.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["water", "poison"],
      notstarter: true
    }
  },
  {
    name: "Tentacruel",
    img: "tentacruel.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["water", "poison"],
      notstarter: true
    }
  },
  {
    name: "Geodude",
    img: "geodude.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["rock", "ground"],
      notstarter: true
    }
  },
  {
    name: "Graveler",
    img: "graveler.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["rock", "ground"],
      notstarter: true
    }
  },
  {
    name: "Golem",
    img: "golem.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo3"],
      type: ["rock", "ground"],
      notstarter: true
    }
  },
  {
    name: "Ponyta",
    img: "ponyta.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["fire"],
      notstarter: true
    }
  },
  {
    name: "Rapidash",
    img: "rapidash.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["fire"],
      notstarter: true
    }
  },
  {
    name: "Slowpoke",
    img: "slowpoke.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["water", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Slowbro",
    img: "slowbro.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["water", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Magnemite",
    img: "magnemite.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["electric", "steel"],
      notstarter: true
    }
  },
  {
    name: "Magneton",
    img: "magneton.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["electric", "steel"],
      notstarter: true
    }
  },
  {
    name: "Farfetch'd",
    img: "farfetchd.png",
    opts: {
      gen: ["gen1"],
      evo: ["evos"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Doduo",
    img: "doduo.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Dodrio",
    img: "dodrio.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Seel",
    img: "seel.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Dewgong",
    img: "dewgong.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["water", "ice"],
      notstarter: true
    }
  },
  {
    name: "Grimer",
    img: "grimer.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["poison"],
      notstarter: true
    }
  },
  {
    name: "Muk",
    img: "muk.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["poison"],
      notstarter: true
    }
  },
  {
    name: "Shellder",
    img: "shellder.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Cloyster",
    img: "cloyster.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["water", "ice"],
      notstarter: true
    }
  },
  {
    name: "Gastly",
    img: "gastly.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["ghost", "poison"],
      notstarter: true
    }
  },
  {
    name: "Haunter",
    img: "haunter.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["ghost", "poison"],
      notstarter: true
    }
  },
  {
    name: "Gengar",
    img: "gengar.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo3"],
      type: ["ghost", "poison"],
      notstarter: true
    }
  },
  {
    name: "Onix",
    img: "onix.png",
    opts: {
      gen: ["gen1"],
      evo: ["evos"],
      type: ["rock", "ground"],
      notstarter: true
    }
  },
  {
    name: "Drowzee",
    img: "drowzee.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["Psychic"],
      notstarter: true
    }
  },
  {
    name: "Hypno",
    img: "hypno.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["Psychic"],
      notstarter: true
    }
  },
  {
    name: "Krabby",
    img: "krabby.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Kingler",
    img: "kingler.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Voltorb",
    img: "voltorb.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["electric"],
      notstarter: true
    }
  },
  {
    name: "Electrode",
    img: "electrode.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["electric"],
      notstarter: true
    }
  },
  {
    name: "Exeggcute",
    img: "exeggcute.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["grass", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Exeggutor",
    img: "exeggutor.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["grass", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Cubone",
    img: "cubone.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["ground"],
      notstarter: true
    }
  },
  {
    name: "Marowak",
    img: "marowak.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["ground"],
      notstarter: true
    }
  },
  {
    name: "Hitmonlee",
    img: "hitmonlee.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["fighting"],
      notstarter: true
    }
  },
  {
    name: "Hitmonchan",
    img: "hitmonchan.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["fighting"],
      notstarter: true
    }
  },
  {
    name: "Lickitung",
    img: "lickitung.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Koffing",
    img: "koffing.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["poison"],
      notstarter: true
    }
  },
  {
    name: "Weezing",
    img: "weezing.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["poison"],
      notstarter: true
    }
  },
  {
    name: "Rhyhorn",
    img: "rhyhorn.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["ground", "rock"],
      notstarter: true
    }
  },
  {
    name: "Rhydon",
    img: "rhydon.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["ground", "rock"],
      notstarter: true
    }
  },
  {
    name: "Chansey",
    img: "chansey.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["Normal"],
      notstarter: true
    }
  },
  {
    name: "Tangela",
    img: "tangela.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["Grass"],
      notstarter: true
    }
  },
  {
    name: "Kangaskhan",
    img: "kangaskhan.png",
    opts: {
      gen: ["gen1"],
      evo: ["evos"],
      type: ["Normal"],
      notstarter: true
    }
  },
  {
    name: "Horsea",
    img: "horsea.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Seadra",
    img: "seadra.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Goldeen",
    img: "goldeen.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Seaking",
    img: "seaking.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Staryu",
    img: "staryu.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Starmie",
    img: "starmie.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["water", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Mr. mime",
    img: "mrmime.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["psychic", "fairy"],
      notstarter: true
    }
  },
  {
    name: "Scyther",
    img: "scyther.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["bug", "flying"],
      notstarter: true
    }
  },
  {
    name: "Jynx",
    img: "jynx.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["ice", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Electabuzz",
    img: "electabuzz.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["electric"],
      notstarter: true
    }
  },
  {
    name: "Magmar",
    img: "magmar.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["fire"],
      notstarter: true
    }
  },
  {
    name: "Pinsir",
    img: "pinsir.png",
    opts: {
      gen: ["gen1"],
      evo: ["evos"],
      type: ["bug"],
      notstarter: true
    }
  },
  {
    name: "Tauros",
    img: "tauros.png",
    opts: {
      gen: ["gen1"],
      evo: ["evos"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Magikarp",
    img: "magikarp.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Gyarados",
    img: "gyarados.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["water", "flying"],
      notstarter: true
    }
  },
  {
    name: "Lapras",
    img: "lapras.png",
    opts: {
      gen: ["gen1"],
      evo: ["evos"],
      type: ["water", "ice"],
      notstarter: true
    }
  },
  {
    name: "Ditto",
    img: "ditto.png",
    opts: {
      gen: ["gen1"],
      evo: ["evos"],
      type: ["nromal"],
      notstarter: true
    }
  },
  {
    name: "Eevee",
    img: "Eevee.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["nromal"],
      notstarter: false
    }
  },
  {
    name: "Vaporeon",
    img: "vaporeon.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Jolteon",
    img: "jolteon.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["electric"],
      notstarter: true
    }
  },
  {
    name: "Flareon",
    img: "flareon.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["fire"],
      notstarter: true
    }
  },
  {
    name: "Porygon",
    img: "porygon.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Omanyte",
    img: "omanyte.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["rock", "water"],
      notstarter: true
    }
  },
  {
    name: "Omastar",
    img: "omastar.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["rock", "water"],
      notstarter: true
    }
  },
  {
    name: "Kabuto",
    img: "kabuto.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["rock", "water"],
      notstarter: true
    }
  },
  {
    name: "Kabutops",
    img: "kabutops.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["rock", "water"],
      notstarter: true
    }
  },
  {
    name: "Aerodactyl",
    img: "aerodactyl.png",
    opts: {
      gen: ["gen1"],
      evo: ["evos"],
      type: ["rock", "flying"],
      notstarter: true
    }
  },
  {
    name: "Snorlax",
    img: "snorlax.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Articuno",
    img: "articuno.png",
    opts: {
      gen: ["gen1"],
      evo: ["evos", "legend"],
      type: ["ice", "flying"],
      notstarter: true
    }
  },
  {
    name: "Zapdos",
    img: "zapdos.png",
    opts: {
      gen: ["gen1"],
      evo: ["evos", "legend"],
      type: ["electric", "flying"],
      notstarter: true
    }
  },
  {
    name: "Moltres",
    img: "moltres.png",
    opts: {
      gen: ["gen1"],
      evo: ["evos", "legend"],
      type: ["fire", "flying"],
      notstarter: true
    }
  },
  {
    name: "Dratini",
    img: "dratini.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo1"],
      type: ["dragon"],
      notstarter: true
    }
  },
  {
    name: "Dragonair",
    img: "dragonair.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo2"],
      type: ["dragon"],
      notstarter: true
    }
  },
  {
    name: "Dragonite",
    img: "dragonite.png",
    opts: {
      gen: ["gen1"],
      evo: ["evo3"],
      type: ["dragon", "flying"],
      notstarter: true
    }
  },
  {
    name: "Mewtwo",
    img: "mewtwo.png",
    opts: {
      gen: ["gen1"],
      evo: ["evos", "legend"],
      type: ["psychic"],
      notstarter: true
    }
  },
  {
    name: "Mew",
    img: "mew.png",
    opts: {
      gen: ["gen1"],
      evo: ["evos", "myth"],
      type: ["psychic"],
      notstarter: true
    }
  }
/*
  ,
  {
    name: "",
    img: ".png",
    opts: {
      gen: ["gen1"],
      evo: ["evo"],
      type: [""],
      notstarter: true
    }
  }
*/
];
