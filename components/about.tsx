"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        👋 Hi, I’m <span className="font-medium">Saad Ansari</span>, a <span className="font-medium">React Developer</span> passionate about crafting seamless user experiences and solving complex problems. Currently, I’m an <span className="font-medium">Associate Software Developer</span> at <span className="font-medium">Appstone Pvt Ltd</span>, where I enhanced the PDF generation process for the <span className="font-medium">ImGrows app</span>, reducing load times from an hour to under 2 minutes. 🚀
      </p>

      <p className="mb-3">
        My expertise spans <span className="font-medium">React.js, Next.js, JavaScript, CSS, HTML, Node.js, Express.js, Cube.js,</span> and <span className="font-medium">GraphQL</span>, with hands-on experience in <span className="font-medium">microfrontend</span> and <span className="font-medium">PDF rendering</span>. I hold an <span className="font-medium">Master of Engineering</span> from <span className="font-medium">J.T. Mahajan College of Engineering</span>.
      </p>

      <p>
        Outside work, I enjoy <span className="font-medium">traveling</span>, <span className="font-medium">playing football</span>, and <span className="font-medium">meditation</span>. I’m always excited to connect with like-minded professionals and explore new opportunities. 🌟 Feel free to reach out or check out my work! 🌐
      </p>




    </motion.section>
  );
}
