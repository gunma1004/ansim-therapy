import { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://ansim-therapy.netlify.app";
const PHONE_NUMBER = "0507-1280-3199 ";
const PHONE_RAW = "0507-1280-3199";

export const metadata: Metadata = {
  title: "서울 출장 안심케어 마사지 | 일정에 맞춘 코스 비교 - 안심테라피",
  description:
    "안심테라피 수도권전역 안내. 스웨디시·아로마·타이 출장 케어 5코스와 14개 시간·가격 선택지를 확인하세요.",
  alternates: {
    canonical: SITE_URL,
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
    title: "서울 출장 안심케어 마사지 | 일정에 맞춘 코스 비교 - 안심테라피",
    description:
      "안심테라피 수도권 전역 안내. 스웨디시·아로마·타이 출장 케어 5코스와 14개 시간·가격 선택지를 확인하세요.",
    url: SITE_URL,
    siteName: "안심테라피",
    locale: "ko_KR",
    images: [
      {
        url: `${SITE_URL}/assets/hayoung-og-1200x630.png`,
        width: 1200,
        height: 630,
        alt: "안심테라피 출장 안심케어 마사지",
      },
    ],
  },
};

const seoulDistricts = [
  "강남구", "강동구", "강북구", "강서구", "관악구",
  "광진구", "구로구", "금천구", "노원구", "도봉구",
  "동대문구", "동작구", "마포구", "서대문구", "서초구",
  "성동구", "성북구", "송파구", "양천구", "영등포구",
  "용산구", "은평구", "종로구", "중구", "중랑구",
];

const gyeonggiDistricts = [
  "수원시", "고양시", "용인시", "성남시", "부천시",
  "화성시", "안산시", "남양주시", "안양시", "평택시",
  "시흥시", "파주시", "의정부시", "김포시", "광주시",
  "광명시", "군포시", "하남시", "오산시", "양주시",
  "이천시", "구리시", "안성시", "포천시", "의왕시",
  "양평군", "여주시", "동두천시", "가평군", "과천시", "연천군",
];

const incheonDistricts = [
  "부평구", "남동구", "연수구", "미추홀구", "서구",
  "계양구", "중구", "동구", "강화군", "옹진군",
];

const courseTable = [
  {
    no: "01",
    name: "릴렉스 밸런스",
    desc: "일정 뒤 굳은 흐름을 부드럽게 정돈하는 기본 건식 케어",
    prices: [
      { time: "60분", price: "70,000원" },
      { time: "90분", price: "100,000원" },
      { time: "120분", price: "130,000원" },
    ],
  },
  {
    no: "02",
    name: "아로마 리듬",
    desc: "은은한 천연 식물성 오일과 차분한 압을 조합한 전신 림프 순환 케어",
    prices: [
      { time: "60분", price: "80,000원" },
      { time: "90분", price: "110,000원" },
      { time: "120분", price: "140,000원" },
    ],
  },
  {
    no: "03",
    name: "스웨디시 플로우",
    desc: "긴 호흡과 섬세한 리듬으로 이어지는 프리미엄 감성 힐링 코스",
    prices: [
      { time: "60분", price: "90,000원" },
      { time: "90분", price: "120,000원" },
      { time: "120분", price: "150,000원" },
    ],
  },
  {
    no: "04",
    name: "타이 스트레칭",
    desc: "가벼운 전신 이완 동작과 정밀한 압점 케어를 함께 구성한 전통 코스",
    prices: [
      { time: "60분", price: "80,000원" },
      { time: "90분", price: "110,000원" },
      { time: "120분", price: "140,000원" },
    ],
  },
  {
    no: "05",
    name: "안심 시그니처",
    desc: "컨디션 1:1 상담 뒤 신체 리듬과 압을 맞추는 맞춤형 집중 VIP 케어",
    prices: [
      { time: "90분", price: "140,000원" },
      { time: "120분", price: "170,000원" },
    ],
  },
];

const faqs = [
  {
    q: "어떤 정보를 먼저 준비하면 되나요?",
    a: "현재 계신 수도권 내 구·시·동 위치와 희망하시는 시작 시간, 원하시는 코스 종류 및 길이를 알려주시면 즉시 조율됩니다.",
  },
  {
    q: "코스는 현장에서 바꿀 수 있나요?",
    a: "가능 여부는 당일 스케줄과 준비 상태에 따라 달라질 수 있으므로 유선 상담 단계에서 미리 비교 및 확정하시는 것을 권장합니다.",
  },
  {
    q: "선입금이나 예약금이 발생하나요?",
    a: "안심테라피는 선입금을 일절 요구하지 않습니다. 관리사가 현장에 도착한 후 코스를 재확인하고 100% 후불로 진행됩니다.",
  },
  {
    q: "늦은 야간 시간에도 상담 및 이용이 가능한가요?",
    a: "연중무휴 24시간 상담을 지원하며, 지역별 이동 상황에 따라 즉시 배차 일정을 확인해 드립니다.",
  },
  {
    q: "고객이 별도로 준비해야 할 물품이 있나요?",
    a: "편안하게 누워 관리받으실 수 있는 공간과 간단한 세면 환경만 준비해 주시면 됩니다. 필요한 전용 소모품은 관리사가 지참합니다.",
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "안심테라피",
        description: "수도권 출장 안심케어 마사지 정찰제 안내 플랫폼",
        inLanguage: "ko-KR",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: "서울 출장 안심케어 마사지 | 일정에 맞춘 코스 비교 - 안심테라피",
        description:
          "안심테라피 수도권 안내. 이용 시간과 코스 차이를 한눈에 정리했습니다. 스웨디시·아로마·타이 케어 5코스와 14개 시간·가격 선택지를 확인하세요.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: ["서울", "경기", "인천", "출장 안심케어 마사지", "홈타이", "스웨디시"],
      },
      {
        "@type": ["HealthAndBeautyBusiness", "LocalBusiness"],
        "@id": `${SITE_URL}/#organization`,
        name: "안심테라피",
        url: SITE_URL,
        telephone: PHONE_NUMBER,
        priceRange: "70,000원~170,000원",
        currenciesAccepted: "KRW",
        paymentAccepted: "Cash, Credit Card",
        areaServed: [
          { "@type": "AdministrativeArea", name: "서울특별시" },
          { "@type": "AdministrativeArea", name: "경기도" },
          { "@type": "AdministrativeArea", name: "인천광역시" },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "서울특별시",
          addressRegion: "수도권",
          addressCountry: "KR",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "출장 안심케어 마사지 5코스 14요금 선택지",
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
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="bg-[#0b0c10] text-[#c5c6c7] min-h-screen font-sans selection:bg-[#66fcf1] selection:text-black pb-28">
      {/* 1. 구조화 데이터 주입 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 2. 상단 헤더 */}
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
                ANSIM THERAPY DIRECTORY
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-gray-300">
            <Link href="/seoul" className="hover:text-[#66fcf1] transition-colors">
              서울
            </Link>
            <Link href="/gyeonggi" className="hover:text-[#66fcf1] transition-colors">
              경기
            </Link>
            <Link href="/incheon" className="hover:text-[#66fcf1] transition-colors">
              인천
            </Link>
            <a href="#courses" className="hover:text-[#66fcf1] transition-colors">
              코스·가격
            </a>
            <a href="#guide" className="hover:text-[#66fcf1] transition-colors">
              이용 안내
            </a>
          </nav>

          <a
            href={`tel:${PHONE_RAW}`}
            className="bg-[#66fcf1] hover:bg-[#45a29e] text-[#0b0c10] font-black text-xs px-4 py-2 rounded-xl transition-all shadow-[0_0_15px_rgba(102,252,241,0.25)] flex items-center gap-1.5"
          >
            <span>☎</span> 전화 상담
          </a>
        </div>
      </header>

      {/* 3. 본문 메인 영역 */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-12">
        {/* 히어로 섹션 */}
        <section className="bg-gradient-to-b from-[#1f2833] to-[#141923] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-4">
          <span className="inline-block text-[11px] font-black tracking-widest text-[#66fcf1] uppercase bg-[#66fcf1]/10 px-3 py-1 rounded-full border border-[#66fcf1]/30">
            METROPOLITAN HOME CARE DIRECTORY
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            서울 출장 안심케어 마사지 | 일정에 맞춘 코스 비교 - 안심테라피
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
            안심테라피 수도권(서울·경기·인천) 통합 안내. 이용 시간과 코스 차이를 한눈에 정리했습니다.
            스웨디시·아로마·타이 케어 5코스와 14개 시간·가격 선택지를 확인하고,
            선입금 걱정 없는 100% 현장 후불제로 편안하게 휴식을 시작하세요.
          </p>
          <div className="flex flex-wrap gap-2 pt-2 text-xs font-semibold">
            <span className="bg-black/40 border border-white/10 px-3 py-1.5 rounded-lg text-white">
              스웨디시
            </span>
            <span className="bg-black/40 border border-white/10 px-3 py-1.5 rounded-lg text-white">
              아로마
            </span>
            <span className="bg-black/40 border border-white/10 px-3 py-1.5 rounded-lg text-white">
              타이
            </span>
            <span className="bg-[#66fcf1]/20 border border-[#66fcf1]/40 px-3 py-1.5 rounded-lg text-[#66fcf1] font-bold">
              선입금 0원 후불 상담
            </span>
          </div>
        </section>

        {/* 수도권 전 지역 지역구/시군 선택기 */}
        <section id="regions" className="bg-[#12161f] border border-white/10 rounded-3xl p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <span className="text-xs font-black text-[#66fcf1] tracking-widest uppercase block">REGION SELECT</span>
              <h2 className="text-lg font-black text-white mt-0.5">수도권 전 지역 안심케어 지역 선택</h2>
            </div>
            <div className="flex gap-2 text-xs">
              <Link href="/seoul" className="bg-[#66fcf1] text-black font-black px-3 py-1.5 rounded-lg">서울</Link>
              <Link href="/gyeonggi" className="bg-black/40 text-gray-300 hover:text-white px-3 py-1.5 rounded-lg">경기</Link>
              <Link href="/incheon" className="bg-black/40 text-gray-300 hover:text-white px-3 py-1.5 rounded-lg">인천</Link>
            </div>
          </div>

          {/* 서울 25개 구 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#66fcf1]">서울특별시 (25개 구)</span>
              <Link href="/seoul" className="text-[11px] text-gray-400 hover:text-white underline">서울 단독 페이지 보기 →</Link>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-2">
              {seoulDistricts.map((d) => (
                <Link
                  key={d}
                  href={`/seoul/${encodeURIComponent(d)}`}
                  className="text-xs bg-[#1a212d] hover:bg-[#66fcf1] hover:text-black text-gray-300 p-2.5 rounded-xl border border-white/5 text-center font-medium transition-all truncate"
                >
                  {d}
                </Link>
              ))}
            </div>
          </div>

          {/* 경기 주요 시·군 */}
          <div className="space-y-2 pt-3 border-t border-white/5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#45a29e]">경기도 (31개 시·군)</span>
              <Link href="/gyeonggi" className="text-[11px] text-gray-400 hover:text-white underline">경기 단독 페이지 보기 →</Link>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-2">
              {gyeonggiDistricts.map((d) => (
                <Link
                  key={d}
                  href={`/gyeonggi/${encodeURIComponent(d)}`}
                  className="text-xs bg-[#1a212d] hover:bg-[#66fcf1] hover:text-black text-gray-300 p-2.5 rounded-xl border border-white/5 text-center font-medium transition-all truncate"
                >
                  {d}
                </Link>
              ))}
            </div>
          </div>

          {/* 인천 구·군 */}
          <div className="space-y-2 pt-3 border-t border-white/5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white">인천광역시 (11개 구·군)</span>
              <Link href="/incheon" className="text-[11px] text-gray-400 hover:text-white underline">인천 단독 페이지 보기 →</Link>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-2">
              {incheonDistricts.map((d) => (
                <Link
                  key={d}
                  href={`/incheon/${encodeURIComponent(d)}`}
                  className="text-xs bg-[#1a212d] hover:bg-[#66fcf1] hover:text-black text-gray-300 p-2.5 rounded-xl border border-white/5 text-center font-medium transition-all truncate"
                >
                  {d}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5코스 14선택지 코스·가격 테이블 */}
        <section id="courses" className="space-y-6">
          <div className="text-center space-y-1">
            <span className="text-xs font-black tracking-widest text-[#66fcf1] uppercase">
              COURSE & PRICE
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              수도권 출장 안심케어 5코스 & 14선택지 요금표
            </h2>
            <p className="text-xs text-gray-400">
              당일 컨디션과 원하시는 이용 시간을 먼저 알려주시면 빠른 배차 상담이 가능합니다.
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

        {/* 안심테라피 3대 원칙 배너 */}
        <section className="bg-gradient-to-r from-[#66fcf1]/10 via-[#45a29e]/5 to-transparent border-l-4 border-[#66fcf1] p-5 rounded-2xl space-y-1">
          <strong className="text-sm font-black text-white block">
            🔒 안심테라피 이용 3대 원칙
          </strong>
          <p className="text-xs text-gray-300 leading-relaxed">
            1. 예약금·선입금 요구 일절 없음 (사전 입금 유도는 사기이니 주의하세요).<br />
            2. 관리사가 고객 자택 또는 호텔·숙소에 도착한 뒤 프로그램을 확인하고 현장 결제합니다.<br />
            3. 투명한 정찰제 요금표를 준수하며 현장 부당 추가금을 청구하지 않습니다.
          </p>
        </section>

        {/* 아코디언 자주 묻는 질문 (FAQ) */}
        <section id="guide" className="space-y-4">
          <div className="text-center space-y-1">
            <span className="text-xs font-black tracking-widest text-[#66fcf1] uppercase">
              QUICK GUIDE
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              수도권 이용 전 자주 묻는 질문
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
            <span>서울·인천·경기 출장 안심케어 마사지 가이드</span>
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
            <div className="text-xs font-bold text-white truncate">안심테라피 수도권</div>
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