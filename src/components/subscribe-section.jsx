import React from 'react';
import { Oswald } from 'next/font/google';

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
})

const SubscribeSection = () => {
  return (
    <section className="bg-green-111 py-16 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-center">
      <div className="text-white text-center lg:text-left mb-8 lg:mb-0 lg:mr-16 max-w-lg">
        <h2 className={"text-3xl font-bold mb-2 relative pb-4 " + oswald.className}>
          Subscribe
          <span className="absolute bottom-0 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-20 h-[0.5px] bg-white"></span>
        </h2>
        <p className="text-lg mt-4">
          Want to be notified about our News. Just sign up and we'll send you a notification by email.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center w-full max-w-md">
        <input
          type="email"
          placeholder="Your email"
          className="flex-grow p-4 bg-gray-100 border-none outline-none mb-4 sm:mb-0 w-full text-gray-700"
        />
        <button className="bg-black-222 hover:text-white text-green-111 px-8 py-4 font-semibold transition-colors duration-300 w-full sm:w-auto">
          SUBSCRIBE
        </button>
      </div>
    </section>
  );
};

export default SubscribeSection;
