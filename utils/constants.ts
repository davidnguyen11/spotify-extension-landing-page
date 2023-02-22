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

interface Payment {
  logo: string;
  qr: string;
  title: string;
  href: string;
}

export type BankName = 'momo' | 'techcombank' | 'tpbank' | 'paypay';

type Navigation = { [key in NavigationKey]: NavigationItem };

type BankObject = { [key in BankName]: Payment };

type NavigationKey =
  | 'motivation'
  | 'whatDoesItLookLike'
  | 'installation'
  | 'buyMeACoffee'
  | 'qr'
  | 'contributors'
  | 'followMe'
  | 'privacyPolicy'
  | 'contact';

interface NavigationItem {
  text: string;
  id?: string;
  href?: string;
}

export const HOST = 'https://www.spotit.page';

export const GA_TRACKING_ID = 'UA-147652451-2';

export const data: Data[] = [
  {
    src: '/images/with-you-ngau-hung-hoaprox.png',
    title: 'With You (Ngẫu Hứng) - Hoaprox',
    category: '🎶 Music',
    reverse: false,
    color: 'champagne',
    spotifyTextColor: 'evening',
    textColor: 'black',
    text: ['Features dynamic background color', 'with volume control'],
  },
  {
    src: '/images/faded-zhu.png',
    title: 'Faded - Zhu',
    category: '🎶 Music',
    reverse: true,
    color: 'evening',
    spotifyTextColor: 'metapolis',
    textColor: 'white',
    text: ['Easily turn on/off repeat mode'],
  },
  {
    src: '/images/coming-home-datmaniac.png',
    title: 'Coming home - Datmaniac',
    category: '🎶 Music',
    reverse: false,
    color: 'metapolis',
    spotifyTextColor: 'atlas',
    textColor: 'white',
    text: ['Easily jump to next or previous songs'],
  },
  {
    src: '/images/behind-the-tech.png',
    title: 'Behind the tech',
    category: '🎙 Podcast',
    reverse: true,
    color: 'atlas',
    spotifyTextColor: 'orange',
    textColor: 'white',
    text: ['Enjoy your favorite podcasts as well as music'],
  },
  {
    src: '/images/joe-rogan-podcast.png',
    title: 'Joe Rogan',
    category: '🎙 Podcast',
    reverse: false,
    color: 'orange',
    spotifyTextColor: 'deepSea',
    textColor: 'black',
    text: ['And control your podcasts'],
  },
  {
    src: '/images/right-click-search.png',
    title: 'Right click to search',
    category: '🔎 Search your song',
    reverse: true,
    color: 'almost',
    spotifyTextColor: 'purple',
    textColor: 'black',
    text: ['Searching is so easy', 'Highlight a text', 'Right click and search'],
  },
  {
    src: '/images/sign-in.png',
    title: 'Sign in',
    reverse: false,
    color: 'purple',
    spotifyTextColor: 'green',
    textColor: 'white',
    text: ['with your Spotify account'],
  },
  {
    src: '/images/app-not-running.png',
    title: 'App not running',
    reverse: true,
    color: 'green',
    spotifyTextColor: 'blush',
    textColor: 'black',
    text: ['Always turn on Spotify desktop app'],
  },
];

export const banks: BankObject = {
  momo: {
    logo: '/payments/banks/momo.png',
    qr: '/payments/qr/momo.jpeg',
    title: 'Momo',
    href: '/donation/momo',
  },
  techcombank: {
    logo: '/payments/banks/techcombank.png',
    qr: '/payments/qr/techcombank.jpeg',
    title: 'Techcombank',
    href: '/donation/techcombank',
  },
  tpbank: {
    logo: '/payments/banks/tpbank.png',
    qr: '/payments/qr/tpbank.jpeg',
    title: 'TPBank',
    href: '/donation/tpbank',
  },
  paypay: {
    logo: '/payments/banks/paypay.png',
    qr: 'https://user-images.githubusercontent.com/6290720/208659347-8b857c21-6d25-4eb9-b051-01d808329318.png',
    title: 'PayPay',
    href: '/donation/paypay',
  },
};

export const jpPayments: Payment[] = [banks.paypay];
export const payments: Payment[] = [banks.momo, banks.techcombank, banks.tpbank];

export const stores: StoreInfo[] = [
  {
    image: '/stores/chrome.png',
    title: 'Chrome',
    href: 'https://chrome.google.com/webstore/detail/spotify-player/bhdjjppbnlpjpeicimhemencfgjeldoa',
    downloads: '80k+',
  },
  {
    image: '/stores/firefox.png',
    title: 'Firefox',
    href: 'https://addons.mozilla.org/en-US/firefox/addon/spotify-player/',
    downloads: '1k+',
  },
  {
    image: '/stores/edge.png',
    title: 'Edge',
    href: 'https://microsoftedge.microsoft.com/addons/detail/spotify-player/odplfjpibjdajlmaocmfmlcdidldlmnk',
    downloads: '9k+',
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
  qr: {
    text: 'QR code',
    id: 'qr',
  },
  contributors: {
    text: 'Contributors',
    id: 'contributors',
  },
  followMe: {
    text: 'Follow me',
    href: 'https://twitter.com/davidnguyen121',
  },
  privacyPolicy: {
    text: 'Privacy Policy',
  },
  contact: {
    text: 'Contact',
  },
  buyMeACoffee: {
    text: 'Buy me a coffee',
    id: 'buy-me-a-coffee',
  },
};

export const contributors = [
  {
    href: 'https://www.dzungnguyen.dev',
    img: 'https://avatars3.githubusercontent.com/u/6290720?v=4?s=100',
    name: 'Dzung Nguyen',
  },
  {
    href: 'https://benlee3.com',
    img: 'https://avatars2.githubusercontent.com/u/35267414?v=4?s=100',
    name: 'Ben Harned',
  },
  {
    href: 'https://www.linkedin.com/in/khoado-dev/',
    img: 'https://avatars2.githubusercontent.com/u/12934183?v=4?s=100',
    name: 'Do Khoa',
  },
  {
    href: 'https://github.com/immint023',
    img: 'https://avatars1.githubusercontent.com/u/38607460?v=4?s=100',
    name: 'Minh',
  },
  {
    href: 'https://github.com/maxwellfortney',
    img: 'https://avatars.githubusercontent.com/u/29241388?v=4?s=100',
    name: 'Maxwell Fortney',
  },
  {
    href: 'https://haoict.github.io/cydia/',
    img: 'https://avatars.githubusercontent.com/u/7247750?v=4?s=100',
    name: 'Hao Nguyen',
  },
  {
    href: 'https://github.com/atrinh0',
    img: 'https://avatars.githubusercontent.com/u/16542463?v=4?s=100',
    name: 'An Trinh',
  },
];

export const META_DESCRIPTION =
  'The Spotit is a music extension compatible with Spotify that allows the user seamlessly play/pause/like or jump to previous or next track while surfing the web without having to navigate to the Spotify user interface';

export const LOGO = 'logo.png';
