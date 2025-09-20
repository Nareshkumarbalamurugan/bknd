import Navigation from "@/components/portfolio/Navigation"
import Hero from "@/components/portfolio/Hero"
import AboutUs from "@/components/portfolio/AboutUs"
import Services from "@/components/portfolio/Services"
import FeaturedProjects from "@/components/portfolio/FeaturedProjects"
import WhyChooseUs from "@/components/portfolio/WhyChooseUs"
import Contact from "@/components/portfolio/Contact"
import { useEffect } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const Index = () => {
  useScrollAnimation()
  
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "BKND Group - Professional Software Solutions | Web Development, AI & Mobile Apps"
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'BKND Group delivers scalable software solutions including web development, AI automation, mobile apps, and custom software. Trusted partner for complete digital transformation.')
    }
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <AboutUs />
      <Services />
      <FeaturedProjects />
      <WhyChooseUs />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-background border-t border-border-gold/20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 BKND Group. All rights reserved. 
            <span className="text-gradient-gold mx-2">|</span>
            Empowering businesses with technology.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
