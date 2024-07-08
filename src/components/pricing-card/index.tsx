interface Props {
  title: string;
  src: string;
  href: string;
  downloads?: string;
  mode?: 'donation' | 'installation';
}

export const PricingCard = (props: Props) => {
  const { title, src, href, mode = 'installation', downloads } = props;
  let text = '';
  let anchorProps: React.AnchorHTMLAttributes<HTMLAnchorElement> = {
    href,
    className: `text-white px-8 py-2 rounded`,
  };

  switch (mode) {
    case 'installation':
      text = 'Install';
      anchorProps = {
        ...anchorProps,
        target: '_blank',
        rel: 'noreferrer',
        className: `${anchorProps.className} bg-purple-600 hover:bg-purple-700`,
      };
      break;
    case 'donation':
      text = '❤️ Donate';
      anchorProps = {
        ...anchorProps,
        className: `${anchorProps.className} bg-blue-600 hover:bg-blue-700`,
      };
      break;
  }

  return (
    <div className="relative sm:max-w-none">
      <div className="relative rounded-xl p-px sm:shadow-md">
        <div className="rounded-xl py-7 md:py-10">
          <div className="px-8">
            <div>
              <strong>{title}</strong>
              <div className="font-medium mb-10 sm:mb-8 lg:mb-10 mt-5">
                <span className="flex items-center justify-center lg:mb-5">
                  <img className="w-36 h-36 object-contain" src={src} alt={title} loading="lazy" />
                </span>
                {downloads && (
                  <div className="mt-5 flex flex-col">
                    <span className="text-3xl">{downloads}</span>
                    <i> downloads</i>
                  </div>
                )}
              </div>
            </div>

            <div className="xl:block">
              <a {...anchorProps}>{text}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
