export const ENGINEERING_NOTES = [
  {
    "slug": "eks-platform-terraform",
    "title": "EKS with Terraform: separating cluster infrastructure from add-ons",
    "description": "A source-linked walkthrough of an EKS platform: separate Terraform roots, remote state, node groups, IAM and the checks needed before production.",
    "kind": "Project walkthrough",
    "intro": "An EKS cluster and the controllers running inside it have different dependencies. In this repository, I separate the AWS foundation from the Helm add-ons so each layer has a clear place in the change process.",
    "flow": [
      "Cluster Terraform root",
      "VPC + EKS + IAM",
      "Published state outputs",
      "Add-ons Terraform root",
      "Helm controllers"
    ],
    "sections": [
      {
        "title": "The problem this structure addresses",
        "text": "A Kubernetes or Helm provider needs a reachable cluster before it can manage resources. Keeping the cluster and its add-ons in separate Terraform roots makes that dependency explicit. The add-ons root reads the cluster name, endpoint and identity outputs from remote state instead of asking an engineer to copy them between files.",
        "checks": [
          "Review cluster changes separately from controller upgrades.",
          "Apply the cluster layer before initializing providers that connect to it.",
          "Protect the state backend and review access to state snapshots."
        ]
      },
      {
        "title": "What the code actually contains",
        "text": "The cluster module creates private and public subnets, managed node groups and EKS add-ons. System nodes have a CriticalAddonsOnly taint; application nodes use Spot capacity. The VPC configuration selects a single NAT gateway outside production and disables that single-gateway setting for production.",
        "checks": [
          "Verify system workloads have suitable tolerations.",
          "Plan for Spot interruptions and choose appropriate workload availability settings.",
          "Check the installed configuration rather than assuming the README describes every default."
        ]
      },
      {
        "title": "The boundary I would review before handover",
        "text": "The public example includes broad Secrets Manager permissions for the External Secrets role. Those permissions need narrowing to the intended accounts, regions and secret resources. A private cluster endpoint also requires a working network path from the machine or runner applying the add-ons.",
        "checks": [
          "Replace example backend configuration and inspect the effective IAM policy.",
          "Confirm cluster endpoint access, DNS resolution and runner connectivity.",
          "Test a controller upgrade, workload rollout and recovery path in staging."
        ]
      },
      {
        "title": "What this example proves",
        "text": "The source demonstrates a two-layer infrastructure layout and the intended controller configuration. It does not establish a measured provisioning time, production uptime or benchmark result. Those depend on a deployed environment and recorded validation.",
        "checks": []
      }
    ],
    "code": "terraform -chdir=terraform/cluster init\nterraform -chdir=terraform/cluster validate\nterraform -chdir=terraform/addons init\nterraform -chdir=terraform/addons validate",
    "codeLabel": "Validation steps for a configured sandbox; initialization needs backend and provider access.",
    "sources": [
      {
        "label": "Cluster and network configuration",
        "url": "https://github.com/JustTalhaRehman/eks-platform-engineering/blob/aa69b60067f618d8fe67d65b258d7a4c18352b89/terraform/cluster/cluster.tf"
      },
      {
        "label": "Remote state dependency",
        "url": "https://github.com/JustTalhaRehman/eks-platform-engineering/blob/aa69b60067f618d8fe67d65b258d7a4c18352b89/terraform/addons/data_sources.tf"
      },
      {
        "label": "External Secrets IAM example",
        "url": "https://github.com/JustTalhaRehman/eks-platform-engineering/blob/aa69b60067f618d8fe67d65b258d7a4c18352b89/terraform/addons/external-secrets-operator.tf"
      }
    ],
    "service": "cloud-infrastructure",
    "related": "kubernetes-secrets-aws"
  },
  {
    "slug": "kubernetes-secrets-aws",
    "title": "Kubernetes secrets with AWS Secrets Manager: sync is only half the workflow",
    "description": "How External Secrets Operator and IRSA fit together, where namespace boundaries matter and why secret rotation also needs application reload handling.",
    "kind": "Project walkthrough",
    "intro": "Keeping credentials out of Git is a useful starting point. The rest of the workflow needs just as much care: who can read each secret, how it reaches Kubernetes and when the application starts using a changed value.",
    "flow": [
      "AWS Secrets Manager",
      "IRSA authentication",
      "External Secrets Operator",
      "Kubernetes Secret",
      "Application consumption"
    ],
    "sections": [
      {
        "title": "Follow a single credential",
        "text": "The repository defines an ExternalSecret that maps the password and username properties of myapp/database into a Kubernetes Secret. Its refresh interval is one hour. A ClusterSecretStore supplies the AWS provider settings and references the service account used for authentication.",
        "checks": [
          "Match the store name, region and remote secret path.",
          "Check that the IAM role trusts the exact service account and namespace.",
          "Keep secret values out of commits, screenshots and diagnostic output."
        ]
      },
      {
        "title": "Make namespace isolation real",
        "text": "A shared ClusterSecretStore is a different trust decision from a namespace-scoped SecretStore. The example namespace-scoped store needs review: its service-account reference points to the operator namespace. For namespace-scoped authentication, align the service account, store and workload namespace with the supported provider configuration.",
        "checks": [
          "Review which teams can create ExternalSecret resources against a shared store.",
          "Scope IAM permissions to the secrets the integration actually needs.",
          "Render Helm templates and verify resource names before applying them."
        ]
      },
      {
        "title": "Plan the application side of rotation",
        "text": "A refreshed Kubernetes Secret does not automatically replace environment variables in an already running container. Applications consuming mounted files also need a reload strategy. Decide whether the workload can reload configuration or needs a controlled rollout, then test the complete rotation path.",
        "checks": [
          "Measure provider update, controller reconciliation and application adoption separately.",
          "Check readiness and database connection behavior during a credential change.",
          "Define recovery steps for denied AWS access or a failed application reload."
        ]
      },
      {
        "title": "What I can demonstrate from this repository",
        "text": "The example shows the secret mapping and intended IRSA integration. It does not include runtime evidence of automatic rotation, zero downtime or a compliance audit. I treat those as separate validation work rather than outcomes implied by installing an operator.",
        "checks": []
      }
    ],
    "code": "kubectl -n myapp get externalsecret myapp-database\nkubectl -n myapp describe externalsecret myapp-database",
    "codeLabel": "Inspect reconciliation status in an authorized sandbox; do not print Secret payloads.",
    "sources": [
      {
        "label": "ExternalSecret example at the reviewed commit",
        "url": "https://github.com/JustTalhaRehman/k8s-secrets-management/blob/6538959e14066804baa8fa88337cc8691824926c/examples/external-secret.yaml"
      },
      {
        "label": "Namespace-scoped store example",
        "url": "https://github.com/JustTalhaRehman/k8s-secrets-management/blob/6538959e14066804baa8fa88337cc8691824926c/examples/secret-store.yaml"
      },
      {
        "label": "AWS authentication and IAM guidance",
        "url": "https://external-secrets.io/latest/provider/aws-secrets-manager/"
      },
      {
        "label": "Kubernetes Secret consumption behavior",
        "url": "https://kubernetes.io/docs/concepts/configuration/secret/"
      }
    ],
    "service": "platform-engineering",
    "related": "gitops-bootstrap"
  },
  {
    "slug": "gitops-bootstrap",
    "title": "Argo CD bootstrap: what installing the chart does, and what it does not",
    "description": "A practical review of Argo CD bootstrap on EKS: Helm ownership, application reconciliation, access controls, rollout checks and recovery responsibilities.",
    "kind": "Engineering note",
    "intro": "Installing Argo CD gives a team a controller. A usable delivery workflow also needs an application definition, repository access, promotion rules and an agreed recovery path. I keep those responsibilities separate when reviewing a platform.",
    "flow": [
      "Terraform foundation",
      "Helm installation",
      "Argo CD controller",
      "Application configuration",
      "Reconciliation + recovery"
    ],
    "sections": [
      {
        "title": "Start with the checked-in evidence",
        "text": "The public EKS repository installs the Argo CD Helm chart from the add-ons Terraform root and configures an internal ALB ingress. The reviewed source does not include an app-of-apps repository or a complete staging-to-production promotion workflow. Those would be additional delivery configuration.",
        "checks": [
          "Document which resources Terraform owns and which Argo CD owns.",
          "Avoid letting both tools reconcile the same application resources.",
          "Check the repository contents before describing a bootstrap as complete GitOps delivery."
        ]
      },
      {
        "title": "Resolve access before exposing a dashboard",
        "text": "The example sets server.insecure for the Argo CD server. This needs an explicit TLS termination and authentication design; an internal ingress is not a substitute for either. Review certificate handling, SSO or account permissions, and which network paths can reach the service.",
        "checks": [
          "Verify encryption at the intended boundary and restrict dashboard access.",
          "Limit repository credentials and deployment permissions to the required scope.",
          "Confirm that the team can recover access without relying on one person."
        ]
      },
      {
        "title": "Test the failure path as well as the happy path",
        "text": "A useful acceptance test changes one service, observes reconciliation and checks what happens when health checks fail. Decide whether rollback means reverting Git, selecting a previous artifact or following an application-specific recovery procedure. Database changes may need their own plan.",
        "checks": [
          "Use a small staging application with a known healthy revision.",
          "Observe a failed rollout and verify the documented recovery procedure.",
          "Record the starting conditions before comparing deployment durations."
        ]
      },
      {
        "title": "A handover your team can use",
        "text": "I would hand over ownership boundaries, the application onboarding procedure and the recovery steps alongside the chart configuration. The repository is evidence of the bootstrap layer, not proof of a particular release frequency or recovery time.",
        "checks": []
      }
    ],
    "code": "kubectl -n argocd get deployments\nkubectl -n argocd get applications",
    "codeLabel": "Read-only checks after installation; application resources appear only after they are configured.",
    "sources": [
      {
        "label": "Argo CD Helm installation at the reviewed commit",
        "url": "https://github.com/JustTalhaRehman/eks-platform-engineering/blob/aa69b60067f618d8fe67d65b258d7a4c18352b89/terraform/addons/argocd.tf"
      },
      {
        "label": "Platform repository architecture",
        "url": "https://github.com/JustTalhaRehman/eks-platform-engineering/blob/aa69b60067f618d8fe67d65b258d7a4c18352b89/docs/architecture.md"
      },
      {
        "label": "Argo CD declarative setup documentation",
        "url": "https://argo-cd.readthedocs.io/en/stable/operator-manual/declarative-setup/"
      }
    ],
    "service": "devops-consulting",
    "related": "eks-platform-terraform"
  }
];

export type NoteSlug = "eks-platform-terraform" | "kubernetes-secrets-aws" | "gitops-bootstrap";
