"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Wrench, ShieldCheck, Clock, Phone, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const highlights = [
    { icon: <Clock className="w-5 h-5" />, text: "Same-Day Service" },
    { icon: <Wrench className="w-5 h-5" />, text: "Experienced Technicians" },
    { icon: <ShieldCheck className="w-5 h-5" />, text: "Genuine Spare Parts" },
    { icon: <Wrench className="w-5 h-5" />, text: "Doorstep Support" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-dark-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-banner.png"
          alt="Professional Appliance Repair"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-navy via-dark-navy/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-navy via-transparent to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-silver text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse"></span>
              Bosch Industry Experts
            </div>
            
            <h1 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Expert Appliance Repair & <span className="text-gradient">Installation</span> Services
            </h1>
            
            <p className="text-xl text-silver/90 mb-10 max-w-2xl leading-relaxed">
              Premium doorstep appliance solutions delivered by experienced professionals. Precision service, trusted expertise.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-electric-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-electric-blue/40 flex items-center gap-2 cursor-pointer"
              >
                Book Service <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+1234567890"
                className="glassmorphism-dark hover:bg-white/10 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center gap-2 border border-white/20"
              >
                <Phone className="w-5 h-5" /> Call Now
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/1234567890"
                className="text-white hover:text-green-400 px-6 py-4 rounded-full font-medium transition-all flex items-center gap-2"
              >
                WhatsApp Support
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-silver/80">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-electric-blue shrink-0">
                  {item.icon}
                </div>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
