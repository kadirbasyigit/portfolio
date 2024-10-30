module.exports = {
  siteUrl: 'https://www.kadirbasyigit.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  priority: 1,
  changefreq: 'weekly',

  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', disallow: '/secret' },
    ],
  },
};
