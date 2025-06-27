import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black-111 py-8 px-4 md:px-8 lg:px-36 text-white">
      <p className="text-xs sm:text-sm">
        MANOMA GABA &copy; {new Date().getFullYear()}. ALL RIGHTS RESERVED. DEVELOPED BY <Link target='_blank' href={"https://instagram.com/dreamxcix"} className="text-green-111 hover:opacity-70">DREAM XCIX</Link>
      </p>
    </footer>
  );
};

export default Footer;
