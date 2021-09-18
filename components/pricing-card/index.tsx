interface Props {
  title: string;
  src: string;
  href: string;
  downloads: string;
}

export const PricingCard = (props: Props) => {
  const { title, src, href, downloads } = props;

  return (
    <div className="relative sm:max-w-none">
      <div className="relative rounded-xl p-px sm:shadow-md">
        <div className="rounded-xl py-7 md:py-10">
          <div className="px-8">
            <div>
              <strong>{title}</strong>
              <div className="font-medium mb-10 sm:mb-8 lg:mb-10 mt-5">
                <span className="flex items-center justify-center lg:mb-5">
                  <img className="w-36 h-36 object-contain" src={src} alt={title} />
                </span>
                <div className="mt-5 flex flex-col">
                  <span className="text-3xl">{downloads}</span>
                  <i> downloads</i>
                </div>
              </div>
            </div>


            <div className="xl:block">
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded"
              >
                Install
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
