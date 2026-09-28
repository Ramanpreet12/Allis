import { router, useForm } from '@inertiajs/react';
import AuthLayout, { Eyebrow } from '@/Layouts/AuthLayout';
import BackToSignIn from '@/Components/Common/BackToSignIn';
import { MailIcon } from '@/Components/UI/Icons';
import InfoBox from '@/Components/UI/InfoBox';
import PrimaryButton from '@/Components/UI/PrimaryButton';
import TextInput from '@/Components/UI/TextInput';

export default function ForgotPassword() {
    const { data, setData, processing, errors } = useForm({ email: '' });

    const submit = (e) => {
        e.preventDefault();
        // TODO: post to the reset-link endpoint once the backend is in place.
        router.get('/check-email', { email: data.email });
    };

    return (
        <AuthLayout title="Forgot password">
            <Eyebrow />
            <h1 className="mt-3 font-serif text-3xl font-bold text-gray-900">Forgot password?</h1>
            <p className="mt-2 text-sm text-gray-600">
                Enter your email address and we&rsquo;ll send you a link to reset your password.
            </p>

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
                />

                <PrimaryButton disabled={processing}>Send reset link</PrimaryButton>
            </form>

            <div className="mt-6">
                <BackToSignIn />
            </div>

            <div className="mt-8">
                <InfoBox title="Can't access your email?">
                    Please contact your administrator for assistance.
                </InfoBox>
            </div>
        </AuthLayout>
    );
}
