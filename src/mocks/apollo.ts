import { setupServer } from 'msw/node'
import { graphql } from 'msw'
import { createPaginatedMedia, createPageInfo, createMedia, createMediaById } from './MediaQueries'

const handlers = [
  graphql.query('getPaginatedMedia', (req, res, ctx) => {
    const { page, perPage } = req.variables

    if (page > 1) {
      return res(
        ctx.data({
          "Page": {
            "pageInfo": createPageInfo(page, perPage),
            "media": [createMedia()[1]],
            "__typename": "Page"
          }
      }))
    }

    return res(
      ctx.data(createPaginatedMedia(page, perPage))
    )
  }),

  graphql.query('getMediaById', (req, res, ctx) => {
    return res(
      ctx.data(createMediaById())
    )
  })
]

export const server = setupServer(...handlers)