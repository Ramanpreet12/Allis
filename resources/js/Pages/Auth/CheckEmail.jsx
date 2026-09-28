import AuthLayout from '@/Layouts/AuthLayout';
import BackToSignIn from '@/Components/Common/BackToSignIn';
import { MailIcon } from '@/Components/UI/Icons';
import InfoBox from '@/Components/UI/InfoBox';

export default function CheckEmail({ email }) {
    return (
        <AuthLayout title="Check your email">
            <div className="text-center">
                <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-forest-50 text-forest-800">
                    <MailIcon className="size-7" />
                </span>

                <h1 className="mt-6 font-serif text-3xl font-bold text-gray-900">Check your email</h1>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    We&rsquo;ve sent a password reset link to{' '}
                    {email ? <span className="font-semibold text-gray-900">{email}</span> : 'your email address'}.
                    <br />
                    Please check your inbox and click the link to reset your password.
                </p>
            </div>

            <div className="mt-8">
                <InfoBox title="Not received the email?">
                    <ul className="list-disc space-y-1 pl-4">
                        <li>Check your spam or junk folder.</li>
                        <li>Make sure you entered the correct email address.</li>
                        <li>The link will expire in 30 minutes.</li>
                    </ul>
                </InfoBox>
            </div>

            <div className="mt-6 text-center">
                <BackToSignIn />
            </div>
        </AuthLayout>
    );
}
