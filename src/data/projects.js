/**
 * Projects list for the portfolio.
 * Rendered on the Projects page as cards.
 */
const projects = [
  {
    id: '1',
    title: 'Terraform-Based AWS Infrastructure & Application Deployment',
    description:
      'Automated AWS infrastructure using Terraform (VPC, EC2, ALB, Auto Scaling, RDS), eliminating manual provisioning. Deployed React frontend and Node.js backend on EC2 using Nginx reverse proxy with CI/CD via GitHub Actions.',
    highlights: [
      'Highly available architecture with public/private subnets and load balancers',
      'CI/CD pipelines with GitHub Actions for automated build & deploy',
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
      'Grafana',
      'Prometheus',
    ],
    imageUrl: null,
    githubUrl: null,
    liveUrl: null,
  },
  {
    id: '2',
    title: 'Scalable AWS Cloud Infrastructure (OpenTofu)',
    description:
      'Provisioned scalable AWS infrastructure using OpenTofu to enable consistent, repeatable, and automated deployments. Designed a multi-tier architecture integrating EC2, RDS, and S3.',
    highlights: [
      'Multi-tier architecture with EC2, RDS, and S3 integration',
      'IAM roles for secure AWS service access without hardcoded credentials',
      'Application Load Balancer for traffic distribution',
      'VPC security groups enforcing least-privilege network access',
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
    imageUrl: null,
    githubUrl: null,
    liveUrl: null,
  },
  {
    id: '3',
    title: 'Fully Managed Serverless Full-Stack Deployment',
    description:
      'Designed and deployed a fully serverless full-stack application using API Gateway, Lambda, and DynamoDB, eliminating server management overhead entirely.',
    highlights: [
      'REST APIs triggering Lambda for input validation and DynamoDB persistence',
      'IAM roles and Lambda proxy integration for secure communication',
      'Event-driven workflow with API Gateway handling HTTP requests',
      'Scalable event-driven processing architecture',
    ],
    tags: [
      'AWS Lambda',
      'API Gateway',
      'DynamoDB',
      'IAM',
      'Serverless',
      'Python',
      'REST APIs',
    ],
    imageUrl: null,
    githubUrl: null,
    liveUrl: null,
  },
]

export default projects
