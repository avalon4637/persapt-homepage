"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "ko";

type Translations = {
  [key: string]: { en: string; ko: string };
};

const translations: Translations = {
  // Nav
  "nav.about": { en: "About", ko: "소개" },
  "nav.products": { en: "Products", ko: "프로덕트" },
  "nav.technology": { en: "Technology", ko: "기술" },
  "nav.whynow": { en: "Why Now", ko: "왜 지금인가" },
  "nav.contact": { en: "Contact", ko: "문의" },
  "nav.blog": { en: "Blog", ko: "블로그" },
  "nav.careers": { en: "Careers", ko: "채용" },

  // Hero
  "hero.tag": { en: "From SaaS to AaaS", ko: "SaaS에서 AaaS로" },
  "hero.title1": { en: "We don't build software.", ko: "소프트웨어가 아닙니다." },
  "hero.title2": {
    en: "We build AI agents that do the work.",
    ko: "일을 대신하는 AI 에이전트를 만듭니다.",
  },
  "hero.subtitle": {
    en: "Persapt's AAAS engine monitors 24/7, detects anomalies, analyzes root causes, and executes solutions — the moment you approve.",
    ko: "Persapt의 AAAS 엔진은 24시간 모니터링하고, 이상을 감지하면 원인을 분석하고, 해결책을 제안한 뒤 승인 즉시 실행합니다.",
  },
  "hero.cta1": { en: "Get Early Access", ko: "얼리 액세스 신청" },
  "hero.cta2": { en: "Read the Docs", ko: "문서 보기" },

  // About / SaaS vs AaaS
  "about.label": { en: "The Paradigm Shift", ko: "패러다임 전환" },
  "about.title": {
    en: "SaaS shows data. AaaS takes action.",
    ko: "SaaS는 데이터를 보여줍니다. AaaS는 실행합니다.",
  },
  "about.desc": {
    en: "Traditional SaaS accumulates data and waits for humans to act. Persapt's Aware · Act · Adapt System closes the gap — from detection to execution, autonomously.",
    ko: "기존 SaaS는 데이터를 쌓아두고 사람이 행동하길 기다립니다. Persapt의 AAAS 시스템은 감지부터 실행까지의 간극을 메웁니다.",
  },
  "about.saas": { en: "Traditional SaaS", ko: "기존 SaaS" },
  "about.aaas": { en: "Persapt AaaS", ko: "Persapt AaaS" },
  "about.row1.label": { en: "Activation", ko: "작동 시작" },
  "about.row1.saas": { en: "User manually logs in", ko: "사용자가 직접 로그인" },
  "about.row1.aaas": { en: "AI monitors 24/7 autonomously", ko: "AI가 24시간 모니터링 및 감지" },
  "about.row2.label": { en: "Analysis", ko: "원인 분석" },
  "about.row2.saas": { en: "Humans manually analyze data", ko: "쌓인 데이터를 인간이 직접 분석" },
  "about.row2.aaas": { en: "AI identifies root causes", ko: "AI가 문제의 근본 원인 도출" },
  "about.row3.label": { en: "Resolution", ko: "문제 해결" },
  "about.row3.saas": { en: "Users find and execute solutions", ko: "사용자가 직접 방안을 찾고 실행" },
  "about.row3.aaas": { en: "AI proposes, executes on approval", ko: "AI가 제안하고, 승인 즉시 실행" },
  "about.row4.label": { en: "Outcome", ko: "최종 결과" },
  "about.row4.saas": { en: "Data exists, but no execution", ko: "데이터는 있지만 실행은 없음" },
  "about.row4.aaas": { en: "Complete operational automation", ko: "완전한 운영 자동화 달성" },

  // Products
  "products.label": { en: "Product Pipeline", ko: "프로덕트 파이프라인" },
  "products.title": {
    en: "One core engine. Three markets.",
    ko: "하나의 코어 엔진. 세 개의 시장.",
  },
  "products.desc": {
    en: "Zero R&D waste — infinite industry expansion from a single technology core.",
    ko: "R&D 낭비 제로 — 하나의 기술 코어에서 무한한 산업 확장.",
  },

  // sajang.ai
  "p1.tag": { en: "B2C Cash Cow", ko: "B2C 캐시카우" },
  "p1.name": { en: "sajang.ai", ko: "sajang.ai" },
  "p1.title": {
    en: "AI Store Manager for F&B",
    ko: "매출을 지켜주는 AI 점장",
  },
  "p1.desc": {
    en: "Hire an AI manager for your restaurant. Get daily reports via messenger, approve with one tap, and let AI handle the rest — from revenue analysis to review management.",
    ko: "AI 점장 한 명을 고용하세요. 매일 아침 메신저로 핵심 보고를 받고, 승인 한 번으로 즉시 실행됩니다.",
  },
  "p1.status": { en: "MVP 70% Complete", ko: "MVP 70% 완료" },
  "p1.price": { en: "From $22/mo", ko: "월 29,700원" },

  // Fashion AI OS
  "p2.tag": { en: "B2B2C Scale-up", ko: "B2B2C 스케일업" },
  "p2.name": { en: "Fashion AI OS", ko: "Fashion AI OS" },
  "p2.title": {
    en: "Redefining Fashion Commerce at OS Level",
    ko: "패션 커머스를 OS 레벨로 재정의",
  },
  "p2.desc": {
    en: "Transform search-based shopping into AI-powered purchasing. One sentence input — AI handles body analysis, style matching, alteration, and checkout.",
    ko: "검색 기반 쇼핑을 AI 기반 구매 대행으로 전환합니다. 한 문장 입력으로 체형 분석부터 결제까지.",
  },
  "p2.status": { en: "In Planning", ko: "기획 단계" },
  "p2.price": { en: "Coming Soon", ko: "준비중" },

  // Architect
  "p3.tag": { en: "B2B High-end", ko: "B2B 하이엔드" },
  "p3.name": { en: "Persapt Architect", ko: "Persapt Architect" },
  "p3.title": {
    en: "Enterprise AI Agent Builder",
    ko: "중견기업 AI 에이전트 구축",
  },
  "p3.desc": {
    en: "Onboard with just DB credentials. Our Schema Crawler auto-integrates legacy systems (ERP, MES, QMS) and deploys AI agents on top — 90% faster than traditional SI.",
    ko: "DB 자격증만으로 온보딩. Schema Crawler가 레거시 시스템을 자동 통합하고, AI 에이전트를 배치합니다.",
  },
  "p3.status": { en: "Pilot Ready", ko: "파일럿 대기" },
  "p3.price": { en: "From $11K/project", ko: "건당 1,500만원+" },

  // Technology
  "tech.label": { en: "Core Technology", ko: "코어 기술" },
  "tech.title": {
    en: "The AAAS Engine",
    ko: "AAAS 엔진",
  },
  "tech.subtitle": {
    en: "Aware · Act · Adapt System",
    ko: "Aware · Act · Adapt System",
  },
  "tech.desc": {
    en: "A universal AI engine that automates operations for any industry. Feed it any data — it monitors, reports, decides, and executes.",
    ko: "어떤 산업의 데이터든 밀어 넣으면 운영을 자동화하는 범용 AI 엔진입니다.",
  },
  "tech.step1": { en: "Detect", ko: "감지" },
  "tech.step1.desc": { en: "24/7 monitoring & anomaly detection", ko: "24시간 모니터링 및 이상 감지" },
  "tech.step2": { en: "Report", ko: "보고" },
  "tech.step2.desc": { en: "Intelligent briefing to stakeholders", ko: "이해관계자에게 지능형 브리핑" },
  "tech.step3": { en: "Decide", ko: "결정" },
  "tech.step3.desc": { en: "Human-in-the-loop approval", ko: "사용자 결정 및 승인" },
  "tech.step4": { en: "Execute", ko: "실행" },
  "tech.step4.desc": { en: "Autonomous action & policy learning", ko: "자율 실행 및 정책 학습" },
  // Dual-Layer Identity
  "tech.dual.label": { en: "Dual-Layer Identity", ko: "브랜딩 프레임워크" },
  "tech.dual.title": { en: "One Lens, Two Layers", ko: "단일 렌즈, 이중 레이어" },
  "tech.dual.desc": {
    en: "Internal deep-tech research (3P) is projected as intuitive market value (AAA) through a single-lens architecture.",
    ko: "내부의 딥테크 연구(3P)가 외부의 직관적인 시장 가치(AAA)로 투영되는 단일 렌즈 구조.",
  },
  // AAA External Layer
  "tech.aaa.label": { en: "Layer 1: External / Market", ko: "Layer 1: 외부 / 시장" },
  "tech.aaa.title": { en: "AAA Framework", ko: "AAA 프레임워크" },
  "tech.aaa.a1.title": { en: "Aware", ko: "Aware" },
  "tech.aaa.a1.desc": {
    en: "Deep understanding of user and business context. Designed for investors and non-technical audiences.",
    ko: "사용자와 비즈니스 맥락의 깊은 파악. 투자자, 비기술 청중 대상.",
  },
  "tech.aaa.a2.title": { en: "Act", ko: "Act" },
  "tech.aaa.a2.desc": {
    en: "Beyond simple answers — real judgment and action execution. Designed for IR and marketing.",
    ko: "단순 대답을 넘어선 실제 판단과 행동 실행. IR, 마케팅 대상.",
  },
  "tech.aaa.a3.title": { en: "Adapt", ko: "Adapt" },
  "tech.aaa.a3.desc": {
    en: "Relentless improvement and evolution through feedback loops. Designed for sales and landing pages.",
    ko: "피드백 기반의 끊임없는 개선과 진화. 세일즈, 랜딩페이지 대상.",
  },
  // 3P Internal Layer
  "tech.3p.label": { en: "Layer 2: Internal / R&D", ko: "Layer 2: 내부 / R&D" },
  "tech.3p.title": { en: "3P Core", ko: "3P Core" },
  "tech.3p.p1.title": { en: "Personalize", ko: "Personalize" },
  "tech.3p.p1.desc": {
    en: "Per-user profile and memory personalization. Core R&D focus, targeting TIPS and grants.",
    ko: "사용자별 프로필 및 메모리 개인화. R&D, TIPS 타겟.",
  },
  "tech.3p.p2.title": { en: "Proact", ko: "Proact" },
  "tech.3p.p2.desc": {
    en: "Anomaly detection, policy selection, and proactive action execution. Academic papers and developer-facing.",
    ko: "이상 감지, 정책 선택, 능동 행동 실행. 논문, 개발자 타겟.",
  },
  "tech.3p.p3.title": { en: "Progress", ko: "Progress" },
  "tech.3p.p3.desc": {
    en: "Reward learning and progressive automation. Technical hiring and talent acquisition focus.",
    ko: "보상학습 및 점진적 자동화. 기술 채용 타겟.",
  },

  "tech.diff.label": { en: "Key Differentiator", ko: "핵심 차별화" },
  "tech.diff.title": { en: "Policy Memory", ko: "Policy Memory" },
  "tech.diff.desc": {
    en: "Completely absent in competing frameworks (Mem0, Zep, Letta). Not just memory storage and retrieval — a policy learning engine for proactive autonomous behavior.",
    ko: "경쟁 프레임워크(Mem0, Zep, Letta)에 완전히 부재한 기술. 단순 메모리 저장/검색이 아닌, 능동적 행동을 위한 정책 학습 엔진입니다.",
  },

  // Why Now
  "why.label": { en: "Why Now", ko: "왜 지금인가" },
  "why.title": {
    en: "The structural inevitability of the AaaS era",
    ko: "AaaS 시대의 구조적 필연성",
  },
  "why.r1.title": { en: "Cost Collapse", ko: "비용의 붕괴" },
  "why.r1.desc": {
    en: "LLM inference costs dropped 10×. GPT-4 level AI capabilities now available at $2/user/month.",
    ko: "LLM 추론 비용 10배 하락. GPT-4 수준의 AI를 월 $2 수준으로 제공 가능.",
  },
  "why.r2.title": { en: "Infrastructure Maturity", ko: "인프라의 성숙" },
  "why.r2.desc": {
    en: "2025-2026: MCP, Tool Use, and agent frameworks standardized. The technical barriers for memory, judgment, and action are finally unlocked.",
    ko: "2025~2026년 MCP, Tool Use 등 에이전트 프레임워크 표준화. 기억, 판단, 행동의 기술적 빗장이 풀린 원년.",
  },
  "why.r3.title": { en: "Structural Demand", ko: "구조적 변화" },
  "why.r3.desc": {
    en: "Labor shortages intensify while minimum wages rise. Explosive market demand as businesses must adopt AI to survive.",
    ko: "인력난 심화 및 최저임금 상승. 생존을 위해 AI로 대체해야 하는 폭발적 시장 수요 발생.",
  },
  "why.r4.title": { en: "Competitive Vacuum", ko: "경쟁의 공백" },
  "why.r4.desc": {
    en: "Existing tools are limited to memory storage and retrieval. Complete absence of 'Policy Memory' technology for proactive behavior.",
    ko: "기존 도구는 단순 메모리 저장/검색에 국한. 능동적 행동을 위한 Policy Memory 기술의 부재.",
  },

  // Blog
  "blog.label": { en: "Engineering Blog", ko: "기술 블로그" },
  "blog.title": { en: "Blog", ko: "블로그" },
  "blog.subtitle": {
    en: "Insights on AI agents, autonomous operations, and the path from SaaS to AaaS.",
    ko: "AI 에이전트, 자율 운영, 그리고 SaaS에서 AaaS로의 여정에 대한 인사이트.",
  },

  // Footer
  "footer.tagline": {
    en: "Personalize + Adapt",
    ko: "Personalize + Adapt",
  },
  "footer.desc": {
    en: "Building AI agents that don't just observe — they act.",
    ko: "관찰만 하지 않는 AI 에이전트를 만듭니다 — 실행합니다.",
  },
  "footer.company": { en: "Company", ko: "회사" },
  "footer.product": { en: "Products", ko: "프로덕트" },
  "footer.resources": { en: "Resources", ko: "리소스" },
  "footer.about": { en: "About Us", ko: "회사 소개" },
  "footer.team": { en: "Team", ko: "팀" },
  "footer.blog": { en: "Blog", ko: "블로그" },
  "footer.docs": { en: "Documentation", ko: "문서" },
  "footer.github": { en: "GitHub", ko: "GitHub" },
  "footer.contact": { en: "Contact Us", ko: "문의하기" },
  "footer.coming": { en: "Coming Soon", ko: "준비중" },
  "footer.rights": { en: "All rights reserved.", ko: "All rights reserved." },

  // CTA
  "cta.title": {
    en: "Ready to move from dashboards to decisions?",
    ko: "대시보드에서 의사결정으로 전환할 준비가 되셨나요?",
  },
  "cta.desc": {
    en: "Join the early access program and be among the first to experience autonomous AI operations.",
    ko: "얼리 액세스 프로그램에 참여하고 자율 AI 운영을 가장 먼저 경험하세요.",
  },
  "cta.button": { en: "Request Early Access", ko: "얼리 액세스 신청" },
  "cta.note": { en: "No credit card required · Free during beta", ko: "신용카드 불필요 · 베타 기간 무료" },
};

const I18nContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}>({
  lang: "en",
  setLang: () => {},
  t: (key: string) => key,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang];
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
