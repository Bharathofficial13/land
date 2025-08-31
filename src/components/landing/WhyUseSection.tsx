import { Clock, Target, TrendingUp, Zap } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Stop Guessing What to Build",
    description: "Get data-driven insights instead of relying on assumptions. Our AI identifies real market needs.",
    stat: "89% accuracy"
  },
  {
    icon: Zap,
    title: "Validate Demand Instantly",
    description: "See real-time engagement metrics and community discussions before you start building.",
    stat: "< 1 minute"
  },
  {
    icon: Clock,
    title: "Save 100+ Hours of Research",
    description: "Automated market research that would take you months to complete manually.",
    stat: "100+ hours saved"
  },
  {
    icon: TrendingUp,
    title: "Be the First Mover",
    description: "Identify trending opportunities before they become oversaturated markets.",
    stat: "2-6 months ahead"
  }
];

export const WhyUseSection = () => {
  return (
    <section className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Why Choose <span className="gradient-text">Market Muse</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The competitive advantage successful entrepreneurs use to stay ahead
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="glass-card p-8 rounded-2xl h-full hover:shadow-card transition-all duration-300 group-hover:scale-105 border border-white/10 relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    {/* Icon and Stat */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold gradient-text">{benefit.stat}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center">
          <div className="glass-card p-8 md:p-12 rounded-2xl max-w-4xl mx-auto border border-primary/20">
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-6 italic">
              "Instead of spending months validating ideas, I now discover profitable niches in minutes. 
              Market Muse gave me the confidence to launch my last 3 successful products."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-primary" />
              <div className="text-left">
                <div className="font-semibold text-foreground">Sarah Chen</div>
                <div className="text-sm text-muted-foreground">Serial Entrepreneur, 3 exits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};