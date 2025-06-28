import React from "react";

const About = () => {
  return (
    <div
      className="py-2 bg-gray-700"
      // style={{
      //   backgroundImage: `url('https://wallpapercave.com/wp/wp9220750.jpg')`, // You can replace this with a gym image matching the theme
      // }}
    >
      {/* Pinkish overlay */}
      <div className="bg-pink-200/20 backdrop-blur-md py-20">
        <div className="container mx-auto px-6 md:px-16">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center"
            id="about"
          >
            {/* Left Image */}
            <div
              data-aos="fade-up"
              className="relative w-full max-w-xl mx-auto"
            >
              <img
                src="https://wallpapercave.com/wp/wp9220750.jpg"
                alt="Fitness Banner"
                className="rounded-xl shadow-2xl transition-all transform hover:scale-105 hover:rotate-2 duration-500"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-8 text-center md:text-left text-white">
              <div data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-4xl font-extrabold text-pink-200">
                  About Us
                </h2>
                <p className="text-lg text-gray-100 mt-4">
                  Our fitness platform is designed to guide and inspire you
                  through every step of your journey, offering tools, routines,
                  and tracking tailored to your personal goals.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-6">
                {[
                  {
                    number: "01",
                    title: "Fitness Tracking",
                    text: "Track your workouts, calories, and activity to stay aligned with your fitness goals.",
                  },
                  {
                    number: "02",
                    title: "Workout Routines",
                    text: "Personalized routines from beginner to advanced, built for your strength and stamina goals.",
                  },
                  {
                    number: "03",
                    title: "Nutrition Tracking",
                    text: "Monitor meals, macros, and stay fueled with balanced nutrition guidance.",
                  },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-6"
                    data-aos="fade-up"
                  >
                    <div className="text-5xl text-pink-300 font-extrabold">
                      {feature.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-pink-100">
                        {feature.title}
                      </h3>
                      <p className="text-gray-100 text-base mt-2 leading-relaxed">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div
                className="text-center md:text-left mt-10"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <button className="px-8 py-3 rounded-full bg-pink-200 text-black font-bold text-lg shadow-lg hover:scale-105 hover:shadow-pink-300 transition-all duration-300">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
