function Icon({ children, className = 'size-5', ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={className}
            {...props}
        >
            {children}
        </svg>
    );
}

export const MailIcon = (props) => (
    <Icon {...props}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
    </Icon>
);

export const LockIcon = (props) => (
    <Icon {...props}>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </Icon>
);

export const EyeIcon = (props) => (
    <Icon {...props}>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
    </Icon>
);

export const EyeOffIcon = (props) => (
    <Icon {...props}>
        <path d="M10.6 5.1A10.4 10.4 0 0 1 12 5c6.5 0 10 7 10 7a17.6 17.6 0 0 1-2.6 3.5M6.6 6.6C3.7 8.4 2 12 2 12s3.5 7 10 7a9.7 9.7 0 0 0 5.4-1.6" />
        <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
        <path d="m3 3 18 18" />
    </Icon>
);

export const XCircleIcon = (props) => (
    <Icon {...props}>
        <circle cx="12" cy="12" r="9" />
        <path d="m15 9-6 6M9 9l6 6" />
    </Icon>
);

export const ArrowRightIcon = (props) => (
    <Icon {...props}>
        <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
);

export const ArrowLeftIcon = (props) => (
    <Icon {...props}>
        <path d="M19 12H5M11 18l-6-6 6-6" />
    </Icon>
);

export const CheckIcon = (props) => (
    <Icon {...props}>
        <path d="m5 12 5 5 9-10" />
    </Icon>
);

export const InfoIcon = (props) => (
    <Icon {...props}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5M12 8h.01" />
    </Icon>
);

export const LandmarkIcon = (props) => (
    <Icon {...props}>
        <path d="M3 21h18M4 10h16M12 3l8 4.5H4L12 3Z" />
        <path d="M6 10v8M10 10v8M14 10v8M18 10v8" />
    </Icon>
);

export const FileTextIcon = (props) => (
    <Icon {...props}>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
        <path d="M14 3v5h5M9 13h6M9 17h6" />
    </Icon>
);

export const UsersIcon = (props) => (
    <Icon {...props}>
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
        <path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14a6.5 6.5 0 0 1 3.5 6" />
    </Icon>
);

export const BuildingIcon = (props) => (
    <Icon {...props}>
        <path d="M3 21h18M5 21V7l7-4v18M19 21V10l-7-3" />
        <path d="M8 9v.01M8 12v.01M8 15v.01M8 18v.01M15 12v.01M15 15v.01M15 18v.01" />
    </Icon>
);

export const ListIcon = (props) => (
    <Icon {...props}>
        <path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01" />
    </Icon>
);

export const CalendarIcon = (props) => (
    <Icon {...props}>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4" />
    </Icon>
);

export const HomeIcon = (props) => (
    <Icon {...props}>
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9v11a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9" />
    </Icon>
);

export const BoltIcon = (props) => (
    <Icon {...props}>
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </Icon>
);

export const UserIcon = (props) => (
    <Icon {...props}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
    </Icon>
);

export const ShieldIcon = (props) => (
    <Icon {...props}>
        <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
        <path d="m9 12 2 2 4-4" />
    </Icon>
);

export const SettingsIcon = (props) => (
    <Icon {...props}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
    </Icon>
);

export const BellIcon = (props) => (
    <Icon {...props}>
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.9 1.9 0 0 0 3.4 0" />
    </Icon>
);

export const SearchIcon = (props) => (
    <Icon {...props}>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
    </Icon>
);

export const ChevronDownIcon = (props) => (
    <Icon {...props}>
        <path d="m6 9 6 6 6-6" />
    </Icon>
);

export const ChevronRightIcon = (props) => (
    <Icon {...props}>
        <path d="m9 6 6 6-6 6" />
    </Icon>
);

export const ChevronLeftIcon = (props) => (
    <Icon {...props}>
        <path d="m15 6-6 6 6 6" />
    </Icon>
);

export const PlusIcon = (props) => (
    <Icon {...props}>
        <path d="M12 5v14M5 12h14" />
    </Icon>
);

export const FilterIcon = (props) => (
    <Icon {...props}>
        <path d="M3 5h18l-7 8.5V19l-4 2v-7.5L3 5Z" />
    </Icon>
);

export const LogOutIcon = (props) => (
    <Icon {...props}>
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" />
    </Icon>
);

export const BarChartIcon = (props) => (
    <Icon {...props}>
        <path d="M6 20v-6M11 20V9M16 20v-9M21 20V4" />
    </Icon>
);
