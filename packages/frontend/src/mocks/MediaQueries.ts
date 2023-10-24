function createMedia() {
  return [
    {
      "id": 21,
      "title": {
        "romaji": "ONE PIECE",
        "__typename": "MediaTitle"
      },
      "coverImage": {
        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx21-tXMN3Y20PIL9.jpg",
        "__typename": "MediaCoverImage"
      },
      "__typename": "Media"
    },
    {
      "id": 459,
      "title": {
        "romaji": "ONE PIECE (Movie)",
        "__typename": "MediaTitle"
      },
      "coverImage": {
        "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx459-2OTwLud8OnFA.jpg",
        "__typename": "MediaCoverImage"
      },
      "__typename": "Media"
    }
  ]
}

function createPageInfo(page: number, perPage: number) {
  return {
    "total": 5000,
    "currentPage": page,
    "lastPage": 500,
    "hasNextPage": true,
    "perPage": perPage,
    "__typename": "PageInfo"
  }
}

function createPaginatedMedia(page: number, perPage: number) {
  return {
    "Page": {
      "pageInfo": createPageInfo(page, perPage),
      "media": createMedia(),
      "__typename": "Page"
    }
  }
}

function createMediaById() {
  return {
    "Media": {
      "id": 21,
      "characters": {
        "edges": [
          {
            "node": {
              "image": {
                "large": "https://s4.anilist.co/file/anilistcdn/character/large/b724-9WkBXgfmVUgW.jpg",
                "__typename": "CharacterImage"
              },
              "name": {
                "full": "Usopp",
                "__typename": "CharacterName"
              },
              "__typename": "Character"
            },
            "voiceActors": [
              {
                "id": 95067,
                "name": {
                  "full": "Kappei Yamaguchi",
                  "__typename": "StaffName"
                },
                "image": {
                  "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n95067-hqIpNxMfAuN2.png",
                  "__typename": "StaffImage"
                },
                "__typename": "Staff"
              }
            ],
            "__typename": "CharacterEdge"
          },
          {
            "node": {
              "image": {
                "large": "https://s4.anilist.co/file/anilistcdn/character/large/b62-Wixe3kLJGVby.png",
                "__typename": "CharacterImage"
              },
              "name": {
                "full": "Zoro Roronoa",
                "__typename": "CharacterName"
              },
              "__typename": "Character"
            },
            "voiceActors": [
              {
                "id": 95123,
                "name": {
                  "full": "Kazuya Nakai",
                  "__typename": "StaffName"
                },
                "image": {
                  "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n95123-qdVFNraYmQ5K.png",
                  "__typename": "StaffImage"
                },
                "__typename": "Staff"
              },
              {
                "id": 101663,
                "name": {
                  "full": "Megumi Urawa",
                  "__typename": "StaffName"
                },
                "image": {
                  "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n101663-0ioQAduoHX8j.jpg",
                  "__typename": "StaffImage"
                },
                "__typename": "Staff"
              }
            ],
            "__typename": "CharacterEdge"
          },
          {
            "node": {
              "image": {
                "large": "https://s4.anilist.co/file/anilistcdn/character/large/n309-Px56UsWX35A3.jpg",
                "__typename": "CharacterImage"
              },
              "name": {
                "full": "Chopper Tony Tony",
                "__typename": "CharacterName"
              },
              "__typename": "Character"
            },
            "voiceActors": [
              {
                "id": 95128,
                "name": {
                  "full": "Ikue Ootani",
                  "__typename": "StaffName"
                },
                "image": {
                  "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n95128-9YWpE1d2U8Sj.png",
                  "__typename": "StaffImage"
                },
                "__typename": "Staff"
              },
              {
                "id": 95420,
                "name": {
                  "full": "Kazue Ikura",
                  "__typename": "StaffName"
                },
                "image": {
                  "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n95420-or3epAZNwUdi.png",
                  "__typename": "StaffImage"
                },
                "__typename": "Staff"
              }
            ],
            "__typename": "CharacterEdge"
          },
          {
            "node": {
              "image": {
                "large": "https://s4.anilist.co/file/anilistcdn/character/large/b723-Ye0LjLgo6i2K.png",
                "__typename": "CharacterImage"
              },
              "name": {
                "full": "Nami",
                "__typename": "CharacterName"
              },
              "__typename": "Character"
            },
            "voiceActors": [
              {
                "id": 95076,
                "name": {
                  "full": "Akemi Okamura",
                  "__typename": "StaffName"
                },
                "image": {
                  "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n95076-itRGy8F3x5Em.png",
                  "__typename": "StaffImage"
                },
                "__typename": "Staff"
              },
              {
                "id": 95496,
                "name": {
                  "full": "Wakana Yamazaki",
                  "__typename": "StaffName"
                },
                "image": {
                  "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n95496-PAwWafRnHtEf.png",
                  "__typename": "StaffImage"
                },
                "__typename": "Staff"
              }
            ],
            "__typename": "CharacterEdge"
          },
          {
            "node": {
              "image": {
                "large": "https://s4.anilist.co/file/anilistcdn/character/large/b61-YQmTA6SO0UuV.png",
                "__typename": "CharacterImage"
              },
              "name": {
                "full": "Robin Nico",
                "__typename": "CharacterName"
              },
              "__typename": "Character"
            },
            "voiceActors": [
              {
                "id": 95130,
                "name": {
                  "full": "Yuriko Yamaguchi",
                  "__typename": "StaffName"
                },
                "image": {
                  "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n95130-GoO41ve3YWQw.png",
                  "__typename": "StaffImage"
                },
                "__typename": "Staff"
              },
              {
                "id": 95983,
                "name": {
                  "full": "Yuuko Kobayashi",
                  "__typename": "StaffName"
                },
                "image": {
                  "large": "https://s4.anilist.co/file/anilistcdn/staff/large/983.jpg",
                  "__typename": "StaffImage"
                },
                "__typename": "Staff"
              },
              {
                "id": 111463,
                "name": {
                  "full": "Anzu Nagai",
                  "__typename": "StaffName"
                },
                "image": {
                  "large": "https://s4.anilist.co/file/anilistcdn/staff/large/16463.jpg",
                  "__typename": "StaffImage"
                },
                "__typename": "Staff"
              }
            ],
            "__typename": "CharacterEdge"
          },
          {
            "node": {
              "image": {
                "large": "https://s4.anilist.co/file/anilistcdn/character/large/b40-q0YepZ4VUZUO.png",
                "__typename": "CharacterImage"
              },
              "name": {
                "full": "Luffy Monkey",
                "__typename": "CharacterName"
              },
              "__typename": "Character"
            },
            "voiceActors": [
              {
                "id": 95075,
                "name": {
                  "full": "Mayumi Tanaka",
                  "__typename": "StaffName"
                },
                "image": {
                  "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n95075-1qD4TeW1ON92.png",
                  "__typename": "StaffImage"
                },
                "__typename": "Staff"
              }
            ],
            "__typename": "CharacterEdge"
          },
          {
            "node": {
              "image": {
                "large": "https://s4.anilist.co/file/anilistcdn/character/large/b305-OCK4jCGefFKU.png",
                "__typename": "CharacterImage"
              },
              "name": {
                "full": "Sanji",
                "__typename": "CharacterName"
              },
              "__typename": "Character"
            },
            "voiceActors": [
              {
                "id": 95125,
                "name": {
                  "full": "Hiroaki Hirata",
                  "__typename": "StaffName"
                },
                "image": {
                  "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n95125-NeFFiJupoDVj.png",
                  "__typename": "StaffImage"
                },
                "__typename": "Staff"
              },
              {
                "id": 95128,
                "name": {
                  "full": "Ikue Ootani",
                  "__typename": "StaffName"
                },
                "image": {
                  "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n95128-9YWpE1d2U8Sj.png",
                  "__typename": "StaffImage"
                },
                "__typename": "Staff"
              }
            ],
            "__typename": "CharacterEdge"
          },
          {
            "node": {
              "image": {
                "large": "https://s4.anilist.co/file/anilistcdn/character/large/n64-ChX6ZzHHjXqA.png",
                "__typename": "CharacterImage"
              },
              "name": {
                "full": "Franky",
                "__typename": "CharacterName"
              },
              "__typename": "Character"
            },
            "voiceActors": [
              {
                "id": 95131,
                "name": {
                  "full": "Kazuki Yao",
                  "__typename": "StaffName"
                },
                "image": {
                  "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n95131-TCVTgxb08tfE.png",
                  "__typename": "StaffImage"
                },
                "__typename": "Staff"
              },
              {
                "id": 95277,
                "name": {
                  "full": "Junko Noda",
                  "__typename": "StaffName"
                },
                "image": {
                  "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n95277-hcE9l52SPjNP.jpg",
                  "__typename": "StaffImage"
                },
                "__typename": "Staff"
              }
            ],
            "__typename": "CharacterEdge"
          },
          {
            "node": {
              "image": {
                "large": "https://s4.anilist.co/file/anilistcdn/character/large/b18938-eu1hhPSNMRWa.png",
                "__typename": "CharacterImage"
              },
              "name": {
                "full": "Jinbe",
                "__typename": "CharacterName"
              },
              "__typename": "Character"
            },
            "voiceActors": [
              {
                "id": 95744,
                "name": {
                  "full": "Daisuke Gouri",
                  "__typename": "StaffName"
                },
                "image": {
                  "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n95744-Iu1p0eNvShfN.jpg",
                  "__typename": "StaffImage"
                },
                "__typename": "Staff"
              },
              {
                "id": 100317,
                "name": {
                  "full": "Katsuhisa Houki",
                  "__typename": "StaffName"
                },
                "image": {
                  "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n100317-8qR7ph0AKfXu.png",
                  "__typename": "StaffImage"
                },
                "__typename": "Staff"
              }
            ],
            "__typename": "CharacterEdge"
          },
          {
            "node": {
              "image": {
                "large": "https://s4.anilist.co/file/anilistcdn/character/large/b5627-av8oD3zhKvDl.png",
                "__typename": "CharacterImage"
              },
              "name": {
                "full": "Brook",
                "__typename": "CharacterName"
              },
              "__typename": "Character"
            },
            "voiceActors": [
              {
                "id": 95898,
                "name": {
                  "full": "Choo",
                  "__typename": "StaffName"
                },
                "image": {
                  "large": "https://s4.anilist.co/file/anilistcdn/staff/large/n95898-XHSESV65G8Jv.png",
                  "__typename": "StaffImage"
                },
                "__typename": "Staff"
              }
            ],
            "__typename": "CharacterEdge"
          }
        ],
        "__typename": "CharacterConnection"
      },
      "__typename": "Media"
    }
  }
}

export { createPaginatedMedia, createPageInfo, createMedia, createMediaById }