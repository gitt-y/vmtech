"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <div className="inline-block px-4 py-2 rounded-full bg-royal-blue/10 text-royal-blue font-semibold text-sm mb-6">
              Get In Touch
            </div>
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-dark-navy mb-6">
              Ready for Premium Service?
            </h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Contact us today to schedule your appliance repair or installation. Our experienced professionals are ready to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 rounded-2xl bg-silver/20 flex items-center justify-center text-electric-blue shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-navy text-lg mb-1">Call Us Directly</h4>
                  <p className="text-gray-600 mb-2">Available 8am - 8pm, Mon-Sat</p>
                  <a href="tel:+1234567890" className="text-royal-blue font-bold text-xl hover:text-electric-blue transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 rounded-2xl bg-silver/20 flex items-center justify-center text-electric-blue shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-navy text-lg mb-1">Email Support</h4>
                  <p className="text-gray-600 mb-2">Drop us a line anytime</p>
                  <a href="mailto:support@vmtech.com" className="text-royal-blue font-bold hover:text-electric-blue transition-colors">
                    support@vmtech.com
                  </a>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="w-14 h-14 rounded-2xl bg-silver/20 flex items-center justify-center text-electric-blue shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-dark-navy text-lg mb-1">Service Area</h4>
                  <p className="text-gray-600">
                    123 Tech Avenue, Innovation City<br />
                    Serving the greater metropolitan area.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-silver/40 border border-silver/30"
            >
              <h3 className="font-poppins text-2xl font-bold text-dark-navy mb-8">Book a Service Request</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark-navy mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-5 py-4 rounded-xl border border-silver/50 bg-silver/5 text-dark-navy focus:bg-white focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 outline-none transition-all placeholder:text-gray-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-navy mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-5 py-4 rounded-xl border border-silver/50 bg-silver/5 text-dark-navy focus:bg-white focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 outline-none transition-all placeholder:text-gray-400"
                      placeholder="+1 (234) 567-8900"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark-navy mb-2">Appliance Type</label>
                    <select className="w-full px-5 py-4 rounded-xl border border-silver/50 bg-silver/5 text-dark-navy focus:bg-white focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 outline-none transition-all appearance-none">
                      <option value="" className="text-dark-navy">Select Appliance</option>
                      <option value="washing_machine">Washing Machine</option>
                      <option value="refrigerator">Refrigerator</option>
                      <option value="dishwasher">Dishwasher</option>
                      <option value="microwave">Microwave Oven</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-navy mb-2">Service Needed</label>
                    <select className="w-full px-5 py-4 rounded-xl border border-silver/50 bg-silver/5 text-dark-navy focus:bg-white focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 outline-none transition-all appearance-none">
                      <option value="" className="text-dark-navy">Select Service</option>
                      <option value="repair">Repair</option>
                      <option value="installation">Installation</option>
                      <option value="maintenance">Maintenance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-navy mb-2">Message/Issue Details</label>
                  <textarea 
                    rows={4}
                    className="w-full px-5 py-4 rounded-xl border border-silver/50 bg-silver/5 text-dark-navy focus:bg-white focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 outline-none transition-all resize-none placeholder:text-gray-400"
                    placeholder="Please describe the issue you're facing..."
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="w-full bg-electric-blue hover:bg-blue-600 text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-electric-blue/30"
                >
                  <Send className="w-5 h-5" /> Submit Request
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-green-500/40 hover:scale-110 transition-transform group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-20 bg-white text-dark-navy text-sm font-bold px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Need Help? Chat with us!
        </span>
      </a>
    </section>
  );
}
