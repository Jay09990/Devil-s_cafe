import React, { useState } from 'react';
import { MATCH_DAY } from '../constants';

export default function MatchDayBanner() {
    const [isVisible, setIsVisible] = useState(true);

    // Auto-expires after the match date
    const today = new Date().toISOString().split('T')[0];
    const isMatchDay = MATCH_DAY.isActive && (!MATCH_DAY.matchDate || MATCH_DAY.matchDate >= today);

    if (!isMatchDay || !isVisible) return null;

    return (
        <div className="w-full bg-gradient-to-r from-[#FF2D2D] to-[#FF4500] relative z-40">
            <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-white animate-ping"></div>
                    <p className="font-head font-bold text-[13px] text-white tracking-wider uppercase">
                        LIVE MATCH SCREENING TONIGHT: {MATCH_DAY.matchName}
                    </p>
                </div>
                <button
                    onClick={() => setIsVisible(false)}
                    className="text-white opacity-80 hover:opacity-100 text-xl font-light"
                >
                    &times;
                </button>
            </div>
        </div>
    );
}
