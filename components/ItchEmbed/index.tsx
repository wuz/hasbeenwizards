"use client";

type ItchEmbedProps = {
  src: string;
  link: string;
  title: string;
};

const ItchEmbed = ({ src, link, title }: ItchEmbedProps) => {
  return (
    <iframe style={{ border: "none" }} src={src} width="552" height="167" />
  );
};

export default ItchEmbed;
