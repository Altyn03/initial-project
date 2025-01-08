'use client';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <main>
      <h1>{t('title')}</h1>
      <Link href='/login'>{t('login')}</Link>
    </main>
  );
}
