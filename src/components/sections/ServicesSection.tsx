"use client";

import { motion } from "framer-motion";
import { 
  Wrench, 
  Settings, 
  Sparkles, 
  AlertTriangle, 
  Cpu, 
  Home 
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: "repair",
      title: "Repair Services",
      icon: <Wrench className="w-8 h-8" />,
      items: [
        "Front Load Washing Machine",
        "Top Load Washing Machine",
        "Dishwasher Repair",
        "Refrigerator Repair",
        "Microwave Oven Fix",
        "Built-in Kitchen Appliances"
      ]
    },
    {
      id: "installation",
      title: "Installation & Setup",
      icon: <Settings className="w-8 h-8" />,
      items: [
        "Washing Machine Setup",
        "Dishwasher Installation",
        "Refrigerator Setup",
        "Appliance Unboxing",
        "Feature Demo & Walkthrough"
      ]
    },
    {
      id: "maintenance",
      title: "Maintenance Services",
      icon: <Sparkles className="w-8 h-8" />,
      items: [
        "Periodic Servicing",
        "Deep Cleaning",
        "Drum Cleaning",
        "Filter Cleaning",
        "Internal Component Care"
      ]
    },
    {
      id: "emergency",
      title: "Emergency Services",
      icon: <AlertTriangle className="w-8 h-8" />,
      items: [
        "Same-Day Repair",
        "Urgent Breakdown Support",
        "Fast Response Dispatch",
        "Priority Diagnosis",
      ]
    },
    {
      id: "spares",
      title: "Spare Parts Replacement",
      icon: <Cpu className="w-8 h-8" />,
      items: [
        "Genuine Spare Parts",
        "Motor Replacement",
        "Pump Repair",
        "PCB Repair & Replacement",
        "Sensor Fixes"
      ]
    },
    {
      id: "support",
      title: "Home Support",
      icon: <Home className="w-8 h-8" />,
      items: [
        "Doorstep Service",
        "Inspection & Diagnosis",
        "Performance Testing",
        "Post-Repair Consultation"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-dark-navy relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal-blue rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-silver font-semibold text-sm mb-6">
            Our Premium Services
          </div>
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive <span className="text-gradient">Appliance</span> Solutions
          </h2>
          <p className="text-lg text-silver/80">
            From emergency repairs to periodic maintenance, we offer a full suite of services designed to keep your home running smoothly with expert precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 flex flex-col h-full group transition-all duration-300 shadow-xl shadow-royal-blue/20"
            >
              <div className="w-16 h-16 rounded-2xl bg-royal-blue/5 flex items-center justify-center text-royal-blue mb-6 group-hover:bg-electric-blue group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="font-poppins text-2xl font-bold text-dark-navy mb-6 group-hover:text-electric-blue transition-colors">
                {service.title}
              </h3>
              <ul className="space-y-3 mb-8">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-blue shrink-0 mt-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6 border-t border-silver/30">
                <a href="#contact" className="inline-flex items-center text-royal-blue font-semibold hover:text-electric-blue transition-colors">
                  Book Now <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
