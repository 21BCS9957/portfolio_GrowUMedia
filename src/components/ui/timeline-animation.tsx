"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, forwardRef, createElement, ElementType } from "react"
import { cn } from "@/lib/utils"

interface TimelineContentProps extends React.HTMLAttributes<HTMLDivElement> {
  animationNum: number
  timelineRef: React.RefObject<HTMLElement | HTMLDivElement | null>
  customVariants?: any
  as?: ElementType
}

export const TimelineContent = forwardRef<HTMLDivElement, TimelineContentProps>(
  ({ children, animationNum, timelineRef, customVariants, as = "div", className, ...props }, ref) => {
    const elementRef = useRef(null)
    const isInView = useInView(elementRef, { once: true, margin: "-100px" })

    const defaultVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.2,
          duration: 0.5,
        },
      }),
    }

    const variants = customVariants || defaultVariants
    const MotionComponent = motion[as as keyof typeof motion] || motion.div

    return createElement(
      MotionComponent as any,
      {
        ref: elementRef,
        custom: animationNum,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
        variants: variants,
        className: cn(className),
        ...props,
      },
      children
    )
  }
)

TimelineContent.displayName = "TimelineContent"
