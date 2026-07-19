import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const viewport = { once: true, amount: 0.12, margin: "0px 0px -60px 0px" } as const;

export const sectionVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

type AnimatedSectionProps = HTMLMotionProps<"section"> & {
  children: ReactNode;
  className?: string;
  /** Fade the whole section (default). Pair with AnimatedItem when stagger is true. */
  stagger?: boolean;
  /** Skip entrance animation (e.g. hero that animates children on mount). */
  disableAnimation?: boolean;
};

export function AnimatedSection({
  children,
  className,
  stagger = false,
  disableAnimation = false,
  ...props
}: AnimatedSectionProps) {
  if (disableAnimation) {
    return <section className={cn(className)}>{children}</section>;
  }

  return (
    <motion.section
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={stagger ? staggerContainer : sectionVariants}
      {...props}
    >
      {children}
    </motion.section>
  );
}

type AnimatedItemProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  className?: string;
};

export function AnimatedItem({ children, className, ...props }: AnimatedItemProps) {
  return (
    <motion.div className={cn(className)} variants={staggerItem} {...props}>
      {children}
    </motion.div>
  );
}
