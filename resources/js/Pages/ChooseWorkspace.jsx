import { Head, Link } from '@inertiajs/react';
import {
    ArrowRightIcon,
    BuildingIcon,
    CalendarIcon,
    FileTextIcon,
    ListIcon,
} from '@/Components/UI/Icons';

// Tailwind needs full class names, so each workspace spells out its own palette.
const themes = {
    forest: {
        topBorder: 'border-t-forest-800',
        tile: 'bg-forest-50 text-forest-800',
        eyebrow: 'text-forest-700',
        arrow: 'bg-forest-50 text-forest-800 group-hover:bg-forest-100',
        button: 'bg-forest-800 hover:bg-forest-900',
    },
    gold: {
        topBorder: 'border-t-gold-600',
        tile: 'bg-gold-50 text-gold-600',
        eyebrow: 'text-gold-600',
        arrow: 'bg-gold-50 text-gold-600 group-hover:bg-gold-100',
        button: 'bg-gold-600 hover:bg-gold-700',
    },
};

const workspaces = [
    {
        href: '/london-law',
        eyebrow: 'London Law',
        name: 'LondonLaw App',
        description: 'Manage online formations, legal service orders, invoices and renewals.',
        theme: themes.forest,
        features: [
            { icon: FileTextIcon, label: 'Company Formations' },
            { icon: ListIcon, label: 'Service Orders' },
            { icon: FileTextIcon, label: 'Invoices' },
            { icon: CalendarIcon, label: 'Renewals' },
        ],
    },
    {
        href: '/appleton',
        eyebrow: 'ACS Companies',
        name: 'Appleton App',
        description: 'Manage Appleton companies, their service orders, invoices and renewals.',
        theme: themes.gold,
        features: [
            { icon: BuildingIcon, label: 'Company Management' },
            { icon: ListIcon, label: 'Service Orders' },
            { icon: FileTextIcon, label: 'Invoices' },
            { icon: CalendarIcon, label: 'Renewals' },
        ],
    },
];

function WorkspaceCard({ href, eyebrow, name, description, theme, features }) {
    return (
        <article
            className={`flex flex-col rounded-xl border border-t-4 border-gray-200 bg-white p-6 shadow-sm ${theme.topBorder}`}
        >
            <Link href={href} className="group flex items-start gap-5">
                <span
                    className={`flex size-18 shrink-0 items-center justify-center rounded-2xl ${theme.tile}`}
                >
                    <BuildingIcon className="size-9" />
                </span>

                <div className="min-w-0 flex-1 pt-1">
                    <p
                        className={`text-xs font-semibold tracking-wider uppercase ${theme.eyebrow}`}
                    >
                        {eyebrow}
                    </p>
                    <h2 className="mt-1.5 font-serif text-2xl font-semibold text-gray-900">
                        {name}
                    </h2>
                </div>

                <span
                    className={`flex size-11 shrink-0 items-center justify-center rounded-full transition ${theme.arrow}`}
                >
                    <ArrowRightIcon className="size-5" />
                </span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-600 sm:ml-23">
                {description}
            </p>

            <ul className="mt-5 grid grid-cols-2 gap-y-4 border-t border-gray-200 pt-4 sm:grid-cols-4 sm:divide-x sm:divide-gray-200">
                {features.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex flex-col items-center gap-2 px-2 text-center">
                        <span
                            className={`flex size-10 items-center justify-center rounded-lg ${theme.tile}`}
                        >
                            <Icon className="size-5" />
                        </span>
                        <span className="text-xs leading-tight text-gray-700">{label}</span>
                    </li>
                ))}
            </ul>

            <Link
                href={href}
                className={`mt-6 flex h-11 items-center justify-center gap-2 rounded-lg text-sm font-semibold text-white transition ${theme.button}`}
            >
                Open {name}
                <ArrowRightIcon className="size-4" />
            </Link>
        </article>
    );
}

export default function ChooseWorkspace() {
    return (
        <>
            <Head title="Choose your workspace" />

            <main className="min-h-screen bg-canvas px-4 py-10 sm:px-8 lg:px-14">
                <div className="mx-auto max-w-6xl">
                    <header>
                        <span className="block h-0.5 w-9 bg-gold-400" />
                        <p className="mt-3 font-serif text-3xl font-bold tracking-wide text-forest-900">
                            ALLIS
                        </p>
                        <p className="mt-1 text-[0.65rem] leading-relaxed font-medium tracking-[0.3em] text-gray-600 uppercase">
                            Appleton &amp; London Law
                            <br />
                            Information System
                        </p>
                    </header>

                    <section className="mt-10">
                        <p className="text-xs font-semibold tracking-[0.2em] text-forest-700 uppercase">
                            Welcome
                        </p>
                        <h1 className="mt-2 font-serif text-4xl font-bold text-gray-900 sm:text-5xl">
                            Choose your workspace
                        </h1>
                        <p className="mt-3 text-base text-gray-600">
                            Open the app you want to work in. You can switch apps at any time.
                        </p>
                    </section>

                    <div className="mt-8 grid gap-6 lg:grid-cols-2">
                        {workspaces.map((workspace) => (
                            <WorkspaceCard key={workspace.name} {...workspace} />
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}
