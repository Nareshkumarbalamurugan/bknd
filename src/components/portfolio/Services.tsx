import { Card } from "@/components/ui/card"
import { PremiumButton } from "@/components/ui/premium-button"
import { 
  Globe, 
  Brain, 
  Smartphone, 
  Code2, 
  Settings,
  ArrowRight
} from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive, scalable websites built with cutting-edge technologies",
      features: ["React & Next.js", "Node.js Backend", "Database Integration", "SEO Optimized"]
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Intelligent automation and futuristic AI-driven tools for your business",
      features: ["Machine Learning", "Process Automation", "Data Analytics", "AI Integration"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native Android & iOS applications with exceptional user experience",
      features: ["Cross-platform", "Native Performance", "App Store Ready", "Real-time Features"]
    },
    {
      icon: Code2,
      title: "Python Programming & Automation",
      description: "Streamlined workflows and automated solutions using Python",
      features: ["Workflow Automation", "Data Processing", "API Development", "Task Scheduling"]
    },
    {
      icon: Settings,
      title: "Custom Software Solutions",
      description: "Tailored applications designed for your unique business requirements",
      features: ["Requirement Analysis", "Custom Architecture", "Scalable Design", "Ongoing Support"]
    }
  ]

  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border-gold/20 hover:shadow-gold transition-all duration-500 hover:scale-105 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-gold rounded-lg">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gradient-gold mb-2">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
              
              <PremiumButton 
                variant="outline" 
                className="w-full group-hover:bg-gold group-hover:text-primary-foreground"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </PremiumButton>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <PremiumButton 
            variant="gold" 
            size="xl"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Project Today
          </PremiumButton>
        </div>
      </div>
    </section>
  )
}

export default Services