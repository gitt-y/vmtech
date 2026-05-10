import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark-navy text-silver pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="font-poppins font-bold text-3xl text-white tracking-tight">
                VM <span className="text-electric-blue">Tech</span>
              </span>
            </Link>
            <p className="text-silver/80 leading-relaxed mb-6">
              Premium doorstep appliance repair and installation solutions delivered by experienced professionals. We bring expert care to your home.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-electric-blue hover:text-white transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-electric-blue hover:text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-electric-blue hover:text-white transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-poppins font-semibold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#about" className="hover:text-electric-blue transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-blue"></span> About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-electric-blue transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-blue"></span> Our Services
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-electric-blue transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-blue"></span> Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-electric-blue transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-electric-blue"></span> Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-poppins font-semibold text-xl mb-6">Services</h4>
            <ul className="space-y-4">
              <li className="hover:text-electric-blue transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-blue"></span> Washing Machine Repair
              </li>
              <li className="hover:text-electric-blue transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-blue"></span> Refrigerator Service
              </li>
              <li className="hover:text-electric-blue transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-blue"></span> Dishwasher Repair
              </li>
              <li className="hover:text-electric-blue transition-colors flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-blue"></span> Microwave Oven Fix
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-poppins font-semibold text-xl mb-6">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-electric-blue">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-white font-medium mb-1">Location</h5>
                  <p className="text-sm text-silver/80">123 Tech Avenue, Innovation City, 45000</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-electric-blue">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-white font-medium mb-1">Phone</h5>
                  <p className="text-sm text-silver/80">+1 (234) 567-8900</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-electric-blue">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-white font-medium mb-1">Email</h5>
                  <p className="text-sm text-silver/80">support@vmtech.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-silver/60">
            &copy; {new Date().getFullYear()} VM Tech. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-silver/60">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
