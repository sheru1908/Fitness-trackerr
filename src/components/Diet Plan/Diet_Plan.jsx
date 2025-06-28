import React from "react";
import Slider from "react-slick";
import abd from "../../assets/abd.jpg";
import Fk from "../../assets/FK.jpg";
import Pwr from "../../assets/Pwr.jpg";
import WL from "../../assets/WL.jpg";

const Diet_PlanData = [
  {
    id: 1,
    name: "Abdominal Exercises",
    text: "Tone your core with routines that challenge and define your abs effectively.",
    src: abd,
  },
  {
    id: 2,
    name: "Flex Muscles",
    text: "Improve flexibility with personalized stretches and mobility routines.",
    src: Fk,
  },
  {
    id: 3,
    name: "Powerful Vitamin",
    text: "Boost your performance with essential vitamin and supplement tracking.",
    src: Pwr,
  },
  {
    id: 4,
    name: "Weight Lifting",
    text: "Track lifting progress and build strength with customized plans.",
    src: WL,
  },
];

const Diet_Plan = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div id="exercise" className="relative py-16">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('https://w0.peakpx.com/wallpaper/49/1000/HD-wallpaper-sports-gym-muscle-weightlifting-bodybuilder.jpg')`,
        }}
      ></div>

      {/* Pink overlay */}
      <div className="absolute inset-0 bg-pink-200/30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 bg-black/60 backdrop-blur-sm py-16">
        <div className="container mx-auto px-6 text-white">
          {/* Headings */}
          <div className="text-center mb-12 max-w-[600px] mx-auto">
            <h1 data-aos="fade-up" className="text-4xl font-extrabold text-pink-200 drop-shadow">
              Why Choose Us
            </h1>
            <h3 data-aos="fade-up" className="text-xl mt-4 font-semibold text-pink-100">
              Diet Plans
            </h3>
          </div>

          {/* Slider */}
          <div data-aos="zoom-in">
            <Slider {...settings}>
              {Diet_PlanData.map((data) => (
                <div key={data.id} className="my-6">
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-black/60 backdrop-blur-sm border border-pink-200/20">
                    <div className="flex justify-center">
                      <img
                        src={data.src}
                        alt={data.name}
                        className="rounded-full w-24 h-24 object-cover border-4 border-pink-200"
                      />
                    </div>
                    <div className="text-center space-y-3">
                      <h1 className="text-xl font-bold text-pink-100">{data.name}</h1>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {data.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diet_Plan;
