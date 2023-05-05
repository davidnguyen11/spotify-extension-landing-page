import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Header } from '../components/header';
import { Slideshow } from '../components/slideshow';
import { ScreenShot } from '../components/screenshot';
import { Avatar } from '../components/avatar';
import { ScreenShotDescription } from '../components/screenshot-description';
import { PricingCard } from '../components/pricing-card';
import { data, stores, NAVIGATION, HOST, META_DESCRIPTION, LOGO } from '../utils/constants';
import { Donation } from '../components/donation';

const TITLE = 'Spotit - A music extension compatible with Spotify';

const { motivation, whatDoesItLookLike, installation, buyMeACoffee, qr } = NAVIGATION;

const Home: NextPage = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleChangeSlide = (index: number) => {
    setSlideIndex(index);
  };

  const currentElement = data[slideIndex];
  const bgColor = `bg-${currentElement.color}`;
  const spotifyTextColor = `bg-${currentElement.spotifyTextColor}`;
  const textColor = `${currentElement.textColor}`;

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="title" content={TITLE} />
        <meta name="description" content={META_DESCRIPTION} />

        <meta property="og:url" content={HOST} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:image" content={`${HOST}/${LOGO}`} />

        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={META_DESCRIPTION} />
      </Head>
      <Header bgColor={bgColor} textColor={textColor} />
      <main>
        <div className={`flex flex-col md:flex-row h-500px text-white ease-in-out duration-500 ${bgColor}`}>
          <div className="mt-10 md:mt-0 md:w-2/4 md:pr-4">
            <div className="font-bold flex flex-col justify-center items-center md:items-end h-full">
              <span className={`text-2xl text-${textColor}`}>Cross-browser</span>
              <div>
                <span className={`text-4xl bg-clip-text text-transparent ${spotifyTextColor}`}>Spotify</span>{' '}
                <span className={`text-3xl text-${textColor}`}>extension</span>
              </div>

              <a
                href="#installation"
                className={`${spotifyTextColor} shadow-md block px-7 text-white py-2 mt-6 rounded`}
              >
                Install
              </a>
            </div>
          </div>

          <div className="md:w-2/4 relative">
            <Slideshow onChange={handleChangeSlide}>
              {data.map((item, index) => {
                const { src, title } = item;

                return <img src={src} alt={title} key={index} loading="lazy" />;
              })}
            </Slideshow>
          </div>
        </div>

        <div className="flex flex-col items-center md:space-x-4 mt-16 md:mt-28">
          <div className="md:max-w-screen-md px-4">
            <div className={`text-center text-3xl md:text-4xl`}>
              <strong className="bg-clip-text text-transparent bg-night">{motivation.text}</strong>
            </div>
            <div className="text-lg mt-10">
              It can be inconvenient to switch to another window when working or browsing to control Spotify, as it can
              cause distractions and loss of focus. However, with our simple extension, you can easily control Spotify
              without navigating away from your current window. Moreover, our extension includes a nifty feature - by
              right-clicking the widget, you can quickly search for a song by name. This way, you can seamlessly search
              for songs on Spotify while browsing other websites, allowing you to add them to your playlist at a later
              time.
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:space-x-4 mt-16 md:mt-28">
          <div id={buyMeACoffee.id} className={`text-center text-3xl md:text-4xl`}>
            <strong className="bg-clip-text text-transparent bg-deep-blue">{buyMeACoffee.text}</strong>
            <span> ☕️</span>
          </div>
        </div>

        <Donation />
        <div className="flex flex-col items-center md:space-x-4 mt-16 md:mt-28">
          <div id={whatDoesItLookLike.id} className={`text-center text-3xl md:text-4xl`}>
            <strong className="bg-clip-text text-transparent bg-pink1">{whatDoesItLookLike.text}</strong>
          </div>
        </div>

        {data.map((item, index) => {
          const { color, src, title, category, reverse, text } = item;
          return (
            <ScreenShot reverse={reverse} key={index} bgColor={color} imgSrc={src} imgTitle={title}>
              <ScreenShotDescription
                heading={category}
                subHeading={title}
                color={color}
                postText={text}
                alignText={reverse ? 'left' : 'right'}
              />
            </ScreenShot>
          );
        })}

        <div className="flex flex-col items-center md:space-x-4 mt-16 md:mt-28">
          <div id={installation.id} className={`text-center text-3xl md:text-4xl`}>
            <strong className="bg-clip-text text-transparent bg-purple1">{installation.text}</strong>
          </div>
        </div>

        <div className="text-center mt-10">
          <div className="flex flex-col justify-center md:flex-row md:mx-64 md:space-x-5">
            {stores.map((item) => {
              const { image, title, href, downloads } = item;
              return <PricingCard key={title} src={image} title={title} href={href} downloads={downloads} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
