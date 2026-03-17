import { getContent, getSeo } from '@/lib/content';
import type { Locale } from '@/lib/i18n/config';
import type { Metadata } from 'next';
import FruitsPageClient from './FruitsPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const seo = getSeo('fruits', locale);
  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.og.title,
      description: seo.og.description,
      type: seo.og.type,
    },
  };
}

export default async function FruitsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const data = getContent('fruits', locale) as {
    title: string;
    subtitle: string;
    filterAll: string;
    filterSignature: string;
    filterBestSeller: string;
    filterKidsFriendly: string;
    items: {
      id: string;
      name: string;
      description: string;
      profile: string[];
      tags: string[];
      image: { src: string; alt: string };
    }[];
  };

  return <FruitsPageClient data={data} locale={locale} />;
}
