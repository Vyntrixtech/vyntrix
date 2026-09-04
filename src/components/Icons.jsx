// Line icon set — 24x24, stroke-based, matches the Aurora design system.
// Each icon accepts standard SVG props (size defaults to 19, color to currentColor).

const base = {
  fill: "none",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function Svg({ size = 19, color = "#8bffc0", children, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...base} stroke={color} {...rest}>
      {children}
    </svg>
  );
}

export function WebsiteIcon(props) {
  return (
    <Svg {...props}>
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 21v-3" />
      <path d="m7 9 2 2-2 2" />
      <path d="M12 13h4" />
    </Svg>
  );
}

export function AppIcon(props) {
  return (
    <Svg {...props}>
      <rect x="6" y="2" width="12" height="20" rx="3" />
      <path d="M11 19h2" />
    </Svg>
  );
}

export function BrandIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="13.5" cy="6.5" r="2.5" />
      <circle cx="19" cy="13" r="2.5" />
      <circle cx="6" cy="12" r="3" />
      <path d="M12 22a9 9 0 0 1 0-18" />
    </Svg>
  );
}

export function DesignIcon(props) {
  return (
    <Svg {...props}>
      <path d="M3 7h18M3 12h9M3 17h13" />
      <circle cx="18" cy="15" r="3" />
    </Svg>
  );
}

export function EcommerceIcon(props) {
  return (
    <Svg {...props}>
      <path d="M3 5h2l2.2 10.4A2 2 0 0 0 9.2 17H18" />
      <circle cx="10" cy="20" r="1.4" />
      <circle cx="17" cy="20" r="1.4" />
      <path d="M7 8h13l-1.6 6.2H8.3" />
    </Svg>
  );
}

export function ITIcon(props) {
  return (
    <Svg {...props}>
      <path d="M17.5 19a4.5 4.5 0 0 0 .5-8.96A6 6 0 0 0 6.2 9.2 4 4 0 0 0 7 19z" />
    </Svg>
  );
}

export function MaintenanceIcon(props) {
  return (
    <Svg {...props}>
      <path d="M20.5 7.3 12 12 3.5 7.3" />
      <path d="M12 12v9" />
      <path d="m12 3 8.5 4.3v9.4L12 21l-8.5-4.3V7.3z" />
    </Svg>
  );
}

export function ArrowRightIcon(props) {
  return (
    <Svg {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </Svg>
  );
}

export function ChevronDownIcon(props) {
  return (
    <Svg {...props}>
      <path d="m6 9 6 6 6-6" />
    </Svg>
  );
}

export function CheckIcon(props) {
  return (
    <Svg strokeWidth={2.6} {...props}>
      <path d="m5 13 4 4L19 7" />
    </Svg>
  );
}

export function TargetIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
    </Svg>
  );
}

export function CompassIcon(props) {
  return (
    <Svg {...props}>
      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </Svg>
  );
}

export function GrowthIcon(props) {
  return (
    <Svg {...props}>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="m8 15 4-5 3 3 4-6" />
    </Svg>
  );
}

export function LockIcon(props) {
  return (
    <Svg {...props}>
      <path d="M8 6 3 12l5 6" />
      <path d="m16 6 5 6-5 6" />
    </Svg>
  );
}

export function PinIcon(props) {
  return (
    <Svg {...props}>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </Svg>
  );
}

export function BadgeIcon(props) {
  return (
    <Svg {...props}>
      <path d="M20.5 7.3 12 12 3.5 7.3" />
      <path d="M12 12v9" />
      <path d="m12 3 8.5 4.3v9.4L12 21l-8.5-4.3V7.3z" />
    </Svg>
  );
}

export function MailIcon(props) {
  return (
    <Svg {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Svg>
  );
}

export function PhoneIcon(props) {
  return (
    <Svg {...props}>
      <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a16 16 0 0 1-16-16z" />
    </Svg>
  );
}

export function ClockIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </Svg>
  );
}

export function ShieldCheckIcon(props) {
  return (
    <Svg {...props}>
      <path d="M12 3l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  );
}

export function BackupIcon(props) {
  return (
    <Svg {...props}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </Svg>
  );
}

export function SupportIcon(props) {
  return (
    <Svg {...props}>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <rect x="2.5" y="13" width="4" height="7" rx="1.6" />
      <rect x="17.5" y="13" width="4" height="7" rx="1.6" />
      <path d="M20 20v1a2 2 0 0 1-2 2h-3" />
    </Svg>
  );
}

export function EditIcon(props) {
  return (
    <Svg {...props}>
      <path d="M14.5 4.5l5 5L10 19H5v-5z" />
      <path d="m12.5 6.5 5 5" />
    </Svg>
  );
}

export function GaugeIcon(props) {
  return (
    <Svg {...props}>
      <path d="M12 20a8 8 0 1 0-8-8" />
      <path d="m12 12 5-4" />
      <path d="M20 20a8 8 0 0 0-1.5-9" />
    </Svg>
  );
}

export function ServerIcon(props) {
  return (
    <Svg {...props}>
      <rect x="3" y="4" width="18" height="7" rx="2" />
      <rect x="3" y="13" width="18" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </Svg>
  );
}

export function DomainIcon(props) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 3 2.5 15 0 18-2.5-3-2.5-15 0-18z" />
    </Svg>
  );
}

export function WrenchIcon(props) {
  return (
    <Svg {...props}>
      <path d="M14.7 6.3a4 4 0 1 1 3 3L12 15l-3 3-3-3 3-3z" />
      <path d="m5 19 2-2" />
    </Svg>
  );
}

export function QuoteIcon(props) {
  return (
    <Svg strokeWidth={1.6} {...props}>
      <path d="M9 7H6a3 3 0 0 0 0 6h1v4H5" />
      <path d="M19 7h-3a3 3 0 0 0 0 6h1v4h-2" />
    </Svg>
  );
}

export function GridIcon(props) {
  return (
    <Svg {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </Svg>
  );
}

export function BoltIcon(props) {
  return (
    <Svg {...props}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
    </Svg>
  );
}
