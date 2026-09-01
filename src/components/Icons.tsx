import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

export function HomeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" />
      <path d="M9.5 21v-6h5v6" />
    </svg>
  );
}

export function JourneyIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="6" cy="5" r="2.2" />
      <circle cx="6" cy="19" r="2.2" />
      <path d="M6 7.2v9.6" />
      <path d="M12 5h5a3 3 0 0 1 0 6h-6a3 3 0 0 0 0 6h5" />
    </svg>
  );
}

export function NetworkIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.2-3.2" />
    </svg>
  );
}

export function TeamIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.5a3.2 3.2 0 0 1 0 6.2" />
      <path d="M17 14.5a5.5 5.5 0 0 1 3.5 5.5" />
    </svg>
  );
}

export function ProfileIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  );
}

export function LifeBuoyIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.6" />
      <path d="m5.6 5.6 3.9 3.9M14.5 14.5l3.9 3.9M18.4 5.6l-3.9 3.9M9.5 14.5l-3.9 3.9" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <path d="M12 3.2l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.6 9.3l5.8-.8z" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function FileTextIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12 2.4 2.4 4.6-4.8" />
    </svg>
  );
}

export function StethoscopeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 3v5a4 4 0 0 0 8 0V3" />
      <path d="M5 3H3.5M13 3h1.5" />
      <path d="M9 16v1a4 4 0 0 0 8 0v-2" />
      <circle cx="18" cy="12.5" r="2.2" />
    </svg>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6z" />
      <path d="M18 15l.7 1.8L20.5 17l-1.8.7L18 19.5l-.7-1.8L15.5 17l1.8-.7z" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 20s-7-4.3-7-9.3A3.7 3.7 0 0 1 12 8.4 3.7 3.7 0 0 1 19 10.7c0 5-7 9.3-7 9.3Z" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6.5 3h3l1.5 4-2 1.4a12 12 0 0 0 5.1 5.1L15.6 11l4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z" />
    </svg>
  );
}

export function MusicIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9 18V6l10-2v12" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="16.5" cy="16" r="2.5" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="5" width="16" height="16" rx="2.5" />
      <path d="M4 9.5h16M8 3v4M16 3v4" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3 5 6v5.5c0 4.3 3 7.4 7 9 4-1.6 7-4.7 7-9V6z" />
      <path d="m9 12 2 2 4-4.2" />
    </svg>
  );
}

export function SlidersIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 6h9M18 6h1M5 12h1M10 12h9M5 18h6M15 18h4" />
      <circle cx="16" cy="6" r="2" />
      <circle cx="8" cy="12" r="2" />
      <circle cx="13" cy="18" r="2" />
    </svg>
  );
}

export function BrainIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9.5 4.5A2.5 2.5 0 0 0 7 7a2.5 2.5 0 0 0-1 4.8V15a3 3 0 0 0 3.5 3" />
      <path d="M14.5 4.5A2.5 2.5 0 0 1 17 7a2.5 2.5 0 0 1 1 4.8V15a3 3 0 0 1-3.5 3" />
      <path d="M12 4v14" />
    </svg>
  );
}
