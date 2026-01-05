import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { SectionTitle } from "@/components/UI";

export default function ContactPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">Have questions? We're here to help you grow your green space.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <SectionTitle title="Get in Touch" subtitle="Reach out to us for any plant enquiries or gardening advice." />
              
              <div className="space-y-8 mt-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mr-6 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600 text-lg">+91 94944 99499</p>
                    <p className="text-gray-500 text-sm">Call us anytime for assistance</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mr-6 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600 text-lg">gowthaminursery@gmail.com</p>
                    <p className="text-gray-500 text-sm">Send us your enquiries</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mr-6 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600 text-lg">Kadiam, Andhra Pradesh – 533126</p>
                    <p className="text-gray-500 text-sm">Visit our nursery in person</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mr-6 flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-1">Business Hours</h4>
                    <p className="text-gray-600 text-lg">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 text-lg">Sun: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-10 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-8 text-gray-800">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Inquiry about Palms"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-800 transition-colors shadow-lg">
                  <Send size={20} /> SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full bg-gray-200 relative">
        {/* Placeholder for Google Map */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold">
          [ Google Maps Integration ]
        </div>
      </section>
    </main>
  );
}

