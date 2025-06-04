
import { Job, User, HighTechScore } from '@/types';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Desenvolvedor Full Stack React + Node.js',
    city: 'São Paulo',
    state: 'SP',
    description: 'Desenvolvedor experiente para trabalhar com tecnologias modernas em projetos desafiadores.',
    salary: 'R$ 8.000 - R$ 12.000',
    type: 'CLT',
    requirements: [
      '3+ anos de experiência com React',
      'Conhecimento em Node.js e Express',
      'Experiência com bancos de dados SQL e NoSQL',
      'Conhecimento em Git e metodologias ágeis'
    ],
    restrictions: [
      'Não é permitido trabalho remoto integral',
      'Horário comercial obrigatório'
    ],
    specializations: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL'],
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Designer UX/UI Sênior',
    city: 'Rio de Janeiro',
    state: 'RJ',
    description: 'Designer criativo para liderar projetos de experiência do usuário em produtos digitais.',
    salary: 'R$ 6.000 - R$ 9.000',
    type: 'PJ',
    requirements: [
      '4+ anos de experiência em UX/UI',
      'Domínio de Figma e Adobe Creative Suite',
      'Portfolio robusto com cases de sucesso',
      'Conhecimento em prototipagem e testes de usabilidade'
    ],
    restrictions: [
      'Necessário disponibilidade para reuniões presenciais semanais'
    ],
    specializations: ['Figma', 'Adobe XD', 'Design System', 'Prototipagem', 'User Research'],
    createdAt: '2024-01-14'
  },
  {
    id: '3',
    title: 'Analista de Dados Python',
    city: 'Belo Horizonte',
    state: 'MG',
    description: 'Profissional para análise de dados e desenvolvimento de insights estratégicos.',
    salary: 'R$ 5.500 - R$ 8.500',
    type: 'CLT',
    requirements: [
      '2+ anos com Python para análise de dados',
      'Experiência com Pandas, NumPy e Matplotlib',
      'Conhecimento em SQL e bancos de dados',
      'Experiência com Power BI ou Tableau'
    ],
    restrictions: [
      'Trabalho híbrido - 3 dias presencial'
    ],
    specializations: ['Python', 'SQL', 'Power BI', 'Machine Learning', 'Estatística'],
    createdAt: '2024-01-13'
  },
  {
    id: '4',
    title: 'Estágio em Marketing Digital',
    city: 'Porto Alegre',
    state: 'RS',
    description: 'Oportunidade para estudantes aprenderem marketing digital na prática.',
    salary: 'R$ 1.200 - R$ 1.800',
    type: 'Estágio',
    requirements: [
      'Cursando Marketing, Publicidade ou áreas afins',
      'Conhecimento básico em redes sociais',
      'Disponibilidade de 6 horas diárias'
    ],
    restrictions: [
      'Apenas para estudantes regularmente matriculados'
    ],
    specializations: ['Redes Sociais', 'Google Ads', 'Analytics', 'Content Marketing'],
    createdAt: '2024-01-12'
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    city: 'Brasília',
    state: 'DF',
    description: 'Especialista em infraestrutura e automação para ambientes cloud.',
    salary: 'R$ 10.000 - R$ 15.000',
    type: 'CLT',
    requirements: [
      '5+ anos de experiência em DevOps',
      'Experiência com AWS, Docker e Kubernetes',
      'Conhecimento em CI/CD e Infrastructure as Code',
      'Experiência com monitoring e logging'
    ],
    restrictions: [
      'Disponibilidade para plantões ocasionais'
    ],
    specializations: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
    createdAt: '2024-01-11'
  },
  {
    id: '6',
    title: 'Freelancer - Desenvolvimento Mobile React Native',
    city: 'Florianópolis',
    state: 'SC',
    description: 'Projeto de 3 meses para desenvolvimento de aplicativo mobile.',
    salary: 'R$ 15.000 - R$ 25.000 (projeto)',
    type: 'Freelancer',
    requirements: [
      '3+ anos com React Native',
      'Experiência com publicação nas stores',
      'Conhecimento em APIs REST e GraphQL',
      'Portfolio com apps publicados'
    ],
    restrictions: [
      'Prazo fixo de 3 meses',
      'Reuniões semanais obrigatórias'
    ],
    specializations: ['React Native', 'TypeScript', 'Firebase', 'App Store', 'Google Play'],
    createdAt: '2024-01-10'
  }
];

export const mockUser: User = {
  id: '1',
  name: 'Maria Silva Santos',
  email: 'maria.santos@email.com',
  address: 'Rua das Flores, 123 - Vila Madalena, São Paulo - SP',
  phone: '(11) 99999-8888',
  createdAt: '2023-06-15'
};

export const mockHighTechScores: HighTechScore[] = [
  {
    id: '1',
    userId: '1',
    area: 'Desenvolvimento Frontend',
    score: 85,
    statusColor: 'green',
    createdAt: '2024-01-01'
  },
  {
    id: '2',
    userId: '1',
    area: 'Desenvolvimento Backend',
    score: 65,
    statusColor: 'yellow',
    createdAt: '2024-01-01'
  },
  {
    id: '3',
    userId: '1',
    area: 'DevOps & Infraestrutura',
    score: 35,
    statusColor: 'red',
    createdAt: '2024-01-01'
  },
  {
    id: '4',
    userId: '1',
    area: 'Soft Skills & Comunicação',
    score: 92,
    statusColor: 'green',
    createdAt: '2024-01-01'
  },
  {
    id: '5',
    userId: '1',
    area: 'Gestão de Projetos',
    score: 58,
    statusColor: 'yellow',
    createdAt: '2024-01-01'
  }
];

export const cities = [
  'São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Porto Alegre', 
  'Brasília', 'Florianópolis', 'Salvador', 'Recife', 'Fortaleza', 'Curitiba'
];

export const states = [
  'SP', 'RJ', 'MG', 'RS', 'DF', 'SC', 'BA', 'PE', 'CE', 'PR'
];
