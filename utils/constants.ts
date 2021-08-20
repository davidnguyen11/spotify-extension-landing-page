import type { BackgroundColor } from '../components/screenshot';

interface Data {
  src: string;
  title: string;
  category?: string;
  reverse: boolean;
  color: BackgroundColor;
  textColor?: 'white' | 'black';
  text?: string[];
}

interface StoreInfo {
  image: string;
  title: string;
  href: string;
}

export const HOST = 'https://spotify-extension.netlify.app';

export const GA_TRACKING_ID = 'UA-147652451-2';

export const data: Data[] = [
  {
    src: '/images/dew-kupla.png',
    title: 'Dew - Kupla',
    category: '🎶 Music',
    reverse: false,
    color: 'green',
    textColor: 'black',
    text: ['Allow controlling volume', 'Dynamic background color'],
  },
  {
    src: '/images/faded-zhu.png',
    title: 'Faded - Zhu',
    category: '🎶 Music',
    reverse: true,
    color: 'deep-blue',
    textColor: 'white',
    text: ['Easily turn on/off repeat mode'],
  },
  {
    src: '/images/coming-home-datmaniac.png',
    title: 'Coming home - Datmaniac',
    category: '🎶 Music',
    reverse: false,
    color: 'web-gold',
    textColor: 'black',
    text: ['Easy to jump to next', 'or previous songs'],
  },
  {
    src: '/images/behind-the-tech.png',
    title: 'Behind the tech',
    category: '🎙 Podcast',
    reverse: true,
    color: 'brilliant-azure',
    textColor: 'black',
    text: ['Allow listening podcasts'],
  },
  {
    src: '/images/joe-rogan-podcast.png',
    title: 'Joe Rogan',
    category: '🎙 Podcast',
    reverse: false,
    color: 'yellow-orange',
    textColor: 'black',
    text: ['And control your podcasts'],
  },
  {
    src: '/images/right-click-search.png',
    title: 'Right click to search',
    category: '🔎 Search your song',
    reverse: true,
    color: 'electric-pink',
    textColor: 'white',
    text: ['Searching is so easy', 'Highlight a text', 'Right click and search'],
  },
  {
    src: '/images/sign-in.png',
    title: 'Sign in',
    reverse: false,
    color: 'imperial',
    textColor: 'white',
    text: ['with your Spotify account'],
  },
  {
    src: '/images/app-not-running.png',
    title: 'App not running',
    reverse: true,
    color: 'champagne',
    textColor: 'black',
    text: ['Always turn on Spotify desktop app'],
  },
];

export const stores: StoreInfo[] = [
  {
    image: '/stores/chrome.png',
    title: 'Chrome',
    href: 'https://chrome.google.com/webstore/detail/spotify-player/bhdjjppbnlpjpeicimhemencfgjeldoa',
  },
  {
    image: '/stores/firefox.png',
    title: 'Firefox',
    href: 'https://addons.mozilla.org/en-US/firefox/addon/spotify-player/',
  },
  {
    image: '/stores/edge.png',
    title: 'Edge',
    href: 'https://microsoftedge.microsoft.com/addons/detail/spotify-player/odplfjpibjdajlmaocmfmlcdidldlmnk',
  },
];
