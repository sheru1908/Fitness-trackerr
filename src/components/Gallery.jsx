import React from 'react';
import cardio from "../assets/Cardio.jpg";
import yoga from "../assets/Yoga.jpg";
import tracking from '../assets/tracking.jpg';
import push from '../assets/push.jpg';
import fk from '../assets/FK.jpg';
import hero from '../assets/hero.jpg';

const BlogItem = ({ backgroundImage, title, link }) => {
  return (
    <article
      className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-pink-400 bg-opacity-50 group-hover:bg-opacity-70 transition duration-300 ease-in-out"></div>
      <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
        <h3 className="text-center">
          <a className="text-white text-2xl font-bold text-center hover:text-pink-200" href={link}>
            <span className="absolute inset-0"></span>
            {title}
          </a>
        </h3>
      </div>
    </article>
  );
};

const Gallery = () => {
  const blogItems = [
    {
      src: cardio,
      title: 'Cardio is any activity that gets you breathing harder and increases your heart rate.',
    },
    {
      src: hero,
      title: 'Dumbbell Exercises for a Full-Body Workout',
    },
    {
      src: fk,
      title: 'Endurance, strength, balance, and flexibility—each has different benefits.',
    },
    {
      src: push,
      title: 'Push-ups target chest, shoulders, and triceps, also working core, back, and legs.',
    },
    {
      src: tracking,
      title: 'A wrist device tracking heart rate, sleep, and swimming laps.',
    },
    {
      src: yoga,
      title: 'Yoga connects the body, breath, and mind into one practice.',
    },
  ];

  const externalBg = "https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F2465431.jpg&sp=1745148229T39b0fbf9cbf8941a9717853882d9f6d8ae4b60d6a52762b7109ad0f84f6ff84d";

  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 192, 203, 0.3), rgba(0, 0, 0, 0.9)), url(${externalBg})`,
      }}
    >
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12 py-12">
        <article>
          <h2 className="text-center sm:text-4xl font-bold text-pink-200" data-aos="fade-down">
            BLOG
          </h2>
          <section
            className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            {blogItems.map((item, index) => (
              <BlogItem
                key={index}
                backgroundImage={item.src}
                title={item.title}
                link={item.link}
              />
            ))}
          </section>
        </article>
      </section>
    </div>
  );
};

export default Gallery;
