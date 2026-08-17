export interface SkillGroup {
  id: string;
}

export const SKILL_GROUPS: SkillGroup[] = [
  { id: 'frontend' },
  { id: 'gis' },
  { id: 'backend' },
  { id: 'tools' },
  { id: 'ki' },
  { id: 'soft' },
];

export const FEATURED_SKILLS = [
  'Angular',
  'TypeScript',
  'OpenLayers',
  'Leaflet',
  'Supabase',
  'Cursor AI',
  'Git',
  'Docker',
  'WebGL',
  'Kendo UI',
];

export function skillGroupKey(id: string, field: 'title' | 'skills'): string {
  return `skills.groups.${id}.${field}`;
}
