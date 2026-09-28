import { useMemo, useState } from 'react';
import AppLayout from '../../Layouts/AppLayout';
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    FilterIcon,
    PlusIcon,
    SearchIcon,
} from '@/Components/UI/Icons';

// Tailwind needs full class names, so each status spells out its own colours.
const statusStyles = {
    'Ready to review': 'bg-gold-50 text-gold-700 ring-gold-100',
    'In progress': 'bg-blue-50 text-blue-700 ring-blue-100',
    Renewable: 'bg-sky-50 text-sky-700 ring-sky-100',
    Overdue: 'bg-red-50 text-red-700 ring-red-100',
    Completed: 'bg-forest-50 text-forest-700 ring-forest-100',
    Late: 'bg-orange-50 text-orange-700 ring-orange-100',
};

const tabs = [
    { key: 'all', label: 'All', match: () => true },
    { key: 'formations', label: 'Formations', match: (job) => job.type === 'formation' },
    { key: 'services', label: 'Services', match: (job) => job.type === 'service' },
    { key: 'renewable', label: 'Renewable', match: (job) => job.status === 'Renewable' },
    { key: 'late', label: 'Late', match: (job) => ['Late', 'Overdue'].includes(job.status) },
    { key: 'completed', label: 'Completed', match: (job) => job.status === 'Completed' },
    { key: 'archived', label: 'Archived', match: (job) => job.archived },
];

// TODO: replace the placeholder jobs, total and pagination with data from the backend.
const TOTAL_JOBS = 156;
const jobs = [
    {
        no: '227341',
        company: 'Meadowbrook Consulting',
        client: 'WHI21044',
        service: 'Company formation',
        type: 'formation',
        status: 'Ready to review',
        due: '10-09-2026',
    },
    {
        no: '227338',
        company: 'Harborne Digital',
        client: 'HAR20911',
        service: 'Company formation',
        type: 'formation',
        status: 'In progress',
        due: '12-09-2026',
    },
    {
        no: '227322',
        company: 'Fentons Estates Ltd',
        client: 'FEN19883',
        service: 'Registered office',
        type: 'service',
        status: 'Renewable',
        due: '18-09-2026',
    },
    {
        no: '227305',
        company: 'Tred Property Investments',
        client: 'KNI14430',
        service: 'Company secretarial',
        type: 'service',
        status: 'Overdue',
        due: '29-08-2026',
    },
    {
        no: '227290',
        company: 'Quayside Legal',
        client: 'QUA17722',
        service: 'Apostille set',
        type: 'service',
        status: 'Completed',
        due: null,
    },
    {
        no: '227288',
        company: 'Greenfield Holdings',
        client: 'GRE14521',
        service: 'Annual renewal',
        type: 'service',
        status: 'Late',
        due: '28-09-2026',
    },
    {
        no: '227276',
        company: 'Walton Enterprises',
        client: 'WAL13367',
        service: 'Director change',
        type: 'service',
        status: 'In progress',
        due: '14-09-2026',
    },
    {
        no: '227268',
        company: 'Bramerton Group',
        client: 'BRA12390',
        service: 'Service address',
        type: 'service',
        status: 'Ready to review',
        due: '16-09-2026',
    },
];

function StatusBadge({ status }) {
    return (
        <span
            className={`inline-flex rounded-md px-2.5 py-1 text-xs font-medium whitespace-nowrap ring-1 ${statusStyles[status]}`}
        >
            {status}
        </span>
    );
}

