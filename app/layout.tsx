import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://ansim-therapy.netlify.app";

export const metadata: Metadata = {
  title: {
    default: "서울 출장 안심케어 마사지 | 일정에 맞춘 코스 비교 - 안심테라피",
    template: "%s | 안심테라피",
  },
  description:
    "수도권(서울·경기·인천) 출장 마사지 안심케어. 스웨디시·아로마·타이 5코스와 14개 가격 선택지, 100% 현장 후불제를 확인하세요.",
  keywords: [
    "서울 출장 안심케어 마사지",
    "경기 출장마사지",
    "인천 홈타이",
    "출장 아로마마사지",
    "출장 스웨디시",
    "안심테라피",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    title: "서울 출장 안심케어 마사지 | 일정에 맞춘 코스 비교 - 안심테라피",
    description:
      "수도권(서울·경기·인천) 출장 마사지 안심케어. 스웨디시·아로마·타이 5코스와 14개 가격 선택지, 100% 현장 후불제를 확인하세요.",
    url: SITE_URL,
    siteName: "안심테라피",
    locale: "ko_KR",
    images: [
      {
        url: `${SITE_URL}/assets/hayoung-og-1200x630.png`,
        width: 1200,
        height: 630,
        alt: "서울 출장 안심케어 마사지 - 안심테라피",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* 🌟 네이버 소유권 확인 메타 태그 직접 삽입 */}
        <meta name="naver-site-verification" content="3f787f2f6474467f4f9c0aec2fb547c735cd0b15" />
      </head>
      <body className="bg-[#0b0c10] text-[#c5c6c7] min-h-screen font-sans antialiased selection:bg-[#66fcf1] selection:text-black">
        {children}
      </body>
    </html>
  );
}