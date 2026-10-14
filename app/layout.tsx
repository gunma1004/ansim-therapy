import type { Metadata, Viewport } from 'next';
import './globals.css';

const SITE_URL = 'https://ansim-therapy.netlify.app';

export const viewport: Viewport = {
  themeColor: '#0b0c10',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '서울 출장 안심케어 마사지 | 일정에 맞춘 코스 비교 - 안심테라피',
    template: '%s | 안심테라피',
  },
  description:
    '안심테라피 서울 안내. 이용 시간과 코스 차이를 한눈에 정리했습니다. 스웨디시·아로마·타이 케어 5코스와 14개 시간·가격 선택지, 선입금 없는 100% 현장 후불제를 확인하세요.',
  keywords: [
    '서울 출장 안심케어 마사지',
    '서울 출장마사지',
    '서울 홈타이',
    '서울 아로마마사지',
    '서울 스웨디시',
    '선입금없는출장마사지',
    '안심테라피',
  ],
  authors: [{ name: '안심테라피', url: SITE_URL }],
  creator: '안심테라피',
  publisher: '안심테라피',
  // 🌟 안심테라피 전용 네이버 서치어드바이저 사이트 소유확인 메타태그
  verification: {
    other: {
      'naver-site-verification': '02f16dac0744967b0ff30f23b5ee0ba83ce648ac',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: SITE_URL,
    siteName: '안심테라피',
    title: '서울 출장 안심케어 마사지 | 일정에 맞춘 코스 비교 - 안심테라피',
    description:
      '안심테라피 서울 안내. 스웨디시·아로마·타이 케어 5코스와 14개 가격 선택지, 선입금 없는 100% 현장 후불제를 확인하세요.',
    images: [
      {
        url: '/assets/hayoung-og-1200x630.png',
        width: 1200,
        height: 630,
        alt: '안심테라피 서울 출장 안심케어 마사지',
      },
    ],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: '안심테라피',
      description: '서울 출장 안심케어 마사지 일정 맞춤 정찰제 플랫폼',
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
      inLanguage: 'ko-KR',
    },
    {
      '@type': ['HealthAndBeautyBusiness', 'Organization'],
      '@id': `${SITE_URL}/#organization`,
      name: '안심테라피',
      url: SITE_URL,
      telephone: '0508-201-1208',
      priceRange: '70,000원~170,000원',
      currenciesAccepted: 'KRW',
      paymentAccepted: 'Cash, Credit Card',
      areaServed: {
        '@type': 'AdministrativeArea',
        name: '서울특별시',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: '서울특별시',
        addressRegion: '수도권',
        addressCountry: 'KR',
      },
      description: '선입금 없는 100% 현장 후불제 서울 출장 안심케어 마사지 안내',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0b0c10] text-[#c5c6c7] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}