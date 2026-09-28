import '../css/app.css';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) => {
        const pages = import.meta.glob(
            ['./Pages/**/*.jsx', './*Workspace/Pages/**/*.jsx'],
            { eager: true },
        );

        // Workspace pages are addressed as "LondonLawWorkspace/Auth/Login".
        const [workspace, ...rest] = name.split('/');

        return (
            pages[`./Pages/${name}.jsx`] ??
            pages[`./${workspace}/Pages/${rest.join('/')}.jsx`]
        );
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
