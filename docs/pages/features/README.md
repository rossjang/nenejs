# Features Page

## Page Info

- **Route**: `/features`
- **Status**: 🔲 Pending
- **Priority**: Medium

## Overview

nene.js 프레임워크의 핵심 기능들을 상세하게 소개하는 페이지입니다. 각 기능별로 시각적 데모와 코드 예시를 포함합니다.

## Page Structure

```
/features
├── Hero Section (기능 개요)
├── Feature 1: Unified Architecture
├── Feature 2: AI-Optimized Context
├── Feature 3: No-API Network
├── Feature 4: Type Safety
├── Feature 5: Built-in AI Integration
├── Comparison Table (vs Next.js + NestJS 별도 사용)
└── CTA Section
```

## Sections Design

### 1. Features Hero

- 심플한 헤더 + 서브텍스트
- 기능 카테고리 필터 탭 (optional)

### 2. Feature Sections (반복)

각 기능 섹션은 다음 구조를 따릅니다:

```
┌─────────────────────────────────────────────────────────────┐
│  [왼쪽: 텍스트]          │     [오른쪽: 시각 요소]           │
│                          │                                   │
│  # Feature Title         │     ┌─────────────────────────┐   │
│  Description text...     │     │  Code Block / Demo      │   │
│                          │     │  Animation / Diagram    │   │
│  • Bullet point 1        │     │                         │   │
│  • Bullet point 2        │     └─────────────────────────┘   │
│  • Bullet point 3        │                                   │
│                          │                                   │
│  [Learn More →]          │                                   │
└─────────────────────────────────────────────────────────────┘
```

- 홀수 섹션: 텍스트 왼쪽, 비주얼 오른쪽
- 짝수 섹션: 비주얼 왼쪽, 텍스트 오른쪽 (교차 레이아웃)

### 3. Comparison Table

| Feature   | nene.js | Next.js + NestJS (별도) |
| --------- | ------- | ----------------------- |
| 설정 시간 | 5분     | 2시간+                  |
| 타입 공유 | 자동    | 수동 설정 필요          |
| ...       | ...     | ...                     |

## Components to Build

### 1. FeaturesHero

- **File**: `src/components/features/hero.tsx`
- **Description**: 기능 페이지 히어로 섹션

### 2. FeatureSection

- **File**: `src/components/features/feature-section.tsx`
- **Description**: 개별 기능 소개 섹션 (재사용 가능)
- **Props**:
  ```typescript
  interface FeatureSectionProps {
    title: string;
    description: string;
    bullets: string[];
    visual: React.ReactNode;
    reversed?: boolean; // 레이아웃 방향
    accentColor?: string;
  }
  ```

### 3. CodeDemo

- **File**: `src/components/features/code-demo.tsx`
- **Description**: 인터랙티브 코드 데모
- **Features**:
  - 탭으로 여러 파일 전환
  - Before/After 비교
  - Copy 버튼

### 4. ComparisonTable

- **File**: `src/components/features/comparison-table.tsx`
- **Description**: 기능 비교 테이블

### 5. FeatureDiagram

- **File**: `src/components/features/diagram.tsx`
- **Description**: 아키텍처 다이어그램 (SVG)

## Feature Content

### Feature 1: Unified Architecture

- **Title**: "Next + Nest, Unified"
- **Key Points**:
  - 프론트엔드와 백엔드 동일 파일에서 관리
  - 컨텍스트 스위칭 없이 개발
  - 단일 저장소, 단일 배포

### Feature 2: AI-Optimized Context

- **Title**: "AI-Optimized Context"
- **Key Points**:
  - AI 코파일럿이 전체 컨텍스트 이해
  - 단일 파일에서 전체 로직 파악 가능
  - 더 정확한 코드 제안

### Feature 3: No-API Network

- **Title**: "No-API Network"
- **Key Points**:
  - fetch() 보일러플레이트 제거
  - 직접 함수 호출처럼 백엔드 사용
  - 타입 안전한 RPC

### Feature 4: Type Safety

- **Title**: "End-to-End Type Safety"
- **Key Points**:
  - 프론트엔드-백엔드 타입 자동 공유
  - 컴파일 타임 에러 감지
  - IDE 자동완성 지원

### Feature 5: Built-in AI

- **Title**: "Built-in AI Integration"
- **Key Points**:
  - @UseAI 데코레이터
  - 벡터 메모리 내장
  - 스트리밍 응답 지원

## Required Skills

### Frontend Developer

- **필수 역량**:

  - React 컴포넌트 설계
  - Tailwind CSS 레이아웃 (grid, flexbox)
  - TypeScript

- **권장 역량**:
  - Framer Motion (애니메이션)
  - SVG 다이어그램 제작
  - 인터랙티브 데모 구현

## Design Specifications

### Section Spacing

- 각 섹션 간격: `py-24` 또는 `py-32`
- 섹션 내부 gap: `gap-12` 또는 `gap-16`

### Visual Elements

- 코드 블록: 랜딩 페이지 스타일 유지
- 다이어그램: SVG with 다크 테마
- 애니메이션: subtle, 성능 고려

### Responsive Breakpoints

- Mobile (<768px): 단일 컬럼, 시각 요소 아래로
- Tablet (768px-1024px): 2 컬럼 유지
- Desktop (1024px+): 풀 레이아웃
