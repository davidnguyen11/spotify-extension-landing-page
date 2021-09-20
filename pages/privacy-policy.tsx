import type { NextPage } from 'next';
import Head from 'next/head';

import { Header } from '../components/header';
import { data, NAVIGATION, HOST, LOGO, META_DESCRIPTION } from '../utils/constants';

const TITLE = 'Spotit - Privacy Policy';
const { privacyPolicy } = NAVIGATION;

const PrivacyPolicy: NextPage = () => {
  const slideIndex = 1;
  const currentElement = data[slideIndex];
  const bgColor = `bg-${currentElement.color}`;
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
        <div className="flex flex-col items-center md:space-x-4 mt-16">
          <div className="md:max-w-screen-md px-4">
            <div className={`text-center text-3xl md:text-4xl`}>
              <strong className="bg-clip-text text-transparent bg-kyeMeh">{privacyPolicy.text}</strong>
            </div>
            <div className="text-lg mt-10">
              Spotify Player Chrome Web Store & Mozilla Add-on Store & Microsoft Edge Add-on Store Privacy Policies.
            </div>
            <div className="text-lg mt-10">
              <strong>I. Introduction</strong>
              <p>
                This is a mini Spotify player that allows the user seamlessly play/pause/like or jump to previous or
                next track while surfing the web without having to navigate to the Spotify user interface.
              </p>
            </div>

            <div className="text-lg mt-7">
              <strong>II. Information We Collect</strong>
              <ul className="list-decimal">
                <li className="ml-10">It does not collect your data</li>
                <li className="ml-10">It stores data only locally on your hard drive using localStorage API</li>
                <li className="ml-10">It does not store anything on servers on the Internet</li>
              </ul>
            </div>

            <div className="text-lg mt-7">
              <strong>III. How it uses your cookies</strong>
              <p>
                It uses your cookies data to get song information to display in the extension and allow you to control
                your music player via Spotify API.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PrivacyPolicy;
