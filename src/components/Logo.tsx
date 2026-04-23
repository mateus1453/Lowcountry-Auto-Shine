import React, { useState } from 'react';

const Logo = ({ className = "w-12 h-12" }: { className?: string }) => {
  const [error, setError] = useState(false);

  // If the image fails to load or hasn't been uploaded yet, use the SVG fallback
  if (error) {
    return (
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
      >
        <rect width="100" height="100" rx="20" fill="currentColor" className="text-slate-900" />
        <path d="M65 35H35V65H45V60H55V65H65V35Z" stroke="#20C997" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M35 50H25V65H35" stroke="#20C997" strokeWidth="2" />
        <path d="M75 55L70 45H50L45 55H75Z" fill="#20C997" />
        <path d="M45 55L40 65H80L75 55" stroke="#20C997" strokeWidth="2" />
        <circle cx="35" cy="65" r="3" fill="white" />
        <circle cx="65" cy="65" r="3" fill="white" />
        <circle cx="50" cy="65" r="3" fill="white" />
        <circle cx="75" cy="65" r="3" fill="white" />
        <path d="M25 35L28 38M28 35L25 38" stroke="white" strokeWidth="1.5" />
        <path d="M75 35L78 38M78 35L75 38" stroke="white" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <img 
      src="/logo-1.png" 
      alt="Lowcountry Auto Shine Logo" 
      className={`${className} object-contain`}
      onError={() => setError(true)}
      referrerPolicy="no-referrer"
    />
  );
};

export default Logo;
