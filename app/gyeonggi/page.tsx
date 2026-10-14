import { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://ansim-therapy.netlify.app";
const PHONE_NUMBER = "0508-201-1208";
const PHONE_RAW = "05082011208";

export const metadata: Metadata = {
  title: "경기 출장 아로마 마사지 | 코스부터 확인하는 홈타이 코스 - 안심테라피",
  description:
    "안심테라피 경기 안내. 지역별 이동 범위와 상담 순서를 자연스럽게 안내합니다. 스웨디시·아로마·타이 케어 5코스와 14개 시간·가격 선택지를 확인하세요.",
  keywords: [
    "경기 출장 아로마 마사지",
    "경기 홈타이",
    "경기 아로마",
    "경기 스웨디시",
    "경기 출장마사지",
    "안심테라피",
  ],
  alternates: {
    canonical: `${SITE_URL}/gyeonggi`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    title: "경기 출장 아로마 마사지 | 코스부터 확인하는 홈타이 코스 - 안심테라피",
    description:
      "안심테라피 경기 안내. 지역별 이동 범위와 상담 순서를 자연스럽게 안내합니다. 스웨디시·아로마·타이 케어 5코스와 14개 시간·가격 선택지를 확인하세요.",
    url: `${SITE_URL}/gyeonggi`,
    siteName: "안심테라피",
    locale: "ko_KR",
    images: [
      {
        url: `${SITE_URL}/assets/hayoung-og-1200x630.png`,
        width: 1200,
        height: 630,
        alt: "안심테라피 경기 출장 아로마 마사지",
      },
    ],
  },
};

const gyeonggiRegions = [
  { name: "가평군", path: "gapyeong-gun" },
  { name: "고양시", path: "goyang-si" },
  { name: "과천시", path: "gwacheon-si" },
  { name: "광명시", path: "gwangmyeong-si" },
  { name: "광주시", path: "gwangju-si" },
  { name: "구리시", path: "guri-si" },
  { name: "군포시", path: "gunpo-si" },
  { name: "김포시", path: "gimpo-si" },
  { name: "남양주시", path: "namyangju-si" },
  { name: "동두천시", path: "dongducheon-si" },
  { name: "부천시", path: "bucheon-si" },
  { name: "성남시", path: "seongnam-si" },
  { name: "수원시", path: "suwon-si" },
  { name: "시흥시", path: "siheung-si" },
  { name: "안산시", path: "ansan-si" },
  { name: "안성시", path: "anseong-si" },
  { name: "안양시", path: "anyang-si" },
  { name: "양주시", path: "yangju-si" },
  { name: "양평군", path: "yangpyeong-gun" },
  { name: "여주시", path: "yeoju-si" },
  { name: "연천군", path: "yeoncheon-gun" },
  { name: "오산시", path: "osan-si" },
  { name: "용인시", path: "yongin-si" },
  { name: "의왕시", path: "uiwang-si" },
  { name: "의정부시", path: "uijeongbu-si" },
  { name: "이천시", path: "icheon-si" },
  { name: "파주시", path: "paju-si" },
  { name: "평택시", path: "pyeongtaek-si" },
  { name: "포천시", path: "pocheon-si" },
  { name: "하남시", path: "hanam-si" },
  { name: "화성시", path: "hwaseong-si" },
];

const courseTable = [
  {
    no: "01",
    name: "릴렉스 밸런스",
    desc: "일정 뒤 굳은 흐름을 부드럽게 정돈하는 기본 케어",
    prices: [
      { time: "60분", price: "70,000원" },
      { time: "90분", price: "100,000원" },
      { time: "120분", price: "130,000원" },
    ],
  },
  {
    no: "02",
    name: "아로마 리듬",
    desc: "은은한 오일과 차분한 압을 조합한 전신 케어",
    prices: [
      { time: "60분", price: "80,000원" },
      { time: "90분", price: "110,000원" },
      { time: "120분", price: "140,000원" },
    ],
  },
  {
    no: "03",
    name: "스웨디시 플로우",
    desc: "긴 호흡과 섬세한 리듬으로 이어지는 프리미엄 코스",
    prices: [
      { time: "60분", price: "90,000원" },
      { time: "90분", price: "120,000원" },
      { time: "120분", price: "150,000원" },
    ],
  },
  {
    no: "04",
    name: "타이 스트레칭",
    desc: "가벼운 이완 동작과 압점 케어를 함께 구성한 코스",
    prices: [
      { time: "60분", price: "80,000원" },
      { time: "90분", price: "110,000원" },
      { time: "120분", price: "140,000원" },
    ],
  },
  {
    no: "05",
    name: "안심 시그니처",
    desc: "컨디션 상담 뒤 리듬과 압을 맞추는 맞춤형 집중 케어",
    prices: [
      { time: "90분", price: "140,000원" },
      { time: "120분", price: "170,000원" },
    ],
  },
];

const faqs = [
  {
    q: "어떤 정보를 먼저 준비하면 되나요?",
    a: "현재 위치의 구·시와 희망 시작 시간, 원하는 코스 길이를 알려주면 됩니다.",
  },
  {
    q: "코스는 현장에서 바꿀 수 있나요?",
    a: "가능 여부는 당일 일정과 준비 상태에 따라 달라질 수 있어 상담 단계에서 먼저 비교하는 편이 좋습니다.",
  },
  {
    q: "결제는 어떻게 진행하나요?",
    a: "선입금 없이 현장에서 안내 내용을 다시 확인한 뒤 후불로 진행합니다.",
  },
  {
    q: "늦은 시간에도 상담할 수 있나요?",
    a: "지역과 이동 상황에 따라 달라지므로 전화 상담 버튼으로 당일 가능 시간을 확인하세요.",
  },
  {
    q: "준비해야 할 물품이 있나요?",
    a: "편하게 쉴 공간과 간단한 세면 환경만 준비하면 됩니다. 필요한 기본 용품은 관리사가 지참합니다.",
  },
];

export default function GyeonggiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/gyeonggi/#webpage`,
        url: `${SITE_URL}/gyeonggi`,
        name: "경기 출장 아로마 마사지 | 코스부터 확인하는 홈타이 코스 - 안심테라피",
        description:
          "안심테라피 경기 안내. 지역별 이동 범위와 상담 순서를 자연스럽게 안내합니다. 스웨디시·아로마·타이 케어 5코스와 14개 시간·가격 선택지를 확인하세요.",
        about: ["경기", "출장 아로마 마사지", "홈타이", "아로마", "스웨디시"],
      },
      {
        "@type": ["HealthAndBeautyBusiness", "LocalBusiness"],
        "@id": `${SITE_URL}/gyeonggi/#organization`,
        name: "안심테라피 경기",
        url: `${SITE_URL}/gyeonggi`,
        telephone: PHONE_NUMBER,
        priceRange: "70,000원~170,000원",
        areaServed: {
          "@type": "AdministrativeArea",
          name: "경기도",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "경기 출장 케어 5코스 14선택지 요금표",
          itemListElement: courseTable.flatMap((course) =>
            course.prices.map((p) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: `${course.name} (${p.time})`,
                description: course.desc,
              },
              price: p.price.replace(/[^0-9]/g, ""),
              priceCurrency: "KRW",
              availability: "https://schema.org/InStock",
            }))
          ),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/gyeonggi/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="bg-[#0b0c10] text-[#c5c6c7] min-h-screen font-sans selection:bg-[#66fcf1] selection:text-black pb-28">
      {/* 구조화 데이터 주입 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-[#0b0c10]/95 backdrop-blur-md border-b border-white/10 px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#66fcf1] text-[#0b0c10] flex items-center justify-center font-black text-sm">
              안
            </span>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-wider text-white">
                안심테라피
              </span>
              <span className="text-[9px] text-[#45a29e] tracking-tight">
                ANSIM THERAPY GYEONGGI
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-gray-300">
            <Link href="/" className="hover:text-[#66fcf1] transition-colors">서울</Link>
            <Link href="/incheon" className="hover:text-[#66fcf1] transition-colors">인천</Link>
            <Link href="/gyeonggi" className="text-[#66fcf1] transition-colors">경기</Link>
            <a href="#courses" className="hover:text-[#66fcf1] transition-colors">코스·가격</a>
            <a href="#guide" className="hover:text-[#66fcf1] transition-colors">이용 안내</a>
          </nav>

          <a
            href={`tel:${PHONE_RAW}`}
            className="bg-[#66fcf1] hover:bg-[#45a29e] text-[#0b0c10] font-black text-xs px-4 py-2 rounded-xl transition-all shadow-[0_0_15px_rgba(102,252,241,0.25)] flex items-center gap-1.5"
          >
            <span>☎</span> 전화 상담
          </a>
        </div>
      </header>

      {/* 본문 메인 */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-12">
        {/* 히어로 배너 */}
        <section className="bg-gradient-to-b from-[#1f2833] to-[#141923] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-4">
          <span className="inline-block text-[11px] font-black tracking-widest text-[#66fcf1] uppercase bg-[#66fcf1]/10 px-3 py-1 rounded-full border border-[#66fcf1]/30">
            경기도 HOME CARE DIRECTORY
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            경기 출장 아로마 마사지 코스 안내
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
            안심테라피 경기 안내. 지역별 이동 범위와 상담 순서를 자연스럽게 안내합니다.
            스웨디시·아로마·타이 케어 5코스와 14개 시간·가격 선택지를 확인하세요.
          </p>
          <div className="flex flex-wrap gap-2 pt-2 text-xs font-semibold">
            <span className="bg-black/40 border border-white/10 px-3 py-1.5 rounded-lg text-white">스웨디시</span>
            <span className="bg-black/40 border border-white/10 px-3 py-1.5 rounded-lg text-white">아로마</span>
            <span className="bg-black/40 border border-white/10 px-3 py-1.5 rounded-lg text-white">타이</span>
            <span className="bg-[#66fcf1]/20 border border-[#66fcf1]/40 px-3 py-1.5 rounded-lg text-[#66fcf1] font-bold">선입금 0원 후불 상담</span>
          </div>
        </section>

        {/* 경기 지역 31개 시·군 선택기 */}
        <section id="regions" className="bg-[#12161f] border border-white/10 rounded-3xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-black text-white">지역 선택</span>
              <span className="text-xs text-[#66fcf1] font-bold">경기도 (31개 시·군 전역)</span>
            </div>
            <div className="flex gap-1.5 text-xs">
              <Link href="/" className="bg-black/40 text-gray-400 hover:text-white px-2.5 py-1 rounded-md">서울</Link>
              <Link href="/incheon" className="bg-black/40 text-gray-400 hover:text-white px-2.5 py-1 rounded-md">인천</Link>
              <span className="bg-[#66fcf1] text-black font-black px-2.5 py-1 rounded-md">경기</span>
            </div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-2">
            {gyeonggiRegions.map((reg) => (
              <Link
                key={reg.path}
                href={`/gyeonggi/${encodeURIComponent(reg.name)}`}
                className="text-xs bg-[#1a212d] hover:bg-[#66fcf1] hover:text-black text-gray-300 px-3 py-2.5 rounded-xl border border-white/5 transition-all text-center font-medium truncate"
              >
                {reg.name}
              </Link>
            ))}
          </div>
        </section>

        {/* 5코스 14선택지 요금표 */}
        <section id="courses" className="space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-black tracking-widest text-[#66fcf1] uppercase">
              COURSE & PRICE
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              경기 케어 코스·가격
            </h2>
            <p className="text-xs text-gray-400">
              당일 컨디션과 원하는 시간을 먼저 알려주면 상담이 한결 빠릅니다.
            </p>
          </div>

          <div className="space-y-4">
            {courseTable.map((course) => (
              <div
                key={course.no}
                className="bg-[#141923] border border-white/10 hover:border-[#66fcf1]/40 rounded-2xl p-5 transition-all space-y-3"
              >
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[#66fcf1] font-black text-base">{course.no}</span>
                    <h3 className="text-base sm:text-lg font-black text-white">
                      {course.name}
                    </h3>
                  </div>
                  <span className="text-[11px] text-gray-400">100% 현장 후불</span>
                </div>
                <p className="text-xs text-gray-300">{course.desc}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                  {course.prices.map((p, idx) => (
                    <div
                      key={idx}
                      className="bg-black/50 border border-white/5 p-3 rounded-xl flex items-center justify-between"
                    >
                      <span className="text-xs text-gray-400 font-bold">{p.time}</span>
                      <strong className="text-xs sm:text-sm text-[#66fcf1] font-black">
                        {p.price}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 자주 묻는 질문 FAQ 섹션 */}
        <section id="guide" className="space-y-4">
          <div className="text-center space-y-1">
            <span className="text-xs font-black tracking-widest text-[#66fcf1] uppercase">
              QUICK GUIDE
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              경기 이용 전 자주 묻는 질문
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="bg-[#141923] border border-white/10 rounded-2xl p-4 transition-all group"
              >
                <summary className="text-xs sm:text-sm font-bold text-white cursor-pointer list-none flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="text-[#66fcf1] font-black">0{idx + 1}</span>
                    {faq.q}
                  </span>
                  <span className="text-[#66fcf1] font-black text-lg transition-transform group-open:rotate-180">
                    ⌄
                  </span>
                </summary>
                <p className="text-xs text-gray-400 leading-relaxed pt-3 mt-3 border-t border-white/5 pl-6">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="bg-[#07080a] border-t border-white/10 py-10 text-center text-xs text-gray-500 mt-12">
        <div className="max-w-5xl mx-auto px-4 space-y-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-400">
            <span>서울·인천·경기 지역별 출장 케어 마사지 가이드</span>
            <span className="hidden sm:inline">•</span>
            <span>선입금 0원 100% 현장 후불 정찰제</span>
          </div>
          <p className="text-[11px] text-gray-600">
            COPYRIGHT &copy; ANSIM THERAPY ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>

      {/* 모바일 하단 플로팅 전화 상담 버튼 */}
      <aside className="fixed bottom-0 left-0 right-0 z-50 bg-[#0b0c10]/95 border-t border-white/10 p-3 shadow-2xl backdrop-blur-md md:hidden">
        <div className="max-w-md mx-auto flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-white truncate">안심테라피 경기</div>
            <div className="text-[10px] text-[#66fcf1]">선입금 없는 100% 현장 후불</div>
          </div>
          <a
            href={`tel:${PHONE_RAW}`}
            className="bg-[#66fcf1] hover:bg-[#45a29e] text-[#0b0c10] font-black text-xs px-5 py-2.5 rounded-xl shadow-md active:scale-95 transition-transform shrink-0 flex items-center gap-1.5"
          >
            <span>☎</span> 전화 상담
          </a>
        </div>
      </aside>
    </div>
  );
}