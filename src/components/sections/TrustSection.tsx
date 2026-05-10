"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Users, Wrench, Calendar, Clock } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function TrustSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      id: 1,
      icon: <Users className="w-10 h-10" />,
      value: 10000,
      suffix: "+",
      label: "Happy Customers",
    },
    {
      id: 2,
      icon: <Wrench className="w-10 h-10" />,
      value: 15000,
      suffix: "+",
      label: "Appliances Serviced",
    },
    {
      id: 3,
      icon: <Calendar className="w-10 h-10" />,
      value: 15,
      suffix: "+",
      label: "Years of Experience",
    },
    {
      id: 4,
      icon: <Clock className="w-10 h-10" />,
      value: 24,
      suffix: "h",
      label: "Fast Support",
    },
  ];

  return (
    <section className="py-20 bg-royal-blue relative overflow-hidden" ref={ref}>
      {/* Background Texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/20">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center px-4"
            >
              <div className="flex justify-center text-white/80 mb-4">
                {stat.icon}
              </div>
              <div className="font-poppins text-4xl md:text-5xl font-bold text-white mb-2">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} separator="," />
                ) : (
                  "0"
                )}
                <span className="text-electric-blue">{stat.suffix}</span>
              </div>
              <div className="text-silver/90 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
