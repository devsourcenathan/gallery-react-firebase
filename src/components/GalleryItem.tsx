import React from "react";
import github from "../assets/img/github.svg";
import whatsapp from "../assets/img/whatsapp.svg";
import twitter from "../assets/img/twitter.svg";
type ItemProps = {
  src: string;
  name: string;
  work: string;
  socials: Array<string>;
};
export const GalleryItem: React.FC<ItemProps> = ({
  src,
  name,
  work,
  socials,
}) => {
  return (
    <li className="profile-card">
      <img src={src} alt="chicken" className="profile-img" />
      <ul className="side-social">
        <a href={socials[0]}>
          <img src={twitter} alt="twitter" />
        </a>
        <a href={socials[1]}>
          <img src={github} alt="github" />
        </a>
        <a href={socials[2]}>
          <img src={whatsapp} alt="whatsapp" />
        </a>
      </ul>
      <div className="profile-info">
        <p className="profile-name">{name}</p>
        <p className="profile-work">{work}</p>
      </div>
    </li>
  );
};
