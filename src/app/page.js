"use client";
import Image from "next/image";
import StickyHeader from "./components/header";


import React, { useState, useEffect } from 'react';

const ManomaGabaLanding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Background images - you can replace these with your actual image URLs
  const slides = [
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
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
      <div className="relative h-screen overflow-hidden">
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
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-8">
            {/* Brand Header */}
            <div className="mb-8">
              <div className="text-green-400 text-2xl font-bold mb-2">
                MANOMA GABA
              </div>
              <div className="text-gray-200 text-lg max-w-2xl">
                Bridging food security by frontiering the NextGen AgriLeaders, as well as empowering small holder farmers
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl font-black text-white uppercase leading-tight mb-8">
              SOCIAL ENTERPRISE<br />
              <span className="text-green-400">REVOLUTIONALIZING</span><br />
              AGRICULTURE IN NIGERIA
            </h1>

            {/* Mission Text */}
            <p className="text-gray-200 text-xl max-w-2xl leading-relaxed">
              Our mission is to empower one million NextGen AgriLeaders and smallholder 
              farmers with the knowledge, tools, and opportunities to thrive in a climate-
              resilient agricultural sector.
            </p>
          </div>
        </div>

        {/* Slideshow Controls - Bottom Right */}
        <div className="fixed bottom-8 right-16 flex items-center space-x-4 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full border-2 backdrop-blur-md transition-all duration-500 ${
                index === currentSlide
                  ? 'w-4 h-4 border-green-400 bg-green-400/20 relative'
                  : 'border-white/40 bg-white/10 hover:bg-white/20 hover:border-white/60'
              }`}
            >
              {index === currentSlide && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg" />
              )}
            </button>
          ))}
        </div>

        {/* Simple Scroll Indicator - Bottom Center */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <button
            onClick={handleScrollDown}
            className="flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-all duration-300 group"
          >
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
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
};

export default ManomaGabaLanding;
