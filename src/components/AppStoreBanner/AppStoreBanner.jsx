import React from "react";
import AppStoreImg from "../../assets/app_store.jpg";
import PlayStoreImg from "../../assets/play_store.jpg";
import pattern from "../../assets/dumbell.jpg";

const AppStoreBanner = () => {
  return (
    <div className="w-full h-full bg-black">
      <div
        className="sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${pattern})` }}
      >
        <div className="w-full h-full bg-black bg-opacity-60 py-10 px-4">
          <div className="space-y-6 max-w-xl mx-auto text-center text-pink-200">
            <h1
              data-aos="fade-up"
              className="text-2xl sm:text-4xl font-semibold font-serif"
            >
              Get Started with Our App
            </h1>
            <p className="text-sm sm:text-base">
              Stay on track with workouts, nutrition, and more—all from your pocket.
            </p>
            <div
              data-aos="fade-up"
              className="flex flex-wrap justify-center items-center gap-4"
            >
              <a href="https://play.google.com/store/login">
                <img
                  src={PlayStoreImg}
                  alt="Play Store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] hover:scale-105 transition-transform duration-300"
                />
              </a>
              <a href="https://www.apple.com/app-store/">
                <img
                  src={AppStoreImg}
                  alt="App Store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;
