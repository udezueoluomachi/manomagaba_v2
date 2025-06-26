"use client";
import { Oswald } from "next/font/google";
import StickyHeader from "./components/header";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { Users, Tractor, CreditCard, TrendingUp } from 'lucide-react';

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const StrategyCard = ({ number, title, description, IconComponent }) => {
  return (
    <div className="relative h-80 w-full group cursor-pointer" style={{ perspective: '1000px' }}>
      <div 
        className="relative h-full w-full transition-transform duration-700 group-hover:rotate-y-180"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front of card */}
        <div 
          className="absolute inset-0 bg-white shadow-md p-8 flex flex-col"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="text-green-111">
              <IconComponent size={40} strokeWidth={1.5} />
            </div>
            <div className="border-2 border-green-111 rounded-full w-8 h-8 flex items-center justify-center">
              <span className="text-green-111 text-sm font-bold">
                {number.padStart(2, '0')}
              </span>
            </div>
          </div>
          
          {/* Green underline */}
          <div className="w-12 h-1 bg-green-111 mb-6"></div>
          
          <h3 className={`text-2xl font-bold text-gray-900 mb-4 ${oswald.className}`}>
            {title}
          </h3>
          
          <p className="text-gray-600 text-base leading-relaxed flex-grow">
            {description}
          </p>
          
          {/* Bottom green line */}
          <div className="w-16 h-1 bg-green-111 mt-6"></div>
        </div>

        {/* Back of card */}
        <div 
          className="absolute inset-0 bg-gray-400 shadow-md p-8 flex flex-col items-center justify-center"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <Link href={"/about"} className="bg-green-111 hover:opacity-90 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200 text-lg">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

const strategies = [
  {
    number: "1",
    title: "Capacity Building",
    description: "Training farmers to transition from subsistence to commercial farming.",
    icon: Users
  },
  {
    number: "2",
    title: "Resilience",
    description: "Promoting climate-smart agricultural practices to mitigate the impact of climate change.",
    icon: Tractor
  },
  {
    number: "3", 
    title: "Inclusive Access",
    description: "Facilitating access to credit, quality inputs, and modern farming technologies.",
    icon: CreditCard
  },
  {
    number: "4",
    title: "Market Linkage", 
    description: "Connecting farmers to profitable markets, ensuring sustainable livelihoods.",
    icon: TrendingUp
  }
];

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
              <div className="w-max">
              <div className="w-full flex items-end">
              <div className="w-4/12 h-1 bg-green-111 mb-4"></div>
              <div className="w-8/12 h-[0.5px] bg-white/55 mb-4"></div>
              </div>
              <div className="text-green-111 text-lg font-bold mb-2">
                MANOMA GABA
              </div>
              </div>
              <div className="text-gray-200 text-sm max-w-2xl">
                Bridging food security by frontiering the NextGen AgriLeaders, as well as empowering small holder farmers
              </div>
            </div>

            {/* Main Heading */}
            <h1 className={"text-3xl md:text-5xl font-black text-white uppercase leading-tight mb-8 " + oswald.className}>
              SOCIAL ENTERPRISE<br />
              <span className="text-green-111">REVOLUTIONALIZING</span><br />
              AGRICULTURE IN NIGERIA
            </h1>

            {/* Mission Text */}
            <p className="text-gray-200 text-base max-w-2xl leading-relaxed mb-16">
              Our mission is to empower one million NextGen AgriLeaders and smallholder 
              farmers with the knowledge, tools, and opportunities to thrive in a climate-
              resilient agricultural sector&#39;.
            </p>

            {/* Bottom Controls Container */}
            <div className="flex justify-between items-end w-full">
              {/* Updated Scroll Indicator with Caret and Moving Dot */}
              <div className="flex-shrink-0">
                <button
                  onClick={handleScrollDown}
                  className="flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-all duration-300 group"
                >
                  <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center group-hover:border-green-111/60 transition-colors duration-300 relative overflow-hidden">
                    <div className="w-1.5 h-1.5 bg-green-111 rounded-full absolute animate-scroll-dot transition-all z-20" />
                  </div>
                  {/* Caret instead of arrow */}
                  <svg 
                    className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10l5 5 5-5H7z"/>
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
            0% { transform: scale(1.1); }
            50% { transform: scale(1.25); }
            100% { transform: scale(1); }
          }
            @keyframes scroll-dot {
            0% { top: 8px; opacity: 1; }
            100% { top: 39px; opacity: 0;}
          }
          
          .animate-zoom {
            animation: zoom 12s ease-in-out infinite;
          }
          
          .animate-scroll-dot {
            animation: scroll-dot 1.6s ease-in-out infinite;
          }
        `}</style>
      </div>
      <section className="py-16 lg:py-36 px-4 md:px-8 lg:px-36 max-w-[88rem] mx-auto relative">
        <div className="absolute -left-16 -bottom-1/3 -translate-y-1/2 w-4/12 h-8/12 bg-gray-600/5 block -z-10"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm text-gray-600 tracking-wider uppercase font-bold">
                OUR STORY
              </p>
              <h1 className={`text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 leading-tight ${oswald.className}`}>
                We Are Revolutionalizing Agriculture in Nigeria.
              </h1>
            </div>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Manoma Gaba is a non-profit social enterprise committed to shaping 
                the future of agriculture in Nigeria. At Manoma Gaba, we are 
                dedicated to creating a ripple effect, with millions of young agricultural 
                innovators and resilient smallholder farmers leading the 
                transformation of Nigeria's agriculture sector. They will not only feed 
                the nation but also drive climate-smart practices, strengthen food 
                security, and contribute to global efforts in achieving sustainable 
                agriculture and climate resilience.
              </p>
              
              <p>
                Our aim is to make Nigeria a model for agricultural excellence and 
                environmental stewardship, where agriculture becomes a driving 
                force for economic, social, and environmental sustainability, benefiting 
                all, especially vulnerable members of society.
              </p>
            </div>
            
            <Link href="/about" className="bg-gray-800 text-green-111 px-8 py-3 text-sm font-medium tracking-wider uppercase hover:bg-gray-700 transition-colors duration-300">
              READ MORE ABOUT US
            </Link>
          </div>

          {/* Image Content */}
          <div className="relative mt-20 md:mt-0">
            {/* Green background div */}
            <div className="hidden md:block absolute -top-6 -left-6 w-1/2 h-full bg-green-111"></div>
            
            {/* Image container */}
            <div className="relative z-10 overflow-hidden">
              <Image 
                src={"/images/face-of-gaba.jpeg"}
                alt="Farmer in field" width={300} height={500}
                className="w-11/12 h-[400px] md:h-[500px] object-cover"
              />
              {/* Green overlay with text */}
              <div className="absolute w-full top-16 -right-10 z-50">
                <div className="bg-green-111 text-white px-6 py-3 text-center">
                  <h2 className={`text-xl font-medium tracking-[0.8em] ${oswald.className}`}>
                    MANOMA GABA
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full min-h-[80vh] relative bg-fixed bg-center bg-cover bg-[url('/images/farmer-2021-09-04-11-42-50-utc.jpg')]">
        <div className="absolute inset-0 flex items-center flex-col bg-black/40 text-white text-center px-4 py-36">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-wider ">WHAT WE DO</h2>
            <h3 className={"text-4xl font-medium mt-5 " + oswald.className}>We Are Helping Farmers Advance Their Agricultural Endeavours.</h3>
            <p className="text-base font-normal mt-10">We focus on strengthening food security by empowering smallholder farmers and mentoring the next generation of agricultural leaders.</p>
            <Link href={"#whatwedo"} className="text-base uppercase p-4 bg-green-111 hover:bg-black-111 block w-max mt-10 mx-auto md:px-10" >
            LEARN MORE
            </Link>
          </div>
        </div>
      </section>
      <section id="whatwedo" className="relative">
        {/* Gray background section */}
        <div className="bg-gray-100 pt-16 pb-64">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Strategy header */}
            <div className="mb-16">
              <p className="text-gray-500 text-sm font-medium tracking-wider uppercase mb-4">
                STRATEGY & APPROACH
              </p>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <h2 className={`text-4xl font-medium text-gray-900 lg:max-w-2xl ${oswald.className}`}>
                  Our Strategic Objective are to:
                </h2>
                <div className="lg:max-w-md space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black-111 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">
                      Sustainably increase agricultural productivity and incomes for smallholder farmers.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black-111 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">
                      Build resilience to climate change through adaptive farming practices.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black-111 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">
                      Develop a new generation of AgriLeaders capable of transforming the agricultural landscape in Nigeria.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* White background section with overlapping cards */}
        <div className="bg-white relative transform">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16  -translate-y-10">
            {/* Strategy cards positioned to overlap gray section */}
            <div className="relative -mt-48">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {strategies.map((strategy, index) => (
                  <StrategyCard
                    key={index}
                    number={strategy.number}
                    title={strategy.title}
                    description={strategy.description}
                    IconComponent={strategy.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default ManomaGabaLanding;
