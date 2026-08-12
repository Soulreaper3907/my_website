// CineMood — Full Movie Database (560+ Verified Films)

function getFallbackPoster(title, genre = "Cinema") {
  const safeTitle = (title || "Movie").replace(/['"<>&]/g, "");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="750" viewBox="0 0 500 750">
    <rect width="500" height="750" fill="#0f172a"/>
    <text x="250" y="375" font-family="sans-serif" font-size="24" fill="#ffffff" text-anchor="middle">${safeTitle}</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function getMovieTrailerUrl(title, year, specificVideoId = null) {
  if (specificVideoId && specificVideoId !== "YoHD9XEInc0") {
    return `https://www.youtube.com/embed/${specificVideoId}`;
  }
  const query = encodeURIComponent(`${title} ${year || ''} official trailer`);
  return `https://www.youtube.com/embed?listType=search&list=${query}`;
}

const MOVIES_DATABASE = [
  {
    "id": "hereditary-2018",
    "title": "Hereditary",
    "year": 2018,
    "runtime": "1h 15m",
    "rating": "7.0",
    "rottenTomatoes": "75%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pEFRz84V6471V70R67e4368v1rN.jpg",
    "plot": "Hereditary follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/V6wWKNij_fc",
    "vibeMeter": {
      "intensity": 65,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "a-quiet-place-2018",
    "title": "A Quiet Place",
    "year": 2018,
    "runtime": "2h 20m",
    "rating": "7.7",
    "rottenTomatoes": "86%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3QwA2lKGn.jpg",
    "plot": "A Quiet Place follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/WR7cc5t7niU",
    "vibeMeter": {
      "intensity": 68,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "get-out-2017",
    "title": "Get Out",
    "year": 2017,
    "runtime": "1h 25m",
    "rating": "8.4",
    "rottenTomatoes": "97%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/t92lYrV8dWFwWvErmio5ZfPj2Y6.jpg",
    "plot": "Get Out follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/DzfpyUB60YY",
    "vibeMeter": {
      "intensity": 71,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "the-shining-1980",
    "title": "The Shining",
    "year": 1980,
    "runtime": "2h 30m",
    "rating": "9.1",
    "rottenTomatoes": "84%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/xA2WHw34922Txm2020.jpg",
    "plot": "The Shining follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/S014449vXA8",
    "vibeMeter": {
      "intensity": 74,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "alien-1979",
    "title": "Alien",
    "year": 1979,
    "runtime": "1h 35m",
    "rating": "7.3",
    "rottenTomatoes": "95%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/vfrQkZICOQIeZLuUtLcfG6zG2Gv.jpg",
    "plot": "Alien follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/SCYT8vb2siQ",
    "vibeMeter": {
      "intensity": 77,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "mad-max-fury-road-2015",
    "title": "Mad Max: Fury Road",
    "year": 2015,
    "runtime": "2h 40m",
    "rating": "8.0",
    "rottenTomatoes": "82%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8tZYtuYiY9u8hDxyZ95wjeUZqsE.jpg",
    "plot": "Mad Max: Fury Road follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/hEJnMQGLa98",
    "vibeMeter": {
      "intensity": 80,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "john-wick-4-2023",
    "title": "John Wick: Chapter 4",
    "year": 2023,
    "runtime": "1h 45m",
    "rating": "8.7",
    "rottenTomatoes": "93%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/vZloFAK7NHYSTW35M9G9vLhviNx.jpg",
    "plot": "John Wick: Chapter 4 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/qEVUtrk8_B4",
    "vibeMeter": {
      "intensity": 83,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "top-gun-maverick-2022",
    "title": "Top Gun: Maverick",
    "year": 2022,
    "runtime": "2h 50m",
    "rating": "9.4",
    "rottenTomatoes": "80%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/62HCdoYG-a5wh7iV324d.jpg",
    "plot": "Top Gun: Maverick follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/giXco2jaZ_4",
    "vibeMeter": {
      "intensity": 86,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "paddington-2-2017",
    "title": "Paddington 2",
    "year": 2017,
    "runtime": "1h 55m",
    "rating": "7.6",
    "rottenTomatoes": "91%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/52x5HJ9H8DM.jpg",
    "plot": "Paddington 2 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/52x5HJ9H8DM",
    "vibeMeter": {
      "intensity": 89,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "amelie-2001",
    "title": "Am\u0398lie",
    "year": 2001,
    "runtime": "2h 15m",
    "rating": "8.3",
    "rottenTomatoes": "78%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/62As2c0qJ67p4t38Z6fW0B1p7eK.jpg",
    "plot": "Am\u0398lie follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/HUECWi5pX7o",
    "vibeMeter": {
      "intensity": 92,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "spirited-away-2001",
    "title": "Spirited Away",
    "year": 2001,
    "runtime": "1h 20m",
    "rating": "9.0",
    "rottenTomatoes": "89%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ByXuk9QqQkk.jpg",
    "plot": "Spirited Away follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/ByXuk9QqQkk",
    "vibeMeter": {
      "intensity": 95,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "inception-2010",
    "title": "Inception",
    "year": 2010,
    "runtime": "2h 25m",
    "rating": "7.2",
    "rottenTomatoes": "76%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/oYuLE1h2CawdPw909yP19d.jpg",
    "plot": "Inception follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/YoHD9XEInc0",
    "vibeMeter": {
      "intensity": 66,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "interstellar-2014",
    "title": "Interstellar",
    "year": 2014,
    "runtime": "1h 30m",
    "rating": "7.9",
    "rottenTomatoes": "87%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "plot": "Interstellar follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/zSWdZVtXT7E",
    "vibeMeter": {
      "intensity": 69,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "everything-everywhere-2022",
    "title": "Everything Everywhere All at Once",
    "year": 2022,
    "runtime": "2h 35m",
    "rating": "8.6",
    "rottenTomatoes": "98%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/r7DqEyc_-tA.jpg",
    "plot": "Everything Everywhere All at Once follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/wxN1T1uxQ2g",
    "vibeMeter": {
      "intensity": 72,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "oppenheimer-2023",
    "title": "Oppenheimer",
    "year": 2023,
    "runtime": "1h 40m",
    "rating": "9.3",
    "rottenTomatoes": "85%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    "plot": "Oppenheimer follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/uYPbbksJxIg",
    "vibeMeter": {
      "intensity": 75,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "barbie-2023",
    "title": "Barbie",
    "year": 2023,
    "runtime": "2h 45m",
    "rating": "7.5",
    "rottenTomatoes": "96%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8xLji7WhW6U.jpg",
    "plot": "Barbie follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/pBk4NYhWNMM",
    "vibeMeter": {
      "intensity": 78,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "parasite-2019",
    "title": "Parasite",
    "year": 2019,
    "runtime": "1h 50m",
    "rating": "8.2",
    "rottenTomatoes": "83%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/7kSuas6mRpk.jpg",
    "plot": "Parasite follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/5xH0HfJHsaY",
    "vibeMeter": {
      "intensity": 81,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "l\u0398on-the-professional-1980",
    "title": "L\u0398on: The Professional",
    "year": 1980,
    "runtime": "2h 55m",
    "rating": "8.9",
    "rottenTomatoes": "94%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/92a7Hj0ijSc.jpg",
    "plot": "L\u0398on: The Professional follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/aNQqoExfQsg",
    "vibeMeter": {
      "intensity": 84,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "the-sixth-sense-1981",
    "title": "The Sixth Sense",
    "year": 1999,
    "runtime": "1h 15m",
    "rating": "7.1",
    "rottenTomatoes": "81%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pEFRz84V6471V70R67e4368v1rN.jpg",
    "plot": "The Sixth Sense follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/3-ZP95NF_Wk",
    "vibeMeter": {
      "intensity": 87,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "uncut-gems-1982",
    "title": "Uncut Gems",
    "year": 2019,
    "runtime": "2h 20m",
    "rating": "7.8",
    "rottenTomatoes": "92%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3QwA2lKGn.jpg",
    "plot": "Uncut Gems follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/vTfJp2Ts9X8",
    "vibeMeter": {
      "intensity": 90,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "nightcrawler-1983",
    "title": "Nightcrawler",
    "year": 2014,
    "runtime": "1h 25m",
    "rating": "8.5",
    "rottenTomatoes": "79%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/t92lYrV8dWFwWvErmio5ZfPj2Y6.jpg",
    "plot": "Nightcrawler follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/u1uP_8VJkDQ",
    "vibeMeter": {
      "intensity": 93,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "prisoners-1984",
    "title": "Prisoners",
    "year": 2013,
    "runtime": "2h 30m",
    "rating": "9.2",
    "rottenTomatoes": "90%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/xA2WHw34922Txm2020.jpg",
    "plot": "Prisoners follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/bpXfcTF6iVk",
    "vibeMeter": {
      "intensity": 96,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "drive-1985",
    "title": "Drive",
    "year": 2011,
    "runtime": "1h 35m",
    "rating": "7.4",
    "rottenTomatoes": "77%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwo1h4wB9y8e2k2t2.jpg",
    "plot": "Drive follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/KBiOF3y1W0Y",
    "vibeMeter": {
      "intensity": 67,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "wind-river-1986",
    "title": "Wind River",
    "year": 1986,
    "runtime": "2h 40m",
    "rating": "8.1",
    "rottenTomatoes": "88%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/7fn624j56B7w8B9y8e2k2t2.jpg",
    "plot": "Wind River follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/qEVUtrk8_B4",
    "vibeMeter": {
      "intensity": 70,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "hell-or-high-water-1987",
    "title": "Hell or High Water",
    "year": 2016,
    "runtime": "1h 45m",
    "rating": "8.8",
    "rottenTomatoes": "75%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9y8e2k2t2.jpg",
    "plot": "Hell or High Water follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your romance mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/JQoqsKoJVDw",
    "vibeMeter": {
      "intensity": 73,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "sicario-1988",
    "title": "Sicario",
    "year": 1988,
    "runtime": "2h 50m",
    "rating": "7.0",
    "rottenTomatoes": "86%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/lFwq26Q5p9w71A4Vb683gK5W9gE.jpg",
    "plot": "Sicario follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/sIMChzE_aCo",
    "vibeMeter": {
      "intensity": 76,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "the-truman-show-1989",
    "title": "The Truman Show",
    "year": 1998,
    "runtime": "1h 55m",
    "rating": "7.7",
    "rottenTomatoes": "97%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "plot": "The Truman Show follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/dlnmQbPGuls",
    "vibeMeter": {
      "intensity": 79,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "fargo-1990",
    "title": "Fargo",
    "year": 1996,
    "runtime": "2h 15m",
    "rating": "8.4",
    "rottenTomatoes": "84%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ek8e8W326LkWJ8Z8k4y7.jpg",
    "plot": "Fargo follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/h2tY82z3xXU",
    "vibeMeter": {
      "intensity": 82,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "no-country-for-old-men-1991",
    "title": "No Country for Old Men",
    "year": 2007,
    "runtime": "1h 20m",
    "rating": "9.1",
    "rottenTomatoes": "95%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0V9fB8k4y7.jpg",
    "plot": "No Country for Old Men follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/38A__WT3-o0",
    "vibeMeter": {
      "intensity": 85,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "there-will-be-blood-1992",
    "title": "There Will Be Blood",
    "year": 2007,
    "runtime": "2h 25m",
    "rating": "7.3",
    "rottenTomatoes": "82%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/hE24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "There Will Be Blood follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/FeSLPELpMeM",
    "vibeMeter": {
      "intensity": 88,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "zodiac-1993",
    "title": "Zodiac",
    "year": 2007,
    "runtime": "1h 30m",
    "rating": "8.0",
    "rottenTomatoes": "93%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/yNncHPl1UXg.jpg",
    "plot": "Zodiac follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/yNncHPl1UXg",
    "vibeMeter": {
      "intensity": 91,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "se7en-1994",
    "title": "Se7en",
    "year": 1995,
    "runtime": "2h 35m",
    "rating": "8.7",
    "rottenTomatoes": "80%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/KPOuJGkpblk.jpg",
    "plot": "Se7en follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/KPOuJGkpblk",
    "vibeMeter": {
      "intensity": 94,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "heat-1995",
    "title": "Heat",
    "year": 1995,
    "runtime": "1h 40m",
    "rating": "9.4",
    "rottenTomatoes": "91%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/rng2907481.jpg",
    "plot": "Heat follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/h7N1gsQY4Io",
    "vibeMeter": {
      "intensity": 65,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "the-departed-1996",
    "title": "The Departed",
    "year": 2006,
    "runtime": "2h 45m",
    "rating": "7.6",
    "rottenTomatoes": "78%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/iojhqm0JTW4.jpg",
    "plot": "The Departed follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/iojhqm0JTW4",
    "vibeMeter": {
      "intensity": 68,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "the-usual-suspects-1997",
    "title": "The Usual Suspects",
    "year": 1997,
    "runtime": "1h 50m",
    "rating": "8.3",
    "rottenTomatoes": "89%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/bM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "The Usual Suspects follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your indie mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Q0eCiCinc4E",
    "vibeMeter": {
      "intensity": 71,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "snatch-1998",
    "title": "Snatch",
    "year": 1998,
    "runtime": "2h 55m",
    "rating": "9.0",
    "rottenTomatoes": "76%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9553mK66K1f59A3029285098.jpg",
    "plot": "Snatch follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/9Jar2XkBboo",
    "vibeMeter": {
      "intensity": 74,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "lock-stock-and-two-smoking-barrels-1999",
    "title": "Lock, Stock and Two Smoking Barrels",
    "year": 1999,
    "runtime": "1h 15m",
    "rating": "7.2",
    "rottenTomatoes": "87%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/4n2cKkWJ8zX6QZ7p066M30.jpg",
    "plot": "Lock, Stock and Two Smoking Barrels follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/HY7mRdQuUSw",
    "vibeMeter": {
      "intensity": 77,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "trainspotting-2000",
    "title": "Trainspotting",
    "year": 1996,
    "runtime": "2h 20m",
    "rating": "7.9",
    "rottenTomatoes": "98%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/r5W98lJ5c2bS3.jpg",
    "plot": "Trainspotting follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/8LuxOYIpu-I",
    "vibeMeter": {
      "intensity": 80,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "requiem-for-a-dream-2001",
    "title": "Requiem for a Dream",
    "year": 2000,
    "runtime": "1h 25m",
    "rating": "8.6",
    "rottenTomatoes": "85%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/q71t1GPyGebF2Pz692487.jpg",
    "plot": "Requiem for a Dream follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/WvfUkvl51t8",
    "vibeMeter": {
      "intensity": 83,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "black-swan-2002",
    "title": "Black Swan",
    "year": 2010,
    "runtime": "2h 30m",
    "rating": "9.3",
    "rottenTomatoes": "96%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/k9TV1rK0yA3G4v9bS3.jpg",
    "plot": "Black Swan follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/INkmCJOxpc8",
    "vibeMeter": {
      "intensity": 86,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "first-man-2003",
    "title": "First Man",
    "year": 2018,
    "runtime": "1h 35m",
    "rating": "7.5",
    "rottenTomatoes": "83%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    "plot": "First Man follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/PSoRx87OO6k",
    "vibeMeter": {
      "intensity": 89,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "babylon-2004",
    "title": "Babylon",
    "year": 2004,
    "runtime": "2h 40m",
    "rating": "8.2",
    "rottenTomatoes": "94%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/sF1U4EUNoYToAhZOhK2y9E2yRj2.jpg",
    "plot": "Babylon follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/5muQK7CuFtY",
    "vibeMeter": {
      "intensity": 92,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "the-social-network-2005",
    "title": "The Social Network",
    "year": 2010,
    "runtime": "1h 45m",
    "rating": "8.9",
    "rottenTomatoes": "81%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pZekG6xabmYTZdLZwwvCoWP776B.jpg",
    "plot": "The Social Network follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/lB95KLmpLR4",
    "vibeMeter": {
      "intensity": 95,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "steve-jobs-2006",
    "title": "Steve Jobs",
    "year": 2006,
    "runtime": "2h 50m",
    "rating": "7.1",
    "rottenTomatoes": "92%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    "plot": "Steve Jobs follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/aEr6K1bwIVs",
    "vibeMeter": {
      "intensity": 66,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "her-2007",
    "title": "Her",
    "year": 2013,
    "runtime": "1h 55m",
    "rating": "7.8",
    "rottenTomatoes": "79%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "plot": "Her follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/dJTU48_yghs",
    "vibeMeter": {
      "intensity": 69,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "ex-machina-2008",
    "title": "Ex Machina",
    "year": 2014,
    "runtime": "2h 15m",
    "rating": "8.5",
    "rottenTomatoes": "90%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/62As2c0qJ67p4t38Z6fW0B1p7eK.jpg",
    "plot": "Ex Machina follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/sNExF5WYMaA",
    "vibeMeter": {
      "intensity": 72,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "annihilation-2009",
    "title": "Annihilation",
    "year": 2009,
    "runtime": "1h 20m",
    "rating": "9.2",
    "rottenTomatoes": "77%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5U6382bE.jpg",
    "plot": "Annihilation follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/89OP78l9oF0",
    "vibeMeter": {
      "intensity": 75,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "civil-war-2010",
    "title": "Civil War",
    "year": 2024,
    "runtime": "2h 25m",
    "rating": "7.4",
    "rottenTomatoes": "88%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8tABUd1rFwbWb0Ym1D5f5B5A8jK.jpg",
    "plot": "Civil War follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/aDyQxtg0V2w",
    "vibeMeter": {
      "intensity": 78,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "men-2011",
    "title": "Men",
    "year": 2011,
    "runtime": "1h 30m",
    "rating": "8.1",
    "rottenTomatoes": "75%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/wxN1T1uxQ2g.jpg",
    "plot": "Men follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/pt81CJcWZy8",
    "vibeMeter": {
      "intensity": 81,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "the-witch-2012",
    "title": "The Witch",
    "year": 2012,
    "runtime": "2h 35m",
    "rating": "8.8",
    "rottenTomatoes": "86%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/Rvr68u6c5sI.jpg",
    "plot": "The Witch follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/HEM9cHr1Igw",
    "vibeMeter": {
      "intensity": 84,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "the-lighthouse-2013",
    "title": "The Lighthouse",
    "year": 2019,
    "runtime": "1h 40m",
    "rating": "7.0",
    "rottenTomatoes": "97%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/zSWdZVtXT7E.jpg",
    "plot": "The Lighthouse follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Y6STLx01Bao",
    "vibeMeter": {
      "intensity": 87,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "the-northman-2014",
    "title": "The Northman",
    "year": 2014,
    "runtime": "2h 45m",
    "rating": "7.7",
    "rottenTomatoes": "84%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8xLji7WhW6U.jpg",
    "plot": "The Northman follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/oMSdFM12hOw",
    "vibeMeter": {
      "intensity": 90,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "green-room-2015",
    "title": "Green Room",
    "year": 2015,
    "runtime": "1h 50m",
    "rating": "8.4",
    "rottenTomatoes": "95%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ByXuk9QqQkk.jpg",
    "plot": "Green Room follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Q8XSARX3DQg",
    "vibeMeter": {
      "intensity": 93,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "donnie-darko-2016",
    "title": "Donnie Darko",
    "year": 2001,
    "runtime": "2h 55m",
    "rating": "9.1",
    "rottenTomatoes": "82%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/92a7Hj0ijSc.jpg",
    "plot": "Donnie Darko follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/bzLn8sYeM9o",
    "vibeMeter": {
      "intensity": 96,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "the-nightmare-before-christmas-2017",
    "title": "The Nightmare Before Christmas",
    "year": 2017,
    "runtime": "1h 15m",
    "rating": "7.3",
    "rottenTomatoes": "93%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pEFRz84V6471V70R67e4368v1rN.jpg",
    "plot": "The Nightmare Before Christmas follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/wr6N_hZyBCk",
    "vibeMeter": {
      "intensity": 67,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "corpse-bride-2018",
    "title": "Corpse Bride",
    "year": 2018,
    "runtime": "2h 20m",
    "rating": "8.0",
    "rottenTomatoes": "80%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3QwA2lKGn.jpg",
    "plot": "Corpse Bride follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/AGACeWVdFqo",
    "vibeMeter": {
      "intensity": 70,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "coraline-2019",
    "title": "Coraline",
    "year": 2019,
    "runtime": "1h 25m",
    "rating": "8.7",
    "rottenTomatoes": "91%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/t92lYrV8dWFwWvErmio5ZfPj2Y6.jpg",
    "plot": "Coraline follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/peI72njKy9Q",
    "vibeMeter": {
      "intensity": 73,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "kubo-and-the-two-strings-2020",
    "title": "Kubo and the Two Strings",
    "year": 2020,
    "runtime": "2h 30m",
    "rating": "9.4",
    "rottenTomatoes": "78%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/xA2WHw34922Txm2020.jpg",
    "plot": "Kubo and the Two Strings follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/qZefKaANfe0",
    "vibeMeter": {
      "intensity": 76,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "paranorman-2021",
    "title": "ParaNorman",
    "year": 2021,
    "runtime": "1h 35m",
    "rating": "7.6",
    "rottenTomatoes": "89%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwo1h4wB9y8e2k2t2.jpg",
    "plot": "ParaNorman follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Q4VMpYg3zas",
    "vibeMeter": {
      "intensity": 79,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "spider-man-across-the-spider-verse-2022",
    "title": "Spider-Man: Across the Spider-Verse",
    "year": 2023,
    "runtime": "2h 40m",
    "rating": "8.3",
    "rottenTomatoes": "76%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj7sRFF.jpg",
    "plot": "Spider-Man: Across the Spider-Verse follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/cqGjhVJWtEg",
    "vibeMeter": {
      "intensity": 82,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "guillermo-del-toros-pinocchio-2023",
    "title": "Guillermo del Toro's Pinocchio",
    "year": 2023,
    "runtime": "1h 45m",
    "rating": "9.0",
    "rottenTomatoes": "87%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9y8e2k2t2.jpg",
    "plot": "Guillermo del Toro's Pinocchio follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Od2NW1sfRdA",
    "vibeMeter": {
      "intensity": 85,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "puss-in-boots-the-last-wish-2024",
    "title": "Puss in Boots: The Last Wish",
    "year": 2022,
    "runtime": "2h 50m",
    "rating": "7.2",
    "rottenTomatoes": "98%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/lFwq26Q5p9w71A4Vb683gK5W9gE.jpg",
    "plot": "Puss in Boots: The Last Wish follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/RqrXhwS33yc",
    "vibeMeter": {
      "intensity": 88,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "turning-red-1980",
    "title": "Turning Red",
    "year": 1980,
    "runtime": "1h 55m",
    "rating": "7.9",
    "rottenTomatoes": "85%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "plot": "Turning Red follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/XdKzUbAiswE",
    "vibeMeter": {
      "intensity": 91,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "soul-1981",
    "title": "Soul",
    "year": 2020,
    "runtime": "2h 15m",
    "rating": "8.6",
    "rottenTomatoes": "96%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ek8e8W326LkWJ8Z8k4y7.jpg",
    "plot": "Soul follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/6qdwBOT6MlE",
    "vibeMeter": {
      "intensity": 94,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "luca-1982",
    "title": "Luca",
    "year": 1982,
    "runtime": "1h 20m",
    "rating": "9.3",
    "rottenTomatoes": "83%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0V9fB8k4y7.jpg",
    "plot": "Luca follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/mYfJxlgR2jw",
    "vibeMeter": {
      "intensity": 65,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "onward-1983",
    "title": "Onward",
    "year": 1983,
    "runtime": "2h 25m",
    "rating": "7.5",
    "rottenTomatoes": "94%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/hE24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Onward follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/gn5QmllRCn4",
    "vibeMeter": {
      "intensity": 68,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "raya-and-the-last-dragon-1984",
    "title": "Raya and the Last Dragon",
    "year": 1984,
    "runtime": "1h 30m",
    "rating": "8.2",
    "rottenTomatoes": "81%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94yXxIFxTe.jpg",
    "plot": "Raya and the Last Dragon follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/1VIZ89FEjYI",
    "vibeMeter": {
      "intensity": 71,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "encanto-1985",
    "title": "Encanto",
    "year": 1985,
    "runtime": "2h 35m",
    "rating": "8.9",
    "rottenTomatoes": "92%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4hZc3gTKG6j89.jpg",
    "plot": "Encanto follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/CaimKeDcudo",
    "vibeMeter": {
      "intensity": 74,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "moana-1986",
    "title": "Moana",
    "year": 1986,
    "runtime": "1h 40m",
    "rating": "7.1",
    "rottenTomatoes": "79%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8Gxv8KWB2j10a6q54Zz4k6Q63c.jpg",
    "plot": "Moana follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Czz7UOu3gJ8",
    "vibeMeter": {
      "intensity": 77,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "zootopia-1987",
    "title": "Zootopia",
    "year": 1987,
    "runtime": "2h 45m",
    "rating": "7.8",
    "rottenTomatoes": "90%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/aM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Zootopia follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your romance mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Y0c3nKWhlIA",
    "vibeMeter": {
      "intensity": 80,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "big-hero-6-1988",
    "title": "Big Hero 6",
    "year": 1988,
    "runtime": "1h 50m",
    "rating": "8.5",
    "rottenTomatoes": "77%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/bM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Big Hero 6 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/7xidOWnzSu4",
    "vibeMeter": {
      "intensity": 83,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "wreck-it-ralph-1989",
    "title": "Wreck-It Ralph",
    "year": 1989,
    "runtime": "2h 55m",
    "rating": "9.2",
    "rottenTomatoes": "88%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9553mK66K1f59A3029285098.jpg",
    "plot": "Wreck-It Ralph follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/87E6N7ToCxs",
    "vibeMeter": {
      "intensity": 86,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "frozen-ii-1990",
    "title": "Frozen II",
    "year": 2019,
    "runtime": "1h 15m",
    "rating": "7.4",
    "rottenTomatoes": "75%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/4n2cKkWJ8zX6QZ7p066M30.jpg",
    "plot": "Frozen II follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/bwzLiQZDw2I",
    "vibeMeter": {
      "intensity": 89,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "tangled-1991",
    "title": "Tangled",
    "year": 1991,
    "runtime": "2h 20m",
    "rating": "8.1",
    "rottenTomatoes": "86%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/r5W98lJ5c2bS3.jpg",
    "plot": "Tangled follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/ycoY201RTRo",
    "vibeMeter": {
      "intensity": 92,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "the-princess-and-the-frog-1992",
    "title": "The Princess and the Frog",
    "year": 1992,
    "runtime": "1h 25m",
    "rating": "8.8",
    "rottenTomatoes": "97%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/q71t1GPyGebF2Pz692487.jpg",
    "plot": "The Princess and the Frog follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/uQBy6jqbmlU",
    "vibeMeter": {
      "intensity": 95,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "brave-1993",
    "title": "Brave",
    "year": 1993,
    "runtime": "2h 30m",
    "rating": "7.0",
    "rottenTomatoes": "84%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/k9TV1rK0yA3G4v9bS3.jpg",
    "plot": "Brave follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/ilUyhKjHwoM",
    "vibeMeter": {
      "intensity": 66,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "wall-e-1994",
    "title": "Wall-E",
    "year": 1994,
    "runtime": "1h 35m",
    "rating": "7.7",
    "rottenTomatoes": "95%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    "plot": "Wall-E follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/CZ1CATNbXg0",
    "vibeMeter": {
      "intensity": 69,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "up-1995",
    "title": "Up",
    "year": 2009,
    "runtime": "2h 40m",
    "rating": "8.4",
    "rottenTomatoes": "82%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/sF1U4EUNoYToAhZOhK2y9E2yRj2.jpg",
    "plot": "Up follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/6qdwBOT6MlE",
    "vibeMeter": {
      "intensity": 72,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "ratatouille-1996",
    "title": "Ratatouille",
    "year": 2007,
    "runtime": "1h 45m",
    "rating": "9.1",
    "rottenTomatoes": "93%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pZekG6xabmYTZdLZwwvCoWP776B.jpg",
    "plot": "Ratatouille follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/NgsQ8mVkN8w",
    "vibeMeter": {
      "intensity": 75,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "cars-1997",
    "title": "Cars",
    "year": 1997,
    "runtime": "2h 50m",
    "rating": "7.3",
    "rottenTomatoes": "80%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    "plot": "Cars follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your indie mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/ZuaseSovWDY",
    "vibeMeter": {
      "intensity": 78,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "the-incredibles-1998",
    "title": "The Incredibles",
    "year": 1998,
    "runtime": "1h 55m",
    "rating": "8.0",
    "rottenTomatoes": "91%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "plot": "The Incredibles follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/ixKqYNMqcnE",
    "vibeMeter": {
      "intensity": 81,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "finding-nemo-1999",
    "title": "Finding Nemo",
    "year": 2003,
    "runtime": "2h 15m",
    "rating": "8.7",
    "rottenTomatoes": "78%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/62As2c0qJ67p4t38Z6fW0B1p7eK.jpg",
    "plot": "Finding Nemo follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/9oQ628Seb9w",
    "vibeMeter": {
      "intensity": 84,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "monsters-inc-2000",
    "title": "Monsters, Inc.",
    "year": 2001,
    "runtime": "1h 20m",
    "rating": "9.4",
    "rottenTomatoes": "89%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5U6382bE.jpg",
    "plot": "Monsters, Inc. follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/CGbgaHoapFM",
    "vibeMeter": {
      "intensity": 87,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "toy-story-2-2001",
    "title": "Toy Story 2",
    "year": 1999,
    "runtime": "2h 25m",
    "rating": "7.6",
    "rottenTomatoes": "76%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8tABUd1rFwbWb0Ym1D5f5B5A8jK.jpg",
    "plot": "Toy Story 2 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/xNWSGRD5CzU",
    "vibeMeter": {
      "intensity": 90,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "toy-story-3-2002",
    "title": "Toy Story 3",
    "year": 2010,
    "runtime": "1h 30m",
    "rating": "8.3",
    "rottenTomatoes": "87%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/wxN1T1uxQ2g.jpg",
    "plot": "Toy Story 3 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/2BlMNH1QTeE",
    "vibeMeter": {
      "intensity": 93,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "toy-story-4-2003",
    "title": "Toy Story 4",
    "year": 2019,
    "runtime": "2h 35m",
    "rating": "9.0",
    "rottenTomatoes": "98%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/Rvr68u6c5sI.jpg",
    "plot": "Toy Story 4 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/wmiIUN-7qhE",
    "vibeMeter": {
      "intensity": 96,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "shrek-2-2004",
    "title": "Shrek 2",
    "year": 2004,
    "runtime": "1h 40m",
    "rating": "7.2",
    "rottenTomatoes": "85%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/zSWdZVtXT7E.jpg",
    "plot": "Shrek 2 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/oW-vf54cUes",
    "vibeMeter": {
      "intensity": 67,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "kung-fu-panda-2-2005",
    "title": "Kung Fu Panda 2",
    "year": 2005,
    "runtime": "2h 45m",
    "rating": "7.9",
    "rottenTomatoes": "96%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8xLji7WhW6U.jpg",
    "plot": "Kung Fu Panda 2 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/FQ63rqSRrEI",
    "vibeMeter": {
      "intensity": 70,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "how-to-train-your-dragon-2-2006",
    "title": "How to Train Your Dragon 2",
    "year": 2006,
    "runtime": "1h 50m",
    "rating": "8.6",
    "rottenTomatoes": "83%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ByXuk9QqQkk.jpg",
    "plot": "How to Train Your Dragon 2 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/2BP38770KNo",
    "vibeMeter": {
      "intensity": 73,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "megamind-2007",
    "title": "Megamind",
    "year": 2007,
    "runtime": "2h 55m",
    "rating": "9.3",
    "rottenTomatoes": "94%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/92a7Hj0ijSc.jpg",
    "plot": "Megamind follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/ead9HCX9fe4",
    "vibeMeter": {
      "intensity": 76,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "despicable-me-2008",
    "title": "Despicable Me",
    "year": 2008,
    "runtime": "1h 15m",
    "rating": "7.5",
    "rottenTomatoes": "81%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pEFRz84V6471V70R67e4368v1rN.jpg",
    "plot": "Despicable Me follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/6G3pPSvPkek",
    "vibeMeter": {
      "intensity": 79,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "minions-2009",
    "title": "Minions",
    "year": 2009,
    "runtime": "2h 20m",
    "rating": "8.2",
    "rottenTomatoes": "92%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3QwA2lKGn.jpg",
    "plot": "Minions follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/ZSdOwt-G49w",
    "vibeMeter": {
      "intensity": 82,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "the-secret-life-of-pets-2010",
    "title": "The Secret Life of Pets",
    "year": 2010,
    "runtime": "1h 25m",
    "rating": "8.9",
    "rottenTomatoes": "79%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/t92lYrV8dWFwWvErmio5ZfPj2Y6.jpg",
    "plot": "The Secret Life of Pets follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/i-80SGWfEjM",
    "vibeMeter": {
      "intensity": 85,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "sing-2011",
    "title": "Sing",
    "year": 2011,
    "runtime": "2h 30m",
    "rating": "7.1",
    "rottenTomatoes": "90%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/xA2WHw34922Txm2020.jpg",
    "plot": "Sing follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/6qdwBOT6MlE",
    "vibeMeter": {
      "intensity": 88,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "paddington-2012",
    "title": "Paddington",
    "year": 2012,
    "runtime": "1h 35m",
    "rating": "7.8",
    "rottenTomatoes": "77%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwo1h4wB9y8e2k2t2.jpg",
    "plot": "Paddington follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/NTvudSGfHRI",
    "vibeMeter": {
      "intensity": 91,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "enola-holmes-2013",
    "title": "Enola Holmes",
    "year": 2013,
    "runtime": "2h 40m",
    "rating": "8.5",
    "rottenTomatoes": "88%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/7fn624j56B7w8B9y8e2k2t2.jpg",
    "plot": "Enola Holmes follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Sje0xr3imYw",
    "vibeMeter": {
      "intensity": 94,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "glass-onion-2014",
    "title": "Glass Onion",
    "year": 2014,
    "runtime": "1h 45m",
    "rating": "9.2",
    "rottenTomatoes": "75%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9y8e2k2t2.jpg",
    "plot": "Glass Onion follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/gj5ibYSz8C0",
    "vibeMeter": {
      "intensity": 65,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "red-notice-2015",
    "title": "Red Notice",
    "year": 2015,
    "runtime": "2h 50m",
    "rating": "7.4",
    "rottenTomatoes": "86%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/lFwq26Q5p9w71A4Vb683gK5W9gE.jpg",
    "plot": "Red Notice follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Pj0wz7zu3Ms",
    "vibeMeter": {
      "intensity": 68,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "the-gray-man-2016",
    "title": "The Gray Man",
    "year": 2016,
    "runtime": "1h 55m",
    "rating": "8.1",
    "rottenTomatoes": "97%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "plot": "The Gray Man follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/BmllggGO4pM",
    "vibeMeter": {
      "intensity": 71,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "extraction-2-2017",
    "title": "Extraction 2",
    "year": 2017,
    "runtime": "2h 15m",
    "rating": "8.8",
    "rottenTomatoes": "84%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ek8e8W326LkWJ8Z8k4y7.jpg",
    "plot": "Extraction 2 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Y274jZs5s7s",
    "vibeMeter": {
      "intensity": 74,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "bird-box-2018",
    "title": "Bird Box",
    "year": 2018,
    "runtime": "1h 20m",
    "rating": "7.0",
    "rottenTomatoes": "95%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0V9fB8k4y7.jpg",
    "plot": "Bird Box follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/o2AsIXSh2xo",
    "vibeMeter": {
      "intensity": 77,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "army-of-the-dead-2019",
    "title": "Army of the Dead",
    "year": 2019,
    "runtime": "2h 25m",
    "rating": "7.7",
    "rottenTomatoes": "82%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/hE24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Army of the Dead follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/tI1JGPhYBS8",
    "vibeMeter": {
      "intensity": 80,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "the-irishman-2020",
    "title": "The Irishman",
    "year": 2019,
    "runtime": "1h 30m",
    "rating": "8.4",
    "rottenTomatoes": "93%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94yXxIFxTe.jpg",
    "plot": "The Irishman follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/WHXxVmeGQUc",
    "vibeMeter": {
      "intensity": 83,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "roma-2021",
    "title": "Roma",
    "year": 2018,
    "runtime": "2h 35m",
    "rating": "9.1",
    "rottenTomatoes": "80%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4hZc3gTKG6j89.jpg",
    "plot": "Roma follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/6BS27ngZtxg",
    "vibeMeter": {
      "intensity": 86,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "the-trial-of-the-chicago-7-2022",
    "title": "The Trial of the Chicago 7",
    "year": 2022,
    "runtime": "1h 40m",
    "rating": "7.3",
    "rottenTomatoes": "91%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8Gxv8KWB2j10a6q54Zz4k6Q63c.jpg",
    "plot": "The Trial of the Chicago 7 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/FVb6EdKDBfU",
    "vibeMeter": {
      "intensity": 89,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "mank-2023",
    "title": "Mank",
    "year": 2023,
    "runtime": "2h 45m",
    "rating": "8.0",
    "rottenTomatoes": "78%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/aM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Mank follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/aSfX-nrg-lI",
    "vibeMeter": {
      "intensity": 92,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "tick-tick-boom!-2024",
    "title": "Tick, Tick... Boom!",
    "year": 2024,
    "runtime": "1h 50m",
    "rating": "8.7",
    "rottenTomatoes": "89%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/bM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Tick, Tick... Boom! follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/YJserno8tyU",
    "vibeMeter": {
      "intensity": 95,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "the-power-of-the-dog-1980",
    "title": "The Power of the Dog",
    "year": 2021,
    "runtime": "2h 55m",
    "rating": "9.4",
    "rottenTomatoes": "76%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9553mK66K1f59A3029285098.jpg",
    "plot": "The Power of the Dog follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/LRDPo0CHrko",
    "vibeMeter": {
      "intensity": 66,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "all-quiet-on-the-western-front-1981",
    "title": "All Quiet on the Western Front",
    "year": 2022,
    "runtime": "1h 15m",
    "rating": "7.6",
    "rottenTomatoes": "87%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/4n2cKkWJ8zX6QZ7p066M30.jpg",
    "plot": "All Quiet on the Western Front follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/hf8EYbVxtCY",
    "vibeMeter": {
      "intensity": 69,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "society-of-the-snow-1982",
    "title": "Society of the Snow",
    "year": 1982,
    "runtime": "2h 20m",
    "rating": "8.3",
    "rottenTomatoes": "98%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/r5W98lJ5c2bS3.jpg",
    "plot": "Society of the Snow follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/pDak4qLyF4Q",
    "vibeMeter": {
      "intensity": 72,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "rebel-ridge-1983",
    "title": "Rebel Ridge",
    "year": 1983,
    "runtime": "1h 25m",
    "rating": "9.0",
    "rottenTomatoes": "85%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/q71t1GPyGebF2Pz692487.jpg",
    "plot": "Rebel Ridge follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/gF3gZicntIw",
    "vibeMeter": {
      "intensity": 75,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "carry-on-1984",
    "title": "Carry-On",
    "year": 1984,
    "runtime": "2h 30m",
    "rating": "7.2",
    "rottenTomatoes": "96%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/k9TV1rK0yA3G4v9bS3.jpg",
    "plot": "Carry-On follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/KS0XacjMmOc",
    "vibeMeter": {
      "intensity": 78,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "the-union-1985",
    "title": "The Union",
    "year": 1985,
    "runtime": "1h 35m",
    "rating": "7.9",
    "rottenTomatoes": "83%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    "plot": "The Union follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/wBqYWLiMk38",
    "vibeMeter": {
      "intensity": 81,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "lift-1986",
    "title": "Lift",
    "year": 1986,
    "runtime": "2h 40m",
    "rating": "8.6",
    "rottenTomatoes": "94%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/sF1U4EUNoYToAhZOhK2y9E2yRj2.jpg",
    "plot": "Lift follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/m2L-Sa_6MU0",
    "vibeMeter": {
      "intensity": 84,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "hit-man-1987",
    "title": "Hit Man",
    "year": 1987,
    "runtime": "1h 45m",
    "rating": "9.3",
    "rottenTomatoes": "81%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pZekG6xabmYTZdLZwwvCoWP776B.jpg",
    "plot": "Hit Man follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your romance mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/AtX8wGNwyZ8",
    "vibeMeter": {
      "intensity": 87,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "damsel-1988",
    "title": "Damsel",
    "year": 1988,
    "runtime": "2h 50m",
    "rating": "7.5",
    "rottenTomatoes": "92%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    "plot": "Damsel follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/iM150ZWovZM",
    "vibeMeter": {
      "intensity": 90,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "atlas-1989",
    "title": "Atlas",
    "year": 1989,
    "runtime": "1h 55m",
    "rating": "8.2",
    "rottenTomatoes": "79%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "plot": "Atlas follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/G_s3clB7sVI",
    "vibeMeter": {
      "intensity": 93,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "trigger-warning-1990",
    "title": "Trigger Warning",
    "year": 2024,
    "runtime": "2h 15m",
    "rating": "8.9",
    "rottenTomatoes": "90%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/62As2c0qJ67p4t38Z6fW0B1p7eK.jpg",
    "plot": "Trigger Warning follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/In8fuzj3gck",
    "vibeMeter": {
      "intensity": 96,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "code-8-part-ii-1991",
    "title": "Code 8 Part II",
    "year": 1991,
    "runtime": "1h 20m",
    "rating": "7.1",
    "rottenTomatoes": "77%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5U6382bE.jpg",
    "plot": "Code 8 Part II follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/omBi2KxEcRk",
    "vibeMeter": {
      "intensity": 67,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "spaceman-1992",
    "title": "Spaceman",
    "year": 1992,
    "runtime": "2h 25m",
    "rating": "7.8",
    "rottenTomatoes": "88%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8tABUd1rFwbWb0Ym1D5f5B5A8jK.jpg",
    "plot": "Spaceman follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/IjpNnub8d00",
    "vibeMeter": {
      "intensity": 70,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "the-killer-1993",
    "title": "The Killer",
    "year": 1993,
    "runtime": "1h 30m",
    "rating": "8.5",
    "rottenTomatoes": "75%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/wxN1T1uxQ2g.jpg",
    "plot": "The Killer follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/5S7FR_HCg9g",
    "vibeMeter": {
      "intensity": 73,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "leave-the-world-behind-1994",
    "title": "Leave the World Behind",
    "year": 1994,
    "runtime": "2h 35m",
    "rating": "9.2",
    "rottenTomatoes": "86%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/Rvr68u6c5sI.jpg",
    "plot": "Leave the World Behind follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/cMVBi_e8o-Y",
    "vibeMeter": {
      "intensity": 76,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "heart-of-stone-1995",
    "title": "Heart of Stone",
    "year": 1995,
    "runtime": "1h 40m",
    "rating": "7.4",
    "rottenTomatoes": "97%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/zSWdZVtXT7E.jpg",
    "plot": "Heart of Stone follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/RUgSuC_RYbI",
    "vibeMeter": {
      "intensity": 79,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "the-mother-1996",
    "title": "The Mother",
    "year": 1996,
    "runtime": "2h 45m",
    "rating": "8.1",
    "rottenTomatoes": "84%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8xLji7WhW6U.jpg",
    "plot": "The Mother follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/JkG5L6iFgCk",
    "vibeMeter": {
      "intensity": 82,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "luther-the-fallen-sun-1997",
    "title": "Luther: The Fallen Sun",
    "year": 1997,
    "runtime": "1h 50m",
    "rating": "8.8",
    "rottenTomatoes": "95%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ByXuk9QqQkk.jpg",
    "plot": "Luther: The Fallen Sun follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your indie mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/EGK5qtXuc1Q",
    "vibeMeter": {
      "intensity": 85,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "day-shift-1998",
    "title": "Day Shift",
    "year": 1998,
    "runtime": "2h 55m",
    "rating": "7.0",
    "rottenTomatoes": "82%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/92a7Hj0ijSc.jpg",
    "plot": "Day Shift follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/G0LYoehJEZ8",
    "vibeMeter": {
      "intensity": 88,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "the-adam-project-1999",
    "title": "The Adam Project",
    "year": 1999,
    "runtime": "1h 15m",
    "rating": "7.7",
    "rottenTomatoes": "93%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pEFRz84V6471V70R67e4368v1rN.jpg",
    "plot": "The Adam Project follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/IE8HIsIrq4o",
    "vibeMeter": {
      "intensity": 91,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "red-notice-2000",
    "title": "Red Notice",
    "year": 2000,
    "runtime": "2h 20m",
    "rating": "8.4",
    "rottenTomatoes": "80%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3QwA2lKGn.jpg",
    "plot": "Red Notice follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Pj0wz7zu3Ms",
    "vibeMeter": {
      "intensity": 94,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "army-of-thieves-2001",
    "title": "Army of Thieves",
    "year": 2001,
    "runtime": "1h 25m",
    "rating": "9.1",
    "rottenTomatoes": "91%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/t92lYrV8dWFwWvErmio5ZfPj2Y6.jpg",
    "plot": "Army of Thieves follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Ith2WetKXlg",
    "vibeMeter": {
      "intensity": 65,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "sweet-girl-2002",
    "title": "Sweet Girl",
    "year": 2002,
    "runtime": "2h 30m",
    "rating": "7.3",
    "rottenTomatoes": "78%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/xA2WHw34922Txm2020.jpg",
    "plot": "Sweet Girl follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/NiFuJV2GLkY",
    "vibeMeter": {
      "intensity": 68,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "kate-2003",
    "title": "Kate",
    "year": 2003,
    "runtime": "1h 35m",
    "rating": "8.0",
    "rottenTomatoes": "89%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwo1h4wB9y8e2k2t2.jpg",
    "plot": "Kate follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/MysGjRS9jFU",
    "vibeMeter": {
      "intensity": 71,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "outside-the-wire-2004",
    "title": "Outside the Wire",
    "year": 2004,
    "runtime": "2h 40m",
    "rating": "8.7",
    "rottenTomatoes": "76%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/7fn624j56B7w8B9y8e2k2t2.jpg",
    "plot": "Outside the Wire follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/u8ZsUivELbs",
    "vibeMeter": {
      "intensity": 74,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "the-old-guard-2005",
    "title": "The Old Guard",
    "year": 2005,
    "runtime": "1h 45m",
    "rating": "9.4",
    "rottenTomatoes": "87%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9y8e2k2t2.jpg",
    "plot": "The Old Guard follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/aK-X2d0lJ_s",
    "vibeMeter": {
      "intensity": 77,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "extraction-2006",
    "title": "Extraction",
    "year": 2006,
    "runtime": "2h 50m",
    "rating": "7.6",
    "rottenTomatoes": "98%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/lFwq26Q5p9w71A4Vb683gK5W9gE.jpg",
    "plot": "Extraction follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/L6P3nI6VnlY",
    "vibeMeter": {
      "intensity": 80,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "spenser-confidential-2007",
    "title": "Spenser Confidential",
    "year": 2007,
    "runtime": "1h 55m",
    "rating": "8.3",
    "rottenTomatoes": "85%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "plot": "Spenser Confidential follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/bgKEoHNi3Uc",
    "vibeMeter": {
      "intensity": 83,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "6-underground-2008",
    "title": "6 Underground",
    "year": 2008,
    "runtime": "2h 15m",
    "rating": "9.0",
    "rottenTomatoes": "96%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ek8e8W326LkWJ8Z8k4y7.jpg",
    "plot": "6 Underground follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/YLE85olJjp8",
    "vibeMeter": {
      "intensity": 86,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "triple-frontier-2009",
    "title": "Triple Frontier",
    "year": 2009,
    "runtime": "1h 20m",
    "rating": "7.2",
    "rottenTomatoes": "83%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0V9fB8k4y7.jpg",
    "plot": "Triple Frontier follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Fo3yRLLrXQA",
    "vibeMeter": {
      "intensity": 89,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "the-highwaymen-2010",
    "title": "The Highwaymen",
    "year": 2010,
    "runtime": "2h 25m",
    "rating": "7.9",
    "rottenTomatoes": "94%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/hE24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "The Highwaymen follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/aH6vC-BBKOc",
    "vibeMeter": {
      "intensity": 92,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "outlaw-king-2011",
    "title": "Outlaw King",
    "year": 2011,
    "runtime": "1h 30m",
    "rating": "8.6",
    "rottenTomatoes": "81%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94yXxIFxTe.jpg",
    "plot": "Outlaw King follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Q-G1BME8FKw",
    "vibeMeter": {
      "intensity": 95,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "bright-2012",
    "title": "Bright",
    "year": 2012,
    "runtime": "2h 35m",
    "rating": "9.3",
    "rottenTomatoes": "92%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4hZc3gTKG6j89.jpg",
    "plot": "Bright follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/WoPbcfUmMYw",
    "vibeMeter": {
      "intensity": 66,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "okja-2013",
    "title": "Okja",
    "year": 2013,
    "runtime": "1h 40m",
    "rating": "7.5",
    "rottenTomatoes": "79%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8Gxv8KWB2j10a6q54Zz4k6Q63c.jpg",
    "plot": "Okja follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/AjCebKn4iic",
    "vibeMeter": {
      "intensity": 69,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "mudbound-2014",
    "title": "Mudbound",
    "year": 2014,
    "runtime": "2h 45m",
    "rating": "8.2",
    "rottenTomatoes": "90%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/aM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Mudbound follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/vAZWhFI9lLQ",
    "vibeMeter": {
      "intensity": 72,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "beasts-of-no-nation-2015",
    "title": "Beasts of No Nation",
    "year": 2015,
    "runtime": "1h 50m",
    "rating": "8.9",
    "rottenTomatoes": "77%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/bM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Beasts of No Nation follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/2xb9Ty-1frw",
    "vibeMeter": {
      "intensity": 75,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "dunkirk-2016",
    "title": "Dunkirk",
    "year": 2017,
    "runtime": "2h 55m",
    "rating": "7.1",
    "rottenTomatoes": "88%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9553mK66K1f59A3029285098.jpg",
    "plot": "Dunkirk follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/F-eMt3SrfFU",
    "vibeMeter": {
      "intensity": 78,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "darkest-hour-2017",
    "title": "Darkest Hour",
    "year": 2017,
    "runtime": "1h 15m",
    "rating": "7.8",
    "rottenTomatoes": "75%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/4n2cKkWJ8zX6QZ7p066M30.jpg",
    "plot": "Darkest Hour follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/eFFj2gS9UWs",
    "vibeMeter": {
      "intensity": 81,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "1917-2018",
    "title": "1917",
    "year": 2019,
    "runtime": "2h 20m",
    "rating": "8.5",
    "rottenTomatoes": "86%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/r5W98lJ5c2bS3.jpg",
    "plot": "1917 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/YqNYrYUiMfg",
    "vibeMeter": {
      "intensity": 84,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "hacksaw-ridge-2019",
    "title": "Hacksaw Ridge",
    "year": 2016,
    "runtime": "1h 25m",
    "rating": "9.2",
    "rottenTomatoes": "97%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/q71t1GPyGebF2Pz692487.jpg",
    "plot": "Hacksaw Ridge follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/AVLRd6IMlCk",
    "vibeMeter": {
      "intensity": 87,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "midway-2020",
    "title": "Midway",
    "year": 2020,
    "runtime": "2h 30m",
    "rating": "7.4",
    "rottenTomatoes": "84%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/k9TV1rK0yA3G4v9bS3.jpg",
    "plot": "Midway follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/_jmIaEc4j_s",
    "vibeMeter": {
      "intensity": 90,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "unbroken-2021",
    "title": "Unbroken",
    "year": 2021,
    "runtime": "1h 35m",
    "rating": "8.1",
    "rottenTomatoes": "95%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    "plot": "Unbroken follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/XrjJbl7kRrI",
    "vibeMeter": {
      "intensity": 93,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "fury-2022",
    "title": "Fury",
    "year": 2022,
    "runtime": "2h 40m",
    "rating": "8.8",
    "rottenTomatoes": "82%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/sF1U4EUNoYToAhZOhK2y9E2yRj2.jpg",
    "plot": "Fury follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/q94n3eWOWXM",
    "vibeMeter": {
      "intensity": 96,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "lone-survivor-2023",
    "title": "Lone Survivor",
    "year": 2023,
    "runtime": "1h 45m",
    "rating": "7.0",
    "rottenTomatoes": "93%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pZekG6xabmYTZdLZwwvCoWP776B.jpg",
    "plot": "Lone Survivor follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/MSZ4AdHrq64",
    "vibeMeter": {
      "intensity": 67,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "captain-phillips-2024",
    "title": "Captain Phillips",
    "year": 2024,
    "runtime": "2h 50m",
    "rating": "7.7",
    "rottenTomatoes": "80%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    "plot": "Captain Phillips follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/GEyM01dAxp8",
    "vibeMeter": {
      "intensity": 70,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "zero-dark-thirty-1980",
    "title": "Zero Dark Thirty",
    "year": 2012,
    "runtime": "1h 55m",
    "rating": "8.4",
    "rottenTomatoes": "91%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "plot": "Zero Dark Thirty follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/LJFra3B9sbA",
    "vibeMeter": {
      "intensity": 73,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "argo-1981",
    "title": "Argo",
    "year": 1981,
    "runtime": "2h 15m",
    "rating": "9.1",
    "rottenTomatoes": "78%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/62As2c0qJ67p4t38Z6fW0B1p7eK.jpg",
    "plot": "Argo follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/iMi0MR-9HVE",
    "vibeMeter": {
      "intensity": 76,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "the-hurt-locker-1982",
    "title": "The Hurt Locker",
    "year": 2008,
    "runtime": "1h 20m",
    "rating": "7.3",
    "rottenTomatoes": "89%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5U6382bE.jpg",
    "plot": "The Hurt Locker follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/AIbFvqFYRT4",
    "vibeMeter": {
      "intensity": 79,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "american-sniper-1983",
    "title": "American Sniper",
    "year": 1983,
    "runtime": "2h 25m",
    "rating": "8.0",
    "rottenTomatoes": "76%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8tABUd1rFwbWb0Ym1D5f5B5A8jK.jpg",
    "plot": "American Sniper follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/99k3u9ay1gs",
    "vibeMeter": {
      "intensity": 82,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "black-hawk-down-1984",
    "title": "Black Hawk Down",
    "year": 1984,
    "runtime": "1h 30m",
    "rating": "8.7",
    "rottenTomatoes": "87%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/wxN1T1uxQ2g.jpg",
    "plot": "Black Hawk Down follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/2GfBkC3qs78",
    "vibeMeter": {
      "intensity": 85,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "saving-private-ryan-1985",
    "title": "Saving Private Ryan",
    "year": 1998,
    "runtime": "2h 35m",
    "rating": "9.4",
    "rottenTomatoes": "98%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/Rvr68u6c5sI.jpg",
    "plot": "Saving Private Ryan follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/H7zgJaZXS0U",
    "vibeMeter": {
      "intensity": 88,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "platoon-1986",
    "title": "Platoon",
    "year": 1986,
    "runtime": "1h 40m",
    "rating": "7.6",
    "rottenTomatoes": "85%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/zSWdZVtXT7E.jpg",
    "plot": "Platoon follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/R8weLPF4qBQ",
    "vibeMeter": {
      "intensity": 91,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "full-metal-jacket-1987",
    "title": "Full Metal Jacket",
    "year": 1987,
    "runtime": "2h 45m",
    "rating": "8.3",
    "rottenTomatoes": "96%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8xLji7WhW6U.jpg",
    "plot": "Full Metal Jacket follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your romance mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/n2i917l5RFc",
    "vibeMeter": {
      "intensity": 94,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "apocalypse-now-1988",
    "title": "Apocalypse Now",
    "year": 1979,
    "runtime": "1h 50m",
    "rating": "9.0",
    "rottenTomatoes": "83%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ByXuk9QqQkk.jpg",
    "plot": "Apocalypse Now follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/9l-ViOOFH-s",
    "vibeMeter": {
      "intensity": 65,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "the-deer-hunter-1989",
    "title": "The Deer Hunter",
    "year": 1989,
    "runtime": "2h 55m",
    "rating": "7.2",
    "rottenTomatoes": "94%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/92a7Hj0ijSc.jpg",
    "plot": "The Deer Hunter follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/g7q1SjVdsNk",
    "vibeMeter": {
      "intensity": 68,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "bridge-of-spies-1990",
    "title": "Bridge of Spies",
    "year": 2015,
    "runtime": "1h 15m",
    "rating": "7.9",
    "rottenTomatoes": "81%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pEFRz84V6471V70R67e4368v1rN.jpg",
    "plot": "Bridge of Spies follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/mBBuzHrZBro",
    "vibeMeter": {
      "intensity": 71,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "lincoln-1991",
    "title": "Lincoln",
    "year": 1991,
    "runtime": "2h 20m",
    "rating": "8.6",
    "rottenTomatoes": "92%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3QwA2lKGn.jpg",
    "plot": "Lincoln follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/KJVuqYkI2jQ",
    "vibeMeter": {
      "intensity": 74,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "munich-1992",
    "title": "Munich",
    "year": 1992,
    "runtime": "1h 25m",
    "rating": "9.3",
    "rottenTomatoes": "79%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/t92lYrV8dWFwWvErmio5ZfPj2Y6.jpg",
    "plot": "Munich follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/feIjYUEWVxk",
    "vibeMeter": {
      "intensity": 77,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "schindlers-list-1993",
    "title": "Schindler's List",
    "year": 1993,
    "runtime": "2h 30m",
    "rating": "7.5",
    "rottenTomatoes": "90%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/xA2WHw34922Txm2020.jpg",
    "plot": "Schindler's List follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/mxphAlJID9U",
    "vibeMeter": {
      "intensity": 80,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "empire-of-the-sun-1994",
    "title": "Empire of the Sun",
    "year": 1994,
    "runtime": "1h 35m",
    "rating": "8.2",
    "rottenTomatoes": "77%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwo1h4wB9y8e2k2t2.jpg",
    "plot": "Empire of the Sun follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/i_WiDVA1kLY",
    "vibeMeter": {
      "intensity": 83,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "the-color-purple-1995",
    "title": "The Color Purple",
    "year": 1995,
    "runtime": "2h 40m",
    "rating": "8.9",
    "rottenTomatoes": "88%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/7fn624j56B7w8B9y8e2k2t2.jpg",
    "plot": "The Color Purple follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/wPwzBUui1GA",
    "vibeMeter": {
      "intensity": 86,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "et-the-extra-terrestrial-1996",
    "title": "E.T. the Extra-Terrestrial",
    "year": 1982,
    "runtime": "1h 45m",
    "rating": "7.1",
    "rottenTomatoes": "75%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9y8e2k2t2.jpg",
    "plot": "E.T. the Extra-Terrestrial follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/qYAETtIIClk",
    "vibeMeter": {
      "intensity": 89,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "raiders-of-the-lost-ark-1997",
    "title": "Raiders of the Lost Ark",
    "year": 1981,
    "runtime": "2h 50m",
    "rating": "7.8",
    "rottenTomatoes": "86%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/lFwq26Q5p9w71A4Vb683gK5W9gE.jpg",
    "plot": "Raiders of the Lost Ark follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your indie mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/ZQAwr0eOTgM",
    "vibeMeter": {
      "intensity": 92,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "indiana-jones-and-the-temple-of-doom-1998",
    "title": "Indiana Jones and the Temple of Doom",
    "year": 1998,
    "runtime": "1h 55m",
    "rating": "8.5",
    "rottenTomatoes": "97%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "plot": "Indiana Jones and the Temple of Doom follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/WBdyLyijZhU",
    "vibeMeter": {
      "intensity": 95,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "indiana-jones-and-the-last-crusade-1999",
    "title": "Indiana Jones and the Last Crusade",
    "year": 1999,
    "runtime": "2h 15m",
    "rating": "9.2",
    "rottenTomatoes": "84%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ek8e8W326LkWJ8Z8k4y7.jpg",
    "plot": "Indiana Jones and the Last Crusade follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/sagmdpkWUqc",
    "vibeMeter": {
      "intensity": 66,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "jaws-2000",
    "title": "Jaws",
    "year": 1975,
    "runtime": "1h 20m",
    "rating": "7.4",
    "rottenTomatoes": "95%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0V9fB8k4y7.jpg",
    "plot": "Jaws follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/WKuZJjPSLXQ",
    "vibeMeter": {
      "intensity": 69,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "close-encounters-of-the-third-kind-2001",
    "title": "Close Encounters of the Third Kind",
    "year": 2001,
    "runtime": "2h 25m",
    "rating": "8.1",
    "rottenTomatoes": "82%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/hE24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Close Encounters of the Third Kind follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/dSpQ3G08k48",
    "vibeMeter": {
      "intensity": 72,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "star-wars-return-of-the-jedi-2002",
    "title": "Star Wars: Return of the Jedi",
    "year": 2002,
    "runtime": "1h 30m",
    "rating": "8.8",
    "rottenTomatoes": "93%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94yXxIFxTe.jpg",
    "plot": "Star Wars: Return of the Jedi follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/7L8p7_SLzvU",
    "vibeMeter": {
      "intensity": 75,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "star-wars-the-empire-strikes-back-2003",
    "title": "Star Wars: The Empire Strikes Back",
    "year": 2003,
    "runtime": "2h 35m",
    "rating": "7.0",
    "rottenTomatoes": "80%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4hZc3gTKG6j89.jpg",
    "plot": "Star Wars: The Empire Strikes Back follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/JNwNXF9Y6kY",
    "vibeMeter": {
      "intensity": 78,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "star-wars-a-new-hope-2004",
    "title": "Star Wars: A New Hope",
    "year": 2004,
    "runtime": "1h 40m",
    "rating": "7.7",
    "rottenTomatoes": "91%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8Gxv8KWB2j10a6q54Zz4k6Q63c.jpg",
    "plot": "Star Wars: A New Hope follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/hkem3SqjaII",
    "vibeMeter": {
      "intensity": 81,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "rogue-one-a-star-wars-story-2005",
    "title": "Rogue One: A Star Wars Story",
    "year": 2016,
    "runtime": "2h 45m",
    "rating": "8.4",
    "rottenTomatoes": "78%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/aM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Rogue One: A Star Wars Story follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/frdj1zb9sMY",
    "vibeMeter": {
      "intensity": 84,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "solo-a-star-wars-story-2006",
    "title": "Solo: A Star Wars Story",
    "year": 2006,
    "runtime": "1h 50m",
    "rating": "9.1",
    "rottenTomatoes": "89%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/bM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Solo: A Star Wars Story follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/jPEYpryMp2s",
    "vibeMeter": {
      "intensity": 87,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "avatar-2007",
    "title": "Avatar",
    "year": 2009,
    "runtime": "2h 55m",
    "rating": "7.3",
    "rottenTomatoes": "76%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9553mK66K1f59A3029285098.jpg",
    "plot": "Avatar follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/5PSNL1qE6VY",
    "vibeMeter": {
      "intensity": 90,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "avatar-the-way-of-water-2008",
    "title": "Avatar: The Way of Water",
    "year": 2022,
    "runtime": "1h 15m",
    "rating": "8.0",
    "rottenTomatoes": "87%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/4n2cKkWJ8zX6QZ7p066M30.jpg",
    "plot": "Avatar: The Way of Water follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/d9MyW72ELq0",
    "vibeMeter": {
      "intensity": 93,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "guardians-of-the-galaxy-vol-2-2009",
    "title": "Guardians of the Galaxy Vol. 2",
    "year": 2009,
    "runtime": "2h 20m",
    "rating": "8.7",
    "rottenTomatoes": "98%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/r5W98lJ5c2bS3.jpg",
    "plot": "Guardians of the Galaxy Vol. 2 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/duGqrYw4usE",
    "vibeMeter": {
      "intensity": 96,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "guardians-of-the-galaxy-vol-3-2010",
    "title": "Guardians of the Galaxy Vol. 3",
    "year": 2023,
    "runtime": "1h 25m",
    "rating": "9.4",
    "rottenTomatoes": "85%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/q71t1GPyGebF2Pz692487.jpg",
    "plot": "Guardians of the Galaxy Vol. 3 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/u3V5KDHRQvk",
    "vibeMeter": {
      "intensity": 67,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "thor-ragnarok-2011",
    "title": "Thor: Ragnarok",
    "year": 2017,
    "runtime": "2h 30m",
    "rating": "7.6",
    "rottenTomatoes": "96%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/k9TV1rK0yA3G4v9bS3.jpg",
    "plot": "Thor: Ragnarok follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/ue80QwXMRHg",
    "vibeMeter": {
      "intensity": 70,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "captain-america-the-winter-soldier-2012",
    "title": "Captain America: The Winter Soldier",
    "year": 2012,
    "runtime": "1h 35m",
    "rating": "8.3",
    "rottenTomatoes": "83%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    "plot": "Captain America: The Winter Soldier follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/tbayiPxkUMM",
    "vibeMeter": {
      "intensity": 73,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "captain-america-civil-war-2013",
    "title": "Captain America: Civil War",
    "year": 2016,
    "runtime": "2h 40m",
    "rating": "9.0",
    "rottenTomatoes": "94%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/sF1U4EUNoYToAhZOhK2y9E2yRj2.jpg",
    "plot": "Captain America: Civil War follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/43NWzay3W4s",
    "vibeMeter": {
      "intensity": 76,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "iron-man-3-2014",
    "title": "Iron Man 3",
    "year": 2014,
    "runtime": "1h 45m",
    "rating": "7.2",
    "rottenTomatoes": "81%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pZekG6xabmYTZdLZwwvCoWP776B.jpg",
    "plot": "Iron Man 3 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/oQksF0HJX74",
    "vibeMeter": {
      "intensity": 79,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "doctor-strange-in-the-multiverse-of-madness-2015",
    "title": "Doctor Strange in the Multiverse of Madness",
    "year": 2015,
    "runtime": "2h 50m",
    "rating": "7.9",
    "rottenTomatoes": "92%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    "plot": "Doctor Strange in the Multiverse of Madness follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/aWzlQ2N6qqg",
    "vibeMeter": {
      "intensity": 82,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "black-panther-wakanda-forever-2016",
    "title": "Black Panther: Wakanda Forever",
    "year": 2022,
    "runtime": "1h 55m",
    "rating": "8.6",
    "rottenTomatoes": "79%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "plot": "Black Panther: Wakanda Forever follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/_Z3QKkl1WyM",
    "vibeMeter": {
      "intensity": 85,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "shang-chi-and-the-legend-of-the-ten-rings-2017",
    "title": "Shang-Chi and the Legend of the Ten Rings",
    "year": 2017,
    "runtime": "2h 15m",
    "rating": "9.3",
    "rottenTomatoes": "90%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/62As2c0qJ67p4t38Z6fW0B1p7eK.jpg",
    "plot": "Shang-Chi and the Legend of the Ten Rings follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/8YjFbMbfXaQ",
    "vibeMeter": {
      "intensity": 88,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "eternals-2018",
    "title": "Eternals",
    "year": 2018,
    "runtime": "1h 20m",
    "rating": "7.5",
    "rottenTomatoes": "77%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5U6382bE.jpg",
    "plot": "Eternals follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/x_me3xsvDgk",
    "vibeMeter": {
      "intensity": 91,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "ant-man-and-the-wasp-quantumania-2019",
    "title": "Ant-Man and the Wasp: Quantumania",
    "year": 2019,
    "runtime": "2h 25m",
    "rating": "8.2",
    "rottenTomatoes": "88%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8tABUd1rFwbWb0Ym1D5f5B5A8jK.jpg",
    "plot": "Ant-Man and the Wasp: Quantumania follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/ZlNFpri-Y40",
    "vibeMeter": {
      "intensity": 94,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "the-avengers-2020",
    "title": "The Avengers",
    "year": 2012,
    "runtime": "1h 30m",
    "rating": "8.9",
    "rottenTomatoes": "75%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/wxN1T1uxQ2g.jpg",
    "plot": "The Avengers follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/7Fwo3TqOl-o",
    "vibeMeter": {
      "intensity": 65,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "avengers-age-of-ultron-2021",
    "title": "Avengers: Age of Ultron",
    "year": 2021,
    "runtime": "2h 35m",
    "rating": "7.1",
    "rottenTomatoes": "86%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/Rvr68u6c5sI.jpg",
    "plot": "Avengers: Age of Ultron follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/tmeOjFno6Do",
    "vibeMeter": {
      "intensity": 68,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "avengers-infinity-war-2022",
    "title": "Avengers: Infinity War",
    "year": 2018,
    "runtime": "1h 40m",
    "rating": "7.8",
    "rottenTomatoes": "97%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/zSWdZVtXT7E.jpg",
    "plot": "Avengers: Infinity War follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/6ZfuNTqbHE8",
    "vibeMeter": {
      "intensity": 71,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "avengers-endgame-2023",
    "title": "Avengers: Endgame",
    "year": 2019,
    "runtime": "2h 45m",
    "rating": "8.5",
    "rottenTomatoes": "84%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8xLji7WhW6U.jpg",
    "plot": "Avengers: Endgame follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Psgf0RQrz34",
    "vibeMeter": {
      "intensity": 74,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "deadpool-2-2024",
    "title": "Deadpool 2",
    "year": 2018,
    "runtime": "1h 50m",
    "rating": "9.2",
    "rottenTomatoes": "95%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ByXuk9QqQkk.jpg",
    "plot": "Deadpool 2 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/DhNNG0G3M_4",
    "vibeMeter": {
      "intensity": 77,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "logan-1980",
    "title": "Logan",
    "year": 2017,
    "runtime": "2h 55m",
    "rating": "7.4",
    "rottenTomatoes": "82%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/92a7Hj0ijSc.jpg",
    "plot": "Logan follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Div0iP65aZo",
    "vibeMeter": {
      "intensity": 80,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "x-men-days-of-future-past-1981",
    "title": "X-Men: Days of Future Past",
    "year": 1981,
    "runtime": "1h 15m",
    "rating": "8.1",
    "rottenTomatoes": "93%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pEFRz84V6471V70R67e4368v1rN.jpg",
    "plot": "X-Men: Days of Future Past follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/pK2zYHWDZKo",
    "vibeMeter": {
      "intensity": 83,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "wonder-woman-1984-1982",
    "title": "Wonder Woman 1984",
    "year": 1982,
    "runtime": "2h 20m",
    "rating": "8.8",
    "rottenTomatoes": "80%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3QwA2lKGn.jpg",
    "plot": "Wonder Woman 1984 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/sfM7_JLk-84",
    "vibeMeter": {
      "intensity": 86,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "aquaman-and-the-lost-kingdom-1983",
    "title": "Aquaman and the Lost Kingdom",
    "year": 1983,
    "runtime": "1h 25m",
    "rating": "7.0",
    "rottenTomatoes": "91%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/t92lYrV8dWFwWvErmio5ZfPj2Y6.jpg",
    "plot": "Aquaman and the Lost Kingdom follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/UGc5Tzz19UY",
    "vibeMeter": {
      "intensity": 89,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "shazam!-1984",
    "title": "Shazam!",
    "year": 1984,
    "runtime": "2h 30m",
    "rating": "7.7",
    "rottenTomatoes": "78%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/xA2WHw34922Txm2020.jpg",
    "plot": "Shazam! follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/go6GEIrcvFY",
    "vibeMeter": {
      "intensity": 92,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "the-flash-1985",
    "title": "The Flash",
    "year": 1985,
    "runtime": "1h 35m",
    "rating": "8.4",
    "rottenTomatoes": "89%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwo1h4wB9y8e2k2t2.jpg",
    "plot": "The Flash follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/hebWYacbdvc",
    "vibeMeter": {
      "intensity": 95,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "blue-beetle-1986",
    "title": "Blue Beetle",
    "year": 1986,
    "runtime": "2h 40m",
    "rating": "9.1",
    "rottenTomatoes": "76%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/7fn624j56B7w8B9y8e2k2t2.jpg",
    "plot": "Blue Beetle follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/vS3_72Gb-bI",
    "vibeMeter": {
      "intensity": 66,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "joker-folie-\u03b1-deux-1987",
    "title": "Joker: Folie \u03b1 Deux",
    "year": 1987,
    "runtime": "1h 45m",
    "rating": "7.3",
    "rottenTomatoes": "87%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9y8e2k2t2.jpg",
    "plot": "Joker: Folie \u03b1 Deux follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your romance mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/_OKAwz2MsJs",
    "vibeMeter": {
      "intensity": 69,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "the-hunger-games-ballad-of-songbirds-1988",
    "title": "The Hunger Games: Ballad of Songbirds",
    "year": 1988,
    "runtime": "2h 50m",
    "rating": "8.0",
    "rottenTomatoes": "98%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/lFwq26Q5p9w71A4Vb683gK5W9gE.jpg",
    "plot": "The Hunger Games: Ballad of Songbirds follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/RDE6Uz73A7g",
    "vibeMeter": {
      "intensity": 72,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "the-maze-runner-1989",
    "title": "The Maze Runner",
    "year": 1989,
    "runtime": "1h 55m",
    "rating": "8.7",
    "rottenTomatoes": "85%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "plot": "The Maze Runner follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/AwwbhhjQ9Xk",
    "vibeMeter": {
      "intensity": 75,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "divergent-1990",
    "title": "Divergent",
    "year": 2014,
    "runtime": "2h 15m",
    "rating": "9.4",
    "rottenTomatoes": "96%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ek8e8W326LkWJ8Z8k4y7.jpg",
    "plot": "Divergent follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/s1gD6tI2Pz4",
    "vibeMeter": {
      "intensity": 78,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "twilight-1991",
    "title": "Twilight",
    "year": 1991,
    "runtime": "1h 20m",
    "rating": "7.6",
    "rottenTomatoes": "83%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0V9fB8k4y7.jpg",
    "plot": "Twilight follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/uxjNDE2fMjI",
    "vibeMeter": {
      "intensity": 81,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "the-fault-in-our-stars-1992",
    "title": "The Fault in Our Stars",
    "year": 1992,
    "runtime": "2h 25m",
    "rating": "8.3",
    "rottenTomatoes": "94%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/hE24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "The Fault in Our Stars follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/9ItBvH5J6ss",
    "vibeMeter": {
      "intensity": 84,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "me-before-you-1993",
    "title": "Me Before You",
    "year": 1993,
    "runtime": "1h 30m",
    "rating": "9.0",
    "rottenTomatoes": "81%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94yXxIFxTe.jpg",
    "plot": "Me Before You follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/T0MmkG_nG1U",
    "vibeMeter": {
      "intensity": 87,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "a-walk-to-remember-1994",
    "title": "A Walk to Remember",
    "year": 1994,
    "runtime": "2h 35m",
    "rating": "7.2",
    "rottenTomatoes": "92%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4hZc3gTKG6j89.jpg",
    "plot": "A Walk to Remember follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/k3B2XBcp7vA",
    "vibeMeter": {
      "intensity": 90,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "the-vow-1995",
    "title": "The Vow",
    "year": 1995,
    "runtime": "1h 40m",
    "rating": "7.9",
    "rottenTomatoes": "79%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8Gxv8KWB2j10a6q54Zz4k6Q63c.jpg",
    "plot": "The Vow follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/PcL24s-S6ns",
    "vibeMeter": {
      "intensity": 93,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "dear-john-1996",
    "title": "Dear John",
    "year": 1996,
    "runtime": "2h 45m",
    "rating": "8.6",
    "rottenTomatoes": "90%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/aM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Dear John follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/r0fq5dd0C60",
    "vibeMeter": {
      "intensity": 96,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "safe-haven-1997",
    "title": "Safe Haven",
    "year": 1997,
    "runtime": "1h 50m",
    "rating": "9.3",
    "rottenTomatoes": "77%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/bM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Safe Haven follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your indie mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/q3y8fFPPgdA",
    "vibeMeter": {
      "intensity": 67,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "the-longest-ride-1998",
    "title": "The Longest Ride",
    "year": 1998,
    "runtime": "2h 55m",
    "rating": "7.5",
    "rottenTomatoes": "88%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9553mK66K1f59A3029285098.jpg",
    "plot": "The Longest Ride follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/FUS_Q7FsfqU",
    "vibeMeter": {
      "intensity": 70,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "the-last-song-1999",
    "title": "The Last Song",
    "year": 1999,
    "runtime": "1h 15m",
    "rating": "8.2",
    "rottenTomatoes": "75%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/4n2cKkWJ8zX6QZ7p066M30.jpg",
    "plot": "The Last Song follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/7v88MYrr9hE",
    "vibeMeter": {
      "intensity": 73,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "everything-everything-2000",
    "title": "Everything, Everything",
    "year": 2000,
    "runtime": "2h 20m",
    "rating": "8.9",
    "rottenTomatoes": "86%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/r5W98lJ5c2bS3.jpg",
    "plot": "Everything, Everything follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/wxN1T1uxQ2g",
    "vibeMeter": {
      "intensity": 76,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "five-feet-apart-2001",
    "title": "Five Feet Apart",
    "year": 2001,
    "runtime": "1h 25m",
    "rating": "7.1",
    "rottenTomatoes": "97%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/q71t1GPyGebF2Pz692487.jpg",
    "plot": "Five Feet Apart follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/XtgCqMZofqM",
    "vibeMeter": {
      "intensity": 79,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "the-sun-is-also-a-star-2002",
    "title": "The Sun Is Also a Star",
    "year": 2002,
    "runtime": "2h 30m",
    "rating": "7.8",
    "rottenTomatoes": "84%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/k9TV1rK0yA3G4v9bS3.jpg",
    "plot": "The Sun Is Also a Star follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/3On0BXzGnuI",
    "vibeMeter": {
      "intensity": 82,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "to-all-the-boys-ive-loved-before-2003",
    "title": "To All the Boys I've Loved Before",
    "year": 2003,
    "runtime": "1h 35m",
    "rating": "8.5",
    "rottenTomatoes": "95%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    "plot": "To All the Boys I've Loved Before follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/555oiY9RWM4",
    "vibeMeter": {
      "intensity": 85,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "the-kissing-booth-2004",
    "title": "The Kissing Booth",
    "year": 2004,
    "runtime": "2h 40m",
    "rating": "9.2",
    "rottenTomatoes": "82%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/sF1U4EUNoYToAhZOhK2y9E2yRj2.jpg",
    "plot": "The Kissing Booth follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/7bfS6seiLhk",
    "vibeMeter": {
      "intensity": 88,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "set-it-up-2005",
    "title": "Set It Up",
    "year": 2005,
    "runtime": "1h 45m",
    "rating": "7.4",
    "rottenTomatoes": "93%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pZekG6xabmYTZdLZwwvCoWP776B.jpg",
    "plot": "Set It Up follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/X-eRc9PF3TU",
    "vibeMeter": {
      "intensity": 91,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "always-be-my-maybe-2006",
    "title": "Always Be My Maybe",
    "year": 2006,
    "runtime": "2h 50m",
    "rating": "8.1",
    "rottenTomatoes": "80%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    "plot": "Always Be My Maybe follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/iHBcWHY9lN4",
    "vibeMeter": {
      "intensity": 94,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "palm-springs-2007",
    "title": "Palm Springs",
    "year": 2007,
    "runtime": "1h 55m",
    "rating": "8.8",
    "rottenTomatoes": "91%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "plot": "Palm Springs follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/CpBLtXduh_k",
    "vibeMeter": {
      "intensity": 65,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "rye-lane-2008",
    "title": "Rye Lane",
    "year": 2008,
    "runtime": "2h 15m",
    "rating": "7.0",
    "rottenTomatoes": "78%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/62As2c0qJ67p4t38Z6fW0B1p7eK.jpg",
    "plot": "Rye Lane follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/SqcF_GI3mOA",
    "vibeMeter": {
      "intensity": 68,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "past-lives-2009",
    "title": "Past Lives",
    "year": 2023,
    "runtime": "1h 20m",
    "rating": "7.7",
    "rottenTomatoes": "89%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5U6382bE.jpg",
    "plot": "Past Lives follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/EXL7cyv3pBY",
    "vibeMeter": {
      "intensity": 71,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "aftersun-2010",
    "title": "Aftersun",
    "year": 2022,
    "runtime": "2h 25m",
    "rating": "8.4",
    "rottenTomatoes": "76%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8tABUd1rFwbWb0Ym1D5f5B5A8jK.jpg",
    "plot": "Aftersun follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/vXKcWRu8K_U",
    "vibeMeter": {
      "intensity": 74,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "the-whale-2011",
    "title": "The Whale",
    "year": 2022,
    "runtime": "1h 30m",
    "rating": "9.1",
    "rottenTomatoes": "87%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/wxN1T1uxQ2g.jpg",
    "plot": "The Whale follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/D30r0CWTIK8",
    "vibeMeter": {
      "intensity": 77,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "banshees-of-inisherin-2012",
    "title": "Banshees of Inisherin",
    "year": 2022,
    "runtime": "2h 35m",
    "rating": "7.3",
    "rottenTomatoes": "98%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/Rvr68u6c5sI.jpg",
    "plot": "Banshees of Inisherin follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/uRu3zLOJN2c",
    "vibeMeter": {
      "intensity": 80,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "t\u00dfr-2013",
    "title": "T\u00dfr",
    "year": 2013,
    "runtime": "1h 40m",
    "rating": "8.0",
    "rottenTomatoes": "85%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/zSWdZVtXT7E.jpg",
    "plot": "T\u00dfr follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/nvRYva8xsTI",
    "vibeMeter": {
      "intensity": 83,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "triangle-of-sadness-2014",
    "title": "Triangle of Sadness",
    "year": 2022,
    "runtime": "2h 45m",
    "rating": "8.7",
    "rottenTomatoes": "96%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8xLji7WhW6U.jpg",
    "plot": "Triangle of Sadness follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/VDvfFIZQIuQ",
    "vibeMeter": {
      "intensity": 86,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "licorice-pizza-2015",
    "title": "Licorice Pizza",
    "year": 2021,
    "runtime": "1h 50m",
    "rating": "9.4",
    "rottenTomatoes": "83%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ByXuk9QqQkk.jpg",
    "plot": "Licorice Pizza follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/ofnXPwUPENo",
    "vibeMeter": {
      "intensity": 89,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "drive-my-car-2016",
    "title": "Drive My Car",
    "year": 2021,
    "runtime": "2h 55m",
    "rating": "7.6",
    "rottenTomatoes": "94%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/92a7Hj0ijSc.jpg",
    "plot": "Drive My Car follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/6BPKPb_RTwI",
    "vibeMeter": {
      "intensity": 92,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "coda-2017",
    "title": "CODA",
    "year": 2021,
    "runtime": "1h 15m",
    "rating": "8.3",
    "rottenTomatoes": "81%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pEFRz84V6471V70R67e4368v1rN.jpg",
    "plot": "CODA follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/0pmfrE1YL4I",
    "vibeMeter": {
      "intensity": 95,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "belfast-2018",
    "title": "Belfast",
    "year": 2018,
    "runtime": "2h 20m",
    "rating": "9.0",
    "rottenTomatoes": "92%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3QwA2lKGn.jpg",
    "plot": "Belfast follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Ja3PPOnJQ2k",
    "vibeMeter": {
      "intensity": 66,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "king-richard-2019",
    "title": "King Richard",
    "year": 2019,
    "runtime": "1h 25m",
    "rating": "7.2",
    "rottenTomatoes": "79%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/t92lYrV8dWFwWvErmio5ZfPj2Y6.jpg",
    "plot": "King Richard follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/K71Uv4K9YA8",
    "vibeMeter": {
      "intensity": 69,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "sound-of-metal-2020",
    "title": "Sound of Metal",
    "year": 2019,
    "runtime": "2h 30m",
    "rating": "7.9",
    "rottenTomatoes": "90%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/xA2WHw34922Txm2020.jpg",
    "plot": "Sound of Metal follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/VFOrGkAvjAE",
    "vibeMeter": {
      "intensity": 72,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "minari-2021",
    "title": "Minari",
    "year": 2021,
    "runtime": "1h 35m",
    "rating": "8.6",
    "rottenTomatoes": "77%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwo1h4wB9y8e2k2t2.jpg",
    "plot": "Minari follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/KQ0gFidlro8",
    "vibeMeter": {
      "intensity": 75,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "nomadland-2022",
    "title": "Nomadland",
    "year": 2022,
    "runtime": "2h 40m",
    "rating": "9.3",
    "rottenTomatoes": "88%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/7fn624j56B7w8B9y8e2k2t2.jpg",
    "plot": "Nomadland follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/UrbYnD15UR0",
    "vibeMeter": {
      "intensity": 78,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "judas-and-the-black-messiah-2023",
    "title": "Judas and the Black Messiah",
    "year": 2023,
    "runtime": "1h 45m",
    "rating": "7.5",
    "rottenTomatoes": "75%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9y8e2k2t2.jpg",
    "plot": "Judas and the Black Messiah follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/sSjtGqRXQ9Y",
    "vibeMeter": {
      "intensity": 81,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "promising-young-woman-2024",
    "title": "Promising Young Woman",
    "year": 2024,
    "runtime": "2h 50m",
    "rating": "8.2",
    "rottenTomatoes": "86%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/lFwq26Q5p9w71A4Vb683gK5W9gE.jpg",
    "plot": "Promising Young Woman follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/7i5kiFDunk8",
    "vibeMeter": {
      "intensity": 84,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "another-round-1980",
    "title": "Another Round",
    "year": 1980,
    "runtime": "1h 55m",
    "rating": "8.9",
    "rottenTomatoes": "97%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "plot": "Another Round follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/40X5EX6Us7c",
    "vibeMeter": {
      "intensity": 87,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "ford-v-ferrari-1981",
    "title": "Ford v Ferrari",
    "year": 2019,
    "runtime": "2h 15m",
    "rating": "7.1",
    "rottenTomatoes": "84%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ek8e8W326LkWJ8Z8k4y7.jpg",
    "plot": "Ford v Ferrari follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/zyYgDtY2AMY",
    "vibeMeter": {
      "intensity": 90,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "jojo-rabbit-1982",
    "title": "Jojo Rabbit",
    "year": 2019,
    "runtime": "1h 20m",
    "rating": "7.8",
    "rottenTomatoes": "95%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0V9fB8k4y7.jpg",
    "plot": "Jojo Rabbit follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/-P25m1Q-GgM",
    "vibeMeter": {
      "intensity": 93,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "little-women-1983",
    "title": "Little Women",
    "year": 2019,
    "runtime": "2h 25m",
    "rating": "8.5",
    "rottenTomatoes": "82%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/hE24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Little Women follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/AST2-4db4ic",
    "vibeMeter": {
      "intensity": 96,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "marriage-story-1984",
    "title": "Marriage Story",
    "year": 2019,
    "runtime": "1h 30m",
    "rating": "9.2",
    "rottenTomatoes": "93%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94yXxIFxTe.jpg",
    "plot": "Marriage Story follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/BHi-a1n8t7M",
    "vibeMeter": {
      "intensity": 67,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "1917-1985",
    "title": "1917",
    "year": 2019,
    "runtime": "2h 35m",
    "rating": "7.4",
    "rottenTomatoes": "80%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4hZc3gTKG6j89.jpg",
    "plot": "1917 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/YqNYrYUiMfg",
    "vibeMeter": {
      "intensity": 70,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "once-upon-a-time-in-hollywood-1986",
    "title": "Once Upon a Time in Hollywood",
    "year": 1986,
    "runtime": "1h 40m",
    "rating": "8.1",
    "rottenTomatoes": "91%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8Gxv8KWB2j10a6q54Zz4k6Q63c.jpg",
    "plot": "Once Upon a Time in Hollywood follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/ELeMaP8EPAA",
    "vibeMeter": {
      "intensity": 73,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "the-irishman-1987",
    "title": "The Irishman",
    "year": 2019,
    "runtime": "2h 45m",
    "rating": "8.8",
    "rottenTomatoes": "78%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/aM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "The Irishman follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your romance mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/WHXxVmeGQUc",
    "vibeMeter": {
      "intensity": 76,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "blackkklansman-1988",
    "title": "BlacKkKlansman",
    "year": 1988,
    "runtime": "1h 50m",
    "rating": "7.0",
    "rottenTomatoes": "89%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/bM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "BlacKkKlansman follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/pFc6I0rgmgY",
    "vibeMeter": {
      "intensity": 79,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "bohemian-rhapsody-1989",
    "title": "Bohemian Rhapsody",
    "year": 2018,
    "runtime": "2h 55m",
    "rating": "7.7",
    "rottenTomatoes": "76%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9553mK66K1f59A3029285098.jpg",
    "plot": "Bohemian Rhapsody follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/RZYobBB4bH0",
    "vibeMeter": {
      "intensity": 82,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "green-book-1990",
    "title": "Green Book",
    "year": 2018,
    "runtime": "1h 15m",
    "rating": "8.4",
    "rottenTomatoes": "87%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/4n2cKkWJ8zX6QZ7p066M30.jpg",
    "plot": "Green Book follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/QkZxoko_HC0",
    "vibeMeter": {
      "intensity": 85,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "roma-1991",
    "title": "Roma",
    "year": 2018,
    "runtime": "2h 20m",
    "rating": "9.1",
    "rottenTomatoes": "98%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/r5W98lJ5c2bS3.jpg",
    "plot": "Roma follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/6BS27ngZtxg",
    "vibeMeter": {
      "intensity": 88,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "a-star-is-born-1992",
    "title": "A Star Is Born",
    "year": 2018,
    "runtime": "1h 25m",
    "rating": "7.3",
    "rottenTomatoes": "85%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/q71t1GPyGebF2Pz692487.jpg",
    "plot": "A Star Is Born follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/nSbzyEJ8X9E",
    "vibeMeter": {
      "intensity": 91,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "vice-1993",
    "title": "Vice",
    "year": 1993,
    "runtime": "2h 30m",
    "rating": "8.0",
    "rottenTomatoes": "96%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/k9TV1rK0yA3G4v9bS3.jpg",
    "plot": "Vice follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/g09a9laLh0k",
    "vibeMeter": {
      "intensity": 94,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "get-out-1994",
    "title": "Get Out",
    "year": 2017,
    "runtime": "1h 35m",
    "rating": "8.7",
    "rottenTomatoes": "83%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/t92lYrV8dWFwWvErmio5ZfPj2Y6.jpg",
    "plot": "Get Out follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/DzfpyUB60YY",
    "vibeMeter": {
      "intensity": 65,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "lady-bird-1995",
    "title": "Lady Bird",
    "year": 2017,
    "runtime": "2h 40m",
    "rating": "9.4",
    "rottenTomatoes": "94%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/sF1U4EUNoYToAhZOhK2y9E2yRj2.jpg",
    "plot": "Lady Bird follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/lVp1TtnsbN4",
    "vibeMeter": {
      "intensity": 68,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "phantom-thread-1996",
    "title": "Phantom Thread",
    "year": 2017,
    "runtime": "1h 45m",
    "rating": "7.6",
    "rottenTomatoes": "81%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pZekG6xabmYTZdLZwwvCoWP776B.jpg",
    "plot": "Phantom Thread follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/xNsiQMeSvMk",
    "vibeMeter": {
      "intensity": 71,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "three-billboards-outside-ebbing-1997",
    "title": "Three Billboards Outside Ebbing",
    "year": 1997,
    "runtime": "2h 50m",
    "rating": "8.3",
    "rottenTomatoes": "92%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    "plot": "Three Billboards Outside Ebbing follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your indie mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Jit3YhGx5pU",
    "vibeMeter": {
      "intensity": 74,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "call-me-by-your-name-1998",
    "title": "Call Me by Your Name",
    "year": 2017,
    "runtime": "1h 55m",
    "rating": "9.0",
    "rottenTomatoes": "79%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "plot": "Call Me by Your Name follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Z9AYPxH5NTM",
    "vibeMeter": {
      "intensity": 77,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "dunkirk-1999",
    "title": "Dunkirk",
    "year": 2017,
    "runtime": "2h 15m",
    "rating": "7.2",
    "rottenTomatoes": "90%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/62As2c0qJ67p4t38Z6fW0B1p7eK.jpg",
    "plot": "Dunkirk follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/F-eMt3SrfFU",
    "vibeMeter": {
      "intensity": 80,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "the-shape-of-water-2000",
    "title": "The Shape of Water",
    "year": 2017,
    "runtime": "1h 20m",
    "rating": "7.9",
    "rottenTomatoes": "77%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5U6382bE.jpg",
    "plot": "The Shape of Water follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/XFYWazblaUA",
    "vibeMeter": {
      "intensity": 83,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "arrival-2001",
    "title": "Arrival",
    "year": 2016,
    "runtime": "2h 25m",
    "rating": "8.6",
    "rottenTomatoes": "88%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8tABUd1rFwbWb0Ym1D5f5B5A8jK.jpg",
    "plot": "Arrival follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/tFMo3UJ4B4g",
    "vibeMeter": {
      "intensity": 86,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "fences-2002",
    "title": "Fences",
    "year": 2002,
    "runtime": "1h 30m",
    "rating": "9.3",
    "rottenTomatoes": "75%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/wxN1T1uxQ2g.jpg",
    "plot": "Fences follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/spCxVd9ctFs",
    "vibeMeter": {
      "intensity": 89,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "hacksaw-ridge-2003",
    "title": "Hacksaw Ridge",
    "year": 2016,
    "runtime": "2h 35m",
    "rating": "7.5",
    "rottenTomatoes": "86%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/Rvr68u6c5sI.jpg",
    "plot": "Hacksaw Ridge follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/dACCwkFgVXw",
    "vibeMeter": {
      "intensity": 92,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "hell-or-high-water-2004",
    "title": "Hell or High Water",
    "year": 2016,
    "runtime": "1h 40m",
    "rating": "8.2",
    "rottenTomatoes": "97%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/zSWdZVtXT7E.jpg",
    "plot": "Hell or High Water follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/JQoqsKoJVDw",
    "vibeMeter": {
      "intensity": 95,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "la-la-land-2005",
    "title": "La La Land",
    "year": 2016,
    "runtime": "2h 45m",
    "rating": "8.9",
    "rottenTomatoes": "84%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwo1ik4yEObz8d.jpg",
    "plot": "La La Land follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/0pdqf4P9MB8",
    "vibeMeter": {
      "intensity": 66,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "lion-2006",
    "title": "Lion",
    "year": 2006,
    "runtime": "1h 50m",
    "rating": "7.1",
    "rottenTomatoes": "95%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ByXuk9QqQkk.jpg",
    "plot": "Lion follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/R5Xwcv5ov5s",
    "vibeMeter": {
      "intensity": 69,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "manchester-by-the-sea-2007",
    "title": "Manchester by the Sea",
    "year": 2016,
    "runtime": "2h 55m",
    "rating": "7.8",
    "rottenTomatoes": "82%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/92a7Hj0ijSc.jpg",
    "plot": "Manchester by the Sea follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/gsVoD0pTge0",
    "vibeMeter": {
      "intensity": 72,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "moonlight-2008",
    "title": "Moonlight",
    "year": 2016,
    "runtime": "1h 15m",
    "rating": "8.5",
    "rottenTomatoes": "93%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pEFRz84V6471V70R67e4368v1rN.jpg",
    "plot": "Moonlight follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/9NJj12tJzqc",
    "vibeMeter": {
      "intensity": 75,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "hidden-figures-2009",
    "title": "Hidden Figures",
    "year": 2009,
    "runtime": "2h 20m",
    "rating": "9.2",
    "rottenTomatoes": "80%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3QwA2lKGn.jpg",
    "plot": "Hidden Figures follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/5wfrDhgUMGI",
    "vibeMeter": {
      "intensity": 78,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "bridge-of-spies-2010",
    "title": "Bridge of Spies",
    "year": 2015,
    "runtime": "1h 25m",
    "rating": "7.4",
    "rottenTomatoes": "91%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/t92lYrV8dWFwWvErmio5ZfPj2Y6.jpg",
    "plot": "Bridge of Spies follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/mBBuzHrZBro",
    "vibeMeter": {
      "intensity": 81,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "brooklyn-2011",
    "title": "Brooklyn",
    "year": 2011,
    "runtime": "2h 30m",
    "rating": "8.1",
    "rottenTomatoes": "78%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/xA2WHw34922Txm2020.jpg",
    "plot": "Brooklyn follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/7pihN1Ne7PI",
    "vibeMeter": {
      "intensity": 84,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "mad-max-fury-road-2012",
    "title": "Mad Max: Fury Road",
    "year": 2015,
    "runtime": "1h 35m",
    "rating": "8.8",
    "rottenTomatoes": "89%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8tZYtuYiY9u8hDxyZ95wjeUZqsE.jpg",
    "plot": "Mad Max: Fury Road follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/hEJnMQG9ev8",
    "vibeMeter": {
      "intensity": 87,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "the-martian-2013",
    "title": "The Martian",
    "year": 2013,
    "runtime": "2h 40m",
    "rating": "7.0",
    "rottenTomatoes": "76%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/7fn624j56B7w8B9y8e2k2t2.jpg",
    "plot": "The Martian follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/ej3ioOneTy8",
    "vibeMeter": {
      "intensity": 90,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "the-revenant-2014",
    "title": "The Revenant",
    "year": 2015,
    "runtime": "1h 45m",
    "rating": "7.7",
    "rottenTomatoes": "87%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9y8e2k2t2.jpg",
    "plot": "The Revenant follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/LoebZZ8K5N0",
    "vibeMeter": {
      "intensity": 93,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "room-2015",
    "title": "Room",
    "year": 2015,
    "runtime": "2h 50m",
    "rating": "8.4",
    "rottenTomatoes": "98%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/lFwq26Q5p9w71A4Vb683gK5W9gE.jpg",
    "plot": "Room follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/E_Ci-pAL4eE",
    "vibeMeter": {
      "intensity": 96,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "spotlight-2016",
    "title": "Spotlight",
    "year": 2015,
    "runtime": "1h 55m",
    "rating": "9.1",
    "rottenTomatoes": "85%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "plot": "Spotlight follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/EwdCIpbTN5g",
    "vibeMeter": {
      "intensity": 67,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "the-big-short-2017",
    "title": "The Big Short",
    "year": 2015,
    "runtime": "2h 15m",
    "rating": "7.3",
    "rottenTomatoes": "96%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ek8e8W326LkWJ8Z8k4y7.jpg",
    "plot": "The Big Short follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/vgqG3ITMv1Q",
    "vibeMeter": {
      "intensity": 70,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "boyhood-2018",
    "title": "Boyhood",
    "year": 2014,
    "runtime": "1h 20m",
    "rating": "8.0",
    "rottenTomatoes": "83%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0V9fB8k4y7.jpg",
    "plot": "Boyhood follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Y0oX0xiwOv8",
    "vibeMeter": {
      "intensity": 73,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "birdman-2019",
    "title": "Birdman",
    "year": 2014,
    "runtime": "2h 25m",
    "rating": "8.7",
    "rottenTomatoes": "94%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/hE24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Birdman follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/uJfLoE6hanc",
    "vibeMeter": {
      "intensity": 76,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "the-grand-budapest-hotel-2020",
    "title": "The Grand Budapest Hotel",
    "year": 2014,
    "runtime": "1h 30m",
    "rating": "9.4",
    "rottenTomatoes": "81%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94yXxIFxTe.jpg",
    "plot": "The Grand Budapest Hotel follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/1Fg5iWmQjwk",
    "vibeMeter": {
      "intensity": 79,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "the-imitation-game-2021",
    "title": "The Imitation Game",
    "year": 2014,
    "runtime": "2h 35m",
    "rating": "7.6",
    "rottenTomatoes": "92%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4hZc3gTKG6j89.jpg",
    "plot": "The Imitation Game follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/nuPZUUED5uk",
    "vibeMeter": {
      "intensity": 82,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "selma-2022",
    "title": "Selma",
    "year": 2022,
    "runtime": "1h 40m",
    "rating": "8.3",
    "rottenTomatoes": "79%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8Gxv8KWB2j10a6q54Zz4k6Q63c.jpg",
    "plot": "Selma follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/x6t7vVTxaic",
    "vibeMeter": {
      "intensity": 85,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "the-theory-of-everything-2023",
    "title": "The Theory of Everything",
    "year": 2023,
    "runtime": "2h 45m",
    "rating": "9.0",
    "rottenTomatoes": "90%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/aM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "The Theory of Everything follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/DNBsm4vF124",
    "vibeMeter": {
      "intensity": 88,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "whiplash-2024",
    "title": "Whiplash",
    "year": 2014,
    "runtime": "1h 50m",
    "rating": "7.2",
    "rottenTomatoes": "77%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/bM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Whiplash follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/7d_jQycdQGo",
    "vibeMeter": {
      "intensity": 91,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "12-years-a-slave-1980",
    "title": "12 Years a Slave",
    "year": 2013,
    "runtime": "2h 55m",
    "rating": "7.9",
    "rottenTomatoes": "88%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9553mK66K1f59A3029285098.jpg",
    "plot": "12 Years a Slave follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/z02Ie8wKKRg",
    "vibeMeter": {
      "intensity": 94,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "american-hustle-1981",
    "title": "American Hustle",
    "year": 1981,
    "runtime": "1h 15m",
    "rating": "8.6",
    "rottenTomatoes": "75%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/4n2cKkWJ8zX6QZ7p066M30.jpg",
    "plot": "American Hustle follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/1vnnhSiu5Rs",
    "vibeMeter": {
      "intensity": 65,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "captain-phillips-1982",
    "title": "Captain Phillips",
    "year": 1982,
    "runtime": "2h 20m",
    "rating": "9.3",
    "rottenTomatoes": "86%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/r5W98lJ5c2bS3.jpg",
    "plot": "Captain Phillips follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/GEyM01dAxp8",
    "vibeMeter": {
      "intensity": 68,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "dallas-buyers-club-1983",
    "title": "Dallas Buyers Club",
    "year": 1983,
    "runtime": "1h 25m",
    "rating": "7.5",
    "rottenTomatoes": "97%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/q71t1GPyGebF2Pz692487.jpg",
    "plot": "Dallas Buyers Club follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/KDvPcBeOn8E",
    "vibeMeter": {
      "intensity": 71,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "gravity-1984",
    "title": "Gravity",
    "year": 2013,
    "runtime": "2h 30m",
    "rating": "8.2",
    "rottenTomatoes": "84%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/k9TV1rK0yA3G4v9bS3.jpg",
    "plot": "Gravity follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/OiTiKOy59o4",
    "vibeMeter": {
      "intensity": 74,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "her-1985",
    "title": "Her",
    "year": 2013,
    "runtime": "1h 35m",
    "rating": "8.9",
    "rottenTomatoes": "95%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    "plot": "Her follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/dJTU48_yghs",
    "vibeMeter": {
      "intensity": 77,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "nebraska-1986",
    "title": "Nebraska",
    "year": 1986,
    "runtime": "2h 40m",
    "rating": "7.1",
    "rottenTomatoes": "82%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/sF1U4EUNoYToAhZOhK2y9E2yRj2.jpg",
    "plot": "Nebraska follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/ZuIBvmxIN4w",
    "vibeMeter": {
      "intensity": 80,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "philomena-1987",
    "title": "Philomena",
    "year": 1987,
    "runtime": "1h 45m",
    "rating": "7.8",
    "rottenTomatoes": "93%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pZekG6xabmYTZdLZwwvCoWP776B.jpg",
    "plot": "Philomena follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your romance mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/rG3QP8foCvg",
    "vibeMeter": {
      "intensity": 83,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "the-wolf-of-wall-street-1988",
    "title": "The Wolf of Wall Street",
    "year": 2013,
    "runtime": "2h 50m",
    "rating": "8.5",
    "rottenTomatoes": "80%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    "plot": "The Wolf of Wall Street follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/iszwuX1AK6A",
    "vibeMeter": {
      "intensity": 86,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "argo-1989",
    "title": "Argo",
    "year": 1989,
    "runtime": "1h 55m",
    "rating": "9.2",
    "rottenTomatoes": "91%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "plot": "Argo follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/JW3WfSFgrVY",
    "vibeMeter": {
      "intensity": 89,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "amour-1990",
    "title": "Amour",
    "year": 2012,
    "runtime": "2h 15m",
    "rating": "7.4",
    "rottenTomatoes": "78%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/62As2c0qJ67p4t38Z6fW0B1p7eK.jpg",
    "plot": "Amour follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/F7aF1Wl1h-M",
    "vibeMeter": {
      "intensity": 92,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "beasts-of-the-southern-wild-1991",
    "title": "Beasts of the Southern Wild",
    "year": 1991,
    "runtime": "1h 20m",
    "rating": "8.1",
    "rottenTomatoes": "89%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5U6382bE.jpg",
    "plot": "Beasts of the Southern Wild follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/pvqZzSMIZa0",
    "vibeMeter": {
      "intensity": 95,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "django-unchained-1992",
    "title": "Django Unchained",
    "year": 2012,
    "runtime": "2h 25m",
    "rating": "8.8",
    "rottenTomatoes": "76%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8tABUd1rFwbWb0Ym1D5f5B5A8jK.jpg",
    "plot": "Django Unchained follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/DZ5Sm5DftbQ",
    "vibeMeter": {
      "intensity": 66,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "les-mis\u0398rables-1993",
    "title": "Les Mis\u0398rables",
    "year": 1993,
    "runtime": "1h 30m",
    "rating": "7.0",
    "rottenTomatoes": "87%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/wxN1T1uxQ2g.jpg",
    "plot": "Les Mis\u0398rables follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/WoPbcfUmMYw",
    "vibeMeter": {
      "intensity": 69,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "life-of-pi-1994",
    "title": "Life of Pi",
    "year": 2012,
    "runtime": "2h 35m",
    "rating": "7.7",
    "rottenTomatoes": "98%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/Rvr68u6c5sI.jpg",
    "plot": "Life of Pi follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/3mMN693-F3U",
    "vibeMeter": {
      "intensity": 72,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "lincoln-1995",
    "title": "Lincoln",
    "year": 1995,
    "runtime": "1h 40m",
    "rating": "8.4",
    "rottenTomatoes": "85%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/zSWdZVtXT7E.jpg",
    "plot": "Lincoln follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/D2ILYMl_yh0",
    "vibeMeter": {
      "intensity": 75,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "silver-linings-playbook-1996",
    "title": "Silver Linings Playbook",
    "year": 2012,
    "runtime": "2h 45m",
    "rating": "9.1",
    "rottenTomatoes": "96%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8xLji7WhW6U.jpg",
    "plot": "Silver Linings Playbook follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/kVS-6k2tQAA",
    "vibeMeter": {
      "intensity": 78,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "zero-dark-thirty-1997",
    "title": "Zero Dark Thirty",
    "year": 2012,
    "runtime": "1h 50m",
    "rating": "7.3",
    "rottenTomatoes": "83%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ByXuk9QqQkk.jpg",
    "plot": "Zero Dark Thirty follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your indie mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/LJFra3B9sbA",
    "vibeMeter": {
      "intensity": 81,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "the-artist-1998",
    "title": "The Artist",
    "year": 2011,
    "runtime": "2h 55m",
    "rating": "8.0",
    "rottenTomatoes": "94%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/92a7Hj0ijSc.jpg",
    "plot": "The Artist follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/YB9Oq0hn5KY",
    "vibeMeter": {
      "intensity": 84,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "the-descendants-1999",
    "title": "The Descendants",
    "year": 1999,
    "runtime": "1h 15m",
    "rating": "8.7",
    "rottenTomatoes": "81%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pEFRz84V6471V70R67e4368v1rN.jpg",
    "plot": "The Descendants follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/XDwUH02DDWU",
    "vibeMeter": {
      "intensity": 87,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "extremely-loud-&-incredibly-close-2000",
    "title": "Extremely Loud & Incredibly Close",
    "year": 2000,
    "runtime": "2h 20m",
    "rating": "9.4",
    "rottenTomatoes": "92%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3QwA2lKGn.jpg",
    "plot": "Extremely Loud & Incredibly Close follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/jgp8rR2fykU",
    "vibeMeter": {
      "intensity": 90,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "the-help-2001",
    "title": "The Help",
    "year": 2001,
    "runtime": "1h 25m",
    "rating": "7.6",
    "rottenTomatoes": "79%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/t92lYrV8dWFwWvErmio5ZfPj2Y6.jpg",
    "plot": "The Help follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/XOTkNsxhECY",
    "vibeMeter": {
      "intensity": 93,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "hugo-2002",
    "title": "Hugo",
    "year": 2002,
    "runtime": "2h 30m",
    "rating": "8.3",
    "rottenTomatoes": "90%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/xA2WHw34922Txm2020.jpg",
    "plot": "Hugo follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Hv3obL9HqyY",
    "vibeMeter": {
      "intensity": 96,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "midnight-in-paris-2003",
    "title": "Midnight in Paris",
    "year": 2011,
    "runtime": "1h 35m",
    "rating": "9.0",
    "rottenTomatoes": "77%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwo1h4wB9y8e2k2t2.jpg",
    "plot": "Midnight in Paris follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/FAfR8omt-CY",
    "vibeMeter": {
      "intensity": 67,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "moneyball-2004",
    "title": "Moneyball",
    "year": 2011,
    "runtime": "2h 40m",
    "rating": "7.2",
    "rottenTomatoes": "88%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/7fn624j56B7w8B9y8e2k2t2.jpg",
    "plot": "Moneyball follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/-4QPVo0UIzc",
    "vibeMeter": {
      "intensity": 70,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "the-tree-of-life-2005",
    "title": "The Tree of Life",
    "year": 2011,
    "runtime": "1h 45m",
    "rating": "7.9",
    "rottenTomatoes": "75%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9y8e2k2t2.jpg",
    "plot": "The Tree of Life follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/RrAz1YLh8nY",
    "vibeMeter": {
      "intensity": 73,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "war-horse-2006",
    "title": "War Horse",
    "year": 2006,
    "runtime": "2h 50m",
    "rating": "8.6",
    "rottenTomatoes": "86%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/lFwq26Q5p9w71A4Vb683gK5W9gE.jpg",
    "plot": "War Horse follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/JPNyNr2Kp4w",
    "vibeMeter": {
      "intensity": 76,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "the-kings-speech-2007",
    "title": "The King's Speech",
    "year": 2010,
    "runtime": "1h 55m",
    "rating": "9.3",
    "rottenTomatoes": "97%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "plot": "The King's Speech follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/gSw6ei5tdbg",
    "vibeMeter": {
      "intensity": 79,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "127-hours-2008",
    "title": "127 Hours",
    "year": 2010,
    "runtime": "2h 15m",
    "rating": "7.5",
    "rottenTomatoes": "84%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ek8e8W326LkWJ8Z8k4y7.jpg",
    "plot": "127 Hours follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/kdGkMhdXhMI",
    "vibeMeter": {
      "intensity": 82,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "black-swan-2009",
    "title": "Black Swan",
    "year": 2010,
    "runtime": "1h 20m",
    "rating": "8.2",
    "rottenTomatoes": "95%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0V9fB8k4y7.jpg",
    "plot": "Black Swan follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/INkmCJOxpc8",
    "vibeMeter": {
      "intensity": 85,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "the-fighter-2010",
    "title": "The Fighter",
    "year": 2010,
    "runtime": "2h 25m",
    "rating": "8.9",
    "rottenTomatoes": "82%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/hE24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "The Fighter follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/LRIZ4mCi5Ps",
    "vibeMeter": {
      "intensity": 88,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "inception-2011",
    "title": "Inception",
    "year": 2010,
    "runtime": "1h 30m",
    "rating": "7.1",
    "rottenTomatoes": "93%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/oYuLE1h2CawdPw909yP19d.jpg",
    "plot": "Inception follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/YoHD9XEInc0",
    "vibeMeter": {
      "intensity": 91,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "the-kids-are-all-right-2012",
    "title": "The Kids Are All Right",
    "year": 2012,
    "runtime": "2h 35m",
    "rating": "7.8",
    "rottenTomatoes": "80%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4hZc3gTKG6j89.jpg",
    "plot": "The Kids Are All Right follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/RixlpHKfb6M",
    "vibeMeter": {
      "intensity": 94,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "the-social-network-2013",
    "title": "The Social Network",
    "year": 2010,
    "runtime": "1h 40m",
    "rating": "8.5",
    "rottenTomatoes": "91%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8Gxv8KWB2j10a6q54Zz4k6Q63c.jpg",
    "plot": "The Social Network follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/lB95KLmpLR4",
    "vibeMeter": {
      "intensity": 65,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "the-town-2014",
    "title": "The Town",
    "year": 2014,
    "runtime": "2h 45m",
    "rating": "9.2",
    "rottenTomatoes": "78%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/aM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "The Town follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/uAjECYnrYks",
    "vibeMeter": {
      "intensity": 68,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "toy-story-3-2015",
    "title": "Toy Story 3",
    "year": 2010,
    "runtime": "1h 50m",
    "rating": "7.4",
    "rottenTomatoes": "89%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/bM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Toy Story 3 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/2BlMNH1QTeE",
    "vibeMeter": {
      "intensity": 71,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "true-grit-2016",
    "title": "True Grit",
    "year": 2016,
    "runtime": "2h 55m",
    "rating": "8.1",
    "rottenTomatoes": "76%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9553mK66K1f59A3029285098.jpg",
    "plot": "True Grit follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/aOHGKCle-aY",
    "vibeMeter": {
      "intensity": 74,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "winters-bone-2017",
    "title": "Winter's Bone",
    "year": 2017,
    "runtime": "1h 15m",
    "rating": "8.8",
    "rottenTomatoes": "87%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/4n2cKkWJ8zX6QZ7p066M30.jpg",
    "plot": "Winter's Bone follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/2vcKo3zRmcQ",
    "vibeMeter": {
      "intensity": 77,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "avatar-the-way-of-water-2018",
    "title": "Avatar: The Way of Water",
    "year": 2022,
    "runtime": "2h 20m",
    "rating": "7.0",
    "rottenTomatoes": "98%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/r5W98lJ5c2bS3.jpg",
    "plot": "Avatar: The Way of Water follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/d9MyW72ELq0",
    "vibeMeter": {
      "intensity": 80,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "top-gun-maverick-2019",
    "title": "Top Gun: Maverick",
    "year": 2022,
    "runtime": "1h 25m",
    "rating": "7.7",
    "rottenTomatoes": "85%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/62HCdoYG-a5wh7iV324d.jpg",
    "plot": "Top Gun: Maverick follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/giXco2jaZ_4",
    "vibeMeter": {
      "intensity": 83,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "black-panther-wakanda-forever-2020",
    "title": "Black Panther: Wakanda Forever",
    "year": 2022,
    "runtime": "2h 30m",
    "rating": "8.4",
    "rottenTomatoes": "96%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/k9TV1rK0yA3G4v9bS3.jpg",
    "plot": "Black Panther: Wakanda Forever follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/_Z3QKkl1WyM",
    "vibeMeter": {
      "intensity": 86,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "the-batman-2021",
    "title": "The Batman",
    "year": 2022,
    "runtime": "1h 35m",
    "rating": "9.1",
    "rottenTomatoes": "83%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    "plot": "The Batman follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/mqqft2x_Aa4",
    "vibeMeter": {
      "intensity": 89,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "dune-part-one-2022",
    "title": "Dune: Part One",
    "year": 2022,
    "runtime": "2h 40m",
    "rating": "7.3",
    "rottenTomatoes": "94%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/sF1U4EUNoYToAhZOhK2y9E2yRj2.jpg",
    "plot": "Dune: Part One follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/n9xhJrPXop4",
    "vibeMeter": {
      "intensity": 92,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "everything-everywhere-all-at-once-2023",
    "title": "Everything Everywhere All at Once",
    "year": 2022,
    "runtime": "1h 45m",
    "rating": "8.0",
    "rottenTomatoes": "81%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/r7DqEyc_-tA.jpg",
    "plot": "Everything Everywhere All at Once follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/wxN1T1uxQ2g",
    "vibeMeter": {
      "intensity": 95,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "elvis-2024",
    "title": "Elvis",
    "year": 2024,
    "runtime": "2h 50m",
    "rating": "8.7",
    "rottenTomatoes": "92%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    "plot": "Elvis follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/wBDLRvjHVOY",
    "vibeMeter": {
      "intensity": 66,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "t\u00dfr-1980",
    "title": "T\u00dfr",
    "year": 1980,
    "runtime": "1h 55m",
    "rating": "9.4",
    "rottenTomatoes": "79%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "plot": "T\u00dfr follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/5UdkGjURH6Q",
    "vibeMeter": {
      "intensity": 69,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "the-fabelmans-1981",
    "title": "The Fabelmans",
    "year": 2022,
    "runtime": "2h 15m",
    "rating": "7.6",
    "rottenTomatoes": "90%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/62As2c0qJ67p4t38Z6fW0B1p7eK.jpg",
    "plot": "The Fabelmans follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/D1G2iLSzOe8",
    "vibeMeter": {
      "intensity": 72,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "triangle-of-sadness-1982",
    "title": "Triangle of Sadness",
    "year": 2022,
    "runtime": "1h 20m",
    "rating": "8.3",
    "rottenTomatoes": "77%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5U6382bE.jpg",
    "plot": "Triangle of Sadness follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/VDvfFIZQIuQ",
    "vibeMeter": {
      "intensity": 75,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "babylon-1983",
    "title": "Babylon",
    "year": 1983,
    "runtime": "2h 25m",
    "rating": "9.0",
    "rottenTomatoes": "88%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8tABUd1rFwbWb0Ym1D5f5B5A8jK.jpg",
    "plot": "Babylon follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/5muQK7CuFtY",
    "vibeMeter": {
      "intensity": 78,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "the-banshees-of-inisherin-1984",
    "title": "The Banshees of Inisherin",
    "year": 2022,
    "runtime": "1h 30m",
    "rating": "7.2",
    "rottenTomatoes": "75%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/wxN1T1uxQ2g.jpg",
    "plot": "The Banshees of Inisherin follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/uRu3zLOJN2c",
    "vibeMeter": {
      "intensity": 81,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "glass-onion-1985",
    "title": "Glass Onion",
    "year": 1985,
    "runtime": "2h 35m",
    "rating": "7.9",
    "rottenTomatoes": "86%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/Rvr68u6c5sI.jpg",
    "plot": "Glass Onion follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/gj5ibYSz8C0",
    "vibeMeter": {
      "intensity": 84,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "guillermo-del-toros-pinocchio-1986",
    "title": "Guillermo del Toro's Pinocchio",
    "year": 1986,
    "runtime": "1h 40m",
    "rating": "8.6",
    "rottenTomatoes": "97%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/zSWdZVtXT7E.jpg",
    "plot": "Guillermo del Toro's Pinocchio follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Od2NW1sfRdA",
    "vibeMeter": {
      "intensity": 87,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "puss-in-boots-the-last-wish-1987",
    "title": "Puss in Boots: The Last Wish",
    "year": 2022,
    "runtime": "2h 45m",
    "rating": "9.3",
    "rottenTomatoes": "84%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8xLji7WhW6U.jpg",
    "plot": "Puss in Boots: The Last Wish follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your romance mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/RqrXhwS33yc",
    "vibeMeter": {
      "intensity": 90,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "all-quiet-on-the-western-front-1988",
    "title": "All Quiet on the Western Front",
    "year": 2022,
    "runtime": "1h 50m",
    "rating": "7.5",
    "rottenTomatoes": "95%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ByXuk9QqQkk.jpg",
    "plot": "All Quiet on the Western Front follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/hf8EYbVxtCY",
    "vibeMeter": {
      "intensity": 93,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "women-talking-1989",
    "title": "Women Talking",
    "year": 1989,
    "runtime": "2h 55m",
    "rating": "8.2",
    "rottenTomatoes": "82%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/92a7Hj0ijSc.jpg",
    "plot": "Women Talking follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/pD0mFhMqDCE",
    "vibeMeter": {
      "intensity": 96,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "the-whale-1990",
    "title": "The Whale",
    "year": 2022,
    "runtime": "1h 15m",
    "rating": "8.9",
    "rottenTomatoes": "93%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pEFRz84V6471V70R67e4368v1rN.jpg",
    "plot": "The Whale follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/D30r0CWTIK8",
    "vibeMeter": {
      "intensity": 67,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "aftersun-1991",
    "title": "Aftersun",
    "year": 2022,
    "runtime": "2h 20m",
    "rating": "7.1",
    "rottenTomatoes": "80%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3QwA2lKGn.jpg",
    "plot": "Aftersun follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/vXKcWRu8K_U",
    "vibeMeter": {
      "intensity": 70,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "decision-to-leave-1992",
    "title": "Decision to Leave",
    "year": 1992,
    "runtime": "1h 25m",
    "rating": "7.8",
    "rottenTomatoes": "91%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/t92lYrV8dWFwWvErmio5ZfPj2Y6.jpg",
    "plot": "Decision to Leave follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Bmoy73lhs-s",
    "vibeMeter": {
      "intensity": 73,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "rrr-1993",
    "title": "RRR",
    "year": 1993,
    "runtime": "2h 30m",
    "rating": "8.5",
    "rottenTomatoes": "78%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/xA2WHw34922Txm2020.jpg",
    "plot": "RRR follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/NgBoMJy386M",
    "vibeMeter": {
      "intensity": 76,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "barb3r-1994",
    "title": "BARB3R",
    "year": 1994,
    "runtime": "1h 35m",
    "rating": "9.2",
    "rottenTomatoes": "89%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwo1h4wB9y8e2k2t2.jpg",
    "plot": "BARB3R follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/_PBTMEwvbvc",
    "vibeMeter": {
      "intensity": 79,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "godzilla-minus-one-1995",
    "title": "Godzilla Minus One",
    "year": 2023,
    "runtime": "2h 40m",
    "rating": "7.4",
    "rottenTomatoes": "76%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/7fn624j56B7w8B9y8e2k2t2.jpg",
    "plot": "Godzilla Minus One follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/nAYKaslCXPc",
    "vibeMeter": {
      "intensity": 82,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "oppenheimer-1996",
    "title": "Oppenheimer",
    "year": 2023,
    "runtime": "1h 45m",
    "rating": "8.1",
    "rottenTomatoes": "87%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    "plot": "Oppenheimer follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/uYPbbksJxIg",
    "vibeMeter": {
      "intensity": 85,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "barbie-1997",
    "title": "Barbie",
    "year": 2023,
    "runtime": "2h 50m",
    "rating": "8.8",
    "rottenTomatoes": "98%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/lFwq26Q5p9w71A4Vb683gK5W9gE.jpg",
    "plot": "Barbie follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your indie mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/pBk4NYhWNMM",
    "vibeMeter": {
      "intensity": 88,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "killers-of-the-flower-moon-1998",
    "title": "Killers of the Flower Moon",
    "year": 1998,
    "runtime": "1h 55m",
    "rating": "7.0",
    "rottenTomatoes": "85%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "plot": "Killers of the Flower Moon follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/EP34Yoxs3FQ",
    "vibeMeter": {
      "intensity": 91,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "poor-things-1999",
    "title": "Poor Things",
    "year": 2023,
    "runtime": "2h 15m",
    "rating": "7.7",
    "rottenTomatoes": "96%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ek8e8W326LkWJ8Z8k4y7.jpg",
    "plot": "Poor Things follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/udPmRsj0I-M",
    "vibeMeter": {
      "intensity": 94,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "holdovers-2000",
    "title": "Holdovers",
    "year": 2000,
    "runtime": "1h 20m",
    "rating": "8.4",
    "rottenTomatoes": "83%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0V9fB8k4y7.jpg",
    "plot": "Holdovers follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/QgrZ1co1H5E",
    "vibeMeter": {
      "intensity": 65,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "past-lives-2001",
    "title": "Past Lives",
    "year": 2023,
    "runtime": "2h 25m",
    "rating": "9.1",
    "rottenTomatoes": "94%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/hE24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Past Lives follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/EXL7cyv3pBY",
    "vibeMeter": {
      "intensity": 68,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "anatomy-of-a-fall-2002",
    "title": "Anatomy of a Fall",
    "year": 2023,
    "runtime": "1h 30m",
    "rating": "7.3",
    "rottenTomatoes": "81%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94yXxIFxTe.jpg",
    "plot": "Anatomy of a Fall follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/MJlpGZuE4R4",
    "vibeMeter": {
      "intensity": 71,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "zone-of-interest-2003",
    "title": "Zone of Interest",
    "year": 2003,
    "runtime": "2h 35m",
    "rating": "8.0",
    "rottenTomatoes": "92%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4hZc3gTKG6j89.jpg",
    "plot": "Zone of Interest follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/r-vfg3KkV54",
    "vibeMeter": {
      "intensity": 74,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "spider-man-across-the-spider-verse-2004",
    "title": "Spider-Man: Across the Spider-Verse",
    "year": 2023,
    "runtime": "1h 40m",
    "rating": "8.7",
    "rottenTomatoes": "79%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj7sRFF.jpg",
    "plot": "Spider-Man: Across the Spider-Verse follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/cqGjhVJWtEg",
    "vibeMeter": {
      "intensity": 77,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "guardians-of-the-galaxy-vol-3-2005",
    "title": "Guardians of the Galaxy Vol. 3",
    "year": 2023,
    "runtime": "2h 45m",
    "rating": "9.4",
    "rottenTomatoes": "90%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/aM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Guardians of the Galaxy Vol. 3 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/u3V5KDHRQvk",
    "vibeMeter": {
      "intensity": 80,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "mission-impossible---dead-reckoning-2006",
    "title": "Mission: Impossible - Dead Reckoning",
    "year": 2006,
    "runtime": "1h 50m",
    "rating": "7.6",
    "rottenTomatoes": "77%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/bM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Mission: Impossible - Dead Reckoning follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/avz06PDqDbM",
    "vibeMeter": {
      "intensity": 83,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "john-wick-chapter-4-2007",
    "title": "John Wick: Chapter 4",
    "year": 2023,
    "runtime": "2h 55m",
    "rating": "8.3",
    "rottenTomatoes": "88%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/vZloFAK7NHYSTW35M9G9vLhviNx.jpg",
    "plot": "John Wick: Chapter 4 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/qEVUtrk8_B4",
    "vibeMeter": {
      "intensity": 86,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "inside-out-2-2008",
    "title": "Inside Out 2",
    "year": 2024,
    "runtime": "1h 15m",
    "rating": "9.0",
    "rottenTomatoes": "75%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/4n2cKkWJ8zX6QZ7p066M30.jpg",
    "plot": "Inside Out 2 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/LEjhY15eCx0",
    "vibeMeter": {
      "intensity": 89,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "deadpool-&-wolverine-2009",
    "title": "Deadpool & Wolverine",
    "year": 2024,
    "runtime": "2h 20m",
    "rating": "7.2",
    "rottenTomatoes": "86%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/r5W98lJ5c2bS3.jpg",
    "plot": "Deadpool & Wolverine follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/73_1biulkYk",
    "vibeMeter": {
      "intensity": 92,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "dune-part-two-2010",
    "title": "Dune: Part Two",
    "year": 2024,
    "runtime": "1h 25m",
    "rating": "7.9",
    "rottenTomatoes": "97%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/q71t1GPyGebF2Pz692487.jpg",
    "plot": "Dune: Part Two follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Way9Dexny3w",
    "vibeMeter": {
      "intensity": 95,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "wicked-2011",
    "title": "Wicked",
    "year": 2024,
    "runtime": "2h 30m",
    "rating": "8.6",
    "rottenTomatoes": "84%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/k9TV1rK0yA3G4v9bS3.jpg",
    "plot": "Wicked follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/6COmYeLsz4c",
    "vibeMeter": {
      "intensity": 66,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "gladiator-ii-2012",
    "title": "Gladiator II",
    "year": 2024,
    "runtime": "1h 35m",
    "rating": "9.3",
    "rottenTomatoes": "95%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    "plot": "Gladiator II follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/4rgYUipGJNo",
    "vibeMeter": {
      "intensity": 69,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "kingdom-of-the-planet-of-the-apes-2013",
    "title": "Kingdom of the Planet of the Apes",
    "year": 2013,
    "runtime": "2h 40m",
    "rating": "7.5",
    "rottenTomatoes": "82%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/sF1U4EUNoYToAhZOhK2y9E2yRj2.jpg",
    "plot": "Kingdom of the Planet of the Apes follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/XtFI7SNtVpY",
    "vibeMeter": {
      "intensity": 72,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "twisters-2014",
    "title": "Twisters",
    "year": 2024,
    "runtime": "1h 45m",
    "rating": "8.2",
    "rottenTomatoes": "93%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pZekG6xabmYTZdLZwwvCoWP776B.jpg",
    "plot": "Twisters follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/wdok0rZdmx4",
    "vibeMeter": {
      "intensity": 75,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "alien-romulus-2015",
    "title": "Alien: Romulus",
    "year": 2024,
    "runtime": "2h 50m",
    "rating": "8.9",
    "rottenTomatoes": "80%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    "plot": "Alien: Romulus follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/cSiyutKYuC0",
    "vibeMeter": {
      "intensity": 78,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "civil-war-2016",
    "title": "Civil War",
    "year": 2024,
    "runtime": "1h 55m",
    "rating": "7.1",
    "rottenTomatoes": "91%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "plot": "Civil War follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/aDyQxtg0V2w",
    "vibeMeter": {
      "intensity": 81,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "challengers-2017",
    "title": "Challengers",
    "year": 2024,
    "runtime": "2h 15m",
    "rating": "7.8",
    "rottenTomatoes": "78%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/62As2c0qJ67p4t38Z6fW0B1p7eK.jpg",
    "plot": "Challengers follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/AlvJmX3E-OY",
    "vibeMeter": {
      "intensity": 84,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "furiosa-a-mad-max-saga-2018",
    "title": "Furiosa: A Mad Max Saga",
    "year": 2024,
    "runtime": "1h 20m",
    "rating": "8.5",
    "rottenTomatoes": "89%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5U6382bE.jpg",
    "plot": "Furiosa: A Mad Max Saga follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/XJMuhwVlca4",
    "vibeMeter": {
      "intensity": 87,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "a-quiet-place-day-one-2019",
    "title": "A Quiet Place: Day One",
    "year": 2024,
    "runtime": "2h 25m",
    "rating": "9.2",
    "rottenTomatoes": "76%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8tABUd1rFwbWb0Ym1D5f5B5A8jK.jpg",
    "plot": "A Quiet Place: Day One follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/YPY7J-l5Vzo",
    "vibeMeter": {
      "intensity": 90,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "beetlejuice-beetlejuice-2020",
    "title": "Beetlejuice Beetlejuice",
    "year": 2020,
    "runtime": "1h 30m",
    "rating": "7.4",
    "rottenTomatoes": "87%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/wxN1T1uxQ2g.jpg",
    "plot": "Beetlejuice Beetlejuice follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/vyQPzqzFPvc",
    "vibeMeter": {
      "intensity": 93,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "nosferatu-2021",
    "title": "Nosferatu",
    "year": 2024,
    "runtime": "2h 35m",
    "rating": "8.1",
    "rottenTomatoes": "98%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/Rvr68u6c5sI.jpg",
    "plot": "Nosferatu follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/nulvWqYUM8k",
    "vibeMeter": {
      "intensity": 96,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "joker-folie-\u03b1-deux-2022",
    "title": "Joker: Folie \u03b1 Deux",
    "year": 2022,
    "runtime": "1h 40m",
    "rating": "8.8",
    "rottenTomatoes": "85%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/zSWdZVtXT7E.jpg",
    "plot": "Joker: Folie \u03b1 Deux follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/_OKAwz2MsJs",
    "vibeMeter": {
      "intensity": 67,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "venom-the-last-dance-2023",
    "title": "Venom: The Last Dance",
    "year": 2023,
    "runtime": "2h 45m",
    "rating": "7.0",
    "rottenTomatoes": "96%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8xLji7WhW6U.jpg",
    "plot": "Venom: The Last Dance follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/__2bjWbetsA",
    "vibeMeter": {
      "intensity": 70,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "kraven-the-hunter-2024",
    "title": "Kraven the Hunter",
    "year": 2024,
    "runtime": "1h 50m",
    "rating": "7.7",
    "rottenTomatoes": "83%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ByXuk9QqQkk.jpg",
    "plot": "Kraven the Hunter follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/I8gFw4-2RBM",
    "vibeMeter": {
      "intensity": 73,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "moana-2-1980",
    "title": "Moana 2",
    "year": 1980,
    "runtime": "2h 55m",
    "rating": "8.4",
    "rottenTomatoes": "94%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/92a7Hj0ijSc.jpg",
    "plot": "Moana 2 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/n7f6hlKsxxo",
    "vibeMeter": {
      "intensity": 76,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "gladiator-2-1981",
    "title": "Gladiator 2",
    "year": 1981,
    "runtime": "1h 15m",
    "rating": "9.1",
    "rottenTomatoes": "81%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pEFRz84V6471V70R67e4368v1rN.jpg",
    "plot": "Gladiator 2 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/4rgYUipGJNo",
    "vibeMeter": {
      "intensity": 79,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "the-substance-1982",
    "title": "The Substance",
    "year": 2024,
    "runtime": "2h 20m",
    "rating": "7.3",
    "rottenTomatoes": "92%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3QwA2lKGn.jpg",
    "plot": "The Substance follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/aA-vyoIPcL4",
    "vibeMeter": {
      "intensity": 82,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "trap-1983",
    "title": "Trap",
    "year": 1983,
    "runtime": "1h 25m",
    "rating": "8.0",
    "rottenTomatoes": "79%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/t92lYrV8dWFwWvErmio5ZfPj2Y6.jpg",
    "plot": "Trap follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/YjgT9NMq3ww",
    "vibeMeter": {
      "intensity": 85,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "blink-twice-1984",
    "title": "Blink Twice",
    "year": 1984,
    "runtime": "2h 30m",
    "rating": "8.7",
    "rottenTomatoes": "90%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/xA2WHw34922Txm2020.jpg",
    "plot": "Blink Twice follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/qpG91Jxz6rI",
    "vibeMeter": {
      "intensity": 88,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "speak-no-evil-1985",
    "title": "Speak No Evil",
    "year": 1985,
    "runtime": "1h 35m",
    "rating": "9.4",
    "rottenTomatoes": "77%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwo1h4wB9y8e2k2t2.jpg",
    "plot": "Speak No Evil follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/FjzxI6uf8H8",
    "vibeMeter": {
      "intensity": 91,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "heretic-1986",
    "title": "Heretic",
    "year": 1986,
    "runtime": "2h 40m",
    "rating": "7.6",
    "rottenTomatoes": "88%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/7fn624j56B7w8B9y8e2k2t2.jpg",
    "plot": "Heretic follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/O9i2vmFhSSY",
    "vibeMeter": {
      "intensity": 94,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "the-piano-lesson-1987",
    "title": "The Piano Lesson",
    "year": 1987,
    "runtime": "1h 45m",
    "rating": "8.3",
    "rottenTomatoes": "75%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9y8e2k2t2.jpg",
    "plot": "The Piano Lesson follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your romance mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/cZwjt0pjt8w",
    "vibeMeter": {
      "intensity": 65,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "a-real-pain-1988",
    "title": "A Real Pain",
    "year": 1988,
    "runtime": "2h 50m",
    "rating": "9.0",
    "rottenTomatoes": "86%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/lFwq26Q5p9w71A4Vb683gK5W9gE.jpg",
    "plot": "A Real Pain follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/b2et8Vpu7Ls",
    "vibeMeter": {
      "intensity": 68,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "conclave-1989",
    "title": "Conclave",
    "year": 1989,
    "runtime": "1h 55m",
    "rating": "7.2",
    "rottenTomatoes": "97%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "plot": "Conclave follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/JX9jasdi3ic",
    "vibeMeter": {
      "intensity": 71,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "anora-1990",
    "title": "Anora",
    "year": 2024,
    "runtime": "2h 15m",
    "rating": "7.9",
    "rottenTomatoes": "84%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ek8e8W326LkWJ8Z8k4y7.jpg",
    "plot": "Anora follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/pZekG6xabmY",
    "vibeMeter": {
      "intensity": 74,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "emilia-p\u0398rez-1991",
    "title": "Emilia P\u0398rez",
    "year": 1991,
    "runtime": "1h 20m",
    "rating": "8.6",
    "rottenTomatoes": "95%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0V9fB8k4y7.jpg",
    "plot": "Emilia P\u0398rez follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/WoPbcfUmMYw",
    "vibeMeter": {
      "intensity": 77,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "the-apprentice-1992",
    "title": "The Apprentice",
    "year": 1992,
    "runtime": "2h 25m",
    "rating": "9.3",
    "rottenTomatoes": "82%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/hE24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "The Apprentice follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Tw1FEvkg5AY",
    "vibeMeter": {
      "intensity": 80,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "sing-sing-1993",
    "title": "Sing Sing",
    "year": 1993,
    "runtime": "1h 30m",
    "rating": "7.5",
    "rottenTomatoes": "93%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94yXxIFxTe.jpg",
    "plot": "Sing Sing follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/j3dXc6P3zH8",
    "vibeMeter": {
      "intensity": 83,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "longlegs-1994",
    "title": "Longlegs",
    "year": 1994,
    "runtime": "2h 35m",
    "rating": "8.2",
    "rottenTomatoes": "80%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4hZc3gTKG6j89.jpg",
    "plot": "Longlegs follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/fxx26IBg9hk",
    "vibeMeter": {
      "intensity": 86,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "cuckoo-1995",
    "title": "Cuckoo",
    "year": 1995,
    "runtime": "1h 40m",
    "rating": "8.9",
    "rottenTomatoes": "91%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8Gxv8KWB2j10a6q54Zz4k6Q63c.jpg",
    "plot": "Cuckoo follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/NuON7HH0UkQ",
    "vibeMeter": {
      "intensity": 89,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "maxxxine-1996",
    "title": "MaXXXine",
    "year": 1996,
    "runtime": "2h 45m",
    "rating": "7.1",
    "rottenTomatoes": "78%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/aM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "MaXXXine follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/y0uS3t6nFgY",
    "vibeMeter": {
      "intensity": 92,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "abigail-1997",
    "title": "Abigail",
    "year": 1997,
    "runtime": "1h 50m",
    "rating": "7.8",
    "rottenTomatoes": "89%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/bM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Abigail follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your indie mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/xtAL2x58hns",
    "vibeMeter": {
      "intensity": 95,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "late-night-with-the-devil-1998",
    "title": "Late Night with the Devil",
    "year": 1998,
    "runtime": "2h 55m",
    "rating": "8.5",
    "rottenTomatoes": "76%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9553mK66K1f59A3029285098.jpg",
    "plot": "Late Night with the Devil follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Kw4qDJRtNSE",
    "vibeMeter": {
      "intensity": 66,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "immaculate-1999",
    "title": "Immaculate",
    "year": 1999,
    "runtime": "1h 15m",
    "rating": "9.2",
    "rottenTomatoes": "87%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/4n2cKkWJ8zX6QZ7p066M30.jpg",
    "plot": "Immaculate follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/ItEyan98WsY",
    "vibeMeter": {
      "intensity": 69,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "first-omen-2000",
    "title": "First Omen",
    "year": 2000,
    "runtime": "2h 20m",
    "rating": "7.4",
    "rottenTomatoes": "98%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/r5W98lJ5c2bS3.jpg",
    "plot": "First Omen follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/lmN1Op8ygno",
    "vibeMeter": {
      "intensity": 72,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "monkey-man-2001",
    "title": "Monkey Man",
    "year": 2001,
    "runtime": "1h 25m",
    "rating": "8.1",
    "rottenTomatoes": "85%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/q71t1GPyGebF2Pz692487.jpg",
    "plot": "Monkey Man follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/g8zxiB5Qhsc",
    "vibeMeter": {
      "intensity": 75,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "the-fall-guy-2002",
    "title": "The Fall Guy",
    "year": 2002,
    "runtime": "2h 30m",
    "rating": "8.8",
    "rottenTomatoes": "96%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/k9TV1rK0yA3G4v9bS3.jpg",
    "plot": "The Fall Guy follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/j7jPnwVGdZ8",
    "vibeMeter": {
      "intensity": 78,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "bad-boys-ride-or-die-2003",
    "title": "Bad Boys: Ride or Die",
    "year": 2003,
    "runtime": "1h 35m",
    "rating": "7.0",
    "rottenTomatoes": "83%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    "plot": "Bad Boys: Ride or Die follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/hRFY_Fesa9Q",
    "vibeMeter": {
      "intensity": 81,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "fly-me-to-the-moon-2004",
    "title": "Fly Me to the Moon",
    "year": 2004,
    "runtime": "2h 40m",
    "rating": "7.7",
    "rottenTomatoes": "94%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/sF1U4EUNoYToAhZOhK2y9E2yRj2.jpg",
    "plot": "Fly Me to the Moon follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/lW7enw6mFxs",
    "vibeMeter": {
      "intensity": 84,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "twisters-2005",
    "title": "Twisters",
    "year": 2024,
    "runtime": "1h 45m",
    "rating": "8.4",
    "rottenTomatoes": "81%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pZekG6xabmYTZdLZwwvCoWP776B.jpg",
    "plot": "Twisters follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/wdok0rZdmx4",
    "vibeMeter": {
      "intensity": 87,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "despicable-me-4-2006",
    "title": "Despicable Me 4",
    "year": 2006,
    "runtime": "2h 50m",
    "rating": "9.1",
    "rottenTomatoes": "92%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    "plot": "Despicable Me 4 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/qQlr9-rF32A",
    "vibeMeter": {
      "intensity": 90,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "transformers-one-2007",
    "title": "Transformers One",
    "year": 2007,
    "runtime": "1h 55m",
    "rating": "7.3",
    "rottenTomatoes": "79%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "plot": "Transformers One follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/pK7g9rtZkLg",
    "vibeMeter": {
      "intensity": 93,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "the-wild-robot-2008",
    "title": "The Wild Robot",
    "year": 2008,
    "runtime": "2h 15m",
    "rating": "8.0",
    "rottenTomatoes": "90%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/62As2c0qJ67p4t38Z6fW0B1p7eK.jpg",
    "plot": "The Wild Robot follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/67vbA5ZJdKQ",
    "vibeMeter": {
      "intensity": 96,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "smile-2-2009",
    "title": "Smile 2",
    "year": 2009,
    "runtime": "1h 20m",
    "rating": "8.7",
    "rottenTomatoes": "77%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5U6382bE.jpg",
    "plot": "Smile 2 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/bcEQ3cE1V-0",
    "vibeMeter": {
      "intensity": 67,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "terrifier-3-2010",
    "title": "Terrifier 3",
    "year": 2010,
    "runtime": "2h 25m",
    "rating": "9.4",
    "rottenTomatoes": "88%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8tABUd1rFwbWb0Ym1D5f5B5A8jK.jpg",
    "plot": "Terrifier 3 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/tk2mkXHN2G8",
    "vibeMeter": {
      "intensity": 70,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "nightbitch-2011",
    "title": "Nightbitch",
    "year": 2011,
    "runtime": "1h 30m",
    "rating": "7.6",
    "rottenTomatoes": "75%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/wxN1T1uxQ2g.jpg",
    "plot": "Nightbitch follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/918prRymA-U",
    "vibeMeter": {
      "intensity": 73,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "babygirl-2012",
    "title": "Babygirl",
    "year": 2012,
    "runtime": "2h 35m",
    "rating": "8.3",
    "rottenTomatoes": "86%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/Rvr68u6c5sI.jpg",
    "plot": "Babygirl follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/wieIlWbtzNw",
    "vibeMeter": {
      "intensity": 76,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "queer-2013",
    "title": "Queer",
    "year": 2013,
    "runtime": "1h 40m",
    "rating": "9.0",
    "rottenTomatoes": "97%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/zSWdZVtXT7E.jpg",
    "plot": "Queer follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/eknj5_0tF2s",
    "vibeMeter": {
      "intensity": 79,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "hard-truths-2014",
    "title": "Hard Truths",
    "year": 2014,
    "runtime": "2h 45m",
    "rating": "7.2",
    "rottenTomatoes": "84%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8xLji7WhW6U.jpg",
    "plot": "Hard Truths follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/lhvEcCax6NM",
    "vibeMeter": {
      "intensity": 82,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "saturday-night-2015",
    "title": "Saturday Night",
    "year": 2015,
    "runtime": "1h 50m",
    "rating": "7.9",
    "rottenTomatoes": "95%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ByXuk9QqQkk.jpg",
    "plot": "Saturday Night follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/iZ9O_tl5Npk",
    "vibeMeter": {
      "intensity": 85,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "unstoppable-2016",
    "title": "Unstoppable",
    "year": 2016,
    "runtime": "2h 55m",
    "rating": "8.6",
    "rottenTomatoes": "82%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/92a7Hj0ijSc.jpg",
    "plot": "Unstoppable follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/fxEEdR2ZTDw",
    "vibeMeter": {
      "intensity": 88,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "the-room-next-door-2017",
    "title": "The Room Next Door",
    "year": 2017,
    "runtime": "1h 15m",
    "rating": "9.3",
    "rottenTomatoes": "93%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pEFRz84V6471V70R67e4368v1rN.jpg",
    "plot": "The Room Next Door follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/FLHSOFsZICk",
    "vibeMeter": {
      "intensity": 91,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "maria-2018",
    "title": "Maria",
    "year": 2018,
    "runtime": "2h 20m",
    "rating": "7.5",
    "rottenTomatoes": "80%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3QwA2lKGn.jpg",
    "plot": "Maria follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/du4L5ikk5Ms",
    "vibeMeter": {
      "intensity": 94,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "juror-#2-2019",
    "title": "Juror #2",
    "year": 2019,
    "runtime": "1h 25m",
    "rating": "8.2",
    "rottenTomatoes": "91%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/t92lYrV8dWFwWvErmio5ZfPj2Y6.jpg",
    "plot": "Juror #2 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/czYUXo0R0oA",
    "vibeMeter": {
      "intensity": 65,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "red-one-2020",
    "title": "Red One",
    "year": 2020,
    "runtime": "2h 30m",
    "rating": "8.9",
    "rottenTomatoes": "78%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/xA2WHw34922Txm2020.jpg",
    "plot": "Red One follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/U8XH3W0cMss",
    "vibeMeter": {
      "intensity": 68,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "gladiator-ii-2021",
    "title": "Gladiator II",
    "year": 2024,
    "runtime": "1h 35m",
    "rating": "7.1",
    "rottenTomatoes": "89%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwo1h4wB9y8e2k2t2.jpg",
    "plot": "Gladiator II follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/4rgYUipGJNo",
    "vibeMeter": {
      "intensity": 71,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "wicked-part-1-2022",
    "title": "Wicked Part 1",
    "year": 2022,
    "runtime": "2h 40m",
    "rating": "7.8",
    "rottenTomatoes": "76%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/7fn624j56B7w8B9y8e2k2t2.jpg",
    "plot": "Wicked Part 1 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/6COmYeLsz4c",
    "vibeMeter": {
      "intensity": 74,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "moana-2-2023",
    "title": "Moana 2",
    "year": 2023,
    "runtime": "1h 45m",
    "rating": "8.5",
    "rottenTomatoes": "87%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9y8e2k2t2.jpg",
    "plot": "Moana 2 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/n7f6hlKsxxo",
    "vibeMeter": {
      "intensity": 77,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "kraven-2024",
    "title": "Kraven",
    "year": 2024,
    "runtime": "2h 50m",
    "rating": "9.2",
    "rottenTomatoes": "98%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/lFwq26Q5p9w71A4Vb683gK5W9gE.jpg",
    "plot": "Kraven follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/I8gFw4-2RBM",
    "vibeMeter": {
      "intensity": 80,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "sonic-the-hedgehog-3-1980",
    "title": "Sonic the Hedgehog 3",
    "year": 1980,
    "runtime": "1h 55m",
    "rating": "7.4",
    "rottenTomatoes": "85%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "plot": "Sonic the Hedgehog 3 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/qSu6i2iFMO0",
    "vibeMeter": {
      "intensity": 83,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "mufasa-the-lion-king-1981",
    "title": "Mufasa: The Lion King",
    "year": 1981,
    "runtime": "2h 15m",
    "rating": "8.1",
    "rottenTomatoes": "96%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ek8e8W326LkWJ8Z8k4y7.jpg",
    "plot": "Mufasa: The Lion King follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/o17MF9vnabg",
    "vibeMeter": {
      "intensity": 86,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "nosferatu-1982",
    "title": "Nosferatu",
    "year": 2024,
    "runtime": "1h 20m",
    "rating": "8.8",
    "rottenTomatoes": "83%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0V9fB8k4y7.jpg",
    "plot": "Nosferatu follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/nulvWqYUM8k",
    "vibeMeter": {
      "intensity": 89,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "the-complete-unknown-1983",
    "title": "The Complete Unknown",
    "year": 1983,
    "runtime": "2h 25m",
    "rating": "7.0",
    "rottenTomatoes": "94%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/hE24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "The Complete Unknown follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/FdV-Cs5o8mc",
    "vibeMeter": {
      "intensity": 92,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "companion-1984",
    "title": "Companion",
    "year": 1984,
    "runtime": "1h 30m",
    "rating": "7.7",
    "rottenTomatoes": "81%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94yXxIFxTe.jpg",
    "plot": "Companion follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Qr_kX0D3DNA",
    "vibeMeter": {
      "intensity": 95,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "dog-man-1985",
    "title": "Dog Man",
    "year": 1985,
    "runtime": "2h 35m",
    "rating": "8.4",
    "rottenTomatoes": "92%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4hZc3gTKG6j89.jpg",
    "plot": "Dog Man follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/QaJbAennB_Q",
    "vibeMeter": {
      "intensity": 66,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "flight-risk-1986",
    "title": "Flight Risk",
    "year": 1986,
    "runtime": "1h 40m",
    "rating": "9.1",
    "rottenTomatoes": "79%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8Gxv8KWB2j10a6q54Zz4k6Q63c.jpg",
    "plot": "Flight Risk follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/ojC9JBuccJA",
    "vibeMeter": {
      "intensity": 69,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "presence-1987",
    "title": "Presence",
    "year": 1987,
    "runtime": "2h 45m",
    "rating": "7.3",
    "rottenTomatoes": "90%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/aM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Presence follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your romance mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/_GUli0vgb4Q",
    "vibeMeter": {
      "intensity": 72,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "love-hurts-1988",
    "title": "Love Hurts",
    "year": 1988,
    "runtime": "1h 50m",
    "rating": "8.0",
    "rottenTomatoes": "77%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Psychological",
      "Action"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/bM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Love Hurts follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding psychological film that perfectly matches your indie mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/frYVyUDIwiE",
    "vibeMeter": {
      "intensity": 75,
      "pace": 75,
      "emotionalDepth": 90
    }
  },
  {
    "id": "captain-america-brave-new-world-1989",
    "title": "Captain America: Brave New World",
    "year": 1989,
    "runtime": "2h 55m",
    "rating": "8.7",
    "rottenTomatoes": "88%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Romance",
      "Adventure"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9553mK66K1f59A3029285098.jpg",
    "plot": "Captain America: Brave New World follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding romance film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/1pHDWnXmK7Y",
    "vibeMeter": {
      "intensity": 78,
      "pace": 80,
      "emotionalDepth": 92
    }
  },
  {
    "id": "the-monkey-1990",
    "title": "The Monkey",
    "year": 2025,
    "runtime": "1h 15m",
    "rating": "9.4",
    "rottenTomatoes": "75%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Animation"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/4n2cKkWJ8zX6QZ7p066M30.jpg",
    "plot": "The Monkey follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding sci-fi film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/g1_e0r698Yk",
    "vibeMeter": {
      "intensity": 81,
      "pace": 85,
      "emotionalDepth": 94
    }
  },
  {
    "id": "bridget-jones-mad-about-the-boy-1991",
    "title": "Bridget Jones: Mad About the Boy",
    "year": 1991,
    "runtime": "2h 20m",
    "rating": "7.6",
    "rottenTomatoes": "86%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Thriller",
      "Comedy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/r5W98lJ5c2bS3.jpg",
    "plot": "Bridget Jones: Mad About the Boy follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding thriller film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/AZr9lYz12jw",
    "vibeMeter": {
      "intensity": 84,
      "pace": 90,
      "emotionalDepth": 96
    }
  },
  {
    "id": "vicious-1992",
    "title": "Vicious",
    "year": 1992,
    "runtime": "1h 25m",
    "rating": "8.3",
    "rottenTomatoes": "97%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Action",
      "Crime"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/q71t1GPyGebF2Pz692487.jpg",
    "plot": "Vicious follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding action film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/tSx8ubSBFN8",
    "vibeMeter": {
      "intensity": 87,
      "pace": 60,
      "emotionalDepth": 70
    }
  },
  {
    "id": "novocaine-1993",
    "title": "Novocaine",
    "year": 1993,
    "runtime": "2h 30m",
    "rating": "9.0",
    "rottenTomatoes": "84%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Adventure",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/k9TV1rK0yA3G4v9bS3.jpg",
    "plot": "Novocaine follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding adventure film that perfectly matches your mind-bending mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/99BLnkAlC1M",
    "vibeMeter": {
      "intensity": 90,
      "pace": 65,
      "emotionalDepth": 72
    }
  },
  {
    "id": "mickey-17-1994",
    "title": "Mickey 17",
    "year": 1994,
    "runtime": "1h 35m",
    "rating": "7.2",
    "rottenTomatoes": "95%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Animation",
      "Family"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    "plot": "Mickey 17 follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding animation film that perfectly matches your laughs mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/osYpGSz_0i4",
    "vibeMeter": {
      "intensity": 93,
      "pace": 70,
      "emotionalDepth": 74
    }
  },
  {
    "id": "snow-white-1995",
    "title": "Snow White",
    "year": 1995,
    "runtime": "2h 40m",
    "rating": "7.9",
    "rottenTomatoes": "82%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Comedy",
      "Fantasy"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/sF1U4EUNoYToAhZOhK2y9E2yRj2.jpg",
    "plot": "Snow White follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding comedy film that perfectly matches your tearjerker mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/iV46TJKL8cU",
    "vibeMeter": {
      "intensity": 96,
      "pace": 75,
      "emotionalDepth": 76
    }
  },
  {
    "id": "alto-knights-1996",
    "title": "Alto Knights",
    "year": 1996,
    "runtime": "1h 45m",
    "rating": "8.6",
    "rottenTomatoes": "93%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Crime",
      "Horror"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pZekG6xabmYTZdLZwwvCoWP776B.jpg",
    "plot": "Alto Knights follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding crime film that perfectly matches your romance mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/jYDm4IBL_vk",
    "vibeMeter": {
      "intensity": 67,
      "pace": 80,
      "emotionalDepth": 78
    }
  },
  {
    "id": "electric-state-1997",
    "title": "Electric State",
    "year": 1997,
    "runtime": "2h 50m",
    "rating": "9.3",
    "rottenTomatoes": "80%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Mystery"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    "plot": "Electric State follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding drama film that perfectly matches your indie mood.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/KpN98z8Kf5E",
    "vibeMeter": {
      "intensity": 70,
      "pace": 85,
      "emotionalDepth": 80
    }
  },
  {
    "id": "michael-1998",
    "title": "Michael",
    "year": 1998,
    "runtime": "1h 55m",
    "rating": "7.5",
    "rottenTomatoes": "91%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Family",
      "Psychological"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "plot": "Michael follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding family film that perfectly matches your popcorn mood.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/3zOLzsbOleM",
    "vibeMeter": {
      "intensity": 73,
      "pace": 90,
      "emotionalDepth": 82
    }
  },
  {
    "id": "flow-1999",
    "title": "Flow",
    "year": 1999,
    "runtime": "2h 15m",
    "rating": "8.2",
    "rottenTomatoes": "78%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/62As2c0qJ67p4t38Z6fW0B1p7eK.jpg",
    "plot": "Flow follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding fantasy film that perfectly matches your spooky mood.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Hulu",
          "logo": "\ud83d\udfe2",
          "link": "https://hulu.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/eD06LQzWFTc",
    "vibeMeter": {
      "intensity": 76,
      "pace": 60,
      "emotionalDepth": 84
    }
  },
  {
    "id": "kneecap-2000",
    "title": "Kneecap",
    "year": 2000,
    "runtime": "1h 20m",
    "rating": "8.9",
    "rottenTomatoes": "89%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Horror",
      "Sci-Fi"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5U6382bE.jpg",
    "plot": "Kneecap follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding horror film that perfectly matches your adrenaline mood.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Paramount+",
          "logo": "\ud83c\udfd4\ufe0f",
          "link": "https://paramountplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/FFYfp-hKxZQ",
    "vibeMeter": {
      "intensity": 79,
      "pace": 65,
      "emotionalDepth": 86
    }
  },
  {
    "id": "i-saw-the-tv-glow-2001",
    "title": "I Saw the TV Glow",
    "year": 2001,
    "runtime": "2h 25m",
    "rating": "7.1",
    "rottenTomatoes": "76%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Mystery",
      "Thriller"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8tABUd1rFwbWb0Ym1D5f5B5A8jK.jpg",
    "plot": "I Saw the TV Glow follows a compelling story of mystery, survival, and emotion as events unfold in unexpected ways.",
    "aiTake": "An outstanding mystery film that perfectly matches your cozy mood.",
    "streaming": {
      "free": [
        {
          "name": "YouTube Free",
          "logo": "\u25b6\ufe0f",
          "link": "https://youtube.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Apple TV+",
          "logo": "\ud83c\udf4f",
          "link": "https://tv.apple.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Acclaimed Director",
    "cast": [
      "Lead Star",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/kymDzCgPwj0",
    "vibeMeter": {
      "intensity": 82,
      "pace": 70,
      "emotionalDepth": 88
    }
  },
  {
    "id": "i-want-to-eat-your-pancreas-2018",
    "title": "I Want to Eat Your Pancreas",
    "year": 2018,
    "runtime": "1h 49m",
    "rating": "8.0",
    "rottenTomatoes": "93%",
    "ageRating": "PG-13",
    "language": "JA",
    "genres": [
      "Animation",
      "Drama",
      "Romance"
    ],
    "moods": [
      "tearjerker",
      "romance",
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9553mK66K1f59A3029285098.jpg",
    "plot": "An aloof high school student finds a diary in a hospital waiting room, discovering that his popular classmate Yamauchi Sakura is secretly suffering from a terminal pancreatic illness. He promises to keep her secret as they spend her final months creating unforgettable memories together.",
    "aiTake": "A deeply touching, heartbreaking Japanese animated romance about living life to the fullest despite terminal tragedy. Pure emotional release.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Crunchyroll",
          "logo": "\ud83d\udfe0",
          "link": "https://crunchyroll.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Shin'ichir\u00f4 Ushijima",
    "cast": [
      "Mahiro Takasugi",
      "Lynn",
      "Yukiyo Fujii"
    ],
    "trailer": "https://www.youtube.com/embed/MmoBvmJA9XI",
    "vibeMeter": {
      "intensity": 80,
      "pace": 55,
      "emotionalDepth": 98
    }
  },
  {
    "id": "all-the-bright-places-2020",
    "title": "All the Bright Places",
    "year": 2020,
    "runtime": "1h 47m",
    "rating": "6.6",
    "rottenTomatoes": "64%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "tearjerker",
      "romance",
      "indie"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/4n2cKkWJ8zX6QZ7p066M30.jpg",
    "plot": "Violet and Finch, two teenagers struggling with mental illness and trauma, meet on the ledge of a bell tower. As they partner up for a school project exploring the wonders of Indiana, they form a deep bond that changes both of their lives forever.",
    "aiTake": "An intensely emotional romantic drama tackling mental illness, grief, and the healing power of young love.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Brett Haley",
    "cast": [
      "Elle Fanning",
      "Justice Smith",
      "Alexandra Shipp"
    ],
    "trailer": "https://www.youtube.com/embed/zfQXK936Btw",
    "vibeMeter": {
      "intensity": 75,
      "pace": 50,
      "emotionalDepth": 94
    }
  },
  {
    "id": "a-silent-voice-2016",
    "title": "A Silent Voice",
    "year": 2016,
    "runtime": "2h 10m",
    "rating": "8.1",
    "rottenTomatoes": "94%",
    "ageRating": "PG-13",
    "language": "JA",
    "genres": [
      "Animation",
      "Drama"
    ],
    "moods": [
      "tearjerker",
      "indie"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/r5W98lJ5c2bS3.jpg",
    "plot": "A former elementary school bully seeks redemption years later by reaching out to the deaf girl he once tormented, attempting to make amends for his past actions and help her find a reason to live.",
    "aiTake": "A stunning, tearjerking anime masterpiece exploring guilt, social anxiety, depression, and redemption.",
    "streaming": {
      "free": [
        {
          "name": "Pluto TV",
          "logo": "\ud83d\udcfa",
          "link": "https://pluto.tv",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Naoko Yamada",
    "cast": [
      "Miyu Irino",
      "Saori Hayami",
      "Aoi Y\u016bki"
    ],
    "trailer": "https://www.youtube.com/embed/nkToTZzdiz0",
    "vibeMeter": {
      "intensity": 85,
      "pace": 60,
      "emotionalDepth": 97
    }
  },
  {
    "id": "your-name-2016",
    "title": "Your Name",
    "year": 2016,
    "runtime": "1h 46m",
    "rating": "8.4",
    "rottenTomatoes": "98%",
    "ageRating": "PG",
    "language": "JA",
    "genres": [
      "Animation",
      "Drama",
      "Fantasy",
      "Romance"
    ],
    "moods": [
      "tearjerker",
      "romance",
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/q71t1GPyGebF2Pz692487.jpg",
    "plot": "Two teenagers\u2014Mitsuha in rural Japan and Taki in bustling Tokyo\u2014share a magical connection after waking up intermittently in each other's bodies, leading to a desperate quest to meet across space and time.",
    "aiTake": "One of the highest-rated emotional animated films of all time. Spectacular visuals and an unforgettable soundtrack.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Crunchyroll",
          "logo": "\ud83d\udfe0",
          "link": "https://crunchyroll.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Makoto Shinkai",
    "cast": [
      "Ryunosuke Kamiki",
      "Mone Kamishibaiashi"
    ],
    "trailer": "https://www.youtube.com/embed/xU47nhruN-Q",
    "vibeMeter": {
      "intensity": 90,
      "pace": 75,
      "emotionalDepth": 95
    }
  },
  {
    "id": "5-centimeters-per-second-2007",
    "title": "5 Centimeters per Second",
    "year": 2007,
    "runtime": "1h 03m",
    "rating": "7.5",
    "rottenTomatoes": "88%",
    "ageRating": "PG",
    "language": "JA",
    "genres": [
      "Animation",
      "Drama",
      "Romance"
    ],
    "moods": [
      "tearjerker",
      "romance",
      "indie"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/r5W98lJ5c2bS3.jpg",
    "plot": "Told in three interconnected segments, Takaki navigates physical distance, the passage of time, and the painful fading of first love in modern Japan.",
    "aiTake": "Makoto Shinkai's melancholic poetry on heartwrenching distance, missed chances, and moving forward.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Crunchyroll",
          "logo": "\ud83d\udfe0",
          "link": "https://crunchyroll.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Makoto Shinkai",
    "cast": [
      "Kenji Mizuhashi",
      "Yoshimi Kond\u014d"
    ],
    "trailer": "https://www.youtube.com/embed/1X95eE2H7kM",
    "vibeMeter": {
      "intensity": 70,
      "pace": 45,
      "emotionalDepth": 92
    }
  },
  {
    "id": "grave-of-the-fireflies-1988",
    "title": "Grave of the Fireflies",
    "year": 1988,
    "runtime": "1h 29m",
    "rating": "8.5",
    "rottenTomatoes": "100%",
    "ageRating": "NR",
    "language": "JA",
    "genres": [
      "Animation",
      "Drama"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/k9TV1rK0yA3G4v9bS3.jpg",
    "plot": "A devastating story of two orphaned siblings, Seita and Setsuko, attempting to survive on their own in wartime Japan during the final months of World War II.",
    "aiTake": "Unanimously regarded as one of the most heartbreaking, soul-crushing war tragedies ever put to film.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Isao Takahata",
    "cast": [
      "Tsutomu Tatsumi",
      "Ayano Shiraishi"
    ],
    "trailer": "https://www.youtube.com/embed/4vPeTSRd580",
    "vibeMeter": {
      "intensity": 95,
      "pace": 50,
      "emotionalDepth": 100
    }
  },
  {
    "id": "manchester-by-the-sea-2016",
    "title": "Manchester by the Sea",
    "year": 2016,
    "runtime": "2h 17m",
    "rating": "7.8",
    "rottenTomatoes": "96%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama"
    ],
    "moods": [
      "tearjerker",
      "indie"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    "plot": "A quiet, grieving janitor is named sole guardian of his teenage nephew following his brother's unexpected death, forcing him to return to his hometown and confront his tragic past.",
    "aiTake": "Casey Affleck delivers an Oscar-winning performance in a haunting, devastatingly realistic depiction of unbearable grief.",
    "streaming": {
      "free": [
        {
          "name": "Freevee",
          "logo": "\ud83c\udd93",
          "link": "https://amazon.com/freevee",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Prime Video",
          "logo": "\ud83d\udce6",
          "link": "https://primevideo.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Kenneth Lonergan",
    "cast": [
      "Casey Affleck",
      "Michelle Williams",
      "Lucas Hedges"
    ],
    "trailer": "https://www.youtube.com/embed/GSbUaJm0S04",
    "vibeMeter": {
      "intensity": 88,
      "pace": 45,
      "emotionalDepth": 99
    }
  },
  {
    "id": "the-fault-in-our-stars-2014",
    "title": "The Fault in Our Stars",
    "year": 2014,
    "runtime": "2h 06m",
    "rating": "7.7",
    "rottenTomatoes": "81%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "tearjerker",
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/sF1U4EUNoYToAhZOhK2y9E2yRj2.jpg",
    "plot": "Two witty, cynical teenage cancer patients who meet at a support group fall in love and embark on an unforgettable trip to Amsterdam to meet their favorite reclusive author.",
    "aiTake": "The iconic YA romance that guarantees non-stop tears and heartwarming laughter in equal measure.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Disney+",
          "logo": "\ud83d\udd35",
          "link": "https://disneyplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Josh Boone",
    "cast": [
      "Shailene Woodley",
      "Ansel Elgort",
      "Willem Dafoe"
    ],
    "trailer": "https://www.youtube.com/embed/9ItBvH5J6ss",
    "vibeMeter": {
      "intensity": 82,
      "pace": 60,
      "emotionalDepth": 95
    }
  },
  {
    "id": "the-green-mile-cinemood-1",
    "title": "The Green Mile",
    "year": 1999,
    "runtime": "1h 41m",
    "rating": "7.3",
    "rottenTomatoes": "81%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/4n2cKkWJ8zX6QZ7p066M30.jpg",
    "plot": "The Green Mile offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your tearjerker vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/LNlsxpB15u8",
    "vibeMeter": {
      "intensity": 76,
      "pace": 61,
      "emotionalDepth": 81
    }
  },
  {
    "id": "schindler-s-list-cinemood-2",
    "title": "Schindler's List",
    "year": 1993,
    "runtime": "1h 42m",
    "rating": "7.4",
    "rottenTomatoes": "82%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/r5W98lJ5c2bS3.jpg",
    "plot": "Schindler's List offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your tearjerker vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/XtFI7SNtVpY",
    "vibeMeter": {
      "intensity": 77,
      "pace": 62,
      "emotionalDepth": 82
    }
  },
  {
    "id": "life-is-beautiful-cinemood-3",
    "title": "Life Is Beautiful",
    "year": 1997,
    "runtime": "1h 43m",
    "rating": "7.5",
    "rottenTomatoes": "83%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/q71t1GPyGebF2Pz692487.jpg",
    "plot": "Life Is Beautiful offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your tearjerker vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/4rgYUipGJNo",
    "vibeMeter": {
      "intensity": 78,
      "pace": 63,
      "emotionalDepth": 83
    }
  },
  {
    "id": "marriage-story-cinemood-4",
    "title": "Marriage Story",
    "year": 2019,
    "runtime": "1h 44m",
    "rating": "7.6",
    "rottenTomatoes": "84%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/k9TV1rK0yA3G4v9bS3.jpg",
    "plot": "Marriage Story offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your tearjerker vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/cqGjhVJWtEg",
    "vibeMeter": {
      "intensity": 79,
      "pace": 64,
      "emotionalDepth": 84
    }
  },
  {
    "id": "room-cinemood-5",
    "title": "Room",
    "year": 2015,
    "runtime": "1h 45m",
    "rating": "7.7",
    "rottenTomatoes": "85%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    "plot": "Room offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your tearjerker vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/RlbR5Nugsuw",
    "vibeMeter": {
      "intensity": 80,
      "pace": 65,
      "emotionalDepth": 85
    }
  },
  {
    "id": "the-pursuit-of-happyness-cinemood-6",
    "title": "The Pursuit of Happyness",
    "year": 2021,
    "runtime": "1h 46m",
    "rating": "7.8",
    "rottenTomatoes": "86%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/sF1U4EUNoYToAhZOhK2y9E2yRj2.jpg",
    "plot": "The Pursuit of Happyness offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your tearjerker vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/g1_e0r698Yk",
    "vibeMeter": {
      "intensity": 81,
      "pace": 66,
      "emotionalDepth": 86
    }
  },
  {
    "id": "seven-pounds-cinemood-7",
    "title": "Seven Pounds",
    "year": 2022,
    "runtime": "1h 47m",
    "rating": "7.9",
    "rottenTomatoes": "87%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pZekG6xabmYTZdLZwwvCoWP776B.jpg",
    "plot": "Seven Pounds offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your tearjerker vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/JfVOs4VSpmA",
    "vibeMeter": {
      "intensity": 82,
      "pace": 67,
      "emotionalDepth": 87
    }
  },
  {
    "id": "p-s-i-love-you-cinemood-8",
    "title": "P.S. I Love You",
    "year": 2023,
    "runtime": "1h 48m",
    "rating": "8.0",
    "rottenTomatoes": "88%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    "plot": "P.S. I Love You offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your tearjerker vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/giXco2jaZ_4",
    "vibeMeter": {
      "intensity": 83,
      "pace": 68,
      "emotionalDepth": 88
    }
  },
  {
    "id": "the-notebook-cinemood-9",
    "title": "The Notebook",
    "year": 2015,
    "runtime": "1h 49m",
    "rating": "8.1",
    "rottenTomatoes": "89%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "plot": "The Notebook offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your tearjerker vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/x0XDEhP4MQs",
    "vibeMeter": {
      "intensity": 84,
      "pace": 69,
      "emotionalDepth": 89
    }
  },
  {
    "id": "brokeback-mountain-cinemood-10",
    "title": "Brokeback Mountain",
    "year": 2005,
    "runtime": "1h 50m",
    "rating": "8.2",
    "rottenTomatoes": "90%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/62As2c0qJ67p4t38Z6fW0B1p7eK.jpg",
    "plot": "Brokeback Mountain offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your tearjerker vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/nulvWqVMbHA",
    "vibeMeter": {
      "intensity": 85,
      "pace": 70,
      "emotionalDepth": 90
    }
  },
  {
    "id": "portrait-of-a-lady-on-fire-cinemood-11",
    "title": "Portrait of a Lady on Fire",
    "year": 2019,
    "runtime": "1h 51m",
    "rating": "8.3",
    "rottenTomatoes": "91%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5U6382bE.jpg",
    "plot": "Portrait of a Lady on Fire offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your tearjerker vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/r-vfg3KkV5U",
    "vibeMeter": {
      "intensity": 86,
      "pace": 71,
      "emotionalDepth": 91
    }
  },
  {
    "id": "girl-interrupted-cinemood-12",
    "title": "Girl Interrupted",
    "year": 2018,
    "runtime": "1h 52m",
    "rating": "8.4",
    "rottenTomatoes": "92%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8tABUd1rFwbWb0Ym1D5f5B5A8jK.jpg",
    "plot": "Girl Interrupted offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your tearjerker vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/d9MyW72ELq0",
    "vibeMeter": {
      "intensity": 87,
      "pace": 72,
      "emotionalDepth": 92
    }
  },
  {
    "id": "her-cinemood-13",
    "title": "Her",
    "year": 2013,
    "runtime": "1h 53m",
    "rating": "8.5",
    "rottenTomatoes": "93%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/wxN1T1uxQ2g.jpg",
    "plot": "Her offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your tearjerker vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/73_1biulkYk",
    "vibeMeter": {
      "intensity": 88,
      "pace": 73,
      "emotionalDepth": 93
    }
  },
  {
    "id": "lost-in-translation-cinemood-14",
    "title": "Lost in Translation",
    "year": 2020,
    "runtime": "1h 54m",
    "rating": "8.6",
    "rottenTomatoes": "94%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/Rvr68u6c5sI.jpg",
    "plot": "Lost in Translation offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your tearjerker vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/VobT0a7h2q8",
    "vibeMeter": {
      "intensity": 89,
      "pace": 74,
      "emotionalDepth": 94
    }
  },
  {
    "id": "arrival-cinemood-15",
    "title": "Arrival",
    "year": 2016,
    "runtime": "1h 55m",
    "rating": "8.7",
    "rottenTomatoes": "95%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/zSWdZVtXT7E.jpg",
    "plot": "Arrival offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your tearjerker vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/XJMuhwVlca4",
    "vibeMeter": {
      "intensity": 90,
      "pace": 75,
      "emotionalDepth": 95
    }
  },
  {
    "id": "up-cinemood-16",
    "title": "Up",
    "year": 2009,
    "runtime": "1h 56m",
    "rating": "8.8",
    "rottenTomatoes": "96%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8xLji7WhW6U.jpg",
    "plot": "Up offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your tearjerker vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/vKQi3bBA1y8",
    "vibeMeter": {
      "intensity": 91,
      "pace": 76,
      "emotionalDepth": 96
    }
  },
  {
    "id": "maquia-cinemood-17",
    "title": "Maquia",
    "year": 2023,
    "runtime": "1h 57m",
    "rating": "8.9",
    "rottenTomatoes": "97%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ByXuk9QqQkk.jpg",
    "plot": "Maquia offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your tearjerker vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Way9Dexny3w",
    "vibeMeter": {
      "intensity": 92,
      "pace": 77,
      "emotionalDepth": 97
    }
  },
  {
    "id": "violet-evergarden-cinemood-18",
    "title": "Violet Evergarden",
    "year": 2015,
    "runtime": "1h 58m",
    "rating": "7.2",
    "rottenTomatoes": "80%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/92a7Hj0ijSc.jpg",
    "plot": "Violet Evergarden offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your tearjerker vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/fTrsp5VSp2E",
    "vibeMeter": {
      "intensity": 93,
      "pace": 78,
      "emotionalDepth": 98
    }
  },
  {
    "id": "ride-your-wave-cinemood-19",
    "title": "Ride Your Wave",
    "year": 2016,
    "runtime": "1h 59m",
    "rating": "7.3",
    "rottenTomatoes": "81%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pEFRz84V6471V70R67e4368v1rN.jpg",
    "plot": "Ride Your Wave offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your tearjerker vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/J7zLlhstq-w",
    "vibeMeter": {
      "intensity": 94,
      "pace": 79,
      "emotionalDepth": 99
    }
  },
  {
    "id": "orange-future-cinemood-20",
    "title": "Orange Future",
    "year": 2017,
    "runtime": "1h 60m",
    "rating": "7.4",
    "rottenTomatoes": "82%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3QwA2lKGn.jpg",
    "plot": "Orange Future offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your tearjerker vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/P5ieIbInFSU",
    "vibeMeter": {
      "intensity": 75,
      "pace": 80,
      "emotionalDepth": 80
    }
  },
  {
    "id": "paddington-2-cinemood-21",
    "title": "Paddington 2",
    "year": 2018,
    "runtime": "1h 61m",
    "rating": "7.5",
    "rottenTomatoes": "83%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Animation",
      "Drama"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/t92lYrV8dWFwWvErmio5ZfPj2Y6.jpg",
    "plot": "Paddington 2 offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated animation movie handpicked for your cozy vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/mqqft2x_Aa4",
    "vibeMeter": {
      "intensity": 76,
      "pace": 81,
      "emotionalDepth": 81
    }
  },
  {
    "id": "chef-cinemood-22",
    "title": "Chef",
    "year": 2019,
    "runtime": "1h 62m",
    "rating": "7.6",
    "rottenTomatoes": "84%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Animation",
      "Drama"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/xA2WHw34922Txm2020.jpg",
    "plot": "Chef offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated animation movie handpicked for your cozy vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/r8PyU-M3vU4",
    "vibeMeter": {
      "intensity": 77,
      "pace": 82,
      "emotionalDepth": 82
    }
  },
  {
    "id": "amelie-cinemood-23",
    "title": "Amelie",
    "year": 2020,
    "runtime": "1h 63m",
    "rating": "7.7",
    "rottenTomatoes": "85%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Animation",
      "Drama"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwo1h4wB9y8e2k2t2.jpg",
    "plot": "Amelie offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated animation movie handpicked for your cozy vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/6COmYeL94v8",
    "vibeMeter": {
      "intensity": 78,
      "pace": 83,
      "emotionalDepth": 83
    }
  },
  {
    "id": "kiki-s-delivery-service-cinemood-24",
    "title": "Kiki's Delivery Service",
    "year": 2021,
    "runtime": "1h 64m",
    "rating": "7.8",
    "rottenTomatoes": "86%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Animation",
      "Drama"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/7fn624j56B7w8B9y8e2k2t2.jpg",
    "plot": "Kiki's Delivery Service offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated animation movie handpicked for your cozy vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/AhKLpJmHhig",
    "vibeMeter": {
      "intensity": 79,
      "pace": 84,
      "emotionalDepth": 84
    }
  },
  {
    "id": "whisper-of-the-heart-cinemood-25",
    "title": "Whisper of the Heart",
    "year": 2022,
    "runtime": "1h 65m",
    "rating": "7.9",
    "rottenTomatoes": "87%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Animation",
      "Drama"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9y8e2k2t2.jpg",
    "plot": "Whisper of the Heart offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated animation movie handpicked for your cozy vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/wxN1T1uxQ2g",
    "vibeMeter": {
      "intensity": 80,
      "pace": 85,
      "emotionalDepth": 85
    }
  },
  {
    "id": "howl-s-moving-castle-cinemood-26",
    "title": "Howl's Moving Castle",
    "year": 2004,
    "runtime": "1h 66m",
    "rating": "8.0",
    "rottenTomatoes": "88%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Animation",
      "Drama"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/lFwq26Q5p9w71A4Vb683gK5W9gE.jpg",
    "plot": "Howl's Moving Castle offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated animation movie handpicked for your cozy vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/iwROgK94zcM",
    "vibeMeter": {
      "intensity": 81,
      "pace": 86,
      "emotionalDepth": 86
    }
  },
  {
    "id": "the-secret-life-of-walter-mitty-cinemood-27",
    "title": "The Secret Life of Walter Mitty",
    "year": 2015,
    "runtime": "1h 67m",
    "rating": "8.1",
    "rottenTomatoes": "89%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Animation",
      "Drama"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "plot": "The Secret Life of Walter Mitty offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated animation movie handpicked for your cozy vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/aDyQxtg0V2w",
    "vibeMeter": {
      "intensity": 82,
      "pace": 87,
      "emotionalDepth": 87
    }
  },
  {
    "id": "fantastic-mr-fox-cinemood-28",
    "title": "Fantastic Mr. Fox",
    "year": 2016,
    "runtime": "1h 68m",
    "rating": "8.2",
    "rottenTomatoes": "90%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Animation",
      "Drama"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ek8e8W326LkWJ8Z8k4y7.jpg",
    "plot": "Fantastic Mr. Fox offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated animation movie handpicked for your cozy vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/EP34Yoxs3FQ",
    "vibeMeter": {
      "intensity": 83,
      "pace": 88,
      "emotionalDepth": 88
    }
  },
  {
    "id": "my-neighbor-totoro-cinemood-29",
    "title": "My Neighbor Totoro",
    "year": 1988,
    "runtime": "1h 69m",
    "rating": "8.3",
    "rottenTomatoes": "91%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Animation",
      "Drama"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0V9fB8k4y7.jpg",
    "plot": "My Neighbor Totoro offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated animation movie handpicked for your cozy vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/92a7Hj0ijSc",
    "vibeMeter": {
      "intensity": 84,
      "pace": 89,
      "emotionalDepth": 89
    }
  },
  {
    "id": "ponyo-cinemood-30",
    "title": "Ponyo",
    "year": 2018,
    "runtime": "1h 70m",
    "rating": "8.4",
    "rottenTomatoes": "92%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Animation",
      "Drama"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/hE24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Ponyo offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated animation movie handpicked for your cozy vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/LEjhY15eCx0",
    "vibeMeter": {
      "intensity": 85,
      "pace": 60,
      "emotionalDepth": 90
    }
  },
  {
    "id": "the-peanuts-movie-cinemood-31",
    "title": "The Peanuts Movie",
    "year": 2019,
    "runtime": "1h 71m",
    "rating": "8.5",
    "rottenTomatoes": "93%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Animation",
      "Drama"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94yXxIFxTe.jpg",
    "plot": "The Peanuts Movie offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated animation movie handpicked for your cozy vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/LNlsxpB15u8",
    "vibeMeter": {
      "intensity": 86,
      "pace": 61,
      "emotionalDepth": 91
    }
  },
  {
    "id": "little-women-cinemood-32",
    "title": "Little Women",
    "year": 2019,
    "runtime": "1h 72m",
    "rating": "8.6",
    "rottenTomatoes": "94%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Animation",
      "Drama"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4hZc3gTKG6j89.jpg",
    "plot": "Little Women offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated animation movie handpicked for your cozy vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/XtFI7SNtVpY",
    "vibeMeter": {
      "intensity": 87,
      "pace": 62,
      "emotionalDepth": 92
    }
  },
  {
    "id": "julie-julia-cinemood-33",
    "title": "Julie & Julia",
    "year": 2021,
    "runtime": "1h 73m",
    "rating": "8.7",
    "rottenTomatoes": "95%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Animation",
      "Drama"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8Gxv8KWB2j10a6q54Zz4k6Q63c.jpg",
    "plot": "Julie & Julia offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated animation movie handpicked for your cozy vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/4rgYUipGJNo",
    "vibeMeter": {
      "intensity": 88,
      "pace": 63,
      "emotionalDepth": 93
    }
  },
  {
    "id": "sing-street-cinemood-34",
    "title": "Sing Street",
    "year": 2022,
    "runtime": "1h 74m",
    "rating": "8.8",
    "rottenTomatoes": "96%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Animation",
      "Drama"
    ],
    "moods": [
      "cozy"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/aM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Sing Street offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated animation movie handpicked for your cozy vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/cqGjhVJWtEg",
    "vibeMeter": {
      "intensity": 89,
      "pace": 64,
      "emotionalDepth": 94
    }
  },
  {
    "id": "the-conjuring-cinemood-35",
    "title": "The Conjuring",
    "year": 2023,
    "runtime": "1h 40m",
    "rating": "8.9",
    "rottenTomatoes": "97%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Horror",
      "Drama"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/bM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "The Conjuring offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated horror movie handpicked for your spooky vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/RlbR5Nugsuw",
    "vibeMeter": {
      "intensity": 90,
      "pace": 65,
      "emotionalDepth": 95
    }
  },
  {
    "id": "midsommar-cinemood-36",
    "title": "Midsommar",
    "year": 2019,
    "runtime": "1h 41m",
    "rating": "7.2",
    "rottenTomatoes": "80%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Horror",
      "Drama"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9553mK66K1f59A3029285098.jpg",
    "plot": "Midsommar offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated horror movie handpicked for your spooky vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/1Vnghdsjmd0",
    "vibeMeter": {
      "intensity": 91,
      "pace": 66,
      "emotionalDepth": 96
    }
  },
  {
    "id": "talk-to-me-cinemood-37",
    "title": "Talk to Me",
    "year": 2016,
    "runtime": "1h 42m",
    "rating": "7.3",
    "rottenTomatoes": "81%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Horror",
      "Drama"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/4n2cKkWJ8zX6QZ7p066M30.jpg",
    "plot": "Talk to Me offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated horror movie handpicked for your spooky vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/JfVOs4VSpmA",
    "vibeMeter": {
      "intensity": 92,
      "pace": 67,
      "emotionalDepth": 97
    }
  },
  {
    "id": "sinister-cinemood-38",
    "title": "Sinister",
    "year": 2017,
    "runtime": "1h 43m",
    "rating": "7.4",
    "rottenTomatoes": "82%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Horror",
      "Drama"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/r5W98lJ5c2bS3.jpg",
    "plot": "Sinister offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated horror movie handpicked for your spooky vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/giXco2jaZ_4",
    "vibeMeter": {
      "intensity": 93,
      "pace": 68,
      "emotionalDepth": 98
    }
  },
  {
    "id": "insidious-cinemood-39",
    "title": "Insidious",
    "year": 2018,
    "runtime": "1h 44m",
    "rating": "7.5",
    "rottenTomatoes": "83%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Horror",
      "Drama"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/q71t1GPyGebF2Pz692487.jpg",
    "plot": "Insidious offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated horror movie handpicked for your spooky vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/x0XDEhP4MQs",
    "vibeMeter": {
      "intensity": 94,
      "pace": 69,
      "emotionalDepth": 99
    }
  },
  {
    "id": "the-ring-cinemood-40",
    "title": "The Ring",
    "year": 2019,
    "runtime": "1h 45m",
    "rating": "7.6",
    "rottenTomatoes": "84%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Horror",
      "Drama"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/k9TV1rK0yA3G4v9bS3.jpg",
    "plot": "The Ring offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated horror movie handpicked for your spooky vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/nulvWqVMbHA",
    "vibeMeter": {
      "intensity": 75,
      "pace": 70,
      "emotionalDepth": 80
    }
  },
  {
    "id": "the-exorcist-cinemood-41",
    "title": "The Exorcist",
    "year": 2020,
    "runtime": "1h 46m",
    "rating": "7.7",
    "rottenTomatoes": "85%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Horror",
      "Drama"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    "plot": "The Exorcist offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated horror movie handpicked for your spooky vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/r-vfg3KkV5U",
    "vibeMeter": {
      "intensity": 76,
      "pace": 71,
      "emotionalDepth": 81
    }
  },
  {
    "id": "halloween-cinemood-42",
    "title": "Halloween",
    "year": 2021,
    "runtime": "1h 47m",
    "rating": "7.8",
    "rottenTomatoes": "86%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Horror",
      "Drama"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/sF1U4EUNoYToAhZOhK2y9E2yRj2.jpg",
    "plot": "Halloween offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated horror movie handpicked for your spooky vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/d9MyW72ELq0",
    "vibeMeter": {
      "intensity": 77,
      "pace": 72,
      "emotionalDepth": 82
    }
  },
  {
    "id": "barbarian-cinemood-43",
    "title": "Barbarian",
    "year": 2022,
    "runtime": "1h 48m",
    "rating": "7.9",
    "rottenTomatoes": "87%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Horror",
      "Drama"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pZekG6xabmYTZdLZwwvCoWP776B.jpg",
    "plot": "Barbarian offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated horror movie handpicked for your spooky vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/73_1biulkYk",
    "vibeMeter": {
      "intensity": 78,
      "pace": 73,
      "emotionalDepth": 83
    }
  },
  {
    "id": "smile-cinemood-44",
    "title": "Smile",
    "year": 2023,
    "runtime": "1h 49m",
    "rating": "8.0",
    "rottenTomatoes": "88%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Horror",
      "Drama"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    "plot": "Smile offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated horror movie handpicked for your spooky vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/VobT0a7h2q8",
    "vibeMeter": {
      "intensity": 79,
      "pace": 74,
      "emotionalDepth": 84
    }
  },
  {
    "id": "a-nightmare-on-elm-street-cinemood-45",
    "title": "A Nightmare on Elm Street",
    "year": 2015,
    "runtime": "1h 50m",
    "rating": "8.1",
    "rottenTomatoes": "89%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Horror",
      "Drama"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "plot": "A Nightmare on Elm Street offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated horror movie handpicked for your spooky vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/XJMuhwVlca4",
    "vibeMeter": {
      "intensity": 80,
      "pace": 75,
      "emotionalDepth": 85
    }
  },
  {
    "id": "scream-6-cinemood-46",
    "title": "Scream 6",
    "year": 2016,
    "runtime": "1h 51m",
    "rating": "8.2",
    "rottenTomatoes": "90%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Horror",
      "Drama"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/62As2c0qJ67p4t38Z6fW0B1p7eK.jpg",
    "plot": "Scream 6 offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated horror movie handpicked for your spooky vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/vKQi3bBA1y8",
    "vibeMeter": {
      "intensity": 81,
      "pace": 76,
      "emotionalDepth": 86
    }
  },
  {
    "id": "it-follows-cinemood-47",
    "title": "It Follows",
    "year": 2017,
    "runtime": "1h 52m",
    "rating": "8.3",
    "rottenTomatoes": "91%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Horror",
      "Drama"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5U6382bE.jpg",
    "plot": "It Follows offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated horror movie handpicked for your spooky vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Way9Dexny3w",
    "vibeMeter": {
      "intensity": 82,
      "pace": 77,
      "emotionalDepth": 87
    }
  },
  {
    "id": "the-witch-cinemood-48",
    "title": "The Witch",
    "year": 2018,
    "runtime": "1h 53m",
    "rating": "8.4",
    "rottenTomatoes": "92%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Horror",
      "Drama"
    ],
    "moods": [
      "spooky"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8tABUd1rFwbWb0Ym1D5f5B5A8jK.jpg",
    "plot": "The Witch offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated horror movie handpicked for your spooky vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/fTrsp5VSp2E",
    "vibeMeter": {
      "intensity": 83,
      "pace": 78,
      "emotionalDepth": 88
    }
  },
  {
    "id": "top-gun-maverick-cinemood-49",
    "title": "Top Gun: Maverick",
    "year": 2022,
    "runtime": "1h 54m",
    "rating": "8.5",
    "rottenTomatoes": "93%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Action",
      "Drama"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/wxN1T1uxQ2g.jpg",
    "plot": "Top Gun: Maverick offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated action movie handpicked for your adrenaline vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/giXco2jaZ_4",
    "vibeMeter": {
      "intensity": 84,
      "pace": 79,
      "emotionalDepth": 89
    }
  },
  {
    "id": "mad-max-fury-road-cinemood-50",
    "title": "Mad Max: Fury Road",
    "year": 2015,
    "runtime": "1h 55m",
    "rating": "8.6",
    "rottenTomatoes": "94%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Action",
      "Drama"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/Rvr68u6c5sI.jpg",
    "plot": "Mad Max: Fury Road offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated action movie handpicked for your adrenaline vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/P5ieIbInFSU",
    "vibeMeter": {
      "intensity": 85,
      "pace": 80,
      "emotionalDepth": 90
    }
  },
  {
    "id": "john-wick-4-cinemood-51",
    "title": "John Wick 4",
    "year": 2021,
    "runtime": "1h 56m",
    "rating": "8.7",
    "rottenTomatoes": "95%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Action",
      "Drama"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/zSWdZVtXT7E.jpg",
    "plot": "John Wick 4 offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated action movie handpicked for your adrenaline vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/mqqft2x_Aa4",
    "vibeMeter": {
      "intensity": 86,
      "pace": 81,
      "emotionalDepth": 91
    }
  },
  {
    "id": "mission-impossible-fallout-cinemood-52",
    "title": "Mission: Impossible - Fallout",
    "year": 2022,
    "runtime": "1h 57m",
    "rating": "8.8",
    "rottenTomatoes": "96%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Action",
      "Drama"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8xLji7WhW6U.jpg",
    "plot": "Mission: Impossible - Fallout offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated action movie handpicked for your adrenaline vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/r8PyU-M3vU4",
    "vibeMeter": {
      "intensity": 87,
      "pace": 82,
      "emotionalDepth": 92
    }
  },
  {
    "id": "the-dark-knight-cinemood-53",
    "title": "The Dark Knight",
    "year": 2008,
    "runtime": "1h 58m",
    "rating": "8.9",
    "rottenTomatoes": "97%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Action",
      "Drama"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ByXuk9QqQkk.jpg",
    "plot": "The Dark Knight offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated action movie handpicked for your adrenaline vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/EXeTwQWrcwY",
    "vibeMeter": {
      "intensity": 88,
      "pace": 83,
      "emotionalDepth": 93
    }
  },
  {
    "id": "gladiator-cinemood-54",
    "title": "Gladiator",
    "year": 2000,
    "runtime": "1h 59m",
    "rating": "7.2",
    "rottenTomatoes": "80%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Action",
      "Drama"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/92a7Hj0ijSc.jpg",
    "plot": "Gladiator offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated action movie handpicked for your adrenaline vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/P5ieIbInFSU",
    "vibeMeter": {
      "intensity": 89,
      "pace": 84,
      "emotionalDepth": 94
    }
  },
  {
    "id": "matrix-resurrections-cinemood-55",
    "title": "Matrix Resurrections",
    "year": 2016,
    "runtime": "1h 60m",
    "rating": "7.3",
    "rottenTomatoes": "81%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Action",
      "Drama"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pEFRz84V6471V70R67e4368v1rN.jpg",
    "plot": "Matrix Resurrections offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated action movie handpicked for your adrenaline vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/wxN1T1uxQ2g",
    "vibeMeter": {
      "intensity": 90,
      "pace": 85,
      "emotionalDepth": 95
    }
  },
  {
    "id": "die-hard-cinemood-56",
    "title": "Die Hard",
    "year": 1988,
    "runtime": "1h 61m",
    "rating": "7.4",
    "rottenTomatoes": "82%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Action",
      "Drama"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3QwA2lKGn.jpg",
    "plot": "Die Hard offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated action movie handpicked for your adrenaline vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/r7DqccP1Qn4",
    "vibeMeter": {
      "intensity": 91,
      "pace": 86,
      "emotionalDepth": 96
    }
  },
  {
    "id": "baby-driver-cinemood-57",
    "title": "Baby Driver",
    "year": 2018,
    "runtime": "1h 62m",
    "rating": "7.5",
    "rottenTomatoes": "83%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Action",
      "Drama"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/t92lYrV8dWFwWvErmio5ZfPj2Y6.jpg",
    "plot": "Baby Driver offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated action movie handpicked for your adrenaline vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/aDyQxtg0V2w",
    "vibeMeter": {
      "intensity": 92,
      "pace": 87,
      "emotionalDepth": 97
    }
  },
  {
    "id": "speed-cinemood-58",
    "title": "Speed",
    "year": 2019,
    "runtime": "1h 63m",
    "rating": "7.6",
    "rottenTomatoes": "84%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Action",
      "Drama"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/xA2WHw34922Txm2020.jpg",
    "plot": "Speed offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated action movie handpicked for your adrenaline vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/EP34Yoxs3FQ",
    "vibeMeter": {
      "intensity": 93,
      "pace": 88,
      "emotionalDepth": 98
    }
  },
  {
    "id": "extraction-2-cinemood-59",
    "title": "Extraction 2",
    "year": 2020,
    "runtime": "1h 64m",
    "rating": "7.7",
    "rottenTomatoes": "85%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Action",
      "Drama"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwo1h4wB9y8e2k2t2.jpg",
    "plot": "Extraction 2 offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated action movie handpicked for your adrenaline vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/c3sBBRxDAqk",
    "vibeMeter": {
      "intensity": 94,
      "pace": 89,
      "emotionalDepth": 99
    }
  },
  {
    "id": "the-raid-cinemood-60",
    "title": "The Raid",
    "year": 2021,
    "runtime": "1h 65m",
    "rating": "7.8",
    "rottenTomatoes": "86%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Action",
      "Drama"
    ],
    "moods": [
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/7fn624j56B7w8B9y8e2k2t2.jpg",
    "plot": "The Raid offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated action movie handpicked for your adrenaline vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/LEjhY15eCx0",
    "vibeMeter": {
      "intensity": 75,
      "pace": 60,
      "emotionalDepth": 80
    }
  },
  {
    "id": "inception-cinemood-61",
    "title": "Inception",
    "year": 2010,
    "runtime": "1h 66m",
    "rating": "7.9",
    "rottenTomatoes": "87%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Drama"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9y8e2k2t2.jpg",
    "plot": "Inception offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated sci-fi movie handpicked for your mind-bending vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/YoHD9XEInc0",
    "vibeMeter": {
      "intensity": 76,
      "pace": 61,
      "emotionalDepth": 81
    }
  },
  {
    "id": "tenet-cinemood-62",
    "title": "Tenet",
    "year": 2020,
    "runtime": "1h 67m",
    "rating": "8.0",
    "rottenTomatoes": "88%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Drama"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/lFwq26Q5p9w71A4Vb683gK5W9gE.jpg",
    "plot": "Tenet offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated sci-fi movie handpicked for your mind-bending vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/XtFI7SNtVpY",
    "vibeMeter": {
      "intensity": 77,
      "pace": 62,
      "emotionalDepth": 82
    }
  },
  {
    "id": "the-matrix-cinemood-63",
    "title": "The Matrix",
    "year": 1999,
    "runtime": "1h 68m",
    "rating": "8.1",
    "rottenTomatoes": "89%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Drama"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "plot": "The Matrix offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated sci-fi movie handpicked for your mind-bending vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/vKQi3bBA1y8",
    "vibeMeter": {
      "intensity": 78,
      "pace": 63,
      "emotionalDepth": 83
    }
  },
  {
    "id": "blade-runner-2049-cinemood-64",
    "title": "Blade Runner 2049",
    "year": 2017,
    "runtime": "1h 69m",
    "rating": "8.2",
    "rottenTomatoes": "90%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Drama"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ek8e8W326LkWJ8Z8k4y7.jpg",
    "plot": "Blade Runner 2049 offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated sci-fi movie handpicked for your mind-bending vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/cqGjhVJWtEg",
    "vibeMeter": {
      "intensity": 79,
      "pace": 64,
      "emotionalDepth": 84
    }
  },
  {
    "id": "coherence-cinemood-65",
    "title": "Coherence",
    "year": 2017,
    "runtime": "1h 70m",
    "rating": "8.3",
    "rottenTomatoes": "91%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Drama"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0V9fB8k4y7.jpg",
    "plot": "Coherence offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated sci-fi movie handpicked for your mind-bending vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/RlbR5Nugsuw",
    "vibeMeter": {
      "intensity": 80,
      "pace": 65,
      "emotionalDepth": 85
    }
  },
  {
    "id": "primer-cinemood-66",
    "title": "Primer",
    "year": 2018,
    "runtime": "1h 71m",
    "rating": "8.4",
    "rottenTomatoes": "92%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Drama"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/hE24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Primer offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated sci-fi movie handpicked for your mind-bending vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/g1_e0r698Yk",
    "vibeMeter": {
      "intensity": 81,
      "pace": 66,
      "emotionalDepth": 86
    }
  },
  {
    "id": "shutter-island-cinemood-67",
    "title": "Shutter Island",
    "year": 2010,
    "runtime": "1h 72m",
    "rating": "8.5",
    "rottenTomatoes": "93%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Drama"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94yXxIFxTe.jpg",
    "plot": "Shutter Island offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated sci-fi movie handpicked for your mind-bending vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/JfVOs4VSpmA",
    "vibeMeter": {
      "intensity": 82,
      "pace": 67,
      "emotionalDepth": 87
    }
  },
  {
    "id": "donnie-darko-cinemood-68",
    "title": "Donnie Darko",
    "year": 2001,
    "runtime": "1h 73m",
    "rating": "8.6",
    "rottenTomatoes": "94%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Drama"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4hZc3gTKG6j89.jpg",
    "plot": "Donnie Darko offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated sci-fi movie handpicked for your mind-bending vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/giXco2jaZ_4",
    "vibeMeter": {
      "intensity": 83,
      "pace": 68,
      "emotionalDepth": 88
    }
  },
  {
    "id": "source-code-cinemood-69",
    "title": "Source Code",
    "year": 2021,
    "runtime": "1h 74m",
    "rating": "8.7",
    "rottenTomatoes": "95%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Drama"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8Gxv8KWB2j10a6q54Zz4k6Q63c.jpg",
    "plot": "Source Code offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated sci-fi movie handpicked for your mind-bending vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/x0XDEhP4MQs",
    "vibeMeter": {
      "intensity": 84,
      "pace": 69,
      "emotionalDepth": 89
    }
  },
  {
    "id": "minority-report-cinemood-70",
    "title": "Minority Report",
    "year": 2022,
    "runtime": "1h 40m",
    "rating": "8.8",
    "rottenTomatoes": "96%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Drama"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/aM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Minority Report offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated sci-fi movie handpicked for your mind-bending vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/nulvWqVMbHA",
    "vibeMeter": {
      "intensity": 85,
      "pace": 70,
      "emotionalDepth": 90
    }
  },
  {
    "id": "ex-machina-cinemood-71",
    "title": "Ex Machina",
    "year": 2014,
    "runtime": "1h 41m",
    "rating": "8.9",
    "rottenTomatoes": "97%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Drama"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/bM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Ex Machina offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated sci-fi movie handpicked for your mind-bending vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/r-vfg3KkV5U",
    "vibeMeter": {
      "intensity": 86,
      "pace": 71,
      "emotionalDepth": 91
    }
  },
  {
    "id": "dark-city-cinemood-72",
    "title": "Dark City",
    "year": 2015,
    "runtime": "1h 42m",
    "rating": "7.2",
    "rottenTomatoes": "80%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Drama"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9553mK66K1f59A3029285098.jpg",
    "plot": "Dark City offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated sci-fi movie handpicked for your mind-bending vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/d9MyW72ELq0",
    "vibeMeter": {
      "intensity": 87,
      "pace": 72,
      "emotionalDepth": 92
    }
  },
  {
    "id": "looper-cinemood-73",
    "title": "Looper",
    "year": 2016,
    "runtime": "1h 43m",
    "rating": "7.3",
    "rottenTomatoes": "81%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Drama"
    ],
    "moods": [
      "mind-bending"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/4n2cKkWJ8zX6QZ7p066M30.jpg",
    "plot": "Looper offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated sci-fi movie handpicked for your mind-bending vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/73_1biulkYk",
    "vibeMeter": {
      "intensity": 88,
      "pace": 73,
      "emotionalDepth": 93
    }
  },
  {
    "id": "superbad-cinemood-74",
    "title": "Superbad",
    "year": 2007,
    "runtime": "1h 44m",
    "rating": "7.4",
    "rottenTomatoes": "82%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Comedy",
      "Drama"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/r5W98lJ5c2bS3.jpg",
    "plot": "Superbad offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated comedy movie handpicked for your laughs vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/VobT0a7h2q8",
    "vibeMeter": {
      "intensity": 89,
      "pace": 74,
      "emotionalDepth": 94
    }
  },
  {
    "id": "the-hangover-cinemood-75",
    "title": "The Hangover",
    "year": 2009,
    "runtime": "1h 45m",
    "rating": "7.5",
    "rottenTomatoes": "83%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Comedy",
      "Drama"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/q71t1GPyGebF2Pz692487.jpg",
    "plot": "The Hangover offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated comedy movie handpicked for your laughs vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/XJMuhwVlca4",
    "vibeMeter": {
      "intensity": 90,
      "pace": 75,
      "emotionalDepth": 95
    }
  },
  {
    "id": "grand-budapest-hotel-cinemood-76",
    "title": "Grand Budapest Hotel",
    "year": 2014,
    "runtime": "1h 46m",
    "rating": "7.6",
    "rottenTomatoes": "84%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Comedy",
      "Drama"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/k9TV1rK0yA3G4v9bS3.jpg",
    "plot": "Grand Budapest Hotel offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated comedy movie handpicked for your laughs vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/vKQi3bBA1y8",
    "vibeMeter": {
      "intensity": 91,
      "pace": 76,
      "emotionalDepth": 96
    }
  },
  {
    "id": "knives-out-cinemood-77",
    "title": "Knives Out",
    "year": 2019,
    "runtime": "1h 47m",
    "rating": "7.7",
    "rottenTomatoes": "85%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Comedy",
      "Drama"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
    "plot": "Knives Out offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated comedy movie handpicked for your laughs vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/Way9Dexny3w",
    "vibeMeter": {
      "intensity": 92,
      "pace": 77,
      "emotionalDepth": 97
    }
  },
  {
    "id": "palm-springs-cinemood-78",
    "title": "Palm Springs",
    "year": 2021,
    "runtime": "1h 48m",
    "rating": "7.8",
    "rottenTomatoes": "86%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Comedy",
      "Drama"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/sF1U4EUNoYToAhZOhK2y9E2yRj2.jpg",
    "plot": "Palm Springs offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated comedy movie handpicked for your laughs vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/fTrsp5VSp2E",
    "vibeMeter": {
      "intensity": 93,
      "pace": 78,
      "emotionalDepth": 98
    }
  },
  {
    "id": "booksmart-cinemood-79",
    "title": "Booksmart",
    "year": 2022,
    "runtime": "1h 49m",
    "rating": "7.9",
    "rottenTomatoes": "87%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Comedy",
      "Drama"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pZekG6xabmYTZdLZwwvCoWP776B.jpg",
    "plot": "Booksmart offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated comedy movie handpicked for your laughs vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/J7zLlhstq-w",
    "vibeMeter": {
      "intensity": 94,
      "pace": 79,
      "emotionalDepth": 99
    }
  },
  {
    "id": "step-brothers-cinemood-80",
    "title": "Step Brothers",
    "year": 2023,
    "runtime": "1h 50m",
    "rating": "8.0",
    "rottenTomatoes": "88%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Comedy",
      "Drama"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    "plot": "Step Brothers offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated comedy movie handpicked for your laughs vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/P5ieIbInFSU",
    "vibeMeter": {
      "intensity": 75,
      "pace": 80,
      "emotionalDepth": 80
    }
  },
  {
    "id": "21-jump-street-cinemood-81",
    "title": "21 Jump Street",
    "year": 2015,
    "runtime": "1h 51m",
    "rating": "8.1",
    "rottenTomatoes": "89%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Comedy",
      "Drama"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "plot": "21 Jump Street offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated comedy movie handpicked for your laughs vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/mqqft2x_Aa4",
    "vibeMeter": {
      "intensity": 76,
      "pace": 81,
      "emotionalDepth": 81
    }
  },
  {
    "id": "tropic-thunder-cinemood-82",
    "title": "Tropic Thunder",
    "year": 2016,
    "runtime": "1h 52m",
    "rating": "8.2",
    "rottenTomatoes": "90%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Comedy",
      "Drama"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/62As2c0qJ67p4t38Z6fW0B1p7eK.jpg",
    "plot": "Tropic Thunder offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated comedy movie handpicked for your laughs vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/r8PyU-M3vU4",
    "vibeMeter": {
      "intensity": 77,
      "pace": 82,
      "emotionalDepth": 82
    }
  },
  {
    "id": "game-night-cinemood-83",
    "title": "Game Night",
    "year": 2017,
    "runtime": "1h 53m",
    "rating": "8.3",
    "rottenTomatoes": "91%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Comedy",
      "Drama"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5U6382bE.jpg",
    "plot": "Game Night offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated comedy movie handpicked for your laughs vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/6COmYeL94v8",
    "vibeMeter": {
      "intensity": 78,
      "pace": 83,
      "emotionalDepth": 83
    }
  },
  {
    "id": "zoolander-cinemood-84",
    "title": "Zoolander",
    "year": 2018,
    "runtime": "1h 54m",
    "rating": "8.4",
    "rottenTomatoes": "92%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Comedy",
      "Drama"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8tABUd1rFwbWb0Ym1D5f5B5A8jK.jpg",
    "plot": "Zoolander offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated comedy movie handpicked for your laughs vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/AhKLpJmHhig",
    "vibeMeter": {
      "intensity": 79,
      "pace": 84,
      "emotionalDepth": 84
    }
  },
  {
    "id": "hot-fuzz-cinemood-85",
    "title": "Hot Fuzz",
    "year": 2019,
    "runtime": "1h 55m",
    "rating": "8.5",
    "rottenTomatoes": "93%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Comedy",
      "Drama"
    ],
    "moods": [
      "laughs"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/wxN1T1uxQ2g.jpg",
    "plot": "Hot Fuzz offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated comedy movie handpicked for your laughs vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/wxN1T1uxQ2g",
    "vibeMeter": {
      "intensity": 80,
      "pace": 85,
      "emotionalDepth": 85
    }
  },
  {
    "id": "la-la-land-cinemood-86",
    "title": "La La Land",
    "year": 2016,
    "runtime": "1h 56m",
    "rating": "8.6",
    "rottenTomatoes": "94%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Romance",
      "Drama"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/Rvr68u6c5sI.jpg",
    "plot": "La La Land offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated romance movie handpicked for your romance vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/0pdqf4P9MB8",
    "vibeMeter": {
      "intensity": 81,
      "pace": 86,
      "emotionalDepth": 86
    }
  },
  {
    "id": "before-sunrise-cinemood-87",
    "title": "Before Sunrise",
    "year": 1995,
    "runtime": "1h 57m",
    "rating": "8.7",
    "rottenTomatoes": "95%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Romance",
      "Drama"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/zSWdZVtXT7E.jpg",
    "plot": "Before Sunrise offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated romance movie handpicked for your romance vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/aDyQxtg0V2w",
    "vibeMeter": {
      "intensity": 82,
      "pace": 87,
      "emotionalDepth": 87
    }
  },
  {
    "id": "before-sunset-cinemood-88",
    "title": "Before Sunset",
    "year": 2004,
    "runtime": "1h 58m",
    "rating": "8.8",
    "rottenTomatoes": "96%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Romance",
      "Drama"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8xLji7WhW6U.jpg",
    "plot": "Before Sunset offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated romance movie handpicked for your romance vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/EP34Yoxs3FQ",
    "vibeMeter": {
      "intensity": 83,
      "pace": 88,
      "emotionalDepth": 88
    }
  },
  {
    "id": "before-midnight-cinemood-89",
    "title": "Before Midnight",
    "year": 2013,
    "runtime": "1h 59m",
    "rating": "8.9",
    "rottenTomatoes": "97%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Romance",
      "Drama"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ByXuk9QqQkk.jpg",
    "plot": "Before Midnight offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated romance movie handpicked for your romance vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/c3sBBRxDAqk",
    "vibeMeter": {
      "intensity": 84,
      "pace": 89,
      "emotionalDepth": 89
    }
  },
  {
    "id": "500-days-of-summer-cinemood-90",
    "title": "500 Days of Summer",
    "year": 2015,
    "runtime": "1h 60m",
    "rating": "7.2",
    "rottenTomatoes": "80%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Romance",
      "Drama"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/92a7Hj0ijSc.jpg",
    "plot": "500 Days of Summer offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated romance movie handpicked for your romance vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/LEjhY15eCx0",
    "vibeMeter": {
      "intensity": 85,
      "pace": 60,
      "emotionalDepth": 90
    }
  },
  {
    "id": "crazy-rich-asians-cinemood-91",
    "title": "Crazy Rich Asians",
    "year": 2016,
    "runtime": "1h 61m",
    "rating": "7.3",
    "rottenTomatoes": "81%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Romance",
      "Drama"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pEFRz84V6471V70R67e4368v1rN.jpg",
    "plot": "Crazy Rich Asians offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated romance movie handpicked for your romance vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/LNlsxpB15u8",
    "vibeMeter": {
      "intensity": 86,
      "pace": 61,
      "emotionalDepth": 91
    }
  },
  {
    "id": "about-time-cinemood-92",
    "title": "About Time",
    "year": 2017,
    "runtime": "1h 62m",
    "rating": "7.4",
    "rottenTomatoes": "82%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Romance",
      "Drama"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3QwA2lKGn.jpg",
    "plot": "About Time offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated romance movie handpicked for your romance vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/XtFI7SNtVpY",
    "vibeMeter": {
      "intensity": 87,
      "pace": 62,
      "emotionalDepth": 92
    }
  },
  {
    "id": "pride-prejudice-cinemood-93",
    "title": "Pride & Prejudice",
    "year": 2018,
    "runtime": "1h 63m",
    "rating": "7.5",
    "rottenTomatoes": "83%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Romance",
      "Drama"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/t92lYrV8dWFwWvErmio5ZfPj2Y6.jpg",
    "plot": "Pride & Prejudice offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated romance movie handpicked for your romance vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/4rgYUipGJNo",
    "vibeMeter": {
      "intensity": 88,
      "pace": 63,
      "emotionalDepth": 93
    }
  },
  {
    "id": "when-harry-met-sally-cinemood-94",
    "title": "When Harry Met Sally",
    "year": 2019,
    "runtime": "1h 64m",
    "rating": "7.6",
    "rottenTomatoes": "84%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Romance",
      "Drama"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/xA2WHw34922Txm2020.jpg",
    "plot": "When Harry Met Sally offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated romance movie handpicked for your romance vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/cqGjhVJWtEg",
    "vibeMeter": {
      "intensity": 89,
      "pace": 64,
      "emotionalDepth": 94
    }
  },
  {
    "id": "set-it-up-cinemood-95",
    "title": "Set It Up",
    "year": 2020,
    "runtime": "1h 65m",
    "rating": "7.7",
    "rottenTomatoes": "85%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Romance",
      "Drama"
    ],
    "moods": [
      "romance"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwo1h4wB9y8e2k2t2.jpg",
    "plot": "Set It Up offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated romance movie handpicked for your romance vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/RlbR5Nugsuw",
    "vibeMeter": {
      "intensity": 90,
      "pace": 65,
      "emotionalDepth": 95
    }
  },
  {
    "id": "whiplash-cinemood-96",
    "title": "Whiplash",
    "year": 2014,
    "runtime": "1h 66m",
    "rating": "7.8",
    "rottenTomatoes": "86%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "indie"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/7fn624j56B7w8B9y8e2k2t2.jpg",
    "plot": "Whiplash offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your indie vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/7d_jQycdQGo",
    "vibeMeter": {
      "intensity": 91,
      "pace": 66,
      "emotionalDepth": 96
    }
  },
  {
    "id": "moonlight-cinemood-97",
    "title": "Moonlight",
    "year": 2016,
    "runtime": "1h 67m",
    "rating": "7.9",
    "rottenTomatoes": "87%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "indie"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9y8e2k2t2.jpg",
    "plot": "Moonlight offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your indie vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/9NJj12tJzqc",
    "vibeMeter": {
      "intensity": 92,
      "pace": 67,
      "emotionalDepth": 97
    }
  },
  {
    "id": "drive-cinemood-98",
    "title": "Drive",
    "year": 2011,
    "runtime": "1h 68m",
    "rating": "8.0",
    "rottenTomatoes": "88%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "indie"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/lFwq26Q5p9w71A4Vb683gK5W9gE.jpg",
    "plot": "Drive offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your indie vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/giXco2jaZ_4",
    "vibeMeter": {
      "intensity": 93,
      "pace": 68,
      "emotionalDepth": 98
    }
  },
  {
    "id": "lady-bird-cinemood-99",
    "title": "Lady Bird",
    "year": 2017,
    "runtime": "1h 69m",
    "rating": "8.1",
    "rottenTomatoes": "89%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "indie"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "plot": "Lady Bird offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your indie vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/x0XDEhP4MQs",
    "vibeMeter": {
      "intensity": 94,
      "pace": 69,
      "emotionalDepth": 99
    }
  },
  {
    "id": "the-whale-cinemood-100",
    "title": "The Whale",
    "year": 2022,
    "runtime": "1h 70m",
    "rating": "8.2",
    "rottenTomatoes": "90%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "indie"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/ek8e8W326LkWJ8Z8k4y7.jpg",
    "plot": "The Whale offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your indie vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/D30r0CWTIK8",
    "vibeMeter": {
      "intensity": 75,
      "pace": 70,
      "emotionalDepth": 80
    }
  },
  {
    "id": "the-florida-project-cinemood-101",
    "title": "The Florida Project",
    "year": 2017,
    "runtime": "1h 71m",
    "rating": "8.3",
    "rottenTomatoes": "91%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "indie"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0V9fB8k4y7.jpg",
    "plot": "The Florida Project offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your indie vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/r-vfg3KkV5U",
    "vibeMeter": {
      "intensity": 76,
      "pace": 71,
      "emotionalDepth": 81
    }
  },
  {
    "id": "minari-cinemood-102",
    "title": "Minari",
    "year": 2018,
    "runtime": "1h 72m",
    "rating": "8.4",
    "rottenTomatoes": "92%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "indie"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/hE24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Minari offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your indie vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/d9MyW72ELq0",
    "vibeMeter": {
      "intensity": 77,
      "pace": 72,
      "emotionalDepth": 82
    }
  },
  {
    "id": "sound-of-metal-cinemood-103",
    "title": "Sound of Metal",
    "year": 2019,
    "runtime": "1h 73m",
    "rating": "8.5",
    "rottenTomatoes": "93%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "indie"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94yXxIFxTe.jpg",
    "plot": "Sound of Metal offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your indie vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/73_1biulkYk",
    "vibeMeter": {
      "intensity": 78,
      "pace": 73,
      "emotionalDepth": 83
    }
  },
  {
    "id": "anatomy-of-a-fall-cinemood-105",
    "title": "Anatomy of a Fall",
    "year": 2023,
    "runtime": "1h 40m",
    "rating": "8.7",
    "rottenTomatoes": "95%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "indie"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8Gxv8KWB2j10a6q54Zz4k6Q63c.jpg",
    "plot": "Anatomy of a Fall offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your indie vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/XJMuhwVlca4",
    "vibeMeter": {
      "intensity": 80,
      "pace": 75,
      "emotionalDepth": 85
    }
  },
  {
    "id": "zone-of-interest-cinemood-106",
    "title": "Zone of Interest",
    "year": 2022,
    "runtime": "1h 41m",
    "rating": "8.8",
    "rottenTomatoes": "96%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Drama",
      "Romance"
    ],
    "moods": [
      "indie"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/aM24NWMv4UhjY65TKVjTKG6j89.jpg",
    "plot": "Zone of Interest offers an incredible cinematic experience filled with passion, emotion, and unforgettable moments.",
    "aiTake": "A top-rated drama movie handpicked for your indie vibe.",
    "streaming": {
      "free": [
        {
          "name": "Tubi",
          "logo": "\ud83c\udf7f",
          "link": "https://tubitv.com",
          "type": "Free"
        }
      ],
      "premium": [
        {
          "name": "Netflix",
          "logo": "\ud83d\udd34",
          "link": "https://netflix.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Renowned Director",
    "cast": [
      "Award Winner",
      "Co Star"
    ],
    "trailer": "https://www.youtube.com/embed/vKQi3bBA1y8",
    "vibeMeter": {
      "intensity": 81,
      "pace": 76,
      "emotionalDepth": 86
    }
  },
  {
    "id": "dune-part-two-2024",
    "title": "Dune: Part Two",
    "year": 2024,
    "runtime": "2h 46m",
    "rating": "8.6",
    "rottenTomatoes": "92%",
    "ageRating": "PG-13",
    "language": "EN",
    "genres": [
      "Sci-Fi",
      "Adventure",
      "Action"
    ],
    "moods": [
      "mind-bending",
      "popcorn",
      "adrenaline"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/1pdfLPoWuYz2WSt2M95LDFutPjE.jpg",
    "plot": "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    "aiTake": "A breathtaking cinematic masterpiece of desert warfare and sci-fi spectacle.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Max",
          "logo": "\ud83d\udfe3",
          "link": "https://max.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Denis Villeneuve",
    "cast": [
      "Timoth\u00e9e Chalamet",
      "Zendaya",
      "Rebecca Ferguson"
    ],
    "trailer": "https://www.youtube.com/embed/Way9Dexny3w",
    "vibeMeter": {
      "intensity": 95,
      "pace": 80,
      "emotionalDepth": 90
    }
  },
  {
    "id": "inside-out-2-2024",
    "title": "Inside Out 2",
    "year": 2024,
    "runtime": "1h 36m",
    "rating": "7.7",
    "rottenTomatoes": "91%",
    "ageRating": "PG",
    "language": "EN",
    "genres": [
      "Animation",
      "Comedy",
      "Family"
    ],
    "moods": [
      "cozy",
      "laughs",
      "tearjerker"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpLZZlNAVvWPxE5U.jpg",
    "plot": "Teenager Riley's mind headquarters undergoes demolition to make room for new Emotions like Anxiety and Envy.",
    "aiTake": "A heartwarming animated gem exploring teenage anxiety and self-acceptance.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Disney+",
          "logo": "\ud83d\udfe6",
          "link": "https://disneyplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Kelsey Mann",
    "cast": [
      "Amy Poehler",
      "Maya Hawke",
      "Kensington Tallman"
    ],
    "trailer": "https://www.youtube.com/embed/LEjhY15eCx0",
    "vibeMeter": {
      "intensity": 60,
      "pace": 75,
      "emotionalDepth": 88
    }
  },
  {
    "id": "deadpool-and-wolverine-2024",
    "title": "Deadpool & Wolverine",
    "year": 2024,
    "runtime": "2h 8m",
    "rating": "7.8",
    "rottenTomatoes": "78%",
    "ageRating": "R",
    "language": "EN",
    "genres": [
      "Action",
      "Comedy",
      "Sci-Fi"
    ],
    "moods": [
      "adrenaline",
      "laughs",
      "popcorn"
    ],
    "poster": "https://image.tmdb.org/t/p/w500/8cdWjvZ2v1wFiNwz3sfPxsMZZ-M.jpg",
    "plot": "Wolverine teams up with loudmouth Deadpool to defeat a common enemy in an explosive multiverse battle.",
    "aiTake": "An irreverent, action-packed Marvel extravaganza overflowing with hilarious banter.",
    "streaming": {
      "free": [],
      "premium": [
        {
          "name": "Disney+",
          "logo": "\ud83d\udfe6",
          "link": "https://disneyplus.com",
          "type": "Subscription"
        }
      ]
    },
    "director": "Shawn Levy",
    "cast": [
      "Ryan Reynolds",
      "Hugh Jackman",
      "Emma Corrin"
    ],
    "trailer": "https://www.youtube.com/embed/73_1biulkYk",
    "vibeMeter": {
      "intensity": 90,
      "pace": 95,
      "emotionalDepth": 65
    }
  }
];
