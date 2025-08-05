import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExperienceCarouselItem from "./ExperienceCarouselItem";

function FilmsCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null} slide={false} fade={false}>
      <Carousel.Item>
        <ExperienceCarouselItem name="The Fellowship of the Ring" id="_nZdmwHrcnw?si=ElijkfPoHPxB60JJ" />
      </Carousel.Item>
      <Carousel.Item>
        <ExperienceCarouselItem name="The Two Towers" id="nuTU5XcZTLA?si=ww1Ec7hqLKOYTXwz" />
      </Carousel.Item>
      <Carousel.Item>
        <ExperienceCarouselItem name="Return of the King" id="zckJCxYxn1g?si=dbIgZ4aDpH0V2FWa" />
      </Carousel.Item>
      <Carousel.Item>
        <ExperienceCarouselItem name="War of the Rohirrim" id="gCUg6Td5fgQ?si=PMeWXH-Df_7_hzW-" />
      </Carousel.Item>
      <Carousel.Item>
        <ExperienceCarouselItem name="The Hobbit Animated" id="WqGzCOL3XU4?si=E1Z8Uq9_hXeDSJBm" />
      </Carousel.Item>
      <Carousel.Item>
        <ExperienceCarouselItem name="An Unexpected Journey" id="SDnYMbYB-nU?si=_YpUs1-HUAXIbf_4" />
      </Carousel.Item>
      <Carousel.Item>
        <ExperienceCarouselItem name="The Desolation of Smaug" id="Os1G8RtqY2c?si=5A2IK13lASWDWDXZ" />
      </Carousel.Item>
      <Carousel.Item>
        <ExperienceCarouselItem name="The Battle of the Five Armies" id="iVAgTiBrrDA?si=EidVEdbAqoD_tmd5" />
      </Carousel.Item>
    </Carousel>
  );
}

export default FilmsCarousel;
