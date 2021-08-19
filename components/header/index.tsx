import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'How does it look like?', href: '#how-does-it-look-like', current: false },
  { name: 'Installation', href: '#installation', current: false },
  { name: 'Buy me a coffee', href: '#buy-me-a-coffee', current: false },
  { name: 'Follow me', href: 'https://twitter.com/davidnguyen1791', current: false },
];

interface Props {
  bgColor?: string;
  textColor?: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function Header(props: Props) {
  const { bgColor, textColor } = props;

  return (
    <Disclosure as="nav" className={`ease-in-out duration-500 ${bgColor}`}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="ml-4 lg:block h-9 w-auto"
                    src="/spotify-extension-64x64.png"
                    alt="Spotify Exntesion"
                  />
                  <span className={`ml-4 font-bold text-lg text-${textColor}`}>Spotify Extension</span>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>

                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          textColor === 'white' ? 'hover:bg-gray-900' : 'hover:bg-gray-300',
                          'px-3 py-2 rounded-md text-sm font-medium',
                          `text-${textColor}`
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    textColor === 'white' ? 'hover:bg-gray-900' : 'hover:bg-gray-300',
                    'block px-3 py-2 rounded-md text-base font-medium',
                    `text-${textColor}`
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
