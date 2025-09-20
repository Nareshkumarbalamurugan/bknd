import { Card } from "@/components/ui/card"
import { PremiumButton } from "@/components/ui/premium-button"
import { 
  Award, 
  Zap, 
  Palette, 
  Users, 
  Clock, 
  Handshake,
  CheckCircle,
  Sparkles,
  Star,
  Trophy
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const WhyChooseUs = () => {
  useScrollAnimation()
  const advantages = [
    {
      icon: Award,
      title: "Proven Experience",
      description: "Extensive experience across multiple domains and industries",
      highlight: "5+ Years"
    },
    {
      icon: Zap,
      title: "Performance-Focused",
      description: "Clean, scalable code that ensures optimal performance",
      highlight: "99.9% Uptime"
    },
    {
      icon: Palette,
      title: "Strong UI/UX",
      description: "Beautiful designs that maximize user engagement and satisfaction",
      highlight: "Award-Winning"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Senior developers with deep technical expertise",
      highlight: "10+ Experts"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Reliable project timelines with post-launch support",
      highlight: "100% Record"
    },
    {
      icon: Handshake,
      title: "Long-term Partnership",
      description: "Building lasting relationships for sustained business growth",
      highlight: "Lifetime Support"
    }
  ]

  const features = [
    "Comprehensive project analysis and planning",
    "Agile development methodology",
    "Regular progress updates and transparency",
    "Quality assurance and testing",
    "Post-launch maintenance and support",
    "Technology consultation and guidance"
  ]

  return (
    <section id="why-choose-us" className="py-32 bg-background relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-morph"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Star className="absolute top-20 right-32 w-6 h-6 text-primary/20 animate-3d-sparkle" />
        <Trophy className="absolute bottom-40 left-32 w-8 h-8 text-primary/30 animate-3d-float" />
        <Sparkles className="absolute top-1/2 right-20 w-5 h-5 text-primary/25 animate-3d-spin" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 scroll-animate">
          <h2 className="text-6xl md:text-7xl font-black mb-8">
            Why Choose <span className="text-gradient-gold animate-3d-glow">BKND Group</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-gold mx-auto mb-10 rounded-full animate-shimmer-sweep" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Your success is our priority. Here's what sets us apart from the competition.
          </p>
        </div>

        {/* Enhanced Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card border-border-gold/30 hover-glow scroll-animate-scale shadow-luxury group relative overflow-hidden magnetic"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Enhanced Background Effects */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-gold opacity-5 rounded-full blur-2xl group-hover:opacity-20 group-hover:animate-pulse-intense transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:bg-primary/40 transition-all"></div>
                    <div className="relative p-3 bg-gradient-gold rounded-xl glow-subtle group-hover:glow-intense group-hover:animate-3d-bounce transition-all duration-300">
                      <advantage.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <span className="text-sm font-bold text-gradient-gold bg-muted/80 px-3 py-1 rounded-full border border-primary/20 group-hover:animate-text-flicker">
                    {advantage.highlight}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black text-gradient-gold mb-4 group-hover:text-shimmer transition-all">
                  {advantage.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors">
                  {advantage.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Enhanced Features List */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="scroll-animate">
            <h3 className="text-4xl md:text-5xl font-black mb-10">
              What You <span className="text-gradient-gold animate-3d-glow">Get</span>
            </h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 group hover-lift p-4 rounded-lg transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-primary/40 transition-all"></div>
                    <CheckCircle className="relative w-8 h-8 text-primary group-hover:animate-3d-bounce flex-shrink-0" />
                  </div>
                  <p className="text-foreground text-lg group-hover:text-gradient-gold transition-all font-medium">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="scroll-animate" style={{ animationDelay: '0.3s' }}>
            <Card className="p-10 bg-gradient-card border-border-gold/30 hover-glow shadow-luxury group relative overflow-hidden">
              {/* Enhanced background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:animate-morph"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black text-gradient-gold mb-6 group-hover:animate-text-flicker">
                  Let's Build the Future Together
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg group-hover:text-foreground/90 transition-colors">
                  We don't just deliver projects – we build partnerships. Our commitment extends 
                  beyond launch day, ensuring your success in the long term.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <PremiumButton 
                    variant="gold" 
                    size="lg"
                    className="flex-1 hover-lift shadow-luxury group-hover:animate-3d-bounce"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Handshake className="w-5 h-5 mr-2" />
                    Start Partnership
                  </PremiumButton>
                  <PremiumButton 
                    variant="outline" 
                    size="lg"
                    className="flex-1 hover-glow border-primary/50 group-hover:border-primary"
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Trophy className="w-5 h-5 mr-2" />
                    View Portfolio
                  </PremiumButton>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center bg-gradient-card border border-border-gold/30 rounded-2xl p-12 hover-glow scroll-animate shadow-luxury relative overflow-hidden group">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 group-hover:animate-pulse-intense"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-black mb-6 group-hover:animate-text-flicker">
              Ready to Transform Your <span className="text-gradient-gold animate-3d-glow">Business</span>?
            </h3>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed group-hover:text-foreground/90 transition-colors">
              Join hundreds of satisfied clients who have transformed their businesses with our solutions.
            </p>
            <PremiumButton 
              variant="gold" 
              size="xl"
              className="hover-lift shadow-luxury glow-intense group-hover:animate-3d-bounce magnetic"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="w-6 h-6 mr-3 animate-3d-sparkle" />
              Get Started Today
              <Star className="w-5 h-5 ml-3 animate-3d-spin" />
            </PremiumButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs