import faqsData from "./faqs.json";

export type FaqItem = { question: string; answer: string };

const data = faqsData as Record<string, FaqItem[]>;

export const getFaqs = (slug: string): FaqItem[] => data[slug] ?? [];
