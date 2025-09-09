# 길 공동체 사이드바 디자인 가이드 📐

## 📋 목차
- [전체 구조](#전체-구조)
- [로고 영역](#로고-영역)
- [메뉴 영역](#메뉴-영역)
- [빠른 액션](#빠른-액션)
- [상태 카드](#상태-카드)
- [디자인 토큰](#디자인-토큰)
- [커스터마이징 가이드](#커스터마이징-가이드)

## 📏 전체 구조

### 레이아웃
```
┌─────────────────────────┐
│       로고 영역         │ ← 고정 (64px)
├─────────────────────────┤
│                         │
│      메뉴 영역          │ ← 스크롤 가능
│                         │
│    • 대시보드           │
│    • 공동체             │
│    • 설교               │
│    • ...                │
│                         │
│    ───────────────      │
│                         │
│    빠른 액션            │
│                         │
└─────────────────────────┘
│      상태 카드          │ ← 고정
└─────────────────────────┘
```

### CSS 구조
```css
aside {
  width: 256px;        /* w-64 */
  height: 100%;        /* h-full */
  display: flex;       /* flex */
  flex-direction: column; /* flex-col */
}
```

## 🎨 로고 영역

### 현재 디자인
- **높이**: 64px (`h-16`)
- **배경**: 흰색
- **테두리**: 하단 회색 테두리
- **로고**: 파란색-보라색 그라데이션 원형

### 코드 위치
```typescript
// src/components/NewSidebar.tsx (라인 54-68)
<div className="h-16 flex items-center px-6 border-b border-gray-200 flex-shrink-0">
  <div className="flex items-center space-x-3">
    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
      <span className="text-white font-bold text-lg">G</span>
    </div>
    <div>
      <h1 className="text-xl font-bold text-gray-900">GIL</h1>
      <p className="text-xs text-gray-500 font-medium">Community</p>
    </div>
  </div>
</div>
```

### 커스터마이징 옵션
| 속성 | 현재값 | 변경 예시 |
|------|--------|-----------|
| 로고 크기 | `w-10 h-10` | `w-12 h-12` (더 크게) |
| 로고 색상 | `from-blue-600 to-purple-600` | `from-green-500 to-teal-500` |
| 로고 모양 | `rounded-xl` | `rounded-full` (완전 원형) |
| 제목 크기 | `text-xl` | `text-2xl` (더 크게) |

## 📱 메뉴 영역

### 현재 디자인
- **스크롤**: 세로 스크롤 가능
- **메뉴 개수**: 11개
- **활성 상태**: 파란색 배경 + 테두리
- **호버**: 회색 배경

### 메뉴 리스트
1. 대시보드 (`/`)
2. 공동체 (`/community`)
3. 설교 (`/sermons`)
4. 성경 읽기 (`/bible`)
5. 기도 제목 (`/prayer`)
6. 모임 & 행사 (`/events`)
7. 활동 사진 (`/gallery`)
8. 챌린지 (`/challenges`)
9. 새 프로젝트 (`/projects`)
10. 멘토링 (`/mentoring`)
11. 스터디 생성 (`/learning`)

### 코드 위치
```typescript
// src/components/NewSidebar.tsx (라인 73-91)
<ul className="space-y-1">
  {menuItems.map((item) => (
    <li key={item.id}>
      <button
        onClick={() => handleNavigation(item.path)}
        className={`w-full flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
          pathname === item.path
            ? 'bg-blue-50 text-blue-700 border border-blue-200'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
        }`}
      >
        <span>{item.name}</span>
        {pathname === item.path && (
          <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
        )}
      </button>
    </li>
  ))}
</ul>
```

### 상태별 스타일
| 상태 | 배경색 | 텍스트색 | 테두리 | 기타 |
|------|--------|----------|---------|------|
| 기본 | 투명 | `text-gray-600` | 없음 | - |
| 호버 | `bg-gray-50` | `text-gray-900` | 없음 | - |
| 활성 | `bg-blue-50` | `text-blue-700` | `border-blue-200` | 파란색 점 표시 |

## ⚡ 빠른 액션

### 현재 디자인
- **위치**: 메뉴 하단
- **구분선**: 회색 선으로 구분
- **항목**: 3개 (새 프로젝트, 질문하기, 스터디 생성)

### 코드 위치
```typescript
// src/components/NewSidebar.tsx (라인 94-110)
<div className="mt-6 pt-4 border-t border-gray-200">
  <h3 className="text-xs font-semibold text-gray-500 px-3 mb-2 uppercase tracking-wider">빠른 액션</h3>
  <div className="space-y-1">
    <button onClick={() => handleNavigation('/projects')}>새 프로젝트</button>
    <button>질문하기</button>
    <button onClick={() => handleNavigation('/learning')}>스터디 생성</button>
  </div>
</div>
```

## 📊 상태 카드

### 현재 디자인
- **위치**: 사이드바 하단 고정
- **배경**: 초록-파랑 그라데이션
- **내용**: 온라인 상태 + 활동 정보

### 코드 위치
```typescript
// src/components/NewSidebar.tsx (라인 115-129)
<div className="flex-shrink-0 p-4">
  <div className="p-3 rounded-xl bg-gradient-to-br from-green-50 to-blue-50 border border-green-200">
    <div className="flex items-center space-x-2 mb-2">
      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      <div>
        <p className="text-sm font-semibold text-gray-800">온라인</p>
        <p className="text-xs text-gray-600">활동 중</p>
      </div>
    </div>
    <p className="text-xs text-gray-600 leading-relaxed">
      현재 3개의 프로젝트와 2개의 스터디에 참여하고 있습니다.
    </p>
  </div>
</div>
```

## 🎨 디자인 토큰

### 색상 팔레트
```css
/* 기본 색상 */
--sidebar-bg: #ffffff;
--sidebar-border: #e5e7eb;

/* 로고 */
--logo-gradient-from: #2563eb; /* blue-600 */
--logo-gradient-to: #9333ea;   /* purple-600 */

/* 메뉴 활성 상태 */
--menu-active-bg: #eff6ff;     /* blue-50 */
--menu-active-text: #1d4ed8;   /* blue-700 */
--menu-active-border: #bfdbfe; /* blue-200 */

/* 메뉴 호버 */
--menu-hover-bg: #f9fafb;      /* gray-50 */
--menu-hover-text: #111827;    /* gray-900 */

/* 상태 카드 */
--status-card-bg-from: #f0fdf4; /* green-50 */
--status-card-bg-to: #eff6ff;   /* blue-50 */
--status-card-border: #bbf7d0;  /* green-200 */
--status-indicator: #10b981;    /* green-500 */
```

### 타이포그래피
```css
/* 로고 제목 */
--logo-title-size: 1.25rem;    /* text-xl */
--logo-title-weight: 700;      /* font-bold */

/* 메뉴 텍스트 */
--menu-text-size: 0.875rem;    /* text-sm */
--menu-text-weight: 500;       /* font-medium */

/* 빠른 액션 제목 */
--quick-action-title-size: 0.75rem; /* text-xs */
--quick-action-title-weight: 600;   /* font-semibold */
```

### 간격
```css
/* 사이드바 너비 */
--sidebar-width: 16rem;         /* w-64 */

/* 로고 영역 높이 */
--logo-height: 4rem;           /* h-16 */

/* 메뉴 패딩 */
--menu-padding-x: 0.75rem;     /* px-3 */
--menu-padding-y: 0.625rem;    /* py-2.5 */

/* 상태 카드 패딩 */
--status-card-padding: 1rem;   /* p-4 */
```

## 🛠 커스터마이징 가이드

### 1. 색상 테마 변경

#### 파란색 → 초록색 테마
```typescript
// 로고 색상 변경
from-blue-600 to-purple-600 → from-green-600 to-emerald-600

// 활성 메뉴 색상 변경
bg-blue-50 text-blue-700 border border-blue-200 → bg-green-50 text-green-700 border border-green-200

// 활성 점 색상 변경
bg-blue-500 → bg-green-500
```

### 2. 사이드바 너비 변경

#### 더 넓게 (288px)
```typescript
w-64 → w-72
```

#### 더 좁게 (224px)
```typescript
w-64 → w-56
```

### 3. 메뉴 아이콘 추가

```typescript
// menuItems 배열에 icon 속성 추가
const menuItems: MenuItem[] = [
  { id: 'dashboard', name: '대시보드', path: '/', icon: '🏠' },
  { id: 'community', name: '공동체', path: '/community', icon: '👥' },
  // ...
]

// 렌더링 시 아이콘 표시
<span className="mr-3">{item.icon}</span>
<span>{item.name}</span>
```

### 4. 다크 모드 지원

```typescript
// 다크 모드 클래스 추가
className={`w-64 h-full border-r shadow-sm flex flex-col ${
  isDark 
    ? 'bg-gray-900 border-gray-700' 
    : 'bg-white border-gray-200'
}`}
```

### 5. 애니메이션 효과

```typescript
// 메뉴 호버 시 스케일 효과
className="transform hover:scale-105 transition-all duration-200"

// 로고 회전 효과
className="transform hover:rotate-12 transition-transform duration-300"
```

## 📱 반응형 대응

### 모바일에서 숨김/표시
```typescript
// 768px 이하에서 숨김
className="hidden md:flex w-64 h-full..."

// 모바일 햄버거 메뉴 토글
const [sidebarOpen, setSidebarOpen] = useState(false)
```

### 태블릿 대응
```typescript
// 좁은 화면에서 너비 줄이기
className="w-56 md:w-64 h-full..."
```

## 🔧 파일 위치

### 주요 파일
- **사이드바 컴포넌트**: `src/components/NewSidebar.tsx`
- **전역 스타일**: `src/app/globals.css`
- **Tailwind 설정**: `tailwind.config.ts`

### 관련 컴포넌트
- **레이아웃**: `src/layout/DashboardLayout.tsx`
- **헤더**: `src/components/Header.tsx`
- **테마 컨텍스트**: `src/contexts/ThemeContext.tsx`

---

**💡 팁**: 디자인을 변경할 때는 먼저 CSS 클래스만 수정해보고, 만족스러운 결과가 나오면 전역 스타일이나 디자인 토큰으로 체계화하는 것을 권장합니다.

**🎨 참고**: 길 공동체의 브랜딩에 맞춰 파란색 계열을 기본으로 하되, 필요에 따라 초록색(생명, 성장)이나 보라색(영성, 깊이) 요소를 포인트로 사용할 수 있습니다.
