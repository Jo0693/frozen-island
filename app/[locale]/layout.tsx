import { i18n, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <div className="antialiased bg-cream text-foreground font-body min-h-screen">
      <Header locale={locale as Locale} dict={dict.nav} />
      <main>{children}</main>
      <Footer dict={dict.footer} />
    </div>
  );
}
