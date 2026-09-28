import { Link } from '@inertiajs/react';
import AppLayout from '../Layouts/AppLayout';
import {
    BoltIcon,
    CalendarIcon,
    ChevronRightIcon,
    ShieldIcon,
    UserIcon,
    UsersIcon,
} from '@/Components/UI/Icons';

// Tailwind needs full class names, so each tone spells out its own classes.
const tones = {
    gold: {
        border: 'border-l-gold-600',
        number: 'text-gold-600',
        arrow: 'bg-gold-50 text-gold-600',
        tile: 'bg-gold-50 text-gold-600',
        badge: 'bg-gold-600',
    },
    red: {
        border: 'border-l-red-600',
        number: 'text-red-600',
        arrow: 'bg-red-50 text-red-600',
        badge: 'bg-red-600',
    },
    forest: {
        border: 'border-l-forest-800',
        number: 'text-forest-800',
        arrow: 'bg-forest-50 text-forest-800',
        tile: 'bg-forest-50 text-forest-800',
    },
    blue: {
        tile: 'bg-blue-50 text-blue-700',
    },
};

// TODO: replace the placeholder counts with data from the backend.
const alerts = [
    {
        count: 1,
        title: 'Formations To Review',
        text: 'LondonLaw App orders',
        tone: tones.gold,
        href: '/london-law/jobs',
    },
    {
        count: 2,
        title: 'Renewals Due',
        text: '1 overdue · LondonLaw App',
        tone: tones.red,
        href: '/london-law/renewals',
    },
    {
        count: 3,
        title: 'KYC Documents Expiring',
        text: 'Shared profiles across both apps',
        tone: tones.forest,
        href: '/london-law/officers',
    },
];

const dailyWork = [
    {
        icon: BoltIcon,
        title: 'Jobs',
        text: 'LondonLaw App formations and service orders',
        tone: tones.gold,
        badge: { count: 5, tone: tones.gold },
        href: '/london-law/jobs',
    },
    {
        icon: CalendarIcon,
        title: 'Renewals',
        text: 'Due list with automatic renewal emails 30 days ahead',
        tone: tones.forest,
        badge: { count: 2, tone: tones.red },
        href: '/london-law/renewals',
    },
    {
        icon: UsersIcon,
        title: 'Clients',
        text: 'Client records and their jobs — in design, coming in the next revision',
        tone: tones.forest,
        soon: true,
    },
];

const compliance = [
    {
        icon: UserIcon,
        title: 'Officers & KYC',
        text: 'One profile per officer. Shared by LLA and ACS — documents with expiry dates',
        tone: tones.forest,
        badge: { count: 3, tone: tones.red },
        href: '/london-law/officers',
    },
    {
        icon: ShieldIcon,
        title: 'AML Checks',
        text: 'Human sign off queue — every check kept on the officer’s profile',
        tone: tones.blue,
        href: '/london-law/aml',
    },
];

function ArrowCircle({ className }) {
    return (
        <span
            className={`flex size-9 shrink-0 items-center justify-center rounded-full transition ${className}`}
        >
            <ChevronRightIcon className="size-4.5" />
        </span>
    );
}

function AlertCard({ count, title, text, tone, href }) {
    return (
        <Link
            href={href}
            className={`group flex items-center gap-5 rounded-xl border border-l-4 border-gray-200 bg-white px-6 py-5 shadow-sm transition hover:shadow-md ${tone.border}`}
        >
            <span className={`w-8 font-serif text-4xl font-semibold ${tone.number}`}>{count}</span>
            <div className="min-w-0 flex-1">
                <p className="font-serif text-[0.95rem] font-semibold text-gray-900">{title}</p>
                <p className="mt-0.5 text-sm text-gray-600">{text}</p>
            </div>
            <ArrowCircle className={tone.arrow} />
        </Link>
    );
}

function FeatureCard({ icon: Icon, title, text, tone, badge, soon, href }) {
    const Wrapper = href ? Link : 'div';

    return (
        <Wrapper
            {...(href && { href })}
            className="group relative flex items-center gap-5 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
        >
            <span
                className={`flex size-15 shrink-0 items-center justify-center self-start rounded-xl ${tone.tile}`}
            >
                <Icon className="size-7" />
            </span>

            <div className="min-w-0 flex-1 self-start">
                <p className="font-serif font-semibold text-gray-900">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">{text}</p>
            </div>

            <ArrowCircle className="bg-gray-100 text-gray-800 group-hover:bg-gray-200" />

            {badge && (
                <span
                    className={`absolute top-3 right-4 flex size-6 items-center justify-center rounded-full text-xs font-semibold text-white ${badge.tone.badge}`}
                >
                    {badge.count}
                </span>
            )}
            {soon && (
                <span className="absolute top-3 right-4 rounded-full border border-gold-400 bg-gold-50 px-2.5 py-0.5 text-xs font-medium text-gold-700">
                    Soon
                </span>
            )}
        </Wrapper>
    );
}

function SectionHeading({ children }) {
    return (
        <div className="mt-8 mb-4 flex items-center gap-6">
            <h2 className="shrink-0 font-serif text-2xl font-semibold text-forest-900">
                {children}
            </h2>
            <span className="h-px flex-1 bg-gray-200" />
        </div>
    );
}

export default function Dashboard() {
    return (
        <AppLayout title="Overview">
            <div className="grid gap-5 md:grid-cols-3">
                {alerts.map((alert) => (
                    <AlertCard key={alert.title} {...alert} />
                ))}
            </div>

            <SectionHeading>Daily Work</SectionHeading>
            <div className="grid gap-5 md:grid-cols-3">
                {dailyWork.map((card) => (
                    <FeatureCard key={card.title} {...card} />
                ))}
            </div>

            <SectionHeading>Officers, KYC &amp; AML</SectionHeading>
            <div className="grid gap-5 md:grid-cols-3">
                {compliance.map((card) => (
                    <FeatureCard key={card.title} {...card} />
                ))}
            </div>
        </AppLayout>
    );
}
