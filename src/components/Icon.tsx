import type { ReactElement } from "react";

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
};

export type IconName =
  | "home"
  | "route"
  | "network"
  | "team"
  | "profile"
  | "search"
  | "star"
  | "chevron"
  | "close"
  | "phone"
  | "sound"
  | "sparkle"
  | "clock"
  | "calendar"
  | "report"
  | "heart"
  | "shield"
  | "brain"
  | "puzzle"
  | "speech"
  | "check"
  | "leaf"
  | "sun"
  | "bell"
  | "sliders";

const paths: Record<IconName, ReactElement> = {
  home: (
    <>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9h12v-9" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18" r="2.4" />
      <circle cx="18" cy="6" r="2.4" />
      <path d="M8.4 18H14a3.5 3.5 0 0 0 0-7H9.5a3.5 3.5 0 0 1 0-7h6" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="6" r="2.4" />
      <circle cx="5.5" cy="18" r="2.4" />
      <circle cx="18.5" cy="18" r="2.4" />
      <path d="M12 8.4v3.6M12 12l-5 4.2M12 12l5 4.2" />
    </>
  ),
  team: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 6.2a3 3 0 0 1 0 5.6" />
      <path d="M17 13.6a5.5 5.5 0 0 1 3.5 5.1" />
    </>
  ),
  profile: (
    <>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 19.5a7 7 0 0 1 14 0" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-3.6-3.6" />
    </>
  ),
  star: (
    <path
      d="M12 3.5 14.3 8.6 20 9.3l-4.2 3.9 1.1 5.6L12 16.2 7.1 18.8l1.1-5.6L4 9.3l5.7-.7z"
      fill="currentColor"
      stroke="none"
    />
  ),
  chevron: <path d="m9 6 6 6-6 6" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  phone: (
    <path d="M6.5 4h3l1.4 3.6-2 1.4a11 11 0 0 0 5.6 5.6l1.4-2 3.6 1.4v3a2 2 0 0 1-2.2 2A15 15 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" />
  ),
  sound: (
    <>
      <path d="M4 9.5h3l4-3.5v12l-4-3.5H4z" />
      <path d="M15 8.5a4 4 0 0 1 0 7" />
      <path d="M17.5 6a7 7 0 0 1 0 12" />
    </>
  ),
  sparkle: (
    <path d="M12 3.5 13.4 9 19 10.5 13.4 12 12 17.5 10.6 12 5 10.5 10.6 9z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5.5" width="16" height="14" rx="3" />
      <path d="M4 9.5h16M8.5 3.5v3.5M15.5 3.5v3.5" />
    </>
  ),
  report: (
    <>
      <path d="M7 3.5h7l4 4V19a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 19V5A1.5 1.5 0 0 1 7 3.5Z" />
      <path d="M13.5 3.5V8H18M8.5 13h7M8.5 16.5h5" />
    </>
  ),
  heart: (
    <path d="M12 19.5S4.5 14.8 4.5 9.6A3.6 3.6 0 0 1 12 7.4a3.6 3.6 0 0 1 7.5 2.2c0 5.2-7.5 9.9-7.5 9.9Z" />
  ),
  shield: (
    <>
      <path d="M12 3.5 19 6v5.5c0 4.5-3 7.3-7 8.9-4-1.6-7-4.4-7-8.9V6z" />
      <path d="m9 11.8 2 2 4-4.2" />
    </>
  ),
  brain: (
    <>
      <path d="M9.5 4.5A2.5 2.5 0 0 0 7 7a2.5 2.5 0 0 0-1 4.8V15a2.5 2.5 0 0 0 3.5 2.3" />
      <path d="M14.5 4.5A2.5 2.5 0 0 1 17 7a2.5 2.5 0 0 1 1 4.8V15a2.5 2.5 0 0 1-3.5 2.3" />
      <path d="M9.5 4.5A2 2 0 0 1 12 4a2 2 0 0 1 2.5.5M9.5 17.3A2 2 0 0 0 12 18a2 2 0 0 0 2.5-.7M12 4v14" />
    </>
  ),
  puzzle: (
    <path d="M9 4.5h2a1 1 0 0 1 1 1 1.3 1.3 0 0 0 2.6 0 1 1 0 0 1 1-1H19a.5.5 0 0 1 .5.5v3a1 1 0 0 1-1 1 1.3 1.3 0 0 0 0 2.6 1 1 0 0 1 1 1v3a.5.5 0 0 1-.5.5h-3a1 1 0 0 1-1-1 1.3 1.3 0 0 0-2.6 0 1 1 0 0 1-1 1H5a.5.5 0 0 1-.5-.5V15a1 1 0 0 1 1-1 1.3 1.3 0 0 0 0-2.6 1 1 0 0 1-1-1V5a.5.5 0 0 1 .5-.5Z" />
  ),
  speech: (
    <path d="M4.5 6A1.5 1.5 0 0 1 6 4.5h12A1.5 1.5 0 0 1 19.5 6v8A1.5 1.5 0 0 1 18 15.5H9l-4 4V15.5H6A1.5 1.5 0 0 1 4.5 14z" />
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  leaf: (
    <>
      <path d="M19 5c-9 0-13 4-13 9a4 4 0 0 0 4 4c5 0 9-4 9-13Z" />
      <path d="M7 17c4-4 6-6 9-9" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" />
    </>
  ),
  bell: (
    <>
      <path d="M6.5 10a5.5 5.5 0 0 1 11 0c0 4 1.5 5.5 1.5 5.5H5s1.5-1.5 1.5-5.5Z" />
      <path d="M10 18.5a2 2 0 0 0 4 0" />
    </>
  ),
  sliders: (
    <>
      <path d="M4 8h10M18 8h2M4 16h2M10 16h10" />
      <circle cx="16" cy="8" r="2" />
      <circle cx="8" cy="16" r="2" />
    </>
  ),
};

export default function Icon({
  name,
  size = 22,
  className,
  strokeWidth = 1.8,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
