import { getContent, getSeo } from '@/lib/content';
import type { Locale } from '@/lib/i18n/config';
import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const seo = getSeo('contact', locale);
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

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const data = getContent('contact', locale) as {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      type: string;
      typeEvent: string;
      typePrivate: string;
      typePress: string;
      typeOther: string;
      message: string;
      submit: string;
    };
    info: {
      title: string;
      address: string;
      hours: string;
    };
  };

  return <ContactPageClient data={data} locale={locale} />;
}
