import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TESTIMONIALS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

export default function SocialProof() {
    const containerRef = useRef(null);
    const ratingRef = useRef(null);
    const cardsRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Big number pop
            gsap.fromTo(ratingRef.current,
                { scale: 0.5, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.2,
                    ease: "back.out(1.4)",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    }
                }
            );

            // Cards stagger
            gsap.fromTo(cardsRef.current.children,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-charcoal relative overflow-hidden">

            {/* Decorative BG element */}
            <div className="absolute top-0 right-[-20%] w-[600px] h-[600px] rounded-full border border-[#FF4500]/10 opacity-20 pointer-events-none"></div>

            <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">

                {/* Rating Block */}
                <div ref={ratingRef} className="flex flex-col items-center mb-20">
                    <div className="flex items-center gap-8 md:gap-16">
                        <div className="hidden md:block w-32 h-[1px] bg-[#FF4500]/40"></div>
                        <div className="flex flex-col items-center">
                            <span className="font-display font-extrabold text-white leading-none text-[clamp(80px,15vw,160px)] z-10">4.8</span>
                            <div className="text-[#FF4500] text-[28px] tracking-[4px] mt-2 mb-3">★★★★★</div>
                            <p className="font-body font-light text-[14px] text-[#A0A0A0]">Based on 146+ Google Reviews</p>
                        </div>
                        <div className="hidden md:block w-32 h-[1px] bg-[#FF4500]/40"></div>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 w-full max-w-[1000px]">
                    {TESTIMONIALS.map((t, i) => {
                        // Apply rotations based on spec
                        let rotateClass = "rotate-[0deg]";
                        if (i === 0) rotateClass = "md:rotate-[-1.5deg] translate-y-4";
                        if (i === 2) rotateClass = "md:rotate-[1.5deg] translate-y-4";

                        return (
                            <div
                                key={i}
                                className={`glass rounded-[8px] p-7 md:p-10 relative flex flex-col justify-between ${rotateClass} hover:rotate-0 hover:translate-y-0 transition-transform duration-500`}
                            >
                                {/* Large quote mark */}
                                <div className="absolute top-4 left-6 font-display text-[64px] text-[#FF4500] opacity-20 leading-none">"</div>

                                <p className="font-body font-light text-[15px] italic text-[#F5F5F5] leading-relaxed mb-8 relative z-10 pt-4">
                                    {t.text}
                                </p>

                                <div className="flex flex-col gap-1 relative z-10">
                                    <span className="font-head font-semibold text-[13px] text-white tracking-wide">{t.name}</span>
                                    <span className="font-body font-normal text-[11px] text-[#A0A0A0]">{t.role}</span>
                                    <div className="text-[#FF4500] text-[12px] mt-1">{"★".repeat(t.stars)}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
