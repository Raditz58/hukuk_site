export type PracticeGroup = 'ana' | 'diger';

export type ArticleCategory = 
  | 'Hukuki Değerlendirmeler'
  | 'Mevzuat ve Güncel Gelişmeler'
  | 'Hukuki İncelemeler';

export interface PracticeArea {
  id: string;
  slug: string;
  title: string;
  group: PracticeGroup;
  shortDescription: string;
  badge?: string;
  fullDescription: string;
  scope: string[]; // İlgili hukuk alanının kapsamı
  topics: {
    title: string;
    description: string;
  }[]; // Hangi konuları içerdiği
  legalSupport: string[]; // Sunulan hukuki destek
  iconName: string;
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: ArticleCategory;
  summary: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}
