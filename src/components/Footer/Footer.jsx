// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoIosFitness } from "react-icons/io";
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="shadow-lg bg-gray-900 text-pink-200 py-10">
      <div className="container mx-auto text-center">
        <div className="flex items-center gap-3 font-semibold justify-center mb-4 group">
          <IoIosFitness className="text-pink-400 text-2xl animate-pulse group-hover:scale-105 duration-200" />
          Next Level Fitness
        </div>
        <div className="flex gap-6 mb-6 justify-center">
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="inline-block text-lg font-semibold hover:text-pink-400 duration-300 cursor-pointer"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="inline-block text-lg font-semibold hover:text-pink-400 duration-300 cursor-pointer"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="exercise"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="inline-block text-lg font-semibold hover:text-pink-400 duration-300 cursor-pointer"
          >
            Exercise
          </ScrollLink>
          <ScrollLink
            to="feedback"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="inline-block text-lg font-semibold hover:text-pink-400 duration-300 cursor-pointer"
          >
            Feedback
          </ScrollLink>
        </div>
        <div className="flex justify-center items-center mb-6 gap-6">
          <a href="https://www.facebook.com/" className="text-lg hover:text-pink-400 duration-300">
            <FaFacebookF size={24} />
          </a>
          <a href="https://twitter.com/login" className="text-lg hover:text-pink-400 duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com/accounts/login/?hl=en" className="text-lg hover:text-pink-400 duration-300">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/login" className="text-lg hover:text-pink-400 duration-300">
            <FaLinkedinIn size={24} />
          </a>
        </div>
        <div className="text-pink-300 text-sm">
          &copy; Developed by Aditya Singh Chaudhary with 💖<br />
          &copy; 2025 Next Level Fitness Developed. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
