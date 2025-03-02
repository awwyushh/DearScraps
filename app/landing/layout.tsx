import type React from "react"
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">{children}</div>
}
