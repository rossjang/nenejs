# Create-Nene NPM Package

- **Status**: ✅ Done
- **Priority**: 🔥 High
- **Labels**: `infrastructure` `launch` `phase-1` `validation`

## Description

`npm create nene@latest` 명령어가 작동하도록 `create-nene` 패키지를 npm에 배포합니다.

현재 랜딩 페이지에 `npm create nene@latest` 명령어가 표시되어 있지만, 실제 패키지가 npm에 배포되어 있지 않아 사용자가 명령어 실행 시 404 에러가 발생합니다.

```bash
$ npm create nene@latest
npm error 404 Not Found - GET https://registry.npmjs.org/create-nene - Not found
```

## Tasks

### Phase 1: 패키지 생성

- [ ] `create-nene` 패키지 프로젝트 생성
- [ ] CLI 엔트리포인트 구현 (`bin/create-nene.js`)
- [ ] 프로젝트 템플릿 구조 정의
- [ ] 대화형 프롬프트 구현 (prompts)
- [ ] 템플릿 파일 복사 로직 구현
- [ ] 의존성 설치 로직 구현

### Phase 2: 템플릿 준비

- [ ] 기본 nene.js 프로젝트 템플릿 생성
- [ ] TypeScript 설정 포함
- [ ] ESLint/Prettier 설정 포함
- [ ] 기본 폴더 구조 정의

### Phase 3: 배포

- [ ] npm 계정 설정 (npm login)
- [ ] 패키지 이름 사용 가능 여부 확인
- [ ] `npm publish` 실행
- [ ] 버전 관리 전략 수립

### Phase 4: 검증

- [ ] `npm create nene@latest` 명령어 테스트
- [ ] 생성된 프로젝트 정상 작동 확인
- [ ] 문서 업데이트

## Package Structure

```
create-nene/
├── package.json
├── bin/
│   └── create-nene.js      # CLI 엔트리포인트
├── src/
│   ├── index.ts            # 메인 로직
│   ├── prompts.ts          # 대화형 프롬프트
│   ├── template.ts         # 템플릿 복사 로직
│   └── utils.ts            # 유틸리티 함수
├── templates/
│   └── default/            # 기본 템플릿
│       ├── package.json
│       ├── tsconfig.json
│       ├── src/
│       │   ├── app/
│       │   └── server/
│       └── ...
├── README.md
└── LICENSE
```

## package.json 예시

```json
{
  "name": "create-nene",
  "version": "0.1.0",
  "description": "Create a new nene.js project",
  "bin": {
    "create-nene": "./bin/create-nene.js"
  },
  "files": ["bin", "dist", "templates"],
  "keywords": ["nene", "nenejs", "create", "scaffold", "cli"],
  "author": "nene.js Team",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/nene-js/create-nene"
  }
}
```

## CLI 엔트리포인트 예시

```javascript
#!/usr/bin/env node

import { create } from "../dist/index.js";

create().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

## 사용자 경험 (UX) 예시

```bash
$ npm create nene@latest my-app

🚀 Creating a new nene.js project in ./my-app

? Select a template:
  ❯ default - Full-stack with Next.js + NestJS patterns
    minimal - Minimal setup
    api-only - API server only

? Would you like to use TypeScript? (Y/n)
? Would you like to use ESLint? (Y/n)

✓ Created project structure
✓ Installed dependencies

🎉 Success! Created my-app at /path/to/my-app

Next steps:
  cd my-app
  npm run dev

Happy coding! 🎨
```

## Dependencies

```json
{
  "dependencies": {
    "commander": "^12.0.0",
    "prompts": "^2.4.2",
    "picocolors": "^1.0.0",
    "fs-extra": "^11.2.0",
    "validate-npm-package-name": "^5.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "@types/prompts": "^2.4.9",
    "@types/fs-extra": "^11.0.4",
    "tsup": "^8.0.0"
  }
}
```

## npm 배포 명령어

```bash
# npm 로그인
npm login

# 패키지 이름 사용 가능 여부 확인
npm view create-nene

# dry-run으로 배포 미리보기
npm publish --dry-run

# 실제 배포
npm publish --access public

# 버전 업데이트
npm version patch  # 0.1.0 -> 0.1.1
npm version minor  # 0.1.0 -> 0.2.0
npm version major  # 0.1.0 -> 1.0.0
```

## 대안: 임시 해결책

패키지 배포 전까지 홈페이지에서 다른 설치 방법을 안내할 수 있습니다:

### Option A: Git clone 방식

```bash
git clone https://github.com/nene-js/nene-starter my-app
cd my-app
npm install
```

### Option B: npx degit 방식

```bash
npx degit nene-js/nene-starter my-app
cd my-app
npm install
```

### Option C: "Coming Soon" 표시

랜딩 페이지에서 명령어 대신 Waitlist 가입 유도

## Related Files

- `src/components/landing/hero-section.tsx` - 랜딩 페이지 명령어 표시
- `content/docs/*/getting-started/installation.mdx` - 설치 문서

## Acceptance Criteria

- [ ] `npm create nene@latest` 명령어 정상 작동
- [ ] 생성된 프로젝트가 정상적으로 빌드 및 실행됨
- [ ] TypeScript 지원
- [ ] 대화형 프롬프트로 옵션 선택 가능
- [ ] 문서와 일치하는 사용자 경험
