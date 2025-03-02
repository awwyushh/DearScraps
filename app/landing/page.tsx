"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Typewriter from "typewriter-effect"
import AnimatedCursor from "react-animated-cursor"
import { useInView } from "react-intersection-observer"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"
import { Button } from "@/components/ui/button"
import Loader from "./components/loader"
import HoverText from "./components/hover-text"
import BlurryOverlay from "./components/blurry-overlay"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

export default function LandingPage() {
  const [loading, setLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [memoryRef, memoryInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
      setTimeout(() => {
        setShowContent(true)
      }, 500)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const memories = [
    {
      id: 1,
      title: "Summer Memories",
      description: "Beach days and sunshine",
      image: "/placeholder.svg?height=600&width=400",
    },
    {
      id: 2,
      title: "Family Reunion",
      description: "Generations together",
      image: "/placeholder.svg?height=600&width=400",
    },
    {
      id: 3,
      title: "Travel Adventures",
      description: "Exploring new places",
      image: "/placeholder.svg?height=600&width=400",
    },
    {
      id: 4,
      title: "Graduation Day",
      description: "Celebrating achievements",
      image: "/placeholder.svg?height=600&width=400",
    },
    {
      id: 5,
      title: "Wedding Bliss",
      description: "Love and happiness",
      image: "/placeholder.svg?height=600&width=400",
    },
  ]

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0.2}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#f97316",
        }}
        outerStyle={{
          border: "3px solid #f97316",
        }}
      />

      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      {showContent && (
        <div ref={mainRef} className="relative overflow-hidden">
          <BlurryOverlay />

          {/* Hero Section */}
          <motion.section
            ref={heroRef}
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20"
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600">
                <HoverText>DearScraps</HoverText>
              </h1>

              <div className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 h-20">
                <Typewriter
                  options={{
                    strings: [
                      "Preserve your memories digitally.",
                      "Create beautiful scrapbooks.",
                      "Share moments with loved ones.",
                      "Collaborate on shared memories.",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={heroInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-100">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <div className="animate-bounce">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-orange-500"
                >
                  <path d="M12 5v14"></path>
                  <path d="m19 12-7 7-7-7"></path>
                </svg>
              </div>
            </motion.div>
          </motion.section>

          {/* About Section */}
          <motion.section
            ref={aboutRef}
            initial={{ opacity: 0 }}
            animate={aboutInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-gray-800"
          >
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ x: -100, opacity: 0 }}
                animate={aboutInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-8 text-center"
              >
                <HoverText>About DearScraps</HoverText>
              </motion.h2>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={aboutInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="space-y-6 text-gray-700 dark:text-gray-300">
                  <p className="text-lg">
                    DearScraps is a digital platform for creating, managing, and collaborating on scrapbooks. It allows
                    users to preserve memories with photos, text, and media while connecting globally through a live
                    feed of user-crafted "scraps."
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-orange-500 p-2 rounded-full text-white mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Scrapbook Creation</h3>
                        <p>Upload photos, add notes, and arrange memories.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-orange-500 p-2 rounded-full text-white mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Collaboration</h3>
                        <p>Invite others to contribute to your scrapbooks.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-orange-500 p-2 rounded-full text-white mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Global Feed</h3>
                        <p>View real-time scraps from around the world.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={aboutInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="relative h-80 w-full rounded-lg overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                >
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="DearScraps Interface"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Memories Section */}
          <motion.section
            ref={memoryRef}
            initial={{ opacity: 0 }}
            animate={memoryInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
          >
            <div className="max-w-6xl mx-auto w-full">
              <motion.h2
                initial={{ x: -100, opacity: 0 }}
                animate={memoryInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-4 text-center"
              >
                <HoverText>Cherished Memories</HoverText>
              </motion.h2>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={memoryInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
              >
                Browse through these beautiful scrapbook memories. Each one tells a unique story and captures precious
                moments.
              </motion.p>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={memoryInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="w-full"
              >
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={"auto"}
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={true}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  modules={[EffectCoverflow, Pagination, Autoplay]}
                  className="mySwiper"
                >
                  {memories.map((memory) => (
                    <SwiperSlide key={memory.id} className="max-w-sm">
                      <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="relative h-80 w-full">
                          <Image
                            src={memory.image || "/placeholder.svg"}
                            alt={memory.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2">{memory.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{memory.description}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="py-20 px-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Creating Your Digital Scrapbook Today</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of users who are preserving their memories in beautiful digital scrapbooks. It's free to
                get started!
              </p>
              <Link href="/auth/signup">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                Create Your First Scrapbook
              </Button>
              </Link>
            </div>
          </motion.section>

          {/* Footer */}
          <footer className="py-8 px-4 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto text-center">
              <p className="text-gray-600 dark:text-gray-400">
                &copy; {new Date().getFullYear()} DearScraps. All rights reserved.
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500"
                >
                  Terms
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500"
                >
                  Privacy
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-500"
                >
                  Contact
                </Link>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  )
}

