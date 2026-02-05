import { Check } from "lucide-react";
import CodeDemo from "./code-demo";

interface FeatureSectionProps {
  title: string;
  description: string;
  bullets: string[];
  codeExample: string;
  codeFilename: string;
  reversed?: boolean;
  accentColor: string;
}

export default function FeatureSection({
  title,
  description,
  bullets,
  codeExample,
  codeFilename,
  reversed = false,
  accentColor,
}: FeatureSectionProps) {
  return (
    <section className="py-24 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            reversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Text Content */}
          <div className={reversed ? "lg:order-2" : ""}>
            <div
              className="h-1 w-16 rounded-full mb-6"
              style={{ background: accentColor }}
            ></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              {title}
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              {description}
            </p>
            <ul className="space-y-4">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: `${accentColor}20` }}
                  >
                    <Check
                      className="h-4 w-4"
                      style={{ color: accentColor }}
                    />
                  </div>
                  <span className="text-slate-300">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code Demo */}
          <div className={reversed ? "lg:order-1" : ""}>
            <CodeDemo code={codeExample} filename={codeFilename} />
          </div>
        </div>
      </div>
    </section>
  );
}
