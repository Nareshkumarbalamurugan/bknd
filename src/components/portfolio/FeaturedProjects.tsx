import { Card } from "@/components/ui/card"
import { PremiumButton } from "@/components/ui/premium-button"
import { ExternalLink, PlayCircle } from "lucide-react"
import infanMockup from "@/assets/infan-mockup.jpg"
import yuvaupdateMockup from "@/assets/yuvaupdate-mockup.jpg"
import converterMockup from "@/assets/converter-mockup.jpg"
import tiruvannamalaiMockup from "@/assets/tiruvannamalai-mockup.jpg"
import desicolourMockup from "@/assets/desicolour-mockup.jpg"

const FeaturedProjects = () => {
  const projects = [
    {
      title: "infan.online",
      description: "Influencers' content monetization platform with integrated payment gateway",
      image: infanMockup,
      tech: ["React", "Node.js", "Payment Gateway", "Analytics"],
      url: "https://infan.online",
      type: "Web Platform"
    },
    {
      title: "yuvaupdate.in",
      description: "News article platform with mobile app available on Play Store",
      image: yuvaupdateMockup,
      tech: ["React Native", "CMS", "Push Notifications", "SEO"],
      url: "https://yuvaupdate.in",
      type: "News Platform"
    },
    {
      title: "converterpro.online",
      description: "Comprehensive online unit conversion tool with intuitive interface",
      image: converterMockup,
      tech: ["Vue.js", "PWA", "Offline Support", "API"],
      url: "https://converterpro.online",
      type: "Utility Tool"
    },
    {
      title: "tiruvannamalai.site",
      description: "Tourism and spiritual guide showcasing cultural heritage",
      image: tiruvannamalaiMockup,
      tech: ["Next.js", "CMS", "SEO", "Interactive Maps"],
      url: "https://tiruvannamalai.site",
      type: "Tourism Guide"
    },
    {
      title: "desicolour.com",
      description: "Modern lifestyle and fashion brand e-commerce platform",
      image: desicolourMockup,
      tech: ["React", "E-commerce", "Payment Gateway", "Inventory"],
      url: "https://desicolour.com",
      type: "E-commerce"
    }
  ]

  return (
    <section id="projects" className="py-24 bg-gradient-dark relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="text-gradient-gold">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our expertise through successful project implementations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-card border-border-gold/20 hover:shadow-gold transition-all duration-500 hover:scale-105 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-gold text-primary-foreground text-xs font-semibold rounded-full">
                    {project.type}
                  </span>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gradient-gold mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-foreground text-xs rounded border border-border-gold/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2">
                  <PremiumButton 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Site
                    </a>
                  </PremiumButton>
                  <PremiumButton 
                    variant="premium" 
                    size="sm"
                  >
                    <PlayCircle className="w-4 h-4" />
                  </PremiumButton>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to see your project come to life?
          </p>
          <PremiumButton 
            variant="gold" 
            size="xl"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Project
          </PremiumButton>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects