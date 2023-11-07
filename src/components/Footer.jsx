import React from "react";
import { BiLogoLinkedin } from 'react-icons/bi'
import { BsTwitter } from 'react-icons/bs'

export const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
          alt=""
          srcset=""
        />
      </div>
      <div>
        <a href='/'>Home</a>
        <a href='/'>About Us</a>
        <a href='/'>Contact Us</a>
        <a href='/'>Privacy Policy</a>
        <a href='/'>Sitemap</a>
      </div>
      <div>
        <p>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
      </div>
      <div>
        <BsTwitter  />
        <BiLogoLinkedin />
      </div>
    </footer>
  );
};
