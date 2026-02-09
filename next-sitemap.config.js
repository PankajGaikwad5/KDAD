/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.karandesai.in',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  outDir: './public',
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/test', '/example_upload', '/uploadprojects'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/test/', '/example_upload/', '/uploadprojects/'],
      },
    ],
    additionalSitemaps: ['https://www.karandesai.in/sitemap.xml'],
  },
  transform: async (config, path) => {
    // Custom priority for different page types
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.includes('/projects')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.includes('/about') || path.includes('/contact')) {
      priority = 0.8;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
