import { es } from './es';
import { en } from './en';
import type { Lang } from './routes';
import type { Content } from './types';

export const dictionaries: Record<Lang, Content> = { es, en };
export const t = (lang: Lang): Content => dictionaries[lang];
export type { Lang } from './routes';
