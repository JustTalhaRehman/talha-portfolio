import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { fontSans, fontMono } from '@/lib/fonts';
import { TALHA_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${TALHA_CONFIG.name} | DevOps & Platform Engineer — AWS, Kubernetes & Compliance`,
  description: `${TALHA_CONFIG.name} is a DevOps & Platform Engineer specializing in secure, HIPAA and SOC 2-ready cloud infrastructure across 37+ AWS accounts — Kubernetes (EKS), Terraform IaC, GitOps delivery, CIS Benchmark hardening, and production reliability engineering for enterprise and regulated-industry teams worldwide.`,
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
    siteName: TALHA_CONFIG.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TALHA_CONFIG.name} | DevOps & Platform Engineer`,
    description: 'HIPAA & SOC 2-aligned platform engineering across AWS, Kubernetes, Terraform, and GitOps. 37+ accounts. 99.99% uptime.',
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
