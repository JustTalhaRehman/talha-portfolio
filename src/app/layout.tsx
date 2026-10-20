import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { fontSans, fontMono } from '@/lib/fonts';
import { TALHA_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL('https://talha.devistio.com'),
  title: `${TALHA_CONFIG.name} | DevOps & Platform Engineer — AWS, Kubernetes & Compliance`,
  description: `${TALHA_CONFIG.name} is a DevOps & Platform Engineer specializing in secure, HIPAA and SOC 2-ready cloud infrastructure across 37+ AWS accounts — Kubernetes (EKS), Terraform IaC, GitOps delivery, CIS Benchmark hardening, and production reliability engineering for enterprise and regulated-industry teams worldwide.`,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: [
    'Talha Rehman',
    'DevOps Engineer',
    'Platform Engineer',
    'DevSecOps',
    'Cloud Security Engineer',
    'HIPAA Compliant AWS',
    'SOC 2 Cloud Infrastructure',
    'PCI DSS DevOps',
    'CIS Benchmark Kubernetes',
    'Compliance as Code',
    'Policy as Code',
    'AWS Multi-Account',
    'Amazon EKS',
    'Kubernetes Security',
    'Terraform',
    'OpenTofu',
    'Terragrunt',
    'ArgoCD GitOps',
    'Grafana LGTM',
    'Kyverno',
    'Pod Security Standards',
    'Infrastructure as Code',
    'Zero Trust Security',
    'Remote DevOps Engineer',
    'Hire DevOps Engineer',
    'AWS Platform Engineering',
  ],
  authors: [{ name: TALHA_CONFIG.name, url: TALHA_CONFIG.githubUrl }],
  creator: TALHA_CONFIG.name,
  openGraph: {
    title: `${TALHA_CONFIG.name} | DevOps & Platform Engineer — HIPAA, SOC 2 & AWS`,
    description: 'Secure, compliance-ready cloud infrastructure across 37+ AWS accounts — Kubernetes (EKS), Terraform, GitOps, HIPAA / SOC 2 / CIS hardening, and 99.99% production uptime.',
    url: 'https://talha.devistio.com',
    siteName: TALHA_CONFIG.name,
    images: [
      {
        url: '/talha-portfolio-logo-solid.png',
        width: 512,
        height: 512,
        alt: `${TALHA_CONFIG.name} - DevOps & Platform Engineer`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: `${TALHA_CONFIG.name} | DevOps & Platform Engineer`,
    description: 'HIPAA & SOC 2-aligned platform engineering across AWS, Kubernetes, Terraform, and GitOps. 37+ accounts. 99.99% uptime.',
    images: ['/talha-portfolio-logo-solid.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#09090b',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://talha.devistio.com/#website',
      url: 'https://talha.devistio.com',
      name: `${TALHA_CONFIG.name} | DevOps & Platform Engineer`,
      description: TALHA_CONFIG.shortBio,
      publisher: {
        '@id': 'https://talha.devistio.com/#person',
      },
    },
    {
      '@type': 'ProfilePage',
      '@id': 'https://talha.devistio.com/#profilepage',
      url: 'https://talha.devistio.com',
      name: `${TALHA_CONFIG.name} Portfolio`,
      mainEntity: {
        '@id': 'https://talha.devistio.com/#person',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://talha.devistio.com/#person',
      name: TALHA_CONFIG.name,
      jobTitle: TALHA_CONFIG.role,
      url: 'https://talha.devistio.com',
      email: TALHA_CONFIG.email,
      telephone: TALHA_CONFIG.phone,
      sameAs: [
        TALHA_CONFIG.linkedinUrl,
        TALHA_CONFIG.githubUrl,
        TALHA_CONFIG.devistioUrl,
      ],
      knowsAbout: [
        'DevOps',
        'Platform Engineering',
        'Cloud Architecture',
        'Kubernetes (EKS)',
        'Terraform',
        'OpenTofu',
        'Terragrunt',
        'GitOps (ArgoCD)',
        'HIPAA Compliance',
        'SOC 2 Type II',
        'PCI DSS',
        'CIS Benchmarks',
        'AWS Multi-Account Landing Zones',
        'DevSecOps',
        'Grafana LGTM Observability',
      ],
    },
  ],
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
