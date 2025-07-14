import Carousel from "react-bootstrap/Carousel";

function HomeCarousel() {
  return (
    <Carousel fade controls={false} indicators={false}>
      <Carousel.Item>
        <img src="../src/assets/images/image1.svg" alt="The Fellowship" className="w-dvw" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="../src/assets/images/image2.svg" alt="The Fellowship" className="w-dvw" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="../src/assets/images/image3.svg" alt="The Fellowship" className="w-dvw" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="../src/assets/images/image4.svg" alt="The Fellowship" className="w-dvw" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="../src/assets/images/image5.svg" alt="The Fellowship" className="w-dvw" />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
