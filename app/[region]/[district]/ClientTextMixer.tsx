"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface ShopItem {
  id: number | string;
  name: string;
  desc: string;
  phone: string;
  price: string;
  image: string;
}

interface ClientTextMixerProps {
  region: string;
  district: string;
  dongName?: string;
  shops?: ShopItem[];
}

const SITE_URL = "https://ansim-therapy.netlify.app";

// 🌟 안심테라피 전용 선입금 0원 후불 정찰제 10대 키워드 패턴
const WELLNESS_PATTERNS = [
  "선입금 없는 출장 안심 마사지 & 바디케어 안내",
  "100% 현장 후불 출장 타이 마사지 릴렉스 프로그램",
  "선입금 0원 출장 아로마 마사지 천연 오일 순환 케어",
  "출장 스웨디시 마사지 & 감성 안심 테라피",
  "프라이빗 1:1 맞춤형 출장 안심 바디 마사지",
  "출장 딥티슈 마사지 & 집중 피로회복 솔루션",
  "출장 림프케어 마사지 & 바디 밸런스 트리트먼트",
  "출장 건식 릴렉스 마사지 & 전신 스트레칭 정찰제",
  "출장 안심 케어 마사지 & 투명한 후불 요금 가이드",
  "출장 나이트 안심 힐링 마사지 & 편안한 이완 케어"
];

const defaultShops: ShopItem[] = [
  {
    id: 1,
    name: "안심프라임테라피",
    desc: "선입금 없는 100% 현장 후불제! 전문 테라피스트의 정성 어린 감성 바디 테라피",
    phone: "0508-201-1208",
    price: "70,000원부터~",
    image: "/assets/hayoung-card-01.webp",
  },
  {
    id: 2,
    name: "오늘밤안심케어",
    desc: "최고급 천연 아로마 오일을 활용한 전신 이완 및 림프 순환 케어 전문 프로그램",
    phone: "0508-201-1208",
    price: "80,000원부터~",
    image: "/assets/hayoung-card-02.webp",
  },
  {
    id: 3,
    name: "주주안심홈타이",
    desc: "재방문율 높은 안심 케어! 철저한 위생 관리와 품격 있는 정통 타이 & 릴렉싱",
    phone: "0508-201-1208",
    price: "90,000원부터~",
    image: "/assets/hayoung-card-03.webp",
  },
  {
    id: 4,
    name: "골든안심테라피",
    desc: "전문 힐러진의 맞춤형 바디 관리, 시간대별 편안한 VIP 피로회복 솔루션",
    phone: "0508-201-1208",
    price: "80,000원부터~",
    image: "/assets/hayoung-card-04.webp",
  },
  {
    id: 5,
    name: "퀸즈안심홈케어",
    desc: "수도권 전지역 엄선된 파트너! 정직한 정찰제와 함께하는 프라이빗 힐링 테라피",
    phone: "0508-201-1208",
    price: "140,000원부터~",
    image: "/assets/hayoung-card-05.webp",
  },
];

export default function ClientTextMixer({
  region,
  district,
  dongName,
  shops = defaultShops
}: ClientTextMixerProps) {
  const [displayShops, setDisplayShops] = useState(shops);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const shuffled = [...shops];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setDisplayShops(shuffled);
  }, [shops]);

  const locationText = dongName ? `${district} ${dongName}`.trim() : `${district}`.trim();
  const shopsToRender = mounted ? displayShops : shops;

  // 🌟 네이버 서치어드바이저 수집 봇과 구글 검색엔진을 위한 ItemList + HealthAndBeautyBusiness 정형 데이터
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: shopsToRender.map((shop, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "HealthAndBeautyBusiness",
        name: `${locationText} ${shop.name}`,
        description: shop.desc,
        telephone: shop.phone,
        priceRange: shop.price,
        image: `${SITE_URL}${shop.image}`
      }
    }))
  };

  return (
    <div className="space-y-8">
      {/* 검색엔진용 ItemList 정형 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* 제휴 샵 리스트 섹션 */}
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-black text-[#66fcf1] tracking-wider uppercase">
            🏆 {locationText} 안심 후불 추천 제휴점
          </h3>
          <span className="text-[11px] text-gray-500">선입금 0원 정찰제 제휴 센터</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {shopsToRender.map((shop) => {
            const shopDetailUrl = dongName
              ? `/${region}/${encodeURIComponent(district)}/${encodeURIComponent(dongName)}/shop/${shop.id}`
              : `/${region}/${encodeURIComponent(district)}/shop/${shop.id}`;

            return (
              <div
                key={shop.id}
                className="bg-[#141923] border border-[#66fcf1]/20 hover:border-[#66fcf1]/60 rounded-2xl p-4 flex gap-4 items-center shadow-lg transition-all group"
              >
                {/* 썸네일 이미지 링크 */}
                <Link
                  href={shopDetailUrl}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shrink-0 border border-white/10 block"
                  aria-label={`${shop.name} 상세 정보 보기`}
                >
                  <img
                    src={shop.image}
                    alt={`${locationText} 출장 마사지 - ${shop.name}`}
                    width={96}
                    height={96}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </Link>

                {/* 텍스트 및 상세 링크 */}
                <div className="flex-1 min-w-0">
                  <Link href={shopDetailUrl} className="block">
                    <h4 className="font-extrabold text-sm md:text-base text-white truncate group-hover:text-[#66fcf1] transition-colors">
                      {shop.name}
                    </h4>
                  </Link>

                  <p className="text-[11px] text-gray-400 mt-1 line-clamp-2 leading-snug">
                    {shop.desc}
                  </p>

                  <div className="mt-2.5 flex items-center justify-between">
                    <span className="text-xs font-black text-[#66fcf1]">
                      {shop.price}
                    </span>

                    {/* 유선 연결 버튼 */}
                    <a
                      href={`tel:${shop.phone.replace(/-/g, "")}`}
                      className="bg-[#66fcf1] hover:bg-[#45a29e] text-[#0b0c10] font-black text-xs px-3.5 py-1.5 rounded-xl shadow hover:brightness-105 active:scale-95 transition-all"
                    >
                      전화연결
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}