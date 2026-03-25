import { useState, useEffect } from 'react'
import './PageReveal.css'

export default function PageReveal({ onComplete }) {
  const [isRevealing, setIsRevealing] = useState(true)

  useEffect(() => {
    // Prevent scroll during reveal
    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => {
      setIsRevealing(false)
      document.body.style.overflow = ''
      if (onComplete) onComplete()
    }, 3000) // 3 second reveal

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [onComplete])

  if (!isRevealing) return null

  return (
    <div className="page-reveal">
      <div className="reveal-doors">
        <div className="reveal-door reveal-door-left" />
        <div className="reveal-door reveal-door-right" />
      </div>
      <div className="reveal-logo">
        <div className="reveal-text">
          <span className="reveal-pre">LE GROUPE</span>
          <span className="reveal-name">GYSEL</span>
          <span className="reveal-sub">#1 EN ESTRIE</span>
        </div>
      </div>
    </div>
  )
}
