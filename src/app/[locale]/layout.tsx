import { GlobalStyles } from '@/app/lib/GlobalStyles';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Montserrat } from 'next/font/google';
import { notFound } from 'next/navigation';
import StyledComponentsRegistry from '../lib/registry';

const montserrat = Montserrat({
  weight: ['400', '500', '600'],
  subsets: ['latin', 'vietnamese', 'cyrillic', 'latin-ext'],
});

export const metadata: Metadata = {
  title: 'Init Project',
  description: 'This app is a template for my pet projects',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const translations = await getMessages();

  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <NextIntlClientProvider messages={translations}>
          <GlobalStyles />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
