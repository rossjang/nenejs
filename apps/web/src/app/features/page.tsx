import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import CTASection from "@/components/landing/cta-section";
import FeaturesHero from "@/components/features/features-hero";
import FeatureSection from "@/components/features/feature-section";
import ComparisonTable from "@/components/features/comparison-table";

const featuresData = [
  {
    title: "Next + Nest, Unified",
    description:
      "Manage frontend and backend in one monorepo. Develop without context switching, from a single repo to a single deploy.",
    bullets: [
      "Frontend and backend in one monorepo",
      "Develop without context switching",
      "Single repo, single deploy",
    ],
    codeExample: `// apps/api/src/users/users.controller.ts
@Controller('/api/users')
export class UsersController {
  @Get('/')
  async getUsers() {
    return this.usersService.findAll();
  }
}

// apps/web - use auto-generated hook
import { useGetUsers } from '@/hooks';

export default function UsersPage() {
  const { data } = useGetUsers();
  return <UserList users={data?.users} />;
}`,
    codeFilename: "users.controller.ts → @/hooks",
    accentColor: "#0070f3",
    reversed: false,
  },
  {
    title: "AI Agent Friendly",
    description:
      "Structured docs and consistent patterns so AI coding assistants understand your stack. ARCHITECTURE.md, API.md, and shared types make the codebase navigable.",
    bullets: [
      "Documentation structure AI agents understand",
      "Consistent patterns across frontend and backend",
      "Shared types reduce ambiguity",
    ],
    codeExample: `// docs/ARCHITECTURE.md - AI reads this
// - apps/web (Next.js), apps/api (NestJS)
// - packages/shared for types and DTOs

// Controllers → auto-generated hooks
// No @Backend or useAction - use @Controller + useGetXxx`,
    codeFilename: "docs/ARCHITECTURE.md",
    accentColor: "#e0234e",
    reversed: true,
  },
  {
    title: "Auto-Generated Hooks",
    description:
      "Remove fetch() boilerplate. Define controllers once and get type-safe React hooks. Call your API like local functions.",
    bullets: [
      "No fetch() boilerplate",
      "Use backend via auto-generated hooks",
      "Type-safe API calls",
    ],
    codeExample: `// Before (traditional)
const res = await fetch('/api/chat', {
  method: 'POST',
  body: JSON.stringify({ message }),
});
const data = await res.json();

// After (nene.js - auto-generated hook)
import { useSendMessage } from '@/hooks';
const { mutate } = useSendMessage();
mutate({ message });`,
    codeFilename: "comparison.tsx",
    accentColor: "#0070f3",
    reversed: false,
  },
  {
    title: "End-to-End Type Safety",
    description:
      "Types are shared between frontend and backend via @nene/shared. Catch errors at compile time and get full IDE autocomplete.",
    bullets: [
      "Frontend-backend types in @nene/shared",
      "Compile-time error detection",
      "Full IDE autocomplete",
    ],
    codeExample: `// packages/shared/src/types/index.ts
export interface User {
  id: string;
  name: string;
  email: string;
}

// apps/api - same type
// apps/web - same type, useGetUser() returns User`,
    codeFilename: "packages/shared",
    accentColor: "#e0234e",
    reversed: true,
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100">
      <Header />
      <main className="w-full">
        <FeaturesHero />
        
        {featuresData.map((feature, index) => (
          <FeatureSection
            key={index}
            title={feature.title}
            description={feature.description}
            bullets={feature.bullets}
            codeExample={feature.codeExample}
            codeFilename={feature.codeFilename}
            accentColor={feature.accentColor}
            reversed={feature.reversed}
          />
        ))}

        <ComparisonTable />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
