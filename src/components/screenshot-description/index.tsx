import type { BackgroundColor } from '../screenshot';

interface Props {
  heading?: string;
  postText?: string[];
  alignText?: 'start' | 'end';
  subHeading: string;
  color: BackgroundColor;
}

export const ScreenShotDescription = (props: Props) => {
  const { heading, subHeading, color, postText, alignText } = props;
  const bgImage = `bg-${color}`;

  const align = alignText === 'start' ? 'items-start' : 'items-end';

  return (
    <>
      {heading && <span className="text-lg md:text-2xl">{heading}</span>}
      <div className="text-lg md:text-3xl">
        <span className={`bg-clip-text text-transparent ${bgImage}`}>{subHeading}</span>
      </div>
      {postText && (
        <div className={`hidden md:flex md:flex-col text-md font-normal italic ${align}`}>
          {postText.map((text, index) => (
            <div key={`post_text_${index}`}>{text}</div>
          ))}
        </div>
      )}
    </>
  );
};
