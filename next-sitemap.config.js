/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://karandesai.in',
  generateRobotsTxt: false, // We maintain robots.txt explicitly with full AI/AEO/GEO directives
  sitemapSize: 5000,
  outDir: './public',
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [
    '/api/*',
    '/test/*',
    '/example_upload/*',
    '/uploadprojects/*',
    '/oldcollaborations',
    '/about%20us',
    '/contact%20us',
  ],
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path === '/projects' || path.startsWith('/projectdetails')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.includes('/about-us') || path.includes('/contact-us')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path.includes('/publications') || path.startsWith('/featuredetails')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.includes('/collaborations') || path.includes('/shukhabar')) {
      priority = 0.7;
      changefreq = 'weekly';
    } else if (path.includes('/privacy-policy') || path.includes('/terms-and-conditions')) {
      priority = 0.3;
      changefreq = 'yearly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
