"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Homeowner",
      content: "VM Tech completely saved the day when my built-in refrigerator stopped cooling right before a major dinner party. The technician was extremely professional, identified the PCB issue immediately, and had it running perfectly within hours. True experts!",
      rating: 5,
      initial: "S"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Property Manager",
      content: "As someone who manages multiple luxury properties, finding reliable appliance repair is tough. VM Tech's team has an incredible understanding of high-end Bosch appliances. Their transparent pricing and punctual service makes them my only call.",
      rating: 5,
      initial: "M"
    },
    {
      id: 3,
      name: "Emma Robertson",
      role: "Homeowner",
      content: "The installation of my new front-load washer was flawless. The technician took the time to do a full unboxing, careful setup to ensure it was perfectly leveled, and gave me a comprehensive walkthrough of the features. Outstanding white-glove service.",
      rating: 5,
      initial: "E"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Restaurant Owner",
      content: "When our commercial-grade dishwasher started leaking, VM Tech responded the same day. Their technician carried genuine spare parts in his van and fixed the pump issue on the spot. Minimal downtime for my business. Highly recommended.",
      rating: 5,
      initial: "D"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-dark-navy relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal-blue rounded-full mix-blend-screen filter blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-silver font-semibold text-sm mb-6">
            Client Testimonials
          </div>
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by <span className="text-gradient">Premium</span> Households
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y -ml-4">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_40%] pl-4">
                  <div className="glassmorphism-dark rounded-3xl p-8 h-full flex flex-col relative">
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
                    
                    <div className="flex gap-1 mb-6 text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-silver/90 leading-relaxed mb-8 flex-grow relative z-10 italic">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-electric-blue text-white flex items-center justify-center font-bold text-lg font-poppins shrink-0 shadow-lg shadow-electric-blue/20">
                        {testimonial.initial}
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-silver/60">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-electric-blue hover:text-white hover:border-electric-blue transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === selectedIndex ? "bg-electric-blue w-8" : "bg-white/20"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-electric-blue hover:text-white hover:border-electric-blue transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
