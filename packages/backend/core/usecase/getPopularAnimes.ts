import scrapePopularAnimes from './scrapePopularAnimes';

async function execute() {
  const animes = await scrapePopularAnimes();

  return animes;
}

export default execute;