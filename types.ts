
export enum StrategyCategory {
  CONTENT_CREATION = 'Content Creation',
  FREELANCING = 'Freelancing',
  SAAS_DEVELOPMENT = 'SaaS & Development',
  E_COMMERCE = 'E-commerce',
  CONSULTING = 'AI Consulting',
  DATA_ANNOTATION = 'Data Services'
}

export interface AIStrategy {
  id: string;
  title: string;
  category: StrategyCategory;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Expert';
  earningPotential: string;
  tools: string[];
  steps: string[];
}

export interface UserProfile {
  skills: string[];
  hoursPerWeek: number;
  startingBudget: number;
  interests: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
