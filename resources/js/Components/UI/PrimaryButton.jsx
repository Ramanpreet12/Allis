import { ArrowRightIcon } from './Icons';

export default function PrimaryButton({ children, className = '', ...props }) {
    return (
        <button
            type="submit"
            className={`flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-forest-800 text-sm font-semibold text-white transition hover:bg-forest-900 focus-visible:ring-3 focus-visible:ring-forest-600/30 focus-visible:outline-none disabled:opacity-60 ${className}`}
            {...props}
        >
            {children}
            <ArrowRightIcon className="size-4" />
        </button>
    );
}
