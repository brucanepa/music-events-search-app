import delay from '../../utils/delay';

export const getArtistEvents = async() => {
  await delay();
  return [...artistEvents];
};

const artistEvents = [
  {
    "id": "15329935",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/19583286?app_id=test&came_from=267",
    "on_sale_datetime": "2017-08-30T10:00:00",
    "datetime": "2017-10-29T21:45:00",
    "venue": {
      "name": "Baloise Session ",
      "latitude": "47.5666667",
      "longitude": "7.6",
      "city": "Basel",
      "region": "04",
      "country": "Switzerland"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/19583286?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": ["Kaleo", "Ásgeir"]
  }, {
    "id": "14501643",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/18441396?app_id=test&came_from=267",
    "on_sale_datetime": "2017-05-05T10:00:00",
    "datetime": "2017-10-31T19:00:00",
    "venue": {
      "name": "Manchester Apollo",
      "latitude": "53.465661",
      "longitude": "-2.215373",
      "city": "Longsight",
      "region": "England",
      "country": "United Kingdom"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/18441396?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": ["Kaleo", "Judah & The Lion", "Billy Raffoul"]
  }, {
    "id": "14501644",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/18441397?app_id=test&came_from=267",
    "on_sale_datetime": "2017-05-05T10:00:00",
    "datetime": "2017-11-01T19:00:00",
    "venue": {
      "name": "Roundhouse",
      "latitude": "51.542804",
      "longitude": "-0.148487",
      "city": "London",
      "region": "United Kingdom",
      "country": "United Kingdom"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/18441397?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": ["Kaleo", "Judah & The Lion", "Billy Raffoul"]
  }, {
    "id": "14501645",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/18441398?app_id=test&came_from=267",
    "on_sale_datetime": "2017-05-05T10:00:00",
    "datetime": "2017-11-03T19:00:00",
    "venue": {
      "name": "Barrowlands",
      "latitude": "55.8333333",
      "longitude": "-4.25",
      "city": "Glasgow",
      "region": "V2",
      "country": "United Kingdom"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/18441398?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": ["Kaleo", "Judah & The Lion", "Billy Raffoul"]
  }, {
    "id": "14501646",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/18441399?app_id=test&came_from=267",
    "on_sale_datetime": "2017-05-05T10:00:00",
    "datetime": "2017-11-04T19:00:00",
    "venue": {
      "name": "Birmingham Academy",
      "latitude": "52.480796",
      "longitude": "-1.893836",
      "city": "Birmingham",
      "region": "United Kingdom",
      "country": "United Kingdom"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/18441399?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": ["Kaleo", "Judah & The Lion", "Billy Raffoul"]
  }, {
    "id": "14501647",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/18441400?app_id=test&came_from=267",
    "on_sale_datetime": "2017-05-05T10:00:00",
    "datetime": "2017-11-06T19:00:00",
    "venue": {
      "name": "Olympia ",
      "latitude": "53.3443108",
      "longitude": "-6.2661099",
      "city": "Dublin",
      "region": "MI",
      "country": "Ireland"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/18441400?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": ["Kaleo", "Judah & The Lion", "Billy Raffoul"]
  }, {
    "id": "15014880",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/19141227?app_id=test&came_from=267",
    "on_sale_datetime": "2017-07-10T08:00:00",
    "datetime": "2017-11-07T19:00:00",
    "venue": {
      "name": "Olympia Theatre",
      "latitude": "53.344265",
      "longitude": "-6.266177",
      "city": "Dublin",
      "region": "Ireland",
      "country": "Ireland"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/19141227?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": ["Kaleo", "Judah & The Lion", "Billy Raffoul"]
  }, {
    "id": "14501248",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/18440778?app_id=test&came_from=267",
    "on_sale_datetime": "2017-05-05T10:00:00",
    "datetime": "2017-11-09T19:00:00",
    "venue": {
      "name": "Lotto Arena",
      "latitude": "51.2303886",
      "longitude": "4.44168",
      "city": "Antwerp",
      "region": "Flemish Region",
      "country": "Belgium"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/18440778?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": ["Kaleo", "Judah & The Lion", "Billy Raffoul"]
  }, {
    "id": "14501249",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/18440779?app_id=test&came_from=267",
    "on_sale_datetime": "2017-05-05T10:00:00",
    "datetime": "2017-11-11T19:00:00",
    "venue": {
      "name": "Tempodrom",
      "latitude": "52.516074",
      "longitude": "13.376987",
      "city": "Berlin",
      "region": "Germany",
      "country": "Germany"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/18440779?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": ["Kaleo", "Judah & The Lion"]
  }, {
    "id": "14501250",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/18440780?app_id=test&came_from=267",
    "on_sale_datetime": "2017-05-05T10:00:00",
    "datetime": "2017-11-12T19:00:00",
    "venue": {
      "name": "Vega",
      "latitude": "55.6666667",
      "longitude": "12.5833333",
      "city": "Copenhagen",
      "region": "06",
      "country": "Denmark"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/18440780?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": ["Kaleo", "Judah & The Lion", "Billy Raffoul"]
  }, {
    "id": "14501251",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/18440781?app_id=test&came_from=267",
    "on_sale_datetime": "2017-05-06T10:00:00",
    "datetime": "2017-11-14T19:00:00",
    "venue": {
      "name": "afas live",
      "latitude": "52.3123512",
      "longitude": "4.94415",
      "city": "Amsterdam-Zuidoost",
      "region": "North Holland",
      "country": "Netherlands"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/18440781?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": ["Kaleo", "Judah & The Lion", "Billy Raffoul"]
  }, {
    "id": "14914993",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/19003926?app_id=test&came_from=267",
    "on_sale_datetime": "2017-06-30T10:00:00",
    "datetime": "2017-11-15T20:00:00",
    "venue": {
      "name": "Olympia",
      "latitude": "48.8666667",
      "longitude": "2.3333333",
      "city": "Paris",
      "region": "A8",
      "country": "France"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/19003926?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": ["Kaleo", "Judah & The Lion", "Billy Raffoul"]
  }, {
    "id": "14501252",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/18440782?app_id=test&came_from=267",
    "on_sale_datetime": "2017-05-05T10:00:00",
    "datetime": "2017-11-17T19:00:00",
    "venue": {
      "name": "STADTHALLE",
      "latitude": "50.082598",
      "longitude": "8.776928",
      "city": "Offenbach",
      "region": "HE",
      "country": "Germany"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/18440782?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": ["Kaleo", "Judah & The Lion", "Billy Raffoul"]
  }, {
    "id": "15698496",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/18440783?app_id=test&came_from=267",
    "on_sale_datetime": "2017-05-05T10:00:00",
    "datetime": "2017-11-18T19:00:00",
    "venue": {
      "name": "Gasometer",
      "latitude": "48.185009",
      "longitude": "16.420155",
      "city": "Vienna",
      "region": "",
      "country": "Austria"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/18440783?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": ["Kaleo", "Judah & The Lion", "Billy Raffoul"]
  }, {
    "id": "14957740",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/18440784?app_id=test&came_from=267",
    "on_sale_datetime": "2017-05-05T10:00:00",
    "datetime": "2017-11-21T19:00:00",
    "venue": {
      "name": "Palác Lucerna",
      "latitude": "50.0808907",
      "longitude": "14.4264097",
      "city": "Prague",
      "region": "Prague",
      "country": "Czech Republic"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/18440784?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": ["Kaleo", "Judah & The Lion", "Billy Raffoul"]
  }, {
    "id": "14501255",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/18440785?app_id=test&came_from=267",
    "on_sale_datetime": "2017-05-05T10:00:00",
    "datetime": "2017-11-22T19:00:00",
    "venue": {
      "name": "Progresja Club",
      "latitude": "52.25",
      "longitude": "21.0",
      "city": "Warsaw",
      "region": "Poland",
      "country": "Poland"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/18440785?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": ["Kaleo", "Judah & The Lion", "Billy Raffoul"]
  }, {
    "id": "14383149",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/18277652?app_id=test&came_from=267",
    "on_sale_datetime": "2017-04-15T10:00:00",
    "datetime": "2017-11-24T19:00:00",
    "venue": {
      "name": "A2",
      "latitude": "59.9688797",
      "longitude": "30.3153992",
      "city": "Saint Petersburg",
      "region": "Severo-Zapadniy Federal'niy Okrug",
      "country": "Russia"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/18277652?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": ["Kaleo"]
  }, {
    "id": "14383108",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/18277606?app_id=test&came_from=267",
    "on_sale_datetime": "2017-04-15T10:00:00",
    "datetime": "2017-11-25T19:00:00",
    "venue": {
      "name": "Yotaspace",
      "latitude": "55.7084503",
      "longitude": "37.59589",
      "city": "Moscow",
      "region": "Tsentral'niy Federal'niy Okrug",
      "country": "Russia"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/18277606?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": ["Kaleo"]
  }, {
    "id": "15048935",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/19188946?app_id=test&came_from=267",
    "on_sale_datetime": "",
    "datetime": "2017-12-06T19:00:00",
    "venue": {
      "name": "La Riviera",
      "latitude": "40.41261",
      "longitude": "-3.72246",
      "city": "Madrid",
      "region": "Community Of Madrid",
      "country": "Spain"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/19188946?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": ["Kaleo"]
  }, {
    "id": "15048941",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/19188953?app_id=test&came_from=267",
    "on_sale_datetime": "",
    "datetime": "2017-12-08T21:30:20",
    "venue": {
      "name": "Razzmatazz",
      "latitude": "41.385578",
      "longitude": "2.16874",
      "city": "Barcelona",
      "region": "Spain",
      "country": "Spain"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/19188953?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": ["Kaleo"]
  }, {
    "id": "14854548",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/18891345?app_id=test&came_from=267",
    "on_sale_datetime": "",
    "datetime": "2017-12-15T19:00:00",
    "venue": {
      "name": "*RESCHEDULED FROM JULY 24* Piraeus 117 Academy ",
      "latitude": "37.9833333",
      "longitude": "23.7333333",
      "city": "Athens",
      "region": "35",
      "country": "Greece"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/18891345?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": ["Kaleo"]
  }, {
    "id": "14854592",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/18891394?app_id=test&came_from=267",
    "on_sale_datetime": "",
    "datetime": "2017-12-16T19:00:00",
    "venue": {
      "name": "*RESCHEDULED FROM JULY 25* Moni Lazariston",
      "latitude": "40.6402778",
      "longitude": "22.9438889",
      "city": "Thessaloniki",
      "region": "13",
      "country": "Greece"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/18891394?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": ["Kaleo"]
  }, {
    "id": "15589922",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/19935971?app_id=test&came_from=267",
    "on_sale_datetime": "",
    "datetime": "2018-03-16T10:00:00",
    "venue": {
      "name": "Lollapalooza Argentina",
      "latitude": "-34.5875",
      "longitude": "-58.6725",
      "city": "Buenos Aires",
      "region": "07",
      "country": "Argentina"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/19935971?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": [
      "Kaleo",
      "Pearl Jam",
      "Red Hot Chili Peppers",
      "The Killers",
      "Imagine Dragons",
      "LCD Soundsystem",
      "Chance the Rapper",
      "Wiz Kalifa",
      "Liam Gallagher"
    ]
  }, {
    "id": "15590106",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/19936166?app_id=test&came_from=267",
    "on_sale_datetime": "",
    "datetime": "2018-03-16T10:00:00",
    "venue": {
      "name": "Lollapalooza Chile",
      "latitude": "-33.463039",
      "longitude": "-70.647942",
      "city": "Santiago",
      "region": "Santiago Metropolitan Region",
      "country": "Chile"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/19936166?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": [
      "Kaleo",
      "Pearl Jam",
      "Red Hot Chili Peppers",
      "The Killers",
      "Imagine Dragons",
      "LCD Soundsystem",
      "Chance the Rapper"
    ]
  }, {
    "id": "15590781",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/19936872?app_id=test&came_from=267",
    "on_sale_datetime": "",
    "datetime": "2018-03-17T12:00:00",
    "venue": {
      "name": "Lollapalooza Argentina",
      "latitude": "-34.5875",
      "longitude": "-58.6725",
      "city": "Buenos Aires",
      "region": "07",
      "country": "Argentina"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/19936872?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": [
      "Kaleo",
      "Pearl Jam",
      "Red Hot Chili Peppers",
      "Chance the Rapper",
      "Imagine Dragons",
      "Lana Del Rey",
      "LCD Soundsystem"
    ]
  }, {
    "id": "15590864",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/19936963?app_id=test&came_from=267",
    "on_sale_datetime": "",
    "datetime": "2018-03-17T12:00:00",
    "venue": {
      "name": "Lollapalooza Chile ",
      "latitude": "-33.463039",
      "longitude": "-70.647942",
      "city": "Santiago",
      "region": "Santiago Metropolitan Region",
      "country": "Chile"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/19936963?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": ["Kaleo", "Red Hot Chili Peppers", "Pearl Jam", "Chance the Rapper", "Imagine Dragons"]
  }, {
    "id": "15590788",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/19936878?app_id=test&came_from=267",
    "on_sale_datetime": "",
    "datetime": "2018-03-18T12:00:00",
    "venue": {
      "name": "Lollapalooza Argentina",
      "latitude": "-34.5875",
      "longitude": "-58.6725",
      "city": "Buenos Aires",
      "region": "07",
      "country": "Argentina"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/19936878?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": [
      "Kaleo",
      "Pearl Jam",
      "Red Hot Chili Peppers",
      "Chance the Rapper",
      "Lana Del Rey",
      "LCD Soundsystem"
    ]
  }, {
    "id": "15590873",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/19936974?app_id=test&came_from=267",
    "on_sale_datetime": "",
    "datetime": "2018-03-18T12:00:00",
    "venue": {
      "name": "Lollapalooza Chile",
      "latitude": "-33.463039",
      "longitude": "-70.647942",
      "city": "Santiago",
      "region": "Santiago Metropolitan Region",
      "country": "Chile"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/19936974?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": ["Kaleo", "Red Hot Chili Peppers", "Pearl Jam", "Chance the Rapper", "Imagine Dragons"]
  }, {
    "id": "15589850",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/19936276?app_id=test&came_from=267",
    "on_sale_datetime": "",
    "datetime": "2018-03-23T12:00:00",
    "venue": {
      "name": "Lollapalooza Brasil ",
      "latitude": "-23.562819",
      "longitude": "-46.654704",
      "city": "Sao Paulo",
      "region": "Brazil",
      "country": "Brazil"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/19936276?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": [
      "Kaleo",
      "Pearl Jam",
      "Red Hot Chili Peppers",
      "The Killers",
      "Imagine Dragons",
      "Lana Del Rey",
      "LCD Soundsystem",
      "Liam Gallagher",
      "Chance the Rapper"
    ]
  }, {
    "id": "15590882",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/19936981?app_id=test&came_from=267",
    "on_sale_datetime": "",
    "datetime": "2018-03-24T12:00:00",
    "venue": {
      "name": "Lollapalooza Brasil ",
      "latitude": "-23.562819",
      "longitude": "-46.654704",
      "city": "Sao Paulo",
      "region": "Brazil",
      "country": "Brazil"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/19936981?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": [
      "Kaleo",
      "Red Hot Chili Peppers",
      "Pearl Jam",
      "Chance the Rapper",
      "The Killers",
      "Lana Del Rey",
      "LCD Soundsystem"
    ]
  }, {
    "id": "15590892",
    "artist_id": "21261",
    "url": "http://www.bandsintown.com/e/19936991?app_id=test&came_from=267",
    "on_sale_datetime": "",
    "datetime": "2018-03-25T12:00:00",
    "venue": {
      "name": "Lollapalooza Brasil ",
      "latitude": "-23.562819",
      "longitude": "-46.654704",
      "city": "Sao Paulo",
      "region": "Brazil",
      "country": "Brazil"
    },
    "offers": [
      {
        "type": "Tickets",
        "url": "http://www.bandsintown.com/t/19936991?app_id=test&came_from=267",
        "status": "available"
      }
    ],
    "lineup": ["Kaleo", "Pearl Jam", "Red Hot Chili Peppers", "Imagine Dragons", "LCD Soundsystem"]
  }
];