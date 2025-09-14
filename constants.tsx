
import React from 'react';

export const SAMPLE_SONGS = `Steely Dan - Deacon Blues
Fleetwood Mac - Dreams
Tame Impala - The Less I Know The Better
Daft Punk - Get Lucky
Phoenix - 1901
The Strokes - Someday
Vampire Weekend - A-Punk
Glass Animals - Heat Waves
Billie Eilish - bad guy
Lorde - Green Light
Frank Ocean - Thinkin Bout You
Kendrick Lamar - HUMBLE.
Childish Gambino - Redbone
Anderson .Paak - Come Down
Thundercat - Them Changes
Khruangbin - White Gloves
Men I Trust - Show Me How
Mac DeMarco - Chamber of Reflection
Bon Iver - Holocene
The War On Drugs - Red Eyes`;

export const SpotifyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
    <path d="M7 11.5c2.5-1 5.5-1.5 9-1" />
    <path d="M7.5 14.5c2-0.5 4.5-1 7.5-0.5" />
    <path d="M7 17c1.5-0.5 3.5-0.5 6 0" />
  </svg>
);

export const MusicIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

export const WandIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 4V2" />
    <path d="M15 10V8" />
    <path d="M12.5 6.5h-5" />
    <path d="M17.5 6.5h-5" />
    <path d="m3 21 9-9" />
    <path d="M15 22v-3.5a2.5 2.5 0 0 0-5 0V22" />
  </svg>
);

export const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2.016c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zM12 18.016c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z" />
      <path d="M12 14.016c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z" />
    </svg>
);
