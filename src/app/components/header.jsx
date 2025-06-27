'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Facebook, Twitter, Instagram, Mail, MapPin, Phone, Mic, Megaphone } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const StickyHeader = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollPercentage(scrolled);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'RESOURCES', href: '/resources' },
  ];

  return (
    <>
      {/* Top Black Bar - Hidden on scroll */}
      <div
        className={`bg-black-111 text-white transition-all duration-300 ${
          isScrolled ? '-translate-y-full opacity-0 h-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <div className="px-4 lg:px-36">
          <div className="hidden lg:flex items-center justify-between py-6 text-sm">
            {/* Left side contact info */}
            <div className="flex items-center space-x-6 text-xs border-x-2 border-x-black-222 px-3">
              <a
                href="mailto:INFO@MANOMAGABA.COM"
                className="group flex items-center space-x-2 transition-all hover:text-green-111"
              >
                <Mail className="h-4 w-4 text-green-111 group-hover:text-white transition-all" />
                <span className="text-white group-hover:text-green-111 transition-all">
                  INFO@MANOMAGABA.COM
                </span>
              </a>
              <a
                href="https://www.google.com/maps/place/1056,+Chinyeaka+Ohaa+Crescent,+Wuye,+FCT,+Abuja"
                target="_blank"
                className="group flex items-center space-x-2 transition-all hover:text-green-111"
              >
                <MapPin className="h-4 w-4 text-green-111 group-hover:text-white transition-all" />
                <span className="text-white hidden lg:inline group-hover:text-green-111 transition-all">
                  1056, CHINYEAKA OHAA CRESCENT, WUYE, FCT, ABUJA
                </span>
              </a>
              <a
                href="tel:+2347049222453"
                className="group flex items-center space-x-2 transition-all hover:text-green-111"
              >
                <Phone className="h-4 w-4 text-green-111 group-hover:text-white transition-all" />
                <span className="text-white group-hover:text-green-111 transition-all">
                  +234 (0) 704 922 2453
                </span>
              </a>
            </div>

            {/* Right side social media */}
            <div className="flex items-center space-x-3">
              <Link href={''} className="p-2 border border-black-222 w-max">
                <Facebook className="h-4 w-4 text-green-111 hover:text-green-300/75 cursor-pointer" />
              </Link>
              <Link href={''} className="p-2 border border-black-222 w-max">
                <Twitter className="h-4 w-4 text-green-111 hover:text-green-300/75 cursor-pointer" />
              </Link>
              <Link href={''} className="p-2 border border-black-222 w-max">
                <Instagram className="h-4 w-4 text-green-111 hover:text-green-300/75 cursor-pointer" />
              </Link>
              <Link href={''} className="p-2 border border-black-222 w-max">
                <p className="h-4 w-4 text-green-111 hover:text-green-300/75 cursor-pointer"></p>
              </Link>
              <Link href={''} className="p-2 border border-black-222 w-max">
                <p className="h-4 w-4 text-green-111 hover:text-green-300/75 cursor-pointer"></p>
              </Link>
            </div>
          </div>
          <div className="flex lg:hidden items-center justify-between py-6 text-sm">
            {/* Left side contact info */}
            <div className="flex items-center space-x-6 text-xs border-x-2 border-x-black-222 px-3">
              <Link
                href="/contact"
                className="group flex items-center space-x-2 transition-all hover:text-green-111"
              >
                <Mail className="h-4 w-4 text-green-111 group-hover:text-white transition-all" />
                <span className="text-white group-hover:text-green-111 transition-all">
                  OUR CONTACT
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main White Header - Always Sticky */}
      <header className="bg-white shadow-sm sticky top-0 z-50 header-white py-1">
        {/* Green Progress Bar at Top */}
        <div className="fixed top-0 left-0 w-full h-[2px] bg-black/20 z-50">
          <div
            className="h-full bg-green-111 transition-all duration-300 ease-out"
            style={{ width: `${scrollPercentage}%` }}
          />
        </div>
        <div className="px-4 lg:px-36">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3 py-4">
              <Image src={'/images/logo.png'} width={120} height={50} alt="Logo" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 h-full">
              {navigationItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors duration-200 text-xs h-full flex items-center ${
                    pathname === item.href ? 'text-green-111' : 'text-gray-700 hover:text-green-111'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center space-x-2 border-l pl-4">
                <Megaphone className="text-black-111" />
              </div>
              <Link href={"/contact"} className="bg-green-111 h-full text-black-111 text-xs px-6 py-2 rounded font-medium flex items-center">
                GET IN TOUCH
              </Link>
            </nav>

            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center space-x-4">
              <DropdownMenu open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <DropdownMenuTrigger asChild>
                  <button className="text-gray-700">
                    <Menu className="h-6 w-6" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64 mt-2 bg-black-111 text-white border-none">
                  <div className="py-2">
                    {navigationItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`block px-4 py-3 transition-colors font-medium ${
                          item.name === 'HOME' ? 'text-green-111' : 'text-white hover:text-green-111'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                    <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-gray-700">
                      <Facebook className="h-5 w-5 text-green-111" />
                      <Twitter className="h-5 w-5 text-green-111" />
                      <Instagram className="h-5 w-5 text-green-111" />
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default StickyHeader;
