'use client';

import  { PropsWithChildren, memo } from 'react';
import { I18nextProvider } from 'react-i18next';
import { createInstance, Resource } from 'i18next';
import initTranslations from '@/app/i18n';

interface TranslationProviderProps {
    locale: string;
    namespaces: string[];
    resources: Resource;
}

const TranslationProvider = memo<PropsWithChildren<TranslationProviderProps>>(
    ({ children, locale, namespaces, resources }) => {
        const i18n = createInstance();

        initTranslations(locale, namespaces, i18n, resources);

        return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
    },
);

TranslationProvider.displayName = 'TranslationProvider';

export default TranslationProvider;