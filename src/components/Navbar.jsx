import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useIsOpen } from '../hooks/useIsOpen';
import { NAV_LINKS, BRAND } from '../constants';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const status = useIsOpen();
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(navRef.current,
                { y: -80, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2, clearProps: 'all' }
            );
        }, navRef);
        return () => ctx.revert();
    }, []);

    return (
        <>
            <nav
                ref={navRef}
                className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled
                        ? 'bg-black/90 backdrop-blur-xl border-b border-orange-500/15 py-5'
                        : 'bg-transparent py-8'
                    }`}
            >
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L4 10V22H20V10L12 2Z" fill="#FF4500" />
                            <path d="M9 14H15V16H9V14Z" fill="#0D0D0D" />
                        </svg>
                        <span className="font-display font-bold text-white text-lg tracking-wider">DEVIL'S CAFE</span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex gap-6">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="font-body font-normal text-[12px] text-white uppercase tracking-widest hover:text-[#FF4500] hover:border-b-2 hover:border-[#FF4500] transition-colors pb-1"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* Status Pill */}
                        <div className="glass px-3 py-1.5 rounded-full flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full animate-pulse ${status.isOpen ? 'bg-[#25D366]' : 'bg-[#FF2D2D]'}`}></span>
                            <span className="font-body font-medium text-[11px] text-[#FF4500]">{status.label}</span>
                        </div>

                        {/* CTA */}
                        <a
                            href={`https://wa.me/${BRAND.whatsapp}`}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#FF4500] glow-orange font-head font-bold text-white text-[12px] px-6 py-2.5 rounded hover:scale-105 transition-transform"
                        >
                            ORDER NOW
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden flex flex-col gap-[5px]"
                        onClick={() => setMobileOpen(true)}
                    >
                        <span className="w-6 h-[1px] bg-[#FF4500] block"></span>
                        <span className="w-6 h-[1px] bg-[#FF4500] block"></span>
                        <span className="w-6 h-[1px] bg-[#FF4500] block"></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer */}
            {mobileOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black/80 z-[105] backdrop-blur-sm"
                        onClick={() => setMobileOpen(false)}
                    ></div>
                    <div className="fixed top-0 right-0 h-full w-[280px] bg-charcoal z-[110] border-l border-orange-500/20 shadow-2xl flex flex-col p-8">
                        <button
                            className="self-end text-[#FF4500] text-3xl font-light mb-12 z-[120]"
                            onClick={() => setMobileOpen(false)}
                        >
                            &times;
                        </button>
                        <div className="flex flex-col gap-8">
                            {NAV_LINKS.map((link, i) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="font-display font-bold text-xl text-white uppercase hover:text-[#FF4500] transition-colors"
                                    onClick={() => setMobileOpen(false)}
                                    style={{ animation: `fadeIn 0.4s ease forwards ${i * 0.1}s`, opacity: 0 }}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="mt-8">
                                <div className="glass px-4 py-3 rounded flex items-center gap-3 mb-6">
                                    <span className={`w-3 h-3 rounded-full animate-pulse ${status.isOpen ? 'bg-[#25D366]' : 'bg-[#FF2D2D]'}`}></span>
                                    <span className="font-body font-medium text-[13px] text-[#FF4500]">{status.label}</span>
                                </div>
                                <a
                                    href={`https://wa.me/${BRAND.whatsapp}`}
                                    className="flex items-center justify-center w-full bg-[#FF4500] glow-orange font-head font-bold text-white text-[14px] py-4 rounded"
                                >
                                    ORDER NOW
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
