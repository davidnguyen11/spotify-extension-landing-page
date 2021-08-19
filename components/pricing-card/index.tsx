interface Props {
  title: string;
  src: string;
  href: string;
}

export const PricingCard = (props: Props) => {
  const { title, src, href } = props;

  return (
    <div className="relative sm:max-w-none">
      <div className="relative rounded-xl p-px sm:shadow-md">
        <div className="rounded-xl py-7 md:py-10">
          <div className="sm:grid sm:grid-cols-2 sm:items-center sm:gap-x-10 md:gap-x-24 lg:gap-x-16 xl:flex xl:flex-col px-8">
            <div>
              <strong>{title}</strong>
              <div className="font-medium mb-10 sm:mb-8 lg:mb-10 mt-5">
                <span className="flex items-center justify-center">
                  <img className="w-36" src={src} alt={title} />
                </span>
              </div>
            </div>

            <div className="sm:hidden xl:block">
              <a href={href} target="_blank" rel="noreferrer" className="bg-spotify-green hover:bg-spotify-dark-green px-8 py-2 rounded">
                Install
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}