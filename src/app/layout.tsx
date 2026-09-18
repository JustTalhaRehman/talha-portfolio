import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { fontSans, fontMono } from '@/lib/fonts';
import { TALHA_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${TALHA_CONFIG.name} | ${TALHA_CONFIG.role}`,
  description: `${TALHA_CONFIG.name} is a ${TALHA_CONFIG.role} operating across multi-account AWS, Kubernetes (EKS), Terraform, and GitOps for enterprise production systems worldwide.`,
  keywords: [
    'Talha Rehman',
    'DevOps Engineer',
    'Platform Engineer',
    'Cloud Security',
    'Kubernetes',
    'AWS Multi-Account',
    'EKS',
    'Terraform',
    'OpenTofu',
    'ArgoCD',
    'GitOps',
    'Grafana LGTM',
    'Remote',
    'Worldwide',
  ],
  authors: [{ name: TALHA_CONFIG.name, url: TALHA_CONFIG.githubUrl }],
  creator: TALHA_CONFIG.name,
  openGraph: {
    title: `${TALHA_CONFIG.name} | ${TALHA_CONFIG.role}`,
    description: TALHA_CONFIG.tagline,
    siteName: TALHA_CONFIG.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TALHA_CONFIG.name} | ${TALHA_CONFIG.role}`,
    description: TALHA_CONFIG.tagline,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#09090b',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontMono.variable} scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('talha-theme');
                  if (saved === 'light') {
                    document.documentElement.setAttribute('data-theme', 'light');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
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
