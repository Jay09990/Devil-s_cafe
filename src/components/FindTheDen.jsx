import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BRAND } from '../constants';
import { useIsOpen } from '../hooks/useIsOpen';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

export default function FindTheDen() {
    const containerRef = useRef(null);
    const leftContentRef = useRef(null);
    const mapRef = useRef(null);
    const status = useIsOpen();

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Left Content Stagger
            gsap.fromTo(leftContentRef.current.children,
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.15,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: leftContentRef.current,
                        start: "top 80%",
                    }
                }
            );

            // Map Scale In
            gsap.fromTo(mapRef.current,
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: mapRef.current,
                        start: "top 80%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="locate" ref={containerRef} className="bg-black border-t-2 border-[#FF4500] relative">

            {/* Texture Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-[0.06] pointer-events-none"></div>

            <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 relative z-10 flex flex-col md:flex-row gap-16 md:gap-24">

                {/* Left Content */}
                <div ref={leftContentRef} className="flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L4 10V22H20V10L12 2Z" fill="#FF4500" />
                        </svg>
                        <h2 className="font-display font-bold text-[32px] text-white">DEVIL'S DEN CAFE</h2>
                    </div>

                    <p className="font-body font-light text-[14px] text-[#A0A0A0] mb-12">
                        Motera's anchor establishment for late-night culture.
                    </p>

                    <div className="w-12 h-[2px] bg-[#FF4500] mb-12"></div>

                    <div className="flex flex-col gap-6 mb-12">
                        <div>
                            <p className="font-body font-normal text-[14px] text-[#A0A0A0] leading-[1.8]">
                                {BRAND.address.line1} <br />
                                {BRAND.address.line2} <br />
                                {BRAND.address.area}, {BRAND.address.city} {BRAND.address.pin}
                            </p>
                        </div>

                        <div className="flex flex-col gap-1">
                            {BRAND.phone.map(p => (
                                <a key={p} href={`tel:${p.replace(/\s+/g, '')}`} className="font-body font-medium text-[14px] text-white hover:text-[#FF4500] transition-colors">
                                    {p}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-6">
                        <div className="flex flex-col gap-2 border border-[#FF4500]/20 px-4 py-3 rounded bg-white/[0.02]">
                            <span className="font-head font-bold text-[13px] text-[#FF4500] tracking-[0.1em] uppercase">HOURS</span>
                            <span className="font-body text-[13px] text-[#F5F5F5]">{BRAND.hours.open} – {BRAND.hours.close}</span>
                        </div>

                        <a
                            href={`https://wa.me/${BRAND.whatsapp}`}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-head font-bold text-[13px] px-6 py-4 rounded flex items-center gap-3 transition-colors md:w-auto w-full justify-center shadow-lg"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.472-1.761-1.645-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                            </svg>
                            WhatsApp Us
                        </a>
                    </div>
                </div>

                {/* Right Content - Map */}
                <div ref={mapRef} className="flex-1 w-full h-[400px] md:h-auto min-h-[450px] border border-[#FF4500]/20 rounded-[8px] overflow-hidden shadow-[0_0_30px_rgba(255,69,0,0.1)] relative">
                    <iframe
                        title="Devil's Den Cafe Location"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7040.509797231276!2d72.60140065527807!3d23.106421207786752!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83962aebe93b%3A0x4d174e0af0611c50!2sDevil&#39;s%20Cafe-%20Best%20Cafe%20In%20Motera%20%7C%20Coffee%20Shop%20In%20Motera%20%7C%20Burger%20Shop%20In%20Motera!5e0!3m2!1sen!2sin!4v1773396030839!5m2!1sen!2sin&iwloc="
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>

            <Footer />
        </section>
    );
}
