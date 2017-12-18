console.log(sequence(
  "Did you know that",
  choice(
    sequence(
      "the",
      choice("Fall", "Spring"),
      "Equinox"
    ),
    sequence(
      "the",
      choice("Winter", "Summer"),
      choice("Solstice", "Olympics")
    ),
    sequence(
      "the",
      choice("earliest", "latest"),
      choice("sunrise", "sunset")
    ),
    sequence(
      "Daylight",
      choice("Saving", "Savings"),
      "Time"
    ),
    sequence(
      "Leap",
      choice("Day", "Year")
    ),
    "Easter",
    sequence(
      "the",
      choice("Harvest", "Super", "Blood"),
      "Moon"
    ),
    "Toyota Truck Month",
    "Shark Week"
  ),
  choice(
    sequence(
      "happens",
      choice("earlier", "later", "at the wrong time"),
      "every year"
    ),
    sequence(
      "drifts out of sync with the",
      (
        "sun",
        "moon",
        "Zodiac",
        (
          choice("Gregorian", "Mayan", "lunar", "iPhone"),
          "calendar"
        ),
        "atomic clock in Colorado"
      )
    ),
    sequence(
      "might",
      choice("not happen", "happen twice"),
      "this year"
    )
  ),
  "because of",
  choice(
    sequence(
      "time zone legislation in",
      choice("Indiana", "Arizona", "Russia")
    ),
    "a decree by the Pope in the 1500s",
    sequence(
      choice(
        "precession",
        "libration",
        "nutation",
        "libation",
        "eccentricity",
        "obliquity"
      ),
      "of the",
      choice(
        "moon",
        "sun",
        "Earth's axis",
        "equator",
        "prime meridian",
        sequence(
          choice("International Date", "Mason-Dixon"),
          "Line"
        )
      )
    ),
    "magnetic field reversal",
    sequence(
      "an arbitrary decision by",
      choice("Benjamin Franklin", "Isaac Newton", "FDR")
    )
  ),
  "?",

  "Apparently",
  choice(
    "it causes a predictable increase in car accidents",
    "that's why we have leap seconds",
    "scientists are really worried",
    sequence(
      "it was even more extreme during the",
      choice("Bronze Age", "Ice Age", "Cretaceous", "1990s")
    ),
    sequence(
      "there's a proposal to fix it, but it",
      choice(
        "will never happen",
        "actually makes things worse",
        "is stalled in Congress",
        "might be unconstitutional"
      )
    ),
    "it's getting worse and no one knows why"
  ),
  ".",

  "While it may seem like trivia, it",
  choice(
    "causes huge headaches for software developers",
    "is taken advantage of by high-speed traders",
    "triggered the 2003 Northeast Blackout",
    "has to be corrected for by GPS satellites",
    "is now recognized as a major cause of World War I"
  ),
  "."
))

function choice () {
  return arguments[Math.round(Math.random() * (arguments.length - 1))]
}

function sequence () {
  return [].slice.call(arguments).join(' ').replace(/ ([\.\?])/g, '$1')
}
