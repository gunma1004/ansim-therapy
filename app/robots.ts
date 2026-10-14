import { MetadataRoute } from 'next';

const SITE_URL = 'https://ansim-therapy.netlify.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Yeti', // 네이버 검색 로봇
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}