/**
 * Projects list for the portfolio.
 */
const projects = [
  {
    id: '1',
    title: 'Terraform-Based AWS Infrastructure & Application Deployment',
    description:
      'Automated end-to-end AWS infrastructure using Terraform, eliminating all manual provisioning. Deployed a React frontend and Node.js backend on EC2 with Nginx reverse proxy, fully monitored via Grafana & Prometheus.',
    highlights: [
      'Automated VPC, EC2, ALB, Auto Scaling, and RDS using Terraform modules',
      'Highly available architecture with public/private subnets and load balancers',
      'Deployed React frontend and Node.js backend on EC2 using Nginx reverse proxy',
      'CI/CD pipelines with GitHub Actions and Jenkins integrating Maven builds and SonarQube quality gates',
      'Security best practices: IAM roles, security groups, bastion host',
      'Real-time monitoring with Grafana & Prometheus dashboards',
    ],
    tags: [
      'Terraform', 'AWS EC2', 'VPC', 'ALB', 'Auto Scaling', 'RDS',
      'GitHub Actions', 'Jenkins', 'Maven', 'SonarQube', 'Grafana', 'Prometheus', 'Nginx',
    ],
    architectureDiagram: null,
    githubUrl: null,
    liveUrl: null,
  },
  {
    id: '2',
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
      'AWS VPC', 'EC2', 'ALB', 'NLB', 'Auto Scaling', 'RDS', 'CloudFront',
      'WAF', 'CloudWatch', 'SNS', 'Lambda', 'S3', 'IAM', 'SSM', 'KMS', 'ACM', 'Slack',
    ],
    architectureDiagram: '/aws-architecture.png',
    githubUrl: null,
    liveUrl: null,
  },
  {
    id: '3',
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
      'Jenkins', 'ArgoCD', 'GitOps', 'Kubernetes', 'Docker',
      'Spring Boot', 'Maven', 'Trivy', 'AWS S3', 'AWS EC2', 'IAM', 'GitHub', 'Slack',
    ],
    architectureDiagram: null,
    githubUrl: null,
    liveUrl: null,
  },
]

export default projects
