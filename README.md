# Spotify Web Extension

<div align="center">
  <img src="https://user-images.githubusercontent.com/6290720/82152014-98407200-9899-11ea-9a63-ba6b42aa2c34.png" />
  <br />
  <br />
</div>

Spotify web extension, check out the story here:

- [https://codeburst.io/develop-spotify-player-web-extension-bffe5538b8ec](https://codeburst.io/develop-spotify-player-web-extension-bffe5538b8ec)

**Note:** This web extension was developed using [web-extension-svelte-boilerplate](https://github.com/davidnguyen179/web-extension-svelte-boilerplate)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest) [![codecov](https://codecov.io/gh/davidnguyen179/spotify-extension/branch/master/graph/badge.svg)](https://codecov.io/gh/davidnguyen179/spotify-extension) ![ci/cd](https://github.com/davidnguyen179/spotify-extension/workflows/ci/cd/badge.svg) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/davidnguyen179/spotify-extension/pulls) [![MIT license](https://img.shields.io/github/license/davidnguyen179/spotify-extension)](https://github.com/davidnguyen179/spotify-extension/blob/main/LICENSE) [![Netlify Status](https://api.netlify.com/api/v1/badges/740b016e-5b99-48c4-882b-7d976d2bba23/deploy-status)](https://app.netlify.com/sites/spotify-extension/deploys)

[![Chrome Extension Users](https://img.shields.io/chrome-web-store/users/bhdjjppbnlpjpeicimhemencfgjeldoa?color=0099ff&label=chrome%20users&logo=google-chrome&logoColor=d2ccd2)](https://chrome.google.com/webstore/detail/spotify-player/bhdjjppbnlpjpeicimhemencfgjeldoa) [![Chrome Extension Version](https://img.shields.io/chrome-web-store/v/bhdjjppbnlpjpeicimhemencfgjeldoa?color=0099ff&logo=google-chrome&logoColor=d2ccd2)](https://chrome.google.com/webstore/detail/spotify-player/bhdjjppbnlpjpeicimhemencfgjeldoa) [![Chrome Extension Rating](https://img.shields.io/chrome-web-store/rating/bhdjjppbnlpjpeicimhemencfgjeldoa?color=0099ff&logo=google-chrome&logoColor=d2ccd2)](https://chrome.google.com/webstore/detail/spotify-player/bhdjjppbnlpjpeicimhemencfgjeldoa)

[![Firefox Add-On Users](https://img.shields.io/amo/users/spotify-player?color=FF9500&label=mozilla%20users&logo=firefox)](https://addons.mozilla.org/en-US/firefox/addon/spotify-player/) [![Firefox Add-On Version](https://img.shields.io/amo/v/spotify-player?color=FF9500&logo=firefox)](https://addons.mozilla.org/en-US/firefox/addon/spotify-player/) [![Firefox Add-On Rating](https://img.shields.io/amo/rating/spotify-player?color=FF9500&logo=firefox)](https://addons.mozilla.org/en-US/firefox/addon/spotify-player/) [![Join the chat at https://gitter.im/spotify-extension/community](https://badges.gitter.im/spotify-extension/community.svg)](https://gitter.im/spotify-extension/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Motivation

When we are working or just browsing it is inconvenient to have to switch to another window to play/pause or jump to previous tracks or forward to upcoming tracks. Also, we lose focus or get distracted once we navigate away from our current window and open Spotify. With this simple extension we can eliminate the need to navigate away from your current window to control Spotify. This extension has another nifty feature. With a quick right click on the widget, you can search a song by name. So for example if you hear a tune on Youtube you can quickly search it on Spotify without navigating away from your current window. Then you can maybe add it to a playlist later.

- Avoid switching context while you're focusing on your browser by providing mini player which helps to control Spotify with ease from your browser.
- Quick right click to search song by name on Spotify site.

## Stores

| Browsers       | Web store                                                                                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Chrome         | [https://chrome.google.com/webstore/detail/mini-spotity-player/bhdjjppbnlpjpeicimhemencfgjeldoa](https://chrome.google.com/webstore/detail/mini-spotity-player/bhdjjppbnlpjpeicimhemencfgjeldoa)       |
| Microsoft Edge | [https://microsoftedge.microsoft.com/addons/detail/spotify-player/odplfjpibjdajlmaocmfmlcdidldlmnk](https://microsoftedge.microsoft.com/addons/detail/spotify-player/odplfjpibjdajlmaocmfmlcdidldlmnk) |
| Firefox        | [https://addons.mozilla.org/en-US/firefox/addon/spotify-player](https://addons.mozilla.org/en-US/firefox/addon/spotify-player)                                                                         |
| Opera          | [https://addons.opera.com/en/extensions/details/spotify-player/](https://addons.opera.com/en/extensions/details/spotify-player/)                                                                       |

## What does it looks like?

![Spotify extension demo](https://user-images.githubusercontent.com/6290720/112152408-9cf65500-8c25-11eb-82f9-2429a9fa587c.gif)

### Main screens

<img width="464" alt="Coming Home" src="https://user-images.githubusercontent.com/6290720/112149887-ce215600-8c22-11eb-8beb-9f805c8b5740.png">

<img width="457" alt="Dew" src="https://user-images.githubusercontent.com/6290720/112150020-f741e680-8c22-11eb-9dea-511cebda91d1.png">

<img width="456" alt="Faded" src="https://user-images.githubusercontent.com/6290720/112150371-5869ba00-8c23-11eb-8344-32ef66f0d2cb.png">

<img width="457" alt="Nostalgia" src="https://user-images.githubusercontent.com/6290720/112150380-5acc1400-8c23-11eb-9fbb-c041d87d09fd.png">

<img width="443" alt="podcast" src="https://user-images.githubusercontent.com/6290720/121120724-1c74e700-c859-11eb-85c1-2f0f609f4da4.png">

<img width="447" alt="Screen Shot 2021-06-08 at 13 03 07" src="https://user-images.githubusercontent.com/6290720/121280965-1a229380-c912-11eb-87ef-e176364759ff.png">

### Login screen

<img width="451" alt="Login - Light" src="https://user-images.githubusercontent.com/6290720/114256466-5f9b1100-99f4-11eb-8477-a611e7917443.png">

### No device is opened

<img width="447" alt="Screen Shot 2021-06-02 at 23 05 59" src="https://user-images.githubusercontent.com/6290720/120590690-e52bc200-c475-11eb-8ea8-4b4b57105421.png">

### Context menu

Search song by name with Chrome's context menu

<img width="546" alt="Screen Shot 2021-04-18 at 18 24 55" src="https://user-images.githubusercontent.com/6290720/115140690-86e88280-a073-11eb-8aeb-d24db2394320.png">

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.dzungnguyen.dev"><img src="https://avatars3.githubusercontent.com/u/6290720?v=4?s=100" width="100px;" alt=""/><br /><sub><b>David Nguyen</b></sub></a><br /><a href="https://github.com/davidnguyen179/spotify-extension/commits?author=davidnguyen179" title="Code">💻</a> <a href="https://github.com/davidnguyen179/spotify-extension/commits?author=davidnguyen179" title="Tests">⚠️</a> <a href="https://github.com/davidnguyen179/spotify-extension/commits?author=davidnguyen179" title="Documentation">📖</a> <a href="#design-davidnguyen179" title="Design">🎨</a> <a href="#content-davidnguyen179" title="Content">🖋</a> <a href="#maintenance-davidnguyen179" title="Maintenance">🚧</a> <a href="https://github.com/davidnguyen179/spotify-extension/issues?q=author%3Adavidnguyen179" title="Bug reports">🐛</a> <a href="#ideas-davidnguyen179" title="Ideas, Planning, & Feedback">🤔</a> <a href="#platform-davidnguyen179" title="Packaging/porting to new platform">📦</a> <a href="https://github.com/davidnguyen179/spotify-extension/pulls?q=is%3Apr+reviewed-by%3Adavidnguyen179" title="Reviewed Pull Requests">👀</a> <a href="#userTesting-davidnguyen179" title="User Testing">📓</a></td>
    <td align="center"><a href="http://benlee3.com"><img src="https://avatars2.githubusercontent.com/u/35267414?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ben Harned</b></sub></a><br /><a href="https://github.com/davidnguyen179/spotify-extension/commits?author=3BenLee" title="Code">💻</a> <a href="https://github.com/davidnguyen179/spotify-extension/commits?author=3BenLee" title="Tests">⚠️</a> <a href="https://github.com/davidnguyen179/spotify-extension/commits?author=3BenLee" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/conandk"><img src="https://avatars2.githubusercontent.com/u/12934183?v=4?s=100" width="100px;" alt=""/><br /><sub><b>DK</b></sub></a><br /><a href="https://github.com/davidnguyen179/spotify-extension/commits?author=conandk" title="Code">💻</a> <a href="#infra-conandk" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/davidnguyen179/spotify-extension/commits?author=conandk" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/immint023"><img src="https://avatars1.githubusercontent.com/u/38607460?v=4?s=100" width="100px;" alt=""/><br /><sub><b>immint023</b></sub></a><br /><a href="https://github.com/davidnguyen179/spotify-extension/commits?author=immint023" title="Code">💻</a> <a href="https://github.com/davidnguyen179/spotify-extension/commits?author=immint023" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/maxwellfortney"><img src="https://avatars.githubusercontent.com/u/29241388?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Maxwell Fortney</b></sub></a><br /><a href="https://github.com/davidnguyen179/spotify-extension/commits?author=maxwellfortney" title="Code">💻</a> <a href="https://github.com/davidnguyen179/spotify-extension/commits?author=maxwellfortney" title="Tests">⚠️</a> <a href="#ideas-maxwellfortney" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://haoict.github.io"><img src="https://avatars.githubusercontent.com/u/7247750?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hao Nguyen</b></sub></a><br /><a href="https://github.com/davidnguyen179/spotify-extension/commits?author=haoict" title="Code">💻</a> <a href="https://github.com/davidnguyen179/spotify-extension/commits?author=haoict" title="Tests">⚠️</a> <a href="#ideas-haoict" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/davidnguyen179/spotify-extension/commits?author=haoict" title="Documentation">📖</a> <a href="#infra-haoict" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://github.com/atrinh0"><img src="https://avatars.githubusercontent.com/u/16542463?v=4?s=100" width="100px;" alt=""/><br /><sub><b>An Trinh</b></sub></a><br /><a href="https://github.com/davidnguyen179/spotify-extension/commits?author=atrinh0" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
