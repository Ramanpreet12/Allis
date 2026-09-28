import { useId } from 'react';

export default function TextInput({
    label,
    icon: Icon,
    trailing,
    error,
    className = '',
    ...props
}) {
    const id = useId();

    return (
        <div className={className}>
            <label htmlFor={id} className="mb-2 block text-sm font-semibold text-gray-900">
                {label}
            </label>

            <div
                className={`flex items-center gap-3 rounded-lg border bg-white px-3.5 transition focus-within:border-forest-600 focus-within:bg-forest-50/40 focus-within:ring-3 focus-within:ring-forest-600/15 ${
                    error ? 'border-red-400' : 'border-gray-200'
                }`}
            >
                {Icon && <Icon className="size-4.5 shrink-0 text-gray-500" />}
                <input
                    id={id}
                    className="h-11 w-full min-w-0 bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 autofill:shadow-[inset_0_0_0_1000px_white] autofill:[-webkit-text-fill-color:var(--color-gray-900)]"
                    {...props}
                />
                {trailing}
            </div>

            {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
        </div>
    );
}
