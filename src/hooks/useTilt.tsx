import { useRef, useEffect, useState } from 'react'

type TiltStyle = React.CSSProperties

export function useTilt<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [style, setStyle] = useState<TiltStyle>({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)' })

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let frame = 0

    function onMove(e: PointerEvent) {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      const rotateY = (px - 0.5) * 16 // -8deg .. 8deg
      const rotateX = (0.5 - py) * 12 // -6deg .. 6deg
      const scale = 1.02

      if (frame) cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        setStyle({
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale},${scale},${scale})`,
          transition: 'transform 120ms linear'
        })
      })
    }

    function onLeave() {
      if (frame) cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        setStyle({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)', transition: 'transform 400ms cubic-bezier(0.2,0.8,0.2,1)' })
      })
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    el.addEventListener('pointercancel', onLeave)

    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      el.removeEventListener('pointercancel', onLeave)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [ref.current])

  return { ref, style }
}

export default useTilt
