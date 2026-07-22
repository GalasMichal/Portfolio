export interface HomeSectionItem {
  id: string;
  icon: string;
}

export const PROBLEM_ITEMS: HomeSectionItem[] = [
  { id: 'manual-work', icon: 'schedule' },
  { id: 'legacy-software', icon: 'build' },
  { id: 'scattered-data', icon: 'folder_copy' },
  { id: 'geo-data', icon: 'map' },
  { id: 'standard-software', icon: 'tune' },
  { id: 'ai-trend', icon: 'psychology' },
];

export const PROCESS_STEPS: HomeSectionItem[] = [
  { id: 'understand', icon: 'forum' },
  { id: 'plan', icon: 'architecture' },
  { id: 'build', icon: 'rocket_launch' },
  { id: 'improve', icon: 'cycle' },
];

export const WHY_WORK_ITEMS: HomeSectionItem[] = [
  { id: 'problem-first', icon: 'priority_high' },
  { id: 'communication', icon: 'chat' },
  { id: 'incremental', icon: 'stairs' },
  { id: 'existing-systems', icon: 'sync' },
  { id: 'breadth', icon: 'hub' },
  { id: 'practical', icon: 'handshake' },
];

export function problemKey(id: string, field: 'title' | 'description'): string {
  return `problems.items.${id}.${field}`;
}

export function processKey(id: string, field: 'title' | 'description'): string {
  return `process.steps.${id}.${field}`;
}

export function whyWorkKey(id: string, field: 'title' | 'description'): string {
  return `whyWork.items.${id}.${field}`;
}
