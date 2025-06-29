import Header from '@/components/header';
import Footer from '@/components/footer';
import SubscribeSection from '@/components/subscribe-section';
import { Oswald } from 'next/font/google';


const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main>
        <div className="px-4 lg:px-36 py-24 bg-gray-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-green-111 text-sm font-semibold mb-2" style={{ fontFamily: oswald.style.fontFamily, fontWeight: 'bold' }}>ABOUT MANOMA GABA</h3>
              <h2 className={`text-4xl font-bold text-gray-800 mb-6 ${oswald.className}`}>Who We Are</h2>
              <p className="text-gray-600 leading-relaxed">
                Manoma Gaba is a non-profit social enterprise committed to shaping the future of agriculture in Nigeria. At Manoma Gaba, we are dedicated to creating a ripple effect, with millions of young agricultural innovators and resilient smallholder farmers leading the transformation of Nigeria's agriculture sector. They will not only feed the nation but also drive climate-smart practices, strengthen food security, and contribute to global efforts in achieving sustainable agriculture and climate resilience.
              </p>
            </div>
            <div className="space-y-8">
              <div className="bg-white p-6 shadow-md flex items-start space-x-4 group">
                <div className="flex-shrink-0 bg-green-111 p-3 transition-colors duration-300 group-hover:bg-black-111">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye text-white transition-colors duration-300 group-hover:text-green-111"><path d="M2.06 13C3.4 17.7 7.8 21 12 21c4.2 0 8.6-3.3 9.94-8C20.6 8.3 16.2 5 12 5c-4.2 0-8.6 3.3-9.94 8Z"/><circle cx="12" cy="13" r="3"/></svg>
                </div>
                <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: oswald.style.fontFamily, fontWeight: 'bold' }}>Our Vision</h3>
                  <p className="text-gray-600">
                    A Nigeria where young AgriLeaders and empowered smallholder farmers transform traditional agriculture into thriving, climate-resilient commercial enterprises.
                  </p>
                </div>
                <span className="ml-auto text-gray-300 text-4xl font-bold">01</span>
              </div>
              <div className="bg-white p-6 shadow-md flex items-start space-x-4 group">
                <div className="flex-shrink-0 bg-green-111 p-3 transition-colors duration-300 group-hover:bg-black-111">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target text-white transition-colors duration-300 group-hover:text-green-111"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: oswald.style.fontFamily, fontWeight: 'bold' }}>Our Mission</h3>
                  <p className="text-gray-600">
                    To empower 1,000,000 young people to be innovative leaders in agriculture, and to promote climate-smart agriculture and food security in Nigeria.
                  </p>
                </div>
                <span className="ml-auto text-gray-300 text-4xl font-bold">02</span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 lg:px-36 py-16 bg-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-green-111 text-sm font-semibold mb-2 ${oswald.className}`}>OUR CORE VALUES</h3>
              <h2 className="text-4xl font-bold text-gray-800 mb-6" style={{ fontFamily: oswald.style.fontFamily, fontWeight: 'bold' }}>Values & Culture</h2>
              <p className="text-gray-600 leading-relaxed">
                At Manoma Gaba, our ethics, activities, and conduct are driven by a unique set of values that define who we are and how we operate. These values guide our mission to transform agriculture in Nigeria by empowering the next generation of AgriLeaders and supporting smallholder farmers to thrive in a changing climate.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 shadow-md flex flex-col items-start space-y-4 relative group">
                <span className="absolute top-4 right-4 text-gray-300 text-4xl font-bold">01</span>
                <div className="flex-shrink-0 bg-black-111 p-3 transition-colors duration-300 group-hover:bg-green-111">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-align-justify text-green-111 transition-colors duration-300 group-hover:text-black-111"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: oswald.style.fontFamily, fontWeight: 'bold' }}>Integrity</h3>
                  <p className="text-gray-600">
                    We are committed to the highest standards of honesty and transparency in all our engagements. Integrity is the foundation of our relationships with partners, stakeholders, and the communities we serve. By upholding these principles, we build trust and credibility, ensuring that our mission to foster agricultural innovation is achieved with accountability and respect.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 shadow-md flex flex-col items-start space-y-4 relative group">
                <span className="absolute top-4 right-4 text-gray-300 text-4xl font-bold">02</span>
                <div className="flex-shrink-0 bg-black-111 p-3 transition-colors duration-300 group-hover:bg-green-111">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb text-green-111 transition-colors duration-300 group-hover:text-black-111"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 6c0 1.8-.7 3.4-1.8 4.7C2.9 11.9 2 13.2 2 15c0 2.7 2 5 5 5h6c2.2 0 4-1.8 4-4Z"/><path d="M2 15h16"/><path d="M7 20v2"/><path d="M13 20v2"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: oswald.style.fontFamily, fontWeight: 'bold' }}>Innovation</h3>
                  <p className="text-gray-600">
                    Innovation is at the heart of our mission. We empower young people to develop and adopt new technologies and practices that enhance agricultural productivity while minimizing environmental impact. By fostering creativity and forward-thinking solutions, we aim to modernize farming practices, improve livelihoods, and contribute to a resilient and prosperous agricultural sector.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 shadow-md flex flex-col items-start space-y-4 relative group">
                <span className="absolute top-4 right-4 text-gray-300 text-4xl font-bold">03</span>
                <div className="flex-shrink-0 bg-black-111 p-3 transition-colors duration-300 group-hover:bg-green-111">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users text-green-111 transition-colors duration-300 group-hover:text-black-111"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: oswald.style.fontFamily, fontWeight: 'bold' }}>Collaboration</h3>
                  <p className="text-gray-600">
                    We believe that collaboration is key to creating lasting change. By working closely with government agencies, academic institutions, the private sector, and civil society, we create a network of support for young agricultural innovators and smallholder farmers. Through these partnerships, we foster knowledge exchange, leverage resources, and promote climate-smart agriculture to strengthen food security in Nigeria.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 shadow-md flex flex-col items-start space-y-4 relative group">
                <span className="absolute top-4 right-4 text-gray-300 text-4xl font-bold">04</span>
                <div className="flex-shrink-0 bg-black-111 p-3 transition-colors duration-300 group-hover:bg-green-111">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf text-green-111 transition-colors duration-300 group-hover:text-black-111"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.4 18 2c1 2.4 2 5.4 1 8.5A6 6 0 0 1 12 21c-2.7 0-5.5-.7-7-2.7 1.5-1.7 2.7-3.7 3.2-5.8A8 8 0 0 0 11 20Z"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: oswald.style.fontFamily, fontWeight: 'bold' }}>Sustainability</h3>
                  <p className="text-gray-600">
                    Our commitment to sustainability drives us to create long-lasting impacts that extend beyond immediate results. We focus on empowering 1,000,000 young AgriLeaders and smallholder farmers with the skills and resources needed to sustain their livelihoods, adapt to climate change, and contribute to long-term food security. By promoting environmentally responsible practices, we ensure that our agricultural advancements benefit both present and future generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="bg-black-111 text-white px-4 lg:px-36 py-16">
              <h3 className="text-green-111 text-sm font-semibold mb-4">MANAGEMENT</h3>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ fontFamily: oswald.style.fontFamily, fontWeight: 'bold' }}>
          Our leadership team is composed of seasoned professionals with expertise in agriculture, sustainability, and social enterprise. Their collective experience and expertise ensures our initiatives are impactful, scalable, and aligned with global climate action.
        </h2>
      </section>
      <section className="px-4 lg:px-36 py-16 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="/images/founder.jpeg" alt="Udezue Chetachukwu" className="w-full h-auto shadow-lg" />
            <div className="absolute bottom-0 left-0 bg-green-111 text-black-111 px-6 py-3 flex items-center space-x-2">
              <span className="font-semibold">Udezue Chetachukwu</span>
              <span className="text-sm">Founder</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote"><path d="M3 21c3 0 7-1 7-8V5c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h2c2 0 5 1 5 4"/><path d="M15 21c3 0 7-1 7-8V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h2c2 0 5 1 5 4"/></svg>
            </div>
          </div>
          <div>
              <h3 className={`text-green-111 text-sm font-semibold mb-2 ${oswald.className}`}>MEET THE FOUNDER</h3>
            <h2 className={`text-4xl font-bold text-gray-800 mb-6 ${oswald.className}`}>From The Founder's Desk</h2>
            <p className="text-gray-800 font-semibold mb-4">
              Money makes the world go round, but without farmers as the backbone of the economy, most people won't be alive to make or spend money.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              It all started with a simple belief: that everyone, regardless of their background or circumstances, deserves access to healthy affordable food and farmers, the power to cultivate their own prosperity. Witnessing the struggles of smallholder farmers firsthand, the heartbreaking labor often yielding meager returns, ignited a fire within me. I knew I had to do something, to bridge the gap between potential and reality.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              From humble beginnings, we've blossomed into a force for positive change. We empower farmers with the knowledge, tools, and resources they need to thrive. We train them in sustainable & innovative farming practices, connect them to markets, and advocate for their rights. The journey hasn't been easy. There have been challenges, setbacks, and moments of doubt. But every time I see a farmer's face light up with newfound confidence, with renewed hope for a better risk reward ratio, it fuels my determination.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Born not from privilege, but from the stark reality of hunger, Manoma Gaba is more than an NGO; it's a revolution. We don't just assist farmers in cultivating crops; we assist them in cultivating a better mindset. We see, not just farmers of the future, but young agricultural innovators, eyes gleaming with the promise of a brighter tomorrow.
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 lg:px-36 py-16">
        <div className="text-center mb-12">
          <h3 className="text-green-111 text-sm font-semibold mb-2">OUR TEAM</h3>
          <h2 className={`text-4xl font-bold text-gray-800 ${oswald.className}`}>Meet Our Dedicated Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for team members - add actual content here if available */}
          <div className="bg-white p-6 shadow-md text-center group">
            <div className="w-32 h-32 bg-gray-200 mx-auto mb-4 flex items-center justify-center text-gray-500 transition-colors duration-300 group-hover:bg-green-111">
              {/* Placeholder for image */}
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user transition-colors duration-300 group-hover:text-black-111"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 ${oswald.className}">Team Member Name</h3>
            <p className="text-green-111 text-sm">Position</p>
            <p className="text-gray-600 mt-2">Short bio or description of their role.</p>
          </div>
          <div className="bg-white p-6 shadow-md text-center group">
            <div className="w-32 h-32 bg-gray-200 mx-auto mb-4 flex items-center justify-center text-gray-500 transition-colors duration-300 group-hover:bg-green-111">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user transition-colors duration-300 group-hover:text-black-111"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 ${oswald.className}">Team Member Name</h3>
            <p className="text-green-111 text-sm">Position</p>
            <p className="text-gray-600 mt-2">Short bio or description of their role.</p>
          </div>
          <div className="bg-white p-6 shadow-md text-center group">
            <div className="w-32 h-32 bg-gray-200 mx-auto mb-4 flex items-center justify-center text-gray-500 transition-colors duration-300 group-hover:bg-green-111">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user transition-colors duration-300 group-hover:text-black-111"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <h3 className={`text-xl font-semibold text-gray-800 ${oswald.className}`}>Team Member Name</h3>
            <p className="text-green-111 text-sm">Position</p>
            <p className="text-gray-600 mt-2">Short bio or description of their role.</p>
          </div>
        </div>
      </section>
      <SubscribeSection />
      <Footer />
    </div>
  );
}
