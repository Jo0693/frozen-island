import type { Metadata } from 'next';
import { Baloo_2, Inter } from 'next/font/google';
import './globals.css';

const baloo = Baloo_2({
  variable: '--font-baloo',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Frozen Island – Bali | Taste the Tropics',
  description: 'Frozen tropical fruits served in their natural shell. 100% natural, no additives. A unique sensory experience in Bali.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${baloo.variable} ${inter.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
