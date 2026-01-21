"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/data/questions";
import { calculateResult } from "@/lib/calculateResult";

type Answer = 'A' | 'H' | 'C' | 'D' | 'S' | 'T';

export default function QuizPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  const handleAnswer = (value: Answer) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setIsTransitioning(false);
      } else {
        const result = calculateResult(newAnswers);
        router.push(`/result/${result}`);
      }
    }, 300);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full space-y-8">
        {/* 프로그레스 바 */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-400">
            <span>Q{currentIndex + 1}</span>
            <span>{currentIndex + 1} / {questions.length}</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* 질문 */}
        <div
          className={`transition-all duration-300 ${
            isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
          }`}
        >
          <h2 className="text-2xl font-bold text-white text-center py-8">
            {currentQuestion.text}
          </h2>

          {/* 선택지 */}
          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                disabled={isTransitioning}
                className="w-full p-5 text-left bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white hover:bg-white/20 hover:border-purple-400 transition-all duration-200 hover:scale-[1.02] disabled:opacity-50"
              >
                <span className="text-purple-400 font-semibold mr-3">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option.text}
              </button>
            ))}
          </div>
        </div>

        {/* 뒤로가기 */}
        {currentIndex > 0 && (
          <button
            onClick={() => {
              setCurrentIndex(currentIndex - 1);
              setAnswers(answers.slice(0, -1));
            }}
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            ← 이전 질문
          </button>
        )}
      </div>
    </main>
  );
}
