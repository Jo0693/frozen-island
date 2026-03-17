import type { Metadata } from 'next';
import { Baloo_2, Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script'

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
      <head>
        {/* Publisher injects tracking snippets (GTM, Clarity, etc.) here */}
      </head>
      <body className={`${baloo.variable} ${inter.variable}`} suppressHydrationWarning>
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TEST123" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        {children}
        <Script id="gtm" strategy="afterInteractive">{`
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-TEST123');
`}</Script>
        <Script id="clarity" strategy="afterInteractive">{`
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window,document,"clarity","script","test123");
`}</Script>
      </body>
    </html>
  );
}
