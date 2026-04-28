/**
 * Projects list for the portfolio.
 */
const projects = [
  {
    id: '1',
    title: 'AWS Scalable Full-Stack Deployment with Monitoring & Security Hardening',
    description:
      'Production-grade Multi-AZ AWS architecture for a full-stack app with real-time Slack alerting, WAF-protected CloudFront CDN, and zero-exposure private subnets for backend and database layers.',
    highlights: [
      'Multi-AZ VPC with EC2 ASGs (frontend ALB + backend NLB), RDS MySQL/Aurora — zero-downtime via Lifecycle Hooks',
      'Real-time monitoring pipeline: CloudWatch Logs → Metric Filters → Alarms → SNS → Lambda → Slack',
      'Security hardening: IAM least privilege, SSM Parameter Store with KMS encryption, AWS WAF, private subnet isolation',
      'CloudFront CDN with ACM HTTPS, Scheduled Scaling, and optimised EBS storage for cost efficiency',
      'UserData scripts pulling config from S3; systemd-managed app services on EC2',
    ],
    tags: [
      'AWS VPC',
      'EC2',
      'ALB',
      'NLB',
      'Auto Scaling',
      'RDS',
      'CloudFront',
      'WAF',
      'CloudWatch',
      'SNS',
      'Lambda',
      'S3',
      'IAM',
      'SSM',
      'KMS',
      'ACM',
      'Slack',
      'systemd',
    ],
    architectureDiagram: '/aws-architecture.png',
    githubUrl: null,
    liveUrl: null,
  },

  {
    id: '2',
    title: 'CI/CD & GitOps Pipeline for Spring Boot on Kubernetes',
    description:
      'Fully automated CI/CD + GitOps pipeline using Jenkins and ArgoCD for a Spring Boot application, with Docker containerisation, Trivy security scanning, and real-time Slack notifications.',
    highlights: [
      'End-to-end Jenkins pipeline: Maven build, Docker image build & push to DockerHub, S3 artifact storage',
      'GitOps deployment via ArgoCD — downstream Jenkins pipeline updates Kubernetes manifests automatically',
      'Trivy container image security scanning integrated into the build gate',
      'Slack webhook notifications for real-time CI/CD pipeline status updates',
      'Versioned builds stored in AWS S3 enabling rollback and audit trail',
    ],
    tags: [
      'Jenkins',
      'ArgoCD',
      'GitOps',
      'Kubernetes',
      'Docker',
      'Spring Boot',
      'Maven',
      'Trivy',
      'AWS S3',
      'AWS EC2',
      'IAM',
      'GitHub',
      'Slack',
    ],
    architectureDiagram: '/jenkins-argocd.png', // ✅ FIXED
    githubUrl: null,
    liveUrl: null,
  },

  {
    id: '3',
    title: 'Terraform-Based AWS Infrastructure & Application Deployment',
    description:
      'Automated AWS infrastructure using Terraform (VPC, EC2, ALB, Auto Scaling, RDS), eliminating manual provisioning. Deployed React frontend and Node.js backend on EC2 using Nginx reverse proxy with CI/CD via GitHub Actions.',
    highlights: [
      'Highly available architecture with public/private subnets and load balancers',
      'CI/CD pipelines with GitHub Actions for automated build & deploy',
      'CI/CD pipeline with Jenkins integrating Maven build and SonarQube quality gates',
      'Security best practices with IAM roles, security groups, and bastion host',
      'Monitoring with Grafana & Prometheus',
    ],
    tags: [
      'Terraform',
      'AWS EC2',
      'VPC',
      'ALB',
      'Auto Scaling',
      'RDS',
      'GitHub Actions',
      'Jenkins',
      'Maven',
      'SonarQube',
      'Grafana',
      'Prometheus',
      'Nginx',
    ],
    architectureDiagram: null,
    githubUrl: null,
    liveUrl: null,
  },

  {
    id: '4',
    title: 'Scalable AWS Cloud Infrastructure (OpenTofu)',
    description:
      'Provisioned scalable AWS infrastructure using OpenTofu to enable consistent, repeatable, and automated deployments.',
    highlights: [
      'Multi-tier architecture with EC2, RDS, and S3 integration',
      'IAM roles for secure AWS service access',
      'Application Load Balancer for traffic distribution',
    ],
    tags: [
      'OpenTofu',
      'AWS EC2',
      'RDS',
      'S3',
      'IAM',
      'ALB',
      'VPC',
      'Linux',
    ],
    architectureDiagram: null,
    githubUrl: null,
    liveUrl: null,
  },

  {
    id: '5',
    title: 'Fully Managed Serverless Full-Stack Deployment',
    description:
      'Designed and deployed a fully serverless full-stack application using API Gateway, Lambda, and DynamoDB.',
    highlights: [
      'REST APIs triggering Lambda and DynamoDB',
      'Secure IAM integration',
      'Event-driven architecture',
    ],
    tags: [
      'AWS Lambda',
      'API Gateway',
      'DynamoDB',
      'Serverless',
      'Python',
    ],
    architectureDiagram: null,
    githubUrl: null,
    liveUrl: null,
  },
]

export default projects
