"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar, ImageIcon } from 'lucide-react';

interface MemoryCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  date: string;
  count: string;
}

export function MemoryCard({ imageSrc, altText, title, date, count }: MemoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="overflow-hidden h-full border-border bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.img
            src={imageSrc}
            alt={altText}
            className="object-cover w-full h-full"
            animate={{
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <h3 className="text-white font-semibold text-lg">{title}</h3>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-3.5 w-3.5 mr-1" />
            <span>{date}</span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <div className="flex items-center text-sm text-muted-foreground">
            <ImageIcon className="h-3.5 w-3.5 mr-1" />
            <span>{count}</span>
          </div>
          <motion.div
            className="w-2.5 h-2.5 rounded-full bg-primary"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </CardFooter>
      </Card>
    </motion.div>
  );
}
