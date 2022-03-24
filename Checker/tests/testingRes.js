const responseData = {
  copyright:
    "NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2022. All Rights Reserved.",
  totalItems: 4,
  totalEvents: 0,
  totalGames: 4,
  totalMatches: 0,
  metaData: {
    timeStamp: "20220324_010816",
  },
  wait: 10,
  dates: [
    {
      date: "2022-03-23",
      totalItems: 4,
      totalEvents: 0,
      totalGames: 4,
      totalMatches: 0,
      games: [
        {
          gamePk: 2021021015,
          link: "/api/v1/game/2021021015/feed/live",
          gameType: "R",
          season: "20212022",
          gameDate: "2022-03-23T23:00:00Z",
          status: {
            abstractGameState: "Live",
            codedGameState: "3",
            detailedState: "In Progress",
            statusCode: "3",
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 23,
                losses: 35,
                ot: 5,
                type: "league",
              },
              score: 2,
              team: {
                id: 1,
                name: "New Jersey Devils",
                link: "/api/v1/teams/1",
              },
            },
            home: {
              leagueRecord: {
                wins: 39,
                losses: 18,
                ot: 5,
                type: "league",
              },
              score: 2,
              team: {
                id: 10,
                name: "Toronto Maple Leafs",
                link: "/api/v1/teams/10",
              },
            },
          },
          venue: {
            name: "Scotiabank Arena",
            link: "/api/v1/venues/null",
          },
          content: {
            link: "/api/v1/game/2021021015/content",
          },
        },
        {
          gamePk: 2021021014,
          link: "/api/v1/game/2021021014/feed/live",
          gameType: "R",
          season: "20212022",
          gameDate: "2022-03-23T23:30:00Z",
          status: {
            abstractGameState: "Live",
            codedGameState: "3",
            detailedState: "In Progress",
            statusCode: "3",
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 39,
                losses: 16,
                ot: 9,
                type: "league",
              },
              score: 1,
              team: {
                id: 5,
                name: "Pittsburgh Penguins",
                link: "/api/v1/teams/5",
              },
            },
            home: {
              leagueRecord: {
                wins: 22,
                losses: 33,
                ot: 8,
                type: "league",
              },
              score: 2,
              team: {
                id: 7,
                name: "Buffalo Sabres",
                link: "/api/v1/teams/7",
              },
            },
          },
          venue: {
            id: 5039,
            name: "KeyBank Center",
            link: "/api/v1/venues/5039",
          },
          content: {
            link: "/api/v1/game/2021021014/content",
          },
        },
        {
          gamePk: 2021021016,
          link: "/api/v1/game/2021021016/feed/live",
          gameType: "R",
          season: "20212022",
          gameDate: "2022-03-24T01:30:00Z",
          status: {
            abstractGameState: "Preview",
            codedGameState: "2",
            detailedState: "Pre-Game",
            statusCode: "2",
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 30,
                losses: 26,
                ot: 8,
                type: "league",
              },
              score: 0,
              team: {
                id: 23,
                name: "Vancouver Canucks",
                link: "/api/v1/teams/23",
              },
            },
            home: {
              leagueRecord: {
                wins: 45,
                losses: 13,
                ot: 5,
                type: "league",
              },
              score: 0,
              team: {
                id: 21,
                name: "Colorado Avalanche",
                link: "/api/v1/teams/21",
              },
            },
          },
          venue: {
            id: 5064,
            name: "Ball Arena",
            link: "/api/v1/venues/5064",
          },
          content: {
            link: "/api/v1/game/2021021016/content",
          },
        },
        {
          gamePk: 2021021018,
          link: "/api/v1/game/2021021018/feed/live",
          gameType: "R",
          season: "20212022",
          gameDate: "2022-03-24T02:00:00Z",
          status: {
            abstractGameState: "Preview",
            codedGameState: "1",
            detailedState: "Scheduled",
            statusCode: "1",
            startTimeTBD: false,
          },
          teams: {
            away: {
              leagueRecord: {
                wins: 22,
                losses: 32,
                ot: 9,
                type: "league",
              },
              score: 0,
              team: {
                id: 16,
                name: "Chicago Blackhawks",
                link: "/api/v1/teams/16",
              },
            },
            home: {
              leagueRecord: {
                wins: 27,
                losses: 27,
                ot: 11,
                type: "league",
              },
              score: 0,
              team: {
                id: 24,
                name: "Anaheim Ducks",
                link: "/api/v1/teams/24",
              },
            },
          },
          venue: {
            id: 5046,
            name: "Honda Center",
            link: "/api/v1/venues/5046",
          },
          content: {
            link: "/api/v1/game/2021021018/content",
          },
        },
      ],
      events: [],
      matches: [],
    },
  ],
};

module.exports = responseData;
