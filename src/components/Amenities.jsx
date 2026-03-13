import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AMENITIES } from '../constants';

gsap.registerPlugin(ScrollTrigger);

// Utility to render simple SVG icons based on name
const getIcon = (name) => {
    const props = {
        width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
        strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "text-[#FF4500]"
    };
    switch (name) {
        case 'patio': return <svg {...props}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>;
        case 'screen': return <svg {...props}><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>;
        case 'wifi': return <svg {...props}><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>;
        case 'diy': return <svg {...props}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>;
        default: return null;
    }
};

export default function Amenities() {
    const gridRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(gridRef.current.children,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.12,
                    duration: 0.7,
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 85%",
                    }
                }
            );
        }, gridRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="vibe" className="bg-black border-t border-orange-500/10 relative">
            <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">

                <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 relative">
                    {/* Vertical dividers for desktop */}
                    <div className="hidden lg:block absolute left-1/4 top-0 bottom-0 w-[1px] bg-white/[0.06]"></div>
                    <div className="hidden lg:block absolute left-2/4 top-0 bottom-0 w-[1px] bg-white/[0.06]"></div>
                    <div className="hidden lg:block absolute left-3/4 top-0 bottom-0 w-[1px] bg-white/[0.06]"></div>

                    {AMENITIES.map((am, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-center text-center px-4">
                            <div className="mb-6 bg-[#242426]/50 p-4 rounded-full border border-white/5">
                                {getIcon(am.icon)}
                            </div>
                            <h3 className="font-head font-semibold text-[13px] text-[#F5F5F5] uppercase tracking-wider mb-2">
                                {am.label}
                            </h3>
                            <p className="font-body text-[12px] font-light text-[#A0A0A0]">
                                {am.sub}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
