# GIL Community Platform

온누리교회 청년부 "길 공동체"를 위한 웹 플랫폼입니다. 성경 읽기, 설교, 기도 제목, 활동 사진 등을 공유하고 소통할 수 있는 공간을 제공합니다.

## 🚀 기술 스택

- **Framework**: Next.js 15.5.2 (App Router)
- **Build Tool**: Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Package Manager**: pnpm
- **Runtime**: React 19.1.0

## 📁 프로젝트 구조

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router 페이지
│   │   ├── page.tsx           # 메인 대시보드
│   │   ├── community/         # 길 공동체 페이지
│   │   ├── sermons/           # 설교 페이지
│   │   ├── bible/             # 성경 읽기 페이지
│   │   ├── prayer/            # 기도 제목 페이지
│   │   ├── events/            # 모임 & 행사 페이지
│   │   └── gallery/           # 활동 사진 페이지
│   ├── components/            # 재사용 가능한 컴포넌트
│   │   ├── NewSidebar.tsx     # 네비게이션 사이드바
│   │   ├── Header.tsx         # 상단 헤더
│   │   └── ui/                # UI 컴포넌트
│   │       └── GlassCard.tsx  # 글래스모피즘 카드
│   ├── layout/                # 레이아웃 컴포넌트
│   │   └── DashboardLayout.tsx
│   └── contexts/              # React Context
│       └── ThemeContext.tsx
├── public/                    # 정적 파일
├── tailwind.config.ts         # Tailwind CSS 설정
└── package.json
```

## 🎯 주요 기능

### ✅ 완료된 기능
- **대시보드**: 메인 홈페이지 및 대시보드 블록
- **길 공동체**: 공동체 멤버, 기도 나눔, 소그룹, 정기 모임 등
- **설교**: 온누리교회 설교 목록, 카테고리별 분류, 듣기/다운로드 기능
- **성경 읽기**: 오늘의 말씀, 성경 통독, 묵상 나눔
- **기도 제목**: 개인/가족/선교/교회/직장 기도, 응답된 기도 간증
- **모임 & 행사**: 주일 예배, 수요 모임, 수련회, 특별 행사, 봉사 활동
- **활동 사진**: 예배, 수련회, 행사, 봉사, 소그룹 사진 앨범
- **반응형 디자인**: 모바일 및 데스크톱 대응
- **글래스모피즘 UI**: 현대적이고 세련된 디자인

### 🔧 기술적 개선사항
- **Tailwind CSS 설정 파일 추가**: CSS 빌드 오류 해결
- **레이아웃 통일**: 모든 페이지에 DashboardLayout 적용
- **불필요한 아이콘 제거**: 클린한 프로젝트 구조 유지
- **TypeScript 최적화**: 타입 안정성 향상

## 🚧 개발 상황

### 현재 상태 (2024.09.09)
- ✅ 모든 주요 페이지 구현 완료
- ✅ 사이드바 네비게이션 완전 작동
- ✅ CSS 빌드 오류 해결
- ✅ 반응형 디자인 적용
- ✅ 길 공동체 맞춤 콘텐츠 구성

### 향후 개발 계획
- 🔄 **백엔드 API 연동**: 실제 데이터 CRUD 기능
- 🔄 **사용자 인증**: 로그인/회원가입 시스템
- 🔄 **실시간 기능**: 기도 제목 실시간 업데이트
- 🔄 **파일 업로드**: 사진 및 설교 파일 업로드
- 🔄 **알림 시스템**: 새 공지사항 및 이벤트 알림
- 🔄 **검색 기능**: 설교 및 성경 말씀 검색
- 🔄 **댓글 시스템**: 설교 및 기도 제목 댓글

## 🚀 시작하기

### 필수 조건
- Node.js 18+ 
- pnpm

### 설치 및 실행
```bash
# 프로젝트 클론
git clone https://github.com/kimmjen/GIL-community.git
cd GIL-community/frontend

# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev
```

서버가 실행되면 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 🎨 디자인 시스템

- **색상**: 파란색 계열 주색상, 그라데이션 배경
- **글꼴**: Geist Sans (시스템 폰트 백업)
- **컴포넌트**: 글래스모피즘 카드, 부드러운 그림자
- **레이아웃**: 사이드바 + 메인 콘텐츠 영역
- **반응형**: 모바일 퍼스트 접근법

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 📞 연락처

- **프로젝트 관리자**: kimmjen
- **이메일**: [이메일 주소]
- **GitHub**: [@kimmjen](https://github.com/kimmjen)

---

**길 공동체**와 함께 하나님의 말씀 안에서 성장하고 나누어요! 🙏
