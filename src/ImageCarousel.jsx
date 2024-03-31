import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function ImageCarousel() {
  const images = [
    "/public/img3.webp",
    "/public/img5.webp",
    "/public/img6.webp",
    "/public/img8.webp",
  ];

  return (
    <div className="max-w-screen-lg mx-auto">
      <Carousel
        autoPlay={true}
        interval={6000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        stopOnHover={true}
        transitionTime={500}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              className="max-w-full h-auto"
              src={image}
              alt={`Imagen ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageCarousel;