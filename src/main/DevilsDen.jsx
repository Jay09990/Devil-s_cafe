import React from 'react';
import SEOSchema from '../components/SEOSchema';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SignatureLab from '../components/SignatureLab';
import Amenities from '../components/Amenities';
import MatchDayBanner from '../components/MatchDayBanner';
import SocialProof from '../components/SocialProof';
import FindTheDen from '../components/FindTheDen';

export default function DevilsDen() {
    return (
        <div className="bg-black min-h-screen text-[#F5F5F5] font-body selection:bg-[#FF4500] selection:text-white">
            <SEOSchema />
            <Navbar />
            <Hero />
            <SignatureLab />
            <MatchDayBanner />
            <Amenities />
            <SocialProof />
            <FindTheDen />
        </div>
    );
}