function Pagination() {
    const pages = [1, 2, 3, 4, 5, '…', 20];
    const current = 1;

    return (
        <nav className="flex items-center gap-1.5" aria-label="Pagination">
            <button
                type="button"
                className="flex size-9 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
                aria-label="Previous page"
            >
                <ChevronLeftIcon className="size-4" />
            </button>
            {pages.map((page, i) =>
                page === '…' ? (
                    <span key={`gap-${i}`} className="px-1.5 text-sm text-gray-500">
                        …
                    </span>
                ) : (
                    <button
                        key={page}
                        type="button"
                        className={`flex size-9 items-center justify-center rounded-lg text-sm transition ${
                            page === current
                                ? 'bg-forest-800 font-semibold text-white'
                                : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        aria-current={page === current ? 'page' : undefined}
                    >
                        {page}
                    </button>
                ),
            )}
            <button
                type="button"
                className="flex size-9 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
                aria-label="Next page"
            >
                <ChevronRightIcon className="size-4" />
            </button>
        </nav>
    );
}

export default function JobsIndex() {
    const [activeTab, setActiveTab] = useState('all');
    const [search, setSearch] = useState('');

    const visibleJobs = useMemo(() => {
        const tab = tabs.find((t) => t.key === activeTab);
        const term = search.trim().toLowerCase();

        return jobs.filter(
            (job) =>
                tab.match(job) &&
                (!term ||
                    [job.no, job.company, job.client, job.service].some((value) =>
                        value.toLowerCase().includes(term),
                    )),
        );
    }, [activeTab, search]);

    return (
        <AppLayout title="Jobs">
            <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <h1 className="font-serif text-3xl font-bold text-forest-900">Jobs</h1>
                        <span className="rounded-full bg-forest-50 px-2.5 py-0.5 text-sm font-medium text-forest-800">
                            {TOTAL_JOBS}
                        </span>
                    </div>

                    <button
                        type="button"
                        className="flex h-11 items-center gap-2 rounded-lg bg-forest-800 px-5 text-sm font-semibold text-white transition hover:bg-forest-900"
                    >
                        <PlusIcon className="size-4.5" />
                        Create New Job
                    </button>
                </div>

                <div className="mt-6 flex gap-3">
                    <label className="flex h-11 flex-1 items-center gap-3 rounded-lg border border-gray-200 bg-canvas px-4 focus-within:border-forest-600 focus-within:bg-white focus-within:ring-3 focus-within:ring-forest-600/15">
                        <SearchIcon className="size-4.5 text-gray-600" />
                        <input
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by job number, company, client or service..."
                            className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-500"
                        />
                    </label>
                    <button
                        type="button"
                        className="flex h-11 items-center gap-2 rounded-lg border border-gray-200 px-4 text-sm font-medium text-gray-800 transition hover:bg-gray-50"
                    >
                        <FilterIcon className="size-4" />
                        Filter
                    </button>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                    {tabs.map(({ key, label }) => (
                        <button
                            key={key}
                            type="button"
                            onClick={() => setActiveTab(key)}
                            className={`rounded-full px-4 py-1.5 text-sm transition ${
                                activeTab === key
                                    ? 'bg-forest-800 font-medium text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div className="mt-5 overflow-x-auto">
                    <table className="w-full min-w-[780px] text-left text-sm">
                        <thead>
                            <tr className="border-y border-gray-200 text-xs font-semibold text-gray-900">
                                <th className="px-3 py-3.5">Job No.</th>
                                <th className="px-3 py-3.5">Company Name</th>
                                <th className="px-3 py-3.5">Client</th>
                                <th className="px-3 py-3.5">Service</th>
                                <th className="px-3 py-3.5">Status</th>
                                <th className="px-3 py-3.5">Due Date</th>
                                <th className="px-3 py-3.5 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {visibleJobs.map((job) => (
                                <tr key={job.no} className="transition hover:bg-forest-50/50">
                                    <td className="px-3 py-4 font-semibold text-forest-800">
                                        {job.no}
                                    </td>
                                    <td className="px-3 py-4 text-gray-900">{job.company}</td>
                                    <td className="px-3 py-4 text-gray-700">{job.client}</td>
                                    <td className="px-3 py-4 text-gray-700">{job.service}</td>
                                    <td className="px-3 py-4">
                                        <StatusBadge status={job.status} />
                                    </td>
                                    <td className="px-3 py-4 text-gray-700">{job.due ?? '-'}</td>
                                    <td className="px-3 py-4 text-center">
                                        <button
                                            type="button"
                                            className="inline-flex size-8 items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
                                            aria-label={`Open job ${job.no}`}
                                        >
                                            <ChevronRightIcon className="size-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}

                            {visibleJobs.length === 0 && (
                                <tr>
                                    <td
                                        colSpan={7}
                                        className="px-3 py-12 text-center text-gray-500"
                                    >
                                        No jobs found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-5">
                    <p className="text-sm text-gray-600">
                        Showing 1 to {visibleJobs.length} of {TOTAL_JOBS} jobs
                    </p>
                    <Pagination />
                </div>
            </section>
        </AppLayout>
    );
}
