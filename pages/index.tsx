import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { ScreenShot } from '../components/screenshot';
import { ScreenShotDescription } from '../components/screenshot-description';
import { data, HOST } from '../utils/constants';

const TITLE = 'Spotit - A music extension compatible with Spotify';
const DESCRIPTION =
  'The Spotit is a music extension compatible with Spotify that allows the user seamlessly play/pause/like or jump to previous or next track while surfing the web without having to navigate to the Spotify user interface';
const IMAGE = 'logo.png';

const ONE_SECOND_IN_MS = 1000;
const FIVE_SECONDS = 5;
const DOMAIN = 'https://www.spotit.page/';

const Home: NextPage = () => {
  let [count, setCount] = useState(FIVE_SECONDS);

  useEffect(() => {
    const timer = setInterval(() => {
      count--;
      setCount(count);

      if (count === 0) {
        clearInterval(timer);
        window.location.href = DOMAIN;
      }
    }, ONE_SECOND_IN_MS);
  });

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="title" content={TITLE} />
        <meta name="description" content={DESCRIPTION} />

        <meta property="og:url" content={HOST} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={`${HOST}/${IMAGE}`} />

        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
      </Head>
      <Header logoLink={DOMAIN} bgColor="bg-spotify-deep-blue" textColor="white" />
      <main>
        {data.map((item, index) => {
          const { src, title, category, reverse, text, link } = item;
          return (
            <ScreenShot reverse={reverse} key={index} imgSrc={src} imgTitle={title}>
              <ScreenShotDescription
                heading={category}
                subHeading={title}
                postText={text}
                postLink={link}
                alignText={reverse ? 'left' : 'right'}
              >
                <div className="text-center md:text-right">in {count}s</div>
              </ScreenShotDescription>
            </ScreenShot>
          );
        })}
      </main>
      <Footer />
    </>
  );
};

export default Home;
