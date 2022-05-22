import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Header } from '../../components/header';
import { Donation as DonationComponent } from '../../components/donation';
import { data, banks, HOST, META_DESCRIPTION, NAVIGATION, LOGO } from '../../utils/constants';
import type { BankName } from '../../utils/constants';

const TITLE = 'Spotit - Donation';

const Donation: NextPage = () => {
  const slideIndex = 4;
  const currentElement = data[slideIndex];
  const bgColor = `bg-${currentElement.color}`;
  const textColor = `${currentElement.textColor}`;
  const { buyMeACoffee } = NAVIGATION;

  const router = useRouter();
  const { bank: bankName } = router.query;
  const bank = banks[bankName as BankName];
  let qrComponent = <DonationComponent />;
  let title = (
    <div className="flex flex-col items-center md:space-x-4 mt-16 md:mt-28">
      <div id={buyMeACoffee.id} className={`text-center text-3xl md:text-4xl`}>
        <strong className="bg-clip-text text-transparent bg-deep-blue">{buyMeACoffee.text}</strong>
        <span> ☕️</span>
      </div>
    </div>
  );

  if (bank) {
    qrComponent = <img src={bank.qr} alt={bank.title} loading="lazy" />;
    title = (
      <div className={`text-center text-3xl md:text-4xl mb-4`}>
        <strong className="bg-clip-text text-transparent bg-atlas">{bank.title}</strong>
      </div>
    );
  }

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
        <div className="flex flex-col items-center md:space-x-4 mt-8 md:my-14">
          {title}
          <div className="text-lg mt-2 px-4">{qrComponent}</div>
        </div>
      </main>
    </>
  );
};

export default Donation;
