"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface HoverTextProps {
  children: ReactNode
}

export default function HoverText({ children }: HoverTextProps) {
  return (
    <motion.span
      className="inline-block"
      whileHover={{
        scale: 1.05,
        textShadow: "0px 0px 8px rgba(249,115,22,0.3)",
        transition: { duration: 0.3 },
      }}
    >
      {children}
    </motion.span>
  )
}

