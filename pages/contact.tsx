import type { NextPage } from 'next';
import Head from 'next/head';

import { Header } from '../components/header';
import { data, NAVIGATION, HOST, META_DESCRIPTION, LOGO } from '../utils/constants';

const TITLE = 'Spotit - Contact me';
const { contact } = NAVIGATION;

const Contact: NextPage = () => {
  const slideIndex = 3;
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
              <strong className="bg-clip-text text-transparent bg-atlas">{contact.text}</strong>
            </div>
            <div className="text-lg mt-10">
              Hey! <a href="/">Spotit.page</a> is built and maintained by <b>Dzung Nguyen</b>
            </div>
            <div className="text-lg mt-10">
              <strong>Contact me:</strong>
            </div>

            <div className="text-lg mt-2">
              <ul className="list-disc">
                <li className="ml-5">
                  Twitter: <a href="https://twitter.com/davidnguyen1791">davidnguyen1791</a>
                </li>
                <li className="ml-5">Email: dzungnguyen179@gmail.com</li>
                <li className="ml-5">
                  Github: <a href="https://github.com/davidnguyen179">github.com/davidnguyen179</a>
                </li>
                <li className="ml-5">
                  Linkedin: <a href="https://www.linkedin.com/in/dzungnguyen179">linkedin.com/in/dzungnguyen179</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
