"use client"

import { motion } from "framer-motion"

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <div className="relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            DearScraps
          </motion.h1>

          <motion.div
            className="flex justify-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="w-4 h-4 rounded-full bg-orange-500 animate-bounce" style={{ animationDelay: "0ms" }}></div>
            <div
              className="w-4 h-4 rounded-full bg-orange-400 animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-4 h-4 rounded-full bg-orange-300 animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
            <div className="w-4 h-4 rounded-full bg-pink-400 animate-bounce" style={{ animationDelay: "450ms" }}></div>
            <div className="w-4 h-4 rounded-full bg-pink-500 animate-bounce" style={{ animationDelay: "600ms" }}></div>
          </motion.div>

          <motion.p
            className="mt-4 text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Loading your memories...
          </motion.p>
        </motion.div>

        <motion.div
          className="absolute -z-10 -inset-10 rounded-full"
          initial={{
            background: "radial-gradient(circle, rgba(249,115,22,0.2) 0%, rgba(249,115,22,0) 70%)",
            scale: 0.8,
          }}
          animate={{
            background: "radial-gradient(circle, rgba(249,115,22,0.2) 0%, rgba(249,115,22,0) 70%)",
            scale: 1.2,
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            duration: 2,
          }}
        />
      </div>
    </motion.div>
  )
}

