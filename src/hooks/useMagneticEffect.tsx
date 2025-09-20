import { useEffect, useRef } from 'react'

export const useMagneticEffect = (strength: number = 0.3) => {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      
      const distance = Math.sqrt(x * x + y * y)
      const maxDistance = Math.max(rect.width, rect.height)
      
      if (distance < maxDistance * 0.7) {
        const angle = Math.atan2(y, x)
        const force = (maxDistance * 0.7 - distance) / (maxDistance * 0.7)
        const translateX = Math.cos(angle) * force * strength * 20
        const translateY = Math.sin(angle) * force * strength * 20
        
        element.style.setProperty('--x', `${translateX}px`)
        element.style.setProperty('--y', `${translateY}px`)
      }
    }

    const handleMouseLeave = () => {
      element.style.setProperty('--x', '0px')
      element.style.setProperty('--y', '0px')
    }

    document.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [strength])

  return elementRef
}