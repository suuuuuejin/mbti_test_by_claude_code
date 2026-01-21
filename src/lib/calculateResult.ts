type Answer = 'A' | 'H' | 'C' | 'D' | 'S' | 'T';

export function calculateResult(answers: Answer[]): string {
  const counts = {
    A: 0,
    H: 0,
    C: 0,
    D: 0,
    S: 0,
    T: 0,
  };

  answers.forEach((answer) => {
    counts[answer]++;
  });

  // AI 활용도: A vs H (4문항)
  const aiAxis = counts.A >= counts.H ? 'A' : 'H';

  // 일하는 방식: C vs D (4문항)
  const styleAxis = counts.C >= counts.D ? 'C' : 'D';

  // 협업 스타일: S vs T (4문항)
  const collabAxis = counts.S >= counts.T ? 'S' : 'T';

  return `${aiAxis}${styleAxis}${collabAxis}`;
}
