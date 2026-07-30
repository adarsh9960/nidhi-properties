import React, { useEffect } from 'react';
import type { SeoPageMeta } from '../data/seoData';

interface SEOHeadProps {
  meta: SeoPageMeta;
  schemaType?: 'RealEstateAgent' | 'LocalBusiness' | 'RealEstateListing';
}

export const SEOHead: React.FC<SEOHeadProps> = ({ meta, schemaType = 'RealEstateAgent' }) => {
  useEffect(() => {
    // 1. Update Title
    document.title = meta.title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', meta.description);

    // 3. Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', meta.keywords.join(', '));

    // 4. Update OpenGraph Tags
    const ogTags = [
      { property: 'og:title', content: meta.title },
      { property: 'og:description', content: meta.description },
      { property: 'og:url', content: meta.canonicalUrl },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'en_IN' },
      { property: 'og:site_name', content: 'Nidhi Properties (NP)' }
    ];

    ogTags.forEach(({ property, content }) => {
      let ogMeta = document.querySelector(`meta[property="${property}"]`);
      if (!ogMeta) {
        ogMeta = document.createElement('meta');
        ogMeta.setAttribute('property', property);
        document.head.appendChild(ogMeta);
      }
      ogMeta.setAttribute('content', content);
    });

    // 5. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', meta.canonicalUrl);

    // 6. Inject JSON-LD Schema
    const schemaId = 'json-ld-schema-seo';
    let schemaScript = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = schemaId;
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": schemaType,
      "name": "Nidhi Properties (NP)",
      "url": meta.canonicalUrl,
      "logo": "https://nidhiproperties.com/favicon.svg",
      "image": "https://nidhiproperties.com/favicon.svg",
      "description": meta.description,
      "telephone": "+91 98200 00000",
      "priceRange": "₹₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Nisarg Bldg, Opp. Sachin Tendulkar Gymkhana, Beside Pizza Hut, Mahavir Nagar",
        "addressLocality": "Kandivali West",
        "addressRegion": "Maharashtra",
        "postalCode": "400067",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 19.2064,
        "longitude": 72.8407
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "10:00",
        "closes": "20:00"
      },
      "areaServed": [
        "Kandivali West",
        "Mahavir Nagar",
        "Borivali West",
        "Malad West",
        "Charkop",
        "Dahanukar Wadi",
        "Panchsheel Garden"
      ],
      "knowsAbout": meta.keywords
    };

    schemaScript.text = JSON.stringify(schemaData);

  }, [meta, schemaType]);

  return null;
};
