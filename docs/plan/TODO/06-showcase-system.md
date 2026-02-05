# Showcase System

- **Status**: 📋 Todo
- **Priority**: 🟠 Medium
- **Labels**: `showcase` `backend`

## Description

Showcase 프로젝트 데이터 시스템 구현

## Tasks

- [ ] 데이터 소스 결정 (JSON 파일 권장)
- [ ] `data/showcase.json` 생성
- [ ] 프로젝트 이미지 추가
- [ ] `showcase-detail.tsx` 모달 컴포넌트 생성
- [ ] 기존 하드코딩 데이터 교체
- [ ] (Optional) 프로젝트 제출 폼 백엔드

## Files to Create

```
data/
└── showcase.json

public/showcase/
├── project-1.png
├── project-2.png
└── ...

src/components/showcase/
└── showcase-detail.tsx
```

## Data Structure

**`data/showcase.json`**

```json
{
  "projects": [
    {
      "id": "1",
      "slug": "flux-ai-editor",
      "title": "Flux AI Editor",
      "description": "Real-time collaborative image generation",
      "image": "/showcase/flux-ai.png",
      "category": "ai",
      "tags": ["AI", "Collaboration"],
      "url": "https://flux.ai",
      "github": "https://github.com/...",
      "featured": true
    }
  ]
}
```

## Showcase Detail Modal

```typescript
interface ShowcaseDetailProps {
  project: ShowcaseProject;
  onClose: () => void;
}

export function ShowcaseDetail({ project, onClose }: ShowcaseDetailProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <div className="bg-[#1a1a1a] rounded-xl max-w-2xl w-full mx-4">
        <img src={project.image} alt={project.title} />
        <div className="p-6">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <div className="flex gap-4">
            <a href={project.url}>Visit Site</a>
            <a href={project.github}>GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## Acceptance Criteria

- [ ] 프로젝트 목록이 JSON에서 로드됨
- [ ] 카테고리 필터 작동
- [ ] 프로젝트 클릭 시 상세 모달 열림
- [ ] 실제 프로젝트 이미지 표시
