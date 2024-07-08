import type { Metadata, NextPage } from 'next';

import { Header } from '@/components/header';
import { data, NAVIGATION } from '@/utils/constants';

const { contact } = NAVIGATION;

export const metadata: Metadata = {
  title: 'Spotit - Contact me',
};

const Contact: NextPage = () => {
  const slideIndex = 3;
  const currentElement = data[slideIndex];
  const bgColor = `bg-ubuntu`;
  const textColor = `${currentElement.textColor}`;

  return (
    <>
      <Header bgColor={bgColor} textColor={textColor} />
      <main>
        <div className="flex flex-col items-center md:space-x-4 mt-16">
          <div className="md:max-w-screen-md px-4">
            <div className={`text-center text-3xl md:text-4xl`}>
              <strong className="bg-clip-text text-transparent bg-atlas">{contact.text}</strong>
            </div>
            <div className="text-lg mt-10">
              Hey! <a href="/">Spotit.page</a> is built and maintained by <b>David Nguyen</b>
            </div>
            <div className="text-lg mt-10">
              <strong>Contact me:</strong>
            </div>

            <div className="text-lg mt-2">
              <ul className="list-disc">
                <li className="ml-5">
                  Twitter:{' '}
                  <a className="underline" href="https://twitter.com/davidnguyen121" target="_blank">
                    @davidnguyen121
                  </a>
                </li>
                <li className="ml-5">Email: dzungnguyen179@gmail.com</li>
                <li className="ml-5">
                  Github:{' '}
                  <a className="underline" href="https://github.com/davidnguyen11" target="_blank">
                    @davidnguyen11
                  </a>
                </li>
                <li className="ml-5">
                  Linkedin:{' '}
                  <a className="underline" href="https://www.linkedin.com/in/davidnguyen121" target="_blank">
                    @davidnguyen121
                  </a>
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
