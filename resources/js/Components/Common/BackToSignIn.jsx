import { Link } from '@inertiajs/react';
import { ArrowLeftIcon } from '@/Components/UI/Icons';

export default function BackToSignIn() {
    return (
        <Link
            href="/login"
            className="inline-flex items-center gap-2 text-sm font-medium text-forest-700 hover:text-forest-900"
        >
            <ArrowLeftIcon className="size-4" />
            Back to sign in
        </Link>
    );
}
