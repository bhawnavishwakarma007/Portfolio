/**
 * Profile / About data for the portfolio.
 * Used on Home, About, and optionally Contact.
 */
const profile = {
  name: 'Bhawna Vishwakarma',
  tagline: 'Cloud & DevOps Engineer',
  bio: `I build and automate cloud infrastructure using Terraform, OpenTofu, and AWS.
    I focus on CI/CD, infrastructure as code, and serverless architectures. Currently pursuing
    Bachelor of Technology in Computer Science.`,
  bioParagraphs: [
    'I am a passionate Cloud & DevOps Engineer with a strong foundation in designing, automating, and managing scalable cloud infrastructure on AWS. I specialize in Infrastructure as Code using Terraform and OpenTofu, building robust CI/CD pipelines, and deploying serverless architectures.',
    'My focus is on eliminating manual provisioning through automation, implementing security best practices with IAM roles and least-privilege access, and monitoring systems using Grafana and Prometheus. I enjoy building highly available, fault-tolerant systems that scale.',
    'Currently pursuing my Bachelor of Technology in Computer Science at Eklavya University, I am constantly learning and exploring new technologies in cloud computing, serverless computing, and DevOps methodologies.',
  ],
  imageUrl: '/vite.svg',
  resumeUrl: '/resume.pdf',
  email: 'bhawna.vishwakarma2004@gmail.com',
  phone: '+91-887154XXXX',
  location: 'Hyderabad, Telangana',
  education: [
    {
      degree: 'Bachelor of Technology in Computer Science',
      period: '2022 – 2026',
      institution: 'Eklavya University',
      place: 'Damoh, India',
      details: 'CGPA – 8.0/10',
    },
  ],
}

export default profile
