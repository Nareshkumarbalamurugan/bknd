import { Card } from "@/components/ui/card"
import { PremiumButton } from "@/components/ui/premium-button"
import { 
  Mail, 
  Phone, 
  Globe, 
  Linkedin, 
  Instagram, 
  Github,
  MessageCircle,
  MapPin
} from "lucide-react"

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8148451139",
      href: "tel:+918148451139"
    },
    {
      icon: Mail,
      label: "Email",
      value: "bkndgroups@gmail.com",
      href: "mailto:bkndgroups@gmail.com"
    },
  
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nareshkumarbalamurugan/",
      color: "text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/nareshkumarbalamurugan",
      color: "text-foreground"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/918148451139",
      color: "text-green-400"
    }
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-dark relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="text-gradient-gold">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can help transform your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <Card className="p-8 bg-card border-border-gold/20 mb-8">
              <h3 className="text-2xl font-bold text-gradient-gold mb-6">
                Contact Information
              </h3>
              
              {/* Founder */}
              <div className="mb-8 p-6 bg-gradient-luxury rounded-lg border border-border-gold/20">
                <h4 className="text-xl font-bold mb-2">Nareshkumar Balamurugan</h4>
                <p className="text-muted-foreground">Founder & Lead Developer</p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-300 group"
                  >
                    <div className="p-3 bg-gradient-gold rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <contact.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      <p className="font-semibold text-foreground">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Social Media */}
            <Card className="p-8 bg-card border-border-gold/20">
              <h3 className="text-xl font-bold text-gradient-gold mb-6">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-3 bg-muted rounded-lg hover:bg-gradient-gold hover:scale-110 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className={`w-6 h-6 ${social.color} group-hover:text-primary-foreground`} />
                  </a>
                ))}
              </div>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <Card className="p-8 bg-gradient-luxury border-border-gold shadow-premium">
              <h3 className="text-2xl font-bold text-gradient-gold mb-4">
                Start Your Project Today
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Have a project in mind? Let's discuss your requirements and create something amazing together.
              </p>
              <div className="space-y-4">
                <PremiumButton 
                  variant="gold" 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <a href="mailto:bkndgroups@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Send us an Email
                  </a>
                </PremiumButton>
                <PremiumButton 
                  variant="outline" 
                  size="lg" 
                  className="w-full"
                  asChild
                >
                  <a href="https://wa.me/918148451139">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Chat
                  </a>
                </PremiumButton>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border-gold/20">
              <h3 className="text-xl font-bold text-gradient-gold mb-4">
                Quick Response Guarantee
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span>Free project consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span>Detailed project proposal</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span>Transparent pricing</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="text-center bg-gradient-gold p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-primary-foreground mb-4">
            Let's Build the Future Together
          </h3>
          <p className="text-primary-foreground/80 text-lg">
            Your vision, our expertise – the perfect combination for success.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact