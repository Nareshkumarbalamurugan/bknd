import { Card } from "@/components/ui/card"
import { PremiumButton } from "@/components/ui/premium-button"
import { 
  Globe, 
  Brain, 
  Smartphone, 
  Code2, 
  Settings,
  ArrowRight,
  Sparkles,
  Zap,
  Rocket
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const Services = () => {
  useScrollAnimation()

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive, scalable websites built with cutting-edge technologies",
      features: ["React & Next.js", "Node.js Backend", "Database Integration", "SEO Optimized"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Intelligent automation and futuristic AI-driven tools for your business",
      features: ["Machine Learning", "Process Automation", "Data Analytics", "AI Integration"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native Android & iOS applications with exceptional user experience",
      features: ["Cross-platform", "Native Performance", "App Store Ready", "Real-time Features"],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Code2,
      title: "Python Programming & Automation",
      description: "Streamlined workflows and automated solutions using Python",
      features: ["Workflow Automation", "Data Processing", "API Development", "Task Scheduling"],
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: Settings,
      title: "Custom Software Solutions",
      description: "Tailored applications designed for your unique business requirements",
      features: ["Requirement Analysis", "Custom Architecture", "Scalable Design", "Ongoing Support"],
      color: "from-red-500/20 to-rose-500/20"
    }
  ]

  return (
    <section id="services" className="py-32 bg-gradient-hero relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <Rocket className="absolute top-32 right-32 w-8 h-8 text-primary animate-float" style={{ animationDelay: '2s' }} />
        <Sparkles className="absolute bottom-32 left-32 w-6 h-6 text-primary animate-float" style={{ animationDelay: '4s' }} />
        <Zap className="absolute top-1/2 right-20 w-7 h-7 text-primary animate-float" style={{ animationDelay: '6s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 scroll-animate">
          <h2 className="text-6xl md:text-7xl font-black mb-8">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-gold mx-auto mb-10 rounded-full" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive software solutions tailored to transform your business
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card border-border-gold/30 hover-glow scroll-animate-scale shadow-luxury group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Dynamic Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:bg-primary/30 transition-all"></div>
                    <div className="relative p-4 bg-gradient-gold rounded-xl glow-subtle group-hover:glow-gold transition-all duration-300">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-gradient-gold mb-2 group-hover:text-shimmer">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                      <span className="text-foreground/90 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <PremiumButton 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground hover-lift border-border-gold/50"
                >
                  <span>Learn More</span> 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </PremiumButton>
              </div>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center scroll-animate">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse-glow"></div>
            <PremiumButton 
              variant="gold" 
              size="xl"
              className="relative hover-lift shadow-luxury glow-gold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Rocket className="w-6 h-6 mr-3" />
              Start Your Project Today
              <Sparkles className="w-5 h-5 ml-3 animate-sparkle" />
            </PremiumButton>
          </div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to transform your business? Let's discuss your vision and create something extraordinary together.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services