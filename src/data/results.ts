export interface ResultType {
  code: string;
  name: string;
  emoji: string;
  tagline: string;
  color: string;
  bgGradient: string;
  traits: string[];
  strategy: string[];
  careers: string[];
  compatibility: {
    best: string;
    bestDesc: string;
    worst: string;
    worstDesc: string;
  };
  quote: string;
}

export const results: Record<string, ResultType> = {
  ACS: {
    code: "ACS",
    name: "AI 크리에이터",
    emoji: "🤖🎨",
    tagline: "혼자서 AI로 콘텐츠 공장 돌리는 사람",
    color: "#8B5CF6",
    bgGradient: "from-violet-500 to-purple-600",
    traits: [
      "ChatGPT, Midjourney, Runway 다 섭렵함",
      '"이거 AI로 만들었어" 하면 다 본인 얘기',
      "혼자 작업할 때 몰입감 최고",
      "남들이 3일 걸릴 거 반나절에 끝냄",
    ],
    strategy: [
      "이미 생존 완료. 오히려 AI가 널 필요로 함",
      "단, 번아웃 주의. 혼자 다 하려다 지칠 수 있음",
    ],
    careers: ["1인 크리에이터", "프리랜서 디자이너", "콘텐츠 PD", "1인 에이전시"],
    compatibility: {
      best: "ADT",
      bestDesc: "니가 만들면 얘가 팔아줌",
      worst: "HDS",
      worstDesc: '"그거 검증됐어?" 소리에 답답함',
    },
    quote: "퇴근 후에도 AI 만지작거리는 거 취미임",
  },

  ACT: {
    code: "ACT",
    name: "AI 아트디렉터",
    emoji: "🎬✨",
    tagline: "AI 부리면서 팀 이끄는 크리에이티브 리더",
    color: "#EC4899",
    bgGradient: "from-pink-500 to-rose-600",
    traits: [
      "AI 툴 능숙 + 사람 다루기도 능숙",
      '"이거 AI로 해보자" 팀에 전파하는 역할',
      "아이디어 뱅크, 회의 때 존재감 확실",
      "결과물 퀄리티에 진심",
    ],
    strategy: [
      "크리에이티브 디렉터로 성장 가능성 높음",
      "AI 도입 주도하면서 팀 효율 올리는 역할 맡아봐",
    ],
    careers: ["크리에이티브 디렉터", "브랜드 매니저", "스타트업 Co-founder", "마케팅 리드"],
    compatibility: {
      best: "ACS",
      bestDesc: "니가 방향 잡으면 얘가 실행함",
      worst: "HCT",
      worstDesc: "주도권 싸움 날 수 있음",
    },
    quote: "팀원들 AI 교육시키는 거 내 숙명인 듯",
  },

  ADS: {
    code: "ADS",
    name: "데이터 해커",
    emoji: "📊💻",
    tagline: "AI로 분석 자동화하는 1인 데이터팀",
    color: "#3B82F6",
    bgGradient: "from-blue-500 to-indigo-600",
    traits: [
      "Python + ChatGPT 조합으로 뭐든 뽑아냄",
      "반복 작업? 자동화 안 하면 못 참음",
      "데이터로 말하는 타입, 감으로 안 함",
      "혼자 조용히 일할 때 효율 200%",
    ],
    strategy: [
      "자동화 능력은 어디서든 환영받음",
      '분석 결과를 "이야기"로 풀어내는 능력 기르면 레벨업',
    ],
    careers: ["데이터 분석가", "그로스 해커", "퀀트", "자동화 컨설턴트"],
    compatibility: {
      best: "ACT",
      bestDesc: "니 데이터에 얘가 스토리 입혀줌",
      worst: "HCS",
      worstDesc: "감성 vs 데이터 충돌",
    },
    quote: "엑셀 수작업하는 사람 보면 손이 근질근질",
  },

  ADT: {
    code: "ADT",
    name: "AI PM",
    emoji: "📋🚀",
    tagline: "AI 도구 도입해서 팀 생산성 2배로 만드는 사람",
    color: "#10B981",
    bgGradient: "from-emerald-500 to-teal-600",
    traits: [
      "새 AI 툴 나오면 팀에 바로 공유",
      "효율화에 진심, 프로세스 개선 좋아함",
      "데이터 기반으로 의사결정",
      "팀원들 업무 파악하고 최적화하는 게 재밌음",
    ],
    strategy: [
      "AI 시대 가장 필요한 인재상 그 자체",
      "PM/PO 커리어에서 AI 특화로 차별화 가능",
    ],
    careers: ["프로덕트 매니저", "AI 도입 컨설턴트", "운영 총괄", "COO"],
    compatibility: {
      best: "ACS",
      bestDesc: "얘 능력 200% 뽑아낼 수 있음",
      worst: "HDT",
      worstDesc: '"원래 하던 대로 하자"에 답답',
    },
    quote: "우리 팀 AI 도입률 사내 1등임 ㅎ",
  },

  HCS: {
    code: "HCS",
    name: "장인 크리에이터",
    emoji: "🎨🔥",
    tagline: "AI? 내 손맛을 못 따라오는데",
    color: "#F97316",
    bgGradient: "from-orange-500 to-amber-600",
    traits: [
      "본인만의 스타일과 감성이 확실함",
      "작업 과정 자체를 즐기는 타입",
      '"AI가 이걸 어떻게 해" 하는 영역이 있음',
      "혼자 몰입해서 작업할 때 행복",
    ],
    strategy: [
      '오히려 희소가치 상승 가능. "사람이 만든 것"의 프리미엄',
      "단, AI로 반복 작업은 줄이고 창작에 집중하면 효율 UP",
    ],
    careers: ["아티스트", "공예가", "장인", "프리미엄 브랜드 크리에이터"],
    compatibility: {
      best: "HCT",
      bestDesc: "니 작품 가치 알아보고 밀어줌",
      worst: "ADS",
      worstDesc: '"데이터가 이래서요"에 흥미 없음',
    },
    quote: "AI 그림? 뭔가 영혼이 없어...",
  },

  HCT: {
    code: "HCT",
    name: "휴먼 디렉터",
    emoji: "💖👥",
    tagline: "결국 사람 마음을 움직이는 건 사람이야",
    color: "#FBBF24",
    bgGradient: "from-yellow-400 to-orange-500",
    traits: [
      "팀 분위기 메이커, 사람 다루기 능숙",
      "감성적 터치가 필요한 일에 강함",
      "AI보다 직접 소통을 선호",
      "창의적이면서 리더십도 있음",
    ],
    strategy: [
      "휴먼터치 필요한 영역은 AI가 대체 못함",
      "AI는 보조 도구로 쓰고, 핵심은 사람 중심으로",
    ],
    careers: ["HR", "브랜딩", "고객경험(CX)", "교육/코칭", "커뮤니티 매니저"],
    compatibility: {
      best: "HCS",
      bestDesc: "좋은 콤비, 서로 존중",
      worst: "ACT",
      worstDesc: "방향성 충돌 가능",
    },
    quote: "AI 면접? 그건 좀 아닌 것 같은데...",
  },

  HDS: {
    code: "HDS",
    name: "전통 분석가",
    emoji: "🔍📈",
    tagline: "검증된 방법이 최고야, AI는 아직 글쎄",
    color: "#6B7280",
    bgGradient: "from-gray-500 to-slate-600",
    traits: [
      "꼼꼼함과 정확성이 장점",
      "섣부른 도입보다 신중한 검토 선호",
      "엑셀, SQL 등 기존 도구 마스터",
      "혼자 깊이 파고드는 작업 스타일",
    ],
    strategy: [
      "신중함이 장점이지만, 너무 늦으면 뒤처질 수 있음",
      "검증된 AI 도구부터 하나씩 도입해보는 건 어때?",
    ],
    careers: ["회계사", "리서처", "QA", "리스크 관리", "법무"],
    compatibility: {
      best: "HDT",
      bestDesc: "안정적인 조합",
      worst: "ACS",
      worstDesc: "속도 차이에 스트레스",
    },
    quote: "그거 환각 현상 있대, 나는 직접 확인함",
  },

  HDT: {
    code: "HDT",
    name: "클래식 매니저",
    emoji: "☕👔",
    tagline: "대면 회의가 최고, 사람이 모여야 일이 돼",
    color: "#A3653E",
    bgGradient: "from-amber-700 to-yellow-800",
    traits: [
      "조직 운영, 사람 관리에 강함",
      "안정적인 프로세스를 선호",
      "검증된 방식으로 확실하게 성과 냄",
      "팀워크와 소통 중시",
    ],
    strategy: [
      "조직 관리 능력은 여전히 중요함",
      "다만 팀에 AI 친화적인 사람 두고 협업하면 시너지",
    ],
    careers: ["팀장", "운영 매니저", "총무", "영업 관리", "프랜차이즈 운영"],
    compatibility: {
      best: "HDS",
      bestDesc: "믿음직한 파트너",
      worst: "ADT",
      worstDesc: "변화 속도 차이로 갈등",
    },
    quote: "슬랙 말고 그냥 잠깐 얘기해요",
  },
};
