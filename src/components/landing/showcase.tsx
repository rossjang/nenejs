import { ArrowRight } from "lucide-react";

interface ShowcaseItem {
  title: string;
  description: string;
  imageUrl?: string;
  gradient?: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    title: "Flux AI Editor",
    description: "Real-time collaborative image generation",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDU78L7ZKqbfY6S7H-S0NQrDGkAY6r82W_PxCSO-eS3ljhRtq1wPPpo8NS6-jzSIK7ben_zBsLZ_y6ZNXs9rR7RELAliHy43fW3-5Uxpick72LmPeN-5I5gqhYjAHLoAaHnuF2n0Pb5Fsh9ZI2-hYaA-d2UrbHymvMx3v6ZvUjgLQAElQphHJE6eZvHEqBmfJGxcd_eGGodezqAmSKWsI-iHTKPOTvhLIpu3DBGpuDrodPtW2E24ddGbDTZB41k0QRULnkLf76y99Q",
  },
  {
    title: "Nova CRM",
    description: "Automated sales insights with vector search",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA4zdm0UD5emPmUNh3HDHCLXMMP-AdHInePcNeS8aFyDp38la8Jw1VqjnXaqRI6PtGW5MQwpSzLSyl3gRuBKzDEkb538jA8AtZHfgzOkeZiYBYdfWBWf6vjkR9GKn26eIMLlV-Mpo5FOLyhywCzgtdpcq31WH39hspJgZZMm1hbgo8gavjdPjUH5qv-6gwmGrVIWGo8-YMywi6YRB0VKFZ8-khtgvgMeTXhhQYg1ngzDdgGbdiJpjQ73R24mXtBM_YagQvU1f2jLbg",
  },
];

export default function Showcase() {
  return (
    <section className="py-20 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h3 className="text-white text-3xl font-bold">
              Built with nene.js
            </h3>
            <p className="text-slate-500 mt-2">
              Production apps pushing the boundaries of AI.
            </p>
          </div>
          <button className="text-white text-sm font-medium hover:underline flex items-center gap-1 transition-colors cursor-pointer">
            View showcase <ArrowRight className="w-3 h-3" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl aspect-video border border-white/10 hover:border-white/20 transition-colors"
            >
              {item.imageUrl ? (
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url("${item.imageUrl}")` }}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white font-bold">{item.title}</p>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
