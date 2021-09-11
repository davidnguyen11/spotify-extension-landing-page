import { Disclosure } from '@headlessui/react';

interface Props {
  bgColor?: string;
  textColor?: string;
  logoLink?: string;
}

export function Header(props: Props) {
  const { bgColor, textColor, logoLink } = props;

  return (
    <Disclosure as="nav" className={`ease-in-out duration-500 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <a href={logoLink}>
                <img className="ml-4 lg:block h-9 w-auto" src="/spotify-extension-64x64.png" alt="Spotify Exntesion" />
              </a>
              <span className={`ml-4 font-bold text-lg text-${textColor}`}>Spotify Extension</span>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
