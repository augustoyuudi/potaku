import UrqlClient from '../../infra/database/urql';

async function getCharacterById(variables, db = UrqlClient) {
  // client should send this query
  // const query = `
  //   query getCharacterById ($id: Int) {
  //     Character (id: $id) {
  //       id,
  //       name {
  //         full
  //         native
  //       }
  //       media (type: ANIME) {
  //         edges {
  //           voiceActors (language: JAPANESE) {
  //             id
  //             name {
  //               full,
  //               native
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `;

  // const query = 'query character($id:Int,$page:Int,$sort:[MediaSort],$onList:Boolean,$withRoles:Boolean = false){Character(id:$id){id name{first middle last full native userPreferred alternative alternativeSpoiler}image{large}favourites isFavourite isFavouriteBlocked description age gender bloodType dateOfBirth{year month day}media(page:$page,sort:$sort,onList:$onList)@include(if:$withRoles){pageInfo{total perPage currentPage lastPage hasNextPage}edges{id characterRole voiceActorRoles(sort:[RELEVANCE,ID]){roleNotes voiceActor{id name{userPreferred}image{large}language:languageV2}}node{id type isAdult bannerImage title{userPreferred}coverImage{large}startDate{year}mediaListEntry{id status}}}}}}'
  const query = 'query character($id:Int,$page:Int,$sort:[MediaSort],$onList:Boolean,$withRoles:Boolean = false){Character(id:$id){id name{first middle last full native userPreferred alternative alternativeSpoiler}image{large}favourites isFavourite isFavouriteBlocked description age gender bloodType dateOfBirth{year month day}media(page:$page,sort:$sort,onList:$onList)@include(if:$withRoles){pageInfo{total perPage currentPage lastPage hasNextPage}edges{id characterRole voiceActorRoles(sort:[RELEVANCE,ID]){roleNotes voiceActor{id name{userPreferred}image{large}language:languageV2}}node{id type isAdult bannerImage title{userPreferred}coverImage{large}startDate{year}mediaListEntry{id status}}}}}}'

  const result = await db.query(query, variables).toPromise();

  return result.data;
};

export default {
  getCharacterById,
};