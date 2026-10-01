import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps): IconProps {
  return {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    focusable: false,
    ...props,
  };
}

export const PaletteIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3a9 9 0 1 0 0 18c1.4 0 2-.9 2-1.8 0-1.2-1-1.6-1-2.7 0-1 .8-1.5 1.8-1.5H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3Z" />
    <circle cx="7.5" cy="11" r="1" fill="currentColor" />
    <circle cx="10" cy="7" r="1" fill="currentColor" />
    <circle cx="15" cy="7.5" r="1" fill="currentColor" />
  </svg>
);

export const FruitIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 8c-3.5-2-8 0-7 6 .8 4.6 4 7 7 7s6.2-2.4 7-7c1-6-3.5-8-7-6Z" />
    <path d="M12 8c0-2 1-3.5 3-4" />
  </svg>
);

export const StarIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" />
  </svg>
);

export const TiersIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M9 7h6M7 12h10M5 17h14" />
    <path d="M11 7V4m2 3V4M8 12V7m8 5V7M6 17v-5m12 5v-5" />
    <path d="M4 21h16" />
  </svg>
);

export const HeartIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 20s-7-4.4-9-9.2C1.8 7.6 3.600 4.500 6.800 4.500c2 0 3.500 1.100 5.200 3 1.700-1.900 3.200-3 5.200-3 3.200 0 5 3.100 3.800 6.300C19 15.600 12 20 12 20Z" />
  </svg>
);

export const SparkleIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.500 2.500M15.500 15.500 18 18M18 6l-2.500 2.500M8.500 15.500 6 18" />
  </svg>
);

export const ChatIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 5h16v11H9l-5 4V5Z" />
    <path d="M8 10h8M8 13h5" />
  </svg>
);

export const PhoneIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const MailIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.500 7 8.500 6 8.500-6" />
  </svg>
);

export const ClockIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const PinIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.500" />
  </svg>
);

export const WhatsAppIcon = (p: IconProps) => (
  <svg {...base({ fill: "currentColor", stroke: "none", ...p })}>
    <path d="M12.040 2a9.900 9.900 0 0 0-8.500 14.900L2 22l5.250-1.380A9.900 9.900 0 1 0 12.040 2Zm0 1.800a8.100 8.100 0 0 1 0 16.200 8 8 0 0 1-4.150-1.150l-.3-.18-3.100.82.83-3.020-.2-.31A8.100 8.100 0 0 1 12.040 3.800Zm-3.100 3.900c-.2 0-.5.070-.76.370-.26.300-1 .98-1 2.400 0 1.400 1.030 2.780 1.170 2.970.15.200 2 3.200 4.950 4.360 2.450.97 2.950.78 3.480.73.530-.05 1.700-.7 1.940-1.370.24-.68.240-1.260.17-1.380-.07-.12-.26-.2-.55-.34-.3-.15-1.700-.84-1.970-.94-.26-.1-.46-.15-.65.15-.2.300-.75.940-.92 1.130-.17.200-.34.220-.63.080-.3-.15-1.230-.45-2.340-1.440-.87-.77-1.450-1.720-1.620-2.010-.17-.3-.02-.45.130-.6.130-.13.300-.35.440-.52.150-.17.200-.3.300-.5.100-.2.050-.37-.02-.52-.08-.15-.65-1.600-.9-2.180-.23-.56-.47-.48-.65-.49h-.55Z" />
  </svg>
);

export const InstagramIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.200" cy="6.800" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const FacebookIcon = (p: IconProps) => (
  <svg {...base({ fill: "currentColor", stroke: "none", ...p })}>
    <path d="M13.500 21v-7.500h2.600l.4-3h-3V8.600c0-.9.300-1.500 1.500-1.500h1.600V4.400A21 21 0 0 0 14.300 4c-2.300 0-3.800 1.400-3.800 3.900v2.600H8v3h2.500V21h3Z" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const ArrowIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14m-6-6 6 6-6 6" />
  </svg>
);

export const CakeLogo = (p: IconProps) => (
  <svg {...base({ strokeWidth: 1.6, ...p })}>
    <path d="M12 3c.9 1 1.400 1.800 1.400 2.600a1.400 1.400 0 0 1-2.800 0C10.600 4.800 11.100 4 12 3Z" fill="currentColor" stroke="none" />
    <path d="M6 12h12a2 2 0 0 1 2 2v1H4v-1a2 2 0 0 1 2-2Z" />
    <path d="M4 15v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4" />
    <path d="M8 12V9.500M12 12V9m4 3V9.500" />
  </svg>
);
