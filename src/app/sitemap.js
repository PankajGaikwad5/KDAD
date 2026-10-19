import { projects } from '../components/projects';
import { features } from '../components/features';

export default function sitemap() {
  const baseUrl = 'https://karandesai.in';
  const now = new Date();

  // Core static pages
  const staticPages = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/collaborations`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/publications`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/shukhabar`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Dynamic project pages
  const projectPages = projects.map((project) => {
    const slug = project.title
      ? project.title.toLowerCase().replace(/\s+/g, '-')
      : project._id?.$oid ?? project.id;
    return {
      url: `${baseUrl}/projectdetails/${encodeURIComponent(slug)}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    };
  });

  // Dynamic feature/publication pages
  const featurePages = features.map((feature) => {
    const slug = feature.title
      ? feature.title.toLowerCase().replace(/\s+/g, '-')
      : feature._id?.$oid ?? feature.id;
    return {
      url: `${baseUrl}/featuredetails/${encodeURIComponent(slug)}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    };
  });

  return [...staticPages, ...projectPages, ...featurePages];
}
