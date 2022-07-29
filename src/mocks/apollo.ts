import { setupServer } from 'msw/node'
import { graphql } from 'msw'

const handlers = [
  graphql.query('getPaginatedMedia', (req, res, ctx) => {
    const { page, perPage } = req.variables
    return res(
      ctx.data(
        {
          "Page": {
            "pageInfo": {
              "total": 5000,
              "currentPage": page,
              "lastPage": 500,
              "hasNextPage": true,
              "perPage": perPage,
              "__typename": "PageInfo"
            },
            "media": [
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
            ],
            "__typename": "Page"
          }
        }
      )
    )
  })
]

export const server = setupServer(...handlers)