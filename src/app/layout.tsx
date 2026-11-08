import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import '@/styles/fonts.css';
import { TALHA_CONFIG } from '@/lib/constants';
import { remoteServiceCountries } from '@/lib/markets';

const siteUrl = 'https://talha.devistio.com/';
const title = `${TALHA_CONFIG.name} | DevOps, Cloud & Platform Engineer`;
const description = 'Talha Rehman helps teams improve AWS infrastructure, Kubernetes delivery and production reliability. DevOps, platform engineering and SRE for remote teams.';
const image = {
  url: '/talha-portfolio-logo-solid.png',
  width: 826,
  height: 312,
  alt: 'Talha Rehman portfolio logo',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { 'max-image-preview': 'large' } },
  openGraph: { type: 'website', title, description, url: '/', images: [image] },
  twitter: { card: 'summary', title, description, images: [image.url] },
};

export const viewport: Viewport = { themeColor: '#09090b' };

const personId = `${siteUrl}#person`;
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${siteUrl}#profile`,
  url: siteUrl,
  name: title,
  description,
  mainEntity: {
    '@type': 'Person',
    '@id': personId,
    name: TALHA_CONFIG.name,
    jobTitle: TALHA_CONFIG.role,
    url: siteUrl,
    image: new URL('/talha.webp', siteUrl).href,
    sameAs: [TALHA_CONFIG.linkedinUrl, TALHA_CONFIG.githubUrl, TALHA_CONFIG.mediumUrl],
    email: TALHA_CONFIG.email,
    telephone: TALHA_CONFIG.phone,
    worksFor: { '@type': 'Organization', '@id': 'https://devistio.com/#organization', name: 'Devistio', url: TALHA_CONFIG.devistioUrl },
    knowsAbout: ['DevOps', 'AWS cloud architecture', 'Kubernetes', 'Platform engineering', 'Terraform', 'GitOps', 'CI/CD', 'Site reliability engineering', 'Observability', 'Cloud security'],
    makesOffer: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Remote DevOps, cloud and platform engineering support',
        url: new URL('#contact', siteUrl).href,
        provider: { '@id': personId },
        areaServed: remoteServiceCountries.map((name) => ({ '@type': 'Country', name })),
      },
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <head>
        <link rel="preload" href="/fonts/558ca1a6aa3cb55e-s.p.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/e4af272ccee01ff0-s.p.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('talha-theme');
                  var light = saved === 'light' ||
                    (saved !== 'dark' && matchMedia('(prefers-color-scheme: light)').matches);
                  document.documentElement.dataset.theme = light ? 'light' : 'dark';
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
