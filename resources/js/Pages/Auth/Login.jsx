import { Link, router, useForm } from '@inertiajs/react';
import AuthLayout, { Eyebrow } from '@/Layouts/AuthLayout';
import { MailIcon, XCircleIcon } from '@/Components/UI/Icons';
import PasswordInput from '@/Components/UI/PasswordInput';
import PrimaryButton from '@/Components/UI/PrimaryButton';
import TextInput from '@/Components/UI/TextInput';

export default function Login() {
    const { data, setData, processing, errors } = useForm({
        email: '',
        password: '',
        remember: true,
    });

    const submit = (e) => {
        e.preventDefault();
        // TODO: post to the login endpoint once the backend auth is in place.
        router.get('/workspaces');
    };

    return (
        <AuthLayout title="Sign in">
            <Eyebrow />
            <h1 className="mt-3 font-serif text-4xl font-bold text-gray-900">Sign in</h1>
            <p className="mt-2 text-sm text-forest-800">Sign in to access your workspace.</p>

            <form onSubmit={submit} className="mt-8 space-y-5">
                <TextInput
                    label="Email address"
                    type="email"
                    icon={MailIcon}
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    error={errors.email}
                    required
                    trailing={
                        data.email && (
                            <button
                                type="button"
                                onClick={() => setData('email', '')}
                                className="shrink-0 text-gray-400 hover:text-gray-700"
                                aria-label="Clear email"
                            >
                                <XCircleIcon className="size-4" />
                            </button>
                        )
                    }
                />

                <PasswordInput
                    label="Password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    error={errors.password}
                    required
                />

                <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                        <input
                            type="checkbox"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            className="size-4 rounded accent-forest-800"
                        />
                        Keep me signed in
                    </label>
                    <Link
                        href="/forgot-password"
                        className="text-sm font-medium text-forest-700 hover:text-forest-900"
                    >
                        Forgot password?
                    </Link>
                </div>

                <PrimaryButton disabled={processing}>Sign in</PrimaryButton>
            </form>
        </AuthLayout>
    );
}
