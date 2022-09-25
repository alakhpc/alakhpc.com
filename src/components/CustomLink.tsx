interface CustomLinkProps {
  text: string;
  url: string;
}

const CustomLink = ({ text, url }: CustomLinkProps) => {
  return (
    <a
      className="whitespace-nowrap bg-blue-400/40 px-1 hover:bg-blue-600/40"
      href={url}
    >
      {text}
    </a>
  );
};

export default CustomLink;
