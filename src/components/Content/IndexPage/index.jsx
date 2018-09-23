import React from "react";
import SwipeSlider from "./SwipeSlider";
import About from "./About";
import Lectures from "./Lectures";
import Showcases from "./Showcases";
import KnowUs from "./KnowUs";
import AvatarSlider from "./AvatarSlider";
import sliderData from "../../info/slider.json";
import avatarData from "../../info/avatar.json";
import aboutData from "../../info/about.json";
import lectureData from "../../info/lecture.json";
import showcaseData from "../../info/showcase.json";

const Content = () => {
    return (
      <article>
        <SwipeSlider sliderDatas={sliderData} />
        <About aboutDatas={aboutData} />
        <Lectures lectureDatas={lectureData} />
        <AvatarSlider avatarDatas={avatarData} />
        <Showcases showcaseDatas={showcaseData} />
        <KnowUs />
      </article> 
  );
};

export default Content;