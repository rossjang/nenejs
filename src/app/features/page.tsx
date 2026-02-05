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
      "프론트엔드와 백엔드를 동일 파일에서 관리하세요. 컨텍스트 스위칭 없이 개발하고, 단일 저장소에서 단일 배포까지.",
    bullets: [
      "프론트엔드와 백엔드 동일 파일에서 관리",
      "컨텍스트 스위칭 없이 개발",
      "단일 저장소, 단일 배포",
    ],
    codeExample: `// app/routes/users.tsx
@Backend()
export class UserService {
  @Get('/users')
  async getUsers() {
    return await db.users.findMany();
  }
}

export default function UsersPage() {
  const { data } = useQuery(UserService.getUsers);
  return <UserList users={data} />;
}`,
    codeFilename: "app/routes/users.tsx",
    accentColor: "#0070f3",
    reversed: false,
  },
  {
    title: "AI-Optimized Context",
    description:
      "AI 코파일럿이 전체 컨텍스트를 이해합니다. 단일 파일에서 전체 로직을 파악하고 더 정확한 코드 제안을 받으세요.",
    bullets: [
      "AI 코파일럿이 전체 컨텍스트 이해",
      "단일 파일에서 전체 로직 파악 가능",
      "더 정확한 코드 제안",
    ],
    codeExample: `// AI understands the full context
@Backend()
export class OrderService {
  @UseAI()
  async analyzeOrder(orderId: string) {
    // AI can see both backend logic
    // and frontend usage in same file
    return this.ai.analyze(orderId);
  }
}

// Frontend component in same file
export default function OrderPage() {
  // AI suggests accurate completions
  const analyze = useAction(OrderService.analyzeOrder);
}`,
    codeFilename: "app/routes/orders.tsx",
    accentColor: "#e0234e",
    reversed: true,
  },
  {
    title: "No-API Network",
    description:
      "fetch() 보일러플레이트를 완전히 제거하세요. 함수를 직접 호출하는 것처럼 백엔드를 사용하고, 타입 안전한 RPC를 경험하세요.",
    bullets: [
      "fetch() 보일러플레이트 제거",
      "직접 함수 호출처럼 백엔드 사용",
      "타입 안전한 RPC",
    ],
    codeExample: `// No more fetch boilerplate
// Before (traditional way)
const res = await fetch('/api/chat', {
  method: 'POST',
  body: JSON.stringify({ message }),
});
const data = await res.json();

// After (nene.js way)
const { execute } = useAction(ChatService.send);
const data = await execute({ message });

// Type-safe, clean, simple`,
    codeFilename: "comparison.tsx",
    accentColor: "#0070f3",
    reversed: false,
  },
  {
    title: "End-to-End Type Safety",
    description:
      "프론트엔드와 백엔드 간 타입이 자동으로 공유됩니다. 컴파일 타임에 에러를 감지하고, IDE 자동완성을 완벽하게 지원받으세요.",
    bullets: [
      "프론트엔드-백엔드 타입 자동 공유",
      "컴파일 타임 에러 감지",
      "IDE 자동완성 지원",
    ],
    codeExample: `// Types are automatically shared
interface User {
  id: string;
  name: string;
  email: string;
}

@Backend()
export class UserService {
  @Get('/user/:id')
  async getUser(id: string): Promise<User> {
    return await db.users.findById(id);
  }
}

// Frontend gets full type inference
const { data } = useQuery(UserService.getUser);
// data is typed as User | undefined`,
    codeFilename: "app/routes/user.tsx",
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
