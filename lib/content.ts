import fs from 'fs';
import path from 'path';

export type Locale = 'fr' | 'en';

export function getContent<T = Record<string, unknown>>(pageId: string, locale: Locale): T {
  const filePath = path.join(process.cwd(), 'content', `${pageId}.json`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(raw);
  return data[locale] as T;
}

export function getSeo(pageId: string, locale: Locale) {
  const filePath = path.join(process.cwd(), 'seo', `${pageId}.seo.json`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(raw);
  return data[locale];
}
