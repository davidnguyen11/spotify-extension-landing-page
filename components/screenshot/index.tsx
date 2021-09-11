interface Props {
  imgSrc: string;
  imgTitle: string;
  bgColor?: BackgroundColor;
  children: React.ReactNode;
  reverse?: boolean;
}

export type BackgroundColor =
  | 'green'
  | 'dark-green'
  | 'deep-blue'
  | 'imperial'
  | 'web-gold'
  | 'yellow-orange'
  | 'electric-pink'
  | 'byzantine'
  | 'brilliant-azure'
  | 'champagne'
  | 'dark-blue';

export const ScreenShot = (props: Props) => {
  const { imgSrc, imgTitle, children } = props;

  let rootStyle = `flex flex-col md:flex-row md:space-x-4 mt-10`;

  let leftNode = (
    <div className="md:flex-auto md:pr-4">
      <div className="font-bold flex flex-col justify-center items-center md:items-end h-full">{children}</div>
    </div>
  );

  let rightNode = (
    <div className={`md:flex-auto p-7`}>
      <img src={imgSrc} alt={imgTitle} />
    </div>
  );

  return (
    <div className={rootStyle}>
      {leftNode}
      {rightNode}
    </div>
  );
};
