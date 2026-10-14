import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const SITE_URL = "https://ansim-therapy.netlify.app";
const PHONE_NUMBER = "0507-1280-3183";
const PHONE_RAW = "050712803183";

interface PageProps {
  params: Promise<{
    region: string;
    district: string;
  }>;
}

function safeDecode(str: string): string {
  if (!str) return "";
  let decoded = str;
  try {
    decoded = decodeURIComponent(decodeURIComponent(str));
  } catch {
    try {
      decoded = decodeURIComponent(str);
    } catch {
      decoded = str;
    }
  }
  return decoded.trim();
}

function getRegionFullName(region: string): string {
  switch (region?.toLowerCase()) {
    case "seoul":
      return "서울특별시";
    case "gyeonggi":
      return "경기도";
    case "incheon":
      return "인천광역시";
    default:
      return region || "";
  }
}

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

// 예시 동별 제휴업체 데이터 (필요에 따라 확장 가능)
const sampleDongPartners = [
  { dong: "삼성동", partners: ["편안이완 마사지", "균형관리 안마", "휴식케어 마사지", "맞춤관리 안마", "소프트케어 마사지"] },
  { dong: "신사동", partners: ["편안이완 마사지", "균형관리 안마", "휴식케어 마사지", "맞춤관리 안마", "소프트케어 마사지"] },
  { dong: "개포동", partners: ["편안이완 마사지", "균형관리 안마", "휴식케어 마사지", "맞춤관리 안마", "소프트케어 마사지"] },
  { dong: "논현동", partners: ["편안이완 마사지", "균형관리 안마", "휴식케어 마사지", "맞춤관리 안마", "소프트케어 마사지"] },
  { dong: "대치동", partners: ["편안이완 마사지", "균형관리 안마", "휴식케어 마사지", "맞춤관리 안마", "소프트케어 마사지"] },
  { dong: "도곡동", partners: ["편안이완 마사지", "균형관리 안마", "휴식케어 마사지", "맞춤관리 안마", "소프트케어 마사지"] },
  { dong: "역삼동", partners: ["편안이완 마사지", "균형관리 안마", "휴식케어 마사지", "맞춤관리 안마", "소프트케어 마사지"] },
  { dong: "청담동", partners: ["편안이완 마사지", "균형관리 안마", "휴식케어 마사지", "맞춤관리 안마", "소프트케어 마사지"] },
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { region, district } = await params;
  const regionName = getRegionFullName(region);
  const districtName = safeDecode(district);

  const title = `${regionName.replace(/광역시|특별시|경기도/, "")} ${districtName} 출장 홈케어 마사지 | 차분하게 고르는 홈타이 코스 - 안심테라피`;
  const description = `안심테라피 ${regionName} ${districtName} 안내. 방문 전 확인할 준비사항과 가격 기준을 담았습니다. 스웨디시·아로마·타이 케어 5코스와 14개 시간·가격 선택지를 확인하세요.`;
  const canonicalUrl = `${SITE_URL}/${region}/${encodeURIComponent(districtName)}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: canonicalUrl },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonicalUrl,
      siteName: "안심테라피",
      locale: "ko_KR",
      images: [{ url: `${SITE_URL}/assets/hayoung-og-1200x630.png`, width: 1200, height: 630, alt: title }],
    },
  };
}

export default async function DistrictDetailPage({ params }: PageProps) {
  const { region, district } = await params;
  const regionName = getRegionFullName(region);
  const districtName = safeDecode(district);

  if (!regionName) notFound();

  const currentUrl = `${SITE_URL}/${region}/${encodeURIComponent(districtName)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${currentUrl}/#webpage`,
        url: currentUrl,
        name: `${regionName} ${districtName} 출장 홈케어 마사지 | 차분하게 고르는 홈타이 코스 - 안심테라피`,
        description: `안심테라피 ${regionName} ${districtName} 안내. 방문 전 확인할 준비사항과 가격 기준을 담았습니다.`,
        about: [`${regionName} ${districtName}`, "출장 홈케어 마사지", "홈타이", "아로마", "스웨디시"],
      },
      {
        "@type": ["HealthAndBeautyBusiness", "LocalBusiness"],
        "@id": `${currentUrl}/#business`,
        name: `안심테라피 ${districtName}점`,
        url: currentUrl,
        telephone: PHONE_NUMBER,
        priceRange: "70,000원~170,000원",
        areaServed: { "@type": "AdministrativeArea", name: `${regionName} ${districtName}` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${districtName} 출장 케어 5코스 14선택지`,
          itemListElement: courseTable.flatMap((course) =>
            course.prices.map((p) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: `${course.name} (${p.time})`, description: course.desc },
              price: p.price.replace(/[^0-9]/g, ""),
              priceCurrency: "KRW",
              availability: "https://schema.org/InStock",
            }))
          ),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${currentUrl}/#faq`,
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
      {/* 구조화 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-[#0b0c10]/95 backdrop-blur-md border-b border-white/10 px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#66fcf1] text-[#0b0c10] flex items-center justify-center font-black text-sm">안</span>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-wider text-white">안심테라피</span>
              <span className="text-[9px] text-[#45a29e] tracking-tight">ANSIM THERAPY DIRECTORY</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-gray-300">
            <Link href="/" className="hover:text-[#66fcf1]">홈</Link>
            <Link href="/seoul" className="hover:text-[#66fcf1]">서울</Link>
            <Link href="/incheon" className="hover:text-[#66fcf1]">인천</Link>
            <Link href="/gyeonggi" className="hover:text-[#66fcf1]">경기</Link>
            <a href="#courses" className="hover:text-[#66fcf1]">코스·가격</a>
            <a href="#guide" className="hover:text-[#66fcf1]">이용 안내</a>
          </nav>
          <a
            href={`tel:${PHONE_RAW}`}
            className="bg-[#66fcf1] hover:bg-[#45a29e] text-[#0b0c10] font-black text-xs px-4 py-2 rounded-xl transition-all shadow-[0_0_15px_rgba(102,252,241,0.25)] flex items-center gap-1.5"
          >
            <span>☎</span> 전화 상담
          </a>
        </div>
      </header>

      {/* 본문 레이아웃 (사이드바 + 메인 콘텐츠) */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 사이드바 */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-[#12161f] border border-white/10 rounded-2xl p-5 space-y-4 text-xs">
              <h2 className="text-sm font-black text-white border-b border-white/10 pb-2">카테고리</h2>
              <details open className="space-y-1">
                <summary className="font-bold text-[#66fcf1] cursor-pointer">지역별 안내</summary>
                <div className="pl-3 pt-2 flex flex-col gap-1.5 text-gray-400">
                  <Link href="/seoul" className="hover:text-white">서울</Link>
                  <Link href="/incheon" className="hover:text-white">인천</Link>
                  <Link href="/gyeonggi" className="hover:text-white">경기</Link>
                </div>
              </details>
              <details open className="space-y-1 pt-2">
                <summary className="font-bold text-[#66fcf1] cursor-pointer">관리 방식</summary>
                <div className="pl-3 pt-2 flex flex-col gap-1.5 text-gray-400">
                  <a href="#courses" className="hover:text-white">릴렉스 밸런스</a>
                  <a href="#courses" className="hover:text-white">아로마 리듬</a>
                  <a href="#courses" className="hover:text-white">스웨디시 플로우</a>
                  <a href="#courses" className="hover:text-white">타이 스트레칭</a>
                  <a href="#courses" className="hover:text-white">안심 시그니처</a>
                </div>
              </details>
            </div>

            <div className="bg-gradient-to-b from-[#1f2833] to-[#141923] border border-white/10 rounded-2xl p-5 space-y-2 text-xs">
              <h3 className="text-sm font-bold text-white">안심테라피 안내</h3>
              <p className="text-gray-300 leading-relaxed">
                {regionName} {districtName} 일정과 희망 코스를 준비한 뒤 전화 상담 버튼을 눌러 주세요.
              </p>
              <span className="inline-block text-[#66fcf1] font-bold pt-1">매일 24시간 상담 가능</span>
            </div>

            <div className="bg-[#141923] border border-[#66fcf1]/30 rounded-2xl p-5 space-y-1 text-xs">
              <strong className="text-[#66fcf1] font-black block">선입금 없이</strong>
              <strong className="text-white block text-sm">현장 확인 후 이용</strong>
              <p className="text-gray-400 text-[11px] pt-1">코스와 시간은 상담 시 다시 확인합니다.</p>
            </div>
          </aside>

          {/* 메인 상세 콘텐츠 */}
          <article className="lg:col-span-3 space-y-10">
            {/* 타이틀 및 히어로 */}
            <div className="bg-[#141923] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4">
              <span className="text-xs font-bold text-[#66fcf1]">
                {regionName} · {districtName}
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-white">
                {regionName.replace(/광역시|특별시|경기도/, "")} {districtName} 출장 홈케어 마사지 코스 안내
              </h1>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                안심테라피 {regionName.replace(/광역시|특별시|경기도/, "")} {districtName} 안내. 방문 전 확인할 준비사항과 가격 기준을 담았습니다.
                스웨디시·아로마·타이 케어 5코스와 14개 시간·가격 선택지를 확인하세요.
              </p>
            </div>

            {/* 내부 탭 네비게이션 */}
            <nav className="flex flex-wrap gap-2 text-xs font-bold">
              <a href="#info" className="bg-[#1f2833] hover:bg-[#66fcf1] hover:text-black px-4 py-2 rounded-xl border border-white/10 transition-all">업체정보</a>
              <a href="#courses" className="bg-[#1f2833] hover:bg-[#66fcf1] hover:text-black px-4 py-2 rounded-xl border border-white/10 transition-all">코스·가격</a>
              <a href="#guide" className="bg-[#1f2833] hover:bg-[#66fcf1] hover:text-black px-4 py-2 rounded-xl border border-white/10 transition-all">상세안내</a>
              <a href="#regions" className="bg-[#1f2833] hover:bg-[#66fcf1] hover:text-black px-4 py-2 rounded-xl border border-white/10 transition-all">지역안내</a>
            </nav>

            {/* 정보 그리드 */}
            <section id="info" className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-[#141923] border border-white/10 p-4 rounded-2xl space-y-1">
                <span className="text-gray-400 block">안내 지역</span>
                <strong className="text-white text-sm">{regionName.replace(/광역시|특별시|경기도/, "")} {districtName}</strong>
              </div>
              <div className="bg-[#141923] border border-white/10 p-4 rounded-2xl space-y-1">
                <span className="text-gray-400 block">상담 방식</span>
                <strong className="text-white text-sm">전화 상담</strong>
              </div>
              <div className="bg-[#141923] border border-white/10 p-4 rounded-2xl space-y-1">
                <span className="text-gray-400 block">결제 기준</span>
                <strong className="text-white text-sm">현장 후불</strong>
              </div>
              <div className="bg-[#141923] border border-white/10 p-4 rounded-2xl space-y-1">
                <span className="text-gray-400 block">이용 시간</span>
                <strong className="text-white text-sm">60 · 90 · 120분</strong>
              </div>
            </section>

            {/* 5코스 14선택지 요금표 */}
            <section id="courses" className="space-y-6">
              <div className="border-b border-white/10 pb-3">
                <span className="text-xs font-black tracking-widest text-[#66fcf1] uppercase">COURSE & PRICE</span>
                <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                  {regionName.replace(/광역시|특별시|경기도/, "")} {districtName} 케어 코스·가격
                </h2>
                <p className="text-xs text-gray-400 mt-1">당일 컨디션과 원하는 시간을 먼저 알려주면 상담이 한결 빠릅니다.</p>
              </div>

              <div className="space-y-4">
                {courseTable.map((course) => (
                  <div key={course.no} className="bg-[#141923] border border-white/10 rounded-2xl p-5 space-y-3">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[#66fcf1] font-black">{course.no}</span>
                        <h3 className="text-base sm:text-lg font-black text-white">{course.name}</h3>
                      </div>
                      <span className="text-[11px] text-gray-400">100% 현장 후불</span>
                    </div>
                    <p className="text-xs text-gray-300">{course.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                      {course.prices.map((p, idx) => (
                        <div key={idx} className="bg-black/50 border border-white/5 p-3 rounded-xl flex items-center justify-between">
                          <span className="text-xs text-gray-400 font-bold">{p.time}</span>
                          <strong className="text-xs sm:text-sm text-[#66fcf1] font-black">{p.price}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 상세 안내 아티클 */}
            <section className="article-copy bg-[#141923] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4 text-xs sm:text-sm leading-relaxed text-gray-300">
              <h2 className="text-lg font-black text-white">
                {regionName.replace(/광역시|특별시|경기도/, "")} {districtName} 출장 케어 마사지 이용 흐름
              </h2>
              <p>
                {regionName.replace(/광역시|특별시|경기도/, "")} {districtName} 일정은 현재 위치와 희망 시작 시간을 기준으로 먼저 확인합니다. 이동 가능 여부가 정리되면 원하는 관리 방식과 집중 부위를 차례로 비교합니다.
              </p>
              <h3 className="text-base font-bold text-white pt-2">코스 선택 기준</h3>
              <p>
                가볍게 몸을 풀고 싶다면 릴렉스 밸런스, 오일 리듬을 선호한다면 아로마와 스웨디시, 유연한 이완을 원한다면 타이 스트레칭을 살펴보세요. 무리한 표현보다 그날의 컨디션을 구체적으로 설명하는 편이 알맞습니다.
              </p>
              <h3 className="text-base font-bold text-white pt-2">상담 전 준비사항</h3>
              <p>
                주소 전체를 페이지에 남길 필요는 없습니다. 상담이 연결되면 지역과 건물 유형, 희망 시간, 코스 길이를 확인합니다. 실제 가능 여부와 비용은 현장에서 다시 확인합니다.
              </p>
            </section>

            {/* 동별 세부 제휴업체 디렉토리 아코디언 */}
            <section id="regions" className="bg-[#12161f] border border-white/10 rounded-3xl p-6 space-y-4">
              <div className="border-b border-white/10 pb-3">
                <span className="text-xs font-black text-[#66fcf1] uppercase tracking-widest">REGION DIRECTORY</span>
                <h2 className="text-lg sm:text-xl font-black text-white mt-1">
                  {regionName.replace(/광역시|특별시|경기도/, "")} {districtName} 세부 지역 제휴업체
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">지역을 선택하면 해당 제휴업체 안내를 확인하실 수 있습니다.</p>
              </div>

              <div className="space-y-3">
                {sampleDongPartners.map((item, idx) => (
                  <details key={idx} className="bg-[#1a212d] border border-white/5 rounded-2xl p-4 group">
                    <summary className="text-xs sm:text-sm font-bold text-white cursor-pointer list-none flex items-center justify-between">
                      <span>{regionName.replace(/광역시|특별시|경기도/, "")} {districtName} {item.dong}</span>
                      <span className="text-[11px] text-[#66fcf1]">제휴업체 {item.partners.length}곳</span>
                    </summary>
                    <div className="pt-3 mt-3 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.partners.map((partner, pIdx) => (
                        <div key={pIdx} className="bg-black/40 border border-white/5 p-2.5 rounded-xl text-xs text-gray-300 flex items-center justify-between">
                          <span>{regionName.replace(/광역시|특별시|경기도/, "")} {districtName} {item.dong} 출장 {partner}</span>
                          <a href={`tel:${PHONE_RAW}`} className="text-[#66fcf1] font-bold text-[11px] bg-[#66fcf1]/10 px-2 py-1 rounded-lg">전화상담</a>
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* FAQ 아코디언 */}
            <section id="guide" className="space-y-4">
              <div className="border-b border-white/10 pb-3">
                <span className="text-xs font-black tracking-widest text-[#66fcf1] uppercase">QUICK GUIDE</span>
                <h2 className="text-lg sm:text-xl font-black text-white mt-1">
                  {regionName.replace(/광역시|특별시|경기도/, "")} {districtName} 이용 전 자주 묻는 질문
                </h2>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <details key={idx} className="bg-[#141923] border border-white/10 rounded-2xl p-4 group">
                    <summary className="text-xs sm:text-sm font-bold text-white cursor-pointer list-none flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <span className="text-[#66fcf1] font-black">0{idx + 1}</span>
                        {faq.q}
                      </span>
                      <span className="text-[#66fcf1] font-black text-lg transition-transform group-open:rotate-180">⌄</span>
                    </summary>
                    <p className="text-xs text-gray-400 leading-relaxed pt-3 mt-3 border-t border-white/5 pl-6">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </article>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="bg-[#07080a] border-t border-white/10 py-10 text-center text-xs text-gray-500 mt-12">
        <div className="max-w-5xl mx-auto px-4 space-y-4">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-400">
            <span>서울·인천·경기 지역별 출장 케어 마사지 가이드</span>
            <span className="hidden sm:inline">•</span>
            <span>선입금 0원 100% 현장 후불 정찰제</span>
          </div>
          <p className="text-[11px] text-gray-600">COPYRIGHT &copy; ANSIM THERAPY ALL RIGHTS RESERVED.</p>
        </div>
      </footer>

      {/* 모바일 하단 플로팅 전화 상담 바 */}
      <aside className="fixed bottom-0 left-0 right-0 z-50 bg-[#0b0c10]/95 border-t border-white/10 p-3 shadow-2xl backdrop-blur-md md:hidden">
        <div className="max-w-md mx-auto flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-white truncate">{regionName.replace(/광역시|특별시|경기도/, "")} {districtName} 안심케어</div>
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