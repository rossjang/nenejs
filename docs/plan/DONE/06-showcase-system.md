# Showcase System

- **Status**: ✅ Done
- **Priority**: 🟠 Medium
- **Labels**: `showcase` `backend`

## Description

Showcase project data system implementation

## Tasks

- [x] Decide data source (JSON file recommended)
- [x] Create `data/showcase.json`
- [ ] Add project images
- [x] Create `showcase-detail.tsx` modal component
- [x] Replace existing hardcoded data
- [ ] (Optional) Project submission form backend

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

- [x] Project list loads from JSON
- [x] Category filter works
- [x] Detail modal opens on project click
- [ ] Real project images displayed
