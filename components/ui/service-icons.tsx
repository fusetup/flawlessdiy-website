// components/ui/service-icons.tsx
import React from 'react';

interface ServiceIconProps {
  topic: string;
  className?: string;
}

export function ServiceIcon({ topic, className = "w-24 h-24" }: ServiceIconProps) {
  const getIconByTopic = (topic: string) => {
    const lowerTopic = topic.toLowerCase();
    
    // Carpentry Icons
    if (lowerTopic.includes('door')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <path d="M9 9h6v6H9z"/>
          <circle cx="15.5" cy="12" r="1"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('skirting') || lowerTopic.includes('board')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 20h18v-2H3z"/>
          <path d="M3 18V8l18-2v12"/>
          <path d="M8 14h8"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('shelf') || lowerTopic.includes('shelving')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 7h18"/>
          <path d="M3 12h18"/>
          <path d="M3 17h18"/>
          <path d="M5 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"/>
          <path d="M5 17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('loft') || lowerTopic.includes('boarding')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 21L12 3l9 18H3z"/>
          <path d="M8 18h8"/>
          <path d="M10 15h4"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('wall') || lowerTopic.includes('stud')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M9 3v18"/>
          <path d="M15 3v18"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('wardrobe') || lowerTopic.includes('bespoke')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M12 3v18"/>
          <circle cx="8" cy="12" r="1"/>
          <circle cx="16" cy="12" r="1"/>
          <path d="M3 7h18"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('architrave')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="4" y="4" width="16" height="16" rx="2"/>
          <rect x="7" y="7" width="10" height="10" rx="1"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('deck') || lowerTopic.includes('decking')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 12h18"/>
          <path d="M3 8h18"/>
          <path d="M3 16h18"/>
          <path d="M6 4v16"/>
          <path d="M12 4v16"/>
          <path d="M18 4v16"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('stair') || lowerTopic.includes('step')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 21h4v-4h4v-4h4v-4h4V3"/>
          <path d="M7 17h4"/>
          <path d="M11 13h4"/>
          <path d="M15 9h4"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('window') || lowerTopic.includes('sill')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M3 12h18"/>
          <path d="M12 3v18"/>
        </svg>
      );
    }
    
    // Cleaning Icons
    if (lowerTopic.includes('tenancy') || lowerTopic.includes('end of')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
          <path d="M7 10l5-3 5 3"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('domestic') || lowerTopic.includes('regular')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"/>
          <circle cx="12" cy="12" r="10" strokeDasharray="2 2"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('oven')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="6" width="18" height="12" rx="2"/>
          <circle cx="7" cy="10" r="1"/>
          <circle cx="12" cy="10" r="1"/>
          <circle cx="17" cy="10" r="1"/>
          <path d="M7 6V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2"/>
          <rect x="6" y="12" width="12" height="4" rx="1"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('carpet')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 6h18v12H3z"/>
          <path d="M6 9h12"/>
          <path d="M6 12h12"/>
          <path d="M6 15h12"/>
          <circle cx="7" cy="9" r="0.5"/>
          <circle cx="10" cy="12" r="0.5"/>
          <circle cx="14" cy="15" r="0.5"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('window cleaning')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M3 12h18"/>
          <path d="M12 3v18"/>
          <circle cx="8" cy="8" r="1"/>
          <path d="M16 16l-2-2"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('bathroom')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M7 7h10v10H7z"/>
          <path d="M5 10h2"/>
          <path d="M17 10h2"/>
          <circle cx="9" cy="9" r="1"/>
          <path d="M12 12c0 1-1 2-3 2s-3-1-3-2"/>
          <path d="M7 17v2"/>
          <path d="M17 17v2"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('build') || lowerTopic.includes('after')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/>
          <path d="M12 12l8-4.5"/>
          <path d="M12 12v9"/>
          <path d="M12 12L4 7.5"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('fridge') || lowerTopic.includes('freezer')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="5" y="2" width="14" height="20" rx="2"/>
          <path d="M5 8h14"/>
          <circle cx="8" cy="5" r="0.5"/>
          <circle cx="8" cy="12" r="0.5"/>
          <path d="M12 5v2"/>
          <path d="M12 12v2"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('floor') || lowerTopic.includes('strip') || lowerTopic.includes('polish')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 9v6"/>
          <path d="M9 12h6"/>
          <circle cx="12" cy="12" r="8" strokeDasharray="3 1"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('kitchen') || lowerTopic.includes('degrease')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M8 2v4"/>
          <path d="M16 2v4"/>
          <rect x="3" y="4" width="18" height="16" rx="2"/>
          <rect x="6" y="8" width="12" height="8" rx="1"/>
          <circle cx="9" cy="11" r="1"/>
          <circle cx="15" cy="11" r="1"/>
        </svg>
      );
    }
    
    // Gardening Icons
    if (lowerTopic.includes('lawn') || lowerTopic.includes('mowing')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 20h18"/>
          <path d="M5 16l2-4 2 4 2-4 2 4 2-4 2 4"/>
          <path d="M7 12l2-2 2 2 2-2 2 2"/>
          <circle cx="12" cy="8" r="2"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('hedge') || lowerTopic.includes('trim')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 18c2-4 4-8 6-6s4 2 6-6c2-4 4 2 6 6"/>
          <path d="M3 14c2-3 4-6 6-4s4 1 6-4c2-3 4 1 6 4"/>
          <path d="M3 10c2-2 4-4 6-2s4 0 6-2c2-2 4 0 6 2"/>
          <path d="M3 22h18"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('weed')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2v20"/>
          <path d="M8 6l8 8"/>
          <path d="M16 6l-8 8"/>
          <circle cx="12" cy="12" r="2"/>
          <path d="M6 18l12-12"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('clearance') || lowerTopic.includes('garden clearance')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="11" width="18" height="10" rx="2"/>
          <circle cx="12" cy="2" r="1"/>
          <path d="M12 3v8"/>
          <path d="M8 7l4 4 4-4"/>
          <path d="M7 15h10"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('plant') || lowerTopic.includes('planting')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2v20"/>
          <path d="M8 6s0-2 4-2 4 2 4 2"/>
          <path d="M8 10s0-2 4-2 4 2 4 2"/>
          <path d="M8 14s0-2 4-2 4 2 4 2"/>
          <path d="M6 22h12"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('soil') || lowerTopic.includes('preparation')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 20h18"/>
          <circle cx="7" cy="17" r="1"/>
          <circle cx="12" cy="15" r="1"/>
          <circle cx="17" cy="17" r="1"/>
          <circle cx="9" cy="12" r="1"/>
          <circle cx="15" cy="13" r="1"/>
          <path d="M5 8l7-5 7 5"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('mulch')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 18h18"/>
          <ellipse cx="8" cy="15" rx="2" ry="1"/>
          <ellipse cx="16" cy="14" rx="3" ry="1.5"/>
          <ellipse cx="12" cy="16" rx="2.5" ry="1"/>
          <path d="M6 12c2-2 4-4 6-2s4 0 6-2"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('season') || lowerTopic.includes('tidy')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 20c6-8 12-8 18 0"/>
          <path d="M8 4l4 8 4-8"/>
          <circle cx="8" cy="16" r="1"/>
          <circle cx="16" cy="16" r="1"/>
          <circle cx="12" cy="18" r="1"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('irrigation') || lowerTopic.includes('water')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2l3 7h7l-3 5-4-1-3 7-3-7-4 1-3-5h7l3-7z"/>
          <circle cx="12" cy="12" r="1"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('turf') || lowerTopic.includes('turfing')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="15" width="18" height="6" rx="1"/>
          <path d="M5 15v-3l2-2 2 2v3"/>
          <path d="M11 15v-3l2-2 2 2v3"/>
          <path d="M17 15v-3l2-2"/>
        </svg>
      );
    }
    
    // Gutter Cleaning Icons
    if (lowerTopic.includes('vacuum') || lowerTopic.includes('gutter vacuum')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8"/>
          <path d="M12 8v8"/>
          <path d="M8 12h8"/>
          <path d="M4 4l4 4"/>
          <path d="M20 4l-4 4"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('downpipe') || lowerTopic.includes('unblock')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="10" y="2" width="4" height="20" rx="2"/>
          <circle cx="12" cy="8" r="1"/>
          <circle cx="12" cy="12" r="1"/>
          <circle cx="12" cy="16" r="1"/>
          <path d="M8 6h8"/>
          <path d="M8 18h8"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('maintenance') || lowerTopic.includes('check')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('fascia') || lowerTopic.includes('wipe')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 7h18"/>
          <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/>
          <circle cx="8" cy="12" r="1"/>
          <circle cx="16" cy="12" r="1"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('guard') || lowerTopic.includes('gutter guard')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2l9 4.5v9L12 20l-9-4.5v-9L12 2z"/>
          <path d="M8 8h8"/>
          <path d="M8 12h8"/>
          <path d="M8 16h8"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('conservatory')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 9l9-7 9 7"/>
          <path d="M4 9v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9"/>
          <path d="M9 22V12h6v10"/>
          <path d="M3 9h18"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('flow') || lowerTopic.includes('test')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2v20"/>
          <path d="M8 7l4-4 4 4"/>
          <path d="M8 17l4 4 4-4"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('outbuilding') || lowerTopic.includes('shed')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 21h18"/>
          <path d="M5 21V7l7-4 7 4v14"/>
          <path d="M10 21V16h4v5"/>
          <circle cx="12" cy="9" r="1"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('emergency') || lowerTopic.includes('overflow')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 8v4"/>
          <path d="M12 16h.01"/>
          <path d="M8 8l8 8"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('joint') || lowerTopic.includes('reseal')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M8 3v18"/>
          <path d="M16 3v18"/>
          <path d="M8 9h8"/>
          <path d="M8 15h8"/>
          <circle cx="12" cy="9" r="1"/>
          <circle cx="12" cy="15" r="1"/>
        </svg>
      );
    }
    
    // Handyman Icons
    if (lowerTopic.includes('flat pack') || lowerTopic.includes('assembly')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M9 9h6v6H9z"/>
          <path d="M3 9h18"/>
          <path d="M9 3v18"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('tv') || lowerTopic.includes('mount')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('curtain') || lowerTopic.includes('rail')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 6h18"/>
          <path d="M6 6v12"/>
          <path d="M10 6v12"/>
          <path d="M14 6v12"/>
          <path d="M18 6v12"/>
          <circle cx="6" cy="6" r="1"/>
          <circle cx="10" cy="6" r="1"/>
          <circle cx="14" cy="6" r="1"/>
          <circle cx="18" cy="6" r="1"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('picture') || lowerTopic.includes('mirror') || lowerTopic.includes('hanging')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="9" cy="9" r="2"/>
          <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
          <path d="M12 2v2"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('handle') || lowerTopic.includes('door handle')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="16" cy="12" r="2"/>
          <path d="M10 12h4"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('shelf fitting') || lowerTopic.includes('fitting')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 9h18"/>
          <path d="M3 15h18"/>
          <path d="M6 9V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2"/>
          <path d="M6 15v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('blind')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M3 8h18"/>
          <path d="M3 12h18"/>
          <path d="M3 16h18"/>
          <circle cx="19" cy="10" r="1"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('leak') || lowerTopic.includes('repair leak')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('furniture')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 19V9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10"/>
          <path d="M7 19v2"/>
          <path d="M17 19v2"/>
          <path d="M3 13h18"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('crack') || lowerTopic.includes('wall crack')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M8 8l8 8"/>
          <path d="M9 7l6 10"/>
          <path d="M7 9l10 6"/>
        </svg>
      );
    }
    
    // Jet Washing Icons
    if (lowerTopic.includes('driveway')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 20h18"/>
          <path d="M5 16h14"/>
          <path d="M7 12h10"/>
          <path d="M9 8h6"/>
          <circle cx="8" cy="18" r="1"/>
          <circle cx="16" cy="18" r="1"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('patio')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="6" height="6" rx="1"/>
          <rect x="15" y="3" width="6" height="6" rx="1"/>
          <rect x="3" y="15" width="6" height="6" rx="1"/>
          <rect x="15" y="15" width="6" height="6" rx="1"/>
          <rect x="9" y="9" width="6" height="6" rx="1"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('decking cleaning')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 10h18"/>
          <path d="M3 14h18"/>
          <path d="M3 18h18"/>
          <path d="M6 6v16"/>
          <path d="M12 6v16"/>
          <path d="M18 6v16"/>
          <circle cx="12" cy="8" r="1"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('brick') || lowerTopic.includes('wall wash')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="6" width="20" height="3"/>
          <rect x="2" y="12" width="20" height="3"/>
          <rect x="2" y="18" width="20" height="3"/>
          <path d="M7 6V3"/>
          <path d="M17 6V3"/>
          <path d="M12 15V12"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('furniture cleaning') || lowerTopic.includes('garden furniture')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 16V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8"/>
          <path d="M2 16h20"/>
          <path d="M6 20v-4"/>
          <path d="M18 20v-4"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('garage floor')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 21h18"/>
          <path d="M5 17h14"/>
          <rect x="7" y="7" width="10" height="10" rx="2"/>
          <circle cx="10" cy="19" r="1"/>
          <circle cx="14" cy="19" r="1"/>
          <path d="M12 2v5"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('graffiti')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M8 8c0 3 2 5 4 5s4-2 4-5"/>
          <path d="M8 16h8"/>
          <path d="M12 8v8"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('vehicle') || lowerTopic.includes('car')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 17h2l.4-1.2A6 6 0 0 1 11 12h2a6 6 0 0 1 5.6 3.8L19 17h2"/>
          <circle cx="7" cy="17" r="2"/>
          <circle cx="17" cy="17" r="2"/>
          <path d="M5 17H3V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8h-2"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('bin') || lowerTopic.includes('waste')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <polyline points="3,6 5,6 21,6"/>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
          <line x1="10" y1="11" x2="10" y2="17"/>
          <line x1="14" y1="11" x2="14" y2="17"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('pool') || lowerTopic.includes('swimming')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 12c0 3 3 6 9 6s9-3 9-6"/>
          <path d="M3 16c0 3 3 6 9 6s9-3 9-6"/>
          <path d="M12 2v10"/>
          <path d="M8 6l4 4 4-4"/>
        </svg>
      );
    }
    
    // Painting Icons
    if (lowerTopic.includes('wall painting')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M8 8h8v8H8z"/>
          <path d="M12 3v2"/>
          <path d="M3 12h2"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('ceiling')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 3h18"/>
          <path d="M3 3v18"/>
          <path d="M21 3v18"/>
          <path d="M3 21h18"/>
          <circle cx="12" cy="12" r="3"/>
          <path d="M8 8l8 8"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('trim') || lowerTopic.includes('woodwork')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 12h18"/>
          <path d="M3 6h18"/>
          <path d="M3 18h18"/>
          <path d="M12 3v18"/>
          <circle cx="12" cy="12" r="1"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('exterior') || lowerTopic.includes('masonry')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
          <path d="M8 10h8"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('fence') || lowerTopic.includes('shed painting')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 3v18"/>
          <path d="M8 3v18"/>
          <path d="M12 3v18"/>
          <path d="M16 3v18"/>
          <path d="M20 3v18"/>
          <path d="M2 8h20"/>
          <path d="M2 16h20"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('metal') || lowerTopic.includes('gate painting')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="6" y="4" width="12" height="16" rx="2"/>
          <circle cx="12" cy="12" r="2"/>
          <path d="M18 8V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2"/>
          <path d="M6 16v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('feature') || lowerTopic.includes('design')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5 12,2"/>
          <polygon points="12,8 18,12 12,16 6,12 12,8"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('wallpaper')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M7 7h10v10H7z"/>
          <circle cx="9" cy="9" r="1"/>
          <circle cx="15" cy="9" r="1"/>
          <circle cx="9" cy="15" r="1"/>
          <circle cx="15" cy="15" r="1"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('staircase painting')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M3 21h4v-4h4v-4h4v-4h4V3"/>
          <path d="M7 17h4"/>
          <path d="M11 13h4"/>
          <path d="M15 9h4"/>
          <circle cx="9" cy="19" r="1"/>
        </svg>
      );
    }
    
    if (lowerTopic.includes('garage door')) {
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="6" width="18" height="14" rx="2"/>
          <path d="M3 10h18"/>
          <path d="M3 14h18"/>
          <path d="M3 18h18"/>
          <circle cx="12" cy="3" r="1"/>
        </svg>
      );
    }
    
    // Default fallback icon
    return (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    );
  };

  return getIconByTopic(topic);
}
