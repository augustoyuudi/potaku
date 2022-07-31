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

export { createPaginatedMedia, createPageInfo, createMedia }