import React, { useState } from "react";
import { GalleryItem } from "./GalleryItem";

type ItemProps = {
  src: string;
  name: string;
  work: string;
};
export const Gallery = ({ items }) => {
  const [data, setData] = useState<ItemProps[]>(items);
  return (
    <>
      <ul className="gallery">
        {data &&
          data.map((item, index) => (
            <GalleryItem src={item.src} name={item.name} key={index} />
          ))}
      </ul>
    </>
  );
};
