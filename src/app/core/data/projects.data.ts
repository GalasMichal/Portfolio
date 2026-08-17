export type ProjectCategory = 'beruflich' | 'privat' | 'experimentell';
export type ProjectStatus =
  | 'berufliche-erfahrung'
  | 'in-entwicklung'
  | 'konzept'
  | 'experimentell';

export type ProjectFilter =
  | 'alle'
  | 'beruflich'
  | 'privat'
  | 'in-entwicklung'
  | 'experimentell';

export type ProjectPreview =
  | 'gis-migration'
  | 'mapfish'
  | 'kendo-grid'
  | 'roblox'
  | 'route-navi'
  | 'scan-3d';

export interface Project {
  id: string;
  category: ProjectCategory;
  status: ProjectStatus;
  technologies: string[];
  visual: 'map' | 'grid' | 'ai' | 'app' | 'default';
  featured?: boolean;
  previewType?: ProjectPreview;
  demoPath?: string;
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export const PROJECT_FILTERS: ProjectFilter[] = [
  'alle',
  'beruflich',
  'privat',
  'in-entwicklung',
  'experimentell',
];

export const PROJECTS: Project[] = [
  {
    id: 'openlayers-kartenmodul',
    category: 'beruflich',
    status: 'berufliche-erfahrung',
    technologies: ['TypeScript', 'OpenLayers', 'Leaflet', 'SLD', 'GeoServer', 'Kendo UI', '.NET'],
    visual: 'map',
    featured: true,
    previewType: 'gis-migration',
    demoPath: '/demo/gis-migration',
  },
  {
    id: 'mapfish-templates',
    category: 'beruflich',
    status: 'berufliche-erfahrung',
    technologies: ['Mapfish', 'ReportPlot', 'Templates', 'Kartenexport'],
    visual: 'map',
    featured: true,
    previewType: 'mapfish',
  },
  {
    id: 'kendo-ui',
    category: 'beruflich',
    status: 'berufliche-erfahrung',
    technologies: ['Kendo UI', 'jQuery', 'JavaScript', 'Razor', '.NET'],
    visual: 'grid',
    featured: true,
    previewType: 'kendo-grid',
  },
  {
    id: '3d-scan',
    category: 'privat',
    status: 'in-entwicklung',
    technologies: ['Angular', 'Three.js', 'Kamera-Workflow', 'Photogrammetrie'],
    visual: 'default',
    previewType: 'scan-3d',
  },
  {
    id: 'route-navi',
    category: 'privat',
    status: 'konzept',
    technologies: ['Web App', 'Karten', 'GPS', 'Routenoptimierung', 'PDF-/Adressimport'],
    visual: 'map',
    previewType: 'route-navi',
  },
  {
    id: 'roblox',
    category: 'privat',
    status: 'in-entwicklung',
    technologies: ['Roblox Studio', 'Lua', 'Rojo', 'KI-Agenten'],
    visual: 'app',
    previewType: 'roblox',
  },
  {
    id: 'dabubble',
    category: 'privat',
    status: 'experimentell',
    technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
    visual: 'app',
    featured: true,
    demoUrl: 'http://da-bubble.michal-galas.de/index.html',
    githubUrl: 'https://github.com/GalasMichal/DA_Bubble',
    imageUrl: '/assets/img/projects/dabubble.png',
  },
  {
    id: 'join',
    category: 'privat',
    status: 'experimentell',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
    visual: 'app',
    featured: true,
    demoUrl: 'https://join.michal-galas.de/index.html',
    githubUrl: 'https://github.com/GalasMichal/Join-',
    imageUrl: '/assets/img/projects/join.png',
  },
  {
    id: 'sharkie',
    category: 'privat',
    status: 'experimentell',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    visual: 'app',
    featured: true,
    demoUrl: 'https://sharkie.michal-galas.de/index.html',
    githubUrl: 'https://github.com/GalasMichal/Sharkie',
    imageUrl: '/assets/img/projects/sharkie.png',
  },
  {
    id: 'ki-workflows',
    category: 'experimentell',
    status: 'experimentell',
    technologies: ['Cursor AI', 'ChatGPT', 'GitHub Copilot', 'lokale Open-Source-LLMs', 'Docker'],
    visual: 'ai',
    featured: true,
  },
];

export function filterProjects(filter: ProjectFilter): Project[] {
  switch (filter) {
    case 'beruflich':
      return PROJECTS.filter((p) => p.category === 'beruflich');
    case 'privat':
      return PROJECTS.filter((p) => p.category === 'privat');
    case 'in-entwicklung':
      return PROJECTS.filter((p) => p.status === 'in-entwicklung' || p.status === 'konzept');
    case 'experimentell':
      return PROJECTS.filter((p) => p.category === 'experimentell' || p.status === 'experimentell');
    default:
      return PROJECTS;
  }
}

export function getFeaturedProjects(limit?: number): Project[] {
  const featured = PROJECTS.filter((p) => p.featured);
  return limit !== undefined ? featured.slice(0, limit) : featured;
}

export function projectKey(id: string, field: string): string {
  return `projects.items.${id}.${field}`;
}
