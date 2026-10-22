export interface CapabilityItem {
  title: string;
  desc: string;
  tags: string[];
}

export interface ProjectItem {
  title: string;
  desc: string;
  subdesc?: string;
  link: string;
  github?: string;
  mediumUrl?: string;
  tags: string[];
  highlights?: string[];
}

export interface StackCategory {
  category: string;
  items: string[];
}

export interface MetricItem {
  value: string;
  label: string;
}

export const TALHA_CONFIG = {
  name: 'Talha Rehman',
  brandName: 'Talha',
  role: 'DevOps & Platform Engineer',
  tagline: 'Multi-Cloud Infrastructure · Kubernetes · HIPAA & SOC 2 Compliant Platforms',
  shortBio: 'DevOps & Platform Engineer designing secure, compliance-ready cloud infrastructure across 37+ AWS accounts — specializing in Kubernetes (EKS, ECS, Fargate), Terraform IaC, GitOps delivery, and HIPAA / SOC 2 / CIS-aligned platform hardening. Available for remote and relocation roles in UAE, Germany, France, Netherlands, Poland, Switzerland, New Zealand, and worldwide.',
  location: 'Remote · Available Worldwide',
  availability: 'Open to Remote & Relocation — UAE · Germany · France · Netherlands · Poland · New Zealand · Worldwide',
  email: 'talha@devistio.com',
  phone: '+92 315 6569204',
  whatsappUrl: 'https://wa.me/923156569204',
  linkedinUrl: 'https://www.linkedin.com/in/talha-rehman-devops-engineer/',
  githubUrl: 'https://github.com/JustTalhaRehman',
  devistioUrl: 'https://devistio.com',
  mediumUrl: 'https://medium.com/@talha32rehman',
  resumeUrl: 'mailto:talha@devistio.com?subject=Request%20for%20CV%20%E2%80%94%20Talha%20Rehman&body=Hi%20Talha%2C%0A%0AI%20came%20across%20your%20portfolio%20(talha.devistio.com)%20and%20would%20like%20to%20request%20an%20updated%20copy%20of%20your%20CV%20%2F%20Resume.%0A%0ALooking%20forward%20to%20connecting%20with%20you.%0A%0ABest%20regards%2C',
};

export const METRICS: MetricItem[] = [
  { value: '37+', label: 'AWS & multi-cloud accounts engineered' },
  { value: '3+', label: 'years delivering production platform systems' },
  { value: '80%', label: 'reduction in CI/CD pipeline runtime' },
  { value: '99.99%', label: 'sustained production platform uptime' },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    title: 'Multi-Cloud & AWS Enterprise Architecture',
    desc: 'Designed and operated scalable multi-account AWS landing zones across 37+ accounts using Transit Gateway hub-and-spoke topology, VPC PrivateLink, Amazon EKS, and RDS Aurora — with full network isolation and cross-account IAM governance.',
    tags: ['AWS EKS', 'Transit Gateway', 'PrivateLink', 'Aurora RDS', 'VPC Architecture', 'Multi-Account IAM'],
  },
  {
    title: 'Kubernetes Platforms & DevSecOps',
    desc: 'Production EKS platforms hardened to CIS Kubernetes Benchmark standards — Kyverno admission control, Pod Security Standards (Restricted profile), default-deny NetworkPolicies, and IRSA-based least-privilege workload identity.',
    tags: ['Amazon EKS', 'Kyverno', 'CIS Benchmark', 'PSS Restricted', 'NetworkPolicies', 'KEDA'],
  },
  {
    title: 'Istio Service Mesh & Egress Security',
    desc: 'Zero-trust service mesh implementation using Istio — migrating permissive ALLOW_ANY egress to REGISTRY_ONLY allow-lists with ServiceEntries, Egress Gateways, and mTLS enforcement between workloads.',
    tags: ['Istio', 'mTLS', 'Egress Gateway', 'ServiceEntries', 'VPC Endpoints', 'Zero Trust'],
  },
  {
    title: 'GitOps & CI/CD Pipeline Engineering',
    desc: 'End-to-end release automation reducing deployment cycle time from 20 min to under 4 min (80% faster) — GitHub Actions, ArgoCD continuous reconciliation, Spacelift IaC pipelines, and gated production promotion workflows.',
    tags: ['GitHub Actions', 'ArgoCD', 'Jenkins', 'CircleCI', 'Spacelift', 'GitOps'],
  },
  {
    title: 'Full-Stack Observability (Grafana LGTM)',
    desc: 'Unified telemetry platform (Grafana Loki · Mimir · Tempo · Pyroscope) slashing mean time to resolution by ~50% across distributed microservices — correlated logs, metrics, traces, and continuous profiling in a single pane.',
    tags: ['Grafana', 'Loki', 'Mimir', 'Tempo', 'Pyroscope', 'Datadog', 'Prometheus'],
  },
  {
    title: 'Infrastructure as Code & Drift Governance',
    desc: 'Fully modular, DRY IaC using Terraform, OpenTofu, and Terragrunt — remote state locking, PR-gated plan reviews, automated Checkov security scanning, and drift detection to prevent unauthorized infrastructure changes.',
    tags: ['Terraform', 'OpenTofu', 'Terragrunt', 'Checkov', 'Ansible', 'Python Automation'],
  },
  {
    title: 'Compliance & Regulatory Readiness',
    desc: 'Continuous compliance engineering aligned to HIPAA, SOC 2 Type II, PCI DSS, and CIS Benchmarks — policy-as-code enforcement in CI, CloudTrail audit logging, KMS Separation of Duties, IAM access reviews, and audit-ready change history via GitOps.',
    tags: ['HIPAA', 'SOC 2 Type II', 'PCI DSS', 'CIS Benchmarks', 'CloudTrail Audit', 'Policy-as-Code'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Production EKS Platform Engineering',
    desc: 'Enterprise-grade Terraform infrastructure for Amazon EKS — built for regulated-industry workloads requiring high availability, IRSA-based least-privilege access, and full GitOps delivery.',
    subdesc: 'Two-tier VPC with private node groups, multi-AZ NAT gateways, External DNS, External Secrets Operator, Cluster Autoscaler, KEDA event-driven scaling, and ArgoCD continuous reconciliation — deployable and reproducible in under 20 minutes.',
    link: 'https://github.com/JustTalhaRehman/eks-platform-engineering',
    github: 'https://github.com/JustTalhaRehman/eks-platform-engineering',
    tags: ['Amazon EKS', 'Terraform', 'ArgoCD', 'KEDA', 'IRSA', 'Cluster Autoscaler'],
    highlights: [
      'Multi-AZ private VPC with isolated node groups and NAT gateway egress',
      'IRSA (IAM Roles for Service Accounts) — zero static credential exposure',
      'KEDA & Cluster Autoscaler for cost-efficient, demand-driven scaling',
      'ArgoCD GitOps with drift detection and automated self-healing reconciliation',
    ],
  },
  {
    title: 'Zero-Trust Kubernetes Secrets Management',
    desc: 'HIPAA and SOC 2-aligned secrets pipeline — pulling from AWS Secrets Manager into Kubernetes with zero plaintext credentials in Git or container images.',
    subdesc: 'External Secrets Operator with namespace-scoped IRSA roles for credential-less authentication, automated rotation propagation, and live workload re-injection — meeting compliance requirements for PHI and PII data environments.',
    link: 'https://github.com/JustTalhaRehman/k8s-secrets-management',
    github: 'https://github.com/JustTalhaRehman/k8s-secrets-management',
    tags: ['External Secrets Operator', 'AWS Secrets Manager', 'IRSA', 'HIPAA', 'SOC 2', 'Zero Trust'],
    highlights: [
      'External Secrets Operator pulling versioned secrets from AWS Secrets Manager',
      'Eliminates plaintext credentials from Git, manifests, and container images',
      'Automated rotation cycle with zero-downtime live workload re-injection',
      'Namespace-scoped IRSA roles preventing cross-tenant privilege escalation',
    ],
  },
  {
    title: 'Enterprise Multi-Account AWS Landing Zone',
    desc: 'Production-grade cloud platform spanning 37+ AWS accounts — designed for enterprise and regulated-industry workloads with full network isolation, CIS-aligned security controls, and centralized governance.',
    subdesc: 'Hub-and-spoke Transit Gateway topology, VPC PrivateLink for private service exposure, KMS Separation of Duties, IAM least-privilege enforcement, and CIS AWS Foundations Benchmark hardening — provisioned via modular Terraform and Terragrunt.',
    link: 'https://github.com/JustTalhaRehman',
    github: 'https://github.com/JustTalhaRehman',
    tags: ['Transit Gateway', 'VPC PrivateLink', 'KMS', 'CIS Hardening', 'Terraform', 'Terragrunt'],
    highlights: [
      'Transit Gateway hub-and-spoke mesh connecting 37+ isolated AWS accounts',
      'VPC PrivateLink & Endpoints — microservices never traverse the public internet',
      'KMS Separation of Duties — key usage restricted by resource and principal ARN',
      'Reusable DRY Terragrunt modules with PR-gated plan reviews and state locking',
    ],
  },
  {
    title: 'CIS-Hardened Kubernetes Security Platform',
    desc: 'Policy-as-code security layer for Amazon EKS — enforcing CIS Kubernetes Benchmark controls, Pod Security Standards (Restricted), and zero-trust network segmentation across multi-tenant production clusters.',
    subdesc: 'Kyverno admission controller in audit and enforce modes, mandatory non-root execution, dropped Linux capabilities, default-deny NetworkPolicies, and Istio REGISTRY_ONLY egress — defense-in-depth posture aligned to SOC 2, HIPAA, and PCI DSS.',
    link: 'https://github.com/JustTalhaRehman',
    github: 'https://github.com/JustTalhaRehman',
    tags: ['Kyverno', 'CIS Benchmark', 'PSS Restricted', 'NetworkPolicies', 'Istio', 'SOC 2'],
    highlights: [
      'Kyverno policies enforcing CIS Benchmark & PSS Restricted across all namespaces',
      'Non-root UID enforcement and full Linux capabilities drop on every pod',
      'Default-deny ingress/egress NetworkPolicies with explicit allow rules per service',
      'Istio REGISTRY_ONLY egress gateway — blocks all undeclared external traffic',
    ],
  },
  {
    title: 'Structured Logging on AWS ECS Fargate',
    desc: 'From noisy logs to actionable insights — a hands-on deep dive into implementing structured JSON logging on AWS ECS Fargate with FireLens, Fluent Bit, and CloudWatch Logs Insights for production observability.',
    subdesc: 'A practical engineering walkthrough covering structured log schema design, FireLens sidecar configuration, Fluent Bit routing rules, and CloudWatch Logs Insights queries — transforming raw container output into queryable, alertable observability data aligned to production SLOs.',
    link: 'https://medium.com/@talha32rehman/from-noisy-logs-to-actionable-insights-implementing-structured-logging-on-aws-ecs-fargate-179d5bd221e6',
    mediumUrl: 'https://medium.com/@talha32rehman/from-noisy-logs-to-actionable-insights-implementing-structured-logging-on-aws-ecs-fargate-179d5bd221e6',
    tags: ['AWS ECS Fargate', 'FireLens', 'Fluent Bit', 'CloudWatch Logs Insights', 'Structured Logging', 'Observability'],
    highlights: [
      'FireLens log router sidecar with custom Fluent Bit output configuration',
      'Structured JSON log schema for queryable, filterable container logs',
      'CloudWatch Logs Insights queries for error rate, latency, and SLO alerting',
      'Zero-code-change log enrichment — metadata injected at the infrastructure layer',
    ],
  },
];

export const STACK: StackCategory[] = [
  {
    category: 'Cloud',
    items: [
      'AWS (EKS, EC2, ECS, VPC, IAM, S3, RDS Aurora, ElastiCache, Route53, CloudWatch, Transit Gateway, PrivateLink)',
      'Azure (Exposure)',
    ],
  },
  {
    category: 'Kubernetes',
    items: [
      'Kubernetes',
      'Amazon EKS',
      'Helm',
      'Docker',
      'ArgoCD',
      'KEDA',
      'Cluster Autoscaler',
      'Istio Service Mesh',
      'Kyverno',
      'NetworkPolicies',
      'Pod Security Standards (PSS/PSA)',
    ],
  },
  {
    category: 'IaC & Tools',
    items: [
      'Terraform',
      'OpenTofu',
      'Terragrunt',
      'Ansible',
      'CloudFormation',
      'AWS Systems Manager (SSM)',
      'Bash Scripting',
      'Python Automation',
    ],
  },
  {
    category: 'CI / CD',
    items: [
      'GitHub Actions',
      'Jenkins',
      'CircleCI',
      'AWS CodePipeline',
      'Spacelift',
      'ArgoCD (GitOps)',
      'GitLab CI/CD Concepts',
    ],
  },
  {
    category: 'Observability',
    items: [
      'Grafana',
      'Loki',
      'Mimir',
      'Tempo',
      'Pyroscope',
      'Alloy',
      'Prometheus',
      'AWS CloudWatch',
      'Datadog',
      'Sentry',
    ],
  },
  {
    category: 'Security & Compliance',
    items: [
      'HIPAA-Aligned Infrastructure Design',
      'SOC 2 Type II Control Implementation',
      'PCI DSS Network Segmentation',
      'CIS AWS Foundations & Kubernetes Benchmarks',
      'AWS IAM (Least Privilege & Separation of Duties)',
      'KMS Policies (Key Usage Restriction by Resource/Principal)',
      'Kyverno Policy Enforcement (Audit & Enforce modes)',
      'Pod Security Standards (Restricted Profile)',
      'securityContext Hardening (non-root, capabilities drop)',
      'Default-Deny NetworkPolicies',
      'VPC Security Groups & NACLs',
      'CloudTrail Audit Logging & Change Governance',
    ],
  },
  {
    category: 'Systems & OS',
    items: [
      'Linux (Ubuntu, CentOS)',
      'DNS & Networking',
      'System Performance Analysis',
      'Windows & PowerShell Exposure',
    ],
  },
  {
    category: 'Architecture & AI',
    items: [
      'Cloud Infrastructure Design',
      'High/Low-Level Technical Design (HLD/LLD)',
      'REST API Security',
      'Microservices Architecture',
      'AI-Assisted Troubleshooting',
      'Cursor, GitHub Copilot, Claude & MCP Concepts',
    ],
  },
];
