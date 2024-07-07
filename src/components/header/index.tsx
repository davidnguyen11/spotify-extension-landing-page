'use client';
import { Disclosure, DisclosureButton } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NAVIGATION } from '@/utils/constants';

interface Props {
  bgColor?: string;
  textColor?: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function Header(props: Props) {
  const { bgColor, textColor } = props;
  const { whatDoesItLookLike, installation, buyMeACoffee, qr, followMe } = NAVIGATION;
  const white = '#fff';
  const black = '#000';

  const svgStyle = {
    fill: textColor === 'black' ? black : white,
  };

  const navigation = [
    {
      id: whatDoesItLookLike.id,
      name: whatDoesItLookLike.text,
      href: `/#${whatDoesItLookLike.id}`,
      current: false,
      icon: (
        <svg style={svgStyle} className="inline-block mr-1" width={15} height={15} viewBox="0 0 24 24">
          <g>
            <g>
              <path d="m6.25 19.5c-1.601 0-3.025-1.025-3.542-2.551l-.035-.115c-.122-.404-.173-.744-.173-1.084v-6.818l-2.426 8.098c-.312 1.191.399 2.426 1.592 2.755l15.463 4.141c.193.05.386.074.576.074.996 0 1.906-.661 2.161-1.635l.901-2.865z" />
            </g>
            <path d="m9 9c1.103 0 2-.897 2-2s-.897-2-2-2-2 .897-2 2 .897 2 2 2z" />
          </g>
          <path d="m21.5 2h-15c-1.378 0-2.5 1.122-2.5 2.5v11c0 1.378 1.122 2.5 2.5 2.5h15c1.378 0 2.5-1.122 2.5-2.5v-11c0-1.378-1.122-2.5-2.5-2.5zm-15 2h15c.276 0 .5.224.5.5v7.099l-3.159-3.686c-.335-.393-.82-.603-1.341-.615-.518.003-1.004.233-1.336.631l-3.714 4.458-1.21-1.207c-.684-.684-1.797-.684-2.48 0l-2.76 2.759v-9.439c0-.276.224-.5.5-.5z" />
        </svg>
      ),
    },
    {
      id: installation.id,
      name: installation.text,
      href: `/#${installation.id}`,
      current: false,
      icon: (
        <svg style={svgStyle} className="inline-block mr-1" width={15} height={15} viewBox="0 0 451.111 451.111">
          <path d="m225.556 354.445 145-145-48.333-48.333-64.444 64.444v-225.556h-64.444v225.556l-64.444-64.444-48.333 48.333z" />
          <path d="m0 386.667h451.111v64.444h-451.111z" />
        </svg>
      ),
    },
    {
      id: followMe.id,
      name: followMe.text,
      href: followMe.href,
      current: false,
      icon: (
        <svg
          style={svgStyle}
          className="inline-block mr-1"
          width={15}
          height={15}
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
        >
          <g>
            <g>
              <path
                d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016
			c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992
			c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056
			c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152
			c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792
			c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44
			C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568
			C480.224,136.96,497.728,118.496,512,97.248z"
              />
            </g>
          </g>
        </svg>
      ),
    },
    {
      id: buyMeACoffee.id,
      name: buyMeACoffee.text,
      href: `/#${buyMeACoffee.id}`,
      current: false,
      icon: (
        <svg
          style={{ fill: white }}
          className="inline-block mr-1"
          width={15}
          height={15}
          x="0px"
          y="0px"
          viewBox="0 0 511.999 511.999"
        >
          <g>
            <g>
              <path
                d="M199.27,79.251c-4.726,4.732-8.95,9.808-13.326,14.785c43.793,9.596,86.906,32.061,125.259,64.169
			c21.599-53.788,63.911-94.925,119.773-113.938l35.301-12.018C400.239-24.068,283.884-5.377,199.27,79.251z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M488.063,56.528L440.649,72.67c-51.01,17.371-88.954,56.239-105.578,106.762c42.189,42.653,70.964,94.195,82.419,147.032
			c5.139-4.501,10.367-8.869,15.248-13.744C512.983,232.463,533.946,124.039,488.063,56.528z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M322.6,444.63c-19.229-58.522-68.693-100.897-129.09-112.843C123.367,317.865,67.263,267.17,44.223,199.474
			l-12.017-35.302c-56.317,66.038-37.612,183.981,47.003,268.61c52.673,52.673,118.302,79.177,176.296,79.177
			c30.282,0,58.298-7.907,81.469-23.596L322.6,444.63z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M312.677,199.312c-80.244-80.244-188.678-102.817-256.192-56.928l16.141,47.417
			c19.61,57.583,67.052,100.7,126.717,112.542c71.008,14.055,129.177,64.112,151.776,132.906l10.301,31.34
			C417.811,400.567,397.322,283.972,312.677,199.312z"
              />
            </g>
          </g>
        </svg>
      ),
    },
  ];


  return (
    <Disclosure as="nav" className={`ease-in-out duration-500 ${bgColor}`}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <a href="/">
                    <img
                      className="ml-4 lg:block h-9 w-auto"
                      src="/spotify-extension-64x64.png"
                      alt="Spotify Exntesion"
                    />
                  </a>
                  <span className={`ml-4 font-bold text-lg text-${textColor}`}>Spotify Extension</span>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>

                <div className="hidden md:block md:ml-6">
                  <div className="flex gap-2">
                    {navigation.map((item) => {
                      let className = classNames(
                        textColor === 'white' ? 'hover:bg-gray-900' : 'hover:bg-gray-300',
                        'px-3 py-2 rounded-md text-sm font-medium',
                        `text-${textColor}`,
                        'flex justify-center items-center'
                      );

                      if (item.id === buyMeACoffee.id) {
                        className = classNames(
                          'bg-gray-900',
                          'px-3 py-2 rounded-md text-sm font-medium',
                          `text-white`,
                          'flex justify-center items-center'
                        );
                      }

                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className={className}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.icon}
                          {item.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="block md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                let className = classNames(
                  textColor === 'white' ? 'hover:bg-gray-900' : 'hover:bg-gray-300',
                  'block px-3 py-2 rounded-md text-base font-medium',
                  `text-${textColor}`,
                  'flex items-center'
                );

                if (item.id === buyMeACoffee.id) {
                  className = classNames(
                    'bg-gray-900',
                    'block px-3 py-2 rounded-md text-base font-medium',
                    `text-white`,
                    'flex items-center'
                  );
                }

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={className}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.icon}
                    {item.name}
                  </a>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
