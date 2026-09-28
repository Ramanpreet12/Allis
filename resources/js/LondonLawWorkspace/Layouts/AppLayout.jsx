import { Head, Link, router, usePage } from '@inertiajs/react';
import {
    BellIcon,
    CalendarIcon,
    ChevronDownIcon,
    FileTextIcon,
    HomeIcon,
    LogOutIcon,
    SearchIcon,
    SettingsIcon,
    UserIcon,
    UsersIcon,
} from '@/Components/UI/Icons';

const mainNav = [
    { href: '/london-law', label: 'Overview', icon: HomeIcon },
    { href: '/london-law/jobs', label: 'Jobs', icon: FileTextIcon },
    { href: '/london-law/renewals', label: 'Renewals', icon: CalendarIcon },
    { href: '/london-law/officers', label: 'Officers & KYC', icon: UsersIcon },
];

const footerNav = [
    { href: '/london-law/settings', label: 'Settings', icon: SettingsIcon },
    { href: '/london-law/account', label: 'Account', icon: UserIcon },
];

const workspaces = [
    { href: '/london-law', label: 'LondonLaw App' },
    { href: '/appleton', label: 'Appleton App' },
];

function NavItem({ href, label, icon: Icon, active }) {
    return (
        <Link
            href={href}
            className={`flex items-center gap-3.5 rounded-lg px-4 py-3 text-[0.95rem] transition ${
                active
                    ? 'bg-forest-50 font-medium text-forest-900'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
            }`}
        >
            <Icon className="size-5" />
            {label}
        </Link>
    );
}

function Header() {
    return (
        <header className="sticky top-0 z-10 flex h-19 items-center gap-6 border-b border-gray-200 bg-white px-6 lg:px-9">
            <Link href="/workspaces" className="flex shrink-0 items-center gap-5">
                <span className="font-serif text-3xl font-bold tracking-wide text-forest-900">
                    ALLIS
                </span>
                <span className="hidden h-9 w-px bg-gray-200 sm:block" />
                <span className="hidden text-[0.62rem] leading-snug font-medium tracking-[0.2em] text-gray-600 uppercase sm:block">
                    Appleton &amp; London Law
                    <br />
                    Information System
                </span>
            </Link>

            <label className="ml-6 hidden h-10 max-w-sm flex-1 items-center gap-3 rounded-lg border border-gray-300 px-3.5 focus-within:border-forest-600 focus-within:ring-3 focus-within:ring-forest-600/15 md:flex">
                <SearchIcon className="size-4.5 text-gray-700" />
                <input
                    type="search"
                    placeholder="Search jobs, clients, companies or officers..."
                    className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-500"
                />
            </label>

            <div className="ml-auto flex items-center gap-4 lg:gap-6">
                <div className="hidden items-center gap-3 xl:flex">
                    <span className="text-sm text-gray-700">Workspace</span>
                    <div className="relative">
                        <select
                            defaultValue="/london-law"
                            onChange={(e) => router.visit(e.target.value)}
                            className="h-10 appearance-none rounded-lg border border-gray-300 bg-white pr-9 pl-3 text-sm font-medium text-gray-900 outline-none focus:border-forest-600"
                            aria-label="Switch workspace"
                        >
                            {workspaces.map(({ href, label }) => (
                                <option key={href} value={href}>
                                    {label}
                                </option>
                            ))}
                        </select>
                        <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-gray-700" />
                    </div>
                </div>

                <button
                    type="button"
                    className="relative text-gray-800 hover:text-gray-900"
                    aria-label="Notifications"
                >
                    <BellIcon className="size-6" />
                    <span className="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-red-500 ring-2 ring-white" />
                </button>

                <button type="button" className="flex items-center gap-2" aria-label="Account menu">
                    <span className="flex size-10 items-center justify-center rounded-full bg-forest-800 text-sm font-semibold text-white">
                        AD
                    </span>
                    <ChevronDownIcon className="size-4 text-gray-700" />
                </button>

                <Link
                    href="/login"
                    className="flex h-10 items-center gap-2 rounded-lg border border-gray-300 px-3.5 text-sm text-gray-800 transition hover:bg-gray-50"
                >
                    <LogOutIcon className="size-4.5" />
                    <span className="hidden sm:inline">Sign out</span>
                </Link>
            </div>
        </header>
    );
}

export default function AppLayout({ title, children }) {
    const { url } = usePage();
    const path = url.split('?')[0];

    return (
        <>
            <Head title={title} />

            <div className="flex min-h-screen flex-col bg-canvas">
                <Header />

                <div className="flex flex-1">
                    <aside className="sticky top-19 hidden h-[calc(100vh-4.75rem)] w-48 shrink-0 flex-col justify-between border-r border-gray-200 bg-white px-3 py-4 lg:flex xl:w-56">
                        <nav className="space-y-1">
                            {mainNav.map((item) => (
                                <NavItem key={item.href} {...item} active={path === item.href} />
                            ))}
                        </nav>

                        {footerNav.length > 0 && (
                            <nav className="space-y-1 border-t border-gray-200 pt-4">
                                {footerNav.map((item) => (
                                    <NavItem
                                        key={item.href}
                                        {...item}
                                        active={path === item.href}
                                    />
                                ))}
                            </nav>
                        )}
                    </aside>

                    <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-7">{children}</main>
                </div>
            </div>
        </>
    );
}
