import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Feedback() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_13zwgzt', 'template_1qij549', form.current, {
                publicKey: 'qnpJk5ZInhml6tBCS',
            })
            .then(
                () => {
                    console.log('Thank you for your feedback');
                },
                (error) => {
                    console.log('Please try again', error.text);
                },
            );
    };

    return (
        <div
           
            className="relative  w-full h-screen overflow-hidden bg-cover bg-center bg-pink-300 "
            id="feedback"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(255, 192, 203, 0.4), rgba(0, 0, 0, 0.8)), url('https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F1108014.jpg&sp=1745148229Td6c5aadff1199ca2933e6c5b173373d4b5f5975c569f5da93e22cfa9911afc67')",
            }}
        >
            <div className="relative  z-10 flex flex-col items-center justify-center h-full">
                <div className="text-4xl font-bold text-pink-200 text-center p-8">
                    <h1>Feedback</h1>
                </div>

                <div data-aos="zoom-in-down" className="flex border-2 p-6 border-pink-400 rounded-md items-center justify-center">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="my-4">
                            <label className="text-sm text-pink-200">Type your Name</label>
                            <input
                                type="text"
                                name="name"
                                className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-pink-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-500 peer"
                            />
                        </div>
                        <div className="my-4">
                            <label className="text-sm text-pink-200">Type your Email</label>
                            <input
                                type="email"
                                name="email"
                                className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-pink-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-500 peer"
                            />
                        </div>
                        <div className="my-4">
                            <label className="text-sm text-pink-200">Enter Your Phone Number</label>
                            <input
                                type="text"
                                name="phone"
                                className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-pink-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-500 peer"
                            />
                        </div>
                        <div className="my-4">
                            <label className="text-sm text-pink-200">Feedback</label>
                            <textarea
                                name="feedback"
                                className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-pink-300 appearance-none focus:outline-none focus:ring-0 focus:border-pink-500 peer"
                            />
                        </div>
                        <div className="py-4 text-center">
                            <button className="inline-block font-semibold py-2 px-6 bg-pink-500 text-white hover:bg-pink-400 duration-200 tracking-widest uppercase rounded-md">
                                <input type="submit" value="Send" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Feedback;
