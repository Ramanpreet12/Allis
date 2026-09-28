import { useState } from 'react';
import { EyeIcon, EyeOffIcon, LockIcon } from './Icons';
import TextInput from './TextInput';

export default function PasswordInput(props) {
    const [visible, setVisible] = useState(false);

    return (
        <TextInput
            type={visible ? 'text' : 'password'}
            icon={LockIcon}
            trailing={
                <button
                    type="button"
                    onClick={() => setVisible((v) => !v)}
                    className="shrink-0 text-gray-500 transition hover:text-gray-800"
                    aria-label={visible ? 'Hide password' : 'Show password'}
                >
                    {visible ? <EyeIcon className="size-4.5" /> : <EyeOffIcon className="size-4.5" />}
                </button>
            }
            {...props}
        />
    );
}
