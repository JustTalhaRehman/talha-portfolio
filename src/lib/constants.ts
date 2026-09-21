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
  tags: string[];
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
  tagline: 'Multi-Cloud Infrastructure · Kubernetes · Production Reliability',
  shortBio: 'DevOps & Platform Engineer operating across multi-account AWS, Kubernetes (EKS), Terraform, and GitOps for high-scale distributed systems worldwide.',
  location: 'Remote · Working Worldwide',
  availability: 'Available for Cloud & Platform Engineering Worldwide',
  email: 'talha@devistio.com',
  phone: '+92 315 6569204',
  whatsappUrl: 'https://wa.me/923156569204',
  linkedinUrl: 'https://linkedin.com/in/talha-rehman-devops',
  githubUrl: 'https://github.com/JustTalhaRehman',
  resumeUrl: 'mailto:talha@devistio.com?subject=Request%20for%20CV%20%E2%80%94%20Talha%20Rehman&body=Hi%20Talha%2C%0A%0AI%20came%20across%20your%20portfolio%20(talha.devistio.com)%20and%20would%20like%20to%20request%20an%20updated%20copy%20of%20your%20CV%20%2F%20Resume.%0A%0ALooking%20forward%20to%20connecting%20with%20you.%0A%0ABest%20regards%2C',
};

export const METRICS: MetricItem[] = [
  { value: '37+', label: 'multi-cloud & AWS accounts managed' },
  { value: '3+', label: 'years building platform systems' },
  { value: '80%', label: 'faster automated CI/CD runs' },
  { value: '99.99%', label: 'production platform uptime' },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    title: 'Multi-Cloud & AWS Architecture',
    desc: 'Scalable multi-account landing zones across 37+ accounts with Amazon EKS, VPC, Transit Gateway, PrivateLink, and RDS Aurora.',
    tags: ['AWS EKS', 'Transit Gateway', 'PrivateLink', 'Aurora RDS', 'VPC Networking', 'Azure Exposure'],
  },
  {
    title: 'Kubernetes Platforms & DevSecOps',
    desc: 'Production EKS engineering with Kyverno policy enforcement, Pod Security Standards (PSS Restricted profile), and default-deny NetworkPolicies.',
    tags: ['Amazon EKS', 'Kyverno', 'PSS Restricted', 'NetworkPolicies', 'Helm', 'KEDA'],
  },
  {
    title: 'Istio & Egress Network Security',
    desc: 'Controlling service mesh traffic, migrating unrestricted ALLOW_ANY outbound traffic to REGISTRY_ONLY allow-lists via ServiceEntries and VPC endpoints.',
    tags: ['Istio', 'ServiceEntries', 'Egress Gateway', 'VPC Endpoints', 'Security Groups'],
  },
  {
    title: 'GitOps & CI/CD Delivery Acceleration',
    desc: 'Automated release pipelines cutting deployment runtime from 20m to 4m (80% faster) using GitHub Actions, ArgoCD, Jenkins, and Spacelift.',
    tags: ['GitHub Actions', 'ArgoCD', 'Jenkins', 'CircleCI', 'Spacelift', 'GitOps'],
  },
  {
    title: 'Full Grafana LGTM Observability',
    desc: 'Centralized telemetry reducing MTTR by ~50% across microservices through unified logs, metrics, distributed traces, and continuous profiling.',
    tags: ['Grafana', 'Loki', 'Mimir', 'Tempo', 'Pyroscope', 'Alloy', 'Datadog'],
  },
  {
    title: 'Infrastructure as Code & Governance',
    desc: 'Modular, version-controlled IaC using Terraform, OpenTofu, and Terragrunt with state locking, reviewable pull requests, and automated validation.',
    tags: ['Terraform', 'OpenTofu', 'Terragrunt', 'Ansible', 'AWS SSM', 'Python Automation'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'EKS Platform Engineering',
    desc: 'Production-ready Terraform infrastructure for deploying Amazon EKS clusters with essential platform add-ons and GitOps automation.',
    subdesc: 'Two-tier architecture featuring IRSA security, multi-AZ VPC networking, External DNS, External Secrets, Cluster Autoscaler, KEDA, and ArgoCD for scalable Kubernetes platforms on AWS.',
    link: 'https://github.com/JustTalhaRehman/eks-platform-engineering',
    github: 'https://github.com/JustTalhaRehman/eks-platform-engineering',
    tags: ['Amazon EKS', 'Terraform', 'ArgoCD', 'KEDA', 'IRSA', 'Cluster Autoscaler'],
  },
  {
    title: 'Kubernetes Secrets Management',
    desc: 'Production-ready secrets synchronization from AWS Secrets Manager to Kubernetes without storing sensitive credentials in Git.',
    subdesc: 'Leverages External Secrets Operator and IAM Roles for Service Accounts (IRSA) for secure, credential-less authentication and automated secret rotation.',
    link: 'https://github.com/JustTalhaRehman/k8s-secrets-management',
    github: 'https://github.com/JustTalhaRehman/k8s-secrets-management',
    tags: ['Kubernetes', 'External Secrets', 'AWS Secrets Manager', 'IRSA', 'IAM', 'Security'],
  },
  {
    title: 'Enterprise Multi-Account AWS Landing Zone',
    desc: 'Production multi-account cloud platform supporting distributed enterprise workloads with hub-and-spoke networking topology.',
    subdesc: 'Configured with AWS Transit Gateway, VPC PrivateLink endpoints, IAM least-privilege, and KMS Separation of Duties controls provisioned via modular Terraform and Terragrunt.',
    link: 'https://github.com/JustTalhaRehman',
    github: 'https://github.com/JustTalhaRehman',
    tags: ['AWS EKS', 'Transit Gateway', 'PrivateLink', 'KMS Policies', 'Terraform', 'Terragrunt'],
  },
  {
    title: 'Kubernetes Kyverno & Pod Security Hardening',
    desc: 'Policy-as-code admission control enforcing Pod Security Standards Restricted profile and default-deny NetworkPolicies across clusters.',
    subdesc: 'Enforces non-root execution, drops Linux capabilities, isolates sensitive namespaces, and restricts egress traffic via Istio REGISTRY_ONLY configuration.',
    link: 'https://github.com/JustTalhaRehman',
    github: 'https://github.com/JustTalhaRehman',
    tags: ['Kyverno', 'PSS Restricted', 'PSA', 'NetworkPolicies', 'Istio Egress', 'Amazon EKS'],
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
    category: 'Security',
    items: [
      'AWS IAM (Least Privilege)',
      'KMS Policies (Separation of Duties)',
      'Kyverno Policy Enforcement',
      'Pod Security Standards (Restricted)',
      'securityContext Hardening',
      'Default-Deny NetworkPolicies',
      'VPC Security, Security Groups & NACLs',
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
