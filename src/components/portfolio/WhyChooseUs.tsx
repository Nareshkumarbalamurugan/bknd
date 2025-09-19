import { Card } from "@/components/ui/card"
import { PremiumButton } from "@/components/ui/premium-button"
import { 
  Award, 
  Zap, 
  Palette, 
  Users, 
  Clock, 
  Handshake,
  CheckCircle
} from "lucide-react"

const WhyChooseUs = () => {
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
    <section id="why-choose-us" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Why Choose <span className="text-gradient-gold">BKND Group</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your success is our priority. Here's what sets us apart from the competition.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border-gold/20 hover:shadow-gold transition-all duration-500 hover:scale-105 group relative overflow-hidden"
            >
              {/* Background Glow Effect */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-gold opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <advantage.icon className="w-12 h-12 text-gold" />
                  <span className="text-xs font-bold text-gradient-gold bg-muted px-2 py-1 rounded">
                    {advantage.highlight}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gradient-gold mb-3">
                  {advantage.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Features List */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-8">
              What You <span className="text-gradient-gold">Get</span>
            </h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0" />
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="p-8 bg-gradient-luxury border-border-gold shadow-premium">
            <h3 className="text-2xl font-bold text-gradient-gold mb-4">
              Let's Build the Future Together
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We don't just deliver projects – we build partnerships. Our commitment extends 
              beyond launch day, ensuring your success in the long term.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <PremiumButton 
                variant="gold" 
                className="flex-1"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Partnership
              </PremiumButton>
              <PremiumButton 
                variant="outline" 
                className="flex-1"
              >
                View Portfolio
              </PremiumButton>
            </div>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-luxury border border-border-gold/20 rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your <span className="text-gradient-gold">Business</span>?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with our solutions.
          </p>
          <PremiumButton 
            variant="gold" 
            size="xl"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started Today
          </PremiumButton>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs