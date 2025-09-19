import { PremiumButton } from "@/components/ui/premium-button"
import { ArrowDown, Sparkles, Code, Zap, Rocket } from "lucide-react"
import heroBg from "@/assets/hero-bg.jpg"
import bkndLogo from "@/assets/bknd-logo.png"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { useEffect, useState } from "react"

const Hero = () => {
  const [typedText, setTypedText] = useState("")
  const fullText = "Your Trusted Partner for Complete Software Solutions"
  
  useScrollAnimation()

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Enhanced Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-luxury" />
      
      {/* Enhanced particle system */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'w-1 h-1 bg-primary' : 
              i % 3 === 1 ? 'w-2 h-2 bg-primary/60' : 
              'w-0.5 h-0.5 bg-primary/80'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle-float ${8 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code className="absolute top-1/4 left-10 w-8 h-8 text-primary/20 animate-float" style={{ animationDelay: '1s' }} />
        <Zap className="absolute top-1/3 right-16 w-6 h-6 text-primary/30 animate-float" style={{ animationDelay: '3s' }} />
        <Rocket className="absolute bottom-1/3 left-20 w-7 h-7 text-primary/25 animate-float" style={{ animationDelay: '5s' }} />
      </div>
      
      {/* Enhanced Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Enhanced Logo with multiple effects */}
        <div className="mb-12 scroll-animate-scale">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-glow"></div>
            <img 
              src={bkndLogo} 
              alt="BKND Group Logo" 
              className="relative w-28 h-28 mx-auto mb-6 glow-intense rounded-full hover-scale transition-all duration-500"
            />
          </div>
        </div>
        
        {/* Enhanced Company Name with staggered animation */}
        <div className="scroll-animate">
          <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tight">
            <span className="inline-block text-gradient-gold animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              BKND
            </span>
            <span className="inline-block text-shimmer ml-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Group
            </span>
          </h1>
        </div>
        
        {/* Enhanced Tagline with typing effect */}
        <div className="flex items-center justify-center gap-4 mb-10 scroll-animate" style={{ animationDelay: '0.6s' }}>
          <Sparkles className="w-7 h-7 text-primary animate-sparkle" />
          <div className="relative">
            <p className="text-xl md:text-3xl font-light text-muted-foreground">
              {typedText}
              <span className="border-r-2 border-primary animate-pulse ml-1"></span>
            </p>
          </div>
          <Sparkles className="w-7 h-7 text-primary animate-sparkle" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Enhanced Description */}
        <div className="scroll-animate" style={{ animationDelay: '0.8s' }}>
          <p className="text-lg md:text-2xl max-w-4xl mx-auto mb-14 leading-relaxed text-foreground/90 font-light">
            Delivering <span className="text-gradient-gold font-semibold">scalable</span>, 
            <span className="text-gradient-gold font-semibold"> modern</span>, and 
            <span className="text-gradient-gold font-semibold"> future-ready</span> software solutions 
            for businesses worldwide. Where innovation meets reliability.
          </p>
        </div>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 scroll-animate" style={{ animationDelay: '1s' }}>
          <PremiumButton 
            variant="gold" 
            size="xl"
            className="hover-lift shadow-luxury"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Rocket className="w-5 h-5 mr-2" />
            Explore Our Services
          </PremiumButton>
          <PremiumButton 
            variant="outline" 
            size="xl"
            className="hover-glow"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Get In Touch
          </PremiumButton>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="scroll-animate" style={{ animationDelay: '1.2s' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg animate-pulse-glow"></div>
            <ArrowDown className="relative w-10 h-10 text-primary mx-auto animate-bounce-subtle opacity-80 hover:opacity-100 transition-opacity cursor-pointer" 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero