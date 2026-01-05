import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-2xl font-black text-primary">
              <span className="bg-primary text-white px-2 py-1 rounded">G</span>
              <span>GOWTHAMI.</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Gowthami Nursery was established in the year 1992, in Kadiyapulanka village Kadiyam Mandal, A.P. providing all varieties of Nursery Products.
            </p>
            <div className="flex space-x-4">
              {/* Social icons could go here */}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="text-primary mr-3 mt-1" size={18} />
                <span className="text-gray-600 font-semibold">+91 94944 99499</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-primary mr-3 mt-1" size={18} />
                <span className="text-gray-600">gowthaminursery@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-primary mr-3 mt-1" size={18} />
                <span className="text-gray-600">Kadiam, Andhra Pradesh – 533126</span>
              </li>
            </ul>
          </div>

          {/* Priority Support */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-6">Priority Support</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <p className="text-3xl font-bold text-primary mb-2">94 94 499 499</p>
              <p className="text-gray-600">
                You can call us at any time for any help regarding the information about the plants
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            © 2023 Gowthami Nursery | Designed & developed by <span className="font-semibold italic">BrandSoHigh</span>
          </p>
          <p className="text-gray-400 text-xs mt-4">
            All the website content is copyrighted. Any kind of information copied, including images is a legal offense.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

