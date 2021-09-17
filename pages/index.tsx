import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Slideshow } from '../components/slideshow';
import { ScreenShot } from '../components/screenshot';
import { ScreenShotDescription } from '../components/screenshot-description';
import { PricingCard } from '../components/pricing-card';
import { data, stores, NAVIGATION, HOST } from '../utils/constants';

const TITLE = 'Spotit - A music extension compatible with Spotify';
const DESCRIPTION =
  'The Spotit is a music extension compatible with Spotify that allows the user seamlessly play/pause/like or jump to previous or next track while surfing the web without having to navigate to the Spotify user interface';
const IMAGE = 'logo.png';

const { motivation, whatDoesItLookLike, installation, buyMeACoffee } = NAVIGATION;

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
        <meta name="description" content={DESCRIPTION} />

        <meta property="og:url" content={HOST} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={`${HOST}/${IMAGE}`} />

        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
      </Head>
      <Header bgColor={bgColor} textColor={textColor} />
      <main>
        <div className={`flex flex-col md:flex-row h-96 text-white ease-in-out duration-500 ${bgColor}`}>
          <div className="mt-10 md:mt-0 md:w-2/4 md:pr-4">
            <div className="font-bold flex flex-col justify-center items-center md:items-end h-full">
              <span className={`text-2xl text-${textColor}`}>Cross-browser</span>
              <div>
                <span className={`text-4xl bg-clip-text text-transparent ${spotifyTextColor}`}>Spotify</span>{' '}
                <span className={`text-3xl text-${textColor}`}>extension</span>
              </div>

              <a href="#installation" className={`${spotifyTextColor} shadow-md block px-7 text-white py-2 mt-6 rounded`}>
                Install
              </a>
            </div>
          </div>

          <div className="md:w-2/4 relative">
            <Slideshow onChange={handleChangeSlide}>
              {data.map((item, index) => {
                const { src, title } = item;

                return (
                  <div key={index} className="block">
                    <img src={src} alt={title} />
                  </div>
                );
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
              When we are working or just browsing it is inconvenient to have to switch to another window to play/pause
              or jump to previous tracks or forward to upcoming tracks. Also, we lose focus or get distracted once we
              navigate away from our current window and open Spotify. With this simple extension we can eliminate the
              need to navigate away from your current window to control Spotify. This extension has another nifty
              feature. With a quick right click on the widget, you can search a song by name. So for example if you hear
              a tune on Youtube you can quickly search it on Spotify without navigating away from your current window.
              Then you can maybe add it to a playlist later.
            </div>
          </div>
        </div>

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

        <div className="flex flex-col items-center md:space-x-4 my-16 md:my-28">
          <div className="md:max-w-screen-md px-4">
            <div id={buyMeACoffee.id} className={`text-center text-3xl md:text-4xl`}>
              <strong className="bg-clip-text text-transparent bg-deep-blue">{buyMeACoffee.text}</strong>
              <span> ☕️</span>
            </div>
            <div className="flex flex-col text-lg text-center mt-10">
              <div>I work so hard to make this product free for everyone.</div>

              <div>If you like the product. Consider to donate me here: 😉</div>

              <div className="mt-5">
                <a
                  className="bg-spotify-web-gold hover:bg-spotify-dark-web-gold px-8 py-3 mt-5 rounded"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.paypal.com/paypalme/davidnguyen179"
                >
                  <svg
                    className="inline-block mr-1"
                    width={20}
                    height={20}
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <svg x="0px" y="0px" viewBox="0 0 512.001 512.001">
                      <path
                        style={{ fill: '#03A9F4' }}
                        d="M425.457,117.739c-3.121-1.838-6.961-1.966-10.197-0.341c-3.231,1.629-5.416,4.786-5.803,8.384 c-0.384,3.499-0.981,6.997-1.728,10.667c-20.885,94.784-62.827,140.885-128.256,140.885h-96c-5.062,0.009-9.42,3.574-10.432,8.533 l-32,149.995l-5.717,38.187c-3.287,17.365,8.125,34.107,25.489,37.394c1.915,0.362,3.858,0.549,5.807,0.558h64.213 c14.718,0.045,27.55-10,31.04-24.299l25.941-103.701h55.659c65.685,0,111.083-52.373,127.829-147.477l0,0 C482.356,191.238,464.068,143.856,425.457,117.739z"
                      ></path>
                      <path
                        style={{ fill: '#283593' }}
                        d="M405.339,38.017c-21.078-23.909-51.327-37.731-83.2-38.016h-176.64 C119.064-0.141,96.558,19.2,92.721,45.355L37.873,411.243c-2.627,17.477,9.41,33.774,26.887,36.402 c1.586,0.239,3.189,0.357,4.793,0.356h81.92c5.062-0.009,9.42-3.574,10.432-8.533l30.187-140.8h87.467 c75.904,0,126.059-53.056,149.099-157.867c0.926-4.178,1.638-8.4,2.133-12.651C436.139,95.815,426.81,62.778,405.339,38.017z"
                      ></path>
                    </svg>
                  </svg>
                  Paypal
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
