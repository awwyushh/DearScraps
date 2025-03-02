"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function BlurryOverlay() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0 opacity-40"
      style={{
        background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(249,115,22,0.15), transparent)`,
      }}
      animate={{
        background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(249,115,22,0.15), transparent)`,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
    />
  )
}

