import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import BooksCarouselItem from "./BooksCarouselItem";

function BooksCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null} slide={false} fade={false}>
      <Carousel.Item>
        <BooksCarouselItem
          image="/src/assets/images/fellowship.jpg"
          title="The Fellowship of the Ring"
          summary="In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it
                  with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout
                  Middle-earth, it remained lost to him. After many ages it fell into the hands of Bilbo Baggins, as told in The Hobbit. In a sleepy
                  village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to
                  his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring
                  and foil the Dark Lord in his evil purpose."
          amazonLink="https://www.amazon.com/Fellowship-Ring-Being-First-Rings/dp/0547928211"
          barnesNobleLink="https://www.barnesandnoble.com/w/the-fellowship-of-the-ring-j-r-r-tolkien/1100013647"
        />
      </Carousel.Item>
      <Carousel.Item>
        <BooksCarouselItem
          image="/src/assets/images/towers.jpg"
          title="The Two Towers"
          summary="                  Frodo and his Companions of the Ring have been beset by danger during their quest to prevent the Ruling Ring from falling into the
                  hands of the Dark Lord by destroying it in the Cracks of Doom. They have lost the wizard, Gandalf, in a battle in the Mines of
                  Moria. And Boromir, seduced by the power of the Ring, tried to seize it by force. While Frodo and Sam made their escape, the rest of
                  the company was attacked by Orcs. Now they continue the journey alone down the great River Anduin—alone, that is, save for the
                  mysterious creeping figure that follows wherever they go."
          amazonLink="https://www.amazon.com/Two-Towers-Being-Second-Rings/dp/0547928203/ref=pd_lpo_d_sccl_1/131-3972844-5641308?pd_rd_w=RGJ1h&content-id=amzn1.sym.4c8c52db-06f8-4e42-8e56-912796f2ea6c&pf_rd_p=4c8c52db-06f8-4e42-8e56-912796f2ea6c&pf_rd_r=TYPWHYCBVHJ69S4B1EW2&pd_rd_wg=YIoRt&pd_rd_r=90c8df9e-eb22-4155-8244-44dfeeb07082&pd_rd_i=0547928203&psc=1"
          barnesNobleLink="https://www.barnesandnoble.com/w/the-two-towers-j-r-r-tolkien/1100014685?ean=9780547928203"
        />
      </Carousel.Item>
      <Carousel.Item>
        <BooksCarouselItem
          image="/src/assets/images/king.jpg"
          title="The Return of the King"
          summary="                  As the shadow of Mordor grows across the land, the Companions of the Ring have become involved in separate adventures. Aragorn,
                  revealed as the hidden heir of the ancient Kings of the West, has joined with the Riders of Rohan against the forces of Isengard and
                  takes part in the desperate battle of the Hornburg. Merry and Pippin, captured by Orcs, escape into Fangorn Forest and there
                  encounter the Ents. Gandalf has miraculously returned and defeated the evil wizard, Saruman. Sam has left his master for dead after
                  a battle with the giant spider, Shelob; but Frodo is still alive—now in the foul hands of the Orcs."
          amazonLink="https://www.amazon.com/Return-King-Being-Third-Rings/dp/054792819X/ref=pd_bxgy_thbs_d_sccl_1/131-3972844-5641308?pd_rd_w=qtRtq&content-id=amzn1.sym.dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_p=dcf559c6-d374-405e-a13e-133e852d81e1&pf_rd_r=VZTZR2KX1RKTACJASG1E&pd_rd_wg=tD7Op&pd_rd_r=bb1275cc-9b38-476e-a8c1-bf44ee39465f&pd_rd_i=054792819X&psc=1"
          barnesNobleLink="https://www.barnesandnoble.com/w/the-return-of-the-king-j-r-r-tolkien/1100178475?ean=9780547928197"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default BooksCarousel;
