# 🚀 GIL Community Platform

> 개발자들을 위한 통합 학습 및 커뮤니티 플랫폼

## 📋 프로젝트 개요

GIL Community는 개발자들이 함께 학습하고, 프로젝트를 진행하며, 멘토링을 받을 수 있는 종합적인 플랫폼입니다. 현대적인 Glassmorphism 디자인과 직관적인 사용자 경험을 제공합니다.

## ✨ 주요 기능

### 📊 대시보드
- 개인화된 학습 현황 및 통계
- 최근 활동 요약
- 빠른 액세스 블록

### 🌐 커뮤니티
- 개발 관련 포스트 및 토론
- 주제별 토픽 관리
- 멤버 프로필 및 네트워킹

### 📂 프로젝트 관리
- 개인/팀 프로젝트 생성 및 관리
- 진행률 추적 및 마일스톤
- 협업 도구 통합

### 📚 학습 시스템
- 코딩 강의 및 튜토리얼
- 학습 진행도 추적
- 인증서 발급 및 관리

### 🏆 챌린지
- 일일/주간 코딩 챌린지
- 실시간 리더보드
- 성취도 및 뱃지 시스템

### 👥 멘토링
- 전문가 멘토 매칭
- 1:1 세션 예약 시스템
- 멘토링 진행 상황 관리

### 📖 리소스 허브
- 개발 도구 및 라이브러리 모음
- 학습 자료 큐레이션
- 개인 북마크 관리

## 🛠 기술 스택

### Frontend
- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI/UX**: Glassmorphism Design System
- **State Management**: React Context API
- **Performance**: Dynamic Imports, Turbopack

### Design Features
- 🎨 **Glassmorphism Effects**: 백드롭 블러와 반투명 효과
- 🌗 **Dark/Light Theme**: 테마 토글 기능
- 📱 **Responsive Design**: 모든 디바이스 지원
- ✨ **Smooth Animations**: 호버 효과 및 전환 애니메이션

## 📁 프로젝트 구조

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # 루트 레이아웃
│   │   ├── page.tsx           # 대시보드 메인
│   │   ├── challenges/        # 챌린지 페이지
│   │   ├── community/         # 커뮤니티 페이지
│   │   ├── learning/          # 학습 페이지
│   │   ├── mentoring/         # 멘토링 페이지
│   │   ├── projects/          # 프로젝트 페이지
│   │   └── resources/         # 리소스 페이지
│   ├── components/            # 재사용 가능한 컴포넌트
│   │   ├── ui/               # UI 컴포넌트
│   │   │   └── GlassCard.tsx # 글래스 카드 컴포넌트
│   │   ├── Header.tsx        # 헤더 컴포넌트
│   │   ├── NewSidebar.tsx    # 사이드바 네비게이션
│   │   └── DashboardBlocks.tsx
│   ├── contexts/             # React Context
│   │   └── ThemeContext.tsx  # 테마 관리
│   └── layout/               # 레이아웃 컴포넌트
│       └── DashboardLayout.tsx
├── public/                   # 정적 파일
├── package.json             # 의존성 관리
└── tailwind.config.js       # Tailwind 설정
```

## 🚀 시작하기

### 사전 요구사항
- Node.js 18 이상
- pnpm (권장) 또는 npm

### 설치 및 실행

```bash
# 의존성 설치
cd frontend
pnpm install

# 개발 서버 실행
pnpm dev

# 빌드
pnpm build

# 프로덕션 실행
pnpm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 🎨 디자인 시스템

### Glassmorphism 구현
```css
/* 기본 글래스 효과 */
backdrop-filter: blur(16px);
background: rgba(255, 255, 255, 0.2);
border: 1px solid rgba(255, 255, 255, 0.3);

/* 호버 효과 */
hover:backdrop-filter: blur(20px);
hover:transform: scale(1.02);
```

### 컬러 팔레트
- **Primary**: Blue-Purple Gradient
- **Secondary**: Green Accent
- **Background**: Multi-layer Gradient
- **Glass**: Semi-transparent White/Dark

## 📱 반응형 디자인

- **Desktop**: 1200px 이상 - 풀 레이아웃
- **Tablet**: 768px - 1199px - 조정된 그리드
- **Mobile**: 767px 이하 - 스택 레이아웃

## 🔧 개발 중인 기능

- [ ] 모바일 반응형 최적화
- [ ] 에러 핸들링 개선
- [ ] 사용자 인증 시스템
- [ ] 실시간 알림
- [ ] PWA 지원

## 🐛 알려진 이슈

- ✅ Hydration 에러 해결 (dynamic import 적용)
- ✅ 성능 최적화 완료 (1320ms → 1046ms)
- 🔄 브라우저 호환성 테스트 진행 중

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 📞 문의

프로젝트 관련 문의나 피드백은 언제든 환영합니다!

---
Made with ❤️ by GIL Community Team