const data = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: 'https://twitter.com/davidnguyen121',
    text: 'Twitter',
  },
  {
    href: '/privacy-policy',
    text: 'Privacy Policy',
  },
  {
    href: '/contact',
    text: 'Contact',
  },
  {
    href: 'https://github.com/davidnguyen179/spotify-extension-landing-page/issues',
    text: 'Bug report 🐞',
  },
];

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="md:mx-64 mt-12 border-t border-gray-200 p-5 text-center">
      <div className="flex flex-col md:flex-row space-x-0 justify-center md:space-x-5">
        {data.map((item) => {
          const { href, text } = item;
          return (
            <div key={href}>
              <a className="block p-1" href={href}>
                {text}
              </a>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col md:flex-row justify-center mt-2">© {year} Dzung Nguyen. All rights reserved.</div>
    </footer>
  );
};
