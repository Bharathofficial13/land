import dashboardImage from "@/assets/dashboard-mockup.jpg";
import { Play, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const trendingIdeas = [
  {
    title: "AI for Teachers",
    mentions: "1,200",
    growth: "+45%",
    category: "EdTech",
    opportunity: "High"
  },
  {
    title: "Remote Team Tools",
    mentions: "890",
    growth: "+32%",
    category: "Productivity",
    opportunity: "Medium"
  },
  {
    title: "Sustainable Living Apps",
    mentions: "654",
    growth: "+67%",
    category: "Lifestyle",
    opportunity: "High"
  }
];

export const MockPreviewSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            See <span className="gradient-text">Market Insights</span> in Action
          </h2>
        </div>

        {/* Horizontal Cards */}
        <div>
          <div className="flex items-center text-center gap-3 mb-8">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-lg font-semibold">Live Trending Opportunities</span>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4">
            {trendingIdeas.map((idea, index) => (
              <div
                key={index}
                className="min-w-[280px] glass-card p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {idea.title}
                    </h3>
                    <div className="text-sm text-muted-foreground">{idea.category}</div>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      idea.opportunity === "High"
                        ? "bg-green-400/20 text-green-400"
                        : "bg-yellow-400/20 text-yellow-400"
                    }`}
                  >
                    {idea.opportunity} Opportunity
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-muted-foreground">
                      {idea.mentions} mentions this week
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-green-400 font-medium">
                      {idea.growth} growth
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
