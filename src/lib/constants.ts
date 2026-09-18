export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  link?: string;
  description: string;
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

export const TALHA_CONFIG = {
  name: 'Talha Rehman',
  brandName: 'Talha.',
  role: 'DevOps & Platform Engineer',
  tagline: 'I build resilient, automated cloud platforms and zero-trust infrastructure. No manual ops, no downtime.',
  shortBio: 'Based in Gujranwala, Pakistan. Operating across AWS multi-account, Kubernetes (EKS), Terraform, and GitOps for enterprise production systems.',
  location: 'Gujranwala, Pakistan',
  availability: 'Available for cloud & DevOps work',
  email: 'talha32rehman@gmail.com',
  phone: '+92 315 6569204',
  whatsappUrl: 'https://wa.me/923156569204',
  linkedinUrl: 'https://linkedin.com/in/talha-rehman-devops',
  githubUrl: 'https://github.com/JustTalhaRehman',
  resumeUrl: '/Talha_Rehman_Resume.docx',
  certificateUrl: '/Talha_Rehman_AWS_DevOps_Certificate.pdf',
};

export const METRICS: MetricItem[] = [
  { value: '37', label: 'enterprise AWS accounts managed' },
  { value: '2.5+', label: 'years building cloud systems' },
  { value: '80%', label: 'faster deployment pipeline runs' },
  { value: '99.99%', label: 'production platform availability' },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'DevSoul Technologies',
    role: 'DevOps Engineer',
    period: 'April 2024 – Present',
    isCurrent: true,
    link: 'https://devsoul.net',
    description: 'Supporting enterprise-scale healthcare cloud platform across 37 AWS accounts with high-availability Kubernetes and zero-trust networking.',
    highlights: [
      'Architected multi-account AWS landing zones using Transit Gateway, PrivateLink, IAM least-privilege, and VPC peering.',
      'Reduced deployment time from 20m to 4m with GitHub Actions, CircleCI, Spacelift, and ArgoCD while eliminating 95% of manual release errors.',
      'Deployed unified Grafana LGTM stack, reducing Mean Time to Recovery (MTTR) by 50% across distributed microservices.',
      'Enforced Kyverno Pod Security Standards (PSS Restricted) and automated admission control for HIPAA/PHI compliance.',
    ],
  },
  {
    company: 'Devistio',
    role: 'Founder & Lead Platform Engineer',
    period: 'January 2024 – Present',
    isCurrent: true,
    link: 'https://devistio.com',
    description: 'Providing specialized B2B DevOps consulting, automated IaC architecture, and Kubernetes hardening for high-growth tech companies.',
    highlights: [
      'Built reusable Terraform modules for automated multi-region VPCs, EKS clusters, and RDS Aurora databases.',
      'Implemented ephemeral STS authentication via OIDC federation, eliminating 100% of stored static AWS credentials.',
    ],
  },
  {
    company: 'University of Management and Technology (UMT)',
    role: 'DevOps Engineer',
    period: 'January 2022 – October 2024',
    isCurrent: false,
    description: 'Managed production AWS EKS environments, CI/CD pipelines, and infrastructure automation for university applications.',
    highlights: [
      'Administered production EKS clusters, ensuring high scalability and 99.9% uptime during peak enrollment windows.',
      'Developed reusable Terraform modules that reduced infrastructure provisioning time by ~30%.',
      'Configured CloudWatch and Prometheus monitoring with proactive alerting to resolve incidents before user impact.',
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Cloud platforms that stay up',
    desc: 'AWS multi-account architectures, EKS, RDS Aurora, ElastiCache, Transit Gateway, and PrivateLink.',
    tags: ['AWS EKS', 'Transit Gateway', 'PrivateLink', 'Aurora RDS', 'VPC Networking'],
  },
  {
    title: 'GitOps & delivery pipelines',
    desc: 'Automated CI/CD workflows with ephemeral OIDC credentials, security scans, and zero-downtime releases.',
    tags: ['GitHub Actions', 'ArgoCD', 'Helm', 'Spacelift', 'OIDC STS'],
  },
  {
    title: 'Zero-trust & cluster security',
    desc: 'Kyverno policy enforcement, Pod Security Standards (PSS/PSA), IAM least-privilege, and secrets isolation.',
    tags: ['Kyverno', 'PSS Restricted', 'IAM Least-Privilege', 'Trivy', 'KMS'],
  },
  {
    title: 'Observability that cuts MTTR',
    desc: 'Centralized metrics, distributed tracing, continuous profiling, and log aggregation across all microservices.',
    tags: ['Grafana LGTM', 'Prometheus', 'Loki', 'Tempo', 'Mimir', 'Datadog'],
  },
  {
    title: 'Infrastructure as Code',
    desc: 'Modular, versioned Terraform and OpenTofu libraries with state locking, tfsec, and automated plan reviews.',
    tags: ['Terraform', 'OpenTofu', 'Terragrunt', 'tfsec', 'Checkov'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Talha's CI/CD Portfolio Platform",
    desc: 'End-to-end multi-environment CI/CD platform using GitHub Actions, Terraform, Kubernetes, and AWS.',
    subdesc: 'Features automated linting, containerized testing (Postgres + Redis), Trivy filesystem vulnerability scans, ECR image push, and staging-to-production manual approval gates with Slack notifications.',
    link: 'https://github.com/JustTalhaRehman/Talha-s-CI-CD-Portfolio',
    github: 'https://github.com/JustTalhaRehman/Talha-s-CI-CD-Portfolio',
    tags: ['GitHub Actions', 'Terraform', 'AWS EKS', 'Trivy', 'Docker', 'Slack Webhooks'],
  },
  {
    title: 'Grafana LGTM Observability Stack',
    desc: 'Complete production telemetry pipeline aggregating metrics, logs, distributed traces, and continuous profiling.',
    subdesc: 'Combines Grafana, Loki, Tempo, Mimir, Alloy collector, and Pyroscope with preconfigured alerts and SLI/SLO dashboards for distributed microservices.',
    link: 'https://github.com/JustTalhaRehman/observability-stack',
    github: 'https://github.com/JustTalhaRehman/observability-stack',
    tags: ['Grafana', 'Loki', 'Tempo', 'Mimir', 'Alloy', 'Prometheus', 'Kubernetes'],
  },
  {
    title: 'Enterprise 37-Account AWS Landing Zone',
    desc: 'Production multi-account cloud platform for healthcare workloads with hub-and-spoke network topology.',
    subdesc: 'Utilizes AWS Transit Gateway, VPC PrivateLink endpoints, IAM Identity Center (SSO), and automated Systems Manager (SSM) agent synchronization with zero SSH exposure.',
    link: 'https://github.com/JustTalhaRehman/aws-multi-account-landing-zone',
    github: 'https://github.com/JustTalhaRehman/aws-multi-account-landing-zone',
    tags: ['AWS Organizations', 'Transit Gateway', 'PrivateLink', 'SSM', 'Terraform'],
  },
  {
    title: 'Kubernetes Kyverno PSS Security Hardening',
    desc: 'Policy-as-code admission control enforcing Pod Security Standards Restricted profile across clusters.',
    subdesc: 'Blocks privileged containers, enforces non-root execution, validates read-only root filesystems, drops Linux capabilities, and isolates PHI sensitive namespaces.',
    link: 'https://github.com/JustTalhaRehman/k8s-security-kyverno',
    github: 'https://github.com/JustTalhaRehman/k8s-security-kyverno',
    tags: ['Kyverno', 'PSS Restricted', 'Pod Security Admission', 'Cosign', 'EKS'],
  },
];

export const STACK: StackCategory[] = [
  {
    category: 'Cloud',
    items: ['AWS (EKS, EC2, ECS, RDS, S3, IAM, VPC, Route 53, Transit Gateway, PrivateLink)', 'Azure (AKS)'],
  },
  {
    category: 'Kubernetes',
    items: ['Kubernetes', 'Docker', 'Helm', 'ArgoCD', 'KEDA', 'Cluster Autoscaler', 'Kyverno'],
  },
  {
    category: 'IaC',
    items: ['Terraform', 'OpenTofu', 'Spacelift', 'Ansible'],
  },
  {
    category: 'CI / CD',
    items: ['GitHub Actions', 'Jenkins', 'CircleCI', 'GitLab CI', 'AWS CodePipeline'],
  },
  {
    category: 'Observability',
    items: ['Grafana LGTM (Loki, Tempo, Mimir, Alloy, Pyroscope)', 'Prometheus', 'Datadog', 'CloudWatch'],
  },
  {
    category: 'Security',
    items: ['Kyverno (PSS/PSA)', 'AWS STS OIDC', 'Trivy', 'tfsec', 'Checkov', 'IAM Least-Privilege'],
  },
  {
    category: 'Scripting & OS',
    items: ['Linux (Ubuntu/Debian/CentOS)', 'Bash', 'Python', 'Git'],
  },
];
