import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <>
            <Head title="Home" />

            <main className="flex min-h-screen items-center justify-center bg-black px-6 text-gray-900">
                <div className="max-w-xl text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Project successfully configured!!!!!!!!!!!!
                    </h1>
                    <p className="mt-3 text-base text-gray-600">
                        Laravel + PostgreSQL + Inertia + React + Tailwind
                    </p>
                </div>
            </main>
        </>
    );
}
