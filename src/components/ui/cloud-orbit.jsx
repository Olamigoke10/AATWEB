import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export function CloudOrbit({
  duration = 2,
  children,
  size = 160,
  className,
  images = [],
  ...props
}) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const lastTimestamp = React.useRef(0);

  React.useEffect(() => {
    let animationFrameId;
    const updateFrame = (timestamp) => {
      if (lastTimestamp.current === 0) lastTimestamp.current = timestamp;
      const elapsedTime = (timestamp - lastTimestamp.current) / 1000;
      const idx = Math.floor(elapsedTime / duration) % images.length;
      setCurrentIndex(idx);
      animationFrameId = requestAnimationFrame(updateFrame);
    };
    if (images.length > 0) animationFrameId = requestAnimationFrame(updateFrame);
    return () => cancelAnimationFrame(animationFrameId);
  }, [duration, images.length]);

  return (
    <div
      style={{ "--size": `${size}px` }}
      className={cn(
        "relative flex h-full w-full items-center justify-center rounded-full select-none",
        className
      )}
      {...props}
    >
      <AnimatePresence>
        {images.length > 0 &&
          images.map(
            (image, index) =>
              index === currentIndex && (
                <motion.div
                  key={image.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: [0.8, 1] }}
                  exit={{ opacity: 0, scale: [1, 0.8] }}
                  transition={{ type: "spring", stiffness: 100, damping: 7 }}
                  className={cn(
                    "absolute z-10 rounded-[inherit] border border-gray-100 bg-gradient-to-t from-neutral-100 to-white inset-shadow-sm inset-shadow-black/2 dark:border-zinc-900 dark:from-zinc-900 dark:to-zinc-800 dark:inset-shadow-white/7",
                    className
                  )}
                  style={{ width: size, height: size }}
                >
                  {image.Component ? (
                    <image.Component className="w-full h-full p-4 text-gray-800 dark:text-gray-100" />
                  ) : (
                    <img
                      src={image.url}
                      alt={image.name}
                      className="w-full h-full object-contain rounded-[inherit]"
                    />
                  )}
                </motion.div>
              )
          )}
      </AnimatePresence>
      {children}
    </div>
  );
}

export function OrbitingImage({
  speed = 20,
  radius = 100,
  startAt = 0,
  size = 80,
  className,
  images = [],
  duration = 2,
  ...props
}) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const lastTimestamp = React.useRef(0);

  React.useEffect(() => {
    let animationFrameId;
    const updateFrame = (timestamp) => {
      if (lastTimestamp.current === 0) lastTimestamp.current = timestamp;
      const elapsedTime = (timestamp - lastTimestamp.current) / 1000;
      const idx = Math.floor(elapsedTime / duration) % images.length;
      setCurrentIndex(idx);
      animationFrameId = requestAnimationFrame(updateFrame);
    };
    if (images.length > 0) animationFrameId = requestAnimationFrame(updateFrame);
    return () => cancelAnimationFrame(animationFrameId);
  }, [duration, images.length]);

  return (
    <motion.div
      style={{
        width: size,
        height: size,
        position: "absolute",
        left: "50%",
        top: "50%",
        marginLeft: -size / 2,
        marginTop: -size / 2,
      }}
      animate={{
        transform: [
          `rotate(${startAt * 360}deg) translateY(-${radius}px) rotate(-${startAt * 360}deg)`,
          `rotate(${startAt * 360 + 360}deg) translateY(-${radius}px) rotate(-${startAt * 360 + 360}deg)`,
        ],
      }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      className={cn(
        "absolute z-[5] flex transform-gpu items-center justify-center rounded-full p-[5%]",
        className
      )}
      {...props}
    >
      <AnimatePresence>
        {images.length > 0 &&
          images.map(
            (image, index) =>
              index === currentIndex && (
                <motion.div
                  key={image.name}
                  style={{ width: size, height: size, position: "absolute" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: [0.8, 1] }}
                  exit={{ opacity: 0, scale: [1, 0.8] }}
                  transition={{ type: "spring", stiffness: 100, damping: 7 }}
                  className={cn(
                    "rounded-full border border-gray-100 bg-gradient-to-t from-neutral-100 to-white p-[15%] inset-shadow-sm inset-shadow-black/2 dark:border-zinc-900 dark:from-zinc-900 dark:to-zinc-800 dark:inset-shadow-white/7",
                    className
                  )}
                >
                  {image.Component ? (
                    <image.Component className="w-full h-full text-gray-800 dark:text-gray-100" />
                  ) : (
                    <img
                      src={image.url}
                      alt={image.name}
                      className="flex h-full w-full items-center justify-center rounded-full object-contain"
                    />
                  )}
                </motion.div>
              )
          )}
      </AnimatePresence>
    </motion.div>
  );
}
