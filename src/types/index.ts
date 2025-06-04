
export interface Job {
  id: string;
  title: string;
  city: string;
  state: string;
  description: string;
  salary: string;
  type: 'CLT' | 'PJ' | 'Estágio' | 'Freelancer';
  requirements: string[];
  restrictions: string[];
  specializations: string[];
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  createdAt: string;
}

export interface HighTechScore {
  id: string;
  userId: string;
  area: string;
  score: number;
  statusColor: 'red' | 'yellow' | 'green';
  createdAt: string;
}

export interface SearchFilters {
  city?: string;
  state?: string;
  query?: string;
}
