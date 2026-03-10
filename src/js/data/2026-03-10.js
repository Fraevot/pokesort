dataSetVersion = "2026-03-10"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Generation",
    key: "gen",
    tooltip: "Check this to restrict to certain generations.",
    checked: false,
    sub: [
      { name: "Blue/Green/Red/Yellow", tooltip: "Kanto", key: "g1" },
      { name: "Crystal/Gold/Silver", tooltip: "Johto", key: "g2" }
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
      type: ["grass", "poison"],
      notstarter: false
    }
  },
  {
    name: "Ivysaur",
    img: "ivysaur.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["grass", "poison"],
      notstarter: false
    }
  },
  {
    name: "Venusaur",
    img: "venusaur.png",
    opts: {
      gen: ["g1"],
      evo: ["3"],
      type: ["grass", "poison"],
      notstarter: false
    }
  },
  {
    name: "Charmander",
    img: "charmander.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["fire"],
      notstarter: false
    }
  },
  {
    name: "Charmeleon",
    img: "charmeleon.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["fire"],
      notstarter: false
    }
  },
  {
    name: "Charizard",
    img: "charizard.png",
    opts: {
      gen: ["g1"],
      evo: ["3"],
      type: ["fire", "flying"],
      notstarter: false
    }
  },
  {
    name: "Squirtle",
    img: "squirtle.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["water"],
      notstarter: false
    }
  },
  {
    name: "Wartortle",
    img: "wartortle.png",
    opts: {
      gen: ["g1"],
      evo: ["2"],
      type: ["water"],
      notstarter: false
    }
  },
  {
    name: "Blastoise",
    img: "blastoise.png",
    opts: {
      gen: ["g1"],
      evo: ["3"],
      type: ["water"],
      notstarter: false
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
      type: ["electric"],
      notstarter: false
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
    img: "Eevee.png",
    opts: {
      gen: ["g1"],
      evo: ["1"],
      type: ["nromal"],
      notstarter: false
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
  }, // 222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
  {
    name: "Chikorita",
    img: "chikorita.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["grass"],
      notstarter: false
    }
  },
  {
    name: "Bayleef",
    img: "bayleef.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["grass"],
      notstarter: false
    }
  },
  {
    name: "Meganium",
    img: "meganium.png",
    opts: {
      gen: ["g2"],
      evo: ["3"],
      type: ["grass"],
      notstarter: false
    }
  },
  {
    name: "Cyndaquil",
    img: "cyndaquil.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["fire"],
      notstarter: false
    }
  },
  {
    name: "Quilava",
    img: "quilava.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["fire"],
      notstarter: false
    }
  },
  {
    name: "Typhlosion",
    img: "typhlosion.png",
    opts: {
      gen: ["g2"],
      evo: ["3"],
      type: ["fire"],
      notstarter: false
    }
  },
  {
    name: "Totodile",
    img: "totodile.png",
    opts: {
      gen: ["g2"],
      evo: ["1"],
      type: ["water"],
      notstarter: false
    }
  },
  {
    name: "Croconaw",
    img: "croconaw.png",
    opts: {
      gen: ["g2"],
      evo: ["2"],
      type: ["water"],
      notstarter: false
    }
  },
  {
    name: "Feraligatr",
    img: "feraligatr.png",
    opts: {
      gen: ["g2"],
      evo: ["3"],
      type: ["water"],
      notstarter: false
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
  }
/*
  ,
  {
    name: "",
    img: ".png",
    opts: {
      gen: ["g"],
      evo: [""],
      type: [""],
      notstarter: true
    }
  }
*/
];
