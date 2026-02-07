import { Check, X } from "lucide-react";

interface ComparisonRow {
  feature: string;
  nene: string | boolean;
  traditional: string | boolean;
}

const comparisonData: ComparisonRow[] = [
  {
    feature: "Setup time",
    nene: "5 min",
    traditional: "2hr+",
  },
  {
    feature: "Type sharing",
    nene: "Automatic",
    traditional: "Manual setup",
  },
  {
    feature: "API boilerplate",
    nene: "None",
    traditional: "fetch/axios required",
  },
  {
    feature: "Front/back integration",
    nene: true,
    traditional: false,
  },
  {
    feature: "AI-friendly docs",
    nene: "Built-in structure",
    traditional: "Ad-hoc",
  },
  {
    feature: "Single deploy",
    nene: true,
    traditional: false,
  },
  {
    feature: "Context switching",
    nene: "Minimal",
    traditional: "Frequent",
  },
  {
    feature: "Documentation structure",
    nene: "Optimized for agents",
    traditional: "Limited",
  },
];

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="h-5 w-5 text-green-400" />
    ) : (
      <X className="h-5 w-5 text-red-400" />
    );
  }
  return <span>{value}</span>;
}

export default function ComparisonTable() {
  return (
    <section className="py-24 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            nene.js vs{" "}
            <span className="text-slate-400">Traditional Stack</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            How nene.js compares to using Next.js and NestJS separately
          </p>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-slate-400 font-medium py-4 px-6">
                  Feature
                </th>
                <th className="text-center py-4 px-6">
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-4 w-4 fusion-gradient rounded-sm"></div>
                    <span className="text-white font-bold">nene.js</span>
                  </div>
                </th>
                <th className="text-center text-slate-400 font-medium py-4 px-6">
                  Next.js + NestJS
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-4 px-6 text-slate-300">{row.feature}</td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center text-green-400 font-medium">
                      <CellValue value={row.nene} />
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <div className="flex justify-center text-slate-500">
                      <CellValue value={row.traditional} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
