import { Card } from "@/components/ui/card"
import { PremiumButton } from "@/components/ui/premium-button"
import { ExternalLink, PlayCircle, Star, Award, Rocket } from "lucide-react"
import infanMockup from "@/assets/infan-mockup.jpg"
import yuvaupdateMockup from "@/assets/yuvaupdate-mockup.jpg"
import converterMockup from "@/assets/converter-mockup.jpg"
import tiruvannamalaiMockup from "@/assets/tiruvannamalai-mockup.jpg"
import desicolourMockup from "@/assets/desicolour-mockup.jpg"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const FeaturedProjects = () => {
  useScrollAnimation()

  const projects = [
    {
      title: "infan.online",
      description: "Influencers' content monetization platform with integrated payment gateway",
      image: infanMockup,
      tech: ["React", "Node.js", "Payment Gateway", "Analytics"],
      url: "https://infan.online",
      type: "Web Platform",
      rating: 5,
      status: "Live"
    },
    {
      title: "yuvaupdate.in",
      description: "News article platform with mobile app available on Play Store",
      image: yuvaupdateMockup,
      tech: ["React Native", "CMS", "Push Notifications", "SEO"],
      url: "https://yuvaupdate.in",
      type: "News Platform",
      rating: 5,
      status: "Live"
    },
    {
      title: "converterpro.online",
      description: "Comprehensive online unit conversion tool with intuitive interface",
      image: converterMockup,
      tech: ["Vue.js", "PWA", "Offline Support", "API"],
      url: "https://converterpro.online",
      type: "Utility Tool",
      rating: 4,
      status: "Live"
    },
    {
      title: "tiruvannamalai.site",
      description: "Tourism and spiritual guide showcasing cultural heritage",
      image: tiruvannamalaiMockup,
      tech: ["Next.js", "CMS", "SEO", "Interactive Maps"],
      url: "https://tiruvannamalai.site",
      type: "Tourism Guide",
      rating: 5,
      status: "Live"
    },
    {
      title: "desicolour.com",
      description: "Modern lifestyle and fashion brand e-commerce platform",
      image: desicolourMockup,
      tech: ["React", "E-commerce", "Payment Gateway", "Inventory"],
      url: "https://desicolour.com",
      type: "E-commerce",
      rating: 5,
      status: "Live"
    }
  ]

  return (
    <section id="projects" className="py-32 bg-gradient-dark relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-32 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 scroll-animate">
          <h2 className="text-6xl md:text-7xl font-black mb-8">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-gold mx-auto mb-10 rounded-full" />
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Showcasing our expertise through successful project implementations that drive results
          </p>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 mb-20">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-gradient-card border-border-gold/30 hover-glow scroll-animate-scale shadow-luxury group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Enhanced Project Image */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Status & Type Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                  <span className="px-3 py-1 bg-green-500/90 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                    {project.status}
                  </span>
                  <span className="px-3 py-1 bg-gradient-gold text-primary-foreground text-xs font-bold rounded-full">
                    {project.type}
                  </span>
                </div>

                {/* Rating Stars */}
                <div className="absolute bottom-4 left-4 flex gap-1">
                  {[...Array(project.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              {/* Enhanced Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-black text-gradient-gold mb-3 group-hover:text-shimmer">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Enhanced Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1.5 bg-muted/70 text-foreground text-xs font-medium rounded-lg border border-border-gold/30 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Enhanced Action Buttons */}
                <div className="flex gap-3">
                  <PremiumButton 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover-lift"
                    asChild
                  >
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </a>
                  </PremiumButton>
                  <PremiumButton 
                    variant="premium" 
                    size="sm"
                    className="hover-scale"
                  >
                    <PlayCircle className="w-4 h-4" />
                  </PremiumButton>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center scroll-animate">
          <div className="max-w-3xl mx-auto mb-10">
            <h3 className="text-3xl md:text-4xl font-black mb-6">
              Ready to see your <span className="text-gradient-gold">vision</span> come to life?
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Join our portfolio of successful projects and transform your business with cutting-edge technology.
            </p>
          </div>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse-glow"></div>
            <PremiumButton 
              variant="gold" 
              size="xl"
              className="relative hover-lift shadow-luxury glow-gold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Rocket className="w-6 h-6 mr-3" />
              Start Your Project
              <Award className="w-5 h-5 ml-3" />
            </PremiumButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects