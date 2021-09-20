import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { NAVIGATION } from '../../utils/constants';

interface Props {
  bgColor?: string;
  textColor?: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function Header(props: Props) {
  const { bgColor, textColor } = props;
  const { whatDoesItLookLike, installation, buyMeACoffee, qr, contributors, followMe } = NAVIGATION;

  const svgStyle = {
    fill: textColor === 'black' ? '#000' : '#fff',
  };

  const navigation = [
    {
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
      name: buyMeACoffee.text,
      href: `/#${buyMeACoffee.id}`,
      current: false,
      icon: (
        <svg
          style={svgStyle}
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
    {
      name: contributors.text,
      href: `/#${contributors.id}`,
      icon: (
        <svg style={svgStyle} className="inline-block mr-1" width={20} height={20} viewBox="0 0 512 512">
          <path d="M220.918,279.888A39.441,39.441,0,0,1,216,279.2v17.613a39.887,39.887,0,0,1,16,0V279.2A40.377,40.377,0,0,1,220.918,279.888Z" />
          <path d="M440,203.8V336a8,8,0,0,1-8,8H408a8,8,0,0,1-6.484-3.314L354.811,276.05c-.049-.068-.1-.137-.145-.206A24,24,0,1,0,314.9,302.716l51.894,76.805a8,8,0,0,1,1.227,5.994A72.085,72.085,0,0,0,440,456h48V287.059A24.094,24.094,0,0,0,485.3,276Z" />
          <path d="M323.479,344H263.2A40.012,40.012,0,0,1,216,375.2V424H361.639a87.4,87.4,0,0,1-9.611-37.746Z" />
          <path d="M225.879,359.933A24.081,24.081,0,0,0,246.632,344H240a8,8,0,0,1-8-8V313.377a24,24,0,0,0-20,1.831,8,8,0,0,1-12-6.928V271.95A40.182,40.182,0,0,1,184.805,248H151.192a40.01,40.01,0,0,1-39.14,48.005q-1.469,0-2.949-.105A40.009,40.009,0,0,1,72.8,248H24V400a24.027,24.027,0,0,0,24,24H200V363.72a8,8,0,0,1,12-6.928A24.068,24.068,0,0,0,225.879,359.933Z" />
          <path d="M91.209,236a8,8,0,0,1,0,8,24,24,0,0,0,37.141,29.57A24.017,24.017,0,0,0,132.792,244a8,8,0,0,1,6.928-12h45.073A39.79,39.79,0,0,1,200,208.025V183.2a40.009,40.009,0,0,1-47.9-36.3,39.65,39.65,0,0,1,10.623-30.149A40,40,0,0,1,200,104.808V56H48A24.027,24.027,0,0,0,24,80V232H84.28A8,8,0,0,1,91.209,236Z" />
          <path d="M222.12,263.933A24.009,24.009,0,0,0,236,260.792a8,8,0,0,1,12,6.928V328h64.668l-11.031-16.326a40,40,0,0,1,66.212-44.9L412.089,328H424V176a24.027,24.027,0,0,0-24-24H248v60.28a8,8,0,0,1-12,6.928A24.024,24.024,0,0,0,224,216a24.008,24.008,0,0,0-23.94,25.763A24.058,24.058,0,0,0,222.12,263.933Z" />
        </svg>
      ),
    },
    {
      name: qr.text,
      href: `/#${qr.id}`,
      icon: (
        <svg style={svgStyle} className="inline-block mr-1" width={15} height={15} viewBox="0 0 24 24">
          <path d="M17.25 0H6.75A2.752 2.752 0 0 0 4 2.75v18.5A2.752 2.752 0 0 0 6.75 24h10.5A2.752 2.752 0 0 0 20 21.25V2.75A2.752 2.752 0 0 0 17.25 0zM18 21a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h.5c.552 0 1 .448 1 1s.448 1 1 1h5c.552 0 1-.448 1-1s.448-1 1-1h.5a1 1 0 0 1 1 1z" />
          <path d="M7.75 10.389a.75.75 0 0 1-.75-.75V7.75A.75.75 0 0 1 7.75 7h1.889a.75.75 0 0 1 0 1.5H8.5v1.139a.75.75 0 0 1-.75.75zM16.25 17h-2.833a.75.75 0 0 1 0-1.5H15.5v-1.139a.75.75 0 0 1 1.5 0v1.889a.75.75 0 0 1-.75.75zM16.25 12.028h-2.583a.75.75 0 0 1-.75-.75V7.75a.75.75 0 0 1 .75-.75h2.583a.75.75 0 0 1 .75.75v3.528a.75.75 0 0 1-.75.75zm-1.833-1.5H15.5V8.5h-1.083zM11.278 17H7.75a.75.75 0 0 1-.75-.75v-2.583a.75.75 0 0 1 .75-.75h3.528a.75.75 0 0 1 .75.75v2.583a.75.75 0 0 1-.75.75zM8.5 15.5h2.028v-1.083H8.5zM10.554 12.278H7.75a.75.75 0 0 1 0-1.5h2.804a.75.75 0 0 1 0 1.5z" />
          <path d="M13.417 15.111a.75.75 0 0 1-.75-.75v-.945a.75.75 0 0 1 1.5 0v.945a.75.75 0 0 1-.75.75zM11.528 10.389a.75.75 0 0 1-.75-.75V7.75a.75.75 0 0 1 1.5 0v1.889a.75.75 0 0 1-.75.75z" />
        </svg>
      ),
    },
    {
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
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>

                <div className="hidden md:block md:ml-6">
                  <div className="flex">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          textColor === 'white' ? 'hover:bg-gray-900' : 'hover:bg-gray-300',
                          'px-3 py-2 rounded-md text-sm font-medium',
                          `text-${textColor}`,
                          'flex justify-center items-center'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.icon}
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="block md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    textColor === 'white' ? 'hover:bg-gray-900' : 'hover:bg-gray-300',
                    'block px-3 py-2 rounded-md text-base font-medium',
                    `text-${textColor}`,
                    'flex items-center'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.icon}
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
