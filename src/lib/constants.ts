export interface ExperienceHighlightGroup {
  category?: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  isCurrent?: boolean;
  link?: string;
  description: string;
  highlightGroups?: ExperienceHighlightGroup[];
  highlights?: string[];
}

export interface ServiceItem {
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

export interface AchievementItem {
  metric: string;
  title: string;
  detail: string;
}

export const TALHA_CONFIG = {
  name: 'Talha Rehman',
  brandName: 'Talha',
  role: 'DevOps & Platform Engineer',
  tagline: 'AWS Infrastructure • Kubernetes • Cloud Security • Automation • Reliability',
  shortBio: 'DevOps Engineer with 3+ years of hands-on experience in Platform Engineering working on multi-cloud and multi-account AWS infrastructure, Kubernetes platforms, cloud security, automation, observability, and production reliability. Operating worldwide.',
  location: 'Remote · Working Worldwide',
  availability: 'Available for DevOps & Platform Engineering Worldwide',
  email: 'talha32rehman@gmail.com',
  phone: '+92 315 6569204',
  whatsappUrl: 'https://wa.me/923156569204',
  linkedinUrl: 'https://linkedin.com/in/talha-rehman-devops',
  githubUrl: 'https://github.com/JustTalhaRehman',
  resumeUrl: '/Talha_Rehman_DevOps.pdf',
  certificateUrl: '/Talha_Rehman_AWS_DevOps_Certificate.pdf',
};

export const METRICS: MetricItem[] = [
  { value: '37+', label: 'multi-cloud & AWS accounts supported' },
  { value: '3+', label: 'years hands-on platform engineering' },
  { value: '80%', label: 'faster deployments (20m to 4m)' },
  { value: '50%', label: 'reduction in MTTR via LGTM & Datadog' },
];

export const KEY_ACHIEVEMENTS: AchievementItem[] = [
  {
    metric: '37+ Accounts',
    title: 'Multi-Cloud & Multi-Account Architecture',
    detail: 'Designed & managed multi-cloud and multi-account AWS landing zones across 37+ accounts with Transit Gateway, PrivateLink, IAM least-privilege, and Azure cloud integration.',
  },
  {
    metric: '80% Faster',
    title: 'CI/CD & GitOps Pipeline Acceleration',
    detail: 'Reduced deployment runtime from ~20 minutes to 4 minutes with automated GitHub Actions, Jenkins, CircleCI, and ArgoCD workflows.',
  },
  {
    metric: '50% Lower MTTR',
    title: 'Full Grafana LGTM Observability Stack',
    detail: 'Unified logs, metrics, distributed traces, and continuous profiling across microservices using Grafana, Loki, Mimir, Tempo, Pyroscope, and Alloy.',
  },
  {
    metric: '~20% Savings',
    title: 'Cloud Cost & Resource Optimization',
    detail: 'Achieved ~20% cloud infrastructure cost reduction through right-sizing, autoscaling policies (KEDA), and storage/compute optimization.',
  },
  {
    metric: 'Zero-Trust',
    title: 'Kubernetes Hardening & Pod Security',
    detail: 'Implemented Kyverno policy enforcement, Pod Security Standards (PSS Restricted profile), container securityContext hardening, and default-deny NetworkPolicies.',
  },
  {
    metric: 'Secured KMS',
    title: 'AWS KMS Separation of Duties Control',
    detail: 'Designed and implemented explicit IAM & KMS key policy Deny controls separating Key Administration from Data-use permissions via reviewable Terraform IaC.',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'Enterprise Multi-Cloud & Multi-Account Platform',
    role: 'DevOps & Platform Engineer',
    period: 'Jan 2023 – Present',
    location: 'Remote · Worldwide',
    isCurrent: true,
    description: 'Operating on the engineering side of multi-cloud and multi-account cloud architecture across 37+ AWS & Azure accounts, production Amazon EKS clusters, Kubernetes security hardening, Istio egress controls, and GitOps automation.',
    highlights: [
      'Cloud Infrastructure & Solution Design: Designed and supported cloud infrastructure across 37+ AWS accounts (EKS, EC2, ECS, VPC, RDS Aurora, S3, IAM, Route53, CloudWatch, ElastiCache, Transit Gateway, and PrivateLink) using modular Terraform, OpenTofu, and Terragrunt.',
      'Cross-Account Networking: Designed and maintained secure cross-account connectivity using AWS Transit Gateway, VPC PrivateLink, and tight Security Groups for distributed enterprise environments.',
      'Kubernetes Security Hardening: Enforced cluster-wide security policies with Kyverno, applied Pod Security Standards (PSS) & Pod Security Admission (PSA) with restricted enforcement for sensitive PHI workloads, and prepared securityContext container hardening.',
      'Default-Deny Network Policies: Implemented and tested default-deny NetworkPolicies, replacing permissive communication with explicitly approved DNS, Istio control-plane, and application-to-application traffic.',
      'Istio Egress & Outbound Traffic: Investigated unrestricted Istio egress (ALLOW_ANY) and designed a phased transition toward an allow-list model (REGISTRY_ONLY) via ServiceEntries and tightened VPC endpoints.',
      'AWS KMS Separation of Duties: Designed and deployed explicit KMS key policy Deny controls to prevent administrative principals from having data-use permissions, managed purely via version-controlled Terraform.',
      'CI/CD & Delivery Acceleration: Automated release pipelines using GitHub Actions, Jenkins, CircleCI, AWS CodePipeline, Spacelift, and ArgoCD; cut deployment cycle from ~20m to 4m (80% faster) supporting 50+ weekly deployments.',
      'Observability & Production Reliability: Built centralized observability using the Grafana LGTM stack (Grafana, Loki, Mimir, Tempo, Pyroscope, Alloy), Datadog, Prometheus, CloudWatch, and Sentry; cut MTTR by ~50% through unified telemetry correlation.',
      'Production Troubleshooting: Performed root cause analysis across workloads, Helm template rendering bugs, storage dependencies, and networking issues with a blameless, systematic engineering approach.',
    ],
  },
  {
    company: 'Cloud Infrastructure & Automation Engineering',
    role: 'Cloud & DevOps Engineer',
    period: '2023 – March 2024',
    location: 'Remote · Worldwide',
    isCurrent: false,
    description: 'Designed and delivered scalable cloud infrastructure and automation solutions for independent platforms, client environments, and distributed workloads.',
    highlights: [
      'AWS Cloud Provisioning: Built repeatable AWS-based environments (EC2, VPC, S3, IAM, CloudWatch) using modular Terraform and Infrastructure as Code principles.',
      'Automated CI/CD Pipelines: Designed and automated application build and deployment workflows using GitHub Actions and Jenkins with Docker containerization.',
      'Kubernetes Deployments: Worked with containerized applications in Kubernetes deployment environments, ensuring clean service discovery and zero-downtime rolling updates.',
      'Monitoring & Logging: Built operational monitoring and centralized logging environments using Prometheus, Grafana, and AWS CloudWatch.',
      'Automation Tooling: Developed Python and Bash scripts for automated backups, system maintenance, infrastructure tasks, and rapid troubleshooting.',
      'End-to-End Ownership: Took complete ownership from technical requirements gathering and gap analysis through solution design, testing, validation, and delivery.',
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'AWS Multi-Account Architecture',
    desc: 'Scalable landing zones across 37+ accounts using EKS, VPC, Transit Gateway, PrivateLink, RDS Aurora, and IAM least-privilege.',
    tags: ['AWS EKS', 'Transit Gateway', 'PrivateLink', 'Aurora RDS', 'VPC Peering', 'Multi-Account'],
  },
  {
    title: 'Kubernetes Platform & DevSecOps',
    desc: 'Production EKS engineering with Kyverno policy admission, Pod Security Standards (PSS Restricted), securityContext, and default-deny NetworkPolicies.',
    tags: ['Amazon EKS', 'Kyverno', 'PSS Restricted', 'NetworkPolicies', 'Helm', 'KEDA'],
  },
  {
    title: 'Istio & Egress Network Security',
    desc: 'Controlling service mesh traffic, migrating unrestricted ALLOW_ANY egress to REGISTRY_ONLY allow-lists via ServiceEntries, and VPC endpoints.',
    tags: ['Istio', 'ServiceEntries', 'Egress Gateway', 'VPC Endpoints', 'Security Groups'],
  },
  {
    title: 'GitOps & CI/CD Delivery Acceleration',
    desc: 'Automated release pipelines cutting deployment times by 80% (20m to 4m) with GitHub Actions, ArgoCD, Jenkins, and Spacelift.',
    tags: ['GitHub Actions', 'ArgoCD', 'Jenkins', 'CircleCI', 'Spacelift', 'GitOps'],
  },
  {
    title: 'Full Grafana LGTM Observability',
    desc: 'Centralized telemetry reducing MTTR by ~50% across distributed microservices through unified logs, metrics, traces, and continuous profiling.',
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
    title: 'CI/CD Portfolio Platform',
    desc: 'End-to-end automated CI/CD platform using GitHub Actions to automate application builds and deployments across development, staging, and production.',
    subdesc: 'Environment-specific pipelines, automated testing, containerized verification, Trivy vulnerability scans, and staging-to-production approval gates supporting 100+ builds per month.',
    link: 'https://github.com/JustTalhaRehman/Talha-s-CI-CD-Portfolio',
    github: 'https://github.com/JustTalhaRehman/Talha-s-CI-CD-Portfolio',
    tags: ['GitHub Actions', 'Docker', 'Kubernetes', 'CI/CD', 'Automated Testing', 'Trivy', 'Slack Alerts'],
  },
  {
    title: 'Observability Platform – Grafana LGTM Stack',
    desc: 'Centralized telemetry pipeline aggregating logs, metrics, distributed traces, and continuous profiling for cloud-native workloads.',
    subdesc: 'Architected with Grafana, Loki, Mimir, Tempo, Alloy collector, and Prometheus to correlate logs, metrics, and distributed traces from a unified observability environment.',
    link: 'https://github.com/JustTalhaRehman/observability-stack',
    github: 'https://github.com/JustTalhaRehman/observability-stack',
    tags: ['Grafana', 'Loki', 'Mimir', 'Tempo', 'Alloy', 'Prometheus', 'Distributed Tracing'],
  },
  {
    title: 'Enterprise 37-Account AWS Landing Zone',
    desc: 'Multi-account AWS infrastructure supporting distributed enterprise microservices with hub-and-spoke networking topology.',
    subdesc: 'Configured with AWS Transit Gateway, VPC PrivateLink endpoints, IAM least-privilege, and KMS Separation of Duties controls provisioned via Terraform and Terragrunt.',
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
    tags: ['Kyverno', 'PSS Restricted', 'PSA', 'NetworkPolicies', 'Istio Egress', 'EKS'],
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

export const EDUCATION_AND_CERTS = {
  education: {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'University of Management and Technology (UMT)',
    period: '2020 – 2024',
    location: 'Remote & Hybrid Studies',
  },
  certifications: [
    {
      name: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      file: '/Talha_Rehman_AWS_DevOps_Certificate.pdf',
    },
    {
      name: 'AWS DevOps & Cloud Engineering',
      issuer: 'Corvit Systems',
      file: '/Talha_Rehman_AWS_DevOps_Certificate.pdf',
    },
  ],
};
