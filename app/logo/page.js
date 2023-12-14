import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold"
        whileHover={{
          backgroundColor: [
            "#000000",
            "#8ef6e4",
            "#9896f1",
            "#d59bf6",
            "#edb1f1",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        AG
      </MotionLink>
    </div>
  );
};

export default Logo;
