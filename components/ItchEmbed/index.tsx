"use client";

import { embed } from "./ItchEmbed.css";

type ItchEmbedProps = {
  src: string;
  link: string;
  title: string;
};

const ItchEmbed = ({ src, link, title }: ItchEmbedProps) => {
  const backgroundColor = "000000";
  const foregroundColor = "ffffff";
  const srcAdditional = `?linkback=true&bg_color=${backgroundColor}&fg_color=${foregroundColor}&link_color=${foregroundColor}&border_color=${foregroundColor}`;
  return (
    <iframe
      className={embed}
      style={{ border: "none" }}
      src={`${src}${srcAdditional}`}
      width="552"
      height="167"
    />
  );
};

export default ItchEmbed;
