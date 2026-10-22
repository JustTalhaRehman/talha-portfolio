import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { fontSans, fontMono } from '@/lib/fonts';
import { TALHA_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  metadataBase: new URL('https://talha.devistio.com'),
  title: `${TALHA_CONFIG.name} | DevOps & Platform Engineer — AWS, Kubernetes & Cloud Infrastructure`,
  description: `${TALHA_CONFIG.name} is a DevOps & Platform Engineer available for remote & relocation roles in UAE, Germany, France, Netherlands, Poland, Switzerland and worldwide — specializing in AWS (EKS, ECS, Fargate), Kubernetes, Terraform IaC, GitOps, HIPAA / SOC 2 / CIS-aligned platform engineering for enterprise and regulated-industry teams.`,
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
    // Personal branding
    'Talha Rehman',
    'Talha Rehman DevOps',
    'Talha Rehman Platform Engineer',
    // Core roles
    'DevOps Engineer',
    'Platform Engineer',
    'Cloud Engineer',
    'DevSecOps Engineer',
    'Site Reliability Engineer',
    'SRE',
    'Cloud Infrastructure Engineer',
    'Cloud Security Engineer',
    'Infrastructure Engineer',
    // Tech stack
    'AWS DevOps Engineer',
    'Amazon EKS',
    'Kubernetes Engineer',
    'Kubernetes Security',
    'Terraform Engineer',
    'OpenTofu',
    'Terragrunt',
    'ArgoCD GitOps',
    'GitOps Engineer',
    'Grafana LGTM',
    'AWS ECS Fargate',
    'FireLens',
    'Fluent Bit',
    'Kyverno',
    'Pod Security Standards',
    'Infrastructure as Code',
    'Zero Trust Security',
    'AWS Multi-Account',
    // Compliance
    'HIPAA Compliant AWS',
    'SOC 2 Cloud Infrastructure',
    'PCI DSS DevOps',
    'CIS Benchmark Kubernetes',
    'Compliance as Code',
    'Policy as Code',
    // UAE / Gulf / KSA
    'DevOps Engineer UAE',
    'Cloud Engineer Dubai',
    'Platform Engineer Abu Dhabi',
    'DevOps Engineer Saudi Arabia',
    'DevOps Engineer Riyadh',
    'Cloud Engineer KSA',
    'AWS Engineer Gulf',
    'Kubernetes Engineer UAE',
    'DevOps Consultant Dubai',
    'Platform Engineer Dubai',
    'Remote DevOps Engineer Middle East',
    // Germany & DACH
    'DevOps Engineer Germany',
    'Platform Engineer Berlin',
    'Cloud Engineer Munich',
    'Platform Engineer Munich',
    'DevOps Engineer München',
    'Kubernetes Engineer Frankfurt',
    'AWS Engineer Hamburg',
    'Cloud Infrastructure Engineer Germany',
    'DevOps Consultant Germany',
    'SRE Germany',
    // France
    'DevOps Engineer France',
    'Platform Engineer Paris',
    'Cloud Engineer France',
    'AWS Engineer Paris',
    'Site Reliability Engineer Paris',
    // Poland & CEE
    'DevOps Engineer Poland',
    'Platform Engineer Warsaw',
    'Cloud Engineer Krakow',
    'AWS Engineer Poland',
    'DevOps Engineer Wroclaw',
    // Netherlands
    'DevOps Engineer Netherlands',
    'Platform Engineer Amsterdam',
    'Cloud Engineer Netherlands',
    'Site Reliability Engineer Amsterdam',
    // Switzerland
    'DevOps Engineer Switzerland',
    'Cloud Engineer Zurich',
    'Platform Engineer Geneva',
    // UK & Ireland
    'DevOps Engineer London',
    'DevOps Engineer Ireland',
    'Cloud Engineer Dublin',
    // New Zealand & APAC
    'DevOps Engineer New Zealand',
    'Cloud Engineer Auckland',
    'Platform Engineer New Zealand',
    'DevOps Engineer Wellington',
    // General Europe & remote
    'DevOps Engineer Europe',
    'Remote DevOps Engineer Europe',
    'Remote Cloud Engineer',
    'Hire DevOps Engineer',
    'Remote DevOps Engineer',
    'AWS Platform Engineering',
    'Freelance DevOps Engineer',
    'Contract DevOps Engineer Europe',
  ],
  authors: [{ name: TALHA_CONFIG.name, url: TALHA_CONFIG.githubUrl }],
  creator: TALHA_CONFIG.name,
  openGraph: {
    title: `${TALHA_CONFIG.name} | DevOps & Platform Engineer — AWS, Kubernetes & Cloud`,
    description: 'DevOps & Platform Engineer available for UAE, Germany, France, Netherlands, Poland & worldwide — AWS (EKS, ECS, Fargate), Kubernetes, Terraform, GitOps, HIPAA / SOC 2 / CIS hardening, 99.99% production uptime.',
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
    description: 'AWS, Kubernetes, Terraform & GitOps expert. Available for UAE, Germany, France, Netherlands & worldwide. HIPAA / SOC 2 aligned. 99.99% uptime.',
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
      description: 'DevOps & Platform Engineer available for remote and relocation roles — UAE, Dubai, Germany, Berlin, Munich, France, Paris, Netherlands, Amsterdam, Poland, Warsaw, Switzerland, Zurich, New Zealand, Auckland. Expert in AWS, Kubernetes, Terraform, GitOps, HIPAA and SOC 2 compliance.',
      url: 'https://talha.devistio.com',
      email: TALHA_CONFIG.email,
      telephone: TALHA_CONFIG.phone,
      sameAs: [
        TALHA_CONFIG.linkedinUrl,
        TALHA_CONFIG.githubUrl,
        TALHA_CONFIG.devistioUrl,
        TALHA_CONFIG.mediumUrl,
      ],
      hasOccupation: {
        '@type': 'Occupation',
        name: 'DevOps & Platform Engineer',
        occupationLocation: [
          { '@type': 'Country', name: 'United Arab Emirates' },
          { '@type': 'Country', name: 'Saudi Arabia' },
          { '@type': 'Country', name: 'Germany' },
          { '@type': 'Country', name: 'France' },
          { '@type': 'Country', name: 'Netherlands' },
          { '@type': 'Country', name: 'Poland' },
          { '@type': 'Country', name: 'Switzerland' },
          { '@type': 'Country', name: 'New Zealand' },
          { '@type': 'Country', name: 'Worldwide (Remote)' },
        ],
        skills: 'AWS, Kubernetes, EKS, ECS, Fargate, Terraform, OpenTofu, Terragrunt, ArgoCD, GitOps, Grafana, Loki, Prometheus, HIPAA, SOC 2, PCI DSS, CIS Benchmarks, DevSecOps, Platform Engineering',
      },
      knowsAbout: [
        'DevOps',
        'Platform Engineering',
        'Cloud Architecture',
        'AWS (EKS, ECS, Fargate, IAM, VPC, S3, RDS, Route53)',
        'Kubernetes',
        'Terraform',
        'OpenTofu',
        'Terragrunt',
        'GitOps (ArgoCD)',
        'Grafana LGTM Observability',
        'Structured Logging',
        'FireLens',
        'Fluent Bit',
        'CloudWatch Logs Insights',
        'HIPAA Compliance',
        'SOC 2 Type II',
        'PCI DSS',
        'CIS Benchmarks',
        'AWS Multi-Account Landing Zones',
        'DevSecOps',
        'Istio Service Mesh',
        'Kyverno Policy Enforcement',
        'Zero Trust Security',
      ],
    },
    {
      '@type': 'TechArticle',
      '@id': 'https://medium.com/@talha32rehman/from-noisy-logs-to-actionable-insights-implementing-structured-logging-on-aws-ecs-fargate-179d5bd221e6#article',
      headline: 'From Noisy Logs to Actionable Insights: Implementing Structured Logging on AWS ECS Fargate',
      description: 'Hands-on guide to implementing structured JSON logging on AWS ECS Fargate using FireLens, Fluent Bit, and CloudWatch Logs Insights for production observability and SLO tracking.',
      url: 'https://medium.com/@talha32rehman/from-noisy-logs-to-actionable-insights-implementing-structured-logging-on-aws-ecs-fargate-179d5bd221e6',
      author: {
        '@id': 'https://talha.devistio.com/#person',
      },
      publisher: {
        '@id': 'https://talha.devistio.com/#person',
      },
      inLanguage: 'en-US',
      keywords: 'AWS ECS Fargate, FireLens, Fluent Bit, CloudWatch Logs Insights, Structured Logging, Observability, DevOps',
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
