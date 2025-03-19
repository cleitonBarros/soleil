"use client"
import { motion } from "framer-motion";
import {
  Fragment,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export const Marquee = ({ children }: PropsWithChildren) => {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [multiplier, setMultiplier] = useState(1);

  const calculateMultiplier = useCallback(() => {
    if (!containerRef.current || !marqueeRef.current) return;

    const containerReact = containerRef.current.getBoundingClientRect();
    const marqueeReact = marqueeRef.current.getBoundingClientRect();

    const containerWidth = containerReact.width;
    const marqueeWidth = marqueeReact.width;

    if (marqueeWidth < containerWidth) {
      setMultiplier(Math.ceil(containerWidth / marqueeWidth));
    } else {
      setMultiplier(1);
    }
  }, []);

  const multiplyChildren = useCallback(
    (multiplier: number) => {
      const ArraySize = multiplier >= 0 ? multiplier : 0;
      return [...Array(ArraySize)].map((_, i) => (
        <Fragment key={i}>{children}</Fragment>
      ));
    },
    [children],
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    calculateMultiplier();

    if (containerRef.current && marqueeRef.current) {
      const resizeObserver = new ResizeObserver(()=> calculateMultiplier())
      resizeObserver.observe(marqueeRef.current)
      resizeObserver.observe(containerRef.current)
      return () => {
        resizeObserver.disconnect()
      }
    }
  }, [calculateMultiplier, isMounted]);

  const marqueeanimation = {
    x: ["0%", "-100%"],
    transition: { ease: "linear", duration:80, repeat: Infinity },
  };

  if (!isMounted) return null;

  return (
    <div
      className="my-20 flex w-full flex-shrink-0 flex-grow-0 basis-auto overflow-x-hidden bg-stone-950 dark:bg-stone-50  py-4"
      ref={containerRef}
    >
      <motion.div
        className="flex min-w-min flex-shrink-0 flex-grow-0 basis-auto"
        animate={marqueeanimation}
      >
        <div
          ref={marqueeRef}
          className="flex flex-shrink-0 flex-grow-0 basis-auto"
        >
          {children}
        </div>
        {multiplyChildren(multiplier - 1)}
      </motion.div>
      <motion.div
        className="flex min-w-min flex-shrink-0 flex-grow-0 basis-auto"
        animate={marqueeanimation}
      >
        {multiplyChildren(multiplier)}
      </motion.div>
    </div>
  );
};
