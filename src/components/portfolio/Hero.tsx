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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-16">
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

      {/* Floating 3D icons */}
      <div className="absolute inset-0 pointer-events-none perspective-1000">
        <Code className="absolute top-1/4 left-10 w-8 h-8 text-primary/20 animate-3d-float transform-3d" style={{ animationDelay: '1s' }} />
        <Zap className="absolute top-1/3 right-16 w-6 h-6 text-primary/30 animate-3d-spin transform-3d" style={{ animationDelay: '3s' }} />
        <Rocket className="absolute bottom-1/3 left-20 w-7 h-7 text-primary/25 animate-3d-rocket transform-3d" style={{ animationDelay: '5s' }} />
      </div>
      
      {/* Enhanced Content - Properly centered */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center flex flex-col justify-center min-h-screen py-20">
        
        {/* Enhanced Company Name with stunning 3D animation */}
        <div className="scroll-animate perspective-1000">
          <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tight">
            <span className="inline-block text-gradient-gold animate-3d-float transform-3d hover-3d-tilt" style={{ animationDelay: '0.2s' }}>
              BKND
            </span>
            <span className="inline-block text-shimmer ml-4 animate-3d-float-reverse transform-3d hover-3d-tilt" style={{ animationDelay: '0.4s' }}>
              Group
            </span>
          </h1>
        </div>
        
        {/* Enhanced Tagline with 3D typing effect */}
        <div className="flex items-center justify-center gap-4 mb-10 scroll-animate perspective-1000" style={{ animationDelay: '0.6s' }}>
          <Sparkles className="w-7 h-7 text-primary animate-3d-spin" />
          <div className="relative transform-3d">
            <p className="text-xl md:text-3xl font-light text-muted-foreground animate-3d-glow">
              {typedText}
              <span className="border-r-2 border-primary animate-pulse ml-1"></span>
            </p>
          </div>
          <Sparkles className="w-7 h-7 text-primary animate-3d-spin" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Enhanced Description with 3D depth */}
        <div className="scroll-animate perspective-1000" style={{ animationDelay: '0.8s' }}>
          <p className="text-lg md:text-2xl max-w-4xl mx-auto mb-14 leading-relaxed text-foreground/90 font-light transform-3d animate-3d-subtle">
            Delivering <span className="text-gradient-gold font-semibold hover-3d-word">scalable</span>, 
            <span className="text-gradient-gold font-semibold hover-3d-word"> modern</span>, and 
            <span className="text-gradient-gold font-semibold hover-3d-word"> future-ready</span> software solutions 
            for businesses worldwide. Where innovation meets reliability.
          </p>
        </div>
        
        {/* Enhanced CTA Buttons with subtle effects */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 scroll-animate" style={{ animationDelay: '1s' }}>
          <PremiumButton 
            variant="gold" 
            size="xl"
            className="shadow-luxury transition-all duration-300 hover:shadow-gold hover:scale-105"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Rocket className="w-5 h-5 mr-2" />
            Explore Our Services
          </PremiumButton>
          <PremiumButton 
            variant="outline" 
            size="xl"
            className="transition-all duration-300 hover:shadow-glow-subtle hover:scale-105"
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