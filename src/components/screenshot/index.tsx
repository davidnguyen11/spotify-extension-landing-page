interface Props {
  imgSrc: string;
  imgTitle: string;
  bgColor: BackgroundColor;
  children: React.ReactNode;
  reverse?: boolean;
}

export type BackgroundColor =
  | 'pink'
  | 'metapolis'
  | 'green'
  | 'champagne'
  | 'orange'
  | 'atlas'
  | 'almost'
  | 'evening'
  | 'purple'
  | 'deepSea'
  | 'blush'
  | 'aurora'
  | 'ubuntu'
  | 'night'
  | 'moss';

export const ScreenShot = (props: Props) => {
  const { imgSrc, imgTitle, children, reverse, bgColor } = props;

  const backgroundColor = `bg-${bgColor}`;

  let rootStyle = `flex flex-col md:flex-row md:space-x-4 mt-10`;

  let leftNode = (
    <div className="md:flex-auto md:pr-4">
      <div className="font-bold flex flex-col justify-center items-center md:items-end h-full">{children}</div>
    </div>
  );

  let rightNode = (
    <div className={`md:flex-auto ${backgroundColor}`}>
      <img src={imgSrc} alt={imgTitle} loading="lazy" />
    </div>
  );

  if (reverse) {
    rootStyle = `${rootStyle} flex-col-reverse`;

    leftNode = (
      <div className={`md:flex-auto ${backgroundColor}`}>
        <div className="font-bold flex flex-col justify-center items-center md:items-end h-full">
          <img src={imgSrc} alt={imgTitle} />
        </div>
      </div>
    );

    rightNode = (
      <div className="md:flex-auto md:pl-4">
        <div className="font-bold flex flex-col justify-center items-center md:items-start h-full">{children}</div>
      </div>
    );
  }

  return (
    <div className={rootStyle}>
      {leftNode}
      {rightNode}
    </div>
  );
};
