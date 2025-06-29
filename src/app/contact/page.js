import Header from '@/components/header';
import Footer from '@/components/footer';
import SubscribeSection from '@/components/subscribe-section';

export default function ContactPage() {
  return (
    <div>
      <Header />
      <main>
        <div className="px-4 lg:px-36 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We'd love to hear from you! Please use the form below to send us a message.
              </p>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                  <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                  <textarea id="message" rows="5" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <button className="bg-green-111 text-black px-4 py-2 rounded font-medium hover:bg-green-200 focus:outline-none focus:shadow-outline">Submit</button>
              </form>
            </div>
            <div className="lg:border-l lg:border-gray-300 lg:pl-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Here's how you can reach us:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-green-111"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  <span>INFO@MANOMAGABA.COM</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-green-111"><path d="M20.7 7.61a2 2 0 0 0-3.05-3.05L5.75 14.39a2 2 0 0 0 0 2.83l2.83 2.83a2 2 0 0 0 2.83 0L20.7 7.61Z"/><path d="M18.39 5.29a2 2 0 0 1 0 2.83L5.75 19.61"/></svg>
                  <span>1056, CHINYEAKA OHAA CRESCENT, WUYE, FCT, ABUJA</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-green-111"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 0 0 1-8.63-3.07 19.5 0 0 1-6-6 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.11-1.11a2 2 0 0 1 2.12-.45 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span>+234 (0) 704 922 2453</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <SubscribeSection />
      <Footer />
    </div>
  );
}
