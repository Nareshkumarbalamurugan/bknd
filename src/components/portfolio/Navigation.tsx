import { useState, useEffect } from "react"
import { PremiumButton } from "@/components/ui/premium-button"
import { Menu, X } from "lucide-react"
import bkndLogo from "@/assets/bknd-logo.png"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Why Us", href: "#why-choose-us" },
    { label: "Contact", href: "#contact" }
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-lg shadow-premium' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={bkndLogo} alt="BKND Group" className="w-10 h-10 glow-gold rounded-full" />
            <span className="text-xl font-bold">
              <span className="text-gradient-gold">BKND</span> Group
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-gold transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            <PremiumButton 
              variant="gold" 
              size="sm"
              onClick={() => handleNavClick('#contact')}
            >
              Get Started
            </PremiumButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 bg-background/95 backdrop-blur-lg rounded-lg mt-2 border border-border-gold/20">
            <div className="flex flex-col gap-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left py-2 text-foreground hover:text-gold transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <PremiumButton 
                variant="gold" 
                size="sm" 
                className="mt-2"
                onClick={() => handleNavClick('#contact')}
              >
                Get Started
              </PremiumButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation