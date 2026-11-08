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
  caseStudy?: string;
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
  tagline: 'AWS Infrastructure · Kubernetes · DevOps · Production Reliability',
  shortBio: 'I help teams ship confidently, run reliable cloud infrastructure and make production easier to understand.',
  location: 'Remote · Available Worldwide',
  availability: 'Open to remote roles and relocation worldwide',
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
    title: 'Cloud Architecture & Infrastructure as Code',
    desc: 'Build AWS environments your team can review, reproduce and maintain, with clear network and access boundaries.',
    tags: ['AWS', 'Terraform', 'Terragrunt'],
  },
  {
    title: 'Kubernetes & Platform Security',
    desc: 'Run EKS platforms with workload isolation, managed secrets and policies that catch unsafe changes before deployment.',
    tags: ['Amazon EKS', 'Kyverno', 'Istio'],
  },
  {
    title: 'GitOps & Delivery Automation',
    desc: 'Make releases repeatable with automated checks, reviewed infrastructure changes and clear rollback paths.',
    tags: ['GitHub Actions', 'ArgoCD', 'Spacelift'],
  },
  {
    title: 'Site Reliability & Observability',
    desc: 'Connect logs, metrics and traces so engineers can investigate incidents and understand how services behave.',
    tags: ['Grafana', 'Prometheus', 'Loki'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'EKS Platform Engineering',
    desc: 'A reproducible EKS platform with private networking, workload identity and GitOps delivery, provisioned with Terraform.',
    subdesc: 'Separate Terraform roots for cluster infrastructure and Helm add-ons, with remote-state outputs connecting the layers. Includes private networking, managed node groups and an Argo CD bootstrap configuration.',
    link: 'https://github.com/JustTalhaRehman/eks-platform-engineering',
    github: 'https://github.com/JustTalhaRehman/eks-platform-engineering',
    caseStudy: '/writing/eks-platform-terraform',
    tags: ['Amazon EKS', 'Terraform', 'ArgoCD'],
    highlights: [
      'Multi-AZ private VPC with isolated node groups and NAT gateway egress',
      'IRSA binds add-on access to Kubernetes service accounts',
      'KEDA & Cluster Autoscaler for cost-efficient, demand-driven scaling',
      'Argo CD Helm bootstrap; application reconciliation requires additional configuration',
    ],
  },
  {
    title: 'Zero-Trust Kubernetes Secrets Management',
    desc: 'Deliver AWS Secrets Manager credentials to Kubernetes workloads without storing plaintext secrets in Git or container images.',
    subdesc: 'External Secrets Operator examples map AWS Secrets Manager values into Kubernetes Secrets using IRSA authentication. Workload reload behavior and namespace boundaries require explicit validation.',
    link: 'https://github.com/JustTalhaRehman/k8s-secrets-management',
    github: 'https://github.com/JustTalhaRehman/k8s-secrets-management',
    caseStudy: '/writing/kubernetes-secrets-aws',
    tags: ['External Secrets Operator', 'AWS Secrets Manager', 'IRSA'],
    highlights: [
      'External Secrets Operator pulling versioned secrets from AWS Secrets Manager',
      'Eliminates plaintext credentials from Git, manifests, and container images',
      'Scheduled secret synchronization; application reloads must be handled separately',
      'IAM and store scope determine access boundaries; review them for each namespace',
    ],
  },
  {
    title: 'Enterprise Multi-Account AWS Landing Zone',
    desc: 'A landing zone spanning 37+ AWS accounts, with isolated networks, shared connectivity and centrally managed access controls.',
    subdesc: 'Hub-and-spoke Transit Gateway topology, VPC PrivateLink for private service exposure, KMS Separation of Duties, IAM least-privilege enforcement, and CIS AWS Foundations Benchmark hardening — provisioned via modular Terraform and Terragrunt.',
    link: 'https://devistio.com/engineering#case-3',
    tags: ['Transit Gateway', 'PrivateLink', 'Terragrunt'],
    highlights: [
      'Transit Gateway hub-and-spoke mesh connecting 37+ isolated AWS accounts',
      'VPC PrivateLink & Endpoints — microservices never traverse the public internet',
      'KMS Separation of Duties — key usage restricted by resource and principal ARN',
      'Reusable DRY Terragrunt modules with PR-gated plan reviews and state locking',
    ],
  },
  {
    title: 'CIS-Hardened Kubernetes Security Platform',
    desc: 'Kubernetes admission policies and network boundaries that enforce safer workload defaults across shared EKS clusters.',
    subdesc: 'Kyverno admission controller in audit and enforce modes, mandatory non-root execution, dropped Linux capabilities, default-deny NetworkPolicies, and Istio REGISTRY_ONLY egress — defense-in-depth posture aligned to SOC 2, HIPAA, and PCI DSS.',
    link: 'https://devistio.com/engineering#case-1',
    tags: ['Kyverno', 'NetworkPolicies', 'Istio'],
    highlights: [
      'Kyverno policies enforcing CIS Benchmark & PSS Restricted across all namespaces',
      'Non-root UID enforcement and full Linux capabilities drop on every pod',
      'Default-deny ingress/egress NetworkPolicies with explicit allow rules per service',
      'Istio REGISTRY_ONLY routing, with egress gateways and network policies enforcing outbound access',
    ],
  },
  {
    title: 'Structured Logging on AWS ECS Fargate',
    desc: 'A practical guide to structured container logs on ECS Fargate using FireLens, Fluent Bit and CloudWatch Logs Insights.',
    subdesc: 'A practical engineering walkthrough covering structured log schema design, FireLens sidecar configuration, Fluent Bit routing rules, and CloudWatch Logs Insights queries — transforming raw container output into queryable, alertable observability data aligned to production SLOs.',
    link: 'https://medium.com/@talha32rehman/from-noisy-logs-to-actionable-insights-implementing-structured-logging-on-aws-ecs-fargate-179d5bd221e6',
    mediumUrl: 'https://medium.com/@talha32rehman/from-noisy-logs-to-actionable-insights-implementing-structured-logging-on-aws-ecs-fargate-179d5bd221e6',
    tags: ['ECS Fargate', 'Fluent Bit', 'CloudWatch'],
    highlights: [
      'FireLens log router sidecar with custom Fluent Bit output configuration',
      'Structured JSON log schema for queryable, filterable container logs',
      'CloudWatch Logs Insights queries for error rate, latency, and SLO alerting',
      'Zero-code-change log enrichment — metadata injected at the infrastructure layer',
    ],
  },
];

export const STACK: StackCategory[] = [
  { category: 'Cloud & Containers', items: ['AWS', 'Amazon EKS', 'Kubernetes', 'Docker', 'Helm'] },
  { category: 'Infrastructure', items: ['Terraform', 'OpenTofu', 'Terragrunt', 'Ansible'] },
  { category: 'Delivery', items: ['GitHub Actions', 'ArgoCD', 'Spacelift'] },
  { category: 'Observability', items: ['Grafana', 'Prometheus', 'Loki', 'Tempo'] },
  { category: 'Security & Systems', items: ['IAM', 'Kyverno', 'Istio', 'Linux', 'Python', 'Bash'] },
];
