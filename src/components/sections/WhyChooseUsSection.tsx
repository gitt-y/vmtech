"use client";

import { motion } from "framer-motion";
import { UserCheck, Clock, ShieldCheck, MapPin, Star, HandHeart } from "lucide-react";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Experienced Professionals",
      desc: "Our technicians bring years of specialized experience in premium appliance care.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Response",
      desc: "We understand urgency. Expect prompt scheduling and same-day service options.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Genuine Components",
      desc: "We use only authentic, manufacturer-approved parts for all repairs.",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Doorstep Convenience",
      desc: "Complete repair and diagnosis services performed right at your location.",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Service Quality",
      desc: "A white-glove approach to appliance care, leaving your home spotless.",
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: "Transparent Support",
      desc: "Clear upfront pricing and honest advice. No hidden costs or surprises.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-dark-navy text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-royal-blue rounded-full mix-blend-screen filter blur-[100px] opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric-blue rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-silver font-semibold text-sm mb-6">
              The VM Tech Advantage
            </div>
            <h2 className="font-poppins text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Why We Are The <span className="text-electric-blue">Clear Choice</span>
            </h2>
            <p className="text-lg text-silver/80 mb-8">
              We don't just fix appliances; we restore your peace of mind. Experience the difference of working with true industry professionals.
            </p>
            <a href="#contact" className="inline-flex items-center justify-center bg-electric-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full font-medium transition-colors shadow-lg shadow-electric-blue/40">
              Get Expert Help Today
            </a>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glassmorphism-dark p-8 rounded-2xl hover:bg-white/10 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-electric-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                <h3 className="font-poppins text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-silver/70 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
