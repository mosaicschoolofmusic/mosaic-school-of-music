/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://mosaicschoolofmusic.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/thank-you"],
      },
    ],
    additionalSitemaps: [
      "https://mosaicschoolofmusic.com/sitemap.xml",
    ],
  },
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/thank-you", "/api/*"],
};
