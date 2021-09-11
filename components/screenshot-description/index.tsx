import type { BackgroundColor } from '../screenshot';

interface Props {
  heading?: string;
  postText?: string[];
  postLink?: string[];
  alignText?: 'left' | 'right';
  subHeading: string;
  color?: BackgroundColor;
  children?: React.ReactNode;
}

export const ScreenShotDescription = (props: Props) => {
  const { heading, subHeading, children, color, postText, postLink, alignText } = props;
  const textColor = `text-spotify-${color}`;

  return (
    <>
      {heading && <span className="text-lg md:text-2xl">{heading}</span>}
      <div className="text-lg md:text-3xl">
        <span className={textColor}>{subHeading}</span>
      </div>
      {postText && (
        <div className={`md:flex md:flex-col text-md font-normal italic text-${alignText}`}>
          {postText.map((text, index) => (
            <div key={`post_text_${index}`}>{text}</div>
          ))}
        </div>
      )}

      {postLink && (
        <div className={`md:flex md:flex-col text-lg font-normal  text-${alignText}`}>
          <div className="underline italic">
            {postLink.map((link, index) => (
              <a href={link} key={`post_text_${index}`}>
                {link}
              </a>
            ))}
          </div>
          {children}
        </div>
      )}
    </>
  );
};
