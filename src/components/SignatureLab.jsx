import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MENU_ITEMS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

export default function SignatureLab() {
    const [activeCategory, setActiveCategory] = useState(Object.keys(MENU_ITEMS)[0]);
    const containerRef = useRef(null);
    const headerRef = useRef(null);
    const gridRef = useRef(null);

    const categories = Object.keys(MENU_ITEMS);
    const currentItems = MENU_ITEMS[activeCategory];

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Header Animation on Scroll
            gsap.fromTo(headerRef.current.children,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 90%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    // Animate items on category change
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.set(gridRef.current.children, { opacity: 0, y: 20 });
            gsap.to(gridRef.current.children, {
                opacity: 1,
                y: 0,
                stagger: 0.05,
                duration: 0.4,
                ease: "power2.out"
            });
        }, gridRef);
        return () => ctx.revert();
    }, [activeCategory]);

    return (
        <section id="menu" ref={containerRef} className="py-24 bg-charcoal min-h-screen">
            <div className="max-w-[1200px] mx-auto px-6 md:px-12">

                {/* Section Header */}
                <div ref={headerRef} className="flex flex-col items-center mb-16">
                    <div className="flex items-center gap-6 w-full justify-center">
                        <div className="h-[1px] w-full max-w-[120px] bg-[#FF4500]"></div>
                        <h2 className="font-display font-bold text-white text-[clamp(24px,4vw,42px)] whitespace-nowrap text-center">
                            THE SIGNATURE LAB
                        </h2>
                        <div className="h-[1px] w-full max-w-[120px] bg-[#FF4500]"></div>
                    </div>
                    <p className="font-body text-[#A0A0A0] text-sm mt-4 tracking-widest uppercase">Select a Category</p>
                </div>

                {/* Category Tabs */}
                <div className="flex gap-3 overflow-x-auto hide-scrollbar mb-12 pb-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`whitespace-nowrap px-6 py-3 rounded-full font-head font-bold text-sm transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-[#FF4500] text-white shadow-[0_0_20px_rgba(255,69,0,0.3)]'
                                    : 'bg-[#242426] text-[#A0A0A0] hover:bg-[#242426]/80'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-4">
                    {currentItems.map((item, idx) => (
                        <div
                            key={`${item.name}-${idx}`}
                            className="group flex flex-col py-3 border-b border-white/[0.05] hover:border-[#FF4500]/30 transition-all duration-300"
                        >
                            <div className="flex items-baseline justify-between w-full">
                                <h3 className="font-head font-medium text-[15px] md:text-[16px] text-[#F5F5F5] group-hover:text-[#FF4500] transition-colors whitespace-nowrap">
                                    {item.name}
                                </h3>
                                <div className="flex-grow border-b border-dotted border-white/10 mx-4 mb-1 opacity-40 group-hover:border-[#FF4500]/20 transition-all"></div>
                                <span className="font-head font-bold text-[15px] text-[#FF4500] shrink-0">
                                    {item.price}
                                </span>
                            </div>
                            {item.desc && (
                                <p className="font-body font-light text-[12px] text-[#A0A0A0]/60 mt-1 leading-[1.4] max-w-[90%] group-hover:text-[#A0A0A0]/80 transition-colors">
                                    {item.desc}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
