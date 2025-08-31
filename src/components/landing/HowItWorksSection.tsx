import { Search, BarChart3, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Scrape Trends",
    description: "Our AI scans communities (Reddit, LinkedIn, Twitter) to identify emerging needs and pain points in real-time.",
    color: "text-blue-400"
  },
  {
    icon: BarChart3,
    title: "Group Insights",
    description: "Ideas are clustered by niche and growth potential using advanced machine learning algorithms.",
    color: "text-purple-400"
  },
  {
    icon: Rocket,
    title: "Find Opportunities",
    description: "Get untapped markets before they blow up. Be the first to market with validated demand.",
    color: "text-pink-400"
  }
];

export const HowItWorksSection = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            How <span className="gradient-text">It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From raw data to actionable insights in three simple steps
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-px bg-gradient-to-r from-primary/50 to-accent/50" />
          
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index} 
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-glow z-10">
                  {index + 1}
                </div>

                {/* Card */}
                <div className="glass-card p-8 rounded-2xl h-full hover:shadow-card transition-all duration-300 group-hover:scale-105 border border-white/10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${step.color}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card border border-primary/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium">Live data processing right now</span>
          </div>
        </div>
      </div>
    </section>
  );
};