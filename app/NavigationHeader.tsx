"use client";

import { useState } from "react";
import Link from "next/link";

const PHONE_RAW = "05082011208";

export default function NavigationHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0b0c10]/95 backdrop-blur-xl border-b border-white/10 px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* 로고 영역 */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#66fcf1] to-[#45a29e] flex items-center justify-center font-black text-black text-lg shadow-[0_0_12px_rgba(102,252,241,0.4)] group-hover:scale-105 transition-transform flex-shrink-0">
            안
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-wider text-white">
              안심테라피
            </span>
            <span className="text-[9px] text-[#45a29e] tracking-tight hidden sm:block">
              ANSIM THERAPY DIRECTORY
            </span>
          </div>
        </Link>

        {/* 데스크톱 카테고리 메뉴 목록 (서울, 경기, 인천 단독 페이지 연결) */}
        <nav
          aria-label="주요 메뉴"
          className="hidden md:flex items-center gap-6 text-xs font-bold text-gray-300"
        >
          <Link
            href="/seoul"
            className="hover:text-[#66fcf1] transition-colors flex items-center gap-1"
          >
            서울
          </Link>

          <Link
            href="/gyeonggi"
            className="hover:text-[#66fcf1] transition-colors flex items-center gap-1"
          >
            경기
          </Link>

          <Link
            href="/incheon"
            className="hover:text-[#66fcf1] transition-colors flex items-center gap-1"
          >
            인천
          </Link>

          <a
            href="/#courses"
            className="hover:text-[#66fcf1] transition-colors flex items-center gap-1"
          >
            코스·가격
          </a>

          <a
            href="/#guide"
            className="hover:text-[#66fcf1] transition-colors flex items-center gap-1"
          >
            이용 안내
          </a>
        </nav>

        {/* 우측 빠른 문의 CTA 및 모바일 햄버거 버튼 */}
        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_RAW}`}
            className="bg-[#66fcf1] hover:bg-[#45a29e] text-[#0b0c10] font-black text-xs px-3.5 py-2 rounded-xl shadow transition-all active:scale-95"
          >
            ☎ 전화 상담
          </a>

          {/* 모바일 햄버거 토글 버튼 */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-[#66fcf1] rounded-lg border border-white/10"
            aria-label="메뉴 열기"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 mt-3 pt-3 space-y-2 text-xs font-bold text-gray-300">
          <Link
            href="/seoul"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg hover:bg-white/5 hover:text-[#66fcf1]"
          >
            📍 서울 안심케어
          </Link>
          <Link
            href="/gyeonggi"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg hover:bg-white/5 hover:text-[#66fcf1]"
          >
            📍 경기 안심케어
          </Link>
          <Link
            href="/incheon"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg hover:bg-white/5 hover:text-[#66fcf1]"
          >
            📍 인천 안심케어
          </Link>
          <a
            href="/#courses"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg hover:bg-white/5 hover:text-[#66fcf1]"
          >
            💎 코스·가격표
          </a>
          <a
            href="/#guide"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg hover:bg-white/5 hover:text-[#66fcf1]"
          >
            ❓ 이용 안내 및 FAQ
          </a>
        </div>
      )}
    </header>
  );
}