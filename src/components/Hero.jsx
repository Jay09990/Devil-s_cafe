import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { STATS } from '../constants';

export default function Hero() {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);
    const badgeRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Staggered text entry
            gsap.fromTo(contentRef.current.children,
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: 'power4.out', delay: 0.5 }
            );

            // Image slide-in
            gsap.fromTo(imageRef.current,
                { x: 60, opacity: 0 },
                { x: 0, opacity: 1, duration: 1.4, ease: 'power3.out', delay: 0.3 }
            );

            // Badge pop
            gsap.fromTo(badgeRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1, delay: 1.5, ease: 'back.out(1.7)' }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full min-h-screen bg-black overflow-hidden noise-overlay flex flex-col md:flex-row pt-20 md:pt-24 pb-12 md:pb-0">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF4500]/6 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Left Panel - Text Content */}
            <div className="flex-none md:w-[55%] flex flex-col justify-center px-6 md:px-16 lg:px-24 py-12 md:py-0 relative z-10">
                <div ref={contentRef} className="max-w-[600px]">
                    {/* Micro Label */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-[1px] w-8 bg-[#FF4500]"></div>
                        <span className="font-body font-normal text-[11px] tracking-widest text-[#FF8C00]">MOTERA, AHMEDABAD</span>
                    </div>

                    {/* Heading */}
                    <h1 className="font-display font-bold text-white leading-[1.0] tracking-[0.06em] text-[clamp(42px,8vw,96px)] mb-6">
                        THE DEVIL <br />
                        NEVER SLEEPS<span className="text-[#FF4500]">.</span>
                    </h1>

                    {/* Subhead */}
                    <p className="font-body font-light text-[17px] text-[#A0A0A0] max-w-[480px] leading-[1.7] mb-10">
                        Motera's anchor establishment for burgers, brews, and after-hours culture. Only place open till 2 AM.
                    </p>

                    {/* CTA Row */}
                    <div className="flex flex-wrap gap-4 mb-16">
                        <a href="#menu" className="bg-[#FF4500] glow-orange font-head font-bold text-[12px] text-white px-9 py-[18px] rounded-[4px] tracking-widest hover:shadow-[0_0_40px_rgba(255,69,0,0.6)] hover:scale-[1.03] transition-all">
                            EXPLORE THE LAB &rarr;
                        </a>
                        <a href="#locate" className="border border-[#FF4500]/40 text-[#FF8C00] font-head font-bold text-[12px] px-9 py-[18px] rounded-[4px] tracking-widest hover:border-[#FF4500] hover:text-[#FF4500] transition-colors">
                            FIND THE DEN
                        </a>
                    </div>

                    {/* Stats Bar */}
                    <div className="flex items-center justify-between w-full max-w-[480px]">
                        {STATS.map((stat, i) => (
                            <React.Fragment key={stat.label}>
                                <div className="flex flex-col items-center">
                                    <span className="font-head font-extrabold text-[28px] text-white">{stat.value}</span>
                                    <span className="font-body font-normal text-[11px] text-[#A0A0A0] uppercase mt-1">{stat.label}</span>
                                </div>
                                {i < STATS.length - 1 && (
                                    <div className="w-[1px] h-12 bg-white/10"></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block absolute left-[55%] top-0 bottom-0 w-[1px] bg-[#FF4500]/20 z-20"></div>

            {/* Right Panel - Image */}
            <div className="flex-none w-full md:w-[45%] min-h-[50vh] md:min-h-screen relative overflow-hidden" ref={imageRef}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,69,0,0.2)_0%,transparent_60%)] z-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0D0D0D_120%)] z-10 pointer-events-none"></div>

                <div className="absolute inset-0 bg-[#1A1A1B] animate-pulse"></div>
                <img
                    src="/images/hero_burger.jpg"
                    alt="Devil's Cafe Signature Burger"
                    className="w-full h-full object-cover object-center relative z-10"
                    fetchpriority="high"
                    onError={(e) => { e.target.style.display = 'none'; }}
                />

                {/* Floating Badge */}
                <div
                    ref={badgeRef}
                    className="absolute top-12 left-12 md:-left-6 glass px-5 py-2.5 rounded-full z-20 shadow-2xl flex items-center gap-2"
                >
                    <span className="text-[14px]">⭐</span>
                    <span className="font-body font-medium text-[11px] text-white tracking-wide">#1 RATED BURGER IN MOTERA</span>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20 animate-pulse">
                <div className="w-[1px] h-12 bg-white/30"></div>
                <span className="font-body text-[10px] tracking-widest text-[#A0A0A0]">SCROLL</span>
            </div>
        </section>
    );
}
