import React, {ReactNode} from 'react';
import {NextIntlClientProvider, useLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import Header from '../components/header/header';
import Head from 'next/head';

// export function generateStaticParams() {
//     return [{locale: 'en' }];
// }
type Props = {
    children: ReactNode;
    params: {locale: string};
};

export default async function LocaleLayout({children, params}: Props) {
    const locale = useLocale();
    if (params.locale !== locale) {
        notFound();
    }
    let messages;
    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Header name='Sydema' role='Amministratore'/>
                    {children}
                    {/* <PageLayout children={children} /> */}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}