<br>

<p align="center">
<img src="https://github.com/augustoyuudi/potaku/blob/main/.github/front-image.jpeg?raw=true" style="width:300px;" />
</p>

<h1 align="center">Potaku</h1>

<p align="center">
Entertainment for otakus
</p>

<br>
<p align="center">
<s><a href="https://potaku-client.onrender.com">🧑‍💻 Website <sup>Shutdown</sup></a></s>
</p>
<br>

## Features

Fetching resources from [AniList](https://anilist.gitbook.io/anilist-apiv2-docs/) public API:

- Guess the VA: game where player guess the correct VA for an anime character.

## Project overview

This monorepo contains both the client-side and server-side applications, built with TypeScript.
The monorepo is handled by [pnpm workspaces](https://pnpm.io/workspaces)

### Server
The server is built with [Express.js](https://expressjs.com/).

To start the server:
```bash
cd packages/backend
pnpm install
pnpm dev
```

The client is built with [Vue.js](https://vuejs.org/).

To start the client:
```bash
cd packages/frontend
pnpm install
pnpm dev
```

## Tasks

### In progress
- [x] Quiz state unit tests

### To do
- [ ] Sugest animes in search page
- [ ] Implement loading state on API calls
- [ ] Implement empty state on API calls
- [ ] Dynamic search focus shortcut by device
- [ ] Increase character random range
- [ ] Upload favicon
- [ ] Implement E2E tests
- [ ] Create/Upload favicon
