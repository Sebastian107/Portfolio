"use client";

import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";

const About = () => {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After joining degree in{" "}
        <span className="font-medium">Computer Science</span>, I am following my
        passion for programming.
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core
        technologies are <span className="font-medium">React and Next.js</span>.
        I am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and listening to music with little bit of
        dancing. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
        {/* I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. */}
      </p>
    </motion.section>
  );
};

export default About;
