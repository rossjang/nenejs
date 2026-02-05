import { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export function AuthCard({ children, title, description }: AuthCardProps) {
  return (
    <div className="w-full max-w-[400px] p-8 bg-white/[0.03] border border-white/10 rounded-2xl">
      <div className="text-center mb-6">
        <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>
        {description && (
          <p className="text-slate-400 text-sm">{description}</p>
        )}
      </div>
      {children}
    </div>
  );
}
