import { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://ansim-therapy.netlify.app";
const PHONE_RAW = "05082011208";

export const metadata: Metadata = {
  title: "서울 출장 안심케어 마사지 | 일정에 맞춘 코스 비교 - 안심테라피",
  description: "안심테라피 서울 전 지역 안내. 스웨디시·아로마·타이 케어 5코스와 14개 시간·가격 선택지, 선입금 없는 100% 현장 후불제를 확인하세요.",
  alternates: { canonical: `${SITE_URL}/seoul` },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

const districts = [
  "강남구", "강동구", "강북구", "강서구", "관악구",
  "광진구", "구로구", "금천구", "노원구", "도봉구",
  "동대문구", "동작구", "마포구", "서대문구", "서초구",
  "성동구", "성북구", "송파구", "양천구", "영등포구",
  "용산구", "은평구", "종로구", "중구", "중랑구"
];

export default function SeoulPage() {
  return (
    <div className="bg-[#0b0c10] text-[#c5c6c7] min-h-screen font-sans pb-24">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 bg-[#0b0c10]/95 backdrop-blur-md border-b border-white/10 px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#66fcf1] text-[#0b0c10] flex items-center justify-center font-black text-sm">안</span>
            <span className="text-lg font-black text-white">안심테라피</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-gray-300">
            <Link href="/seoul" className="text-[#66fcf1]">서울</Link>
            <Link href="/gyeonggi" className="hover:text-white">경기</Link>
            <Link href="/incheon" className="hover:text-white">인천</Link>
          </nav>
          <a href={`tel:${PHONE_RAW}`} className="bg-[#66fcf1] text-[#0b0c10] font-black text-xs px-4 py-2 rounded-xl">
            ☎ 전화 상담
          </a>
        </div>
      </header>

      {/* 본문 */}
      <main className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        <section className="bg-gradient-to-b from-[#1f2833] to-[#141923] border border-white/10 rounded-3xl p-6 sm:p-10 space-y-4">
          <span className="text-xs font-black text-[#66fcf1] uppercase bg-[#66fcf1]/10 px-3 py-1 rounded-full border border-[#66fcf1]/30">
            SEOUL HOME CARE DIRECTORY
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-white">서울 출장 안심케어 마사지 지역 안내</h1>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            안심테라피 서울 안내. 이용 시간과 코스 차이를 한눈에 정리했습니다. 서울 25개 구 전역에서 선입금 없는 100% 현장 후불제로 안전하게 이용하세요.
          </p>
        </section>

        {/* 서울 구 선택 그리드 */}
        <section className="bg-[#12161f] border border-white/10 rounded-3xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-sm font-black text-white">서울 지역구 선택 (25개 구)</span>
            <div className="flex gap-2 text-xs">
              <span className="bg-[#66fcf1] text-black font-black px-2.5 py-1 rounded-md">서울</span>
              <Link href="/gyeonggi" className="bg-black/40 text-gray-400 px-2.5 py-1 rounded-md">경기</Link>
              <Link href="/incheon" className="bg-black/40 text-gray-400 px-2.5 py-1 rounded-md">인천</Link>
            </div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-2">
            {districts.map((d) => (
              <Link
                key={d}
                href={`/seoul/${encodeURIComponent(d)}`}
                className="text-xs bg-[#1a212d] hover:bg-[#66fcf1] hover:text-black text-gray-300 px-3 py-2.5 rounded-xl border border-white/5 text-center font-medium transition-all truncate"
              >
                {d}
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}