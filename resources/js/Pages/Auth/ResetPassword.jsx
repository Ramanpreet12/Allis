import { useForm } from '@inertiajs/react';
import AuthLayout, { Eyebrow } from '@/Layouts/AuthLayout';
import BackToSignIn from '@/Components/Common/BackToSignIn';
import { CheckIcon } from '@/Components/UI/Icons';
import PasswordInput from '@/Components/UI/PasswordInput';
import PrimaryButton from '@/Components/UI/PrimaryButton';

const rules = [
    { label: 'At least 8 characters', test: (v) => v.length >= 8 },
    { label: 'Includes a number', test: (v) => /\d/.test(v) },
    { label: 'Includes a letter', test: (v) => /[a-z]/i.test(v) },
    { label: 'Includes a special character', test: (v) => /[^a-z0-9]/i.test(v) },
];

export default function ResetPassword() {
    const { data, setData, processing, errors, setError, clearErrors } = useForm({
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        clearErrors();

        if (!rules.every((rule) => rule.test(data.password))) {
            setError('password', 'Please meet all the password requirements.');
            return;
        }

        if (data.password !== data.password_confirmation) {
            setError('password_confirmation', 'Passwords do not match.');
            return;
        }

        // TODO: post to the reset-password endpoint once the backend is in place.
    };

    return (
        <AuthLayout title="Reset password">
            <Eyebrow />
            <h1 className="mt-3 font-serif text-3xl font-bold text-gray-900">Reset your password</h1>
            <p className="mt-2 text-sm text-gray-600">Create a new password for your account.</p>

            <form onSubmit={submit} className="mt-8 space-y-5">
                <div>
                    <PasswordInput
                        label="New password"
                        autoComplete="new-password"
                        placeholder="Enter a new password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        error={errors.password}
                        required
                    />

                    <ul className="mt-3 space-y-1.5">
                        {rules.map(({ label, test }) => {
                            const met = test(data.password);

                            return (
                                <li key={label} className="flex items-center gap-2 text-xs text-gray-700">
                                    <span
                                        className={`flex size-4 items-center justify-center rounded-full transition ${
                                            met ? 'bg-forest-600 text-white' : 'bg-gray-200 text-transparent'
                                        }`}
                                    >
                                        <CheckIcon className="size-3" strokeWidth={3} />
                                    </span>
                                    {label}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <PasswordInput
                    label="Confirm new password"
                    autoComplete="new-password"
                    placeholder="Re-enter your new password"
                    value={data.password_confirmation}
                    onChange={(e) => setData('password_confirmation', e.target.value)}
                    error={errors.password_confirmation}
                    required
                />

                <PrimaryButton disabled={processing}>Reset password</PrimaryButton>
            </form>

            <div className="mt-6 text-center">
                <BackToSignIn />
            </div>
        </AuthLayout>
    );
}
