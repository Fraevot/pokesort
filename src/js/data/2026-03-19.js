dataSetVersion = "2026-03-19"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Generation",
    key: "gen",
    tooltip: "Check this to restrict to certain generations.",
    checked: false,
    sub: [
      { name: "Blue/Green/Red/Yellow", tooltip: "Kanto", key: "g1" },
      { name: "Crystal/Gold/Silver", tooltip: "Johto", key: "g2" },
      { name: "Emerald/Ruby/Sapphire", tooltip: "Hoenn", key: "g3" },
      { name: "Diamond/Pearl/Platinum", tooltip: "Sinnoh", key: "g4" },
      { name: "Black/White", tooltip: "Unova", key: "g5" }
    ]
  },
  {
    name: "Filter by Evolution",
    key: "evo",
    tooltip: "Check this to restrict to pokemon of certain evolutions.",
    checked: false,
    sub: [
      { name: "1st Evolution", key: "1" },
      { name: "2nd Evolution", key: "2" },
      { name: "3rd Evolution", key: "3" },
      { name: "Single", key: "s" },
      { name: "Legendary", key: "legendary"},
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
    name: "Starters Only",
    key: "notstarter",
    tooltip: "Check this to list only the starters.",
    checked: false
  },
  {
    name: "No Variants",
    key: "variant",
    tooltip: "check this to remove non-regional variants",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Bulbasaur",
    img: "bulbasaur.png", // images should be 480 wide and 720 tall
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["grass", "poison"]
    }
  },
  {
    name: "Ivysaur",
    img: "ivysaur.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["grass", "poison"]
    }
  },
  {
    name: "Venusaur",
    img: "venusaur.png",
    opts: {
      gen: ["g1"],
      evo: ["3"],
      type: ["grass", "poison"]
    }
  },
  {
    name: "Charmander",
    img: "charmander.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["fire"]
    }
  },
  {
    name: "Charmeleon",
    img: "charmeleon.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["fire"]
    }
  },
  {
    name: "Charizard",
    img: "charizard.png",
    opts: {
      gen: ["g1"],
      evo: ["3"],
      type: ["fire", "flying"]
    }
  },
  {
    name: "Squirtle",
    img: "squirtle.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["water"]
    }
  },
  {
    name: "Wartortle",
    img: "wartortle.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["water"]
    }
  },
  {
    name: "Blastoise",
    img: "blastoise.png",
    opts: {
      gen: ["g1"],
      evo: ["3"],
      type: ["water"]
    }
  },
  {
    name: "Caterpie",
    img: "caterpie.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["bug"],
      notstarter: true 
    }
  },
  {
    name: "Metapod",
    img: "metapod.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["bug"],
      notstarter: true
    }
  },
  {
    name: "Butterfree",
    img: "butterfree.png",
    opts: {
      gen: ["g1"],
      evo: ["3"],
      type: ["bug", "flying"],
      notstarter: true
    }
  },
  {
    name: "Weedle",
    img: "weedle.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["bug", "poison"],
      notstarter: true
    }
  },
  {
    name: "Kakuna",
    img: "kakuna.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["bug", "poison"],
      notstarter: true
    }
  },
  {
    name: "Beedrill",
    img: "beedrill.png",
    opts: {
      gen: ["g1"],
      evo: ["3"],
      type: ["bug", "poison"],
      notstarter: true
    }
  },
  {
    name: "Pidgey",
    img: "pidgey.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Pidgeotto",
    img: "pidgeotto.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Pidgeot",
    img: "pidgeot.png",
    opts: {
      gen: ["g1"],
      evo: ["3"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Rattata",
    img: "rattata.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Raticate",
    img: "raticate.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Spearow",
    img: "spearow.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Fearow",
    img: "fearow.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Ekans",
    img: "ekans.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["poison"],
      notstarter: true
    }
  },
  {
    name: "Arbok",
    img: "arbok.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: [""],
      notstarter: true
    }
  },
  {
    name: "Pikachu",
    img: "pikachu.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["electric"]
    }
  },
  {
    name: "Raichu",
    img: "raichu.png",
    opts: {
      gen: ["g1"],
      evo: ["3"],
      type: [""],
      notstarter: true
    }
  },
  {
    name: "Sandshrew",
    img: "sandshrew.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["ground"],
      notstarter: true
    }
  },
  {
    name: "Sandslash",
    img: "sandslash.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["ground"],
      notstarter: true
    }
  },
  {
    name: "Nidoran♀",
    img: "nidoranf.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["poison"],
      notstarter: true
    }
  },
  {
    name: "Nidorina",
    img: "nidorina.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["poison"],
      notstarter: true
    }
  },
  {
    name: "Nidoqueen",
    img: "nidoqueen.png",
    opts: {
      gen: ["g1"],
      evo: ["3"],
      type: ["poison", "ground"],
      notstarter: true
    }
  },
  {
    name: "Nidoran♂",
    img: "nidoranm.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["poison"],
      notstarter: true
    }
  },
  {
    name: "Nidorino",
    img: "nidorino.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["poison"],
      notstarter: true
    }
  },
  {
    name: "Nidoking",
    img: "nidoking.png",
    opts: {
      gen: ["g1"],
      evo: ["3"],
      type: ["poison", "ground"],
      notstarter: true
    }
  },
  {
    name: "Clefairy",
    img: "clefairy.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["fairy"],
      notstarter: true
    }
  },
  {
    name: "Clefable",
    img: "clefable.png",
    opts: {
      gen: ["g1"],
      evo: ["3"],
      type: ["fairy"],
      notstarter: true
    }
  },
  {
    name: "Vulpix",
    img: "vulpix.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["fire"],
      notstarter: true
    }
  },
  {
    name: "Ninetales",
    img: "ninetales.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["fire"],
      notstarter: true
    }
  },
  {
    name: "Jigglypuff",
    img: "jigglypuff.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["normal", "fairy"],
      notstarter: true
    }
  },
  {
    name: "Wigglytuff",
    img: "wigglytuff.png",
    opts: {
      gen: ["g1"],
      evo: ["3"],
      type: ["normal", "fairy"],
      notstarter: true
    }
  },
  {
    name: "Zubat",
    img: "zubat.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["poison", "flying"],
      notstarter: true
    }
  },
  {
    name: "Golbat",
    img: "golbat.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["poison", "flying"],
      notstarter: true
    }
  },
  {
    name: "Oddish",
    img: "oddish.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["grass", "poison"],
      notstarter: true
    }
  },
  {
    name: "Gloom",
    img: "gloom.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["grass", "poison"],
      notstarter: true
    }
  },
  {
    name: "Vileplume",
    img: "vileplume.png",
    opts: {
      gen: ["g1"],
      evo: ["3"],
      type: ["grass", "poison"],
      notstarter: true
    }
  },
  {
    name: "Paras",
    img: "paras.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["bug", "grass"],
      notstarter: true
    }
  },
  {
    name: "Parasect",
    img: "parasect.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["bug", "grass"],
      notstarter: true
    }
  },
  {
    name: "Venonat",
    img: "venonat.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["bug", "poison"],
      notstarter: true
    }
  },
  {
    name: "Venomoth",
    img: "venomoth.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["bug", "poison"],
      notstarter: true
    }
  },
  {
    name: "Diglett",
    img: "diglett.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["ground"],
      notstarter: true
    }
  },
  {
    name: "Dugtrio",
    img: "dugtrio.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["ground"],
      notstarter: true
    }
  },
  {
    name: "Meowth",
    img: "meowth.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Persian",
    img: "persian.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Psyduck",
    img: "psyduck.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Golduck",
    img: "golduck.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Mankey",
    img: "mankey.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["fighting"],
      notstarter: true
    }
  },
  {
    name: "Primape",
    img: "primeape.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["fighting"],
      notstarter: true
    }
  },
  {
    name: "Growlithe",
    img: "growlithe.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["fire"],
      notstarter: true
    }
  },
  {
    name: "Arcanine",
    img: "arcanine.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["fire"],
      notstarter: true
    }
  },
  {
    name: "Poliwag",
    img: "poliwag.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Poliwhirl",
    img: "poliwhirl.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Poliwrath",
    img: "poliwrath.png",
    opts: {
      gen: ["g1"],
      evo: ["3"],
      type: ["water", "fighting"],
      notstarter: true
    }
  },
  {
    name: "Abra",
    img: "abra.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["psychic"],
      notstarter: true
    }
  },
  {
    name: "Kadabra",
    img: "kadabra.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["psychic"],
      notstarter: true
    }
  },
  {
    name: "Alakazam",
    img: "alakazam.png",
    opts: {
      gen: ["g1"],
      evo: ["3"],
      type: ["psychic"],
      notstarter: true
    }
  },
  {
    name: "Machop",
    img: "machop.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["fighting"],
      notstarter: true
    }
  },
  {
    name: "Machoke",
    img: "machoke.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["fighting"],
      notstarter: true
    }
  },
  {
    name: "Machamp",
    img: "machamp.png",
    opts: {
      gen: ["g1"],
      evo: ["3"],
      type: ["fighting"],
      notstarter: true
    }
  },
  {
    name: "Bellsprout",
    img: "bellsprout.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["grass", "poison"],
      notstarter: true
    }
  },
  {
    name: "Weepinbell",
    img: "weepinbell.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["grass", "poison"],
      notstarter: true
    }
  },
  {
    name: "Victreebel",
    img: "victreebel.png",
    opts: {
      gen: ["g1"],
      evo: ["3"],
      type: ["grass", "poison"],
      notstarter: true
    }
  },
  {
    name: "Tentacool",
    img: "tentacool.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["water", "poison"],
      notstarter: true
    }
  },
  {
    name: "Tentacruel",
    img: "tentacruel.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["water", "poison"],
      notstarter: true
    }
  },
  {
    name: "Geodude",
    img: "geodude.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["rock", "ground"],
      notstarter: true
    }
  },
  {
    name: "Graveler",
    img: "graveler.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["rock", "ground"],
      notstarter: true
    }
  },
  {
    name: "Golem",
    img: "golem.png",
    opts: {
      gen: ["g1"],
      evo: ["3"],
      type: ["rock", "ground"],
      notstarter: true
    }
  },
  {
    name: "Ponyta",
    img: "ponyta.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["fire"],
      notstarter: true
    }
  },
  {
    name: "Rapidash",
    img: "rapidash.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["fire"],
      notstarter: true
    }
  },
  {
    name: "Slowpoke",
    img: "slowpoke.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["water", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Slowbro",
    img: "slowbro.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["water", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Magnemite",
    img: "magnemite.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["electric", "steel"],
      notstarter: true
    }
  },
  {
    name: "Magneton",
    img: "magneton.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["electric", "steel"],
      notstarter: true
    }
  },
  {
    name: "Farfetch'd",
    img: "farfetchd.png",
    opts: {
      gen: ["g1"],
      evo: ["s"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Doduo",
    img: "doduo.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Dodrio",
    img: "dodrio.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Seel",
    img: "seel.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Dewgong",
    img: "dewgong.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["water", "ice"],
      notstarter: true
    }
  },
  {
    name: "Grimer",
    img: "grimer.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["poison"],
      notstarter: true
    }
  },
  {
    name: "Muk",
    img: "muk.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["poison"],
      notstarter: true
    }
  },
  {
    name: "Shellder",
    img: "shellder.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Cloyster",
    img: "cloyster.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["water", "ice"],
      notstarter: true
    }
  },
  {
    name: "Gastly",
    img: "gastly.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["ghost", "poison"],
      notstarter: true
    }
  },
  {
    name: "Haunter",
    img: "haunter.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["ghost", "poison"],
      notstarter: true
    }
  },
  {
    name: "Gengar",
    img: "gengar.png",
    opts: {
      gen: ["g1"],
      evo: ["3"],
      type: ["ghost", "poison"],
      notstarter: true
    }
  },
  {
    name: "Onix",
    img: "onix.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["rock", "ground"],
      notstarter: true
    }
  },
  {
    name: "Drowzee",
    img: "drowzee.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["Psychic"],
      notstarter: true
    }
  },
  {
    name: "Hypno",
    img: "hypno.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["Psychic"],
      notstarter: true
    }
  },
  {
    name: "Krabby",
    img: "krabby.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Kingler",
    img: "kingler.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Voltorb",
    img: "voltorb.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["electric"],
      notstarter: true
    }
  },
  {
    name: "Electrode",
    img: "electrode.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["electric"],
      notstarter: true
    }
  },
  {
    name: "Exeggcute",
    img: "exeggcute.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["grass", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Exeggutor",
    img: "exeggutor.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["grass", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Cubone",
    img: "cubone.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["ground"],
      notstarter: true
    }
  },
  {
    name: "Marowak",
    img: "marowak.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["ground"],
      notstarter: true
    }
  },
  {
    name: "Hitmonlee",
    img: "hitmonlee.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["fighting"],
      notstarter: true
    }
  },
  {
    name: "Hitmonchan",
    img: "hitmonchan.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["fighting"],
      notstarter: true
    }
  },
  {
    name: "Lickitung",
    img: "lickitung.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Koffing",
    img: "koffing.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["poison"],
      notstarter: true
    }
  },
  {
    name: "Weezing",
    img: "weezing.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["poison"],
      notstarter: true
    }
  },
  {
    name: "Rhyhorn",
    img: "rhyhorn.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["ground", "rock"],
      notstarter: true
    }
  },
  {
    name: "Rhydon",
    img: "rhydon.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["ground", "rock"],
      notstarter: true
    }
  },
  {
    name: "Chansey",
    img: "chansey.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["Normal"],
      notstarter: true
    }
  },
  {
    name: "Tangela",
    img: "tangela.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["Grass"],
      notstarter: true
    }
  },
  {
    name: "Kangaskhan",
    img: "kangaskhan.png",
    opts: {
      gen: ["g1"],
      evo: ["s"],
      type: ["Normal"],
      notstarter: true
    }
  },
  {
    name: "Horsea",
    img: "horsea.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Seadra",
    img: "seadra.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Goldeen",
    img: "goldeen.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Seaking",
    img: "seaking.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Staryu",
    img: "staryu.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Starmie",
    img: "starmie.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["water", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Mr. mime",
    img: "mrmime.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["psychic", "fairy"],
      notstarter: true
    }
  },
  {
    name: "Scyther",
    img: "scyther.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["bug", "flying"],
      notstarter: true
    }
  },
  {
    name: "Jynx",
    img: "jynx.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["ice", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Electabuzz",
    img: "electabuzz.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["electric"],
      notstarter: true
    }
  },
  {
    name: "Magmar",
    img: "magmar.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["fire"],
      notstarter: true
    }
  },
  {
    name: "Pinsir",
    img: "pinsir.png",
    opts: {
      gen: ["g1"],
      evo: ["s"],
      type: ["bug"],
      notstarter: true
    }
  },
  {
    name: "Tauros",
    img: "tauros.png",
    opts: {
      gen: ["g1"],
      evo: ["s"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Magikarp",
    img: "magikarp.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Gyarados",
    img: "gyarados.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["water", "flying"],
      notstarter: true
    }
  },
  {
    name: "Lapras",
    img: "lapras.png",
    opts: {
      gen: ["g1"],
      evo: ["s"],
      type: ["water", "ice"],
      notstarter: true
    }
  },
  {
    name: "Ditto",
    img: "ditto.png",
    opts: {
      gen: ["g1"],
      evo: ["s"],
      type: ["nromal"],
      notstarter: true
    }
  },
  {
    name: "Eevee",
    img: "eevee.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["nromal"]
    }
  },
  {
    name: "Vaporeon",
    img: "vaporeon.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Jolteon",
    img: "jolteon.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["electric"],
      notstarter: true
    }
  },
  {
    name: "Flareon",
    img: "flareon.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["fire"],
      notstarter: true
    }
  },
  {
    name: "Porygon",
    img: "porygon.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Omanyte",
    img: "omanyte.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["rock", "water"],
      notstarter: true
    }
  },
  {
    name: "Omastar",
    img: "omastar.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["rock", "water"],
      notstarter: true
    }
  },
  {
    name: "Kabuto",
    img: "kabuto.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["rock", "water"],
      notstarter: true
    }
  },
  {
    name: "Kabutops",
    img: "kabutops.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["rock", "water"],
      notstarter: true
    }
  },
  {
    name: "Aerodactyl",
    img: "aerodactyl.png",
    opts: {
      gen: ["g1"],
      evo: ["s"],
      type: ["rock", "flying"],
      notstarter: true
    }
  },
  {
    name: "Snorlax",
    img: "snorlax.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Articuno",
    img: "articuno.png",
    opts: {
      gen: ["g1"],
      evo: ["s", "legendary"],
      type: ["ice", "flying"],
      notstarter: true
    }
  },
  {
    name: "Zapdos",
    img: "zapdos.png",
    opts: {
      gen: ["g1"],
      evo: ["s", "legendary"],
      type: ["electric", "flying"],
      notstarter: true
    }
  },
  {
    name: "Moltres",
    img: "moltres.png",
    opts: {
      gen: ["g1"],
      evo: ["s", "legendary"],
      type: ["fire", "flying"],
      notstarter: true
    }
  },
  {
    name: "Dratini",
    img: "dratini.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["dragon"],
      notstarter: true
    }
  },
  {
    name: "Dragonair",
    img: "dragonair.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["dragon"],
      notstarter: true
    }
  },
  {
    name: "Dragonite",
    img: "dragonite.png",
    opts: {
      gen: ["g1"],
      evo: ["3"],
      type: ["dragon", "flying"],
      notstarter: true
    }
  },
  {
    name: "Mewtwo",
    img: "mewtwo.png",
    opts: {
      gen: ["g1"],
      evo: ["s", "legendary"],
      type: ["psychic"],
      notstarter: true
    }
  },
  {
    name: "Mew",
    img: "mew.png",
    opts: {
      gen: ["g1"],
      evo: ["s", "mythical"],
      type: ["psychic"],
      notstarter: true
    }
  }, // 22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
  {
    name: "Chikorita",
    img: "chikorita.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["grass"]
    }
  },
  {
    name: "Bayleef",
    img: "bayleef.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["grass"]
    }
  },
  {
    name: "Meganium",
    img: "meganium.png",
    opts: {
      gen: ["g2"],
      evo: ["3"],
      type: ["grass"]
    }
  },
  {
    name: "Cyndaquil",
    img: "cyndaquil.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["fire"]
    }
  },
  {
    name: "Quilava",
    img: "quilava.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["fire"]
    }
  },
  {
    name: "Typhlosion",
    img: "typhlosion.png",
    opts: {
      gen: ["g2"],
      evo: ["3"],
      type: ["fire"]
    }
  },
  {
    name: "Totodile",
    img: "totodile.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["water"]
    }
  },
  {
    name: "Croconaw",
    img: "croconaw.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["water"]
    }
  },
  {
    name: "Feraligatr",
    img: "feraligatr.png",
    opts: {
      gen: ["g2"],
      evo: ["3"],
      type: ["water"]
    }
  },
  {
    name: "Sentret",
    img: "sentret.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Furret",
    img: "furret.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Hoothoot",
    img: "hoothoot.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Noctowl",
    img: "noctowl.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Ledyba",
    img: "ledyba.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["bug", "flying"],
      notstarter: true
    }
  },
  {
    name: "Ledian",
    img: "ledian.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["bug", "flying"],
      notstarter: true
    }
  },
  {
    name: "Spinarak",
    img: "spinarak.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["bug", "poison"],
      notstarter: true
    }
  },
  {
    name: "Ariados",
    img: "ariados.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["bug", "poison"],
      notstarter: true
    }
  },
  {
    name: "Crobat",
    img: "crobat.png",
    opts: {
      gen: ["g2"],
      evo: ["3"],
      type: ["poison", "flying"],
      notstarter: true
    }
  },
  {
    name: "Chinchou",
    img: "chinchou.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["water", "electric"],
      notstarter: true
    }
  },
  {
    name: "Lanturn",
    img: "lanturn.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["water", "electric"],
      notstarter: true
    }
  },
  {
    name: "Pichu",
    img: "pichu.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["electric"],
      notstarter: true
    }
  },
  {
    name: "Cleffa",
    img: "cleffa.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["fairy"],
      notstarter: true
    }
  },
  {
    name: "Igglybuff",
    img: "igglybuff.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["normal", "fairy"],
      notstarter: true
    }
  },
  {
    name: "Togepi",
    img: "togepi.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["fairy"],
      notstarter: true
    }
  },
  {
    name: "Togetic",
    img: "togetic.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["fairy", "flying"],
      notstarter: true
    }
  },
  {
    name: "Natu",
    img: "natu.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["psychic", "flying"],
      notstarter: true
    }
  },
  {
    name: "Xatu",
    img: "xatu.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["psychic", "flying"],
      notstarter: true
    }
  },
  {
    name: "Mareep",
    img: "mareep.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["electric"],
      notstarter: true
    }
  },
  {
    name: "Flaaffy",
    img: "flaaffy.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["electric"],
      notstarter: true
    }
  },
  {
    name: "Ampharos",
    img: "ampharos.png",
    opts: {
      gen: ["g2"],
      evo: ["3"],
      type: ["electric"],
      notstarter: true
    }
  },
  {
    name: "Bellossom",
    img: "bellossom.png",
    opts: {
      gen: ["g2"],
      evo: ["3"],
      type: ["grass"],
      notstarter: true
    }
  },
  {
    name: "Marill",
    img: "marill.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["water", "fairy"],
      notstarter: true
    }
  },
  {
    name: "Azumarill",
    img: "azumarill.png",
    opts: {
      gen: ["g2"],
      evo: ["3"],
      type: ["water", "fairy"],
      notstarter: true
    }
  },
  {
    name: "Sudowoodo",
    img: "sudowoodo.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["rock"],
      notstarter: true
    }
  },
  {
    name: "Politoed",
    img: "politoed.png",
    opts: {
      gen: ["g2"],
      evo: ["3"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Hoppip",
    img: "hoppip.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["grass", "flying"],
      notstarter: true
    }
  },
  {
    name: "Skiploom",
    img: "skiploom.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["grass", "flying"],
      notstarter: true
    }
  },
  {
    name: "Jumpluff",
    img: "jumpluff.png",
    opts: {
      gen: ["g2"],
      evo: ["3"],
      type: ["grass", "flying"],
      notstarter: true
    }
  },
  {
    name: "Aipom",
    img: "aipom.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Sunkern",
    img: "sunkern.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["grass"],
      notstarter: true
    }
  },
  {
    name: "Sunflora",
    img: "sunflora.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["grass"],
      notstarter: true
    }
  },
  {
    name: "Yanma",
    img: "yanma.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["bug", "flying"],
      notstarter: true
    }
  },
  {
    name: "Wooper",
    img: "wooper.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["water", "ground"],
      notstarter: true
    }
  },
  {
    name: "Quagsire",
    img: "quagsire.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["water", "ground"],
      notstarter: true
    }
  },
  {
    name: "Espeon",
    img: "espeon.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["psychic"],
      notstarter: true
    }
  },
  {
    name: "Umbreon",
    img: "umbreon.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["dark"],
      notstarter: true
    }
  },
  {
    name: "Murkrow",
    img: "murkrow.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["dark", "flying"],
      notstarter: true
    }
  },
  {
    name: "Slowking",
    img: "slowking.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["water", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Misdreavus",
    img: "misdreavus.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["ghost"],
      notstarter: true
    }
  },
  {
    name: "Unown A",
    img: "unowna.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true
    }
  },
  {
    name: "Unown B",
    img: "unownb.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown C",
    img: "unownc.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown D",
    img: "unownd.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown E",
    img: "unowne.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown F",
    img: "unownf.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown G",
    img: "unowng.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown H",
    img: "unownh.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown I",
    img: "unowni.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown J",
    img: "unownj.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown K",
    img: "unownk.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown L",
    img: "unownl.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown M",
    img: "unownm.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown N",
    img: "unownn.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown O",
    img: "unowno.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown P",
    img: "unownp.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown Q",
    img: "unownq.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown R",
    img: "unownr.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown S",
    img: "unowns.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown T",
    img: "unownt.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown U",
    img: "unownu.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown V",
    img: "unownv.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown W",
    img: "unownw.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown X",
    img: "unownx.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown Y",
    img: "unowny.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown Z",
    img: "unownz.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown!",
    img: "unownexclamation.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Unown?",
    img: "unownquestion.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Wobbuffet",
    img: "wobbuffet.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["psychic"],
      notstarter: true
    }
  },
  {
    name: "Girafarig",
    img: "girafarig.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["normal", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Pineco",
    img: "pineco.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["bug"],
      notstarter: true
    }
  },
  {
    name: "Forretress",
    img: "forretress.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["bug", "steel"],
      notstarter: true
    }
  },
  {
    name: "Dunsparce",
    img: "dunsparce.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Gligar",
    img: "gligar.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["ground", "flying"],
      notstarter: true
    }
  },
  {
    name: "Steelix",
    img: "steelix.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["steel", "ground"],
      notstarter: true
    }
  },
  {
    name: "Snubbull",
    img: "snubbull.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["fairy"],
      notstarter: true
    }
  },
  {
    name: "Granbull",
    img: "granbull.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["fairy"],
      notstarter: true
    }
  },
  {
    name: "Qwilfish",
    img: "qwilfish.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["water", "poison"],
      notstarter: true
    }
  },
  {
    name: "Scizor",
    img: "scizor.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["bug", "steel"],
      notstarter: true
    }
  },
  {
    name: "Shuckle",
    img: "shuckle.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["bug", "rock"],
      notstarter: true
    }
  },
  {
    name: "Heracross",
    img: "heracross.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["bug", "fighting"],
      notstarter: true
    }
  },
  {
    name: "Sneasel",
    img: "sneasel.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["dark", "ice"],
      notstarter: true
    }
  },
  {
    name: "Teddiursa",
    img: "teddiursa.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Ursaring",
    img: "ursaring.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Slugma",
    img: "slugma.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["fire"],
      notstarter: true
    }
  },
  {
    name: "Magcargo",
    img: "magcargo.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["fire", "rock"],
      notstarter: true
    }
  },
  {
    name: "Swinub",
    img: "swinub.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["ice", "ground"],
      notstarter: true
    }
  },
  {
    name: "Piloswine",
    img: "piloswine.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["ice", "ground"],
      notstarter: true
    }
  },
  {
    name: "Corsola",
    img: "corsola.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["water", "rock"],
      notstarter: true
    }
  },
  {
    name: "Remoraid",
    img: "remoraid.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Octillery",
    img: "octillery.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Delibird",
    img: "delibird.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["ice", "flying"],
      notstarter: true
    }
  },
  {
    name: "Mantine",
    img: "mantine.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["water", "flying"],
      notstarter: true
    }
  },
  {
    name: "Skarmory",
    img: "skarmory.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["steel", "flying"],
      notstarter: true
    }
  },
  {
    name: "Houndour",
    img: "houndour.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["dark", "fire"],
      notstarter: true
    }
  },
  {
    name: "Houndoom",
    img: "houndoom.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["dark", "fire"],
      notstarter: true
    }
  },
  {
    name: "Kingdra",
    img: "kingdra.png",
    opts: {
      gen: ["g2"],
      evo: ["3"],
      type: ["water", "dragon"],
      notstarter: true
    }
  },
  {
    name: "Phanpy",
    img: "phanpy.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["ground"],
      notstarter: true
    }
  },
  {
    name: "Donphan",
    img: "donphan.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["ground"],
      notstarter: true
    }
  },
  {
    name: "Porygon2",
    img: "porygon2.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Stantler",
    img: "stantler.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Smeargle",
    img: "smeargle.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Tyrogue",
    img: "tyrogue.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["fighting"],
      notstarter: true
    }
  },
  {
    name: "Hitmontop",
    img: "hitmontop.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["fighting"],
      notstarter: true
    }
  },
  {
    name: "Smoochum",
    img: "smoochum.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["ice", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Elekid",
    img: "elekid.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["electric"],
      notstarter: true
    }
  },
  {
    name: "Magby",
    img: "magby.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["fire"],
      notstarter: true
    }
  },
  {
    name: "Miltank",
    img: "miltank.png",
    opts: {
      gen: ["g2"],
      evo: ["s"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Blissey",
    img: "blissey.png",
    opts: {
      gen: ["g2"],
      evo: ["3"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Raikou",
    img: "raikou.png",
    opts: {
      gen: ["g2"],
      evo: ["s", "legendary"],
      type: ["electric"],
      notstarter: true
    }
  },
  {
    name: "Entei",
    img: "entei.png",
    opts: {
      gen: ["g2"],
      evo: ["s", "legendary"],
      type: ["fire"],
      notstarter: true
    }
  },
  {
    name: "Suicune",
    img: "suicune.png",
    opts: {
      gen: ["g2"],
      evo: ["s", "legendary"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Larvitar",
    img: "larvitar.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["rock", "ground"],
      notstarter: true
    }
  },
  {
    name: "Pupitar",
    img: "pupitar.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["rock", "ground"],
      notstarter: true
    }
  },
  {
    name: "Tyranitar",
    img: "tyranitar.png",
    opts: {
      gen: ["g2"],
      evo: ["3"],
      type: ["rock", "dark"],
      notstarter: true
    }
  },
  {
    name: "Lugia",
    img: "lugia.png",
    opts: {
      gen: ["g2"],
      evo: ["s", "legendary"],
      type: ["psychic", "flying"],
      notstarter: true
    }
  },
  {
    name: "Ho-oh",
    img: "ho-oh.png",
    opts: {
      gen: ["g2"],
      evo: ["s", "legendary"],
      type: ["fire", "flying"],
      notstarter: true
    }
  },
  {
    name: "Celebi",
    img: "celebi.png",
    opts: {
      gen: ["g2"],
      evo: ["s", "mythical"],
      type: ["psychic", "grass"],
      notstarter: true
    }
  },// 333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
  {
    name: "Treecko",
    img: "treecko.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["grass"]
    }
  },
  {
    name: "Grovyle",
    img: "grovyle.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["grass"]
    }
  },
  {
    name: "Sceptile",
    img: "sceptile.png",
    opts: {
      gen: ["g3"],
      evo: ["3"],
      type: ["grass"]
    }
  },
  {
    name: "Torchic",
    img: "torchic.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["fire"]
    }
  },
  {
    name: "Combusken",
    img: "combusken.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["fire", "fighting"]
    }
  },
  {
    name: "Blaziken",
    img: "blaziken.png",
    opts: {
      gen: ["g3"],
      evo: ["3"],
      type: ["fire", "fighting"]
    }
  },
  {
    name: "Mudkip",
    img: "mudkip.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["water"]
    }
  },
  {
    name: "Marshtomp",
    img: "marshtomp.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["water", "ground"]
    }
  },
  {
    name: "Swampert",
    img: "swampert.png",
    opts: {
      gen: ["g3"],
      evo: ["3"],
      type: ["water", "ground"]
    }
  },
  {
    name: "Poochyena",
    img: "poochyena.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["dark"],
      notstarter: true
    }
  },
  {
    name: "Mightyena",
    img: "mightyena.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["dark"],
      notstarter: true
    }
  },
  {
    name: "Zigzagoon",
    img: "zigzagoon.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Linoone",
    img: "linoone.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Wurmple",
    img: "wurmple.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["bug"],
      notstarter: true
    }
  },
  {
    name: "Silcoon",
    img: "silcoon.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["bug"],
      notstarter: true
    }
  },
  {
    name: "Beautifly",
    img: "beautifly.png",
    opts: {
      gen: ["g3"],
      evo: ["3"],
      type: ["bug", "flying"],
      notstarter: true
    }
  },
  {
    name: "Cascoon",
    img: "cascoon.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["bug"],
      notstarter: true
    }
  },
  {
    name: "Dustox",
    img: "dustox.png",
    opts: {
      gen: ["g3"],
      evo: ["3"],
      type: ["bug", "poison"],
      notstarter: true
    }
  },
  {
    name: "Lotad",
    img: "lotad.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["water", "grass"],
      notstarter: true
    }
  },
  {
    name: "Lombre",
    img: "lombre.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["water", "grass"],
      notstarter: true
    }
  },
  {
    name: "Ludicolo",
    img: "ludicolo.png",
    opts: {
      gen: ["g3"],
      evo: ["3"],
      type: ["water", "grass"],
      notstarter: true
    }
  },
  {
    name: "Seedot",
    img: "seedot.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["grass"],
      notstarter: true
    }
  },
  {
    name: "Nuzleaf",
    img: "nuzleaf.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["grass", "dark"],
      notstarter: true
    }
  },
  {
    name: "Shiftry",
    img: "shiftry.png",
    opts: {
      gen: ["g3"],
      evo: ["3"],
      type: ["grass", "dark"],
      notstarter: true
    }
  },
  {
    name: "Taillow",
    img: "taillow.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Swellow",
    img: "swellow.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Wingull",
    img: "wingull.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["water", "flying"],
      notstarter: true
    }
  },
  {
    name: "Pelipper",
    img: "pelipper.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["water", "flying"],
      notstarter: true
    }
  },
  {
    name: "Ralts",
    img: "ralts.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["psychic", "fairy"],
      notstarter: true
    }
  },
  {
    name: "Kirlia",
    img: "kirlia.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["psychic", "fairy"],
      notstarter: true
    }
  },
  {
    name: "Gardevoir",
    img: "gardevoir.png",
    opts: {
      gen: ["g3"],
      evo: ["3"],
      type: ["psychic", "fairy"],
      notstarter: true
    }
  },
  {
    name: "Surskit",
    img: "surskit.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["bug", "water"],
      notstarter: true
    }
  },
  {
    name: "Masquerain",
    img: "masquerain.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["bug", "flying"],
      notstarter: true
    }
  },
  {
    name: "Shroomish",
    img: "shroomish.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["grass"],
      notstarter: true
    }
  },
  {
    name: "Breloom",
    img: "breloom.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["grass", "fighting"],
      notstarter: true
    }
  },
  {
    name: "Slakoth",
    img: "slakoth.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Vigoroth",
    img: "vigoroth.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Slaking",
    img: "slaking.png",
    opts: {
      gen: ["g3"],
      evo: ["3"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Nincada",
    img: "nincada.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["bug", "ground"],
      notstarter: true
    }
  },
  {
    name: "Ninjask",
    img: "ninjask.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["bug", "flying"],
      notstarter: true
    }
  },
  {
    name: "Shedinja",
    img: "shedinja.png",
    opts: {
      gen: ["g3"],
      evo: ["3"],
      type: ["bug", "ghost"],
      notstarter: true
    }
  },
  {
    name: "Whismur",
    img: "whismur.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Loudred",
    img: "loudred.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Exploud",
    img: "exploud.png",
    opts: {
      gen: ["g3"],
      evo: ["3"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Makuhita",
    img: "makuhita.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["fighting"],
      notstarter: true
    }
  },
  {
    name: "Hariyama",
    img: "hariyama.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["fighting"],
      notstarter: true
    }
  },
  {
    name: "Azurill",
    img: "azurill.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["normal", "fairy"],
      notstarter: true
    }
  },
  {
    name: "Nosepass",
    img: "nosepass.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["rock"],
      notstarter: true
    }
  },
  {
    name: "Skitty",
    img: "skitty.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Delcatty",
    img: "delcatty.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Sableye",
    img: "sableye.png",
    opts: {
      gen: ["g3"],
      evo: ["s"],
      type: ["dark", "ghost"],
      notstarter: true
    }
  },
  {
    name: "Mawile",
    img: "mawile.png",
    opts: {
      gen: ["g3"],
      evo: ["s"],
      type: ["steel", "fairy"],
      notstarter: true
    }
  },
  {
    name: "Aron",
    img: "aron.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["steel", "rock"],
      notstarter: true
    }
  },
  {
    name: "Lairon",
    img: "lairon.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["steel", "rock"],
      notstarter: true
    }
  },
  {
    name: "Aggron",
    img: "aggron.png",
    opts: {
      gen: ["g3"],
      evo: ["3"],
      type: ["steel", "rock"],
      notstarter: true
    }
  },
  {
    name: "Meditite",
    img: "meditite.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["fighting", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Medicham",
    img: "medicham.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["fighting", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Electrike",
    img: "electrike.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["electric"],
      notstarter: true
    }
  },
  {
    name: "Manectric",
    img: "manectric.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["electric"],
      notstarter: true
    }
  },
  {
    name: "Plusle",
    img: "plusle.png",
    opts: {
      gen: ["g3"],
      evo: ["s"],
      type: ["electric"],
      notstarter: true
    }
  },
  {
    name: "Minun",
    img: "minun.png",
    opts: {
      gen: ["g3"],
      evo: ["s"],
      type: ["electric"],
      notstarter: true
    }
  },
  {
    name: "Volbeat",
    img: "volbeat.png",
    opts: {
      gen: ["g3"],
      evo: ["s"],
      type: ["bug"],
      notstarter: true
    }
  },
  {
    name: "Illumise",
    img: "illumise.png",
    opts: {
      gen: ["g3"],
      evo: ["s"],
      type: ["bug"],
      notstarter: true
    }
  },
  {
    name: "Roselia",
    img: "roselia.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["grass", "poison"],
      notstarter: true
    }
  },
  {
    name: "Gulpin",
    img: "gulpin.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["poison"],
      notstarter: true
    }
  },
  {
    name: "Swalot",
    img: "swalot.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["poison"],
      notstarter: true
    }
  },
  {
    name: "Carvanha",
    img: "carvanha.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["water", "dark"],
      notstarter: true
    }
  },
  {
    name: "Sharpedo",
    img: "sharpedo.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["water", "dark"],
      notstarter: true
    }
  },
  {
    name: "Wailmer",
    img: "wailmer.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Wailord",
    img: "wailord.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Numel",
    img: "numel.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["fire", "ground"],
      notstarter: true
    }
  },
  {
    name: "Camerupt",
    img: "camerupt.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["fire", "ground"],
      notstarter: true
    }
  },
  {
    name: "Torkoal",
    img: "torkoal.png",
    opts: {
      gen: ["g3"],
      evo: ["s"],
      type: ["fire"],
      notstarter: true
    }
  },
  {
    name: "Spoink",
    img: "spoink.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["psychic"],
      notstarter: true
    }
  },
  {
    name: "Grumpig",
    img: "grumpig.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["psychic"],
      notstarter: true
    }
  },
  {
    name: "Spinda",
    img: "spinda.png",
    opts: {
      gen: ["g3"],
      evo: ["s"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Trapinch",
    img: "trapinch.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["ground"],
      notstarter: true
    }
  },
  {
    name: "Vibrava",
    img: "vibrava.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["ground", "dragon"],
      notstarter: true
    }
  },
  {
    name: "Flygon",
    img: "flygon.png",
    opts: {
      gen: ["g3"],
      evo: ["3"],
      type: ["ground", "dragon"],
      notstarter: true
    }
  },
  {
    name: "Cacnea",
    img: "cacnea.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["grass"],
      notstarter: true
    }
  },
  {
    name: "Cacturne",
    img: "cacturne.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["grass", "dark"],
      notstarter: true
    }
  },
  {
    name: "Swablu",
    img: "swablu.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Altaria",
    img: "altaria.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["dragon", "flying"],
      notstarter: true
    }
  },
  {
    name: "Zangoose",
    img: "zangoose.png",
    opts: {
      gen: ["g3"],
      evo: ["s"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Seviper",
    img: "seviper.png",
    opts: {
      gen: ["g3"],
      evo: ["s"],
      type: ["poison"],
      notstarter: true
    }
  },
  {
    name: "Lunatone",
    img: "lunatone.png",
    opts: {
      gen: ["g3"],
      evo: ["s"],
      type: ["rock", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Solrock",
    img: "solrock.png",
    opts: {
      gen: ["g3"],
      evo: ["s"],
      type: ["rock", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Barboach",
    img: "barboach.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["water", "ground"],
      notstarter: true
    }
  },
  {
    name: "Whiscash",
    img: "whiscash.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["water", "ground"],
      notstarter: true
    }
  },
  {
    name: "Corphish",
    img: "corphish.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Crawdaunt",
    img: "crawdaunt.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["water", "dark"],
      notstarter: true
    }
  },
  {
    name: "Baltoy",
    img: "baltoy.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["ground", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Claydol",
    img: "claydol.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["ground", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Lileep",
    img: "lileep.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["rock", "ground"],
      notstarter: true
    }
  },
  {
    name: "Cradily",
    img: "cradily.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["rock", "ground"],
      notstarter: true
    }
  },
  {
    name: "Anorith",
    img: "anorith.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["rock", "ground"],
      notstarter: true
    }
  },
  {
    name: "Armaldo",
    img: "armaldo.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["rock", "ground"],
      notstarter: true
    }
  },
  {
    name: "Feebas",
    img: "feebas.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Milotic",
    img: "milotic.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Castform (Normal)",
    img: "castform.png",
    opts: {
      gen: ["g3"],
      evo: ["s"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Castform (Sunny)",
    img: "castformsunny.png",
    opts: {
      gen: ["g3"],
      evo: ["s"],
      type: ["fire"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Castform (Rainy)",
    img: "castformrainy.png",
    opts: {
      gen: ["g3"],
      evo: ["s"],
      type: ["water"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Castform (Snowy)",
    img: "castformsnowy.png",
    opts: {
      gen: ["g3"],
      evo: ["s"],
      type: ["ice"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Kecleon",
    img: "kecleon.png",
    opts: {
      gen: ["g3"],
      evo: ["s"],
      type: [""],
      notstarter: true
    }
  },
  {
    name: "Shuppet",
    img: "shuppet.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["ghost"],
      notstarter: true
    }
  },
  {
    name: "Banette",
    img: "banette.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["ghost"],
      notstarter: true
    }
  },
  {
    name: "Duskull",
    img: "duskull.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["ghost"],
      notstarter: true
    }
  },
  {
    name: "Dusclops",
    img: "dusclops.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["ghost"],
      notstarter: true
    }
  },
  {
    name: "Tropius",
    img: "tropius.png",
    opts: {
      gen: ["g3"],
      evo: ["s"],
      type: ["grass", "flying"],
      notstarter: true
    }
  },
  {
    name: "Chimecho",
    img: "chimecho.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["psychic"],
      notstarter: true
    }
  },
  {
    name: "Absol",
    img: "absol.png",
    opts: {
      gen: ["g3"],
      evo: ["s"],
      type: ["dark"],
      notstarter: true
    }
  },
  {
    name: "Wynaut",
    img: "wynaut.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["psychic"],
      notstarter: true
    }
  },
  {
    name: "Snorunt",
    img: "snorunt.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["ice"],
      notstarter: true
    }
  },
  {
    name: "Glalie",
    img: "glalie.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["ice"],
      notstarter: true
    }
  },
  {
    name: "Spheal",
    img: "spheal.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["ice", "water"],
      notstarter: true
    }
  },
  {
    name: "Sealeo",
    img: "sealeo.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["ice", "water"],
      notstarter: true
    }
  },
  {
    name: "Walrein",
    img: "walrein.png",
    opts: {
      gen: ["g3"],
      evo: ["3"],
      type: ["ice", "water"],
      notstarter: true
    }
  },
  {
    name: "Clamperl",
    img: "clamperl.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Huntail",
    img: "huntail.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Gorebyss",
    img: "gorebyss.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Relicanth",
    img: "relicanth.png",
    opts: {
      gen: ["g3"],
      evo: ["s"],
      type: ["water", "rock"],
      notstarter: true
    }
  },
  {
    name: "Luvdisc",
    img: "luvdisc.png",
    opts: {
      gen: ["g3"],
      evo: ["s"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Bagon",
    img: "bagon.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["dragon"],
      notstarter: true
    }
  },
  {
    name: "Shelgon",
    img: "shelgon.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["dragon"],
      notstarter: true
    }
  },
  {
    name: "Salamence",
    img: "salamence.png",
    opts: {
      gen: ["g3"],
      evo: ["3"],
      type: ["dragon", "flying"],
      notstarter: true
    }
  },
  {
    name: "Beldum",
    img: "beldum.png",
    opts: {
      gen: ["g3"],
      evo: ["1"],
      type: ["steel", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Metang",
    img: "metang.png",
    opts: {
      gen: ["g3"],
      evo: ["2"],
      type: ["steel", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Metagross",
    img: "metagross.png",
    opts: {
      gen: ["g3"],
      evo: ["3"],
      type: ["steel", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Regirock",
    img: "regirock.png",
    opts: {
      gen: ["g3"],
      evo: ["s", "legendary"],
      type: ["rock"],
      notstarter: true
    }
  },
  {
    name: "Regice",
    img: "regice.png",
    opts: {
      gen: ["g3"],
      evo: ["s", "legendary"],
      type: ["ice"],
      notstarter: true
    }
  },
  {
    name: "Registeel",
    img: "registeel.png",
    opts: {
      gen: ["g3"],
      evo: ["s", "legendary"],
      type: ["steel"],
      notstarter: true
    }
  },
  {
    name: "Latias",
    img: "latias.png",
    opts: {
      gen: ["g3"],
      evo: ["s", "legendary"],
      type: ["dragon", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Latios",
    img: "latios.png",
    opts: {
      gen: ["g3"],
      evo: ["s", "legendary"],
      type: ["dragon", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Kyogre",
    img: "kyogre.png",
    opts: {
      gen: ["g3"],
      evo: ["s", "legendary"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Groudon",
    img: "groudon.png",
    opts: {
      gen: ["g3"],
      evo: ["s", "legendary"],
      type: ["ground"],
      notstarter: true
    }
  },
  {
    name: "Rayquaza",
    img: "rayquaza.png",
    opts: {
      gen: ["g3"],
      evo: ["s", "legendary"],
      type: ["dragon", "flying"],
      notstarter: true
    }
  },
  {
    name: "Jirachi",
    img: "jirachi.png",
    opts: {
      gen: ["g3"],
      evo: ["s", "mythical"],
      type: ["steel", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Deoxys",
    img: "deoxys.png",
    opts: {
      gen: ["g3"],
      evo: ["s", "mythical"],
      type: ["psychic"],
      notstarter: true
    }
  },
  {
    name: "Deoxys (Attack)",
    img: "deoxysattack.png",
    opts: {
      gen: ["g3"],
      evo: ["s", "mythical"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Deoxys (Defense)",
    img: "deoxysdefense.png",
    opts: {
      gen: ["g3"],
      evo: ["s", "mythical"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Deoxys (Speed)",
    img: "deoxysspeed.png",
    opts: {
      gen: ["g3"],
      evo: ["s", "mythical"],
      type: ["psychic"],
      notstarter: true,
      variant: true
    }
  },// 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
  {
    name: "Turtwig",
    img: "turtwig.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["grass"],
      notstarter: true
    }
  },
  {
    name: "Grotle",
    img: "grotle.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["grass"],
      notstarter: true
    }
  },
  {
    name: "Torterra",
    img: "torterra.png",
    opts: {
      gen: ["g4"],
      evo: ["3"],
      type: ["grass", "ground"],
      notstarter: true
    }
  },
  {
    name: "Chimchar",
    img: "chimchar.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["fire"],
      notstarter: true
    }
  },
  {
    name: "Monferno",
    img: "monferno.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["fire", "fighting"],
      notstarter: true
    }
  },
  {
    name: "Infernape",
    img: "infernape.png",
    opts: {
      gen: ["g4"],
      evo: ["3"],
      type: ["fire", "fighting"],
      notstarter: true
    }
  },
  {
    name: "Piplup",
    img: "piplup.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Prinplup",
    img: "prinplup.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Empoleon",
    img: "empoleon.png",
    opts: {
      gen: ["g4"],
      evo: ["3"],
      type: ["water", "steel"],
      notstarter: true
    }
  },
  {
    name: "Starly",
    img: "starly.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Staravia",
    img: "staravia.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Staraptor",
    img: "staraptor.png",
    opts: {
      gen: ["g4"],
      evo: ["3"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Bidoof",
    img: "bidoof.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Bibarel",
    img: "bibarel.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["normal", "water"],
      notstarter: true
    }
  },
  {
    name: "Kricketot",
    img: "kricketot.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["bug"],
      notstarter: true
    }
  },
  {
    name: "Kricketune",
    img: "kricketune.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["bug"],
      notstarter: true
    }
  },
  {
    name: "Shinx",
    img: "shinx.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["electric"],
      notstarter: true
    }
  },
  {
    name: "Luxio",
    img: "luxio.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["electric"],
      notstarter: true
    }
  },
  {
    name: "Luxray",
    img: "luxray.png",
    opts: {
      gen: ["g4"],
      evo: ["3"],
      type: ["electric"],
      notstarter: true
    }
  },
  {
    name: "Budew",
    img: "budew.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["grass", "poison"],
      notstarter: true
    }
  },
  {
    name: "Roserade",
    img: "roserade.png",
    opts: {
      gen: ["g4"],
      evo: ["3"],
      type: ["grass", "poison"],
      notstarter: true
    }
  },
  {
    name: "Cranidos",
    img: "cranidos.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["rock"],
      notstarter: true
    }
  },
  {
    name: "Rampardos",
    img: "rampardos.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["rock"],
      notstarter: true
    }
  },
  {
    name: "Shieldon",
    img: "shieldon.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["rock", "steel"],
      notstarter: true
    }
  },
  {
    name: "Bastiodon",
    img: "bastiodon.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["rock", "steel"],
      notstarter: true
    }
  },
  {
    name: "Burmy (Plant Cloak)",
    img: "burmyplant.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["bug"],
      notstarter: true
    }
  },
  {
    name: "Burmy (Sandy Cloak)",
    img: "burmysandy.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["bug"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Burmy (Trash Cloak)",
    img: "burmytrash.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["bug"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Wormadam (Plant Cloak)",
    img: "wormadamplant.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["bug", "grass"],
      notstarter: true
    }
  },
  {
    name: "Wormadam (Sandy Cloak)",
    img: "wormadamsandy.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["bug", "ground"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Wormadam (Trash Cloak)",
    img: "wormadamtrash.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["bug", "steel"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Mothim",
    img: "mothim.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["bug", "flying"],
      notstarter: true
    }
  },
  {
    name: "Combee",
    img: "combee.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["bug", "flying"],
      notstarter: true
    }
  },
  {
    name: "Vespiquen",
    img: "vespiquen.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["bug", "flying"],
      notstarter: true
    }
  },
  {
    name: "Pachirisu",
    img: "pachirisu.png",
    opts: {
      gen: ["g4"],
      evo: ["s"],
      type: ["electric"],
      notstarter: true
    }
  },
  {
    name: "Buizel",
    img: "buizel.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Floatzel",
    img: "floatzel.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Cherubi",
    img: "cherubi.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["grass"],
      notstarter: true
    }
  },
  {
    name: "Cherrim (Overcast)",
    img: "cherrimovercast.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["grass"],
      notstarter: true
    }
  },
  {
    name: "Cherrim (Sunshine)",
    img: "cherrimsunshine.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["grass"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Shellos (West Sea)",
    img: "shelloswest.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Shellos (East Sea)",
    img: "shelloseast.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["water"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Gastrodon (West Sea)",
    img: "gastrodonwest.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["water", "ground"],
      notstarter: true
    }
  },
  {
    name: "Gastrodon (East Sea)",
    img: "gastrodoneast.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["water", "ground"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Ambipom",
    img: "ambipom.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Drifloon",
    img: "drifloon.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["ghost", "flying"],
      notstarter: true
    }
  },
  {
    name: "Drifblim",
    img: "drifblim.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["ghost", "flying"],
      notstarter: true
    }
  },
  {
    name: "Buneary",
    img: "buneary.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Lopunny",
    img: "lopunny.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Mismagius",
    img: "mismagius.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["ghost"],
      notstarter: true
    }
  },
  {
    name: "Honchkrow",
    img: "honchkrow.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["dark", "flying"],
      notstarter: true
    }
  },
  {
    name: "Glameow",
    img: "glameow.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Purugly",
    img: "purugly.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Chingling",
    img: "chingling.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["psychic"],
      notstarter: true
    }
  },
  {
    name: "Stunky",
    img: "stunky.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["poison", "dark"],
      notstarter: true
    }
  },
  {
    name: "Skuntank",
    img: "skuntank.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["poison", "dark"],
      notstarter: true
    }
  },
  {
    name: "Bronzor",
    img: "bronzor.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["steel", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Bronzong",
    img: "bronzong.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["steel", "psychic"],
      notstarter: true
    }
  },
  {
    name: "Bonsly",
    img: "bonsly.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["rock"],
      notstarter: true
    }
  },
  {
    name: "Mime Jr.",
    img: "mimejr.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["psychic", "fairy"],
      notstarter: true
    }
  },
  {
    name: "Happiny",
    img: "happiny.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Chatot",
    img: "chatot.png",
    opts: {
      gen: ["g4"],
      evo: ["s"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Spiritomb",
    img: "spiritomb.png",
    opts: {
      gen: ["g4"],
      evo: ["s"],
      type: ["ghost", "dark"],
      notstarter: true
    }
  },
  {
    name: "Gible",
    img: "gible.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["dragon", "ground"],
      notstarter: true
    }
  },
  {
    name: "Gabite",
    img: "gabite.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["dragon", "ground"],
      notstarter: true
    }
  },
  {
    name: "Garchomp",
    img: "garchomp.png",
    opts: {
      gen: ["g4"],
      evo: ["3"],
      type: ["dragon", "ground"],
      notstarter: true
    }
  },
  {
    name: "Munchlax",
    img: "munchlax.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Riolu",
    img: "riolu.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["fighting"],
      notstarter: true
    }
  },
  {
    name: "Lucario",
    img: "lucario.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["fighting", "steel"],
      notstarter: true
    }
  },
  {
    name: "Hippopotas (Male)",
    img: "hippopotas.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["ground"],
      notstarter: true
    }
  },
  {
    name: "Hippotas (Female)",
    img: "hippotasfemale.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["ground"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Hippowdon (Male)",
    img: "hippowdon.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["ground"],
      notstarter: true
    }
  },
  {
    name: "Hippowdon (Female)",
    img: "hippowdonfemale.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["ground"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Skorupi",
    img: "skorupi.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["poison", "bug"],
      notstarter: true
    }
  },
  {
    name: "Drapion",
    img: "drapion.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["poison", "dark"],
      notstarter: true
    }
  },
  {
    name: "Croagunk",
    img: "croagunk.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["poison", "fighting"],
      notstarter: true
    }
  },
  {
    name: "Toxicroak",
    img: "toxicroak.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["poison", "fighting"],
      notstarter: true
    }
  },
  {
    name: "Carnivine",
    img: "carnivine.png",
    opts: {
      gen: ["g4"],
      evo: ["s"],
      type: ["grass"],
      notstarter: true
    }
  },
  {
    name: "Finneon",
    img: "finneon.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Lumineon",
    img: "lumineon.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Mantyke",
    img: "mantyke.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["water", "flying"],
      notstarter: true
    }
  },
  {
    name: "Snover",
    img: "snover.png",
    opts: {
      gen: ["g4"],
      evo: ["1"],
      type: ["grass", "ice"],
      notstarter: true
    }
  },
  {
    name: "Abomasnow",
    img: "abomasnow.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["grass", "ice"],
      notstarter: true
    }
  },
  {
    name: "Weavile",
    img: "weavile.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["dark", "ice"],
      notstarter: true
    }
  },
  {
    name: "Magnezone",
    img: "magnezone.png",
    opts: {
      gen: ["g4"],
      evo: ["3"],
      type: ["electric", "steel"],
      notstarter: true
    }
  },
  {
    name: "Lickilicky",
    img: "lickilicky.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Rhyperior",
    img: "rhyperior.png",
    opts: {
      gen: ["g4"],
      evo: ["3"],
      type: ["ground", "rock"],
      notstarter: true
    }
  },
  {
    name: "Tangrowth",
    img: "tangrowth.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["grass"],
      notstarter: true
    }
  },
  {
    name: "Electivire",
    img: "electivire.png",
    opts: {
      gen: ["g4"],
      evo: ["3"],
      type: ["electric"],
      notstarter: true
    }
  },
  {
    name: "Magmortar",
    img: "magmortar.png",
    opts: {
      gen: ["g4"],
      evo: ["3"],
      type: ["fire"],
      notstarter: true
    }
  },
  {
    name: "Togekiss",
    img: "togekiss.png",
    opts: {
      gen: ["g4"],
      evo: ["3"],
      type: ["fairy", "flying"],
      notstarter: true
    }
  },
  {
    name: "Yanmega",
    img: "yanmega.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["bug", "flying"],
      notstarter: true
    }
  },
  {
    name: "Leafeon",
    img: "leafeon.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["grass"],
      notstarter: true
    }
  },
  {
    name: "Glaceon",
    img: "glaceon.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["ice"],
      notstarter: true
    }
  },
  {
    name: "Gliscor",
    img: "gliscor.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["ground", "flying"],
      notstarter: true
    }
  },
  {
    name: "Mamoswine",
    img: "mamoswine.png",
    opts: {
      gen: ["g4"],
      evo: ["3"],
      type: ["ice", "ground"],
      notstarter: true
    }
  },
  {
    name: "Porygon-Z",
    img: "porygonz.png",
    opts: {
      gen: ["g4"],
      evo: ["3"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Gallade",
    img: "gallade.png",
    opts: {
      gen: ["g4"],
      evo: ["3"],
      type: ["psychic", "fighting"],
      notstarter: true
    }
  },
  {
    name: "Probopass",
    img: "probopass.png",
    opts: {
      gen: ["g4"],
      evo: ["2"],
      type: ["rock", "steel"],
      notstarter: true
    }
  },
  {
    name: "Dusknoir",
    img: "dusknoir.png",
    opts: {
      gen: ["g4"],
      evo: ["3"],
      type: ["ghost"],
      notstarter: true
    }
  },
  {
    name: "Froslass",
    img: "froslass.png",
    opts: {
      gen: ["g4"],
      evo: ["3"],
      type: ["ice", "ghost"],
      notstarter: true
    }
  },
  {
    name: "Rotom",
    img: "rotom.png",
    opts: {
      gen: ["g4"],
      evo: ["s"],
      type: ["electric", "ghost"],
      notstarter: true
    }
  },
  {
    name: "Rotom (Mircowave)",
    img: "rotomheat.png",
    opts: {
      gen: ["g4"],
      evo: ["s"],
      type: ["electric", "fire"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Rotom (Washing Machine)",
    img: "rotomwash.png",
    opts: {
      gen: ["g4"],
      evo: ["s"],
      type: ["electric", "water"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Rotom (Refrigerator)",
    img: "rotomfrost.png",
    opts: {
      gen: ["g4"],
      evo: ["s"],
      type: ["electric", "ice"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Rotom (Fan)",
    img: "rotomfan.png",
    opts: {
      gen: ["g4"],
      evo: ["s"],
      type: ["electric", "flying"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Rotom (Lawn Mower)",
    img: "rotommow.png",
    opts: {
      gen: ["g4"],
      evo: ["s"],
      type: ["electric", "grass"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Uxie",
    img: "uxie.png",
    opts: {
      gen: ["g4"],
      evo: ["s", "legendary"],
      type: ["psychic"],
      notstarter: true
    }
  },
  {
    name: "Mesprit",
    img: "mesprit.png",
    opts: {
      gen: ["g4"],
      evo: ["s", "legendary"],
      type: ["psychic"],
      notstarter: true
    }
  },
  {
    name: "Azelf",
    img: "azelf.png",
    opts: {
      gen: ["g4"],
      evo: ["s", "legendary"],
      type: ["psychic"],
      notstarter: true
    }
  },
  {
    name: "Dialga",
    img: "dialga.png",
    opts: {
      gen: ["g4"],
      evo: ["s", "legendary"],
      type: ["steel", "dragon"],
      notstarter: true
    }
  },
  {
    name: "Palkia",
    img: "palkia.png",
    opts: {
      gen: ["g4"],
      evo: ["s", "legendary"],
      type: ["dragon", "dragon"],
      notstarter: true
    }
  },
  {
    name: "Heatran",
    img: "heatran.png",
    opts: {
      gen: ["g4"],
      evo: ["s", "legendary"],
      type: ["heat", "steel"],
      notstarter: true
    }
  },
  {
    name: "Regigigas",
    img: "regigigas.png",
    opts: {
      gen: ["g4"],
      evo: ["s", "legendary"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Giratina (Altered)",
    img: "giratina.png",
    opts: {
      gen: ["g4"],
      evo: ["s", "legendary"],
      type: ["ghost", "dragon"],
      notstarter: true
    }
  },
  {
    name: "Giratina (Origin)",
    img: "giratinaorigin.png",
    opts: {
      gen: ["g4"],
      evo: ["s", "legendary"],
      type: ["ghost", "dragon"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Cresselia",
    img: "cresselia.png",
    opts: {
      gen: ["g4"],
      evo: ["s", "psychic"],
      type: ["psychic"],
      notstarter: true
    }
  },
  {
    name: "Phione",
    img: "phione.png",
    opts: {
      gen: ["g4"],
      evo: ["s", "mythical"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Manaphy",
    img: "manaphy.png",
    opts: {
      gen: ["g4"],
      evo: ["s", "mythical"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Darkrai",
    img: "darkrai.png",
    opts: {
      gen: ["g4"],
      evo: ["s", "mythical"],
      type: ["dark"],
      notstarter: true
    }
  },
  {
    name: "Shaymin (Land)",
    img: "shaymin.png",
    opts: {
      gen: ["g4"],
      evo: ["s", "mythical"],
      type: ["grass"],
      notstarter: true
    }
  },
  {
    name: "Shaymin (Sky)",
    img: "shayminsky.png",
    opts: {
      gen: ["g4"],
      evo: ["s", "mythical"],
      type: ["grass", "flying"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Arceus",
    img: "arceus.png",
    opts: {
      gen: ["g4"],
      evo: ["s", "mythical"],
      type: ["normal"],
      notstarter: true
    }
  },// 5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
  {
    name: "Victini",
    img: "victini.png",
    opts: {
      gen: ["g5"],
      evo: ["s", "mythical"],
      type: ["psychic", "fire"],
      notstarter: true
    }
  },
  {
    name: "Snivy",
    img: "snivy.png",
    opts: {
      gen: ["g5"],
      evo: ["1"],
      type: ["grass"],
      notstarter: false
    }
  },
  {
    name: "Servine",
    img: "servine.png",
    opts: {
      gen: ["g5"],
      evo: ["2"],
      type: ["grass"],
      notstarter: false
    }
  },
  {
    name: "Serperior",
    img: "serperior.png",
    opts: {
      gen: ["g5"],
      evo: ["3"],
      type: ["grass"],
      notstarter: false
    }
  },
  {
    name: "Tepig",
    img: "tepig.png",
    opts: {
      gen: ["g5"],
      evo: ["1"],
      type: ["fire"],
      notstarter: false
    }
  },
  {
    name: "Pignite",
    img: "pignite.png",
    opts: {
      gen: ["g5"],
      evo: ["2"],
      type: ["fire", "fighting"],
      notstarter: false
    }
  },
  {
    name: "Emboar",
    img: "emboar.png",
    opts: {
      gen: ["g5"],
      evo: ["3"],
      type: ["fire", "fighting"],
      notstarter: false
    }
  },
  {
    name: "Oshawott",
    img: "oshawott.png",
    opts: {
      gen: ["g5"],
      evo: ["1"],
      type: ["water"],
      notstarter: false
    }
  },
  {
    name: "Dewott",
    img: "dewott.png",
    opts: {
      gen: ["g5"],
      evo: ["2"],
      type: ["water"],
      notstarter: false
    }
  },
  {
    name: "Samurott",
    img: "samurott.png",
    opts: {
      gen: ["g5"],
      evo: ["3"],
      type: ["water"],
      notstarter: false
    }
  },
  {
    name: "Patrat",
    img: "patrat.png",
    opts: {
      gen: ["g5"],
      evo: ["1"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Watchog",
    img: "watchog.png",
    opts: {
      gen: ["g5"],
      evo: ["2"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Lillipup",
    img: "lillipup.png",
    opts: {
      gen: ["g5"],
      evo: ["1"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Herdier",
    img: "herdier.png",
    opts: {
      gen: ["g5"],
      evo: ["2"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Stoutland",
    img: "stoutland.png",
    opts: {
      gen: ["g5"],
      evo: ["3"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Purrloin",
    img: "purrloin.png",
    opts: {
      gen: ["g5"],
      evo: ["1"],
      type: ["dark"],
      notstarter: true
    }
  },
  {
    name: "Liepard",
    img: "liepard.png",
    opts: {
      gen: ["g5"],
      evo: ["2"],
      type: ["dark"],
      notstarter: true
    }
  },
  {
    name: "Pansage",
    img: "pansage.png",
    opts: {
      gen: ["g5"],
      evo: ["1"],
      type: ["grass"],
      notstarter: true
    }
  },
  {
    name: "Simisage",
    img: "simisage.png",
    opts: {
      gen: ["g5"],
      evo: ["2"],
      type: ["grass"],
      notstarter: true
    }
  },
  {
    name: "Pansear",
    img: "pansear.png",
    opts: {
      gen: ["g5"],
      evo: ["1"],
      type: ["fire"],
      notstarter: true
    }
  },
  {
    name: "Simisear",
    img: "simisear.png",
    opts: {
      gen: ["g5"],
      evo: ["2"],
      type: ["fire"],
      notstarter: true
    }
  },
  {
    name: "Panpour",
    img: "panpour.png",
    opts: {
      gen: ["g5"],
      evo: ["1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Simipour",
    img: "simipour.png",
    opts: {
      gen: ["g5"],
      evo: ["2"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Munna",
    img: "munna.png",
    opts: {
      gen: ["g5"],
      evo: ["1"],
      type: ["psychic"],
      notstarter: true
    }
  },
  {
    name: "Musharna",
    img: "musharna.png",
    opts: {
      gen: ["g5"],
      evo: ["2"],
      type: ["psychic"],
      notstarter: true
    }
  },
  {
    name: "Pidove",
    img: "pidove.png",
    opts: {
      gen: ["g5"],
      evo: ["1"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Tranquill",
    img: "tranquill.png",
    opts: {
      gen: ["g5"],
      evo: ["2"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Unfezant (Male)",
    img: "unfezant.png",
    opts: {
      gen: ["g5"],
      evo: ["3"],
      type: ["normal", "flying"],
      notstarter: true
    }
  },
  {
    name: "Unfezant (Female)",
    img: "unfezantfemale.png",
    opts: {
      gen: ["g5"],
      evo: ["3"],
      type: ["normal", "flying"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Blitzle",
    img: "blitzle.png",
    opts: {
      gen: ["g5"],
      evo: ["1"],
      type: ["Electric"],
      notstarter: true
    }
  },
  {
    name: "Zebstrika",
    img: "zebstrika.png",
    opts: {
      gen: ["g5"],
      evo: ["2"],
      type: ["Electric"],
      notstarter: true
    }
  },
  {
    name: "Roggenrola",
    img: "roggenrola.png",
    opts: {
      gen: ["g5"],
      evo: ["1"],
      type: ["rock"],
      notstarter: true
    }
  },
  {
    name: "Boldore",
    img: "boldore.png",
    opts: {
      gen: ["g5"],
      evo: ["2"],
      type: ["rock"],
      notstarter: true
    }
  },
  {
    name: "Gigalith",
    img: "gigalith.png",
    opts: {
      gen: ["g5"],
      evo: ["3"],
      type: ["rock"],
      notstarter: true
    }
  },
  {
    name: "Woobat",
    img: "woobat.png",
    opts: {
      gen: ["g5"],
      evo: ["1"],
      type: ["psychic", "flying"],
      notstarter: true
    }
  },
  {
    name: "Swoobat",
    img: "swoobat.png",
    opts: {
      gen: ["g5"],
      evo: ["2"],
      type: ["psychic", "flying"],
      notstarter: true
    }
  },
  {
    name: "Drillbur",
    img: "drillbur.png",
    opts: {
      gen: ["g5"],
      evo: ["1"],
      type: ["ground"],
      notstarter: true
    }
  },
  {
    name: "Excadrill",
    img: "excadrill.png",
    opts: {
      gen: ["g5"],
      evo: ["2"],
      type: ["ground", "steel"],
      notstarter: true
    }
  },
  {
    name: "Audino",
    img: "audino.png",
    opts: {
      gen: ["g5"],
      evo: ["s"],
      type: ["normal"],
      notstarter: true
    }
  },
  {
    name: "Timburr",
    img: "timburr.png",
    opts: {
      gen: ["g5"],
      evo: ["1"],
      type: ["fighting"],
      notstarter: true
    }
  },
  {
    name: "Gurdurr",
    img: "gurdurr.png",
    opts: {
      gen: ["g5"],
      evo: ["2"],
      type: ["fighting"],
      notstarter: true
    }
  },
  {
    name: "Conkeldurr",
    img: "conkeldurr.png",
    opts: {
      gen: ["g5"],
      evo: ["3"],
      type: ["fighting"],
      notstarter: true
    }
  },
  {
    name: "Tympol",
    img: "tympol.png",
    opts: {
      gen: ["g5"],
      evo: ["1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Palpitoad",
    img: "palpitoad.png",
    opts: {
      gen: ["g5"],
      evo: ["2"],
      type: ["water", "ground"],
      notstarter: true
    }
  },
  {
    name: "Seismitoad",
    img: "seismitoad.png",
    opts: {
      gen: ["g5"],
      evo: ["3"],
      type: ["water", "ground"],
      notstarter: true
    }
  },
  {
    name: "Throh",
    img: "throh.png",
    opts: {
      gen: ["g5"],
      evo: ["s"],
      type: ["fighting"],
      notstarter: true
    }
  },
  {
    name: "Sawk",
    img: "sawk.png",
    opts: {
      gen: ["g5"],
      evo: ["s"],
      type: ["fighting"],
      notstarter: true
    }
  },
  {
    name: "Sewaddle",
    img: "sewaddle.png",
    opts: {
      gen: ["g5"],
      evo: ["1"],
      type: ["bug", "grass"],
      notstarter: true
    }
  },
  {
    name: "Swadloon",
    img: "swadloon.png",
    opts: {
      gen: ["g5"],
      evo: ["2"],
      type: ["bug", "grass"],
      notstarter: true
    }
  },
  {
    name: "Leavanny",
    img: "leavanny.png",
    opts: {
      gen: ["g5"],
      evo: ["3"],
      type: ["bug", "grass"],
      notstarter: true
    }
  },
  {
    name: "Venipede",
    img: "venipede.png",
    opts: {
      gen: ["g5"],
      evo: ["3"],
      type: ["bug", "poison"],
      notstarter: true
    }
  },
  {
    name: "Whirlipede",
    img: "whirlipede.png",
    opts: {
      gen: ["g5"],
      evo: ["3"],
      type: ["bug", "poison"],
      notstarter: true
    }
  },
  {
    name: "Scolipede",
    img: "scolipede.png",
    opts: {
      gen: ["g5"],
      evo: ["3"],
      type: ["bug", "poison"],
      notstarter: true
    }
  },
  {
    name: "Cottonee",
    img: "cottonee.png",
    opts: {
      gen: ["g5"],
      evo: ["1"],
      type: ["grass", "fairy"],
      notstarter: true
    }
  },
  {
    name: "Whimsicott",
    img: "whimsicott.png",
    opts: {
      gen: ["g5"],
      evo: ["2"],
      type: ["grass", "fairy"],
      notstarter: true
    }
  },
  {
    name: "Petilil",
    img: "petilil.png",
    opts: {
      gen: ["g5"],
      evo: ["1"],
      type: ["grass"],
      notstarter: true
    }
  },
  {
    name: "Lilligant",
    img: "lilligant.png",
    opts: {
      gen: ["g5"],
      evo: ["2"],
      type: ["grass"],
      notstarter: true
    }
  },
  {
    name: "Basculin (Red-Striped)",
    img: "basculin.png",
    opts: {
      gen: ["g5"],
      evo: ["1"],
      type: ["water"],
      notstarter: true
    }
  },
  {
    name: "Basculin (Blue-Striped)",
    img: "basculin.png",
    opts: {
      gen: ["g5"],
      evo: ["2"],
      type: ["water"],
      notstarter: true,
      variant: true
    }
  },
  {
    name: "Basculin (White-Striped)",
    img: "basculin.png",
    opts: {
      gen: ["g5"],
      evo: ["3"],
      type: ["water"],
      notstarter: true,
      variant: true
    }
  }
/*
  ,
  {
    name: "",
    img: ".png",
    opts: {
      gen: ["g5"],
      evo: [""],
      type: [""],
      notstarter: true
    }
  }
*/
];
