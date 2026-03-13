import React from 'react';
import { BRAND } from '../constants';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#1A1A1B] border-t border-white/[0.05] relative z-20">
            <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

                <p className="font-body font-normal text-[12px] text-[#A0A0A0]">
                    © {year} {BRAND.name}. All Rights Reserved.
                </p>

                <div className="flex items-center gap-6">
                    <a href={BRAND.social.instagram} target="_blank" rel="noreferrer" className="text-[#A0A0A0] hover:text-[#FF4500] transition-colors font-body text-[12px] uppercase">
                        Instagram
                    </a>
                    <a href="https://www.zomato.com/ahmedabad/devils-den-motera-1" target="_blank" rel="noreferrer" className="text-[#A0A0A0] hover:text-[#FF4500] transition-colors font-body text-[12px] uppercase">
                        Zomato
                    </a>
                    <a href="https://www.swiggy.com/city/ahmedabad/devils-cafe-motera-rest588401" target="_blank" rel="noreferrer" className="text-[#A0A0A0] hover:text-[#FF4500] transition-colors font-body text-[12px] uppercase">
                        Swiggy
                    </a>
                </div>

            </div>
        </footer>
    );
}
