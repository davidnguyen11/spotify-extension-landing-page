import type { BackgroundColor } from '../components/screenshot';

type TextColor = BackgroundColor;

interface Data {
  src: string;
  title: string;
  category?: string;
  reverse: boolean;
  color?: BackgroundColor;
  textColor?: 'white' | 'black';
  spotifyTextColor?: TextColor;
  text?: string[];
  link?: string[];
}

export const HOST = 'https://spotify-extension.netlify.app';

export const GA_TRACKING_ID = 'UA-147652451-2';

export const data: Data[] = [
  {
    src: '/images/moved.png',
    title: 'WE ARE MOVING',
    category: '🚚 🚚 🚚 💨',
    reverse: false,
    spotifyTextColor: 'deep-blue',
    textColor: 'black',
    text: [`redirect to`],
    link: ['https://www.spotit.page'],
  },
];
