import type { BackgroundColor } from '../screenshot';

interface Props {
  heading?: string;
  postText?: string[];
  alignText?: 'left' | 'right';
  subHeading: string;
  color: BackgroundColor;
}

export const ScreenShotDescription = (props: Props) => {
  const { heading, subHeading, color, postText, alignText } = props;
  const textColor = `text-spotify-${color}`;

  return (
    <>
      {heading && <span className="text-lg md:text-2xl">{heading}</span>}
      <div className="text-lg md:text-3xl">
        <span className={textColor}>{subHeading}</span>
      </div>
      {postText &&
        <div className={`hidden md:flex md:flex-col text-md font-normal italic text-${alignText}`}>
          {postText.map((text, index) => <div key={`post_text_${index}`}>{text}</div>)}
        </div>}
    </>
  )
}
