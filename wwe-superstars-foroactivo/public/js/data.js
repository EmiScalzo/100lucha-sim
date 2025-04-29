/**
 * WWE Superstars Data
 * This file contains all the data for the WWE Superstars clone
 */

// Championships Data
const championships = [
  {
    id: 'wwe-championship',
    name: 'WWE Championship',
    image: '/public/images/championships/wwe-championship.png',
    description: 'The WWE Championship is widely recognized as the most historic championship in WWE. Dating back to 1963, the WWE Championship was first awarded to Buddy Rogers after he defeated Antonino Rocca in the finals of a tournament in April. Since that time, the biggest names in the business have held the title, including Bruno Sammartino, Andre the Giant, Bret Hart, The Rock and "Stone Cold" Steve Austin.',
    established: 'April 1963',
    currentHolder: 'john-cena',
    daysHeld: 8,
    longestReign: {
      name: 'Bruno Sammartino',
      days: 2803
    },
    shortestReign: {
      name: 'Rey Mysterio',
      days: '<1'
    },
    mostReigns: {
      name: 'John Cena',
      count: 16
    },
    reigns: [
      {
        holder: 'John Cena',
        date: 'Apr 20, 2025 - Present',
        days: 8
      },
      {
        holder: 'Cody Rhodes',
        date: 'Apr 7, 2024 - Apr 21, 2025',
        days: 378
      },
      {
        holder: 'Roman Reigns',
        date: 'Apr 3, 2022 - Apr 7, 2024',
        days: 734
      },
      {
        holder: 'Brock Lesnar',
        date: 'Feb 19, 2022 - Apr 3, 2022',
        days: 43
      },
      {
        holder: 'Bobby Lashley',
        date: 'Jan 29, 2022 - Feb 19, 2022',
        days: 20
      }
    ]
  },
  {
    id: 'world-heavyweight-championship',
    name: 'World Heavyweight Championship',
    image: '/public/images/championships/world-heavyweight-championship.png',
    description: 'The World Heavyweight Championship is the top title on Raw, reintroduced in 2023 when Triple H presented the new championship to Seth Rollins following the Draft. The championship honors the legacy of the original World Heavyweight Championship that was retired in 2013 when it was unified with the WWE Championship.',
    established: 'May 2023',
    currentHolder: 'jey-uso',
    daysHeld: 31,
    longestReign: {
      name: 'Seth "Freakin" Rollins',
      days: 284
    },
    shortestReign: {
      name: 'Damian Priest',
      days: 40
    },
    mostReigns: {
      name: 'Seth "Freakin" Rollins',
      count: 2
    },
    reigns: [
      {
        holder: 'Jey Uso',
        date: 'Mar 29, 2025 - Present',
        days: 31
      },
      {
        holder: 'Damian Priest',
        date: 'Feb 16, 2025 - Mar 29, 2025',
        days: 40
      },
      {
        holder: 'Drew McIntyre',
        date: 'Jan 5, 2025 - Feb 16, 2025',
        days: 42
      },
      {
        holder: 'Seth "Freakin" Rollins',
        date: 'Apr 26, 2024 - Jan 5, 2025',
        days: 254
      }
    ]
  },
  {
    id: 'womens-world-championship',
    name: "Women's World Championship",
    image: '/public/images/championships/womens-world-championship.png',
    description: "The Women's World Championship is the top women's title on Raw, introduced in 2023 to replace the Raw Women's Championship. The championship represents the continued evolution of women's wrestling in WWE.",
    established: 'May 2023',
    currentHolder: 'iyo-sky',
    daysHeld: 7,
    longestReign: {
      name: 'Rhea Ripley',
      days: 373
    },
    shortestReign: {
      name: 'Liv Morgan',
      days: 30
    },
    mostReigns: {
      name: 'Rhea Ripley',
      count: 2
    },
    reigns: [
      {
        holder: 'IYO SKY',
        date: 'Apr 22, 2025 - Present',
        days: 7
      },
      {
        holder: 'Rhea Ripley',
        date: 'Mar 1, 2025 - Apr 22, 2025',
        days: 52
      },
      {
        holder: 'Liv Morgan',
        date: 'Jan 30, 2025 - Mar 1, 2025',
        days: 30
      },
      {
        holder: 'Rhea Ripley',
        date: 'Apr 2, 2024 - Jan 30, 2025',
        days: 303
      }
    ]
  },
  {
    id: 'wwe-womens-championship',
    name: "WWE Women's Championship",
    image: '/public/images/championships/wwe-womens-championship.png',
    description: "The WWE Women's Championship is the top women's title on SmackDown, representing the pinnacle of women's wrestling in WWE. It has been held by some of the most influential women in WWE history.",
    established: 'April 2023',
    currentHolder: 'tiffany-stratton',
    daysHeld: 35,
    longestReign: {
      name: 'Bayley',
      days: 279
    },
    shortestReign: {
      name: 'Charlotte Flair',
      days: 21
    },
    mostReigns: {
      name: 'Bayley',
      count: 1
    },
    reigns: [
      {
        holder: 'Tiffany Stratton',
        date: 'Mar 25, 2025 - Present',
        days: 35
      },
      {
        holder: 'Bayley',
        date: 'Jan 27, 2024 - Mar 25, 2025',
        days: 279
      },
      {
        holder: 'Charlotte Flair',
        date: 'Dec 30, 2023 - Jan 27, 2024',
        days: 28
      }
    ]
  },
  {
    id: 'intercontinental-championship',
    name: 'Intercontinental Championship',
    image: '/public/images/championships/intercontinental-championship.png',
    description: 'The Intercontinental Championship is one of the most prestigious titles in WWE. Since Pat Patterson became the first champion in 1979, the Intercontinental Championship has been held by some of the most iconic Superstars in WWE history.',
    established: 'September 1979',
    currentHolder: 'dominik-mysterio',
    daysHeld: 42,
    longestReign: {
      name: 'Honky Tonk Man',
      days: 454
    },
    shortestReign: {
      name: 'Dean Douglas',
      days: '<1'
    },
    mostReigns: {
      name: 'Chris Jericho',
      count: 9
    },
    reigns: [
      {
        holder: 'Dominik Mysterio',
        date: 'Mar 18, 2025 - Present',
        days: 42
      },
      {
        holder: 'Sami Zayn',
        date: 'Dec 30, 2024 - Mar 18, 2025',
        days: 78
      },
      {
        holder: 'Gunther',
        date: 'Jun 9, 2024 - Dec 30, 2024',
        days: 204
      }
    ]
  },
  {
    id: 'united-states-championship',
    name: 'United States Championship',
    image: '/public/images/championships/united-states-championship.png',
    description: 'The United States Championship was established in 1975 in NWA Mid-Atlantic and was later incorporated into WCW before becoming a staple in WWE after the 2001 acquisition of WCW. The title has been held by some of the most decorated competitors in sports-entertainment.',
    established: 'January 1975',
    currentHolder: 'jacob-fatu',
    daysHeld: 28,
    longestReign: {
      name: 'Lex Luger',
      days: 523
    },
    shortestReign: {
      name: 'Terry Funk',
      days: '<1'
    },
    mostReigns: {
      name: 'Ric Flair',
      count: 6
    },
    reigns: [
      {
        holder: 'Jacob Fatu',
        date: 'Apr 1, 2025 - Present',
        days: 28
      },
      {
        holder: 'LA Knight',
        date: 'Nov 4, 2024 - Apr 1, 2025',
        days: 148
      },
      {
        holder: 'Logan Paul',
        date: 'Jul 8, 2024 - Nov 4, 2024',
        days: 119
      }
    ]
  }
];

