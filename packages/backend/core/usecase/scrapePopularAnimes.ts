import * as cheerio from 'cheerio';

type ScrapedAnime = {
  anime_title: string
  anime_img: string | undefined
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
      anime_title: $(el).find('p.name > a').text(),
      anime_img: $(el).find('div > a > img').attr('src'),
    });
  });

  return animes;
}

// implement real pagination

export default execute;