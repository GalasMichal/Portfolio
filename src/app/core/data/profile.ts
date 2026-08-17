export interface NavItem {
  key: string;
  path: string;
}

export interface ProfileContact {
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

export const PROFILE = {
  name: 'Michal Galas',
  contact: {
    email: 'contact@michal-galas.de',
    linkedin: 'https://www.linkedin.com/in/michal-galas-4239b1296/',
    github: 'https://github.com/GalasMichal',
    location: 'Deutschland',
  },
  navigation: [
    { key: 'start', path: '/' },
    { key: 'leistungen', path: '/leistungen' },
    { key: 'projekte', path: '/projekte' },
    { key: 'about', path: '/about' },
    { key: 'kontakt', path: '/kontakt' },
  ] satisfies NavItem[],
};
