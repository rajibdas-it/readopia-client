import slide_image_1 from "../assets/images/img_1.jpg";
import slide_image_2 from "../assets/images/img_2.jpg";
import slide_image_3 from "../assets/images/img_3.jpg";
import slide_image_4 from "../assets/images/img_4.jpg";

export default function Carousel() {
  return (
    <div className="carousel w-full md:h-[70vh]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={slide_image_1} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="text-message bg-black bg-opacity-50 absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-2xl font-bold mb-4">Welcome to Slide 1</h1>
          <p>This is the first slide in the carousel.</p>
          <button className="btn btn-primary mt-4">Read More</button>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img src={slide_image_2} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="text-message bg-black bg-opacity-50 absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-2xl font-bold mb-4">Welcome to Slide 2</h1>
          <p>This is the second slide in the carousel.</p>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img src={slide_image_3} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="text-message bg-black bg-opacity-50 absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-2xl font-bold mb-4">Welcome to Slide 3</h1>
          <p>This is the third slide in the carousel.</p>
          <button className="btn btn-primary mt-4">Click Me</button>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img src={slide_image_4} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="text-message bg-black bg-opacity-50 absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-2xl font-bold mb-4">Welcome to Slide 4</h1>
          <p>This is the fourth slide in the carousel.</p>
          <button className="btn btn-primary mt-4">Click Me</button>
        </div>
      </div>
    </div>
  );
}
