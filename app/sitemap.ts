import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.parkgroupofcompanies.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/contact', '/services/hvac', '/services/plumbing', '/services/commercial', '/privacy-policy'];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7
  }));
}
