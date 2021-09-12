import type { BackgroundColor } from '../components/screenshot';

type TextColor = BackgroundColor;

interface Data {
  src: string;
  title: string;
  category?: string;
  reverse: boolean;
  color: BackgroundColor;
  textColor?: 'white' | 'black';
  spotifyTextColor?: TextColor;
  text?: string[];
}

interface StoreInfo {
  image: string;
  title: string;
  href: string;
  downloads: string;
}

type Navigation = { [key in NavigationKey]: NavigationItem };

type NavigationKey = 'motivation' | 'whatDoesItLookLike' | 'installation' | 'buyMeACoffee';

interface NavigationItem {
  text: string;
  id: string;
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
    spotifyTextColor: 'deep-blue',
    textColor: 'black',
    text: ['Features dynamic background color', 'with volume control'],
  },
  {
    src: '/images/faded-zhu.png',
    title: 'Faded - Zhu',
    category: '🎶 Music',
    reverse: true,
    color: 'deep-blue',
    spotifyTextColor: 'web-gold',
    textColor: 'white',
    text: ['Easily turn on/off repeat mode'],
  },
  {
    src: '/images/coming-home-datmaniac.png',
    title: 'Coming home - Datmaniac',
    category: '🎶 Music',
    reverse: false,
    color: 'web-gold',
    spotifyTextColor: 'brilliant-azure',
    textColor: 'black',
    text: ['Easily jump to next or previous songs'],
  },
  {
    src: '/images/behind-the-tech.png',
    title: 'Behind the tech',
    category: '🎙 Podcast',
    reverse: true,
    color: 'brilliant-azure',
    spotifyTextColor: 'yellow-orange',
    textColor: 'black',
    text: ['Enjoy your favorite podcasts as well as music'],
  },
  {
    src: '/images/joe-rogan-podcast.png',
    title: 'Joe Rogan',
    category: '🎙 Podcast',
    reverse: false,
    color: 'yellow-orange',
    spotifyTextColor: 'electric-pink',
    textColor: 'black',
    text: ['And control your podcasts'],
  },
  {
    src: '/images/right-click-search.png',
    title: 'Right click to search',
    category: '🔎 Search your song',
    reverse: true,
    color: 'electric-pink',
    spotifyTextColor: 'imperial',
    textColor: 'white',
    text: ['Searching is so easy', 'Highlight a text', 'Right click and search'],
  },
  {
    src: '/images/sign-in.png',
    title: 'Sign in',
    reverse: false,
    color: 'imperial',
    spotifyTextColor: 'champagne',
    textColor: 'white',
    text: ['with your Spotify account'],
  },
  {
    src: '/images/app-not-running.png',
    title: 'App not running',
    reverse: true,
    color: 'champagne',
    spotifyTextColor: 'dark-green',
    textColor: 'black',
    text: ['Always turn on Spotify desktop app'],
  },
];

export const stores: StoreInfo[] = [
  {
    image: '/stores/chrome.png',
    title: 'Chrome',
    href: 'https://chrome.google.com/webstore/detail/spotify-player/bhdjjppbnlpjpeicimhemencfgjeldoa',
    downloads: '10k+',
  },
  {
    image: '/stores/firefox.png',
    title: 'Firefox',
    href: 'https://addons.mozilla.org/en-US/firefox/addon/spotify-player/',
    downloads: '900+',
  },
  {
    image: '/stores/edge.png',
    title: 'Edge',
    href: 'https://microsoftedge.microsoft.com/addons/detail/spotify-player/odplfjpibjdajlmaocmfmlcdidldlmnk',
    downloads: '4k+',
  },
];

export const NAVIGATION: Navigation = {
  motivation: {
    text: 'Motivation',
    id: 'motivation',
  },
  whatDoesItLookLike: {
    text: 'What does it look like?',
    id: 'what-does-it-look-like',
  },
  installation: {
    text: 'Installation',
    id: 'installation',
  },
  buyMeACoffee: {
    text: 'Buy me a coffee',
    id: 'buy-me-a-coffee',
  },
};
