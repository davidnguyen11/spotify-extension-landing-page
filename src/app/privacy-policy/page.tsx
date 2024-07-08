import type { Metadata, NextPage } from 'next';

import { Header } from '@/components/header';
import { data, NAVIGATION } from '@/utils/constants';

const { privacyPolicy } = NAVIGATION;

export const metadata: Metadata = {
  title: 'Spotit - Privacy Policy',
};

const PrivacyPolicy: NextPage = () => {
  const slideIndex = 1;
  const currentElement = data[slideIndex];
  const bgColor = `bg-${currentElement.color}`;
  const textColor = `${currentElement.textColor}`;

  return (
    <>
      <Header bgColor={bgColor} textColor={textColor} />
      <main>
        <div className="flex flex-col items-center md:space-x-4 mt-16">
          <div className="md:max-w-screen-md px-4">
            <div className={`text-center text-3xl md:text-4xl`}>
              <strong className="bg-clip-text text-transparent bg-kyeMeh">{privacyPolicy.text}</strong>
            </div>
            <div className="text-lg mt-10">
              Spotify Player Chrome Web Store, Mozilla Add-on Store, and Microsoft Edge Add-on Store Privacy Policies.
            </div>
            <div className="text-lg mt-10">
              <strong>I. Introduction</strong>
              <p>
                This is a mini Spotify player that allows the user seamlessly play/pause/like or jump to previous or
                next track while surfing the web without having to navigate to the Spotify user interface.
              </p>
            </div>

            <div className="text-lg mt-7">
              <strong>II. Information it collects</strong>
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
