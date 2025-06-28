import React from "react";
import BannerImg from "../../assets/About1.png";

const About = () => {
  return (
    <div className="relative py-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('https://wallpaperbat.com/img/872392-exercise-wallpaper.jpg')`,
        }}
      ></div>

      {/* Pinkish Overlay */}
      <div className="absolute inset-0 bg-pink-200/30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 bg-black/60 backdrop-blur-sm py-16">
        <div className="container mx-auto px-6">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center"
            id="about"
          >
            {/* Image Section (Left) */}
            <div data-aos="fade-up">
              <img
                src={BannerImg}
                alt="Fitness Banner"
                className="rounded-xl shadow-2xl sm:scale-110 sm:translate-x-8 max-h-[350px] object-cover mx-auto"
              />
            </div>

            {/* Text Section (Right) */}
            <div className="space-y-6 text-white sm:p-12">
              <div data-aos="zoom-in">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-pink-200 drop-shadow">
                  Track Your Progress
                </h2>
              </div>

              <p
                data-aos="fade-up"
                className="text-gray-100 text-lg leading-8 tracking-wide"
              >
                Our platform helps you monitor steps, distance, and calories burned —
                perfect for staying consistent. Track your routines, set new goals, and
                improve every day.
                <br />
                <br />
                Whether you're into cardio, strength training, or mobility, we've got
                personalized plans to fit your journey.
              </p>

              <button
                data-aos="fade-up"
                className="mt-4 px-8 py-3 bg-pink-200 text-black font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-pink-400 transition duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
