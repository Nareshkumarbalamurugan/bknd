import { Card } from "@/components/ui/card"
import { User, Target, Eye, Heart, Star, Award, Trophy } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const AboutUs = () => {
  useScrollAnimation()

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Embracing cutting-edge technologies to deliver forward-thinking solutions",
      color: "text-blue-400"
    },
    {
      icon: Heart,
      title: "Reliability", 
      description: "Building robust, dependable software that businesses can trust",
      color: "text-red-400"
    },
    {
      icon: Eye,
      title: "Scalability",
      description: "Creating solutions that grow with your business needs",
      color: "text-green-400"
    },
    {
      icon: User,
      title: "Client Success",
      description: "Your success is our ultimate measure of achievement",
      color: "text-purple-400"
    }
  ]

  const achievements = [
    { icon: Award, number: "50+", label: "Projects Delivered" },
    { icon: Star, number: "98%", label: "Client Satisfaction" },
    { icon: Trophy, number: "5+", label: "Years Experience" }
  ]

  return (
    <section id="about" className="py-32 bg-gradient-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 scroll-animate">
          <h2 className="text-6xl md:text-7xl font-black mb-8">
            About <span className="text-gradient-gold">Us</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-gold mx-auto mb-10 rounded-full" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Meet the visionary team behind your next breakthrough software solution
          </p>
        </div>

        {/* Achievements Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="text-center scroll-animate-scale hover-lift"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-glow"></div>
                <div className="relative w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center glow-subtle">
                  <achievement.icon className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-gradient-gold mb-2">
                {achievement.number}
              </h3>
              <p className="text-lg text-muted-foreground">{achievement.label}</p>
            </div>
          ))}
        </div>

        {/* Enhanced Founder Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="scroll-animate-slide">
            <h3 className="text-4xl md:text-5xl font-black mb-8">
              Meet Our <span className="text-gradient-gold">Founder</span>
            </h3>
            <div className="mb-8">
              <h4 className="text-3xl font-bold text-gradient-gold mb-3">
                Nareshkumar Balamurugan
              </h4>
              <p className="text-xl text-primary/80 mb-6 font-medium">Founder & Lead Developer</p>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground/90">
                With an unwavering passion for innovation and years of experience in cutting-edge 
                software development, Naresh leads BKND Group with a transformative vision to 
                revolutionize businesses through technology.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                His expertise spans across modern web technologies, AI solutions, cloud architecture, 
                and scalable software systems that power businesses into the future.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                Under his visionary leadership, BKND Group has successfully delivered numerous 
                award-winning projects, helping businesses worldwide achieve unprecedented 
                digital transformation success.
              </p>
            </div>
            <blockquote className="mt-8 p-6 bg-gradient-card border-l-4 border-primary rounded-lg">
              <p className="text-lg italic text-gradient-gold">
                "Building the future, one line of code at a time"
              </p>
            </blockquote>
          </div>
          
          <div className="scroll-animate-scale">
            <Card className="p-10 bg-gradient-card border-border-gold/30 hover-glow shadow-luxury">
              <div className="text-center">
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl animate-pulse-glow"></div>
                  <div className="relative w-40 h-40 bg-gradient-gold rounded-full mx-auto flex items-center justify-center glow-gold">
                    <User className="w-20 h-20 text-primary-foreground" />
                  </div>
                </div>
                <h4 className="text-2xl font-black text-gradient-gold mb-3">
                  Nareshkumar Balamurugan
                </h4>
                <p className="text-lg text-primary/80 mb-6 font-semibold">
                  Founder & Lead Developer
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="font-semibold text-primary">5+ Years</p>
                    <p className="text-muted-foreground">Experience</p>
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg">
                    <p className="font-semibold text-primary">50+ Projects</p>
                    <p className="text-muted-foreground">Delivered</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Enhanced Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <Card className="p-10 bg-gradient-card border-border-gold/30 hover-glow scroll-animate shadow-luxury group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-xl blur-xl group-hover:bg-primary/20 transition-all"></div>
              <div className="relative">
                <Target className="w-16 h-16 text-primary mb-8 animate-float" />
                <h3 className="text-3xl font-black mb-6">
                  Our <span className="text-gradient-gold">Mission</span>
                </h3>
                <p className="text-lg leading-relaxed text-foreground/90">
                  To deliver <span className="text-primary font-semibold">scalable</span>, 
                  <span className="text-primary font-semibold"> modern</span>, and 
                  <span className="text-primary font-semibold"> future-ready</span> software 
                  solutions for businesses worldwide. We strive to be the bridge between 
                  innovative technology and practical business transformation.
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-10 bg-gradient-card border-border-gold/30 hover-glow scroll-animate shadow-luxury group" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-xl blur-xl group-hover:bg-primary/20 transition-all"></div>
              <div className="relative">
                <Eye className="w-16 h-16 text-primary mb-8 animate-float" style={{ animationDelay: '1s' }} />
                <h3 className="text-3xl font-black mb-6">
                  Our <span className="text-gradient-gold">Vision</span>
                </h3>
                <p className="text-lg leading-relaxed text-foreground/90">
                  Empowering businesses with technology to build a smarter future. We envision 
                  a world where every business can harness the power of modern technology to 
                  achieve <span className="text-primary font-semibold">extraordinary growth</span> 
                  and lasting success.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Enhanced Core Values */}
        <div className="scroll-animate">
          <h3 className="text-4xl md:text-5xl font-black text-center mb-16">
            Our Core <span className="text-gradient-gold">Values</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="p-8 text-center bg-gradient-card border-border-gold/30 hover-glow scroll-animate-scale shadow-luxury group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-primary/30 transition-all"></div>
                  <div className="relative w-16 h-16 bg-gradient-gold rounded-full mx-auto flex items-center justify-center glow-subtle">
                    <value.icon className={`w-8 h-8 text-primary-foreground`} />
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4 text-gradient-gold">
                  {value.title}
                </h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs