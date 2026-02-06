
import { AIStrategy, StrategyCategory } from './types';

export const INITIAL_STRATEGIES: AIStrategy[] = [
  {
    id: '1',
    title: 'AI Content Agency',
    category: StrategyCategory.CONTENT_CREATION,
    description: 'Use LLMs and Image Generators to provide high-volume content marketing services to small businesses.',
    difficulty: 'Beginner',
    earningPotential: '$2k - $10k / month',
    tools: ['ChatGPT', 'Midjourney', 'Jasper', 'Canva Magic Studio'],
    steps: [
      'Define your niche (e.g., real estate agents, local bakeries)',
      'Build a portfolio of AI-generated blog posts and social media graphics',
      'Cold outreach to businesses with poor social media presence',
      'Upsell consistent monthly content retainers'
    ]
  },
  {
    id: '2',
    title: 'Custom GPT Developer',
    category: StrategyCategory.SAAS_DEVELOPMENT,
    description: 'Build and monetize specialized GPTs for specific industry workflows or the OpenAI GPT Store.',
    difficulty: 'Intermediate',
    earningPotential: '$500 - $5k / month',
    tools: ['OpenAI GPT Builder', 'Zapier', 'Make.com'],
    steps: [
      'Identify a repetitive business task (e.g., legal document parsing)',
      'Create a Custom GPT with specific knowledge sets',
      'Connect it to external tools via Actions',
      'List on marketplaces or sell directly as a B2B solution'
    ]
  },
  {
    id: '3',
    title: 'AI Stock Photography',
    category: StrategyCategory.E_COMMERCE,
    description: 'Generate high-quality, niche stock images using Midjourney or DALL-E and sell them on licensed platforms.',
    difficulty: 'Beginner',
    earningPotential: '$100 - $2k / month',
    tools: ['Midjourney', 'Adobe Firefly', 'Shutterstock AI'],
    steps: [
      'Research trending search terms on stock photo sites',
      'Prompt and curate high-resolution AI images',
      'Ensure images pass quality control for legal and technical standards',
      'Upload to Adobe Stock, Alamy, and specialized AI marketplaces'
    ]
  }
];

export const SKILL_OPTIONS = [
  'Writing', 'Graphic Design', 'Coding', 'Marketing', 'Video Editing', 
  'Sales', 'Data Analysis', 'Teaching', 'Social Media', 'Legal Research'
];

export const INTEREST_OPTIONS = [
  'Tech', 'Fitness', 'Finance', 'Art', 'Lifestyle', 'Business', 'Education', 'Gaming'
];
