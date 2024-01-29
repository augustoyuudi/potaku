import * as cheerio from 'cheerio';

type ScrapedAnime = {
  title: {
    romaji: string
  }
  coverImage: {
    default: string | undefined
  }
}

async function execute(page: number | string = 1) {
  const url = `https://gogoanime.gg/popular.html?page=${page}`;
  const response = await fetch(url, {
    method: 'GET'
  });
  const htmlPage = await response.text();

  const animes: ScrapedAnime[] = [];
  const $ = cheerio.load(htmlPage);

  $('div.last_episodes > ul > li').each((i, el) => {
    animes.push({
      title: {
        romaji: $(el).find('p.name > a').text()
      },
      coverImage: {
        default: $(el).find('div > a > img').attr('src')
      },
    });
  });

  return animes;
}

// implement real pagination

export default execute;