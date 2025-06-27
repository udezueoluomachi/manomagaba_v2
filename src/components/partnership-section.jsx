import React, { useState, useEffect, useRef } from 'react';
import { Play } from 'lucide-react';
import { Oswald } from "next/font/google";
import Link from 'next/link';
import Image from 'next/image';

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const AgricultureSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [empowermentCount, setEmpowermentCount] = useState(0);
  const [professionalsCount, setProfessionalsCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  // Animation function for counting
  const animateCount = (setter, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        setter(Math.floor(start));
      }
    }, 16);
  };

  // Intersection Observer for scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount(setEmpowermentCount, 1000000);
          animateCount(setProfessionalsCount, 55);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const handlePlayClick = () => {
    setIsVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div className="relative bg-gray-50 overflow-hidden">
      {/* Background Image Section - Donation Section */}
      <div 
        className="relative h-[500px] md:h-[600px] bg-cover bg-center bg-fixed bg-[url('/images/MANOMA-GABA-IMAGE.png')] bg-blend-color"
      >
        <div className="absolute inset-0 bg-black/30"></div> {/* Dark overlay added here */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-white space-y-6">
                <p className="text-sm font-medium tracking-widest uppercase text-gray-200">FOSTERING GROWTH</p>
                <h2 className={"text-5xl lg:text-6xl font-bold " + oswald.className}>
                  Donate Now
                </h2>
                <button className="text-black-111 px-8 py-4 font-medium transition-all duration-300 transform translate-x-10 hover:scale-105 uppercase tracking-wide bg-green-111">
                  HELP US EMPOWER OTHERS
                </button>
              </div>
              
              <div>
                <div className="text-white text-lg leading-relaxed">
                    Your support helps us empower young agricultural leaders, promote 
                    climate-smart farming, and strengthen food security in Nigeria. Together, we 
                    can create a future where agriculture is both prosperous and sustainable.
                </div>
                <div className="w-full flex items-end mt-6">
                  <div className="w-11/12 h-[0.5px] bg-white/55 mb-4"></div>
                  <div className="w-1/12 h-[0.5] bg-green-111 mb-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Card - Overlapping */}
      <div className="relative sm:-mt-16 md:-mt-32 z-10 max-w-6xl mx-auto px-4">
        <div className="bg-white shadow-2xl overflow-hidden">
          {/* Top Section - Green and Image */}
          <div className="grid lg:grid-cols-2">
            {/* Green Content Section */}
            <div className="p-8 lg:p-12 text-black-111 space-y-6 bg-green-111">
              <p className="text-black-111/55 font-medium">Get Involved (Partner With Us)</p>
              <h3 className={"text-3xl lg:text-4xl font-bold leading-tight " + oswald.className}>
                Building a Collaborative Future for Nigerian Agriculture
              </h3>
              <p className="text-black-111/80 leading-relaxed">
                Join us in transforming the future of agriculture. Whether you're a government agency, academic 
                institution, private organization, or individual, your partnership can help us empower the next 
                generation of agricultural leaders and strengthen food security.
              </p>
              <Link href={"mailto:info@manomagaba.com"} className="text-green-111 px-8 py-4 font-medium hover:text-white uppercase tracking-wide bg-black-111 mt-8 block w-max">
                WRITE TO US
              </Link>
              
              {/* Triangle Logo */}
              <div className="pt-8">
                <div className="w-20 h-20 relative">
                  <div className="absolute inset-0 border-2 border-green-300 transform rotate-45 rounded-sm"></div>
                  <div className="absolute inset-2 border border-green-300 transform rotate-45 rounded-sm"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section with Video Overlay */}
            <div className="relative aspect-video lg:aspect-auto">
              {/* Video Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                {!false ? (//isVideoPlaying
                  <>
                    <Image
                      src={"/images/video-image-lp.png"}
                      alt="Video cover"
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0 z-0"
                    />
                    <div className="relative z-10 text-center">
                      <button
                        onClick={handlePlayClick}
                        className="group relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 mb-4 bg-green-111"
                      >
                        {/* Ripple effect */}
                        <div className="absolute inset-0 rounded-full border-2 border-white border-opacity-30 group-hover:animate-ping"></div>
                        <div className="absolute inset-0 rounded-full border border-white border-opacity-20 animate-pulse"></div>
                        
                        <Play className="w-6 h-6 ml-1 text-black-111 fill-current" />
                      </button>
                      <p className="text-white text-sm font-medium tracking-widest uppercase">
                        LET'S MAKE LIVES BETTER, TOGETHER
                      </p>
                    </div>
                  </>
                ) : (
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    onEnded={handleVideoEnd}
                    controls
                  >
                    <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
                  </video>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Statistics Section */}
          <div ref={sectionRef} className="p-8 lg:p-12 bg-black-111">
            <div className="grid md:grid-cols-2 gap-8 text-center md:divide-x-2 divide-black-222">
              <div className="space-y-2">
                <div className="text-5xl lg:text-6xl font-bold text-white">
                  + {empowermentCount.toLocaleString()}
                </div>
                <p className="text-green-400 text-xs font-medium tracking-widest uppercase">EMPOWERMENT TARGET</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-5xl lg:text-6xl font-bold text-white">
                  + {professionalsCount}
                </div>
                <p className="text-green-400 text-xs font-medium tracking-widest uppercase">SKILLED PROFESSIONALS</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-20"></div>
    </div>
  );
};

export default AgricultureSection;
