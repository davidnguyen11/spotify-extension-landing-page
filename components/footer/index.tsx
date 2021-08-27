const data = [
  {
    href: 'https://www.linkedin.com/in/dzungnguyen179/',
    text: 'Linkedin',
  },
  {
    href: 'https://github.com/davidnguyen179',
    text: 'Github',
  },
  {
    href: 'https://twitter.com/davidnguyen1791',
    text: 'Twitter',
  },
  {
    href: 'https://www.paypal.com/paypalme/davidnguyen179',
    text: 'Buy me a coffee ☕️',
  },
  {
    href: 'https://github.com/davidnguyen179/spotify-extension-landing-page/issues',
    text: 'Bug report 🐞',
  },
];

export const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row space-x-0 md:mx-64 md:space-x-5 mt-12 border-t border-gray-200 p-5 text-center">
      {data.map((item) => {
        const { href, text } = item;
        return (
          <div key={href}>
            <a className="block p-1" href={href} target="_blank" rel="noreferrer">
              {text}
            </a>
          </div>
        );
      })}
    </footer>
  );
};
