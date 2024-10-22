"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Header } from "./Header";
import { NavigationButton } from "./NavigationButoon";
import { Section } from "./Section";

import { projects, sections } from "./PortfolioData";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [showProjectInfo, setShowProjectInfo] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const nextSection = () =>
    setActiveSection((prev) => (prev + 1) % sections.length);
  const prevSection = () =>
    setActiveSection((prev) => (prev - 1 + sections.length) % sections.length);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (e.deltaY > 0) nextSection();
      else if (e.deltaY < 0) prevSection();
    };
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  const backgroundColors = [
    "bg-red-600",
    "bg-blue-600",
    "bg-green-600",
    "bg-purple-600",
  ];

  return (
    <div className='h-screen w-full overflow-hidden bg-black text-white'>
      <Header />

      <AnimatePresence>
        <motion.div
          key={activeSection}
          className={`absolute inset-0 ${backgroundColors[activeSection]}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      <div className='h-full flex items-center'>
        <NavigationButton direction='prev' onClick={prevSection} />

        <div ref={scrollRef} className='flex-1 overflow-x-hidden'>
          <motion.div
            className='flex'
            animate={{ x: `${-activeSection * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {sections.map((section) => (
              <Section
                key={section.id}
                section={section}
                projects={projects}
                showProjectInfo={showProjectInfo}
                setShowProjectInfo={setShowProjectInfo}
              />
            ))}
          </motion.div>
        </div>

        <NavigationButton direction='next' onClick={nextSection} />
      </div>
    </div>
  );
}
