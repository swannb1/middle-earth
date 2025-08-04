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
    </Carousel>
  );
}

export default FilmsCarousel;
