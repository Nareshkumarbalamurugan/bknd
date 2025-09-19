import { Card } from "@/components/ui/card"
import { Target, Eye, Heart, Trophy } from "lucide-react"

const AboutUs = () => {
  const values = [
    {
      icon: Trophy,
      title: "Innovation",
      description: "Cutting-edge solutions using latest technologies"
    },
    {
      icon: Heart,
      title: "Reliability",
      description: "Consistent performance and trusted partnerships"
    },
    {
      icon: Target,
      title: "Scalability",
      description: "Solutions that grow with your business"
    },
    {
      icon: Trophy,
      title: "Client Success",
      description: "Your success is our ultimate achievement"
    }
  ]

  return (
    <section id="about" className="py-24 bg-gradient-dark relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient-gold">BKND Group</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded with a vision to transform businesses through technology
          </p>
        </div>

        {/* Founder & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Founder */}
          <Card className="p-8 bg-card border-border-gold/20 shadow-premium">
            <h3 className="text-2xl font-bold text-gradient-gold mb-4">Our Founder</h3>
            <h4 className="text-3xl font-bold mb-4">Nareshkumar Balamurugan</h4>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A visionary leader with extensive experience in software development, 
              dedicated to building solutions that make a real difference in businesses worldwide.
            </p>
          </Card>

          {/* Mission & Vision */}
          <div className="space-y-6">
            <Card className="p-6 bg-card border-border-gold/20">
              <h3 className="text-xl font-bold text-gradient-gold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To deliver scalable, modern, and future-ready software solutions 
                for businesses worldwide.
              </p>
            </Card>
            <Card className="p-6 bg-card border-border-gold/20">
              <h3 className="text-xl font-bold text-gradient-gold mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                Empowering businesses with technology to build a smarter future.
              </p>
            </Card>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-gradient-gold">Core Values</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card border-border-gold/20 text-center hover:shadow-gold transition-all duration-300 hover:scale-105"
              >
                <value.icon className="w-12 h-12 text-gold mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gradient-gold mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs