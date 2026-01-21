"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { results } from "@/data/results";
import { useRef } from "react";

export default function ResultPage() {
  const params = useParams();
  const type = params.type as string;
  const result = results[type];
  const resultCardRef = useRef<HTMLDivElement>(null);

  if (!result) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">결과를 찾을 수 없습니다</h1>
          <Link href="/" className="text-purple-400 hover:underline">
            처음으로 돌아가기
          </Link>
        </div>
      </main>
    );
  }

  const handleShare = async () => {
    const shareData = {
      title: `AI 시대 생존 유형: ${result.name}`,
      text: `나의 AI 시대 생존 유형은 "${result.name}" - ${result.tagline}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("공유 취소");
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("링크가 복사되었습니다!");
    }
  };

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    alert("링크가 복사되었습니다!");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-6">
      <div className="max-w-md mx-auto space-y-6">
        {/* 결과 카드 */}
        <div
          ref={resultCardRef}
          className={`bg-gradient-to-br ${result.bgGradient} rounded-3xl p-8 text-white shadow-2xl`}
        >
          {/* 이모지 */}
          <div className="text-6xl text-center mb-4">{result.emoji}</div>

          {/* 유형 코드 */}
          <div className="text-center mb-2">
            <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-mono">
              {result.code}
            </span>
          </div>

          {/* 유형명 */}
          <h1 className="text-3xl font-bold text-center mb-2">{result.name}</h1>

          {/* 태그라인 */}
          <p className="text-center text-white/90 text-lg mb-6">
            &ldquo;{result.tagline}&rdquo;
          </p>

          {/* 구분선 */}
          <div className="border-t border-white/20 my-6" />

          {/* 특징 */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white/80 text-sm">이런 사람이에요</h3>
            <ul className="space-y-2">
              {result.traits.map((trait, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-white/60">•</span>
                  <span>{trait}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 생존 전략 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
          <h3 className="font-bold text-lg mb-3">AI 시대 생존 전략</h3>
          <ul className="space-y-2">
            {result.strategy.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-purple-400">💡</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 추천 커리어 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
          <h3 className="font-bold text-lg mb-3">추천 커리어</h3>
          <div className="flex flex-wrap gap-2">
            {result.careers.map((career, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-white/10 rounded-full text-sm"
              >
                {career}
              </span>
            ))}
          </div>
        </div>

        {/* 궁합 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
          <h3 className="font-bold text-lg mb-4">유형 궁합</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-500/20 rounded-xl p-4">
              <p className="text-xs text-green-300 mb-1">찰떡궁합</p>
              <p className="font-bold text-green-400">{result.compatibility.best}</p>
              <p className="text-xs text-gray-300 mt-1">{result.compatibility.bestDesc}</p>
            </div>
            <div className="bg-red-500/20 rounded-xl p-4">
              <p className="text-xs text-red-300 mb-1">주의</p>
              <p className="font-bold text-red-400">{result.compatibility.worst}</p>
              <p className="text-xs text-gray-300 mt-1">{result.compatibility.worstDesc}</p>
            </div>
          </div>
        </div>

        {/* 한마디 */}
        <div className="bg-white/5 rounded-2xl p-6 text-center">
          <p className="text-gray-300 italic">&ldquo;{result.quote}&rdquo;</p>
        </div>

        {/* 공유 버튼들 */}
        <div className="space-y-3 pt-4">
          <button
            onClick={handleShare}
            className="w-full py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-2xl hover:from-violet-600 hover:to-purple-700 transition-all"
          >
            결과 공유하기
          </button>
          <button
            onClick={handleCopyLink}
            className="w-full py-4 bg-white/10 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all"
          >
            링크 복사하기
          </button>
          <Link
            href="/"
            className="block w-full py-4 text-center text-gray-400 hover:text-white transition-colors"
          >
            테스트 다시하기
          </Link>
        </div>

        {/* 해시태그 */}
        <div className="text-center text-gray-500 text-sm pt-4">
          #AI시대생존유형 #{result.code}
        </div>
      </div>
    </main>
  );
}