// Superstars Data
const superstars = [
  {
    id: 'john-cena',
    name: 'John Cena',
    image: '/public/images/superstars/john-cena.png',
    brand: 'SmackDown',
    bio: 'John Cena is a 16-time World Champion, five-time United States Champion and record-setting Make-A-Wish contributor. The Face That Runs The Place combines an unmatched work ethic with his signature moves the Attitude Adjustment and the STF to make good on his legendary mantra, "Never Give Up."',
    stats: {
      height: '6\'1"',
      weight: '251 lbs',
      hometown: 'West Newbury, Massachusetts',
      signature: 'Attitude Adjustment, STF',
      career: '16-time World Champion, 5-time United States Champion',
      debut: 'June 27, 2002'
    },
    championships: ['wwe-championship']
  },
  {
    id: 'jey-uso',
    name: 'Jey Uso',
    image: '/public/images/superstars/jey-uso.png',
    brand: 'Raw',
    bio: 'Half of one of the most decorated tag teams of all time with his twin brother Jimmy, Jey Uso has now taken his career to new heights as a singles competitor. After breaking free from The Bloodline, he has established himself as a force to be reckoned with, culminating in his first World Heavyweight Championship win.',
    stats: {
      height: '6\'2"',
      weight: '235 lbs',
      hometown: 'San Francisco, California',
      signature: 'Uso Splash, Superkick',
      career: 'World Heavyweight Champion, 9-time Tag Team Champion',
      debut: 'April 5, 2010'
    },
    championships: ['world-heavyweight-championship']
  },
  {
    id: 'iyo-sky',
    name: 'IYO SKY',
    image: '/public/images/superstars/iyo-sky.png',
    brand: 'Raw',
    bio: 'With an arsenal of moves never before seen by the WWE Universe, IYO SKY brings a new dynamic to women\'s wrestling. The Genius of the Sky has gone from being a key member of Damage CTRL to becoming Women\'s World Champion with her incredible in-ring ability and high-flying style.',
    stats: {
      height: '5\'1"',
      weight: '115 lbs',
      hometown: 'Tokyo, Japan',
      signature: 'Over the Moonsault, Asai Moonsault',
      career: 'Women\'s World Champion, Women\'s Tag Team Champion, Money in the Bank winner',
      debut: 'July 30, 2022'
    },
    championships: ['womens-world-championship']
  },
  {
    id: 'tiffany-stratton',
    name: 'Tiffany Stratton',
    image: '/public/images/superstars/tiffany-stratton.png',
    brand: 'SmackDown',
    bio: 'A former gymnast with incredible athleticism, Tiffany Stratton is as agile as she is powerful. Dubbing herself "The Buff Barbie," Stratton has quickly risen through the ranks of WWE thanks to her impressive physical gifts and signature Prettiest Moonsault Ever. Now as WWE Women\'s Champion, she\'s out to prove she\'s more than just a pretty face.',
    stats: {
      height: '5\'7"',
      weight: '132 lbs',
      hometown: 'Prior Lake, Minnesota',
      signature: 'Prettiest Moonsault Ever, Stratosphere',
      career: 'WWE Women\'s Champion, NXT Women\'s Champion',
      debut: 'December 28, 2021'
    },
    championships: ['wwe-womens-championship']
  },
  {
    id: 'dominik-mysterio',
    name: 'Dominik Mysterio',
    image: '/public/images/superstars/dominik-mysterio.png',
    brand: 'Raw',
    bio: 'The son of the legendary Rey Mysterio has carved out his own path in WWE as a member of The Judgment Day. Shedding the legacy of his father, "Dirty Dom" has become one of the most despised Superstars in WWE through his association with Rhea Ripley and his underhanded tactics. His continued growth has led to his first Intercontinental Championship.',
    stats: {
      height: '6\'1"',
      weight: '200 lbs',
      hometown: 'San Diego, California',
      signature: 'Frog Splash, 619',
      career: 'Intercontinental Champion, NXT North American Champion',
      debut: 'August 23, 2020'
    },
    championships: ['intercontinental-championship']
  },
  {
    id: 'jacob-fatu',
    name: 'Jacob Fatu',
    image: '/public/images/superstars/jacob-fatu.png',
    brand: 'SmackDown',
    bio: 'The newest and perhaps most dangerous member of The Bloodline, Jacob Fatu brings a level of aggression and intensity rarely seen in WWE. A perfect blend of power and agility, Fatu can launch his 300-pound frame through the air with ease. As the United States Champion, he has established himself as one of the most dominant forces in WWE.',
    stats: {
      height: '6\'2"',
      weight: '300 lbs',
      hometown: 'Sacramento, California',
      signature: 'Samoan Drop, Moonsault',
      career: 'United States Champion',
      debut: 'July 5, 2024'
    },
    championships: ['united-states-championship']
  },
  {
    id: 'cody-rhodes',
    name: 'Cody Rhodes',
    image: '/public/images/superstars/cody-rhodes.png',
    brand: 'SmackDown',
    bio: 'After spending years away from WWE, Cody Rhodes returned at WrestleMania 38 and quickly established himself as one of the top stars in the company. The American Nightmare completed his fairytale journey when he defeated Roman Reigns at WrestleMania 40 to win the Undisputed WWE Championship and finish the story his father started.',
    stats: {
      height: '6\'1"',
      weight: '220 lbs',
      hometown: 'Marietta, Georgia',
      signature: 'Cross Rhodes, Figure Four Leglock',
      career: 'WWE Champion, 2-time Intercontinental Champion, 2023 & 2024 Royal Rumble winner',
      debut: 'July 16, 2007'
    },
    championships: []
  },
  {
    id: 'roman-reigns',
    name: 'Roman Reigns',
    image: '/public/images/superstars/roman-reigns.png',
    brand: 'SmackDown',
    bio: 'The "Tribal Chief" Roman Reigns stands alone at the head of The Bloodline. With Paul Heyman and The Bloodline behind him, Reigns held the Undisputed WWE Championship for 1,316 days, the longest world championship reign of the modern era. Though he lost the title to Cody Rhodes, Reigns remains one of the most dominant forces in WWE history.',
    stats: {
      height: '6\'3"',
      weight: '265 lbs',
      hometown: 'Pensacola, Florida',
      signature: 'Spear, Superman Punch',
      career: '4-time WWE Champion, 2-time Universal Champion, Royal Rumble winner',
      debut: 'November 18, 2012'
    },
    championships: []
  },
  {
    id: 'rhea-ripley',
    name: 'Rhea Ripley',
    image: '/public/images/superstars/rhea-ripley.png',
    brand: 'Raw',
    bio: 'The Eradicator of The Judgment Day is one of the most physically imposing Superstars in the women\'s division. After dethroning Charlotte Flair at WrestleMania 39, Rhea Ripley held the Women\'s World Championship for over 300 days before injury forced her to relinquish the title. Recently returning from injury, she recaptured the title but lost it to IYO SKY in controversial fashion.',
    stats: {
      height: '5\'7"',
      weight: '137 lbs',
      hometown: 'Adelaide, Australia',
      signature: 'Riptide, Prism Trap',
      career: '2-time Women\'s World Champion, NXT Women\'s Champion, NXT UK Women\'s Champion',
      debut: 'October 17, 2018'
    },
    championships: []
  },
  {
    id: 'becky-lynch',
    name: 'Becky Lynch',
    image: '/public/images/superstars/becky-lynch.png',
    brand: 'SmackDown',
    bio: 'Becky Lynch is one of the most decorated women\'s champions in WWE history. "The Man" made history when she won the first-ever women\'s main event at WrestleMania 35. Known for her wit and in-ring toughness, Lynch has continuously reinvented herself throughout her career while remaining one of the most popular Superstars in WWE.',
    stats: {
      height: '5\'6"',
      weight: '135 lbs',
      hometown: 'Limerick, Ireland',
      signature: 'Manhandle Slam, Dis-arm-her',
      career: '6-time Women\'s Champion, Royal Rumble winner',
      debut: 'June 26, 2014'
    },
    championships: []
  }
];

// More superstars can be added here following the same format
// Championships data can be expanded with more details
