"use client";
import Image from "next/image";
import StickyHeader from "./components/header";


import React, { useState, useEffect } from 'react';

const ManomaGabaLanding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Background images - you can replace these with your actual image URLs
  const slides = [
    '/images/happy-african-farmer-working-in-the-countryside-ho-2021-09-03-16-05-20-utc.jpg',
    '/images/shot-of-an-attractive-young-female-farmer-working-2022-10-05-18-46-35-utc.jpg',
    '/images/t-of-an-attractive-young-female-far-2022-12-16-15-16-06-utc.jpg',
    '/images/farmer-2021-09-04-11-42-50-utc.jpg'
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // 8 seconds per slide

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 2 seconds
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };

  const handleScrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
return (
    <>
      <StickyHeader />

      <div className="relative min-h-screen overflow-hidden">
        {/* Background Images with Instant Switch + Zoom */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-none ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className={`w-full h-full bg-cover bg-center ${
                  index === currentSlide ? 'animate-zoom' : ''
                }`}
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide})`
                }}
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="w-full relative z-10 min-h-screen flex items-center">
          <div className="px-8 md:px-36 py-20 w-full">
            {/* Brand Header */}
            <div className="mb-8">
              <div className="text-green-111 text-2xl font-bold mb-2">
                MANOMA GABA
              </div>
              <div className="text-gray-200 text-lg max-w-2xl">
                Bridging food security by frontiering the NextGen AgriLeaders, as well as empowering small holder farmers
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl font-black text-white uppercase leading-tight mb-8">
              SOCIAL ENTERPRISE<br />
              <span className="text-green-111">REVOLUTIONALIZING</span><br />
              AGRICULTURE IN NIGERIA
            </h1>

            {/* Mission Text */}
            <p className="text-gray-200 text-xl max-w-2xl leading-relaxed mb-16">
              Our mission is to empower one million NextGen AgriLeaders and smallholder 
              farmers with the knowledge, tools, and opportunities to thrive in a climate-
              resilient agricultural sector.
            </p>

            {/* Bottom Controls Container */}
            <div className="flex justify-between items-end w-full">
              {/* Simple Scroll Indicator - Bottom Left */}
              <div className="flex-shrink-0">
                <button
                  onClick={handleScrollDown}
                  className="flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-all duration-300 group"
                >
                  <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center group-hover:border-green-111/60 transition-colors duration-300">
                    <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce group-hover:bg-green-111/80" />
                  </div>
                  <svg 
                    className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>

              {/* Slideshow Controls - Bottom Right */}
              <div className="flex items-center space-x-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 cursor-pointer rounded-full backdrop-blur-md transition-all duration-500 ${
                      index === currentSlide
                        ? 'w-4 h-4 border-green-400 bg-green-400/20 relative'
                        : 'bg-green-111 hover:bg-white/20 hover:border-2 hover:border-white/60'
                    }`}
                  >
                    {index === currentSlide && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Custom CSS for zoom animation */}
        <style jsx>{`
          @keyframes zoom {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          
          .animate-zoom {
            animation: zoom 12s ease-in-out infinite;
          }
        `}</style>
      </div>
    </>
  );
}

export default ManomaGabaLanding;
