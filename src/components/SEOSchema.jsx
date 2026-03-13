import React from 'react';

export default function SEOSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "CafeOrCoffeeShop",
        "name": "Devil's Cafe",
        "alternateName": "Devils Cafe",
        "description": "Motera's premier late-night cafe. Signature Peri Peri Burgers, 4 Cheese Pizza, specialty brews and outdoor patio. Open till 2AM.",
        "url": "https://www.devilsdencafe.in",
        "telephone": ["+917016418940", "+917228861002"],
        "priceRange": "₹₹",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, UPI, Cards",
        "servesCuisine": [
            "American", "Italian", "Continental",
            "Mexican", "Coffee"
        ],
        "hasMenu": "https://www.devilsdencafe.in/#menu",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "GF 8A, Sangath Central Mall, Behind 4D Mall, Visat Gandhinagar Highway",
            "addressLocality": "Motera",
            "addressRegion": "Gujarat",
            "postalCode": "380005",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "23.1003",
            "longitude": "72.5870"
        },
        "openingHoursSpecification": [{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday",
                "Friday", "Saturday", "Sunday"
            ],
            "opens": "09:00",
            "closes": "02:00"
        }],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "146",
            "bestRating": "5",
            "worstRating": "1"
        },
        "menu": {
            "@type": "Menu",
            "hasMenuSection": [
                {
                    "@type": "MenuSection",
                    "name": "Signature Burgers",
                    "hasMenuItem": [
                        {
                            "@type": "MenuItem",
                            "name": "Peri Peri Burger",
                            "description": "In-house fiery potato patty with zesty house sauce",
                            "offers": {
                                "@type": "Offer",
                                "price": "89",
                                "priceCurrency": "INR"
                            }
                        },
                        {
                            "@type": "MenuItem",
                            "name": "Cheese Chilli Burger",
                            "offers": {
                                "@type": "Offer",
                                "price": "149",
                                "priceCurrency": "INR"
                            }
                        }
                    ]
                },
                {
                    "@type": "MenuSection",
                    "name": "Gourmet Sandwiches",
                    "hasMenuItem": [
                        {
                            "@type": "MenuItem",
                            "name": "3-Tier Mexican Sandwich",
                            "description": "Premium vertically-stacked specialty, three layers deep",
                            "offers": {
                                "@type": "Offer",
                                "price": "229",
                                "priceCurrency": "INR"
                            }
                        }
                    ]
                }
            ]
        },
        "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Outdoor Patio", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Live Match Screening", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Takeaway", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Delivery", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true }
        ],
        "image": [
            "https://www.devilsdencafe.in/images/hero_burger.jpg",
            "https://www.devilsdencafe.in/images/og-cover.jpg"
        ],
        "sameAs": [
            "https://instagram.com/devilsdencafe",
            "https://www.zomato.com/ahmedabad/devils-den-motera",
            "https://www.swiggy.com/restaurants/devils-den-motera",
            "https://www.google.com/maps?cid=YOUR_GOOGLE_CID"
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
        />
    )
}
