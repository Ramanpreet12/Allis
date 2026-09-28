import { Head } from '@inertiajs/react';
import { BarChartIcon, FileTextIcon, LandmarkIcon, UsersIcon } from '@/Components/UI/Icons';

const features = [
    { icon: LandmarkIcon, title: 'Company Formations', text: 'Manage incorporations and filings' },
    { icon: FileTextIcon, title: 'Case & Job Management', text: 'Track progress and deadlines' },
    { icon: UsersIcon, title: 'Client & Compliance', text: 'Centralised client information' },
    { icon: BarChartIcon, title: 'Reports & Insights', text: 'Real-time dashboards and analytics' },
];

function Brand() {
    return (
        <div>
            <span className="block h-0.5 w-8 bg-gold-400" />
            <p className="mt-5 font-serif text-3xl font-semibold text-white">
                Appleton &amp; London Law
            </p>
            <p className="mt-1 text-[0.7rem] font-medium tracking-[0.3em] text-white/70 uppercase">
                Information System
            </p>
        </div>
    );
}

export default function AuthLayout({ title, children }) {
    return (
        <>
            <Head title={title} />

            <div className="flex min-h-screen bg-white">
                <aside className="hidden w-[36%] max-w-xl shrink-0 flex-col bg-forest-800 px-14 py-16 lg:flex">
                    <Brand />

                    <h2 className="mt-14 font-serif text-4xl leading-tight font-semibold text-white">
                        Your complete company services workspace
                    </h2>

                    <ul className="mt-10 space-y-6">
                        {features.map(({ icon: Icon, title, text }) => (
                            <li key={title} className="flex items-center gap-4">
                                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                                    <Icon className="size-5" />
                                </span>
                                <div>
                                    <p className="text-sm font-semibold text-white">{title}</p>
                                    <p className="text-xs text-white/70">{text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </aside>

                <main className="flex flex-1 items-center justify-center bg-gradient-to-br from-forest-50 via-white to-forest-100/60 px-4 py-10 sm:px-8">
                    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl shadow-forest-900/5 ring-1 ring-gray-100 sm:p-12">
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
}

export function Eyebrow() {
    return (
        <p className="text-[0.7rem] font-semibold tracking-[0.25em] text-forest-700 uppercase">
            Appleton &amp; London Law
        </p>
    );
}
