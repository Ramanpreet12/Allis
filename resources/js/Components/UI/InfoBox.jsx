import { InfoIcon } from './Icons';

export default function InfoBox({ title, children }) {
    return (
        <div className="flex gap-3 rounded-lg bg-forest-50 p-4">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                <InfoIcon className="size-4" />
            </span>
            <div className="text-sm">
                <p className="font-semibold text-gray-900">{title}</p>
                <div className="mt-1 text-xs leading-relaxed text-gray-600">{children}</div>
            </div>
        </div>
    );
}
