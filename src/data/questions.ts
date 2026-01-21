export interface Question {
  id: number;
  text: string;
  axis: 'AI' | 'STYLE' | 'COLLAB';
  options: {
    text: string;
    value: 'A' | 'H' | 'C' | 'D' | 'S' | 'T';
  }[];
}

export const questions: Question[] = [
  // AI 활용도 (A vs H) - 4문항
  {
    id: 1,
    text: "새로운 업무가 주어졌다",
    axis: 'AI',
    options: [
      { text: "일단 ChatGPT한테 물어본다", value: 'A' },
      { text: "일단 내가 먼저 생각해본다", value: 'H' },
    ],
  },
  {
    id: 2,
    text: "보고서 작성할 때",
    axis: 'AI',
    options: [
      { text: "AI로 초안 뽑고 내가 다듬는다", value: 'A' },
      { text: "처음부터 내가 쓴다, AI는 맞춤법 검사 정도", value: 'H' },
    ],
  },
  {
    id: 3,
    text: "새로운 AI 툴이 나왔다",
    axis: 'AI',
    options: [
      { text: "바로 써본다, 일단 질러", value: 'A' },
      { text: "후기 좀 보고 검증되면 써볼까", value: 'H' },
    ],
  },
  {
    id: 4,
    text: "AI가 만든 결과물에 대해",
    axis: 'AI',
    options: [
      { text: "꽤 쓸만함, 시간 아껴줘서 좋음", value: 'A' },
      { text: "결국 내가 다 고쳐야 해서 애매함", value: 'H' },
    ],
  },

  // 일하는 방식 (C 창의 vs D 분석) - 4문항
  {
    id: 5,
    text: "문제 해결할 때 나는",
    axis: 'STYLE',
    options: [
      { text: "새로운 방법 떠올리는 게 재밌다", value: 'C' },
      { text: "데이터 보고 논리적으로 접근한다", value: 'D' },
    ],
  },
  {
    id: 6,
    text: "회의 중 아이디어 낼 때",
    axis: 'STYLE',
    options: [
      { text: "엉뚱한 것도 일단 던진다", value: 'C' },
      { text: "근거 있는 것만 말한다", value: 'D' },
    ],
  },
  {
    id: 7,
    text: "업무 성과를 평가받을 때 듣고 싶은 말",
    axis: 'STYLE',
    options: [
      { text: '"이건 진짜 신선하다"', value: 'C' },
      { text: '"완벽하게 정리했네"', value: 'D' },
    ],
  },
  {
    id: 8,
    text: "나한테 더 맞는 업무는",
    axis: 'STYLE',
    options: [
      { text: "기획, 콘텐츠, 디자인", value: 'C' },
      { text: "분석, 리서치, 운영", value: 'D' },
    ],
  },

  // 협업 스타일 (S 솔로 vs T 팀플) - 4문항
  {
    id: 9,
    text: "프로젝트 진행 방식",
    axis: 'COLLAB',
    options: [
      { text: "혼자 맡아서 끝까지 하는 게 편함", value: 'S' },
      { text: "역할 나눠서 같이 하는 게 좋음", value: 'T' },
    ],
  },
  {
    id: 10,
    text: "재택 vs 출근",
    axis: 'COLLAB',
    options: [
      { text: "재택 최고, 혼자 집중 잘 됨", value: 'S' },
      { text: "사람들이랑 있어야 일이 됨", value: 'T' },
    ],
  },
  {
    id: 11,
    text: "슬랙/카톡 업무 메시지",
    axis: 'COLLAB',
    options: [
      { text: "최소한으로, 정리해서 한번에", value: 'S' },
      { text: "수시로 공유하면서 진행", value: 'T' },
    ],
  },
  {
    id: 12,
    text: "성과를 낼 때 더 뿌듯한 건",
    axis: 'COLLAB',
    options: [
      { text: "내가 처음부터 끝까지 해낸 것", value: 'S' },
      { text: "팀이랑 같이 만들어낸 것", value: 'T' },
    ],
  },
];
