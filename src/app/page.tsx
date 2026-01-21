"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-8">
        {/* 이모지 아이콘 */}
        <div className="text-7xl animate-bounce">
          🤖
        </div>

        {/* 타이틀 */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-white">
            AI 시대 생존 유형
          </h1>
          <p className="text-xl text-purple-200">
            테스트
          </p>
        </div>

        {/* 설명 */}
        <p className="text-gray-300 text-lg leading-relaxed">
          AI 시대, 당신은 어떤 유형으로<br />
          살아남을까요?
        </p>

        {/* 정보 */}
        <div className="flex justify-center gap-6 text-sm text-gray-400">
          <span>12문항</span>
          <span>•</span>
          <span>약 2분 소요</span>
        </div>

        {/* 시작 버튼 */}
        <Link
          href="/quiz"
          className="inline-block w-full py-4 px-8 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-lg font-semibold rounded-2xl hover:from-violet-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:scale-105"
        >
          테스트 시작하기
        </Link>

        {/* 푸터 */}
        <p className="text-xs text-gray-500 pt-4">
          8가지 유형 중 당신은?
        </p>
      </div>
    </main>
  );
}
