

"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};
export const FormEntrance = ({ children }: { children: ReactNode }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
    {children}
  </motion.div>
);

export const AnimatedItem = ({ children }: { children: ReactNode }) => (
  <motion.div variants={itemVariants}>
    {children}
  </motion.div>
);

export const AnimatedCard = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 28, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export const FloatingDecoration = ({
  className,
}: {
  className: string;
}) => (
  <motion.div
    className={className}
    animate={{
      y: [0, -18, 0],
      x: [0, 10, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);
const SignUpAnimations = () => {
    return (
        <div>
            
        </div>
    );
};

export default SignUpAnimations;