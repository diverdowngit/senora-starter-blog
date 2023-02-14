import * as React from "react"

import {heroWrapper,pageHero,centertext,subheading,headingtext,locationtext} from '../styles/Header.module.css';

const DEFAULT_IMG = "../images/heroimage.jpg";

export default function Hero({img=DEFAULT_IMG,centerText,subheading,location}) {
  return (
    <div className={heroWrapper}>
      <div className={pageHero}>
        <img src={img} alt="" />
        <div className={centertext}>
        <h1 className={headingtext}>{centerText}</h1>
        <h2 className={subheading}>{subheading} </h2>
        </div>
        <p className={locationtext}>{location}</p>
      </div>
    </div>
  );
}
