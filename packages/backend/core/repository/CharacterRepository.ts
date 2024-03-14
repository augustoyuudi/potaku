import UrqlClient from '../../infra/database/urql';
import type { Query } from '../types/query.types';

async function getCharacterById(variables: Query, db = UrqlClient) {
  // client should send this query
  const query = `
    query character(
      $id: Int
      $page: Int
      $sort: [MediaSort]
      $onList: Boolean
    ) {
      Character(id: $id) {
        id
        name {
          full
        }
        media(page: $page, sort: $sort, onList: $onList) {
          edges {
            voiceActors(sort: [RELEVANCE, ID]) {
              id
              name {
                full
              }
              language: languageV2
            }
            node {
              id
            }
          }
        }
      }
    }
  `;

  const result = await db.query(query, variables).toPromise();

  return result.data;
};

export default {
  getCharacterById,
};