import React from "react";
import github from "../assets/img/github.svg";
import whatsapp from "../assets/img/whatsapp.svg";
import twitter from "../assets/img/twitter.svg";
type ItemProps = {
  src: string;
  name: string;
};
export const GalleryItem: React.FC<ItemProps> = ({ src, name }) => {
  return (
    <li className="profile-card">
      <img src={src} alt="chicken" className="profile-img" />
      <div className="profile-info">
        <p className="profile-name">{name}</p>
      </div>
    </li>
  );
};
