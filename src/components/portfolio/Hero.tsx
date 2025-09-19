import { PremiumButton } from "@/components/ui/premium-button"
import { ArrowDown, Sparkles } from "lucide-react"
import heroBg from "@/assets/hero-bg.jpg"
import bkndLogo from "@/assets/bknd-logo.png"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-luxury opacity-90" />
      
      {/* Animated particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 animate-float">
          <img 
            src={bkndLogo} 
            alt="BKND Group Logo" 
            className="w-24 h-24 mx-auto mb-6 glow-gold rounded-full"
          />
        </div>
        
        {/* Company Name */}
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
          <span className="text-gradient-gold">BKND</span>
          <span className="text-foreground"> Group</span>
        </h1>
        
        {/* Tagline */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <Sparkles className="w-6 h-6 text-gold animate-pulse-glow" />
          <p className="text-xl md:text-2xl font-light text-muted-foreground">
            Your Trusted Partner for Complete Software Solutions
          </p>
          <Sparkles className="w-6 h-6 text-gold animate-pulse-glow" />
        </div>
        
        {/* Description */}
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-foreground/80">
          Delivering scalable, modern, and future-ready software solutions 
          for businesses worldwide. Innovation meets reliability.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <PremiumButton 
            variant="gold" 
            size="xl"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Our Services
          </PremiumButton>
          <PremiumButton 
            variant="outline" 
            size="xl"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </PremiumButton>
        </div>
        
        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 text-gold mx-auto opacity-60" />
        </div>
      </div>
    </section>
  )
}

export default Hero