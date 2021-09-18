interface Props {
  img: string;
  href: string;
  name: string;
}

export function Avatar(props: Props) {
  const { img, href, name } = props;
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex-none w-14 h-14 bg-white rounded-full flex items-center justify-center">
      <img src={img} alt={name} className="w-12 h-12 rounded-full bg-cyan-100" loading="lazy" />
    </a>
  );
}