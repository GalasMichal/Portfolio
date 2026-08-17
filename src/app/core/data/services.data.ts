export interface Service {
  id: string;
  icon: string;
  featured?: boolean;
  span?: 'wide' | 'normal';
}

export const SERVICES: Service[] = [
  { id: 'webapps', icon: 'layers', featured: true, span: 'wide' },
  { id: 'automation', icon: 'settings_suggest', featured: true },
  { id: 'gis', icon: 'public', featured: true },
  { id: 'modernization', icon: 'upgrade', featured: true },
  { id: 'ki', icon: 'psychology', featured: true },
  { id: 'consulting', icon: 'account_tree', featured: true, span: 'wide' },
];

export function getFeaturedServices(limit = 4): Service[] {
  return SERVICES.filter((s) => s.featured).slice(0, limit);
}

export function serviceKey(id: string, field: string): string {
  return `services.items.${id}.${field}`;
}
