import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../assets/gallery/1.png";
import image2 from "../assets/gallery/2.png";
import image3 from "../assets/gallery/3.png";
import image4 from "../assets/gallery/4.png";
import image5 from "../assets/gallery/5.png";

export default function Gallery() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      swipeable={false}
      draggable={false}
    >
      <div className="flex h-full w-full items-center justify-around">
        <img className="w-fit" src={image1} alt="" />
      </div>
      <div className="flex h-full w-full items-center justify-around">
        <img className="w-[45%] max-w-fit" src={image2} alt="" />
        <img className="w-[45%] max-w-fit" src={image3} alt="" />
      </div>
      <div className="flex h-full w-full items-center justify-around">
        <img className="w-[45%] max-w-fit" src={image4} alt="" />
        <img className="w-[45%] max-w-fit" src={image5} alt="" />
      </div>
    </Carousel>
  );
}
