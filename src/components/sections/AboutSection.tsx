"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Award, Zap, ThumbsUp } from "lucide-react";

export default function AboutSection() {
  const features = [
    { icon: <Award className="w-6 h-6" />, title: "Experienced Technicians", desc: "Our team consists of highly trained professionals." },
    { icon: <CheckCircle2 className="w-6 h-6" />, title: "Bosch Industry Background", desc: "Specialized expertise in premium German appliances." },
    { icon: <ThumbsUp className="w-6 h-6" />, title: "Premium Customer Support", desc: "We prioritize your satisfaction with every visit." },
    { icon: <Zap className="w-6 h-6" />, title: "Fast Response Service", desc: "Same-day diagnosis and repair when you need it most." },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-silver/10 -skew-x-12 translate-x-20"></div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-royal-blue/10 text-royal-blue font-semibold text-sm mb-6">
              About VM Tech
            </div>
            <h2 className="font-poppins text-4xl md:text-5xl font-bold text-dark-navy mb-6 leading-tight">
              Precision Service. <br />
              <span className="text-electric-blue">Trusted Expertise.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              VM Tech was founded by experienced professionals with extensive Bosch-related industry background. We bring the high standards of premium appliance manufacturing directly to your home repair and installation needs. 
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Our mission is to provide an unparalleled level of professional diagnosis and repair expertise, ensuring your premium appliances continue to operate at peak performance.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-silver/20 flex items-center justify-center text-royal-blue shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-navy mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl border-8 border-white">
              <div className="absolute inset-0 bg-gradient-to-tr from-royal-blue/80 to-transparent mix-blend-multiply z-10"></div>
              <Image
                src="/about-image.png"
                alt="VM Tech Professional Service"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center p-8 z-20 relative">
                   <Award className="w-24 h-24 text-white/50 mx-auto mb-6" />
                   <h3 className="text-3xl font-poppins font-bold text-white mb-2">7+ Years</h3>
                   <p className="text-white/80 font-medium">Combined Industry Experience</p>
                 </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 glassmorphism p-6 rounded-2xl shadow-xl max-w-xs z-20">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                </div>
                <span className="font-bold text-dark-navy">4.9/5 Rating</span>
              </div>
              <p className="text-sm text-gray-600">Based on hundreds of premium service reviews.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
