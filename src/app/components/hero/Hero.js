import React from "react";
import style from "./hero.module.css";
import Image from "next/image";
import HeroBtn from "../heroBtn/HeroBtn";
import myImg from "../../../../public/fuchs.png";

const Hero = () => {
  return (
    <div
      className={`flex items-center justify-center h-screen bg-gray-200 ${style.myHero}`}
    >
      <div className={` ${style.humanFigure}`}>
        <Image src={myImg} width={300} />
      </div>
      <div className={`${style.heroBtn}`}>
        <div style={{ margin: "20px" }}>WARUM FUCHSJOBS.DE</div>
        <div style={{ margin: "20px", fontSize: "35px" }}>
          Jetzt traumjob finden
        </div>
        <HeroBtn />
      </div>
    </div>
  );
};

export default Hero;
